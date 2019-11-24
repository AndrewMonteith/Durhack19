const data = [
    {
        "where": "DH8 9LD",
        "when": "2019-12-01",
        "who": "Helping You",
        "name": "Horse Riding",
        "desc": "Come and ride some horses and chill out",
        "for": ["Autism", "ADHD", "Aspergers"]
    },
    {
        "where": "DH3 2LY",
        "when": "2019-15-02",
        "who": "Hettie Delvin",
        "name": "Fairground",
        "desc": "Enjoy the bright lights and funfair rides!",
        "for": ["Spina Bifida", "Motor Neurone Disease"]
    },
    {
        "where": "DH3 3JL",
        "when": "2019-23-01",
        "who": "Revitalise",
        "name": "Free Lunch",
        "desc": "Come and have some lunch and meet some people",
        "for": ["Autism", "ADHD", "Aspergers", "Motor Neurone Disease", "Cystic Fibrosis"]
    },
    {
        "where": "DH1 2DB",
        "when": "2019-23-12",
        "who": "Tyler Wheeler",
        "name": "Racing Driver",
        "desc": "Burn some rubber and have some fun!",
        "for": ["Dementia", "Spina Bifida", "Aspergers"]
    },
    {
        "where": "DH6 2HA",
        "when": "2019-18-02",
        "name": "Coffee Morning",
        "who": "Revitalise",
        "desc": "Grab some cakes and have meet some nice people",
        "for": ["Autism", "Dementia", "ADHD", "Aspergers", "Motor Neurone Disease"]
    }
]

const postcodes = require("./postcodes")

for (let ii = 0; ii < data.length; ++ii) {
    postcodes.getLongLat(data[ii].where).then(latlong => { 
        data[ii].latlong = latlong 
    })
}

module.exports = data;