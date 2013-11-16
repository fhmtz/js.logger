function base64encode(string, trace){
    
    if (trace){
        console.log('[TRACE] encoding ' + string.length + ' bytes...');
    }
    var ret = (new Buffer(string).toString('base64').toString()) 
    return ret;
}

console.log("test");
console.log(new Buffer("test").toString('base64').toString());

console.log("testing");
console.log(base64encode("testing!",true));

 console.log("test");
console.log(base64encode("test",true));



