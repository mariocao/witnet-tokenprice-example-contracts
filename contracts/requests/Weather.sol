pragma solidity ^0.5.0;

import "witnet-ethereum-bridge/contracts/Request.sol";

// The bytecode of the Weather request that will be sent to Witnet
contract WeatherRequest is Request {
  constructor () Request(hex"0aa5020880dd9f9c06127d125d68747470733a2f2f6f70656e776561746865726d61702e6f72672f646174612f322e352f776561746865723f69643d323935303135392661707069643d62363930376432383965313064373134613665383862333037363166616532321a1c8618451874821861677765617468657218748218616474656d70187212721250687474703a2f2f6170692e61706978752e636f6d2f76312f63757272656e742e6a736f6e3f6b65793d32393762633866396161373834316437613065393532303831383033313026713d4265726c696e1a1e86184518748218616763757272656e7418748218616674656d705f6318721a1a0a1885185483185300381d831853011832831853030282185703220e0a0c831854831853030282185703100018022001280030003800") public { }
}