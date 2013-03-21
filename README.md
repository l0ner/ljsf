ljsf
====

Loners JavaScript functions
---------------------------

A collection of functions for JavaScript that simplify my life.
All functions are wrapped if objects, which serve to categorize them.

Contents
--------

### ljsf-rand.js
A collection of functions for generating random numbers.
Wrapped in **rand** object.

#### Functions:

**float(): random number generator**

_Usage_:
- `rand.float()` - returns random number between 0 and 1
- `rand.float(max)` - returns random number between 0 and max.
- `rand.float(min, max)` - returns random number between min and max, _max excluded_.
	
**int(): random integer generator**

_Usage_:
- `rand.int()` - returns 0 or 1
- `rand.int(max)` - returns random integer between 0 and max.
- `rand.int(min, max)` - returns random integer between min and max, _max included_.

	
**fint(): random floored integer generator**

_Usage_:
- `rand.int(max)` - returns random integer between 0 and max, _max excluded_.
- `rand.int(min, max)` - returns random integer between min and max, _max excluded_.

### ljsf-convert.js
A collection of converting functions
Wrapped in **convert** object.

#### Functions:

**itoa(): Converts integer to a character. Number is treated as character unicode value.**

_Usage_:
- `convert.itoa(int)` - returs character of int code. For example specifying 75 as int will result in return of 'K' char.

**atoi(): Converts a character to it's unicode value.**

_Usage_:
- `convert.atoi(char)` - returns unicode value of specified character.

**ith(): Converts integer to it's hex value.**

_Usage_:
- `convert.ith(int)` - returns hex value of specified integer.

**itph(): Converts integer to it's hax value, padding it with zeroes.**

_Usage_:
- `convert.itph(int, lenght)` - returns hex value of specified integer, padded with n zeroes. Parameter `lenght` indicates lenght of returned string. <br />
_Example_: `convert.itph(30, 4);` will return `001E`. <br />
**The string will not get trimmed**<br />
_Example_: `convert.itph(300, 1);` will result in `12C`. <br />

TODO:
-----

- Hex to int converter
- int to bin converter
- bin to int converter