"use strict";

const fs = require("fs");
const postcodes = require("./postcodes");

const users = require("./users");
const meetups = require("./meetups");

// will evaluate to zero at 3
// longer the length, closer to queryLen
const valueForStringMatch = (maxVal, queryLen) => maxVal - 1 / (queryLen / (3 * maxVal));

const distVal = (k, dist) => k / dist;

const rank = (source, ranker) => {
    const ranked = source.map(item => [ranker(item), item]);

    const nonzero_ranked = ranked.filter(item => item[0] > 0);

    const sorted = nonzero_ranked.sort((item1, item2) => (item1[0] < item2[0] ? 1 : -1));

    return sorted.map(item => item[1]);
};

const relevanceToQuery = (user, query) => {
    let total = 0;

    // charities names matter
    if (user.isCharity) {
        if (user.user.includes(query)) {
            total += valueForStringMatch(2, query.length);
        }

        for (const speciality of user.specialities) {
            if (speciality.includes(query)) {
                total += valueForStringMatch(4, query.length);
            }
        }
    } else {
        const now = new Date();

        for (const caree of user.carees) {
            if (caree.disability.includes(query)) {
                total += valueForStringMatch(1, query.length);

                const caringFor = (now - Date.parse(caree.since)) / 31_557_600_000; // milliseconds in a year

                total += valueForStringMatch(1, caringFor);
            }
        }
    }

    return total;
};

const adviceRelevanceForUser = (user, query) => {
    let total = relevanceToQuery(user, query);

    if (user.isCharity) {
        total += 0.25;
    }

    return total;
};

const adviceSearch = (users, query) => {
    /*
        Advise Search will adopt the following stratergy:
            - Rank highly charities who have listed as a speciality ur query
            - Rank users who have any careers with your query
            - Rank charities (good for general advice)
    */

    const willingUsers = users.filter(user => user.isCharity || user.willing.includes("advice"));

    return rank(willingUsers, user => adviceRelevanceForUser(user, query.query));
};

const isCharity = name => {
    for (const user of users) {
        if (user.user === name) {
            return user.isCharity;
        }
    }

    throw `${name} is not a user`;
};

const meetupRelevanceForMeetups = (meetup, query) => {
    let total = 0;

    if (isCharity(meetup.who)) {
        total += 0.3;
    }

    for (const isFor of meetup.for) {
        if (isFor.includes(query)) {
            total += valueForStringMatch(2.5, query.length);
        }
    }

    total += distVal(2, postcodes.distanceBetweenLatLong(query.latlong, meetup.latlong));

    return total;
};

const meetupRelevanceForUser = (user, query) => {
    let total = relevanceToQuery(user, query.query);

    if (total <= 0.2) {
        // Threshold at some amount to stop just including every user
        return 0;
    }

    return total + distVal(1, postcodes.distanceBetweenLatLong(query.latlong, user.latlong));
};

const meetupSearch = (users, meetups, query) => {
    /*
        Meetup search will adopt the following stratergy: 
            - Search meetups based on `for` field and priorities charity made meetups then user made meetups
            - Then lists users who are willing to run meetups priorities more charities
    */

    const willingUsers = users.filter(user => user.willing.includes("meetup"));

    const rankedMeetups = rank(meetups, meetup => meetupRelevanceForMeetups(meetup, query));
    const rankedUsers = rank(willingUsers, user => meetupRelevanceForUser(user, query));

    return [...rankedMeetups, ...rankedUsers];
};

const helpRelevanceForUser = (user, query) => {
    let total = relevanceToQuery(user, query);

    const acceptableDistance = user.isCharity ? 50 : 10;
    const dist = postcodes.distanceBetweenLatLong(user.latlong, query.latlong);

    if (dist > acceptableDistance) {
        return -1;
    }

    total += distVal(1.5, acceptableDistance);

    return total;
};

const helpSearch = (users, query) => {
    /*
    Prefer charities who are specalised to disability
        Help search will adopt the folloing stratergies:
            Then prefer people who are nearby 
                - We are particularly agressive when it comes to distance we would not expect people to travel too far out the way
            Then prefer just general charities
    */

    const willingUsers = users.filter(user => user.willing.includes("help"));

    return rank(willingUsers, user => helpRelevanceForUser(user, query));
};

const search = async query => {
    /* 
        query :=  {
            search: "meetup" | "help" | "advice",

            query: search query in textbox,

            postcode: postcode of the person
        }
    */

    if (query.length < 3) {
        throw "Query length must be at least 3";
    }

    query.latlong = await postcodes.getLongLat(query.postcode);

    if (query.serch === "meetup") {
        return meetupSearch(users, meetups, query);
    } else if (query.search === "help") {
        return helpSearch(users, query);
    } else {
        return adviceSearch(users, query);
    }
};

module.exports.search = search;

// setTimeout(() => {
//     (async function() {
//         const query = { query: "motor", search: "help", postcode: "DH3 2LY" };

//         console.log(await search(query));
//     })();
//     // console.log(helpSearch(users, {query: "motor", latlong: { lat: 54.849287, long: -1.574333 }}))
// }, 400);