var rand = {
	float: function() {
    // random number generator
    // Interfaces and usage:
	//	rand.float() - returns random number between 0 and 1
	//	rand.float(max) - returns random number between 0 and max
	//					  where max in a number
	//	rand.float(min, max) - returns random number between min and max
    // NOTE: max will never get generated.
		if(arguments.length === 0) {
            return Math.random();   
		} else if (arguments.length === 1) {
            if (isNaN(arguments[0])) throw "float(): Arg is NaN";
            return Math.random() * arguments[0];   
		} else if (arguments.length === 2) {
            if (isNaN(arguments[0])) throw "float(): Arg 0 is NaN";
            if (isNaN(arguments[1])) throw "float(): Arg 1 is NaN";
            return (Math.random() * (arguments[1] - arguments[0])) + arguments[0];
		} else {
            throw "Arg count mismatch!";   
		}
	},
    int: function() {
    // random integer generator
    // Interfaces and usage:
	//	rand.int() - returns 0 or 1
	//	rand.int(max) - returns random number between 0 and max
	//					  where max in a number
	//	rand.int(min, max) - returns random number between min and max
        if(arguments.length === 0) {
            return Math.round(Math.random());   
		} else if (arguments.length === 1) {
            if (isNaN(arguments[0])) throw "int(): Arg is NaN";
            return Math.round(Math.random() * arguments[0]);   
		} else if (arguments.length === 2) {
            if (isNaN(arguments[0])) throw "int(): Arg 0 is NaN";
            if (isNaN(arguments[1])) throw "int(): Arg 1 is NaN";
            return Math.round((Math.random() * (arguments[1] - arguments[0])) + arguments[0]);
		} else {
            throw "int(): Arg count mismatch!"; 
		}
    },
    fint: function() {
    // random integer generator
    // Interfaces and usage:
	//	rand.fint(max) - returns random number between 0 and max, max excluded.
	//	rand.fint(min, max) - returns random number between min and max, max 
    //                         excluded.
        if(arguments.length === 0 || arguments.length > 2) {
            throw "finteger(): Arg count mismatch!"; 
		} else if (arguments.length === 1) {
            if (isNaN(arguments[0])) throw "finteger(): Arg is NaN";
            return Math.round(Math.random() * arguments[0]);   
		} else if (arguments.length === 2) {
            if (isNaN(arguments[0])) throw "finteger(): Arg 0 is NaN";
            if (isNaN(arguments[1])) throw "finteger(): Arg 1 is NaN";
            return Math.round((Math.random() * (arguments[1] - arguments[0])) + arguments[0]);
		}
    }
};

