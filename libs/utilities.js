var completeWith = function (input, length, replace, left){
	/*
	input <string>: input which must be completed.
	length <integer>: the length in which the input must be completed.
	replace <string>: the string that will complete the input.
	left <boolean>: select if the string must be complete to the left or right. if TRUE, it will be completed to the left.
	*/
	var output = input;
	
	for (i = length - output.toString().length; i<length; i++){
		if (length > output.toString().length){
			if (left){
				output = replace + output;
			}
			else{
				output = output + replace;
			}
		}
	
	
	}
	return output;
}


exports.completeWith = completeWith;
