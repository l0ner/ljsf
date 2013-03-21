var convert = {
	itoa: function(i) {
	// Converts an integer (unicode value) to a char
		if(arguments.length === 0 || arguments.length > 1) throw "itoa(): Arg count mismatch!";
		if (isNaN(arguments[0])) throw "itoa(): Arg is NaN";
		return String.fromCharCode(i);
	},

	atoi: function(a) {
	// Converts a char to it's uncode value
		if(arguments.length === 0 || arguments.length > 1) throw "atoi(): Arg count mismatch!";
		if (isNaN(arguments[0])) throw "atoi(): Arg is NaN";
		return a.charCodeAt();
	},
	
	ith: function(int) {
    // converts integer to hex
    // usage: int2hex(integer);
        if(arguments.length === 0 || arguments.length > 1) throw "int2hex(): Arg count mismatch!";
        return int.toString(16);
    },
	
    itph: function(int, padding) {
    // returns hex value of passed integer, padded with zeroes.
        if(arguments.length === 0 || arguments.length > 2) throw "int2paddedHex(): Arg count mismatch!";
        if (isNaN(int) || isNaN(padding)) throw "int2paddedHex(): Arg is NaN";
        var string = "";
        var val = int.toString(16);
        var zeroes = padding - val.length;
        for(var i = 0; i < zeroes; i++)
            string += "0";
        return string + val.toUpperCase();
    }
};