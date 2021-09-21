const CPPort = require('./index.js')
const ethers = require('ethers')

async function runner(){
	const apiKey = ''
	const cpPort = new CPPort(apiKey)

	const photonAddress = ''
	const ethersProvider = 
	console.log(await cpPort.getCloud(photonAddress))
	console.log(cpPort.searchCloud('trees'))
}

(async ()=>{
	// we've got a runner
	await runner()
})()