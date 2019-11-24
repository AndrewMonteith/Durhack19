const data = [
    {
        "user": "Estio Healthcare",
        "postcode": "DH1 3HL",
        "phoneNumber": "447956265784",
        "isCharity": true,
        "willing": [
            "help"
        ],
        "specialities": [
            "Aspergers",
            "Spina Bifida"
        ]
    },
    {
        "user": "Helping You",
        "postcode": "DH1 3LH",
        "phoneNumber": "0191 303 7746",
        "isCharity": true,
        "willing": [
            "meetup",
            "help"
        ],
        "specialities": [
            "ADHD",
            "Motor Neurone Disease"
        ]
    },
    {
        "user": "Revitalise",
        "postcode": "N1 0QH",
        "phoneNumber": "0303 303 0145",
        "isCharity": true,
        "willing": [
            "meetup",
            "help"
        ],
        "specialities": [
            "Aspergers",
            "Dementia"
        ]
    },
    {
        "user": "Dementia Care",
        "postcode": "NE13 7DS",
        "phoneNumber": "0191 217 1323",
        "isCharity": true,
        "willing": [
            "help"
        ],
        "specialities": [
            "Cystic Fibrosis",
            "Dementia"
        ]
    },

    {
        "user": "Tyler Wheeler",
        "postcode": "DH8 9LD",
        "phoneNumber": "03069 990886",
        "willing": [
            "advice",
            "help",
            "meetup"
        ],
        "carees": [
            {
                "gender": "F",
                "disability": "Spina Bifida",
                "since": "2017-08-06"
            }
        ]
    },
    {
        "user": "Patricia Hicks",
        "postcode": "DH1 4EL",
        "phoneNumber": "03069 990410",
        "willing": [],
        "carees": [
            {
                "gender": "F",
                "disability": "Motor Neurone Disease",
                "since": "2016-08-04"
            }
        ]
    },
    {
        "user": "Mack Turner",
        "postcode": "DH1 4AW",
        "phoneNumber": "03069 990915",
        "willing": [
            "advice"
        ],
        "carees": [
            {
                "gender": "F",
                "disability": "autism",
                "since": "2012-04-06"
            }
        ]
    },
    {
        "user": "Hettie Delvin",
        "postcode": "DH3 2NJ",
        "phoneNumber": "DH4 5PJ",
        "willing": [
            "advice",
            "meetup"
        ],
        "carees": [
            {
                "gender": "F",
                "disability": "Motor Neurone Disease",
                "since": "2010-08-04"
            },
            {
                "gender": "F",
                "disability": "autisim",
                "since": "2010-08-04"
            }
        ]
    },
    {
        "user": "Shana Miranda",
        "postcode": "DH1 5QR",
        "phoneNumber": "03069 990198",
        "willing": [
            "advice",
            "meetup",
            "help"
        ],
        "carees": [
            {
                "gender": "M",
                "disability": "ADHD",
                "since": "2012-05-03"
            }
        ]
    },
    {
        "user": "Jak Cunningham",
        "postcode": "DH1 4BJ",
        "phoneNumber": "07129770877",
        "willing": [
            "help"
        ],
        "carees": [
            {
                "gender": "F",
                "disability": "Autism",
                "since": "2012-05-03"
            }
        ]
    }
]

const postcodes = require("./postcodes")

for (let ii = 0; ii < data.length; ++ii) {
    postcodes.getLongLat(data[ii].postcode).then(latlong => { 
        data[ii].latlong = latlong 
    })
}

module.exports = data;