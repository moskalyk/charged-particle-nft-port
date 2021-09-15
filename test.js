import CPPort from './index.js'

function runner(){
	const apiKey = ''
	const cpPort = new CPPort(apiKey)

	const photonAddress = ''
	console.log(cpPort.getCloud(photonAddress))
	console.log(cpPort.searchCloud('trees'))
}

// we've got a runner
runner()