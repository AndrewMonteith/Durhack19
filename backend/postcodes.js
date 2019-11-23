// const express = require('express')
const request = require('request')
// const bodyParser = require('body-parser')

// const router = express.Router()
// router.use(bodyParser.json())
// router.use(bodyParser.urlencoded({
//   extended: true
// }))

const getLongLat = async (postcode) => {
    return await Promise(resolve => {
        request.get(`http://api.postcodes.io/postcodes/${postcode}`, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                body = JSON.parse(body)
                resolve({
                    lat: body.result.latitude,
                    long: body.result.longitude
                })
            } else {
                resolve(-1)
            }
        })
    })
}

module.exports.getLongLat = getLongLat

const distanceBetweenLatLong = (lat1, lon1, lat2, lon2) => {
	if (lat1 == lat2 && lon1 == lon2) {
		return 0
	} else {
		const radlat1 = Math.PI * lat1/180
		const radlat2 = Math.PI * lat2/180
		const theta = lon1-lon2
		const radtheta = Math.PI * theta/180
		const dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
		if (dist > 1) {
			dist = 1
		}
		dist = Math.acos(dist)
		dist = dist * 180/Math.PI
		dist = dist * 60 * 1.1515
		dist = dist * 1.609344 
		// if (unit=="N") { dist = dist * 0.8684 } unneeded?
		return dist
	}
}

module.exports.distanceBetweenLatLong = distanceBetweenLatLong


// router.get('/', async (req, res) => {
//     console.log(req.body)
//     aCoords = await getLongLat(req.body.a)
//     bCoords = await getLongLat(req.body.b)
//     dist = distance(aCoords.lat, aCoords.long, bCoords.lat, bCoords.long, 'K')
//     console.log(`dist: ${dist}`)
//     res.json({distance: dist})
// })

// module.exports = router