

var http = require('http');

var options = {
  host: 'google.com',
  port: 80,
  path: '/'
};

var exTime = new Date().getTime();

http.get(options, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
    
    console.log(chunk.toString());
    console.log('response took:' + (new Date().getTime() - exTime).toString() + 'ms');
    console.log(new Buffer(chunk.toString()).toString('base64'));
  });
}).on("error", function(e){r
  console.log("Got error: " + e.message);
});

console.log('execution took:' + (new Date().getTime() - exTime).toString() + 'ms');
base64encode("hello!", true);
console.log('test:' + new Buffer("hello!".toString('base64')));


function base64encode(string, trace){
    if (trace){
        console.log('[TRACE] encoding ' + string.length + ' bytes...');
    }
    return new Buffer(string.toString().toString('base64'));
}


