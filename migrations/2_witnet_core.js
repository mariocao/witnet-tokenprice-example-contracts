// WARNING: DO NOT DELETE THIS FILE
// This file was auto-generated by the Witnet compiler, any manual changes will be overwritten.
const BlockRelay = artifacts.require("BlockRelay")
const WitnetBridgeInterface = artifacts.require("WitnetBridgeInterface")
const CBOR = artifacts.require("CBOR")
const Witnet = artifacts.require("Witnet")

const addresses = {
  "rinkeby": {
    "BlockRelay": "0x88fEF6805ADD0029a919981D6c5579238B008577",
    "CBOR": "0x22091dB676f634E3e1ecAADc3b4f922984fA842b",
    "Witnet": "0xFECE4CAe3fFAABd59F161045f4b93CC9D894EB99",
    "WitnetBridgeInterface": "0xf0C67374D08e72dd7424982F76870AE0D6F2055e",
  },
  "goerli": {
    "BlockRelay": "0xf84dcE5f5fc334a88c2FCbe68bEA04C343a1530c",
    "CBOR": "0xB154e5AF823eEe145B3A7A0301c6D673E9Fa6248",
    "Witnet": "0x820E08993084c6685ee5295470936496607d164A",
    "WitnetBridgeInterface": "0x1053c33f1DcFF9c8F6F6DC07e3F8cb84e46232A1",
  },
}

module.exports = function (deployer, network) {
  if (network in addresses) {
    Witnet.address = addresses[network]["Witnet"]
    WitnetBridgeInterface.address = addresses["rinkeby"]["WitnetBridgeInterface"]
  } else {
    deployer.deploy(BlockRelay).then(() => {
      return deployer.deploy(WitnetBridgeInterface, BlockRelay.address)
    })
    deployer.deploy(CBOR)
    deployer.link(CBOR, Witnet)
    deployer.deploy(Witnet)
  }
}
