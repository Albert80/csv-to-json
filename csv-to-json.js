// csv-to-json.js
// course at edx.org from Microsoft
// Introduction to Node.js
// Module 1 Tutorial Lab Node Web

const csvFileUrl = 'https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+2T2017+type@asset+block/customer-data.csv'
const csv = require('csvtojson')
const fs = require('fs')
//const https = require('https')
const request = require('request')
const path = require('path')

var data = [] // Array to save JSON objects

csv().fromStream(request.get(csvFileUrl))/*.on('csv', (csvRow) => {
	// csvRow is an array 
	//data.push(JSON.stringify(csvRow))  
})*/.on('json', (jsonObj) => {
	//console.log(jsonObj)
	data.push(jsonObj)
}).on('done', (error) => {
	//console.log(error)
	if (error) return process.exit(1)
	console.log(data)
	// Continue writing data on JSON file
	fs.writeFile('customer-data.json', JSON.stringify(data, null, 2), (error) => {
		if (error) return process.exit(1)
		console.log('Process finished')
		process.exit(0)
	})
}).on('error', (error) => {
	console.error(`Got error: ${error.message}`)
})

