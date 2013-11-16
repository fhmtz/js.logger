var utilities = require('./utilities.js')

var timeFormatter = function (params){
	/* Created by Fabio Hugo Martinez @ 2013-Nov-10
	 * Class to format Date and Time
	 * params = {
	 *		'date':{'format':'yyyymmdd','separator':'-'},
	 *		'time':{'format':'24h','seconds':true,'millisecond':true}
	 *	}
	 * 
	 */ 
	
	var paramsDate = params.date;
	var paramsTime = params.time;
	var separator = params.separator;

	if (separator == undefined){
		separator = '';
	}

	this.getTimestamp = function(){
			return formatTimestamp(new Date());
	}
	
	formatTimestamp = function(d){
		var df = getDate(d) + separator + getTime(d);

		return (df.toString());
	}
	
	getDate = function(d){
		var ret = '';
		
		if (paramsDate != undefined){
			var date = {};
			
			date.date = utilities.completeWith(d.getDate(),2,'0',true);
			date.month = utilities.completeWith(d.getMonth(),2,'0',true);
			date.year = d.getFullYear();
			
			var format = paramsDate.format.toString();
			
			//Checks for date on the paramsDate.format
			if (format.search('dd') > -1 ){
				format = format.replace('dd',date.date.toString());
			}
			
			if (format.search('mm') > -1){
				format = format.replace('mm',date.month.toString());
			}
			
			if (format.search('yyyy') > -1){
			console.log('replacing year');
				format = format.replace('yyyy', date.year.toString());
			}else if(format.search('yy') > -1){
				console.log('replacing year');
				format = format.replace('yy', date.year.toString().substring(2,4));
			}
			
			ret = format;
		}
		
		return ret;
	};
	
	getTime = function(d){
		var ret = '';

		if ((paramsTime != undefined) && (Object.keys(paramsTime).length >> 0)){
			//Hours
			if ((paramsTime.h24 != undefined) && (paramsTime.h24 == false)){
				ret = utilities.completeWith(convert24hTo12h(d.getHours()),2,'0',true)  ;
			}else{
				ret = utilities.completeWith(d.getHours(),2,'0',true);
			}
			
			//Minutes
			ret = ret + ':' + utilities.completeWith(d.getMinutes(),2,'0',true)
			
			//Seconds
			if ((paramsTime.seconds != undefined) && (paramsTime.seconds == true)){
				ret = ret + ':' + utilities.completeWith(d.getSeconds(),2,'0',true);
			
				//Milliseconds
				if ((paramsTime.milliseconds != undefined) && (paramsTime.milliseconds == true)){
					ret = ret + '.' + utilities.completeWith(d.getMilliseconds(),3,'0',true);
				} 
			}
		}else{
			//Defaults to: HH:MM:ss.mmm
			ret = utilities.completeWith(d.getHours(),2,'0',true) ;
			ret = ret + ':' + utilities.completeWith(d.getMinutes(),2,'0',true);
			ret = ret + ':' + utilities.completeWith(d.getSeconds(),2,'0',true);
			ret = ret + '.' + utilities.completeWith(d.getMilliseconds(),3,'0',true);
		}
		
		return ret;
	};
	
	convert24hTo12h = function(hours){
		var ret = '';
		
		switch (hours){
			case 0:
				ret = 12;
				break;
			case 12:
				ret = 12;
				break;
			default:
				ret = hours-12;
				break;
		}
    	
    	return ret;
	}	
}

exports.timeFormatter = timeFormatter;