function DateJS(a,b,c,d,e,f,g) {
	if(g != undefined) {
		this._date = new Date(a,b,c,d,e,f,g)
	} else if(f != undefined) {
		this._date = new Date(a,b,c,d,e,f)
	} else if(e != undefined) {
		this._date = new Date(a,b,c,d,e)
	} else if(d != undefined) {
		this._date = new Date(a,b,c,d)
	} else if(c != undefined) {
		this._date = new Date(a,b,c)
	} else if(b != undefined) {
		this._date = new Date(a,b)
	} else if(a != undefined) {
		this._date = new Date(a)
	} else {
		this._date = new Date()
	}	
}

var dateMethods = ['toLocaleString','toString','valueOf','getDate','getDay','getFullYear','getHours','getMilliseconds','getMinutes','getMonth','getSeconds'
,'getTime'               ,'getTimezoneOffset'     ,'getUTCDate'            ,'getUTCDay'             ,'getUTCFullYear'        ,'getUTCHours'           ,'getUTCMilliseconds'    ,'getUTCMinutes'
,'getUTCMonth'           ,'getUTCSeconds'         ,'getYear'               ,'setDate'               ,'setFullYear'           ,'setHours'              ,'setMilliseconds'       ,'setMinutes'
,'setMonth'              ,'setSeconds'            ,'setTime'               ,'setUTCDate'            ,'setUTCFullYear'        ,'setUTCHours'           ,'setUTCMilliseconds'    ,'setUTCMinutes'
,'setUTCMonth'           ,'setUTCSeconds'         ,'setYear'               ,'toDateString'          ,'toGMTString'           ,'toISOString'           ,'toJSON'                ,'toLocaleDateString'
,'toLocaleTimeString'    ,'toTimeString'          ,'toUTCString']

dateMethods.every(function(method) {
	DateJS.prototype[method] = function() {
		return this._date[method].apply(this._date, arguments)
	}
	return true;
})


module.exports = DateJS
/*
var DateJS = Date.constructor();

require('util').inherits(DateJS, Date);
*/
/*
var DateJS = require("./index.js")
var d = DateJS.parse("friday")
var d = new DateJS(1)
*/