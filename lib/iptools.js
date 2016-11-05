'use strict';

function iptoLong(ip) {
	var ipl = 0;
	ip.split('.').forEach(function(octet) {ipl <<= 8; ipl += parseInt(octet); });
	return(ipl >>> 0);
};

function fromLong(ipl) {
	return ((ipl >>> 24) + '.' + (ipl >> 16 & 255) + '.' + (ipl >> 8 & 255) + '.' + (ipl & 255) );
};

function inSubNet(ip, subnet) {   
	var mask, base_ip, long_ip = iptoLong(ip);
	if( (mask = subnet.match(/^(.*?)\/(\d{1,2})$/)) && ((base_ip=iptoLong(mask[1])) >= 0) ) {
		var freedom = Math.pow(2, 32 - parseInt(mask[2]));
	return (long_ip > base_ip) && (long_ip < base_ip + freedom - 1);
	} else {
		return false;
	}
};

module.exports.inSubNet=inSubNet;
module.exports.fromLong=fromLong;
module.exports.iptoLong=iptoLong;