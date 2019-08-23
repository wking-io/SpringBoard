/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/js/process-detail.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/css/process-detail.css":
/*!*******************************************!*\
  !*** ./client/src/css/process-detail.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./client/src/elm/DetailPage.elm":
/*!***************************************!*\
  !*** ./client/src/elm/DetailPage.elm ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


function _Debugger_unsafeCoerce(value)
{
	return value;
}



// PROGRAMS


var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3(elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		elm$browser$Debugger$Main$wrapUpdate(impl.update),
		elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			var currNode = _VirtualDom_virtualize(domNode);
			var currBlocker = elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			var cornerNode = _VirtualDom_doc.createElement('div');
			domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
			var cornerCurr = _VirtualDom_virtualize(cornerNode);

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = A2(_VirtualDom_map, elm$browser$Debugger$Main$UserMsg, view(elm$browser$Debugger$Main$getUserModel(model)));
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;

				// update blocker

				var nextBlocker = elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view corner

				if (!model.popout.b)
				{
					var cornerNext = elm$browser$Debugger$Main$cornerView(model);
					var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
					cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
					cornerCurr = cornerNext;
					currPopout = undefined;
					return;
				}

				// view popout

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3(elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		elm$browser$Debugger$Main$wrapUpdate(impl.update),
		elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var divertHrefToApp = impl.setup && impl.setup(function(x) { return sendToApp(elm$browser$Debugger$Main$UserMsg(x)); });
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			var currBlocker = elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(elm$browser$Debugger$Main$getUserModel(model));
				var nextNode = _VirtualDom_node('body')(_List_Nil)(
					_Utils_ap(
						A2(elm$core$List$map, _VirtualDom_map(elm$browser$Debugger$Main$UserMsg), doc.body),
						_List_Cons(elm$browser$Debugger$Main$cornerView(model), _List_Nil)
					)
				);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);

				// update blocker

				var nextBlocker = elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view popout

				if (!model.popout.b) { currPopout = undefined; return; }

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


function _Debugger_popout()
{
	return {
		b: undefined,
		a: undefined
	};
}

function _Debugger_isOpen(popout)
{
	return !!popout.b;
}

function _Debugger_open(popout)
{
	return _Scheduler_binding(function(callback)
	{
		_Debugger_openWindow(popout);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}

function _Debugger_openWindow(popout)
{
	var w = 900, h = 360, x = screen.width - w, y = screen.height - h;
	var debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	var doc = debuggerWindow.document;
	doc.title = 'Elm Debugger';

	// handle arrow keys
	doc.addEventListener('keydown', function(event) {
		event.metaKey && event.which === 82 && window.location.reload();
		event.which === 38 && (popout.a(elm$browser$Debugger$Main$Up), event.preventDefault());
		event.which === 40 && (popout.a(elm$browser$Debugger$Main$Down), event.preventDefault());
	});

	// handle window close
	window.addEventListener('unload', close);
	debuggerWindow.addEventListener('unload', function() {
		popout.b = undefined;
		popout.a(elm$browser$Debugger$Main$NoOp);
		window.removeEventListener('unload', close);
	});
	function close() {
		popout.b = undefined;
		popout.a(elm$browser$Debugger$Main$NoOp);
		debuggerWindow.close();
	}

	// register new window
	popout.b = doc;
}



// SCROLL


function _Debugger_scroll(popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msgs = popout.b.getElementById('elm-debugger-sidebar');
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}



// UPLOAD


function _Debugger_upload()
{
	return _Scheduler_binding(function(callback)
	{
		var element = document.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_Scheduler_succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			document.body.removeChild(element);
		});
		document.body.appendChild(element);
		element.click();
	});
}



// DOWNLOAD


var _Debugger_download = F2(function(historyLength, json)
{
	return _Scheduler_binding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _Scheduler_succeed(_Utils_Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
});



// POPOUT CONTENT


function _Debugger_messageToString(value)
{
	if (typeof value === 'boolean')
	{
		return value ? 'True' : 'False';
	}

	if (typeof value === 'number')
	{
		return value + '';
	}

	if (typeof value === 'string')
	{
		return '"' + _Debugger_addSlashes(value, false) + '"';
	}

	if (value instanceof String)
	{
		return "'" + _Debugger_addSlashes(value, true) + "'";
	}

	if (typeof value !== 'object' || value === null || !('$' in value))
	{
		return '…';
	}

	if (typeof value.$ === 'number')
	{
		return '…';
	}

	var code = value.$.charCodeAt(0);
	if (code === 0x23 /* # */ || /* a */ 0x61 <= code && code <= 0x7A /* z */)
	{
		return '…';
	}

	if (['Array_elm_builtin', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.$) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.$;
		case 2:
			return value.$ + ' ' + _Debugger_messageToString(value.a);
		default:
			return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
	}
}


function _Debugger_init(value)
{
	if (typeof value === 'boolean')
	{
		return A3(elm$browser$Debugger$Expando$Constructor, elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
	}

	if (typeof value === 'number')
	{
		return elm$browser$Debugger$Expando$Primitive(value + '');
	}

	if (typeof value === 'string')
	{
		return elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
	}

	if (value instanceof String)
	{
		return elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (tag === '::' || tag === '[]')
		{
			return A3(elm$browser$Debugger$Expando$Sequence, elm$browser$Debugger$Expando$ListSeq, true,
				A2(elm$core$List$map, _Debugger_init, value)
			);
		}

		if (tag === 'Set_elm_builtin')
		{
			return A3(elm$browser$Debugger$Expando$Sequence, elm$browser$Debugger$Expando$SetSeq, true,
				A3(elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin')
		{
			return A2(elm$browser$Debugger$Expando$Dictionary, true,
				A3(elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
			);
		}

		if (tag === 'Array_elm_builtin')
		{
			return A3(elm$browser$Debugger$Expando$Sequence, elm$browser$Debugger$Expando$ArraySeq, true,
				A3(elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (typeof tag === 'number')
		{
			return elm$browser$Debugger$Expando$Primitive('<internals>');
		}

		var char = tag.charCodeAt(0);
		if (char === 35 || 65 <= char && char <= 90)
		{
			var list = _List_Nil;
			for (var i in value)
			{
				if (i === '$') continue;
				list = _List_Cons(_Debugger_init(value[i]), list);
			}
			return A3(elm$browser$Debugger$Expando$Constructor, char === 35 ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(tag), true, elm$core$List$reverse(list));
		}

		return elm$browser$Debugger$Expando$Primitive('<internals>');
	}

	if (typeof value === 'object')
	{
		var dict = elm$core$Dict$empty;
		for (var i in value)
		{
			dict = A3(elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
		}
		return A2(elm$browser$Debugger$Expando$Record, true, dict);
	}

	return elm$browser$Debugger$Expando$Primitive('<internals>');
}

var _Debugger_initCons = F2(function initConsHelp(value, list)
{
	return _List_Cons(_Debugger_init(value), list);
});

var _Debugger_initKeyValueCons = F3(function(key, value, list)
{
	return _List_Cons(
		_Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
		list
	);
});

function _Debugger_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}



// BLOCK EVENTS


function _Debugger_updateBlocker(oldBlocker, newBlocker)
{
	if (oldBlocker === newBlocker) return;

	var oldEvents = _Debugger_blockerToEvents(oldBlocker);
	var newEvents = _Debugger_blockerToEvents(newBlocker);

	// remove old blockers
	for (var i = 0; i < oldEvents.length; i++)
	{
		document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
	}

	// add new blockers
	for (var i = 0; i < newEvents.length; i++)
	{
		document.addEventListener(newEvents[i], _Debugger_blocker, true);
	}
}


function _Debugger_blocker(event)
{
	if (event.type === 'keydown' && event.metaKey && event.which === 82)
	{
		return;
	}

	var isScroll = event.type === 'scroll' || event.type === 'wheel';
	for (var node = event.target; node; node = node.parentNode)
	{
		if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay')
		{
			return;
		}
	}

	event.stopPropagation();
	event.preventDefault();
}

function _Debugger_blockerToEvents(blocker)
{
	return blocker === elm$browser$Debugger$Overlay$BlockNone
		? []
		: blocker === elm$browser$Debugger$Overlay$BlockMost
			? _Debugger_mostEvents
			: _Debugger_allEvents;
}

var _Debugger_mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');





// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var author$project$Context$Context = function (url) {
	return {url: url};
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Context$decoder = A2(
	elm$json$Json$Decode$map,
	author$project$Context$Context,
	A2(elm$json$Json$Decode$field, 'url', elm$json$Json$Decode$string));
var author$project$DetailPage$Error = function (a) {
	return {$: 'Error', a: a};
};
var author$project$DetailPage$PageModel = function (a) {
	return {$: 'PageModel', a: a};
};
var author$project$DetailPage$Success = function (a) {
	return {$: 'Success', a: a};
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var elm$json$Json$Decode$decodeValue = _Json_run;
var author$project$DetailPage$init = function (flags) {
	return function (model) {
		return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
	}(
		A2(
			elm$core$Result$withDefault,
			author$project$DetailPage$Error('Failed to parse flags'),
			A2(
				elm$core$Result$map,
				function (context) {
					return author$project$DetailPage$Success(
						author$project$DetailPage$PageModel(context));
				},
				A2(elm$json$Json$Decode$decodeValue, author$project$Context$decoder, flags))));
};
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var author$project$DetailPage$subscriptions = function (model) {
	return elm$core$Platform$Sub$none;
};
var author$project$DetailPage$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'UserClickedCreateProcess':
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 'UserUpdatedTitleField':
				var title = msg.a;
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 'UserUpdatedDescriptionField':
				var description = msg.a;
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 'UserSavedNewProcess':
				var newProcess = msg.a;
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
		}
	});
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$DetailPage$view = function (model) {
	if (model.$ === 'Error') {
		var error = model.a;
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(error)
				]));
	} else {
		var context = model.a.a;
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$h1,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('SpringBoard Process')
						]))
				]));
	}
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$browser$Debugger$Expando$ArraySeq = {$: 'ArraySeq'};
var elm$browser$Debugger$Expando$Constructor = F3(
	function (a, b, c) {
		return {$: 'Constructor', a: a, b: b, c: c};
	});
var elm$browser$Debugger$Expando$Dictionary = F2(
	function (a, b) {
		return {$: 'Dictionary', a: a, b: b};
	});
var elm$browser$Debugger$Expando$ListSeq = {$: 'ListSeq'};
var elm$browser$Debugger$Expando$Primitive = function (a) {
	return {$: 'Primitive', a: a};
};
var elm$browser$Debugger$Expando$Record = F2(
	function (a, b) {
		return {$: 'Record', a: a, b: b};
	});
var elm$browser$Debugger$Expando$S = function (a) {
	return {$: 'S', a: a};
};
var elm$browser$Debugger$Expando$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var elm$browser$Debugger$Expando$SetSeq = {$: 'SetSeq'};
var elm$browser$Debugger$Main$Down = {$: 'Down'};
var elm$browser$Debugger$Main$NoOp = {$: 'NoOp'};
var elm$browser$Debugger$Main$Up = {$: 'Up'};
var elm$browser$Debugger$Main$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var elm$browser$Debugger$History$size = function (history) {
	return history.numMessages;
};
var elm$browser$Debugger$Main$Export = {$: 'Export'};
var elm$browser$Debugger$Main$Import = {$: 'Import'};
var elm$browser$Debugger$Main$Open = {$: 'Open'};
var elm$browser$Debugger$Main$OverlayMsg = function (a) {
	return {$: 'OverlayMsg', a: a};
};
var elm$browser$Debugger$Main$Resume = {$: 'Resume'};
var elm$browser$Debugger$Main$isPaused = function (state) {
	if (state.$ === 'Running') {
		return false;
	} else {
		return true;
	}
};
var elm$browser$Debugger$Overlay$Accept = function (a) {
	return {$: 'Accept', a: a};
};
var elm$browser$Debugger$Overlay$Choose = F2(
	function (a, b) {
		return {$: 'Choose', a: a, b: b};
	});
var elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var elm$html$Html$code = _VirtualDom_node('code');
var elm$browser$Debugger$Overlay$viewCode = function (name) {
	return A2(
		elm$html$Html$code,
		_List_Nil,
		_List_fromArray(
			[
				elm$html$Html$text(name)
			]));
};
var elm$browser$Debugger$Overlay$addCommas = function (items) {
	if (!items.b) {
		return '';
	} else {
		if (!items.b.b) {
			var item = items.a;
			return item;
		} else {
			if (!items.b.b.b) {
				var item1 = items.a;
				var _n1 = items.b;
				var item2 = _n1.a;
				return item1 + (' and ' + item2);
			} else {
				var lastItem = items.a;
				var otherItems = items.b;
				return A2(
					elm$core$String$join,
					', ',
					_Utils_ap(
						otherItems,
						_List_fromArray(
							[' and ' + lastItem])));
			}
		}
	}
};
var elm$browser$Debugger$Overlay$problemToString = function (problem) {
	switch (problem.$) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var elm$html$Html$li = _VirtualDom_node('li');
var elm$browser$Debugger$Overlay$viewProblemType = function (_n0) {
	var name = _n0.name;
	var problems = _n0.problems;
	return A2(
		elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				elm$browser$Debugger$Overlay$viewCode(name),
				elm$html$Html$text(
				' can contain ' + (elm$browser$Debugger$Overlay$addCommas(
					A2(elm$core$List$map, elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
			]));
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$p = _VirtualDom_node('p');
var elm$html$Html$ul = _VirtualDom_node('ul');
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var elm$browser$Debugger$Overlay$viewBadMetadata = function (_n0) {
	var message = _n0.message;
	var problems = _n0.problems;
	return _List_fromArray(
		[
			A2(
			elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('The '),
					elm$browser$Debugger$Overlay$viewCode(message),
					elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
				])),
			A2(
			elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
				])),
			A2(
			elm$html$Html$ul,
			_List_Nil,
			A2(elm$core$List$map, elm$browser$Debugger$Overlay$viewProblemType, problems)),
			A2(
			elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(elm$browser$Debugger$Overlay$goodNews1),
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/union_types.html')
						]),
					_List_fromArray(
						[
							elm$html$Html$text('union types')
						])),
					elm$html$Html$text(', in your messages. From there, your '),
					elm$browser$Debugger$Overlay$viewCode('update'),
					elm$html$Html$text(elm$browser$Debugger$Overlay$goodNews2)
				]))
		]);
};
var elm$browser$Debugger$Overlay$Cancel = {$: 'Cancel'};
var elm$browser$Debugger$Overlay$Proceed = {$: 'Proceed'};
var elm$html$Html$button = _VirtualDom_node('button');
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var elm$browser$Debugger$Overlay$viewButtons = function (buttons) {
	var btn = F2(
		function (msg, string) {
			return A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin-right', '20px'),
						elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						elm$html$Html$text(string)
					]));
		});
	var buttonNodes = function () {
		if (buttons.$ === 'Accept') {
			var proceed = buttons.a;
			return _List_fromArray(
				[
					A2(btn, elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		} else {
			var cancel = buttons.a;
			var proceed = buttons.b;
			return _List_fromArray(
				[
					A2(btn, elm$browser$Debugger$Overlay$Cancel, cancel),
					A2(btn, elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		}
	}();
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'height', '60px'),
				A2(elm$html$Html$Attributes$style, 'line-height', '60px'),
				A2(elm$html$Html$Attributes$style, 'text-align', 'right'),
				A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		buttonNodes);
};
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var elm$browser$Debugger$Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id('elm-debugger-overlay'),
					A2(elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2(elm$html$Html$Attributes$style, 'top', '0'),
					A2(elm$html$Html$Attributes$style, 'left', '0'),
					A2(elm$html$Html$Attributes$style, 'width', '100%'),
					A2(elm$html$Html$Attributes$style, 'height', '100%'),
					A2(elm$html$Html$Attributes$style, 'color', 'white'),
					A2(elm$html$Html$Attributes$style, 'pointer-events', 'none'),
					A2(elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
					A2(elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2(elm$html$Html$Attributes$style, 'width', '600px'),
							A2(elm$html$Html$Attributes$style, 'height', '100%'),
							A2(elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
							A2(elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
							A2(elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2(elm$html$Html$Attributes$style, 'pointer-events', 'auto')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									A2(elm$html$Html$Attributes$style, 'font-size', '36px'),
									A2(elm$html$Html$Attributes$style, 'height', '80px'),
									A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
									A2(elm$html$Html$Attributes$style, 'padding-left', '22px'),
									A2(elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
									A2(elm$html$Html$Attributes$style, 'line-height', '80px')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(title)
								])),
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$id('elm-debugger-details'),
									A2(elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
									A2(elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
									A2(elm$html$Html$Attributes$style, 'max-height', 'calc(100% - 156px)'),
									A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
								]),
							details),
							A2(
							elm$html$Html$map,
							config.wrap,
							elm$browser$Debugger$Overlay$viewButtons(buttons))
						]))
				]));
	});
var elm$html$Html$span = _VirtualDom_node('span');
var elm$browser$Debugger$Overlay$button = F2(
	function (msg, label) {
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(msg),
					A2(elm$html$Html$Attributes$style, 'cursor', 'pointer')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				]));
	});
var elm$browser$Debugger$Overlay$viewImportExport = F3(
	function (props, importMsg, exportMsg) {
		return A2(
			elm$html$Html$div,
			props,
			_List_fromArray(
				[
					A2(elm$browser$Debugger$Overlay$button, importMsg, 'Import'),
					elm$html$Html$text(' / '),
					A2(elm$browser$Debugger$Overlay$button, exportMsg, 'Export')
				]));
	});
var elm$browser$Debugger$Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2(elm$html$Html$Attributes$style, 'bottom', '0'),
					A2(elm$html$Html$Attributes$style, 'right', '6px'),
					A2(elm$html$Html$Attributes$style, 'border-radius', '4px'),
					A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
					A2(elm$html$Html$Attributes$style, 'color', 'white'),
					A2(elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2(elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
					A2(elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'padding', '6px'),
							A2(elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2(elm$html$Html$Attributes$style, 'min-width', '24ch'),
							elm$html$Html$Events$onClick(config.open)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							'Explore History (' + (elm$core$String$fromInt(numMsgs) + ')'))
						])),
					A3(
					elm$browser$Debugger$Overlay$viewImportExport,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'padding', '4px 0'),
							A2(elm$html$Html$Attributes$style, 'font-size', '0.8em'),
							A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
						]),
					config.importHistory,
					config.exportHistory)
				]));
	});
var elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						elm$core$List$cons,
						sep,
						A2(elm$core$List$cons, x, rest));
				});
			var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
			return A2(elm$core$List$cons, hd, spersed);
		}
	});
var elm$browser$Debugger$Overlay$viewMention = F2(
	function (tags, verbed) {
		var _n0 = A2(
			elm$core$List$map,
			elm$browser$Debugger$Overlay$viewCode,
			elm$core$List$reverse(tags));
		if (!_n0.b) {
			return elm$html$Html$text('');
		} else {
			if (!_n0.b.b) {
				var tag = _n0.a;
				return A2(
					elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(verbed),
							tag,
							elm$html$Html$text('.')
						]));
			} else {
				if (!_n0.b.b.b) {
					var tag2 = _n0.a;
					var _n1 = _n0.b;
					var tag1 = _n1.a;
					return A2(
						elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text(verbed),
								tag1,
								elm$html$Html$text(' and '),
								tag2,
								elm$html$Html$text('.')
							]));
				} else {
					var lastTag = _n0.a;
					var otherTags = _n0.b;
					return A2(
						elm$html$Html$li,
						_List_Nil,
						A2(
							elm$core$List$cons,
							elm$html$Html$text(verbed),
							_Utils_ap(
								A2(
									elm$core$List$intersperse,
									elm$html$Html$text(', '),
									elm$core$List$reverse(otherTags)),
								_List_fromArray(
									[
										elm$html$Html$text(', and '),
										lastTag,
										elm$html$Html$text('.')
									]))));
				}
			}
		}
	});
var elm$browser$Debugger$Overlay$viewChange = function (change) {
	return A2(
		elm$html$Html$li,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'margin', '8px 0')
			]),
		function () {
			if (change.$ === 'AliasChange') {
				var name = change.a;
				return _List_fromArray(
					[
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								elm$browser$Debugger$Overlay$viewCode(name)
							]))
					]);
			} else {
				var name = change.a;
				var removed = change.b.removed;
				var changed = change.b.changed;
				var added = change.b.added;
				var argsMatch = change.b.argsMatch;
				return _List_fromArray(
					[
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								elm$browser$Debugger$Overlay$viewCode(name)
							])),
						A2(
						elm$html$Html$ul,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
								A2(elm$html$Html$Attributes$style, 'padding-left', '2em')
							]),
						_List_fromArray(
							[
								A2(elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
								A2(elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
								A2(elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
							])),
						argsMatch ? elm$html$Html$text('') : elm$html$Html$text('This may be due to the fact that the type variable names changed.')
					]);
			}
		}());
};
var elm$browser$Debugger$Overlay$viewReport = F2(
	function (isBad, report) {
		switch (report.$) {
			case 'CorruptHistory':
				return _List_fromArray(
					[
						elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
					]);
			case 'VersionChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
					]);
			case 'MessageChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						elm$html$Html$text('To import some other history, the overall message type must' + ' be the same. The old history has '),
						elm$browser$Debugger$Overlay$viewCode(old),
						elm$html$Html$text(' messages, but the new program works with '),
						elm$browser$Debugger$Overlay$viewCode(_new),
						elm$html$Html$text(' messages.')
					]);
			default:
				var changes = report.a;
				return _List_fromArray(
					[
						A2(
						elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text(
								isBad ? elm$browser$Debugger$Overlay$explanationBad : elm$browser$Debugger$Overlay$explanationRisky)
							])),
						A2(
						elm$html$Html$ul,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'list-style-type', 'none'),
								A2(elm$html$Html$Attributes$style, 'padding-left', '20px')
							]),
						A2(elm$core$List$map, elm$browser$Debugger$Overlay$viewChange, changes))
					]);
		}
	});
var elm$browser$Debugger$Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		switch (state.$) {
			case 'None':
				return isOpen ? elm$html$Html$text('') : (isPaused ? A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'width', '100%'),
							A2(elm$html$Html$Attributes$style, 'height', '100%'),
							A2(elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2(elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
							A2(elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2(elm$html$Html$Attributes$style, 'color', 'white'),
							A2(elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
							A2(elm$html$Html$Attributes$style, 'z-index', '2147483646'),
							elm$html$Html$Events$onClick(config.resume)
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
									A2(elm$html$Html$Attributes$style, 'top', 'calc(50% - 40px)'),
									A2(elm$html$Html$Attributes$style, 'font-size', '80px'),
									A2(elm$html$Html$Attributes$style, 'line-height', '80px'),
									A2(elm$html$Html$Attributes$style, 'height', '80px'),
									A2(elm$html$Html$Attributes$style, 'width', '100%')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Click to Resume')
								])),
							A2(elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
						])) : A2(elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs));
			case 'BadMetadata':
				var badMetadata_ = state.a;
				return A4(
					elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
					elm$browser$Debugger$Overlay$Accept('Ok'));
			case 'BadImport':
				var report = state.a;
				return A4(
					elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2(elm$browser$Debugger$Overlay$viewReport, true, report),
					elm$browser$Debugger$Overlay$Accept('Ok'));
			default:
				var report = state.a;
				return A4(
					elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Warning',
					A2(elm$browser$Debugger$Overlay$viewReport, false, report),
					A2(elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var elm$browser$Debugger$Main$cornerView = function (model) {
	return A5(
		elm$browser$Debugger$Overlay$view,
		{exportHistory: elm$browser$Debugger$Main$Export, importHistory: elm$browser$Debugger$Main$Import, open: elm$browser$Debugger$Main$Open, resume: elm$browser$Debugger$Main$Resume, wrap: elm$browser$Debugger$Main$OverlayMsg},
		elm$browser$Debugger$Main$isPaused(model.state),
		_Debugger_isOpen(model.popout),
		elm$browser$Debugger$History$size(model.history),
		model.overlay);
};
var elm$browser$Debugger$Main$getCurrentModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.b;
		return model;
	}
};
var elm$browser$Debugger$Main$getUserModel = function (model) {
	return elm$browser$Debugger$Main$getCurrentModel(model.state);
};
var elm$browser$Debugger$Expando$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$browser$Debugger$Expando$Index = F3(
	function (a, b, c) {
		return {$: 'Index', a: a, b: b, c: c};
	});
var elm$browser$Debugger$Expando$Key = {$: 'Key'};
var elm$browser$Debugger$Expando$None = {$: 'None'};
var elm$browser$Debugger$Expando$Toggle = {$: 'Toggle'};
var elm$browser$Debugger$Expando$Value = {$: 'Value'};
var elm$browser$Debugger$Expando$blue = A2(elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
var elm$browser$Debugger$Expando$leftPad = function (maybeKey) {
	if (maybeKey.$ === 'Nothing') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'padding-left', '4ch')
			]);
	}
};
var elm$browser$Debugger$Expando$makeArrow = function (arrow) {
	return A2(
		elm$html$Html$span,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'color', '#777'),
				A2(elm$html$Html$Attributes$style, 'padding-left', '2ch'),
				A2(elm$html$Html$Attributes$style, 'width', '2ch'),
				A2(elm$html$Html$Attributes$style, 'display', 'inline-block')
			]),
		_List_fromArray(
			[
				elm$html$Html$text(arrow)
			]));
};
var elm$browser$Debugger$Expando$purple = A2(elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
var elm$browser$Debugger$Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			if (maybeIsClosed.$ === 'Nothing') {
				return elm$browser$Debugger$Expando$makeArrow('');
			} else {
				if (maybeIsClosed.a) {
					return elm$browser$Debugger$Expando$makeArrow('▸');
				} else {
					return elm$browser$Debugger$Expando$makeArrow('▾');
				}
			}
		}();
		if (maybeKey.$ === 'Nothing') {
			return A2(elm$core$List$cons, arrow, description);
		} else {
			var key = maybeKey.a;
			return A2(
				elm$core$List$cons,
				arrow,
				A2(
					elm$core$List$cons,
					A2(
						elm$html$Html$span,
						_List_fromArray(
							[elm$browser$Debugger$Expando$purple]),
						_List_fromArray(
							[
								elm$html$Html$text(key)
							])),
					A2(
						elm$core$List$cons,
						elm$html$Html$text(' = '),
						description)));
		}
	});
var elm$browser$Debugger$Expando$red = A2(elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
var elm$browser$Debugger$Expando$seqTypeToString = F2(
	function (n, seqType) {
		switch (seqType.$) {
			case 'ListSeq':
				return 'List(' + (elm$core$String$fromInt(n) + ')');
			case 'SetSeq':
				return 'Set(' + (elm$core$String$fromInt(n) + ')');
			default:
				return 'Array(' + (elm$core$String$fromInt(n) + ')');
		}
	});
var elm$core$String$slice = _String_slice;
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$length = _String_length;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			elm$core$String$slice,
			-n,
			elm$core$String$length(string),
			string);
	});
var elm$browser$Debugger$Expando$elideMiddle = function (str) {
	return (elm$core$String$length(str) <= 18) ? str : (A2(elm$core$String$left, 8, str) + ('...' + A2(elm$core$String$right, 8, str)));
};
var elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 1,
				_List_fromArray(
					[
						elm$html$Html$text('}')
					]));
		} else {
			var field = entries.a;
			var rest = entries.b;
			var nextLength = (length + elm$core$String$length(field)) + 1;
			if (nextLength > 18) {
				return _Utils_Tuple2(
					length + 2,
					_List_fromArray(
						[
							elm$html$Html$text('…}')
						]));
			} else {
				var _n1 = A3(elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
				var finalLength = _n1.a;
				var otherHtmls = _n1.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						elm$core$List$cons,
						elm$html$Html$text(starter),
						A2(
							elm$core$List$cons,
							A2(
								elm$html$Html$span,
								_List_fromArray(
									[elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										elm$html$Html$text(field)
									])),
							otherHtmls)));
			}
		}
	});
var elm$browser$Debugger$Expando$viewTinyHelp = function (str) {
	return _Utils_Tuple2(
		elm$core$String$length(str),
		_List_fromArray(
			[
				elm$html$Html$text(str)
			]));
};
var elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$browser$Debugger$Expando$viewExtraTiny = function (value) {
	if (value.$ === 'Record') {
		var record = value.b;
		return A3(
			elm$browser$Debugger$Expando$viewExtraTinyRecord,
			0,
			'{',
			elm$core$Dict$keys(record));
	} else {
		return elm$browser$Debugger$Expando$viewTiny(value);
	}
};
var elm$browser$Debugger$Expando$viewTiny = function (value) {
	switch (value.$) {
		case 'S':
			var stringRep = value.a;
			var str = elm$browser$Debugger$Expando$elideMiddle(stringRep);
			return _Utils_Tuple2(
				elm$core$String$length(str),
				_List_fromArray(
					[
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[elm$browser$Debugger$Expando$red]),
						_List_fromArray(
							[
								elm$html$Html$text(str)
							]))
					]));
		case 'Primitive':
			var stringRep = value.a;
			return _Utils_Tuple2(
				elm$core$String$length(stringRep),
				_List_fromArray(
					[
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[elm$browser$Debugger$Expando$blue]),
						_List_fromArray(
							[
								elm$html$Html$text(stringRep)
							]))
					]));
		case 'Sequence':
			var seqType = value.a;
			var valueList = value.c;
			return elm$browser$Debugger$Expando$viewTinyHelp(
				A2(
					elm$browser$Debugger$Expando$seqTypeToString,
					elm$core$List$length(valueList),
					seqType));
		case 'Dictionary':
			var keyValuePairs = value.b;
			return elm$browser$Debugger$Expando$viewTinyHelp(
				'Dict(' + (elm$core$String$fromInt(
					elm$core$List$length(keyValuePairs)) + ')'));
		case 'Record':
			var record = value.b;
			return elm$browser$Debugger$Expando$viewTinyRecord(record);
		default:
			if (!value.c.b) {
				var maybeName = value.a;
				return elm$browser$Debugger$Expando$viewTinyHelp(
					A2(elm$core$Maybe$withDefault, 'Unit', maybeName));
			} else {
				var maybeName = value.a;
				var valueList = value.c;
				return elm$browser$Debugger$Expando$viewTinyHelp(
					function () {
						if (maybeName.$ === 'Nothing') {
							return 'Tuple(' + (elm$core$String$fromInt(
								elm$core$List$length(valueList)) + ')');
						} else {
							var name = maybeName.a;
							return name + ' …';
						}
					}());
			}
	}
};
var elm$browser$Debugger$Expando$viewTinyRecord = function (record) {
	return elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
		2,
		_List_fromArray(
			[
				elm$html$Html$text('{}')
			])) : A3(
		elm$browser$Debugger$Expando$viewTinyRecordHelp,
		0,
		'{ ',
		elm$core$Dict$toList(record));
};
var elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 2,
				_List_fromArray(
					[
						elm$html$Html$text(' }')
					]));
		} else {
			var _n1 = entries.a;
			var field = _n1.a;
			var value = _n1.b;
			var rest = entries.b;
			var fieldLen = elm$core$String$length(field);
			var _n2 = elm$browser$Debugger$Expando$viewExtraTiny(value);
			var valueLen = _n2.a;
			var valueHtmls = _n2.b;
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (newLength > 60) {
				return _Utils_Tuple2(
					length + 4,
					_List_fromArray(
						[
							elm$html$Html$text(', … }')
						]));
			} else {
				var _n3 = A3(elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
				var finalLength = _n3.a;
				var otherHtmls = _n3.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						elm$core$List$cons,
						elm$html$Html$text(starter),
						A2(
							elm$core$List$cons,
							A2(
								elm$html$Html$span,
								_List_fromArray(
									[elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										elm$html$Html$text(field)
									])),
							A2(
								elm$core$List$cons,
								elm$html$Html$text(' = '),
								A2(
									elm$core$List$cons,
									A2(elm$html$Html$span, _List_Nil, valueHtmls),
									otherHtmls)))));
			}
		}
	});
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$browser$Debugger$Expando$view = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return A2(
					elm$html$Html$div,
					elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								elm$html$Html$span,
								_List_fromArray(
									[elm$browser$Debugger$Expando$red]),
								_List_fromArray(
									[
										elm$html$Html$text(stringRep)
									]))
							])));
			case 'Primitive':
				var stringRep = expando.a;
				return A2(
					elm$html$Html$div,
					elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								elm$html$Html$span,
								_List_fromArray(
									[elm$browser$Debugger$Expando$blue]),
								_List_fromArray(
									[
										elm$html$Html$text(stringRep)
									]))
							])));
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4(elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return A3(elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return A3(elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4(elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
		}
	});
var elm$browser$Debugger$Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var tinyArgs = A2(
			elm$core$List$map,
			A2(elm$core$Basics$composeL, elm$core$Tuple$second, elm$browser$Debugger$Expando$viewExtraTiny),
			valueList);
		var description = function () {
			var _n7 = _Utils_Tuple2(maybeName, tinyArgs);
			if (_n7.a.$ === 'Nothing') {
				if (!_n7.b.b) {
					var _n8 = _n7.a;
					return _List_fromArray(
						[
							elm$html$Html$text('()')
						]);
				} else {
					var _n9 = _n7.a;
					var _n10 = _n7.b;
					var x = _n10.a;
					var xs = _n10.b;
					return A2(
						elm$core$List$cons,
						elm$html$Html$text('( '),
						A2(
							elm$core$List$cons,
							A2(elm$html$Html$span, _List_Nil, x),
							A3(
								elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											elm$core$List$cons,
											elm$html$Html$text(', '),
											A2(
												elm$core$List$cons,
												A2(elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_fromArray(
									[
										elm$html$Html$text(' )')
									]),
								xs)));
				}
			} else {
				if (!_n7.b.b) {
					var name = _n7.a.a;
					return _List_fromArray(
						[
							elm$html$Html$text(name)
						]);
				} else {
					var name = _n7.a.a;
					var _n11 = _n7.b;
					var x = _n11.a;
					var xs = _n11.b;
					return A2(
						elm$core$List$cons,
						elm$html$Html$text(name + ' '),
						A2(
							elm$core$List$cons,
							A2(elm$html$Html$span, _List_Nil, x),
							A3(
								elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											elm$core$List$cons,
											elm$html$Html$text(' '),
											A2(
												elm$core$List$cons,
												A2(elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_Nil,
								xs)));
				}
			}
		}();
		var _n4 = function () {
			if (!valueList.b) {
				return _Utils_Tuple2(
					elm$core$Maybe$Nothing,
					A2(elm$html$Html$div, _List_Nil, _List_Nil));
			} else {
				if (!valueList.b.b) {
					var entry = valueList.a;
					switch (entry.$) {
						case 'S':
							return _Utils_Tuple2(
								elm$core$Maybe$Nothing,
								A2(elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Primitive':
							return _Utils_Tuple2(
								elm$core$Maybe$Nothing,
								A2(elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Sequence':
							var subValueList = entry.c;
							return _Utils_Tuple2(
								elm$core$Maybe$Just(isClosed),
								isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									elm$html$Html$map,
									A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, 0),
									elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
						case 'Dictionary':
							var keyValuePairs = entry.b;
							return _Utils_Tuple2(
								elm$core$Maybe$Just(isClosed),
								isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									elm$html$Html$map,
									A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, 0),
									elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
						case 'Record':
							var record = entry.b;
							return _Utils_Tuple2(
								elm$core$Maybe$Just(isClosed),
								isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									elm$html$Html$map,
									A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, 0),
									elm$browser$Debugger$Expando$viewRecordOpen(record)));
						default:
							var subValueList = entry.c;
							return _Utils_Tuple2(
								elm$core$Maybe$Just(isClosed),
								isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									elm$html$Html$map,
									A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, 0),
									elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
					}
				} else {
					return _Utils_Tuple2(
						elm$core$Maybe$Just(isClosed),
						isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
				}
			}
		}();
		var maybeIsClosed = _n4.a;
		var openHtml = _n4.b;
		return A2(
			elm$html$Html$div,
			elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
						]),
					A3(elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					openHtml
				]));
	});
var elm$browser$Debugger$Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			elm$html$Html$map,
			A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, index),
			A2(
				elm$browser$Debugger$Expando$view,
				elm$core$Maybe$Just(
					elm$core$String$fromInt(index)),
				value));
	});
var elm$browser$Debugger$Expando$viewConstructorOpen = function (valueList) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(elm$core$List$indexedMap, elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
};
var elm$browser$Debugger$Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = 'Dict(' + (elm$core$String$fromInt(
			elm$core$List$length(keyValuePairs)) + ')');
		return A2(
			elm$html$Html$div,
			elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								elm$html$Html$text(starter)
							]))),
					isClosed ? elm$html$Html$text('') : elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
				]));
	});
var elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
	function (index, _n2) {
		var key = _n2.a;
		var value = _n2.b;
		switch (key.$) {
			case 'S':
				var stringRep = key.a;
				return A2(
					elm$html$Html$map,
					A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$Value, index),
					A2(
						elm$browser$Debugger$Expando$view,
						elm$core$Maybe$Just(stringRep),
						value));
			case 'Primitive':
				var stringRep = key.a;
				return A2(
					elm$html$Html$map,
					A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$Value, index),
					A2(
						elm$browser$Debugger$Expando$view,
						elm$core$Maybe$Just(stringRep),
						value));
			default:
				return A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$map,
							A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$Key, index),
							A2(
								elm$browser$Debugger$Expando$view,
								elm$core$Maybe$Just('key'),
								key)),
							A2(
							elm$html$Html$map,
							A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$Value, index),
							A2(
								elm$browser$Debugger$Expando$view,
								elm$core$Maybe$Just('value'),
								value))
						]));
		}
	});
var elm$browser$Debugger$Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(elm$core$List$indexedMap, elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
};
var elm$browser$Debugger$Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _n1 = isClosed ? _Utils_Tuple3(
			elm$browser$Debugger$Expando$viewTinyRecord(record).b,
			elm$html$Html$text(''),
			elm$html$Html$text('')) : _Utils_Tuple3(
			_List_fromArray(
				[
					elm$html$Html$text('{')
				]),
			elm$browser$Debugger$Expando$viewRecordOpen(record),
			A2(
				elm$html$Html$div,
				elm$browser$Debugger$Expando$leftPad(
					elm$core$Maybe$Just(_Utils_Tuple0)),
				_List_fromArray(
					[
						elm$html$Html$text('}')
					])));
		var start = _n1.a;
		var middle = _n1.b;
		var end = _n1.c;
		return A2(
			elm$html$Html$div,
			elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Just(isClosed),
						start)),
					middle,
					end
				]));
	});
var elm$browser$Debugger$Expando$viewRecordEntry = function (_n0) {
	var field = _n0.a;
	var value = _n0.b;
	return A2(
		elm$html$Html$map,
		elm$browser$Debugger$Expando$Field(field),
		A2(
			elm$browser$Debugger$Expando$view,
			elm$core$Maybe$Just(field),
			value));
};
var elm$browser$Debugger$Expando$viewRecordOpen = function (record) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(
			elm$core$List$map,
			elm$browser$Debugger$Expando$viewRecordEntry,
			elm$core$Dict$toList(record)));
};
var elm$browser$Debugger$Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			elm$browser$Debugger$Expando$seqTypeToString,
			elm$core$List$length(valueList),
			seqType);
		return A2(
			elm$html$Html$div,
			elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								elm$html$Html$text(starter)
							]))),
					isClosed ? elm$html$Html$text('') : elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
				]));
	});
var elm$browser$Debugger$Expando$viewSequenceOpen = function (values) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(elm$core$List$indexedMap, elm$browser$Debugger$Expando$viewConstructorEntry, values));
};
var elm$browser$Debugger$Main$ExpandoMsg = function (a) {
	return {$: 'ExpandoMsg', a: a};
};
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$html$Html$Attributes$title = elm$html$Html$Attributes$stringProperty('title');
var elm$browser$Debugger$History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _Debugger_messageToString(msg);
		var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(className),
					elm$html$Html$Events$onClick(index)
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$title(messageName),
							elm$html$Html$Attributes$class('elm-debugger-entry-content')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(messageName)
						])),
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('elm-debugger-entry-index')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							elm$core$String$fromInt(index))
						]))
				]));
	});
var elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var elm$html$Html$Lazy$lazy3 = elm$virtual_dom$VirtualDom$lazy3;
var elm$browser$Debugger$History$consMsg = F3(
	function (currentIndex, msg, _n0) {
		var index = _n0.a;
		var rest = _n0.b;
		return _Utils_Tuple2(
			index - 1,
			A2(
				elm$core$List$cons,
				A4(elm$html$Html$Lazy$lazy3, elm$browser$Debugger$History$viewMessage, currentIndex, index, msg),
				rest));
	});
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var elm$browser$Debugger$History$styles = A3(
	elm$html$Html$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 7ch);\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
		]));
var elm$browser$Debugger$History$maxSnapshotSize = 64;
var elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var elm$core$Array$foldl = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldl,
			func,
			A3(elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var elm$browser$Debugger$History$viewSnapshot = F3(
	function (currentIndex, index, _n0) {
		var messages = _n0.messages;
		return A2(
			elm$html$Html$div,
			_List_Nil,
			A3(
				elm$core$Array$foldl,
				elm$browser$Debugger$History$consMsg(currentIndex),
				_Utils_Tuple2(index - 1, _List_Nil),
				messages).b);
	});
var elm$browser$Debugger$History$consSnapshot = F3(
	function (currentIndex, snapshot, _n0) {
		var index = _n0.a;
		var rest = _n0.b;
		var nextIndex = index - elm$browser$Debugger$History$maxSnapshotSize;
		var currentIndexHelp = ((_Utils_cmp(nextIndex, currentIndex) < 1) && (_Utils_cmp(currentIndex, index) < 0)) ? currentIndex : (-1);
		return _Utils_Tuple2(
			index - elm$browser$Debugger$History$maxSnapshotSize,
			A2(
				elm$core$List$cons,
				A4(elm$html$Html$Lazy$lazy3, elm$browser$Debugger$History$viewSnapshot, currentIndexHelp, index, snapshot),
				rest));
	});
var elm$core$Array$length = function (_n0) {
	var len = _n0.a;
	return len;
};
var elm$browser$Debugger$History$viewSnapshots = F2(
	function (currentIndex, snapshots) {
		var highIndex = elm$browser$Debugger$History$maxSnapshotSize * elm$core$Array$length(snapshots);
		return A2(
			elm$html$Html$div,
			_List_Nil,
			A3(
				elm$core$Array$foldr,
				elm$browser$Debugger$History$consSnapshot(currentIndex),
				_Utils_Tuple2(highIndex, _List_Nil),
				snapshots).b);
	});
var elm$virtual_dom$VirtualDom$lazy2 = _VirtualDom_lazy2;
var elm$html$Html$Lazy$lazy2 = elm$virtual_dom$VirtualDom$lazy2;
var elm$browser$Debugger$History$view = F2(
	function (maybeIndex, _n0) {
		var snapshots = _n0.snapshots;
		var recent = _n0.recent;
		var numMessages = _n0.numMessages;
		var _n1 = function () {
			if (maybeIndex.$ === 'Nothing') {
				return _Utils_Tuple2(-1, 'calc(100% - 24px)');
			} else {
				var i = maybeIndex.a;
				return _Utils_Tuple2(i, 'calc(100% - 54px)');
			}
		}();
		var index = _n1.a;
		var height = _n1.b;
		var newStuff = A3(
			elm$core$List$foldl,
			elm$browser$Debugger$History$consMsg(index),
			_Utils_Tuple2(numMessages - 1, _List_Nil),
			recent.messages).b;
		var oldStuff = A3(elm$html$Html$Lazy$lazy2, elm$browser$Debugger$History$viewSnapshots, index, snapshots);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id('elm-debugger-sidebar'),
					A2(elm$html$Html$Attributes$style, 'width', '100%'),
					A2(elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
					A2(elm$html$Html$Attributes$style, 'height', height)
				]),
			A2(
				elm$core$List$cons,
				elm$browser$Debugger$History$styles,
				A2(elm$core$List$cons, oldStuff, newStuff)));
	});
var elm$browser$Debugger$Main$Jump = function (a) {
	return {$: 'Jump', a: a};
};
var elm$browser$Debugger$Main$resumeStyle = '\n\n.elm-debugger-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.elm-debugger-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n';
var elm$browser$Debugger$Main$viewResumeButton = function (maybeIndex) {
	if (maybeIndex.$ === 'Nothing') {
		return elm$html$Html$text('');
	} else {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(elm$browser$Debugger$Main$Resume),
					elm$html$Html$Attributes$class('elm-debugger-resume')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('Resume'),
					A3(
					elm$html$Html$node,
					'style',
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(elm$browser$Debugger$Main$resumeStyle)
						]))
				]));
	}
};
var elm$browser$Debugger$Main$viewTextButton = F2(
	function (msg, label) {
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(msg),
					A2(elm$html$Html$Attributes$style, 'cursor', 'pointer')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				]));
	});
var elm$browser$Debugger$Main$playButton = function (maybeIndex) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'width', '100%'),
				A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
				A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		_List_fromArray(
			[
				elm$browser$Debugger$Main$viewResumeButton(maybeIndex),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'width', '100%'),
						A2(elm$html$Html$Attributes$style, 'height', '24px'),
						A2(elm$html$Html$Attributes$style, 'line-height', '24px'),
						A2(elm$html$Html$Attributes$style, 'font-size', '12px')
					]),
				_List_fromArray(
					[
						A2(elm$browser$Debugger$Main$viewTextButton, elm$browser$Debugger$Main$Import, 'Import'),
						elm$html$Html$text(' / '),
						A2(elm$browser$Debugger$Main$viewTextButton, elm$browser$Debugger$Main$Export, 'Export')
					]))
			]));
};
var elm$browser$Debugger$Main$viewSidebar = F2(
	function (state, history) {
		var maybeIndex = function () {
			if (state.$ === 'Running') {
				return elm$core$Maybe$Nothing;
			} else {
				var index = state.a;
				return elm$core$Maybe$Just(index);
			}
		}();
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'display', 'block'),
					A2(elm$html$Html$Attributes$style, 'float', 'left'),
					A2(elm$html$Html$Attributes$style, 'width', '30ch'),
					A2(elm$html$Html$Attributes$style, 'height', '100%'),
					A2(elm$html$Html$Attributes$style, 'color', 'white'),
					A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$map,
					elm$browser$Debugger$Main$Jump,
					A2(elm$browser$Debugger$History$view, maybeIndex, history)),
					elm$browser$Debugger$Main$playButton(maybeIndex)
				]));
	});
var elm$browser$Debugger$Main$popoutView = function (_n0) {
	var history = _n0.history;
	var state = _n0.state;
	var expando = _n0.expando;
	return A3(
		elm$html$Html$node,
		'body',
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'margin', '0'),
				A2(elm$html$Html$Attributes$style, 'padding', '0'),
				A2(elm$html$Html$Attributes$style, 'width', '100%'),
				A2(elm$html$Html$Attributes$style, 'height', '100%'),
				A2(elm$html$Html$Attributes$style, 'font-family', 'monospace'),
				A2(elm$html$Html$Attributes$style, 'overflow', 'auto')
			]),
		_List_fromArray(
			[
				A2(elm$browser$Debugger$Main$viewSidebar, state, history),
				A2(
				elm$html$Html$map,
				elm$browser$Debugger$Main$ExpandoMsg,
				A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'display', 'block'),
							A2(elm$html$Html$Attributes$style, 'float', 'left'),
							A2(elm$html$Html$Attributes$style, 'height', '100%'),
							A2(elm$html$Html$Attributes$style, 'width', 'calc(100% - 30ch)'),
							A2(elm$html$Html$Attributes$style, 'margin', '0'),
							A2(elm$html$Html$Attributes$style, 'overflow', 'auto'),
							A2(elm$html$Html$Attributes$style, 'cursor', 'default')
						]),
					_List_fromArray(
						[
							A2(elm$browser$Debugger$Expando$view, elm$core$Maybe$Nothing, expando)
						])))
			]));
};
var elm$browser$Debugger$Overlay$BlockAll = {$: 'BlockAll'};
var elm$browser$Debugger$Overlay$BlockMost = {$: 'BlockMost'};
var elm$browser$Debugger$Overlay$BlockNone = {$: 'BlockNone'};
var elm$browser$Debugger$Overlay$toBlockerType = F2(
	function (isPaused, state) {
		switch (state.$) {
			case 'None':
				return isPaused ? elm$browser$Debugger$Overlay$BlockAll : elm$browser$Debugger$Overlay$BlockNone;
			case 'BadMetadata':
				return elm$browser$Debugger$Overlay$BlockMost;
			case 'BadImport':
				return elm$browser$Debugger$Overlay$BlockMost;
			default:
				return elm$browser$Debugger$Overlay$BlockMost;
		}
	});
var elm$browser$Debugger$Main$toBlockerType = function (model) {
	return A2(
		elm$browser$Debugger$Overlay$toBlockerType,
		elm$browser$Debugger$Main$isPaused(model.state),
		model.overlay);
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2(elm$core$Dict$map, func, left),
				A2(elm$core$Dict$map, func, right));
		}
	});
var elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2(elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var elm$core$Dict$size = function (dict) {
	return A2(elm$core$Dict$sizeHelp, 0, dict);
};
var elm$browser$Debugger$Expando$initHelp = F2(
	function (isOuter, expando) {
		switch (expando.$) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var items = expando.c;
				return isOuter ? A3(
					elm$browser$Debugger$Expando$Sequence,
					seqType,
					false,
					A2(
						elm$core$List$map,
						elm$browser$Debugger$Expando$initHelp(false),
						items)) : ((elm$core$List$length(items) <= 8) ? A3(elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isOuter ? A2(
					elm$browser$Debugger$Expando$Dictionary,
					false,
					A2(
						elm$core$List$map,
						function (_n1) {
							var k = _n1.a;
							var v = _n1.b;
							return _Utils_Tuple2(
								k,
								A2(elm$browser$Debugger$Expando$initHelp, false, v));
						},
						keyValuePairs)) : ((elm$core$List$length(keyValuePairs) <= 8) ? A2(elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando);
			case 'Record':
				var isClosed = expando.a;
				var entries = expando.b;
				return isOuter ? A2(
					elm$browser$Debugger$Expando$Record,
					false,
					A2(
						elm$core$Dict$map,
						F2(
							function (_n2, v) {
								return A2(elm$browser$Debugger$Expando$initHelp, false, v);
							}),
						entries)) : ((elm$core$Dict$size(entries) <= 4) ? A2(elm$browser$Debugger$Expando$Record, false, entries) : expando);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var args = expando.c;
				return isOuter ? A3(
					elm$browser$Debugger$Expando$Constructor,
					maybeName,
					false,
					A2(
						elm$core$List$map,
						elm$browser$Debugger$Expando$initHelp(false),
						args)) : ((elm$core$List$length(args) <= 4) ? A3(elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando);
		}
	});
var elm$browser$Debugger$Expando$init = function (value) {
	return A2(
		elm$browser$Debugger$Expando$initHelp,
		true,
		_Debugger_init(value));
};
var elm$browser$Debugger$History$History = F3(
	function (snapshots, recent, numMessages) {
		return {numMessages: numMessages, recent: recent, snapshots: snapshots};
	});
var elm$browser$Debugger$History$RecentHistory = F3(
	function (model, messages, numMessages) {
		return {messages: messages, model: model, numMessages: numMessages};
	});
var elm$browser$Debugger$History$empty = function (model) {
	return A3(
		elm$browser$Debugger$History$History,
		elm$core$Array$empty,
		A3(elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
		0);
};
var elm$browser$Debugger$Main$Running = function (a) {
	return {$: 'Running', a: a};
};
var elm$browser$Debugger$Metadata$Error = F2(
	function (message, problems) {
		return {message: message, problems: problems};
	});
var elm$browser$Debugger$Metadata$Metadata = F2(
	function (versions, types) {
		return {types: types, versions: versions};
	});
var elm$browser$Debugger$Metadata$Types = F3(
	function (message, aliases, unions) {
		return {aliases: aliases, message: message, unions: unions};
	});
var elm$browser$Debugger$Metadata$Alias = F2(
	function (args, tipe) {
		return {args: args, tipe: tipe};
	});
var elm$json$Json$Decode$list = _Json_decodeList;
var elm$browser$Debugger$Metadata$decodeAlias = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Debugger$Metadata$Alias,
	A2(
		elm$json$Json$Decode$field,
		'args',
		elm$json$Json$Decode$list(elm$json$Json$Decode$string)),
	A2(elm$json$Json$Decode$field, 'type', elm$json$Json$Decode$string));
var elm$browser$Debugger$Metadata$Union = F2(
	function (args, tags) {
		return {args: args, tags: tags};
	});
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		elm$json$Json$Decode$map,
		elm$core$Dict$fromList,
		elm$json$Json$Decode$keyValuePairs(decoder));
};
var elm$browser$Debugger$Metadata$decodeUnion = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Debugger$Metadata$Union,
	A2(
		elm$json$Json$Decode$field,
		'args',
		elm$json$Json$Decode$list(elm$json$Json$Decode$string)),
	A2(
		elm$json$Json$Decode$field,
		'tags',
		elm$json$Json$Decode$dict(
			elm$json$Json$Decode$list(elm$json$Json$Decode$string))));
var elm$json$Json$Decode$map3 = _Json_map3;
var elm$browser$Debugger$Metadata$decodeTypes = A4(
	elm$json$Json$Decode$map3,
	elm$browser$Debugger$Metadata$Types,
	A2(elm$json$Json$Decode$field, 'message', elm$json$Json$Decode$string),
	A2(
		elm$json$Json$Decode$field,
		'aliases',
		elm$json$Json$Decode$dict(elm$browser$Debugger$Metadata$decodeAlias)),
	A2(
		elm$json$Json$Decode$field,
		'unions',
		elm$json$Json$Decode$dict(elm$browser$Debugger$Metadata$decodeUnion)));
var elm$browser$Debugger$Metadata$Versions = function (elm) {
	return {elm: elm};
};
var elm$browser$Debugger$Metadata$decodeVersions = A2(
	elm$json$Json$Decode$map,
	elm$browser$Debugger$Metadata$Versions,
	A2(elm$json$Json$Decode$field, 'elm', elm$json$Json$Decode$string));
var elm$browser$Debugger$Metadata$decoder = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Debugger$Metadata$Metadata,
	A2(elm$json$Json$Decode$field, 'versions', elm$browser$Debugger$Metadata$decodeVersions),
	A2(elm$json$Json$Decode$field, 'types', elm$browser$Debugger$Metadata$decodeTypes));
var elm$browser$Debugger$Metadata$ProblemType = F2(
	function (name, problems) {
		return {name: name, problems: problems};
	});
var elm$core$String$contains = _String_contains;
var elm$browser$Debugger$Metadata$hasProblem = F2(
	function (tipe, _n0) {
		var problem = _n0.a;
		var token = _n0.b;
		return A2(elm$core$String$contains, token, tipe) ? elm$core$Maybe$Just(problem) : elm$core$Maybe$Nothing;
	});
var elm$browser$Debugger$Metadata$Decoder = {$: 'Decoder'};
var elm$browser$Debugger$Metadata$Function = {$: 'Function'};
var elm$browser$Debugger$Metadata$Process = {$: 'Process'};
var elm$browser$Debugger$Metadata$Program = {$: 'Program'};
var elm$browser$Debugger$Metadata$Request = {$: 'Request'};
var elm$browser$Debugger$Metadata$Socket = {$: 'Socket'};
var elm$browser$Debugger$Metadata$Task = {$: 'Task'};
var elm$browser$Debugger$Metadata$VirtualDom = {$: 'VirtualDom'};
var elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
	[
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Function, '->'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Task, 'Task.Task'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Process, 'Process.Id'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Request, 'Http.Request'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
	]);
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$browser$Debugger$Metadata$findProblems = function (tipe) {
	return A2(
		elm$core$List$filterMap,
		elm$browser$Debugger$Metadata$hasProblem(tipe),
		elm$browser$Debugger$Metadata$problemTable);
};
var elm$browser$Debugger$Metadata$collectBadAliases = F3(
	function (name, _n0, list) {
		var tipe = _n0.tipe;
		var _n1 = elm$browser$Debugger$Metadata$findProblems(tipe);
		if (!_n1.b) {
			return list;
		} else {
			var problems = _n1;
			return A2(
				elm$core$List$cons,
				A2(elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var elm$core$Dict$values = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var elm$browser$Debugger$Metadata$collectBadUnions = F3(
	function (name, _n0, list) {
		var tags = _n0.tags;
		var _n1 = A2(
			elm$core$List$concatMap,
			elm$browser$Debugger$Metadata$findProblems,
			elm$core$List$concat(
				elm$core$Dict$values(tags)));
		if (!_n1.b) {
			return list;
		} else {
			var problems = _n1;
			return A2(
				elm$core$List$cons,
				A2(elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$browser$Debugger$Metadata$isPortable = function (_n0) {
	var types = _n0.types;
	var badAliases = A3(elm$core$Dict$foldl, elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
	var _n1 = A3(elm$core$Dict$foldl, elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
	if (!_n1.b) {
		return elm$core$Maybe$Nothing;
	} else {
		var problems = _n1;
		return elm$core$Maybe$Just(
			A2(elm$browser$Debugger$Metadata$Error, types.message, problems));
	}
};
var elm$browser$Debugger$Metadata$decode = function (value) {
	var _n0 = A2(elm$json$Json$Decode$decodeValue, elm$browser$Debugger$Metadata$decoder, value);
	if (_n0.$ === 'Err') {
		return elm$core$Result$Err(
			A2(elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
	} else {
		var metadata = _n0.a;
		var _n1 = elm$browser$Debugger$Metadata$isPortable(metadata);
		if (_n1.$ === 'Nothing') {
			return elm$core$Result$Ok(metadata);
		} else {
			var error = _n1.a;
			return elm$core$Result$Err(error);
		}
	}
};
var elm$browser$Debugger$Overlay$None = {$: 'None'};
var elm$browser$Debugger$Overlay$none = elm$browser$Debugger$Overlay$None;
var elm$core$Platform$Cmd$map = _Platform_map;
var elm$browser$Debugger$Main$wrapInit = F4(
	function (metadata, popout, init, flags) {
		var _n0 = init(flags);
		var userModel = _n0.a;
		var userCommands = _n0.b;
		return _Utils_Tuple2(
			{
				expando: elm$browser$Debugger$Expando$init(userModel),
				history: elm$browser$Debugger$History$empty(userModel),
				metadata: elm$browser$Debugger$Metadata$decode(metadata),
				overlay: elm$browser$Debugger$Overlay$none,
				popout: popout,
				state: elm$browser$Debugger$Main$Running(userModel)
			},
			A2(elm$core$Platform$Cmd$map, elm$browser$Debugger$Main$UserMsg, userCommands));
	});
var elm$browser$Debugger$Main$getLatestModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.c;
		return model;
	}
};
var elm$core$Platform$Sub$map = _Platform_map;
var elm$browser$Debugger$Main$wrapSubs = F2(
	function (subscriptions, model) {
		return A2(
			elm$core$Platform$Sub$map,
			elm$browser$Debugger$Main$UserMsg,
			subscriptions(
				elm$browser$Debugger$Main$getLatestModel(model.state)));
	});
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$browser$Debugger$Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _n12 = A2(elm$core$Dict$get, key, oldDict);
		if (_n12.$ === 'Nothing') {
			return value;
		} else {
			var oldValue = _n12.a;
			return A2(elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
		}
	});
var elm$browser$Debugger$Expando$mergeHelp = F2(
	function (old, _new) {
		var _n3 = _Utils_Tuple2(old, _new);
		_n3$6:
		while (true) {
			switch (_n3.b.$) {
				case 'S':
					return _new;
				case 'Primitive':
					return _new;
				case 'Sequence':
					if (_n3.a.$ === 'Sequence') {
						var _n4 = _n3.a;
						var isClosed = _n4.b;
						var oldValues = _n4.c;
						var _n5 = _n3.b;
						var seqType = _n5.a;
						var newValues = _n5.c;
						return A3(
							elm$browser$Debugger$Expando$Sequence,
							seqType,
							isClosed,
							A2(elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _n3$6;
					}
				case 'Dictionary':
					if (_n3.a.$ === 'Dictionary') {
						var _n6 = _n3.a;
						var isClosed = _n6.a;
						var _n7 = _n3.b;
						var keyValuePairs = _n7.b;
						return A2(elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
					} else {
						break _n3$6;
					}
				case 'Record':
					if (_n3.a.$ === 'Record') {
						var _n8 = _n3.a;
						var isClosed = _n8.a;
						var oldDict = _n8.b;
						var _n9 = _n3.b;
						var newDict = _n9.b;
						return A2(
							elm$browser$Debugger$Expando$Record,
							isClosed,
							A2(
								elm$core$Dict$map,
								elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
								newDict));
					} else {
						break _n3$6;
					}
				default:
					if (_n3.a.$ === 'Constructor') {
						var _n10 = _n3.a;
						var isClosed = _n10.b;
						var oldValues = _n10.c;
						var _n11 = _n3.b;
						var maybeName = _n11.a;
						var newValues = _n11.c;
						return A3(
							elm$browser$Debugger$Expando$Constructor,
							maybeName,
							isClosed,
							A2(elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _n3$6;
					}
			}
		}
		return _new;
	});
var elm$browser$Debugger$Expando$mergeListHelp = F2(
	function (olds, news) {
		var _n0 = _Utils_Tuple2(olds, news);
		if (!_n0.a.b) {
			return news;
		} else {
			if (!_n0.b.b) {
				return news;
			} else {
				var _n1 = _n0.a;
				var x = _n1.a;
				var xs = _n1.b;
				var _n2 = _n0.b;
				var y = _n2.a;
				var ys = _n2.b;
				return A2(
					elm$core$List$cons,
					A2(elm$browser$Debugger$Expando$mergeHelp, x, y),
					A2(elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
			}
		}
	});
var elm$browser$Debugger$Expando$merge = F2(
	function (value, expando) {
		return A2(
			elm$browser$Debugger$Expando$mergeHelp,
			expando,
			_Debugger_init(value));
	});
var elm$browser$Debugger$Expando$updateIndex = F3(
	function (n, func, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return (n <= 0) ? A2(
				elm$core$List$cons,
				func(x),
				xs) : A2(
				elm$core$List$cons,
				x,
				A3(elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
		}
	});
var elm$core$Basics$not = _Basics_not;
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === 'RBNode_elm_builtin') {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === 'RBNode_elm_builtin') {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === 'RBNode_elm_builtin') {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (_n0.$ === 'Just') {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var elm$browser$Debugger$Expando$update = F2(
	function (msg, value) {
		switch (value.$) {
			case 'S':
				return value;
			case 'Primitive':
				return value;
			case 'Sequence':
				var seqType = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3(elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _n3 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								elm$browser$Debugger$Expando$Sequence,
								seqType,
								isClosed,
								A3(
									elm$browser$Debugger$Expando$updateIndex,
									index,
									elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
			case 'Dictionary':
				var isClosed = value.a;
				var keyValuePairs = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2(elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
					case 'Index':
						var redirect = msg.a;
						var index = msg.b;
						var subMsg = msg.c;
						switch (redirect.$) {
							case 'None':
								return value;
							case 'Key':
								return A2(
									elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_n6) {
											var k = _n6.a;
											var v = _n6.b;
											return _Utils_Tuple2(
												A2(elm$browser$Debugger$Expando$update, subMsg, k),
												v);
										},
										keyValuePairs));
							default:
								return A2(
									elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_n7) {
											var k = _n7.a;
											var v = _n7.b;
											return _Utils_Tuple2(
												k,
												A2(elm$browser$Debugger$Expando$update, subMsg, v));
										},
										keyValuePairs));
						}
					default:
						return value;
				}
			case 'Record':
				var isClosed = value.a;
				var valueDict = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2(elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
					case 'Index':
						return value;
					default:
						var field = msg.a;
						var subMsg = msg.b;
						return A2(
							elm$browser$Debugger$Expando$Record,
							isClosed,
							A3(
								elm$core$Dict$update,
								field,
								elm$browser$Debugger$Expando$updateField(subMsg),
								valueDict));
				}
			default:
				var maybeName = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3(elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _n10 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								elm$browser$Debugger$Expando$Constructor,
								maybeName,
								isClosed,
								A3(
									elm$browser$Debugger$Expando$updateIndex,
									index,
									elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
		}
	});
var elm$browser$Debugger$Expando$updateField = F2(
	function (msg, maybeExpando) {
		if (maybeExpando.$ === 'Nothing') {
			return maybeExpando;
		} else {
			var expando = maybeExpando.a;
			return elm$core$Maybe$Just(
				A2(elm$browser$Debugger$Expando$update, msg, expando));
		}
	});
var elm$browser$Debugger$History$Snapshot = F2(
	function (model, messages) {
		return {messages: messages, model: model};
	});
var elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
			var jsArray = _n0.a;
			var remainingItems = _n0.b;
			if (_Utils_cmp(
				elm$core$Elm$JsArray$length(jsArray),
				elm$core$Array$branchFactor) < 0) {
				return A2(
					elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					elm$core$List$cons,
					elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return elm$core$Array$empty;
	} else {
		return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var elm$browser$Debugger$History$addRecent = F3(
	function (msg, newModel, _n0) {
		var model = _n0.model;
		var messages = _n0.messages;
		var numMessages = _n0.numMessages;
		return _Utils_eq(numMessages, elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
			elm$core$Maybe$Just(
				A2(
					elm$browser$Debugger$History$Snapshot,
					model,
					elm$core$Array$fromList(messages))),
			A3(
				elm$browser$Debugger$History$RecentHistory,
				newModel,
				_List_fromArray(
					[msg]),
				1)) : _Utils_Tuple2(
			elm$core$Maybe$Nothing,
			A3(
				elm$browser$Debugger$History$RecentHistory,
				model,
				A2(elm$core$List$cons, msg, messages),
				numMessages + 1));
	});
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Elm$JsArray$push = _JsArray_push;
var elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					elm$core$Elm$JsArray$push,
					elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = elm$core$Array$SubTree(
					A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, elm$core$Elm$JsArray$empty));
				return A2(elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = elm$core$Array$SubTree(
					A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, subTree));
				return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = elm$core$Array$SubTree(
					A4(
						elm$core$Array$insertTailInTree,
						shift - elm$core$Array$shiftStep,
						index,
						tail,
						elm$core$Elm$JsArray$singleton(value)));
				return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		var originalTailLen = elm$core$Elm$JsArray$length(tail);
		var newTailLen = elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + elm$core$Array$shiftStep;
				var newTree = A4(
					elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					elm$core$Elm$JsArray$singleton(
						elm$core$Array$SubTree(tree)));
				return A4(elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4(elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4(elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			elm$core$Array$unsafeReplaceTail,
			A2(elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var elm$browser$Debugger$History$add = F3(
	function (msg, model, _n0) {
		var snapshots = _n0.snapshots;
		var recent = _n0.recent;
		var numMessages = _n0.numMessages;
		var _n1 = A3(elm$browser$Debugger$History$addRecent, msg, model, recent);
		if (_n1.a.$ === 'Just') {
			var snapshot = _n1.a.a;
			var newRecent = _n1.b;
			return A3(
				elm$browser$Debugger$History$History,
				A2(elm$core$Array$push, snapshot, snapshots),
				newRecent,
				numMessages + 1);
		} else {
			var _n2 = _n1.a;
			var newRecent = _n1.b;
			return A3(elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
		}
	});
var elm$browser$Debugger$History$Stepping = F2(
	function (a, b) {
		return {$: 'Stepping', a: a, b: b};
	});
var elm$browser$Debugger$History$Done = F2(
	function (a, b) {
		return {$: 'Done', a: a, b: b};
	});
var elm$browser$Debugger$History$getHelp = F3(
	function (update, msg, getResult) {
		if (getResult.$ === 'Done') {
			return getResult;
		} else {
			var n = getResult.a;
			var model = getResult.b;
			return (!n) ? A2(
				elm$browser$Debugger$History$Done,
				msg,
				A2(update, msg, model).a) : A2(
				elm$browser$Debugger$History$Stepping,
				n - 1,
				A2(update, msg, model).a);
		}
	});
var elm$browser$Debugger$History$undone = function (getResult) {
	undone:
	while (true) {
		if (getResult.$ === 'Done') {
			var msg = getResult.a;
			var model = getResult.b;
			return _Utils_Tuple2(model, msg);
		} else {
			var $temp$getResult = getResult;
			getResult = $temp$getResult;
			continue undone;
		}
	}
};
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_n0.$ === 'SubTree') {
				var subTree = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _n0.a;
				return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values);
			}
		}
	});
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var elm$core$Array$get = F2(
	function (index, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? elm$core$Maybe$Just(
			A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(
			A3(elm$core$Array$getHelp, startShift, index, tree)));
	});
var elm$browser$Debugger$History$get = F3(
	function (update, index, history) {
		get:
		while (true) {
			var recent = history.recent;
			var snapshotMax = history.numMessages - recent.numMessages;
			if (_Utils_cmp(index, snapshotMax) > -1) {
				return elm$browser$Debugger$History$undone(
					A3(
						elm$core$List$foldr,
						elm$browser$Debugger$History$getHelp(update),
						A2(elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
						recent.messages));
			} else {
				var _n0 = A2(elm$core$Array$get, (index / elm$browser$Debugger$History$maxSnapshotSize) | 0, history.snapshots);
				if (_n0.$ === 'Nothing') {
					var $temp$update = update,
						$temp$index = index,
						$temp$history = history;
					update = $temp$update;
					index = $temp$index;
					history = $temp$history;
					continue get;
				} else {
					var model = _n0.a.model;
					var messages = _n0.a.messages;
					return elm$browser$Debugger$History$undone(
						A3(
							elm$core$Array$foldr,
							elm$browser$Debugger$History$getHelp(update),
							A2(elm$browser$Debugger$History$Stepping, index % elm$browser$Debugger$History$maxSnapshotSize, model),
							messages));
				}
			}
		}
	});
var elm$browser$Debugger$Main$Paused = F3(
	function (a, b, c) {
		return {$: 'Paused', a: a, b: b, c: c};
	});
var elm$browser$Debugger$History$elmToJs = _Debugger_unsafeCoerce;
var elm$browser$Debugger$History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3(elm$core$Array$foldl, elm$core$List$cons, allMessages, snapshot.messages);
	});
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var elm$browser$Debugger$History$encode = function (_n0) {
	var snapshots = _n0.snapshots;
	var recent = _n0.recent;
	return A2(
		elm$json$Json$Encode$list,
		elm$browser$Debugger$History$elmToJs,
		A3(
			elm$core$Array$foldr,
			elm$browser$Debugger$History$encodeHelp,
			elm$core$List$reverse(recent.messages),
			snapshots));
};
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$browser$Debugger$Metadata$encodeAlias = function (_n0) {
	var args = _n0.args;
	var tipe = _n0.tipe;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2(elm$json$Json$Encode$list, elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'type',
				elm$json$Json$Encode$string(tipe))
			]));
};
var elm$browser$Debugger$Metadata$encodeDict = F2(
	function (f, dict) {
		return elm$json$Json$Encode$object(
			elm$core$Dict$toList(
				A2(
					elm$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var elm$browser$Debugger$Metadata$encodeUnion = function (_n0) {
	var args = _n0.args;
	var tags = _n0.tags;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2(elm$json$Json$Encode$list, elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'tags',
				A2(
					elm$browser$Debugger$Metadata$encodeDict,
					elm$json$Json$Encode$list(elm$json$Json$Encode$string),
					tags))
			]));
};
var elm$browser$Debugger$Metadata$encodeTypes = function (_n0) {
	var message = _n0.message;
	var unions = _n0.unions;
	var aliases = _n0.aliases;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'message',
				elm$json$Json$Encode$string(message)),
				_Utils_Tuple2(
				'aliases',
				A2(elm$browser$Debugger$Metadata$encodeDict, elm$browser$Debugger$Metadata$encodeAlias, aliases)),
				_Utils_Tuple2(
				'unions',
				A2(elm$browser$Debugger$Metadata$encodeDict, elm$browser$Debugger$Metadata$encodeUnion, unions))
			]));
};
var elm$browser$Debugger$Metadata$encodeVersions = function (_n0) {
	var elm = _n0.elm;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'elm',
				elm$json$Json$Encode$string(elm))
			]));
};
var elm$browser$Debugger$Metadata$encode = function (_n0) {
	var versions = _n0.versions;
	var types = _n0.types;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'versions',
				elm$browser$Debugger$Metadata$encodeVersions(versions)),
				_Utils_Tuple2(
				'types',
				elm$browser$Debugger$Metadata$encodeTypes(types))
			]));
};
var elm$browser$Debugger$Main$download = F2(
	function (metadata, history) {
		var json = elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'metadata',
					elm$browser$Debugger$Metadata$encode(metadata)),
					_Utils_Tuple2(
					'history',
					elm$browser$Debugger$History$encode(history))
				]));
		var historyLength = elm$browser$Debugger$History$size(history);
		return A2(
			elm$core$Task$perform,
			function (_n0) {
				return elm$browser$Debugger$Main$NoOp;
			},
			A2(_Debugger_download, historyLength, json));
	});
var elm$browser$Debugger$History$jsToElm = _Debugger_unsafeCoerce;
var elm$json$Json$Decode$value = _Json_decodeValue;
var elm$browser$Debugger$History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _n0) {
				var model = _n0.a;
				var history = _n0.b;
				var msg = elm$browser$Debugger$History$jsToElm(rawMsg);
				return _Utils_Tuple2(
					A2(update, msg, model),
					A3(elm$browser$Debugger$History$add, msg, model, history));
			});
		var updateModel = function (rawMsgs) {
			return A3(
				elm$core$List$foldl,
				addMessage,
				_Utils_Tuple2(
					initialModel,
					elm$browser$Debugger$History$empty(initialModel)),
				rawMsgs);
		};
		return A2(
			elm$json$Json$Decode$map,
			updateModel,
			elm$json$Json$Decode$list(elm$json$Json$Decode$value));
	});
var elm$browser$Debugger$History$getInitialModel = function (_n0) {
	var snapshots = _n0.snapshots;
	var recent = _n0.recent;
	var _n1 = A2(elm$core$Array$get, 0, snapshots);
	if (_n1.$ === 'Just') {
		var model = _n1.a.model;
		return model;
	} else {
		return recent.model;
	}
};
var elm$browser$Debugger$Overlay$BadImport = function (a) {
	return {$: 'BadImport', a: a};
};
var elm$browser$Debugger$Report$CorruptHistory = {$: 'CorruptHistory'};
var elm$browser$Debugger$Overlay$corruptImport = elm$browser$Debugger$Overlay$BadImport(elm$browser$Debugger$Report$CorruptHistory);
var elm$browser$Debugger$Main$loadNewHistory = F3(
	function (rawHistory, update, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return A2(update, msg, userModel).a;
			});
		var initialUserModel = elm$browser$Debugger$History$getInitialModel(model.history);
		var decoder = A2(elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
		var _n0 = A2(elm$json$Json$Decode$decodeValue, decoder, rawHistory);
		if (_n0.$ === 'Err') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{overlay: elm$browser$Debugger$Overlay$corruptImport}),
				elm$core$Platform$Cmd$none);
		} else {
			var _n1 = _n0.a;
			var latestUserModel = _n1.a;
			var newHistory = _n1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						expando: elm$browser$Debugger$Expando$init(latestUserModel),
						history: newHistory,
						overlay: elm$browser$Debugger$Overlay$none,
						state: elm$browser$Debugger$Main$Running(latestUserModel)
					}),
				elm$core$Platform$Cmd$none);
		}
	});
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$browser$Debugger$Main$scroll = function (popout) {
	return A2(
		elm$core$Task$perform,
		elm$core$Basics$always(elm$browser$Debugger$Main$NoOp),
		_Debugger_scroll(popout));
};
var elm$browser$Debugger$Main$Upload = function (a) {
	return {$: 'Upload', a: a};
};
var elm$browser$Debugger$Main$upload = A2(
	elm$core$Task$perform,
	elm$browser$Debugger$Main$Upload,
	_Debugger_upload(_Utils_Tuple0));
var elm$browser$Debugger$Overlay$BadMetadata = function (a) {
	return {$: 'BadMetadata', a: a};
};
var elm$browser$Debugger$Overlay$badMetadata = elm$browser$Debugger$Overlay$BadMetadata;
var elm$browser$Debugger$Main$withGoodMetadata = F2(
	function (model, func) {
		var _n0 = model.metadata;
		if (_n0.$ === 'Ok') {
			var metadata = _n0.a;
			return func(metadata);
		} else {
			var error = _n0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						overlay: elm$browser$Debugger$Overlay$badMetadata(error)
					}),
				elm$core$Platform$Cmd$none);
		}
	});
var elm$browser$Debugger$Report$AliasChange = function (a) {
	return {$: 'AliasChange', a: a};
};
var elm$browser$Debugger$Metadata$checkAlias = F4(
	function (name, old, _new, changes) {
		return (_Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)) ? changes : A2(
			elm$core$List$cons,
			elm$browser$Debugger$Report$AliasChange(name),
			changes);
	});
var elm$browser$Debugger$Metadata$addTag = F3(
	function (tag, _n0, changes) {
		return _Utils_update(
			changes,
			{
				added: A2(elm$core$List$cons, tag, changes.added)
			});
	});
var elm$browser$Debugger$Metadata$checkTag = F4(
	function (tag, old, _new, changes) {
		return _Utils_eq(old, _new) ? changes : _Utils_update(
			changes,
			{
				changed: A2(elm$core$List$cons, tag, changes.changed)
			});
	});
var elm$browser$Debugger$Metadata$removeTag = F3(
	function (tag, _n0, changes) {
		return _Utils_update(
			changes,
			{
				removed: A2(elm$core$List$cons, tag, changes.removed)
			});
	});
var elm$browser$Debugger$Report$UnionChange = F2(
	function (a, b) {
		return {$: 'UnionChange', a: a, b: b};
	});
var elm$browser$Debugger$Report$TagChanges = F4(
	function (removed, changed, added, argsMatch) {
		return {added: added, argsMatch: argsMatch, changed: changed, removed: removed};
	});
var elm$browser$Debugger$Report$emptyTagChanges = function (argsMatch) {
	return A4(elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
};
var elm$browser$Debugger$Report$hasTagChanges = function (tagChanges) {
	return _Utils_eq(
		tagChanges,
		A4(elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
};
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var elm$browser$Debugger$Metadata$checkUnion = F4(
	function (name, old, _new, changes) {
		var tagChanges = A6(
			elm$core$Dict$merge,
			elm$browser$Debugger$Metadata$removeTag,
			elm$browser$Debugger$Metadata$checkTag,
			elm$browser$Debugger$Metadata$addTag,
			old.tags,
			_new.tags,
			elm$browser$Debugger$Report$emptyTagChanges(
				_Utils_eq(old.args, _new.args)));
		return elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
			elm$core$List$cons,
			A2(elm$browser$Debugger$Report$UnionChange, name, tagChanges),
			changes);
	});
var elm$browser$Debugger$Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var elm$browser$Debugger$Report$MessageChanged = F2(
	function (a, b) {
		return {$: 'MessageChanged', a: a, b: b};
	});
var elm$browser$Debugger$Report$SomethingChanged = function (a) {
	return {$: 'SomethingChanged', a: a};
};
var elm$core$Basics$neq = _Utils_notEqual;
var elm$browser$Debugger$Metadata$checkTypes = F2(
	function (old, _new) {
		return (!_Utils_eq(old.message, _new.message)) ? A2(elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : elm$browser$Debugger$Report$SomethingChanged(
			A6(
				elm$core$Dict$merge,
				elm$browser$Debugger$Metadata$ignore,
				elm$browser$Debugger$Metadata$checkUnion,
				elm$browser$Debugger$Metadata$ignore,
				old.unions,
				_new.unions,
				A6(elm$core$Dict$merge, elm$browser$Debugger$Metadata$ignore, elm$browser$Debugger$Metadata$checkAlias, elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
	});
var elm$browser$Debugger$Report$VersionChanged = F2(
	function (a, b) {
		return {$: 'VersionChanged', a: a, b: b};
	});
var elm$browser$Debugger$Metadata$check = F2(
	function (old, _new) {
		return (!_Utils_eq(old.versions.elm, _new.versions.elm)) ? A2(elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2(elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
	});
var elm$browser$Debugger$Overlay$RiskyImport = F2(
	function (a, b) {
		return {$: 'RiskyImport', a: a, b: b};
	});
var elm$browser$Debugger$Overlay$uploadDecoder = A3(
	elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, y);
		}),
	A2(elm$json$Json$Decode$field, 'metadata', elm$browser$Debugger$Metadata$decoder),
	A2(elm$json$Json$Decode$field, 'history', elm$json$Json$Decode$value));
var elm$browser$Debugger$Report$Fine = {$: 'Fine'};
var elm$browser$Debugger$Report$Impossible = {$: 'Impossible'};
var elm$browser$Debugger$Report$Risky = {$: 'Risky'};
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var elm$browser$Debugger$Report$some = function (list) {
	return !elm$core$List$isEmpty(list);
};
var elm$browser$Debugger$Report$evaluateChange = function (change) {
	if (change.$ === 'AliasChange') {
		return elm$browser$Debugger$Report$Impossible;
	} else {
		var removed = change.b.removed;
		var changed = change.b.changed;
		var added = change.b.added;
		var argsMatch = change.b.argsMatch;
		return ((!argsMatch) || (elm$browser$Debugger$Report$some(changed) || elm$browser$Debugger$Report$some(removed))) ? elm$browser$Debugger$Report$Impossible : (elm$browser$Debugger$Report$some(added) ? elm$browser$Debugger$Report$Risky : elm$browser$Debugger$Report$Fine);
	}
};
var elm$browser$Debugger$Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			if (!statusList.b) {
				return status;
			} else {
				switch (statusList.a.$) {
					case 'Impossible':
						var _n1 = statusList.a;
						return elm$browser$Debugger$Report$Impossible;
					case 'Risky':
						var _n2 = statusList.a;
						var rest = statusList.b;
						var $temp$status = elm$browser$Debugger$Report$Risky,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
					default:
						var _n3 = statusList.a;
						var rest = statusList.b;
						var $temp$status = status,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
				}
			}
		}
	});
var elm$browser$Debugger$Report$evaluate = function (report) {
	switch (report.$) {
		case 'CorruptHistory':
			return elm$browser$Debugger$Report$Impossible;
		case 'VersionChanged':
			return elm$browser$Debugger$Report$Impossible;
		case 'MessageChanged':
			return elm$browser$Debugger$Report$Impossible;
		default:
			var changes = report.a;
			return A2(
				elm$browser$Debugger$Report$worstCase,
				elm$browser$Debugger$Report$Fine,
				A2(elm$core$List$map, elm$browser$Debugger$Report$evaluateChange, changes));
	}
};
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var elm$browser$Debugger$Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _n0 = A2(elm$json$Json$Decode$decodeString, elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
		if (_n0.$ === 'Err') {
			return elm$core$Result$Err(elm$browser$Debugger$Overlay$corruptImport);
		} else {
			var _n1 = _n0.a;
			var foreignMetadata = _n1.a;
			var rawHistory = _n1.b;
			var report = A2(elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
			var _n2 = elm$browser$Debugger$Report$evaluate(report);
			switch (_n2.$) {
				case 'Impossible':
					return elm$core$Result$Err(
						elm$browser$Debugger$Overlay$BadImport(report));
				case 'Risky':
					return elm$core$Result$Err(
						A2(elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
				default:
					return elm$core$Result$Ok(rawHistory);
			}
		}
	});
var elm$browser$Debugger$Overlay$close = F2(
	function (msg, state) {
		switch (state.$) {
			case 'None':
				return elm$core$Maybe$Nothing;
			case 'BadMetadata':
				return elm$core$Maybe$Nothing;
			case 'BadImport':
				return elm$core$Maybe$Nothing;
			default:
				var rawHistory = state.b;
				if (msg.$ === 'Cancel') {
					return elm$core$Maybe$Nothing;
				} else {
					return elm$core$Maybe$Just(rawHistory);
				}
		}
	});
var elm$browser$Debugger$Main$wrapUpdate = F3(
	function (update, msg, model) {
		wrapUpdate:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				case 'UserMsg':
					var userMsg = msg.a;
					var userModel = elm$browser$Debugger$Main$getLatestModel(model.state);
					var newHistory = A3(elm$browser$Debugger$History$add, userMsg, userModel, model.history);
					var _n1 = A2(update, userMsg, userModel);
					var newUserModel = _n1.a;
					var userCmds = _n1.b;
					var commands = A2(elm$core$Platform$Cmd$map, elm$browser$Debugger$Main$UserMsg, userCmds);
					var _n2 = model.state;
					if (_n2.$ === 'Running') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expando: A2(elm$browser$Debugger$Expando$merge, newUserModel, model.expando),
									history: newHistory,
									state: elm$browser$Debugger$Main$Running(newUserModel)
								}),
							elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										commands,
										elm$browser$Debugger$Main$scroll(model.popout)
									])));
					} else {
						var index = _n2.a;
						var indexModel = _n2.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									history: newHistory,
									state: A3(elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel)
								}),
							commands);
					}
				case 'ExpandoMsg':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expando: A2(elm$browser$Debugger$Expando$update, eMsg, model.expando)
							}),
						elm$core$Platform$Cmd$none);
				case 'Resume':
					var _n3 = model.state;
					if (_n3.$ === 'Running') {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						var userModel = _n3.c;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expando: A2(elm$browser$Debugger$Expando$merge, userModel, model.expando),
									state: elm$browser$Debugger$Main$Running(userModel)
								}),
							elm$browser$Debugger$Main$scroll(model.popout));
					}
				case 'Jump':
					var index = msg.a;
					var _n4 = A3(elm$browser$Debugger$History$get, update, index, model.history);
					var indexModel = _n4.a;
					var indexMsg = _n4.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expando: A2(elm$browser$Debugger$Expando$merge, indexModel, model.expando),
								state: A3(
									elm$browser$Debugger$Main$Paused,
									index,
									indexModel,
									elm$browser$Debugger$Main$getLatestModel(model.state))
							}),
						elm$core$Platform$Cmd$none);
				case 'Open':
					return _Utils_Tuple2(
						model,
						A2(
							elm$core$Task$perform,
							function (_n5) {
								return elm$browser$Debugger$Main$NoOp;
							},
							_Debugger_open(model.popout)));
				case 'Up':
					var index = function () {
						var _n6 = model.state;
						if (_n6.$ === 'Paused') {
							var i = _n6.a;
							return i;
						} else {
							return elm$browser$Debugger$History$size(model.history);
						}
					}();
					if (index > 0) {
						var $temp$update = update,
							$temp$msg = elm$browser$Debugger$Main$Jump(index - 1),
							$temp$model = model;
						update = $temp$update;
						msg = $temp$msg;
						model = $temp$model;
						continue wrapUpdate;
					} else {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					}
				case 'Down':
					var _n7 = model.state;
					if (_n7.$ === 'Running') {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						var index = _n7.a;
						var userModel = _n7.c;
						if (_Utils_eq(
							index,
							elm$browser$Debugger$History$size(model.history) - 1)) {
							var $temp$update = update,
								$temp$msg = elm$browser$Debugger$Main$Resume,
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							var $temp$update = update,
								$temp$msg = elm$browser$Debugger$Main$Jump(index + 1),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						}
					}
				case 'Import':
					return A2(
						elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (_n8) {
							return _Utils_Tuple2(model, elm$browser$Debugger$Main$upload);
						});
				case 'Export':
					return A2(
						elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							return _Utils_Tuple2(
								model,
								A2(elm$browser$Debugger$Main$download, metadata, model.history));
						});
				case 'Upload':
					var jsonString = msg.a;
					return A2(
						elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							var _n9 = A2(elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
							if (_n9.$ === 'Err') {
								var newOverlay = _n9.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{overlay: newOverlay}),
									elm$core$Platform$Cmd$none);
							} else {
								var rawHistory = _n9.a;
								return A3(elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
							}
						});
				default:
					var overlayMsg = msg.a;
					var _n10 = A2(elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
					if (_n10.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{overlay: elm$browser$Debugger$Overlay$none}),
							elm$core$Platform$Cmd$none);
					} else {
						var rawHistory = _n10.a;
						return A3(elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
					}
			}
		}
	});
var elm$core$Set$foldr = F3(
	function (func, initialState, _n0) {
		var dict = _n0.a;
		return A3(
			elm$core$Dict$foldr,
			F3(
				function (key, _n1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var author$project$DetailPage$main = elm$browser$Browser$element(
	{init: author$project$DetailPage$init, subscriptions: author$project$DetailPage$subscriptions, update: author$project$DetailPage$update, view: author$project$DetailPage$view});
_Platform_export({'DetailPage':{'init':author$project$DetailPage$main(elm$json$Json$Decode$value)({"versions":{"elm":"0.19.0"},"types":{"message":"DetailPage.Msg","aliases":{"TheProcess.ProcessData":{"args":[],"type":"{ id : Id.Id, title : String.String, description : String.String, completions : Basics.Int, createdAt : Time.Posix, lastActivity : Time.Posix }"}},"unions":{"DetailPage.Msg":{"args":[],"tags":{"UserClickedCreateProcess":[],"UserUpdatedTitleField":["String.String"],"UserUpdatedDescriptionField":["String.String"],"UserSavedNewProcess":["TheProcess.ProcessData"],"ServerReturnedSaveResponse":[]}},"Id.Id":{"args":[],"tags":{"Id":["String.String"]}},"Basics.Int":{"args":[],"tags":{"Int":[]}},"String.String":{"args":[],"tags":{"String":[]}},"Time.Posix":{"args":[],"tags":{"Posix":["Basics.Int"]}}}}})}});}(this));

/***/ }),

/***/ "./client/src/js/process-detail.js":
/*!*****************************************!*\
  !*** ./client/src/js/process-detail.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_process_detail_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/process-detail.css */ "./client/src/css/process-detail.css");
/* harmony import */ var _css_process_detail_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_process_detail_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elm_DetailPage_elm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elm/DetailPage.elm */ "./client/src/elm/DetailPage.elm");
/* harmony import */ var _elm_DetailPage_elm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elm_DetailPage_elm__WEBPACK_IMPORTED_MODULE_1__);
/* global context */


_elm_DetailPage_elm__WEBPACK_IMPORTED_MODULE_1__["Elm"].DetailPage.init({
  node: document.getElementById('elm'),
  flags: context
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jc3MvcHJvY2Vzcy1kZXRhaWwuY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZWxtL0RldGFpbFBhZ2UuZWxtIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvcHJvY2Vzcy1kZXRhaWwuanMiXSwibmFtZXMiOlsiRWxtIiwiRGV0YWlsUGFnZSIsImluaXQiLCJub2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZsYWdzIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MscUJBQXFCLGlCQUFpQixHQUFHLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQixxQkFBcUIsR0FBRztBQUNyRSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHdCQUF3QixHQUFHLEdBQUc7QUFDdEQsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELHdCQUF3QixxQkFBcUIsMkJBQTJCLEdBQUcsR0FBRyxHQUFHO0FBQ2pGLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCO0FBQzdDLGlDQUFpQyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzdDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCO0FBQzdDLHdCQUF3QixpQ0FBaUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3hFLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCO0FBQzdDLHdCQUF3QjtBQUN4Qix1Q0FBdUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDekQsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELHdCQUF3QixxQkFBcUI7QUFDN0Msd0JBQXdCLHFCQUFxQjtBQUM3QywwQ0FBMEMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUMvRCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSx3QkFBd0I7QUFDeEIsaUJBQWlCOztBQUVqQixvQ0FBb0MsU0FBUyxzQkFBc0I7QUFDbkUsNkJBQTZCLFNBQVMseUJBQXlCOzs7QUFHL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qyx3QkFBd0IsRUFBRTs7OztBQUluRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyw2Q0FBNkMscUJBQXFCO0FBQ3pFO0FBQ0E7O0FBRUEsbUNBQW1DLDZCQUE2QixFQUFFO0FBQ2xFLG1DQUFtQyw2QkFBNkIsRUFBRTtBQUNsRSxtQ0FBbUMsNkJBQTZCLEVBQUU7QUFDbEUsbUNBQW1DLDhCQUE4QixFQUFFOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQixxQ0FBcUMsU0FBUyxjQUFjO0FBQzVELDhCQUE4QixTQUFTLHVCQUF1Qjs7QUFFOUQsd0NBQXdDLFNBQVMsb0JBQW9CO0FBQ3JFLGlDQUFpQyxTQUFTLDZCQUE2Qjs7QUFFdkUsK0JBQStCLFVBQVU7QUFDekMsd0JBQXdCLHNCQUFzQjs7O0FBRzlDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7O0FBSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsU0FBUztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkdBQTZHLDBEQUEwRDs7QUFFdks7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQSxxQ0FBcUMsY0FBYyxFQUFFO0FBQ3JELHFDQUFxQyxjQUFjLEVBQUU7QUFDckQscUNBQXFDLGNBQWMsRUFBRTtBQUNyRCxzQ0FBc0MsY0FBYyxFQUFFO0FBQ3RELHNDQUFzQyxvQkFBb0IsRUFBRTtBQUM1RDs7QUFFQSw2Q0FBNkMsY0FBYyxFQUFFOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsNkJBQTZCLFVBQVU7QUFDdkMsOEJBQThCLGNBQWM7QUFDNUMsZ0NBQWdDLDBDQUEwQzs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSw0QkFBNEIsY0FBYztBQUMxQyxxQ0FBcUMsZUFBZSxFQUFFO0FBQ3RELHFDQUFxQyxlQUFlLEVBQUU7QUFDdEQscUNBQXFDLGdCQUFnQixFQUFFOzs7O0FBSXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0NBQW9DLFNBQVMsb0JBQW9CO0FBQ2pFLHFDQUFxQyxTQUFTLG9CQUFvQjs7QUFFbEUsa0NBQWtDLFNBQVMsa0JBQWtCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFLGlCQUFpQixFQUFFO0FBQ3BGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsNEJBQTRCLFNBQVMsa0JBQWtCO0FBQ3ZELDhCQUE4QixnQkFBZ0I7O0FBRTlDLG1DQUFtQyxjQUFjO0FBQ2pELHFDQUFxQyxjQUFjOztBQUVuRCw2QkFBNkIsV0FBVztBQUN4Qyw4QkFBOEIsV0FBVzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILHFCQUFxQixrQkFBa0I7QUFDdkMsRUFBRTtBQUNGOzs7OztBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLGVBQWU7QUFDaEM7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDREQUE0RCxjQUFjLEVBQUU7OztBQUc1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFdBQVc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7O0FBR0Q7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsV0FBVztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7QUFHRDs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELG1CQUFtQixxQ0FBcUM7QUFDeEQsRUFBRTtBQUNGO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUEsb0RBQW9ELFlBQVk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEIsa0JBQWtCLFdBQVc7QUFDN0Isa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7O0FBSUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUJBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7OztBQUtEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCx3REFBd0QsRUFBRTtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQkFBMEIsd0JBQXdCLFFBQVE7O0FBRTFELHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCOztBQUVwQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0NBQXdDOzs7QUFHaEU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVDQUF1Qzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0EseUJBQXlCLGdDQUFnQyxvQ0FBb0M7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3Q0FBd0M7QUFDbkUsNkVBQTZFLGdCQUFnQjtBQUM3RixxQkFBcUIsOENBQThDO0FBQ25FLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0YsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNGQUFzRjtBQUM1RixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLDRDQUE0QztBQUM1QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0YsMkNBQTJDO0FBQzNDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxzQ0FBc0M7QUFDdEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNk5BQTZOO0FBQ2hPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFDekMsMkNBQTJDO0FBQzNDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQkFBb0IsZ0JBQWdCLEdBQUcsK0JBQStCLHNDQUFzQyxHQUFHLHNFQUFzRSxzQ0FBc0MsR0FBRyxpQ0FBaUMsNEJBQTRCLHFCQUFxQix3QkFBd0Isc0JBQXNCLDRCQUE0Qix3QkFBd0IscUJBQXFCLDBCQUEwQixHQUFHLCtCQUErQixnQkFBZ0IsZUFBZSxxQkFBcUIsd0JBQXdCLHVCQUF1QixzQkFBc0IsbUJBQW1CLGlCQUFpQixHQUFHO0FBQ25yQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1RUFBdUUsZ0JBQWdCLGlCQUFpQixzQkFBc0Isb0JBQW9CLEdBQUcsZ0NBQWdDLHNDQUFzQyxHQUFHO0FBQzlOO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsMENBQTBDO0FBQzFDLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQThEO0FBQ3BFLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFvRDtBQUMxRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyw4Q0FBOEM7QUFDOUMseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJDQUEyQztBQUNwRDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2S0FBNks7QUFDL0ssa0JBQWtCLGNBQWMsbUVBQW1FLFlBQVksZUFBZSxVQUFVLHNDQUFzQywwQkFBMEIsbUJBQW1CLDhJQUE4SSxHQUFHLFdBQVcsa0JBQWtCLGtCQUFrQiwwTUFBME0sVUFBVSxrQkFBa0Isd0JBQXdCLGVBQWUsa0JBQWtCLFVBQVUsa0JBQWtCLGtCQUFrQixhQUFhLGVBQWUsa0JBQWtCLDJCQUEyQixHQUFHLEdBQUcsUTs7Ozs7Ozs7Ozs7O0FDcmdUdnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsdURBQUcsQ0FBQ0MsVUFBSixDQUFlQyxJQUFmLENBQW9CO0FBQ2xCQyxNQUFJLEVBQUVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQURZO0FBRWxCQyxPQUFLLEVBQUVDO0FBRlcsQ0FBcEIsRSIsImZpbGUiOiJqcy9wcm9jZXNzLWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvanMvcHJvY2Vzcy1kZXRhaWwuanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIoZnVuY3Rpb24oc2NvcGUpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBGKGFyaXR5LCBmdW4sIHdyYXBwZXIpIHtcbiAgd3JhcHBlci5hID0gYXJpdHk7XG4gIHdyYXBwZXIuZiA9IGZ1bjtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIEYyKGZ1bikge1xuICByZXR1cm4gRigyLCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bihhLGIpOyB9OyB9KVxufVxuZnVuY3Rpb24gRjMoZnVuKSB7XG4gIHJldHVybiBGKDMsIGZ1biwgZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7IHJldHVybiBmdW4oYSwgYiwgYyk7IH07IH07XG4gIH0pO1xufVxuZnVuY3Rpb24gRjQoZnVuKSB7XG4gIHJldHVybiBGKDQsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW4oYSwgYiwgYywgZCk7IH07IH07IH07XG4gIH0pO1xufVxuZnVuY3Rpb24gRjUoZnVuKSB7XG4gIHJldHVybiBGKDUsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSk7IH07IH07IH07IH07XG4gIH0pO1xufVxuZnVuY3Rpb24gRjYoZnVuKSB7XG4gIHJldHVybiBGKDYsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlLCBmKTsgfTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNyhmdW4pIHtcbiAgcmV0dXJuIEYoNywgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZykgeyByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYsIGcpOyB9OyB9OyB9OyB9OyB9OyB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIEY4KGZ1bikge1xuICByZXR1cm4gRig4LCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW5jdGlvbihnKSB7IHJldHVybiBmdW5jdGlvbihoKSB7XG4gICAgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKTsgfTsgfTsgfTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGOShmdW4pIHtcbiAgcmV0dXJuIEYoOSwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZykgeyByZXR1cm4gZnVuY3Rpb24oaCkgeyByZXR1cm4gZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSk7IH07IH07IH07IH07IH07IH07IH07IH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBBMihmdW4sIGEsIGIpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSAyID8gZnVuLmYoYSwgYikgOiBmdW4oYSkoYik7XG59XG5mdW5jdGlvbiBBMyhmdW4sIGEsIGIsIGMpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSAzID8gZnVuLmYoYSwgYiwgYykgOiBmdW4oYSkoYikoYyk7XG59XG5mdW5jdGlvbiBBNChmdW4sIGEsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA0ID8gZnVuLmYoYSwgYiwgYywgZCkgOiBmdW4oYSkoYikoYykoZCk7XG59XG5mdW5jdGlvbiBBNShmdW4sIGEsIGIsIGMsIGQsIGUpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA1ID8gZnVuLmYoYSwgYiwgYywgZCwgZSkgOiBmdW4oYSkoYikoYykoZCkoZSk7XG59XG5mdW5jdGlvbiBBNihmdW4sIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA2ID8gZnVuLmYoYSwgYiwgYywgZCwgZSwgZikgOiBmdW4oYSkoYikoYykoZCkoZSkoZik7XG59XG5mdW5jdGlvbiBBNyhmdW4sIGEsIGIsIGMsIGQsIGUsIGYsIGcpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA3ID8gZnVuLmYoYSwgYiwgYywgZCwgZSwgZiwgZykgOiBmdW4oYSkoYikoYykoZCkoZSkoZikoZyk7XG59XG5mdW5jdGlvbiBBOChmdW4sIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA4ID8gZnVuLmYoYSwgYiwgYywgZCwgZSwgZiwgZywgaCkgOiBmdW4oYSkoYikoYykoZCkoZSkoZikoZykoaCk7XG59XG5mdW5jdGlvbiBBOShmdW4sIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgsIGkpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA5ID8gZnVuLmYoYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSkgOiBmdW4oYSkoYikoYykoZCkoZSkoZikoZykoaCkoaSk7XG59XG5cbmNvbnNvbGUud2FybignQ29tcGlsZWQgaW4gREVCVUcgbW9kZS4gRm9sbG93IHRoZSBhZHZpY2UgYXQgaHR0cHM6Ly9lbG0tbGFuZy5vcmcvMC4xOS4wL29wdGltaXplIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UgYW5kIHNtYWxsZXIgYXNzZXRzLicpO1xuXG5cbnZhciBfTGlzdF9OaWxfVU5VU0VEID0geyAkOiAwIH07XG52YXIgX0xpc3RfTmlsID0geyAkOiAnW10nIH07XG5cbmZ1bmN0aW9uIF9MaXN0X0NvbnNfVU5VU0VEKGhkLCB0bCkgeyByZXR1cm4geyAkOiAxLCBhOiBoZCwgYjogdGwgfTsgfVxuZnVuY3Rpb24gX0xpc3RfQ29ucyhoZCwgdGwpIHsgcmV0dXJuIHsgJDogJzo6JywgYTogaGQsIGI6IHRsIH07IH1cblxuXG52YXIgX0xpc3RfY29ucyA9IEYyKF9MaXN0X0NvbnMpO1xuXG5mdW5jdGlvbiBfTGlzdF9mcm9tQXJyYXkoYXJyKVxue1xuXHR2YXIgb3V0ID0gX0xpc3RfTmlsO1xuXHRmb3IgKHZhciBpID0gYXJyLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHRvdXQgPSBfTGlzdF9Db25zKGFycltpXSwgb3V0KTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBfTGlzdF90b0FycmF5KHhzKVxue1xuXHRmb3IgKHZhciBvdXQgPSBbXTsgeHMuYjsgeHMgPSB4cy5iKSAvLyBXSElMRV9DT05TXG5cdHtcblx0XHRvdXQucHVzaCh4cy5hKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG52YXIgX0xpc3RfbWFwMiA9IEYzKGZ1bmN0aW9uKGYsIHhzLCB5cylcbntcblx0Zm9yICh2YXIgYXJyID0gW107IHhzLmIgJiYgeXMuYjsgeHMgPSB4cy5iLCB5cyA9IHlzLmIpIC8vIFdISUxFX0NPTlNFU1xuXHR7XG5cdFx0YXJyLnB1c2goQTIoZiwgeHMuYSwgeXMuYSkpO1xuXHR9XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoYXJyKTtcbn0pO1xuXG52YXIgX0xpc3RfbWFwMyA9IEY0KGZ1bmN0aW9uKGYsIHhzLCB5cywgenMpXG57XG5cdGZvciAodmFyIGFyciA9IFtdOyB4cy5iICYmIHlzLmIgJiYgenMuYjsgeHMgPSB4cy5iLCB5cyA9IHlzLmIsIHpzID0genMuYikgLy8gV0hJTEVfQ09OU0VTXG5cdHtcblx0XHRhcnIucHVzaChBMyhmLCB4cy5hLCB5cy5hLCB6cy5hKSk7XG5cdH1cblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShhcnIpO1xufSk7XG5cbnZhciBfTGlzdF9tYXA0ID0gRjUoZnVuY3Rpb24oZiwgd3MsIHhzLCB5cywgenMpXG57XG5cdGZvciAodmFyIGFyciA9IFtdOyB3cy5iICYmIHhzLmIgJiYgeXMuYiAmJiB6cy5iOyB3cyA9IHdzLmIsIHhzID0geHMuYiwgeXMgPSB5cy5iLCB6cyA9IHpzLmIpIC8vIFdISUxFX0NPTlNFU1xuXHR7XG5cdFx0YXJyLnB1c2goQTQoZiwgd3MuYSwgeHMuYSwgeXMuYSwgenMuYSkpO1xuXHR9XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoYXJyKTtcbn0pO1xuXG52YXIgX0xpc3RfbWFwNSA9IEY2KGZ1bmN0aW9uKGYsIHZzLCB3cywgeHMsIHlzLCB6cylcbntcblx0Zm9yICh2YXIgYXJyID0gW107IHZzLmIgJiYgd3MuYiAmJiB4cy5iICYmIHlzLmIgJiYgenMuYjsgdnMgPSB2cy5iLCB3cyA9IHdzLmIsIHhzID0geHMuYiwgeXMgPSB5cy5iLCB6cyA9IHpzLmIpIC8vIFdISUxFX0NPTlNFU1xuXHR7XG5cdFx0YXJyLnB1c2goQTUoZiwgdnMuYSwgd3MuYSwgeHMuYSwgeXMuYSwgenMuYSkpO1xuXHR9XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoYXJyKTtcbn0pO1xuXG52YXIgX0xpc3Rfc29ydEJ5ID0gRjIoZnVuY3Rpb24oZiwgeHMpXG57XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoX0xpc3RfdG9BcnJheSh4cykuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0cmV0dXJuIF9VdGlsc19jbXAoZihhKSwgZihiKSk7XG5cdH0pKTtcbn0pO1xuXG52YXIgX0xpc3Rfc29ydFdpdGggPSBGMihmdW5jdGlvbihmLCB4cylcbntcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShfTGlzdF90b0FycmF5KHhzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHR2YXIgb3JkID0gQTIoZiwgYSwgYik7XG5cdFx0cmV0dXJuIG9yZCA9PT0gZWxtJGNvcmUkQmFzaWNzJEVRID8gMCA6IG9yZCA9PT0gZWxtJGNvcmUkQmFzaWNzJExUID8gLTEgOiAxO1xuXHR9KSk7XG59KTtcblxuXG5cbi8vIEVRVUFMSVRZXG5cbmZ1bmN0aW9uIF9VdGlsc19lcSh4LCB5KVxue1xuXHRmb3IgKFxuXHRcdHZhciBwYWlyLCBzdGFjayA9IFtdLCBpc0VxdWFsID0gX1V0aWxzX2VxSGVscCh4LCB5LCAwLCBzdGFjayk7XG5cdFx0aXNFcXVhbCAmJiAocGFpciA9IHN0YWNrLnBvcCgpKTtcblx0XHRpc0VxdWFsID0gX1V0aWxzX2VxSGVscChwYWlyLmEsIHBhaXIuYiwgMCwgc3RhY2spXG5cdFx0KVxuXHR7fVxuXG5cdHJldHVybiBpc0VxdWFsO1xufVxuXG5mdW5jdGlvbiBfVXRpbHNfZXFIZWxwKHgsIHksIGRlcHRoLCBzdGFjaylcbntcblx0aWYgKGRlcHRoID4gMTAwKVxuXHR7XG5cdFx0c3RhY2sucHVzaChfVXRpbHNfVHVwbGUyKHgseSkpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHggPT09IHkpXG5cdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgeCA9PT0gbnVsbCB8fCB5ID09PSBudWxsKVxuXHR7XG5cdFx0dHlwZW9mIHggPT09ICdmdW5jdGlvbicgJiYgX0RlYnVnX2NyYXNoKDUpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKi9cblx0aWYgKHguJCA9PT0gJ1NldF9lbG1fYnVpbHRpbicpXG5cdHtcblx0XHR4ID0gZWxtJGNvcmUkU2V0JHRvTGlzdCh4KTtcblx0XHR5ID0gZWxtJGNvcmUkU2V0JHRvTGlzdCh5KTtcblx0fVxuXHRpZiAoeC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJyB8fCB4LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJylcblx0e1xuXHRcdHggPSBlbG0kY29yZSREaWN0JHRvTGlzdCh4KTtcblx0XHR5ID0gZWxtJGNvcmUkRGljdCR0b0xpc3QoeSk7XG5cdH1cblx0Ly8qL1xuXG5cdC8qKl9VTlVTRUQvXG5cdGlmICh4LiQgPCAwKVxuXHR7XG5cdFx0eCA9IGVsbSRjb3JlJERpY3QkdG9MaXN0KHgpO1xuXHRcdHkgPSBlbG0kY29yZSREaWN0JHRvTGlzdCh5KTtcblx0fVxuXHQvLyovXG5cblx0Zm9yICh2YXIga2V5IGluIHgpXG5cdHtcblx0XHRpZiAoIV9VdGlsc19lcUhlbHAoeFtrZXldLCB5W2tleV0sIGRlcHRoICsgMSwgc3RhY2spKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbnZhciBfVXRpbHNfZXF1YWwgPSBGMihfVXRpbHNfZXEpO1xudmFyIF9VdGlsc19ub3RFcXVhbCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuICFfVXRpbHNfZXEoYSxiKTsgfSk7XG5cblxuXG4vLyBDT01QQVJJU09OU1xuXG4vLyBDb2RlIGluIEdlbmVyYXRlL0phdmFTY3JpcHQuaHMsIEJhc2ljcy5qcywgYW5kIExpc3QuanMgZGVwZW5kcyBvblxuLy8gdGhlIHBhcnRpY3VsYXIgaW50ZWdlciB2YWx1ZXMgYXNzaWduZWQgdG8gTFQsIEVRLCBhbmQgR1QuXG5cbmZ1bmN0aW9uIF9VdGlsc19jbXAoeCwgeSwgb3JkKVxue1xuXHRpZiAodHlwZW9mIHggIT09ICdvYmplY3QnKVxuXHR7XG5cdFx0cmV0dXJuIHggPT09IHkgPyAvKkVRKi8gMCA6IHggPCB5ID8gLypMVCovIC0xIDogLypHVCovIDE7XG5cdH1cblxuXHQvKiovXG5cdGlmICh4IGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0dmFyIGEgPSB4LnZhbHVlT2YoKTtcblx0XHR2YXIgYiA9IHkudmFsdWVPZigpO1xuXHRcdHJldHVybiBhID09PSBiID8gMCA6IGEgPCBiID8gLTEgOiAxO1xuXHR9XG5cdC8vKi9cblxuXHQvKipfVU5VU0VEL1xuXHRpZiAodHlwZW9mIHguJCA9PT0gJ3VuZGVmaW5lZCcpXG5cdC8vKi9cblx0LyoqL1xuXHRpZiAoeC4kWzBdID09PSAnIycpXG5cdC8vKi9cblx0e1xuXHRcdHJldHVybiAob3JkID0gX1V0aWxzX2NtcCh4LmEsIHkuYSkpXG5cdFx0XHQ/IG9yZFxuXHRcdFx0OiAob3JkID0gX1V0aWxzX2NtcCh4LmIsIHkuYikpXG5cdFx0XHRcdD8gb3JkXG5cdFx0XHRcdDogX1V0aWxzX2NtcCh4LmMsIHkuYyk7XG5cdH1cblxuXHQvLyB0cmF2ZXJzZSBjb25zZXMgdW50aWwgZW5kIG9mIGEgbGlzdCBvciBhIG1pc21hdGNoXG5cdGZvciAoOyB4LmIgJiYgeS5iICYmICEob3JkID0gX1V0aWxzX2NtcCh4LmEsIHkuYSkpOyB4ID0geC5iLCB5ID0geS5iKSB7fSAvLyBXSElMRV9DT05TRVNcblx0cmV0dXJuIG9yZCB8fCAoeC5iID8gLypHVCovIDEgOiB5LmIgPyAvKkxUKi8gLTEgOiAvKkVRKi8gMCk7XG59XG5cbnZhciBfVXRpbHNfbHQgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBfVXRpbHNfY21wKGEsIGIpIDwgMDsgfSk7XG52YXIgX1V0aWxzX2xlID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gX1V0aWxzX2NtcChhLCBiKSA8IDE7IH0pO1xudmFyIF9VdGlsc19ndCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIF9VdGlsc19jbXAoYSwgYikgPiAwOyB9KTtcbnZhciBfVXRpbHNfZ2UgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBfVXRpbHNfY21wKGEsIGIpID49IDA7IH0pO1xuXG52YXIgX1V0aWxzX2NvbXBhcmUgPSBGMihmdW5jdGlvbih4LCB5KVxue1xuXHR2YXIgbiA9IF9VdGlsc19jbXAoeCwgeSk7XG5cdHJldHVybiBuIDwgMCA/IGVsbSRjb3JlJEJhc2ljcyRMVCA6IG4gPyBlbG0kY29yZSRCYXNpY3MkR1QgOiBlbG0kY29yZSRCYXNpY3MkRVE7XG59KTtcblxuXG4vLyBDT01NT04gVkFMVUVTXG5cbnZhciBfVXRpbHNfVHVwbGUwX1VOVVNFRCA9IDA7XG52YXIgX1V0aWxzX1R1cGxlMCA9IHsgJDogJyMwJyB9O1xuXG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUyX1VOVVNFRChhLCBiKSB7IHJldHVybiB7IGE6IGEsIGI6IGIgfTsgfVxuZnVuY3Rpb24gX1V0aWxzX1R1cGxlMihhLCBiKSB7IHJldHVybiB7ICQ6ICcjMicsIGE6IGEsIGI6IGIgfTsgfVxuXG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUzX1VOVVNFRChhLCBiLCBjKSB7IHJldHVybiB7IGE6IGEsIGI6IGIsIGM6IGMgfTsgfVxuZnVuY3Rpb24gX1V0aWxzX1R1cGxlMyhhLCBiLCBjKSB7IHJldHVybiB7ICQ6ICcjMycsIGE6IGEsIGI6IGIsIGM6IGMgfTsgfVxuXG5mdW5jdGlvbiBfVXRpbHNfY2hyX1VOVVNFRChjKSB7IHJldHVybiBjOyB9XG5mdW5jdGlvbiBfVXRpbHNfY2hyKGMpIHsgcmV0dXJuIG5ldyBTdHJpbmcoYyk7IH1cblxuXG4vLyBSRUNPUkRTXG5cbmZ1bmN0aW9uIF9VdGlsc191cGRhdGUob2xkUmVjb3JkLCB1cGRhdGVkRmllbGRzKVxue1xuXHR2YXIgbmV3UmVjb3JkID0ge307XG5cblx0Zm9yICh2YXIga2V5IGluIG9sZFJlY29yZClcblx0e1xuXHRcdG5ld1JlY29yZFtrZXldID0gb2xkUmVjb3JkW2tleV07XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gdXBkYXRlZEZpZWxkcylcblx0e1xuXHRcdG5ld1JlY29yZFtrZXldID0gdXBkYXRlZEZpZWxkc1trZXldO1xuXHR9XG5cblx0cmV0dXJuIG5ld1JlY29yZDtcbn1cblxuXG4vLyBBUFBFTkRcblxudmFyIF9VdGlsc19hcHBlbmQgPSBGMihfVXRpbHNfYXApO1xuXG5mdW5jdGlvbiBfVXRpbHNfYXAoeHMsIHlzKVxue1xuXHQvLyBhcHBlbmQgU3RyaW5nc1xuXHRpZiAodHlwZW9mIHhzID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiB4cyArIHlzO1xuXHR9XG5cblx0Ly8gYXBwZW5kIExpc3RzXG5cdGlmICgheHMuYilcblx0e1xuXHRcdHJldHVybiB5cztcblx0fVxuXHR2YXIgcm9vdCA9IF9MaXN0X0NvbnMoeHMuYSwgeXMpO1xuXHR4cyA9IHhzLmJcblx0Zm9yICh2YXIgY3VyciA9IHJvb3Q7IHhzLmI7IHhzID0geHMuYikgLy8gV0hJTEVfQ09OU1xuXHR7XG5cdFx0Y3VyciA9IGN1cnIuYiA9IF9MaXN0X0NvbnMoeHMuYSwgeXMpO1xuXHR9XG5cdHJldHVybiByb290O1xufVxuXG5cblxudmFyIF9Kc0FycmF5X2VtcHR5ID0gW107XG5cbmZ1bmN0aW9uIF9Kc0FycmF5X3NpbmdsZXRvbih2YWx1ZSlcbntcbiAgICByZXR1cm4gW3ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gX0pzQXJyYXlfbGVuZ3RoKGFycmF5KVxue1xuICAgIHJldHVybiBhcnJheS5sZW5ndGg7XG59XG5cbnZhciBfSnNBcnJheV9pbml0aWFsaXplID0gRjMoZnVuY3Rpb24oc2l6ZSwgb2Zmc2V0LCBmdW5jKVxue1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGZ1bmMob2Zmc2V0ICsgaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX0pzQXJyYXlfaW5pdGlhbGl6ZUZyb21MaXN0ID0gRjIoZnVuY3Rpb24gKG1heCwgbHMpXG57XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShtYXgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXggJiYgbHMuYjsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gbHMuYTtcbiAgICAgICAgbHMgPSBscy5iO1xuICAgIH1cblxuICAgIHJlc3VsdC5sZW5ndGggPSBpO1xuICAgIHJldHVybiBfVXRpbHNfVHVwbGUyKHJlc3VsdCwgbHMpO1xufSk7XG5cbnZhciBfSnNBcnJheV91bnNhZmVHZXQgPSBGMihmdW5jdGlvbihpbmRleCwgYXJyYXkpXG57XG4gICAgcmV0dXJuIGFycmF5W2luZGV4XTtcbn0pO1xuXG52YXIgX0pzQXJyYXlfdW5zYWZlU2V0ID0gRjMoZnVuY3Rpb24oaW5kZXgsIHZhbHVlLCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBhcnJheVtpXTtcbiAgICB9XG5cbiAgICByZXN1bHRbaW5kZXhdID0gdmFsdWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX0pzQXJyYXlfcHVzaCA9IEYyKGZ1bmN0aW9uKHZhbHVlLCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoICsgMSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gYXJyYXlbaV07XG4gICAgfVxuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfSnNBcnJheV9mb2xkbCA9IEYzKGZ1bmN0aW9uKGZ1bmMsIGFjYywgYXJyYXkpXG57XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBhY2MgPSBBMihmdW5jLCBhcnJheVtpXSwgYWNjKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xufSk7XG5cbnZhciBfSnNBcnJheV9mb2xkciA9IEYzKGZ1bmN0aW9uKGZ1bmMsIGFjYywgYXJyYXkpXG57XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgIHtcbiAgICAgICAgYWNjID0gQTIoZnVuYywgYXJyYXlbaV0sIGFjYyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbn0pO1xuXG52YXIgX0pzQXJyYXlfbWFwID0gRjIoZnVuY3Rpb24oZnVuYywgYXJyYXkpXG57XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gZnVuYyhhcnJheVtpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX0pzQXJyYXlfaW5kZXhlZE1hcCA9IEYzKGZ1bmN0aW9uKGZ1bmMsIG9mZnNldCwgYXJyYXkpXG57XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gQTIoZnVuYywgb2Zmc2V0ICsgaSwgYXJyYXlbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxudmFyIF9Kc0FycmF5X3NsaWNlID0gRjMoZnVuY3Rpb24oZnJvbSwgdG8sIGFycmF5KVxue1xuICAgIHJldHVybiBhcnJheS5zbGljZShmcm9tLCB0byk7XG59KTtcblxudmFyIF9Kc0FycmF5X2FwcGVuZE4gPSBGMyhmdW5jdGlvbihuLCBkZXN0LCBzb3VyY2UpXG57XG4gICAgdmFyIGRlc3RMZW4gPSBkZXN0Lmxlbmd0aDtcbiAgICB2YXIgaXRlbXNUb0NvcHkgPSBuIC0gZGVzdExlbjtcblxuICAgIGlmIChpdGVtc1RvQ29weSA+IHNvdXJjZS5sZW5ndGgpXG4gICAge1xuICAgICAgICBpdGVtc1RvQ29weSA9IHNvdXJjZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIHNpemUgPSBkZXN0TGVuICsgaXRlbXNUb0NvcHk7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShzaXplKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVzdExlbjsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gZGVzdFtpXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zVG9Db3B5OyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaSArIGRlc3RMZW5dID0gc291cmNlW2ldO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxuXG5cbi8vIExPR1xuXG52YXIgX0RlYnVnX2xvZ19VTlVTRUQgPSBGMihmdW5jdGlvbih0YWcsIHZhbHVlKVxue1xuXHRyZXR1cm4gdmFsdWU7XG59KTtcblxudmFyIF9EZWJ1Z19sb2cgPSBGMihmdW5jdGlvbih0YWcsIHZhbHVlKVxue1xuXHRjb25zb2xlLmxvZyh0YWcgKyAnOiAnICsgX0RlYnVnX3RvU3RyaW5nKHZhbHVlKSk7XG5cdHJldHVybiB2YWx1ZTtcbn0pO1xuXG5cbi8vIFRPRE9TXG5cbmZ1bmN0aW9uIF9EZWJ1Z190b2RvKG1vZHVsZU5hbWUsIHJlZ2lvbilcbntcblx0cmV0dXJuIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRfRGVidWdfY3Jhc2goOCwgbW9kdWxlTmFtZSwgcmVnaW9uLCBtZXNzYWdlKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3RvZG9DYXNlKG1vZHVsZU5hbWUsIHJlZ2lvbiwgdmFsdWUpXG57XG5cdHJldHVybiBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0X0RlYnVnX2NyYXNoKDksIG1vZHVsZU5hbWUsIHJlZ2lvbiwgdmFsdWUsIG1lc3NhZ2UpO1xuXHR9O1xufVxuXG5cbi8vIFRPIFNUUklOR1xuXG5mdW5jdGlvbiBfRGVidWdfdG9TdHJpbmdfVU5VU0VEKHZhbHVlKVxue1xuXHRyZXR1cm4gJzxpbnRlcm5hbHM+Jztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3RvU3RyaW5nKHZhbHVlKVxue1xuXHRyZXR1cm4gX0RlYnVnX3RvQW5zaVN0cmluZyhmYWxzZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIHZhbHVlKVxue1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19pbnRlcm5hbENvbG9yKGFuc2ksICc8ZnVuY3Rpb24+Jyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCB2YWx1ZSA/ICdUcnVlJyA6ICdGYWxzZScpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX251bWJlckNvbG9yKGFuc2ksIHZhbHVlICsgJycpO1xuXHR9XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19jaGFyQ29sb3IoYW5zaSwgXCInXCIgKyBfRGVidWdfYWRkU2xhc2hlcyh2YWx1ZSwgdHJ1ZSkgKyBcIidcIik7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfc3RyaW5nQ29sb3IoYW5zaSwgJ1wiJyArIF9EZWJ1Z19hZGRTbGFzaGVzKHZhbHVlLCBmYWxzZSkgKyAnXCInKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICckJyBpbiB2YWx1ZSlcblx0e1xuXHRcdHZhciB0YWcgPSB2YWx1ZS4kO1xuXG5cdFx0aWYgKHR5cGVvZiB0YWcgPT09ICdudW1iZXInKVxuXHRcdHtcblx0XHRcdHJldHVybiBfRGVidWdfaW50ZXJuYWxDb2xvcihhbnNpLCAnPGludGVybmFscz4nKTtcblx0XHR9XG5cblx0XHRpZiAodGFnWzBdID09PSAnIycpXG5cdFx0e1xuXHRcdFx0dmFyIG91dHB1dCA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgayBpbiB2YWx1ZSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKGsgPT09ICckJykgY29udGludWU7XG5cdFx0XHRcdG91dHB1dC5wdXNoKF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWVba10pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAnKCcgKyBvdXRwdXQuam9pbignLCcpICsgJyknO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdTZXRfZWxtX2J1aWx0aW4nKVxuXHRcdHtcblx0XHRcdHJldHVybiBfRGVidWdfY3RvckNvbG9yKGFuc2ksICdTZXQnKVxuXHRcdFx0XHQrIF9EZWJ1Z19mYWRlQ29sb3IoYW5zaSwgJy5mcm9tTGlzdCcpICsgJyAnXG5cdFx0XHRcdCsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCBlbG0kY29yZSRTZXQkdG9MaXN0KHZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicgfHwgdGFnID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgJ0RpY3QnKVxuXHRcdFx0XHQrIF9EZWJ1Z19mYWRlQ29sb3IoYW5zaSwgJy5mcm9tTGlzdCcpICsgJyAnXG5cdFx0XHRcdCsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCBlbG0kY29yZSREaWN0JHRvTGlzdCh2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdBcnJheV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgJ0FycmF5Jylcblx0XHRcdFx0KyBfRGVidWdfZmFkZUNvbG9yKGFuc2ksICcuZnJvbUxpc3QnKSArICcgJ1xuXHRcdFx0XHQrIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgZWxtJGNvcmUkQXJyYXkkdG9MaXN0KHZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJzo6JyB8fCB0YWcgPT09ICdbXScpXG5cdFx0e1xuXHRcdFx0dmFyIG91dHB1dCA9ICdbJztcblxuXHRcdFx0dmFsdWUuYiAmJiAob3V0cHV0ICs9IF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWUuYSksIHZhbHVlID0gdmFsdWUuYilcblxuXHRcdFx0Zm9yICg7IHZhbHVlLmI7IHZhbHVlID0gdmFsdWUuYikgLy8gV0hJTEVfQ09OU1xuXHRcdFx0e1xuXHRcdFx0XHRvdXRwdXQgKz0gJywnICsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZS5hKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvdXRwdXQgKyAnXSc7XG5cdFx0fVxuXG5cdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdGZvciAodmFyIGkgaW4gdmFsdWUpXG5cdFx0e1xuXHRcdFx0aWYgKGkgPT09ICckJykgY29udGludWU7XG5cdFx0XHR2YXIgc3RyID0gX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZVtpXSk7XG5cdFx0XHR2YXIgYzAgPSBzdHJbMF07XG5cdFx0XHR2YXIgcGFyZW5sZXNzID0gYzAgPT09ICd7JyB8fCBjMCA9PT0gJygnIHx8IGMwID09PSAnWycgfHwgYzAgPT09ICc8JyB8fCBjMCA9PT0gJ1wiJyB8fCBzdHIuaW5kZXhPZignICcpIDwgMDtcblx0XHRcdG91dHB1dCArPSAnICcgKyAocGFyZW5sZXNzID8gc3RyIDogJygnICsgc3RyICsgJyknKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgdGFnKSArIG91dHB1dDtcblx0fVxuXG5cdGlmICh0eXBlb2YgRGF0YVZpZXcgPT09ICdmdW5jdGlvbicgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRhVmlldylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfc3RyaW5nQ29sb3IoYW5zaSwgJzwnICsgdmFsdWUuYnl0ZUxlbmd0aCArICcgYnl0ZXM+Jyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIEZpbGUgPT09ICdmdW5jdGlvbicgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19pbnRlcm5hbENvbG9yKGFuc2ksICc8JyArIHZhbHVlLm5hbWUgKyAnPicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG5cdHtcblx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0Zm9yICh2YXIga2V5IGluIHZhbHVlKVxuXHRcdHtcblx0XHRcdHZhciBmaWVsZCA9IGtleVswXSA9PT0gJ18nID8ga2V5LnNsaWNlKDEpIDoga2V5O1xuXHRcdFx0b3V0cHV0LnB1c2goX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCBmaWVsZCkgKyAnID0gJyArIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWVba2V5XSkpO1xuXHRcdH1cblx0XHRpZiAob3V0cHV0Lmxlbmd0aCA9PT0gMClcblx0XHR7XG5cdFx0XHRyZXR1cm4gJ3t9Jztcblx0XHR9XG5cdFx0cmV0dXJuICd7ICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgfSc7XG5cdH1cblxuXHRyZXR1cm4gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgJzxpbnRlcm5hbHM+Jyk7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19hZGRTbGFzaGVzKHN0ciwgaXNDaGFyKVxue1xuXHR2YXIgcyA9IHN0clxuXHRcdC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG5cdFx0LnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKVxuXHRcdC5yZXBsYWNlKC9cXHQvZywgJ1xcXFx0Jylcblx0XHQucmVwbGFjZSgvXFxyL2csICdcXFxccicpXG5cdFx0LnJlcGxhY2UoL1xcdi9nLCAnXFxcXHYnKVxuXHRcdC5yZXBsYWNlKC9cXDAvZywgJ1xcXFwwJyk7XG5cblx0aWYgKGlzQ2hhcilcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcJy9nLCAnXFxcXFxcJycpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYls5Nm0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX251bWJlckNvbG9yKGFuc2ksIHN0cmluZylcbntcblx0cmV0dXJuIGFuc2kgPyAnXFx4MWJbOTVtJyArIHN0cmluZyArICdcXHgxYlswbScgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19zdHJpbmdDb2xvcihhbnNpLCBzdHJpbmcpXG57XG5cdHJldHVybiBhbnNpID8gJ1xceDFiWzkzbScgKyBzdHJpbmcgKyAnXFx4MWJbMG0nIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfY2hhckNvbG9yKGFuc2ksIHN0cmluZylcbntcblx0cmV0dXJuIGFuc2kgPyAnXFx4MWJbOTJtJyArIHN0cmluZyArICdcXHgxYlswbScgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19mYWRlQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYlszN20nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYls5NG0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3RvSGV4RGlnaXQobilcbntcblx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUobiA8IDEwID8gNDggKyBuIDogNTUgKyBuKTtcbn1cblxuXG4vLyBDUkFTSFxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z19jcmFzaF9VTlVTRUQoaWRlbnRpZmllcilcbntcblx0dGhyb3cgbmV3IEVycm9yKCdodHRwczovL2dpdGh1Yi5jb20vZWxtL2NvcmUvYmxvYi8xLjAuMC9oaW50cy8nICsgaWRlbnRpZmllciArICcubWQnKTtcbn1cblxuXG5mdW5jdGlvbiBfRGVidWdfY3Jhc2goaWRlbnRpZmllciwgZmFjdDEsIGZhY3QyLCBmYWN0MywgZmFjdDQpXG57XG5cdHN3aXRjaChpZGVudGlmaWVyKVxuXHR7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdXaGF0IG5vZGUgc2hvdWxkIEkgdGFrZSBvdmVyPyBJbiBKYXZhU2NyaXB0IEkgbmVlZCBzb21ldGhpbmcgbGlrZTpcXG5cXG4gICAgRWxtLk1haW4uaW5pdCh7XFxuICAgICAgICBub2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsbS1ub2RlXCIpXFxuICAgIH0pXFxuXFxuWW91IG5lZWQgdG8gZG8gdGhpcyB3aXRoIGFueSBCcm93c2VyLnNhbmRib3ggb3IgQnJvd3Nlci5lbGVtZW50IHByb2dyYW0uJyk7XG5cblx0XHRjYXNlIDE6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIuYXBwbGljYXRpb24gcHJvZ3JhbXMgY2Fubm90IGhhbmRsZSBVUkxzIGxpa2UgdGhpczpcXG5cXG4gICAgJyArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgKyAnXFxuXFxuV2hhdCBpcyB0aGUgcm9vdD8gVGhlIHJvb3Qgb2YgeW91ciBmaWxlIHN5c3RlbT8gVHJ5IGxvb2tpbmcgYXQgdGhpcyBwcm9ncmFtIHdpdGggYGVsbSByZWFjdG9yYCBvciBzb21lIG90aGVyIHNlcnZlci4nKTtcblxuXHRcdGNhc2UgMjpcblx0XHRcdHZhciBqc29uRXJyb3JTdHJpbmcgPSBmYWN0MTtcblx0XHRcdHRocm93IG5ldyBFcnJvcignUHJvYmxlbSB3aXRoIHRoZSBmbGFncyBnaXZlbiB0byB5b3VyIEVsbSBwcm9ncmFtIG9uIGluaXRpYWxpemF0aW9uLlxcblxcbicgKyBqc29uRXJyb3JTdHJpbmcpO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdFx0dmFyIHBvcnROYW1lID0gZmFjdDE7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGNhbiBvbmx5IGJlIG9uZSBwb3J0IG5hbWVkIGAnICsgcG9ydE5hbWUgKyAnYCwgYnV0IHlvdXIgcHJvZ3JhbSBoYXMgbXVsdGlwbGUuJyk7XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHR2YXIgcG9ydE5hbWUgPSBmYWN0MTtcblx0XHRcdHZhciBwcm9ibGVtID0gZmFjdDI7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBzZW5kIGFuIHVuZXhwZWN0ZWQgdHlwZSBvZiB2YWx1ZSB0aHJvdWdoIHBvcnQgYCcgKyBwb3J0TmFtZSArICdgOlxcbicgKyBwcm9ibGVtKTtcblxuXHRcdGNhc2UgNTpcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIHVzZSBgKD09KWAgb24gZnVuY3Rpb25zLlxcblRoZXJlIGlzIG5vIHdheSB0byBrbm93IGlmIGZ1bmN0aW9ucyBhcmUgXCJ0aGUgc2FtZVwiIGluIHRoZSBFbG0gc2Vuc2UuXFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly9wYWNrYWdlLmVsbS1sYW5nLm9yZy9wYWNrYWdlcy9lbG0vY29yZS9sYXRlc3QvQmFzaWNzIz09IHdoaWNoIGRlc2NyaWJlcyB3aHkgaXQgaXMgdGhpcyB3YXkgYW5kIHdoYXQgdGhlIGJldHRlciB2ZXJzaW9uIHdpbGwgbG9vayBsaWtlLicpO1xuXG5cdFx0Y2FzZSA2OlxuXHRcdFx0dmFyIG1vZHVsZU5hbWUgPSBmYWN0MTtcblx0XHRcdHRocm93IG5ldyBFcnJvcignWW91ciBwYWdlIGlzIGxvYWRpbmcgbXVsdGlwbGUgRWxtIHNjcmlwdHMgd2l0aCBhIG1vZHVsZSBuYW1lZCAnICsgbW9kdWxlTmFtZSArICcuIE1heWJlIGEgZHVwbGljYXRlIHNjcmlwdCBpcyBnZXR0aW5nIGxvYWRlZCBhY2NpZGVudGFsbHk/IElmIG5vdCwgcmVuYW1lIG9uZSBvZiB0aGVtIHNvIEkga25vdyB3aGljaCBpcyB3aGljaCEnKTtcblxuXHRcdGNhc2UgODpcblx0XHRcdHZhciBtb2R1bGVOYW1lID0gZmFjdDE7XG5cdFx0XHR2YXIgcmVnaW9uID0gZmFjdDI7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IGZhY3QzO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUT0RPIGluIG1vZHVsZSBgJyArIG1vZHVsZU5hbWUgKyAnYCAnICsgX0RlYnVnX3JlZ2lvblRvU3RyaW5nKHJlZ2lvbikgKyAnXFxuXFxuJyArIG1lc3NhZ2UpO1xuXG5cdFx0Y2FzZSA5OlxuXHRcdFx0dmFyIG1vZHVsZU5hbWUgPSBmYWN0MTtcblx0XHRcdHZhciByZWdpb24gPSBmYWN0Mjtcblx0XHRcdHZhciB2YWx1ZSA9IGZhY3QzO1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBmYWN0NDtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0J1RPRE8gaW4gbW9kdWxlIGAnICsgbW9kdWxlTmFtZSArICdgIGZyb20gdGhlIGBjYXNlYCBleHByZXNzaW9uICdcblx0XHRcdFx0KyBfRGVidWdfcmVnaW9uVG9TdHJpbmcocmVnaW9uKSArICdcXG5cXG5JdCByZWNlaXZlZCB0aGUgZm9sbG93aW5nIHZhbHVlOlxcblxcbiAgICAnXG5cdFx0XHRcdCsgX0RlYnVnX3RvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKCdcXG4nLCAnXFxuICAgICcpXG5cdFx0XHRcdCsgJ1xcblxcbkJ1dCB0aGUgYnJhbmNoIHRoYXQgaGFuZGxlcyBpdCBzYXlzOlxcblxcbiAgICAnICsgbWVzc2FnZS5yZXBsYWNlKCdcXG4nLCAnXFxuICAgICcpXG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAxMDpcblx0XHRcdHRocm93IG5ldyBFcnJvcignQnVnIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vdmlydHVhbC1kb20vaXNzdWVzJyk7XG5cblx0XHRjYXNlIDExOlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGVyZm9ybSBtb2QgMC4gRGl2aXNpb24gYnkgemVybyBlcnJvci4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfRGVidWdfcmVnaW9uVG9TdHJpbmcocmVnaW9uKVxue1xuXHRpZiAocmVnaW9uLnN0YXJ0LmxpbmUgPT09IHJlZ2lvbi5lbmQubGluZSlcblx0e1xuXHRcdHJldHVybiAnb24gbGluZSAnICsgcmVnaW9uLnN0YXJ0LmxpbmU7XG5cdH1cblx0cmV0dXJuICdvbiBsaW5lcyAnICsgcmVnaW9uLnN0YXJ0LmxpbmUgKyAnIHRocm91Z2ggJyArIHJlZ2lvbi5lbmQubGluZTtcbn1cblxuXG5cbi8vIE1BVEhcblxudmFyIF9CYXNpY3NfYWRkID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSArIGI7IH0pO1xudmFyIF9CYXNpY3Nfc3ViID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pO1xudmFyIF9CYXNpY3NfbXVsID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAqIGI7IH0pO1xudmFyIF9CYXNpY3NfZmRpdiA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgLyBiOyB9KTtcbnZhciBfQmFzaWNzX2lkaXYgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiAoYSAvIGIpIHwgMDsgfSk7XG52YXIgX0Jhc2ljc19wb3cgPSBGMihNYXRoLnBvdyk7XG5cbnZhciBfQmFzaWNzX3JlbWFpbmRlckJ5ID0gRjIoZnVuY3Rpb24oYiwgYSkgeyByZXR1cm4gYSAlIGI7IH0pO1xuXG4vLyBodHRwczovL3d3dy5taWNyb3NvZnQuY29tL2VuLXVzL3Jlc2VhcmNoL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAyL2Rpdm1vZG5vdGUtbGV0dGVyLnBkZlxudmFyIF9CYXNpY3NfbW9kQnkgPSBGMihmdW5jdGlvbihtb2R1bHVzLCB4KVxue1xuXHR2YXIgYW5zd2VyID0geCAlIG1vZHVsdXM7XG5cdHJldHVybiBtb2R1bHVzID09PSAwXG5cdFx0PyBfRGVidWdfY3Jhc2goMTEpXG5cdFx0OlxuXHQoKGFuc3dlciA+IDAgJiYgbW9kdWx1cyA8IDApIHx8IChhbnN3ZXIgPCAwICYmIG1vZHVsdXMgPiAwKSlcblx0XHQ/IGFuc3dlciArIG1vZHVsdXNcblx0XHQ6IGFuc3dlcjtcbn0pO1xuXG5cbi8vIFRSSUdPTk9NRVRSWVxuXG52YXIgX0Jhc2ljc19waSA9IE1hdGguUEk7XG52YXIgX0Jhc2ljc19lID0gTWF0aC5FO1xudmFyIF9CYXNpY3NfY29zID0gTWF0aC5jb3M7XG52YXIgX0Jhc2ljc19zaW4gPSBNYXRoLnNpbjtcbnZhciBfQmFzaWNzX3RhbiA9IE1hdGgudGFuO1xudmFyIF9CYXNpY3NfYWNvcyA9IE1hdGguYWNvcztcbnZhciBfQmFzaWNzX2FzaW4gPSBNYXRoLmFzaW47XG52YXIgX0Jhc2ljc19hdGFuID0gTWF0aC5hdGFuO1xudmFyIF9CYXNpY3NfYXRhbjIgPSBGMihNYXRoLmF0YW4yKTtcblxuXG4vLyBNT1JFIE1BVEhcblxuZnVuY3Rpb24gX0Jhc2ljc190b0Zsb2F0KHgpIHsgcmV0dXJuIHg7IH1cbmZ1bmN0aW9uIF9CYXNpY3NfdHJ1bmNhdGUobikgeyByZXR1cm4gbiB8IDA7IH1cbmZ1bmN0aW9uIF9CYXNpY3NfaXNJbmZpbml0ZShuKSB7IHJldHVybiBuID09PSBJbmZpbml0eSB8fCBuID09PSAtSW5maW5pdHk7IH1cblxudmFyIF9CYXNpY3NfY2VpbGluZyA9IE1hdGguY2VpbDtcbnZhciBfQmFzaWNzX2Zsb29yID0gTWF0aC5mbG9vcjtcbnZhciBfQmFzaWNzX3JvdW5kID0gTWF0aC5yb3VuZDtcbnZhciBfQmFzaWNzX3NxcnQgPSBNYXRoLnNxcnQ7XG52YXIgX0Jhc2ljc19sb2cgPSBNYXRoLmxvZztcbnZhciBfQmFzaWNzX2lzTmFOID0gaXNOYU47XG5cblxuLy8gQk9PTEVBTlNcblxuZnVuY3Rpb24gX0Jhc2ljc19ub3QoYm9vbCkgeyByZXR1cm4gIWJvb2w7IH1cbnZhciBfQmFzaWNzX2FuZCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgJiYgYjsgfSk7XG52YXIgX0Jhc2ljc19vciAgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIHx8IGI7IH0pO1xudmFyIF9CYXNpY3NfeG9yID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAhPT0gYjsgfSk7XG5cblxuXG5mdW5jdGlvbiBfQ2hhcl90b0NvZGUoY2hhcilcbntcblx0dmFyIGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG5cdGlmICgweEQ4MDAgPD0gY29kZSAmJiBjb2RlIDw9IDB4REJGRilcblx0e1xuXHRcdHJldHVybiAoY29kZSAtIDB4RDgwMCkgKiAweDQwMCArIGNoYXIuY2hhckNvZGVBdCgxKSAtIDB4REMwMCArIDB4MTAwMDBcblx0fVxuXHRyZXR1cm4gY29kZTtcbn1cblxuZnVuY3Rpb24gX0NoYXJfZnJvbUNvZGUoY29kZSlcbntcblx0cmV0dXJuIF9VdGlsc19jaHIoXG5cdFx0KGNvZGUgPCAwIHx8IDB4MTBGRkZGIDwgY29kZSlcblx0XHRcdD8gJ1xcdUZGRkQnXG5cdFx0XHQ6XG5cdFx0KGNvZGUgPD0gMHhGRkZGKVxuXHRcdFx0PyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpXG5cdFx0XHQ6XG5cdFx0KGNvZGUgLT0gMHgxMDAwMCxcblx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcihjb2RlIC8gMHg0MDApICsgMHhEODAwLCBjb2RlICUgMHg0MDAgKyAweERDMDApXG5cdFx0KVxuXHQpO1xufVxuXG5mdW5jdGlvbiBfQ2hhcl90b1VwcGVyKGNoYXIpXG57XG5cdHJldHVybiBfVXRpbHNfY2hyKGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5cbmZ1bmN0aW9uIF9DaGFyX3RvTG93ZXIoY2hhcilcbntcblx0cmV0dXJuIF9VdGlsc19jaHIoY2hhci50b0xvd2VyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gX0NoYXJfdG9Mb2NhbGVVcHBlcihjaGFyKVxue1xuXHRyZXR1cm4gX1V0aWxzX2NocihjaGFyLnRvTG9jYWxlVXBwZXJDYXNlKCkpO1xufVxuXG5mdW5jdGlvbiBfQ2hhcl90b0xvY2FsZUxvd2VyKGNoYXIpXG57XG5cdHJldHVybiBfVXRpbHNfY2hyKGNoYXIudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG59XG5cblxuXG52YXIgX1N0cmluZ19jb25zID0gRjIoZnVuY3Rpb24oY2hyLCBzdHIpXG57XG5cdHJldHVybiBjaHIgKyBzdHI7XG59KTtcblxuZnVuY3Rpb24gX1N0cmluZ191bmNvbnMoc3RyaW5nKVxue1xuXHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KDApO1xuXHRyZXR1cm4gd29yZFxuXHRcdD8gZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdDB4RDgwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhEQkZGXG5cdFx0XHRcdD8gX1V0aWxzX1R1cGxlMihfVXRpbHNfY2hyKHN0cmluZ1swXSArIHN0cmluZ1sxXSksIHN0cmluZy5zbGljZSgyKSlcblx0XHRcdFx0OiBfVXRpbHNfVHVwbGUyKF9VdGlsc19jaHIoc3RyaW5nWzBdKSwgc3RyaW5nLnNsaWNlKDEpKVxuXHRcdClcblx0XHQ6IGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG59XG5cbnZhciBfU3RyaW5nX2FwcGVuZCA9IEYyKGZ1bmN0aW9uKGEsIGIpXG57XG5cdHJldHVybiBhICsgYjtcbn0pO1xuXG5mdW5jdGlvbiBfU3RyaW5nX2xlbmd0aChzdHIpXG57XG5cdHJldHVybiBzdHIubGVuZ3RoO1xufVxuXG52YXIgX1N0cmluZ19tYXAgPSBGMihmdW5jdGlvbihmdW5jLCBzdHJpbmcpXG57XG5cdHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoO1xuXHR2YXIgYXJyYXkgPSBuZXcgQXJyYXkobGVuKTtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKDB4RDgwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhEQkZGKVxuXHRcdHtcblx0XHRcdGFycmF5W2ldID0gZnVuYyhfVXRpbHNfY2hyKHN0cmluZ1tpXSArIHN0cmluZ1tpKzFdKSk7XG5cdFx0XHRpICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0YXJyYXlbaV0gPSBmdW5jKF9VdGlsc19jaHIoc3RyaW5nW2ldKSk7XG5cdFx0aSsrO1xuXHR9XG5cdHJldHVybiBhcnJheS5qb2luKCcnKTtcbn0pO1xuXG52YXIgX1N0cmluZ19maWx0ZXIgPSBGMihmdW5jdGlvbihpc0dvb2QsIHN0cilcbntcblx0dmFyIGFyciA9IFtdO1xuXHR2YXIgbGVuID0gc3RyLmxlbmd0aDtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciBjaGFyID0gc3RyW2ldO1xuXHRcdHZhciB3b3JkID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdFx0aSsrO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRjaGFyICs9IHN0cltpXTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHRpZiAoaXNHb29kKF9VdGlsc19jaHIoY2hhcikpKVxuXHRcdHtcblx0XHRcdGFyci5wdXNoKGNoYXIpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYXJyLmpvaW4oJycpO1xufSk7XG5cbmZ1bmN0aW9uIF9TdHJpbmdfcmV2ZXJzZShzdHIpXG57XG5cdHZhciBsZW4gPSBzdHIubGVuZ3RoO1xuXHR2YXIgYXJyID0gbmV3IEFycmF5KGxlbik7XG5cdHZhciBpID0gMDtcblx0d2hpbGUgKGkgPCBsZW4pXG5cdHtcblx0XHR2YXIgd29yZCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRhcnJbbGVuIC0gaV0gPSBzdHJbaSArIDFdO1xuXHRcdFx0aSsrO1xuXHRcdFx0YXJyW2xlbiAtIGldID0gc3RyW2kgLSAxXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGFycltsZW4gLSBpXSA9IHN0cltpXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFyci5qb2luKCcnKTtcbn1cblxudmFyIF9TdHJpbmdfZm9sZGwgPSBGMyhmdW5jdGlvbihmdW5jLCBzdGF0ZSwgc3RyaW5nKVxue1xuXHR2YXIgbGVuID0gc3RyaW5nLmxlbmd0aDtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciBjaGFyID0gc3RyaW5nW2ldO1xuXHRcdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aSsrO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRjaGFyICs9IHN0cmluZ1tpXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdFx0c3RhdGUgPSBBMihmdW5jLCBfVXRpbHNfY2hyKGNoYXIpLCBzdGF0ZSk7XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufSk7XG5cbnZhciBfU3RyaW5nX2ZvbGRyID0gRjMoZnVuY3Rpb24oZnVuYywgc3RhdGUsIHN0cmluZylcbntcblx0dmFyIGkgPSBzdHJpbmcubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKVxuXHR7XG5cdFx0dmFyIGNoYXIgPSBzdHJpbmdbaV07XG5cdFx0dmFyIHdvcmQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHRpZiAoMHhEQzAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERGRkYpXG5cdFx0e1xuXHRcdFx0aS0tO1xuXHRcdFx0Y2hhciA9IHN0cmluZ1tpXSArIGNoYXI7XG5cdFx0fVxuXHRcdHN0YXRlID0gQTIoZnVuYywgX1V0aWxzX2NocihjaGFyKSwgc3RhdGUpO1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn0pO1xuXG52YXIgX1N0cmluZ19zcGxpdCA9IEYyKGZ1bmN0aW9uKHNlcCwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLnNwbGl0KHNlcCk7XG59KTtcblxudmFyIF9TdHJpbmdfam9pbiA9IEYyKGZ1bmN0aW9uKHNlcCwgc3Rycylcbntcblx0cmV0dXJuIHN0cnMuam9pbihzZXApO1xufSk7XG5cbnZhciBfU3RyaW5nX3NsaWNlID0gRjMoZnVuY3Rpb24oc3RhcnQsIGVuZCwgc3RyKSB7XG5cdHJldHVybiBzdHIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59KTtcblxuZnVuY3Rpb24gX1N0cmluZ190cmltKHN0cilcbntcblx0cmV0dXJuIHN0ci50cmltKCk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfdHJpbUxlZnQoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgJycpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX3RyaW1SaWdodChzdHIpXG57XG5cdHJldHVybiBzdHIucmVwbGFjZSgvXFxzKyQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfd29yZHMoc3RyKVxue1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KHN0ci50cmltKCkuc3BsaXQoL1xccysvZykpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX2xpbmVzKHN0cilcbntcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShzdHIuc3BsaXQoL1xcclxcbnxcXHJ8XFxuL2cpKTtcbn1cblxuZnVuY3Rpb24gX1N0cmluZ190b1VwcGVyKHN0cilcbntcblx0cmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX3RvTG93ZXIoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG5cbnZhciBfU3RyaW5nX2FueSA9IEYyKGZ1bmN0aW9uKGlzR29vZCwgc3RyaW5nKVxue1xuXHR2YXIgaSA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pXG5cdHtcblx0XHR2YXIgY2hhciA9IHN0cmluZ1tpXTtcblx0XHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweERDMDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REZGRilcblx0XHR7XG5cdFx0XHRpLS07XG5cdFx0XHRjaGFyID0gc3RyaW5nW2ldICsgY2hhcjtcblx0XHR9XG5cdFx0aWYgKGlzR29vZChfVXRpbHNfY2hyKGNoYXIpKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufSk7XG5cbnZhciBfU3RyaW5nX2FsbCA9IEYyKGZ1bmN0aW9uKGlzR29vZCwgc3RyaW5nKVxue1xuXHR2YXIgaSA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pXG5cdHtcblx0XHR2YXIgY2hhciA9IHN0cmluZ1tpXTtcblx0XHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweERDMDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REZGRilcblx0XHR7XG5cdFx0XHRpLS07XG5cdFx0XHRjaGFyID0gc3RyaW5nW2ldICsgY2hhcjtcblx0XHR9XG5cdFx0aWYgKCFpc0dvb2QoX1V0aWxzX2NocihjaGFyKSkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn0pO1xuXG52YXIgX1N0cmluZ19jb250YWlucyA9IEYyKGZ1bmN0aW9uKHN1Yiwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLmluZGV4T2Yoc3ViKSA+IC0xO1xufSk7XG5cbnZhciBfU3RyaW5nX3N0YXJ0c1dpdGggPSBGMihmdW5jdGlvbihzdWIsIHN0cilcbntcblx0cmV0dXJuIHN0ci5pbmRleE9mKHN1YikgPT09IDA7XG59KTtcblxudmFyIF9TdHJpbmdfZW5kc1dpdGggPSBGMihmdW5jdGlvbihzdWIsIHN0cilcbntcblx0cmV0dXJuIHN0ci5sZW5ndGggPj0gc3ViLmxlbmd0aCAmJlxuXHRcdHN0ci5sYXN0SW5kZXhPZihzdWIpID09PSBzdHIubGVuZ3RoIC0gc3ViLmxlbmd0aDtcbn0pO1xuXG52YXIgX1N0cmluZ19pbmRleGVzID0gRjIoZnVuY3Rpb24oc3ViLCBzdHIpXG57XG5cdHZhciBzdWJMZW4gPSBzdWIubGVuZ3RoO1xuXG5cdGlmIChzdWJMZW4gPCAxKVxuXHR7XG5cdFx0cmV0dXJuIF9MaXN0X05pbDtcblx0fVxuXG5cdHZhciBpID0gMDtcblx0dmFyIGlzID0gW107XG5cblx0d2hpbGUgKChpID0gc3RyLmluZGV4T2Yoc3ViLCBpKSkgPiAtMSlcblx0e1xuXHRcdGlzLnB1c2goaSk7XG5cdFx0aSA9IGkgKyBzdWJMZW47XG5cdH1cblxuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KGlzKTtcbn0pO1xuXG5cbi8vIFRPIFNUUklOR1xuXG5mdW5jdGlvbiBfU3RyaW5nX2Zyb21OdW1iZXIobnVtYmVyKVxue1xuXHRyZXR1cm4gbnVtYmVyICsgJyc7XG59XG5cblxuLy8gSU5UIENPTlZFUlNJT05TXG5cbmZ1bmN0aW9uIF9TdHJpbmdfdG9JbnQoc3RyKVxue1xuXHR2YXIgdG90YWwgPSAwO1xuXHR2YXIgY29kZTAgPSBzdHIuY2hhckNvZGVBdCgwKTtcblx0dmFyIHN0YXJ0ID0gY29kZTAgPT0gMHgyQiAvKiArICovIHx8IGNvZGUwID09IDB4MkQgLyogLSAqLyA/IDEgOiAwO1xuXG5cdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IHN0ci5sZW5ndGg7ICsraSlcblx0e1xuXHRcdHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKGNvZGUgPCAweDMwIHx8IDB4MzkgPCBjb2RlKVxuXHRcdHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0XHR0b3RhbCA9IDEwICogdG90YWwgKyBjb2RlIC0gMHgzMDtcblx0fVxuXG5cdHJldHVybiBpID09IHN0YXJ0XG5cdFx0PyBlbG0kY29yZSRNYXliZSROb3RoaW5nXG5cdFx0OiBlbG0kY29yZSRNYXliZSRKdXN0KGNvZGUwID09IDB4MkQgPyAtdG90YWwgOiB0b3RhbCk7XG59XG5cblxuLy8gRkxPQVQgQ09OVkVSU0lPTlNcblxuZnVuY3Rpb24gX1N0cmluZ190b0Zsb2F0KHMpXG57XG5cdC8vIGNoZWNrIGlmIGl0IGlzIGEgaGV4LCBvY3RhbCwgb3IgYmluYXJ5IG51bWJlclxuXHRpZiAocy5sZW5ndGggPT09IDAgfHwgL1tcXHN4Ym9dLy50ZXN0KHMpKVxuXHR7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH1cblx0dmFyIG4gPSArcztcblx0Ly8gZmFzdGVyIGlzTmFOIGNoZWNrXG5cdHJldHVybiBuID09PSBuID8gZWxtJGNvcmUkTWF5YmUkSnVzdChuKSA6IGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfZnJvbUxpc3QoY2hhcnMpXG57XG5cdHJldHVybiBfTGlzdF90b0FycmF5KGNoYXJzKS5qb2luKCcnKTtcbn1cblxuXG5cblxuLyoqL1xuZnVuY3Rpb24gX0pzb25fZXJyb3JUb1N0cmluZyhlcnJvcilcbntcblx0cmV0dXJuIGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmcoZXJyb3IpO1xufVxuLy8qL1xuXG5cbi8vIENPUkUgREVDT0RFUlNcblxuZnVuY3Rpb24gX0pzb25fc3VjY2VlZChtc2cpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMCxcblx0XHRhOiBtc2dcblx0fTtcbn1cblxuZnVuY3Rpb24gX0pzb25fZmFpbChtc2cpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMSxcblx0XHRhOiBtc2dcblx0fTtcbn1cblxuZnVuY3Rpb24gX0pzb25fZGVjb2RlUHJpbShkZWNvZGVyKVxue1xuXHRyZXR1cm4geyAkOiAyLCBiOiBkZWNvZGVyIH07XG59XG5cbnZhciBfSnNvbl9kZWNvZGVJbnQgPSBfSnNvbl9kZWNvZGVQcmltKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJylcblx0XHQ/IF9Kc29uX2V4cGVjdGluZygnYW4gSU5UJywgdmFsdWUpXG5cdFx0OlxuXHQoLTIxNDc0ODM2NDcgPCB2YWx1ZSAmJiB2YWx1ZSA8IDIxNDc0ODM2NDcgJiYgKHZhbHVlIHwgMCkgPT09IHZhbHVlKVxuXHRcdD8gZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDpcblx0KGlzRmluaXRlKHZhbHVlKSAmJiAhKHZhbHVlICUgMSkpXG5cdFx0PyBlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OiBfSnNvbl9leHBlY3RpbmcoJ2FuIElOVCcsIHZhbHVlKTtcbn0pO1xuXG52YXIgX0pzb25fZGVjb2RlQm9vbCA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0XHQ/IGVsbSRjb3JlJFJlc3VsdCRPayh2YWx1ZSlcblx0XHQ6IF9Kc29uX2V4cGVjdGluZygnYSBCT09MJywgdmFsdWUpO1xufSk7XG5cbnZhciBfSnNvbl9kZWNvZGVGbG9hdCA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuXHRcdD8gZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDogX0pzb25fZXhwZWN0aW5nKCdhIEZMT0FUJywgdmFsdWUpO1xufSk7XG5cbnZhciBfSnNvbl9kZWNvZGVWYWx1ZSA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRPayhfSnNvbl93cmFwKHZhbHVlKSk7XG59KTtcblxudmFyIF9Kc29uX2RlY29kZVN0cmluZyA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuXHRcdD8gZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDogKHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKVxuXHRcdFx0PyBlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUgKyAnJylcblx0XHRcdDogX0pzb25fZXhwZWN0aW5nKCdhIFNUUklORycsIHZhbHVlKTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVMaXN0KGRlY29kZXIpIHsgcmV0dXJuIHsgJDogMywgYjogZGVjb2RlciB9OyB9XG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVBcnJheShkZWNvZGVyKSB7IHJldHVybiB7ICQ6IDQsIGI6IGRlY29kZXIgfTsgfVxuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVOdWxsKHZhbHVlKSB7IHJldHVybiB7ICQ6IDUsIGM6IHZhbHVlIH07IH1cblxudmFyIF9Kc29uX2RlY29kZUZpZWxkID0gRjIoZnVuY3Rpb24oZmllbGQsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogNixcblx0XHRkOiBmaWVsZCxcblx0XHRiOiBkZWNvZGVyXG5cdH07XG59KTtcblxudmFyIF9Kc29uX2RlY29kZUluZGV4ID0gRjIoZnVuY3Rpb24oaW5kZXgsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogNyxcblx0XHRlOiBpbmRleCxcblx0XHRiOiBkZWNvZGVyXG5cdH07XG59KTtcblxuZnVuY3Rpb24gX0pzb25fZGVjb2RlS2V5VmFsdWVQYWlycyhkZWNvZGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDgsXG5cdFx0YjogZGVjb2RlclxuXHR9O1xufVxuXG5mdW5jdGlvbiBfSnNvbl9tYXBNYW55KGYsIGRlY29kZXJzKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDksXG5cdFx0ZjogZixcblx0XHRnOiBkZWNvZGVyc1xuXHR9O1xufVxuXG52YXIgX0pzb25fYW5kVGhlbiA9IEYyKGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWNvZGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDEwLFxuXHRcdGI6IGRlY29kZXIsXG5cdFx0aDogY2FsbGJhY2tcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9vbmVPZihkZWNvZGVycylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAxMSxcblx0XHRnOiBkZWNvZGVyc1xuXHR9O1xufVxuXG5cbi8vIERFQ09ESU5HIE9CSkVDVFNcblxudmFyIF9Kc29uX21hcDEgPSBGMihmdW5jdGlvbihmLCBkMSlcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxXSk7XG59KTtcblxudmFyIF9Kc29uX21hcDIgPSBGMyhmdW5jdGlvbihmLCBkMSwgZDIpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDJdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwMyA9IEY0KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzXSk7XG59KTtcblxudmFyIF9Kc29uX21hcDQgPSBGNShmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNClcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0XSk7XG59KTtcblxudmFyIF9Kc29uX21hcDUgPSBGNihmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNCwgZDUpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDVdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwNiA9IEY3KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2XSk7XG59KTtcblxudmFyIF9Kc29uX21hcDcgPSBGOChmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNylcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3XSk7XG59KTtcblxudmFyIF9Kc29uX21hcDggPSBGOShmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDhdKTtcbn0pO1xuXG5cbi8vIERFQ09ERVxuXG52YXIgX0pzb25fcnVuT25TdHJpbmcgPSBGMihmdW5jdGlvbihkZWNvZGVyLCBzdHJpbmcpXG57XG5cdHRyeVxuXHR7XG5cdFx0dmFyIHZhbHVlID0gSlNPTi5wYXJzZShzdHJpbmcpO1xuXHRcdHJldHVybiBfSnNvbl9ydW5IZWxwKGRlY29kZXIsIHZhbHVlKTtcblx0fVxuXHRjYXRjaCAoZSlcblx0e1xuXHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJEZhaWx1cmUsICdUaGlzIGlzIG5vdCB2YWxpZCBKU09OISAnICsgZS5tZXNzYWdlLCBfSnNvbl93cmFwKHN0cmluZykpKTtcblx0fVxufSk7XG5cbnZhciBfSnNvbl9ydW4gPSBGMihmdW5jdGlvbihkZWNvZGVyLCB2YWx1ZSlcbntcblx0cmV0dXJuIF9Kc29uX3J1bkhlbHAoZGVjb2RlciwgX0pzb25fdW53cmFwKHZhbHVlKSk7XG59KTtcblxuZnVuY3Rpb24gX0pzb25fcnVuSGVscChkZWNvZGVyLCB2YWx1ZSlcbntcblx0c3dpdGNoIChkZWNvZGVyLiQpXG5cdHtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gZGVjb2Rlci5iKHZhbHVlKTtcblxuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiAodmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdD8gZWxtJGNvcmUkUmVzdWx0JE9rKGRlY29kZXIuYylcblx0XHRcdFx0OiBfSnNvbl9leHBlY3RpbmcoJ251bGwnLCB2YWx1ZSk7XG5cblx0XHRjYXNlIDM6XG5cdFx0XHRpZiAoIV9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhIExJU1QnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gX0pzb25fcnVuQXJyYXlEZWNvZGVyKGRlY29kZXIuYiwgdmFsdWUsIF9MaXN0X2Zyb21BcnJheSk7XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHRpZiAoIV9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBBUlJBWScsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfSnNvbl9ydW5BcnJheURlY29kZXIoZGVjb2Rlci5iLCB2YWx1ZSwgX0pzb25fdG9FbG1BcnJheSk7XG5cblx0XHRjYXNlIDY6XG5cdFx0XHR2YXIgZmllbGQgPSBkZWNvZGVyLmQ7XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhKGZpZWxkIGluIHZhbHVlKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIF9Kc29uX2V4cGVjdGluZygnYW4gT0JKRUNUIHdpdGggYSBmaWVsZCBuYW1lZCBgJyArIGZpZWxkICsgJ2AnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLmIsIHZhbHVlW2ZpZWxkXSk7XG5cdFx0XHRyZXR1cm4gKGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpID8gcmVzdWx0IDogZWxtJGNvcmUkUmVzdWx0JEVycihBMihlbG0kanNvbiRKc29uJERlY29kZSRGaWVsZCwgZmllbGQsIHJlc3VsdC5hKSk7XG5cblx0XHRjYXNlIDc6XG5cdFx0XHR2YXIgaW5kZXggPSBkZWNvZGVyLmU7XG5cdFx0XHRpZiAoIV9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBBUlJBWScsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdGlmIChpbmRleCA+PSB2YWx1ZS5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBfSnNvbl9leHBlY3RpbmcoJ2EgTE9OR0VSIGFycmF5LiBOZWVkIGluZGV4ICcgKyBpbmRleCArICcgYnV0IG9ubHkgc2VlICcgKyB2YWx1ZS5sZW5ndGggKyAnIGVudHJpZXMnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLmIsIHZhbHVlW2luZGV4XSk7XG5cdFx0XHRyZXR1cm4gKGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpID8gcmVzdWx0IDogZWxtJGNvcmUkUmVzdWx0JEVycihBMihlbG0kanNvbiRKc29uJERlY29kZSRJbmRleCwgaW5kZXgsIHJlc3VsdC5hKSk7XG5cblx0XHRjYXNlIDg6XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBfSnNvbl9pc0FycmF5KHZhbHVlKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIF9Kc29uX2V4cGVjdGluZygnYW4gT0JKRUNUJywgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IF9MaXN0X05pbDtcblx0XHRcdC8vIFRPRE8gdGVzdCBwZXJmIG9mIE9iamVjdC5rZXlzIGFuZCBzd2l0Y2ggd2hlbiBzdXBwb3J0IGlzIGdvb2QgZW5vdWdoXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gdmFsdWUpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2Rlci5iLCB2YWx1ZVtrZXldKTtcblx0XHRcdFx0XHRpZiAoIWVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkRmllbGQsIGtleSwgcmVzdWx0LmEpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0a2V5VmFsdWVQYWlycyA9IF9MaXN0X0NvbnMoX1V0aWxzX1R1cGxlMihrZXksIHJlc3VsdC5hKSwga2V5VmFsdWVQYWlycyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2soZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGtleVZhbHVlUGFpcnMpKTtcblxuXHRcdGNhc2UgOTpcblx0XHRcdHZhciBhbnN3ZXIgPSBkZWNvZGVyLmY7XG5cdFx0XHR2YXIgZGVjb2RlcnMgPSBkZWNvZGVyLmc7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlY29kZXJzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyc1tpXSwgdmFsdWUpO1xuXHRcdFx0XHRpZiAoIWVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFuc3dlciA9IGFuc3dlcihyZXN1bHQuYSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JE9rKGFuc3dlcik7XG5cblx0XHRjYXNlIDEwOlxuXHRcdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2Rlci5iLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gKCFlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdFx0XHQ/IHJlc3VsdFxuXHRcdFx0XHQ6IF9Kc29uX3J1bkhlbHAoZGVjb2Rlci5oKHJlc3VsdC5hKSwgdmFsdWUpO1xuXG5cdFx0Y2FzZSAxMTpcblx0XHRcdHZhciBlcnJvcnMgPSBfTGlzdF9OaWw7XG5cdFx0XHRmb3IgKHZhciB0ZW1wID0gZGVjb2Rlci5nOyB0ZW1wLmI7IHRlbXAgPSB0ZW1wLmIpIC8vIFdISUxFX0NPTlNcblx0XHRcdHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAodGVtcC5hLCB2YWx1ZSk7XG5cdFx0XHRcdGlmIChlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlcnJvcnMgPSBfTGlzdF9Db25zKHJlc3VsdC5hLCBlcnJvcnMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoZWxtJGpzb24kSnNvbiREZWNvZGUkT25lT2YoZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGVycm9ycykpKTtcblxuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJEZhaWx1cmUsIGRlY29kZXIuYSwgX0pzb25fd3JhcCh2YWx1ZSkpKTtcblxuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2soZGVjb2Rlci5hKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfSnNvbl9ydW5BcnJheURlY29kZXIoZGVjb2RlciwgdmFsdWUsIHRvRWxtVmFsdWUpXG57XG5cdHZhciBsZW4gPSB2YWx1ZS5sZW5ndGg7XG5cdHZhciBhcnJheSA9IG5ldyBBcnJheShsZW4pO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuXHR7XG5cdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2RlciwgdmFsdWVbaV0pO1xuXHRcdGlmICghZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihBMihlbG0kanNvbiRKc29uJERlY29kZSRJbmRleCwgaSwgcmVzdWx0LmEpKTtcblx0XHR9XG5cdFx0YXJyYXlbaV0gPSByZXN1bHQuYTtcblx0fVxuXHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JE9rKHRvRWxtVmFsdWUoYXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gX0pzb25faXNBcnJheSh2YWx1ZSlcbntcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8ICh0eXBlb2YgRmlsZUxpc3QgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgRmlsZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBfSnNvbl90b0VsbUFycmF5KGFycmF5KVxue1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkQXJyYXkkaW5pdGlhbGl6ZSwgYXJyYXkubGVuZ3RoLCBmdW5jdGlvbihpKSB7IHJldHVybiBhcnJheVtpXTsgfSk7XG59XG5cbmZ1bmN0aW9uIF9Kc29uX2V4cGVjdGluZyh0eXBlLCB2YWx1ZSlcbntcblx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkRmFpbHVyZSwgJ0V4cGVjdGluZyAnICsgdHlwZSwgX0pzb25fd3JhcCh2YWx1ZSkpKTtcbn1cblxuXG4vLyBFUVVBTElUWVxuXG5mdW5jdGlvbiBfSnNvbl9lcXVhbGl0eSh4LCB5KVxue1xuXHRpZiAoeCA9PT0geSlcblx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHguJCAhPT0geS4kKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c3dpdGNoICh4LiQpXG5cdHtcblx0XHRjYXNlIDA6XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIHguYSA9PT0geS5hO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIHguYiA9PT0geS5iO1xuXG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIHguYyA9PT0geS5jO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdGNhc2UgNDpcblx0XHRjYXNlIDg6XG5cdFx0XHRyZXR1cm4gX0pzb25fZXF1YWxpdHkoeC5iLCB5LmIpO1xuXG5cdFx0Y2FzZSA2OlxuXHRcdFx0cmV0dXJuIHguZCA9PT0geS5kICYmIF9Kc29uX2VxdWFsaXR5KHguYiwgeS5iKTtcblxuXHRcdGNhc2UgNzpcblx0XHRcdHJldHVybiB4LmUgPT09IHkuZSAmJiBfSnNvbl9lcXVhbGl0eSh4LmIsIHkuYik7XG5cblx0XHRjYXNlIDk6XG5cdFx0XHRyZXR1cm4geC5mID09PSB5LmYgJiYgX0pzb25fbGlzdEVxdWFsaXR5KHguZywgeS5nKTtcblxuXHRcdGNhc2UgMTA6XG5cdFx0XHRyZXR1cm4geC5oID09PSB5LmggJiYgX0pzb25fZXF1YWxpdHkoeC5iLCB5LmIpO1xuXG5cdFx0Y2FzZSAxMTpcblx0XHRcdHJldHVybiBfSnNvbl9saXN0RXF1YWxpdHkoeC5nLCB5LmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9Kc29uX2xpc3RFcXVhbGl0eShhRGVjb2RlcnMsIGJEZWNvZGVycylcbntcblx0dmFyIGxlbiA9IGFEZWNvZGVycy5sZW5ndGg7XG5cdGlmIChsZW4gIT09IGJEZWNvZGVycy5sZW5ndGgpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcblx0e1xuXHRcdGlmICghX0pzb25fZXF1YWxpdHkoYURlY29kZXJzW2ldLCBiRGVjb2RlcnNbaV0pKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gRU5DT0RFXG5cbnZhciBfSnNvbl9lbmNvZGUgPSBGMihmdW5jdGlvbihpbmRlbnRMZXZlbCwgdmFsdWUpXG57XG5cdHJldHVybiBKU09OLnN0cmluZ2lmeShfSnNvbl91bndyYXAodmFsdWUpLCBudWxsLCBpbmRlbnRMZXZlbCkgKyAnJztcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl93cmFwKHZhbHVlKSB7IHJldHVybiB7ICQ6IDAsIGE6IHZhbHVlIH07IH1cbmZ1bmN0aW9uIF9Kc29uX3Vud3JhcCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUuYTsgfVxuXG5mdW5jdGlvbiBfSnNvbl93cmFwX1VOVVNFRCh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH1cbmZ1bmN0aW9uIF9Kc29uX3Vud3JhcF9VTlVTRUQodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9XG5cbmZ1bmN0aW9uIF9Kc29uX2VtcHR5QXJyYXkoKSB7IHJldHVybiBbXTsgfVxuZnVuY3Rpb24gX0pzb25fZW1wdHlPYmplY3QoKSB7IHJldHVybiB7fTsgfVxuXG52YXIgX0pzb25fYWRkRmllbGQgPSBGMyhmdW5jdGlvbihrZXksIHZhbHVlLCBvYmplY3QpXG57XG5cdG9iamVjdFtrZXldID0gX0pzb25fdW53cmFwKHZhbHVlKTtcblx0cmV0dXJuIG9iamVjdDtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9hZGRFbnRyeShmdW5jKVxue1xuXHRyZXR1cm4gRjIoZnVuY3Rpb24oZW50cnksIGFycmF5KVxuXHR7XG5cdFx0YXJyYXkucHVzaChfSnNvbl91bndyYXAoZnVuYyhlbnRyeSkpKTtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0pO1xufVxuXG52YXIgX0pzb25fZW5jb2RlTnVsbCA9IF9Kc29uX3dyYXAobnVsbCk7XG5cblxuXG4vLyBUQVNLU1xuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3N1Y2NlZWQodmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMCxcblx0XHRhOiB2YWx1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2ZhaWwoZXJyb3IpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMSxcblx0XHRhOiBlcnJvclxuXHR9O1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2JpbmRpbmcoY2FsbGJhY2spXG57XG5cdHJldHVybiB7XG5cdFx0JDogMixcblx0XHRiOiBjYWxsYmFjayxcblx0XHRjOiBudWxsXG5cdH07XG59XG5cbnZhciBfU2NoZWR1bGVyX2FuZFRoZW4gPSBGMihmdW5jdGlvbihjYWxsYmFjaywgdGFzaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAzLFxuXHRcdGI6IGNhbGxiYWNrLFxuXHRcdGQ6IHRhc2tcblx0fTtcbn0pO1xuXG52YXIgX1NjaGVkdWxlcl9vbkVycm9yID0gRjIoZnVuY3Rpb24oY2FsbGJhY2ssIHRhc2spXG57XG5cdHJldHVybiB7XG5cdFx0JDogNCxcblx0XHRiOiBjYWxsYmFjayxcblx0XHRkOiB0YXNrXG5cdH07XG59KTtcblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9yZWNlaXZlKGNhbGxiYWNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDUsXG5cdFx0YjogY2FsbGJhY2tcblx0fTtcbn1cblxuXG4vLyBQUk9DRVNTRVNcblxudmFyIF9TY2hlZHVsZXJfZ3VpZCA9IDA7XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfcmF3U3Bhd24odGFzaylcbntcblx0dmFyIHByb2MgPSB7XG5cdFx0JDogMCxcblx0XHRlOiBfU2NoZWR1bGVyX2d1aWQrKyxcblx0XHRmOiB0YXNrLFxuXHRcdGc6IG51bGwsXG5cdFx0aDogW11cblx0fTtcblxuXHRfU2NoZWR1bGVyX2VucXVldWUocHJvYyk7XG5cblx0cmV0dXJuIHByb2M7XG59XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfc3Bhd24odGFzaylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfU2NoZWR1bGVyX3Jhd1NwYXduKHRhc2spKSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3Jhd1NlbmQocHJvYywgbXNnKVxue1xuXHRwcm9jLmgucHVzaChtc2cpO1xuXHRfU2NoZWR1bGVyX2VucXVldWUocHJvYyk7XG59XG5cbnZhciBfU2NoZWR1bGVyX3NlbmQgPSBGMihmdW5jdGlvbihwcm9jLCBtc2cpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRfU2NoZWR1bGVyX3Jhd1NlbmQocHJvYywgbXNnKTtcblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn0pO1xuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2tpbGwocHJvYylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHZhciB0YXNrID0gcHJvYy5mO1xuXHRcdGlmICh0YXNrLiQgPT09IDIgJiYgdGFzay5jKVxuXHRcdHtcblx0XHRcdHRhc2suYygpO1xuXHRcdH1cblxuXHRcdHByb2MuZiA9IG51bGw7XG5cblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn1cblxuXG4vKiBTVEVQIFBST0NFU1NFU1xuXG50eXBlIGFsaWFzIFByb2Nlc3MgPVxuICB7ICQgOiB0YWdcbiAgLCBpZCA6IHVuaXF1ZV9pZFxuICAsIHJvb3QgOiBUYXNrXG4gICwgc3RhY2sgOiBudWxsIHwgeyAkOiBTVUNDRUVEIHwgRkFJTCwgYTogY2FsbGJhY2ssIGI6IHN0YWNrIH1cbiAgLCBtYWlsYm94IDogW21zZ11cbiAgfVxuXG4qL1xuXG5cbnZhciBfU2NoZWR1bGVyX3dvcmtpbmcgPSBmYWxzZTtcbnZhciBfU2NoZWR1bGVyX3F1ZXVlID0gW107XG5cblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9lbnF1ZXVlKHByb2MpXG57XG5cdF9TY2hlZHVsZXJfcXVldWUucHVzaChwcm9jKTtcblx0aWYgKF9TY2hlZHVsZXJfd29ya2luZylcblx0e1xuXHRcdHJldHVybjtcblx0fVxuXHRfU2NoZWR1bGVyX3dvcmtpbmcgPSB0cnVlO1xuXHR3aGlsZSAocHJvYyA9IF9TY2hlZHVsZXJfcXVldWUuc2hpZnQoKSlcblx0e1xuXHRcdF9TY2hlZHVsZXJfc3RlcChwcm9jKTtcblx0fVxuXHRfU2NoZWR1bGVyX3dvcmtpbmcgPSBmYWxzZTtcbn1cblxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3N0ZXAocHJvYylcbntcblx0d2hpbGUgKHByb2MuZilcblx0e1xuXHRcdHZhciByb290VGFnID0gcHJvYy5mLiQ7XG5cdFx0aWYgKHJvb3RUYWcgPT09IDAgfHwgcm9vdFRhZyA9PT0gMSlcblx0XHR7XG5cdFx0XHR3aGlsZSAocHJvYy5nICYmIHByb2MuZy4kICE9PSByb290VGFnKVxuXHRcdFx0e1xuXHRcdFx0XHRwcm9jLmcgPSBwcm9jLmcuaTtcblx0XHRcdH1cblx0XHRcdGlmICghcHJvYy5nKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwcm9jLmYgPSBwcm9jLmcuYihwcm9jLmYuYSk7XG5cdFx0XHRwcm9jLmcgPSBwcm9jLmcuaTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAocm9vdFRhZyA9PT0gMilcblx0XHR7XG5cdFx0XHRwcm9jLmYuYyA9IHByb2MuZi5iKGZ1bmN0aW9uKG5ld1Jvb3QpIHtcblx0XHRcdFx0cHJvYy5mID0gbmV3Um9vdDtcblx0XHRcdFx0X1NjaGVkdWxlcl9lbnF1ZXVlKHByb2MpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHJvb3RUYWcgPT09IDUpXG5cdFx0e1xuXHRcdFx0aWYgKHByb2MuaC5sZW5ndGggPT09IDApXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByb2MuZiA9IHByb2MuZi5iKHByb2MuaC5zaGlmdCgpKTtcblx0XHR9XG5cdFx0ZWxzZSAvLyBpZiAocm9vdFRhZyA9PT0gMyB8fCByb290VGFnID09PSA0KVxuXHRcdHtcblx0XHRcdHByb2MuZyA9IHtcblx0XHRcdFx0JDogcm9vdFRhZyA9PT0gMyA/IDAgOiAxLFxuXHRcdFx0XHRiOiBwcm9jLmYuYixcblx0XHRcdFx0aTogcHJvYy5nXG5cdFx0XHR9O1xuXHRcdFx0cHJvYy5mID0gcHJvYy5mLmQ7XG5cdFx0fVxuXHR9XG59XG5cblxuXG5mdW5jdGlvbiBfUHJvY2Vzc19zbGVlcCh0aW1lKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGlkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKSk7XG5cdFx0fSwgdGltZSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IGNsZWFyVGltZW91dChpZCk7IH07XG5cdH0pO1xufVxuXG5cblxuXG4vLyBQUk9HUkFNU1xuXG5cbnZhciBfUGxhdGZvcm1fd29ya2VyID0gRjQoZnVuY3Rpb24oaW1wbCwgZmxhZ0RlY29kZXIsIGRlYnVnTWV0YWRhdGEsIGFyZ3MpXG57XG5cdHJldHVybiBfUGxhdGZvcm1faW5pdGlhbGl6ZShcblx0XHRmbGFnRGVjb2Rlcixcblx0XHRhcmdzLFxuXHRcdGltcGwuaW5pdCxcblx0XHRpbXBsLnVwZGF0ZSxcblx0XHRpbXBsLnN1YnNjcmlwdGlvbnMsXG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHt9IH1cblx0KTtcbn0pO1xuXG5cblxuLy8gSU5JVElBTElaRSBBIFBST0dSQU1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1faW5pdGlhbGl6ZShmbGFnRGVjb2RlciwgYXJncywgaW5pdCwgdXBkYXRlLCBzdWJzY3JpcHRpb25zLCBzdGVwcGVyQnVpbGRlcilcbntcblx0dmFyIHJlc3VsdCA9IEEyKF9Kc29uX3J1biwgZmxhZ0RlY29kZXIsIF9Kc29uX3dyYXAoYXJncyA/IGFyZ3NbJ2ZsYWdzJ10gOiB1bmRlZmluZWQpKTtcblx0ZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSB8fCBfRGVidWdfY3Jhc2goMiAvKiovLCBfSnNvbl9lcnJvclRvU3RyaW5nKHJlc3VsdC5hKSAvKiovKTtcblx0dmFyIG1hbmFnZXJzID0ge307XG5cdHJlc3VsdCA9IGluaXQocmVzdWx0LmEpO1xuXHR2YXIgbW9kZWwgPSByZXN1bHQuYTtcblx0dmFyIHN0ZXBwZXIgPSBzdGVwcGVyQnVpbGRlcihzZW5kVG9BcHAsIG1vZGVsKTtcblx0dmFyIHBvcnRzID0gX1BsYXRmb3JtX3NldHVwRWZmZWN0cyhtYW5hZ2Vycywgc2VuZFRvQXBwKTtcblxuXHRmdW5jdGlvbiBzZW5kVG9BcHAobXNnLCB2aWV3TWV0YWRhdGEpXG5cdHtcblx0XHRyZXN1bHQgPSBBMih1cGRhdGUsIG1zZywgbW9kZWwpO1xuXHRcdHN0ZXBwZXIobW9kZWwgPSByZXN1bHQuYSwgdmlld01ldGFkYXRhKTtcblx0XHRfUGxhdGZvcm1fZGlzcGF0Y2hFZmZlY3RzKG1hbmFnZXJzLCByZXN1bHQuYiwgc3Vic2NyaXB0aW9ucyhtb2RlbCkpO1xuXHR9XG5cblx0X1BsYXRmb3JtX2Rpc3BhdGNoRWZmZWN0cyhtYW5hZ2VycywgcmVzdWx0LmIsIHN1YnNjcmlwdGlvbnMobW9kZWwpKTtcblxuXHRyZXR1cm4gcG9ydHMgPyB7IHBvcnRzOiBwb3J0cyB9IDoge307XG59XG5cblxuXG4vLyBUUkFDSyBQUkVMT0FEU1xuLy9cbi8vIFRoaXMgaXMgdXNlZCBieSBjb2RlIGluIGVsbS9icm93c2VyIGFuZCBlbG0vaHR0cFxuLy8gdG8gcmVnaXN0ZXIgYW55IEhUVFAgcmVxdWVzdHMgdGhhdCBhcmUgdHJpZ2dlcmVkIGJ5IGluaXQuXG4vL1xuXG5cbnZhciBfUGxhdGZvcm1fcHJlbG9hZDtcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fcmVnaXN0ZXJQcmVsb2FkKHVybClcbntcblx0X1BsYXRmb3JtX3ByZWxvYWQuYWRkKHVybCk7XG59XG5cblxuXG4vLyBFRkZFQ1QgTUFOQUdFUlNcblxuXG52YXIgX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzID0ge307XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3NldHVwRWZmZWN0cyhtYW5hZ2Vycywgc2VuZFRvQXBwKVxue1xuXHR2YXIgcG9ydHM7XG5cblx0Ly8gc2V0dXAgYWxsIG5lY2Vzc2FyeSBlZmZlY3QgbWFuYWdlcnNcblx0Zm9yICh2YXIga2V5IGluIF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vycylcblx0e1xuXHRcdHZhciBtYW5hZ2VyID0gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW2tleV07XG5cblx0XHRpZiAobWFuYWdlci5hKVxuXHRcdHtcblx0XHRcdHBvcnRzID0gcG9ydHMgfHwge307XG5cdFx0XHRwb3J0c1trZXldID0gbWFuYWdlci5hKGtleSwgc2VuZFRvQXBwKTtcblx0XHR9XG5cblx0XHRtYW5hZ2Vyc1trZXldID0gX1BsYXRmb3JtX2luc3RhbnRpYXRlTWFuYWdlcihtYW5hZ2VyLCBzZW5kVG9BcHApO1xuXHR9XG5cblx0cmV0dXJuIHBvcnRzO1xufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9jcmVhdGVNYW5hZ2VyKGluaXQsIG9uRWZmZWN0cywgb25TZWxmTXNnLCBjbWRNYXAsIHN1Yk1hcClcbntcblx0cmV0dXJuIHtcblx0XHRiOiBpbml0LFxuXHRcdGM6IG9uRWZmZWN0cyxcblx0XHRkOiBvblNlbGZNc2csXG5cdFx0ZTogY21kTWFwLFxuXHRcdGY6IHN1Yk1hcFxuXHR9O1xufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9pbnN0YW50aWF0ZU1hbmFnZXIoaW5mbywgc2VuZFRvQXBwKVxue1xuXHR2YXIgcm91dGVyID0ge1xuXHRcdGc6IHNlbmRUb0FwcCxcblx0XHRoOiB1bmRlZmluZWRcblx0fTtcblxuXHR2YXIgb25FZmZlY3RzID0gaW5mby5jO1xuXHR2YXIgb25TZWxmTXNnID0gaW5mby5kO1xuXHR2YXIgY21kTWFwID0gaW5mby5lO1xuXHR2YXIgc3ViTWFwID0gaW5mby5mO1xuXG5cdGZ1bmN0aW9uIGxvb3Aoc3RhdGUpXG5cdHtcblx0XHRyZXR1cm4gQTIoX1NjaGVkdWxlcl9hbmRUaGVuLCBsb29wLCBfU2NoZWR1bGVyX3JlY2VpdmUoZnVuY3Rpb24obXNnKVxuXHRcdHtcblx0XHRcdHZhciB2YWx1ZSA9IG1zZy5hO1xuXG5cdFx0XHRpZiAobXNnLiQgPT09IDApXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBBMyhvblNlbGZNc2csIHJvdXRlciwgdmFsdWUsIHN0YXRlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNtZE1hcCAmJiBzdWJNYXBcblx0XHRcdFx0PyBBNChvbkVmZmVjdHMsIHJvdXRlciwgdmFsdWUuaSwgdmFsdWUuaiwgc3RhdGUpXG5cdFx0XHRcdDogQTMob25FZmZlY3RzLCByb3V0ZXIsIGNtZE1hcCA/IHZhbHVlLmkgOiB2YWx1ZS5qLCBzdGF0ZSk7XG5cdFx0fSkpO1xuXHR9XG5cblx0cmV0dXJuIHJvdXRlci5oID0gX1NjaGVkdWxlcl9yYXdTcGF3bihBMihfU2NoZWR1bGVyX2FuZFRoZW4sIGxvb3AsIGluZm8uYikpO1xufVxuXG5cblxuLy8gUk9VVElOR1xuXG5cbnZhciBfUGxhdGZvcm1fc2VuZFRvQXBwID0gRjIoZnVuY3Rpb24ocm91dGVyLCBtc2cpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRyb3V0ZXIuZyhtc2cpO1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKSk7XG5cdH0pO1xufSk7XG5cblxudmFyIF9QbGF0Zm9ybV9zZW5kVG9TZWxmID0gRjIoZnVuY3Rpb24ocm91dGVyLCBtc2cpXG57XG5cdHJldHVybiBBMihfU2NoZWR1bGVyX3NlbmQsIHJvdXRlci5oLCB7XG5cdFx0JDogMCxcblx0XHRhOiBtc2dcblx0fSk7XG59KTtcblxuXG5cbi8vIEJBR1NcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fbGVhZihob21lKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24odmFsdWUpXG5cdHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0JDogMSxcblx0XHRcdGs6IGhvbWUsXG5cdFx0XHRsOiB2YWx1ZVxuXHRcdH07XG5cdH07XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2JhdGNoKGxpc3QpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMixcblx0XHRtOiBsaXN0XG5cdH07XG59XG5cblxudmFyIF9QbGF0Zm9ybV9tYXAgPSBGMihmdW5jdGlvbih0YWdnZXIsIGJhZylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAzLFxuXHRcdG46IHRhZ2dlcixcblx0XHRvOiBiYWdcblx0fVxufSk7XG5cblxuXG4vLyBQSVBFIEJBR1MgSU5UTyBFRkZFQ1QgTUFOQUdFUlNcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fZGlzcGF0Y2hFZmZlY3RzKG1hbmFnZXJzLCBjbWRCYWcsIHN1YkJhZylcbntcblx0dmFyIGVmZmVjdHNEaWN0ID0ge307XG5cdF9QbGF0Zm9ybV9nYXRoZXJFZmZlY3RzKHRydWUsIGNtZEJhZywgZWZmZWN0c0RpY3QsIG51bGwpO1xuXHRfUGxhdGZvcm1fZ2F0aGVyRWZmZWN0cyhmYWxzZSwgc3ViQmFnLCBlZmZlY3RzRGljdCwgbnVsbCk7XG5cblx0Zm9yICh2YXIgaG9tZSBpbiBtYW5hZ2Vycylcblx0e1xuXHRcdF9TY2hlZHVsZXJfcmF3U2VuZChtYW5hZ2Vyc1tob21lXSwge1xuXHRcdFx0JDogJ2Z4Jyxcblx0XHRcdGE6IGVmZmVjdHNEaWN0W2hvbWVdIHx8IHsgaTogX0xpc3RfTmlsLCBqOiBfTGlzdF9OaWwgfVxuXHRcdH0pO1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2dhdGhlckVmZmVjdHMoaXNDbWQsIGJhZywgZWZmZWN0c0RpY3QsIHRhZ2dlcnMpXG57XG5cdHN3aXRjaCAoYmFnLiQpXG5cdHtcblx0XHRjYXNlIDE6XG5cdFx0XHR2YXIgaG9tZSA9IGJhZy5rO1xuXHRcdFx0dmFyIGVmZmVjdCA9IF9QbGF0Zm9ybV90b0VmZmVjdChpc0NtZCwgaG9tZSwgdGFnZ2VycywgYmFnLmwpO1xuXHRcdFx0ZWZmZWN0c0RpY3RbaG9tZV0gPSBfUGxhdGZvcm1faW5zZXJ0KGlzQ21kLCBlZmZlY3QsIGVmZmVjdHNEaWN0W2hvbWVdKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMjpcblx0XHRcdGZvciAodmFyIGxpc3QgPSBiYWcubTsgbGlzdC5iOyBsaXN0ID0gbGlzdC5iKSAvLyBXSElMRV9DT05TXG5cdFx0XHR7XG5cdFx0XHRcdF9QbGF0Zm9ybV9nYXRoZXJFZmZlY3RzKGlzQ21kLCBsaXN0LmEsIGVmZmVjdHNEaWN0LCB0YWdnZXJzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMzpcblx0XHRcdF9QbGF0Zm9ybV9nYXRoZXJFZmZlY3RzKGlzQ21kLCBiYWcubywgZWZmZWN0c0RpY3QsIHtcblx0XHRcdFx0cDogYmFnLm4sXG5cdFx0XHRcdHE6IHRhZ2dlcnNcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3RvRWZmZWN0KGlzQ21kLCBob21lLCB0YWdnZXJzLCB2YWx1ZSlcbntcblx0ZnVuY3Rpb24gYXBwbHlUYWdnZXJzKHgpXG5cdHtcblx0XHRmb3IgKHZhciB0ZW1wID0gdGFnZ2VyczsgdGVtcDsgdGVtcCA9IHRlbXAucSlcblx0XHR7XG5cdFx0XHR4ID0gdGVtcC5wKHgpO1xuXHRcdH1cblx0XHRyZXR1cm4geDtcblx0fVxuXG5cdHZhciBtYXAgPSBpc0NtZFxuXHRcdD8gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW2hvbWVdLmVcblx0XHQ6IF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tob21lXS5mO1xuXG5cdHJldHVybiBBMihtYXAsIGFwcGx5VGFnZ2VycywgdmFsdWUpXG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2luc2VydChpc0NtZCwgbmV3RWZmZWN0LCBlZmZlY3RzKVxue1xuXHRlZmZlY3RzID0gZWZmZWN0cyB8fCB7IGk6IF9MaXN0X05pbCwgajogX0xpc3RfTmlsIH07XG5cblx0aXNDbWRcblx0XHQ/IChlZmZlY3RzLmkgPSBfTGlzdF9Db25zKG5ld0VmZmVjdCwgZWZmZWN0cy5pKSlcblx0XHQ6IChlZmZlY3RzLmogPSBfTGlzdF9Db25zKG5ld0VmZmVjdCwgZWZmZWN0cy5qKSk7XG5cblx0cmV0dXJuIGVmZmVjdHM7XG59XG5cblxuXG4vLyBQT1JUU1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9jaGVja1BvcnROYW1lKG5hbWUpXG57XG5cdGlmIChfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0pXG5cdHtcblx0XHRfRGVidWdfY3Jhc2goMywgbmFtZSlcblx0fVxufVxuXG5cblxuLy8gT1VUR09JTkcgUE9SVFNcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fb3V0Z29pbmdQb3J0KG5hbWUsIGNvbnZlcnRlcilcbntcblx0X1BsYXRmb3JtX2NoZWNrUG9ydE5hbWUobmFtZSk7XG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXSA9IHtcblx0XHRlOiBfUGxhdGZvcm1fb3V0Z29pbmdQb3J0TWFwLFxuXHRcdHI6IGNvbnZlcnRlcixcblx0XHRhOiBfUGxhdGZvcm1fc2V0dXBPdXRnb2luZ1BvcnRcblx0fTtcblx0cmV0dXJuIF9QbGF0Zm9ybV9sZWFmKG5hbWUpO1xufVxuXG5cbnZhciBfUGxhdGZvcm1fb3V0Z29pbmdQb3J0TWFwID0gRjIoZnVuY3Rpb24odGFnZ2VyLCB2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH0pO1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9zZXR1cE91dGdvaW5nUG9ydChuYW1lKVxue1xuXHR2YXIgc3VicyA9IFtdO1xuXHR2YXIgY29udmVydGVyID0gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLnI7XG5cblx0Ly8gQ1JFQVRFIE1BTkFHRVJcblxuXHR2YXIgaW5pdCA9IF9Qcm9jZXNzX3NsZWVwKDApO1xuXG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXS5iID0gaW5pdDtcblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLmMgPSBGMyhmdW5jdGlvbihyb3V0ZXIsIGNtZExpc3QsIHN0YXRlKVxuXHR7XG5cdFx0Zm9yICggOyBjbWRMaXN0LmI7IGNtZExpc3QgPSBjbWRMaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHQvLyBncmFiIGEgc2VwYXJhdGUgcmVmZXJlbmNlIHRvIHN1YnMgaW4gY2FzZSB1bnN1YnNjcmliZSBpcyBjYWxsZWRcblx0XHRcdHZhciBjdXJyZW50U3VicyA9IHN1YnM7XG5cdFx0XHR2YXIgdmFsdWUgPSBfSnNvbl91bndyYXAoY29udmVydGVyKGNtZExpc3QuYSkpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50U3Vicy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0Y3VycmVudFN1YnNbaV0odmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaW5pdDtcblx0fSk7XG5cblx0Ly8gUFVCTElDIEFQSVxuXG5cdGZ1bmN0aW9uIHN1YnNjcmliZShjYWxsYmFjaylcblx0e1xuXHRcdHN1YnMucHVzaChjYWxsYmFjayk7XG5cdH1cblxuXHRmdW5jdGlvbiB1bnN1YnNjcmliZShjYWxsYmFjaylcblx0e1xuXHRcdC8vIGNvcHkgc3VicyBpbnRvIGEgbmV3IGFycmF5IGluIGNhc2UgdW5zdWJzY3JpYmUgaXMgY2FsbGVkIHdpdGhpbiBhXG5cdFx0Ly8gc3Vic2NyaWJlZCBjYWxsYmFja1xuXHRcdHN1YnMgPSBzdWJzLnNsaWNlKCk7XG5cdFx0dmFyIGluZGV4ID0gc3Vicy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRpZiAoaW5kZXggPj0gMClcblx0XHR7XG5cdFx0XHRzdWJzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzdWJzY3JpYmU6IHN1YnNjcmliZSxcblx0XHR1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcblx0fTtcbn1cblxuXG5cbi8vIElOQ09NSU5HIFBPUlRTXG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2luY29taW5nUG9ydChuYW1lLCBjb252ZXJ0ZXIpXG57XG5cdF9QbGF0Zm9ybV9jaGVja1BvcnROYW1lKG5hbWUpO1xuXHRfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0gPSB7XG5cdFx0ZjogX1BsYXRmb3JtX2luY29taW5nUG9ydE1hcCxcblx0XHRyOiBjb252ZXJ0ZXIsXG5cdFx0YTogX1BsYXRmb3JtX3NldHVwSW5jb21pbmdQb3J0XG5cdH07XG5cdHJldHVybiBfUGxhdGZvcm1fbGVhZihuYW1lKTtcbn1cblxuXG52YXIgX1BsYXRmb3JtX2luY29taW5nUG9ydE1hcCA9IEYyKGZ1bmN0aW9uKHRhZ2dlciwgZmluYWxUYWdnZXIpXG57XG5cdHJldHVybiBmdW5jdGlvbih2YWx1ZSlcblx0e1xuXHRcdHJldHVybiB0YWdnZXIoZmluYWxUYWdnZXIodmFsdWUpKTtcblx0fTtcbn0pO1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9zZXR1cEluY29taW5nUG9ydChuYW1lLCBzZW5kVG9BcHApXG57XG5cdHZhciBzdWJzID0gX0xpc3RfTmlsO1xuXHR2YXIgY29udmVydGVyID0gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLnI7XG5cblx0Ly8gQ1JFQVRFIE1BTkFHRVJcblxuXHR2YXIgaW5pdCA9IF9TY2hlZHVsZXJfc3VjY2VlZChudWxsKTtcblxuXHRfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0uYiA9IGluaXQ7XG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXS5jID0gRjMoZnVuY3Rpb24ocm91dGVyLCBzdWJMaXN0LCBzdGF0ZSlcblx0e1xuXHRcdHN1YnMgPSBzdWJMaXN0O1xuXHRcdHJldHVybiBpbml0O1xuXHR9KTtcblxuXHQvLyBQVUJMSUMgQVBJXG5cblx0ZnVuY3Rpb24gc2VuZChpbmNvbWluZ1ZhbHVlKVxuXHR7XG5cdFx0dmFyIHJlc3VsdCA9IEEyKF9Kc29uX3J1biwgY29udmVydGVyLCBfSnNvbl93cmFwKGluY29taW5nVmFsdWUpKTtcblxuXHRcdGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkgfHwgX0RlYnVnX2NyYXNoKDQsIG5hbWUsIHJlc3VsdC5hKTtcblxuXHRcdHZhciB2YWx1ZSA9IHJlc3VsdC5hO1xuXHRcdGZvciAodmFyIHRlbXAgPSBzdWJzOyB0ZW1wLmI7IHRlbXAgPSB0ZW1wLmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHRzZW5kVG9BcHAodGVtcC5hKHZhbHVlKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc2VuZDogc2VuZCB9O1xufVxuXG5cblxuLy8gRVhQT1JUIEVMTSBNT0RVTEVTXG4vL1xuLy8gSGF2ZSBERUJVRyBhbmQgUFJPRCB2ZXJzaW9ucyBzbyB0aGF0IHdlIGNhbiAoMSkgZ2l2ZSBuaWNlciBlcnJvcnMgaW5cbi8vIGRlYnVnIG1vZGUgYW5kICgyKSBub3QgcGF5IGZvciB0aGUgYml0cyBuZWVkZWQgZm9yIHRoYXQgaW4gcHJvZCBtb2RlLlxuLy9cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fZXhwb3J0X1VOVVNFRChleHBvcnRzKVxue1xuXHRzY29wZVsnRWxtJ11cblx0XHQ/IF9QbGF0Zm9ybV9tZXJnZUV4cG9ydHNQcm9kKHNjb3BlWydFbG0nXSwgZXhwb3J0cylcblx0XHQ6IHNjb3BlWydFbG0nXSA9IGV4cG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX21lcmdlRXhwb3J0c1Byb2Qob2JqLCBleHBvcnRzKVxue1xuXHRmb3IgKHZhciBuYW1lIGluIGV4cG9ydHMpXG5cdHtcblx0XHQobmFtZSBpbiBvYmopXG5cdFx0XHQ/IChuYW1lID09ICdpbml0Jylcblx0XHRcdFx0PyBfRGVidWdfY3Jhc2goNilcblx0XHRcdFx0OiBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzUHJvZChvYmpbbmFtZV0sIGV4cG9ydHNbbmFtZV0pXG5cdFx0XHQ6IChvYmpbbmFtZV0gPSBleHBvcnRzW25hbWVdKTtcblx0fVxufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9leHBvcnQoZXhwb3J0cylcbntcblx0c2NvcGVbJ0VsbSddXG5cdFx0PyBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzRGVidWcoJ0VsbScsIHNjb3BlWydFbG0nXSwgZXhwb3J0cylcblx0XHQ6IHNjb3BlWydFbG0nXSA9IGV4cG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX21lcmdlRXhwb3J0c0RlYnVnKG1vZHVsZU5hbWUsIG9iaiwgZXhwb3J0cylcbntcblx0Zm9yICh2YXIgbmFtZSBpbiBleHBvcnRzKVxuXHR7XG5cdFx0KG5hbWUgaW4gb2JqKVxuXHRcdFx0PyAobmFtZSA9PSAnaW5pdCcpXG5cdFx0XHRcdD8gX0RlYnVnX2NyYXNoKDYsIG1vZHVsZU5hbWUpXG5cdFx0XHRcdDogX1BsYXRmb3JtX21lcmdlRXhwb3J0c0RlYnVnKG1vZHVsZU5hbWUgKyAnLicgKyBuYW1lLCBvYmpbbmFtZV0sIGV4cG9ydHNbbmFtZV0pXG5cdFx0XHQ6IChvYmpbbmFtZV0gPSBleHBvcnRzW25hbWVdKTtcblx0fVxufVxuXG5cblxuXG4vLyBIRUxQRVJTXG5cblxudmFyIF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcDtcblxudmFyIF9WaXJ0dWFsRG9tX2RvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbnZhciBfVmlydHVhbERvbV9pbml0ID0gRjQoZnVuY3Rpb24odmlydHVhbE5vZGUsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHQvLyBOT1RFOiB0aGlzIGZ1bmN0aW9uIG5lZWRzIF9QbGF0Zm9ybV9leHBvcnQgYXZhaWxhYmxlIHRvIHdvcmtcblxuXHQvKipfVU5VU0VEL1xuXHR2YXIgbm9kZSA9IGFyZ3NbJ25vZGUnXTtcblx0Ly8qL1xuXHQvKiovXG5cdHZhciBub2RlID0gYXJncyAmJiBhcmdzWydub2RlJ10gPyBhcmdzWydub2RlJ10gOiBfRGVidWdfY3Jhc2goMCk7XG5cdC8vKi9cblxuXHRub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuXHRcdF9WaXJ0dWFsRG9tX3JlbmRlcih2aXJ0dWFsTm9kZSwgZnVuY3Rpb24oKSB7fSksXG5cdFx0bm9kZVxuXHQpO1xuXG5cdHJldHVybiB7fTtcbn0pO1xuXG5cblxuLy8gVEVYVFxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3RleHQoc3RyaW5nKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDAsXG5cdFx0YTogc3RyaW5nXG5cdH07XG59XG5cblxuXG4vLyBOT0RFXG5cblxudmFyIF9WaXJ0dWFsRG9tX25vZGVOUyA9IEYyKGZ1bmN0aW9uKG5hbWVzcGFjZSwgdGFnKVxue1xuXHRyZXR1cm4gRjIoZnVuY3Rpb24oZmFjdExpc3QsIGtpZExpc3QpXG5cdHtcblx0XHRmb3IgKHZhciBraWRzID0gW10sIGRlc2NlbmRhbnRzQ291bnQgPSAwOyBraWRMaXN0LmI7IGtpZExpc3QgPSBraWRMaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHR2YXIga2lkID0ga2lkTGlzdC5hO1xuXHRcdFx0ZGVzY2VuZGFudHNDb3VudCArPSAoa2lkLmIgfHwgMCk7XG5cdFx0XHRraWRzLnB1c2goa2lkKTtcblx0XHR9XG5cdFx0ZGVzY2VuZGFudHNDb3VudCArPSBraWRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAxLFxuXHRcdFx0YzogdGFnLFxuXHRcdFx0ZDogX1ZpcnR1YWxEb21fb3JnYW5pemVGYWN0cyhmYWN0TGlzdCksXG5cdFx0XHRlOiBraWRzLFxuXHRcdFx0ZjogbmFtZXNwYWNlLFxuXHRcdFx0YjogZGVzY2VuZGFudHNDb3VudFxuXHRcdH07XG5cdH0pO1xufSk7XG5cblxudmFyIF9WaXJ0dWFsRG9tX25vZGUgPSBfVmlydHVhbERvbV9ub2RlTlModW5kZWZpbmVkKTtcblxuXG5cbi8vIEtFWUVEIE5PREVcblxuXG52YXIgX1ZpcnR1YWxEb21fa2V5ZWROb2RlTlMgPSBGMihmdW5jdGlvbihuYW1lc3BhY2UsIHRhZylcbntcblx0cmV0dXJuIEYyKGZ1bmN0aW9uKGZhY3RMaXN0LCBraWRMaXN0KVxuXHR7XG5cdFx0Zm9yICh2YXIga2lkcyA9IFtdLCBkZXNjZW5kYW50c0NvdW50ID0gMDsga2lkTGlzdC5iOyBraWRMaXN0ID0ga2lkTGlzdC5iKSAvLyBXSElMRV9DT05TXG5cdFx0e1xuXHRcdFx0dmFyIGtpZCA9IGtpZExpc3QuYTtcblx0XHRcdGRlc2NlbmRhbnRzQ291bnQgKz0gKGtpZC5iLmIgfHwgMCk7XG5cdFx0XHRraWRzLnB1c2goa2lkKTtcblx0XHR9XG5cdFx0ZGVzY2VuZGFudHNDb3VudCArPSBraWRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAyLFxuXHRcdFx0YzogdGFnLFxuXHRcdFx0ZDogX1ZpcnR1YWxEb21fb3JnYW5pemVGYWN0cyhmYWN0TGlzdCksXG5cdFx0XHRlOiBraWRzLFxuXHRcdFx0ZjogbmFtZXNwYWNlLFxuXHRcdFx0YjogZGVzY2VuZGFudHNDb3VudFxuXHRcdH07XG5cdH0pO1xufSk7XG5cblxudmFyIF9WaXJ0dWFsRG9tX2tleWVkTm9kZSA9IF9WaXJ0dWFsRG9tX2tleWVkTm9kZU5TKHVuZGVmaW5lZCk7XG5cblxuXG4vLyBDVVNUT01cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9jdXN0b20oZmFjdExpc3QsIG1vZGVsLCByZW5kZXIsIGRpZmYpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMyxcblx0XHRkOiBfVmlydHVhbERvbV9vcmdhbml6ZUZhY3RzKGZhY3RMaXN0KSxcblx0XHRnOiBtb2RlbCxcblx0XHRoOiByZW5kZXIsXG5cdFx0aTogZGlmZlxuXHR9O1xufVxuXG5cblxuLy8gTUFQXG5cblxudmFyIF9WaXJ0dWFsRG9tX21hcCA9IEYyKGZ1bmN0aW9uKHRhZ2dlciwgbm9kZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiA0LFxuXHRcdGo6IHRhZ2dlcixcblx0XHRrOiBub2RlLFxuXHRcdGI6IDEgKyAobm9kZS5iIHx8IDApXG5cdH07XG59KTtcblxuXG5cbi8vIExBWllcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV90aHVuayhyZWZzLCB0aHVuaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiA1LFxuXHRcdGw6IHJlZnMsXG5cdFx0bTogdGh1bmssXG5cdFx0azogdW5kZWZpbmVkXG5cdH07XG59XG5cbnZhciBfVmlydHVhbERvbV9sYXp5ID0gRjIoZnVuY3Rpb24oZnVuYywgYSlcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGZ1bmMoYSk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5MiA9IEYzKGZ1bmN0aW9uKGZ1bmMsIGEsIGIpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYl0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBMihmdW5jLCBhLCBiKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenkzID0gRjQoZnVuY3Rpb24oZnVuYywgYSwgYiwgYylcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEEzKGZ1bmMsIGEsIGIsIGMpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTQgPSBGNShmdW5jdGlvbihmdW5jLCBhLCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGMsIGRdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTQoZnVuYywgYSwgYiwgYywgZCk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5NSA9IEY2KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQsIGUpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZCwgZV0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBNShmdW5jLCBhLCBiLCBjLCBkLCBlKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenk2ID0gRjcoZnVuY3Rpb24oZnVuYywgYSwgYiwgYywgZCwgZSwgZilcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjLCBkLCBlLCBmXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEE2KGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTcgPSBGOChmdW5jdGlvbihmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGddLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTcoZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZyk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5OCA9IEY5KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZywgaF0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBOChmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKTtcblx0fSk7XG59KTtcblxuXG5cbi8vIEZBQ1RTXG5cblxudmFyIF9WaXJ0dWFsRG9tX29uID0gRjIoZnVuY3Rpb24oa2V5LCBoYW5kbGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMCcsXG5cdFx0bjoga2V5LFxuXHRcdG86IGhhbmRsZXJcblx0fTtcbn0pO1xudmFyIF9WaXJ0dWFsRG9tX3N0eWxlID0gRjIoZnVuY3Rpb24oa2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiAnYTEnLFxuXHRcdG46IGtleSxcblx0XHRvOiB2YWx1ZVxuXHR9O1xufSk7XG52YXIgX1ZpcnR1YWxEb21fcHJvcGVydHkgPSBGMihmdW5jdGlvbihrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMicsXG5cdFx0bjoga2V5LFxuXHRcdG86IHZhbHVlXG5cdH07XG59KTtcbnZhciBfVmlydHVhbERvbV9hdHRyaWJ1dGUgPSBGMihmdW5jdGlvbihrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMycsXG5cdFx0bjoga2V5LFxuXHRcdG86IHZhbHVlXG5cdH07XG59KTtcbnZhciBfVmlydHVhbERvbV9hdHRyaWJ1dGVOUyA9IEYzKGZ1bmN0aW9uKG5hbWVzcGFjZSwga2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiAnYTQnLFxuXHRcdG46IGtleSxcblx0XHRvOiB7IGY6IG5hbWVzcGFjZSwgbzogdmFsdWUgfVxuXHR9O1xufSk7XG5cblxuXG4vLyBYU1MgQVRUQUNLIFZFQ1RPUiBDSEVDS1NcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9ub1NjcmlwdCh0YWcpXG57XG5cdHJldHVybiB0YWcgPT0gJ3NjcmlwdCcgPyAncCcgOiB0YWc7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vT25PckZvcm1BY3Rpb24oa2V5KVxue1xuXHRyZXR1cm4gL14ob258Zm9ybUFjdGlvbiQpL2kudGVzdChrZXkpID8gJ2RhdGEtJyArIGtleSA6IGtleTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbm9Jbm5lckh0bWxPckZvcm1BY3Rpb24oa2V5KVxue1xuXHRyZXR1cm4ga2V5ID09ICdpbm5lckhUTUwnIHx8IGtleSA9PSAnZm9ybUFjdGlvbicgPyAnZGF0YS0nICsga2V5IDoga2V5O1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9ub0phdmFTY3JpcHRVcmlfVU5VU0VEKHZhbHVlKVxue1xuXHRyZXR1cm4gL15qYXZhc2NyaXB0Oi9pLnRlc3QodmFsdWUucmVwbGFjZSgvXFxzL2csJycpKSA/ICcnIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdFVyaSh2YWx1ZSlcbntcblx0cmV0dXJuIC9eamF2YXNjcmlwdDovaS50ZXN0KHZhbHVlLnJlcGxhY2UoL1xccy9nLCcnKSlcblx0XHQ/ICdqYXZhc2NyaXB0OmFsZXJ0KFwiVGhpcyBpcyBhbiBYU1MgdmVjdG9yLiBQbGVhc2UgdXNlIHBvcnRzIG9yIHdlYiBjb21wb25lbnRzIGluc3RlYWQuXCIpJ1xuXHRcdDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaV9VTlVTRUQodmFsdWUpXG57XG5cdHJldHVybiAvXlxccyooamF2YXNjcmlwdDp8ZGF0YTp0ZXh0XFwvaHRtbCkvaS50ZXN0KHZhbHVlKSA/ICcnIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaSh2YWx1ZSlcbntcblx0cmV0dXJuIC9eXFxzKihqYXZhc2NyaXB0OnxkYXRhOnRleHRcXC9odG1sKS9pLnRlc3QodmFsdWUpXG5cdFx0PyAnamF2YXNjcmlwdDphbGVydChcIlRoaXMgaXMgYW4gWFNTIHZlY3Rvci4gUGxlYXNlIHVzZSBwb3J0cyBvciB3ZWIgY29tcG9uZW50cyBpbnN0ZWFkLlwiKSdcblx0XHQ6IHZhbHVlO1xufVxuXG5cblxuLy8gTUFQIEZBQ1RTXG5cblxudmFyIF9WaXJ0dWFsRG9tX21hcEF0dHJpYnV0ZSA9IEYyKGZ1bmN0aW9uKGZ1bmMsIGF0dHIpXG57XG5cdHJldHVybiAoYXR0ci4kID09PSAnYTAnKVxuXHRcdD8gQTIoX1ZpcnR1YWxEb21fb24sIGF0dHIubiwgX1ZpcnR1YWxEb21fbWFwSGFuZGxlcihmdW5jLCBhdHRyLm8pKVxuXHRcdDogYXR0cjtcbn0pO1xuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9tYXBIYW5kbGVyKGZ1bmMsIGhhbmRsZXIpXG57XG5cdHZhciB0YWcgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0b0hhbmRsZXJJbnQoaGFuZGxlcik7XG5cblx0Ly8gMCA9IE5vcm1hbFxuXHQvLyAxID0gTWF5U3RvcFByb3BhZ2F0aW9uXG5cdC8vIDIgPSBNYXlQcmV2ZW50RGVmYXVsdFxuXHQvLyAzID0gQ3VzdG9tXG5cblx0cmV0dXJuIHtcblx0XHQkOiBoYW5kbGVyLiQsXG5cdFx0YTpcblx0XHRcdCF0YWdcblx0XHRcdFx0PyBBMihlbG0kanNvbiRKc29uJERlY29kZSRtYXAsIGZ1bmMsIGhhbmRsZXIuYSlcblx0XHRcdFx0OlxuXHRcdFx0QTMoZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0XHRcdFx0dGFnIDwgM1xuXHRcdFx0XHRcdD8gX1ZpcnR1YWxEb21fbWFwRXZlbnRUdXBsZVxuXHRcdFx0XHRcdDogX1ZpcnR1YWxEb21fbWFwRXZlbnRSZWNvcmQsXG5cdFx0XHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJHN1Y2NlZWQoZnVuYyksXG5cdFx0XHRcdGhhbmRsZXIuYVxuXHRcdFx0KVxuXHR9O1xufVxuXG52YXIgX1ZpcnR1YWxEb21fbWFwRXZlbnRUdXBsZSA9IEYyKGZ1bmN0aW9uKGZ1bmMsIHR1cGxlKVxue1xuXHRyZXR1cm4gX1V0aWxzX1R1cGxlMihmdW5jKHR1cGxlLmEpLCB0dXBsZS5iKTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbWFwRXZlbnRSZWNvcmQgPSBGMihmdW5jdGlvbihmdW5jLCByZWNvcmQpXG57XG5cdHJldHVybiB7XG5cdFx0bWVzc2FnZTogZnVuYyhyZWNvcmQubWVzc2FnZSksXG5cdFx0c3RvcFByb3BhZ2F0aW9uOiByZWNvcmQuc3RvcFByb3BhZ2F0aW9uLFxuXHRcdHByZXZlbnREZWZhdWx0OiByZWNvcmQucHJldmVudERlZmF1bHRcblx0fVxufSk7XG5cblxuXG4vLyBPUkdBTklaRSBGQUNUU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX29yZ2FuaXplRmFjdHMoZmFjdExpc3QpXG57XG5cdGZvciAodmFyIGZhY3RzID0ge307IGZhY3RMaXN0LmI7IGZhY3RMaXN0ID0gZmFjdExpc3QuYikgLy8gV0hJTEVfQ09OU1xuXHR7XG5cdFx0dmFyIGVudHJ5ID0gZmFjdExpc3QuYTtcblxuXHRcdHZhciB0YWcgPSBlbnRyeS4kO1xuXHRcdHZhciBrZXkgPSBlbnRyeS5uO1xuXHRcdHZhciB2YWx1ZSA9IGVudHJ5Lm87XG5cblx0XHRpZiAodGFnID09PSAnYTInKVxuXHRcdHtcblx0XHRcdChrZXkgPT09ICdjbGFzc05hbWUnKVxuXHRcdFx0XHQ/IF9WaXJ0dWFsRG9tX2FkZENsYXNzKGZhY3RzLCBrZXksIF9Kc29uX3Vud3JhcCh2YWx1ZSkpXG5cdFx0XHRcdDogZmFjdHNba2V5XSA9IF9Kc29uX3Vud3JhcCh2YWx1ZSk7XG5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZhciBzdWJGYWN0cyA9IGZhY3RzW3RhZ10gfHwgKGZhY3RzW3RhZ10gPSB7fSk7XG5cdFx0KHRhZyA9PT0gJ2EzJyAmJiBrZXkgPT09ICdjbGFzcycpXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FkZENsYXNzKHN1YkZhY3RzLCBrZXksIHZhbHVlKVxuXHRcdFx0OiBzdWJGYWN0c1trZXldID0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gZmFjdHM7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FkZENsYXNzKG9iamVjdCwga2V5LCBuZXdDbGFzcylcbntcblx0dmFyIGNsYXNzZXMgPSBvYmplY3Rba2V5XTtcblx0b2JqZWN0W2tleV0gPSBjbGFzc2VzID8gY2xhc3NlcyArICcgJyArIG5ld0NsYXNzIDogbmV3Q2xhc3M7XG59XG5cblxuXG4vLyBSRU5ERVJcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9yZW5kZXIodk5vZGUsIGV2ZW50Tm9kZSlcbntcblx0dmFyIHRhZyA9IHZOb2RlLiQ7XG5cblx0aWYgKHRhZyA9PT0gNSlcblx0e1xuXHRcdHJldHVybiBfVmlydHVhbERvbV9yZW5kZXIodk5vZGUuayB8fCAodk5vZGUuayA9IHZOb2RlLm0oKSksIGV2ZW50Tm9kZSk7XG5cdH1cblxuXHRpZiAodGFnID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2RvYy5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS5hKTtcblx0fVxuXG5cdGlmICh0YWcgPT09IDQpXG5cdHtcblx0XHR2YXIgc3ViTm9kZSA9IHZOb2RlLms7XG5cdFx0dmFyIHRhZ2dlciA9IHZOb2RlLmo7XG5cblx0XHR3aGlsZSAoc3ViTm9kZS4kID09PSA0KVxuXHRcdHtcblx0XHRcdHR5cGVvZiB0YWdnZXIgIT09ICdvYmplY3QnXG5cdFx0XHRcdD8gdGFnZ2VyID0gW3RhZ2dlciwgc3ViTm9kZS5qXVxuXHRcdFx0XHQ6IHRhZ2dlci5wdXNoKHN1Yk5vZGUuaik7XG5cblx0XHRcdHN1Yk5vZGUgPSBzdWJOb2RlLms7XG5cdFx0fVxuXG5cdFx0dmFyIHN1YkV2ZW50Um9vdCA9IHsgajogdGFnZ2VyLCBwOiBldmVudE5vZGUgfTtcblx0XHR2YXIgZG9tTm9kZSA9IF9WaXJ0dWFsRG9tX3JlbmRlcihzdWJOb2RlLCBzdWJFdmVudFJvb3QpO1xuXHRcdGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmID0gc3ViRXZlbnRSb290O1xuXHRcdHJldHVybiBkb21Ob2RlO1xuXHR9XG5cblx0aWYgKHRhZyA9PT0gMylcblx0e1xuXHRcdHZhciBkb21Ob2RlID0gdk5vZGUuaCh2Tm9kZS5nKTtcblx0XHRfVmlydHVhbERvbV9hcHBseUZhY3RzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgdk5vZGUuZCk7XG5cdFx0cmV0dXJuIGRvbU5vZGU7XG5cdH1cblxuXHQvLyBhdCB0aGlzIHBvaW50IGB0YWdgIG11c3QgYmUgMSBvciAyXG5cblx0dmFyIGRvbU5vZGUgPSB2Tm9kZS5mXG5cdFx0PyBfVmlydHVhbERvbV9kb2MuY3JlYXRlRWxlbWVudE5TKHZOb2RlLmYsIHZOb2RlLmMpXG5cdFx0OiBfVmlydHVhbERvbV9kb2MuY3JlYXRlRWxlbWVudCh2Tm9kZS5jKTtcblxuXHRpZiAoX1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwICYmIHZOb2RlLmMgPT0gJ2EnKVxuXHR7XG5cdFx0ZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcChkb21Ob2RlKSk7XG5cdH1cblxuXHRfVmlydHVhbERvbV9hcHBseUZhY3RzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgdk5vZGUuZCk7XG5cblx0Zm9yICh2YXIga2lkcyA9IHZOb2RlLmUsIGkgPSAwOyBpIDwga2lkcy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKGRvbU5vZGUsIF9WaXJ0dWFsRG9tX3JlbmRlcih0YWcgPT09IDEgPyBraWRzW2ldIDoga2lkc1tpXS5iLCBldmVudE5vZGUpKTtcblx0fVxuXG5cdHJldHVybiBkb21Ob2RlO1xufVxuXG5cblxuLy8gQVBQTFkgRkFDVFNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseUZhY3RzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgZmFjdHMpXG57XG5cdGZvciAodmFyIGtleSBpbiBmYWN0cylcblx0e1xuXHRcdHZhciB2YWx1ZSA9IGZhY3RzW2tleV07XG5cblx0XHRrZXkgPT09ICdhMSdcblx0XHRcdD8gX1ZpcnR1YWxEb21fYXBwbHlTdHlsZXMoZG9tTm9kZSwgdmFsdWUpXG5cdFx0XHQ6XG5cdFx0a2V5ID09PSAnYTAnXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FwcGx5RXZlbnRzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgdmFsdWUpXG5cdFx0XHQ6XG5cdFx0a2V5ID09PSAnYTMnXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FwcGx5QXR0cnMoZG9tTm9kZSwgdmFsdWUpXG5cdFx0XHQ6XG5cdFx0a2V5ID09PSAnYTQnXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FwcGx5QXR0cnNOUyhkb21Ob2RlLCB2YWx1ZSlcblx0XHRcdDpcblx0XHQoKGtleSAhPT0gJ3ZhbHVlJyAmJiBrZXkgIT09ICdjaGVja2VkJykgfHwgZG9tTm9kZVtrZXldICE9PSB2YWx1ZSkgJiYgKGRvbU5vZGVba2V5XSA9IHZhbHVlKTtcblx0fVxufVxuXG5cblxuLy8gQVBQTFkgU1RZTEVTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlTdHlsZXMoZG9tTm9kZSwgc3R5bGVzKVxue1xuXHR2YXIgZG9tTm9kZVN0eWxlID0gZG9tTm9kZS5zdHlsZTtcblxuXHRmb3IgKHZhciBrZXkgaW4gc3R5bGVzKVxuXHR7XG5cdFx0ZG9tTm9kZVN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcblx0fVxufVxuXG5cblxuLy8gQVBQTFkgQVRUUlNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseUF0dHJzKGRvbU5vZGUsIGF0dHJzKVxue1xuXHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpXG5cdHtcblx0XHR2YXIgdmFsdWUgPSBhdHRyc1trZXldO1xuXHRcdHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdD8gZG9tTm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcblx0XHRcdDogZG9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcblx0fVxufVxuXG5cblxuLy8gQVBQTFkgTkFNRVNQQUNFRCBBVFRSU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5QXR0cnNOUyhkb21Ob2RlLCBuc0F0dHJzKVxue1xuXHRmb3IgKHZhciBrZXkgaW4gbnNBdHRycylcblx0e1xuXHRcdHZhciBwYWlyID0gbnNBdHRyc1trZXldO1xuXHRcdHZhciBuYW1lc3BhY2UgPSBwYWlyLmY7XG5cdFx0dmFyIHZhbHVlID0gcGFpci5vO1xuXG5cdFx0dHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xuXHRcdFx0PyBkb21Ob2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZSwga2V5LCB2YWx1ZSlcblx0XHRcdDogZG9tTm9kZS5yZW1vdmVBdHRyaWJ1dGVOUyhuYW1lc3BhY2UsIGtleSk7XG5cdH1cbn1cblxuXG5cbi8vIEFQUExZIEVWRU5UU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5RXZlbnRzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgZXZlbnRzKVxue1xuXHR2YXIgYWxsQ2FsbGJhY2tzID0gZG9tTm9kZS5lbG1GcyB8fCAoZG9tTm9kZS5lbG1GcyA9IHt9KTtcblxuXHRmb3IgKHZhciBrZXkgaW4gZXZlbnRzKVxuXHR7XG5cdFx0dmFyIG5ld0hhbmRsZXIgPSBldmVudHNba2V5XTtcblx0XHR2YXIgb2xkQ2FsbGJhY2sgPSBhbGxDYWxsYmFja3Nba2V5XTtcblxuXHRcdGlmICghbmV3SGFuZGxlcilcblx0XHR7XG5cdFx0XHRkb21Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCBvbGRDYWxsYmFjayk7XG5cdFx0XHRhbGxDYWxsYmFja3Nba2V5XSA9IHVuZGVmaW5lZDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChvbGRDYWxsYmFjaylcblx0XHR7XG5cdFx0XHR2YXIgb2xkSGFuZGxlciA9IG9sZENhbGxiYWNrLnE7XG5cdFx0XHRpZiAob2xkSGFuZGxlci4kID09PSBuZXdIYW5kbGVyLiQpXG5cdFx0XHR7XG5cdFx0XHRcdG9sZENhbGxiYWNrLnEgPSBuZXdIYW5kbGVyO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGRvbU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIG9sZENhbGxiYWNrKTtcblx0XHR9XG5cblx0XHRvbGRDYWxsYmFjayA9IF9WaXJ0dWFsRG9tX21ha2VDYWxsYmFjayhldmVudE5vZGUsIG5ld0hhbmRsZXIpO1xuXHRcdGRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9sZENhbGxiYWNrLFxuXHRcdFx0X1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZFxuXHRcdFx0JiYgeyBwYXNzaXZlOiBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0b0hhbmRsZXJJbnQobmV3SGFuZGxlcikgPCAyIH1cblx0XHQpO1xuXHRcdGFsbENhbGxiYWNrc1trZXldID0gb2xkQ2FsbGJhY2s7XG5cdH1cbn1cblxuXG5cbi8vIFBBU1NJVkUgRVZFTlRTXG5cblxudmFyIF9WaXJ0dWFsRG9tX3Bhc3NpdmVTdXBwb3J0ZWQ7XG5cbnRyeVxue1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndCcsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHsgX1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7IH1cblx0fSkpO1xufVxuY2F0Y2goZSkge31cblxuXG5cbi8vIEVWRU5UIEhBTkRMRVJTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbWFrZUNhbGxiYWNrKGV2ZW50Tm9kZSwgaW5pdGlhbEhhbmRsZXIpXG57XG5cdGZ1bmN0aW9uIGNhbGxiYWNrKGV2ZW50KVxuXHR7XG5cdFx0dmFyIGhhbmRsZXIgPSBjYWxsYmFjay5xO1xuXHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGhhbmRsZXIuYSwgZXZlbnQpO1xuXG5cdFx0aWYgKCFlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdGFnID0gZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdG9IYW5kbGVySW50KGhhbmRsZXIpO1xuXG5cdFx0Ly8gMCA9IE5vcm1hbFxuXHRcdC8vIDEgPSBNYXlTdG9wUHJvcGFnYXRpb25cblx0XHQvLyAyID0gTWF5UHJldmVudERlZmF1bHRcblx0XHQvLyAzID0gQ3VzdG9tXG5cblx0XHR2YXIgdmFsdWUgPSByZXN1bHQuYTtcblx0XHR2YXIgbWVzc2FnZSA9ICF0YWcgPyB2YWx1ZSA6IHRhZyA8IDMgPyB2YWx1ZS5hIDogdmFsdWUubWVzc2FnZTtcblx0XHR2YXIgc3RvcFByb3BhZ2F0aW9uID0gdGFnID09IDEgPyB2YWx1ZS5iIDogdGFnID09IDMgJiYgdmFsdWUuc3RvcFByb3BhZ2F0aW9uO1xuXHRcdHZhciBjdXJyZW50RXZlbnROb2RlID0gKFxuXHRcdFx0c3RvcFByb3BhZ2F0aW9uICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLFxuXHRcdFx0KHRhZyA9PSAyID8gdmFsdWUuYiA6IHRhZyA9PSAzICYmIHZhbHVlLnByZXZlbnREZWZhdWx0KSAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpLFxuXHRcdFx0ZXZlbnROb2RlXG5cdFx0KTtcblx0XHR2YXIgdGFnZ2VyO1xuXHRcdHZhciBpO1xuXHRcdHdoaWxlICh0YWdnZXIgPSBjdXJyZW50RXZlbnROb2RlLmopXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiB0YWdnZXIgPT0gJ2Z1bmN0aW9uJylcblx0XHRcdHtcblx0XHRcdFx0bWVzc2FnZSA9IHRhZ2dlcihtZXNzYWdlKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IHRhZ2dlci5sZW5ndGg7IGktLTsgKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bWVzc2FnZSA9IHRhZ2dlcltpXShtZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y3VycmVudEV2ZW50Tm9kZSA9IGN1cnJlbnRFdmVudE5vZGUucDtcblx0XHR9XG5cdFx0Y3VycmVudEV2ZW50Tm9kZShtZXNzYWdlLCBzdG9wUHJvcGFnYXRpb24pOyAvLyBzdG9wUHJvcGFnYXRpb24gaW1wbGllcyBpc1N5bmNcblx0fVxuXG5cdGNhbGxiYWNrLnEgPSBpbml0aWFsSGFuZGxlcjtcblxuXHRyZXR1cm4gY2FsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2VxdWFsRXZlbnRzKHgsIHkpXG57XG5cdHJldHVybiB4LiQgPT0geS4kICYmIF9Kc29uX2VxdWFsaXR5KHguYSwgeS5hKTtcbn1cblxuXG5cbi8vIERJRkZcblxuXG4vLyBUT0RPOiBTaG91bGQgd2UgZG8gcGF0Y2hlcyBsaWtlIGluIGlPUz9cbi8vXG4vLyB0eXBlIFBhdGNoXG4vLyAgID0gQXQgSW50IFBhdGNoXG4vLyAgIHwgQmF0Y2ggKExpc3QgUGF0Y2gpXG4vLyAgIHwgQ2hhbmdlIC4uLlxuLy9cbi8vIEhvdyBjb3VsZCBpdCBub3QgYmUgYmV0dGVyP1xuLy9cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2RpZmYoeCwgeSlcbntcblx0dmFyIHBhdGNoZXMgPSBbXTtcblx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeCwgeSwgcGF0Y2hlcywgMCk7XG5cdHJldHVybiBwYXRjaGVzO1xufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCB0eXBlLCBpbmRleCwgZGF0YSlcbntcblx0dmFyIHBhdGNoID0ge1xuXHRcdCQ6IHR5cGUsXG5cdFx0cjogaW5kZXgsXG5cdFx0czogZGF0YSxcblx0XHR0OiB1bmRlZmluZWQsXG5cdFx0dTogdW5kZWZpbmVkXG5cdH07XG5cdHBhdGNoZXMucHVzaChwYXRjaCk7XG5cdHJldHVybiBwYXRjaDtcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmSGVscCh4LCB5LCBwYXRjaGVzLCBpbmRleClcbntcblx0aWYgKHggPT09IHkpXG5cdHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgeFR5cGUgPSB4LiQ7XG5cdHZhciB5VHlwZSA9IHkuJDtcblxuXHQvLyBCYWlsIGlmIHlvdSBydW4gaW50byBkaWZmZXJlbnQgdHlwZXMgb2Ygbm9kZXMuIEltcGxpZXMgdGhhdCB0aGVcblx0Ly8gc3RydWN0dXJlIGhhcyBjaGFuZ2VkIHNpZ25pZmljYW50bHkgYW5kIGl0J3Mgbm90IHdvcnRoIGEgZGlmZi5cblx0aWYgKHhUeXBlICE9PSB5VHlwZSlcblx0e1xuXHRcdGlmICh4VHlwZSA9PT0gMSAmJiB5VHlwZSA9PT0gMilcblx0XHR7XG5cdFx0XHR5ID0gX1ZpcnR1YWxEb21fZGVrZXkoeSk7XG5cdFx0XHR5VHlwZSA9IDE7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMCwgaW5kZXgsIHkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdC8vIE5vdyB3ZSBrbm93IHRoYXQgYm90aCBub2RlcyBhcmUgdGhlIHNhbWUgJC5cblx0c3dpdGNoICh5VHlwZSlcblx0e1xuXHRcdGNhc2UgNTpcblx0XHRcdHZhciB4UmVmcyA9IHgubDtcblx0XHRcdHZhciB5UmVmcyA9IHkubDtcblx0XHRcdHZhciBpID0geFJlZnMubGVuZ3RoO1xuXHRcdFx0dmFyIHNhbWUgPSBpID09PSB5UmVmcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoc2FtZSAmJiBpLS0pXG5cdFx0XHR7XG5cdFx0XHRcdHNhbWUgPSB4UmVmc1tpXSA9PT0geVJlZnNbaV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2FtZSlcblx0XHRcdHtcblx0XHRcdFx0eS5rID0geC5rO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR5LmsgPSB5Lm0oKTtcblx0XHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4LmssIHkuaywgc3ViUGF0Y2hlcywgMCk7XG5cdFx0XHRzdWJQYXRjaGVzLmxlbmd0aCA+IDAgJiYgX1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDEsIGluZGV4LCBzdWJQYXRjaGVzKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgNDpcblx0XHRcdC8vIGdhdGhlciBuZXN0ZWQgdGFnZ2Vyc1xuXHRcdFx0dmFyIHhUYWdnZXJzID0geC5qO1xuXHRcdFx0dmFyIHlUYWdnZXJzID0geS5qO1xuXHRcdFx0dmFyIG5lc3RpbmcgPSBmYWxzZTtcblxuXHRcdFx0dmFyIHhTdWJOb2RlID0geC5rO1xuXHRcdFx0d2hpbGUgKHhTdWJOb2RlLiQgPT09IDQpXG5cdFx0XHR7XG5cdFx0XHRcdG5lc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdHR5cGVvZiB4VGFnZ2VycyAhPT0gJ29iamVjdCdcblx0XHRcdFx0XHQ/IHhUYWdnZXJzID0gW3hUYWdnZXJzLCB4U3ViTm9kZS5qXVxuXHRcdFx0XHRcdDogeFRhZ2dlcnMucHVzaCh4U3ViTm9kZS5qKTtcblxuXHRcdFx0XHR4U3ViTm9kZSA9IHhTdWJOb2RlLms7XG5cdFx0XHR9XG5cblx0XHRcdHZhciB5U3ViTm9kZSA9IHkuaztcblx0XHRcdHdoaWxlICh5U3ViTm9kZS4kID09PSA0KVxuXHRcdFx0e1xuXHRcdFx0XHRuZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0XHR0eXBlb2YgeVRhZ2dlcnMgIT09ICdvYmplY3QnXG5cdFx0XHRcdFx0PyB5VGFnZ2VycyA9IFt5VGFnZ2VycywgeVN1Yk5vZGUual1cblx0XHRcdFx0XHQ6IHlUYWdnZXJzLnB1c2goeVN1Yk5vZGUuaik7XG5cblx0XHRcdFx0eVN1Yk5vZGUgPSB5U3ViTm9kZS5rO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBKdXN0IGJhaWwgaWYgZGlmZmVyZW50IG51bWJlcnMgb2YgdGFnZ2Vycy4gVGhpcyBpbXBsaWVzIHRoZVxuXHRcdFx0Ly8gc3RydWN0dXJlIG9mIHRoZSB2aXJ0dWFsIERPTSBoYXMgY2hhbmdlZC5cblx0XHRcdGlmIChuZXN0aW5nICYmIHhUYWdnZXJzLmxlbmd0aCAhPT0geVRhZ2dlcnMubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMCwgaW5kZXgsIHkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGlmIHRhZ2dlcnMgYXJlIFwidGhlIHNhbWVcIlxuXHRcdFx0aWYgKG5lc3RpbmcgPyAhX1ZpcnR1YWxEb21fcGFpcndpc2VSZWZFcXVhbCh4VGFnZ2VycywgeVRhZ2dlcnMpIDogeFRhZ2dlcnMgIT09IHlUYWdnZXJzKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMiwgaW5kZXgsIHlUYWdnZXJzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZGlmZiBldmVyeXRoaW5nIGJlbG93IHRoZSB0YWdnZXJzXG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4U3ViTm9kZSwgeVN1Yk5vZGUsIHBhdGNoZXMsIGluZGV4ICsgMSk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlIDA6XG5cdFx0XHRpZiAoeC5hICE9PSB5LmEpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAzLCBpbmRleCwgeS5hKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMTpcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZOb2Rlcyh4LCB5LCBwYXRjaGVzLCBpbmRleCwgX1ZpcnR1YWxEb21fZGlmZktpZHMpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZk5vZGVzKHgsIHksIHBhdGNoZXMsIGluZGV4LCBfVmlydHVhbERvbV9kaWZmS2V5ZWRLaWRzKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMzpcblx0XHRcdGlmICh4LmggIT09IHkuaClcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDAsIGluZGV4LCB5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZmFjdHNEaWZmID0gX1ZpcnR1YWxEb21fZGlmZkZhY3RzKHguZCwgeS5kKTtcblx0XHRcdGZhY3RzRGlmZiAmJiBfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgNCwgaW5kZXgsIGZhY3RzRGlmZik7XG5cblx0XHRcdHZhciBwYXRjaCA9IHkuaSh4LmcsIHkuZyk7XG5cdFx0XHRwYXRjaCAmJiBfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgNSwgaW5kZXgsIHBhdGNoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHR9XG59XG5cbi8vIGFzc3VtZXMgdGhlIGluY29taW5nIGFycmF5cyBhcmUgdGhlIHNhbWUgbGVuZ3RoXG5mdW5jdGlvbiBfVmlydHVhbERvbV9wYWlyd2lzZVJlZkVxdWFsKGFzLCBicylcbntcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdGlmIChhc1tpXSAhPT0gYnNbaV0pXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmTm9kZXMoeCwgeSwgcGF0Y2hlcywgaW5kZXgsIGRpZmZLaWRzKVxue1xuXHQvLyBCYWlsIGlmIG9idmlvdXMgaW5kaWNhdG9ycyBoYXZlIGNoYW5nZWQuIEltcGxpZXMgbW9yZSBzZXJpb3VzXG5cdC8vIHN0cnVjdHVyYWwgY2hhbmdlcyBzdWNoIHRoYXQgaXQncyBub3Qgd29ydGggaXQgdG8gZGlmZi5cblx0aWYgKHguYyAhPT0geS5jIHx8IHguZiAhPT0geS5mKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDAsIGluZGV4LCB5KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgZmFjdHNEaWZmID0gX1ZpcnR1YWxEb21fZGlmZkZhY3RzKHguZCwgeS5kKTtcblx0ZmFjdHNEaWZmICYmIF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCA0LCBpbmRleCwgZmFjdHNEaWZmKTtcblxuXHRkaWZmS2lkcyh4LCB5LCBwYXRjaGVzLCBpbmRleCk7XG59XG5cblxuXG4vLyBESUZGIEZBQ1RTXG5cblxuLy8gVE9ETyBJbnN0ZWFkIG9mIGNyZWF0aW5nIGEgbmV3IGRpZmYgb2JqZWN0LCBpdCdzIHBvc3NpYmxlIHRvIGp1c3QgdGVzdCBpZlxuLy8gdGhlcmUgKmlzKiBhIGRpZmYuIER1cmluZyB0aGUgYWN0dWFsIHBhdGNoLCBkbyB0aGUgZGlmZiBhZ2FpbiBhbmQgbWFrZSB0aGVcbi8vIG1vZGlmaWNhdGlvbnMgZGlyZWN0bHkuIFRoaXMgd2F5LCB0aGVyZSdzIG5vIG5ldyBhbGxvY2F0aW9ucy4gV29ydGggaXQ/XG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmRmFjdHMoeCwgeSwgY2F0ZWdvcnkpXG57XG5cdHZhciBkaWZmO1xuXG5cdC8vIGxvb2sgZm9yIGNoYW5nZXMgYW5kIHJlbW92YWxzXG5cdGZvciAodmFyIHhLZXkgaW4geClcblx0e1xuXHRcdGlmICh4S2V5ID09PSAnYTEnIHx8IHhLZXkgPT09ICdhMCcgfHwgeEtleSA9PT0gJ2EzJyB8fCB4S2V5ID09PSAnYTQnKVxuXHRcdHtcblx0XHRcdHZhciBzdWJEaWZmID0gX1ZpcnR1YWxEb21fZGlmZkZhY3RzKHhbeEtleV0sIHlbeEtleV0gfHwge30sIHhLZXkpO1xuXHRcdFx0aWYgKHN1YkRpZmYpXG5cdFx0XHR7XG5cdFx0XHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdFx0XHRkaWZmW3hLZXldID0gc3ViRGlmZjtcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSBpZiBub3QgaW4gdGhlIG5ldyBmYWN0c1xuXHRcdGlmICghKHhLZXkgaW4geSkpXG5cdFx0e1xuXHRcdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0XHRkaWZmW3hLZXldID1cblx0XHRcdFx0IWNhdGVnb3J5XG5cdFx0XHRcdFx0PyAodHlwZW9mIHhbeEtleV0gPT09ICdzdHJpbmcnID8gJycgOiBudWxsKVxuXHRcdFx0XHRcdDpcblx0XHRcdFx0KGNhdGVnb3J5ID09PSAnYTEnKVxuXHRcdFx0XHRcdD8gJydcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdChjYXRlZ29yeSA9PT0gJ2EwJyB8fCBjYXRlZ29yeSA9PT0gJ2EzJylcblx0XHRcdFx0XHQ/IHVuZGVmaW5lZFxuXHRcdFx0XHRcdDpcblx0XHRcdFx0eyBmOiB4W3hLZXldLmYsIG86IHVuZGVmaW5lZCB9O1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2YXIgeFZhbHVlID0geFt4S2V5XTtcblx0XHR2YXIgeVZhbHVlID0geVt4S2V5XTtcblxuXHRcdC8vIHJlZmVyZW5jZSBlcXVhbCwgc28gZG9uJ3Qgd29ycnkgYWJvdXQgaXRcblx0XHRpZiAoeFZhbHVlID09PSB5VmFsdWUgJiYgeEtleSAhPT0gJ3ZhbHVlJyAmJiB4S2V5ICE9PSAnY2hlY2tlZCdcblx0XHRcdHx8IGNhdGVnb3J5ID09PSAnYTAnICYmIF9WaXJ0dWFsRG9tX2VxdWFsRXZlbnRzKHhWYWx1ZSwgeVZhbHVlKSlcblx0XHR7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRkaWZmID0gZGlmZiB8fCB7fTtcblx0XHRkaWZmW3hLZXldID0geVZhbHVlO1xuXHR9XG5cblx0Ly8gYWRkIG5ldyBzdHVmZlxuXHRmb3IgKHZhciB5S2V5IGluIHkpXG5cdHtcblx0XHRpZiAoISh5S2V5IGluIHgpKVxuXHRcdHtcblx0XHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdFx0ZGlmZlt5S2V5XSA9IHlbeUtleV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRpZmY7XG59XG5cblxuXG4vLyBESUZGIEtJRFNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmS2lkcyh4UGFyZW50LCB5UGFyZW50LCBwYXRjaGVzLCBpbmRleClcbntcblx0dmFyIHhLaWRzID0geFBhcmVudC5lO1xuXHR2YXIgeUtpZHMgPSB5UGFyZW50LmU7XG5cblx0dmFyIHhMZW4gPSB4S2lkcy5sZW5ndGg7XG5cdHZhciB5TGVuID0geUtpZHMubGVuZ3RoO1xuXG5cdC8vIEZJR1VSRSBPVVQgSUYgVEhFUkUgQVJFIElOU0VSVFMgT1IgUkVNT1ZBTFNcblxuXHRpZiAoeExlbiA+IHlMZW4pXG5cdHtcblx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgNiwgaW5kZXgsIHtcblx0XHRcdHY6IHlMZW4sXG5cdFx0XHRpOiB4TGVuIC0geUxlblxuXHRcdH0pO1xuXHR9XG5cdGVsc2UgaWYgKHhMZW4gPCB5TGVuKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDcsIGluZGV4LCB7XG5cdFx0XHR2OiB4TGVuLFxuXHRcdFx0ZTogeUtpZHNcblx0XHR9KTtcblx0fVxuXG5cdC8vIFBBSVJXSVNFIERJRkYgRVZFUllUSElORyBFTFNFXG5cblx0Zm9yICh2YXIgbWluTGVuID0geExlbiA8IHlMZW4gPyB4TGVuIDogeUxlbiwgaSA9IDA7IGkgPCBtaW5MZW47IGkrKylcblx0e1xuXHRcdHZhciB4S2lkID0geEtpZHNbaV07XG5cdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeEtpZCwgeUtpZHNbaV0sIHBhdGNoZXMsICsraW5kZXgpO1xuXHRcdGluZGV4ICs9IHhLaWQuYiB8fCAwO1xuXHR9XG59XG5cblxuXG4vLyBLRVlFRCBESUZGXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZktleWVkS2lkcyh4UGFyZW50LCB5UGFyZW50LCBwYXRjaGVzLCByb290SW5kZXgpXG57XG5cdHZhciBsb2NhbFBhdGNoZXMgPSBbXTtcblxuXHR2YXIgY2hhbmdlcyA9IHt9OyAvLyBEaWN0IFN0cmluZyBFbnRyeVxuXHR2YXIgaW5zZXJ0cyA9IFtdOyAvLyBBcnJheSB7IGluZGV4IDogSW50LCBlbnRyeSA6IEVudHJ5IH1cblx0Ly8gdHlwZSBFbnRyeSA9IHsgdGFnIDogU3RyaW5nLCB2bm9kZSA6IFZOb2RlLCBpbmRleCA6IEludCwgZGF0YSA6IF8gfVxuXG5cdHZhciB4S2lkcyA9IHhQYXJlbnQuZTtcblx0dmFyIHlLaWRzID0geVBhcmVudC5lO1xuXHR2YXIgeExlbiA9IHhLaWRzLmxlbmd0aDtcblx0dmFyIHlMZW4gPSB5S2lkcy5sZW5ndGg7XG5cdHZhciB4SW5kZXggPSAwO1xuXHR2YXIgeUluZGV4ID0gMDtcblxuXHR2YXIgaW5kZXggPSByb290SW5kZXg7XG5cblx0d2hpbGUgKHhJbmRleCA8IHhMZW4gJiYgeUluZGV4IDwgeUxlbilcblx0e1xuXHRcdHZhciB4ID0geEtpZHNbeEluZGV4XTtcblx0XHR2YXIgeSA9IHlLaWRzW3lJbmRleF07XG5cblx0XHR2YXIgeEtleSA9IHguYTtcblx0XHR2YXIgeUtleSA9IHkuYTtcblx0XHR2YXIgeE5vZGUgPSB4LmI7XG5cdFx0dmFyIHlOb2RlID0geS5iO1xuXG5cdFx0dmFyIG5ld01hdGNoID0gdW5kZWZpbmVkO1xuXHRcdHZhciBvbGRNYXRjaCA9IHVuZGVmaW5lZDtcblxuXHRcdC8vIGNoZWNrIGlmIGtleXMgbWF0Y2hcblxuXHRcdGlmICh4S2V5ID09PSB5S2V5KVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4Tm9kZSwgeU5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXG5cdFx0XHR4SW5kZXgrKztcblx0XHRcdHlJbmRleCsrO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gbG9vayBhaGVhZCAxIHRvIGRldGVjdCBpbnNlcnRpb25zIGFuZCByZW1vdmFscy5cblxuXHRcdHZhciB4TmV4dCA9IHhLaWRzW3hJbmRleCArIDFdO1xuXHRcdHZhciB5TmV4dCA9IHlLaWRzW3lJbmRleCArIDFdO1xuXG5cdFx0aWYgKHhOZXh0KVxuXHRcdHtcblx0XHRcdHZhciB4TmV4dEtleSA9IHhOZXh0LmE7XG5cdFx0XHR2YXIgeE5leHROb2RlID0geE5leHQuYjtcblx0XHRcdG9sZE1hdGNoID0geUtleSA9PT0geE5leHRLZXk7XG5cdFx0fVxuXG5cdFx0aWYgKHlOZXh0KVxuXHRcdHtcblx0XHRcdHZhciB5TmV4dEtleSA9IHlOZXh0LmE7XG5cdFx0XHR2YXIgeU5leHROb2RlID0geU5leHQuYjtcblx0XHRcdG5ld01hdGNoID0geEtleSA9PT0geU5leHRLZXk7XG5cdFx0fVxuXG5cblx0XHQvLyBzd2FwIHggYW5kIHlcblx0XHRpZiAobmV3TWF0Y2ggJiYgb2xkTWF0Y2gpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhOb2RlLCB5TmV4dE5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0X1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHhLZXksIHlOb2RlLCB5SW5kZXgsIGluc2VydHMpO1xuXHRcdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHhLZXksIHhOZXh0Tm9kZSwgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5leHROb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4ICs9IDI7XG5cdFx0XHR5SW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGluc2VydCB5XG5cdFx0aWYgKG5ld01hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9pbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeUtleSwgeU5vZGUsIHlJbmRleCwgaW5zZXJ0cyk7XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4Tm9kZSwgeU5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4ICs9IDE7XG5cdFx0XHR5SW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSB4XG5cdFx0aWYgKG9sZE1hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeEtleSwgeE5vZGUsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhOZXh0Tm9kZSwgeU5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5leHROb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4ICs9IDI7XG5cdFx0XHR5SW5kZXggKz0gMTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSB4LCBpbnNlcnQgeVxuXHRcdGlmICh4TmV4dCAmJiB4TmV4dEtleSA9PT0geU5leHRLZXkpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB4S2V5LCB4Tm9kZSwgaW5kZXgpO1xuXHRcdFx0X1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHlLZXksIHlOb2RlLCB5SW5kZXgsIGluc2VydHMpO1xuXHRcdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeE5leHROb2RlLCB5TmV4dE5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5leHROb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4ICs9IDI7XG5cdFx0XHR5SW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0Ly8gZWF0IHVwIGFueSByZW1haW5pbmcgbm9kZXMgd2l0aCByZW1vdmVOb2RlIGFuZCBpbnNlcnROb2RlXG5cblx0d2hpbGUgKHhJbmRleCA8IHhMZW4pXG5cdHtcblx0XHRpbmRleCsrO1xuXHRcdHZhciB4ID0geEtpZHNbeEluZGV4XTtcblx0XHR2YXIgeE5vZGUgPSB4LmI7XG5cdFx0X1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHguYSwgeE5vZGUsIGluZGV4KTtcblx0XHRpbmRleCArPSB4Tm9kZS5iIHx8IDA7XG5cdFx0eEluZGV4Kys7XG5cdH1cblxuXHR3aGlsZSAoeUluZGV4IDwgeUxlbilcblx0e1xuXHRcdHZhciBlbmRJbnNlcnRzID0gZW5kSW5zZXJ0cyB8fCBbXTtcblx0XHR2YXIgeSA9IHlLaWRzW3lJbmRleF07XG5cdFx0X1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHkuYSwgeS5iLCB1bmRlZmluZWQsIGVuZEluc2VydHMpO1xuXHRcdHlJbmRleCsrO1xuXHR9XG5cblx0aWYgKGxvY2FsUGF0Y2hlcy5sZW5ndGggPiAwIHx8IGluc2VydHMubGVuZ3RoID4gMCB8fCBlbmRJbnNlcnRzKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDgsIHJvb3RJbmRleCwge1xuXHRcdFx0dzogbG9jYWxQYXRjaGVzLFxuXHRcdFx0eDogaW5zZXJ0cyxcblx0XHRcdHk6IGVuZEluc2VydHNcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gQ0hBTkdFUyBGUk9NIEtFWUVEIERJRkZcblxuXG52YXIgX1ZpcnR1YWxEb21fUE9TVEZJWCA9ICdfZWxtVzZCTCc7XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGtleSwgdm5vZGUsIHlJbmRleCwgaW5zZXJ0cylcbntcblx0dmFyIGVudHJ5ID0gY2hhbmdlc1trZXldO1xuXG5cdC8vIG5ldmVyIHNlZW4gdGhpcyBrZXkgYmVmb3JlXG5cdGlmICghZW50cnkpXG5cdHtcblx0XHRlbnRyeSA9IHtcblx0XHRcdGM6IDAsXG5cdFx0XHR6OiB2bm9kZSxcblx0XHRcdHI6IHlJbmRleCxcblx0XHRcdHM6IHVuZGVmaW5lZFxuXHRcdH07XG5cblx0XHRpbnNlcnRzLnB1c2goeyByOiB5SW5kZXgsIEE6IGVudHJ5IH0pO1xuXHRcdGNoYW5nZXNba2V5XSA9IGVudHJ5O1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgd2FzIHJlbW92ZWQgZWFybGllciwgYSBtYXRjaCFcblx0aWYgKGVudHJ5LmMgPT09IDEpXG5cdHtcblx0XHRpbnNlcnRzLnB1c2goeyByOiB5SW5kZXgsIEE6IGVudHJ5IH0pO1xuXG5cdFx0ZW50cnkuYyA9IDI7XG5cdFx0dmFyIHN1YlBhdGNoZXMgPSBbXTtcblx0XHRfVmlydHVhbERvbV9kaWZmSGVscChlbnRyeS56LCB2bm9kZSwgc3ViUGF0Y2hlcywgZW50cnkucik7XG5cdFx0ZW50cnkuciA9IHlJbmRleDtcblx0XHRlbnRyeS5zLnMgPSB7XG5cdFx0XHR3OiBzdWJQYXRjaGVzLFxuXHRcdFx0QTogZW50cnlcblx0XHR9O1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgaGFzIGFscmVhZHkgYmVlbiBpbnNlcnRlZCBvciBtb3ZlZCwgYSBkdXBsaWNhdGUhXG5cdF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBrZXkgKyBfVmlydHVhbERvbV9QT1NURklYLCB2bm9kZSwgeUluZGV4LCBpbnNlcnRzKTtcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5LCB2bm9kZSwgaW5kZXgpXG57XG5cdHZhciBlbnRyeSA9IGNoYW5nZXNba2V5XTtcblxuXHQvLyBuZXZlciBzZWVuIHRoaXMga2V5IGJlZm9yZVxuXHRpZiAoIWVudHJ5KVxuXHR7XG5cdFx0dmFyIHBhdGNoID0gX1ZpcnR1YWxEb21fcHVzaFBhdGNoKGxvY2FsUGF0Y2hlcywgOSwgaW5kZXgsIHVuZGVmaW5lZCk7XG5cblx0XHRjaGFuZ2VzW2tleV0gPSB7XG5cdFx0XHRjOiAxLFxuXHRcdFx0ejogdm5vZGUsXG5cdFx0XHRyOiBpbmRleCxcblx0XHRcdHM6IHBhdGNoXG5cdFx0fTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRoaXMga2V5IHdhcyBpbnNlcnRlZCBlYXJsaWVyLCBhIG1hdGNoIVxuXHRpZiAoZW50cnkuYyA9PT0gMClcblx0e1xuXHRcdGVudHJ5LmMgPSAyO1xuXHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAodm5vZGUsIGVudHJ5LnosIHN1YlBhdGNoZXMsIGluZGV4KTtcblxuXHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChsb2NhbFBhdGNoZXMsIDksIGluZGV4LCB7XG5cdFx0XHR3OiBzdWJQYXRjaGVzLFxuXHRcdFx0QTogZW50cnlcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRoaXMga2V5IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBvciBtb3ZlZCwgYSBkdXBsaWNhdGUhXG5cdF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBrZXkgKyBfVmlydHVhbERvbV9QT1NURklYLCB2bm9kZSwgaW5kZXgpO1xufVxuXG5cblxuLy8gQUREIERPTSBOT0RFU1xuLy9cbi8vIEVhY2ggRE9NIG5vZGUgaGFzIGFuIFwiaW5kZXhcIiBhc3NpZ25lZCBpbiBvcmRlciBvZiB0cmF2ZXJzYWwuIEl0IGlzIGltcG9ydGFudFxuLy8gdG8gbWluaW1pemUgb3VyIGNyYXdsIG92ZXIgdGhlIGFjdHVhbCBET00sIHNvIHRoZXNlIGluZGV4ZXMgKGFsb25nIHdpdGggdGhlXG4vLyBkZXNjZW5kYW50c0NvdW50IG9mIHZpcnR1YWwgbm9kZXMpIGxldCB1cyBza2lwIHRvdWNoaW5nIGVudGlyZSBzdWJ0cmVlcyBvZlxuLy8gdGhlIERPTSBpZiB3ZSBrbm93IHRoZXJlIGFyZSBubyBwYXRjaGVzIHRoZXJlLlxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzKGRvbU5vZGUsIHZOb2RlLCBwYXRjaGVzLCBldmVudE5vZGUpXG57XG5cdF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2hlcywgMCwgMCwgdk5vZGUuYiwgZXZlbnROb2RlKTtcbn1cblxuXG4vLyBhc3N1bWVzIGBwYXRjaGVzYCBpcyBub24tZW1wdHkgYW5kIGluZGV4ZXMgaW5jcmVhc2UgbW9ub3RvbmljYWxseS5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2hlcywgaSwgbG93LCBoaWdoLCBldmVudE5vZGUpXG57XG5cdHZhciBwYXRjaCA9IHBhdGNoZXNbaV07XG5cdHZhciBpbmRleCA9IHBhdGNoLnI7XG5cblx0d2hpbGUgKGluZGV4ID09PSBsb3cpXG5cdHtcblx0XHR2YXIgcGF0Y2hUeXBlID0gcGF0Y2guJDtcblxuXHRcdGlmIChwYXRjaFR5cGUgPT09IDEpXG5cdFx0e1xuXHRcdFx0X1ZpcnR1YWxEb21fYWRkRG9tTm9kZXMoZG9tTm9kZSwgdk5vZGUuaywgcGF0Y2gucywgZXZlbnROb2RlKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAocGF0Y2hUeXBlID09PSA4KVxuXHRcdHtcblx0XHRcdHBhdGNoLnQgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2gudSA9IGV2ZW50Tm9kZTtcblxuXHRcdFx0dmFyIHN1YlBhdGNoZXMgPSBwYXRjaC5zLnc7XG5cdFx0XHRpZiAoc3ViUGF0Y2hlcy5sZW5ndGggPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgdk5vZGUsIHN1YlBhdGNoZXMsIDAsIGxvdywgaGlnaCwgZXZlbnROb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBpZiAocGF0Y2hUeXBlID09PSA5KVxuXHRcdHtcblx0XHRcdHBhdGNoLnQgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2gudSA9IGV2ZW50Tm9kZTtcblxuXHRcdFx0dmFyIGRhdGEgPSBwYXRjaC5zO1xuXHRcdFx0aWYgKGRhdGEpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEuQS5zID0gZG9tTm9kZTtcblx0XHRcdFx0dmFyIHN1YlBhdGNoZXMgPSBkYXRhLnc7XG5cdFx0XHRcdGlmIChzdWJQYXRjaGVzLmxlbmd0aCA+IDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgdk5vZGUsIHN1YlBhdGNoZXMsIDAsIGxvdywgaGlnaCwgZXZlbnROb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0cGF0Y2gudCA9IGRvbU5vZGU7XG5cdFx0XHRwYXRjaC51ID0gZXZlbnROb2RlO1xuXHRcdH1cblxuXHRcdGkrKztcblxuXHRcdGlmICghKHBhdGNoID0gcGF0Y2hlc1tpXSkgfHwgKGluZGV4ID0gcGF0Y2gucikgPiBoaWdoKVxuXHRcdHtcblx0XHRcdHJldHVybiBpO1xuXHRcdH1cblx0fVxuXG5cdHZhciB0YWcgPSB2Tm9kZS4kO1xuXG5cdGlmICh0YWcgPT09IDQpXG5cdHtcblx0XHR2YXIgc3ViTm9kZSA9IHZOb2RlLms7XG5cblx0XHR3aGlsZSAoc3ViTm9kZS4kID09PSA0KVxuXHRcdHtcblx0XHRcdHN1Yk5vZGUgPSBzdWJOb2RlLms7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChkb21Ob2RlLCBzdWJOb2RlLCBwYXRjaGVzLCBpLCBsb3cgKyAxLCBoaWdoLCBkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZik7XG5cdH1cblxuXHQvLyB0YWcgbXVzdCBiZSAxIG9yIDIgYXQgdGhpcyBwb2ludFxuXG5cdHZhciB2S2lkcyA9IHZOb2RlLmU7XG5cdHZhciBjaGlsZE5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IHZLaWRzLmxlbmd0aDsgaisrKVxuXHR7XG5cdFx0bG93Kys7XG5cdFx0dmFyIHZLaWQgPSB0YWcgPT09IDEgPyB2S2lkc1tqXSA6IHZLaWRzW2pdLmI7XG5cdFx0dmFyIG5leHRMb3cgPSBsb3cgKyAodktpZC5iIHx8IDApO1xuXHRcdGlmIChsb3cgPD0gaW5kZXggJiYgaW5kZXggPD0gbmV4dExvdylcblx0XHR7XG5cdFx0XHRpID0gX1ZpcnR1YWxEb21fYWRkRG9tTm9kZXNIZWxwKGNoaWxkTm9kZXNbal0sIHZLaWQsIHBhdGNoZXMsIGksIGxvdywgbmV4dExvdywgZXZlbnROb2RlKTtcblx0XHRcdGlmICghKHBhdGNoID0gcGF0Y2hlc1tpXSkgfHwgKGluZGV4ID0gcGF0Y2gucikgPiBoaWdoKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bG93ID0gbmV4dExvdztcblx0fVxuXHRyZXR1cm4gaTtcbn1cblxuXG5cbi8vIEFQUExZIFBBVENIRVNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMocm9vdERvbU5vZGUsIG9sZFZpcnR1YWxOb2RlLCBwYXRjaGVzLCBldmVudE5vZGUpXG57XG5cdGlmIChwYXRjaGVzLmxlbmd0aCA9PT0gMClcblx0e1xuXHRcdHJldHVybiByb290RG9tTm9kZTtcblx0fVxuXG5cdF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzKHJvb3REb21Ob2RlLCBvbGRWaXJ0dWFsTm9kZSwgcGF0Y2hlcywgZXZlbnROb2RlKTtcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlc0hlbHAocm9vdERvbU5vZGUsIHBhdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoZXNIZWxwKHJvb3REb21Ob2RlLCBwYXRjaGVzKVxue1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGNoZXMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuXHRcdHZhciBsb2NhbERvbU5vZGUgPSBwYXRjaC50XG5cdFx0dmFyIG5ld05vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoKGxvY2FsRG9tTm9kZSwgcGF0Y2gpO1xuXHRcdGlmIChsb2NhbERvbU5vZGUgPT09IHJvb3REb21Ob2RlKVxuXHRcdHtcblx0XHRcdHJvb3REb21Ob2RlID0gbmV3Tm9kZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJvb3REb21Ob2RlO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoKGRvbU5vZGUsIHBhdGNoKVxue1xuXHRzd2l0Y2ggKHBhdGNoLiQpXG5cdHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlZHJhdyhkb21Ob2RlLCBwYXRjaC5zLCBwYXRjaC51KTtcblxuXHRcdGNhc2UgNDpcblx0XHRcdF9WaXJ0dWFsRG9tX2FwcGx5RmFjdHMoZG9tTm9kZSwgcGF0Y2gudSwgcGF0Y2gucyk7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgMzpcblx0XHRcdGRvbU5vZGUucmVwbGFjZURhdGEoMCwgZG9tTm9kZS5sZW5ndGgsIHBhdGNoLnMpO1xuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzSGVscChkb21Ob2RlLCBwYXRjaC5zKTtcblxuXHRcdGNhc2UgMjpcblx0XHRcdGlmIChkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZilcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYuaiA9IHBhdGNoLnM7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmID0geyBqOiBwYXRjaC5zLCBwOiBwYXRjaC51IH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgNjpcblx0XHRcdHZhciBkYXRhID0gcGF0Y2gucztcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5pOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZS5jaGlsZE5vZGVzW2RhdGEudl0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDc6XG5cdFx0XHR2YXIgZGF0YSA9IHBhdGNoLnM7XG5cdFx0XHR2YXIga2lkcyA9IGRhdGEuZTtcblx0XHRcdHZhciBpID0gZGF0YS52O1xuXHRcdFx0dmFyIHRoZUVuZCA9IGRvbU5vZGUuY2hpbGROb2Rlc1tpXTtcblx0XHRcdGZvciAoOyBpIDwga2lkcy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5pbnNlcnRCZWZvcmUoX1ZpcnR1YWxEb21fcmVuZGVyKGtpZHNbaV0sIHBhdGNoLnUpLCB0aGVFbmQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDk6XG5cdFx0XHR2YXIgZGF0YSA9IHBhdGNoLnM7XG5cdFx0XHRpZiAoIWRhdGEpXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21Ob2RlKTtcblx0XHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgZW50cnkgPSBkYXRhLkE7XG5cdFx0XHRpZiAodHlwZW9mIGVudHJ5LnIgIT09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRlbnRyeS5zID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzSGVscChkb21Ob2RlLCBkYXRhLncpO1xuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDg6XG5cdFx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlb3JkZXIoZG9tTm9kZSwgcGF0Y2gpO1xuXG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIHBhdGNoLnMoZG9tTm9kZSk7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0X0RlYnVnX2NyYXNoKDEwKTsgLy8gJ1JhbiBpbnRvIGFuIHVua25vd24gcGF0Y2ghJ1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlZHJhdyhkb21Ob2RlLCB2Tm9kZSwgZXZlbnROb2RlKVxue1xuXHR2YXIgcGFyZW50Tm9kZSA9IGRvbU5vZGUucGFyZW50Tm9kZTtcblx0dmFyIG5ld05vZGUgPSBfVmlydHVhbERvbV9yZW5kZXIodk5vZGUsIGV2ZW50Tm9kZSk7XG5cblx0aWYgKCFuZXdOb2RlLmVsbV9ldmVudF9ub2RlX3JlZilcblx0e1xuXHRcdG5ld05vZGUuZWxtX2V2ZW50X25vZGVfcmVmID0gZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWY7XG5cdH1cblxuXHRpZiAocGFyZW50Tm9kZSAmJiBuZXdOb2RlICE9PSBkb21Ob2RlKVxuXHR7XG5cdFx0cGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgZG9tTm9kZSk7XG5cdH1cblx0cmV0dXJuIG5ld05vZGU7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlb3JkZXIoZG9tTm9kZSwgcGF0Y2gpXG57XG5cdHZhciBkYXRhID0gcGF0Y2gucztcblxuXHQvLyByZW1vdmUgZW5kIGluc2VydHNcblx0dmFyIGZyYWcgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoUmVvcmRlckVuZEluc2VydHNIZWxwKGRhdGEueSwgcGF0Y2gpO1xuXG5cdC8vIHJlbW92YWxzXG5cdGRvbU5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXNIZWxwKGRvbU5vZGUsIGRhdGEudyk7XG5cblx0Ly8gaW5zZXJ0c1xuXHR2YXIgaW5zZXJ0cyA9IGRhdGEueDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbnNlcnRzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0dmFyIGluc2VydCA9IGluc2VydHNbaV07XG5cdFx0dmFyIGVudHJ5ID0gaW5zZXJ0LkE7XG5cdFx0dmFyIG5vZGUgPSBlbnRyeS5jID09PSAyXG5cdFx0XHQ/IGVudHJ5LnNcblx0XHRcdDogX1ZpcnR1YWxEb21fcmVuZGVyKGVudHJ5LnosIHBhdGNoLnUpO1xuXHRcdGRvbU5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIGRvbU5vZGUuY2hpbGROb2Rlc1tpbnNlcnQucl0pO1xuXHR9XG5cblx0Ly8gYWRkIGVuZCBpbnNlcnRzXG5cdGlmIChmcmFnKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fYXBwZW5kQ2hpbGQoZG9tTm9kZSwgZnJhZyk7XG5cdH1cblxuXHRyZXR1cm4gZG9tTm9kZTtcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoUmVvcmRlckVuZEluc2VydHNIZWxwKGVuZEluc2VydHMsIHBhdGNoKVxue1xuXHRpZiAoIWVuZEluc2VydHMpXG5cdHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgZnJhZyA9IF9WaXJ0dWFsRG9tX2RvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5kSW5zZXJ0cy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHZhciBpbnNlcnQgPSBlbmRJbnNlcnRzW2ldO1xuXHRcdHZhciBlbnRyeSA9IGluc2VydC5BO1xuXHRcdF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKGZyYWcsIGVudHJ5LmMgPT09IDJcblx0XHRcdD8gZW50cnkuc1xuXHRcdFx0OiBfVmlydHVhbERvbV9yZW5kZXIoZW50cnkueiwgcGF0Y2gudSlcblx0XHQpO1xuXHR9XG5cdHJldHVybiBmcmFnO1xufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUobm9kZSlcbntcblx0Ly8gVEVYVCBOT0RFU1xuXG5cdGlmIChub2RlLm5vZGVUeXBlID09PSAzKVxuXHR7XG5cdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RleHQobm9kZS50ZXh0Q29udGVudCk7XG5cdH1cblxuXG5cdC8vIFdFSVJEIE5PREVTXG5cblx0aWYgKG5vZGUubm9kZVR5cGUgIT09IDEpXG5cdHtcblx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fdGV4dCgnJyk7XG5cdH1cblxuXG5cdC8vIEVMRU1FTlQgTk9ERVNcblxuXHR2YXIgYXR0ckxpc3QgPSBfTGlzdF9OaWw7XG5cdHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcztcblx0Zm9yICh2YXIgaSA9IGF0dHJzLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHR2YXIgYXR0ciA9IGF0dHJzW2ldO1xuXHRcdHZhciBuYW1lID0gYXR0ci5uYW1lO1xuXHRcdHZhciB2YWx1ZSA9IGF0dHIudmFsdWU7XG5cdFx0YXR0ckxpc3QgPSBfTGlzdF9Db25zKCBBMihfVmlydHVhbERvbV9hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKSwgYXR0ckxpc3QgKTtcblx0fVxuXG5cdHZhciB0YWcgPSBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0dmFyIGtpZExpc3QgPSBfTGlzdF9OaWw7XG5cdHZhciBraWRzID0gbm9kZS5jaGlsZE5vZGVzO1xuXG5cdGZvciAodmFyIGkgPSBraWRzLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHRraWRMaXN0ID0gX0xpc3RfQ29ucyhfVmlydHVhbERvbV92aXJ0dWFsaXplKGtpZHNbaV0pLCBraWRMaXN0KTtcblx0fVxuXHRyZXR1cm4gQTMoX1ZpcnR1YWxEb21fbm9kZSwgdGFnLCBhdHRyTGlzdCwga2lkTGlzdCk7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2Rla2V5KGtleWVkTm9kZSlcbntcblx0dmFyIGtleWVkS2lkcyA9IGtleWVkTm9kZS5lO1xuXHR2YXIgbGVuID0ga2V5ZWRLaWRzLmxlbmd0aDtcblx0dmFyIGtpZHMgPSBuZXcgQXJyYXkobGVuKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcblx0e1xuXHRcdGtpZHNbaV0gPSBrZXllZEtpZHNbaV0uYjtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0JDogMSxcblx0XHRjOiBrZXllZE5vZGUuYyxcblx0XHRkOiBrZXllZE5vZGUuZCxcblx0XHRlOiBraWRzLFxuXHRcdGY6IGtleWVkTm9kZS5mLFxuXHRcdGI6IGtleWVkTm9kZS5iXG5cdH07XG59XG5cblxuXG52YXIgX0JpdHdpc2VfYW5kID0gRjIoZnVuY3Rpb24oYSwgYilcbntcblx0cmV0dXJuIGEgJiBiO1xufSk7XG5cbnZhciBfQml0d2lzZV9vciA9IEYyKGZ1bmN0aW9uKGEsIGIpXG57XG5cdHJldHVybiBhIHwgYjtcbn0pO1xuXG52YXIgX0JpdHdpc2VfeG9yID0gRjIoZnVuY3Rpb24oYSwgYilcbntcblx0cmV0dXJuIGEgXiBiO1xufSk7XG5cbmZ1bmN0aW9uIF9CaXR3aXNlX2NvbXBsZW1lbnQoYSlcbntcblx0cmV0dXJuIH5hO1xufTtcblxudmFyIF9CaXR3aXNlX3NoaWZ0TGVmdEJ5ID0gRjIoZnVuY3Rpb24ob2Zmc2V0LCBhKVxue1xuXHRyZXR1cm4gYSA8PCBvZmZzZXQ7XG59KTtcblxudmFyIF9CaXR3aXNlX3NoaWZ0UmlnaHRCeSA9IEYyKGZ1bmN0aW9uKG9mZnNldCwgYSlcbntcblx0cmV0dXJuIGEgPj4gb2Zmc2V0O1xufSk7XG5cbnZhciBfQml0d2lzZV9zaGlmdFJpZ2h0WmZCeSA9IEYyKGZ1bmN0aW9uKG9mZnNldCwgYSlcbntcblx0cmV0dXJuIGEgPj4+IG9mZnNldDtcbn0pO1xuXG5cblxuXG4vLyBIRUxQRVJTXG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX3Vuc2FmZUNvZXJjZSh2YWx1ZSlcbntcblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cblxuLy8gUFJPR1JBTVNcblxuXG52YXIgX0RlYnVnZ2VyX2VsZW1lbnQgPSBGNChmdW5jdGlvbihpbXBsLCBmbGFnRGVjb2RlciwgZGVidWdNZXRhZGF0YSwgYXJncylcbntcblx0cmV0dXJuIF9QbGF0Zm9ybV9pbml0aWFsaXplKFxuXHRcdGZsYWdEZWNvZGVyLFxuXHRcdGFyZ3MsXG5cdFx0QTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwSW5pdCwgX0pzb25fd3JhcChkZWJ1Z01ldGFkYXRhKSwgX0RlYnVnZ2VyX3BvcG91dCgpLCBpbXBsLmluaXQpLFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd3JhcFVwZGF0ZShpbXBsLnVwZGF0ZSksXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwU3VicyhpbXBsLnN1YnNjcmlwdGlvbnMpLFxuXHRcdGZ1bmN0aW9uKHNlbmRUb0FwcCwgaW5pdGlhbE1vZGVsKVxuXHRcdHtcblx0XHRcdHZhciB2aWV3ID0gaW1wbC52aWV3O1xuXHRcdFx0dmFyIHRpdGxlID0gX1ZpcnR1YWxEb21fZG9jLnRpdGxlO1xuXHRcdFx0dmFyIGRvbU5vZGUgPSBhcmdzICYmIGFyZ3NbJ25vZGUnXSA/IGFyZ3NbJ25vZGUnXSA6IF9EZWJ1Z19jcmFzaCgwKTtcblx0XHRcdHZhciBjdXJyTm9kZSA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoZG9tTm9kZSk7XG5cdFx0XHR2YXIgY3VyckJsb2NrZXIgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUoaW5pdGlhbE1vZGVsKTtcblx0XHRcdHZhciBjdXJyUG9wb3V0O1xuXG5cdFx0XHR2YXIgY29ybmVyTm9kZSA9IF9WaXJ0dWFsRG9tX2RvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRvbU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29ybmVyTm9kZSwgZG9tTm9kZS5uZXh0U2libGluZyk7XG5cdFx0XHR2YXIgY29ybmVyQ3VyciA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoY29ybmVyTm9kZSk7XG5cblx0XHRcdGluaXRpYWxNb2RlbC5wb3BvdXQuYSA9IHNlbmRUb0FwcDtcblxuXHRcdFx0cmV0dXJuIF9Ccm93c2VyX21ha2VBbmltYXRvcihpbml0aWFsTW9kZWwsIGZ1bmN0aW9uKG1vZGVsKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbmV4dE5vZGUgPSBBMihfVmlydHVhbERvbV9tYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXNlck1zZywgdmlldyhlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldFVzZXJNb2RlbChtb2RlbCkpKTtcblx0XHRcdFx0dmFyIHBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJOb2RlLCBuZXh0Tm9kZSk7XG5cdFx0XHRcdGRvbU5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMoZG9tTm9kZSwgY3Vyck5vZGUsIHBhdGNoZXMsIHNlbmRUb0FwcCk7XG5cdFx0XHRcdGN1cnJOb2RlID0gbmV4dE5vZGU7XG5cblx0XHRcdFx0Ly8gdXBkYXRlIGJsb2NrZXJcblxuXHRcdFx0XHR2YXIgbmV4dEJsb2NrZXIgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUobW9kZWwpO1xuXHRcdFx0XHRfRGVidWdnZXJfdXBkYXRlQmxvY2tlcihjdXJyQmxvY2tlciwgbmV4dEJsb2NrZXIpO1xuXHRcdFx0XHRjdXJyQmxvY2tlciA9IG5leHRCbG9ja2VyO1xuXG5cdFx0XHRcdC8vIHZpZXcgY29ybmVyXG5cblx0XHRcdFx0aWYgKCFtb2RlbC5wb3BvdXQuYilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciBjb3JuZXJOZXh0ID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRjb3JuZXJWaWV3KG1vZGVsKTtcblx0XHRcdFx0XHR2YXIgY29ybmVyUGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY29ybmVyQ3VyciwgY29ybmVyTmV4dCk7XG5cdFx0XHRcdFx0Y29ybmVyTm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhjb3JuZXJOb2RlLCBjb3JuZXJDdXJyLCBjb3JuZXJQYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRcdGNvcm5lckN1cnIgPSBjb3JuZXJOZXh0O1xuXHRcdFx0XHRcdGN1cnJQb3BvdXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gdmlldyBwb3BvdXRcblxuXHRcdFx0XHRfVmlydHVhbERvbV9kb2MgPSBtb2RlbC5wb3BvdXQuYjsgLy8gU1dJVENIIFRPIFBPUE9VVCBET0Ncblx0XHRcdFx0Y3VyclBvcG91dCB8fCAoY3VyclBvcG91dCA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUobW9kZWwucG9wb3V0LmIpKTtcblx0XHRcdFx0dmFyIG5leHRQb3BvdXQgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHBvcG91dFZpZXcobW9kZWwpO1xuXHRcdFx0XHR2YXIgcG9wb3V0UGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY3VyclBvcG91dCwgbmV4dFBvcG91dCk7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhtb2RlbC5wb3BvdXQuYi5ib2R5LCBjdXJyUG9wb3V0LCBwb3BvdXRQYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRjdXJyUG9wb3V0ID0gbmV4dFBvcG91dDtcblx0XHRcdFx0X1ZpcnR1YWxEb21fZG9jID0gZG9jdW1lbnQ7IC8vIFNXSVRDSCBCQUNLIFRPIE5PUk1BTCBET0Ncblx0XHRcdH0pO1xuXHRcdH1cblx0KTtcbn0pO1xuXG5cbnZhciBfRGVidWdnZXJfZG9jdW1lbnQgPSBGNChmdW5jdGlvbihpbXBsLCBmbGFnRGVjb2RlciwgZGVidWdNZXRhZGF0YSwgYXJncylcbntcblx0cmV0dXJuIF9QbGF0Zm9ybV9pbml0aWFsaXplKFxuXHRcdGZsYWdEZWNvZGVyLFxuXHRcdGFyZ3MsXG5cdFx0QTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwSW5pdCwgX0pzb25fd3JhcChkZWJ1Z01ldGFkYXRhKSwgX0RlYnVnZ2VyX3BvcG91dCgpLCBpbXBsLmluaXQpLFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd3JhcFVwZGF0ZShpbXBsLnVwZGF0ZSksXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwU3VicyhpbXBsLnN1YnNjcmlwdGlvbnMpLFxuXHRcdGZ1bmN0aW9uKHNlbmRUb0FwcCwgaW5pdGlhbE1vZGVsKVxuXHRcdHtcblx0XHRcdHZhciBkaXZlcnRIcmVmVG9BcHAgPSBpbXBsLnNldHVwICYmIGltcGwuc2V0dXAoZnVuY3Rpb24oeCkgeyByZXR1cm4gc2VuZFRvQXBwKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXNlck1zZyh4KSk7IH0pO1xuXHRcdFx0dmFyIHZpZXcgPSBpbXBsLnZpZXc7XG5cdFx0XHR2YXIgdGl0bGUgPSBfVmlydHVhbERvbV9kb2MudGl0bGU7XG5cdFx0XHR2YXIgYm9keU5vZGUgPSBfVmlydHVhbERvbV9kb2MuYm9keTtcblx0XHRcdHZhciBjdXJyTm9kZSA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoYm9keU5vZGUpO1xuXHRcdFx0dmFyIGN1cnJCbG9ja2VyID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b0Jsb2NrZXJUeXBlKGluaXRpYWxNb2RlbCk7XG5cdFx0XHR2YXIgY3VyclBvcG91dDtcblxuXHRcdFx0aW5pdGlhbE1vZGVsLnBvcG91dC5hID0gc2VuZFRvQXBwO1xuXG5cdFx0XHRyZXR1cm4gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKGluaXRpYWxNb2RlbCwgZnVuY3Rpb24obW9kZWwpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcCA9IGRpdmVydEhyZWZUb0FwcDtcblx0XHRcdFx0dmFyIGRvYyA9IHZpZXcoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRVc2VyTW9kZWwobW9kZWwpKTtcblx0XHRcdFx0dmFyIG5leHROb2RlID0gX1ZpcnR1YWxEb21fbm9kZSgnYm9keScpKF9MaXN0X05pbCkoXG5cdFx0XHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRtYXAsIF9WaXJ0dWFsRG9tX21hcChlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVzZXJNc2cpLCBkb2MuYm9keSksXG5cdFx0XHRcdFx0XHRfTGlzdF9Db25zKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kY29ybmVyVmlldyhtb2RlbCksIF9MaXN0X05pbClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHZhciBwYXRjaGVzID0gX1ZpcnR1YWxEb21fZGlmZihjdXJyTm9kZSwgbmV4dE5vZGUpO1xuXHRcdFx0XHRib2R5Tm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhib2R5Tm9kZSwgY3Vyck5vZGUsIHBhdGNoZXMsIHNlbmRUb0FwcCk7XG5cdFx0XHRcdGN1cnJOb2RlID0gbmV4dE5vZGU7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcCA9IDA7XG5cdFx0XHRcdCh0aXRsZSAhPT0gZG9jLnRpdGxlKSAmJiAoX1ZpcnR1YWxEb21fZG9jLnRpdGxlID0gdGl0bGUgPSBkb2MudGl0bGUpO1xuXG5cdFx0XHRcdC8vIHVwZGF0ZSBibG9ja2VyXG5cblx0XHRcdFx0dmFyIG5leHRCbG9ja2VyID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b0Jsb2NrZXJUeXBlKG1vZGVsKTtcblx0XHRcdFx0X0RlYnVnZ2VyX3VwZGF0ZUJsb2NrZXIoY3VyckJsb2NrZXIsIG5leHRCbG9ja2VyKTtcblx0XHRcdFx0Y3VyckJsb2NrZXIgPSBuZXh0QmxvY2tlcjtcblxuXHRcdFx0XHQvLyB2aWV3IHBvcG91dFxuXG5cdFx0XHRcdGlmICghbW9kZWwucG9wb3V0LmIpIHsgY3VyclBvcG91dCA9IHVuZGVmaW5lZDsgcmV0dXJuOyB9XG5cblx0XHRcdFx0X1ZpcnR1YWxEb21fZG9jID0gbW9kZWwucG9wb3V0LmI7IC8vIFNXSVRDSCBUTyBQT1BPVVQgRE9DXG5cdFx0XHRcdGN1cnJQb3BvdXQgfHwgKGN1cnJQb3BvdXQgPSBfVmlydHVhbERvbV92aXJ0dWFsaXplKG1vZGVsLnBvcG91dC5iKSk7XG5cdFx0XHRcdHZhciBuZXh0UG9wb3V0ID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRwb3BvdXRWaWV3KG1vZGVsKTtcblx0XHRcdFx0dmFyIHBvcG91dFBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJQb3BvdXQsIG5leHRQb3BvdXQpO1xuXHRcdFx0XHRfVmlydHVhbERvbV9hcHBseVBhdGNoZXMobW9kZWwucG9wb3V0LmIuYm9keSwgY3VyclBvcG91dCwgcG9wb3V0UGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3VyclBvcG91dCA9IG5leHRQb3BvdXQ7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RvYyA9IGRvY3VtZW50OyAvLyBTV0lUQ0ggQkFDSyBUTyBOT1JNQUwgRE9DXG5cdFx0XHR9KTtcblx0XHR9XG5cdCk7XG59KTtcblxuXG5mdW5jdGlvbiBfRGVidWdnZXJfcG9wb3V0KClcbntcblx0cmV0dXJuIHtcblx0XHRiOiB1bmRlZmluZWQsXG5cdFx0YTogdW5kZWZpbmVkXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9pc09wZW4ocG9wb3V0KVxue1xuXHRyZXR1cm4gISFwb3BvdXQuYjtcbn1cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX29wZW4ocG9wb3V0KVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0X0RlYnVnZ2VyX29wZW5XaW5kb3cocG9wb3V0KTtcblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX29wZW5XaW5kb3cocG9wb3V0KVxue1xuXHR2YXIgdyA9IDkwMCwgaCA9IDM2MCwgeCA9IHNjcmVlbi53aWR0aCAtIHcsIHkgPSBzY3JlZW4uaGVpZ2h0IC0gaDtcblx0dmFyIGRlYnVnZ2VyV2luZG93ID0gd2luZG93Lm9wZW4oJycsICcnLCAnd2lkdGg9JyArIHcgKyAnLGhlaWdodD0nICsgaCArICcsbGVmdD0nICsgeCArICcsdG9wPScgKyB5KTtcblx0dmFyIGRvYyA9IGRlYnVnZ2VyV2luZG93LmRvY3VtZW50O1xuXHRkb2MudGl0bGUgPSAnRWxtIERlYnVnZ2VyJztcblxuXHQvLyBoYW5kbGUgYXJyb3cga2V5c1xuXHRkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQubWV0YUtleSAmJiBldmVudC53aGljaCA9PT0gODIgJiYgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdGV2ZW50LndoaWNoID09PSAzOCAmJiAocG9wb3V0LmEoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVcCksIGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuXHRcdGV2ZW50LndoaWNoID09PSA0MCAmJiAocG9wb3V0LmEoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiREb3duKSwgZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSB3aW5kb3cgY2xvc2Vcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIGNsb3NlKTtcblx0ZGVidWdnZXJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0cG9wb3V0LmIgPSB1bmRlZmluZWQ7XG5cdFx0cG9wb3V0LmEoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgY2xvc2UpO1xuXHR9KTtcblx0ZnVuY3Rpb24gY2xvc2UoKSB7XG5cdFx0cG9wb3V0LmIgPSB1bmRlZmluZWQ7XG5cdFx0cG9wb3V0LmEoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wKTtcblx0XHRkZWJ1Z2dlcldpbmRvdy5jbG9zZSgpO1xuXHR9XG5cblx0Ly8gcmVnaXN0ZXIgbmV3IHdpbmRvd1xuXHRwb3BvdXQuYiA9IGRvYztcbn1cblxuXG5cbi8vIFNDUk9MTFxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9zY3JvbGwocG9wb3V0KVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYgKHBvcG91dC5iKVxuXHRcdHtcblx0XHRcdHZhciBtc2dzID0gcG9wb3V0LmIuZ2V0RWxlbWVudEJ5SWQoJ2VsbS1kZWJ1Z2dlci1zaWRlYmFyJyk7XG5cdFx0XHRpZiAobXNncylcblx0XHRcdHtcblx0XHRcdFx0bXNncy5zY3JvbGxUb3AgPSBtc2dzLnNjcm9sbEhlaWdodDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApKTtcblx0fSk7XG59XG5cblxuXG4vLyBVUExPQURcblxuXG5mdW5jdGlvbiBfRGVidWdnZXJfdXBsb2FkKClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsICd0ZXh0L2pzb24nKTtcblx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudClcblx0XHR7XG5cdFx0XHR2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpXG5cdFx0XHR7XG5cdFx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChlLnRhcmdldC5yZXN1bHQpKTtcblx0XHRcdH07XG5cdFx0XHRmaWxlUmVhZGVyLnJlYWRBc1RleHQoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRlbGVtZW50LmNsaWNrKCk7XG5cdH0pO1xufVxuXG5cblxuLy8gRE9XTkxPQURcblxuXG52YXIgX0RlYnVnZ2VyX2Rvd25sb2FkID0gRjIoZnVuY3Rpb24oaGlzdG9yeUxlbmd0aCwganNvbilcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHZhciBmaWxlTmFtZSA9ICdoaXN0b3J5LScgKyBoaXN0b3J5TGVuZ3RoICsgJy50eHQnO1xuXHRcdHZhciBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cdFx0dmFyIG1pbWUgPSAndGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04Jztcblx0XHR2YXIgZG9uZSA9IF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKTtcblxuXHRcdC8vIGZvciBJRTEwK1xuXHRcdGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYilcblx0XHR7XG5cdFx0XHRuYXZpZ2F0b3IubXNTYXZlQmxvYihuZXcgQmxvYihbanNvblN0cmluZ10sIHt0eXBlOiBtaW1lfSksIGZpbGVOYW1lKTtcblx0XHRcdHJldHVybiBjYWxsYmFjayhkb25lKTtcblx0XHR9XG5cblx0XHQvLyBmb3IgSFRNTDVcblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOicgKyBtaW1lICsgJywnICsgZW5jb2RlVVJJQ29tcG9uZW50KGpzb25TdHJpbmcpKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlTmFtZSk7XG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0ZWxlbWVudC5jbGljaygpO1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cdFx0Y2FsbGJhY2soZG9uZSk7XG5cdH0pO1xufSk7XG5cblxuXG4vLyBQT1BPVVQgQ09OVEVOVFxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9tZXNzYWdlVG9TdHJpbmcodmFsdWUpXG57XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0e1xuXHRcdHJldHVybiB2YWx1ZSA/ICdUcnVlJyA6ICdGYWxzZSc7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcblx0e1xuXHRcdHJldHVybiB2YWx1ZSArICcnO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG5cdHtcblx0XHRyZXR1cm4gJ1wiJyArIF9EZWJ1Z2dlcl9hZGRTbGFzaGVzKHZhbHVlLCBmYWxzZSkgKyAnXCInO1xuXHR9XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0cmV0dXJuIFwiJ1wiICsgX0RlYnVnZ2VyX2FkZFNsYXNoZXModmFsdWUsIHRydWUpICsgXCInXCI7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhKCckJyBpbiB2YWx1ZSkpXG5cdHtcblx0XHRyZXR1cm4gJ+KApic7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlLiQgPT09ICdudW1iZXInKVxuXHR7XG5cdFx0cmV0dXJuICfigKYnO1xuXHR9XG5cblx0dmFyIGNvZGUgPSB2YWx1ZS4kLmNoYXJDb2RlQXQoMCk7XG5cdGlmIChjb2RlID09PSAweDIzIC8qICMgKi8gfHwgLyogYSAqLyAweDYxIDw9IGNvZGUgJiYgY29kZSA8PSAweDdBIC8qIHogKi8pXG5cdHtcblx0XHRyZXR1cm4gJ+KApic7XG5cdH1cblxuXHRpZiAoWydBcnJheV9lbG1fYnVpbHRpbicsICdTZXRfZWxtX2J1aWx0aW4nLCAnUkJOb2RlX2VsbV9idWlsdGluJywgJ1JCRW1wdHlfZWxtX2J1aWx0aW4nXS5pbmRleE9mKHZhbHVlLiQpID49IDApXG5cdHtcblx0XHRyZXR1cm4gJ+KApic7XG5cdH1cblxuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblx0c3dpdGNoIChrZXlzLmxlbmd0aClcblx0e1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiB2YWx1ZS4kO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiB2YWx1ZS4kICsgJyAnICsgX0RlYnVnZ2VyX21lc3NhZ2VUb1N0cmluZyh2YWx1ZS5hKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHZhbHVlLiQgKyAnIOKApiAnICsgX0RlYnVnZ2VyX21lc3NhZ2VUb1N0cmluZyh2YWx1ZVtrZXlzW2tleXMubGVuZ3RoIC0gMV1dKTtcblx0fVxufVxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9pbml0KHZhbHVlKVxue1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpXG5cdHtcblx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3RvciwgZWxtJGNvcmUkTWF5YmUkSnVzdCh2YWx1ZSA/ICdUcnVlJyA6ICdGYWxzZScpLCB0cnVlLCBfTGlzdF9OaWwpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG5cdHtcblx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRQcmltaXRpdmUodmFsdWUgKyAnJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFMoJ1wiJyArIF9EZWJ1Z2dlcl9hZGRTbGFzaGVzKHZhbHVlLCBmYWxzZSkgKyAnXCInKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZylcblx0e1xuXHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFMoXCInXCIgKyBfRGVidWdnZXJfYWRkU2xhc2hlcyh2YWx1ZSwgdHJ1ZSkgKyBcIidcIik7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnJCcgaW4gdmFsdWUpXG5cdHtcblx0XHR2YXIgdGFnID0gdmFsdWUuJDtcblxuXHRcdGlmICh0YWcgPT09ICc6OicgfHwgdGFnID09PSAnW10nKVxuXHRcdHtcblx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJExpc3RTZXEsIHRydWUsXG5cdFx0XHRcdEEyKGVsbSRjb3JlJExpc3QkbWFwLCBfRGVidWdnZXJfaW5pdCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdTZXRfZWxtX2J1aWx0aW4nKVxuXHRcdHtcblx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNldFNlcSwgdHJ1ZSxcblx0XHRcdFx0QTMoZWxtJGNvcmUkU2V0JGZvbGRyLCBfRGVidWdnZXJfaW5pdENvbnMsIF9MaXN0X05pbCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nIHx8IHRhZyA9PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRGljdGlvbmFyeSwgdHJ1ZSxcblx0XHRcdFx0QTMoZWxtJGNvcmUkRGljdCRmb2xkciwgX0RlYnVnZ2VyX2luaXRLZXlWYWx1ZUNvbnMsIF9MaXN0X05pbCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdBcnJheV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kQXJyYXlTZXEsIHRydWUsXG5cdFx0XHRcdEEzKGVsbSRjb3JlJEFycmF5JGZvbGRyLCBfRGVidWdnZXJfaW5pdENvbnMsIF9MaXN0X05pbCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGFnID09PSAnbnVtYmVyJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRQcmltaXRpdmUoJzxpbnRlcm5hbHM+Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYXIgPSB0YWcuY2hhckNvZGVBdCgwKTtcblx0XHRpZiAoY2hhciA9PT0gMzUgfHwgNjUgPD0gY2hhciAmJiBjaGFyIDw9IDkwKVxuXHRcdHtcblx0XHRcdHZhciBsaXN0ID0gX0xpc3RfTmlsO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKGkgPT09ICckJykgY29udGludWU7XG5cdFx0XHRcdGxpc3QgPSBfTGlzdF9Db25zKF9EZWJ1Z2dlcl9pbml0KHZhbHVlW2ldKSwgbGlzdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3RvciwgY2hhciA9PT0gMzUgPyBlbG0kY29yZSRNYXliZSROb3RoaW5nIDogZWxtJGNvcmUkTWF5YmUkSnVzdCh0YWcpLCB0cnVlLCBlbG0kY29yZSRMaXN0JHJldmVyc2UobGlzdCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFByaW1pdGl2ZSgnPGludGVybmFscz4nKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuXHR7XG5cdFx0dmFyIGRpY3QgPSBlbG0kY29yZSREaWN0JGVtcHR5O1xuXHRcdGZvciAodmFyIGkgaW4gdmFsdWUpXG5cdFx0e1xuXHRcdFx0ZGljdCA9IEEzKGVsbSRjb3JlJERpY3QkaW5zZXJ0LCBpLCBfRGVidWdnZXJfaW5pdCh2YWx1ZVtpXSksIGRpY3QpO1xuXHRcdH1cblx0XHRyZXR1cm4gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsIHRydWUsIGRpY3QpO1xuXHR9XG5cblx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUHJpbWl0aXZlKCc8aW50ZXJuYWxzPicpO1xufVxuXG52YXIgX0RlYnVnZ2VyX2luaXRDb25zID0gRjIoZnVuY3Rpb24gaW5pdENvbnNIZWxwKHZhbHVlLCBsaXN0KVxue1xuXHRyZXR1cm4gX0xpc3RfQ29ucyhfRGVidWdnZXJfaW5pdCh2YWx1ZSksIGxpc3QpO1xufSk7XG5cbnZhciBfRGVidWdnZXJfaW5pdEtleVZhbHVlQ29ucyA9IEYzKGZ1bmN0aW9uKGtleSwgdmFsdWUsIGxpc3QpXG57XG5cdHJldHVybiBfTGlzdF9Db25zKFxuXHRcdF9VdGlsc19UdXBsZTIoX0RlYnVnZ2VyX2luaXQoa2V5KSwgX0RlYnVnZ2VyX2luaXQodmFsdWUpKSxcblx0XHRsaXN0XG5cdCk7XG59KTtcblxuZnVuY3Rpb24gX0RlYnVnZ2VyX2FkZFNsYXNoZXMoc3RyLCBpc0NoYXIpXG57XG5cdHZhciBzID0gc3RyXG5cdFx0LnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcblx0XHQucmVwbGFjZSgvXFxuL2csICdcXFxcbicpXG5cdFx0LnJlcGxhY2UoL1xcdC9nLCAnXFxcXHQnKVxuXHRcdC5yZXBsYWNlKC9cXHIvZywgJ1xcXFxyJylcblx0XHQucmVwbGFjZSgvXFx2L2csICdcXFxcdicpXG5cdFx0LnJlcGxhY2UoL1xcMC9nLCAnXFxcXDAnKTtcblx0aWYgKGlzQ2hhcilcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcJy9nLCAnXFxcXFxcJycpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuXHR9XG59XG5cblxuXG4vLyBCTE9DSyBFVkVOVFNcblxuXG5mdW5jdGlvbiBfRGVidWdnZXJfdXBkYXRlQmxvY2tlcihvbGRCbG9ja2VyLCBuZXdCbG9ja2VyKVxue1xuXHRpZiAob2xkQmxvY2tlciA9PT0gbmV3QmxvY2tlcikgcmV0dXJuO1xuXG5cdHZhciBvbGRFdmVudHMgPSBfRGVidWdnZXJfYmxvY2tlclRvRXZlbnRzKG9sZEJsb2NrZXIpO1xuXHR2YXIgbmV3RXZlbnRzID0gX0RlYnVnZ2VyX2Jsb2NrZXJUb0V2ZW50cyhuZXdCbG9ja2VyKTtcblxuXHQvLyByZW1vdmUgb2xkIGJsb2NrZXJzXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgb2xkRXZlbnRzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihvbGRFdmVudHNbaV0sIF9EZWJ1Z2dlcl9ibG9ja2VyLCB0cnVlKTtcblx0fVxuXG5cdC8vIGFkZCBuZXcgYmxvY2tlcnNcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuZXdFdmVudHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5ld0V2ZW50c1tpXSwgX0RlYnVnZ2VyX2Jsb2NrZXIsIHRydWUpO1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX2Jsb2NrZXIoZXZlbnQpXG57XG5cdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgZXZlbnQubWV0YUtleSAmJiBldmVudC53aGljaCA9PT0gODIpXG5cdHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgaXNTY3JvbGwgPSBldmVudC50eXBlID09PSAnc2Nyb2xsJyB8fCBldmVudC50eXBlID09PSAnd2hlZWwnO1xuXHRmb3IgKHZhciBub2RlID0gZXZlbnQudGFyZ2V0OyBub2RlOyBub2RlID0gbm9kZS5wYXJlbnROb2RlKVxuXHR7XG5cdFx0aWYgKGlzU2Nyb2xsID8gbm9kZS5pZCA9PT0gJ2VsbS1kZWJ1Z2dlci1kZXRhaWxzJyA6IG5vZGUuaWQgPT09ICdlbG0tZGVidWdnZXItb3ZlcmxheScpXG5cdFx0e1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBfRGVidWdnZXJfYmxvY2tlclRvRXZlbnRzKGJsb2NrZXIpXG57XG5cdHJldHVybiBibG9ja2VyID09PSBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTm9uZVxuXHRcdD8gW11cblx0XHQ6IGJsb2NrZXIgPT09IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tNb3N0XG5cdFx0XHQ/IF9EZWJ1Z2dlcl9tb3N0RXZlbnRzXG5cdFx0XHQ6IF9EZWJ1Z2dlcl9hbGxFdmVudHM7XG59XG5cbnZhciBfRGVidWdnZXJfbW9zdEV2ZW50cyA9IFtcblx0J2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNlbW92ZScsXG5cdCdtb3VzZXVwJywgJ21vdXNlZG93bicsICdtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnLFxuXHQndG91Y2hzdGFydCcsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICd0b3VjaG1vdmUnLFxuXHQncG9pbnRlcmRvd24nLCAncG9pbnRlcnVwJywgJ3BvaW50ZXJvdmVyJywgJ3BvaW50ZXJvdXQnLFxuXHQncG9pbnRlcmVudGVyJywgJ3BvaW50ZXJsZWF2ZScsICdwb2ludGVybW92ZScsICdwb2ludGVyY2FuY2VsJyxcblx0J2RyYWdzdGFydCcsICdkcmFnJywgJ2RyYWdlbmQnLCAnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJyxcblx0J2tleXVwJywgJ2tleWRvd24nLCAna2V5cHJlc3MnLFxuXHQnaW5wdXQnLCAnY2hhbmdlJyxcblx0J2ZvY3VzJywgJ2JsdXInXG5dO1xuXG52YXIgX0RlYnVnZ2VyX2FsbEV2ZW50cyA9IF9EZWJ1Z2dlcl9tb3N0RXZlbnRzLmNvbmNhdCgnd2hlZWwnLCAnc2Nyb2xsJyk7XG5cblxuXG5cblxuLy8gRUxFTUVOVFxuXG5cbnZhciBfRGVidWdnZXJfZWxlbWVudDtcblxudmFyIF9Ccm93c2VyX2VsZW1lbnQgPSBfRGVidWdnZXJfZWxlbWVudCB8fCBGNChmdW5jdGlvbihpbXBsLCBmbGFnRGVjb2RlciwgZGVidWdNZXRhZGF0YSwgYXJncylcbntcblx0cmV0dXJuIF9QbGF0Zm9ybV9pbml0aWFsaXplKFxuXHRcdGZsYWdEZWNvZGVyLFxuXHRcdGFyZ3MsXG5cdFx0aW1wbC5pbml0LFxuXHRcdGltcGwudXBkYXRlLFxuXHRcdGltcGwuc3Vic2NyaXB0aW9ucyxcblx0XHRmdW5jdGlvbihzZW5kVG9BcHAsIGluaXRpYWxNb2RlbCkge1xuXHRcdFx0dmFyIHZpZXcgPSBpbXBsLnZpZXc7XG5cdFx0XHQvKipfVU5VU0VEL1xuXHRcdFx0dmFyIGRvbU5vZGUgPSBhcmdzWydub2RlJ107XG5cdFx0XHQvLyovXG5cdFx0XHQvKiovXG5cdFx0XHR2YXIgZG9tTm9kZSA9IGFyZ3MgJiYgYXJnc1snbm9kZSddID8gYXJnc1snbm9kZSddIDogX0RlYnVnX2NyYXNoKDApO1xuXHRcdFx0Ly8qL1xuXHRcdFx0dmFyIGN1cnJOb2RlID0gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShkb21Ob2RlKTtcblxuXHRcdFx0cmV0dXJuIF9Ccm93c2VyX21ha2VBbmltYXRvcihpbml0aWFsTW9kZWwsIGZ1bmN0aW9uKG1vZGVsKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbmV4dE5vZGUgPSB2aWV3KG1vZGVsKTtcblx0XHRcdFx0dmFyIHBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJOb2RlLCBuZXh0Tm9kZSk7XG5cdFx0XHRcdGRvbU5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMoZG9tTm9kZSwgY3Vyck5vZGUsIHBhdGNoZXMsIHNlbmRUb0FwcCk7XG5cdFx0XHRcdGN1cnJOb2RlID0gbmV4dE5vZGU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdCk7XG59KTtcblxuXG5cbi8vIERPQ1VNRU5UXG5cblxudmFyIF9EZWJ1Z2dlcl9kb2N1bWVudDtcblxudmFyIF9Ccm93c2VyX2RvY3VtZW50ID0gX0RlYnVnZ2VyX2RvY3VtZW50IHx8IEY0KGZ1bmN0aW9uKGltcGwsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHRyZXR1cm4gX1BsYXRmb3JtX2luaXRpYWxpemUoXG5cdFx0ZmxhZ0RlY29kZXIsXG5cdFx0YXJncyxcblx0XHRpbXBsLmluaXQsXG5cdFx0aW1wbC51cGRhdGUsXG5cdFx0aW1wbC5zdWJzY3JpcHRpb25zLFxuXHRcdGZ1bmN0aW9uKHNlbmRUb0FwcCwgaW5pdGlhbE1vZGVsKSB7XG5cdFx0XHR2YXIgZGl2ZXJ0SHJlZlRvQXBwID0gaW1wbC5zZXR1cCAmJiBpbXBsLnNldHVwKHNlbmRUb0FwcClcblx0XHRcdHZhciB2aWV3ID0gaW1wbC52aWV3O1xuXHRcdFx0dmFyIHRpdGxlID0gX1ZpcnR1YWxEb21fZG9jLnRpdGxlO1xuXHRcdFx0dmFyIGJvZHlOb2RlID0gX1ZpcnR1YWxEb21fZG9jLmJvZHk7XG5cdFx0XHR2YXIgY3Vyck5vZGUgPSBfVmlydHVhbERvbV92aXJ0dWFsaXplKGJvZHlOb2RlKTtcblx0XHRcdHJldHVybiBfQnJvd3Nlcl9tYWtlQW5pbWF0b3IoaW5pdGlhbE1vZGVsLCBmdW5jdGlvbihtb2RlbClcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwID0gZGl2ZXJ0SHJlZlRvQXBwO1xuXHRcdFx0XHR2YXIgZG9jID0gdmlldyhtb2RlbCk7XG5cdFx0XHRcdHZhciBuZXh0Tm9kZSA9IF9WaXJ0dWFsRG9tX25vZGUoJ2JvZHknKShfTGlzdF9OaWwpKGRvYy5ib2R5KTtcblx0XHRcdFx0dmFyIHBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJOb2RlLCBuZXh0Tm9kZSk7XG5cdFx0XHRcdGJvZHlOb2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzKGJvZHlOb2RlLCBjdXJyTm9kZSwgcGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3Vyck5vZGUgPSBuZXh0Tm9kZTtcblx0XHRcdFx0X1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwID0gMDtcblx0XHRcdFx0KHRpdGxlICE9PSBkb2MudGl0bGUpICYmIChfVmlydHVhbERvbV9kb2MudGl0bGUgPSB0aXRsZSA9IGRvYy50aXRsZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdCk7XG59KTtcblxuXG5cbi8vIEFOSU1BVElPTlxuXG5cbnZhciBfQnJvd3Nlcl9jYW5jZWxBbmltYXRpb25GcmFtZSA9XG5cdHR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCdcblx0XHQ/IGNhbmNlbEFuaW1hdGlvbkZyYW1lXG5cdFx0OiBmdW5jdGlvbihpZCkgeyBjbGVhclRpbWVvdXQoaWQpOyB9O1xuXG52YXIgX0Jyb3dzZXJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cblx0dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCdcblx0XHQ/IHJlcXVlc3RBbmltYXRpb25GcmFtZVxuXHRcdDogZnVuY3Rpb24oY2FsbGJhY2spIHsgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7IH07XG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKG1vZGVsLCBkcmF3KVxue1xuXHRkcmF3KG1vZGVsKTtcblxuXHR2YXIgc3RhdGUgPSAwO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUlmTmVlZGVkKClcblx0e1xuXHRcdHN0YXRlID0gc3RhdGUgPT09IDFcblx0XHRcdD8gMFxuXHRcdFx0OiAoIF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVJZk5lZWRlZCksIGRyYXcobW9kZWwpLCAxICk7XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24obmV4dE1vZGVsLCBpc1N5bmMpXG5cdHtcblx0XHRtb2RlbCA9IG5leHRNb2RlbDtcblxuXHRcdGlzU3luY1xuXHRcdFx0PyAoIGRyYXcobW9kZWwpLFxuXHRcdFx0XHRzdGF0ZSA9PT0gMiAmJiAoc3RhdGUgPSAxKVxuXHRcdFx0XHQpXG5cdFx0XHQ6ICggc3RhdGUgPT09IDAgJiYgX0Jyb3dzZXJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUlmTmVlZGVkKSxcblx0XHRcdFx0c3RhdGUgPSAyXG5cdFx0XHRcdCk7XG5cdH07XG59XG5cblxuXG4vLyBBUFBMSUNBVElPTlxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2FwcGxpY2F0aW9uKGltcGwpXG57XG5cdHZhciBvblVybENoYW5nZSA9IGltcGwub25VcmxDaGFuZ2U7XG5cdHZhciBvblVybFJlcXVlc3QgPSBpbXBsLm9uVXJsUmVxdWVzdDtcblx0dmFyIGtleSA9IGZ1bmN0aW9uKCkgeyBrZXkuYShvblVybENoYW5nZShfQnJvd3Nlcl9nZXRVcmwoKSkpOyB9O1xuXG5cdHJldHVybiBfQnJvd3Nlcl9kb2N1bWVudCh7XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKHNlbmRUb0FwcClcblx0XHR7XG5cdFx0XHRrZXkuYSA9IHNlbmRUb0FwcDtcblx0XHRcdF9Ccm93c2VyX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGtleSk7XG5cdFx0XHRfQnJvd3Nlcl93aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPCAwIHx8IF9Ccm93c2VyX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywga2V5KTtcblxuXHRcdFx0cmV0dXJuIEYyKGZ1bmN0aW9uKGRvbU5vZGUsIGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmJ1dHRvbiA8IDEgJiYgIWRvbU5vZGUudGFyZ2V0ICYmICFkb21Ob2RlLmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dmFyIGhyZWYgPSBkb21Ob2RlLmhyZWY7XG5cdFx0XHRcdFx0dmFyIGN1cnIgPSBfQnJvd3Nlcl9nZXRVcmwoKTtcblx0XHRcdFx0XHR2YXIgbmV4dCA9IGVsbSR1cmwkVXJsJGZyb21TdHJpbmcoaHJlZikuYTtcblx0XHRcdFx0XHRzZW5kVG9BcHAob25VcmxSZXF1ZXN0KFxuXHRcdFx0XHRcdFx0KG5leHRcblx0XHRcdFx0XHRcdFx0JiYgY3Vyci5wcm90b2NvbCA9PT0gbmV4dC5wcm90b2NvbFxuXHRcdFx0XHRcdFx0XHQmJiBjdXJyLmhvc3QgPT09IG5leHQuaG9zdFxuXHRcdFx0XHRcdFx0XHQmJiBjdXJyLnBvcnRfLmEgPT09IG5leHQucG9ydF8uYVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQ/IGVsbSRicm93c2VyJEJyb3dzZXIkSW50ZXJuYWwobmV4dClcblx0XHRcdFx0XHRcdFx0OiBlbG0kYnJvd3NlciRCcm93c2VyJEV4dGVybmFsKGhyZWYpXG5cdFx0XHRcdFx0KSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24oZmxhZ3MpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIEEzKGltcGwuaW5pdCwgZmxhZ3MsIF9Ccm93c2VyX2dldFVybCgpLCBrZXkpO1xuXHRcdH0sXG5cdFx0dmlldzogaW1wbC52aWV3LFxuXHRcdHVwZGF0ZTogaW1wbC51cGRhdGUsXG5cdFx0c3Vic2NyaXB0aW9uczogaW1wbC5zdWJzY3JpcHRpb25zXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9nZXRVcmwoKVxue1xuXHRyZXR1cm4gZWxtJHVybCRVcmwkZnJvbVN0cmluZyhfVmlydHVhbERvbV9kb2MubG9jYXRpb24uaHJlZikuYSB8fCBfRGVidWdfY3Jhc2goMSk7XG59XG5cbnZhciBfQnJvd3Nlcl9nbyA9IEYyKGZ1bmN0aW9uKGtleSwgbilcbntcblx0cmV0dXJuIEEyKGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oKSB7XG5cdFx0biAmJiBoaXN0b3J5LmdvKG4pO1xuXHRcdGtleSgpO1xuXHR9KSk7XG59KTtcblxudmFyIF9Ccm93c2VyX3B1c2hVcmwgPSBGMihmdW5jdGlvbihrZXksIHVybClcbntcblx0cmV0dXJuIEEyKGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oKSB7XG5cdFx0aGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpO1xuXHRcdGtleSgpO1xuXHR9KSk7XG59KTtcblxudmFyIF9Ccm93c2VyX3JlcGxhY2VVcmwgPSBGMihmdW5jdGlvbihrZXksIHVybClcbntcblx0cmV0dXJuIEEyKGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oKSB7XG5cdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB1cmwpO1xuXHRcdGtleSgpO1xuXHR9KSk7XG59KTtcblxuXG5cbi8vIEdMT0JBTCBFVkVOVFNcblxuXG52YXIgX0Jyb3dzZXJfZmFrZU5vZGUgPSB7IGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkge30sIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkge30gfTtcbnZhciBfQnJvd3Nlcl9kb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiBfQnJvd3Nlcl9mYWtlTm9kZTtcbnZhciBfQnJvd3Nlcl93aW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IF9Ccm93c2VyX2Zha2VOb2RlO1xuXG52YXIgX0Jyb3dzZXJfb24gPSBGMyhmdW5jdGlvbihub2RlLCBldmVudE5hbWUsIHNlbmRUb1NlbGYpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX3NwYXduKF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpXHR7IF9TY2hlZHVsZXJfcmF3U3Bhd24oc2VuZFRvU2VsZihldmVudCkpOyB9XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgX1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZCAmJiB7IHBhc3NpdmU6IHRydWUgfSk7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTsgfTtcblx0fSkpO1xufSk7XG5cbnZhciBfQnJvd3Nlcl9kZWNvZGVFdmVudCA9IEYyKGZ1bmN0aW9uKGRlY29kZXIsIGV2ZW50KVxue1xuXHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLCBldmVudCk7XG5cdHJldHVybiBlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpID8gZWxtJGNvcmUkTWF5YmUkSnVzdChyZXN1bHQuYSkgOiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xufSk7XG5cblxuXG4vLyBQQUdFIFZJU0lCSUxJVFlcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl92aXNpYmlsaXR5SW5mbygpXG57XG5cdHJldHVybiAodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5oaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICdoaWRkZW4nLCBjaGFuZ2U6ICd2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICdtb3pIaWRkZW4nLCBjaGFuZ2U6ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5tc0hpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0PyB7IGhpZGRlbjogJ21zSGlkZGVuJywgY2hhbmdlOiAnbXN2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICd3ZWJraXRIaWRkZW4nLCBjaGFuZ2U6ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OiB7IGhpZGRlbjogJ2hpZGRlbicsIGNoYW5nZTogJ3Zpc2liaWxpdHljaGFuZ2UnIH07XG59XG5cblxuXG4vLyBBTklNQVRJT04gRlJBTUVTXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfckFGKClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHZhciBpZCA9IF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChEYXRlLm5vdygpKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRfQnJvd3Nlcl9jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG5cdFx0fTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfbm93KClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChEYXRlLm5vdygpKSk7XG5cdH0pO1xufVxuXG5cblxuLy8gRE9NIFNUVUZGXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfd2l0aE5vZGUoaWQsIGRvU3R1ZmYpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRcdGNhbGxiYWNrKG5vZGVcblx0XHRcdFx0PyBfU2NoZWR1bGVyX3N1Y2NlZWQoZG9TdHVmZihub2RlKSlcblx0XHRcdFx0OiBfU2NoZWR1bGVyX2ZhaWwoZWxtJGJyb3dzZXIkQnJvd3NlciREb20kTm90Rm91bmQoaWQpKVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfd2l0aFdpbmRvdyhkb1N0dWZmKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0X0Jyb3dzZXJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKGRvU3R1ZmYoKSkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG4vLyBGT0NVUyBhbmQgQkxVUlxuXG5cbnZhciBfQnJvd3Nlcl9jYWxsID0gRjIoZnVuY3Rpb24oZnVuY3Rpb25OYW1lLCBpZClcbntcblx0cmV0dXJuIF9Ccm93c2VyX3dpdGhOb2RlKGlkLCBmdW5jdGlvbihub2RlKSB7XG5cdFx0bm9kZVtmdW5jdGlvbk5hbWVdKCk7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTA7XG5cdH0pO1xufSk7XG5cblxuXG4vLyBXSU5ET1cgVklFV1BPUlRcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9nZXRWaWV3cG9ydCgpXG57XG5cdHJldHVybiB7XG5cdFx0c2NlbmU6IF9Ccm93c2VyX2dldFNjZW5lKCksXG5cdFx0dmlld3BvcnQ6IHtcblx0XHRcdHg6IF9Ccm93c2VyX3dpbmRvdy5wYWdlWE9mZnNldCxcblx0XHRcdHk6IF9Ccm93c2VyX3dpbmRvdy5wYWdlWU9mZnNldCxcblx0XHRcdHdpZHRoOiBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0aGVpZ2h0OiBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gX0Jyb3dzZXJfZ2V0U2NlbmUoKVxue1xuXHR2YXIgYm9keSA9IF9Ccm93c2VyX2RvYy5ib2R5O1xuXHR2YXIgZWxlbSA9IF9Ccm93c2VyX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IE1hdGgubWF4KGJvZHkuc2Nyb2xsV2lkdGgsIGJvZHkub2Zmc2V0V2lkdGgsIGVsZW0uc2Nyb2xsV2lkdGgsIGVsZW0ub2Zmc2V0V2lkdGgsIGVsZW0uY2xpZW50V2lkdGgpLFxuXHRcdGhlaWdodDogTWF0aC5tYXgoYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBlbGVtLnNjcm9sbEhlaWdodCwgZWxlbS5vZmZzZXRIZWlnaHQsIGVsZW0uY2xpZW50SGVpZ2h0KVxuXHR9O1xufVxuXG52YXIgX0Jyb3dzZXJfc2V0Vmlld3BvcnQgPSBGMihmdW5jdGlvbih4LCB5KVxue1xuXHRyZXR1cm4gX0Jyb3dzZXJfd2l0aFdpbmRvdyhmdW5jdGlvbigpXG5cdHtcblx0XHRfQnJvd3Nlcl93aW5kb3cuc2Nyb2xsKHgsIHkpO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gRUxFTUVOVCBWSUVXUE9SVFxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldFZpZXdwb3J0T2YoaWQpXG57XG5cdHJldHVybiBfQnJvd3Nlcl93aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSlcblx0e1xuXHRcdHJldHVybiB7XG5cdFx0XHRzY2VuZToge1xuXHRcdFx0XHR3aWR0aDogbm9kZS5zY3JvbGxXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBub2RlLnNjcm9sbEhlaWdodFxuXHRcdFx0fSxcblx0XHRcdHZpZXdwb3J0OiB7XG5cdFx0XHRcdHg6IG5vZGUuc2Nyb2xsTGVmdCxcblx0XHRcdFx0eTogbm9kZS5zY3JvbGxUb3AsXG5cdFx0XHRcdHdpZHRoOiBub2RlLmNsaWVudFdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IG5vZGUuY2xpZW50SGVpZ2h0XG5cdFx0XHR9XG5cdFx0fTtcblx0fSk7XG59XG5cblxudmFyIF9Ccm93c2VyX3NldFZpZXdwb3J0T2YgPSBGMyhmdW5jdGlvbihpZCwgeCwgeSlcbntcblx0cmV0dXJuIF9Ccm93c2VyX3dpdGhOb2RlKGlkLCBmdW5jdGlvbihub2RlKVxuXHR7XG5cdFx0bm9kZS5zY3JvbGxMZWZ0ID0geDtcblx0XHRub2RlLnNjcm9sbFRvcCA9IHk7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTA7XG5cdH0pO1xufSk7XG5cblxuXG4vLyBFTEVNRU5UXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfZ2V0RWxlbWVudChpZClcbntcblx0cmV0dXJuIF9Ccm93c2VyX3dpdGhOb2RlKGlkLCBmdW5jdGlvbihub2RlKVxuXHR7XG5cdFx0dmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciB4ID0gX0Jyb3dzZXJfd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHRcdHZhciB5ID0gX0Jyb3dzZXJfd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdHJldHVybiB7XG5cdFx0XHRzY2VuZTogX0Jyb3dzZXJfZ2V0U2NlbmUoKSxcblx0XHRcdHZpZXdwb3J0OiB7XG5cdFx0XHRcdHg6IHgsXG5cdFx0XHRcdHk6IHksXG5cdFx0XHRcdHdpZHRoOiBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IF9Ccm93c2VyX2RvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0XHR9LFxuXHRcdFx0ZWxlbWVudDoge1xuXHRcdFx0XHR4OiB4ICsgcmVjdC5sZWZ0LFxuXHRcdFx0XHR5OiB5ICsgcmVjdC50b3AsXG5cdFx0XHRcdHdpZHRoOiByZWN0LndpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IHJlY3QuaGVpZ2h0XG5cdFx0XHR9XG5cdFx0fTtcblx0fSk7XG59XG5cblxuXG4vLyBMT0FEIGFuZCBSRUxPQURcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9yZWxvYWQoc2tpcENhY2hlKVxue1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkVGFzayRwZXJmb3JtLCBlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX2RvYy5sb2NhdGlvbi5yZWxvYWQoc2tpcENhY2hlKTtcblx0fSkpO1xufVxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9sb2FkKHVybClcbntcblx0cmV0dXJuIEEyKGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHR0cnlcblx0XHR7XG5cdFx0XHRfQnJvd3Nlcl93aW5kb3cubG9jYXRpb24gPSB1cmw7XG5cdFx0fVxuXHRcdGNhdGNoKGVycilcblx0XHR7XG5cdFx0XHQvLyBPbmx5IEZpcmVmb3ggY2FuIHRocm93IGEgTlNfRVJST1JfTUFMRk9STUVEX1VSSSBleGNlcHRpb24gaGVyZS5cblx0XHRcdC8vIE90aGVyIGJyb3dzZXJzIHJlbG9hZCB0aGUgcGFnZSwgc28gbGV0J3MgYmUgY29uc2lzdGVudCBhYm91dCB0aGF0LlxuXHRcdFx0X1ZpcnR1YWxEb21fZG9jLmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XG5cdFx0fVxuXHR9KSk7XG59XG52YXIgYXV0aG9yJHByb2plY3QkQ29udGV4dCRDb250ZXh0ID0gZnVuY3Rpb24gKHVybCkge1xuXHRyZXR1cm4ge3VybDogdXJsfTtcbn07XG52YXIgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yID0gMzI7XG52YXIgZWxtJGNvcmUkQXJyYXkkQXJyYXlfZWxtX2J1aWx0aW4gPSBGNChcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4geyQ6ICdBcnJheV9lbG1fYnVpbHRpbicsIGE6IGEsIGI6IGIsIGM6IGMsIGQ6IGR9O1xuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkRVEgPSB7JDogJ0VRJ307XG52YXIgZWxtJGNvcmUkQmFzaWNzJEdUID0geyQ6ICdHVCd9O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRMVCA9IHskOiAnTFQnfTtcbnZhciBlbG0kY29yZSREaWN0JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBhY2MsIHQpIHtcblx0XHRmb2xkcjpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKHQuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIga2V5ID0gdC5iO1xuXHRcdFx0XHR2YXIgdmFsdWUgPSB0LmM7XG5cdFx0XHRcdHZhciBsZWZ0ID0gdC5kO1xuXHRcdFx0XHR2YXIgcmlnaHQgPSB0LmU7XG5cdFx0XHRcdHZhciAkdGVtcCRmdW5jID0gZnVuYyxcblx0XHRcdFx0XHQkdGVtcCRhY2MgPSBBMyhcblx0XHRcdFx0XHRmdW5jLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRBMyhlbG0kY29yZSREaWN0JGZvbGRyLCBmdW5jLCBhY2MsIHJpZ2h0KSksXG5cdFx0XHRcdFx0JHRlbXAkdCA9IGxlZnQ7XG5cdFx0XHRcdGZ1bmMgPSAkdGVtcCRmdW5jO1xuXHRcdFx0XHRhY2MgPSAkdGVtcCRhY2M7XG5cdFx0XHRcdHQgPSAkdGVtcCR0O1xuXHRcdFx0XHRjb250aW51ZSBmb2xkcjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJExpc3QkY29ucyA9IF9MaXN0X2NvbnM7XG52YXIgZWxtJGNvcmUkRGljdCR0b0xpc3QgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTMoXG5cdFx0ZWxtJGNvcmUkRGljdCRmb2xkcixcblx0XHRGMyhcblx0XHRcdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBsaXN0KSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0X1V0aWxzX1R1cGxlMihrZXksIHZhbHVlKSxcblx0XHRcdFx0XHRsaXN0KTtcblx0XHRcdH0pLFxuXHRcdF9MaXN0X05pbCxcblx0XHRkaWN0KTtcbn07XG52YXIgZWxtJGNvcmUkRGljdCRrZXlzID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIEEzKFxuXHRcdGVsbSRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwga2V5TGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkTGlzdCRjb25zLCBrZXksIGtleUxpc3QpO1xuXHRcdFx0fSksXG5cdFx0X0xpc3RfTmlsLFxuXHRcdGRpY3QpO1xufTtcbnZhciBlbG0kY29yZSRTZXQkdG9MaXN0ID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgZGljdCA9IF9uMC5hO1xuXHRyZXR1cm4gZWxtJGNvcmUkRGljdCRrZXlzKGRpY3QpO1xufTtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkciA9IF9Kc0FycmF5X2ZvbGRyO1xudmFyIGVsbSRjb3JlJEFycmF5JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBiYXNlQ2FzZSwgX24wKSB7XG5cdFx0dmFyIHRyZWUgPSBfbjAuYztcblx0XHR2YXIgdGFpbCA9IF9uMC5kO1xuXHRcdHZhciBoZWxwZXIgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChub2RlLCBhY2MpIHtcblx0XHRcdFx0aWYgKG5vZGUuJCA9PT0gJ1N1YlRyZWUnKSB7XG5cdFx0XHRcdFx0dmFyIHN1YlRyZWUgPSBub2RlLmE7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRyLCBoZWxwZXIsIGFjYywgc3ViVHJlZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlcyA9IG5vZGUuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZHIsIGZ1bmMsIGFjYywgdmFsdWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZHIsXG5cdFx0XHRoZWxwZXIsXG5cdFx0XHRBMyhlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkciwgZnVuYywgYmFzZUNhc2UsIHRhaWwpLFxuXHRcdFx0dHJlZSk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJEFycmF5JHRvTGlzdCA9IGZ1bmN0aW9uIChhcnJheSkge1xuXHRyZXR1cm4gQTMoZWxtJGNvcmUkQXJyYXkkZm9sZHIsIGVsbSRjb3JlJExpc3QkY29ucywgX0xpc3RfTmlsLCBhcnJheSk7XG59O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRjZWlsaW5nID0gX0Jhc2ljc19jZWlsaW5nO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRmZGl2ID0gX0Jhc2ljc19mZGl2O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRsb2dCYXNlID0gRjIoXG5cdGZ1bmN0aW9uIChiYXNlLCBudW1iZXIpIHtcblx0XHRyZXR1cm4gX0Jhc2ljc19sb2cobnVtYmVyKSAvIF9CYXNpY3NfbG9nKGJhc2UpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkdG9GbG9hdCA9IF9CYXNpY3NfdG9GbG9hdDtcbnZhciBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAgPSBlbG0kY29yZSRCYXNpY3MkY2VpbGluZyhcblx0QTIoZWxtJGNvcmUkQmFzaWNzJGxvZ0Jhc2UsIDIsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvcikpO1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5ID0gX0pzQXJyYXlfZW1wdHk7XG52YXIgZWxtJGNvcmUkQXJyYXkkZW1wdHkgPSBBNChlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbiwgMCwgZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLCBlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSwgZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHkpO1xudmFyIGVsbSRjb3JlJEFycmF5JExlYWYgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdMZWFmJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEFycmF5JFN1YlRyZWUgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdTdWJUcmVlJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemVGcm9tTGlzdCA9IF9Kc0FycmF5X2luaXRpYWxpemVGcm9tTGlzdDtcbnZhciBlbG0kY29yZSRMaXN0JGZvbGRsID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBhY2MsIGxpc3QpIHtcblx0XHRmb2xkbDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKCFsaXN0LmIpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB4ID0gbGlzdC5hO1xuXHRcdFx0XHR2YXIgeHMgPSBsaXN0LmI7XG5cdFx0XHRcdHZhciAkdGVtcCRmdW5jID0gZnVuYyxcblx0XHRcdFx0XHQkdGVtcCRhY2MgPSBBMihmdW5jLCB4LCBhY2MpLFxuXHRcdFx0XHRcdCR0ZW1wJGxpc3QgPSB4cztcblx0XHRcdFx0ZnVuYyA9ICR0ZW1wJGZ1bmM7XG5cdFx0XHRcdGFjYyA9ICR0ZW1wJGFjYztcblx0XHRcdFx0bGlzdCA9ICR0ZW1wJGxpc3Q7XG5cdFx0XHRcdGNvbnRpbnVlIGZvbGRsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRyZXZlcnNlID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0cmV0dXJuIEEzKGVsbSRjb3JlJExpc3QkZm9sZGwsIGVsbSRjb3JlJExpc3QkY29ucywgX0xpc3RfTmlsLCBsaXN0KTtcbn07XG52YXIgZWxtJGNvcmUkQXJyYXkkY29tcHJlc3NOb2RlcyA9IEYyKFxuXHRmdW5jdGlvbiAobm9kZXMsIGFjYykge1xuXHRcdGNvbXByZXNzTm9kZXM6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBfbjAgPSBBMihlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplRnJvbUxpc3QsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvciwgbm9kZXMpO1xuXHRcdFx0dmFyIG5vZGUgPSBfbjAuYTtcblx0XHRcdHZhciByZW1haW5pbmdOb2RlcyA9IF9uMC5iO1xuXHRcdFx0dmFyIG5ld0FjYyA9IEEyKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdGVsbSRjb3JlJEFycmF5JFN1YlRyZWUobm9kZSksXG5cdFx0XHRcdGFjYyk7XG5cdFx0XHRpZiAoIXJlbWFpbmluZ05vZGVzLmIpIHtcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJExpc3QkcmV2ZXJzZShuZXdBY2MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyICR0ZW1wJG5vZGVzID0gcmVtYWluaW5nTm9kZXMsXG5cdFx0XHRcdFx0JHRlbXAkYWNjID0gbmV3QWNjO1xuXHRcdFx0XHRub2RlcyA9ICR0ZW1wJG5vZGVzO1xuXHRcdFx0XHRhY2MgPSAkdGVtcCRhY2M7XG5cdFx0XHRcdGNvbnRpbnVlIGNvbXByZXNzTm9kZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkYXBSID0gRjIoXG5cdGZ1bmN0aW9uICh4LCBmKSB7XG5cdFx0cmV0dXJuIGYoeCk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRlcSA9IF9VdGlsc19lcXVhbDtcbnZhciBlbG0kY29yZSRUdXBsZSRmaXJzdCA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHggPSBfbjAuYTtcblx0cmV0dXJuIHg7XG59O1xudmFyIGVsbSRjb3JlJEFycmF5JHRyZWVGcm9tQnVpbGRlciA9IEYyKFxuXHRmdW5jdGlvbiAobm9kZUxpc3QsIG5vZGVMaXN0U2l6ZSkge1xuXHRcdHRyZWVGcm9tQnVpbGRlcjpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIG5ld05vZGVTaXplID0gZWxtJGNvcmUkQmFzaWNzJGNlaWxpbmcobm9kZUxpc3RTaXplIC8gZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKTtcblx0XHRcdGlmIChuZXdOb2RlU2l6ZSA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZUZyb21MaXN0LCBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsIG5vZGVMaXN0KS5hO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyICR0ZW1wJG5vZGVMaXN0ID0gQTIoZWxtJGNvcmUkQXJyYXkkY29tcHJlc3NOb2Rlcywgbm9kZUxpc3QsIF9MaXN0X05pbCksXG5cdFx0XHRcdFx0JHRlbXAkbm9kZUxpc3RTaXplID0gbmV3Tm9kZVNpemU7XG5cdFx0XHRcdG5vZGVMaXN0ID0gJHRlbXAkbm9kZUxpc3Q7XG5cdFx0XHRcdG5vZGVMaXN0U2l6ZSA9ICR0ZW1wJG5vZGVMaXN0U2l6ZTtcblx0XHRcdFx0Y29udGludWUgdHJlZUZyb21CdWlsZGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGFkZCA9IF9CYXNpY3NfYWRkO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRhcEwgPSBGMihcblx0ZnVuY3Rpb24gKGYsIHgpIHtcblx0XHRyZXR1cm4gZih4KTtcblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGZsb29yID0gX0Jhc2ljc19mbG9vcjtcbnZhciBlbG0kY29yZSRCYXNpY3MkZ3QgPSBfVXRpbHNfZ3Q7XG52YXIgZWxtJGNvcmUkQmFzaWNzJG1heCA9IEYyKFxuXHRmdW5jdGlvbiAoeCwgeSkge1xuXHRcdHJldHVybiAoX1V0aWxzX2NtcCh4LCB5KSA+IDApID8geCA6IHk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRtdWwgPSBfQmFzaWNzX211bDtcbnZhciBlbG0kY29yZSRCYXNpY3Mkc3ViID0gX0Jhc2ljc19zdWI7XG52YXIgZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoID0gX0pzQXJyYXlfbGVuZ3RoO1xudmFyIGVsbSRjb3JlJEFycmF5JGJ1aWxkZXJUb0FycmF5ID0gRjIoXG5cdGZ1bmN0aW9uIChyZXZlcnNlTm9kZUxpc3QsIGJ1aWxkZXIpIHtcblx0XHRpZiAoIWJ1aWxkZXIubm9kZUxpc3RTaXplKSB7XG5cdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLFxuXHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgoYnVpbGRlci50YWlsKSxcblx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLFxuXHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSxcblx0XHRcdFx0YnVpbGRlci50YWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHRyZWVMZW4gPSBidWlsZGVyLm5vZGVMaXN0U2l6ZSAqIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvcjtcblx0XHRcdHZhciBkZXB0aCA9IGVsbSRjb3JlJEJhc2ljcyRmbG9vcihcblx0XHRcdFx0QTIoZWxtJGNvcmUkQmFzaWNzJGxvZ0Jhc2UsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvciwgdHJlZUxlbiAtIDEpKTtcblx0XHRcdHZhciBjb3JyZWN0Tm9kZUxpc3QgPSByZXZlcnNlTm9kZUxpc3QgPyBlbG0kY29yZSRMaXN0JHJldmVyc2UoYnVpbGRlci5ub2RlTGlzdCkgOiBidWlsZGVyLm5vZGVMaXN0O1xuXHRcdFx0dmFyIHRyZWUgPSBBMihlbG0kY29yZSRBcnJheSR0cmVlRnJvbUJ1aWxkZXIsIGNvcnJlY3ROb2RlTGlzdCwgYnVpbGRlci5ub2RlTGlzdFNpemUpO1xuXHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbixcblx0XHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKGJ1aWxkZXIudGFpbCkgKyB0cmVlTGVuLFxuXHRcdFx0XHRBMihlbG0kY29yZSRCYXNpY3MkbWF4LCA1LCBkZXB0aCAqIGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCksXG5cdFx0XHRcdHRyZWUsXG5cdFx0XHRcdGJ1aWxkZXIudGFpbCk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkRmFsc2UgPSB7JDogJ0ZhbHNlJ307XG52YXIgZWxtJGNvcmUkQmFzaWNzJGlkaXYgPSBfQmFzaWNzX2lkaXY7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGx0ID0gX1V0aWxzX2x0O1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemUgPSBfSnNBcnJheV9pbml0aWFsaXplO1xudmFyIGVsbSRjb3JlJEFycmF5JGluaXRpYWxpemVIZWxwID0gRjUoXG5cdGZ1bmN0aW9uIChmbiwgZnJvbUluZGV4LCBsZW4sIG5vZGVMaXN0LCB0YWlsKSB7XG5cdFx0aW5pdGlhbGl6ZUhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChmcm9tSW5kZXggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kY29yZSRBcnJheSRidWlsZGVyVG9BcnJheSxcblx0XHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0XHR7bm9kZUxpc3Q6IG5vZGVMaXN0LCBub2RlTGlzdFNpemU6IChsZW4gLyBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IpIHwgMCwgdGFpbDogdGFpbH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGxlYWYgPSBlbG0kY29yZSRBcnJheSRMZWFmKFxuXHRcdFx0XHRcdEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemUsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvciwgZnJvbUluZGV4LCBmbikpO1xuXHRcdFx0XHR2YXIgJHRlbXAkZm4gPSBmbixcblx0XHRcdFx0XHQkdGVtcCRmcm9tSW5kZXggPSBmcm9tSW5kZXggLSBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsXG5cdFx0XHRcdFx0JHRlbXAkbGVuID0gbGVuLFxuXHRcdFx0XHRcdCR0ZW1wJG5vZGVMaXN0ID0gQTIoZWxtJGNvcmUkTGlzdCRjb25zLCBsZWFmLCBub2RlTGlzdCksXG5cdFx0XHRcdFx0JHRlbXAkdGFpbCA9IHRhaWw7XG5cdFx0XHRcdGZuID0gJHRlbXAkZm47XG5cdFx0XHRcdGZyb21JbmRleCA9ICR0ZW1wJGZyb21JbmRleDtcblx0XHRcdFx0bGVuID0gJHRlbXAkbGVuO1xuXHRcdFx0XHRub2RlTGlzdCA9ICR0ZW1wJG5vZGVMaXN0O1xuXHRcdFx0XHR0YWlsID0gJHRlbXAkdGFpbDtcblx0XHRcdFx0Y29udGludWUgaW5pdGlhbGl6ZUhlbHA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkbGUgPSBfVXRpbHNfbGU7XG52YXIgZWxtJGNvcmUkQmFzaWNzJHJlbWFpbmRlckJ5ID0gX0Jhc2ljc19yZW1haW5kZXJCeTtcbnZhciBlbG0kY29yZSRBcnJheSRpbml0aWFsaXplID0gRjIoXG5cdGZ1bmN0aW9uIChsZW4sIGZuKSB7XG5cdFx0aWYgKGxlbiA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkQXJyYXkkZW1wdHk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB0YWlsTGVuID0gbGVuICUgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yO1xuXHRcdFx0dmFyIHRhaWwgPSBBMyhlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplLCB0YWlsTGVuLCBsZW4gLSB0YWlsTGVuLCBmbik7XG5cdFx0XHR2YXIgaW5pdGlhbEZyb21JbmRleCA9IChsZW4gLSB0YWlsTGVuKSAtIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvcjtcblx0XHRcdHJldHVybiBBNShlbG0kY29yZSRBcnJheSRpbml0aWFsaXplSGVscCwgZm4sIGluaXRpYWxGcm9tSW5kZXgsIGxlbiwgX0xpc3RfTmlsLCB0YWlsKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJE1heWJlJEp1c3QgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdKdXN0JywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJE1heWJlJE5vdGhpbmcgPSB7JDogJ05vdGhpbmcnfTtcbnZhciBlbG0kY29yZSRSZXN1bHQkRXJyID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRXJyJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJFJlc3VsdCRPayA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ09rJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRUcnVlID0geyQ6ICdUcnVlJ307XG52YXIgZWxtJGNvcmUkUmVzdWx0JGlzT2sgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdGlmIChyZXN1bHQuJCA9PT0gJ09rJykge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRGYWlsdXJlID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRmFpbHVyZScsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRGaWVsZCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0ZpZWxkJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJEluZGV4ID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnSW5kZXgnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkT25lT2YgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdPbmVPZicsIGE6IGF9O1xufTtcbnZhciBlbG0kY29yZSRCYXNpY3MkYW5kID0gX0Jhc2ljc19hbmQ7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGFwcGVuZCA9IF9VdGlsc19hcHBlbmQ7XG52YXIgZWxtJGNvcmUkQmFzaWNzJG9yID0gX0Jhc2ljc19vcjtcbnZhciBlbG0kY29yZSRDaGFyJHRvQ29kZSA9IF9DaGFyX3RvQ29kZTtcbnZhciBlbG0kY29yZSRDaGFyJGlzTG93ZXIgPSBmdW5jdGlvbiAoX2NoYXIpIHtcblx0dmFyIGNvZGUgPSBlbG0kY29yZSRDaGFyJHRvQ29kZShfY2hhcik7XG5cdHJldHVybiAoOTcgPD0gY29kZSkgJiYgKGNvZGUgPD0gMTIyKTtcbn07XG52YXIgZWxtJGNvcmUkQ2hhciRpc1VwcGVyID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHZhciBjb2RlID0gZWxtJGNvcmUkQ2hhciR0b0NvZGUoX2NoYXIpO1xuXHRyZXR1cm4gKGNvZGUgPD0gOTApICYmICg2NSA8PSBjb2RlKTtcbn07XG52YXIgZWxtJGNvcmUkQ2hhciRpc0FscGhhID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHJldHVybiBlbG0kY29yZSRDaGFyJGlzTG93ZXIoX2NoYXIpIHx8IGVsbSRjb3JlJENoYXIkaXNVcHBlcihfY2hhcik7XG59O1xudmFyIGVsbSRjb3JlJENoYXIkaXNEaWdpdCA9IGZ1bmN0aW9uIChfY2hhcikge1xuXHR2YXIgY29kZSA9IGVsbSRjb3JlJENoYXIkdG9Db2RlKF9jaGFyKTtcblx0cmV0dXJuIChjb2RlIDw9IDU3KSAmJiAoNDggPD0gY29kZSk7XG59O1xudmFyIGVsbSRjb3JlJENoYXIkaXNBbHBoYU51bSA9IGZ1bmN0aW9uIChfY2hhcikge1xuXHRyZXR1cm4gZWxtJGNvcmUkQ2hhciRpc0xvd2VyKF9jaGFyKSB8fCAoZWxtJGNvcmUkQ2hhciRpc1VwcGVyKF9jaGFyKSB8fCBlbG0kY29yZSRDaGFyJGlzRGlnaXQoX2NoYXIpKTtcbn07XG52YXIgZWxtJGNvcmUkTGlzdCRsZW5ndGggPSBmdW5jdGlvbiAoeHMpIHtcblx0cmV0dXJuIEEzKFxuXHRcdGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0RjIoXG5cdFx0XHRmdW5jdGlvbiAoX24wLCBpKSB7XG5cdFx0XHRcdHJldHVybiBpICsgMTtcblx0XHRcdH0pLFxuXHRcdDAsXG5cdFx0eHMpO1xufTtcbnZhciBlbG0kY29yZSRMaXN0JG1hcDIgPSBfTGlzdF9tYXAyO1xudmFyIGVsbSRjb3JlJExpc3QkcmFuZ2VIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChsbywgaGksIGxpc3QpIHtcblx0XHRyYW5nZUhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChfVXRpbHNfY21wKGxvLCBoaSkgPCAxKSB7XG5cdFx0XHRcdHZhciAkdGVtcCRsbyA9IGxvLFxuXHRcdFx0XHRcdCR0ZW1wJGhpID0gaGkgLSAxLFxuXHRcdFx0XHRcdCR0ZW1wJGxpc3QgPSBBMihlbG0kY29yZSRMaXN0JGNvbnMsIGhpLCBsaXN0KTtcblx0XHRcdFx0bG8gPSAkdGVtcCRsbztcblx0XHRcdFx0aGkgPSAkdGVtcCRoaTtcblx0XHRcdFx0bGlzdCA9ICR0ZW1wJGxpc3Q7XG5cdFx0XHRcdGNvbnRpbnVlIHJhbmdlSGVscDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRyYW5nZSA9IEYyKFxuXHRmdW5jdGlvbiAobG8sIGhpKSB7XG5cdFx0cmV0dXJuIEEzKGVsbSRjb3JlJExpc3QkcmFuZ2VIZWxwLCBsbywgaGksIF9MaXN0X05pbCk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgeHMpIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRlbG0kY29yZSRMaXN0JG1hcDIsXG5cdFx0XHRmLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkcmFuZ2UsXG5cdFx0XHRcdDAsXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkbGVuZ3RoKHhzKSAtIDEpLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRTdHJpbmckYWxsID0gX1N0cmluZ19hbGw7XG52YXIgZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQgPSBfU3RyaW5nX2Zyb21OdW1iZXI7XG52YXIgZWxtJGNvcmUkU3RyaW5nJGpvaW4gPSBGMihcblx0ZnVuY3Rpb24gKHNlcCwgY2h1bmtzKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X1N0cmluZ19qb2luLFxuXHRcdFx0c2VwLFxuXHRcdFx0X0xpc3RfdG9BcnJheShjaHVua3MpKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkU3RyaW5nJHVuY29ucyA9IF9TdHJpbmdfdW5jb25zO1xudmFyIGVsbSRjb3JlJFN0cmluZyRzcGxpdCA9IEYyKFxuXHRmdW5jdGlvbiAoc2VwLCBzdHJpbmcpIHtcblx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0QTIoX1N0cmluZ19zcGxpdCwgc2VwLCBzdHJpbmcpKTtcblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkaW5kZW50ID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0J1xcbiAgICAnLFxuXHRcdEEyKGVsbSRjb3JlJFN0cmluZyRzcGxpdCwgJ1xcbicsIHN0cikpO1xufTtcbnZhciBlbG0kanNvbiRKc29uJEVuY29kZSRlbmNvZGUgPSBfSnNvbl9lbmNvZGU7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JPbmVPZiA9IEYyKFxuXHRmdW5jdGlvbiAoaSwgZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1xcblxcbignICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KGkgKyAxKSArICgnKSAnICsgZWxtJGpzb24kSnNvbiREZWNvZGUkaW5kZW50KFxuXHRcdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JUb1N0cmluZyhlcnJvcikpKSk7XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmcgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0cmV0dXJuIEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmdIZWxwLCBlcnJvciwgX0xpc3RfTmlsKTtcbn07XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JUb1N0cmluZ0hlbHAgPSBGMihcblx0ZnVuY3Rpb24gKGVycm9yLCBjb250ZXh0KSB7XG5cdFx0ZXJyb3JUb1N0cmluZ0hlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHN3aXRjaCAoZXJyb3IuJCkge1xuXHRcdFx0XHRjYXNlICdGaWVsZCc6XG5cdFx0XHRcdFx0dmFyIGYgPSBlcnJvci5hO1xuXHRcdFx0XHRcdHZhciBlcnIgPSBlcnJvci5iO1xuXHRcdFx0XHRcdHZhciBpc1NpbXBsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHZhciBfbjEgPSBlbG0kY29yZSRTdHJpbmckdW5jb25zKGYpO1xuXHRcdFx0XHRcdFx0aWYgKF9uMS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIF9uMiA9IF9uMS5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgX2NoYXIgPSBfbjIuYTtcblx0XHRcdFx0XHRcdFx0dmFyIHJlc3QgPSBfbjIuYjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJENoYXIkaXNBbHBoYShfY2hhcikgJiYgQTIoZWxtJGNvcmUkU3RyaW5nJGFsbCwgZWxtJGNvcmUkQ2hhciRpc0FscGhhTnVtLCByZXN0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0dmFyIGZpZWxkTmFtZSA9IGlzU2ltcGxlID8gKCcuJyArIGYpIDogKCdbXFwnJyArIChmICsgJ1xcJ10nKSk7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJGVycm9yID0gZXJyLFxuXHRcdFx0XHRcdFx0JHRlbXAkY29udGV4dCA9IEEyKGVsbSRjb3JlJExpc3QkY29ucywgZmllbGROYW1lLCBjb250ZXh0KTtcblx0XHRcdFx0XHRlcnJvciA9ICR0ZW1wJGVycm9yO1xuXHRcdFx0XHRcdGNvbnRleHQgPSAkdGVtcCRjb250ZXh0O1xuXHRcdFx0XHRcdGNvbnRpbnVlIGVycm9yVG9TdHJpbmdIZWxwO1xuXHRcdFx0XHRjYXNlICdJbmRleCc6XG5cdFx0XHRcdFx0dmFyIGkgPSBlcnJvci5hO1xuXHRcdFx0XHRcdHZhciBlcnIgPSBlcnJvci5iO1xuXHRcdFx0XHRcdHZhciBpbmRleE5hbWUgPSAnWycgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaSkgKyAnXScpO1xuXHRcdFx0XHRcdHZhciAkdGVtcCRlcnJvciA9IGVycixcblx0XHRcdFx0XHRcdCR0ZW1wJGNvbnRleHQgPSBBMihlbG0kY29yZSRMaXN0JGNvbnMsIGluZGV4TmFtZSwgY29udGV4dCk7XG5cdFx0XHRcdFx0ZXJyb3IgPSAkdGVtcCRlcnJvcjtcblx0XHRcdFx0XHRjb250ZXh0ID0gJHRlbXAkY29udGV4dDtcblx0XHRcdFx0XHRjb250aW51ZSBlcnJvclRvU3RyaW5nSGVscDtcblx0XHRcdFx0Y2FzZSAnT25lT2YnOlxuXHRcdFx0XHRcdHZhciBlcnJvcnMgPSBlcnJvci5hO1xuXHRcdFx0XHRcdGlmICghZXJyb3JzLmIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnUmFuIGludG8gYSBKc29uLkRlY29kZS5vbmVPZiB3aXRoIG5vIHBvc3NpYmlsaXRpZXMnICsgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIWNvbnRleHQuYikge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAnISc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICcgYXQganNvbicgKyBBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHRcdFx0JycsXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JHJldmVyc2UoY29udGV4dCkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICghZXJyb3JzLmIuYikge1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyID0gZXJyb3JzLmE7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRlcnJvciA9IGVycixcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjb250ZXh0ID0gY29udGV4dDtcblx0XHRcdFx0XHRcdFx0ZXJyb3IgPSAkdGVtcCRlcnJvcjtcblx0XHRcdFx0XHRcdFx0Y29udGV4dCA9ICR0ZW1wJGNvbnRleHQ7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGVycm9yVG9TdHJpbmdIZWxwO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIHN0YXJ0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFjb250ZXh0LmIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAnSnNvbi5EZWNvZGUub25lT2YnO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJ1RoZSBKc29uLkRlY29kZS5vbmVPZiBhdCBqc29uJyArIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0JycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkcmV2ZXJzZShjb250ZXh0KSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBzdGFydGVyICsgKCcgZmFpbGVkIGluIHRoZSBmb2xsb3dpbmcgJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGxlbmd0aChlcnJvcnMpKSArICcgd2F5czonKSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHQnXFxuXFxuJyxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdGludHJvZHVjdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCwgZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JPbmVPZiwgZXJyb3JzKSkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR2YXIgbXNnID0gZXJyb3IuYTtcblx0XHRcdFx0XHR2YXIganNvbiA9IGVycm9yLmI7XG5cdFx0XHRcdFx0dmFyIGludHJvZHVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmICghY29udGV4dC5iKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAnUHJvYmxlbSB3aXRoIHRoZSBnaXZlbiB2YWx1ZTpcXG5cXG4nO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdQcm9ibGVtIHdpdGggdGhlIHZhbHVlIGF0IGpzb24nICsgKEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHRcdCcnLFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkcmV2ZXJzZShjb250ZXh0KSkgKyAnOlxcblxcbiAgICAnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGludHJvZHVjdGlvbiArIChlbG0kanNvbiRKc29uJERlY29kZSRpbmRlbnQoXG5cdFx0XHRcdFx0XHRBMihlbG0kanNvbiRKc29uJEVuY29kZSRlbmNvZGUsIDQsIGpzb24pKSArICgnXFxuXFxuJyArIG1zZykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQgPSBfSnNvbl9kZWNvZGVGaWVsZDtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRtYXAgPSBfSnNvbl9tYXAxO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZyA9IF9Kc29uX2RlY29kZVN0cmluZztcbnZhciBhdXRob3IkcHJvamVjdCRDb250ZXh0JGRlY29kZXIgPSBBMihcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwLFxuXHRhdXRob3IkcHJvamVjdCRDb250ZXh0JENvbnRleHQsXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAndXJsJywgZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSk7XG52YXIgYXV0aG9yJHByb2plY3QkRGV0YWlsUGFnZSRFcnJvciA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0Vycm9yJywgYTogYX07XG59O1xudmFyIGF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkUGFnZU1vZGVsID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUGFnZU1vZGVsJywgYTogYX07XG59O1xudmFyIGF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkU3VjY2VzcyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1N1Y2Nlc3MnLCBhOiBhfTtcbn07XG52YXIgZWxtJGNvcmUkQmFzaWNzJGlkZW50aXR5ID0gZnVuY3Rpb24gKHgpIHtcblx0cmV0dXJuIHg7XG59O1xudmFyIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRiYXRjaCA9IF9QbGF0Zm9ybV9iYXRjaDtcbnZhciBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSA9IGVsbSRjb3JlJFBsYXRmb3JtJENtZCRiYXRjaChfTGlzdF9OaWwpO1xudmFyIGVsbSRjb3JlJFJlc3VsdCRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIHJhKSB7XG5cdFx0aWYgKHJhLiQgPT09ICdPaycpIHtcblx0XHRcdHZhciBhID0gcmEuYTtcblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2soXG5cdFx0XHRcdGZ1bmMoYSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZSA9IHJhLmE7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihlKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJFJlc3VsdCR3aXRoRGVmYXVsdCA9IEYyKFxuXHRmdW5jdGlvbiAoZGVmLCByZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LiQgPT09ICdPaycpIHtcblx0XHRcdHZhciBhID0gcmVzdWx0LmE7XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRlZjtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGRlY29kZVZhbHVlID0gX0pzb25fcnVuO1xudmFyIGF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkaW5pdCA9IGZ1bmN0aW9uIChmbGFncykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0fShcblx0XHRBMihcblx0XHRcdGVsbSRjb3JlJFJlc3VsdCR3aXRoRGVmYXVsdCxcblx0XHRcdGF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkRXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSBmbGFncycpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRjb3JlJFJlc3VsdCRtYXAsXG5cdFx0XHRcdGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkU3VjY2Vzcyhcblx0XHRcdFx0XHRcdGF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkUGFnZU1vZGVsKGNvbnRleHQpKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0QTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZGVjb2RlVmFsdWUsIGF1dGhvciRwcm9qZWN0JENvbnRleHQkZGVjb2RlciwgZmxhZ3MpKSkpO1xufTtcbnZhciBlbG0kY29yZSRQbGF0Zm9ybSRTdWIkYmF0Y2ggPSBfUGxhdGZvcm1fYmF0Y2g7XG52YXIgZWxtJGNvcmUkUGxhdGZvcm0kU3ViJG5vbmUgPSBlbG0kY29yZSRQbGF0Zm9ybSRTdWIkYmF0Y2goX0xpc3RfTmlsKTtcbnZhciBhdXRob3IkcHJvamVjdCREZXRhaWxQYWdlJHN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIGVsbSRjb3JlJFBsYXRmb3JtJFN1YiRub25lO1xufTtcbnZhciBhdXRob3IkcHJvamVjdCREZXRhaWxQYWdlJHVwZGF0ZSA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCBtb2RlbCkge1xuXHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdGNhc2UgJ1VzZXJDbGlja2VkQ3JlYXRlUHJvY2Vzcyc6XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRjYXNlICdVc2VyVXBkYXRlZFRpdGxlRmllbGQnOlxuXHRcdFx0XHR2YXIgdGl0bGUgPSBtc2cuYTtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdGNhc2UgJ1VzZXJVcGRhdGVkRGVzY3JpcHRpb25GaWVsZCc6XG5cdFx0XHRcdHZhciBkZXNjcmlwdGlvbiA9IG1zZy5hO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0Y2FzZSAnVXNlclNhdmVkTmV3UHJvY2Vzcyc6XG5cdFx0XHRcdHZhciBuZXdQcm9jZXNzID0gbXNnLmE7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMiA9IF9Kc29uX21hcDI7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkc3VjY2VlZCA9IF9Kc29uX3N1Y2NlZWQ7XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdG9IYW5kbGVySW50ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0c3dpdGNoIChoYW5kbGVyLiQpIHtcblx0XHRjYXNlICdOb3JtYWwnOlxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0Y2FzZSAnTWF5U3RvcFByb3BhZ2F0aW9uJzpcblx0XHRcdHJldHVybiAxO1xuXHRcdGNhc2UgJ01heVByZXZlbnREZWZhdWx0Jzpcblx0XHRcdHJldHVybiAyO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gMztcblx0fVxufTtcbnZhciBlbG0kaHRtbCRIdG1sJGRpdiA9IF9WaXJ0dWFsRG9tX25vZGUoJ2RpdicpO1xudmFyIGVsbSRodG1sJEh0bWwkaDEgPSBfVmlydHVhbERvbV9ub2RlKCdoMScpO1xudmFyIGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRleHQgPSBfVmlydHVhbERvbV90ZXh0O1xudmFyIGVsbSRodG1sJEh0bWwkdGV4dCA9IGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRleHQ7XG52YXIgYXV0aG9yJHByb2plY3QkRGV0YWlsUGFnZSR2aWV3ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChtb2RlbC4kID09PSAnRXJyb3InKSB7XG5cdFx0dmFyIGVycm9yID0gbW9kZWwuYTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChlcnJvcilcblx0XHRcdFx0XSkpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjb250ZXh0ID0gbW9kZWwuYS5hO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRoMSxcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ1NwcmluZ0JvYXJkIFByb2Nlc3MnKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciRCcm93c2VyJEV4dGVybmFsID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRXh0ZXJuYWwnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkQnJvd3NlciRJbnRlcm5hbCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0ludGVybmFsJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJEJyb3dzZXIkRG9tJE5vdEZvdW5kID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnTm90Rm91bmQnLCBhOiBhfTtcbn07XG52YXIgZWxtJGNvcmUkQmFzaWNzJG5ldmVyID0gZnVuY3Rpb24gKF9uMCkge1xuXHRuZXZlcjpcblx0d2hpbGUgKHRydWUpIHtcblx0XHR2YXIgbnZyID0gX24wLmE7XG5cdFx0dmFyICR0ZW1wJF9uMCA9IG52cjtcblx0XHRfbjAgPSAkdGVtcCRfbjA7XG5cdFx0Y29udGludWUgbmV2ZXI7XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkVGFzayRQZXJmb3JtID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUGVyZm9ybScsIGE6IGF9O1xufTtcbnZhciBlbG0kY29yZSRUYXNrJHN1Y2NlZWQgPSBfU2NoZWR1bGVyX3N1Y2NlZWQ7XG52YXIgZWxtJGNvcmUkVGFzayRpbml0ID0gZWxtJGNvcmUkVGFzayRzdWNjZWVkKF9VdGlsc19UdXBsZTApO1xudmFyIGVsbSRjb3JlJExpc3QkZm9sZHJIZWxwZXIgPSBGNChcblx0ZnVuY3Rpb24gKGZuLCBhY2MsIGN0ciwgbHMpIHtcblx0XHRpZiAoIWxzLmIpIHtcblx0XHRcdHJldHVybiBhY2M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBhID0gbHMuYTtcblx0XHRcdHZhciByMSA9IGxzLmI7XG5cdFx0XHRpZiAoIXIxLmIpIHtcblx0XHRcdFx0cmV0dXJuIEEyKGZuLCBhLCBhY2MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGIgPSByMS5hO1xuXHRcdFx0XHR2YXIgcjIgPSByMS5iO1xuXHRcdFx0XHRpZiAoIXIyLmIpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdGEsXG5cdFx0XHRcdFx0XHRBMihmbiwgYiwgYWNjKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGMgPSByMi5hO1xuXHRcdFx0XHRcdHZhciByMyA9IHIyLmI7XG5cdFx0XHRcdFx0aWYgKCFyMy5iKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRhLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0XHRiLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGZuLCBjLCBhY2MpKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBkID0gcjMuYTtcblx0XHRcdFx0XHRcdHZhciByNCA9IHIzLmI7XG5cdFx0XHRcdFx0XHR2YXIgcmVzID0gKGN0ciA+IDUwMCkgPyBBMyhcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRcdFx0XHRcdFx0Zm4sXG5cdFx0XHRcdFx0XHRcdGFjYyxcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRyZXZlcnNlKHI0KSkgOiBBNChlbG0kY29yZSRMaXN0JGZvbGRySGVscGVyLCBmbiwgYWNjLCBjdHIgKyAxLCByNCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRhLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0XHRiLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0Zm4sXG5cdFx0XHRcdFx0XHRcdFx0XHRjLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZm4sIGQsIHJlcykpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRMaXN0JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmbiwgYWNjLCBscykge1xuXHRcdHJldHVybiBBNChlbG0kY29yZSRMaXN0JGZvbGRySGVscGVyLCBmbiwgYWNjLCAwLCBscyk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJExpc3QkbWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4cykge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKHgsIGFjYykge1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdGYoeCksXG5cdFx0XHRcdFx0XHRhY2MpO1xuXHRcdFx0XHR9KSxcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdHhzKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkVGFzayRhbmRUaGVuID0gX1NjaGVkdWxlcl9hbmRUaGVuO1xudmFyIGVsbSRjb3JlJFRhc2skbWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmdW5jLCB0YXNrQSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdGZ1bmN0aW9uIChhKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0ZnVuYyhhKSk7XG5cdFx0XHR9LFxuXHRcdFx0dGFza0EpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRUYXNrJG1hcDIgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIHRhc2tBLCB0YXNrQikge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdGZ1bmN0aW9uIChhKSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0XHRcdEEyKGZ1bmMsIGEsIGIpKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRhc2tCKTtcblx0XHRcdH0sXG5cdFx0XHR0YXNrQSk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJFRhc2skc2VxdWVuY2UgPSBmdW5jdGlvbiAodGFza3MpIHtcblx0cmV0dXJuIEEzKFxuXHRcdGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0ZWxtJGNvcmUkVGFzayRtYXAyKGVsbSRjb3JlJExpc3QkY29ucyksXG5cdFx0ZWxtJGNvcmUkVGFzayRzdWNjZWVkKF9MaXN0X05pbCksXG5cdFx0dGFza3MpO1xufTtcbnZhciBlbG0kY29yZSRQbGF0Zm9ybSRzZW5kVG9BcHAgPSBfUGxhdGZvcm1fc2VuZFRvQXBwO1xudmFyIGVsbSRjb3JlJFRhc2skc3Bhd25DbWQgPSBGMihcblx0ZnVuY3Rpb24gKHJvdXRlciwgX24wKSB7XG5cdFx0dmFyIHRhc2sgPSBfbjAuYTtcblx0XHRyZXR1cm4gX1NjaGVkdWxlcl9zcGF3bihcblx0XHRcdEEyKFxuXHRcdFx0XHRlbG0kY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdGVsbSRjb3JlJFBsYXRmb3JtJHNlbmRUb0FwcChyb3V0ZXIpLFxuXHRcdFx0XHR0YXNrKSk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJFRhc2skb25FZmZlY3RzID0gRjMoXG5cdGZ1bmN0aW9uIChyb3V0ZXIsIGNvbW1hbmRzLCBzdGF0ZSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRjb3JlJFRhc2skbWFwLFxuXHRcdFx0ZnVuY3Rpb24gKF9uMCkge1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMDtcblx0XHRcdH0sXG5cdFx0XHRlbG0kY29yZSRUYXNrJHNlcXVlbmNlKFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHRlbG0kY29yZSRUYXNrJHNwYXduQ21kKHJvdXRlciksXG5cdFx0XHRcdFx0Y29tbWFuZHMpKSk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJFRhc2skb25TZWxmTXNnID0gRjMoXG5cdGZ1bmN0aW9uIChfbjAsIF9uMSwgX24yKSB7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJFRhc2skc3VjY2VlZChfVXRpbHNfVHVwbGUwKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkVGFzayRjbWRNYXAgPSBGMihcblx0ZnVuY3Rpb24gKHRhZ2dlciwgX24wKSB7XG5cdFx0dmFyIHRhc2sgPSBfbjAuYTtcblx0XHRyZXR1cm4gZWxtJGNvcmUkVGFzayRQZXJmb3JtKFxuXHRcdFx0QTIoZWxtJGNvcmUkVGFzayRtYXAsIHRhZ2dlciwgdGFzaykpO1xuXHR9KTtcbl9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1snVGFzayddID0gX1BsYXRmb3JtX2NyZWF0ZU1hbmFnZXIoZWxtJGNvcmUkVGFzayRpbml0LCBlbG0kY29yZSRUYXNrJG9uRWZmZWN0cywgZWxtJGNvcmUkVGFzayRvblNlbGZNc2csIGVsbSRjb3JlJFRhc2skY21kTWFwKTtcbnZhciBlbG0kY29yZSRUYXNrJGNvbW1hbmQgPSBfUGxhdGZvcm1fbGVhZignVGFzaycpO1xudmFyIGVsbSRjb3JlJFRhc2skcGVyZm9ybSA9IEYyKFxuXHRmdW5jdGlvbiAodG9NZXNzYWdlLCB0YXNrKSB7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJFRhc2skY29tbWFuZChcblx0XHRcdGVsbSRjb3JlJFRhc2skUGVyZm9ybShcblx0XHRcdFx0QTIoZWxtJGNvcmUkVGFzayRtYXAsIHRvTWVzc2FnZSwgdGFzaykpKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRBcnJheVNlcSA9IHskOiAnQXJyYXlTZXEnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJENvbnN0cnVjdG9yID0gRjMoXG5cdGZ1bmN0aW9uIChhLCBiLCBjKSB7XG5cdFx0cmV0dXJuIHskOiAnQ29uc3RydWN0b3InLCBhOiBhLCBiOiBiLCBjOiBjfTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5ID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRGljdGlvbmFyeScsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJExpc3RTZXEgPSB7JDogJ0xpc3RTZXEnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFByaW1pdGl2ZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1ByaW1pdGl2ZScsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFJlY29yZCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1JlY29yZCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFMgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdTJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UgPSBGMyhcblx0ZnVuY3Rpb24gKGEsIGIsIGMpIHtcblx0XHRyZXR1cm4geyQ6ICdTZXF1ZW5jZScsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNldFNlcSA9IHskOiAnU2V0U2VxJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiREb3duID0geyQ6ICdEb3duJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wID0geyQ6ICdOb09wJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVcCA9IHskOiAnVXAnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVzZXJNc2cgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdVc2VyTXNnJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc2l6ZSA9IGZ1bmN0aW9uIChoaXN0b3J5KSB7XG5cdHJldHVybiBoaXN0b3J5Lm51bU1lc3NhZ2VzO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEV4cG9ydCA9IHskOiAnRXhwb3J0J307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRJbXBvcnQgPSB7JDogJ0ltcG9ydCd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kT3BlbiA9IHskOiAnT3Blbid9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kT3ZlcmxheU1zZyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ092ZXJsYXlNc2cnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSZXN1bWUgPSB7JDogJ1Jlc3VtZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaXNQYXVzZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblx0aWYgKHN0YXRlLiQgPT09ICdSdW5uaW5nJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEFjY2VwdCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0FjY2VwdCcsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JENob29zZSA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0Nob29zZScsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGdvb2ROZXdzMSA9ICdcXG5UaGUgZ29vZCBuZXdzIGlzIHRoYXQgaGF2aW5nIHZhbHVlcyBsaWtlIHRoaXMgaW4geW91ciBtZXNzYWdlIHR5cGUgaXMgbm90XFxuc28gZ3JlYXQgaW4gdGhlIGxvbmcgcnVuLiBZb3UgYXJlIGJldHRlciBvZmYgdXNpbmcgc2ltcGxlciBkYXRhLCBsaWtlXFxuJztcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGdvb2ROZXdzMiA9ICdcXG5mdW5jdGlvbiBjYW4gcGF0dGVybiBtYXRjaCBvbiB0aGF0IGRhdGEgYW5kIGNhbGwgd2hhdGV2ZXIgZnVuY3Rpb25zLCBKU09OXFxuZGVjb2RlcnMsIGV0Yy4geW91IG5lZWQuIFRoaXMgbWFrZXMgdGhlIGNvZGUgbXVjaCBtb3JlIGV4cGxpY2l0IGFuZCBlYXN5IHRvXFxuZm9sbG93IGZvciBvdGhlciByZWFkZXJzIChvciB5b3UgaW4gYSBmZXcgbW9udGhzISlcXG4nO1xudmFyIGVsbSRodG1sJEh0bWwkY29kZSA9IF9WaXJ0dWFsRG9tX25vZGUoJ2NvZGUnKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkY29kZSxcblx0XHRfTGlzdF9OaWwsXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQobmFtZSlcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRhZGRDb21tYXMgPSBmdW5jdGlvbiAoaXRlbXMpIHtcblx0aWYgKCFpdGVtcy5iKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9IGVsc2Uge1xuXHRcdGlmICghaXRlbXMuYi5iKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGl0ZW1zLmE7XG5cdFx0XHRyZXR1cm4gaXRlbTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFpdGVtcy5iLmIuYikge1xuXHRcdFx0XHR2YXIgaXRlbTEgPSBpdGVtcy5hO1xuXHRcdFx0XHR2YXIgX24xID0gaXRlbXMuYjtcblx0XHRcdFx0dmFyIGl0ZW0yID0gX24xLmE7XG5cdFx0XHRcdHJldHVybiBpdGVtMSArICgnIGFuZCAnICsgaXRlbTIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGxhc3RJdGVtID0gaXRlbXMuYTtcblx0XHRcdFx0dmFyIG90aGVySXRlbXMgPSBpdGVtcy5iO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0JywgJyxcblx0XHRcdFx0XHRfVXRpbHNfYXAoXG5cdFx0XHRcdFx0XHRvdGhlckl0ZW1zLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbJyBhbmQgJyArIGxhc3RJdGVtXSkpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRwcm9ibGVtVG9TdHJpbmcgPSBmdW5jdGlvbiAocHJvYmxlbSkge1xuXHRzd2l0Y2ggKHByb2JsZW0uJCkge1xuXHRcdGNhc2UgJ0Z1bmN0aW9uJzpcblx0XHRcdHJldHVybiAnZnVuY3Rpb25zJztcblx0XHRjYXNlICdEZWNvZGVyJzpcblx0XHRcdHJldHVybiAnSlNPTiBkZWNvZGVycyc7XG5cdFx0Y2FzZSAnVGFzayc6XG5cdFx0XHRyZXR1cm4gJ3Rhc2tzJztcblx0XHRjYXNlICdQcm9jZXNzJzpcblx0XHRcdHJldHVybiAncHJvY2Vzc2VzJztcblx0XHRjYXNlICdTb2NrZXQnOlxuXHRcdFx0cmV0dXJuICd3ZWIgc29ja2V0cyc7XG5cdFx0Y2FzZSAnUmVxdWVzdCc6XG5cdFx0XHRyZXR1cm4gJ0hUVFAgcmVxdWVzdHMnO1xuXHRcdGNhc2UgJ1Byb2dyYW0nOlxuXHRcdFx0cmV0dXJuICdwcm9ncmFtcyc7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAndmlydHVhbCBET00gdmFsdWVzJztcblx0fVxufTtcbnZhciBlbG0kaHRtbCRIdG1sJGxpID0gX1ZpcnR1YWxEb21fbm9kZSgnbGknKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdQcm9ibGVtVHlwZSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIG5hbWUgPSBfbjAubmFtZTtcblx0dmFyIHByb2JsZW1zID0gX24wLnByb2JsZW1zO1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRsaSxcblx0XHRfTGlzdF9OaWwsXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlKG5hbWUpLFxuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoXG5cdFx0XHRcdCcgY2FuIGNvbnRhaW4gJyArIChlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGFkZENvbW1hcyhcblx0XHRcdFx0XHRBMihlbG0kY29yZSRMaXN0JG1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRwcm9ibGVtVG9TdHJpbmcsIHByb2JsZW1zKSkgKyAnLicpKVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kaHRtbCRIdG1sJGEgPSBfVmlydHVhbERvbV9ub2RlKCdhJyk7XG52YXIgZWxtJGh0bWwkSHRtbCRwID0gX1ZpcnR1YWxEb21fbm9kZSgncCcpO1xudmFyIGVsbSRodG1sJEh0bWwkdWwgPSBfVmlydHVhbERvbV9ub2RlKCd1bCcpO1xudmFyIGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZyA9IF9Kc29uX3dyYXA7XG52YXIgZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5ID0gRjIoXG5cdGZ1bmN0aW9uIChrZXksIHN0cmluZykge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9WaXJ0dWFsRG9tX3Byb3BlcnR5LFxuXHRcdFx0a2V5LFxuXHRcdFx0ZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nKHN0cmluZykpO1xuXHR9KTtcbnZhciBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZiA9IGZ1bmN0aW9uICh1cmwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSxcblx0XHQnaHJlZicsXG5cdFx0X1ZpcnR1YWxEb21fbm9KYXZhU2NyaXB0VXJpKHVybCkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdCYWRNZXRhZGF0YSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIG1lc3NhZ2UgPSBfbjAubWVzc2FnZTtcblx0dmFyIHByb2JsZW1zID0gX24wLnByb2JsZW1zO1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFtcblx0XHRcdEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdUaGUgJyksXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShtZXNzYWdlKSxcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyB0eXBlIG9mIHlvdXIgcHJvZ3JhbSBjYW5ub3QgYmUgcmVsaWFibHkgc2VyaWFsaXplZCBmb3IgaGlzdG9yeSBmaWxlcy4nKVxuXHRcdFx0XHRdKSksXG5cdFx0XHRBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnRnVuY3Rpb25zIGNhbm5vdCBiZSBzZXJpYWxpemVkLCBub3IgY2FuIHZhbHVlcyB0aGF0IGNvbnRhaW4gZnVuY3Rpb25zLiBUaGlzIGlzIGEgcHJvYmxlbSBpbiB0aGVzZSBwbGFjZXM6Jylcblx0XHRcdFx0XSkpLFxuXHRcdFx0QTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHVsLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRtYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld1Byb2JsZW1UeXBlLCBwcm9ibGVtcykpLFxuXHRcdFx0QTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRnb29kTmV3czEpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCdodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy90eXBlcy91bmlvbl90eXBlcy5odG1sJylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCd1bmlvbiB0eXBlcycpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcsIGluIHlvdXIgbWVzc2FnZXMuIEZyb20gdGhlcmUsIHlvdXIgJyksXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZSgndXBkYXRlJyksXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZ29vZE5ld3MyKVxuXHRcdFx0XHRdKSlcblx0XHRdKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRDYW5jZWwgPSB7JDogJ0NhbmNlbCd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUHJvY2VlZCA9IHskOiAnUHJvY2VlZCd9O1xudmFyIGVsbSRodG1sJEh0bWwkYnV0dG9uID0gX1ZpcnR1YWxEb21fbm9kZSgnYnV0dG9uJyk7XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kc3R5bGUgPSBfVmlydHVhbERvbV9zdHlsZTtcbnZhciBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRzdHlsZTtcbnZhciBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSROb3JtYWwgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdOb3JtYWwnLCBhOiBhfTtcbn07XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kb24gPSBfVmlydHVhbERvbV9vbjtcbnZhciBlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbiA9IEYyKFxuXHRmdW5jdGlvbiAoZXZlbnQsIGRlY29kZXIpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRvbixcblx0XHRcdGV2ZW50LFxuXHRcdFx0ZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kTm9ybWFsKGRlY29kZXIpKTtcblx0fSk7XG52YXIgZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uLFxuXHRcdCdjbGljaycsXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3QnV0dG9ucyA9IGZ1bmN0aW9uIChidXR0b25zKSB7XG5cdHZhciBidG4gPSBGMihcblx0XHRmdW5jdGlvbiAobXNnLCBzdHJpbmcpIHtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRidXR0b24sXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdtYXJnaW4tcmlnaHQnLCAnMjBweCcpLFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhtc2cpXG5cdFx0XHRcdFx0XSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RyaW5nKVxuXHRcdFx0XHRcdF0pKTtcblx0XHR9KTtcblx0dmFyIGJ1dHRvbk5vZGVzID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmIChidXR0b25zLiQgPT09ICdBY2NlcHQnKSB7XG5cdFx0XHR2YXIgcHJvY2VlZCA9IGJ1dHRvbnMuYTtcblx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihidG4sIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUHJvY2VlZCwgcHJvY2VlZClcblx0XHRcdFx0XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjYW5jZWwgPSBidXR0b25zLmE7XG5cdFx0XHR2YXIgcHJvY2VlZCA9IGJ1dHRvbnMuYjtcblx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihidG4sIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQ2FuY2VsLCBjYW5jZWwpLFxuXHRcdFx0XHRcdEEyKGJ0biwgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRQcm9jZWVkLCBwcm9jZWVkKVxuXHRcdFx0XHRdKTtcblx0XHR9XG5cdH0oKTtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzYwcHgnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGluZS1oZWlnaHQnLCAnNjBweCcpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd0ZXh0LWFsaWduJywgJ3JpZ2h0JyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDUwLCA1MCwgNTApJylcblx0XHRcdF0pLFxuXHRcdGJ1dHRvbk5vZGVzKTtcbn07XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbWFwID0gX1ZpcnR1YWxEb21fbWFwO1xudmFyIGVsbSRodG1sJEh0bWwkbWFwID0gZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbWFwO1xudmFyIGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRpZCA9IGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSgnaWQnKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZXNzYWdlID0gRjQoXG5cdGZ1bmN0aW9uIChjb25maWcsIHRpdGxlLCBkZXRhaWxzLCBidXR0b25zKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ2VsbS1kZWJ1Z2dlci1vdmVybGF5JyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9zaXRpb24nLCAnZml4ZWQnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd0b3AnLCAnMCcpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2xlZnQnLCAnMCcpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnMTAwJScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJ3doaXRlJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9pbnRlci1ldmVudHMnLCAnbm9uZScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtZmFtaWx5JywgJ1xcJ1RyZWJ1Y2hldCBNU1xcJywgXFwnTHVjaWRhIEdyYW5kZVxcJywgXFwnQml0c3RyZWFtIFZlcmEgU2Fuc1xcJywgXFwnSGVsdmV0aWNhIE5ldWVcXCcsIHNhbnMtc2VyaWYnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd6LWluZGV4JywgJzIxNDc0ODM2NDcnKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnNjAwcHgnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZy1sZWZ0JywgJ2NhbGMoNTAlIC0gMzAwcHgpJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctcmlnaHQnLCAnY2FsYyg1MCUgLSAzMDBweCknKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNyknKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtc2l6ZScsICczNnB4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnODBweCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoNTAsIDUwLCA1MCknKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICcyMnB4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd2ZXJ0aWNhbC1hbGlnbicsICdtaWRkbGUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2xpbmUtaGVpZ2h0JywgJzgwcHgnKVxuXHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHRpdGxlKVxuXHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGlkKCdlbG0tZGVidWdnZXItZGV0YWlscycpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZycsICcgOHB4IDIwcHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ292ZXJmbG93LXknLCAnYXV0bycpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWF4LWhlaWdodCcsICdjYWxjKDEwMCUgLSAxNTZweCknKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDYxLCA2MSwgNjEpJylcblx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0ZGV0YWlscyksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0Y29uZmlnLndyYXAsXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0J1dHRvbnMoYnV0dG9ucykpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kaHRtbCRIdG1sJHNwYW4gPSBfVmlydHVhbERvbV9ub2RlKCdzcGFuJyk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRidXR0b24gPSBGMihcblx0ZnVuY3Rpb24gKG1zZywgbGFiZWwpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKG1zZyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChsYWJlbClcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdJbXBvcnRFeHBvcnQgPSBGMyhcblx0ZnVuY3Rpb24gKHByb3BzLCBpbXBvcnRNc2csIGV4cG9ydE1zZykge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0cHJvcHMsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGJ1dHRvbiwgaW1wb3J0TXNnLCAnSW1wb3J0JyksXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgLyAnKSxcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGJ1dHRvbiwgZXhwb3J0TXNnLCAnRXhwb3J0Jylcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNaW5pQ29udHJvbHMgPSBGMihcblx0ZnVuY3Rpb24gKGNvbmZpZywgbnVtTXNncykge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9zaXRpb24nLCAnZml4ZWQnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdib3R0b20nLCAnMCcpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3JpZ2h0JywgJzZweCcpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JvcmRlci1yYWRpdXMnLCAnNHB4JyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoNjEsIDYxLCA2MSknKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICd3aGl0ZScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtZmFtaWx5JywgJ21vbm9zcGFjZScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd6LWluZGV4JywgJzIxNDc0ODM2NDcnKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZycsICc2cHgnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY3Vyc29yJywgJ3BvaW50ZXInKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndGV4dC1hbGlnbicsICdjZW50ZXInKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWluLXdpZHRoJywgJzI0Y2gnKSxcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhjb25maWcub3Blbilcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHRcdFx0XHQnRXhwbG9yZSBIaXN0b3J5ICgnICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG51bU1zZ3MpICsgJyknKSlcblx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdJbXBvcnRFeHBvcnQsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nJywgJzRweCAwJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtc2l6ZScsICcwLjhlbScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd0ZXh0LWFsaWduJywgJ2NlbnRlcicpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig1MCwgNTAsIDUwKScpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRjb25maWcuaW1wb3J0SGlzdG9yeSxcblx0XHRcdFx0XHRjb25maWcuZXhwb3J0SGlzdG9yeSlcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGV4cGxhbmF0aW9uQmFkID0gJ1xcblRoZSBtZXNzYWdlcyBpbiB0aGlzIGhpc3RvcnkgZG8gbm90IG1hdGNoIHRoZSBtZXNzYWdlcyBoYW5kbGVkIGJ5IHlvdXJcXG5wcm9ncmFtLiBJIG5vdGljZWQgY2hhbmdlcyBpbiB0aGUgZm9sbG93aW5nIHR5cGVzOlxcbic7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRleHBsYW5hdGlvblJpc2t5ID0gJ1xcblRoaXMgaGlzdG9yeSBzZWVtcyBvbGQuIEl0IHdpbGwgd29yayB3aXRoIHRoaXMgcHJvZ3JhbSwgYnV0IHNvbWVcXG5tZXNzYWdlcyBoYXZlIGJlZW4gYWRkZWQgc2luY2UgdGhlIGhpc3Rvcnkgd2FzIGNyZWF0ZWQ6XFxuJztcbnZhciBlbG0kY29yZSRMaXN0JGludGVyc3BlcnNlID0gRjIoXG5cdGZ1bmN0aW9uIChzZXAsIHhzKSB7XG5cdFx0aWYgKCF4cy5iKSB7XG5cdFx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgaGQgPSB4cy5hO1xuXHRcdFx0dmFyIHRsID0geHMuYjtcblx0XHRcdHZhciBzdGVwID0gRjIoXG5cdFx0XHRcdGZ1bmN0aW9uICh4LCByZXN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0c2VwLFxuXHRcdFx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRjb25zLCB4LCByZXN0KSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0dmFyIHNwZXJzZWQgPSBBMyhlbG0kY29yZSRMaXN0JGZvbGRyLCBzdGVwLCBfTGlzdF9OaWwsIHRsKTtcblx0XHRcdHJldHVybiBBMihlbG0kY29yZSRMaXN0JGNvbnMsIGhkLCBzcGVyc2VkKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lbnRpb24gPSBGMihcblx0ZnVuY3Rpb24gKHRhZ3MsIHZlcmJlZCkge1xuXHRcdHZhciBfbjAgPSBBMihcblx0XHRcdGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZSxcblx0XHRcdGVsbSRjb3JlJExpc3QkcmV2ZXJzZSh0YWdzKSk7XG5cdFx0aWYgKCFfbjAuYikge1xuXHRcdFx0cmV0dXJuIGVsbSRodG1sJEh0bWwkdGV4dCgnJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghX24wLmIuYikge1xuXHRcdFx0XHR2YXIgdGFnID0gX24wLmE7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGxpLFxuXHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCh2ZXJiZWQpLFxuXHRcdFx0XHRcdFx0XHR0YWcsXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnLicpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIV9uMC5iLmIuYikge1xuXHRcdFx0XHRcdHZhciB0YWcyID0gX24wLmE7XG5cdFx0XHRcdFx0dmFyIF9uMSA9IF9uMC5iO1xuXHRcdFx0XHRcdHZhciB0YWcxID0gX24xLmE7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCh2ZXJiZWQpLFxuXHRcdFx0XHRcdFx0XHRcdHRhZzEsXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgYW5kICcpLFxuXHRcdFx0XHRcdFx0XHRcdHRhZzIsXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcuJylcblx0XHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBsYXN0VGFnID0gX24wLmE7XG5cdFx0XHRcdFx0dmFyIG90aGVyVGFncyA9IF9uMC5iO1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbGksXG5cdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQodmVyYmVkKSxcblx0XHRcdFx0XHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRpbnRlcnNwZXJzZSxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnLCAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkcmV2ZXJzZShvdGhlclRhZ3MpKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnLCBhbmQgJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhc3RUYWcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnLicpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSkpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q2hhbmdlID0gZnVuY3Rpb24gKGNoYW5nZSkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRsaSxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ21hcmdpbicsICc4cHggMCcpXG5cdFx0XHRdKSxcblx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoY2hhbmdlLiQgPT09ICdBbGlhc0NoYW5nZScpIHtcblx0XHRcdFx0dmFyIG5hbWUgPSBjaGFuZ2UuYTtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtc2l6ZScsICcxLjVlbScpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShuYW1lKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBuYW1lID0gY2hhbmdlLmE7XG5cdFx0XHRcdHZhciByZW1vdmVkID0gY2hhbmdlLmIucmVtb3ZlZDtcblx0XHRcdFx0dmFyIGNoYW5nZWQgPSBjaGFuZ2UuYi5jaGFuZ2VkO1xuXHRcdFx0XHR2YXIgYWRkZWQgPSBjaGFuZ2UuYi5hZGRlZDtcblx0XHRcdFx0dmFyIGFyZ3NNYXRjaCA9IGNoYW5nZS5iLmFyZ3NNYXRjaDtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtc2l6ZScsICcxLjVlbScpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShuYW1lKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdWwsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdsaXN0LXN0eWxlLXR5cGUnLCAnZGlzYycpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICcyZW0nKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lbnRpb24sIHJlbW92ZWQsICdSZW1vdmVkICcpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lbnRpb24sIGNoYW5nZWQsICdDaGFuZ2VkICcpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lbnRpb24sIGFkZGVkLCAnQWRkZWQgJylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0YXJnc01hdGNoID8gZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKSA6IGVsbSRodG1sJEh0bWwkdGV4dCgnVGhpcyBtYXkgYmUgZHVlIHRvIHRoZSBmYWN0IHRoYXQgdGhlIHR5cGUgdmFyaWFibGUgbmFtZXMgY2hhbmdlZC4nKVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0fVxuXHRcdH0oKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld1JlcG9ydCA9IEYyKFxuXHRmdW5jdGlvbiAoaXNCYWQsIHJlcG9ydCkge1xuXHRcdHN3aXRjaCAocmVwb3J0LiQpIHtcblx0XHRcdGNhc2UgJ0NvcnJ1cHRIaXN0b3J5Jzpcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ0xvb2tzIGxpa2UgdGhpcyBoaXN0b3J5IGZpbGUgaXMgY29ycnVwdC4gSSBjYW5ub3QgdW5kZXJzdGFuZCBpdC4nKVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0Y2FzZSAnVmVyc2lvbkNoYW5nZWQnOlxuXHRcdFx0XHR2YXIgb2xkID0gcmVwb3J0LmE7XG5cdFx0XHRcdHZhciBfbmV3ID0gcmVwb3J0LmI7XG5cdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdUaGlzIGhpc3Rvcnkgd2FzIGNyZWF0ZWQgd2l0aCBFbG0gJyArIChvbGQgKyAoJywgYnV0IHlvdSBhcmUgdXNpbmcgRWxtICcgKyAoX25ldyArICcgcmlnaHQgbm93LicpKSkpXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRjYXNlICdNZXNzYWdlQ2hhbmdlZCc6XG5cdFx0XHRcdHZhciBvbGQgPSByZXBvcnQuYTtcblx0XHRcdFx0dmFyIF9uZXcgPSByZXBvcnQuYjtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ1RvIGltcG9ydCBzb21lIG90aGVyIGhpc3RvcnksIHRoZSBvdmVyYWxsIG1lc3NhZ2UgdHlwZSBtdXN0JyArICcgYmUgdGhlIHNhbWUuIFRoZSBvbGQgaGlzdG9yeSBoYXMgJyksXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlKG9sZCksXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyBtZXNzYWdlcywgYnV0IHRoZSBuZXcgcHJvZ3JhbSB3b3JrcyB3aXRoICcpLFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShfbmV3KSxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnIG1lc3NhZ2VzLicpXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR2YXIgY2hhbmdlcyA9IHJlcG9ydC5hO1xuXHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHRcdFx0XHRcdGlzQmFkID8gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRleHBsYW5hdGlvbkJhZCA6IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZXhwbGFuYXRpb25SaXNreSlcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHVsLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGlzdC1zdHlsZS10eXBlJywgJ25vbmUnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nLWxlZnQnLCAnMjBweCcpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRtYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NoYW5nZSwgY2hhbmdlcykpXG5cdFx0XHRcdFx0XSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXcgPSBGNShcblx0ZnVuY3Rpb24gKGNvbmZpZywgaXNQYXVzZWQsIGlzT3BlbiwgbnVtTXNncywgc3RhdGUpIHtcblx0XHRzd2l0Y2ggKHN0YXRlLiQpIHtcblx0XHRcdGNhc2UgJ05vbmUnOlxuXHRcdFx0XHRyZXR1cm4gaXNPcGVuID8gZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKSA6IChpc1BhdXNlZCA/IEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjdXJzb3InLCAncG9pbnRlcicpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd0ZXh0LWFsaWduJywgJ2NlbnRlcicpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb2ludGVyLWV2ZW50cycsICdhdXRvJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgyMDAsIDIwMCwgMjAwLCAwLjcpJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJ3doaXRlJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtZmFtaWx5JywgJ1xcJ1RyZWJ1Y2hldCBNU1xcJywgXFwnTHVjaWRhIEdyYW5kZVxcJywgXFwnQml0c3RyZWFtIFZlcmEgU2Fuc1xcJywgXFwnSGVsdmV0aWNhIE5ldWVcXCcsIHNhbnMtc2VyaWYnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnei1pbmRleCcsICcyMTQ3NDgzNjQ2JyksXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soY29uZmlnLnJlc3VtZSlcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3RvcCcsICdjYWxjKDUwJSAtIDQwcHgpJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LXNpemUnLCAnODBweCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGluZS1oZWlnaHQnLCAnODBweCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzgwcHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKVxuXHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdDbGljayB0byBSZXN1bWUnKVxuXHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWluaUNvbnRyb2xzLCBjb25maWcsIG51bU1zZ3MpXG5cdFx0XHRcdFx0XHRdKSkgOiBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNaW5pQ29udHJvbHMsIGNvbmZpZywgbnVtTXNncykpO1xuXHRcdFx0Y2FzZSAnQmFkTWV0YWRhdGEnOlxuXHRcdFx0XHR2YXIgYmFkTWV0YWRhdGFfID0gc3RhdGUuYTtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lc3NhZ2UsXG5cdFx0XHRcdFx0Y29uZmlnLFxuXHRcdFx0XHRcdCdDYW5ub3QgdXNlIEltcG9ydCBvciBFeHBvcnQnLFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0JhZE1ldGFkYXRhKGJhZE1ldGFkYXRhXyksXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRBY2NlcHQoJ09rJykpO1xuXHRcdFx0Y2FzZSAnQmFkSW1wb3J0Jzpcblx0XHRcdFx0dmFyIHJlcG9ydCA9IHN0YXRlLmE7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZXNzYWdlLFxuXHRcdFx0XHRcdGNvbmZpZyxcblx0XHRcdFx0XHQnQ2Fubm90IEltcG9ydCBIaXN0b3J5Jyxcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdSZXBvcnQsIHRydWUsIHJlcG9ydCksXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRBY2NlcHQoJ09rJykpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIHJlcG9ydCA9IHN0YXRlLmE7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZXNzYWdlLFxuXHRcdFx0XHRcdGNvbmZpZyxcblx0XHRcdFx0XHQnV2FybmluZycsXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3UmVwb3J0LCBmYWxzZSwgcmVwb3J0KSxcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JENob29zZSwgJ0NhbmNlbCcsICdJbXBvcnQgQW55d2F5JykpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRjb3JuZXJWaWV3ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdHJldHVybiBBNShcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXcsXG5cdFx0e2V4cG9ydEhpc3Rvcnk6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRXhwb3J0LCBpbXBvcnRIaXN0b3J5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEltcG9ydCwgb3BlbjogZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRPcGVuLCByZXN1bWU6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUmVzdW1lLCB3cmFwOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE92ZXJsYXlNc2d9LFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaXNQYXVzZWQobW9kZWwuc3RhdGUpLFxuXHRcdF9EZWJ1Z2dlcl9pc09wZW4obW9kZWwucG9wb3V0KSxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHNpemUobW9kZWwuaGlzdG9yeSksXG5cdFx0bW9kZWwub3ZlcmxheSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0Q3VycmVudE1vZGVsID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cdGlmIChzdGF0ZS4kID09PSAnUnVubmluZycpIHtcblx0XHR2YXIgbW9kZWwgPSBzdGF0ZS5hO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fSBlbHNlIHtcblx0XHR2YXIgbW9kZWwgPSBzdGF0ZS5iO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldFVzZXJNb2RlbCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRDdXJyZW50TW9kZWwobW9kZWwuc3RhdGUpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEZpZWxkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRmllbGQnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCA9IEYzKFxuXHRmdW5jdGlvbiAoYSwgYiwgYykge1xuXHRcdHJldHVybiB7JDogJ0luZGV4JywgYTogYSwgYjogYiwgYzogY307XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kS2V5ID0geyQ6ICdLZXknfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUgPSB7JDogJ05vbmUnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFRvZ2dsZSA9IHskOiAnVG9nZ2xlJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRWYWx1ZSA9IHskOiAnVmFsdWUnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGJsdWUgPSBBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICdyZ2IoMjgsIDAsIDIwNyknKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQgPSBmdW5jdGlvbiAobWF5YmVLZXkpIHtcblx0aWYgKG1heWJlS2V5LiQgPT09ICdOb3RoaW5nJykge1xuXHRcdHJldHVybiBfTGlzdF9OaWw7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZy1sZWZ0JywgJzRjaCcpXG5cdFx0XHRdKTtcblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1ha2VBcnJvdyA9IGZ1bmN0aW9uIChhcnJvdykge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAnIzc3NycpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nLWxlZnQnLCAnMmNoJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzJjaCcpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpXG5cdFx0XHRdKSxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChhcnJvdylcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRwdXJwbGUgPSBBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICdyZ2IoMTM2LCAxOSwgMTQ1KScpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGluZVN0YXJ0ZXIgPSBGMyhcblx0ZnVuY3Rpb24gKG1heWJlS2V5LCBtYXliZUlzQ2xvc2VkLCBkZXNjcmlwdGlvbikge1xuXHRcdHZhciBhcnJvdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChtYXliZUlzQ2xvc2VkLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtYWtlQXJyb3coJycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG1heWJlSXNDbG9zZWQuYSkge1xuXHRcdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1ha2VBcnJvdygn4pa4Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWFrZUFycm93KCfilr4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0oKTtcblx0XHRpZiAobWF5YmVLZXkuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkTGlzdCRjb25zLCBhcnJvdywgZGVzY3JpcHRpb24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIga2V5ID0gbWF5YmVLZXkuYTtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRhcnJvdyxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRwdXJwbGVdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChrZXkpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnID0gJyksXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbikpKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kcmVkID0gQTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAncmdiKDE5NiwgMjYsIDIyKScpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kc2VxVHlwZVRvU3RyaW5nID0gRjIoXG5cdGZ1bmN0aW9uIChuLCBzZXFUeXBlKSB7XG5cdFx0c3dpdGNoIChzZXFUeXBlLiQpIHtcblx0XHRcdGNhc2UgJ0xpc3RTZXEnOlxuXHRcdFx0XHRyZXR1cm4gJ0xpc3QoJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChuKSArICcpJyk7XG5cdFx0XHRjYXNlICdTZXRTZXEnOlxuXHRcdFx0XHRyZXR1cm4gJ1NldCgnICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG4pICsgJyknKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiAnQXJyYXkoJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChuKSArICcpJyk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRTdHJpbmckc2xpY2UgPSBfU3RyaW5nX3NsaWNlO1xudmFyIGVsbSRjb3JlJFN0cmluZyRsZWZ0ID0gRjIoXG5cdGZ1bmN0aW9uIChuLCBzdHJpbmcpIHtcblx0XHRyZXR1cm4gKG4gPCAxKSA/ICcnIDogQTMoZWxtJGNvcmUkU3RyaW5nJHNsaWNlLCAwLCBuLCBzdHJpbmcpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRTdHJpbmckbGVuZ3RoID0gX1N0cmluZ19sZW5ndGg7XG52YXIgZWxtJGNvcmUkQmFzaWNzJG5lZ2F0ZSA9IGZ1bmN0aW9uIChuKSB7XG5cdHJldHVybiAtbjtcbn07XG52YXIgZWxtJGNvcmUkU3RyaW5nJHJpZ2h0ID0gRjIoXG5cdGZ1bmN0aW9uIChuLCBzdHJpbmcpIHtcblx0XHRyZXR1cm4gKG4gPCAxKSA/ICcnIDogQTMoXG5cdFx0XHRlbG0kY29yZSRTdHJpbmckc2xpY2UsXG5cdFx0XHQtbixcblx0XHRcdGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoc3RyaW5nKSxcblx0XHRcdHN0cmluZyk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kZWxpZGVNaWRkbGUgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiAoZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHIpIDw9IDE4KSA/IHN0ciA6IChBMihlbG0kY29yZSRTdHJpbmckbGVmdCwgOCwgc3RyKSArICgnLi4uJyArIEEyKGVsbSRjb3JlJFN0cmluZyRyaWdodCwgOCwgc3RyKSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdFeHRyYVRpbnlSZWNvcmQgPSBGMyhcblx0ZnVuY3Rpb24gKGxlbmd0aCwgc3RhcnRlciwgZW50cmllcykge1xuXHRcdGlmICghZW50cmllcy5iKSB7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0bGVuZ3RoICsgMSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnfScpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZmllbGQgPSBlbnRyaWVzLmE7XG5cdFx0XHR2YXIgcmVzdCA9IGVudHJpZXMuYjtcblx0XHRcdHZhciBuZXh0TGVuZ3RoID0gKGxlbmd0aCArIGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoZmllbGQpKSArIDE7XG5cdFx0XHRpZiAobmV4dExlbmd0aCA+IDE4KSB7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGxlbmd0aCArIDIsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ+KApn0nKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9uMSA9IEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueVJlY29yZCwgbmV4dExlbmd0aCwgJywnLCByZXN0KTtcblx0XHRcdFx0dmFyIGZpbmFsTGVuZ3RoID0gX24xLmE7XG5cdFx0XHRcdHZhciBvdGhlckh0bWxzID0gX24xLmI7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGZpbmFsTGVuZ3RoLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0YXJ0ZXIpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHB1cnBsZV0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGZpZWxkKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRvdGhlckh0bWxzKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueUhlbHAgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoc3RyKSxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdHIpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRjb3JlJERpY3QkaXNFbXB0eSA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdGlmIChkaWN0LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBlbG0kY29yZSRNYXliZSR3aXRoRGVmYXVsdCA9IEYyKFxuXHRmdW5jdGlvbiAoX2RlZmF1bHQsIG1heWJlKSB7XG5cdFx0aWYgKG1heWJlLiQgPT09ICdKdXN0Jykge1xuXHRcdFx0dmFyIHZhbHVlID0gbWF5YmUuYTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9kZWZhdWx0O1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RXh0cmFUaW55ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICh2YWx1ZS4kID09PSAnUmVjb3JkJykge1xuXHRcdHZhciByZWNvcmQgPSB2YWx1ZS5iO1xuXHRcdHJldHVybiBBMyhcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueVJlY29yZCxcblx0XHRcdDAsXG5cdFx0XHQneycsXG5cdFx0XHRlbG0kY29yZSREaWN0JGtleXMocmVjb3JkKSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnkodmFsdWUpO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnkgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0c3dpdGNoICh2YWx1ZS4kKSB7XG5cdFx0Y2FzZSAnUyc6XG5cdFx0XHR2YXIgc3RyaW5nUmVwID0gdmFsdWUuYTtcblx0XHRcdHZhciBzdHIgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGVsaWRlTWlkZGxlKHN0cmluZ1JlcCk7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHIpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHJlZF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0cilcblx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdGNhc2UgJ1ByaW1pdGl2ZSc6XG5cdFx0XHR2YXIgc3RyaW5nUmVwID0gdmFsdWUuYTtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRlbG0kY29yZSRTdHJpbmckbGVuZ3RoKHN0cmluZ1JlcCksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W2VsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kYmx1ZV0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0cmluZ1JlcClcblx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdGNhc2UgJ1NlcXVlbmNlJzpcblx0XHRcdHZhciBzZXFUeXBlID0gdmFsdWUuYTtcblx0XHRcdHZhciB2YWx1ZUxpc3QgPSB2YWx1ZS5jO1xuXHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlIZWxwKFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHNlcVR5cGVUb1N0cmluZyxcblx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGxlbmd0aCh2YWx1ZUxpc3QpLFxuXHRcdFx0XHRcdHNlcVR5cGUpKTtcblx0XHRjYXNlICdEaWN0aW9uYXJ5Jzpcblx0XHRcdHZhciBrZXlWYWx1ZVBhaXJzID0gdmFsdWUuYjtcblx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55SGVscChcblx0XHRcdFx0J0RpY3QoJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChcblx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGxlbmd0aChrZXlWYWx1ZVBhaXJzKSkgKyAnKScpKTtcblx0XHRjYXNlICdSZWNvcmQnOlxuXHRcdFx0dmFyIHJlY29yZCA9IHZhbHVlLmI7XG5cdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZChyZWNvcmQpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRpZiAoIXZhbHVlLmMuYikge1xuXHRcdFx0XHR2YXIgbWF5YmVOYW1lID0gdmFsdWUuYTtcblx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlIZWxwKFxuXHRcdFx0XHRcdEEyKGVsbSRjb3JlJE1heWJlJHdpdGhEZWZhdWx0LCAnVW5pdCcsIG1heWJlTmFtZSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG1heWJlTmFtZSA9IHZhbHVlLmE7XG5cdFx0XHRcdHZhciB2YWx1ZUxpc3QgPSB2YWx1ZS5jO1xuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueUhlbHAoXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKG1heWJlTmFtZS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdUdXBsZSgnICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkbGVuZ3RoKHZhbHVlTGlzdCkpICsgJyknKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBuYW1lID0gbWF5YmVOYW1lLmE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBuYW1lICsgJyDigKYnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0oKSk7XG5cdFx0XHR9XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZCA9IGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0cmV0dXJuIGVsbSRjb3JlJERpY3QkaXNFbXB0eShyZWNvcmQpID8gX1V0aWxzX1R1cGxlMihcblx0XHQyLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCd7fScpXG5cdFx0XHRdKSkgOiBBMyhcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55UmVjb3JkSGVscCxcblx0XHQwLFxuXHRcdCd7ICcsXG5cdFx0ZWxtJGNvcmUkRGljdCR0b0xpc3QocmVjb3JkKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlSZWNvcmRIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChsZW5ndGgsIHN0YXJ0ZXIsIGVudHJpZXMpIHtcblx0XHRpZiAoIWVudHJpZXMuYikge1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdGxlbmd0aCArIDIsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyB9Jylcblx0XHRcdFx0XHRdKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBfbjEgPSBlbnRyaWVzLmE7XG5cdFx0XHR2YXIgZmllbGQgPSBfbjEuYTtcblx0XHRcdHZhciB2YWx1ZSA9IF9uMS5iO1xuXHRcdFx0dmFyIHJlc3QgPSBlbnRyaWVzLmI7XG5cdFx0XHR2YXIgZmllbGRMZW4gPSBlbG0kY29yZSRTdHJpbmckbGVuZ3RoKGZpZWxkKTtcblx0XHRcdHZhciBfbjIgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdFeHRyYVRpbnkodmFsdWUpO1xuXHRcdFx0dmFyIHZhbHVlTGVuID0gX24yLmE7XG5cdFx0XHR2YXIgdmFsdWVIdG1scyA9IF9uMi5iO1xuXHRcdFx0dmFyIG5ld0xlbmd0aCA9ICgobGVuZ3RoICsgZmllbGRMZW4pICsgdmFsdWVMZW4pICsgNTtcblx0XHRcdGlmIChuZXdMZW5ndGggPiA2MCkge1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRsZW5ndGggKyA0LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcsIOKApiB9Jylcblx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfbjMgPSBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55UmVjb3JkSGVscCwgbmV3TGVuZ3RoLCAnLCAnLCByZXN0KTtcblx0XHRcdFx0dmFyIGZpbmFsTGVuZ3RoID0gX24zLmE7XG5cdFx0XHRcdHZhciBvdGhlckh0bWxzID0gX24zLmI7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGZpbmFsTGVuZ3RoLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0YXJ0ZXIpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHB1cnBsZV0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGZpZWxkKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgPSAnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkc3BhbiwgX0xpc3RfTmlsLCB2YWx1ZUh0bWxzKSxcblx0XHRcdFx0XHRcdFx0XHRcdG90aGVySHRtbHMpKSkpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRjb21wb3NlTCA9IEYzKFxuXHRmdW5jdGlvbiAoZywgZiwgeCkge1xuXHRcdHJldHVybiBnKFxuXHRcdFx0Zih4KSk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJFR1cGxlJHNlY29uZCA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHkgPSBfbjAuYjtcblx0cmV0dXJuIHk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldyA9IEYyKFxuXHRmdW5jdGlvbiAobWF5YmVLZXksIGV4cGFuZG8pIHtcblx0XHRzd2l0Y2ggKGV4cGFuZG8uJCkge1xuXHRcdFx0Y2FzZSAnUyc6XG5cdFx0XHRcdHZhciBzdHJpbmdSZXAgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQobWF5YmVLZXkpLFxuXHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlcixcblx0XHRcdFx0XHRcdG1heWJlS2V5LFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRyZWRdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdHJpbmdSZXApXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XSkpKTtcblx0XHRcdGNhc2UgJ1ByaW1pdGl2ZSc6XG5cdFx0XHRcdHZhciBzdHJpbmdSZXAgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQobWF5YmVLZXkpLFxuXHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlcixcblx0XHRcdFx0XHRcdG1heWJlS2V5LFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRibHVlXSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RyaW5nUmVwKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKSk7XG5cdFx0XHRjYXNlICdTZXF1ZW5jZSc6XG5cdFx0XHRcdHZhciBzZXFUeXBlID0gZXhwYW5kby5hO1xuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHZhciB2YWx1ZUxpc3QgPSBleHBhbmRvLmM7XG5cdFx0XHRcdHJldHVybiBBNChlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdTZXF1ZW5jZSwgbWF5YmVLZXksIHNlcVR5cGUsIGlzQ2xvc2VkLCB2YWx1ZUxpc3QpO1xuXHRcdFx0Y2FzZSAnRGljdGlvbmFyeSc6XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5LCBtYXliZUtleSwgaXNDbG9zZWQsIGtleVZhbHVlUGFpcnMpO1xuXHRcdFx0Y2FzZSAnUmVjb3JkJzpcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gZXhwYW5kby5hO1xuXHRcdFx0XHR2YXIgdmFsdWVEaWN0ID0gZXhwYW5kby5iO1xuXHRcdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkLCBtYXliZUtleSwgaXNDbG9zZWQsIHZhbHVlRGljdCk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR2YXIgbWF5YmVOYW1lID0gZXhwYW5kby5hO1xuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHZhciB2YWx1ZUxpc3QgPSBleHBhbmRvLmM7XG5cdFx0XHRcdHJldHVybiBBNChlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3RvciwgbWF5YmVLZXksIG1heWJlTmFtZSwgaXNDbG9zZWQsIHZhbHVlTGlzdCk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3RvciA9IEY0KFxuXHRmdW5jdGlvbiAobWF5YmVLZXksIG1heWJlTmFtZSwgaXNDbG9zZWQsIHZhbHVlTGlzdCkge1xuXHRcdHZhciB0aW55QXJncyA9IEEyKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRBMihlbG0kY29yZSRCYXNpY3MkY29tcG9zZUwsIGVsbSRjb3JlJFR1cGxlJHNlY29uZCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RXh0cmFUaW55KSxcblx0XHRcdHZhbHVlTGlzdCk7XG5cdFx0dmFyIGRlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIF9uNyA9IF9VdGlsc19UdXBsZTIobWF5YmVOYW1lLCB0aW55QXJncyk7XG5cdFx0XHRpZiAoX243LmEuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdGlmICghX243LmIuYikge1xuXHRcdFx0XHRcdHZhciBfbjggPSBfbjcuYTtcblx0XHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJygpJylcblx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBfbjkgPSBfbjcuYTtcblx0XHRcdFx0XHR2YXIgX24xMCA9IF9uNy5iO1xuXHRcdFx0XHRcdHZhciB4ID0gX24xMC5hO1xuXHRcdFx0XHRcdHZhciB4cyA9IF9uMTAuYjtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyggJyksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJHNwYW4sIF9MaXN0X05pbCwgeCksXG5cdFx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRcdFx0XHRcdFx0RjIoXG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoYXJncywgcmVzdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnLCAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkc3BhbiwgX0xpc3RfTmlsLCBhcmdzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3QpKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgKScpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHR4cykpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCFfbjcuYi5iKSB7XG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBfbjcuYS5hO1xuXHRcdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChuYW1lKVxuXHRcdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBfbjcuYS5hO1xuXHRcdFx0XHRcdHZhciBfbjExID0gX243LmI7XG5cdFx0XHRcdFx0dmFyIHggPSBfbjExLmE7XG5cdFx0XHRcdFx0dmFyIHhzID0gX24xMS5iO1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChuYW1lICsgJyAnKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkc3BhbiwgX0xpc3RfTmlsLCB4KSxcblx0XHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdFx0XHRcdFx0XHRGMihcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChhcmdzLCByZXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJHNwYW4sIF9MaXN0X05pbCwgYXJncyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN0KSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0eHMpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KCk7XG5cdFx0dmFyIF9uNCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICghdmFsdWVMaXN0LmIpIHtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJGRpdiwgX0xpc3RfTmlsLCBfTGlzdF9OaWwpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghdmFsdWVMaXN0LmIuYikge1xuXHRcdFx0XHRcdHZhciBlbnRyeSA9IHZhbHVlTGlzdC5hO1xuXHRcdFx0XHRcdHN3aXRjaCAoZW50cnkuJCkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnUyc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSk7XG5cdFx0XHRcdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbCkpO1xuXHRcdFx0XHRcdFx0Y2FzZSAnU2VxdWVuY2UnOlxuXHRcdFx0XHRcdFx0XHR2YXIgc3ViVmFsdWVMaXN0ID0gZW50cnkuYztcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQgPyBBMihlbG0kaHRtbCRIdG1sJGRpdiwgX0xpc3RfTmlsLCBfTGlzdF9OaWwpIDogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTm9uZSwgMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdTZXF1ZW5jZU9wZW4oc3ViVmFsdWVMaXN0KSkpO1xuXHRcdFx0XHRcdFx0Y2FzZSAnRGljdGlvbmFyeSc6XG5cdFx0XHRcdFx0XHRcdHZhciBrZXlWYWx1ZVBhaXJzID0gZW50cnkuYjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQgPyBBMihlbG0kaHRtbCRIdG1sJGRpdiwgX0xpc3RfTmlsLCBfTGlzdF9OaWwpIDogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTm9uZSwgMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5T3BlbihrZXlWYWx1ZVBhaXJzKSkpO1xuXHRcdFx0XHRcdFx0Y2FzZSAnUmVjb3JkJzpcblx0XHRcdFx0XHRcdFx0dmFyIHJlY29yZCA9IGVudHJ5LmI7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0XHRcdGlzQ2xvc2VkID8gQTIoZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSA6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUsIDApLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkT3BlbihyZWNvcmQpKSk7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHR2YXIgc3ViVmFsdWVMaXN0ID0gZW50cnkuYztcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQgPyBBMihlbG0kaHRtbCRIdG1sJGRpdiwgX0xpc3RfTmlsLCBfTGlzdF9OaWwpIDogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTm9uZSwgMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3Rvck9wZW4oc3ViVmFsdWVMaXN0KSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0aXNDbG9zZWQgPyBBMihlbG0kaHRtbCRIdG1sJGRpdiwgX0xpc3RfTmlsLCBfTGlzdF9OaWwpIDogZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3JPcGVuKHZhbHVlTGlzdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSgpO1xuXHRcdHZhciBtYXliZUlzQ2xvc2VkID0gX240LmE7XG5cdFx0dmFyIG9wZW5IdG1sID0gX240LmI7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQobWF5YmVLZXkpLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVG9nZ2xlKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0QTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlciwgbWF5YmVLZXksIG1heWJlSXNDbG9zZWQsIGRlc2NyaXB0aW9uKSksXG5cdFx0XHRcdFx0b3Blbkh0bWxcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3RvckVudHJ5ID0gRjIoXG5cdGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTm9uZSwgaW5kZXgpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldyxcblx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckZnJvbUludChpbmRleCkpLFxuXHRcdFx0XHR2YWx1ZSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3Rvck9wZW4gPSBmdW5jdGlvbiAodmFsdWVMaXN0KSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRfTGlzdF9OaWwsXG5cdFx0QTIoZWxtJGNvcmUkTGlzdCRpbmRleGVkTWFwLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3RvckVudHJ5LCB2YWx1ZUxpc3QpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RGljdGlvbmFyeSA9IEYzKFxuXHRmdW5jdGlvbiAobWF5YmVLZXksIGlzQ2xvc2VkLCBrZXlWYWx1ZVBhaXJzKSB7XG5cdFx0dmFyIHN0YXJ0ZXIgPSAnRGljdCgnICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRsZW5ndGgoa2V5VmFsdWVQYWlycykpICsgJyknKTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChtYXliZUtleSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRUb2dnbGUpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGluZVN0YXJ0ZXIsXG5cdFx0XHRcdFx0XHRtYXliZUtleSxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0YXJ0ZXIpXG5cdFx0XHRcdFx0XHRcdF0pKSksXG5cdFx0XHRcdFx0aXNDbG9zZWQgPyBlbG0kaHRtbCRIdG1sJHRleHQoJycpIDogZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RGljdGlvbmFyeU9wZW4oa2V5VmFsdWVQYWlycylcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5RW50cnkgPSBGMihcblx0ZnVuY3Rpb24gKGluZGV4LCBfbjIpIHtcblx0XHR2YXIga2V5ID0gX24yLmE7XG5cdFx0dmFyIHZhbHVlID0gX24yLmI7XG5cdFx0c3dpdGNoIChrZXkuJCkge1xuXHRcdFx0Y2FzZSAnUyc6XG5cdFx0XHRcdHZhciBzdHJpbmdSZXAgPSBrZXkuYTtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVmFsdWUsIGluZGV4KSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldyxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3Qoc3RyaW5nUmVwKSxcblx0XHRcdFx0XHRcdHZhbHVlKSk7XG5cdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHR2YXIgc3RyaW5nUmVwID0ga2V5LmE7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFZhbHVlLCBpbmRleCksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KHN0cmluZ1JlcCksXG5cdFx0XHRcdFx0XHR2YWx1ZSkpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRLZXksIGluZGV4KSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoJ2tleScpLFxuXHRcdFx0XHRcdFx0XHRcdGtleSkpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVmFsdWUsIGluZGV4KSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoJ3ZhbHVlJyksXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUpKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RGljdGlvbmFyeU9wZW4gPSBmdW5jdGlvbiAoa2V5VmFsdWVQYWlycykge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfTmlsLFxuXHRcdEEyKGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RGljdGlvbmFyeUVudHJ5LCBrZXlWYWx1ZVBhaXJzKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1JlY29yZCA9IEYzKFxuXHRmdW5jdGlvbiAobWF5YmVLZXksIGlzQ2xvc2VkLCByZWNvcmQpIHtcblx0XHR2YXIgX24xID0gaXNDbG9zZWQgPyBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZChyZWNvcmQpLmIsXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJycpLFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKSkgOiBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCd7Jylcblx0XHRcdFx0XSksXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdSZWNvcmRPcGVuKHJlY29yZCksXG5cdFx0XHRBMihcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChcblx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KF9VdGlsc19UdXBsZTApKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnfScpXG5cdFx0XHRcdFx0XSkpKTtcblx0XHR2YXIgc3RhcnQgPSBfbjEuYTtcblx0XHR2YXIgbWlkZGxlID0gX24xLmI7XG5cdFx0dmFyIGVuZCA9IF9uMS5jO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsZWZ0UGFkKG1heWJlS2V5KSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFRvZ2dsZSlcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlcixcblx0XHRcdFx0XHRcdG1heWJlS2V5LFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRzdGFydCkpLFxuXHRcdFx0XHRcdG1pZGRsZSxcblx0XHRcdFx0XHRlbmRcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdSZWNvcmRFbnRyeSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIGZpZWxkID0gX24wLmE7XG5cdHZhciB2YWx1ZSA9IF9uMC5iO1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRGaWVsZChmaWVsZCksXG5cdFx0QTIoXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KGZpZWxkKSxcblx0XHRcdHZhbHVlKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1JlY29yZE9wZW4gPSBmdW5jdGlvbiAocmVjb3JkKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRfTGlzdF9OaWwsXG5cdFx0QTIoXG5cdFx0XHRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1JlY29yZEVudHJ5LFxuXHRcdFx0ZWxtJGNvcmUkRGljdCR0b0xpc3QocmVjb3JkKSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdTZXF1ZW5jZSA9IEY0KFxuXHRmdW5jdGlvbiAobWF5YmVLZXksIHNlcVR5cGUsIGlzQ2xvc2VkLCB2YWx1ZUxpc3QpIHtcblx0XHR2YXIgc3RhcnRlciA9IEEyKFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRzZXFUeXBlVG9TdHJpbmcsXG5cdFx0XHRlbG0kY29yZSRMaXN0JGxlbmd0aCh2YWx1ZUxpc3QpLFxuXHRcdFx0c2VxVHlwZSk7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQobWF5YmVLZXkpLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVG9nZ2xlKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyLFxuXHRcdFx0XHRcdFx0bWF5YmVLZXksXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KGlzQ2xvc2VkKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdGFydGVyKVxuXHRcdFx0XHRcdFx0XHRdKSkpLFxuXHRcdFx0XHRcdGlzQ2xvc2VkID8gZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKSA6IGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1NlcXVlbmNlT3Blbih2YWx1ZUxpc3QpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3U2VxdWVuY2VPcGVuID0gZnVuY3Rpb24gKHZhbHVlcykge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfTmlsLFxuXHRcdEEyKGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3JFbnRyeSwgdmFsdWVzKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRXhwYW5kb01zZyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0V4cGFuZG9Nc2cnLCBhOiBhfTtcbn07XG52YXIgZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzID0gZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5KCdjbGFzc05hbWUnKTtcbnZhciBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkdGl0bGUgPSBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHkoJ3RpdGxlJyk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3TWVzc2FnZSA9IEYzKFxuXHRmdW5jdGlvbiAoY3VycmVudEluZGV4LCBpbmRleCwgbXNnKSB7XG5cdFx0dmFyIG1lc3NhZ2VOYW1lID0gX0RlYnVnZ2VyX21lc3NhZ2VUb1N0cmluZyhtc2cpO1xuXHRcdHZhciBjbGFzc05hbWUgPSBfVXRpbHNfZXEoY3VycmVudEluZGV4LCBpbmRleCkgPyAnZWxtLWRlYnVnZ2VyLWVudHJ5IGVsbS1kZWJ1Z2dlci1lbnRyeS1zZWxlY3RlZCcgOiAnZWxtLWRlYnVnZ2VyLWVudHJ5Jztcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcyhjbGFzc05hbWUpLFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soaW5kZXgpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHRpdGxlKG1lc3NhZ2VOYW1lKSxcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdlbG0tZGVidWdnZXItZW50cnktY29udGVudCcpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChtZXNzYWdlTmFtZSlcblx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2VsbS1kZWJ1Z2dlci1lbnRyeS1pbmRleCcpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaW5kZXgpKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbGF6eTMgPSBfVmlydHVhbERvbV9sYXp5MztcbnZhciBlbG0kaHRtbCRIdG1sJExhenkkbGF6eTMgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRsYXp5MztcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGNvbnNNc2cgPSBGMyhcblx0ZnVuY3Rpb24gKGN1cnJlbnRJbmRleCwgbXNnLCBfbjApIHtcblx0XHR2YXIgaW5kZXggPSBfbjAuYTtcblx0XHR2YXIgcmVzdCA9IF9uMC5iO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0aW5kZXggLSAxLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0QTQoZWxtJGh0bWwkSHRtbCRMYXp5JGxhenkzLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXdNZXNzYWdlLCBjdXJyZW50SW5kZXgsIGluZGV4LCBtc2cpLFxuXHRcdFx0XHRyZXN0KSk7XG5cdH0pO1xudmFyIGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG5vZGUgPSBmdW5jdGlvbiAodGFnKSB7XG5cdHJldHVybiBfVmlydHVhbERvbV9ub2RlKFxuXHRcdF9WaXJ0dWFsRG9tX25vU2NyaXB0KHRhZykpO1xufTtcbnZhciBlbG0kaHRtbCRIdG1sJG5vZGUgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRub2RlO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc3R5bGVzID0gQTMoXG5cdGVsbSRodG1sJEh0bWwkbm9kZSxcblx0J3N0eWxlJyxcblx0X0xpc3RfTmlsLFxuXHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0W1xuXHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdcXG5cXG4uZWxtLWRlYnVnZ2VyLWVudHJ5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWxtLWRlYnVnZ2VyLWVudHJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcXG59XFxuXFxuLmVsbS1kZWJ1Z2dlci1lbnRyeS1zZWxlY3RlZCwgLmVsbS1kZWJ1Z2dlci1lbnRyeS1zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XFxufVxcblxcbi5lbG0tZGVidWdnZXItZW50cnktY29udGVudCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gN2NoKTtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxY2g7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZWxtLWRlYnVnZ2VyLWVudHJ5LWluZGV4IHtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgd2lkdGg6IDVjaDtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgcGFkZGluZy1yaWdodDogMWNoO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuJylcblx0XHRdKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRtYXhTbmFwc2hvdFNpemUgPSA2NDtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkbCA9IF9Kc0FycmF5X2ZvbGRsO1xudmFyIGVsbSRjb3JlJEFycmF5JGZvbGRsID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBiYXNlQ2FzZSwgX24wKSB7XG5cdFx0dmFyIHRyZWUgPSBfbjAuYztcblx0XHR2YXIgdGFpbCA9IF9uMC5kO1xuXHRcdHZhciBoZWxwZXIgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChub2RlLCBhY2MpIHtcblx0XHRcdFx0aWYgKG5vZGUuJCA9PT0gJ1N1YlRyZWUnKSB7XG5cdFx0XHRcdFx0dmFyIHN1YlRyZWUgPSBub2RlLmE7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRsLCBoZWxwZXIsIGFjYywgc3ViVHJlZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlcyA9IG5vZGUuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZGwsIGZ1bmMsIGFjYywgdmFsdWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZGwsXG5cdFx0XHRmdW5jLFxuXHRcdFx0QTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZGwsIGhlbHBlciwgYmFzZUNhc2UsIHRyZWUpLFxuXHRcdFx0dGFpbCk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld1NuYXBzaG90ID0gRjMoXG5cdGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIGluZGV4LCBfbjApIHtcblx0XHR2YXIgbWVzc2FnZXMgPSBfbjAubWVzc2FnZXM7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRBMyhcblx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkZm9sZGwsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc01zZyhjdXJyZW50SW5kZXgpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKGluZGV4IC0gMSwgX0xpc3RfTmlsKSxcblx0XHRcdFx0bWVzc2FnZXMpLmIpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGNvbnNTbmFwc2hvdCA9IEYzKFxuXHRmdW5jdGlvbiAoY3VycmVudEluZGV4LCBzbmFwc2hvdCwgX24wKSB7XG5cdFx0dmFyIGluZGV4ID0gX24wLmE7XG5cdFx0dmFyIHJlc3QgPSBfbjAuYjtcblx0XHR2YXIgbmV4dEluZGV4ID0gaW5kZXggLSBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZTtcblx0XHR2YXIgY3VycmVudEluZGV4SGVscCA9ICgoX1V0aWxzX2NtcChuZXh0SW5kZXgsIGN1cnJlbnRJbmRleCkgPCAxKSAmJiAoX1V0aWxzX2NtcChjdXJyZW50SW5kZXgsIGluZGV4KSA8IDApKSA/IGN1cnJlbnRJbmRleCA6ICgtMSk7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRpbmRleCAtIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0QTQoZWxtJGh0bWwkSHRtbCRMYXp5JGxhenkzLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXdTbmFwc2hvdCwgY3VycmVudEluZGV4SGVscCwgaW5kZXgsIHNuYXBzaG90KSxcblx0XHRcdFx0cmVzdCkpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRBcnJheSRsZW5ndGggPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBsZW4gPSBfbjAuYTtcblx0cmV0dXJuIGxlbjtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3U25hcHNob3RzID0gRjIoXG5cdGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIHNuYXBzaG90cykge1xuXHRcdHZhciBoaWdoSW5kZXggPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSAqIGVsbSRjb3JlJEFycmF5JGxlbmd0aChzbmFwc2hvdHMpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0QTMoXG5cdFx0XHRcdGVsbSRjb3JlJEFycmF5JGZvbGRyLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGNvbnNTbmFwc2hvdChjdXJyZW50SW5kZXgpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKGhpZ2hJbmRleCwgX0xpc3RfTmlsKSxcblx0XHRcdFx0c25hcHNob3RzKS5iKTtcblx0fSk7XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbGF6eTIgPSBfVmlydHVhbERvbV9sYXp5MjtcbnZhciBlbG0kaHRtbCRIdG1sJExhenkkbGF6eTIgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRsYXp5MjtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXcgPSBGMihcblx0ZnVuY3Rpb24gKG1heWJlSW5kZXgsIF9uMCkge1xuXHRcdHZhciBzbmFwc2hvdHMgPSBfbjAuc25hcHNob3RzO1xuXHRcdHZhciByZWNlbnQgPSBfbjAucmVjZW50O1xuXHRcdHZhciBudW1NZXNzYWdlcyA9IF9uMC5udW1NZXNzYWdlcztcblx0XHR2YXIgX24xID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKG1heWJlSW5kZXguJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKC0xLCAnY2FsYygxMDAlIC0gMjRweCknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpID0gbWF5YmVJbmRleC5hO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihpLCAnY2FsYygxMDAlIC0gNTRweCknKTtcblx0XHRcdH1cblx0XHR9KCk7XG5cdFx0dmFyIGluZGV4ID0gX24xLmE7XG5cdFx0dmFyIGhlaWdodCA9IF9uMS5iO1xuXHRcdHZhciBuZXdTdHVmZiA9IEEzKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc01zZyhpbmRleCksXG5cdFx0XHRfVXRpbHNfVHVwbGUyKG51bU1lc3NhZ2VzIC0gMSwgX0xpc3RfTmlsKSxcblx0XHRcdHJlY2VudC5tZXNzYWdlcykuYjtcblx0XHR2YXIgb2xkU3R1ZmYgPSBBMyhlbG0kaHRtbCRIdG1sJExhenkkbGF6eTIsIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld1NuYXBzaG90cywgaW5kZXgsIHNuYXBzaG90cyk7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ2VsbS1kZWJ1Z2dlci1zaWRlYmFyJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnMTAwJScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ292ZXJmbG93LXknLCAnYXV0bycpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsIGhlaWdodClcblx0XHRcdFx0XSksXG5cdFx0XHRBMihcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHN0eWxlcyxcblx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRjb25zLCBvbGRTdHVmZiwgbmV3U3R1ZmYpKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kSnVtcCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0p1bXAnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRyZXN1bWVTdHlsZSA9ICdcXG5cXG4uZWxtLWRlYnVnZ2VyLXJlc3VtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWxtLWRlYnVnZ2VyLXJlc3VtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxufVxcblxcbic7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3UmVzdW1lQnV0dG9uID0gZnVuY3Rpb24gKG1heWJlSW5kZXgpIHtcblx0aWYgKG1heWJlSW5kZXguJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0cmV0dXJuIGVsbSRodG1sJEh0bWwkdGV4dCgnJyk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUmVzdW1lKSxcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2VsbS1kZWJ1Z2dlci1yZXN1bWUnKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnUmVzdW1lJyksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRub2RlLFxuXHRcdFx0XHRcdCdzdHlsZScsXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kcmVzdW1lU3R5bGUpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld1RleHRCdXR0b24gPSBGMihcblx0ZnVuY3Rpb24gKG1zZywgbGFiZWwpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKG1zZyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChsYWJlbClcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHBsYXlCdXR0b24gPSBmdW5jdGlvbiAobWF5YmVJbmRleCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3RleHQtYWxpZ24nLCAnY2VudGVyJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDUwLCA1MCwgNTApJylcblx0XHRcdF0pLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3UmVzdW1lQnV0dG9uKG1heWJlSW5kZXgpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnMjRweCcpLFxuXHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGluZS1oZWlnaHQnLCAnMjRweCcpLFxuXHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1zaXplJywgJzEycHgnKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3VGV4dEJ1dHRvbiwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRJbXBvcnQsICdJbXBvcnQnKSxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnIC8gJyksXG5cdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdUZXh0QnV0dG9uLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEV4cG9ydCwgJ0V4cG9ydCcpXG5cdFx0XHRcdFx0XSkpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld1NpZGViYXIgPSBGMihcblx0ZnVuY3Rpb24gKHN0YXRlLCBoaXN0b3J5KSB7XG5cdFx0dmFyIG1heWJlSW5kZXggPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoc3RhdGUuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gc3RhdGUuYTtcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJEp1c3QoaW5kZXgpO1xuXHRcdFx0fVxuXHRcdH0oKTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2Rpc3BsYXknLCAnYmxvY2snKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmbG9hdCcsICdsZWZ0JyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnMzBjaCcpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAnd2hpdGUnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig2MSwgNjEsIDYxKScpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRKdW1wLFxuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkdmlldywgbWF5YmVJbmRleCwgaGlzdG9yeSkpLFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kcGxheUJ1dHRvbihtYXliZUluZGV4KVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kcG9wb3V0VmlldyA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIGhpc3RvcnkgPSBfbjAuaGlzdG9yeTtcblx0dmFyIHN0YXRlID0gX24wLnN0YXRlO1xuXHR2YXIgZXhwYW5kbyA9IF9uMC5leHBhbmRvO1xuXHRyZXR1cm4gQTMoXG5cdFx0ZWxtJGh0bWwkSHRtbCRub2RlLFxuXHRcdCdib2R5Jyxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ21hcmdpbicsICcwJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmcnLCAnMCcpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtZmFtaWx5JywgJ21vbm9zcGFjZScpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdvdmVyZmxvdycsICdhdXRvJylcblx0XHRcdF0pLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3U2lkZWJhciwgc3RhdGUsIGhpc3RvcnkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRXhwYW5kb01zZyxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdkaXNwbGF5JywgJ2Jsb2NrJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2Zsb2F0JywgJ2xlZnQnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnY2FsYygxMDAlIC0gMzBjaCknKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWFyZ2luJywgJzAnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnb3ZlcmZsb3cnLCAnYXV0bycpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjdXJzb3InLCAnZGVmYXVsdCcpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldywgZWxtJGNvcmUkTWF5YmUkTm90aGluZywgZXhwYW5kbylcblx0XHRcdFx0XHRcdF0pKSlcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja0FsbCA9IHskOiAnQmxvY2tBbGwnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTW9zdCA9IHskOiAnQmxvY2tNb3N0J307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja05vbmUgPSB7JDogJ0Jsb2NrTm9uZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdG9CbG9ja2VyVHlwZSA9IEYyKFxuXHRmdW5jdGlvbiAoaXNQYXVzZWQsIHN0YXRlKSB7XG5cdFx0c3dpdGNoIChzdGF0ZS4kKSB7XG5cdFx0XHRjYXNlICdOb25lJzpcblx0XHRcdFx0cmV0dXJuIGlzUGF1c2VkID8gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja0FsbCA6IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tOb25lO1xuXHRcdFx0Y2FzZSAnQmFkTWV0YWRhdGEnOlxuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja01vc3Q7XG5cdFx0XHRjYXNlICdCYWRJbXBvcnQnOlxuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja01vc3Q7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja01vc3Q7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdG9CbG9ja2VyVHlwZSxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGlzUGF1c2VkKG1vZGVsLnN0YXRlKSxcblx0XHRtb2RlbC5vdmVybGF5KTtcbn07XG52YXIgZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluID0geyQ6ICdSQkVtcHR5X2VsbV9idWlsdGluJ307XG52YXIgZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4gPSBGNShcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQsIGUpIHtcblx0XHRyZXR1cm4geyQ6ICdSQk5vZGVfZWxtX2J1aWx0aW4nLCBhOiBhLCBiOiBiLCBjOiBjLCBkOiBkLCBlOiBlfTtcblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIGRpY3QpIHtcblx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdEEyKGZ1bmMsIGtleSwgdmFsdWUpLFxuXHRcdFx0XHRBMihlbG0kY29yZSREaWN0JG1hcCwgZnVuYywgbGVmdCksXG5cdFx0XHRcdEEyKGVsbSRjb3JlJERpY3QkbWFwLCBmdW5jLCByaWdodCkpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRzaXplSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgZGljdCkge1xuXHRcdHNpemVIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIG47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdFx0dmFyIHJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0XHR2YXIgJHRlbXAkbiA9IEEyKGVsbSRjb3JlJERpY3Qkc2l6ZUhlbHAsIG4gKyAxLCByaWdodCksXG5cdFx0XHRcdFx0JHRlbXAkZGljdCA9IGxlZnQ7XG5cdFx0XHRcdG4gPSAkdGVtcCRuO1xuXHRcdFx0XHRkaWN0ID0gJHRlbXAkZGljdDtcblx0XHRcdFx0Y29udGludWUgc2l6ZUhlbHA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JHNpemUgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkRGljdCRzaXplSGVscCwgMCwgZGljdCk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAgPSBGMihcblx0ZnVuY3Rpb24gKGlzT3V0ZXIsIGV4cGFuZG8pIHtcblx0XHRzd2l0Y2ggKGV4cGFuZG8uJCkge1xuXHRcdFx0Y2FzZSAnUyc6XG5cdFx0XHRcdHJldHVybiBleHBhbmRvO1xuXHRcdFx0Y2FzZSAnUHJpbWl0aXZlJzpcblx0XHRcdFx0cmV0dXJuIGV4cGFuZG87XG5cdFx0XHRjYXNlICdTZXF1ZW5jZSc6XG5cdFx0XHRcdHZhciBzZXFUeXBlID0gZXhwYW5kby5hO1xuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHZhciBpdGVtcyA9IGV4cGFuZG8uYztcblx0XHRcdFx0cmV0dXJuIGlzT3V0ZXIgPyBBMyhcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlLFxuXHRcdFx0XHRcdHNlcVR5cGUsXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAoZmFsc2UpLFxuXHRcdFx0XHRcdFx0aXRlbXMpKSA6ICgoZWxtJGNvcmUkTGlzdCRsZW5ndGgoaXRlbXMpIDw9IDgpID8gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXF1ZW5jZSwgc2VxVHlwZSwgZmFsc2UsIGl0ZW1zKSA6IGV4cGFuZG8pO1xuXHRcdFx0Y2FzZSAnRGljdGlvbmFyeSc6XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHJldHVybiBpc091dGVyID8gQTIoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LFxuXHRcdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoX24xKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBrID0gX24xLmE7XG5cdFx0XHRcdFx0XHRcdHZhciB2ID0gX24xLmI7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscCwgZmFsc2UsIHYpKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzKSkgOiAoKGVsbSRjb3JlJExpc3QkbGVuZ3RoKGtleVZhbHVlUGFpcnMpIDw9IDgpID8gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LCBmYWxzZSwga2V5VmFsdWVQYWlycykgOiBleHBhbmRvKTtcblx0XHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGVudHJpZXMgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHJldHVybiBpc091dGVyID8gQTIoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JG1hcCxcblx0XHRcdFx0XHRcdEYyKFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoX24yLCB2KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAsIGZhbHNlLCB2KTtcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRlbnRyaWVzKSkgOiAoKGVsbSRjb3JlJERpY3Qkc2l6ZShlbnRyaWVzKSA8PSA0KSA/IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUmVjb3JkLCBmYWxzZSwgZW50cmllcykgOiBleHBhbmRvKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBtYXliZU5hbWUgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0dmFyIGFyZ3MgPSBleHBhbmRvLmM7XG5cdFx0XHRcdHJldHVybiBpc091dGVyID8gQTMoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRtYXliZU5hbWUsXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAoZmFsc2UpLFxuXHRcdFx0XHRcdFx0YXJncykpIDogKChlbG0kY29yZSRMaXN0JGxlbmd0aChhcmdzKSA8PSA0KSA/IEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kQ29uc3RydWN0b3IsIG1heWJlTmFtZSwgZmFsc2UsIGFyZ3MpIDogZXhwYW5kbyk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGluaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAsXG5cdFx0dHJ1ZSxcblx0XHRfRGVidWdnZXJfaW5pdCh2YWx1ZSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JEhpc3RvcnkgPSBGMyhcblx0ZnVuY3Rpb24gKHNuYXBzaG90cywgcmVjZW50LCBudW1NZXNzYWdlcykge1xuXHRcdHJldHVybiB7bnVtTWVzc2FnZXM6IG51bU1lc3NhZ2VzLCByZWNlbnQ6IHJlY2VudCwgc25hcHNob3RzOiBzbmFwc2hvdHN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFJlY2VudEhpc3RvcnkgPSBGMyhcblx0ZnVuY3Rpb24gKG1vZGVsLCBtZXNzYWdlcywgbnVtTWVzc2FnZXMpIHtcblx0XHRyZXR1cm4ge21lc3NhZ2VzOiBtZXNzYWdlcywgbW9kZWw6IG1vZGVsLCBudW1NZXNzYWdlczogbnVtTWVzc2FnZXN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVtcHR5ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdHJldHVybiBBMyhcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JEhpc3RvcnksXG5cdFx0ZWxtJGNvcmUkQXJyYXkkZW1wdHksXG5cdFx0QTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRSZWNlbnRIaXN0b3J5LCBtb2RlbCwgX0xpc3RfTmlsLCAwKSxcblx0XHQwKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSdW5uaW5nID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUnVubmluZycsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRFcnJvciA9IEYyKFxuXHRmdW5jdGlvbiAobWVzc2FnZSwgcHJvYmxlbXMpIHtcblx0XHRyZXR1cm4ge21lc3NhZ2U6IG1lc3NhZ2UsIHByb2JsZW1zOiBwcm9ibGVtc307XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJE1ldGFkYXRhID0gRjIoXG5cdGZ1bmN0aW9uICh2ZXJzaW9ucywgdHlwZXMpIHtcblx0XHRyZXR1cm4ge3R5cGVzOiB0eXBlcywgdmVyc2lvbnM6IHZlcnNpb25zfTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVHlwZXMgPSBGMyhcblx0ZnVuY3Rpb24gKG1lc3NhZ2UsIGFsaWFzZXMsIHVuaW9ucykge1xuXHRcdHJldHVybiB7YWxpYXNlczogYWxpYXNlcywgbWVzc2FnZTogbWVzc2FnZSwgdW5pb25zOiB1bmlvbnN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRBbGlhcyA9IEYyKFxuXHRmdW5jdGlvbiAoYXJncywgdGlwZSkge1xuXHRcdHJldHVybiB7YXJnczogYXJncywgdGlwZTogdGlwZX07XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGxpc3QgPSBfSnNvbl9kZWNvZGVMaXN0O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZUFsaWFzID0gQTMoXG5cdGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcDIsXG5cdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJEFsaWFzLFxuXHRBMihcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCxcblx0XHQnYXJncycsXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdChlbG0kanNvbiRKc29uJERlY29kZSRzdHJpbmcpKSxcblx0QTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICd0eXBlJywgZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVW5pb24gPSBGMihcblx0ZnVuY3Rpb24gKGFyZ3MsIHRhZ3MpIHtcblx0XHRyZXR1cm4ge2FyZ3M6IGFyZ3MsIHRhZ3M6IHRhZ3N9O1xuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JGVtcHR5ID0gZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xudmFyIGVsbSRjb3JlJERpY3QkQmxhY2sgPSB7JDogJ0JsYWNrJ307XG52YXIgZWxtJGNvcmUkQmFzaWNzJGNvbXBhcmUgPSBfVXRpbHNfY29tcGFyZTtcbnZhciBlbG0kY29yZSREaWN0JFJlZCA9IHskOiAnUmVkJ307XG52YXIgZWxtJGNvcmUkRGljdCRiYWxhbmNlID0gRjUoXG5cdGZ1bmN0aW9uIChjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQpIHtcblx0XHRpZiAoKHJpZ2h0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAocmlnaHQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBfbjEgPSByaWdodC5hO1xuXHRcdFx0dmFyIHJLID0gcmlnaHQuYjtcblx0XHRcdHZhciByViA9IHJpZ2h0LmM7XG5cdFx0XHR2YXIgckxlZnQgPSByaWdodC5kO1xuXHRcdFx0dmFyIHJSaWdodCA9IHJpZ2h0LmU7XG5cdFx0XHRpZiAoKGxlZnQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChsZWZ0LmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdHZhciBfbjMgPSBsZWZ0LmE7XG5cdFx0XHRcdHZhciBsSyA9IGxlZnQuYjtcblx0XHRcdFx0dmFyIGxWID0gbGVmdC5jO1xuXHRcdFx0XHR2YXIgbExlZnQgPSBsZWZ0LmQ7XG5cdFx0XHRcdHZhciBsUmlnaHQgPSBsZWZ0LmU7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJlZCxcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIHJLLCByViwgckxlZnQsIHJSaWdodCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdHJLLFxuXHRcdFx0XHRcdHJWLFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwga2V5LCB2YWx1ZSwgbGVmdCwgckxlZnQpLFxuXHRcdFx0XHRcdHJSaWdodCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICgoKChsZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobGVmdC5hLiQgPT09ICdSZWQnKSkgJiYgKGxlZnQuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChsZWZ0LmQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdFx0dmFyIF9uNSA9IGxlZnQuYTtcblx0XHRcdFx0dmFyIGxLID0gbGVmdC5iO1xuXHRcdFx0XHR2YXIgbFYgPSBsZWZ0LmM7XG5cdFx0XHRcdHZhciBfbjYgPSBsZWZ0LmQ7XG5cdFx0XHRcdHZhciBfbjcgPSBfbjYuYTtcblx0XHRcdFx0dmFyIGxsSyA9IF9uNi5iO1xuXHRcdFx0XHR2YXIgbGxWID0gX242LmM7XG5cdFx0XHRcdHZhciBsbExlZnQgPSBfbjYuZDtcblx0XHRcdFx0dmFyIGxsUmlnaHQgPSBfbjYuZTtcblx0XHRcdFx0dmFyIGxSaWdodCA9IGxlZnQuZTtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUmVkLFxuXHRcdFx0XHRcdGxLLFxuXHRcdFx0XHRcdGxWLFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JEJsYWNrLCBsbEssIGxsViwgbGxMZWZ0LCBsbFJpZ2h0KSxcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRCbGFjaywga2V5LCB2YWx1ZSwgbFJpZ2h0LCByaWdodCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRpbnNlcnRIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBkaWN0KSB7XG5cdFx0aWYgKGRpY3QuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRyZXR1cm4gQTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBrZXksIHZhbHVlLCBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBuQ29sb3IgPSBkaWN0LmE7XG5cdFx0XHR2YXIgbktleSA9IGRpY3QuYjtcblx0XHRcdHZhciBuVmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbkxlZnQgPSBkaWN0LmQ7XG5cdFx0XHR2YXIgblJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0dmFyIF9uMSA9IEEyKGVsbSRjb3JlJEJhc2ljcyRjb21wYXJlLCBrZXksIG5LZXkpO1xuXHRcdFx0c3dpdGNoIChfbjEuJCkge1xuXHRcdFx0XHRjYXNlICdMVCc6XG5cdFx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0bkNvbG9yLFxuXHRcdFx0XHRcdFx0bktleSxcblx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdEEzKGVsbSRjb3JlJERpY3QkaW5zZXJ0SGVscCwga2V5LCB2YWx1ZSwgbkxlZnQpLFxuXHRcdFx0XHRcdFx0blJpZ2h0KTtcblx0XHRcdFx0Y2FzZSAnRVEnOlxuXHRcdFx0XHRcdHJldHVybiBBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgbkNvbG9yLCBuS2V5LCB2YWx1ZSwgbkxlZnQsIG5SaWdodCk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0bkNvbG9yLFxuXHRcdFx0XHRcdFx0bktleSxcblx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdG5MZWZ0LFxuXHRcdFx0XHRcdFx0QTMoZWxtJGNvcmUkRGljdCRpbnNlcnRIZWxwLCBrZXksIHZhbHVlLCBuUmlnaHQpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkaW5zZXJ0ID0gRjMoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBkaWN0KSB7XG5cdFx0dmFyIF9uMCA9IEEzKGVsbSRjb3JlJERpY3QkaW5zZXJ0SGVscCwga2V5LCB2YWx1ZSwgZGljdCk7XG5cdFx0aWYgKChfbjAuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfbjAuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBfbjEgPSBfbjAuYTtcblx0XHRcdHZhciBrID0gX24wLmI7XG5cdFx0XHR2YXIgdiA9IF9uMC5jO1xuXHRcdFx0dmFyIGwgPSBfbjAuZDtcblx0XHRcdHZhciByID0gX24wLmU7XG5cdFx0XHRyZXR1cm4gQTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIGssIHYsIGwsIHIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgeCA9IF9uMDtcblx0XHRcdHJldHVybiB4O1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRmcm9tTGlzdCA9IGZ1bmN0aW9uIChhc3NvY3MpIHtcblx0cmV0dXJuIEEzKFxuXHRcdGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0RjIoXG5cdFx0XHRmdW5jdGlvbiAoX24wLCBkaWN0KSB7XG5cdFx0XHRcdHZhciBrZXkgPSBfbjAuYTtcblx0XHRcdFx0dmFyIHZhbHVlID0gX24wLmI7XG5cdFx0XHRcdHJldHVybiBBMyhlbG0kY29yZSREaWN0JGluc2VydCwga2V5LCB2YWx1ZSwgZGljdCk7XG5cdFx0XHR9KSxcblx0XHRlbG0kY29yZSREaWN0JGVtcHR5LFxuXHRcdGFzc29jcyk7XG59O1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGtleVZhbHVlUGFpcnMgPSBfSnNvbl9kZWNvZGVLZXlWYWx1ZVBhaXJzO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGRpY3QgPSBmdW5jdGlvbiAoZGVjb2Rlcikge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwLFxuXHRcdGVsbSRjb3JlJERpY3QkZnJvbUxpc3QsXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUka2V5VmFsdWVQYWlycyhkZWNvZGVyKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZVVuaW9uID0gQTMoXG5cdGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcDIsXG5cdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFVuaW9uLFxuXHRBMihcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCxcblx0XHQnYXJncycsXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdChlbG0kanNvbiRKc29uJERlY29kZSRzdHJpbmcpKSxcblx0QTIoXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsXG5cdFx0J3RhZ3MnLFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGRpY3QoXG5cdFx0XHRlbG0kanNvbiRKc29uJERlY29kZSRsaXN0KGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZykpKSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMyA9IF9Kc29uX21hcDM7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlVHlwZXMgPSBBNChcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMyxcblx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVHlwZXMsXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAnbWVzc2FnZScsIGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZyksXG5cdEEyKFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLFxuXHRcdCdhbGlhc2VzJyxcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRkaWN0KGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZUFsaWFzKSksXG5cdEEyKFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLFxuXHRcdCd1bmlvbnMnLFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGRpY3QoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlVW5pb24pKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmVyc2lvbnMgPSBmdW5jdGlvbiAoZWxtKSB7XG5cdHJldHVybiB7ZWxtOiBlbG19O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVWZXJzaW9ucyA9IEEyKFxuXHRlbG0kanNvbiRKc29uJERlY29kZSRtYXAsXG5cdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFZlcnNpb25zLFxuXHRBMihlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCwgJ2VsbScsIGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZykpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZXIgPSBBMyhcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkTWV0YWRhdGEsXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAndmVyc2lvbnMnLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVWZXJzaW9ucyksXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAndHlwZXMnLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVUeXBlcykpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2JsZW1UeXBlID0gRjIoXG5cdGZ1bmN0aW9uIChuYW1lLCBwcm9ibGVtcykge1xuXHRcdHJldHVybiB7bmFtZTogbmFtZSwgcHJvYmxlbXM6IHByb2JsZW1zfTtcblx0fSk7XG52YXIgZWxtJGNvcmUkU3RyaW5nJGNvbnRhaW5zID0gX1N0cmluZ19jb250YWlucztcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRoYXNQcm9ibGVtID0gRjIoXG5cdGZ1bmN0aW9uICh0aXBlLCBfbjApIHtcblx0XHR2YXIgcHJvYmxlbSA9IF9uMC5hO1xuXHRcdHZhciB0b2tlbiA9IF9uMC5iO1xuXHRcdHJldHVybiBBMihlbG0kY29yZSRTdHJpbmckY29udGFpbnMsIHRva2VuLCB0aXBlKSA/IGVsbSRjb3JlJE1heWJlJEp1c3QocHJvYmxlbSkgOiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSREZWNvZGVyID0geyQ6ICdEZWNvZGVyJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRnVuY3Rpb24gPSB7JDogJ0Z1bmN0aW9uJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUHJvY2VzcyA9IHskOiAnUHJvY2Vzcyd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2dyYW0gPSB7JDogJ1Byb2dyYW0nfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRSZXF1ZXN0ID0geyQ6ICdSZXF1ZXN0J307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkU29ja2V0ID0geyQ6ICdTb2NrZXQnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRUYXNrID0geyQ6ICdUYXNrJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmlydHVhbERvbSA9IHskOiAnVmlydHVhbERvbSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJHByb2JsZW1UYWJsZSA9IF9MaXN0X2Zyb21BcnJheShcblx0W1xuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRnVuY3Rpb24sICctPicpLFxuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRGVjb2RlciwgJ0pzb24uRGVjb2RlLkRlY29kZXInKSxcblx0XHRfVXRpbHNfVHVwbGUyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFRhc2ssICdUYXNrLlRhc2snKSxcblx0XHRfVXRpbHNfVHVwbGUyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2Nlc3MsICdQcm9jZXNzLklkJyksXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRTb2NrZXQsICdXZWJTb2NrZXQuTG93TGV2ZWwuV2ViU29ja2V0JyksXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRSZXF1ZXN0LCAnSHR0cC5SZXF1ZXN0JyksXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRQcm9ncmFtLCAnUGxhdGZvcm0uUHJvZ3JhbScpLFxuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmlydHVhbERvbSwgJ1ZpcnR1YWxEb20uTm9kZScpLFxuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmlydHVhbERvbSwgJ1ZpcnR1YWxEb20uQXR0cmlidXRlJylcblx0XSk7XG52YXIgZWxtJGNvcmUkTGlzdCRtYXliZUNvbnMgPSBGMyhcblx0ZnVuY3Rpb24gKGYsIG14LCB4cykge1xuXHRcdHZhciBfbjAgPSBmKG14KTtcblx0XHRpZiAoX24wLiQgPT09ICdKdXN0Jykge1xuXHRcdFx0dmFyIHggPSBfbjAuYTtcblx0XHRcdHJldHVybiBBMihlbG0kY29yZSRMaXN0JGNvbnMsIHgsIHhzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHhzO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRmaWx0ZXJNYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIHhzKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdGVsbSRjb3JlJExpc3QkbWF5YmVDb25zKGYpLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRmaW5kUHJvYmxlbXMgPSBmdW5jdGlvbiAodGlwZSkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGNvcmUkTGlzdCRmaWx0ZXJNYXAsXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaGFzUHJvYmxlbSh0aXBlKSxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRwcm9ibGVtVGFibGUpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjb2xsZWN0QmFkQWxpYXNlcyA9IEYzKFxuXHRmdW5jdGlvbiAobmFtZSwgX24wLCBsaXN0KSB7XG5cdFx0dmFyIHRpcGUgPSBfbjAudGlwZTtcblx0XHR2YXIgX24xID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZmluZFByb2JsZW1zKHRpcGUpO1xuXHRcdGlmICghX24xLmIpIHtcblx0XHRcdHJldHVybiBsaXN0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcHJvYmxlbXMgPSBfbjE7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUHJvYmxlbVR5cGUsIG5hbWUsIHByb2JsZW1zKSxcblx0XHRcdFx0bGlzdCk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JHZhbHVlcyA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHJldHVybiBBMyhcblx0XHRlbG0kY29yZSREaWN0JGZvbGRyLFxuXHRcdEYzKFxuXHRcdFx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIHZhbHVlTGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkTGlzdCRjb25zLCB2YWx1ZSwgdmFsdWVMaXN0KTtcblx0XHRcdH0pLFxuXHRcdF9MaXN0X05pbCxcblx0XHRkaWN0KTtcbn07XG52YXIgZWxtJGNvcmUkTGlzdCRhcHBlbmQgPSBGMihcblx0ZnVuY3Rpb24gKHhzLCB5cykge1xuXHRcdGlmICgheXMuYikge1xuXHRcdFx0cmV0dXJuIHhzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkTGlzdCRmb2xkciwgZWxtJGNvcmUkTGlzdCRjb25zLCB5cywgeHMpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRjb25jYXQgPSBmdW5jdGlvbiAobGlzdHMpIHtcblx0cmV0dXJuIEEzKGVsbSRjb3JlJExpc3QkZm9sZHIsIGVsbSRjb3JlJExpc3QkYXBwZW5kLCBfTGlzdF9OaWwsIGxpc3RzKTtcbn07XG52YXIgZWxtJGNvcmUkTGlzdCRjb25jYXRNYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIGxpc3QpIHtcblx0XHRyZXR1cm4gZWxtJGNvcmUkTGlzdCRjb25jYXQoXG5cdFx0XHRBMihlbG0kY29yZSRMaXN0JG1hcCwgZiwgbGlzdCkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjb2xsZWN0QmFkVW5pb25zID0gRjMoXG5cdGZ1bmN0aW9uIChuYW1lLCBfbjAsIGxpc3QpIHtcblx0XHR2YXIgdGFncyA9IF9uMC50YWdzO1xuXHRcdHZhciBfbjEgPSBBMihcblx0XHRcdGVsbSRjb3JlJExpc3QkY29uY2F0TWFwLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZmluZFByb2JsZW1zLFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25jYXQoXG5cdFx0XHRcdGVsbSRjb3JlJERpY3QkdmFsdWVzKHRhZ3MpKSk7XG5cdFx0aWYgKCFfbjEuYikge1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwcm9ibGVtcyA9IF9uMTtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRQcm9ibGVtVHlwZSwgbmFtZSwgcHJvYmxlbXMpLFxuXHRcdFx0XHRsaXN0KTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkZm9sZGwgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGFjYywgZGljdCkge1xuXHRcdGZvbGRsOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IGRpY3QuYztcblx0XHRcdFx0dmFyIGxlZnQgPSBkaWN0LmQ7XG5cdFx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdFx0dmFyICR0ZW1wJGZ1bmMgPSBmdW5jLFxuXHRcdFx0XHRcdCR0ZW1wJGFjYyA9IEEzKFxuXHRcdFx0XHRcdGZ1bmMsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdEEzKGVsbSRjb3JlJERpY3QkZm9sZGwsIGZ1bmMsIGFjYywgbGVmdCkpLFxuXHRcdFx0XHRcdCR0ZW1wJGRpY3QgPSByaWdodDtcblx0XHRcdFx0ZnVuYyA9ICR0ZW1wJGZ1bmM7XG5cdFx0XHRcdGFjYyA9ICR0ZW1wJGFjYztcblx0XHRcdFx0ZGljdCA9ICR0ZW1wJGRpY3Q7XG5cdFx0XHRcdGNvbnRpbnVlIGZvbGRsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaXNQb3J0YWJsZSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHR5cGVzID0gX24wLnR5cGVzO1xuXHR2YXIgYmFkQWxpYXNlcyA9IEEzKGVsbSRjb3JlJERpY3QkZm9sZGwsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNvbGxlY3RCYWRBbGlhc2VzLCBfTGlzdF9OaWwsIHR5cGVzLmFsaWFzZXMpO1xuXHR2YXIgX24xID0gQTMoZWxtJGNvcmUkRGljdCRmb2xkbCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY29sbGVjdEJhZFVuaW9ucywgYmFkQWxpYXNlcywgdHlwZXMudW5pb25zKTtcblx0aWYgKCFfbjEuYikge1xuXHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBwcm9ibGVtcyA9IF9uMTtcblx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJEVycm9yLCB0eXBlcy5tZXNzYWdlLCBwcm9ibGVtcykpO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHR2YXIgX24wID0gQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZGVjb2RlVmFsdWUsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZXIsIHZhbHVlKTtcblx0aWYgKF9uMC4kID09PSAnRXJyJykge1xuXHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKFxuXHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRXJyb3IsICdUaGUgY29tcGlsZXIgaXMgZ2VuZXJhdGluZyBiYWQgbWV0YWRhdGEuIFRoaXMgaXMgYSBjb21waWxlciBidWchJywgX0xpc3RfTmlsKSk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIG1ldGFkYXRhID0gX24wLmE7XG5cdFx0dmFyIF9uMSA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlzUG9ydGFibGUobWV0YWRhdGEpO1xuXHRcdGlmIChfbjEuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JE9rKG1ldGFkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yID0gX24xLmE7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkTm9uZSA9IHskOiAnTm9uZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkbm9uZSA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkTm9uZTtcbnZhciBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbWFwID0gX1BsYXRmb3JtX21hcDtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBJbml0ID0gRjQoXG5cdGZ1bmN0aW9uIChtZXRhZGF0YSwgcG9wb3V0LCBpbml0LCBmbGFncykge1xuXHRcdHZhciBfbjAgPSBpbml0KGZsYWdzKTtcblx0XHR2YXIgdXNlck1vZGVsID0gX24wLmE7XG5cdFx0dmFyIHVzZXJDb21tYW5kcyA9IF9uMC5iO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0e1xuXHRcdFx0XHRleHBhbmRvOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGluaXQodXNlck1vZGVsKSxcblx0XHRcdFx0aGlzdG9yeTogZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRlbXB0eSh1c2VyTW9kZWwpLFxuXHRcdFx0XHRtZXRhZGF0YTogZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlKG1ldGFkYXRhKSxcblx0XHRcdFx0b3ZlcmxheTogZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRub25lLFxuXHRcdFx0XHRwb3BvdXQ6IHBvcG91dCxcblx0XHRcdFx0c3RhdGU6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUnVubmluZyh1c2VyTW9kZWwpXG5cdFx0XHR9LFxuXHRcdFx0QTIoZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnLCB1c2VyQ29tbWFuZHMpKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRMYXRlc3RNb2RlbCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRpZiAoc3RhdGUuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0dmFyIG1vZGVsID0gc3RhdGUuYTtcblx0XHRyZXR1cm4gbW9kZWw7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIG1vZGVsID0gc3RhdGUuYztcblx0XHRyZXR1cm4gbW9kZWw7XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkUGxhdGZvcm0kU3ViJG1hcCA9IF9QbGF0Zm9ybV9tYXA7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwU3VicyA9IEYyKFxuXHRmdW5jdGlvbiAoc3Vic2NyaXB0aW9ucywgbW9kZWwpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRTdWIkbWFwLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnLFxuXHRcdFx0c3Vic2NyaXB0aW9ucyhcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRMYXRlc3RNb2RlbChtb2RlbC5zdGF0ZSkpKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRnZXQgPSBGMihcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCkge1xuXHRcdGdldDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKGRpY3QuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGtleSA9IGRpY3QuYjtcblx0XHRcdFx0dmFyIHZhbHVlID0gZGljdC5jO1xuXHRcdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdFx0dmFyIHJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0XHR2YXIgX24xID0gQTIoZWxtJGNvcmUkQmFzaWNzJGNvbXBhcmUsIHRhcmdldEtleSwga2V5KTtcblx0XHRcdFx0c3dpdGNoIChfbjEuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ0xUJzpcblx0XHRcdFx0XHRcdHZhciAkdGVtcCR0YXJnZXRLZXkgPSB0YXJnZXRLZXksXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJGRpY3QgPSBsZWZ0O1xuXHRcdFx0XHRcdFx0dGFyZ2V0S2V5ID0gJHRlbXAkdGFyZ2V0S2V5O1xuXHRcdFx0XHRcdFx0ZGljdCA9ICR0ZW1wJGRpY3Q7XG5cdFx0XHRcdFx0XHRjb250aW51ZSBnZXQ7XG5cdFx0XHRcdFx0Y2FzZSAnRVEnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJEp1c3QodmFsdWUpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR2YXIgJHRlbXAkdGFyZ2V0S2V5ID0gdGFyZ2V0S2V5LFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRkaWN0ID0gcmlnaHQ7XG5cdFx0XHRcdFx0XHR0YXJnZXRLZXkgPSAkdGVtcCR0YXJnZXRLZXk7XG5cdFx0XHRcdFx0XHRkaWN0ID0gJHRlbXAkZGljdDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlIGdldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZURpY3RIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChvbGREaWN0LCBrZXksIHZhbHVlKSB7XG5cdFx0dmFyIF9uMTIgPSBBMihlbG0kY29yZSREaWN0JGdldCwga2V5LCBvbGREaWN0KTtcblx0XHRpZiAoX24xMi4kID09PSAnTm90aGluZycpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG9sZFZhbHVlID0gX24xMi5hO1xuXHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VIZWxwLCBvbGRWYWx1ZSwgdmFsdWUpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUhlbHAgPSBGMihcblx0ZnVuY3Rpb24gKG9sZCwgX25ldykge1xuXHRcdHZhciBfbjMgPSBfVXRpbHNfVHVwbGUyKG9sZCwgX25ldyk7XG5cdFx0X24zJDY6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHN3aXRjaCAoX24zLmIuJCkge1xuXHRcdFx0XHRjYXNlICdTJzpcblx0XHRcdFx0XHRyZXR1cm4gX25ldztcblx0XHRcdFx0Y2FzZSAnUHJpbWl0aXZlJzpcblx0XHRcdFx0XHRyZXR1cm4gX25ldztcblx0XHRcdFx0Y2FzZSAnU2VxdWVuY2UnOlxuXHRcdFx0XHRcdGlmIChfbjMuYS4kID09PSAnU2VxdWVuY2UnKSB7XG5cdFx0XHRcdFx0XHR2YXIgX240ID0gX24zLmE7XG5cdFx0XHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBfbjQuYjtcblx0XHRcdFx0XHRcdHZhciBvbGRWYWx1ZXMgPSBfbjQuYztcblx0XHRcdFx0XHRcdHZhciBfbjUgPSBfbjMuYjtcblx0XHRcdFx0XHRcdHZhciBzZXFUeXBlID0gX241LmE7XG5cdFx0XHRcdFx0XHR2YXIgbmV3VmFsdWVzID0gX241LmM7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsXG5cdFx0XHRcdFx0XHRcdHNlcVR5cGUsXG5cdFx0XHRcdFx0XHRcdGlzQ2xvc2VkLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlTGlzdEhlbHAsIG9sZFZhbHVlcywgbmV3VmFsdWVzKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJyZWFrIF9uMyQ2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnRGljdGlvbmFyeSc6XG5cdFx0XHRcdFx0aWYgKF9uMy5hLiQgPT09ICdEaWN0aW9uYXJ5Jykge1xuXHRcdFx0XHRcdFx0dmFyIF9uNiA9IF9uMy5hO1xuXHRcdFx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gX242LmE7XG5cdFx0XHRcdFx0XHR2YXIgX243ID0gX24zLmI7XG5cdFx0XHRcdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IF9uNy5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRGljdGlvbmFyeSwgaXNDbG9zZWQsIGtleVZhbHVlUGFpcnMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRicmVhayBfbjMkNjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHRcdFx0aWYgKF9uMy5hLiQgPT09ICdSZWNvcmQnKSB7XG5cdFx0XHRcdFx0XHR2YXIgX244ID0gX24zLmE7XG5cdFx0XHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBfbjguYTtcblx0XHRcdFx0XHRcdHZhciBvbGREaWN0ID0gX244LmI7XG5cdFx0XHRcdFx0XHR2YXIgX245ID0gX24zLmI7XG5cdFx0XHRcdFx0XHR2YXIgbmV3RGljdCA9IF9uOS5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFJlY29yZCxcblx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VEaWN0SGVscChvbGREaWN0KSxcblx0XHRcdFx0XHRcdFx0XHRuZXdEaWN0KSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJyZWFrIF9uMyQ2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoX24zLmEuJCA9PT0gJ0NvbnN0cnVjdG9yJykge1xuXHRcdFx0XHRcdFx0dmFyIF9uMTAgPSBfbjMuYTtcblx0XHRcdFx0XHRcdHZhciBpc0Nsb3NlZCA9IF9uMTAuYjtcblx0XHRcdFx0XHRcdHZhciBvbGRWYWx1ZXMgPSBfbjEwLmM7XG5cdFx0XHRcdFx0XHR2YXIgX24xMSA9IF9uMy5iO1xuXHRcdFx0XHRcdFx0dmFyIG1heWJlTmFtZSA9IF9uMTEuYTtcblx0XHRcdFx0XHRcdHZhciBuZXdWYWx1ZXMgPSBfbjExLmM7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kQ29uc3RydWN0b3IsXG5cdFx0XHRcdFx0XHRcdG1heWJlTmFtZSxcblx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VMaXN0SGVscCwgb2xkVmFsdWVzLCBuZXdWYWx1ZXMpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnJlYWsgX24zJDY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gX25ldztcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUxpc3RIZWxwID0gRjIoXG5cdGZ1bmN0aW9uIChvbGRzLCBuZXdzKSB7XG5cdFx0dmFyIF9uMCA9IF9VdGlsc19UdXBsZTIob2xkcywgbmV3cyk7XG5cdFx0aWYgKCFfbjAuYS5iKSB7XG5cdFx0XHRyZXR1cm4gbmV3cztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFfbjAuYi5iKSB7XG5cdFx0XHRcdHJldHVybiBuZXdzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9uMSA9IF9uMC5hO1xuXHRcdFx0XHR2YXIgeCA9IF9uMS5hO1xuXHRcdFx0XHR2YXIgeHMgPSBfbjEuYjtcblx0XHRcdFx0dmFyIF9uMiA9IF9uMC5iO1xuXHRcdFx0XHR2YXIgeSA9IF9uMi5hO1xuXHRcdFx0XHR2YXIgeXMgPSBfbjIuYjtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlSGVscCwgeCwgeSksXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUxpc3RIZWxwLCB4cywgeXMpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2UgPSBGMihcblx0ZnVuY3Rpb24gKHZhbHVlLCBleHBhbmRvKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUhlbHAsXG5cdFx0XHRleHBhbmRvLFxuXHRcdFx0X0RlYnVnZ2VyX2luaXQodmFsdWUpKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCA9IEYzKFxuXHRmdW5jdGlvbiAobiwgZnVuYywgbGlzdCkge1xuXHRcdGlmICghbGlzdC5iKSB7XG5cdFx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgeCA9IGxpc3QuYTtcblx0XHRcdHZhciB4cyA9IGxpc3QuYjtcblx0XHRcdHJldHVybiAobiA8PSAwKSA/IEEyKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdGZ1bmMoeCksXG5cdFx0XHRcdHhzKSA6IEEyKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdHgsXG5cdFx0XHRcdEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlSW5kZXgsIG4gLSAxLCBmdW5jLCB4cykpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJG5vdCA9IF9CYXNpY3Nfbm90O1xudmFyIGVsbSRjb3JlJERpY3QkZ2V0TWluID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0Z2V0TWluOlxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGlmICgoZGljdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpIHtcblx0XHRcdHZhciBsZWZ0ID0gZGljdC5kO1xuXHRcdFx0dmFyICR0ZW1wJGRpY3QgPSBsZWZ0O1xuXHRcdFx0ZGljdCA9ICR0ZW1wJGRpY3Q7XG5cdFx0XHRjb250aW51ZSBnZXRNaW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkaWN0O1xuXHRcdH1cblx0fVxufTtcbnZhciBlbG0kY29yZSREaWN0JG1vdmVSZWRMZWZ0ID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0aWYgKCgoZGljdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChkaWN0LmUuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSB7XG5cdFx0aWYgKChkaWN0LmUuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZS5kLmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHR2YXIgY2xyID0gZGljdC5hO1xuXHRcdFx0dmFyIGsgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdiA9IGRpY3QuYztcblx0XHRcdHZhciBfbjEgPSBkaWN0LmQ7XG5cdFx0XHR2YXIgbENsciA9IF9uMS5hO1xuXHRcdFx0dmFyIGxLID0gX24xLmI7XG5cdFx0XHR2YXIgbFYgPSBfbjEuYztcblx0XHRcdHZhciBsTGVmdCA9IF9uMS5kO1xuXHRcdFx0dmFyIGxSaWdodCA9IF9uMS5lO1xuXHRcdFx0dmFyIF9uMiA9IGRpY3QuZTtcblx0XHRcdHZhciByQ2xyID0gX24yLmE7XG5cdFx0XHR2YXIgcksgPSBfbjIuYjtcblx0XHRcdHZhciByViA9IF9uMi5jO1xuXHRcdFx0dmFyIHJMZWZ0ID0gX24yLmQ7XG5cdFx0XHR2YXIgX24zID0gckxlZnQuYTtcblx0XHRcdHZhciBybEsgPSByTGVmdC5iO1xuXHRcdFx0dmFyIHJsViA9IHJMZWZ0LmM7XG5cdFx0XHR2YXIgcmxMID0gckxlZnQuZDtcblx0XHRcdHZhciBybFIgPSByTGVmdC5lO1xuXHRcdFx0dmFyIHJSaWdodCA9IF9uMi5lO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSZWQsXG5cdFx0XHRcdHJsSyxcblx0XHRcdFx0cmxWLFxuXHRcdFx0XHRBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0cmxMKSxcblx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIHJLLCByViwgcmxSLCByUmlnaHQpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNsciA9IGRpY3QuYTtcblx0XHRcdHZhciBrID0gZGljdC5iO1xuXHRcdFx0dmFyIHYgPSBkaWN0LmM7XG5cdFx0XHR2YXIgX240ID0gZGljdC5kO1xuXHRcdFx0dmFyIGxDbHIgPSBfbjQuYTtcblx0XHRcdHZhciBsSyA9IF9uNC5iO1xuXHRcdFx0dmFyIGxWID0gX240LmM7XG5cdFx0XHR2YXIgbExlZnQgPSBfbjQuZDtcblx0XHRcdHZhciBsUmlnaHQgPSBfbjQuZTtcblx0XHRcdHZhciBfbjUgPSBkaWN0LmU7XG5cdFx0XHR2YXIgckNsciA9IF9uNS5hO1xuXHRcdFx0dmFyIHJLID0gX241LmI7XG5cdFx0XHR2YXIgclYgPSBfbjUuYztcblx0XHRcdHZhciByTGVmdCA9IF9uNS5kO1xuXHRcdFx0dmFyIHJSaWdodCA9IF9uNS5lO1xuXHRcdFx0aWYgKGNsci4kID09PSAnQmxhY2snKSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGRpY3Q7XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkRGljdCRtb3ZlUmVkUmlnaHQgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRpZiAoKChkaWN0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoZGljdC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKGRpY3QuZS4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpIHtcblx0XHRpZiAoKGRpY3QuZC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoZGljdC5kLmQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBjbHIgPSBkaWN0LmE7XG5cdFx0XHR2YXIgayA9IGRpY3QuYjtcblx0XHRcdHZhciB2ID0gZGljdC5jO1xuXHRcdFx0dmFyIF9uMSA9IGRpY3QuZDtcblx0XHRcdHZhciBsQ2xyID0gX24xLmE7XG5cdFx0XHR2YXIgbEsgPSBfbjEuYjtcblx0XHRcdHZhciBsViA9IF9uMS5jO1xuXHRcdFx0dmFyIF9uMiA9IF9uMS5kO1xuXHRcdFx0dmFyIF9uMyA9IF9uMi5hO1xuXHRcdFx0dmFyIGxsSyA9IF9uMi5iO1xuXHRcdFx0dmFyIGxsViA9IF9uMi5jO1xuXHRcdFx0dmFyIGxsTGVmdCA9IF9uMi5kO1xuXHRcdFx0dmFyIGxsUmlnaHQgPSBfbjIuZTtcblx0XHRcdHZhciBsUmlnaHQgPSBfbjEuZTtcblx0XHRcdHZhciBfbjQgPSBkaWN0LmU7XG5cdFx0XHR2YXIgckNsciA9IF9uNC5hO1xuXHRcdFx0dmFyIHJLID0gX240LmI7XG5cdFx0XHR2YXIgclYgPSBfbjQuYztcblx0XHRcdHZhciByTGVmdCA9IF9uNC5kO1xuXHRcdFx0dmFyIHJSaWdodCA9IF9uNC5lO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSZWQsXG5cdFx0XHRcdGxLLFxuXHRcdFx0XHRsVixcblx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIGxsSywgbGxWLCBsbExlZnQsIGxsUmlnaHQpLFxuXHRcdFx0XHRBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRsUmlnaHQsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjbHIgPSBkaWN0LmE7XG5cdFx0XHR2YXIgayA9IGRpY3QuYjtcblx0XHRcdHZhciB2ID0gZGljdC5jO1xuXHRcdFx0dmFyIF9uNSA9IGRpY3QuZDtcblx0XHRcdHZhciBsQ2xyID0gX241LmE7XG5cdFx0XHR2YXIgbEsgPSBfbjUuYjtcblx0XHRcdHZhciBsViA9IF9uNS5jO1xuXHRcdFx0dmFyIGxMZWZ0ID0gX241LmQ7XG5cdFx0XHR2YXIgbFJpZ2h0ID0gX241LmU7XG5cdFx0XHR2YXIgX242ID0gZGljdC5lO1xuXHRcdFx0dmFyIHJDbHIgPSBfbjYuYTtcblx0XHRcdHZhciBySyA9IF9uNi5iO1xuXHRcdFx0dmFyIHJWID0gX242LmM7XG5cdFx0XHR2YXIgckxlZnQgPSBfbjYuZDtcblx0XHRcdHZhciByUmlnaHQgPSBfbjYuZTtcblx0XHRcdGlmIChjbHIuJCA9PT0gJ0JsYWNrJykge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0XHRrLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBsSywgbFYsIGxMZWZ0LCBsUmlnaHQpLFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwgckssIHJWLCByTGVmdCwgclJpZ2h0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0XHRrLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBsSywgbFYsIGxMZWZ0LCBsUmlnaHQpLFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwgckssIHJWLCByTGVmdCwgclJpZ2h0KSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBkaWN0O1xuXHR9XG59O1xudmFyIGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscFByZXBFUUdUID0gRjcoXG5cdGZ1bmN0aW9uICh0YXJnZXRLZXksIGRpY3QsIGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCkge1xuXHRcdGlmICgobGVmdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGxlZnQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBfbjEgPSBsZWZ0LmE7XG5cdFx0XHR2YXIgbEsgPSBsZWZ0LmI7XG5cdFx0XHR2YXIgbFYgPSBsZWZ0LmM7XG5cdFx0XHR2YXIgbExlZnQgPSBsZWZ0LmQ7XG5cdFx0XHR2YXIgbFJpZ2h0ID0gbGVmdC5lO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdGxLLFxuXHRcdFx0XHRsVixcblx0XHRcdFx0bExlZnQsXG5cdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwga2V5LCB2YWx1ZSwgbFJpZ2h0LCByaWdodCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfbjIkMjpcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdGlmICgocmlnaHQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChyaWdodC5hLiQgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0aWYgKHJpZ2h0LmQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0XHRcdGlmIChyaWdodC5kLmEuJCA9PT0gJ0JsYWNrJykge1xuXHRcdFx0XHRcdFx0XHR2YXIgX24zID0gcmlnaHQuYTtcblx0XHRcdFx0XHRcdFx0dmFyIF9uNCA9IHJpZ2h0LmQ7XG5cdFx0XHRcdFx0XHRcdHZhciBfbjUgPSBfbjQuYTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJERpY3QkbW92ZVJlZFJpZ2h0KGRpY3QpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YnJlYWsgX24yJDI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBfbjYgPSByaWdodC5hO1xuXHRcdFx0XHRcdFx0dmFyIF9uNyA9IHJpZ2h0LmQ7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkRGljdCRtb3ZlUmVkUmlnaHQoZGljdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJyZWFrIF9uMiQyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGljdDtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkcmVtb3ZlTWluID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0aWYgKChkaWN0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoZGljdC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkge1xuXHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHR2YXIga2V5ID0gZGljdC5iO1xuXHRcdHZhciB2YWx1ZSA9IGRpY3QuYztcblx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHR2YXIgbENvbG9yID0gbGVmdC5hO1xuXHRcdHZhciBsTGVmdCA9IGxlZnQuZDtcblx0XHR2YXIgcmlnaHQgPSBkaWN0LmU7XG5cdFx0aWYgKGxDb2xvci4kID09PSAnQmxhY2snKSB7XG5cdFx0XHRpZiAoKGxMZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobExlZnQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdFx0dmFyIF9uMyA9IGxMZWZ0LmE7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRjb2xvcixcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRyZW1vdmVNaW4obGVmdCksXG5cdFx0XHRcdFx0cmlnaHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9uNCA9IGVsbSRjb3JlJERpY3QkbW92ZVJlZExlZnQoZGljdCk7XG5cdFx0XHRcdGlmIChfbjQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0XHR2YXIgbkNvbG9yID0gX240LmE7XG5cdFx0XHRcdFx0dmFyIG5LZXkgPSBfbjQuYjtcblx0XHRcdFx0XHR2YXIgblZhbHVlID0gX240LmM7XG5cdFx0XHRcdFx0dmFyIG5MZWZ0ID0gX240LmQ7XG5cdFx0XHRcdFx0dmFyIG5SaWdodCA9IF9uNC5lO1xuXHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0XHRcdG5Db2xvcixcblx0XHRcdFx0XHRcdG5LZXksXG5cdFx0XHRcdFx0XHRuVmFsdWUsXG5cdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JHJlbW92ZU1pbihuTGVmdCksXG5cdFx0XHRcdFx0XHRuUmlnaHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdGVsbSRjb3JlJERpY3QkcmVtb3ZlTWluKGxlZnQpLFxuXHRcdFx0XHRyaWdodCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkRGljdCRyZW1vdmVIZWxwID0gRjIoXG5cdGZ1bmN0aW9uICh0YXJnZXRLZXksIGRpY3QpIHtcblx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdGlmIChfVXRpbHNfY21wKHRhcmdldEtleSwga2V5KSA8IDApIHtcblx0XHRcdFx0aWYgKChsZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobGVmdC5hLiQgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0dmFyIF9uNCA9IGxlZnQuYTtcblx0XHRcdFx0XHR2YXIgbExlZnQgPSBsZWZ0LmQ7XG5cdFx0XHRcdFx0aWYgKChsTGVmdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGxMZWZ0LmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHR2YXIgX242ID0gbExlZnQuYTtcblx0XHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAsIHRhcmdldEtleSwgbGVmdCksXG5cdFx0XHRcdFx0XHRcdHJpZ2h0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIF9uNyA9IGVsbSRjb3JlJERpY3QkbW92ZVJlZExlZnQoZGljdCk7XG5cdFx0XHRcdFx0XHRpZiAoX243LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBuQ29sb3IgPSBfbjcuYTtcblx0XHRcdFx0XHRcdFx0dmFyIG5LZXkgPSBfbjcuYjtcblx0XHRcdFx0XHRcdFx0dmFyIG5WYWx1ZSA9IF9uNy5jO1xuXHRcdFx0XHRcdFx0XHR2YXIgbkxlZnQgPSBfbjcuZDtcblx0XHRcdFx0XHRcdFx0dmFyIG5SaWdodCA9IF9uNy5lO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0XHRcdG5Db2xvcixcblx0XHRcdFx0XHRcdFx0XHRuS2V5LFxuXHRcdFx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAsIHRhcmdldEtleSwgbkxlZnQpLFxuXHRcdFx0XHRcdFx0XHRcdG5SaWdodCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAsIHRhcmdldEtleSwgbGVmdCksXG5cdFx0XHRcdFx0XHRyaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JHJlbW92ZUhlbHBFUUdULFxuXHRcdFx0XHRcdHRhcmdldEtleSxcblx0XHRcdFx0XHRBNyhlbG0kY29yZSREaWN0JHJlbW92ZUhlbHBQcmVwRVFHVCwgdGFyZ2V0S2V5LCBkaWN0LCBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscEVRR1QgPSBGMihcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCkge1xuXHRcdGlmIChkaWN0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHR2YXIgY29sb3IgPSBkaWN0LmE7XG5cdFx0XHR2YXIga2V5ID0gZGljdC5iO1xuXHRcdFx0dmFyIHZhbHVlID0gZGljdC5jO1xuXHRcdFx0dmFyIGxlZnQgPSBkaWN0LmQ7XG5cdFx0XHR2YXIgcmlnaHQgPSBkaWN0LmU7XG5cdFx0XHRpZiAoX1V0aWxzX2VxKHRhcmdldEtleSwga2V5KSkge1xuXHRcdFx0XHR2YXIgX24xID0gZWxtJGNvcmUkRGljdCRnZXRNaW4ocmlnaHQpO1xuXHRcdFx0XHRpZiAoX24xLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0dmFyIG1pbktleSA9IF9uMS5iO1xuXHRcdFx0XHRcdHZhciBtaW5WYWx1ZSA9IF9uMS5jO1xuXHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdFx0bWluS2V5LFxuXHRcdFx0XHRcdFx0bWluVmFsdWUsXG5cdFx0XHRcdFx0XHRsZWZ0LFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRyZW1vdmVNaW4ocmlnaHQpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRsZWZ0LFxuXHRcdFx0XHRcdEEyKGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwgdGFyZ2V0S2V5LCByaWdodCkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRyZW1vdmUgPSBGMihcblx0ZnVuY3Rpb24gKGtleSwgZGljdCkge1xuXHRcdHZhciBfbjAgPSBBMihlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAsIGtleSwgZGljdCk7XG5cdFx0aWYgKChfbjAuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfbjAuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBfbjEgPSBfbjAuYTtcblx0XHRcdHZhciBrID0gX24wLmI7XG5cdFx0XHR2YXIgdiA9IF9uMC5jO1xuXHRcdFx0dmFyIGwgPSBfbjAuZDtcblx0XHRcdHZhciByID0gX24wLmU7XG5cdFx0XHRyZXR1cm4gQTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIGssIHYsIGwsIHIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgeCA9IF9uMDtcblx0XHRcdHJldHVybiB4O1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCR1cGRhdGUgPSBGMyhcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgYWx0ZXIsIGRpY3Rpb25hcnkpIHtcblx0XHR2YXIgX24wID0gYWx0ZXIoXG5cdFx0XHRBMihlbG0kY29yZSREaWN0JGdldCwgdGFyZ2V0S2V5LCBkaWN0aW9uYXJ5KSk7XG5cdFx0aWYgKF9uMC4kID09PSAnSnVzdCcpIHtcblx0XHRcdHZhciB2YWx1ZSA9IF9uMC5hO1xuXHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJERpY3QkaW5zZXJ0LCB0YXJnZXRLZXksIHZhbHVlLCBkaWN0aW9uYXJ5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEEyKGVsbSRjb3JlJERpY3QkcmVtb3ZlLCB0YXJnZXRLZXksIGRpY3Rpb25hcnkpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUgPSBGMihcblx0ZnVuY3Rpb24gKG1zZywgdmFsdWUpIHtcblx0XHRzd2l0Y2ggKHZhbHVlLiQpIHtcblx0XHRcdGNhc2UgJ1MnOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRjYXNlICdTZXF1ZW5jZSc6XG5cdFx0XHRcdHZhciBzZXFUeXBlID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gdmFsdWUuYjtcblx0XHRcdFx0dmFyIHZhbHVlTGlzdCA9IHZhbHVlLmM7XG5cdFx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0XHRjYXNlICdUb2dnbGUnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsIHNlcVR5cGUsICFpc0Nsb3NlZCwgdmFsdWVMaXN0KTtcblx0XHRcdFx0XHRjYXNlICdJbmRleCc6XG5cdFx0XHRcdFx0XHRpZiAobXNnLmEuJCA9PT0gJ05vbmUnKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfbjMgPSBtc2cuYTtcblx0XHRcdFx0XHRcdFx0dmFyIGluZGV4ID0gbXNnLmI7XG5cdFx0XHRcdFx0XHRcdHZhciBzdWJNc2cgPSBtc2cuYztcblx0XHRcdFx0XHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsXG5cdFx0XHRcdFx0XHRcdFx0c2VxVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlSW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlKHN1Yk1zZyksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZUxpc3QpKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRjYXNlICdEaWN0aW9uYXJ5Jzpcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSB2YWx1ZS5iO1xuXHRcdFx0XHRzd2l0Y2ggKG1zZy4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnVG9nZ2xlJzpcblx0XHRcdFx0XHRcdHJldHVybiBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnksICFpc0Nsb3NlZCwga2V5VmFsdWVQYWlycyk7XG5cdFx0XHRcdFx0Y2FzZSAnSW5kZXgnOlxuXHRcdFx0XHRcdFx0dmFyIHJlZGlyZWN0ID0gbXNnLmE7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBtc2cuYjtcblx0XHRcdFx0XHRcdHZhciBzdWJNc2cgPSBtc2cuYztcblx0XHRcdFx0XHRcdHN3aXRjaCAocmVkaXJlY3QuJCkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICdOb25lJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0tleSc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfbjYpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgayA9IF9uNi5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB2ID0gX242LmI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZSwgc3ViTXNnLCBrKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzKSk7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfbjcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgayA9IF9uNy5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB2ID0gX243LmI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUsIHN1Yk1zZywgdikpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0Y2FzZSAnUmVjb3JkJzpcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIHZhbHVlRGljdCA9IHZhbHVlLmI7XG5cdFx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0XHRjYXNlICdUb2dnbGUnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUmVjb3JkLCAhaXNDbG9zZWQsIHZhbHVlRGljdCk7XG5cdFx0XHRcdFx0Y2FzZSAnSW5kZXgnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR2YXIgZmllbGQgPSBtc2cuYTtcblx0XHRcdFx0XHRcdHZhciBzdWJNc2cgPSBtc2cuYjtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsXG5cdFx0XHRcdFx0XHRcdGlzQ2xvc2VkLFxuXHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JHVwZGF0ZSxcblx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcblx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUZpZWxkKHN1Yk1zZyksXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWVEaWN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBtYXliZU5hbWUgPSB2YWx1ZS5hO1xuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSB2YWx1ZS5iO1xuXHRcdFx0XHR2YXIgdmFsdWVMaXN0ID0gdmFsdWUuYztcblx0XHRcdFx0c3dpdGNoIChtc2cuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ1RvZ2dsZSc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3RvciwgbWF5YmVOYW1lLCAhaXNDbG9zZWQsIHZhbHVlTGlzdCk7XG5cdFx0XHRcdFx0Y2FzZSAnSW5kZXgnOlxuXHRcdFx0XHRcdFx0aWYgKG1zZy5hLiQgPT09ICdOb25lJykge1xuXHRcdFx0XHRcdFx0XHR2YXIgX24xMCA9IG1zZy5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBtc2cuYjtcblx0XHRcdFx0XHRcdFx0dmFyIHN1Yk1zZyA9IG1zZy5jO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRcdFx0XHRtYXliZU5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZShzdWJNc2cpLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVMaXN0KSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVGaWVsZCA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCBtYXliZUV4cGFuZG8pIHtcblx0XHRpZiAobWF5YmVFeHBhbmRvLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0cmV0dXJuIG1heWJlRXhwYW5kbztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGV4cGFuZG8gPSBtYXliZUV4cGFuZG8uYTtcblx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZSwgbXNnLCBleHBhbmRvKSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFNuYXBzaG90ID0gRjIoXG5cdGZ1bmN0aW9uIChtb2RlbCwgbWVzc2FnZXMpIHtcblx0XHRyZXR1cm4ge21lc3NhZ2VzOiBtZXNzYWdlcywgbW9kZWw6IG1vZGVsfTtcblx0fSk7XG52YXIgZWxtJGNvcmUkQXJyYXkkZnJvbUxpc3RIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChsaXN0LCBub2RlTGlzdCwgbm9kZUxpc3RTaXplKSB7XG5cdFx0ZnJvbUxpc3RIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZUZyb21MaXN0LCBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsIGxpc3QpO1xuXHRcdFx0dmFyIGpzQXJyYXkgPSBfbjAuYTtcblx0XHRcdHZhciByZW1haW5pbmdJdGVtcyA9IF9uMC5iO1xuXHRcdFx0aWYgKF9VdGlsc19jbXAoXG5cdFx0XHRcdGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aChqc0FycmF5KSxcblx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKSA8IDApIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JGJ1aWxkZXJUb0FycmF5LFxuXHRcdFx0XHRcdHRydWUsXG5cdFx0XHRcdFx0e25vZGVMaXN0OiBub2RlTGlzdCwgbm9kZUxpc3RTaXplOiBub2RlTGlzdFNpemUsIHRhaWw6IGpzQXJyYXl9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciAkdGVtcCRsaXN0ID0gcmVtYWluaW5nSXRlbXMsXG5cdFx0XHRcdFx0JHRlbXAkbm9kZUxpc3QgPSBBMihcblx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkTGVhZihqc0FycmF5KSxcblx0XHRcdFx0XHRub2RlTGlzdCksXG5cdFx0XHRcdFx0JHRlbXAkbm9kZUxpc3RTaXplID0gbm9kZUxpc3RTaXplICsgMTtcblx0XHRcdFx0bGlzdCA9ICR0ZW1wJGxpc3Q7XG5cdFx0XHRcdG5vZGVMaXN0ID0gJHRlbXAkbm9kZUxpc3Q7XG5cdFx0XHRcdG5vZGVMaXN0U2l6ZSA9ICR0ZW1wJG5vZGVMaXN0U2l6ZTtcblx0XHRcdFx0Y29udGludWUgZnJvbUxpc3RIZWxwO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQXJyYXkkZnJvbUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xuXHRpZiAoIWxpc3QuYikge1xuXHRcdHJldHVybiBlbG0kY29yZSRBcnJheSRlbXB0eTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkQXJyYXkkZnJvbUxpc3RIZWxwLCBsaXN0LCBfTGlzdF9OaWwsIDApO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkYWRkUmVjZW50ID0gRjMoXG5cdGZ1bmN0aW9uIChtc2csIG5ld01vZGVsLCBfbjApIHtcblx0XHR2YXIgbW9kZWwgPSBfbjAubW9kZWw7XG5cdFx0dmFyIG1lc3NhZ2VzID0gX24wLm1lc3NhZ2VzO1xuXHRcdHZhciBudW1NZXNzYWdlcyA9IF9uMC5udW1NZXNzYWdlcztcblx0XHRyZXR1cm4gX1V0aWxzX2VxKG51bU1lc3NhZ2VzLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSkgPyBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRTbmFwc2hvdCxcblx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRlbG0kY29yZSRBcnJheSRmcm9tTGlzdChtZXNzYWdlcykpKSxcblx0XHRcdEEzKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFJlY2VudEhpc3RvcnksXG5cdFx0XHRcdG5ld01vZGVsLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W21zZ10pLFxuXHRcdFx0XHQxKSkgOiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0ZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdEEzKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFJlY2VudEhpc3RvcnksXG5cdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRBMihlbG0kY29yZSRMaXN0JGNvbnMsIG1zZywgbWVzc2FnZXMpLFxuXHRcdFx0XHRudW1NZXNzYWdlcyArIDEpKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkQml0d2lzZSRzaGlmdFJpZ2h0WmZCeSA9IF9CaXR3aXNlX3NoaWZ0UmlnaHRaZkJ5O1xudmFyIGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgPSA0Mjk0OTY3Mjk1ID4+PiAoMzIgLSBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXApO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRnZSA9IF9VdGlsc19nZTtcbnZhciBlbG0kY29yZSRCaXR3aXNlJGFuZCA9IF9CaXR3aXNlX2FuZDtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSRwdXNoID0gX0pzQXJyYXlfcHVzaDtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSRzaW5nbGV0b24gPSBfSnNBcnJheV9zaW5nbGV0b247XG52YXIgZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlR2V0ID0gX0pzQXJyYXlfdW5zYWZlR2V0O1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZVNldCA9IF9Kc0FycmF5X3Vuc2FmZVNldDtcbnZhciBlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlID0gRjQoXG5cdGZ1bmN0aW9uIChzaGlmdCwgaW5kZXgsIHRhaWwsIHRyZWUpIHtcblx0XHR2YXIgcG9zID0gZWxtJGNvcmUkQXJyYXkkYml0TWFzayAmIChpbmRleCA+Pj4gc2hpZnQpO1xuXHRcdGlmIChfVXRpbHNfY21wKFxuXHRcdFx0cG9zLFxuXHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKHRyZWUpKSA+IC0xKSB7XG5cdFx0XHRpZiAoc2hpZnQgPT09IDUpIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJEVsbSRKc0FycmF5JHB1c2gsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkTGVhZih0YWlsKSxcblx0XHRcdFx0XHR0cmVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBuZXdTdWIgPSBlbG0kY29yZSRBcnJheSRTdWJUcmVlKFxuXHRcdFx0XHRcdEE0KGVsbSRjb3JlJEFycmF5JGluc2VydFRhaWxJblRyZWUsIHNoaWZ0IC0gZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLCBpbmRleCwgdGFpbCwgZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHkpKTtcblx0XHRcdFx0cmV0dXJuIEEyKGVsbSRjb3JlJEVsbSRKc0FycmF5JHB1c2gsIG5ld1N1YiwgdHJlZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB2YWx1ZSA9IEEyKGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZUdldCwgcG9zLCB0cmVlKTtcblx0XHRcdGlmICh2YWx1ZS4kID09PSAnU3ViVHJlZScpIHtcblx0XHRcdFx0dmFyIHN1YlRyZWUgPSB2YWx1ZS5hO1xuXHRcdFx0XHR2YXIgbmV3U3ViID0gZWxtJGNvcmUkQXJyYXkkU3ViVHJlZShcblx0XHRcdFx0XHRBNChlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlLCBzaGlmdCAtIGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCwgaW5kZXgsIHRhaWwsIHN1YlRyZWUpKTtcblx0XHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZVNldCwgcG9zLCBuZXdTdWIsIHRyZWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG5ld1N1YiA9IGVsbSRjb3JlJEFycmF5JFN1YlRyZWUoXG5cdFx0XHRcdFx0QTQoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlLFxuXHRcdFx0XHRcdFx0c2hpZnQgLSBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsXG5cdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdHRhaWwsXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRzaW5nbGV0b24odmFsdWUpKSk7XG5cdFx0XHRcdHJldHVybiBBMyhlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVTZXQsIHBvcywgbmV3U3ViLCB0cmVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJpdHdpc2Ukc2hpZnRMZWZ0QnkgPSBfQml0d2lzZV9zaGlmdExlZnRCeTtcbnZhciBlbG0kY29yZSRBcnJheSR1bnNhZmVSZXBsYWNlVGFpbCA9IEYyKFxuXHRmdW5jdGlvbiAobmV3VGFpbCwgX24wKSB7XG5cdFx0dmFyIGxlbiA9IF9uMC5hO1xuXHRcdHZhciBzdGFydFNoaWZ0ID0gX24wLmI7XG5cdFx0dmFyIHRyZWUgPSBfbjAuYztcblx0XHR2YXIgdGFpbCA9IF9uMC5kO1xuXHRcdHZhciBvcmlnaW5hbFRhaWxMZW4gPSBlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgodGFpbCk7XG5cdFx0dmFyIG5ld1RhaWxMZW4gPSBlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgobmV3VGFpbCk7XG5cdFx0dmFyIG5ld0FycmF5TGVuID0gbGVuICsgKG5ld1RhaWxMZW4gLSBvcmlnaW5hbFRhaWxMZW4pO1xuXHRcdGlmIChfVXRpbHNfZXEobmV3VGFpbExlbiwgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKSkge1xuXHRcdFx0dmFyIG92ZXJmbG93ID0gX1V0aWxzX2NtcChuZXdBcnJheUxlbiA+Pj4gZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLCAxIDw8IHN0YXJ0U2hpZnQpID4gMDtcblx0XHRcdGlmIChvdmVyZmxvdykge1xuXHRcdFx0XHR2YXIgbmV3U2hpZnQgPSBzdGFydFNoaWZ0ICsgZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwO1xuXHRcdFx0XHR2YXIgbmV3VHJlZSA9IEE0KFxuXHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JGluc2VydFRhaWxJblRyZWUsXG5cdFx0XHRcdFx0bmV3U2hpZnQsXG5cdFx0XHRcdFx0bGVuLFxuXHRcdFx0XHRcdG5ld1RhaWwsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkc2luZ2xldG9uKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkU3ViVHJlZSh0cmVlKSkpO1xuXHRcdFx0XHRyZXR1cm4gQTQoZWxtJGNvcmUkQXJyYXkkQXJyYXlfZWxtX2J1aWx0aW4sIG5ld0FycmF5TGVuLCBuZXdTaGlmdCwgbmV3VHJlZSwgZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdG5ld0FycmF5TGVuLFxuXHRcdFx0XHRcdHN0YXJ0U2hpZnQsXG5cdFx0XHRcdFx0QTQoZWxtJGNvcmUkQXJyYXkkaW5zZXJ0VGFpbEluVHJlZSwgc3RhcnRTaGlmdCwgbGVuLCBuZXdUYWlsLCB0cmVlKSxcblx0XHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBNChlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbiwgbmV3QXJyYXlMZW4sIHN0YXJ0U2hpZnQsIHRyZWUsIG5ld1RhaWwpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQXJyYXkkcHVzaCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYXJyYXkpIHtcblx0XHR2YXIgdGFpbCA9IGFycmF5LmQ7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGNvcmUkQXJyYXkkdW5zYWZlUmVwbGFjZVRhaWwsXG5cdFx0XHRBMihlbG0kY29yZSRFbG0kSnNBcnJheSRwdXNoLCBhLCB0YWlsKSxcblx0XHRcdGFycmF5KTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGQgPSBGMyhcblx0ZnVuY3Rpb24gKG1zZywgbW9kZWwsIF9uMCkge1xuXHRcdHZhciBzbmFwc2hvdHMgPSBfbjAuc25hcHNob3RzO1xuXHRcdHZhciByZWNlbnQgPSBfbjAucmVjZW50O1xuXHRcdHZhciBudW1NZXNzYWdlcyA9IF9uMC5udW1NZXNzYWdlcztcblx0XHR2YXIgX24xID0gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGRSZWNlbnQsIG1zZywgbW9kZWwsIHJlY2VudCk7XG5cdFx0aWYgKF9uMS5hLiQgPT09ICdKdXN0Jykge1xuXHRcdFx0dmFyIHNuYXBzaG90ID0gX24xLmEuYTtcblx0XHRcdHZhciBuZXdSZWNlbnQgPSBfbjEuYjtcblx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRIaXN0b3J5LFxuXHRcdFx0XHRBMihlbG0kY29yZSRBcnJheSRwdXNoLCBzbmFwc2hvdCwgc25hcHNob3RzKSxcblx0XHRcdFx0bmV3UmVjZW50LFxuXHRcdFx0XHRudW1NZXNzYWdlcyArIDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24yID0gX24xLmE7XG5cdFx0XHR2YXIgbmV3UmVjZW50ID0gX24xLmI7XG5cdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRIaXN0b3J5LCBzbmFwc2hvdHMsIG5ld1JlY2VudCwgbnVtTWVzc2FnZXMgKyAxKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkU3RlcHBpbmcgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdTdGVwcGluZycsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JERvbmUgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdEb25lJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0SGVscCA9IEYzKFxuXHRmdW5jdGlvbiAodXBkYXRlLCBtc2csIGdldFJlc3VsdCkge1xuXHRcdGlmIChnZXRSZXN1bHQuJCA9PT0gJ0RvbmUnKSB7XG5cdFx0XHRyZXR1cm4gZ2V0UmVzdWx0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbiA9IGdldFJlc3VsdC5hO1xuXHRcdFx0dmFyIG1vZGVsID0gZ2V0UmVzdWx0LmI7XG5cdFx0XHRyZXR1cm4gKCFuKSA/IEEyKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JERvbmUsXG5cdFx0XHRcdG1zZyxcblx0XHRcdFx0QTIodXBkYXRlLCBtc2csIG1vZGVsKS5hKSA6IEEyKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFN0ZXBwaW5nLFxuXHRcdFx0XHRuIC0gMSxcblx0XHRcdFx0QTIodXBkYXRlLCBtc2csIG1vZGVsKS5hKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkdW5kb25lID0gZnVuY3Rpb24gKGdldFJlc3VsdCkge1xuXHR1bmRvbmU6XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0aWYgKGdldFJlc3VsdC4kID09PSAnRG9uZScpIHtcblx0XHRcdHZhciBtc2cgPSBnZXRSZXN1bHQuYTtcblx0XHRcdHZhciBtb2RlbCA9IGdldFJlc3VsdC5iO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIG1zZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciAkdGVtcCRnZXRSZXN1bHQgPSBnZXRSZXN1bHQ7XG5cdFx0XHRnZXRSZXN1bHQgPSAkdGVtcCRnZXRSZXN1bHQ7XG5cdFx0XHRjb250aW51ZSB1bmRvbmU7XG5cdFx0fVxuXHR9XG59O1xudmFyIGVsbSRjb3JlJEFycmF5JGdldEhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKHNoaWZ0LCBpbmRleCwgdHJlZSkge1xuXHRcdGdldEhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBwb3MgPSBlbG0kY29yZSRBcnJheSRiaXRNYXNrICYgKGluZGV4ID4+PiBzaGlmdCk7XG5cdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlR2V0LCBwb3MsIHRyZWUpO1xuXHRcdFx0aWYgKF9uMC4kID09PSAnU3ViVHJlZScpIHtcblx0XHRcdFx0dmFyIHN1YlRyZWUgPSBfbjAuYTtcblx0XHRcdFx0dmFyICR0ZW1wJHNoaWZ0ID0gc2hpZnQgLSBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsXG5cdFx0XHRcdFx0JHRlbXAkaW5kZXggPSBpbmRleCxcblx0XHRcdFx0XHQkdGVtcCR0cmVlID0gc3ViVHJlZTtcblx0XHRcdFx0c2hpZnQgPSAkdGVtcCRzaGlmdDtcblx0XHRcdFx0aW5kZXggPSAkdGVtcCRpbmRleDtcblx0XHRcdFx0dHJlZSA9ICR0ZW1wJHRyZWU7XG5cdFx0XHRcdGNvbnRpbnVlIGdldEhlbHA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdmFsdWVzID0gX24wLmE7XG5cdFx0XHRcdHJldHVybiBBMihlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQsIGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgJiBpbmRleCwgdmFsdWVzKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEFycmF5JHRhaWxJbmRleCA9IGZ1bmN0aW9uIChsZW4pIHtcblx0cmV0dXJuIChsZW4gPj4+IDUpIDw8IDU7XG59O1xudmFyIGVsbSRjb3JlJEFycmF5JGdldCA9IEYyKFxuXHRmdW5jdGlvbiAoaW5kZXgsIF9uMCkge1xuXHRcdHZhciBsZW4gPSBfbjAuYTtcblx0XHR2YXIgc3RhcnRTaGlmdCA9IF9uMC5iO1xuXHRcdHZhciB0cmVlID0gX24wLmM7XG5cdFx0dmFyIHRhaWwgPSBfbjAuZDtcblx0XHRyZXR1cm4gKChpbmRleCA8IDApIHx8IChfVXRpbHNfY21wKGluZGV4LCBsZW4pID4gLTEpKSA/IGVsbSRjb3JlJE1heWJlJE5vdGhpbmcgOiAoKF9VdGlsc19jbXAoXG5cdFx0XHRpbmRleCxcblx0XHRcdGVsbSRjb3JlJEFycmF5JHRhaWxJbmRleChsZW4pKSA+IC0xKSA/IGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRBMihlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQsIGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgJiBpbmRleCwgdGFpbCkpIDogZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdEEzKGVsbSRjb3JlJEFycmF5JGdldEhlbHAsIHN0YXJ0U2hpZnQsIGluZGV4LCB0cmVlKSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldCA9IEYzKFxuXHRmdW5jdGlvbiAodXBkYXRlLCBpbmRleCwgaGlzdG9yeSkge1xuXHRcdGdldDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIHJlY2VudCA9IGhpc3RvcnkucmVjZW50O1xuXHRcdFx0dmFyIHNuYXBzaG90TWF4ID0gaGlzdG9yeS5udW1NZXNzYWdlcyAtIHJlY2VudC5udW1NZXNzYWdlcztcblx0XHRcdGlmIChfVXRpbHNfY21wKGluZGV4LCBzbmFwc2hvdE1heCkgPiAtMSkge1xuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR1bmRvbmUoXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRnZXRIZWxwKHVwZGF0ZSksXG5cdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFN0ZXBwaW5nLCBpbmRleCAtIHNuYXBzaG90TWF4LCByZWNlbnQubW9kZWwpLFxuXHRcdFx0XHRcdFx0cmVjZW50Lm1lc3NhZ2VzKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkQXJyYXkkZ2V0LCAoaW5kZXggLyBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSkgfCAwLCBoaXN0b3J5LnNuYXBzaG90cyk7XG5cdFx0XHRcdGlmIChfbjAuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJHVwZGF0ZSA9IHVwZGF0ZSxcblx0XHRcdFx0XHRcdCR0ZW1wJGluZGV4ID0gaW5kZXgsXG5cdFx0XHRcdFx0XHQkdGVtcCRoaXN0b3J5ID0gaGlzdG9yeTtcblx0XHRcdFx0XHR1cGRhdGUgPSAkdGVtcCR1cGRhdGU7XG5cdFx0XHRcdFx0aW5kZXggPSAkdGVtcCRpbmRleDtcblx0XHRcdFx0XHRoaXN0b3J5ID0gJHRlbXAkaGlzdG9yeTtcblx0XHRcdFx0XHRjb250aW51ZSBnZXQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG1vZGVsID0gX24wLmEubW9kZWw7XG5cdFx0XHRcdFx0dmFyIG1lc3NhZ2VzID0gX24wLmEubWVzc2FnZXM7XG5cdFx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkdW5kb25lKFxuXHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JGZvbGRyLFxuXHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldEhlbHAodXBkYXRlKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRTdGVwcGluZywgaW5kZXggJSBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSwgbW9kZWwpLFxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlcykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFBhdXNlZCA9IEYzKFxuXHRmdW5jdGlvbiAoYSwgYiwgYykge1xuXHRcdHJldHVybiB7JDogJ1BhdXNlZCcsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVsbVRvSnMgPSBfRGVidWdnZXJfdW5zYWZlQ29lcmNlO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZW5jb2RlSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAoc25hcHNob3QsIGFsbE1lc3NhZ2VzKSB7XG5cdFx0cmV0dXJuIEEzKGVsbSRjb3JlJEFycmF5JGZvbGRsLCBlbG0kY29yZSRMaXN0JGNvbnMsIGFsbE1lc3NhZ2VzLCBzbmFwc2hvdC5tZXNzYWdlcyk7XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRW5jb2RlJGxpc3QgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIGVudHJpZXMpIHtcblx0XHRyZXR1cm4gX0pzb25fd3JhcChcblx0XHRcdEEzKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHRfSnNvbl9hZGRFbnRyeShmdW5jKSxcblx0XHRcdFx0X0pzb25fZW1wdHlBcnJheShfVXRpbHNfVHVwbGUwKSxcblx0XHRcdFx0ZW50cmllcykpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVuY29kZSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHNuYXBzaG90cyA9IF9uMC5zbmFwc2hvdHM7XG5cdHZhciByZWNlbnQgPSBfbjAucmVjZW50O1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGpzb24kSnNvbiRFbmNvZGUkbGlzdCxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVsbVRvSnMsXG5cdFx0QTMoXG5cdFx0XHRlbG0kY29yZSRBcnJheSRmb2xkcixcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZW5jb2RlSGVscCxcblx0XHRcdGVsbSRjb3JlJExpc3QkcmV2ZXJzZShyZWNlbnQubWVzc2FnZXMpLFxuXHRcdFx0c25hcHNob3RzKSk7XG59O1xudmFyIGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdCA9IGZ1bmN0aW9uIChwYWlycykge1xuXHRyZXR1cm4gX0pzb25fd3JhcChcblx0XHRBMyhcblx0XHRcdGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKF9uMCwgb2JqKSB7XG5cdFx0XHRcdFx0dmFyIGsgPSBfbjAuYTtcblx0XHRcdFx0XHR2YXIgdiA9IF9uMC5iO1xuXHRcdFx0XHRcdHJldHVybiBBMyhfSnNvbl9hZGRGaWVsZCwgaywgdiwgb2JqKTtcblx0XHRcdFx0fSksXG5cdFx0XHRfSnNvbl9lbXB0eU9iamVjdChfVXRpbHNfVHVwbGUwKSxcblx0XHRcdHBhaXJzKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZUFsaWFzID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgYXJncyA9IF9uMC5hcmdzO1xuXHR2YXIgdGlwZSA9IF9uMC50aXBlO1xuXHRyZXR1cm4gZWxtJGpzb24kSnNvbiRFbmNvZGUkb2JqZWN0KFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J2FyZ3MnLFxuXHRcdFx0XHRBMihlbG0kanNvbiRKc29uJEVuY29kZSRsaXN0LCBlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcsIGFyZ3MpKSxcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J3R5cGUnLFxuXHRcdFx0XHRlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcodGlwZSkpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZURpY3QgPSBGMihcblx0ZnVuY3Rpb24gKGYsIGRpY3QpIHtcblx0XHRyZXR1cm4gZWxtJGpzb24kSnNvbiRFbmNvZGUkb2JqZWN0KFxuXHRcdFx0ZWxtJGNvcmUkRGljdCR0b0xpc3QoXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkbWFwLFxuXHRcdFx0XHRcdEYyKFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGYodmFsdWUpO1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0ZGljdCkpKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlVW5pb24gPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBhcmdzID0gX24wLmFyZ3M7XG5cdHZhciB0YWdzID0gX24wLnRhZ3M7XG5cdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQnYXJncycsXG5cdFx0XHRcdEEyKGVsbSRqc29uJEpzb24kRW5jb2RlJGxpc3QsIGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZywgYXJncykpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndGFncycsXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZURpY3QsXG5cdFx0XHRcdFx0ZWxtJGpzb24kSnNvbiRFbmNvZGUkbGlzdChlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcpLFxuXHRcdFx0XHRcdHRhZ3MpKVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVUeXBlcyA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIG1lc3NhZ2UgPSBfbjAubWVzc2FnZTtcblx0dmFyIHVuaW9ucyA9IF9uMC51bmlvbnM7XG5cdHZhciBhbGlhc2VzID0gX24wLmFsaWFzZXM7XG5cdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQnbWVzc2FnZScsXG5cdFx0XHRcdGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZyhtZXNzYWdlKSksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCdhbGlhc2VzJyxcblx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlRGljdCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlQWxpYXMsIGFsaWFzZXMpKSxcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J3VuaW9ucycsXG5cdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZURpY3QsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZVVuaW9uLCB1bmlvbnMpKVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVWZXJzaW9ucyA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIGVsbSA9IF9uMC5lbG07XG5cdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQnZWxtJyxcblx0XHRcdFx0ZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nKGVsbSkpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHZlcnNpb25zID0gX24wLnZlcnNpb25zO1xuXHR2YXIgdHlwZXMgPSBfbjAudHlwZXM7XG5cdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndmVyc2lvbnMnLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVWZXJzaW9ucyh2ZXJzaW9ucykpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndHlwZXMnLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVUeXBlcyh0eXBlcykpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZG93bmxvYWQgPSBGMihcblx0ZnVuY3Rpb24gKG1ldGFkYXRhLCBoaXN0b3J5KSB7XG5cdFx0dmFyIGpzb24gPSBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdCdtZXRhZGF0YScsXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlKG1ldGFkYXRhKSksXG5cdFx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHQnaGlzdG9yeScsXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRlbmNvZGUoaGlzdG9yeSkpXG5cdFx0XHRcdF0pKTtcblx0XHR2YXIgaGlzdG9yeUxlbmd0aCA9IGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc2l6ZShoaXN0b3J5KTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kY29yZSRUYXNrJHBlcmZvcm0sXG5cdFx0XHRmdW5jdGlvbiAoX24wKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE5vT3A7XG5cdFx0XHR9LFxuXHRcdFx0QTIoX0RlYnVnZ2VyX2Rvd25sb2FkLCBoaXN0b3J5TGVuZ3RoLCBqc29uKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkanNUb0VsbSA9IF9EZWJ1Z2dlcl91bnNhZmVDb2VyY2U7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkdmFsdWUgPSBfSnNvbl9kZWNvZGVWYWx1ZTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGRlY29kZXIgPSBGMihcblx0ZnVuY3Rpb24gKGluaXRpYWxNb2RlbCwgdXBkYXRlKSB7XG5cdFx0dmFyIGFkZE1lc3NhZ2UgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChyYXdNc2csIF9uMCkge1xuXHRcdFx0XHR2YXIgbW9kZWwgPSBfbjAuYTtcblx0XHRcdFx0dmFyIGhpc3RvcnkgPSBfbjAuYjtcblx0XHRcdFx0dmFyIG1zZyA9IGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkanNUb0VsbShyYXdNc2cpO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRBMih1cGRhdGUsIG1zZywgbW9kZWwpLFxuXHRcdFx0XHRcdEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkYWRkLCBtc2csIG1vZGVsLCBoaXN0b3J5KSk7XG5cdFx0XHR9KTtcblx0XHR2YXIgdXBkYXRlTW9kZWwgPSBmdW5jdGlvbiAocmF3TXNncykge1xuXHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHRhZGRNZXNzYWdlLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGluaXRpYWxNb2RlbCxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVtcHR5KGluaXRpYWxNb2RlbCkpLFxuXHRcdFx0XHRyYXdNc2dzKTtcblx0XHR9O1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcCxcblx0XHRcdHVwZGF0ZU1vZGVsLFxuXHRcdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdChlbG0kanNvbiRKc29uJERlY29kZSR2YWx1ZSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldEluaXRpYWxNb2RlbCA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHNuYXBzaG90cyA9IF9uMC5zbmFwc2hvdHM7XG5cdHZhciByZWNlbnQgPSBfbjAucmVjZW50O1xuXHR2YXIgX24xID0gQTIoZWxtJGNvcmUkQXJyYXkkZ2V0LCAwLCBzbmFwc2hvdHMpO1xuXHRpZiAoX24xLiQgPT09ICdKdXN0Jykge1xuXHRcdHZhciBtb2RlbCA9IF9uMS5hLm1vZGVsO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVjZW50Lm1vZGVsO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmFkSW1wb3J0ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnQmFkSW1wb3J0JywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRDb3JydXB0SGlzdG9yeSA9IHskOiAnQ29ycnVwdEhpc3RvcnknfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNvcnJ1cHRJbXBvcnQgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJhZEltcG9ydChlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkQ29ycnVwdEhpc3RvcnkpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kbG9hZE5ld0hpc3RvcnkgPSBGMyhcblx0ZnVuY3Rpb24gKHJhd0hpc3RvcnksIHVwZGF0ZSwgbW9kZWwpIHtcblx0XHR2YXIgcHVyZVVzZXJVcGRhdGUgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChtc2csIHVzZXJNb2RlbCkge1xuXHRcdFx0XHRyZXR1cm4gQTIodXBkYXRlLCBtc2csIHVzZXJNb2RlbCkuYTtcblx0XHRcdH0pO1xuXHRcdHZhciBpbml0aWFsVXNlck1vZGVsID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRnZXRJbml0aWFsTW9kZWwobW9kZWwuaGlzdG9yeSk7XG5cdFx0dmFyIGRlY29kZXIgPSBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGRlY29kZXIsIGluaXRpYWxVc2VyTW9kZWwsIHB1cmVVc2VyVXBkYXRlKTtcblx0XHR2YXIgX24wID0gQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZGVjb2RlVmFsdWUsIGRlY29kZXIsIHJhd0hpc3RvcnkpO1xuXHRcdGlmIChfbjAuJCA9PT0gJ0VycicpIHtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdHtvdmVybGF5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNvcnJ1cHRJbXBvcnR9KSxcblx0XHRcdFx0ZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24xID0gX24wLmE7XG5cdFx0XHR2YXIgbGF0ZXN0VXNlck1vZGVsID0gX24xLmE7XG5cdFx0XHR2YXIgbmV3SGlzdG9yeSA9IF9uMS5iO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZXhwYW5kbzogZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0KGxhdGVzdFVzZXJNb2RlbCksXG5cdFx0XHRcdFx0XHRoaXN0b3J5OiBuZXdIaXN0b3J5LFxuXHRcdFx0XHRcdFx0b3ZlcmxheTogZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRub25lLFxuXHRcdFx0XHRcdFx0c3RhdGU6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUnVubmluZyhsYXRlc3RVc2VyTW9kZWwpXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRhbHdheXMgPSBGMihcblx0ZnVuY3Rpb24gKGEsIF9uMCkge1xuXHRcdHJldHVybiBhO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHNjcm9sbCA9IGZ1bmN0aW9uIChwb3BvdXQpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRjb3JlJFRhc2skcGVyZm9ybSxcblx0XHRlbG0kY29yZSRCYXNpY3MkYWx3YXlzKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kTm9PcCksXG5cdFx0X0RlYnVnZ2VyX3Njcm9sbChwb3BvdXQpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVcGxvYWQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdVcGxvYWQnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR1cGxvYWQgPSBBMihcblx0ZWxtJGNvcmUkVGFzayRwZXJmb3JtLFxuXHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVwbG9hZCxcblx0X0RlYnVnZ2VyX3VwbG9hZChfVXRpbHNfVHVwbGUwKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCYWRNZXRhZGF0YSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0JhZE1ldGFkYXRhJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYmFkTWV0YWRhdGEgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJhZE1ldGFkYXRhO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd2l0aEdvb2RNZXRhZGF0YSA9IEYyKFxuXHRmdW5jdGlvbiAobW9kZWwsIGZ1bmMpIHtcblx0XHR2YXIgX24wID0gbW9kZWwubWV0YWRhdGE7XG5cdFx0aWYgKF9uMC4kID09PSAnT2snKSB7XG5cdFx0XHR2YXIgbWV0YWRhdGEgPSBfbjAuYTtcblx0XHRcdHJldHVybiBmdW5jKG1ldGFkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yID0gX24wLmE7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRvdmVybGF5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGJhZE1ldGFkYXRhKGVycm9yKVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkQWxpYXNDaGFuZ2UgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdBbGlhc0NoYW5nZScsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja0FsaWFzID0gRjQoXG5cdGZ1bmN0aW9uIChuYW1lLCBvbGQsIF9uZXcsIGNoYW5nZXMpIHtcblx0XHRyZXR1cm4gKF9VdGlsc19lcShvbGQudGlwZSwgX25ldy50aXBlKSAmJiBfVXRpbHNfZXEob2xkLmFyZ3MsIF9uZXcuYXJncykpID8gY2hhbmdlcyA6IEEyKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEFsaWFzQ2hhbmdlKG5hbWUpLFxuXHRcdFx0Y2hhbmdlcyk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGFkZFRhZyA9IEYzKFxuXHRmdW5jdGlvbiAodGFnLCBfbjAsIGNoYW5nZXMpIHtcblx0XHRyZXR1cm4gX1V0aWxzX3VwZGF0ZShcblx0XHRcdGNoYW5nZXMsXG5cdFx0XHR7XG5cdFx0XHRcdGFkZGVkOiBBMihlbG0kY29yZSRMaXN0JGNvbnMsIHRhZywgY2hhbmdlcy5hZGRlZClcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja1RhZyA9IEY0KFxuXHRmdW5jdGlvbiAodGFnLCBvbGQsIF9uZXcsIGNoYW5nZXMpIHtcblx0XHRyZXR1cm4gX1V0aWxzX2VxKG9sZCwgX25ldykgPyBjaGFuZ2VzIDogX1V0aWxzX3VwZGF0ZShcblx0XHRcdGNoYW5nZXMsXG5cdFx0XHR7XG5cdFx0XHRcdGNoYW5nZWQ6IEEyKGVsbSRjb3JlJExpc3QkY29ucywgdGFnLCBjaGFuZ2VzLmNoYW5nZWQpXG5cdFx0XHR9KTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkcmVtb3ZlVGFnID0gRjMoXG5cdGZ1bmN0aW9uICh0YWcsIF9uMCwgY2hhbmdlcykge1xuXHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0Y2hhbmdlcyxcblx0XHRcdHtcblx0XHRcdFx0cmVtb3ZlZDogQTIoZWxtJGNvcmUkTGlzdCRjb25zLCB0YWcsIGNoYW5nZXMucmVtb3ZlZClcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVW5pb25DaGFuZ2UgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdVbmlvbkNoYW5nZScsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVGFnQ2hhbmdlcyA9IEY0KFxuXHRmdW5jdGlvbiAocmVtb3ZlZCwgY2hhbmdlZCwgYWRkZWQsIGFyZ3NNYXRjaCkge1xuXHRcdHJldHVybiB7YWRkZWQ6IGFkZGVkLCBhcmdzTWF0Y2g6IGFyZ3NNYXRjaCwgY2hhbmdlZDogY2hhbmdlZCwgcmVtb3ZlZDogcmVtb3ZlZH07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRlbXB0eVRhZ0NoYW5nZXMgPSBmdW5jdGlvbiAoYXJnc01hdGNoKSB7XG5cdHJldHVybiBBNChlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVGFnQ2hhbmdlcywgX0xpc3RfTmlsLCBfTGlzdF9OaWwsIF9MaXN0X05pbCwgYXJnc01hdGNoKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGhhc1RhZ0NoYW5nZXMgPSBmdW5jdGlvbiAodGFnQ2hhbmdlcykge1xuXHRyZXR1cm4gX1V0aWxzX2VxKFxuXHRcdHRhZ0NoYW5nZXMsXG5cdFx0QTQoZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFRhZ0NoYW5nZXMsIF9MaXN0X05pbCwgX0xpc3RfTmlsLCBfTGlzdF9OaWwsIHRydWUpKTtcbn07XG52YXIgZWxtJGNvcmUkRGljdCRtZXJnZSA9IEY2KFxuXHRmdW5jdGlvbiAobGVmdFN0ZXAsIGJvdGhTdGVwLCByaWdodFN0ZXAsIGxlZnREaWN0LCByaWdodERpY3QsIGluaXRpYWxSZXN1bHQpIHtcblx0XHR2YXIgc3RlcFN0YXRlID0gRjMoXG5cdFx0XHRmdW5jdGlvbiAocktleSwgclZhbHVlLCBfbjApIHtcblx0XHRcdFx0c3RlcFN0YXRlOlxuXHRcdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRcdHZhciBsaXN0ID0gX24wLmE7XG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IF9uMC5iO1xuXHRcdFx0XHRcdGlmICghbGlzdC5iKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0bGlzdCxcblx0XHRcdFx0XHRcdFx0QTMocmlnaHRTdGVwLCByS2V5LCByVmFsdWUsIHJlc3VsdCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgX24yID0gbGlzdC5hO1xuXHRcdFx0XHRcdFx0dmFyIGxLZXkgPSBfbjIuYTtcblx0XHRcdFx0XHRcdHZhciBsVmFsdWUgPSBfbjIuYjtcblx0XHRcdFx0XHRcdHZhciByZXN0ID0gbGlzdC5iO1xuXHRcdFx0XHRcdFx0aWYgKF9VdGlsc19jbXAobEtleSwgcktleSkgPCAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRyS2V5ID0gcktleSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRyVmFsdWUgPSByVmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkX24wID0gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRyZXN0LFxuXHRcdFx0XHRcdFx0XHRcdEEzKGxlZnRTdGVwLCBsS2V5LCBsVmFsdWUsIHJlc3VsdCkpO1xuXHRcdFx0XHRcdFx0XHRyS2V5ID0gJHRlbXAkcktleTtcblx0XHRcdFx0XHRcdFx0clZhbHVlID0gJHRlbXAkclZhbHVlO1xuXHRcdFx0XHRcdFx0XHRfbjAgPSAkdGVtcCRfbjA7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIHN0ZXBTdGF0ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmIChfVXRpbHNfY21wKGxLZXksIHJLZXkpID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdCxcblx0XHRcdFx0XHRcdFx0XHRcdEEzKHJpZ2h0U3RlcCwgcktleSwgclZhbHVlLCByZXN1bHQpKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdHJlc3QsXG5cdFx0XHRcdFx0XHRcdFx0XHRBNChib3RoU3RlcCwgbEtleSwgbFZhbHVlLCByVmFsdWUsIHJlc3VsdCkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR2YXIgX24zID0gQTMoXG5cdFx0XHRlbG0kY29yZSREaWN0JGZvbGRsLFxuXHRcdFx0c3RlcFN0YXRlLFxuXHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCR0b0xpc3QobGVmdERpY3QpLFxuXHRcdFx0XHRpbml0aWFsUmVzdWx0KSxcblx0XHRcdHJpZ2h0RGljdCk7XG5cdFx0dmFyIGxlZnRvdmVycyA9IF9uMy5hO1xuXHRcdHZhciBpbnRlcm1lZGlhdGVSZXN1bHQgPSBfbjMuYjtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0RjIoXG5cdFx0XHRcdGZ1bmN0aW9uIChfbjQsIHJlc3VsdCkge1xuXHRcdFx0XHRcdHZhciBrID0gX240LmE7XG5cdFx0XHRcdFx0dmFyIHYgPSBfbjQuYjtcblx0XHRcdFx0XHRyZXR1cm4gQTMobGVmdFN0ZXAsIGssIHYsIHJlc3VsdCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0aW50ZXJtZWRpYXRlUmVzdWx0LFxuXHRcdFx0bGVmdG92ZXJzKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2tVbmlvbiA9IEY0KFxuXHRmdW5jdGlvbiAobmFtZSwgb2xkLCBfbmV3LCBjaGFuZ2VzKSB7XG5cdFx0dmFyIHRhZ0NoYW5nZXMgPSBBNihcblx0XHRcdGVsbSRjb3JlJERpY3QkbWVyZ2UsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRyZW1vdmVUYWcsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja1RhZyxcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGFkZFRhZyxcblx0XHRcdG9sZC50YWdzLFxuXHRcdFx0X25ldy50YWdzLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGVtcHR5VGFnQ2hhbmdlcyhcblx0XHRcdFx0X1V0aWxzX2VxKG9sZC5hcmdzLCBfbmV3LmFyZ3MpKSk7XG5cdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRoYXNUYWdDaGFuZ2VzKHRhZ0NoYW5nZXMpID8gY2hhbmdlcyA6IEEyKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFVuaW9uQ2hhbmdlLCBuYW1lLCB0YWdDaGFuZ2VzKSxcblx0XHRcdGNoYW5nZXMpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRpZ25vcmUgPSBGMyhcblx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIHJlcG9ydCkge1xuXHRcdHJldHVybiByZXBvcnQ7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRNZXNzYWdlQ2hhbmdlZCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ01lc3NhZ2VDaGFuZ2VkJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRTb21ldGhpbmdDaGFuZ2VkID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnU29tZXRoaW5nQ2hhbmdlZCcsIGE6IGF9O1xufTtcbnZhciBlbG0kY29yZSRCYXNpY3MkbmVxID0gX1V0aWxzX25vdEVxdWFsO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrVHlwZXMgPSBGMihcblx0ZnVuY3Rpb24gKG9sZCwgX25ldykge1xuXHRcdHJldHVybiAoIV9VdGlsc19lcShvbGQubWVzc2FnZSwgX25ldy5tZXNzYWdlKSkgPyBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkTWVzc2FnZUNoYW5nZWQsIG9sZC5tZXNzYWdlLCBfbmV3Lm1lc3NhZ2UpIDogZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFNvbWV0aGluZ0NoYW5nZWQoXG5cdFx0XHRBNihcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCRtZXJnZSxcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaWdub3JlLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja1VuaW9uLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRpZ25vcmUsXG5cdFx0XHRcdG9sZC51bmlvbnMsXG5cdFx0XHRcdF9uZXcudW5pb25zLFxuXHRcdFx0XHRBNihlbG0kY29yZSREaWN0JG1lcmdlLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRpZ25vcmUsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrQWxpYXMsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlnbm9yZSwgb2xkLmFsaWFzZXMsIF9uZXcuYWxpYXNlcywgX0xpc3RfTmlsKSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVmVyc2lvbkNoYW5nZWQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdWZXJzaW9uQ2hhbmdlZCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVjayA9IEYyKFxuXHRmdW5jdGlvbiAob2xkLCBfbmV3KSB7XG5cdFx0cmV0dXJuICghX1V0aWxzX2VxKG9sZC52ZXJzaW9ucy5lbG0sIF9uZXcudmVyc2lvbnMuZWxtKSkgPyBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVmVyc2lvbkNoYW5nZWQsIG9sZC52ZXJzaW9ucy5lbG0sIF9uZXcudmVyc2lvbnMuZWxtKSA6IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrVHlwZXMsIG9sZC50eXBlcywgX25ldy50eXBlcyk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUmlza3lJbXBvcnQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdSaXNreUltcG9ydCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHVwbG9hZERlY29kZXIgPSBBMyhcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0RjIoXG5cdFx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKHgsIHkpO1xuXHRcdH0pLFxuXHRBMihlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCwgJ21ldGFkYXRhJywgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlciksXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAnaGlzdG9yeScsIGVsbSRqc29uJEpzb24kRGVjb2RlJHZhbHVlKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEZpbmUgPSB7JDogJ0ZpbmUnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkSW1wb3NzaWJsZSA9IHskOiAnSW1wb3NzaWJsZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRSaXNreSA9IHskOiAnUmlza3knfTtcbnZhciBlbG0kY29yZSRMaXN0JGlzRW1wdHkgPSBmdW5jdGlvbiAoeHMpIHtcblx0aWYgKCF4cy5iKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRzb21lID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0cmV0dXJuICFlbG0kY29yZSRMaXN0JGlzRW1wdHkobGlzdCk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRldmFsdWF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcblx0aWYgKGNoYW5nZS4kID09PSAnQWxpYXNDaGFuZ2UnKSB7XG5cdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlO1xuXHR9IGVsc2Uge1xuXHRcdHZhciByZW1vdmVkID0gY2hhbmdlLmIucmVtb3ZlZDtcblx0XHR2YXIgY2hhbmdlZCA9IGNoYW5nZS5iLmNoYW5nZWQ7XG5cdFx0dmFyIGFkZGVkID0gY2hhbmdlLmIuYWRkZWQ7XG5cdFx0dmFyIGFyZ3NNYXRjaCA9IGNoYW5nZS5iLmFyZ3NNYXRjaDtcblx0XHRyZXR1cm4gKCghYXJnc01hdGNoKSB8fCAoZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JHNvbWUoY2hhbmdlZCkgfHwgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JHNvbWUocmVtb3ZlZCkpKSA/IGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlIDogKGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRzb21lKGFkZGVkKSA/IGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRSaXNreSA6IGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRGaW5lKTtcblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkd29yc3RDYXNlID0gRjIoXG5cdGZ1bmN0aW9uIChzdGF0dXMsIHN0YXR1c0xpc3QpIHtcblx0XHR3b3JzdENhc2U6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmICghc3RhdHVzTGlzdC5iKSB7XG5cdFx0XHRcdHJldHVybiBzdGF0dXM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzd2l0Y2ggKHN0YXR1c0xpc3QuYS4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnSW1wb3NzaWJsZSc6XG5cdFx0XHRcdFx0XHR2YXIgX24xID0gc3RhdHVzTGlzdC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlO1xuXHRcdFx0XHRcdGNhc2UgJ1Jpc2t5Jzpcblx0XHRcdFx0XHRcdHZhciBfbjIgPSBzdGF0dXNMaXN0LmE7XG5cdFx0XHRcdFx0XHR2YXIgcmVzdCA9IHN0YXR1c0xpc3QuYjtcblx0XHRcdFx0XHRcdHZhciAkdGVtcCRzdGF0dXMgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkUmlza3ksXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJHN0YXR1c0xpc3QgPSByZXN0O1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gJHRlbXAkc3RhdHVzO1xuXHRcdFx0XHRcdFx0c3RhdHVzTGlzdCA9ICR0ZW1wJHN0YXR1c0xpc3Q7XG5cdFx0XHRcdFx0XHRjb250aW51ZSB3b3JzdENhc2U7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHZhciBfbjMgPSBzdGF0dXNMaXN0LmE7XG5cdFx0XHRcdFx0XHR2YXIgcmVzdCA9IHN0YXR1c0xpc3QuYjtcblx0XHRcdFx0XHRcdHZhciAkdGVtcCRzdGF0dXMgPSBzdGF0dXMsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJHN0YXR1c0xpc3QgPSByZXN0O1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gJHRlbXAkc3RhdHVzO1xuXHRcdFx0XHRcdFx0c3RhdHVzTGlzdCA9ICR0ZW1wJHN0YXR1c0xpc3Q7XG5cdFx0XHRcdFx0XHRjb250aW51ZSB3b3JzdENhc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRldmFsdWF0ZSA9IGZ1bmN0aW9uIChyZXBvcnQpIHtcblx0c3dpdGNoIChyZXBvcnQuJCkge1xuXHRcdGNhc2UgJ0NvcnJ1cHRIaXN0b3J5Jzpcblx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkSW1wb3NzaWJsZTtcblx0XHRjYXNlICdWZXJzaW9uQ2hhbmdlZCc6XG5cdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEltcG9zc2libGU7XG5cdFx0Y2FzZSAnTWVzc2FnZUNoYW5nZWQnOlxuXHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2YXIgY2hhbmdlcyA9IHJlcG9ydC5hO1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkd29yc3RDYXNlLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkRmluZSxcblx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRtYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRldmFsdWF0ZUNoYW5nZSwgY2hhbmdlcykpO1xuXHR9XG59O1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGRlY29kZVN0cmluZyA9IF9Kc29uX3J1bk9uU3RyaW5nO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYXNzZXNzSW1wb3J0ID0gRjIoXG5cdGZ1bmN0aW9uIChtZXRhZGF0YSwganNvblN0cmluZykge1xuXHRcdHZhciBfbjAgPSBBMihlbG0kanNvbiRKc29uJERlY29kZSRkZWNvZGVTdHJpbmcsIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdXBsb2FkRGVjb2RlciwganNvblN0cmluZyk7XG5cdFx0aWYgKF9uMC4kID09PSAnRXJyJykge1xuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRjb3JydXB0SW1wb3J0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9uMSA9IF9uMC5hO1xuXHRcdFx0dmFyIGZvcmVpZ25NZXRhZGF0YSA9IF9uMS5hO1xuXHRcdFx0dmFyIHJhd0hpc3RvcnkgPSBfbjEuYjtcblx0XHRcdHZhciByZXBvcnQgPSBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVjaywgZm9yZWlnbk1ldGFkYXRhLCBtZXRhZGF0YSk7XG5cdFx0XHR2YXIgX24yID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGV2YWx1YXRlKHJlcG9ydCk7XG5cdFx0XHRzd2l0Y2ggKF9uMi4kKSB7XG5cdFx0XHRcdGNhc2UgJ0ltcG9zc2libGUnOlxuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCYWRJbXBvcnQocmVwb3J0KSk7XG5cdFx0XHRcdGNhc2UgJ1Jpc2t5Jzpcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihcblx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUmlza3lJbXBvcnQsIHJlcG9ydCwgcmF3SGlzdG9yeSkpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2socmF3SGlzdG9yeSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNsb3NlID0gRjIoXG5cdGZ1bmN0aW9uIChtc2csIHN0YXRlKSB7XG5cdFx0c3dpdGNoIChzdGF0ZS4kKSB7XG5cdFx0XHRjYXNlICdOb25lJzpcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHRjYXNlICdCYWRNZXRhZGF0YSc6XG5cdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0Y2FzZSAnQmFkSW1wb3J0Jzpcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR2YXIgcmF3SGlzdG9yeSA9IHN0YXRlLmI7XG5cdFx0XHRcdGlmIChtc2cuJCA9PT0gJ0NhbmNlbCcpIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkSnVzdChyYXdIaXN0b3J5KTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwVXBkYXRlID0gRjMoXG5cdGZ1bmN0aW9uICh1cGRhdGUsIG1zZywgbW9kZWwpIHtcblx0XHR3cmFwVXBkYXRlOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRzd2l0Y2ggKG1zZy4kKSB7XG5cdFx0XHRcdGNhc2UgJ05vT3AnOlxuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdGNhc2UgJ1VzZXJNc2cnOlxuXHRcdFx0XHRcdHZhciB1c2VyTXNnID0gbXNnLmE7XG5cdFx0XHRcdFx0dmFyIHVzZXJNb2RlbCA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0TGF0ZXN0TW9kZWwobW9kZWwuc3RhdGUpO1xuXHRcdFx0XHRcdHZhciBuZXdIaXN0b3J5ID0gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGQsIHVzZXJNc2csIHVzZXJNb2RlbCwgbW9kZWwuaGlzdG9yeSk7XG5cdFx0XHRcdFx0dmFyIF9uMSA9IEEyKHVwZGF0ZSwgdXNlck1zZywgdXNlck1vZGVsKTtcblx0XHRcdFx0XHR2YXIgbmV3VXNlck1vZGVsID0gX24xLmE7XG5cdFx0XHRcdFx0dmFyIHVzZXJDbWRzID0gX24xLmI7XG5cdFx0XHRcdFx0dmFyIGNvbW1hbmRzID0gQTIoZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnLCB1c2VyQ21kcyk7XG5cdFx0XHRcdFx0dmFyIF9uMiA9IG1vZGVsLnN0YXRlO1xuXHRcdFx0XHRcdGlmIChfbjIuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRleHBhbmRvOiBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlLCBuZXdVc2VyTW9kZWwsIG1vZGVsLmV4cGFuZG8pLFxuXHRcdFx0XHRcdFx0XHRcdFx0aGlzdG9yeTogbmV3SGlzdG9yeSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJ1bm5pbmcobmV3VXNlck1vZGVsKVxuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkYmF0Y2goXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21tYW5kcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRzY3JvbGwobW9kZWwucG9wb3V0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIGluZGV4ID0gX24yLmE7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXhNb2RlbCA9IF9uMi5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0aGlzdG9yeTogbmV3SGlzdG9yeSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFBhdXNlZCwgaW5kZXgsIGluZGV4TW9kZWwsIG5ld1VzZXJNb2RlbClcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0Y29tbWFuZHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnRXhwYW5kb01zZyc6XG5cdFx0XHRcdFx0dmFyIGVNc2cgPSBtc2cuYTtcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZXhwYW5kbzogQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUsIGVNc2csIG1vZGVsLmV4cGFuZG8pXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRjYXNlICdSZXN1bWUnOlxuXHRcdFx0XHRcdHZhciBfbjMgPSBtb2RlbC5zdGF0ZTtcblx0XHRcdFx0XHRpZiAoX24zLiQgPT09ICdSdW5uaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHVzZXJNb2RlbCA9IF9uMy5jO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXhwYW5kbzogQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZSwgdXNlck1vZGVsLCBtb2RlbC5leHBhbmRvKSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJ1bm5pbmcodXNlck1vZGVsKVxuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHNjcm9sbChtb2RlbC5wb3BvdXQpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ0p1bXAnOlxuXHRcdFx0XHRcdHZhciBpbmRleCA9IG1zZy5hO1xuXHRcdFx0XHRcdHZhciBfbjQgPSBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldCwgdXBkYXRlLCBpbmRleCwgbW9kZWwuaGlzdG9yeSk7XG5cdFx0XHRcdFx0dmFyIGluZGV4TW9kZWwgPSBfbjQuYTtcblx0XHRcdFx0XHR2YXIgaW5kZXhNc2cgPSBfbjQuYjtcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZXhwYW5kbzogQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZSwgaW5kZXhNb2RlbCwgbW9kZWwuZXhwYW5kbyksXG5cdFx0XHRcdFx0XHRcdFx0c3RhdGU6IEEzKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRQYXVzZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4TW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldExhdGVzdE1vZGVsKG1vZGVsLnN0YXRlKSlcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdGNhc2UgJ09wZW4nOlxuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkVGFzayRwZXJmb3JtLFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoX241KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kTm9PcDtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0X0RlYnVnZ2VyX29wZW4obW9kZWwucG9wb3V0KSkpO1xuXHRcdFx0XHRjYXNlICdVcCc6XG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0dmFyIF9uNiA9IG1vZGVsLnN0YXRlO1xuXHRcdFx0XHRcdFx0aWYgKF9uNi4kID09PSAnUGF1c2VkJykge1xuXHRcdFx0XHRcdFx0XHR2YXIgaSA9IF9uNi5hO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHNpemUobW9kZWwuaGlzdG9yeSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSgpO1xuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApIHtcblx0XHRcdFx0XHRcdHZhciAkdGVtcCR1cGRhdGUgPSB1cGRhdGUsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJG1zZyA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kSnVtcChpbmRleCAtIDEpLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRtb2RlbCA9IG1vZGVsO1xuXHRcdFx0XHRcdFx0dXBkYXRlID0gJHRlbXAkdXBkYXRlO1xuXHRcdFx0XHRcdFx0bXNnID0gJHRlbXAkbXNnO1xuXHRcdFx0XHRcdFx0bW9kZWwgPSAkdGVtcCRtb2RlbDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlIHdyYXBVcGRhdGU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdEb3duJzpcblx0XHRcdFx0XHR2YXIgX243ID0gbW9kZWwuc3RhdGU7XG5cdFx0XHRcdFx0aWYgKF9uNy4kID09PSAnUnVubmluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBpbmRleCA9IF9uNy5hO1xuXHRcdFx0XHRcdFx0dmFyIHVzZXJNb2RlbCA9IF9uNy5jO1xuXHRcdFx0XHRcdFx0aWYgKF9VdGlsc19lcShcblx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc2l6ZShtb2RlbC5oaXN0b3J5KSAtIDEpKSB7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCR1cGRhdGUgPSB1cGRhdGUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbXNnID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSZXN1bWUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbW9kZWwgPSBtb2RlbDtcblx0XHRcdFx0XHRcdFx0dXBkYXRlID0gJHRlbXAkdXBkYXRlO1xuXHRcdFx0XHRcdFx0XHRtc2cgPSAkdGVtcCRtc2c7XG5cdFx0XHRcdFx0XHRcdG1vZGVsID0gJHRlbXAkbW9kZWw7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIHdyYXBVcGRhdGU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkdXBkYXRlID0gdXBkYXRlLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG1zZyA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kSnVtcChpbmRleCArIDEpLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG1vZGVsID0gbW9kZWw7XG5cdFx0XHRcdFx0XHRcdHVwZGF0ZSA9ICR0ZW1wJHVwZGF0ZTtcblx0XHRcdFx0XHRcdFx0bXNnID0gJHRlbXAkbXNnO1xuXHRcdFx0XHRcdFx0XHRtb2RlbCA9ICR0ZW1wJG1vZGVsO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZSB3cmFwVXBkYXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnSW1wb3J0Jzpcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdpdGhHb29kTWV0YWRhdGEsXG5cdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfbjgpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdXBsb2FkKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRjYXNlICdFeHBvcnQnOlxuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd2l0aEdvb2RNZXRhZGF0YSxcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZG93bmxvYWQsIG1ldGFkYXRhLCBtb2RlbC5oaXN0b3J5KSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0Y2FzZSAnVXBsb2FkJzpcblx0XHRcdFx0XHR2YXIganNvblN0cmluZyA9IG1zZy5hO1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd2l0aEdvb2RNZXRhZGF0YSxcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfbjkgPSBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGFzc2Vzc0ltcG9ydCwgbWV0YWRhdGEsIGpzb25TdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRpZiAoX245LiQgPT09ICdFcnInKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG5ld092ZXJsYXkgPSBfbjkuYTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7b3ZlcmxheTogbmV3T3ZlcmxheX0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByYXdIaXN0b3J5ID0gX245LmE7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kbG9hZE5ld0hpc3RvcnksIHJhd0hpc3RvcnksIHVwZGF0ZSwgbW9kZWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR2YXIgb3ZlcmxheU1zZyA9IG1zZy5hO1xuXHRcdFx0XHRcdHZhciBfbjEwID0gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRjbG9zZSwgb3ZlcmxheU1zZywgbW9kZWwub3ZlcmxheSk7XG5cdFx0XHRcdFx0aWYgKF9uMTAuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0XHR7b3ZlcmxheTogZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRub25lfSksXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHJhd0hpc3RvcnkgPSBfbjEwLmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRsb2FkTmV3SGlzdG9yeSwgcmF3SGlzdG9yeSwgdXBkYXRlLCBtb2RlbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkU2V0JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBpbml0aWFsU3RhdGUsIF9uMCkge1xuXHRcdHZhciBkaWN0ID0gX24wLmE7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkRGljdCRmb2xkcixcblx0XHRcdEYzKFxuXHRcdFx0XHRmdW5jdGlvbiAoa2V5LCBfbjEsIHN0YXRlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKGZ1bmMsIGtleSwgc3RhdGUpO1xuXHRcdFx0XHR9KSxcblx0XHRcdGluaXRpYWxTdGF0ZSxcblx0XHRcdGRpY3QpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRTdHJpbmckZHJvcExlZnQgPSBGMihcblx0ZnVuY3Rpb24gKG4sIHN0cmluZykge1xuXHRcdHJldHVybiAobiA8IDEpID8gc3RyaW5nIDogQTMoXG5cdFx0XHRlbG0kY29yZSRTdHJpbmckc2xpY2UsXG5cdFx0XHRuLFxuXHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHJpbmcpLFxuXHRcdFx0c3RyaW5nKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkU3RyaW5nJHN0YXJ0c1dpdGggPSBfU3RyaW5nX3N0YXJ0c1dpdGg7XG52YXIgZWxtJHVybCRVcmwkSHR0cCA9IHskOiAnSHR0cCd9O1xudmFyIGVsbSR1cmwkVXJsJEh0dHBzID0geyQ6ICdIdHRwcyd9O1xudmFyIGVsbSRjb3JlJFN0cmluZyRpbmRleGVzID0gX1N0cmluZ19pbmRleGVzO1xudmFyIGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5ID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRyZXR1cm4gc3RyaW5nID09PSAnJztcbn07XG52YXIgZWxtJGNvcmUkU3RyaW5nJHRvSW50ID0gX1N0cmluZ190b0ludDtcbnZhciBlbG0kdXJsJFVybCRVcmwgPSBGNihcblx0ZnVuY3Rpb24gKHByb3RvY29sLCBob3N0LCBwb3J0XywgcGF0aCwgcXVlcnksIGZyYWdtZW50KSB7XG5cdFx0cmV0dXJuIHtmcmFnbWVudDogZnJhZ21lbnQsIGhvc3Q6IGhvc3QsIHBhdGg6IHBhdGgsIHBvcnRfOiBwb3J0XywgcHJvdG9jb2w6IHByb3RvY29sLCBxdWVyeTogcXVlcnl9O1xuXHR9KTtcbnZhciBlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVBhdGggPSBGNShcblx0ZnVuY3Rpb24gKHByb3RvY29sLCBwYXRoLCBwYXJhbXMsIGZyYWcsIHN0cikge1xuXHRcdGlmIChlbG0kY29yZSRTdHJpbmckaXNFbXB0eShzdHIpIHx8IEEyKGVsbSRjb3JlJFN0cmluZyRjb250YWlucywgJ0AnLCBzdHIpKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9uMCA9IEEyKGVsbSRjb3JlJFN0cmluZyRpbmRleGVzLCAnOicsIHN0cik7XG5cdFx0XHRpZiAoIV9uMC5iKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdEE2KGVsbSR1cmwkVXJsJFVybCwgcHJvdG9jb2wsIHN0ciwgZWxtJGNvcmUkTWF5YmUkTm90aGluZywgcGF0aCwgcGFyYW1zLCBmcmFnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIV9uMC5iLmIpIHtcblx0XHRcdFx0XHR2YXIgaSA9IF9uMC5hO1xuXHRcdFx0XHRcdHZhciBfbjEgPSBlbG0kY29yZSRTdHJpbmckdG9JbnQoXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGkgKyAxLCBzdHIpKTtcblx0XHRcdFx0XHRpZiAoX24xLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBwb3J0XyA9IF9uMTtcblx0XHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdFx0XHRBNihcblx0XHRcdFx0XHRcdFx0XHRlbG0kdXJsJFVybCRVcmwsXG5cdFx0XHRcdFx0XHRcdFx0cHJvdG9jb2wsXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGNvcmUkU3RyaW5nJGxlZnQsIGksIHN0ciksXG5cdFx0XHRcdFx0XHRcdFx0cG9ydF8sXG5cdFx0XHRcdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHRcdFx0XHRwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0ZnJhZykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVRdWVyeSA9IEY0KFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIHBhcmFtcywgZnJhZywgc3RyKSB7XG5cdFx0aWYgKGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5KHN0cikpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkU3RyaW5nJGluZGV4ZXMsICcvJywgc3RyKTtcblx0XHRcdGlmICghX24wLmIpIHtcblx0XHRcdFx0cmV0dXJuIEE1KGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUGF0aCwgcHJvdG9jb2wsICcvJywgcGFyYW1zLCBmcmFnLCBzdHIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGkgPSBfbjAuYTtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUGF0aCxcblx0XHRcdFx0XHRwcm90b2NvbCxcblx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGksIHN0ciksXG5cdFx0XHRcdFx0cGFyYW1zLFxuXHRcdFx0XHRcdGZyYWcsXG5cdFx0XHRcdFx0QTIoZWxtJGNvcmUkU3RyaW5nJGxlZnQsIGksIHN0cikpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVGcmFnbWVudCA9IEYzKFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIGZyYWcsIHN0cikge1xuXHRcdGlmIChlbG0kY29yZSRTdHJpbmckaXNFbXB0eShzdHIpKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9uMCA9IEEyKGVsbSRjb3JlJFN0cmluZyRpbmRleGVzLCAnPycsIHN0cik7XG5cdFx0XHRpZiAoIV9uMC5iKSB7XG5cdFx0XHRcdHJldHVybiBBNChlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVF1ZXJ5LCBwcm90b2NvbCwgZWxtJGNvcmUkTWF5YmUkTm90aGluZywgZnJhZywgc3RyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpID0gX24wLmE7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVF1ZXJ5LFxuXHRcdFx0XHRcdHByb3RvY29sLFxuXHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGkgKyAxLCBzdHIpKSxcblx0XHRcdFx0XHRmcmFnLFxuXHRcdFx0XHRcdEEyKGVsbSRjb3JlJFN0cmluZyRsZWZ0LCBpLCBzdHIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSR1cmwkVXJsJGNob21wQWZ0ZXJQcm90b2NvbCA9IEYyKFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIHN0cikge1xuXHRcdGlmIChlbG0kY29yZSRTdHJpbmckaXNFbXB0eShzdHIpKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9uMCA9IEEyKGVsbSRjb3JlJFN0cmluZyRpbmRleGVzLCAnIycsIHN0cik7XG5cdFx0XHRpZiAoIV9uMC5iKSB7XG5cdFx0XHRcdHJldHVybiBBMyhlbG0kdXJsJFVybCRjaG9tcEJlZm9yZUZyYWdtZW50LCBwcm90b2NvbCwgZWxtJGNvcmUkTWF5YmUkTm90aGluZywgc3RyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpID0gX24wLmE7XG5cdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHRlbG0kdXJsJFVybCRjaG9tcEJlZm9yZUZyYWdtZW50LFxuXHRcdFx0XHRcdHByb3RvY29sLFxuXHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGkgKyAxLCBzdHIpKSxcblx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckbGVmdCwgaSwgc3RyKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kdXJsJFVybCRmcm9tU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkU3RyaW5nJHN0YXJ0c1dpdGgsICdodHRwOi8vJywgc3RyKSA/IEEyKFxuXHRcdGVsbSR1cmwkVXJsJGNob21wQWZ0ZXJQcm90b2NvbCxcblx0XHRlbG0kdXJsJFVybCRIdHRwLFxuXHRcdEEyKGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCwgNywgc3RyKSkgOiAoQTIoZWxtJGNvcmUkU3RyaW5nJHN0YXJ0c1dpdGgsICdodHRwczovLycsIHN0cikgPyBBMihcblx0XHRlbG0kdXJsJFVybCRjaG9tcEFmdGVyUHJvdG9jb2wsXG5cdFx0ZWxtJHVybCRVcmwkSHR0cHMsXG5cdFx0QTIoZWxtJGNvcmUkU3RyaW5nJGRyb3BMZWZ0LCA4LCBzdHIpKSA6IGVsbSRjb3JlJE1heWJlJE5vdGhpbmcpO1xufTtcbnZhciBlbG0kYnJvd3NlciRCcm93c2VyJGVsZW1lbnQgPSBfQnJvd3Nlcl9lbGVtZW50O1xudmFyIGF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkbWFpbiA9IGVsbSRicm93c2VyJEJyb3dzZXIkZWxlbWVudChcblx0e2luaXQ6IGF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkaW5pdCwgc3Vic2NyaXB0aW9uczogYXV0aG9yJHByb2plY3QkRGV0YWlsUGFnZSRzdWJzY3JpcHRpb25zLCB1cGRhdGU6IGF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkdXBkYXRlLCB2aWV3OiBhdXRob3IkcHJvamVjdCREZXRhaWxQYWdlJHZpZXd9KTtcbl9QbGF0Zm9ybV9leHBvcnQoeydEZXRhaWxQYWdlJzp7J2luaXQnOmF1dGhvciRwcm9qZWN0JERldGFpbFBhZ2UkbWFpbihlbG0kanNvbiRKc29uJERlY29kZSR2YWx1ZSkoe1widmVyc2lvbnNcIjp7XCJlbG1cIjpcIjAuMTkuMFwifSxcInR5cGVzXCI6e1wibWVzc2FnZVwiOlwiRGV0YWlsUGFnZS5Nc2dcIixcImFsaWFzZXNcIjp7XCJUaGVQcm9jZXNzLlByb2Nlc3NEYXRhXCI6e1wiYXJnc1wiOltdLFwidHlwZVwiOlwieyBpZCA6IElkLklkLCB0aXRsZSA6IFN0cmluZy5TdHJpbmcsIGRlc2NyaXB0aW9uIDogU3RyaW5nLlN0cmluZywgY29tcGxldGlvbnMgOiBCYXNpY3MuSW50LCBjcmVhdGVkQXQgOiBUaW1lLlBvc2l4LCBsYXN0QWN0aXZpdHkgOiBUaW1lLlBvc2l4IH1cIn19LFwidW5pb25zXCI6e1wiRGV0YWlsUGFnZS5Nc2dcIjp7XCJhcmdzXCI6W10sXCJ0YWdzXCI6e1wiVXNlckNsaWNrZWRDcmVhdGVQcm9jZXNzXCI6W10sXCJVc2VyVXBkYXRlZFRpdGxlRmllbGRcIjpbXCJTdHJpbmcuU3RyaW5nXCJdLFwiVXNlclVwZGF0ZWREZXNjcmlwdGlvbkZpZWxkXCI6W1wiU3RyaW5nLlN0cmluZ1wiXSxcIlVzZXJTYXZlZE5ld1Byb2Nlc3NcIjpbXCJUaGVQcm9jZXNzLlByb2Nlc3NEYXRhXCJdLFwiU2VydmVyUmV0dXJuZWRTYXZlUmVzcG9uc2VcIjpbXX19LFwiSWQuSWRcIjp7XCJhcmdzXCI6W10sXCJ0YWdzXCI6e1wiSWRcIjpbXCJTdHJpbmcuU3RyaW5nXCJdfX0sXCJCYXNpY3MuSW50XCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIkludFwiOltdfX0sXCJTdHJpbmcuU3RyaW5nXCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIlN0cmluZ1wiOltdfX0sXCJUaW1lLlBvc2l4XCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIlBvc2l4XCI6W1wiQmFzaWNzLkludFwiXX19fX19KX19KTt9KHRoaXMpKTsiLCIvKiBnbG9iYWwgY29udGV4dCAqL1xuaW1wb3J0ICcuLi9jc3MvcHJvY2Vzcy1kZXRhaWwuY3NzJztcbmltcG9ydCB7IEVsbSB9IGZyb20gJy4uL2VsbS9EZXRhaWxQYWdlLmVsbSc7XG5cbkVsbS5EZXRhaWxQYWdlLmluaXQoe1xuICBub2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWxtJyksXG4gIGZsYWdzOiBjb250ZXh0LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9