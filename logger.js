require('./timeFormatter.js').timeFormatter;

function Logger(params){
    this.defaultLevel = 'info';
    this.level = params.level;
    this.timestamp = new timeFormatter(params.timestamp);

	console.log('testing git sourcetreee');

    //Checking for required parameters
    if (this.level == undefined){
    	console.log('[WARN] No level was defined for Logger, setting to default level: ' + this.defaultLevel + '.');
    	this.level = this.defaultLevel;
    }
    
    this.trace = function(message){
    	ts = this.timestamp.getTimestamp()
        console.log(ts + ' [TRACE] ' + message);
    }
}

logger = new Logger(
	{
		level: 'trace',
		timestamp: {
			/*separator: ' ',
			date:{format:'yyyy/mm/dd'},*/
			time:{h24: true, seconds:true, milliseconds:true}
		}
	}
);

logger.trace('message!!');


