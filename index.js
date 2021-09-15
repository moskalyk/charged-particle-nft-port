import axios from 'axios'

class CPPort extends {

	constructor(apiKey){
		this.apiKey = apiKey
	}

	/*
		@param photonAddress	string 			charged particle photon address 
												that encapsulates covalent bonds using image likeness search
		returns [{photon}] 						distribtuion of metadata value weights in a list
	*/
	getCloud(photonAddress) {
		// e.g.
		const chargedCloudSet = [{
			magic: 0.0
		}]
		// API loop on nft list calls
		// const res = axios(endPoint).params({apiKey: apiKey})
		//	res.results.map((cp) => {
		//	let photon = {}
		// 	photon[cp.key] = cp.value
		// 	chargedCloudSet.push(photon)
		// })
		return chargedCloudSet
	}

	/*
		@param lootQuery 		string			NFTPort query to search the metaverse
		returns [NFTs] 							distribtuion of metadata value weights
	*/
	searchCloud(lootQuery) {

		return []
	}

	/*
		@param latLng			{lat, lng} 		Geocached query of NFT metadata locations
		returns [NFTs] 							distribtuion of metadata value weights based on proximity
	*/
	getGeoCached(latLng) {
		return []
	}
}

export default CPPort;