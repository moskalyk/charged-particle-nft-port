"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const axios = require('axios')
var CPPort = /*#__PURE__*/function () {
  function CPPort(apiKey) {
    _classCallCheck(this, CPPort);

    this.apiKey = apiKey;
  }
  /*
  	@param photonAddress	string 			charged particle photon address 
  											that encapsulates covalent bonds using image likeness search
  	returns [{photon}] 						distribtuion of metadata value weights in a list
  */


  _createClass(CPPort, [{
    key: "getCloud",
    value: function getCloud(photonAddress) {
      // e.g.
      var chargedCloudSet = [{
        magic: 0.0
      }]; // API loop on nft list calls
      // const res = axios(endPoint).params({apiKey: apiKey})
      //	res.results.map((cp) => {
      //	let photon = {}
      // 	photon[cp.key] = cp.value
      // 	chargedCloudSet.push(photon)
      // })

      return chargedCloudSet;
    }
    /*
    	@param lootQuery 		string			NFTPort query to search the metaverse
    	returns [NFTs] 							distribtuion of metadata value weights
    */

  }, {
    key: "searchCloud",
    value: function searchCloud(lootQuery) {
      return [];
    }
    /*
    	@param latLng			{lat, lng} 		Geocached query of NFT metadata locations
    	returns [NFTs] 							distribtuion of metadata value weights based on proximity
    */

  }, {
    key: "getGeoCached",
    value: function getGeoCached(latLng) {
      return [];
    }
  }]);

  return CPPort;
}();

var _default = CPPort; // module.exports = CPPort

exports["default"] = _default;