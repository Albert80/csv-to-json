// csv-to-json.js
// course at edx.org from Microsoft
// Introduction to Node.js
// Module 1 Tutorial Lab Node Web

const csvFileUrl = 'https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+2T2017+type@asset+block/customer-data.csv'
const csv = require('csvtojson')
const request = require('request')

csv()
.fromStream(request.get(csvFileUrl))
.on('csv', (csvRow) => {
	// csvRow is an array
})
.on('done', (error) => {

})