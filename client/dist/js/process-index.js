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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/js/process-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/css/common.css":
/*!***********************************!*\
  !*** ./client/src/css/common.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./client/src/css/process-index.css":
/*!******************************************!*\
  !*** ./client/src/css/process-index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./client/src/elm/IndexPage.elm":
/*!**************************************!*\
  !*** ./client/src/elm/IndexPage.elm ***!
  \**************************************/
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
var author$project$IndexPage$Error = function (a) {
	return {$: 'Error', a: a};
};
var author$project$IndexPage$PageModel = F2(
	function (a, b) {
		return {$: 'PageModel', a: a, b: b};
	});
var author$project$IndexPage$Success = function (a) {
	return {$: 'Success', a: a};
};
var author$project$Id$Id = function (a) {
	return {$: 'Id', a: a};
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var author$project$Id$mock = author$project$Id$Id('123456');
var author$project$TheProcess$Active = function (a) {
	return {$: 'Active', a: a};
};
var author$project$TheProcess$Inactive = {$: 'Inactive'};
var author$project$TheProcess$TheProcess = F2(
	function (a, b) {
		return {$: 'TheProcess', a: a, b: b};
	});
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var author$project$TheProcess$mock = _List_fromArray(
	[
		A2(
		author$project$TheProcess$TheProcess,
		{
			completions: 12,
			createdAt: elm$time$Time$millisToPosix(1565984035514),
			description: 'Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered.',
			id: author$project$Id$mock,
			lastActivity: elm$time$Time$millisToPosix(1565984035514),
			title: 'Weekly blog update for MegaMaker Community article'
		},
		author$project$TheProcess$Active(
			_Utils_Tuple2(12, 20))),
		A2(
		author$project$TheProcess$TheProcess,
		{
			completions: 12,
			createdAt: elm$time$Time$millisToPosix(1565984035413),
			description: 'Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered.',
			id: author$project$Id$mock,
			lastActivity: elm$time$Time$millisToPosix(1565984035514),
			title: 'Weekly blog update for MegaMaker Community article'
		},
		author$project$TheProcess$Inactive),
		A2(
		author$project$TheProcess$TheProcess,
		{
			completions: 12,
			createdAt: elm$time$Time$millisToPosix(1565984035514),
			description: 'Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered.',
			id: author$project$Id$mock,
			lastActivity: elm$time$Time$millisToPosix(1565984035514),
			title: 'Weekly blog update for MegaMaker Community article'
		},
		author$project$TheProcess$Active(
			_Utils_Tuple2(12, 20))),
		A2(
		author$project$TheProcess$TheProcess,
		{
			completions: 12,
			createdAt: elm$time$Time$millisToPosix(1565984035413),
			description: 'Weekly blog update for MegaMaker Community article. Done once a week to make sure that new topics are covered.',
			id: author$project$Id$mock,
			lastActivity: elm$time$Time$millisToPosix(1565984035514),
			title: 'Weekly blog update for MegaMaker Community article'
		},
		author$project$TheProcess$Inactive)
	]);
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
var author$project$IndexPage$init = function (flags) {
	return function (model) {
		return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
	}(
		A2(
			elm$core$Result$withDefault,
			author$project$IndexPage$Error('Failed to parse flags'),
			A2(
				elm$core$Result$map,
				function (context) {
					return author$project$IndexPage$Success(
						A2(author$project$IndexPage$PageModel, context, author$project$TheProcess$mock));
				},
				A2(elm$json$Json$Decode$decodeValue, author$project$Context$decoder, flags))));
};
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var author$project$IndexPage$subscriptions = function (model) {
	return elm$core$Platform$Sub$none;
};
var author$project$IndexPage$update = F2(
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
var author$project$TheProcess$getDescription = function (_n0) {
	var description = _n0.a.description;
	return description;
};
var author$project$Id$toString = function (_n0) {
	var id = _n0.a;
	return id;
};
var elm$json$Json$Encode$string = _Json_wrap;
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
var author$project$TheProcess$getLink = F2(
	function (url, _n0) {
		var id = _n0.a.id;
		return elm$html$Html$Attributes$href(
			_Utils_ap(
				url,
				author$project$Id$toString(id)));
	});
var author$project$TheProcess$getTitle = function (_n0) {
	var title = _n0.a.title;
	return title;
};
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$p = _VirtualDom_node('p');
var elm$html$Html$strong = _VirtualDom_node('strong');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var author$project$TheProcess$renderDetails = function (_n0) {
	var completions = _n0.a.completions;
	var preview = _n0.b;
	if (preview.$ === 'Active') {
		var _n2 = preview.a;
		var completed = _n2.a;
		var total = _n2.b;
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('flex space-between')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('w-1/2')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									elm$html$Html$strong,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('Last Activity')
										]))
								])),
							A2(
							elm$html$Html$p,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('text-gray-600')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Date coming')
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									elm$html$Html$strong,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('Progress')
										]))
								])),
							A2(
							elm$html$Html$p,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('text-gray-600')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(
									elm$core$String$fromInt(completed) + ('/' + elm$core$String$fromInt(total)))
								]))
						]))
				]));
	} else {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('flex space-between')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('w-1/2')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									elm$html$Html$strong,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('Last Completed')
										]))
								])),
							A2(
							elm$html$Html$p,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('text-gray-600')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Date coming')
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									elm$html$Html$strong,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('Completions')
										]))
								])),
							A2(
							elm$html$Html$p,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('text-gray-600')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(
									elm$core$String$fromInt(completions))
								]))
						]))
				]));
	}
};
var author$project$TheProcess$previewToClass = F2(
	function (preview, prefix) {
		if (preview.$ === 'Active') {
			return prefix + '-primary-dark';
		} else {
			return prefix + '-grey-400';
		}
	});
var author$project$TheProcess$previewToString = function (preview) {
	if (preview.$ === 'Active') {
		return 'Active';
	} else {
		return 'Inactive';
	}
};
var author$project$TheProcess$renderStatus = function (_n0) {
	var preview = _n0.b;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class(
				'inline-block text-white font-bold py-1 px-2 rounded text-xs leading-none mb-4 ' + A2(author$project$TheProcess$previewToClass, preview, 'bg'))
			]),
		_List_fromArray(
			[
				elm$html$Html$text(
				author$project$TheProcess$previewToString(preview))
			]));
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$h3 = _VirtualDom_node('h3');
var author$project$TheProcess$renderPreview = F2(
	function (url, process) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('sb-process flex flex-col text-sans')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('p-6 flex-1')
						]),
					_List_fromArray(
						[
							author$project$TheProcess$renderStatus(process),
							A2(
							elm$html$Html$h3,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('text-base font-bold mb-2 leading-tight')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(
									author$project$TheProcess$getTitle(process))
								])),
							A2(
							elm$html$Html$p,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('text-gray-600 mb-4')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(
									author$project$TheProcess$getDescription(process))
								])),
							author$project$TheProcess$renderDetails(process)
						])),
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('bg-black text-white w-full p-3 text-center block font-medium hover:text-white hover:bg-grey-800'),
							A2(author$project$TheProcess$getLink, url, process)
						]),
					_List_fromArray(
						[
							elm$html$Html$text('Work On This Process')
						]))
				]));
	});
var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$path = elm$svg$Svg$trustedNode('path');
var elm$svg$Svg$svg = elm$svg$Svg$trustedNode('svg');
var elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var author$project$UI$logo = A2(
	elm$svg$Svg$svg,
	_List_fromArray(
		[
			elm$svg$Svg$Attributes$width('22'),
			elm$svg$Svg$Attributes$height('40'),
			elm$svg$Svg$Attributes$viewBox('0 0 22 40')
		]),
	_List_fromArray(
		[
			A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('fill-current text-primary'),
					elm$svg$Svg$Attributes$d('M13.7346 24.0497L9.78784 21.7709V12.6563L21.628 5.81982V14.9352L17.6813 21.7709L21.628 24.0497V33.1635L9.78784 40V30.8846L13.7346 24.0497Z')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('fill-current text-primary-light'),
					elm$svg$Svg$Attributes$d('M21.6279 5.81988L9.78772 12.6564L1.89429 8.0995L13.7344 1.26221L21.6279 5.81988Z')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('fill-current text-primary-light'),
					elm$svg$Svg$Attributes$d('M13.7344 24.0499L9.78772 30.8848L1.89429 26.3287L5.84101 19.4922L9.78772 21.771L13.7344 24.0499Z')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('fill-current text-primary-dark'),
					elm$svg$Svg$Attributes$d('M9.78772 30.8847V40.0001L1.89429 35.4424V26.3286L9.78772 30.8847Z')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('fill-current text-primary-dark'),
					elm$svg$Svg$Attributes$d('M9.78772 12.6565V21.771L5.84101 19.4922L1.89429 17.2134V8.09961L9.78772 12.6565Z')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('fill-current text-black'),
					elm$svg$Svg$Attributes$d('M20.6807 14.1451V5.03134C20.6807 5.03134 20.6807 5.02581 20.6807 5.02265C20.6815 5.00767 20.6815 4.99265 20.6807 4.97766V4.96266C20.6787 4.94421 20.675 4.92598 20.6696 4.9082C20.6649 4.89162 20.6594 4.87528 20.653 4.85926L20.6467 4.84505C20.6412 4.83163 20.6341 4.819 20.6278 4.80637C20.6254 4.8026 20.6233 4.79864 20.6215 4.79453C20.6112 4.77796 20.6009 4.76217 20.5899 4.74717C20.5788 4.73297 20.5662 4.71955 20.5536 4.70613C20.5506 4.70232 20.5471 4.69888 20.5433 4.69587C20.5331 4.68576 20.5223 4.67627 20.511 4.66745L20.4983 4.65719C20.4832 4.64576 20.4674 4.63522 20.451 4.62561L12.5504 0.0632071C12.4784 0.0216394 12.3968 -0.000244141 12.3136 -0.000244141C12.2305 -0.000244141 12.1488 0.0216394 12.0768 0.0632071L0.236665 6.89971C0.220111 6.90904 0.204279 6.91959 0.189305 6.93129H0.185358L0.14668 6.96523L0.136419 6.97628C0.126313 6.9865 0.116824 6.9973 0.108002 7.00864L0.0945835 7.02522C0.0831601 7.04011 0.0726176 7.05567 0.0630097 7.07179C0.053901 7.08815 0.0457313 7.10502 0.0385401 7.12231C0.0363589 7.12691 0.0345123 7.13165 0.0330147 7.13652C0.0274567 7.1499 0.022712 7.16361 0.0188065 7.17756C0.0188065 7.1823 0.0188065 7.18704 0.0188065 7.19098C0.0188065 7.20835 0.0109131 7.22571 0.00854502 7.24308C0.00854502 7.26202 0.00854502 7.28176 0.00854502 7.3007V16.4239C0.00849168 16.5071 0.03035 16.5889 0.0719203 16.6609C0.113491 16.733 0.173306 16.7928 0.245348 16.8344L3.78161 18.8764L0.0716925 25.3017C0.0622204 25.3183 0.054327 25.3356 0.0464335 25.353L0.0416975 25.3664C0.0361721 25.3806 0.031436 25.3948 0.0274893 25.4083C0.0272422 25.4127 0.0272422 25.4172 0.0274893 25.4217C0.0227532 25.4398 0.0195958 25.458 0.0164385 25.4753C0.0164385 25.4943 0.0164385 25.514 0.0164385 25.533V34.6523C0.0163851 34.7354 0.0382434 34.8172 0.0798137 34.8892C0.121384 34.9613 0.1812 35.0211 0.253242 35.0627L8.14668 39.6196C8.1648 39.6306 8.18381 39.6401 8.20351 39.648C8.26037 39.6714 8.32123 39.6834 8.38269 39.6835C8.40328 39.6834 8.42384 39.6821 8.44426 39.6796L8.464 39.6756L8.50425 39.6677L8.52872 39.6599C8.53977 39.6559 8.55161 39.6527 8.56266 39.648L8.58003 39.6393C8.58814 39.635 8.59604 39.6302 8.60371 39.6251L20.4439 32.7894C20.5158 32.7479 20.5755 32.6882 20.6171 32.6163C20.6587 32.5444 20.6806 32.4628 20.6807 32.3797V23.2597C20.6806 23.1766 20.6587 23.095 20.6171 23.0231C20.5755 22.9512 20.5158 22.8915 20.4439 22.85L16.9076 20.808L20.6175 14.3819C20.659 14.3099 20.6808 14.2282 20.6807 14.1451ZM12.3136 1.02068L19.2599 5.03134L8.36691 11.32L1.42068 7.30938L12.3136 1.02068ZM0.947075 16.1508V8.1303L7.8933 12.1402V20.1607L4.65699 18.2923L0.947075 16.1508ZM4.59384 19.35L8.1301 21.3913L11.6664 23.4333L8.19325 29.4489L1.12073 25.3656L4.59384 19.35ZM0.947075 26.3594L7.8933 30.3693V38.3906L0.947075 34.3799V26.3594ZM19.7335 14.0188L15.8499 20.7448C15.7873 20.8536 15.7704 20.9828 15.8029 21.104C15.8355 21.2252 15.9148 21.3285 16.0235 21.3913L19.7335 23.5336V32.1011L8.84051 38.3906V30.2232L12.7241 23.4965C12.7867 23.3877 12.8036 23.2585 12.771 23.1373C12.7385 23.0161 12.6591 22.9127 12.5504 22.85L8.84051 20.7077V12.1402L19.7335 5.85147V14.0188Z')
				]),
			_List_Nil)
		]));
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
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$h2 = _VirtualDom_node('h2');
var elm$html$Html$li = _VirtualDom_node('li');
var elm$html$Html$nav = _VirtualDom_node('nav');
var elm$html$Html$ul = _VirtualDom_node('ul');
var author$project$IndexPage$view = function (model) {
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
		var _n1 = model.a;
		var context = _n1.a;
		var processes = _n1.b;
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('font-sans text-black')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$nav,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('flex items-center bg-white px-12 py-6 mb-8')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('flex-1 flex items-center')
								]),
							_List_fromArray(
								[
									author$project$UI$logo,
									A2(
									elm$html$Html$h1,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('text-xl font-bold ml-3')
										]),
									_List_fromArray(
										[
											elm$html$Html$text('SpringBoard')
										]))
								])),
							A2(
							elm$html$Html$ul,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('flex items-center')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$li,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('m-0 mr-8')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$a,
											_List_fromArray(
												[
													elm$html$Html$Attributes$href(context.url + '/wp-admin/admin.php?page=springboard'),
													elm$html$Html$Attributes$class('sb-link text-base font-medium')
												]),
											_List_fromArray(
												[
													elm$html$Html$text('Process List')
												]))
										])),
									A2(
									elm$html$Html$li,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('m-0')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$a,
											_List_fromArray(
												[
													elm$html$Html$Attributes$href(context.url + '/wp-admin/admin.php?page=springboard-settings'),
													elm$html$Html$Attributes$class('sb-link text-base font-medium')
												]),
											_List_fromArray(
												[
													elm$html$Html$text('Settings')
												]))
										]))
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('bg-white p-12 mb-12')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$h2,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('font-bold text-2xl mb-6')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Process List')
								])),
							A2(
							elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('Search, Filter and Create New will go here')
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('px-12')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$ul,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('sb-process-wrapper')
								]),
							A2(
								elm$core$List$map,
								author$project$TheProcess$renderPreview(context.url),
								processes))
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
var author$project$IndexPage$main = elm$browser$Browser$element(
	{init: author$project$IndexPage$init, subscriptions: author$project$IndexPage$subscriptions, update: author$project$IndexPage$update, view: author$project$IndexPage$view});
_Platform_export({'IndexPage':{'init':author$project$IndexPage$main(elm$json$Json$Decode$value)({"versions":{"elm":"0.19.0"},"types":{"message":"IndexPage.Msg","aliases":{"TheProcess.ProcessData":{"args":[],"type":"{ id : Id.Id, title : String.String, description : String.String, completions : Basics.Int, createdAt : Time.Posix, lastActivity : Time.Posix }"}},"unions":{"IndexPage.Msg":{"args":[],"tags":{"UserClickedCreateProcess":[],"UserUpdatedTitleField":["String.String"],"UserUpdatedDescriptionField":["String.String"],"UserSavedNewProcess":["TheProcess.ProcessData"],"ServerReturnedSaveResponse":[]}},"Id.Id":{"args":[],"tags":{"Id":["String.String"]}},"Basics.Int":{"args":[],"tags":{"Int":[]}},"String.String":{"args":[],"tags":{"String":[]}},"Time.Posix":{"args":[],"tags":{"Posix":["Basics.Int"]}}}}})}});}(this));

/***/ }),

/***/ "./client/src/js/process-index.js":
/*!****************************************!*\
  !*** ./client/src/js/process-index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/common.css */ "./client/src/css/common.css");
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_process_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/process-index.css */ "./client/src/css/process-index.css");
/* harmony import */ var _css_process_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_process_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elm_IndexPage_elm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elm/IndexPage.elm */ "./client/src/elm/IndexPage.elm");
/* harmony import */ var _elm_IndexPage_elm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elm_IndexPage_elm__WEBPACK_IMPORTED_MODULE_2__);
/* global context */



_elm_IndexPage_elm__WEBPACK_IMPORTED_MODULE_2__["Elm"].IndexPage.init({
  node: document.getElementById('elm'),
  flags: context
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jc3MvY29tbW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2Nzcy9wcm9jZXNzLWluZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2VsbS9JbmRleFBhZ2UuZWxtIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvcHJvY2Vzcy1pbmRleC5qcyJdLCJuYW1lcyI6WyJFbG0iLCJJbmRleFBhZ2UiLCJpbml0Iiwibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmbGFncyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNuRUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLHFCQUFxQixpQkFBaUIsR0FBRyxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUIscUJBQXFCLEdBQUc7QUFDckUsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELHdCQUF3Qix3QkFBd0IsR0FBRyxHQUFHO0FBQ3RELEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCLDJCQUEyQixHQUFHLEdBQUcsR0FBRztBQUNqRixHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHFCQUFxQjtBQUM3QyxpQ0FBaUMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUM3QyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHFCQUFxQjtBQUM3Qyx3QkFBd0IsaUNBQWlDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUN4RSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHFCQUFxQjtBQUM3Qyx3QkFBd0I7QUFDeEIsdUNBQXVDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3pELEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCO0FBQzdDLHdCQUF3QixxQkFBcUI7QUFDN0MsMENBQTBDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDL0QsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0Esd0JBQXdCO0FBQ3hCLGlCQUFpQjs7QUFFakIsb0NBQW9DLFNBQVMsc0JBQXNCO0FBQ25FLDZCQUE2QixTQUFTLHlCQUF5Qjs7O0FBRy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsd0JBQXdCLEVBQUU7Ozs7QUFJbkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sNkNBQTZDLHFCQUFxQjtBQUN6RTtBQUNBOztBQUVBLG1DQUFtQyw2QkFBNkIsRUFBRTtBQUNsRSxtQ0FBbUMsNkJBQTZCLEVBQUU7QUFDbEUsbUNBQW1DLDZCQUE2QixFQUFFO0FBQ2xFLG1DQUFtQyw4QkFBOEIsRUFBRTs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckIscUNBQXFDLFNBQVMsY0FBYztBQUM1RCw4QkFBOEIsU0FBUyx1QkFBdUI7O0FBRTlELHdDQUF3QyxTQUFTLG9CQUFvQjtBQUNyRSxpQ0FBaUMsU0FBUyw2QkFBNkI7O0FBRXZFLCtCQUErQixVQUFVO0FBQ3pDLHdCQUF3QixzQkFBc0I7OztBQUc5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7OztBQUlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLFNBQVM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXLDRCQUE0QjtBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RywwREFBMEQ7O0FBRXZLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEscUNBQXFDLGNBQWMsRUFBRTtBQUNyRCxxQ0FBcUMsY0FBYyxFQUFFO0FBQ3JELHFDQUFxQyxjQUFjLEVBQUU7QUFDckQsc0NBQXNDLGNBQWMsRUFBRTtBQUN0RCxzQ0FBc0Msb0JBQW9CLEVBQUU7QUFDNUQ7O0FBRUEsNkNBQTZDLGNBQWMsRUFBRTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLDZCQUE2QixVQUFVO0FBQ3ZDLDhCQUE4QixjQUFjO0FBQzVDLGdDQUFnQywwQ0FBMEM7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsNEJBQTRCLGNBQWM7QUFDMUMscUNBQXFDLGVBQWUsRUFBRTtBQUN0RCxxQ0FBcUMsZUFBZSxFQUFFO0FBQ3RELHFDQUFxQyxnQkFBZ0IsRUFBRTs7OztBQUl2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG9DQUFvQyxTQUFTLG9CQUFvQjtBQUNqRSxxQ0FBcUMsU0FBUyxvQkFBb0I7O0FBRWxFLGtDQUFrQyxTQUFTLGtCQUFrQjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlFQUFpRSxpQkFBaUIsRUFBRTtBQUNwRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDRCQUE0QixTQUFTLGtCQUFrQjtBQUN2RCw4QkFBOEIsZ0JBQWdCOztBQUU5QyxtQ0FBbUMsY0FBYztBQUNqRCxxQ0FBcUMsY0FBYzs7QUFFbkQsNkJBQTZCLFdBQVc7QUFDeEMsOEJBQThCLFdBQVc7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxxQkFBcUIsa0JBQWtCO0FBQ3ZDLEVBQUU7QUFDRjs7Ozs7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixlQUFlO0FBQ2hDOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSw0REFBNEQsY0FBYyxFQUFFOzs7QUFHNUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxXQUFXO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7OztBQUdEOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFdBQVc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7O0FBR0Q7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQSx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxtQkFBbUIscUNBQXFDO0FBQ3hELEVBQUU7QUFDRjtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLG9EQUFvRCxZQUFZO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCLGtCQUFrQixXQUFXO0FBQzdCLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7OztBQUlBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlCQUFpQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7QUFLRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Qsd0RBQXdELEVBQUU7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEJBQTBCLHdCQUF3QixRQUFROztBQUUxRCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVc7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUF3Qzs7O0FBR2hFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBLHlCQUF5QixnQ0FBZ0Msb0NBQW9DO0FBQzdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0NBQXdDO0FBQ25FLDZFQUE2RSxnQkFBZ0I7QUFDN0YscUJBQXFCLDhDQUE4QztBQUNuRSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRkFBc0Y7QUFDNUYsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLDRDQUE0QztBQUM1QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0YsMkNBQTJDO0FBQzNDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxzQ0FBc0M7QUFDdEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZOQUE2TjtBQUNoTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRix3Q0FBd0M7QUFDeEMseUNBQXlDO0FBQ3pDLDJDQUEyQztBQUMzQywwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG9CQUFvQixnQkFBZ0IsR0FBRywrQkFBK0Isc0NBQXNDLEdBQUcsc0VBQXNFLHNDQUFzQyxHQUFHLGlDQUFpQyw0QkFBNEIscUJBQXFCLHdCQUF3QixzQkFBc0IsNEJBQTRCLHdCQUF3QixxQkFBcUIsMEJBQTBCLEdBQUcsK0JBQStCLGdCQUFnQixlQUFlLHFCQUFxQix3QkFBd0IsdUJBQXVCLHNCQUFzQixtQkFBbUIsaUJBQWlCLEdBQUc7QUFDbnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBLHVFQUF1RSxnQkFBZ0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsR0FBRyxnQ0FBZ0Msc0NBQXNDLEdBQUc7QUFDOU47QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRiw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDRDQUE0QztBQUM1QywwQ0FBMEM7QUFDMUMsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4REFBOEQ7QUFDcEUsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQW9EO0FBQzFEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDhDQUE4QztBQUM5Qyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkNBQTJDO0FBQ3BEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlLQUF5SztBQUMzSyxrQkFBa0IsYUFBYSxrRUFBa0UsWUFBWSxlQUFlLFVBQVUscUNBQXFDLDBCQUEwQixtQkFBbUIsOElBQThJLEdBQUcsV0FBVyxpQkFBaUIsa0JBQWtCLDBNQUEwTSxVQUFVLGtCQUFrQix3QkFBd0IsZUFBZSxrQkFBa0IsVUFBVSxrQkFBa0Isa0JBQWtCLGFBQWEsZUFBZSxrQkFBa0IsMkJBQTJCLEdBQUcsR0FBRyxROzs7Ozs7Ozs7Ozs7QUN6Z1VuekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxzREFBRyxDQUFDQyxTQUFKLENBQWNDLElBQWQsQ0FBbUI7QUFDakJDLE1BQUksRUFBRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBRFc7QUFFakJDLE9BQUssRUFBRUM7QUFGVSxDQUFuQixFIiwiZmlsZSI6ImpzL3Byb2Nlc3MtaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jbGllbnQvc3JjL2pzL3Byb2Nlc3MtaW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIoZnVuY3Rpb24oc2NvcGUpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBGKGFyaXR5LCBmdW4sIHdyYXBwZXIpIHtcbiAgd3JhcHBlci5hID0gYXJpdHk7XG4gIHdyYXBwZXIuZiA9IGZ1bjtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIEYyKGZ1bikge1xuICByZXR1cm4gRigyLCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bihhLGIpOyB9OyB9KVxufVxuZnVuY3Rpb24gRjMoZnVuKSB7XG4gIHJldHVybiBGKDMsIGZ1biwgZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7IHJldHVybiBmdW4oYSwgYiwgYyk7IH07IH07XG4gIH0pO1xufVxuZnVuY3Rpb24gRjQoZnVuKSB7XG4gIHJldHVybiBGKDQsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW4oYSwgYiwgYywgZCk7IH07IH07IH07XG4gIH0pO1xufVxuZnVuY3Rpb24gRjUoZnVuKSB7XG4gIHJldHVybiBGKDUsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSk7IH07IH07IH07IH07XG4gIH0pO1xufVxuZnVuY3Rpb24gRjYoZnVuKSB7XG4gIHJldHVybiBGKDYsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlLCBmKTsgfTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNyhmdW4pIHtcbiAgcmV0dXJuIEYoNywgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZykgeyByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYsIGcpOyB9OyB9OyB9OyB9OyB9OyB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIEY4KGZ1bikge1xuICByZXR1cm4gRig4LCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW5jdGlvbihnKSB7IHJldHVybiBmdW5jdGlvbihoKSB7XG4gICAgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKTsgfTsgfTsgfTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGOShmdW4pIHtcbiAgcmV0dXJuIEYoOSwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZykgeyByZXR1cm4gZnVuY3Rpb24oaCkgeyByZXR1cm4gZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSk7IH07IH07IH07IH07IH07IH07IH07IH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBBMihmdW4sIGEsIGIpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSAyID8gZnVuLmYoYSwgYikgOiBmdW4oYSkoYik7XG59XG5mdW5jdGlvbiBBMyhmdW4sIGEsIGIsIGMpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSAzID8gZnVuLmYoYSwgYiwgYykgOiBmdW4oYSkoYikoYyk7XG59XG5mdW5jdGlvbiBBNChmdW4sIGEsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA0ID8gZnVuLmYoYSwgYiwgYywgZCkgOiBmdW4oYSkoYikoYykoZCk7XG59XG5mdW5jdGlvbiBBNShmdW4sIGEsIGIsIGMsIGQsIGUpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA1ID8gZnVuLmYoYSwgYiwgYywgZCwgZSkgOiBmdW4oYSkoYikoYykoZCkoZSk7XG59XG5mdW5jdGlvbiBBNihmdW4sIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA2ID8gZnVuLmYoYSwgYiwgYywgZCwgZSwgZikgOiBmdW4oYSkoYikoYykoZCkoZSkoZik7XG59XG5mdW5jdGlvbiBBNyhmdW4sIGEsIGIsIGMsIGQsIGUsIGYsIGcpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA3ID8gZnVuLmYoYSwgYiwgYywgZCwgZSwgZiwgZykgOiBmdW4oYSkoYikoYykoZCkoZSkoZikoZyk7XG59XG5mdW5jdGlvbiBBOChmdW4sIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA4ID8gZnVuLmYoYSwgYiwgYywgZCwgZSwgZiwgZywgaCkgOiBmdW4oYSkoYikoYykoZCkoZSkoZikoZykoaCk7XG59XG5mdW5jdGlvbiBBOShmdW4sIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgsIGkpIHtcbiAgcmV0dXJuIGZ1bi5hID09PSA5ID8gZnVuLmYoYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSkgOiBmdW4oYSkoYikoYykoZCkoZSkoZikoZykoaCkoaSk7XG59XG5cbmNvbnNvbGUud2FybignQ29tcGlsZWQgaW4gREVCVUcgbW9kZS4gRm9sbG93IHRoZSBhZHZpY2UgYXQgaHR0cHM6Ly9lbG0tbGFuZy5vcmcvMC4xOS4wL29wdGltaXplIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UgYW5kIHNtYWxsZXIgYXNzZXRzLicpO1xuXG5cbnZhciBfTGlzdF9OaWxfVU5VU0VEID0geyAkOiAwIH07XG52YXIgX0xpc3RfTmlsID0geyAkOiAnW10nIH07XG5cbmZ1bmN0aW9uIF9MaXN0X0NvbnNfVU5VU0VEKGhkLCB0bCkgeyByZXR1cm4geyAkOiAxLCBhOiBoZCwgYjogdGwgfTsgfVxuZnVuY3Rpb24gX0xpc3RfQ29ucyhoZCwgdGwpIHsgcmV0dXJuIHsgJDogJzo6JywgYTogaGQsIGI6IHRsIH07IH1cblxuXG52YXIgX0xpc3RfY29ucyA9IEYyKF9MaXN0X0NvbnMpO1xuXG5mdW5jdGlvbiBfTGlzdF9mcm9tQXJyYXkoYXJyKVxue1xuXHR2YXIgb3V0ID0gX0xpc3RfTmlsO1xuXHRmb3IgKHZhciBpID0gYXJyLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHRvdXQgPSBfTGlzdF9Db25zKGFycltpXSwgb3V0KTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBfTGlzdF90b0FycmF5KHhzKVxue1xuXHRmb3IgKHZhciBvdXQgPSBbXTsgeHMuYjsgeHMgPSB4cy5iKSAvLyBXSElMRV9DT05TXG5cdHtcblx0XHRvdXQucHVzaCh4cy5hKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG52YXIgX0xpc3RfbWFwMiA9IEYzKGZ1bmN0aW9uKGYsIHhzLCB5cylcbntcblx0Zm9yICh2YXIgYXJyID0gW107IHhzLmIgJiYgeXMuYjsgeHMgPSB4cy5iLCB5cyA9IHlzLmIpIC8vIFdISUxFX0NPTlNFU1xuXHR7XG5cdFx0YXJyLnB1c2goQTIoZiwgeHMuYSwgeXMuYSkpO1xuXHR9XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoYXJyKTtcbn0pO1xuXG52YXIgX0xpc3RfbWFwMyA9IEY0KGZ1bmN0aW9uKGYsIHhzLCB5cywgenMpXG57XG5cdGZvciAodmFyIGFyciA9IFtdOyB4cy5iICYmIHlzLmIgJiYgenMuYjsgeHMgPSB4cy5iLCB5cyA9IHlzLmIsIHpzID0genMuYikgLy8gV0hJTEVfQ09OU0VTXG5cdHtcblx0XHRhcnIucHVzaChBMyhmLCB4cy5hLCB5cy5hLCB6cy5hKSk7XG5cdH1cblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShhcnIpO1xufSk7XG5cbnZhciBfTGlzdF9tYXA0ID0gRjUoZnVuY3Rpb24oZiwgd3MsIHhzLCB5cywgenMpXG57XG5cdGZvciAodmFyIGFyciA9IFtdOyB3cy5iICYmIHhzLmIgJiYgeXMuYiAmJiB6cy5iOyB3cyA9IHdzLmIsIHhzID0geHMuYiwgeXMgPSB5cy5iLCB6cyA9IHpzLmIpIC8vIFdISUxFX0NPTlNFU1xuXHR7XG5cdFx0YXJyLnB1c2goQTQoZiwgd3MuYSwgeHMuYSwgeXMuYSwgenMuYSkpO1xuXHR9XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoYXJyKTtcbn0pO1xuXG52YXIgX0xpc3RfbWFwNSA9IEY2KGZ1bmN0aW9uKGYsIHZzLCB3cywgeHMsIHlzLCB6cylcbntcblx0Zm9yICh2YXIgYXJyID0gW107IHZzLmIgJiYgd3MuYiAmJiB4cy5iICYmIHlzLmIgJiYgenMuYjsgdnMgPSB2cy5iLCB3cyA9IHdzLmIsIHhzID0geHMuYiwgeXMgPSB5cy5iLCB6cyA9IHpzLmIpIC8vIFdISUxFX0NPTlNFU1xuXHR7XG5cdFx0YXJyLnB1c2goQTUoZiwgdnMuYSwgd3MuYSwgeHMuYSwgeXMuYSwgenMuYSkpO1xuXHR9XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoYXJyKTtcbn0pO1xuXG52YXIgX0xpc3Rfc29ydEJ5ID0gRjIoZnVuY3Rpb24oZiwgeHMpXG57XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoX0xpc3RfdG9BcnJheSh4cykuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0cmV0dXJuIF9VdGlsc19jbXAoZihhKSwgZihiKSk7XG5cdH0pKTtcbn0pO1xuXG52YXIgX0xpc3Rfc29ydFdpdGggPSBGMihmdW5jdGlvbihmLCB4cylcbntcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShfTGlzdF90b0FycmF5KHhzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHR2YXIgb3JkID0gQTIoZiwgYSwgYik7XG5cdFx0cmV0dXJuIG9yZCA9PT0gZWxtJGNvcmUkQmFzaWNzJEVRID8gMCA6IG9yZCA9PT0gZWxtJGNvcmUkQmFzaWNzJExUID8gLTEgOiAxO1xuXHR9KSk7XG59KTtcblxuXG5cbi8vIEVRVUFMSVRZXG5cbmZ1bmN0aW9uIF9VdGlsc19lcSh4LCB5KVxue1xuXHRmb3IgKFxuXHRcdHZhciBwYWlyLCBzdGFjayA9IFtdLCBpc0VxdWFsID0gX1V0aWxzX2VxSGVscCh4LCB5LCAwLCBzdGFjayk7XG5cdFx0aXNFcXVhbCAmJiAocGFpciA9IHN0YWNrLnBvcCgpKTtcblx0XHRpc0VxdWFsID0gX1V0aWxzX2VxSGVscChwYWlyLmEsIHBhaXIuYiwgMCwgc3RhY2spXG5cdFx0KVxuXHR7fVxuXG5cdHJldHVybiBpc0VxdWFsO1xufVxuXG5mdW5jdGlvbiBfVXRpbHNfZXFIZWxwKHgsIHksIGRlcHRoLCBzdGFjaylcbntcblx0aWYgKGRlcHRoID4gMTAwKVxuXHR7XG5cdFx0c3RhY2sucHVzaChfVXRpbHNfVHVwbGUyKHgseSkpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHggPT09IHkpXG5cdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgeCA9PT0gbnVsbCB8fCB5ID09PSBudWxsKVxuXHR7XG5cdFx0dHlwZW9mIHggPT09ICdmdW5jdGlvbicgJiYgX0RlYnVnX2NyYXNoKDUpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKi9cblx0aWYgKHguJCA9PT0gJ1NldF9lbG1fYnVpbHRpbicpXG5cdHtcblx0XHR4ID0gZWxtJGNvcmUkU2V0JHRvTGlzdCh4KTtcblx0XHR5ID0gZWxtJGNvcmUkU2V0JHRvTGlzdCh5KTtcblx0fVxuXHRpZiAoeC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJyB8fCB4LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJylcblx0e1xuXHRcdHggPSBlbG0kY29yZSREaWN0JHRvTGlzdCh4KTtcblx0XHR5ID0gZWxtJGNvcmUkRGljdCR0b0xpc3QoeSk7XG5cdH1cblx0Ly8qL1xuXG5cdC8qKl9VTlVTRUQvXG5cdGlmICh4LiQgPCAwKVxuXHR7XG5cdFx0eCA9IGVsbSRjb3JlJERpY3QkdG9MaXN0KHgpO1xuXHRcdHkgPSBlbG0kY29yZSREaWN0JHRvTGlzdCh5KTtcblx0fVxuXHQvLyovXG5cblx0Zm9yICh2YXIga2V5IGluIHgpXG5cdHtcblx0XHRpZiAoIV9VdGlsc19lcUhlbHAoeFtrZXldLCB5W2tleV0sIGRlcHRoICsgMSwgc3RhY2spKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbnZhciBfVXRpbHNfZXF1YWwgPSBGMihfVXRpbHNfZXEpO1xudmFyIF9VdGlsc19ub3RFcXVhbCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuICFfVXRpbHNfZXEoYSxiKTsgfSk7XG5cblxuXG4vLyBDT01QQVJJU09OU1xuXG4vLyBDb2RlIGluIEdlbmVyYXRlL0phdmFTY3JpcHQuaHMsIEJhc2ljcy5qcywgYW5kIExpc3QuanMgZGVwZW5kcyBvblxuLy8gdGhlIHBhcnRpY3VsYXIgaW50ZWdlciB2YWx1ZXMgYXNzaWduZWQgdG8gTFQsIEVRLCBhbmQgR1QuXG5cbmZ1bmN0aW9uIF9VdGlsc19jbXAoeCwgeSwgb3JkKVxue1xuXHRpZiAodHlwZW9mIHggIT09ICdvYmplY3QnKVxuXHR7XG5cdFx0cmV0dXJuIHggPT09IHkgPyAvKkVRKi8gMCA6IHggPCB5ID8gLypMVCovIC0xIDogLypHVCovIDE7XG5cdH1cblxuXHQvKiovXG5cdGlmICh4IGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0dmFyIGEgPSB4LnZhbHVlT2YoKTtcblx0XHR2YXIgYiA9IHkudmFsdWVPZigpO1xuXHRcdHJldHVybiBhID09PSBiID8gMCA6IGEgPCBiID8gLTEgOiAxO1xuXHR9XG5cdC8vKi9cblxuXHQvKipfVU5VU0VEL1xuXHRpZiAodHlwZW9mIHguJCA9PT0gJ3VuZGVmaW5lZCcpXG5cdC8vKi9cblx0LyoqL1xuXHRpZiAoeC4kWzBdID09PSAnIycpXG5cdC8vKi9cblx0e1xuXHRcdHJldHVybiAob3JkID0gX1V0aWxzX2NtcCh4LmEsIHkuYSkpXG5cdFx0XHQ/IG9yZFxuXHRcdFx0OiAob3JkID0gX1V0aWxzX2NtcCh4LmIsIHkuYikpXG5cdFx0XHRcdD8gb3JkXG5cdFx0XHRcdDogX1V0aWxzX2NtcCh4LmMsIHkuYyk7XG5cdH1cblxuXHQvLyB0cmF2ZXJzZSBjb25zZXMgdW50aWwgZW5kIG9mIGEgbGlzdCBvciBhIG1pc21hdGNoXG5cdGZvciAoOyB4LmIgJiYgeS5iICYmICEob3JkID0gX1V0aWxzX2NtcCh4LmEsIHkuYSkpOyB4ID0geC5iLCB5ID0geS5iKSB7fSAvLyBXSElMRV9DT05TRVNcblx0cmV0dXJuIG9yZCB8fCAoeC5iID8gLypHVCovIDEgOiB5LmIgPyAvKkxUKi8gLTEgOiAvKkVRKi8gMCk7XG59XG5cbnZhciBfVXRpbHNfbHQgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBfVXRpbHNfY21wKGEsIGIpIDwgMDsgfSk7XG52YXIgX1V0aWxzX2xlID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gX1V0aWxzX2NtcChhLCBiKSA8IDE7IH0pO1xudmFyIF9VdGlsc19ndCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIF9VdGlsc19jbXAoYSwgYikgPiAwOyB9KTtcbnZhciBfVXRpbHNfZ2UgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBfVXRpbHNfY21wKGEsIGIpID49IDA7IH0pO1xuXG52YXIgX1V0aWxzX2NvbXBhcmUgPSBGMihmdW5jdGlvbih4LCB5KVxue1xuXHR2YXIgbiA9IF9VdGlsc19jbXAoeCwgeSk7XG5cdHJldHVybiBuIDwgMCA/IGVsbSRjb3JlJEJhc2ljcyRMVCA6IG4gPyBlbG0kY29yZSRCYXNpY3MkR1QgOiBlbG0kY29yZSRCYXNpY3MkRVE7XG59KTtcblxuXG4vLyBDT01NT04gVkFMVUVTXG5cbnZhciBfVXRpbHNfVHVwbGUwX1VOVVNFRCA9IDA7XG52YXIgX1V0aWxzX1R1cGxlMCA9IHsgJDogJyMwJyB9O1xuXG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUyX1VOVVNFRChhLCBiKSB7IHJldHVybiB7IGE6IGEsIGI6IGIgfTsgfVxuZnVuY3Rpb24gX1V0aWxzX1R1cGxlMihhLCBiKSB7IHJldHVybiB7ICQ6ICcjMicsIGE6IGEsIGI6IGIgfTsgfVxuXG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUzX1VOVVNFRChhLCBiLCBjKSB7IHJldHVybiB7IGE6IGEsIGI6IGIsIGM6IGMgfTsgfVxuZnVuY3Rpb24gX1V0aWxzX1R1cGxlMyhhLCBiLCBjKSB7IHJldHVybiB7ICQ6ICcjMycsIGE6IGEsIGI6IGIsIGM6IGMgfTsgfVxuXG5mdW5jdGlvbiBfVXRpbHNfY2hyX1VOVVNFRChjKSB7IHJldHVybiBjOyB9XG5mdW5jdGlvbiBfVXRpbHNfY2hyKGMpIHsgcmV0dXJuIG5ldyBTdHJpbmcoYyk7IH1cblxuXG4vLyBSRUNPUkRTXG5cbmZ1bmN0aW9uIF9VdGlsc191cGRhdGUob2xkUmVjb3JkLCB1cGRhdGVkRmllbGRzKVxue1xuXHR2YXIgbmV3UmVjb3JkID0ge307XG5cblx0Zm9yICh2YXIga2V5IGluIG9sZFJlY29yZClcblx0e1xuXHRcdG5ld1JlY29yZFtrZXldID0gb2xkUmVjb3JkW2tleV07XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gdXBkYXRlZEZpZWxkcylcblx0e1xuXHRcdG5ld1JlY29yZFtrZXldID0gdXBkYXRlZEZpZWxkc1trZXldO1xuXHR9XG5cblx0cmV0dXJuIG5ld1JlY29yZDtcbn1cblxuXG4vLyBBUFBFTkRcblxudmFyIF9VdGlsc19hcHBlbmQgPSBGMihfVXRpbHNfYXApO1xuXG5mdW5jdGlvbiBfVXRpbHNfYXAoeHMsIHlzKVxue1xuXHQvLyBhcHBlbmQgU3RyaW5nc1xuXHRpZiAodHlwZW9mIHhzID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiB4cyArIHlzO1xuXHR9XG5cblx0Ly8gYXBwZW5kIExpc3RzXG5cdGlmICgheHMuYilcblx0e1xuXHRcdHJldHVybiB5cztcblx0fVxuXHR2YXIgcm9vdCA9IF9MaXN0X0NvbnMoeHMuYSwgeXMpO1xuXHR4cyA9IHhzLmJcblx0Zm9yICh2YXIgY3VyciA9IHJvb3Q7IHhzLmI7IHhzID0geHMuYikgLy8gV0hJTEVfQ09OU1xuXHR7XG5cdFx0Y3VyciA9IGN1cnIuYiA9IF9MaXN0X0NvbnMoeHMuYSwgeXMpO1xuXHR9XG5cdHJldHVybiByb290O1xufVxuXG5cblxudmFyIF9Kc0FycmF5X2VtcHR5ID0gW107XG5cbmZ1bmN0aW9uIF9Kc0FycmF5X3NpbmdsZXRvbih2YWx1ZSlcbntcbiAgICByZXR1cm4gW3ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gX0pzQXJyYXlfbGVuZ3RoKGFycmF5KVxue1xuICAgIHJldHVybiBhcnJheS5sZW5ndGg7XG59XG5cbnZhciBfSnNBcnJheV9pbml0aWFsaXplID0gRjMoZnVuY3Rpb24oc2l6ZSwgb2Zmc2V0LCBmdW5jKVxue1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGZ1bmMob2Zmc2V0ICsgaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX0pzQXJyYXlfaW5pdGlhbGl6ZUZyb21MaXN0ID0gRjIoZnVuY3Rpb24gKG1heCwgbHMpXG57XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShtYXgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXggJiYgbHMuYjsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gbHMuYTtcbiAgICAgICAgbHMgPSBscy5iO1xuICAgIH1cblxuICAgIHJlc3VsdC5sZW5ndGggPSBpO1xuICAgIHJldHVybiBfVXRpbHNfVHVwbGUyKHJlc3VsdCwgbHMpO1xufSk7XG5cbnZhciBfSnNBcnJheV91bnNhZmVHZXQgPSBGMihmdW5jdGlvbihpbmRleCwgYXJyYXkpXG57XG4gICAgcmV0dXJuIGFycmF5W2luZGV4XTtcbn0pO1xuXG52YXIgX0pzQXJyYXlfdW5zYWZlU2V0ID0gRjMoZnVuY3Rpb24oaW5kZXgsIHZhbHVlLCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBhcnJheVtpXTtcbiAgICB9XG5cbiAgICByZXN1bHRbaW5kZXhdID0gdmFsdWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX0pzQXJyYXlfcHVzaCA9IEYyKGZ1bmN0aW9uKHZhbHVlLCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoICsgMSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gYXJyYXlbaV07XG4gICAgfVxuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfSnNBcnJheV9mb2xkbCA9IEYzKGZ1bmN0aW9uKGZ1bmMsIGFjYywgYXJyYXkpXG57XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBhY2MgPSBBMihmdW5jLCBhcnJheVtpXSwgYWNjKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xufSk7XG5cbnZhciBfSnNBcnJheV9mb2xkciA9IEYzKGZ1bmN0aW9uKGZ1bmMsIGFjYywgYXJyYXkpXG57XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgIHtcbiAgICAgICAgYWNjID0gQTIoZnVuYywgYXJyYXlbaV0sIGFjYyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbn0pO1xuXG52YXIgX0pzQXJyYXlfbWFwID0gRjIoZnVuY3Rpb24oZnVuYywgYXJyYXkpXG57XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gZnVuYyhhcnJheVtpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX0pzQXJyYXlfaW5kZXhlZE1hcCA9IEYzKGZ1bmN0aW9uKGZ1bmMsIG9mZnNldCwgYXJyYXkpXG57XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gQTIoZnVuYywgb2Zmc2V0ICsgaSwgYXJyYXlbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxudmFyIF9Kc0FycmF5X3NsaWNlID0gRjMoZnVuY3Rpb24oZnJvbSwgdG8sIGFycmF5KVxue1xuICAgIHJldHVybiBhcnJheS5zbGljZShmcm9tLCB0byk7XG59KTtcblxudmFyIF9Kc0FycmF5X2FwcGVuZE4gPSBGMyhmdW5jdGlvbihuLCBkZXN0LCBzb3VyY2UpXG57XG4gICAgdmFyIGRlc3RMZW4gPSBkZXN0Lmxlbmd0aDtcbiAgICB2YXIgaXRlbXNUb0NvcHkgPSBuIC0gZGVzdExlbjtcblxuICAgIGlmIChpdGVtc1RvQ29weSA+IHNvdXJjZS5sZW5ndGgpXG4gICAge1xuICAgICAgICBpdGVtc1RvQ29weSA9IHNvdXJjZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIHNpemUgPSBkZXN0TGVuICsgaXRlbXNUb0NvcHk7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShzaXplKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVzdExlbjsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gZGVzdFtpXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zVG9Db3B5OyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaSArIGRlc3RMZW5dID0gc291cmNlW2ldO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxuXG5cbi8vIExPR1xuXG52YXIgX0RlYnVnX2xvZ19VTlVTRUQgPSBGMihmdW5jdGlvbih0YWcsIHZhbHVlKVxue1xuXHRyZXR1cm4gdmFsdWU7XG59KTtcblxudmFyIF9EZWJ1Z19sb2cgPSBGMihmdW5jdGlvbih0YWcsIHZhbHVlKVxue1xuXHRjb25zb2xlLmxvZyh0YWcgKyAnOiAnICsgX0RlYnVnX3RvU3RyaW5nKHZhbHVlKSk7XG5cdHJldHVybiB2YWx1ZTtcbn0pO1xuXG5cbi8vIFRPRE9TXG5cbmZ1bmN0aW9uIF9EZWJ1Z190b2RvKG1vZHVsZU5hbWUsIHJlZ2lvbilcbntcblx0cmV0dXJuIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRfRGVidWdfY3Jhc2goOCwgbW9kdWxlTmFtZSwgcmVnaW9uLCBtZXNzYWdlKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3RvZG9DYXNlKG1vZHVsZU5hbWUsIHJlZ2lvbiwgdmFsdWUpXG57XG5cdHJldHVybiBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0X0RlYnVnX2NyYXNoKDksIG1vZHVsZU5hbWUsIHJlZ2lvbiwgdmFsdWUsIG1lc3NhZ2UpO1xuXHR9O1xufVxuXG5cbi8vIFRPIFNUUklOR1xuXG5mdW5jdGlvbiBfRGVidWdfdG9TdHJpbmdfVU5VU0VEKHZhbHVlKVxue1xuXHRyZXR1cm4gJzxpbnRlcm5hbHM+Jztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3RvU3RyaW5nKHZhbHVlKVxue1xuXHRyZXR1cm4gX0RlYnVnX3RvQW5zaVN0cmluZyhmYWxzZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIHZhbHVlKVxue1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19pbnRlcm5hbENvbG9yKGFuc2ksICc8ZnVuY3Rpb24+Jyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCB2YWx1ZSA/ICdUcnVlJyA6ICdGYWxzZScpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX251bWJlckNvbG9yKGFuc2ksIHZhbHVlICsgJycpO1xuXHR9XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19jaGFyQ29sb3IoYW5zaSwgXCInXCIgKyBfRGVidWdfYWRkU2xhc2hlcyh2YWx1ZSwgdHJ1ZSkgKyBcIidcIik7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfc3RyaW5nQ29sb3IoYW5zaSwgJ1wiJyArIF9EZWJ1Z19hZGRTbGFzaGVzKHZhbHVlLCBmYWxzZSkgKyAnXCInKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICckJyBpbiB2YWx1ZSlcblx0e1xuXHRcdHZhciB0YWcgPSB2YWx1ZS4kO1xuXG5cdFx0aWYgKHR5cGVvZiB0YWcgPT09ICdudW1iZXInKVxuXHRcdHtcblx0XHRcdHJldHVybiBfRGVidWdfaW50ZXJuYWxDb2xvcihhbnNpLCAnPGludGVybmFscz4nKTtcblx0XHR9XG5cblx0XHRpZiAodGFnWzBdID09PSAnIycpXG5cdFx0e1xuXHRcdFx0dmFyIG91dHB1dCA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgayBpbiB2YWx1ZSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKGsgPT09ICckJykgY29udGludWU7XG5cdFx0XHRcdG91dHB1dC5wdXNoKF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWVba10pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAnKCcgKyBvdXRwdXQuam9pbignLCcpICsgJyknO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdTZXRfZWxtX2J1aWx0aW4nKVxuXHRcdHtcblx0XHRcdHJldHVybiBfRGVidWdfY3RvckNvbG9yKGFuc2ksICdTZXQnKVxuXHRcdFx0XHQrIF9EZWJ1Z19mYWRlQ29sb3IoYW5zaSwgJy5mcm9tTGlzdCcpICsgJyAnXG5cdFx0XHRcdCsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCBlbG0kY29yZSRTZXQkdG9MaXN0KHZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicgfHwgdGFnID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgJ0RpY3QnKVxuXHRcdFx0XHQrIF9EZWJ1Z19mYWRlQ29sb3IoYW5zaSwgJy5mcm9tTGlzdCcpICsgJyAnXG5cdFx0XHRcdCsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCBlbG0kY29yZSREaWN0JHRvTGlzdCh2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdBcnJheV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgJ0FycmF5Jylcblx0XHRcdFx0KyBfRGVidWdfZmFkZUNvbG9yKGFuc2ksICcuZnJvbUxpc3QnKSArICcgJ1xuXHRcdFx0XHQrIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgZWxtJGNvcmUkQXJyYXkkdG9MaXN0KHZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJzo6JyB8fCB0YWcgPT09ICdbXScpXG5cdFx0e1xuXHRcdFx0dmFyIG91dHB1dCA9ICdbJztcblxuXHRcdFx0dmFsdWUuYiAmJiAob3V0cHV0ICs9IF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWUuYSksIHZhbHVlID0gdmFsdWUuYilcblxuXHRcdFx0Zm9yICg7IHZhbHVlLmI7IHZhbHVlID0gdmFsdWUuYikgLy8gV0hJTEVfQ09OU1xuXHRcdFx0e1xuXHRcdFx0XHRvdXRwdXQgKz0gJywnICsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZS5hKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvdXRwdXQgKyAnXSc7XG5cdFx0fVxuXG5cdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdGZvciAodmFyIGkgaW4gdmFsdWUpXG5cdFx0e1xuXHRcdFx0aWYgKGkgPT09ICckJykgY29udGludWU7XG5cdFx0XHR2YXIgc3RyID0gX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZVtpXSk7XG5cdFx0XHR2YXIgYzAgPSBzdHJbMF07XG5cdFx0XHR2YXIgcGFyZW5sZXNzID0gYzAgPT09ICd7JyB8fCBjMCA9PT0gJygnIHx8IGMwID09PSAnWycgfHwgYzAgPT09ICc8JyB8fCBjMCA9PT0gJ1wiJyB8fCBzdHIuaW5kZXhPZignICcpIDwgMDtcblx0XHRcdG91dHB1dCArPSAnICcgKyAocGFyZW5sZXNzID8gc3RyIDogJygnICsgc3RyICsgJyknKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgdGFnKSArIG91dHB1dDtcblx0fVxuXG5cdGlmICh0eXBlb2YgRGF0YVZpZXcgPT09ICdmdW5jdGlvbicgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRhVmlldylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfc3RyaW5nQ29sb3IoYW5zaSwgJzwnICsgdmFsdWUuYnl0ZUxlbmd0aCArICcgYnl0ZXM+Jyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIEZpbGUgPT09ICdmdW5jdGlvbicgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19pbnRlcm5hbENvbG9yKGFuc2ksICc8JyArIHZhbHVlLm5hbWUgKyAnPicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG5cdHtcblx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0Zm9yICh2YXIga2V5IGluIHZhbHVlKVxuXHRcdHtcblx0XHRcdHZhciBmaWVsZCA9IGtleVswXSA9PT0gJ18nID8ga2V5LnNsaWNlKDEpIDoga2V5O1xuXHRcdFx0b3V0cHV0LnB1c2goX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCBmaWVsZCkgKyAnID0gJyArIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWVba2V5XSkpO1xuXHRcdH1cblx0XHRpZiAob3V0cHV0Lmxlbmd0aCA9PT0gMClcblx0XHR7XG5cdFx0XHRyZXR1cm4gJ3t9Jztcblx0XHR9XG5cdFx0cmV0dXJuICd7ICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgfSc7XG5cdH1cblxuXHRyZXR1cm4gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgJzxpbnRlcm5hbHM+Jyk7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19hZGRTbGFzaGVzKHN0ciwgaXNDaGFyKVxue1xuXHR2YXIgcyA9IHN0clxuXHRcdC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG5cdFx0LnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKVxuXHRcdC5yZXBsYWNlKC9cXHQvZywgJ1xcXFx0Jylcblx0XHQucmVwbGFjZSgvXFxyL2csICdcXFxccicpXG5cdFx0LnJlcGxhY2UoL1xcdi9nLCAnXFxcXHYnKVxuXHRcdC5yZXBsYWNlKC9cXDAvZywgJ1xcXFwwJyk7XG5cblx0aWYgKGlzQ2hhcilcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcJy9nLCAnXFxcXFxcJycpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYls5Nm0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX251bWJlckNvbG9yKGFuc2ksIHN0cmluZylcbntcblx0cmV0dXJuIGFuc2kgPyAnXFx4MWJbOTVtJyArIHN0cmluZyArICdcXHgxYlswbScgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19zdHJpbmdDb2xvcihhbnNpLCBzdHJpbmcpXG57XG5cdHJldHVybiBhbnNpID8gJ1xceDFiWzkzbScgKyBzdHJpbmcgKyAnXFx4MWJbMG0nIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfY2hhckNvbG9yKGFuc2ksIHN0cmluZylcbntcblx0cmV0dXJuIGFuc2kgPyAnXFx4MWJbOTJtJyArIHN0cmluZyArICdcXHgxYlswbScgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19mYWRlQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYlszN20nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYls5NG0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3RvSGV4RGlnaXQobilcbntcblx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUobiA8IDEwID8gNDggKyBuIDogNTUgKyBuKTtcbn1cblxuXG4vLyBDUkFTSFxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z19jcmFzaF9VTlVTRUQoaWRlbnRpZmllcilcbntcblx0dGhyb3cgbmV3IEVycm9yKCdodHRwczovL2dpdGh1Yi5jb20vZWxtL2NvcmUvYmxvYi8xLjAuMC9oaW50cy8nICsgaWRlbnRpZmllciArICcubWQnKTtcbn1cblxuXG5mdW5jdGlvbiBfRGVidWdfY3Jhc2goaWRlbnRpZmllciwgZmFjdDEsIGZhY3QyLCBmYWN0MywgZmFjdDQpXG57XG5cdHN3aXRjaChpZGVudGlmaWVyKVxuXHR7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdXaGF0IG5vZGUgc2hvdWxkIEkgdGFrZSBvdmVyPyBJbiBKYXZhU2NyaXB0IEkgbmVlZCBzb21ldGhpbmcgbGlrZTpcXG5cXG4gICAgRWxtLk1haW4uaW5pdCh7XFxuICAgICAgICBub2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsbS1ub2RlXCIpXFxuICAgIH0pXFxuXFxuWW91IG5lZWQgdG8gZG8gdGhpcyB3aXRoIGFueSBCcm93c2VyLnNhbmRib3ggb3IgQnJvd3Nlci5lbGVtZW50IHByb2dyYW0uJyk7XG5cblx0XHRjYXNlIDE6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIuYXBwbGljYXRpb24gcHJvZ3JhbXMgY2Fubm90IGhhbmRsZSBVUkxzIGxpa2UgdGhpczpcXG5cXG4gICAgJyArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgKyAnXFxuXFxuV2hhdCBpcyB0aGUgcm9vdD8gVGhlIHJvb3Qgb2YgeW91ciBmaWxlIHN5c3RlbT8gVHJ5IGxvb2tpbmcgYXQgdGhpcyBwcm9ncmFtIHdpdGggYGVsbSByZWFjdG9yYCBvciBzb21lIG90aGVyIHNlcnZlci4nKTtcblxuXHRcdGNhc2UgMjpcblx0XHRcdHZhciBqc29uRXJyb3JTdHJpbmcgPSBmYWN0MTtcblx0XHRcdHRocm93IG5ldyBFcnJvcignUHJvYmxlbSB3aXRoIHRoZSBmbGFncyBnaXZlbiB0byB5b3VyIEVsbSBwcm9ncmFtIG9uIGluaXRpYWxpemF0aW9uLlxcblxcbicgKyBqc29uRXJyb3JTdHJpbmcpO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdFx0dmFyIHBvcnROYW1lID0gZmFjdDE7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGNhbiBvbmx5IGJlIG9uZSBwb3J0IG5hbWVkIGAnICsgcG9ydE5hbWUgKyAnYCwgYnV0IHlvdXIgcHJvZ3JhbSBoYXMgbXVsdGlwbGUuJyk7XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHR2YXIgcG9ydE5hbWUgPSBmYWN0MTtcblx0XHRcdHZhciBwcm9ibGVtID0gZmFjdDI7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBzZW5kIGFuIHVuZXhwZWN0ZWQgdHlwZSBvZiB2YWx1ZSB0aHJvdWdoIHBvcnQgYCcgKyBwb3J0TmFtZSArICdgOlxcbicgKyBwcm9ibGVtKTtcblxuXHRcdGNhc2UgNTpcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIHVzZSBgKD09KWAgb24gZnVuY3Rpb25zLlxcblRoZXJlIGlzIG5vIHdheSB0byBrbm93IGlmIGZ1bmN0aW9ucyBhcmUgXCJ0aGUgc2FtZVwiIGluIHRoZSBFbG0gc2Vuc2UuXFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly9wYWNrYWdlLmVsbS1sYW5nLm9yZy9wYWNrYWdlcy9lbG0vY29yZS9sYXRlc3QvQmFzaWNzIz09IHdoaWNoIGRlc2NyaWJlcyB3aHkgaXQgaXMgdGhpcyB3YXkgYW5kIHdoYXQgdGhlIGJldHRlciB2ZXJzaW9uIHdpbGwgbG9vayBsaWtlLicpO1xuXG5cdFx0Y2FzZSA2OlxuXHRcdFx0dmFyIG1vZHVsZU5hbWUgPSBmYWN0MTtcblx0XHRcdHRocm93IG5ldyBFcnJvcignWW91ciBwYWdlIGlzIGxvYWRpbmcgbXVsdGlwbGUgRWxtIHNjcmlwdHMgd2l0aCBhIG1vZHVsZSBuYW1lZCAnICsgbW9kdWxlTmFtZSArICcuIE1heWJlIGEgZHVwbGljYXRlIHNjcmlwdCBpcyBnZXR0aW5nIGxvYWRlZCBhY2NpZGVudGFsbHk/IElmIG5vdCwgcmVuYW1lIG9uZSBvZiB0aGVtIHNvIEkga25vdyB3aGljaCBpcyB3aGljaCEnKTtcblxuXHRcdGNhc2UgODpcblx0XHRcdHZhciBtb2R1bGVOYW1lID0gZmFjdDE7XG5cdFx0XHR2YXIgcmVnaW9uID0gZmFjdDI7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IGZhY3QzO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUT0RPIGluIG1vZHVsZSBgJyArIG1vZHVsZU5hbWUgKyAnYCAnICsgX0RlYnVnX3JlZ2lvblRvU3RyaW5nKHJlZ2lvbikgKyAnXFxuXFxuJyArIG1lc3NhZ2UpO1xuXG5cdFx0Y2FzZSA5OlxuXHRcdFx0dmFyIG1vZHVsZU5hbWUgPSBmYWN0MTtcblx0XHRcdHZhciByZWdpb24gPSBmYWN0Mjtcblx0XHRcdHZhciB2YWx1ZSA9IGZhY3QzO1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBmYWN0NDtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0J1RPRE8gaW4gbW9kdWxlIGAnICsgbW9kdWxlTmFtZSArICdgIGZyb20gdGhlIGBjYXNlYCBleHByZXNzaW9uICdcblx0XHRcdFx0KyBfRGVidWdfcmVnaW9uVG9TdHJpbmcocmVnaW9uKSArICdcXG5cXG5JdCByZWNlaXZlZCB0aGUgZm9sbG93aW5nIHZhbHVlOlxcblxcbiAgICAnXG5cdFx0XHRcdCsgX0RlYnVnX3RvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKCdcXG4nLCAnXFxuICAgICcpXG5cdFx0XHRcdCsgJ1xcblxcbkJ1dCB0aGUgYnJhbmNoIHRoYXQgaGFuZGxlcyBpdCBzYXlzOlxcblxcbiAgICAnICsgbWVzc2FnZS5yZXBsYWNlKCdcXG4nLCAnXFxuICAgICcpXG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAxMDpcblx0XHRcdHRocm93IG5ldyBFcnJvcignQnVnIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vdmlydHVhbC1kb20vaXNzdWVzJyk7XG5cblx0XHRjYXNlIDExOlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGVyZm9ybSBtb2QgMC4gRGl2aXNpb24gYnkgemVybyBlcnJvci4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfRGVidWdfcmVnaW9uVG9TdHJpbmcocmVnaW9uKVxue1xuXHRpZiAocmVnaW9uLnN0YXJ0LmxpbmUgPT09IHJlZ2lvbi5lbmQubGluZSlcblx0e1xuXHRcdHJldHVybiAnb24gbGluZSAnICsgcmVnaW9uLnN0YXJ0LmxpbmU7XG5cdH1cblx0cmV0dXJuICdvbiBsaW5lcyAnICsgcmVnaW9uLnN0YXJ0LmxpbmUgKyAnIHRocm91Z2ggJyArIHJlZ2lvbi5lbmQubGluZTtcbn1cblxuXG5cbi8vIE1BVEhcblxudmFyIF9CYXNpY3NfYWRkID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSArIGI7IH0pO1xudmFyIF9CYXNpY3Nfc3ViID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pO1xudmFyIF9CYXNpY3NfbXVsID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAqIGI7IH0pO1xudmFyIF9CYXNpY3NfZmRpdiA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgLyBiOyB9KTtcbnZhciBfQmFzaWNzX2lkaXYgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiAoYSAvIGIpIHwgMDsgfSk7XG52YXIgX0Jhc2ljc19wb3cgPSBGMihNYXRoLnBvdyk7XG5cbnZhciBfQmFzaWNzX3JlbWFpbmRlckJ5ID0gRjIoZnVuY3Rpb24oYiwgYSkgeyByZXR1cm4gYSAlIGI7IH0pO1xuXG4vLyBodHRwczovL3d3dy5taWNyb3NvZnQuY29tL2VuLXVzL3Jlc2VhcmNoL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAyL2Rpdm1vZG5vdGUtbGV0dGVyLnBkZlxudmFyIF9CYXNpY3NfbW9kQnkgPSBGMihmdW5jdGlvbihtb2R1bHVzLCB4KVxue1xuXHR2YXIgYW5zd2VyID0geCAlIG1vZHVsdXM7XG5cdHJldHVybiBtb2R1bHVzID09PSAwXG5cdFx0PyBfRGVidWdfY3Jhc2goMTEpXG5cdFx0OlxuXHQoKGFuc3dlciA+IDAgJiYgbW9kdWx1cyA8IDApIHx8IChhbnN3ZXIgPCAwICYmIG1vZHVsdXMgPiAwKSlcblx0XHQ/IGFuc3dlciArIG1vZHVsdXNcblx0XHQ6IGFuc3dlcjtcbn0pO1xuXG5cbi8vIFRSSUdPTk9NRVRSWVxuXG52YXIgX0Jhc2ljc19waSA9IE1hdGguUEk7XG52YXIgX0Jhc2ljc19lID0gTWF0aC5FO1xudmFyIF9CYXNpY3NfY29zID0gTWF0aC5jb3M7XG52YXIgX0Jhc2ljc19zaW4gPSBNYXRoLnNpbjtcbnZhciBfQmFzaWNzX3RhbiA9IE1hdGgudGFuO1xudmFyIF9CYXNpY3NfYWNvcyA9IE1hdGguYWNvcztcbnZhciBfQmFzaWNzX2FzaW4gPSBNYXRoLmFzaW47XG52YXIgX0Jhc2ljc19hdGFuID0gTWF0aC5hdGFuO1xudmFyIF9CYXNpY3NfYXRhbjIgPSBGMihNYXRoLmF0YW4yKTtcblxuXG4vLyBNT1JFIE1BVEhcblxuZnVuY3Rpb24gX0Jhc2ljc190b0Zsb2F0KHgpIHsgcmV0dXJuIHg7IH1cbmZ1bmN0aW9uIF9CYXNpY3NfdHJ1bmNhdGUobikgeyByZXR1cm4gbiB8IDA7IH1cbmZ1bmN0aW9uIF9CYXNpY3NfaXNJbmZpbml0ZShuKSB7IHJldHVybiBuID09PSBJbmZpbml0eSB8fCBuID09PSAtSW5maW5pdHk7IH1cblxudmFyIF9CYXNpY3NfY2VpbGluZyA9IE1hdGguY2VpbDtcbnZhciBfQmFzaWNzX2Zsb29yID0gTWF0aC5mbG9vcjtcbnZhciBfQmFzaWNzX3JvdW5kID0gTWF0aC5yb3VuZDtcbnZhciBfQmFzaWNzX3NxcnQgPSBNYXRoLnNxcnQ7XG52YXIgX0Jhc2ljc19sb2cgPSBNYXRoLmxvZztcbnZhciBfQmFzaWNzX2lzTmFOID0gaXNOYU47XG5cblxuLy8gQk9PTEVBTlNcblxuZnVuY3Rpb24gX0Jhc2ljc19ub3QoYm9vbCkgeyByZXR1cm4gIWJvb2w7IH1cbnZhciBfQmFzaWNzX2FuZCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgJiYgYjsgfSk7XG52YXIgX0Jhc2ljc19vciAgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIHx8IGI7IH0pO1xudmFyIF9CYXNpY3NfeG9yID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAhPT0gYjsgfSk7XG5cblxuXG5mdW5jdGlvbiBfQ2hhcl90b0NvZGUoY2hhcilcbntcblx0dmFyIGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG5cdGlmICgweEQ4MDAgPD0gY29kZSAmJiBjb2RlIDw9IDB4REJGRilcblx0e1xuXHRcdHJldHVybiAoY29kZSAtIDB4RDgwMCkgKiAweDQwMCArIGNoYXIuY2hhckNvZGVBdCgxKSAtIDB4REMwMCArIDB4MTAwMDBcblx0fVxuXHRyZXR1cm4gY29kZTtcbn1cblxuZnVuY3Rpb24gX0NoYXJfZnJvbUNvZGUoY29kZSlcbntcblx0cmV0dXJuIF9VdGlsc19jaHIoXG5cdFx0KGNvZGUgPCAwIHx8IDB4MTBGRkZGIDwgY29kZSlcblx0XHRcdD8gJ1xcdUZGRkQnXG5cdFx0XHQ6XG5cdFx0KGNvZGUgPD0gMHhGRkZGKVxuXHRcdFx0PyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpXG5cdFx0XHQ6XG5cdFx0KGNvZGUgLT0gMHgxMDAwMCxcblx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcihjb2RlIC8gMHg0MDApICsgMHhEODAwLCBjb2RlICUgMHg0MDAgKyAweERDMDApXG5cdFx0KVxuXHQpO1xufVxuXG5mdW5jdGlvbiBfQ2hhcl90b1VwcGVyKGNoYXIpXG57XG5cdHJldHVybiBfVXRpbHNfY2hyKGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5cbmZ1bmN0aW9uIF9DaGFyX3RvTG93ZXIoY2hhcilcbntcblx0cmV0dXJuIF9VdGlsc19jaHIoY2hhci50b0xvd2VyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gX0NoYXJfdG9Mb2NhbGVVcHBlcihjaGFyKVxue1xuXHRyZXR1cm4gX1V0aWxzX2NocihjaGFyLnRvTG9jYWxlVXBwZXJDYXNlKCkpO1xufVxuXG5mdW5jdGlvbiBfQ2hhcl90b0xvY2FsZUxvd2VyKGNoYXIpXG57XG5cdHJldHVybiBfVXRpbHNfY2hyKGNoYXIudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG59XG5cblxuXG52YXIgX1N0cmluZ19jb25zID0gRjIoZnVuY3Rpb24oY2hyLCBzdHIpXG57XG5cdHJldHVybiBjaHIgKyBzdHI7XG59KTtcblxuZnVuY3Rpb24gX1N0cmluZ191bmNvbnMoc3RyaW5nKVxue1xuXHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KDApO1xuXHRyZXR1cm4gd29yZFxuXHRcdD8gZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdDB4RDgwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhEQkZGXG5cdFx0XHRcdD8gX1V0aWxzX1R1cGxlMihfVXRpbHNfY2hyKHN0cmluZ1swXSArIHN0cmluZ1sxXSksIHN0cmluZy5zbGljZSgyKSlcblx0XHRcdFx0OiBfVXRpbHNfVHVwbGUyKF9VdGlsc19jaHIoc3RyaW5nWzBdKSwgc3RyaW5nLnNsaWNlKDEpKVxuXHRcdClcblx0XHQ6IGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG59XG5cbnZhciBfU3RyaW5nX2FwcGVuZCA9IEYyKGZ1bmN0aW9uKGEsIGIpXG57XG5cdHJldHVybiBhICsgYjtcbn0pO1xuXG5mdW5jdGlvbiBfU3RyaW5nX2xlbmd0aChzdHIpXG57XG5cdHJldHVybiBzdHIubGVuZ3RoO1xufVxuXG52YXIgX1N0cmluZ19tYXAgPSBGMihmdW5jdGlvbihmdW5jLCBzdHJpbmcpXG57XG5cdHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoO1xuXHR2YXIgYXJyYXkgPSBuZXcgQXJyYXkobGVuKTtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKDB4RDgwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhEQkZGKVxuXHRcdHtcblx0XHRcdGFycmF5W2ldID0gZnVuYyhfVXRpbHNfY2hyKHN0cmluZ1tpXSArIHN0cmluZ1tpKzFdKSk7XG5cdFx0XHRpICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0YXJyYXlbaV0gPSBmdW5jKF9VdGlsc19jaHIoc3RyaW5nW2ldKSk7XG5cdFx0aSsrO1xuXHR9XG5cdHJldHVybiBhcnJheS5qb2luKCcnKTtcbn0pO1xuXG52YXIgX1N0cmluZ19maWx0ZXIgPSBGMihmdW5jdGlvbihpc0dvb2QsIHN0cilcbntcblx0dmFyIGFyciA9IFtdO1xuXHR2YXIgbGVuID0gc3RyLmxlbmd0aDtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciBjaGFyID0gc3RyW2ldO1xuXHRcdHZhciB3b3JkID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdFx0aSsrO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRjaGFyICs9IHN0cltpXTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHRpZiAoaXNHb29kKF9VdGlsc19jaHIoY2hhcikpKVxuXHRcdHtcblx0XHRcdGFyci5wdXNoKGNoYXIpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYXJyLmpvaW4oJycpO1xufSk7XG5cbmZ1bmN0aW9uIF9TdHJpbmdfcmV2ZXJzZShzdHIpXG57XG5cdHZhciBsZW4gPSBzdHIubGVuZ3RoO1xuXHR2YXIgYXJyID0gbmV3IEFycmF5KGxlbik7XG5cdHZhciBpID0gMDtcblx0d2hpbGUgKGkgPCBsZW4pXG5cdHtcblx0XHR2YXIgd29yZCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRhcnJbbGVuIC0gaV0gPSBzdHJbaSArIDFdO1xuXHRcdFx0aSsrO1xuXHRcdFx0YXJyW2xlbiAtIGldID0gc3RyW2kgLSAxXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGFycltsZW4gLSBpXSA9IHN0cltpXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFyci5qb2luKCcnKTtcbn1cblxudmFyIF9TdHJpbmdfZm9sZGwgPSBGMyhmdW5jdGlvbihmdW5jLCBzdGF0ZSwgc3RyaW5nKVxue1xuXHR2YXIgbGVuID0gc3RyaW5nLmxlbmd0aDtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciBjaGFyID0gc3RyaW5nW2ldO1xuXHRcdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aSsrO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRjaGFyICs9IHN0cmluZ1tpXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdFx0c3RhdGUgPSBBMihmdW5jLCBfVXRpbHNfY2hyKGNoYXIpLCBzdGF0ZSk7XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufSk7XG5cbnZhciBfU3RyaW5nX2ZvbGRyID0gRjMoZnVuY3Rpb24oZnVuYywgc3RhdGUsIHN0cmluZylcbntcblx0dmFyIGkgPSBzdHJpbmcubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKVxuXHR7XG5cdFx0dmFyIGNoYXIgPSBzdHJpbmdbaV07XG5cdFx0dmFyIHdvcmQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHRpZiAoMHhEQzAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERGRkYpXG5cdFx0e1xuXHRcdFx0aS0tO1xuXHRcdFx0Y2hhciA9IHN0cmluZ1tpXSArIGNoYXI7XG5cdFx0fVxuXHRcdHN0YXRlID0gQTIoZnVuYywgX1V0aWxzX2NocihjaGFyKSwgc3RhdGUpO1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn0pO1xuXG52YXIgX1N0cmluZ19zcGxpdCA9IEYyKGZ1bmN0aW9uKHNlcCwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLnNwbGl0KHNlcCk7XG59KTtcblxudmFyIF9TdHJpbmdfam9pbiA9IEYyKGZ1bmN0aW9uKHNlcCwgc3Rycylcbntcblx0cmV0dXJuIHN0cnMuam9pbihzZXApO1xufSk7XG5cbnZhciBfU3RyaW5nX3NsaWNlID0gRjMoZnVuY3Rpb24oc3RhcnQsIGVuZCwgc3RyKSB7XG5cdHJldHVybiBzdHIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59KTtcblxuZnVuY3Rpb24gX1N0cmluZ190cmltKHN0cilcbntcblx0cmV0dXJuIHN0ci50cmltKCk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfdHJpbUxlZnQoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgJycpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX3RyaW1SaWdodChzdHIpXG57XG5cdHJldHVybiBzdHIucmVwbGFjZSgvXFxzKyQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfd29yZHMoc3RyKVxue1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KHN0ci50cmltKCkuc3BsaXQoL1xccysvZykpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX2xpbmVzKHN0cilcbntcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShzdHIuc3BsaXQoL1xcclxcbnxcXHJ8XFxuL2cpKTtcbn1cblxuZnVuY3Rpb24gX1N0cmluZ190b1VwcGVyKHN0cilcbntcblx0cmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX3RvTG93ZXIoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG5cbnZhciBfU3RyaW5nX2FueSA9IEYyKGZ1bmN0aW9uKGlzR29vZCwgc3RyaW5nKVxue1xuXHR2YXIgaSA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pXG5cdHtcblx0XHR2YXIgY2hhciA9IHN0cmluZ1tpXTtcblx0XHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweERDMDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REZGRilcblx0XHR7XG5cdFx0XHRpLS07XG5cdFx0XHRjaGFyID0gc3RyaW5nW2ldICsgY2hhcjtcblx0XHR9XG5cdFx0aWYgKGlzR29vZChfVXRpbHNfY2hyKGNoYXIpKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufSk7XG5cbnZhciBfU3RyaW5nX2FsbCA9IEYyKGZ1bmN0aW9uKGlzR29vZCwgc3RyaW5nKVxue1xuXHR2YXIgaSA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pXG5cdHtcblx0XHR2YXIgY2hhciA9IHN0cmluZ1tpXTtcblx0XHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweERDMDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REZGRilcblx0XHR7XG5cdFx0XHRpLS07XG5cdFx0XHRjaGFyID0gc3RyaW5nW2ldICsgY2hhcjtcblx0XHR9XG5cdFx0aWYgKCFpc0dvb2QoX1V0aWxzX2NocihjaGFyKSkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn0pO1xuXG52YXIgX1N0cmluZ19jb250YWlucyA9IEYyKGZ1bmN0aW9uKHN1Yiwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLmluZGV4T2Yoc3ViKSA+IC0xO1xufSk7XG5cbnZhciBfU3RyaW5nX3N0YXJ0c1dpdGggPSBGMihmdW5jdGlvbihzdWIsIHN0cilcbntcblx0cmV0dXJuIHN0ci5pbmRleE9mKHN1YikgPT09IDA7XG59KTtcblxudmFyIF9TdHJpbmdfZW5kc1dpdGggPSBGMihmdW5jdGlvbihzdWIsIHN0cilcbntcblx0cmV0dXJuIHN0ci5sZW5ndGggPj0gc3ViLmxlbmd0aCAmJlxuXHRcdHN0ci5sYXN0SW5kZXhPZihzdWIpID09PSBzdHIubGVuZ3RoIC0gc3ViLmxlbmd0aDtcbn0pO1xuXG52YXIgX1N0cmluZ19pbmRleGVzID0gRjIoZnVuY3Rpb24oc3ViLCBzdHIpXG57XG5cdHZhciBzdWJMZW4gPSBzdWIubGVuZ3RoO1xuXG5cdGlmIChzdWJMZW4gPCAxKVxuXHR7XG5cdFx0cmV0dXJuIF9MaXN0X05pbDtcblx0fVxuXG5cdHZhciBpID0gMDtcblx0dmFyIGlzID0gW107XG5cblx0d2hpbGUgKChpID0gc3RyLmluZGV4T2Yoc3ViLCBpKSkgPiAtMSlcblx0e1xuXHRcdGlzLnB1c2goaSk7XG5cdFx0aSA9IGkgKyBzdWJMZW47XG5cdH1cblxuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KGlzKTtcbn0pO1xuXG5cbi8vIFRPIFNUUklOR1xuXG5mdW5jdGlvbiBfU3RyaW5nX2Zyb21OdW1iZXIobnVtYmVyKVxue1xuXHRyZXR1cm4gbnVtYmVyICsgJyc7XG59XG5cblxuLy8gSU5UIENPTlZFUlNJT05TXG5cbmZ1bmN0aW9uIF9TdHJpbmdfdG9JbnQoc3RyKVxue1xuXHR2YXIgdG90YWwgPSAwO1xuXHR2YXIgY29kZTAgPSBzdHIuY2hhckNvZGVBdCgwKTtcblx0dmFyIHN0YXJ0ID0gY29kZTAgPT0gMHgyQiAvKiArICovIHx8IGNvZGUwID09IDB4MkQgLyogLSAqLyA/IDEgOiAwO1xuXG5cdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IHN0ci5sZW5ndGg7ICsraSlcblx0e1xuXHRcdHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKGNvZGUgPCAweDMwIHx8IDB4MzkgPCBjb2RlKVxuXHRcdHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0XHR0b3RhbCA9IDEwICogdG90YWwgKyBjb2RlIC0gMHgzMDtcblx0fVxuXG5cdHJldHVybiBpID09IHN0YXJ0XG5cdFx0PyBlbG0kY29yZSRNYXliZSROb3RoaW5nXG5cdFx0OiBlbG0kY29yZSRNYXliZSRKdXN0KGNvZGUwID09IDB4MkQgPyAtdG90YWwgOiB0b3RhbCk7XG59XG5cblxuLy8gRkxPQVQgQ09OVkVSU0lPTlNcblxuZnVuY3Rpb24gX1N0cmluZ190b0Zsb2F0KHMpXG57XG5cdC8vIGNoZWNrIGlmIGl0IGlzIGEgaGV4LCBvY3RhbCwgb3IgYmluYXJ5IG51bWJlclxuXHRpZiAocy5sZW5ndGggPT09IDAgfHwgL1tcXHN4Ym9dLy50ZXN0KHMpKVxuXHR7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH1cblx0dmFyIG4gPSArcztcblx0Ly8gZmFzdGVyIGlzTmFOIGNoZWNrXG5cdHJldHVybiBuID09PSBuID8gZWxtJGNvcmUkTWF5YmUkSnVzdChuKSA6IGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfZnJvbUxpc3QoY2hhcnMpXG57XG5cdHJldHVybiBfTGlzdF90b0FycmF5KGNoYXJzKS5qb2luKCcnKTtcbn1cblxuXG5cblxuLyoqL1xuZnVuY3Rpb24gX0pzb25fZXJyb3JUb1N0cmluZyhlcnJvcilcbntcblx0cmV0dXJuIGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmcoZXJyb3IpO1xufVxuLy8qL1xuXG5cbi8vIENPUkUgREVDT0RFUlNcblxuZnVuY3Rpb24gX0pzb25fc3VjY2VlZChtc2cpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMCxcblx0XHRhOiBtc2dcblx0fTtcbn1cblxuZnVuY3Rpb24gX0pzb25fZmFpbChtc2cpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMSxcblx0XHRhOiBtc2dcblx0fTtcbn1cblxuZnVuY3Rpb24gX0pzb25fZGVjb2RlUHJpbShkZWNvZGVyKVxue1xuXHRyZXR1cm4geyAkOiAyLCBiOiBkZWNvZGVyIH07XG59XG5cbnZhciBfSnNvbl9kZWNvZGVJbnQgPSBfSnNvbl9kZWNvZGVQcmltKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJylcblx0XHQ/IF9Kc29uX2V4cGVjdGluZygnYW4gSU5UJywgdmFsdWUpXG5cdFx0OlxuXHQoLTIxNDc0ODM2NDcgPCB2YWx1ZSAmJiB2YWx1ZSA8IDIxNDc0ODM2NDcgJiYgKHZhbHVlIHwgMCkgPT09IHZhbHVlKVxuXHRcdD8gZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDpcblx0KGlzRmluaXRlKHZhbHVlKSAmJiAhKHZhbHVlICUgMSkpXG5cdFx0PyBlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OiBfSnNvbl9leHBlY3RpbmcoJ2FuIElOVCcsIHZhbHVlKTtcbn0pO1xuXG52YXIgX0pzb25fZGVjb2RlQm9vbCA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0XHQ/IGVsbSRjb3JlJFJlc3VsdCRPayh2YWx1ZSlcblx0XHQ6IF9Kc29uX2V4cGVjdGluZygnYSBCT09MJywgdmFsdWUpO1xufSk7XG5cbnZhciBfSnNvbl9kZWNvZGVGbG9hdCA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuXHRcdD8gZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDogX0pzb25fZXhwZWN0aW5nKCdhIEZMT0FUJywgdmFsdWUpO1xufSk7XG5cbnZhciBfSnNvbl9kZWNvZGVWYWx1ZSA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRPayhfSnNvbl93cmFwKHZhbHVlKSk7XG59KTtcblxudmFyIF9Kc29uX2RlY29kZVN0cmluZyA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuXHRcdD8gZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDogKHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKVxuXHRcdFx0PyBlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUgKyAnJylcblx0XHRcdDogX0pzb25fZXhwZWN0aW5nKCdhIFNUUklORycsIHZhbHVlKTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVMaXN0KGRlY29kZXIpIHsgcmV0dXJuIHsgJDogMywgYjogZGVjb2RlciB9OyB9XG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVBcnJheShkZWNvZGVyKSB7IHJldHVybiB7ICQ6IDQsIGI6IGRlY29kZXIgfTsgfVxuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVOdWxsKHZhbHVlKSB7IHJldHVybiB7ICQ6IDUsIGM6IHZhbHVlIH07IH1cblxudmFyIF9Kc29uX2RlY29kZUZpZWxkID0gRjIoZnVuY3Rpb24oZmllbGQsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogNixcblx0XHRkOiBmaWVsZCxcblx0XHRiOiBkZWNvZGVyXG5cdH07XG59KTtcblxudmFyIF9Kc29uX2RlY29kZUluZGV4ID0gRjIoZnVuY3Rpb24oaW5kZXgsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogNyxcblx0XHRlOiBpbmRleCxcblx0XHRiOiBkZWNvZGVyXG5cdH07XG59KTtcblxuZnVuY3Rpb24gX0pzb25fZGVjb2RlS2V5VmFsdWVQYWlycyhkZWNvZGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDgsXG5cdFx0YjogZGVjb2RlclxuXHR9O1xufVxuXG5mdW5jdGlvbiBfSnNvbl9tYXBNYW55KGYsIGRlY29kZXJzKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDksXG5cdFx0ZjogZixcblx0XHRnOiBkZWNvZGVyc1xuXHR9O1xufVxuXG52YXIgX0pzb25fYW5kVGhlbiA9IEYyKGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWNvZGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDEwLFxuXHRcdGI6IGRlY29kZXIsXG5cdFx0aDogY2FsbGJhY2tcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9vbmVPZihkZWNvZGVycylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAxMSxcblx0XHRnOiBkZWNvZGVyc1xuXHR9O1xufVxuXG5cbi8vIERFQ09ESU5HIE9CSkVDVFNcblxudmFyIF9Kc29uX21hcDEgPSBGMihmdW5jdGlvbihmLCBkMSlcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxXSk7XG59KTtcblxudmFyIF9Kc29uX21hcDIgPSBGMyhmdW5jdGlvbihmLCBkMSwgZDIpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDJdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwMyA9IEY0KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzXSk7XG59KTtcblxudmFyIF9Kc29uX21hcDQgPSBGNShmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNClcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0XSk7XG59KTtcblxudmFyIF9Kc29uX21hcDUgPSBGNihmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNCwgZDUpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDVdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwNiA9IEY3KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2XSk7XG59KTtcblxudmFyIF9Kc29uX21hcDcgPSBGOChmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNylcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3XSk7XG59KTtcblxudmFyIF9Kc29uX21hcDggPSBGOShmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDhdKTtcbn0pO1xuXG5cbi8vIERFQ09ERVxuXG52YXIgX0pzb25fcnVuT25TdHJpbmcgPSBGMihmdW5jdGlvbihkZWNvZGVyLCBzdHJpbmcpXG57XG5cdHRyeVxuXHR7XG5cdFx0dmFyIHZhbHVlID0gSlNPTi5wYXJzZShzdHJpbmcpO1xuXHRcdHJldHVybiBfSnNvbl9ydW5IZWxwKGRlY29kZXIsIHZhbHVlKTtcblx0fVxuXHRjYXRjaCAoZSlcblx0e1xuXHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJEZhaWx1cmUsICdUaGlzIGlzIG5vdCB2YWxpZCBKU09OISAnICsgZS5tZXNzYWdlLCBfSnNvbl93cmFwKHN0cmluZykpKTtcblx0fVxufSk7XG5cbnZhciBfSnNvbl9ydW4gPSBGMihmdW5jdGlvbihkZWNvZGVyLCB2YWx1ZSlcbntcblx0cmV0dXJuIF9Kc29uX3J1bkhlbHAoZGVjb2RlciwgX0pzb25fdW53cmFwKHZhbHVlKSk7XG59KTtcblxuZnVuY3Rpb24gX0pzb25fcnVuSGVscChkZWNvZGVyLCB2YWx1ZSlcbntcblx0c3dpdGNoIChkZWNvZGVyLiQpXG5cdHtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gZGVjb2Rlci5iKHZhbHVlKTtcblxuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiAodmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdD8gZWxtJGNvcmUkUmVzdWx0JE9rKGRlY29kZXIuYylcblx0XHRcdFx0OiBfSnNvbl9leHBlY3RpbmcoJ251bGwnLCB2YWx1ZSk7XG5cblx0XHRjYXNlIDM6XG5cdFx0XHRpZiAoIV9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhIExJU1QnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gX0pzb25fcnVuQXJyYXlEZWNvZGVyKGRlY29kZXIuYiwgdmFsdWUsIF9MaXN0X2Zyb21BcnJheSk7XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHRpZiAoIV9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBBUlJBWScsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfSnNvbl9ydW5BcnJheURlY29kZXIoZGVjb2Rlci5iLCB2YWx1ZSwgX0pzb25fdG9FbG1BcnJheSk7XG5cblx0XHRjYXNlIDY6XG5cdFx0XHR2YXIgZmllbGQgPSBkZWNvZGVyLmQ7XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhKGZpZWxkIGluIHZhbHVlKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIF9Kc29uX2V4cGVjdGluZygnYW4gT0JKRUNUIHdpdGggYSBmaWVsZCBuYW1lZCBgJyArIGZpZWxkICsgJ2AnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLmIsIHZhbHVlW2ZpZWxkXSk7XG5cdFx0XHRyZXR1cm4gKGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpID8gcmVzdWx0IDogZWxtJGNvcmUkUmVzdWx0JEVycihBMihlbG0kanNvbiRKc29uJERlY29kZSRGaWVsZCwgZmllbGQsIHJlc3VsdC5hKSk7XG5cblx0XHRjYXNlIDc6XG5cdFx0XHR2YXIgaW5kZXggPSBkZWNvZGVyLmU7XG5cdFx0XHRpZiAoIV9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBBUlJBWScsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdGlmIChpbmRleCA+PSB2YWx1ZS5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBfSnNvbl9leHBlY3RpbmcoJ2EgTE9OR0VSIGFycmF5LiBOZWVkIGluZGV4ICcgKyBpbmRleCArICcgYnV0IG9ubHkgc2VlICcgKyB2YWx1ZS5sZW5ndGggKyAnIGVudHJpZXMnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLmIsIHZhbHVlW2luZGV4XSk7XG5cdFx0XHRyZXR1cm4gKGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpID8gcmVzdWx0IDogZWxtJGNvcmUkUmVzdWx0JEVycihBMihlbG0kanNvbiRKc29uJERlY29kZSRJbmRleCwgaW5kZXgsIHJlc3VsdC5hKSk7XG5cblx0XHRjYXNlIDg6XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBfSnNvbl9pc0FycmF5KHZhbHVlKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIF9Kc29uX2V4cGVjdGluZygnYW4gT0JKRUNUJywgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IF9MaXN0X05pbDtcblx0XHRcdC8vIFRPRE8gdGVzdCBwZXJmIG9mIE9iamVjdC5rZXlzIGFuZCBzd2l0Y2ggd2hlbiBzdXBwb3J0IGlzIGdvb2QgZW5vdWdoXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gdmFsdWUpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2Rlci5iLCB2YWx1ZVtrZXldKTtcblx0XHRcdFx0XHRpZiAoIWVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkRmllbGQsIGtleSwgcmVzdWx0LmEpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0a2V5VmFsdWVQYWlycyA9IF9MaXN0X0NvbnMoX1V0aWxzX1R1cGxlMihrZXksIHJlc3VsdC5hKSwga2V5VmFsdWVQYWlycyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2soZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGtleVZhbHVlUGFpcnMpKTtcblxuXHRcdGNhc2UgOTpcblx0XHRcdHZhciBhbnN3ZXIgPSBkZWNvZGVyLmY7XG5cdFx0XHR2YXIgZGVjb2RlcnMgPSBkZWNvZGVyLmc7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlY29kZXJzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyc1tpXSwgdmFsdWUpO1xuXHRcdFx0XHRpZiAoIWVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFuc3dlciA9IGFuc3dlcihyZXN1bHQuYSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JE9rKGFuc3dlcik7XG5cblx0XHRjYXNlIDEwOlxuXHRcdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2Rlci5iLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gKCFlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdFx0XHQ/IHJlc3VsdFxuXHRcdFx0XHQ6IF9Kc29uX3J1bkhlbHAoZGVjb2Rlci5oKHJlc3VsdC5hKSwgdmFsdWUpO1xuXG5cdFx0Y2FzZSAxMTpcblx0XHRcdHZhciBlcnJvcnMgPSBfTGlzdF9OaWw7XG5cdFx0XHRmb3IgKHZhciB0ZW1wID0gZGVjb2Rlci5nOyB0ZW1wLmI7IHRlbXAgPSB0ZW1wLmIpIC8vIFdISUxFX0NPTlNcblx0XHRcdHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAodGVtcC5hLCB2YWx1ZSk7XG5cdFx0XHRcdGlmIChlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlcnJvcnMgPSBfTGlzdF9Db25zKHJlc3VsdC5hLCBlcnJvcnMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoZWxtJGpzb24kSnNvbiREZWNvZGUkT25lT2YoZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGVycm9ycykpKTtcblxuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJEZhaWx1cmUsIGRlY29kZXIuYSwgX0pzb25fd3JhcCh2YWx1ZSkpKTtcblxuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2soZGVjb2Rlci5hKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfSnNvbl9ydW5BcnJheURlY29kZXIoZGVjb2RlciwgdmFsdWUsIHRvRWxtVmFsdWUpXG57XG5cdHZhciBsZW4gPSB2YWx1ZS5sZW5ndGg7XG5cdHZhciBhcnJheSA9IG5ldyBBcnJheShsZW4pO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuXHR7XG5cdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2RlciwgdmFsdWVbaV0pO1xuXHRcdGlmICghZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihBMihlbG0kanNvbiRKc29uJERlY29kZSRJbmRleCwgaSwgcmVzdWx0LmEpKTtcblx0XHR9XG5cdFx0YXJyYXlbaV0gPSByZXN1bHQuYTtcblx0fVxuXHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JE9rKHRvRWxtVmFsdWUoYXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gX0pzb25faXNBcnJheSh2YWx1ZSlcbntcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8ICh0eXBlb2YgRmlsZUxpc3QgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgRmlsZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBfSnNvbl90b0VsbUFycmF5KGFycmF5KVxue1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkQXJyYXkkaW5pdGlhbGl6ZSwgYXJyYXkubGVuZ3RoLCBmdW5jdGlvbihpKSB7IHJldHVybiBhcnJheVtpXTsgfSk7XG59XG5cbmZ1bmN0aW9uIF9Kc29uX2V4cGVjdGluZyh0eXBlLCB2YWx1ZSlcbntcblx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkRmFpbHVyZSwgJ0V4cGVjdGluZyAnICsgdHlwZSwgX0pzb25fd3JhcCh2YWx1ZSkpKTtcbn1cblxuXG4vLyBFUVVBTElUWVxuXG5mdW5jdGlvbiBfSnNvbl9lcXVhbGl0eSh4LCB5KVxue1xuXHRpZiAoeCA9PT0geSlcblx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHguJCAhPT0geS4kKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c3dpdGNoICh4LiQpXG5cdHtcblx0XHRjYXNlIDA6XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIHguYSA9PT0geS5hO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIHguYiA9PT0geS5iO1xuXG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIHguYyA9PT0geS5jO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdGNhc2UgNDpcblx0XHRjYXNlIDg6XG5cdFx0XHRyZXR1cm4gX0pzb25fZXF1YWxpdHkoeC5iLCB5LmIpO1xuXG5cdFx0Y2FzZSA2OlxuXHRcdFx0cmV0dXJuIHguZCA9PT0geS5kICYmIF9Kc29uX2VxdWFsaXR5KHguYiwgeS5iKTtcblxuXHRcdGNhc2UgNzpcblx0XHRcdHJldHVybiB4LmUgPT09IHkuZSAmJiBfSnNvbl9lcXVhbGl0eSh4LmIsIHkuYik7XG5cblx0XHRjYXNlIDk6XG5cdFx0XHRyZXR1cm4geC5mID09PSB5LmYgJiYgX0pzb25fbGlzdEVxdWFsaXR5KHguZywgeS5nKTtcblxuXHRcdGNhc2UgMTA6XG5cdFx0XHRyZXR1cm4geC5oID09PSB5LmggJiYgX0pzb25fZXF1YWxpdHkoeC5iLCB5LmIpO1xuXG5cdFx0Y2FzZSAxMTpcblx0XHRcdHJldHVybiBfSnNvbl9saXN0RXF1YWxpdHkoeC5nLCB5LmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9Kc29uX2xpc3RFcXVhbGl0eShhRGVjb2RlcnMsIGJEZWNvZGVycylcbntcblx0dmFyIGxlbiA9IGFEZWNvZGVycy5sZW5ndGg7XG5cdGlmIChsZW4gIT09IGJEZWNvZGVycy5sZW5ndGgpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcblx0e1xuXHRcdGlmICghX0pzb25fZXF1YWxpdHkoYURlY29kZXJzW2ldLCBiRGVjb2RlcnNbaV0pKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gRU5DT0RFXG5cbnZhciBfSnNvbl9lbmNvZGUgPSBGMihmdW5jdGlvbihpbmRlbnRMZXZlbCwgdmFsdWUpXG57XG5cdHJldHVybiBKU09OLnN0cmluZ2lmeShfSnNvbl91bndyYXAodmFsdWUpLCBudWxsLCBpbmRlbnRMZXZlbCkgKyAnJztcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl93cmFwKHZhbHVlKSB7IHJldHVybiB7ICQ6IDAsIGE6IHZhbHVlIH07IH1cbmZ1bmN0aW9uIF9Kc29uX3Vud3JhcCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUuYTsgfVxuXG5mdW5jdGlvbiBfSnNvbl93cmFwX1VOVVNFRCh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH1cbmZ1bmN0aW9uIF9Kc29uX3Vud3JhcF9VTlVTRUQodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9XG5cbmZ1bmN0aW9uIF9Kc29uX2VtcHR5QXJyYXkoKSB7IHJldHVybiBbXTsgfVxuZnVuY3Rpb24gX0pzb25fZW1wdHlPYmplY3QoKSB7IHJldHVybiB7fTsgfVxuXG52YXIgX0pzb25fYWRkRmllbGQgPSBGMyhmdW5jdGlvbihrZXksIHZhbHVlLCBvYmplY3QpXG57XG5cdG9iamVjdFtrZXldID0gX0pzb25fdW53cmFwKHZhbHVlKTtcblx0cmV0dXJuIG9iamVjdDtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9hZGRFbnRyeShmdW5jKVxue1xuXHRyZXR1cm4gRjIoZnVuY3Rpb24oZW50cnksIGFycmF5KVxuXHR7XG5cdFx0YXJyYXkucHVzaChfSnNvbl91bndyYXAoZnVuYyhlbnRyeSkpKTtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0pO1xufVxuXG52YXIgX0pzb25fZW5jb2RlTnVsbCA9IF9Kc29uX3dyYXAobnVsbCk7XG5cblxuXG4vLyBUQVNLU1xuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3N1Y2NlZWQodmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMCxcblx0XHRhOiB2YWx1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2ZhaWwoZXJyb3IpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMSxcblx0XHRhOiBlcnJvclxuXHR9O1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2JpbmRpbmcoY2FsbGJhY2spXG57XG5cdHJldHVybiB7XG5cdFx0JDogMixcblx0XHRiOiBjYWxsYmFjayxcblx0XHRjOiBudWxsXG5cdH07XG59XG5cbnZhciBfU2NoZWR1bGVyX2FuZFRoZW4gPSBGMihmdW5jdGlvbihjYWxsYmFjaywgdGFzaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAzLFxuXHRcdGI6IGNhbGxiYWNrLFxuXHRcdGQ6IHRhc2tcblx0fTtcbn0pO1xuXG52YXIgX1NjaGVkdWxlcl9vbkVycm9yID0gRjIoZnVuY3Rpb24oY2FsbGJhY2ssIHRhc2spXG57XG5cdHJldHVybiB7XG5cdFx0JDogNCxcblx0XHRiOiBjYWxsYmFjayxcblx0XHRkOiB0YXNrXG5cdH07XG59KTtcblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9yZWNlaXZlKGNhbGxiYWNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDUsXG5cdFx0YjogY2FsbGJhY2tcblx0fTtcbn1cblxuXG4vLyBQUk9DRVNTRVNcblxudmFyIF9TY2hlZHVsZXJfZ3VpZCA9IDA7XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfcmF3U3Bhd24odGFzaylcbntcblx0dmFyIHByb2MgPSB7XG5cdFx0JDogMCxcblx0XHRlOiBfU2NoZWR1bGVyX2d1aWQrKyxcblx0XHRmOiB0YXNrLFxuXHRcdGc6IG51bGwsXG5cdFx0aDogW11cblx0fTtcblxuXHRfU2NoZWR1bGVyX2VucXVldWUocHJvYyk7XG5cblx0cmV0dXJuIHByb2M7XG59XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfc3Bhd24odGFzaylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfU2NoZWR1bGVyX3Jhd1NwYXduKHRhc2spKSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3Jhd1NlbmQocHJvYywgbXNnKVxue1xuXHRwcm9jLmgucHVzaChtc2cpO1xuXHRfU2NoZWR1bGVyX2VucXVldWUocHJvYyk7XG59XG5cbnZhciBfU2NoZWR1bGVyX3NlbmQgPSBGMihmdW5jdGlvbihwcm9jLCBtc2cpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRfU2NoZWR1bGVyX3Jhd1NlbmQocHJvYywgbXNnKTtcblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn0pO1xuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2tpbGwocHJvYylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHZhciB0YXNrID0gcHJvYy5mO1xuXHRcdGlmICh0YXNrLiQgPT09IDIgJiYgdGFzay5jKVxuXHRcdHtcblx0XHRcdHRhc2suYygpO1xuXHRcdH1cblxuXHRcdHByb2MuZiA9IG51bGw7XG5cblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn1cblxuXG4vKiBTVEVQIFBST0NFU1NFU1xuXG50eXBlIGFsaWFzIFByb2Nlc3MgPVxuICB7ICQgOiB0YWdcbiAgLCBpZCA6IHVuaXF1ZV9pZFxuICAsIHJvb3QgOiBUYXNrXG4gICwgc3RhY2sgOiBudWxsIHwgeyAkOiBTVUNDRUVEIHwgRkFJTCwgYTogY2FsbGJhY2ssIGI6IHN0YWNrIH1cbiAgLCBtYWlsYm94IDogW21zZ11cbiAgfVxuXG4qL1xuXG5cbnZhciBfU2NoZWR1bGVyX3dvcmtpbmcgPSBmYWxzZTtcbnZhciBfU2NoZWR1bGVyX3F1ZXVlID0gW107XG5cblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9lbnF1ZXVlKHByb2MpXG57XG5cdF9TY2hlZHVsZXJfcXVldWUucHVzaChwcm9jKTtcblx0aWYgKF9TY2hlZHVsZXJfd29ya2luZylcblx0e1xuXHRcdHJldHVybjtcblx0fVxuXHRfU2NoZWR1bGVyX3dvcmtpbmcgPSB0cnVlO1xuXHR3aGlsZSAocHJvYyA9IF9TY2hlZHVsZXJfcXVldWUuc2hpZnQoKSlcblx0e1xuXHRcdF9TY2hlZHVsZXJfc3RlcChwcm9jKTtcblx0fVxuXHRfU2NoZWR1bGVyX3dvcmtpbmcgPSBmYWxzZTtcbn1cblxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3N0ZXAocHJvYylcbntcblx0d2hpbGUgKHByb2MuZilcblx0e1xuXHRcdHZhciByb290VGFnID0gcHJvYy5mLiQ7XG5cdFx0aWYgKHJvb3RUYWcgPT09IDAgfHwgcm9vdFRhZyA9PT0gMSlcblx0XHR7XG5cdFx0XHR3aGlsZSAocHJvYy5nICYmIHByb2MuZy4kICE9PSByb290VGFnKVxuXHRcdFx0e1xuXHRcdFx0XHRwcm9jLmcgPSBwcm9jLmcuaTtcblx0XHRcdH1cblx0XHRcdGlmICghcHJvYy5nKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwcm9jLmYgPSBwcm9jLmcuYihwcm9jLmYuYSk7XG5cdFx0XHRwcm9jLmcgPSBwcm9jLmcuaTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAocm9vdFRhZyA9PT0gMilcblx0XHR7XG5cdFx0XHRwcm9jLmYuYyA9IHByb2MuZi5iKGZ1bmN0aW9uKG5ld1Jvb3QpIHtcblx0XHRcdFx0cHJvYy5mID0gbmV3Um9vdDtcblx0XHRcdFx0X1NjaGVkdWxlcl9lbnF1ZXVlKHByb2MpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHJvb3RUYWcgPT09IDUpXG5cdFx0e1xuXHRcdFx0aWYgKHByb2MuaC5sZW5ndGggPT09IDApXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByb2MuZiA9IHByb2MuZi5iKHByb2MuaC5zaGlmdCgpKTtcblx0XHR9XG5cdFx0ZWxzZSAvLyBpZiAocm9vdFRhZyA9PT0gMyB8fCByb290VGFnID09PSA0KVxuXHRcdHtcblx0XHRcdHByb2MuZyA9IHtcblx0XHRcdFx0JDogcm9vdFRhZyA9PT0gMyA/IDAgOiAxLFxuXHRcdFx0XHRiOiBwcm9jLmYuYixcblx0XHRcdFx0aTogcHJvYy5nXG5cdFx0XHR9O1xuXHRcdFx0cHJvYy5mID0gcHJvYy5mLmQ7XG5cdFx0fVxuXHR9XG59XG5cblxuXG5mdW5jdGlvbiBfUHJvY2Vzc19zbGVlcCh0aW1lKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGlkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKSk7XG5cdFx0fSwgdGltZSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IGNsZWFyVGltZW91dChpZCk7IH07XG5cdH0pO1xufVxuXG5cblxuXG4vLyBQUk9HUkFNU1xuXG5cbnZhciBfUGxhdGZvcm1fd29ya2VyID0gRjQoZnVuY3Rpb24oaW1wbCwgZmxhZ0RlY29kZXIsIGRlYnVnTWV0YWRhdGEsIGFyZ3MpXG57XG5cdHJldHVybiBfUGxhdGZvcm1faW5pdGlhbGl6ZShcblx0XHRmbGFnRGVjb2Rlcixcblx0XHRhcmdzLFxuXHRcdGltcGwuaW5pdCxcblx0XHRpbXBsLnVwZGF0ZSxcblx0XHRpbXBsLnN1YnNjcmlwdGlvbnMsXG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHt9IH1cblx0KTtcbn0pO1xuXG5cblxuLy8gSU5JVElBTElaRSBBIFBST0dSQU1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1faW5pdGlhbGl6ZShmbGFnRGVjb2RlciwgYXJncywgaW5pdCwgdXBkYXRlLCBzdWJzY3JpcHRpb25zLCBzdGVwcGVyQnVpbGRlcilcbntcblx0dmFyIHJlc3VsdCA9IEEyKF9Kc29uX3J1biwgZmxhZ0RlY29kZXIsIF9Kc29uX3dyYXAoYXJncyA/IGFyZ3NbJ2ZsYWdzJ10gOiB1bmRlZmluZWQpKTtcblx0ZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSB8fCBfRGVidWdfY3Jhc2goMiAvKiovLCBfSnNvbl9lcnJvclRvU3RyaW5nKHJlc3VsdC5hKSAvKiovKTtcblx0dmFyIG1hbmFnZXJzID0ge307XG5cdHJlc3VsdCA9IGluaXQocmVzdWx0LmEpO1xuXHR2YXIgbW9kZWwgPSByZXN1bHQuYTtcblx0dmFyIHN0ZXBwZXIgPSBzdGVwcGVyQnVpbGRlcihzZW5kVG9BcHAsIG1vZGVsKTtcblx0dmFyIHBvcnRzID0gX1BsYXRmb3JtX3NldHVwRWZmZWN0cyhtYW5hZ2Vycywgc2VuZFRvQXBwKTtcblxuXHRmdW5jdGlvbiBzZW5kVG9BcHAobXNnLCB2aWV3TWV0YWRhdGEpXG5cdHtcblx0XHRyZXN1bHQgPSBBMih1cGRhdGUsIG1zZywgbW9kZWwpO1xuXHRcdHN0ZXBwZXIobW9kZWwgPSByZXN1bHQuYSwgdmlld01ldGFkYXRhKTtcblx0XHRfUGxhdGZvcm1fZGlzcGF0Y2hFZmZlY3RzKG1hbmFnZXJzLCByZXN1bHQuYiwgc3Vic2NyaXB0aW9ucyhtb2RlbCkpO1xuXHR9XG5cblx0X1BsYXRmb3JtX2Rpc3BhdGNoRWZmZWN0cyhtYW5hZ2VycywgcmVzdWx0LmIsIHN1YnNjcmlwdGlvbnMobW9kZWwpKTtcblxuXHRyZXR1cm4gcG9ydHMgPyB7IHBvcnRzOiBwb3J0cyB9IDoge307XG59XG5cblxuXG4vLyBUUkFDSyBQUkVMT0FEU1xuLy9cbi8vIFRoaXMgaXMgdXNlZCBieSBjb2RlIGluIGVsbS9icm93c2VyIGFuZCBlbG0vaHR0cFxuLy8gdG8gcmVnaXN0ZXIgYW55IEhUVFAgcmVxdWVzdHMgdGhhdCBhcmUgdHJpZ2dlcmVkIGJ5IGluaXQuXG4vL1xuXG5cbnZhciBfUGxhdGZvcm1fcHJlbG9hZDtcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fcmVnaXN0ZXJQcmVsb2FkKHVybClcbntcblx0X1BsYXRmb3JtX3ByZWxvYWQuYWRkKHVybCk7XG59XG5cblxuXG4vLyBFRkZFQ1QgTUFOQUdFUlNcblxuXG52YXIgX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzID0ge307XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3NldHVwRWZmZWN0cyhtYW5hZ2Vycywgc2VuZFRvQXBwKVxue1xuXHR2YXIgcG9ydHM7XG5cblx0Ly8gc2V0dXAgYWxsIG5lY2Vzc2FyeSBlZmZlY3QgbWFuYWdlcnNcblx0Zm9yICh2YXIga2V5IGluIF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vycylcblx0e1xuXHRcdHZhciBtYW5hZ2VyID0gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW2tleV07XG5cblx0XHRpZiAobWFuYWdlci5hKVxuXHRcdHtcblx0XHRcdHBvcnRzID0gcG9ydHMgfHwge307XG5cdFx0XHRwb3J0c1trZXldID0gbWFuYWdlci5hKGtleSwgc2VuZFRvQXBwKTtcblx0XHR9XG5cblx0XHRtYW5hZ2Vyc1trZXldID0gX1BsYXRmb3JtX2luc3RhbnRpYXRlTWFuYWdlcihtYW5hZ2VyLCBzZW5kVG9BcHApO1xuXHR9XG5cblx0cmV0dXJuIHBvcnRzO1xufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9jcmVhdGVNYW5hZ2VyKGluaXQsIG9uRWZmZWN0cywgb25TZWxmTXNnLCBjbWRNYXAsIHN1Yk1hcClcbntcblx0cmV0dXJuIHtcblx0XHRiOiBpbml0LFxuXHRcdGM6IG9uRWZmZWN0cyxcblx0XHRkOiBvblNlbGZNc2csXG5cdFx0ZTogY21kTWFwLFxuXHRcdGY6IHN1Yk1hcFxuXHR9O1xufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9pbnN0YW50aWF0ZU1hbmFnZXIoaW5mbywgc2VuZFRvQXBwKVxue1xuXHR2YXIgcm91dGVyID0ge1xuXHRcdGc6IHNlbmRUb0FwcCxcblx0XHRoOiB1bmRlZmluZWRcblx0fTtcblxuXHR2YXIgb25FZmZlY3RzID0gaW5mby5jO1xuXHR2YXIgb25TZWxmTXNnID0gaW5mby5kO1xuXHR2YXIgY21kTWFwID0gaW5mby5lO1xuXHR2YXIgc3ViTWFwID0gaW5mby5mO1xuXG5cdGZ1bmN0aW9uIGxvb3Aoc3RhdGUpXG5cdHtcblx0XHRyZXR1cm4gQTIoX1NjaGVkdWxlcl9hbmRUaGVuLCBsb29wLCBfU2NoZWR1bGVyX3JlY2VpdmUoZnVuY3Rpb24obXNnKVxuXHRcdHtcblx0XHRcdHZhciB2YWx1ZSA9IG1zZy5hO1xuXG5cdFx0XHRpZiAobXNnLiQgPT09IDApXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBBMyhvblNlbGZNc2csIHJvdXRlciwgdmFsdWUsIHN0YXRlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNtZE1hcCAmJiBzdWJNYXBcblx0XHRcdFx0PyBBNChvbkVmZmVjdHMsIHJvdXRlciwgdmFsdWUuaSwgdmFsdWUuaiwgc3RhdGUpXG5cdFx0XHRcdDogQTMob25FZmZlY3RzLCByb3V0ZXIsIGNtZE1hcCA/IHZhbHVlLmkgOiB2YWx1ZS5qLCBzdGF0ZSk7XG5cdFx0fSkpO1xuXHR9XG5cblx0cmV0dXJuIHJvdXRlci5oID0gX1NjaGVkdWxlcl9yYXdTcGF3bihBMihfU2NoZWR1bGVyX2FuZFRoZW4sIGxvb3AsIGluZm8uYikpO1xufVxuXG5cblxuLy8gUk9VVElOR1xuXG5cbnZhciBfUGxhdGZvcm1fc2VuZFRvQXBwID0gRjIoZnVuY3Rpb24ocm91dGVyLCBtc2cpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRyb3V0ZXIuZyhtc2cpO1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKSk7XG5cdH0pO1xufSk7XG5cblxudmFyIF9QbGF0Zm9ybV9zZW5kVG9TZWxmID0gRjIoZnVuY3Rpb24ocm91dGVyLCBtc2cpXG57XG5cdHJldHVybiBBMihfU2NoZWR1bGVyX3NlbmQsIHJvdXRlci5oLCB7XG5cdFx0JDogMCxcblx0XHRhOiBtc2dcblx0fSk7XG59KTtcblxuXG5cbi8vIEJBR1NcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fbGVhZihob21lKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24odmFsdWUpXG5cdHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0JDogMSxcblx0XHRcdGs6IGhvbWUsXG5cdFx0XHRsOiB2YWx1ZVxuXHRcdH07XG5cdH07XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2JhdGNoKGxpc3QpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMixcblx0XHRtOiBsaXN0XG5cdH07XG59XG5cblxudmFyIF9QbGF0Zm9ybV9tYXAgPSBGMihmdW5jdGlvbih0YWdnZXIsIGJhZylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAzLFxuXHRcdG46IHRhZ2dlcixcblx0XHRvOiBiYWdcblx0fVxufSk7XG5cblxuXG4vLyBQSVBFIEJBR1MgSU5UTyBFRkZFQ1QgTUFOQUdFUlNcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fZGlzcGF0Y2hFZmZlY3RzKG1hbmFnZXJzLCBjbWRCYWcsIHN1YkJhZylcbntcblx0dmFyIGVmZmVjdHNEaWN0ID0ge307XG5cdF9QbGF0Zm9ybV9nYXRoZXJFZmZlY3RzKHRydWUsIGNtZEJhZywgZWZmZWN0c0RpY3QsIG51bGwpO1xuXHRfUGxhdGZvcm1fZ2F0aGVyRWZmZWN0cyhmYWxzZSwgc3ViQmFnLCBlZmZlY3RzRGljdCwgbnVsbCk7XG5cblx0Zm9yICh2YXIgaG9tZSBpbiBtYW5hZ2Vycylcblx0e1xuXHRcdF9TY2hlZHVsZXJfcmF3U2VuZChtYW5hZ2Vyc1tob21lXSwge1xuXHRcdFx0JDogJ2Z4Jyxcblx0XHRcdGE6IGVmZmVjdHNEaWN0W2hvbWVdIHx8IHsgaTogX0xpc3RfTmlsLCBqOiBfTGlzdF9OaWwgfVxuXHRcdH0pO1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2dhdGhlckVmZmVjdHMoaXNDbWQsIGJhZywgZWZmZWN0c0RpY3QsIHRhZ2dlcnMpXG57XG5cdHN3aXRjaCAoYmFnLiQpXG5cdHtcblx0XHRjYXNlIDE6XG5cdFx0XHR2YXIgaG9tZSA9IGJhZy5rO1xuXHRcdFx0dmFyIGVmZmVjdCA9IF9QbGF0Zm9ybV90b0VmZmVjdChpc0NtZCwgaG9tZSwgdGFnZ2VycywgYmFnLmwpO1xuXHRcdFx0ZWZmZWN0c0RpY3RbaG9tZV0gPSBfUGxhdGZvcm1faW5zZXJ0KGlzQ21kLCBlZmZlY3QsIGVmZmVjdHNEaWN0W2hvbWVdKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMjpcblx0XHRcdGZvciAodmFyIGxpc3QgPSBiYWcubTsgbGlzdC5iOyBsaXN0ID0gbGlzdC5iKSAvLyBXSElMRV9DT05TXG5cdFx0XHR7XG5cdFx0XHRcdF9QbGF0Zm9ybV9nYXRoZXJFZmZlY3RzKGlzQ21kLCBsaXN0LmEsIGVmZmVjdHNEaWN0LCB0YWdnZXJzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMzpcblx0XHRcdF9QbGF0Zm9ybV9nYXRoZXJFZmZlY3RzKGlzQ21kLCBiYWcubywgZWZmZWN0c0RpY3QsIHtcblx0XHRcdFx0cDogYmFnLm4sXG5cdFx0XHRcdHE6IHRhZ2dlcnNcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3RvRWZmZWN0KGlzQ21kLCBob21lLCB0YWdnZXJzLCB2YWx1ZSlcbntcblx0ZnVuY3Rpb24gYXBwbHlUYWdnZXJzKHgpXG5cdHtcblx0XHRmb3IgKHZhciB0ZW1wID0gdGFnZ2VyczsgdGVtcDsgdGVtcCA9IHRlbXAucSlcblx0XHR7XG5cdFx0XHR4ID0gdGVtcC5wKHgpO1xuXHRcdH1cblx0XHRyZXR1cm4geDtcblx0fVxuXG5cdHZhciBtYXAgPSBpc0NtZFxuXHRcdD8gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW2hvbWVdLmVcblx0XHQ6IF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tob21lXS5mO1xuXG5cdHJldHVybiBBMihtYXAsIGFwcGx5VGFnZ2VycywgdmFsdWUpXG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2luc2VydChpc0NtZCwgbmV3RWZmZWN0LCBlZmZlY3RzKVxue1xuXHRlZmZlY3RzID0gZWZmZWN0cyB8fCB7IGk6IF9MaXN0X05pbCwgajogX0xpc3RfTmlsIH07XG5cblx0aXNDbWRcblx0XHQ/IChlZmZlY3RzLmkgPSBfTGlzdF9Db25zKG5ld0VmZmVjdCwgZWZmZWN0cy5pKSlcblx0XHQ6IChlZmZlY3RzLmogPSBfTGlzdF9Db25zKG5ld0VmZmVjdCwgZWZmZWN0cy5qKSk7XG5cblx0cmV0dXJuIGVmZmVjdHM7XG59XG5cblxuXG4vLyBQT1JUU1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9jaGVja1BvcnROYW1lKG5hbWUpXG57XG5cdGlmIChfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0pXG5cdHtcblx0XHRfRGVidWdfY3Jhc2goMywgbmFtZSlcblx0fVxufVxuXG5cblxuLy8gT1VUR09JTkcgUE9SVFNcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fb3V0Z29pbmdQb3J0KG5hbWUsIGNvbnZlcnRlcilcbntcblx0X1BsYXRmb3JtX2NoZWNrUG9ydE5hbWUobmFtZSk7XG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXSA9IHtcblx0XHRlOiBfUGxhdGZvcm1fb3V0Z29pbmdQb3J0TWFwLFxuXHRcdHI6IGNvbnZlcnRlcixcblx0XHRhOiBfUGxhdGZvcm1fc2V0dXBPdXRnb2luZ1BvcnRcblx0fTtcblx0cmV0dXJuIF9QbGF0Zm9ybV9sZWFmKG5hbWUpO1xufVxuXG5cbnZhciBfUGxhdGZvcm1fb3V0Z29pbmdQb3J0TWFwID0gRjIoZnVuY3Rpb24odGFnZ2VyLCB2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH0pO1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9zZXR1cE91dGdvaW5nUG9ydChuYW1lKVxue1xuXHR2YXIgc3VicyA9IFtdO1xuXHR2YXIgY29udmVydGVyID0gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLnI7XG5cblx0Ly8gQ1JFQVRFIE1BTkFHRVJcblxuXHR2YXIgaW5pdCA9IF9Qcm9jZXNzX3NsZWVwKDApO1xuXG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXS5iID0gaW5pdDtcblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLmMgPSBGMyhmdW5jdGlvbihyb3V0ZXIsIGNtZExpc3QsIHN0YXRlKVxuXHR7XG5cdFx0Zm9yICggOyBjbWRMaXN0LmI7IGNtZExpc3QgPSBjbWRMaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHQvLyBncmFiIGEgc2VwYXJhdGUgcmVmZXJlbmNlIHRvIHN1YnMgaW4gY2FzZSB1bnN1YnNjcmliZSBpcyBjYWxsZWRcblx0XHRcdHZhciBjdXJyZW50U3VicyA9IHN1YnM7XG5cdFx0XHR2YXIgdmFsdWUgPSBfSnNvbl91bndyYXAoY29udmVydGVyKGNtZExpc3QuYSkpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50U3Vicy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0Y3VycmVudFN1YnNbaV0odmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaW5pdDtcblx0fSk7XG5cblx0Ly8gUFVCTElDIEFQSVxuXG5cdGZ1bmN0aW9uIHN1YnNjcmliZShjYWxsYmFjaylcblx0e1xuXHRcdHN1YnMucHVzaChjYWxsYmFjayk7XG5cdH1cblxuXHRmdW5jdGlvbiB1bnN1YnNjcmliZShjYWxsYmFjaylcblx0e1xuXHRcdC8vIGNvcHkgc3VicyBpbnRvIGEgbmV3IGFycmF5IGluIGNhc2UgdW5zdWJzY3JpYmUgaXMgY2FsbGVkIHdpdGhpbiBhXG5cdFx0Ly8gc3Vic2NyaWJlZCBjYWxsYmFja1xuXHRcdHN1YnMgPSBzdWJzLnNsaWNlKCk7XG5cdFx0dmFyIGluZGV4ID0gc3Vicy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRpZiAoaW5kZXggPj0gMClcblx0XHR7XG5cdFx0XHRzdWJzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzdWJzY3JpYmU6IHN1YnNjcmliZSxcblx0XHR1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcblx0fTtcbn1cblxuXG5cbi8vIElOQ09NSU5HIFBPUlRTXG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2luY29taW5nUG9ydChuYW1lLCBjb252ZXJ0ZXIpXG57XG5cdF9QbGF0Zm9ybV9jaGVja1BvcnROYW1lKG5hbWUpO1xuXHRfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0gPSB7XG5cdFx0ZjogX1BsYXRmb3JtX2luY29taW5nUG9ydE1hcCxcblx0XHRyOiBjb252ZXJ0ZXIsXG5cdFx0YTogX1BsYXRmb3JtX3NldHVwSW5jb21pbmdQb3J0XG5cdH07XG5cdHJldHVybiBfUGxhdGZvcm1fbGVhZihuYW1lKTtcbn1cblxuXG52YXIgX1BsYXRmb3JtX2luY29taW5nUG9ydE1hcCA9IEYyKGZ1bmN0aW9uKHRhZ2dlciwgZmluYWxUYWdnZXIpXG57XG5cdHJldHVybiBmdW5jdGlvbih2YWx1ZSlcblx0e1xuXHRcdHJldHVybiB0YWdnZXIoZmluYWxUYWdnZXIodmFsdWUpKTtcblx0fTtcbn0pO1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9zZXR1cEluY29taW5nUG9ydChuYW1lLCBzZW5kVG9BcHApXG57XG5cdHZhciBzdWJzID0gX0xpc3RfTmlsO1xuXHR2YXIgY29udmVydGVyID0gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLnI7XG5cblx0Ly8gQ1JFQVRFIE1BTkFHRVJcblxuXHR2YXIgaW5pdCA9IF9TY2hlZHVsZXJfc3VjY2VlZChudWxsKTtcblxuXHRfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0uYiA9IGluaXQ7XG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXS5jID0gRjMoZnVuY3Rpb24ocm91dGVyLCBzdWJMaXN0LCBzdGF0ZSlcblx0e1xuXHRcdHN1YnMgPSBzdWJMaXN0O1xuXHRcdHJldHVybiBpbml0O1xuXHR9KTtcblxuXHQvLyBQVUJMSUMgQVBJXG5cblx0ZnVuY3Rpb24gc2VuZChpbmNvbWluZ1ZhbHVlKVxuXHR7XG5cdFx0dmFyIHJlc3VsdCA9IEEyKF9Kc29uX3J1biwgY29udmVydGVyLCBfSnNvbl93cmFwKGluY29taW5nVmFsdWUpKTtcblxuXHRcdGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkgfHwgX0RlYnVnX2NyYXNoKDQsIG5hbWUsIHJlc3VsdC5hKTtcblxuXHRcdHZhciB2YWx1ZSA9IHJlc3VsdC5hO1xuXHRcdGZvciAodmFyIHRlbXAgPSBzdWJzOyB0ZW1wLmI7IHRlbXAgPSB0ZW1wLmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHRzZW5kVG9BcHAodGVtcC5hKHZhbHVlKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc2VuZDogc2VuZCB9O1xufVxuXG5cblxuLy8gRVhQT1JUIEVMTSBNT0RVTEVTXG4vL1xuLy8gSGF2ZSBERUJVRyBhbmQgUFJPRCB2ZXJzaW9ucyBzbyB0aGF0IHdlIGNhbiAoMSkgZ2l2ZSBuaWNlciBlcnJvcnMgaW5cbi8vIGRlYnVnIG1vZGUgYW5kICgyKSBub3QgcGF5IGZvciB0aGUgYml0cyBuZWVkZWQgZm9yIHRoYXQgaW4gcHJvZCBtb2RlLlxuLy9cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fZXhwb3J0X1VOVVNFRChleHBvcnRzKVxue1xuXHRzY29wZVsnRWxtJ11cblx0XHQ/IF9QbGF0Zm9ybV9tZXJnZUV4cG9ydHNQcm9kKHNjb3BlWydFbG0nXSwgZXhwb3J0cylcblx0XHQ6IHNjb3BlWydFbG0nXSA9IGV4cG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX21lcmdlRXhwb3J0c1Byb2Qob2JqLCBleHBvcnRzKVxue1xuXHRmb3IgKHZhciBuYW1lIGluIGV4cG9ydHMpXG5cdHtcblx0XHQobmFtZSBpbiBvYmopXG5cdFx0XHQ/IChuYW1lID09ICdpbml0Jylcblx0XHRcdFx0PyBfRGVidWdfY3Jhc2goNilcblx0XHRcdFx0OiBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzUHJvZChvYmpbbmFtZV0sIGV4cG9ydHNbbmFtZV0pXG5cdFx0XHQ6IChvYmpbbmFtZV0gPSBleHBvcnRzW25hbWVdKTtcblx0fVxufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9leHBvcnQoZXhwb3J0cylcbntcblx0c2NvcGVbJ0VsbSddXG5cdFx0PyBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzRGVidWcoJ0VsbScsIHNjb3BlWydFbG0nXSwgZXhwb3J0cylcblx0XHQ6IHNjb3BlWydFbG0nXSA9IGV4cG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX21lcmdlRXhwb3J0c0RlYnVnKG1vZHVsZU5hbWUsIG9iaiwgZXhwb3J0cylcbntcblx0Zm9yICh2YXIgbmFtZSBpbiBleHBvcnRzKVxuXHR7XG5cdFx0KG5hbWUgaW4gb2JqKVxuXHRcdFx0PyAobmFtZSA9PSAnaW5pdCcpXG5cdFx0XHRcdD8gX0RlYnVnX2NyYXNoKDYsIG1vZHVsZU5hbWUpXG5cdFx0XHRcdDogX1BsYXRmb3JtX21lcmdlRXhwb3J0c0RlYnVnKG1vZHVsZU5hbWUgKyAnLicgKyBuYW1lLCBvYmpbbmFtZV0sIGV4cG9ydHNbbmFtZV0pXG5cdFx0XHQ6IChvYmpbbmFtZV0gPSBleHBvcnRzW25hbWVdKTtcblx0fVxufVxuXG5cblxuXG4vLyBIRUxQRVJTXG5cblxudmFyIF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcDtcblxudmFyIF9WaXJ0dWFsRG9tX2RvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbnZhciBfVmlydHVhbERvbV9pbml0ID0gRjQoZnVuY3Rpb24odmlydHVhbE5vZGUsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHQvLyBOT1RFOiB0aGlzIGZ1bmN0aW9uIG5lZWRzIF9QbGF0Zm9ybV9leHBvcnQgYXZhaWxhYmxlIHRvIHdvcmtcblxuXHQvKipfVU5VU0VEL1xuXHR2YXIgbm9kZSA9IGFyZ3NbJ25vZGUnXTtcblx0Ly8qL1xuXHQvKiovXG5cdHZhciBub2RlID0gYXJncyAmJiBhcmdzWydub2RlJ10gPyBhcmdzWydub2RlJ10gOiBfRGVidWdfY3Jhc2goMCk7XG5cdC8vKi9cblxuXHRub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuXHRcdF9WaXJ0dWFsRG9tX3JlbmRlcih2aXJ0dWFsTm9kZSwgZnVuY3Rpb24oKSB7fSksXG5cdFx0bm9kZVxuXHQpO1xuXG5cdHJldHVybiB7fTtcbn0pO1xuXG5cblxuLy8gVEVYVFxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3RleHQoc3RyaW5nKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDAsXG5cdFx0YTogc3RyaW5nXG5cdH07XG59XG5cblxuXG4vLyBOT0RFXG5cblxudmFyIF9WaXJ0dWFsRG9tX25vZGVOUyA9IEYyKGZ1bmN0aW9uKG5hbWVzcGFjZSwgdGFnKVxue1xuXHRyZXR1cm4gRjIoZnVuY3Rpb24oZmFjdExpc3QsIGtpZExpc3QpXG5cdHtcblx0XHRmb3IgKHZhciBraWRzID0gW10sIGRlc2NlbmRhbnRzQ291bnQgPSAwOyBraWRMaXN0LmI7IGtpZExpc3QgPSBraWRMaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHR2YXIga2lkID0ga2lkTGlzdC5hO1xuXHRcdFx0ZGVzY2VuZGFudHNDb3VudCArPSAoa2lkLmIgfHwgMCk7XG5cdFx0XHRraWRzLnB1c2goa2lkKTtcblx0XHR9XG5cdFx0ZGVzY2VuZGFudHNDb3VudCArPSBraWRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAxLFxuXHRcdFx0YzogdGFnLFxuXHRcdFx0ZDogX1ZpcnR1YWxEb21fb3JnYW5pemVGYWN0cyhmYWN0TGlzdCksXG5cdFx0XHRlOiBraWRzLFxuXHRcdFx0ZjogbmFtZXNwYWNlLFxuXHRcdFx0YjogZGVzY2VuZGFudHNDb3VudFxuXHRcdH07XG5cdH0pO1xufSk7XG5cblxudmFyIF9WaXJ0dWFsRG9tX25vZGUgPSBfVmlydHVhbERvbV9ub2RlTlModW5kZWZpbmVkKTtcblxuXG5cbi8vIEtFWUVEIE5PREVcblxuXG52YXIgX1ZpcnR1YWxEb21fa2V5ZWROb2RlTlMgPSBGMihmdW5jdGlvbihuYW1lc3BhY2UsIHRhZylcbntcblx0cmV0dXJuIEYyKGZ1bmN0aW9uKGZhY3RMaXN0LCBraWRMaXN0KVxuXHR7XG5cdFx0Zm9yICh2YXIga2lkcyA9IFtdLCBkZXNjZW5kYW50c0NvdW50ID0gMDsga2lkTGlzdC5iOyBraWRMaXN0ID0ga2lkTGlzdC5iKSAvLyBXSElMRV9DT05TXG5cdFx0e1xuXHRcdFx0dmFyIGtpZCA9IGtpZExpc3QuYTtcblx0XHRcdGRlc2NlbmRhbnRzQ291bnQgKz0gKGtpZC5iLmIgfHwgMCk7XG5cdFx0XHRraWRzLnB1c2goa2lkKTtcblx0XHR9XG5cdFx0ZGVzY2VuZGFudHNDb3VudCArPSBraWRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAyLFxuXHRcdFx0YzogdGFnLFxuXHRcdFx0ZDogX1ZpcnR1YWxEb21fb3JnYW5pemVGYWN0cyhmYWN0TGlzdCksXG5cdFx0XHRlOiBraWRzLFxuXHRcdFx0ZjogbmFtZXNwYWNlLFxuXHRcdFx0YjogZGVzY2VuZGFudHNDb3VudFxuXHRcdH07XG5cdH0pO1xufSk7XG5cblxudmFyIF9WaXJ0dWFsRG9tX2tleWVkTm9kZSA9IF9WaXJ0dWFsRG9tX2tleWVkTm9kZU5TKHVuZGVmaW5lZCk7XG5cblxuXG4vLyBDVVNUT01cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9jdXN0b20oZmFjdExpc3QsIG1vZGVsLCByZW5kZXIsIGRpZmYpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMyxcblx0XHRkOiBfVmlydHVhbERvbV9vcmdhbml6ZUZhY3RzKGZhY3RMaXN0KSxcblx0XHRnOiBtb2RlbCxcblx0XHRoOiByZW5kZXIsXG5cdFx0aTogZGlmZlxuXHR9O1xufVxuXG5cblxuLy8gTUFQXG5cblxudmFyIF9WaXJ0dWFsRG9tX21hcCA9IEYyKGZ1bmN0aW9uKHRhZ2dlciwgbm9kZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiA0LFxuXHRcdGo6IHRhZ2dlcixcblx0XHRrOiBub2RlLFxuXHRcdGI6IDEgKyAobm9kZS5iIHx8IDApXG5cdH07XG59KTtcblxuXG5cbi8vIExBWllcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV90aHVuayhyZWZzLCB0aHVuaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiA1LFxuXHRcdGw6IHJlZnMsXG5cdFx0bTogdGh1bmssXG5cdFx0azogdW5kZWZpbmVkXG5cdH07XG59XG5cbnZhciBfVmlydHVhbERvbV9sYXp5ID0gRjIoZnVuY3Rpb24oZnVuYywgYSlcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGZ1bmMoYSk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5MiA9IEYzKGZ1bmN0aW9uKGZ1bmMsIGEsIGIpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYl0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBMihmdW5jLCBhLCBiKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenkzID0gRjQoZnVuY3Rpb24oZnVuYywgYSwgYiwgYylcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEEzKGZ1bmMsIGEsIGIsIGMpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTQgPSBGNShmdW5jdGlvbihmdW5jLCBhLCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGMsIGRdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTQoZnVuYywgYSwgYiwgYywgZCk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5NSA9IEY2KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQsIGUpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZCwgZV0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBNShmdW5jLCBhLCBiLCBjLCBkLCBlKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenk2ID0gRjcoZnVuY3Rpb24oZnVuYywgYSwgYiwgYywgZCwgZSwgZilcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjLCBkLCBlLCBmXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEE2KGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTcgPSBGOChmdW5jdGlvbihmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGddLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTcoZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZyk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5OCA9IEY5KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZywgaF0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBOChmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKTtcblx0fSk7XG59KTtcblxuXG5cbi8vIEZBQ1RTXG5cblxudmFyIF9WaXJ0dWFsRG9tX29uID0gRjIoZnVuY3Rpb24oa2V5LCBoYW5kbGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMCcsXG5cdFx0bjoga2V5LFxuXHRcdG86IGhhbmRsZXJcblx0fTtcbn0pO1xudmFyIF9WaXJ0dWFsRG9tX3N0eWxlID0gRjIoZnVuY3Rpb24oa2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiAnYTEnLFxuXHRcdG46IGtleSxcblx0XHRvOiB2YWx1ZVxuXHR9O1xufSk7XG52YXIgX1ZpcnR1YWxEb21fcHJvcGVydHkgPSBGMihmdW5jdGlvbihrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMicsXG5cdFx0bjoga2V5LFxuXHRcdG86IHZhbHVlXG5cdH07XG59KTtcbnZhciBfVmlydHVhbERvbV9hdHRyaWJ1dGUgPSBGMihmdW5jdGlvbihrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMycsXG5cdFx0bjoga2V5LFxuXHRcdG86IHZhbHVlXG5cdH07XG59KTtcbnZhciBfVmlydHVhbERvbV9hdHRyaWJ1dGVOUyA9IEYzKGZ1bmN0aW9uKG5hbWVzcGFjZSwga2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiAnYTQnLFxuXHRcdG46IGtleSxcblx0XHRvOiB7IGY6IG5hbWVzcGFjZSwgbzogdmFsdWUgfVxuXHR9O1xufSk7XG5cblxuXG4vLyBYU1MgQVRUQUNLIFZFQ1RPUiBDSEVDS1NcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9ub1NjcmlwdCh0YWcpXG57XG5cdHJldHVybiB0YWcgPT0gJ3NjcmlwdCcgPyAncCcgOiB0YWc7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vT25PckZvcm1BY3Rpb24oa2V5KVxue1xuXHRyZXR1cm4gL14ob258Zm9ybUFjdGlvbiQpL2kudGVzdChrZXkpID8gJ2RhdGEtJyArIGtleSA6IGtleTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbm9Jbm5lckh0bWxPckZvcm1BY3Rpb24oa2V5KVxue1xuXHRyZXR1cm4ga2V5ID09ICdpbm5lckhUTUwnIHx8IGtleSA9PSAnZm9ybUFjdGlvbicgPyAnZGF0YS0nICsga2V5IDoga2V5O1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9ub0phdmFTY3JpcHRVcmlfVU5VU0VEKHZhbHVlKVxue1xuXHRyZXR1cm4gL15qYXZhc2NyaXB0Oi9pLnRlc3QodmFsdWUucmVwbGFjZSgvXFxzL2csJycpKSA/ICcnIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdFVyaSh2YWx1ZSlcbntcblx0cmV0dXJuIC9eamF2YXNjcmlwdDovaS50ZXN0KHZhbHVlLnJlcGxhY2UoL1xccy9nLCcnKSlcblx0XHQ/ICdqYXZhc2NyaXB0OmFsZXJ0KFwiVGhpcyBpcyBhbiBYU1MgdmVjdG9yLiBQbGVhc2UgdXNlIHBvcnRzIG9yIHdlYiBjb21wb25lbnRzIGluc3RlYWQuXCIpJ1xuXHRcdDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaV9VTlVTRUQodmFsdWUpXG57XG5cdHJldHVybiAvXlxccyooamF2YXNjcmlwdDp8ZGF0YTp0ZXh0XFwvaHRtbCkvaS50ZXN0KHZhbHVlKSA/ICcnIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaSh2YWx1ZSlcbntcblx0cmV0dXJuIC9eXFxzKihqYXZhc2NyaXB0OnxkYXRhOnRleHRcXC9odG1sKS9pLnRlc3QodmFsdWUpXG5cdFx0PyAnamF2YXNjcmlwdDphbGVydChcIlRoaXMgaXMgYW4gWFNTIHZlY3Rvci4gUGxlYXNlIHVzZSBwb3J0cyBvciB3ZWIgY29tcG9uZW50cyBpbnN0ZWFkLlwiKSdcblx0XHQ6IHZhbHVlO1xufVxuXG5cblxuLy8gTUFQIEZBQ1RTXG5cblxudmFyIF9WaXJ0dWFsRG9tX21hcEF0dHJpYnV0ZSA9IEYyKGZ1bmN0aW9uKGZ1bmMsIGF0dHIpXG57XG5cdHJldHVybiAoYXR0ci4kID09PSAnYTAnKVxuXHRcdD8gQTIoX1ZpcnR1YWxEb21fb24sIGF0dHIubiwgX1ZpcnR1YWxEb21fbWFwSGFuZGxlcihmdW5jLCBhdHRyLm8pKVxuXHRcdDogYXR0cjtcbn0pO1xuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9tYXBIYW5kbGVyKGZ1bmMsIGhhbmRsZXIpXG57XG5cdHZhciB0YWcgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0b0hhbmRsZXJJbnQoaGFuZGxlcik7XG5cblx0Ly8gMCA9IE5vcm1hbFxuXHQvLyAxID0gTWF5U3RvcFByb3BhZ2F0aW9uXG5cdC8vIDIgPSBNYXlQcmV2ZW50RGVmYXVsdFxuXHQvLyAzID0gQ3VzdG9tXG5cblx0cmV0dXJuIHtcblx0XHQkOiBoYW5kbGVyLiQsXG5cdFx0YTpcblx0XHRcdCF0YWdcblx0XHRcdFx0PyBBMihlbG0kanNvbiRKc29uJERlY29kZSRtYXAsIGZ1bmMsIGhhbmRsZXIuYSlcblx0XHRcdFx0OlxuXHRcdFx0QTMoZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0XHRcdFx0dGFnIDwgM1xuXHRcdFx0XHRcdD8gX1ZpcnR1YWxEb21fbWFwRXZlbnRUdXBsZVxuXHRcdFx0XHRcdDogX1ZpcnR1YWxEb21fbWFwRXZlbnRSZWNvcmQsXG5cdFx0XHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJHN1Y2NlZWQoZnVuYyksXG5cdFx0XHRcdGhhbmRsZXIuYVxuXHRcdFx0KVxuXHR9O1xufVxuXG52YXIgX1ZpcnR1YWxEb21fbWFwRXZlbnRUdXBsZSA9IEYyKGZ1bmN0aW9uKGZ1bmMsIHR1cGxlKVxue1xuXHRyZXR1cm4gX1V0aWxzX1R1cGxlMihmdW5jKHR1cGxlLmEpLCB0dXBsZS5iKTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbWFwRXZlbnRSZWNvcmQgPSBGMihmdW5jdGlvbihmdW5jLCByZWNvcmQpXG57XG5cdHJldHVybiB7XG5cdFx0bWVzc2FnZTogZnVuYyhyZWNvcmQubWVzc2FnZSksXG5cdFx0c3RvcFByb3BhZ2F0aW9uOiByZWNvcmQuc3RvcFByb3BhZ2F0aW9uLFxuXHRcdHByZXZlbnREZWZhdWx0OiByZWNvcmQucHJldmVudERlZmF1bHRcblx0fVxufSk7XG5cblxuXG4vLyBPUkdBTklaRSBGQUNUU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX29yZ2FuaXplRmFjdHMoZmFjdExpc3QpXG57XG5cdGZvciAodmFyIGZhY3RzID0ge307IGZhY3RMaXN0LmI7IGZhY3RMaXN0ID0gZmFjdExpc3QuYikgLy8gV0hJTEVfQ09OU1xuXHR7XG5cdFx0dmFyIGVudHJ5ID0gZmFjdExpc3QuYTtcblxuXHRcdHZhciB0YWcgPSBlbnRyeS4kO1xuXHRcdHZhciBrZXkgPSBlbnRyeS5uO1xuXHRcdHZhciB2YWx1ZSA9IGVudHJ5Lm87XG5cblx0XHRpZiAodGFnID09PSAnYTInKVxuXHRcdHtcblx0XHRcdChrZXkgPT09ICdjbGFzc05hbWUnKVxuXHRcdFx0XHQ/IF9WaXJ0dWFsRG9tX2FkZENsYXNzKGZhY3RzLCBrZXksIF9Kc29uX3Vud3JhcCh2YWx1ZSkpXG5cdFx0XHRcdDogZmFjdHNba2V5XSA9IF9Kc29uX3Vud3JhcCh2YWx1ZSk7XG5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZhciBzdWJGYWN0cyA9IGZhY3RzW3RhZ10gfHwgKGZhY3RzW3RhZ10gPSB7fSk7XG5cdFx0KHRhZyA9PT0gJ2EzJyAmJiBrZXkgPT09ICdjbGFzcycpXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FkZENsYXNzKHN1YkZhY3RzLCBrZXksIHZhbHVlKVxuXHRcdFx0OiBzdWJGYWN0c1trZXldID0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gZmFjdHM7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FkZENsYXNzKG9iamVjdCwga2V5LCBuZXdDbGFzcylcbntcblx0dmFyIGNsYXNzZXMgPSBvYmplY3Rba2V5XTtcblx0b2JqZWN0W2tleV0gPSBjbGFzc2VzID8gY2xhc3NlcyArICcgJyArIG5ld0NsYXNzIDogbmV3Q2xhc3M7XG59XG5cblxuXG4vLyBSRU5ERVJcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9yZW5kZXIodk5vZGUsIGV2ZW50Tm9kZSlcbntcblx0dmFyIHRhZyA9IHZOb2RlLiQ7XG5cblx0aWYgKHRhZyA9PT0gNSlcblx0e1xuXHRcdHJldHVybiBfVmlydHVhbERvbV9yZW5kZXIodk5vZGUuayB8fCAodk5vZGUuayA9IHZOb2RlLm0oKSksIGV2ZW50Tm9kZSk7XG5cdH1cblxuXHRpZiAodGFnID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2RvYy5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS5hKTtcblx0fVxuXG5cdGlmICh0YWcgPT09IDQpXG5cdHtcblx0XHR2YXIgc3ViTm9kZSA9IHZOb2RlLms7XG5cdFx0dmFyIHRhZ2dlciA9IHZOb2RlLmo7XG5cblx0XHR3aGlsZSAoc3ViTm9kZS4kID09PSA0KVxuXHRcdHtcblx0XHRcdHR5cGVvZiB0YWdnZXIgIT09ICdvYmplY3QnXG5cdFx0XHRcdD8gdGFnZ2VyID0gW3RhZ2dlciwgc3ViTm9kZS5qXVxuXHRcdFx0XHQ6IHRhZ2dlci5wdXNoKHN1Yk5vZGUuaik7XG5cblx0XHRcdHN1Yk5vZGUgPSBzdWJOb2RlLms7XG5cdFx0fVxuXG5cdFx0dmFyIHN1YkV2ZW50Um9vdCA9IHsgajogdGFnZ2VyLCBwOiBldmVudE5vZGUgfTtcblx0XHR2YXIgZG9tTm9kZSA9IF9WaXJ0dWFsRG9tX3JlbmRlcihzdWJOb2RlLCBzdWJFdmVudFJvb3QpO1xuXHRcdGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmID0gc3ViRXZlbnRSb290O1xuXHRcdHJldHVybiBkb21Ob2RlO1xuXHR9XG5cblx0aWYgKHRhZyA9PT0gMylcblx0e1xuXHRcdHZhciBkb21Ob2RlID0gdk5vZGUuaCh2Tm9kZS5nKTtcblx0XHRfVmlydHVhbERvbV9hcHBseUZhY3RzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgdk5vZGUuZCk7XG5cdFx0cmV0dXJuIGRvbU5vZGU7XG5cdH1cblxuXHQvLyBhdCB0aGlzIHBvaW50IGB0YWdgIG11c3QgYmUgMSBvciAyXG5cblx0dmFyIGRvbU5vZGUgPSB2Tm9kZS5mXG5cdFx0PyBfVmlydHVhbERvbV9kb2MuY3JlYXRlRWxlbWVudE5TKHZOb2RlLmYsIHZOb2RlLmMpXG5cdFx0OiBfVmlydHVhbERvbV9kb2MuY3JlYXRlRWxlbWVudCh2Tm9kZS5jKTtcblxuXHRpZiAoX1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwICYmIHZOb2RlLmMgPT0gJ2EnKVxuXHR7XG5cdFx0ZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcChkb21Ob2RlKSk7XG5cdH1cblxuXHRfVmlydHVhbERvbV9hcHBseUZhY3RzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgdk5vZGUuZCk7XG5cblx0Zm9yICh2YXIga2lkcyA9IHZOb2RlLmUsIGkgPSAwOyBpIDwga2lkcy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKGRvbU5vZGUsIF9WaXJ0dWFsRG9tX3JlbmRlcih0YWcgPT09IDEgPyBraWRzW2ldIDoga2lkc1tpXS5iLCBldmVudE5vZGUpKTtcblx0fVxuXG5cdHJldHVybiBkb21Ob2RlO1xufVxuXG5cblxuLy8gQVBQTFkgRkFDVFNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseUZhY3RzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgZmFjdHMpXG57XG5cdGZvciAodmFyIGtleSBpbiBmYWN0cylcblx0e1xuXHRcdHZhciB2YWx1ZSA9IGZhY3RzW2tleV07XG5cblx0XHRrZXkgPT09ICdhMSdcblx0XHRcdD8gX1ZpcnR1YWxEb21fYXBwbHlTdHlsZXMoZG9tTm9kZSwgdmFsdWUpXG5cdFx0XHQ6XG5cdFx0a2V5ID09PSAnYTAnXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FwcGx5RXZlbnRzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgdmFsdWUpXG5cdFx0XHQ6XG5cdFx0a2V5ID09PSAnYTMnXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FwcGx5QXR0cnMoZG9tTm9kZSwgdmFsdWUpXG5cdFx0XHQ6XG5cdFx0a2V5ID09PSAnYTQnXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FwcGx5QXR0cnNOUyhkb21Ob2RlLCB2YWx1ZSlcblx0XHRcdDpcblx0XHQoKGtleSAhPT0gJ3ZhbHVlJyAmJiBrZXkgIT09ICdjaGVja2VkJykgfHwgZG9tTm9kZVtrZXldICE9PSB2YWx1ZSkgJiYgKGRvbU5vZGVba2V5XSA9IHZhbHVlKTtcblx0fVxufVxuXG5cblxuLy8gQVBQTFkgU1RZTEVTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlTdHlsZXMoZG9tTm9kZSwgc3R5bGVzKVxue1xuXHR2YXIgZG9tTm9kZVN0eWxlID0gZG9tTm9kZS5zdHlsZTtcblxuXHRmb3IgKHZhciBrZXkgaW4gc3R5bGVzKVxuXHR7XG5cdFx0ZG9tTm9kZVN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcblx0fVxufVxuXG5cblxuLy8gQVBQTFkgQVRUUlNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseUF0dHJzKGRvbU5vZGUsIGF0dHJzKVxue1xuXHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpXG5cdHtcblx0XHR2YXIgdmFsdWUgPSBhdHRyc1trZXldO1xuXHRcdHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdD8gZG9tTm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcblx0XHRcdDogZG9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcblx0fVxufVxuXG5cblxuLy8gQVBQTFkgTkFNRVNQQUNFRCBBVFRSU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5QXR0cnNOUyhkb21Ob2RlLCBuc0F0dHJzKVxue1xuXHRmb3IgKHZhciBrZXkgaW4gbnNBdHRycylcblx0e1xuXHRcdHZhciBwYWlyID0gbnNBdHRyc1trZXldO1xuXHRcdHZhciBuYW1lc3BhY2UgPSBwYWlyLmY7XG5cdFx0dmFyIHZhbHVlID0gcGFpci5vO1xuXG5cdFx0dHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xuXHRcdFx0PyBkb21Ob2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZSwga2V5LCB2YWx1ZSlcblx0XHRcdDogZG9tTm9kZS5yZW1vdmVBdHRyaWJ1dGVOUyhuYW1lc3BhY2UsIGtleSk7XG5cdH1cbn1cblxuXG5cbi8vIEFQUExZIEVWRU5UU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5RXZlbnRzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgZXZlbnRzKVxue1xuXHR2YXIgYWxsQ2FsbGJhY2tzID0gZG9tTm9kZS5lbG1GcyB8fCAoZG9tTm9kZS5lbG1GcyA9IHt9KTtcblxuXHRmb3IgKHZhciBrZXkgaW4gZXZlbnRzKVxuXHR7XG5cdFx0dmFyIG5ld0hhbmRsZXIgPSBldmVudHNba2V5XTtcblx0XHR2YXIgb2xkQ2FsbGJhY2sgPSBhbGxDYWxsYmFja3Nba2V5XTtcblxuXHRcdGlmICghbmV3SGFuZGxlcilcblx0XHR7XG5cdFx0XHRkb21Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCBvbGRDYWxsYmFjayk7XG5cdFx0XHRhbGxDYWxsYmFja3Nba2V5XSA9IHVuZGVmaW5lZDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChvbGRDYWxsYmFjaylcblx0XHR7XG5cdFx0XHR2YXIgb2xkSGFuZGxlciA9IG9sZENhbGxiYWNrLnE7XG5cdFx0XHRpZiAob2xkSGFuZGxlci4kID09PSBuZXdIYW5kbGVyLiQpXG5cdFx0XHR7XG5cdFx0XHRcdG9sZENhbGxiYWNrLnEgPSBuZXdIYW5kbGVyO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGRvbU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIG9sZENhbGxiYWNrKTtcblx0XHR9XG5cblx0XHRvbGRDYWxsYmFjayA9IF9WaXJ0dWFsRG9tX21ha2VDYWxsYmFjayhldmVudE5vZGUsIG5ld0hhbmRsZXIpO1xuXHRcdGRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9sZENhbGxiYWNrLFxuXHRcdFx0X1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZFxuXHRcdFx0JiYgeyBwYXNzaXZlOiBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0b0hhbmRsZXJJbnQobmV3SGFuZGxlcikgPCAyIH1cblx0XHQpO1xuXHRcdGFsbENhbGxiYWNrc1trZXldID0gb2xkQ2FsbGJhY2s7XG5cdH1cbn1cblxuXG5cbi8vIFBBU1NJVkUgRVZFTlRTXG5cblxudmFyIF9WaXJ0dWFsRG9tX3Bhc3NpdmVTdXBwb3J0ZWQ7XG5cbnRyeVxue1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndCcsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHsgX1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7IH1cblx0fSkpO1xufVxuY2F0Y2goZSkge31cblxuXG5cbi8vIEVWRU5UIEhBTkRMRVJTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbWFrZUNhbGxiYWNrKGV2ZW50Tm9kZSwgaW5pdGlhbEhhbmRsZXIpXG57XG5cdGZ1bmN0aW9uIGNhbGxiYWNrKGV2ZW50KVxuXHR7XG5cdFx0dmFyIGhhbmRsZXIgPSBjYWxsYmFjay5xO1xuXHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGhhbmRsZXIuYSwgZXZlbnQpO1xuXG5cdFx0aWYgKCFlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdGFnID0gZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdG9IYW5kbGVySW50KGhhbmRsZXIpO1xuXG5cdFx0Ly8gMCA9IE5vcm1hbFxuXHRcdC8vIDEgPSBNYXlTdG9wUHJvcGFnYXRpb25cblx0XHQvLyAyID0gTWF5UHJldmVudERlZmF1bHRcblx0XHQvLyAzID0gQ3VzdG9tXG5cblx0XHR2YXIgdmFsdWUgPSByZXN1bHQuYTtcblx0XHR2YXIgbWVzc2FnZSA9ICF0YWcgPyB2YWx1ZSA6IHRhZyA8IDMgPyB2YWx1ZS5hIDogdmFsdWUubWVzc2FnZTtcblx0XHR2YXIgc3RvcFByb3BhZ2F0aW9uID0gdGFnID09IDEgPyB2YWx1ZS5iIDogdGFnID09IDMgJiYgdmFsdWUuc3RvcFByb3BhZ2F0aW9uO1xuXHRcdHZhciBjdXJyZW50RXZlbnROb2RlID0gKFxuXHRcdFx0c3RvcFByb3BhZ2F0aW9uICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLFxuXHRcdFx0KHRhZyA9PSAyID8gdmFsdWUuYiA6IHRhZyA9PSAzICYmIHZhbHVlLnByZXZlbnREZWZhdWx0KSAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpLFxuXHRcdFx0ZXZlbnROb2RlXG5cdFx0KTtcblx0XHR2YXIgdGFnZ2VyO1xuXHRcdHZhciBpO1xuXHRcdHdoaWxlICh0YWdnZXIgPSBjdXJyZW50RXZlbnROb2RlLmopXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiB0YWdnZXIgPT0gJ2Z1bmN0aW9uJylcblx0XHRcdHtcblx0XHRcdFx0bWVzc2FnZSA9IHRhZ2dlcihtZXNzYWdlKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IHRhZ2dlci5sZW5ndGg7IGktLTsgKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bWVzc2FnZSA9IHRhZ2dlcltpXShtZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y3VycmVudEV2ZW50Tm9kZSA9IGN1cnJlbnRFdmVudE5vZGUucDtcblx0XHR9XG5cdFx0Y3VycmVudEV2ZW50Tm9kZShtZXNzYWdlLCBzdG9wUHJvcGFnYXRpb24pOyAvLyBzdG9wUHJvcGFnYXRpb24gaW1wbGllcyBpc1N5bmNcblx0fVxuXG5cdGNhbGxiYWNrLnEgPSBpbml0aWFsSGFuZGxlcjtcblxuXHRyZXR1cm4gY2FsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2VxdWFsRXZlbnRzKHgsIHkpXG57XG5cdHJldHVybiB4LiQgPT0geS4kICYmIF9Kc29uX2VxdWFsaXR5KHguYSwgeS5hKTtcbn1cblxuXG5cbi8vIERJRkZcblxuXG4vLyBUT0RPOiBTaG91bGQgd2UgZG8gcGF0Y2hlcyBsaWtlIGluIGlPUz9cbi8vXG4vLyB0eXBlIFBhdGNoXG4vLyAgID0gQXQgSW50IFBhdGNoXG4vLyAgIHwgQmF0Y2ggKExpc3QgUGF0Y2gpXG4vLyAgIHwgQ2hhbmdlIC4uLlxuLy9cbi8vIEhvdyBjb3VsZCBpdCBub3QgYmUgYmV0dGVyP1xuLy9cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2RpZmYoeCwgeSlcbntcblx0dmFyIHBhdGNoZXMgPSBbXTtcblx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeCwgeSwgcGF0Y2hlcywgMCk7XG5cdHJldHVybiBwYXRjaGVzO1xufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCB0eXBlLCBpbmRleCwgZGF0YSlcbntcblx0dmFyIHBhdGNoID0ge1xuXHRcdCQ6IHR5cGUsXG5cdFx0cjogaW5kZXgsXG5cdFx0czogZGF0YSxcblx0XHR0OiB1bmRlZmluZWQsXG5cdFx0dTogdW5kZWZpbmVkXG5cdH07XG5cdHBhdGNoZXMucHVzaChwYXRjaCk7XG5cdHJldHVybiBwYXRjaDtcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmSGVscCh4LCB5LCBwYXRjaGVzLCBpbmRleClcbntcblx0aWYgKHggPT09IHkpXG5cdHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgeFR5cGUgPSB4LiQ7XG5cdHZhciB5VHlwZSA9IHkuJDtcblxuXHQvLyBCYWlsIGlmIHlvdSBydW4gaW50byBkaWZmZXJlbnQgdHlwZXMgb2Ygbm9kZXMuIEltcGxpZXMgdGhhdCB0aGVcblx0Ly8gc3RydWN0dXJlIGhhcyBjaGFuZ2VkIHNpZ25pZmljYW50bHkgYW5kIGl0J3Mgbm90IHdvcnRoIGEgZGlmZi5cblx0aWYgKHhUeXBlICE9PSB5VHlwZSlcblx0e1xuXHRcdGlmICh4VHlwZSA9PT0gMSAmJiB5VHlwZSA9PT0gMilcblx0XHR7XG5cdFx0XHR5ID0gX1ZpcnR1YWxEb21fZGVrZXkoeSk7XG5cdFx0XHR5VHlwZSA9IDE7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMCwgaW5kZXgsIHkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdC8vIE5vdyB3ZSBrbm93IHRoYXQgYm90aCBub2RlcyBhcmUgdGhlIHNhbWUgJC5cblx0c3dpdGNoICh5VHlwZSlcblx0e1xuXHRcdGNhc2UgNTpcblx0XHRcdHZhciB4UmVmcyA9IHgubDtcblx0XHRcdHZhciB5UmVmcyA9IHkubDtcblx0XHRcdHZhciBpID0geFJlZnMubGVuZ3RoO1xuXHRcdFx0dmFyIHNhbWUgPSBpID09PSB5UmVmcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoc2FtZSAmJiBpLS0pXG5cdFx0XHR7XG5cdFx0XHRcdHNhbWUgPSB4UmVmc1tpXSA9PT0geVJlZnNbaV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2FtZSlcblx0XHRcdHtcblx0XHRcdFx0eS5rID0geC5rO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR5LmsgPSB5Lm0oKTtcblx0XHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4LmssIHkuaywgc3ViUGF0Y2hlcywgMCk7XG5cdFx0XHRzdWJQYXRjaGVzLmxlbmd0aCA+IDAgJiYgX1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDEsIGluZGV4LCBzdWJQYXRjaGVzKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgNDpcblx0XHRcdC8vIGdhdGhlciBuZXN0ZWQgdGFnZ2Vyc1xuXHRcdFx0dmFyIHhUYWdnZXJzID0geC5qO1xuXHRcdFx0dmFyIHlUYWdnZXJzID0geS5qO1xuXHRcdFx0dmFyIG5lc3RpbmcgPSBmYWxzZTtcblxuXHRcdFx0dmFyIHhTdWJOb2RlID0geC5rO1xuXHRcdFx0d2hpbGUgKHhTdWJOb2RlLiQgPT09IDQpXG5cdFx0XHR7XG5cdFx0XHRcdG5lc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdHR5cGVvZiB4VGFnZ2VycyAhPT0gJ29iamVjdCdcblx0XHRcdFx0XHQ/IHhUYWdnZXJzID0gW3hUYWdnZXJzLCB4U3ViTm9kZS5qXVxuXHRcdFx0XHRcdDogeFRhZ2dlcnMucHVzaCh4U3ViTm9kZS5qKTtcblxuXHRcdFx0XHR4U3ViTm9kZSA9IHhTdWJOb2RlLms7XG5cdFx0XHR9XG5cblx0XHRcdHZhciB5U3ViTm9kZSA9IHkuaztcblx0XHRcdHdoaWxlICh5U3ViTm9kZS4kID09PSA0KVxuXHRcdFx0e1xuXHRcdFx0XHRuZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0XHR0eXBlb2YgeVRhZ2dlcnMgIT09ICdvYmplY3QnXG5cdFx0XHRcdFx0PyB5VGFnZ2VycyA9IFt5VGFnZ2VycywgeVN1Yk5vZGUual1cblx0XHRcdFx0XHQ6IHlUYWdnZXJzLnB1c2goeVN1Yk5vZGUuaik7XG5cblx0XHRcdFx0eVN1Yk5vZGUgPSB5U3ViTm9kZS5rO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBKdXN0IGJhaWwgaWYgZGlmZmVyZW50IG51bWJlcnMgb2YgdGFnZ2Vycy4gVGhpcyBpbXBsaWVzIHRoZVxuXHRcdFx0Ly8gc3RydWN0dXJlIG9mIHRoZSB2aXJ0dWFsIERPTSBoYXMgY2hhbmdlZC5cblx0XHRcdGlmIChuZXN0aW5nICYmIHhUYWdnZXJzLmxlbmd0aCAhPT0geVRhZ2dlcnMubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMCwgaW5kZXgsIHkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGlmIHRhZ2dlcnMgYXJlIFwidGhlIHNhbWVcIlxuXHRcdFx0aWYgKG5lc3RpbmcgPyAhX1ZpcnR1YWxEb21fcGFpcndpc2VSZWZFcXVhbCh4VGFnZ2VycywgeVRhZ2dlcnMpIDogeFRhZ2dlcnMgIT09IHlUYWdnZXJzKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMiwgaW5kZXgsIHlUYWdnZXJzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZGlmZiBldmVyeXRoaW5nIGJlbG93IHRoZSB0YWdnZXJzXG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4U3ViTm9kZSwgeVN1Yk5vZGUsIHBhdGNoZXMsIGluZGV4ICsgMSk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlIDA6XG5cdFx0XHRpZiAoeC5hICE9PSB5LmEpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAzLCBpbmRleCwgeS5hKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMTpcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZOb2Rlcyh4LCB5LCBwYXRjaGVzLCBpbmRleCwgX1ZpcnR1YWxEb21fZGlmZktpZHMpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZk5vZGVzKHgsIHksIHBhdGNoZXMsIGluZGV4LCBfVmlydHVhbERvbV9kaWZmS2V5ZWRLaWRzKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMzpcblx0XHRcdGlmICh4LmggIT09IHkuaClcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDAsIGluZGV4LCB5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZmFjdHNEaWZmID0gX1ZpcnR1YWxEb21fZGlmZkZhY3RzKHguZCwgeS5kKTtcblx0XHRcdGZhY3RzRGlmZiAmJiBfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgNCwgaW5kZXgsIGZhY3RzRGlmZik7XG5cblx0XHRcdHZhciBwYXRjaCA9IHkuaSh4LmcsIHkuZyk7XG5cdFx0XHRwYXRjaCAmJiBfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgNSwgaW5kZXgsIHBhdGNoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHR9XG59XG5cbi8vIGFzc3VtZXMgdGhlIGluY29taW5nIGFycmF5cyBhcmUgdGhlIHNhbWUgbGVuZ3RoXG5mdW5jdGlvbiBfVmlydHVhbERvbV9wYWlyd2lzZVJlZkVxdWFsKGFzLCBicylcbntcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdGlmIChhc1tpXSAhPT0gYnNbaV0pXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmTm9kZXMoeCwgeSwgcGF0Y2hlcywgaW5kZXgsIGRpZmZLaWRzKVxue1xuXHQvLyBCYWlsIGlmIG9idmlvdXMgaW5kaWNhdG9ycyBoYXZlIGNoYW5nZWQuIEltcGxpZXMgbW9yZSBzZXJpb3VzXG5cdC8vIHN0cnVjdHVyYWwgY2hhbmdlcyBzdWNoIHRoYXQgaXQncyBub3Qgd29ydGggaXQgdG8gZGlmZi5cblx0aWYgKHguYyAhPT0geS5jIHx8IHguZiAhPT0geS5mKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDAsIGluZGV4LCB5KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgZmFjdHNEaWZmID0gX1ZpcnR1YWxEb21fZGlmZkZhY3RzKHguZCwgeS5kKTtcblx0ZmFjdHNEaWZmICYmIF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCA0LCBpbmRleCwgZmFjdHNEaWZmKTtcblxuXHRkaWZmS2lkcyh4LCB5LCBwYXRjaGVzLCBpbmRleCk7XG59XG5cblxuXG4vLyBESUZGIEZBQ1RTXG5cblxuLy8gVE9ETyBJbnN0ZWFkIG9mIGNyZWF0aW5nIGEgbmV3IGRpZmYgb2JqZWN0LCBpdCdzIHBvc3NpYmxlIHRvIGp1c3QgdGVzdCBpZlxuLy8gdGhlcmUgKmlzKiBhIGRpZmYuIER1cmluZyB0aGUgYWN0dWFsIHBhdGNoLCBkbyB0aGUgZGlmZiBhZ2FpbiBhbmQgbWFrZSB0aGVcbi8vIG1vZGlmaWNhdGlvbnMgZGlyZWN0bHkuIFRoaXMgd2F5LCB0aGVyZSdzIG5vIG5ldyBhbGxvY2F0aW9ucy4gV29ydGggaXQ/XG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmRmFjdHMoeCwgeSwgY2F0ZWdvcnkpXG57XG5cdHZhciBkaWZmO1xuXG5cdC8vIGxvb2sgZm9yIGNoYW5nZXMgYW5kIHJlbW92YWxzXG5cdGZvciAodmFyIHhLZXkgaW4geClcblx0e1xuXHRcdGlmICh4S2V5ID09PSAnYTEnIHx8IHhLZXkgPT09ICdhMCcgfHwgeEtleSA9PT0gJ2EzJyB8fCB4S2V5ID09PSAnYTQnKVxuXHRcdHtcblx0XHRcdHZhciBzdWJEaWZmID0gX1ZpcnR1YWxEb21fZGlmZkZhY3RzKHhbeEtleV0sIHlbeEtleV0gfHwge30sIHhLZXkpO1xuXHRcdFx0aWYgKHN1YkRpZmYpXG5cdFx0XHR7XG5cdFx0XHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdFx0XHRkaWZmW3hLZXldID0gc3ViRGlmZjtcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSBpZiBub3QgaW4gdGhlIG5ldyBmYWN0c1xuXHRcdGlmICghKHhLZXkgaW4geSkpXG5cdFx0e1xuXHRcdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0XHRkaWZmW3hLZXldID1cblx0XHRcdFx0IWNhdGVnb3J5XG5cdFx0XHRcdFx0PyAodHlwZW9mIHhbeEtleV0gPT09ICdzdHJpbmcnID8gJycgOiBudWxsKVxuXHRcdFx0XHRcdDpcblx0XHRcdFx0KGNhdGVnb3J5ID09PSAnYTEnKVxuXHRcdFx0XHRcdD8gJydcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdChjYXRlZ29yeSA9PT0gJ2EwJyB8fCBjYXRlZ29yeSA9PT0gJ2EzJylcblx0XHRcdFx0XHQ/IHVuZGVmaW5lZFxuXHRcdFx0XHRcdDpcblx0XHRcdFx0eyBmOiB4W3hLZXldLmYsIG86IHVuZGVmaW5lZCB9O1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2YXIgeFZhbHVlID0geFt4S2V5XTtcblx0XHR2YXIgeVZhbHVlID0geVt4S2V5XTtcblxuXHRcdC8vIHJlZmVyZW5jZSBlcXVhbCwgc28gZG9uJ3Qgd29ycnkgYWJvdXQgaXRcblx0XHRpZiAoeFZhbHVlID09PSB5VmFsdWUgJiYgeEtleSAhPT0gJ3ZhbHVlJyAmJiB4S2V5ICE9PSAnY2hlY2tlZCdcblx0XHRcdHx8IGNhdGVnb3J5ID09PSAnYTAnICYmIF9WaXJ0dWFsRG9tX2VxdWFsRXZlbnRzKHhWYWx1ZSwgeVZhbHVlKSlcblx0XHR7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRkaWZmID0gZGlmZiB8fCB7fTtcblx0XHRkaWZmW3hLZXldID0geVZhbHVlO1xuXHR9XG5cblx0Ly8gYWRkIG5ldyBzdHVmZlxuXHRmb3IgKHZhciB5S2V5IGluIHkpXG5cdHtcblx0XHRpZiAoISh5S2V5IGluIHgpKVxuXHRcdHtcblx0XHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdFx0ZGlmZlt5S2V5XSA9IHlbeUtleV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRpZmY7XG59XG5cblxuXG4vLyBESUZGIEtJRFNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmS2lkcyh4UGFyZW50LCB5UGFyZW50LCBwYXRjaGVzLCBpbmRleClcbntcblx0dmFyIHhLaWRzID0geFBhcmVudC5lO1xuXHR2YXIgeUtpZHMgPSB5UGFyZW50LmU7XG5cblx0dmFyIHhMZW4gPSB4S2lkcy5sZW5ndGg7XG5cdHZhciB5TGVuID0geUtpZHMubGVuZ3RoO1xuXG5cdC8vIEZJR1VSRSBPVVQgSUYgVEhFUkUgQVJFIElOU0VSVFMgT1IgUkVNT1ZBTFNcblxuXHRpZiAoeExlbiA+IHlMZW4pXG5cdHtcblx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgNiwgaW5kZXgsIHtcblx0XHRcdHY6IHlMZW4sXG5cdFx0XHRpOiB4TGVuIC0geUxlblxuXHRcdH0pO1xuXHR9XG5cdGVsc2UgaWYgKHhMZW4gPCB5TGVuKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDcsIGluZGV4LCB7XG5cdFx0XHR2OiB4TGVuLFxuXHRcdFx0ZTogeUtpZHNcblx0XHR9KTtcblx0fVxuXG5cdC8vIFBBSVJXSVNFIERJRkYgRVZFUllUSElORyBFTFNFXG5cblx0Zm9yICh2YXIgbWluTGVuID0geExlbiA8IHlMZW4gPyB4TGVuIDogeUxlbiwgaSA9IDA7IGkgPCBtaW5MZW47IGkrKylcblx0e1xuXHRcdHZhciB4S2lkID0geEtpZHNbaV07XG5cdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeEtpZCwgeUtpZHNbaV0sIHBhdGNoZXMsICsraW5kZXgpO1xuXHRcdGluZGV4ICs9IHhLaWQuYiB8fCAwO1xuXHR9XG59XG5cblxuXG4vLyBLRVlFRCBESUZGXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZktleWVkS2lkcyh4UGFyZW50LCB5UGFyZW50LCBwYXRjaGVzLCByb290SW5kZXgpXG57XG5cdHZhciBsb2NhbFBhdGNoZXMgPSBbXTtcblxuXHR2YXIgY2hhbmdlcyA9IHt9OyAvLyBEaWN0IFN0cmluZyBFbnRyeVxuXHR2YXIgaW5zZXJ0cyA9IFtdOyAvLyBBcnJheSB7IGluZGV4IDogSW50LCBlbnRyeSA6IEVudHJ5IH1cblx0Ly8gdHlwZSBFbnRyeSA9IHsgdGFnIDogU3RyaW5nLCB2bm9kZSA6IFZOb2RlLCBpbmRleCA6IEludCwgZGF0YSA6IF8gfVxuXG5cdHZhciB4S2lkcyA9IHhQYXJlbnQuZTtcblx0dmFyIHlLaWRzID0geVBhcmVudC5lO1xuXHR2YXIgeExlbiA9IHhLaWRzLmxlbmd0aDtcblx0dmFyIHlMZW4gPSB5S2lkcy5sZW5ndGg7XG5cdHZhciB4SW5kZXggPSAwO1xuXHR2YXIgeUluZGV4ID0gMDtcblxuXHR2YXIgaW5kZXggPSByb290SW5kZXg7XG5cblx0d2hpbGUgKHhJbmRleCA8IHhMZW4gJiYgeUluZGV4IDwgeUxlbilcblx0e1xuXHRcdHZhciB4ID0geEtpZHNbeEluZGV4XTtcblx0XHR2YXIgeSA9IHlLaWRzW3lJbmRleF07XG5cblx0XHR2YXIgeEtleSA9IHguYTtcblx0XHR2YXIgeUtleSA9IHkuYTtcblx0XHR2YXIgeE5vZGUgPSB4LmI7XG5cdFx0dmFyIHlOb2RlID0geS5iO1xuXG5cdFx0dmFyIG5ld01hdGNoID0gdW5kZWZpbmVkO1xuXHRcdHZhciBvbGRNYXRjaCA9IHVuZGVmaW5lZDtcblxuXHRcdC8vIGNoZWNrIGlmIGtleXMgbWF0Y2hcblxuXHRcdGlmICh4S2V5ID09PSB5S2V5KVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4Tm9kZSwgeU5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXG5cdFx0XHR4SW5kZXgrKztcblx0XHRcdHlJbmRleCsrO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gbG9vayBhaGVhZCAxIHRvIGRldGVjdCBpbnNlcnRpb25zIGFuZCByZW1vdmFscy5cblxuXHRcdHZhciB4TmV4dCA9IHhLaWRzW3hJbmRleCArIDFdO1xuXHRcdHZhciB5TmV4dCA9IHlLaWRzW3lJbmRleCArIDFdO1xuXG5cdFx0aWYgKHhOZXh0KVxuXHRcdHtcblx0XHRcdHZhciB4TmV4dEtleSA9IHhOZXh0LmE7XG5cdFx0XHR2YXIgeE5leHROb2RlID0geE5leHQuYjtcblx0XHRcdG9sZE1hdGNoID0geUtleSA9PT0geE5leHRLZXk7XG5cdFx0fVxuXG5cdFx0aWYgKHlOZXh0KVxuXHRcdHtcblx0XHRcdHZhciB5TmV4dEtleSA9IHlOZXh0LmE7XG5cdFx0XHR2YXIgeU5leHROb2RlID0geU5leHQuYjtcblx0XHRcdG5ld01hdGNoID0geEtleSA9PT0geU5leHRLZXk7XG5cdFx0fVxuXG5cblx0XHQvLyBzd2FwIHggYW5kIHlcblx0XHRpZiAobmV3TWF0Y2ggJiYgb2xkTWF0Y2gpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhOb2RlLCB5TmV4dE5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0X1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHhLZXksIHlOb2RlLCB5SW5kZXgsIGluc2VydHMpO1xuXHRcdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHhLZXksIHhOZXh0Tm9kZSwgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5leHROb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4ICs9IDI7XG5cdFx0XHR5SW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGluc2VydCB5XG5cdFx0aWYgKG5ld01hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9pbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeUtleSwgeU5vZGUsIHlJbmRleCwgaW5zZXJ0cyk7XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4Tm9kZSwgeU5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4ICs9IDE7XG5cdFx0XHR5SW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSB4XG5cdFx0aWYgKG9sZE1hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeEtleSwgeE5vZGUsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhOZXh0Tm9kZSwgeU5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5leHROb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4ICs9IDI7XG5cdFx0XHR5SW5kZXggKz0gMTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSB4LCBpbnNlcnQgeVxuXHRcdGlmICh4TmV4dCAmJiB4TmV4dEtleSA9PT0geU5leHRLZXkpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB4S2V5LCB4Tm9kZSwgaW5kZXgpO1xuXHRcdFx0X1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHlLZXksIHlOb2RlLCB5SW5kZXgsIGluc2VydHMpO1xuXHRcdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeE5leHROb2RlLCB5TmV4dE5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5leHROb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4ICs9IDI7XG5cdFx0XHR5SW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0Ly8gZWF0IHVwIGFueSByZW1haW5pbmcgbm9kZXMgd2l0aCByZW1vdmVOb2RlIGFuZCBpbnNlcnROb2RlXG5cblx0d2hpbGUgKHhJbmRleCA8IHhMZW4pXG5cdHtcblx0XHRpbmRleCsrO1xuXHRcdHZhciB4ID0geEtpZHNbeEluZGV4XTtcblx0XHR2YXIgeE5vZGUgPSB4LmI7XG5cdFx0X1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHguYSwgeE5vZGUsIGluZGV4KTtcblx0XHRpbmRleCArPSB4Tm9kZS5iIHx8IDA7XG5cdFx0eEluZGV4Kys7XG5cdH1cblxuXHR3aGlsZSAoeUluZGV4IDwgeUxlbilcblx0e1xuXHRcdHZhciBlbmRJbnNlcnRzID0gZW5kSW5zZXJ0cyB8fCBbXTtcblx0XHR2YXIgeSA9IHlLaWRzW3lJbmRleF07XG5cdFx0X1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHkuYSwgeS5iLCB1bmRlZmluZWQsIGVuZEluc2VydHMpO1xuXHRcdHlJbmRleCsrO1xuXHR9XG5cblx0aWYgKGxvY2FsUGF0Y2hlcy5sZW5ndGggPiAwIHx8IGluc2VydHMubGVuZ3RoID4gMCB8fCBlbmRJbnNlcnRzKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDgsIHJvb3RJbmRleCwge1xuXHRcdFx0dzogbG9jYWxQYXRjaGVzLFxuXHRcdFx0eDogaW5zZXJ0cyxcblx0XHRcdHk6IGVuZEluc2VydHNcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gQ0hBTkdFUyBGUk9NIEtFWUVEIERJRkZcblxuXG52YXIgX1ZpcnR1YWxEb21fUE9TVEZJWCA9ICdfZWxtVzZCTCc7XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGtleSwgdm5vZGUsIHlJbmRleCwgaW5zZXJ0cylcbntcblx0dmFyIGVudHJ5ID0gY2hhbmdlc1trZXldO1xuXG5cdC8vIG5ldmVyIHNlZW4gdGhpcyBrZXkgYmVmb3JlXG5cdGlmICghZW50cnkpXG5cdHtcblx0XHRlbnRyeSA9IHtcblx0XHRcdGM6IDAsXG5cdFx0XHR6OiB2bm9kZSxcblx0XHRcdHI6IHlJbmRleCxcblx0XHRcdHM6IHVuZGVmaW5lZFxuXHRcdH07XG5cblx0XHRpbnNlcnRzLnB1c2goeyByOiB5SW5kZXgsIEE6IGVudHJ5IH0pO1xuXHRcdGNoYW5nZXNba2V5XSA9IGVudHJ5O1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgd2FzIHJlbW92ZWQgZWFybGllciwgYSBtYXRjaCFcblx0aWYgKGVudHJ5LmMgPT09IDEpXG5cdHtcblx0XHRpbnNlcnRzLnB1c2goeyByOiB5SW5kZXgsIEE6IGVudHJ5IH0pO1xuXG5cdFx0ZW50cnkuYyA9IDI7XG5cdFx0dmFyIHN1YlBhdGNoZXMgPSBbXTtcblx0XHRfVmlydHVhbERvbV9kaWZmSGVscChlbnRyeS56LCB2bm9kZSwgc3ViUGF0Y2hlcywgZW50cnkucik7XG5cdFx0ZW50cnkuciA9IHlJbmRleDtcblx0XHRlbnRyeS5zLnMgPSB7XG5cdFx0XHR3OiBzdWJQYXRjaGVzLFxuXHRcdFx0QTogZW50cnlcblx0XHR9O1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgaGFzIGFscmVhZHkgYmVlbiBpbnNlcnRlZCBvciBtb3ZlZCwgYSBkdXBsaWNhdGUhXG5cdF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBrZXkgKyBfVmlydHVhbERvbV9QT1NURklYLCB2bm9kZSwgeUluZGV4LCBpbnNlcnRzKTtcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5LCB2bm9kZSwgaW5kZXgpXG57XG5cdHZhciBlbnRyeSA9IGNoYW5nZXNba2V5XTtcblxuXHQvLyBuZXZlciBzZWVuIHRoaXMga2V5IGJlZm9yZVxuXHRpZiAoIWVudHJ5KVxuXHR7XG5cdFx0dmFyIHBhdGNoID0gX1ZpcnR1YWxEb21fcHVzaFBhdGNoKGxvY2FsUGF0Y2hlcywgOSwgaW5kZXgsIHVuZGVmaW5lZCk7XG5cblx0XHRjaGFuZ2VzW2tleV0gPSB7XG5cdFx0XHRjOiAxLFxuXHRcdFx0ejogdm5vZGUsXG5cdFx0XHRyOiBpbmRleCxcblx0XHRcdHM6IHBhdGNoXG5cdFx0fTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRoaXMga2V5IHdhcyBpbnNlcnRlZCBlYXJsaWVyLCBhIG1hdGNoIVxuXHRpZiAoZW50cnkuYyA9PT0gMClcblx0e1xuXHRcdGVudHJ5LmMgPSAyO1xuXHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAodm5vZGUsIGVudHJ5LnosIHN1YlBhdGNoZXMsIGluZGV4KTtcblxuXHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChsb2NhbFBhdGNoZXMsIDksIGluZGV4LCB7XG5cdFx0XHR3OiBzdWJQYXRjaGVzLFxuXHRcdFx0QTogZW50cnlcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRoaXMga2V5IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBvciBtb3ZlZCwgYSBkdXBsaWNhdGUhXG5cdF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBrZXkgKyBfVmlydHVhbERvbV9QT1NURklYLCB2bm9kZSwgaW5kZXgpO1xufVxuXG5cblxuLy8gQUREIERPTSBOT0RFU1xuLy9cbi8vIEVhY2ggRE9NIG5vZGUgaGFzIGFuIFwiaW5kZXhcIiBhc3NpZ25lZCBpbiBvcmRlciBvZiB0cmF2ZXJzYWwuIEl0IGlzIGltcG9ydGFudFxuLy8gdG8gbWluaW1pemUgb3VyIGNyYXdsIG92ZXIgdGhlIGFjdHVhbCBET00sIHNvIHRoZXNlIGluZGV4ZXMgKGFsb25nIHdpdGggdGhlXG4vLyBkZXNjZW5kYW50c0NvdW50IG9mIHZpcnR1YWwgbm9kZXMpIGxldCB1cyBza2lwIHRvdWNoaW5nIGVudGlyZSBzdWJ0cmVlcyBvZlxuLy8gdGhlIERPTSBpZiB3ZSBrbm93IHRoZXJlIGFyZSBubyBwYXRjaGVzIHRoZXJlLlxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzKGRvbU5vZGUsIHZOb2RlLCBwYXRjaGVzLCBldmVudE5vZGUpXG57XG5cdF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2hlcywgMCwgMCwgdk5vZGUuYiwgZXZlbnROb2RlKTtcbn1cblxuXG4vLyBhc3N1bWVzIGBwYXRjaGVzYCBpcyBub24tZW1wdHkgYW5kIGluZGV4ZXMgaW5jcmVhc2UgbW9ub3RvbmljYWxseS5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2hlcywgaSwgbG93LCBoaWdoLCBldmVudE5vZGUpXG57XG5cdHZhciBwYXRjaCA9IHBhdGNoZXNbaV07XG5cdHZhciBpbmRleCA9IHBhdGNoLnI7XG5cblx0d2hpbGUgKGluZGV4ID09PSBsb3cpXG5cdHtcblx0XHR2YXIgcGF0Y2hUeXBlID0gcGF0Y2guJDtcblxuXHRcdGlmIChwYXRjaFR5cGUgPT09IDEpXG5cdFx0e1xuXHRcdFx0X1ZpcnR1YWxEb21fYWRkRG9tTm9kZXMoZG9tTm9kZSwgdk5vZGUuaywgcGF0Y2gucywgZXZlbnROb2RlKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAocGF0Y2hUeXBlID09PSA4KVxuXHRcdHtcblx0XHRcdHBhdGNoLnQgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2gudSA9IGV2ZW50Tm9kZTtcblxuXHRcdFx0dmFyIHN1YlBhdGNoZXMgPSBwYXRjaC5zLnc7XG5cdFx0XHRpZiAoc3ViUGF0Y2hlcy5sZW5ndGggPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgdk5vZGUsIHN1YlBhdGNoZXMsIDAsIGxvdywgaGlnaCwgZXZlbnROb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBpZiAocGF0Y2hUeXBlID09PSA5KVxuXHRcdHtcblx0XHRcdHBhdGNoLnQgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2gudSA9IGV2ZW50Tm9kZTtcblxuXHRcdFx0dmFyIGRhdGEgPSBwYXRjaC5zO1xuXHRcdFx0aWYgKGRhdGEpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEuQS5zID0gZG9tTm9kZTtcblx0XHRcdFx0dmFyIHN1YlBhdGNoZXMgPSBkYXRhLnc7XG5cdFx0XHRcdGlmIChzdWJQYXRjaGVzLmxlbmd0aCA+IDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgdk5vZGUsIHN1YlBhdGNoZXMsIDAsIGxvdywgaGlnaCwgZXZlbnROb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0cGF0Y2gudCA9IGRvbU5vZGU7XG5cdFx0XHRwYXRjaC51ID0gZXZlbnROb2RlO1xuXHRcdH1cblxuXHRcdGkrKztcblxuXHRcdGlmICghKHBhdGNoID0gcGF0Y2hlc1tpXSkgfHwgKGluZGV4ID0gcGF0Y2gucikgPiBoaWdoKVxuXHRcdHtcblx0XHRcdHJldHVybiBpO1xuXHRcdH1cblx0fVxuXG5cdHZhciB0YWcgPSB2Tm9kZS4kO1xuXG5cdGlmICh0YWcgPT09IDQpXG5cdHtcblx0XHR2YXIgc3ViTm9kZSA9IHZOb2RlLms7XG5cblx0XHR3aGlsZSAoc3ViTm9kZS4kID09PSA0KVxuXHRcdHtcblx0XHRcdHN1Yk5vZGUgPSBzdWJOb2RlLms7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChkb21Ob2RlLCBzdWJOb2RlLCBwYXRjaGVzLCBpLCBsb3cgKyAxLCBoaWdoLCBkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZik7XG5cdH1cblxuXHQvLyB0YWcgbXVzdCBiZSAxIG9yIDIgYXQgdGhpcyBwb2ludFxuXG5cdHZhciB2S2lkcyA9IHZOb2RlLmU7XG5cdHZhciBjaGlsZE5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IHZLaWRzLmxlbmd0aDsgaisrKVxuXHR7XG5cdFx0bG93Kys7XG5cdFx0dmFyIHZLaWQgPSB0YWcgPT09IDEgPyB2S2lkc1tqXSA6IHZLaWRzW2pdLmI7XG5cdFx0dmFyIG5leHRMb3cgPSBsb3cgKyAodktpZC5iIHx8IDApO1xuXHRcdGlmIChsb3cgPD0gaW5kZXggJiYgaW5kZXggPD0gbmV4dExvdylcblx0XHR7XG5cdFx0XHRpID0gX1ZpcnR1YWxEb21fYWRkRG9tTm9kZXNIZWxwKGNoaWxkTm9kZXNbal0sIHZLaWQsIHBhdGNoZXMsIGksIGxvdywgbmV4dExvdywgZXZlbnROb2RlKTtcblx0XHRcdGlmICghKHBhdGNoID0gcGF0Y2hlc1tpXSkgfHwgKGluZGV4ID0gcGF0Y2gucikgPiBoaWdoKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bG93ID0gbmV4dExvdztcblx0fVxuXHRyZXR1cm4gaTtcbn1cblxuXG5cbi8vIEFQUExZIFBBVENIRVNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMocm9vdERvbU5vZGUsIG9sZFZpcnR1YWxOb2RlLCBwYXRjaGVzLCBldmVudE5vZGUpXG57XG5cdGlmIChwYXRjaGVzLmxlbmd0aCA9PT0gMClcblx0e1xuXHRcdHJldHVybiByb290RG9tTm9kZTtcblx0fVxuXG5cdF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzKHJvb3REb21Ob2RlLCBvbGRWaXJ0dWFsTm9kZSwgcGF0Y2hlcywgZXZlbnROb2RlKTtcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlc0hlbHAocm9vdERvbU5vZGUsIHBhdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoZXNIZWxwKHJvb3REb21Ob2RlLCBwYXRjaGVzKVxue1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGNoZXMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuXHRcdHZhciBsb2NhbERvbU5vZGUgPSBwYXRjaC50XG5cdFx0dmFyIG5ld05vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoKGxvY2FsRG9tTm9kZSwgcGF0Y2gpO1xuXHRcdGlmIChsb2NhbERvbU5vZGUgPT09IHJvb3REb21Ob2RlKVxuXHRcdHtcblx0XHRcdHJvb3REb21Ob2RlID0gbmV3Tm9kZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJvb3REb21Ob2RlO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoKGRvbU5vZGUsIHBhdGNoKVxue1xuXHRzd2l0Y2ggKHBhdGNoLiQpXG5cdHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlZHJhdyhkb21Ob2RlLCBwYXRjaC5zLCBwYXRjaC51KTtcblxuXHRcdGNhc2UgNDpcblx0XHRcdF9WaXJ0dWFsRG9tX2FwcGx5RmFjdHMoZG9tTm9kZSwgcGF0Y2gudSwgcGF0Y2gucyk7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgMzpcblx0XHRcdGRvbU5vZGUucmVwbGFjZURhdGEoMCwgZG9tTm9kZS5sZW5ndGgsIHBhdGNoLnMpO1xuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzSGVscChkb21Ob2RlLCBwYXRjaC5zKTtcblxuXHRcdGNhc2UgMjpcblx0XHRcdGlmIChkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZilcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYuaiA9IHBhdGNoLnM7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmID0geyBqOiBwYXRjaC5zLCBwOiBwYXRjaC51IH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgNjpcblx0XHRcdHZhciBkYXRhID0gcGF0Y2gucztcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5pOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZS5jaGlsZE5vZGVzW2RhdGEudl0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDc6XG5cdFx0XHR2YXIgZGF0YSA9IHBhdGNoLnM7XG5cdFx0XHR2YXIga2lkcyA9IGRhdGEuZTtcblx0XHRcdHZhciBpID0gZGF0YS52O1xuXHRcdFx0dmFyIHRoZUVuZCA9IGRvbU5vZGUuY2hpbGROb2Rlc1tpXTtcblx0XHRcdGZvciAoOyBpIDwga2lkcy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5pbnNlcnRCZWZvcmUoX1ZpcnR1YWxEb21fcmVuZGVyKGtpZHNbaV0sIHBhdGNoLnUpLCB0aGVFbmQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDk6XG5cdFx0XHR2YXIgZGF0YSA9IHBhdGNoLnM7XG5cdFx0XHRpZiAoIWRhdGEpXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21Ob2RlKTtcblx0XHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgZW50cnkgPSBkYXRhLkE7XG5cdFx0XHRpZiAodHlwZW9mIGVudHJ5LnIgIT09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRlbnRyeS5zID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzSGVscChkb21Ob2RlLCBkYXRhLncpO1xuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDg6XG5cdFx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlb3JkZXIoZG9tTm9kZSwgcGF0Y2gpO1xuXG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIHBhdGNoLnMoZG9tTm9kZSk7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0X0RlYnVnX2NyYXNoKDEwKTsgLy8gJ1JhbiBpbnRvIGFuIHVua25vd24gcGF0Y2ghJ1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlZHJhdyhkb21Ob2RlLCB2Tm9kZSwgZXZlbnROb2RlKVxue1xuXHR2YXIgcGFyZW50Tm9kZSA9IGRvbU5vZGUucGFyZW50Tm9kZTtcblx0dmFyIG5ld05vZGUgPSBfVmlydHVhbERvbV9yZW5kZXIodk5vZGUsIGV2ZW50Tm9kZSk7XG5cblx0aWYgKCFuZXdOb2RlLmVsbV9ldmVudF9ub2RlX3JlZilcblx0e1xuXHRcdG5ld05vZGUuZWxtX2V2ZW50X25vZGVfcmVmID0gZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWY7XG5cdH1cblxuXHRpZiAocGFyZW50Tm9kZSAmJiBuZXdOb2RlICE9PSBkb21Ob2RlKVxuXHR7XG5cdFx0cGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgZG9tTm9kZSk7XG5cdH1cblx0cmV0dXJuIG5ld05vZGU7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlb3JkZXIoZG9tTm9kZSwgcGF0Y2gpXG57XG5cdHZhciBkYXRhID0gcGF0Y2gucztcblxuXHQvLyByZW1vdmUgZW5kIGluc2VydHNcblx0dmFyIGZyYWcgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoUmVvcmRlckVuZEluc2VydHNIZWxwKGRhdGEueSwgcGF0Y2gpO1xuXG5cdC8vIHJlbW92YWxzXG5cdGRvbU5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXNIZWxwKGRvbU5vZGUsIGRhdGEudyk7XG5cblx0Ly8gaW5zZXJ0c1xuXHR2YXIgaW5zZXJ0cyA9IGRhdGEueDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbnNlcnRzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0dmFyIGluc2VydCA9IGluc2VydHNbaV07XG5cdFx0dmFyIGVudHJ5ID0gaW5zZXJ0LkE7XG5cdFx0dmFyIG5vZGUgPSBlbnRyeS5jID09PSAyXG5cdFx0XHQ/IGVudHJ5LnNcblx0XHRcdDogX1ZpcnR1YWxEb21fcmVuZGVyKGVudHJ5LnosIHBhdGNoLnUpO1xuXHRcdGRvbU5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIGRvbU5vZGUuY2hpbGROb2Rlc1tpbnNlcnQucl0pO1xuXHR9XG5cblx0Ly8gYWRkIGVuZCBpbnNlcnRzXG5cdGlmIChmcmFnKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fYXBwZW5kQ2hpbGQoZG9tTm9kZSwgZnJhZyk7XG5cdH1cblxuXHRyZXR1cm4gZG9tTm9kZTtcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoUmVvcmRlckVuZEluc2VydHNIZWxwKGVuZEluc2VydHMsIHBhdGNoKVxue1xuXHRpZiAoIWVuZEluc2VydHMpXG5cdHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgZnJhZyA9IF9WaXJ0dWFsRG9tX2RvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5kSW5zZXJ0cy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHZhciBpbnNlcnQgPSBlbmRJbnNlcnRzW2ldO1xuXHRcdHZhciBlbnRyeSA9IGluc2VydC5BO1xuXHRcdF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKGZyYWcsIGVudHJ5LmMgPT09IDJcblx0XHRcdD8gZW50cnkuc1xuXHRcdFx0OiBfVmlydHVhbERvbV9yZW5kZXIoZW50cnkueiwgcGF0Y2gudSlcblx0XHQpO1xuXHR9XG5cdHJldHVybiBmcmFnO1xufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUobm9kZSlcbntcblx0Ly8gVEVYVCBOT0RFU1xuXG5cdGlmIChub2RlLm5vZGVUeXBlID09PSAzKVxuXHR7XG5cdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RleHQobm9kZS50ZXh0Q29udGVudCk7XG5cdH1cblxuXG5cdC8vIFdFSVJEIE5PREVTXG5cblx0aWYgKG5vZGUubm9kZVR5cGUgIT09IDEpXG5cdHtcblx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fdGV4dCgnJyk7XG5cdH1cblxuXG5cdC8vIEVMRU1FTlQgTk9ERVNcblxuXHR2YXIgYXR0ckxpc3QgPSBfTGlzdF9OaWw7XG5cdHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcztcblx0Zm9yICh2YXIgaSA9IGF0dHJzLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHR2YXIgYXR0ciA9IGF0dHJzW2ldO1xuXHRcdHZhciBuYW1lID0gYXR0ci5uYW1lO1xuXHRcdHZhciB2YWx1ZSA9IGF0dHIudmFsdWU7XG5cdFx0YXR0ckxpc3QgPSBfTGlzdF9Db25zKCBBMihfVmlydHVhbERvbV9hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKSwgYXR0ckxpc3QgKTtcblx0fVxuXG5cdHZhciB0YWcgPSBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0dmFyIGtpZExpc3QgPSBfTGlzdF9OaWw7XG5cdHZhciBraWRzID0gbm9kZS5jaGlsZE5vZGVzO1xuXG5cdGZvciAodmFyIGkgPSBraWRzLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHRraWRMaXN0ID0gX0xpc3RfQ29ucyhfVmlydHVhbERvbV92aXJ0dWFsaXplKGtpZHNbaV0pLCBraWRMaXN0KTtcblx0fVxuXHRyZXR1cm4gQTMoX1ZpcnR1YWxEb21fbm9kZSwgdGFnLCBhdHRyTGlzdCwga2lkTGlzdCk7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2Rla2V5KGtleWVkTm9kZSlcbntcblx0dmFyIGtleWVkS2lkcyA9IGtleWVkTm9kZS5lO1xuXHR2YXIgbGVuID0ga2V5ZWRLaWRzLmxlbmd0aDtcblx0dmFyIGtpZHMgPSBuZXcgQXJyYXkobGVuKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcblx0e1xuXHRcdGtpZHNbaV0gPSBrZXllZEtpZHNbaV0uYjtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0JDogMSxcblx0XHRjOiBrZXllZE5vZGUuYyxcblx0XHRkOiBrZXllZE5vZGUuZCxcblx0XHRlOiBraWRzLFxuXHRcdGY6IGtleWVkTm9kZS5mLFxuXHRcdGI6IGtleWVkTm9kZS5iXG5cdH07XG59XG5cblxuXG52YXIgX0JpdHdpc2VfYW5kID0gRjIoZnVuY3Rpb24oYSwgYilcbntcblx0cmV0dXJuIGEgJiBiO1xufSk7XG5cbnZhciBfQml0d2lzZV9vciA9IEYyKGZ1bmN0aW9uKGEsIGIpXG57XG5cdHJldHVybiBhIHwgYjtcbn0pO1xuXG52YXIgX0JpdHdpc2VfeG9yID0gRjIoZnVuY3Rpb24oYSwgYilcbntcblx0cmV0dXJuIGEgXiBiO1xufSk7XG5cbmZ1bmN0aW9uIF9CaXR3aXNlX2NvbXBsZW1lbnQoYSlcbntcblx0cmV0dXJuIH5hO1xufTtcblxudmFyIF9CaXR3aXNlX3NoaWZ0TGVmdEJ5ID0gRjIoZnVuY3Rpb24ob2Zmc2V0LCBhKVxue1xuXHRyZXR1cm4gYSA8PCBvZmZzZXQ7XG59KTtcblxudmFyIF9CaXR3aXNlX3NoaWZ0UmlnaHRCeSA9IEYyKGZ1bmN0aW9uKG9mZnNldCwgYSlcbntcblx0cmV0dXJuIGEgPj4gb2Zmc2V0O1xufSk7XG5cbnZhciBfQml0d2lzZV9zaGlmdFJpZ2h0WmZCeSA9IEYyKGZ1bmN0aW9uKG9mZnNldCwgYSlcbntcblx0cmV0dXJuIGEgPj4+IG9mZnNldDtcbn0pO1xuXG5cblxuXG4vLyBIRUxQRVJTXG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX3Vuc2FmZUNvZXJjZSh2YWx1ZSlcbntcblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cblxuLy8gUFJPR1JBTVNcblxuXG52YXIgX0RlYnVnZ2VyX2VsZW1lbnQgPSBGNChmdW5jdGlvbihpbXBsLCBmbGFnRGVjb2RlciwgZGVidWdNZXRhZGF0YSwgYXJncylcbntcblx0cmV0dXJuIF9QbGF0Zm9ybV9pbml0aWFsaXplKFxuXHRcdGZsYWdEZWNvZGVyLFxuXHRcdGFyZ3MsXG5cdFx0QTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwSW5pdCwgX0pzb25fd3JhcChkZWJ1Z01ldGFkYXRhKSwgX0RlYnVnZ2VyX3BvcG91dCgpLCBpbXBsLmluaXQpLFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd3JhcFVwZGF0ZShpbXBsLnVwZGF0ZSksXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwU3VicyhpbXBsLnN1YnNjcmlwdGlvbnMpLFxuXHRcdGZ1bmN0aW9uKHNlbmRUb0FwcCwgaW5pdGlhbE1vZGVsKVxuXHRcdHtcblx0XHRcdHZhciB2aWV3ID0gaW1wbC52aWV3O1xuXHRcdFx0dmFyIHRpdGxlID0gX1ZpcnR1YWxEb21fZG9jLnRpdGxlO1xuXHRcdFx0dmFyIGRvbU5vZGUgPSBhcmdzICYmIGFyZ3NbJ25vZGUnXSA/IGFyZ3NbJ25vZGUnXSA6IF9EZWJ1Z19jcmFzaCgwKTtcblx0XHRcdHZhciBjdXJyTm9kZSA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoZG9tTm9kZSk7XG5cdFx0XHR2YXIgY3VyckJsb2NrZXIgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUoaW5pdGlhbE1vZGVsKTtcblx0XHRcdHZhciBjdXJyUG9wb3V0O1xuXG5cdFx0XHR2YXIgY29ybmVyTm9kZSA9IF9WaXJ0dWFsRG9tX2RvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRvbU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29ybmVyTm9kZSwgZG9tTm9kZS5uZXh0U2libGluZyk7XG5cdFx0XHR2YXIgY29ybmVyQ3VyciA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoY29ybmVyTm9kZSk7XG5cblx0XHRcdGluaXRpYWxNb2RlbC5wb3BvdXQuYSA9IHNlbmRUb0FwcDtcblxuXHRcdFx0cmV0dXJuIF9Ccm93c2VyX21ha2VBbmltYXRvcihpbml0aWFsTW9kZWwsIGZ1bmN0aW9uKG1vZGVsKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbmV4dE5vZGUgPSBBMihfVmlydHVhbERvbV9tYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXNlck1zZywgdmlldyhlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldFVzZXJNb2RlbChtb2RlbCkpKTtcblx0XHRcdFx0dmFyIHBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJOb2RlLCBuZXh0Tm9kZSk7XG5cdFx0XHRcdGRvbU5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMoZG9tTm9kZSwgY3Vyck5vZGUsIHBhdGNoZXMsIHNlbmRUb0FwcCk7XG5cdFx0XHRcdGN1cnJOb2RlID0gbmV4dE5vZGU7XG5cblx0XHRcdFx0Ly8gdXBkYXRlIGJsb2NrZXJcblxuXHRcdFx0XHR2YXIgbmV4dEJsb2NrZXIgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUobW9kZWwpO1xuXHRcdFx0XHRfRGVidWdnZXJfdXBkYXRlQmxvY2tlcihjdXJyQmxvY2tlciwgbmV4dEJsb2NrZXIpO1xuXHRcdFx0XHRjdXJyQmxvY2tlciA9IG5leHRCbG9ja2VyO1xuXG5cdFx0XHRcdC8vIHZpZXcgY29ybmVyXG5cblx0XHRcdFx0aWYgKCFtb2RlbC5wb3BvdXQuYilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciBjb3JuZXJOZXh0ID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRjb3JuZXJWaWV3KG1vZGVsKTtcblx0XHRcdFx0XHR2YXIgY29ybmVyUGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY29ybmVyQ3VyciwgY29ybmVyTmV4dCk7XG5cdFx0XHRcdFx0Y29ybmVyTm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhjb3JuZXJOb2RlLCBjb3JuZXJDdXJyLCBjb3JuZXJQYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRcdGNvcm5lckN1cnIgPSBjb3JuZXJOZXh0O1xuXHRcdFx0XHRcdGN1cnJQb3BvdXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gdmlldyBwb3BvdXRcblxuXHRcdFx0XHRfVmlydHVhbERvbV9kb2MgPSBtb2RlbC5wb3BvdXQuYjsgLy8gU1dJVENIIFRPIFBPUE9VVCBET0Ncblx0XHRcdFx0Y3VyclBvcG91dCB8fCAoY3VyclBvcG91dCA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUobW9kZWwucG9wb3V0LmIpKTtcblx0XHRcdFx0dmFyIG5leHRQb3BvdXQgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHBvcG91dFZpZXcobW9kZWwpO1xuXHRcdFx0XHR2YXIgcG9wb3V0UGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY3VyclBvcG91dCwgbmV4dFBvcG91dCk7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhtb2RlbC5wb3BvdXQuYi5ib2R5LCBjdXJyUG9wb3V0LCBwb3BvdXRQYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRjdXJyUG9wb3V0ID0gbmV4dFBvcG91dDtcblx0XHRcdFx0X1ZpcnR1YWxEb21fZG9jID0gZG9jdW1lbnQ7IC8vIFNXSVRDSCBCQUNLIFRPIE5PUk1BTCBET0Ncblx0XHRcdH0pO1xuXHRcdH1cblx0KTtcbn0pO1xuXG5cbnZhciBfRGVidWdnZXJfZG9jdW1lbnQgPSBGNChmdW5jdGlvbihpbXBsLCBmbGFnRGVjb2RlciwgZGVidWdNZXRhZGF0YSwgYXJncylcbntcblx0cmV0dXJuIF9QbGF0Zm9ybV9pbml0aWFsaXplKFxuXHRcdGZsYWdEZWNvZGVyLFxuXHRcdGFyZ3MsXG5cdFx0QTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwSW5pdCwgX0pzb25fd3JhcChkZWJ1Z01ldGFkYXRhKSwgX0RlYnVnZ2VyX3BvcG91dCgpLCBpbXBsLmluaXQpLFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd3JhcFVwZGF0ZShpbXBsLnVwZGF0ZSksXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwU3VicyhpbXBsLnN1YnNjcmlwdGlvbnMpLFxuXHRcdGZ1bmN0aW9uKHNlbmRUb0FwcCwgaW5pdGlhbE1vZGVsKVxuXHRcdHtcblx0XHRcdHZhciBkaXZlcnRIcmVmVG9BcHAgPSBpbXBsLnNldHVwICYmIGltcGwuc2V0dXAoZnVuY3Rpb24oeCkgeyByZXR1cm4gc2VuZFRvQXBwKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXNlck1zZyh4KSk7IH0pO1xuXHRcdFx0dmFyIHZpZXcgPSBpbXBsLnZpZXc7XG5cdFx0XHR2YXIgdGl0bGUgPSBfVmlydHVhbERvbV9kb2MudGl0bGU7XG5cdFx0XHR2YXIgYm9keU5vZGUgPSBfVmlydHVhbERvbV9kb2MuYm9keTtcblx0XHRcdHZhciBjdXJyTm9kZSA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoYm9keU5vZGUpO1xuXHRcdFx0dmFyIGN1cnJCbG9ja2VyID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b0Jsb2NrZXJUeXBlKGluaXRpYWxNb2RlbCk7XG5cdFx0XHR2YXIgY3VyclBvcG91dDtcblxuXHRcdFx0aW5pdGlhbE1vZGVsLnBvcG91dC5hID0gc2VuZFRvQXBwO1xuXG5cdFx0XHRyZXR1cm4gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKGluaXRpYWxNb2RlbCwgZnVuY3Rpb24obW9kZWwpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcCA9IGRpdmVydEhyZWZUb0FwcDtcblx0XHRcdFx0dmFyIGRvYyA9IHZpZXcoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRVc2VyTW9kZWwobW9kZWwpKTtcblx0XHRcdFx0dmFyIG5leHROb2RlID0gX1ZpcnR1YWxEb21fbm9kZSgnYm9keScpKF9MaXN0X05pbCkoXG5cdFx0XHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRtYXAsIF9WaXJ0dWFsRG9tX21hcChlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVzZXJNc2cpLCBkb2MuYm9keSksXG5cdFx0XHRcdFx0XHRfTGlzdF9Db25zKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kY29ybmVyVmlldyhtb2RlbCksIF9MaXN0X05pbClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHZhciBwYXRjaGVzID0gX1ZpcnR1YWxEb21fZGlmZihjdXJyTm9kZSwgbmV4dE5vZGUpO1xuXHRcdFx0XHRib2R5Tm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhib2R5Tm9kZSwgY3Vyck5vZGUsIHBhdGNoZXMsIHNlbmRUb0FwcCk7XG5cdFx0XHRcdGN1cnJOb2RlID0gbmV4dE5vZGU7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcCA9IDA7XG5cdFx0XHRcdCh0aXRsZSAhPT0gZG9jLnRpdGxlKSAmJiAoX1ZpcnR1YWxEb21fZG9jLnRpdGxlID0gdGl0bGUgPSBkb2MudGl0bGUpO1xuXG5cdFx0XHRcdC8vIHVwZGF0ZSBibG9ja2VyXG5cblx0XHRcdFx0dmFyIG5leHRCbG9ja2VyID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b0Jsb2NrZXJUeXBlKG1vZGVsKTtcblx0XHRcdFx0X0RlYnVnZ2VyX3VwZGF0ZUJsb2NrZXIoY3VyckJsb2NrZXIsIG5leHRCbG9ja2VyKTtcblx0XHRcdFx0Y3VyckJsb2NrZXIgPSBuZXh0QmxvY2tlcjtcblxuXHRcdFx0XHQvLyB2aWV3IHBvcG91dFxuXG5cdFx0XHRcdGlmICghbW9kZWwucG9wb3V0LmIpIHsgY3VyclBvcG91dCA9IHVuZGVmaW5lZDsgcmV0dXJuOyB9XG5cblx0XHRcdFx0X1ZpcnR1YWxEb21fZG9jID0gbW9kZWwucG9wb3V0LmI7IC8vIFNXSVRDSCBUTyBQT1BPVVQgRE9DXG5cdFx0XHRcdGN1cnJQb3BvdXQgfHwgKGN1cnJQb3BvdXQgPSBfVmlydHVhbERvbV92aXJ0dWFsaXplKG1vZGVsLnBvcG91dC5iKSk7XG5cdFx0XHRcdHZhciBuZXh0UG9wb3V0ID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRwb3BvdXRWaWV3KG1vZGVsKTtcblx0XHRcdFx0dmFyIHBvcG91dFBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJQb3BvdXQsIG5leHRQb3BvdXQpO1xuXHRcdFx0XHRfVmlydHVhbERvbV9hcHBseVBhdGNoZXMobW9kZWwucG9wb3V0LmIuYm9keSwgY3VyclBvcG91dCwgcG9wb3V0UGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3VyclBvcG91dCA9IG5leHRQb3BvdXQ7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RvYyA9IGRvY3VtZW50OyAvLyBTV0lUQ0ggQkFDSyBUTyBOT1JNQUwgRE9DXG5cdFx0XHR9KTtcblx0XHR9XG5cdCk7XG59KTtcblxuXG5mdW5jdGlvbiBfRGVidWdnZXJfcG9wb3V0KClcbntcblx0cmV0dXJuIHtcblx0XHRiOiB1bmRlZmluZWQsXG5cdFx0YTogdW5kZWZpbmVkXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9pc09wZW4ocG9wb3V0KVxue1xuXHRyZXR1cm4gISFwb3BvdXQuYjtcbn1cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX29wZW4ocG9wb3V0KVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0X0RlYnVnZ2VyX29wZW5XaW5kb3cocG9wb3V0KTtcblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX29wZW5XaW5kb3cocG9wb3V0KVxue1xuXHR2YXIgdyA9IDkwMCwgaCA9IDM2MCwgeCA9IHNjcmVlbi53aWR0aCAtIHcsIHkgPSBzY3JlZW4uaGVpZ2h0IC0gaDtcblx0dmFyIGRlYnVnZ2VyV2luZG93ID0gd2luZG93Lm9wZW4oJycsICcnLCAnd2lkdGg9JyArIHcgKyAnLGhlaWdodD0nICsgaCArICcsbGVmdD0nICsgeCArICcsdG9wPScgKyB5KTtcblx0dmFyIGRvYyA9IGRlYnVnZ2VyV2luZG93LmRvY3VtZW50O1xuXHRkb2MudGl0bGUgPSAnRWxtIERlYnVnZ2VyJztcblxuXHQvLyBoYW5kbGUgYXJyb3cga2V5c1xuXHRkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQubWV0YUtleSAmJiBldmVudC53aGljaCA9PT0gODIgJiYgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdGV2ZW50LndoaWNoID09PSAzOCAmJiAocG9wb3V0LmEoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVcCksIGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuXHRcdGV2ZW50LndoaWNoID09PSA0MCAmJiAocG9wb3V0LmEoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiREb3duKSwgZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSB3aW5kb3cgY2xvc2Vcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIGNsb3NlKTtcblx0ZGVidWdnZXJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0cG9wb3V0LmIgPSB1bmRlZmluZWQ7XG5cdFx0cG9wb3V0LmEoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgY2xvc2UpO1xuXHR9KTtcblx0ZnVuY3Rpb24gY2xvc2UoKSB7XG5cdFx0cG9wb3V0LmIgPSB1bmRlZmluZWQ7XG5cdFx0cG9wb3V0LmEoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wKTtcblx0XHRkZWJ1Z2dlcldpbmRvdy5jbG9zZSgpO1xuXHR9XG5cblx0Ly8gcmVnaXN0ZXIgbmV3IHdpbmRvd1xuXHRwb3BvdXQuYiA9IGRvYztcbn1cblxuXG5cbi8vIFNDUk9MTFxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9zY3JvbGwocG9wb3V0KVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYgKHBvcG91dC5iKVxuXHRcdHtcblx0XHRcdHZhciBtc2dzID0gcG9wb3V0LmIuZ2V0RWxlbWVudEJ5SWQoJ2VsbS1kZWJ1Z2dlci1zaWRlYmFyJyk7XG5cdFx0XHRpZiAobXNncylcblx0XHRcdHtcblx0XHRcdFx0bXNncy5zY3JvbGxUb3AgPSBtc2dzLnNjcm9sbEhlaWdodDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApKTtcblx0fSk7XG59XG5cblxuXG4vLyBVUExPQURcblxuXG5mdW5jdGlvbiBfRGVidWdnZXJfdXBsb2FkKClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsICd0ZXh0L2pzb24nKTtcblx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudClcblx0XHR7XG5cdFx0XHR2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpXG5cdFx0XHR7XG5cdFx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChlLnRhcmdldC5yZXN1bHQpKTtcblx0XHRcdH07XG5cdFx0XHRmaWxlUmVhZGVyLnJlYWRBc1RleHQoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRlbGVtZW50LmNsaWNrKCk7XG5cdH0pO1xufVxuXG5cblxuLy8gRE9XTkxPQURcblxuXG52YXIgX0RlYnVnZ2VyX2Rvd25sb2FkID0gRjIoZnVuY3Rpb24oaGlzdG9yeUxlbmd0aCwganNvbilcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHZhciBmaWxlTmFtZSA9ICdoaXN0b3J5LScgKyBoaXN0b3J5TGVuZ3RoICsgJy50eHQnO1xuXHRcdHZhciBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cdFx0dmFyIG1pbWUgPSAndGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04Jztcblx0XHR2YXIgZG9uZSA9IF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKTtcblxuXHRcdC8vIGZvciBJRTEwK1xuXHRcdGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYilcblx0XHR7XG5cdFx0XHRuYXZpZ2F0b3IubXNTYXZlQmxvYihuZXcgQmxvYihbanNvblN0cmluZ10sIHt0eXBlOiBtaW1lfSksIGZpbGVOYW1lKTtcblx0XHRcdHJldHVybiBjYWxsYmFjayhkb25lKTtcblx0XHR9XG5cblx0XHQvLyBmb3IgSFRNTDVcblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOicgKyBtaW1lICsgJywnICsgZW5jb2RlVVJJQ29tcG9uZW50KGpzb25TdHJpbmcpKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlTmFtZSk7XG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0ZWxlbWVudC5jbGljaygpO1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cdFx0Y2FsbGJhY2soZG9uZSk7XG5cdH0pO1xufSk7XG5cblxuXG4vLyBQT1BPVVQgQ09OVEVOVFxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9tZXNzYWdlVG9TdHJpbmcodmFsdWUpXG57XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0e1xuXHRcdHJldHVybiB2YWx1ZSA/ICdUcnVlJyA6ICdGYWxzZSc7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcblx0e1xuXHRcdHJldHVybiB2YWx1ZSArICcnO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG5cdHtcblx0XHRyZXR1cm4gJ1wiJyArIF9EZWJ1Z2dlcl9hZGRTbGFzaGVzKHZhbHVlLCBmYWxzZSkgKyAnXCInO1xuXHR9XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0cmV0dXJuIFwiJ1wiICsgX0RlYnVnZ2VyX2FkZFNsYXNoZXModmFsdWUsIHRydWUpICsgXCInXCI7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhKCckJyBpbiB2YWx1ZSkpXG5cdHtcblx0XHRyZXR1cm4gJ+KApic7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlLiQgPT09ICdudW1iZXInKVxuXHR7XG5cdFx0cmV0dXJuICfigKYnO1xuXHR9XG5cblx0dmFyIGNvZGUgPSB2YWx1ZS4kLmNoYXJDb2RlQXQoMCk7XG5cdGlmIChjb2RlID09PSAweDIzIC8qICMgKi8gfHwgLyogYSAqLyAweDYxIDw9IGNvZGUgJiYgY29kZSA8PSAweDdBIC8qIHogKi8pXG5cdHtcblx0XHRyZXR1cm4gJ+KApic7XG5cdH1cblxuXHRpZiAoWydBcnJheV9lbG1fYnVpbHRpbicsICdTZXRfZWxtX2J1aWx0aW4nLCAnUkJOb2RlX2VsbV9idWlsdGluJywgJ1JCRW1wdHlfZWxtX2J1aWx0aW4nXS5pbmRleE9mKHZhbHVlLiQpID49IDApXG5cdHtcblx0XHRyZXR1cm4gJ+KApic7XG5cdH1cblxuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblx0c3dpdGNoIChrZXlzLmxlbmd0aClcblx0e1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiB2YWx1ZS4kO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiB2YWx1ZS4kICsgJyAnICsgX0RlYnVnZ2VyX21lc3NhZ2VUb1N0cmluZyh2YWx1ZS5hKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHZhbHVlLiQgKyAnIOKApiAnICsgX0RlYnVnZ2VyX21lc3NhZ2VUb1N0cmluZyh2YWx1ZVtrZXlzW2tleXMubGVuZ3RoIC0gMV1dKTtcblx0fVxufVxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9pbml0KHZhbHVlKVxue1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpXG5cdHtcblx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3RvciwgZWxtJGNvcmUkTWF5YmUkSnVzdCh2YWx1ZSA/ICdUcnVlJyA6ICdGYWxzZScpLCB0cnVlLCBfTGlzdF9OaWwpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG5cdHtcblx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRQcmltaXRpdmUodmFsdWUgKyAnJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFMoJ1wiJyArIF9EZWJ1Z2dlcl9hZGRTbGFzaGVzKHZhbHVlLCBmYWxzZSkgKyAnXCInKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZylcblx0e1xuXHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFMoXCInXCIgKyBfRGVidWdnZXJfYWRkU2xhc2hlcyh2YWx1ZSwgdHJ1ZSkgKyBcIidcIik7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnJCcgaW4gdmFsdWUpXG5cdHtcblx0XHR2YXIgdGFnID0gdmFsdWUuJDtcblxuXHRcdGlmICh0YWcgPT09ICc6OicgfHwgdGFnID09PSAnW10nKVxuXHRcdHtcblx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJExpc3RTZXEsIHRydWUsXG5cdFx0XHRcdEEyKGVsbSRjb3JlJExpc3QkbWFwLCBfRGVidWdnZXJfaW5pdCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdTZXRfZWxtX2J1aWx0aW4nKVxuXHRcdHtcblx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNldFNlcSwgdHJ1ZSxcblx0XHRcdFx0QTMoZWxtJGNvcmUkU2V0JGZvbGRyLCBfRGVidWdnZXJfaW5pdENvbnMsIF9MaXN0X05pbCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nIHx8IHRhZyA9PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRGljdGlvbmFyeSwgdHJ1ZSxcblx0XHRcdFx0QTMoZWxtJGNvcmUkRGljdCRmb2xkciwgX0RlYnVnZ2VyX2luaXRLZXlWYWx1ZUNvbnMsIF9MaXN0X05pbCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdBcnJheV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kQXJyYXlTZXEsIHRydWUsXG5cdFx0XHRcdEEzKGVsbSRjb3JlJEFycmF5JGZvbGRyLCBfRGVidWdnZXJfaW5pdENvbnMsIF9MaXN0X05pbCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGFnID09PSAnbnVtYmVyJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRQcmltaXRpdmUoJzxpbnRlcm5hbHM+Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYXIgPSB0YWcuY2hhckNvZGVBdCgwKTtcblx0XHRpZiAoY2hhciA9PT0gMzUgfHwgNjUgPD0gY2hhciAmJiBjaGFyIDw9IDkwKVxuXHRcdHtcblx0XHRcdHZhciBsaXN0ID0gX0xpc3RfTmlsO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKGkgPT09ICckJykgY29udGludWU7XG5cdFx0XHRcdGxpc3QgPSBfTGlzdF9Db25zKF9EZWJ1Z2dlcl9pbml0KHZhbHVlW2ldKSwgbGlzdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3RvciwgY2hhciA9PT0gMzUgPyBlbG0kY29yZSRNYXliZSROb3RoaW5nIDogZWxtJGNvcmUkTWF5YmUkSnVzdCh0YWcpLCB0cnVlLCBlbG0kY29yZSRMaXN0JHJldmVyc2UobGlzdCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFByaW1pdGl2ZSgnPGludGVybmFscz4nKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuXHR7XG5cdFx0dmFyIGRpY3QgPSBlbG0kY29yZSREaWN0JGVtcHR5O1xuXHRcdGZvciAodmFyIGkgaW4gdmFsdWUpXG5cdFx0e1xuXHRcdFx0ZGljdCA9IEEzKGVsbSRjb3JlJERpY3QkaW5zZXJ0LCBpLCBfRGVidWdnZXJfaW5pdCh2YWx1ZVtpXSksIGRpY3QpO1xuXHRcdH1cblx0XHRyZXR1cm4gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsIHRydWUsIGRpY3QpO1xuXHR9XG5cblx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUHJpbWl0aXZlKCc8aW50ZXJuYWxzPicpO1xufVxuXG52YXIgX0RlYnVnZ2VyX2luaXRDb25zID0gRjIoZnVuY3Rpb24gaW5pdENvbnNIZWxwKHZhbHVlLCBsaXN0KVxue1xuXHRyZXR1cm4gX0xpc3RfQ29ucyhfRGVidWdnZXJfaW5pdCh2YWx1ZSksIGxpc3QpO1xufSk7XG5cbnZhciBfRGVidWdnZXJfaW5pdEtleVZhbHVlQ29ucyA9IEYzKGZ1bmN0aW9uKGtleSwgdmFsdWUsIGxpc3QpXG57XG5cdHJldHVybiBfTGlzdF9Db25zKFxuXHRcdF9VdGlsc19UdXBsZTIoX0RlYnVnZ2VyX2luaXQoa2V5KSwgX0RlYnVnZ2VyX2luaXQodmFsdWUpKSxcblx0XHRsaXN0XG5cdCk7XG59KTtcblxuZnVuY3Rpb24gX0RlYnVnZ2VyX2FkZFNsYXNoZXMoc3RyLCBpc0NoYXIpXG57XG5cdHZhciBzID0gc3RyXG5cdFx0LnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcblx0XHQucmVwbGFjZSgvXFxuL2csICdcXFxcbicpXG5cdFx0LnJlcGxhY2UoL1xcdC9nLCAnXFxcXHQnKVxuXHRcdC5yZXBsYWNlKC9cXHIvZywgJ1xcXFxyJylcblx0XHQucmVwbGFjZSgvXFx2L2csICdcXFxcdicpXG5cdFx0LnJlcGxhY2UoL1xcMC9nLCAnXFxcXDAnKTtcblx0aWYgKGlzQ2hhcilcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcJy9nLCAnXFxcXFxcJycpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuXHR9XG59XG5cblxuXG4vLyBCTE9DSyBFVkVOVFNcblxuXG5mdW5jdGlvbiBfRGVidWdnZXJfdXBkYXRlQmxvY2tlcihvbGRCbG9ja2VyLCBuZXdCbG9ja2VyKVxue1xuXHRpZiAob2xkQmxvY2tlciA9PT0gbmV3QmxvY2tlcikgcmV0dXJuO1xuXG5cdHZhciBvbGRFdmVudHMgPSBfRGVidWdnZXJfYmxvY2tlclRvRXZlbnRzKG9sZEJsb2NrZXIpO1xuXHR2YXIgbmV3RXZlbnRzID0gX0RlYnVnZ2VyX2Jsb2NrZXJUb0V2ZW50cyhuZXdCbG9ja2VyKTtcblxuXHQvLyByZW1vdmUgb2xkIGJsb2NrZXJzXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgb2xkRXZlbnRzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihvbGRFdmVudHNbaV0sIF9EZWJ1Z2dlcl9ibG9ja2VyLCB0cnVlKTtcblx0fVxuXG5cdC8vIGFkZCBuZXcgYmxvY2tlcnNcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuZXdFdmVudHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5ld0V2ZW50c1tpXSwgX0RlYnVnZ2VyX2Jsb2NrZXIsIHRydWUpO1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX2Jsb2NrZXIoZXZlbnQpXG57XG5cdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgZXZlbnQubWV0YUtleSAmJiBldmVudC53aGljaCA9PT0gODIpXG5cdHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgaXNTY3JvbGwgPSBldmVudC50eXBlID09PSAnc2Nyb2xsJyB8fCBldmVudC50eXBlID09PSAnd2hlZWwnO1xuXHRmb3IgKHZhciBub2RlID0gZXZlbnQudGFyZ2V0OyBub2RlOyBub2RlID0gbm9kZS5wYXJlbnROb2RlKVxuXHR7XG5cdFx0aWYgKGlzU2Nyb2xsID8gbm9kZS5pZCA9PT0gJ2VsbS1kZWJ1Z2dlci1kZXRhaWxzJyA6IG5vZGUuaWQgPT09ICdlbG0tZGVidWdnZXItb3ZlcmxheScpXG5cdFx0e1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBfRGVidWdnZXJfYmxvY2tlclRvRXZlbnRzKGJsb2NrZXIpXG57XG5cdHJldHVybiBibG9ja2VyID09PSBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTm9uZVxuXHRcdD8gW11cblx0XHQ6IGJsb2NrZXIgPT09IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tNb3N0XG5cdFx0XHQ/IF9EZWJ1Z2dlcl9tb3N0RXZlbnRzXG5cdFx0XHQ6IF9EZWJ1Z2dlcl9hbGxFdmVudHM7XG59XG5cbnZhciBfRGVidWdnZXJfbW9zdEV2ZW50cyA9IFtcblx0J2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNlbW92ZScsXG5cdCdtb3VzZXVwJywgJ21vdXNlZG93bicsICdtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnLFxuXHQndG91Y2hzdGFydCcsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICd0b3VjaG1vdmUnLFxuXHQncG9pbnRlcmRvd24nLCAncG9pbnRlcnVwJywgJ3BvaW50ZXJvdmVyJywgJ3BvaW50ZXJvdXQnLFxuXHQncG9pbnRlcmVudGVyJywgJ3BvaW50ZXJsZWF2ZScsICdwb2ludGVybW92ZScsICdwb2ludGVyY2FuY2VsJyxcblx0J2RyYWdzdGFydCcsICdkcmFnJywgJ2RyYWdlbmQnLCAnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJyxcblx0J2tleXVwJywgJ2tleWRvd24nLCAna2V5cHJlc3MnLFxuXHQnaW5wdXQnLCAnY2hhbmdlJyxcblx0J2ZvY3VzJywgJ2JsdXInXG5dO1xuXG52YXIgX0RlYnVnZ2VyX2FsbEV2ZW50cyA9IF9EZWJ1Z2dlcl9tb3N0RXZlbnRzLmNvbmNhdCgnd2hlZWwnLCAnc2Nyb2xsJyk7XG5cblxuXG5cblxuLy8gRUxFTUVOVFxuXG5cbnZhciBfRGVidWdnZXJfZWxlbWVudDtcblxudmFyIF9Ccm93c2VyX2VsZW1lbnQgPSBfRGVidWdnZXJfZWxlbWVudCB8fCBGNChmdW5jdGlvbihpbXBsLCBmbGFnRGVjb2RlciwgZGVidWdNZXRhZGF0YSwgYXJncylcbntcblx0cmV0dXJuIF9QbGF0Zm9ybV9pbml0aWFsaXplKFxuXHRcdGZsYWdEZWNvZGVyLFxuXHRcdGFyZ3MsXG5cdFx0aW1wbC5pbml0LFxuXHRcdGltcGwudXBkYXRlLFxuXHRcdGltcGwuc3Vic2NyaXB0aW9ucyxcblx0XHRmdW5jdGlvbihzZW5kVG9BcHAsIGluaXRpYWxNb2RlbCkge1xuXHRcdFx0dmFyIHZpZXcgPSBpbXBsLnZpZXc7XG5cdFx0XHQvKipfVU5VU0VEL1xuXHRcdFx0dmFyIGRvbU5vZGUgPSBhcmdzWydub2RlJ107XG5cdFx0XHQvLyovXG5cdFx0XHQvKiovXG5cdFx0XHR2YXIgZG9tTm9kZSA9IGFyZ3MgJiYgYXJnc1snbm9kZSddID8gYXJnc1snbm9kZSddIDogX0RlYnVnX2NyYXNoKDApO1xuXHRcdFx0Ly8qL1xuXHRcdFx0dmFyIGN1cnJOb2RlID0gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShkb21Ob2RlKTtcblxuXHRcdFx0cmV0dXJuIF9Ccm93c2VyX21ha2VBbmltYXRvcihpbml0aWFsTW9kZWwsIGZ1bmN0aW9uKG1vZGVsKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbmV4dE5vZGUgPSB2aWV3KG1vZGVsKTtcblx0XHRcdFx0dmFyIHBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJOb2RlLCBuZXh0Tm9kZSk7XG5cdFx0XHRcdGRvbU5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMoZG9tTm9kZSwgY3Vyck5vZGUsIHBhdGNoZXMsIHNlbmRUb0FwcCk7XG5cdFx0XHRcdGN1cnJOb2RlID0gbmV4dE5vZGU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdCk7XG59KTtcblxuXG5cbi8vIERPQ1VNRU5UXG5cblxudmFyIF9EZWJ1Z2dlcl9kb2N1bWVudDtcblxudmFyIF9Ccm93c2VyX2RvY3VtZW50ID0gX0RlYnVnZ2VyX2RvY3VtZW50IHx8IEY0KGZ1bmN0aW9uKGltcGwsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHRyZXR1cm4gX1BsYXRmb3JtX2luaXRpYWxpemUoXG5cdFx0ZmxhZ0RlY29kZXIsXG5cdFx0YXJncyxcblx0XHRpbXBsLmluaXQsXG5cdFx0aW1wbC51cGRhdGUsXG5cdFx0aW1wbC5zdWJzY3JpcHRpb25zLFxuXHRcdGZ1bmN0aW9uKHNlbmRUb0FwcCwgaW5pdGlhbE1vZGVsKSB7XG5cdFx0XHR2YXIgZGl2ZXJ0SHJlZlRvQXBwID0gaW1wbC5zZXR1cCAmJiBpbXBsLnNldHVwKHNlbmRUb0FwcClcblx0XHRcdHZhciB2aWV3ID0gaW1wbC52aWV3O1xuXHRcdFx0dmFyIHRpdGxlID0gX1ZpcnR1YWxEb21fZG9jLnRpdGxlO1xuXHRcdFx0dmFyIGJvZHlOb2RlID0gX1ZpcnR1YWxEb21fZG9jLmJvZHk7XG5cdFx0XHR2YXIgY3Vyck5vZGUgPSBfVmlydHVhbERvbV92aXJ0dWFsaXplKGJvZHlOb2RlKTtcblx0XHRcdHJldHVybiBfQnJvd3Nlcl9tYWtlQW5pbWF0b3IoaW5pdGlhbE1vZGVsLCBmdW5jdGlvbihtb2RlbClcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwID0gZGl2ZXJ0SHJlZlRvQXBwO1xuXHRcdFx0XHR2YXIgZG9jID0gdmlldyhtb2RlbCk7XG5cdFx0XHRcdHZhciBuZXh0Tm9kZSA9IF9WaXJ0dWFsRG9tX25vZGUoJ2JvZHknKShfTGlzdF9OaWwpKGRvYy5ib2R5KTtcblx0XHRcdFx0dmFyIHBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJOb2RlLCBuZXh0Tm9kZSk7XG5cdFx0XHRcdGJvZHlOb2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzKGJvZHlOb2RlLCBjdXJyTm9kZSwgcGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3Vyck5vZGUgPSBuZXh0Tm9kZTtcblx0XHRcdFx0X1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwID0gMDtcblx0XHRcdFx0KHRpdGxlICE9PSBkb2MudGl0bGUpICYmIChfVmlydHVhbERvbV9kb2MudGl0bGUgPSB0aXRsZSA9IGRvYy50aXRsZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdCk7XG59KTtcblxuXG5cbi8vIEFOSU1BVElPTlxuXG5cbnZhciBfQnJvd3Nlcl9jYW5jZWxBbmltYXRpb25GcmFtZSA9XG5cdHR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCdcblx0XHQ/IGNhbmNlbEFuaW1hdGlvbkZyYW1lXG5cdFx0OiBmdW5jdGlvbihpZCkgeyBjbGVhclRpbWVvdXQoaWQpOyB9O1xuXG52YXIgX0Jyb3dzZXJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cblx0dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCdcblx0XHQ/IHJlcXVlc3RBbmltYXRpb25GcmFtZVxuXHRcdDogZnVuY3Rpb24oY2FsbGJhY2spIHsgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7IH07XG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKG1vZGVsLCBkcmF3KVxue1xuXHRkcmF3KG1vZGVsKTtcblxuXHR2YXIgc3RhdGUgPSAwO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUlmTmVlZGVkKClcblx0e1xuXHRcdHN0YXRlID0gc3RhdGUgPT09IDFcblx0XHRcdD8gMFxuXHRcdFx0OiAoIF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVJZk5lZWRlZCksIGRyYXcobW9kZWwpLCAxICk7XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24obmV4dE1vZGVsLCBpc1N5bmMpXG5cdHtcblx0XHRtb2RlbCA9IG5leHRNb2RlbDtcblxuXHRcdGlzU3luY1xuXHRcdFx0PyAoIGRyYXcobW9kZWwpLFxuXHRcdFx0XHRzdGF0ZSA9PT0gMiAmJiAoc3RhdGUgPSAxKVxuXHRcdFx0XHQpXG5cdFx0XHQ6ICggc3RhdGUgPT09IDAgJiYgX0Jyb3dzZXJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUlmTmVlZGVkKSxcblx0XHRcdFx0c3RhdGUgPSAyXG5cdFx0XHRcdCk7XG5cdH07XG59XG5cblxuXG4vLyBBUFBMSUNBVElPTlxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2FwcGxpY2F0aW9uKGltcGwpXG57XG5cdHZhciBvblVybENoYW5nZSA9IGltcGwub25VcmxDaGFuZ2U7XG5cdHZhciBvblVybFJlcXVlc3QgPSBpbXBsLm9uVXJsUmVxdWVzdDtcblx0dmFyIGtleSA9IGZ1bmN0aW9uKCkgeyBrZXkuYShvblVybENoYW5nZShfQnJvd3Nlcl9nZXRVcmwoKSkpOyB9O1xuXG5cdHJldHVybiBfQnJvd3Nlcl9kb2N1bWVudCh7XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKHNlbmRUb0FwcClcblx0XHR7XG5cdFx0XHRrZXkuYSA9IHNlbmRUb0FwcDtcblx0XHRcdF9Ccm93c2VyX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGtleSk7XG5cdFx0XHRfQnJvd3Nlcl93aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPCAwIHx8IF9Ccm93c2VyX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywga2V5KTtcblxuXHRcdFx0cmV0dXJuIEYyKGZ1bmN0aW9uKGRvbU5vZGUsIGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmJ1dHRvbiA8IDEgJiYgIWRvbU5vZGUudGFyZ2V0ICYmICFkb21Ob2RlLmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dmFyIGhyZWYgPSBkb21Ob2RlLmhyZWY7XG5cdFx0XHRcdFx0dmFyIGN1cnIgPSBfQnJvd3Nlcl9nZXRVcmwoKTtcblx0XHRcdFx0XHR2YXIgbmV4dCA9IGVsbSR1cmwkVXJsJGZyb21TdHJpbmcoaHJlZikuYTtcblx0XHRcdFx0XHRzZW5kVG9BcHAob25VcmxSZXF1ZXN0KFxuXHRcdFx0XHRcdFx0KG5leHRcblx0XHRcdFx0XHRcdFx0JiYgY3Vyci5wcm90b2NvbCA9PT0gbmV4dC5wcm90b2NvbFxuXHRcdFx0XHRcdFx0XHQmJiBjdXJyLmhvc3QgPT09IG5leHQuaG9zdFxuXHRcdFx0XHRcdFx0XHQmJiBjdXJyLnBvcnRfLmEgPT09IG5leHQucG9ydF8uYVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQ/IGVsbSRicm93c2VyJEJyb3dzZXIkSW50ZXJuYWwobmV4dClcblx0XHRcdFx0XHRcdFx0OiBlbG0kYnJvd3NlciRCcm93c2VyJEV4dGVybmFsKGhyZWYpXG5cdFx0XHRcdFx0KSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0aW5pdDogZnVuY3Rpb24oZmxhZ3MpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIEEzKGltcGwuaW5pdCwgZmxhZ3MsIF9Ccm93c2VyX2dldFVybCgpLCBrZXkpO1xuXHRcdH0sXG5cdFx0dmlldzogaW1wbC52aWV3LFxuXHRcdHVwZGF0ZTogaW1wbC51cGRhdGUsXG5cdFx0c3Vic2NyaXB0aW9uczogaW1wbC5zdWJzY3JpcHRpb25zXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9nZXRVcmwoKVxue1xuXHRyZXR1cm4gZWxtJHVybCRVcmwkZnJvbVN0cmluZyhfVmlydHVhbERvbV9kb2MubG9jYXRpb24uaHJlZikuYSB8fCBfRGVidWdfY3Jhc2goMSk7XG59XG5cbnZhciBfQnJvd3Nlcl9nbyA9IEYyKGZ1bmN0aW9uKGtleSwgbilcbntcblx0cmV0dXJuIEEyKGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oKSB7XG5cdFx0biAmJiBoaXN0b3J5LmdvKG4pO1xuXHRcdGtleSgpO1xuXHR9KSk7XG59KTtcblxudmFyIF9Ccm93c2VyX3B1c2hVcmwgPSBGMihmdW5jdGlvbihrZXksIHVybClcbntcblx0cmV0dXJuIEEyKGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oKSB7XG5cdFx0aGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpO1xuXHRcdGtleSgpO1xuXHR9KSk7XG59KTtcblxudmFyIF9Ccm93c2VyX3JlcGxhY2VVcmwgPSBGMihmdW5jdGlvbihrZXksIHVybClcbntcblx0cmV0dXJuIEEyKGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oKSB7XG5cdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB1cmwpO1xuXHRcdGtleSgpO1xuXHR9KSk7XG59KTtcblxuXG5cbi8vIEdMT0JBTCBFVkVOVFNcblxuXG52YXIgX0Jyb3dzZXJfZmFrZU5vZGUgPSB7IGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkge30sIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkge30gfTtcbnZhciBfQnJvd3Nlcl9kb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiBfQnJvd3Nlcl9mYWtlTm9kZTtcbnZhciBfQnJvd3Nlcl93aW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IF9Ccm93c2VyX2Zha2VOb2RlO1xuXG52YXIgX0Jyb3dzZXJfb24gPSBGMyhmdW5jdGlvbihub2RlLCBldmVudE5hbWUsIHNlbmRUb1NlbGYpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX3NwYXduKF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpXHR7IF9TY2hlZHVsZXJfcmF3U3Bhd24oc2VuZFRvU2VsZihldmVudCkpOyB9XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgX1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZCAmJiB7IHBhc3NpdmU6IHRydWUgfSk7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTsgfTtcblx0fSkpO1xufSk7XG5cbnZhciBfQnJvd3Nlcl9kZWNvZGVFdmVudCA9IEYyKGZ1bmN0aW9uKGRlY29kZXIsIGV2ZW50KVxue1xuXHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLCBldmVudCk7XG5cdHJldHVybiBlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpID8gZWxtJGNvcmUkTWF5YmUkSnVzdChyZXN1bHQuYSkgOiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xufSk7XG5cblxuXG4vLyBQQUdFIFZJU0lCSUxJVFlcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl92aXNpYmlsaXR5SW5mbygpXG57XG5cdHJldHVybiAodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5oaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICdoaWRkZW4nLCBjaGFuZ2U6ICd2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICdtb3pIaWRkZW4nLCBjaGFuZ2U6ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5tc0hpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0PyB7IGhpZGRlbjogJ21zSGlkZGVuJywgY2hhbmdlOiAnbXN2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICd3ZWJraXRIaWRkZW4nLCBjaGFuZ2U6ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OiB7IGhpZGRlbjogJ2hpZGRlbicsIGNoYW5nZTogJ3Zpc2liaWxpdHljaGFuZ2UnIH07XG59XG5cblxuXG4vLyBBTklNQVRJT04gRlJBTUVTXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfckFGKClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHZhciBpZCA9IF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChEYXRlLm5vdygpKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRfQnJvd3Nlcl9jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG5cdFx0fTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfbm93KClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChEYXRlLm5vdygpKSk7XG5cdH0pO1xufVxuXG5cblxuLy8gRE9NIFNUVUZGXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfd2l0aE5vZGUoaWQsIGRvU3R1ZmYpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRcdGNhbGxiYWNrKG5vZGVcblx0XHRcdFx0PyBfU2NoZWR1bGVyX3N1Y2NlZWQoZG9TdHVmZihub2RlKSlcblx0XHRcdFx0OiBfU2NoZWR1bGVyX2ZhaWwoZWxtJGJyb3dzZXIkQnJvd3NlciREb20kTm90Rm91bmQoaWQpKVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfd2l0aFdpbmRvdyhkb1N0dWZmKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0X0Jyb3dzZXJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKGRvU3R1ZmYoKSkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG4vLyBGT0NVUyBhbmQgQkxVUlxuXG5cbnZhciBfQnJvd3Nlcl9jYWxsID0gRjIoZnVuY3Rpb24oZnVuY3Rpb25OYW1lLCBpZClcbntcblx0cmV0dXJuIF9Ccm93c2VyX3dpdGhOb2RlKGlkLCBmdW5jdGlvbihub2RlKSB7XG5cdFx0bm9kZVtmdW5jdGlvbk5hbWVdKCk7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTA7XG5cdH0pO1xufSk7XG5cblxuXG4vLyBXSU5ET1cgVklFV1BPUlRcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9nZXRWaWV3cG9ydCgpXG57XG5cdHJldHVybiB7XG5cdFx0c2NlbmU6IF9Ccm93c2VyX2dldFNjZW5lKCksXG5cdFx0dmlld3BvcnQ6IHtcblx0XHRcdHg6IF9Ccm93c2VyX3dpbmRvdy5wYWdlWE9mZnNldCxcblx0XHRcdHk6IF9Ccm93c2VyX3dpbmRvdy5wYWdlWU9mZnNldCxcblx0XHRcdHdpZHRoOiBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0aGVpZ2h0OiBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gX0Jyb3dzZXJfZ2V0U2NlbmUoKVxue1xuXHR2YXIgYm9keSA9IF9Ccm93c2VyX2RvYy5ib2R5O1xuXHR2YXIgZWxlbSA9IF9Ccm93c2VyX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IE1hdGgubWF4KGJvZHkuc2Nyb2xsV2lkdGgsIGJvZHkub2Zmc2V0V2lkdGgsIGVsZW0uc2Nyb2xsV2lkdGgsIGVsZW0ub2Zmc2V0V2lkdGgsIGVsZW0uY2xpZW50V2lkdGgpLFxuXHRcdGhlaWdodDogTWF0aC5tYXgoYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBlbGVtLnNjcm9sbEhlaWdodCwgZWxlbS5vZmZzZXRIZWlnaHQsIGVsZW0uY2xpZW50SGVpZ2h0KVxuXHR9O1xufVxuXG52YXIgX0Jyb3dzZXJfc2V0Vmlld3BvcnQgPSBGMihmdW5jdGlvbih4LCB5KVxue1xuXHRyZXR1cm4gX0Jyb3dzZXJfd2l0aFdpbmRvdyhmdW5jdGlvbigpXG5cdHtcblx0XHRfQnJvd3Nlcl93aW5kb3cuc2Nyb2xsKHgsIHkpO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gRUxFTUVOVCBWSUVXUE9SVFxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldFZpZXdwb3J0T2YoaWQpXG57XG5cdHJldHVybiBfQnJvd3Nlcl93aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSlcblx0e1xuXHRcdHJldHVybiB7XG5cdFx0XHRzY2VuZToge1xuXHRcdFx0XHR3aWR0aDogbm9kZS5zY3JvbGxXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBub2RlLnNjcm9sbEhlaWdodFxuXHRcdFx0fSxcblx0XHRcdHZpZXdwb3J0OiB7XG5cdFx0XHRcdHg6IG5vZGUuc2Nyb2xsTGVmdCxcblx0XHRcdFx0eTogbm9kZS5zY3JvbGxUb3AsXG5cdFx0XHRcdHdpZHRoOiBub2RlLmNsaWVudFdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IG5vZGUuY2xpZW50SGVpZ2h0XG5cdFx0XHR9XG5cdFx0fTtcblx0fSk7XG59XG5cblxudmFyIF9Ccm93c2VyX3NldFZpZXdwb3J0T2YgPSBGMyhmdW5jdGlvbihpZCwgeCwgeSlcbntcblx0cmV0dXJuIF9Ccm93c2VyX3dpdGhOb2RlKGlkLCBmdW5jdGlvbihub2RlKVxuXHR7XG5cdFx0bm9kZS5zY3JvbGxMZWZ0ID0geDtcblx0XHRub2RlLnNjcm9sbFRvcCA9IHk7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTA7XG5cdH0pO1xufSk7XG5cblxuXG4vLyBFTEVNRU5UXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfZ2V0RWxlbWVudChpZClcbntcblx0cmV0dXJuIF9Ccm93c2VyX3dpdGhOb2RlKGlkLCBmdW5jdGlvbihub2RlKVxuXHR7XG5cdFx0dmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciB4ID0gX0Jyb3dzZXJfd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHRcdHZhciB5ID0gX0Jyb3dzZXJfd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdHJldHVybiB7XG5cdFx0XHRzY2VuZTogX0Jyb3dzZXJfZ2V0U2NlbmUoKSxcblx0XHRcdHZpZXdwb3J0OiB7XG5cdFx0XHRcdHg6IHgsXG5cdFx0XHRcdHk6IHksXG5cdFx0XHRcdHdpZHRoOiBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IF9Ccm93c2VyX2RvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0XHR9LFxuXHRcdFx0ZWxlbWVudDoge1xuXHRcdFx0XHR4OiB4ICsgcmVjdC5sZWZ0LFxuXHRcdFx0XHR5OiB5ICsgcmVjdC50b3AsXG5cdFx0XHRcdHdpZHRoOiByZWN0LndpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IHJlY3QuaGVpZ2h0XG5cdFx0XHR9XG5cdFx0fTtcblx0fSk7XG59XG5cblxuXG4vLyBMT0FEIGFuZCBSRUxPQURcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9yZWxvYWQoc2tpcENhY2hlKVxue1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkVGFzayRwZXJmb3JtLCBlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX2RvYy5sb2NhdGlvbi5yZWxvYWQoc2tpcENhY2hlKTtcblx0fSkpO1xufVxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9sb2FkKHVybClcbntcblx0cmV0dXJuIEEyKGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHR0cnlcblx0XHR7XG5cdFx0XHRfQnJvd3Nlcl93aW5kb3cubG9jYXRpb24gPSB1cmw7XG5cdFx0fVxuXHRcdGNhdGNoKGVycilcblx0XHR7XG5cdFx0XHQvLyBPbmx5IEZpcmVmb3ggY2FuIHRocm93IGEgTlNfRVJST1JfTUFMRk9STUVEX1VSSSBleGNlcHRpb24gaGVyZS5cblx0XHRcdC8vIE90aGVyIGJyb3dzZXJzIHJlbG9hZCB0aGUgcGFnZSwgc28gbGV0J3MgYmUgY29uc2lzdGVudCBhYm91dCB0aGF0LlxuXHRcdFx0X1ZpcnR1YWxEb21fZG9jLmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XG5cdFx0fVxuXHR9KSk7XG59XG52YXIgYXV0aG9yJHByb2plY3QkQ29udGV4dCRDb250ZXh0ID0gZnVuY3Rpb24gKHVybCkge1xuXHRyZXR1cm4ge3VybDogdXJsfTtcbn07XG52YXIgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yID0gMzI7XG52YXIgZWxtJGNvcmUkQXJyYXkkQXJyYXlfZWxtX2J1aWx0aW4gPSBGNChcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4geyQ6ICdBcnJheV9lbG1fYnVpbHRpbicsIGE6IGEsIGI6IGIsIGM6IGMsIGQ6IGR9O1xuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkRVEgPSB7JDogJ0VRJ307XG52YXIgZWxtJGNvcmUkQmFzaWNzJEdUID0geyQ6ICdHVCd9O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRMVCA9IHskOiAnTFQnfTtcbnZhciBlbG0kY29yZSREaWN0JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBhY2MsIHQpIHtcblx0XHRmb2xkcjpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKHQuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIga2V5ID0gdC5iO1xuXHRcdFx0XHR2YXIgdmFsdWUgPSB0LmM7XG5cdFx0XHRcdHZhciBsZWZ0ID0gdC5kO1xuXHRcdFx0XHR2YXIgcmlnaHQgPSB0LmU7XG5cdFx0XHRcdHZhciAkdGVtcCRmdW5jID0gZnVuYyxcblx0XHRcdFx0XHQkdGVtcCRhY2MgPSBBMyhcblx0XHRcdFx0XHRmdW5jLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRBMyhlbG0kY29yZSREaWN0JGZvbGRyLCBmdW5jLCBhY2MsIHJpZ2h0KSksXG5cdFx0XHRcdFx0JHRlbXAkdCA9IGxlZnQ7XG5cdFx0XHRcdGZ1bmMgPSAkdGVtcCRmdW5jO1xuXHRcdFx0XHRhY2MgPSAkdGVtcCRhY2M7XG5cdFx0XHRcdHQgPSAkdGVtcCR0O1xuXHRcdFx0XHRjb250aW51ZSBmb2xkcjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJExpc3QkY29ucyA9IF9MaXN0X2NvbnM7XG52YXIgZWxtJGNvcmUkRGljdCR0b0xpc3QgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTMoXG5cdFx0ZWxtJGNvcmUkRGljdCRmb2xkcixcblx0XHRGMyhcblx0XHRcdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBsaXN0KSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0X1V0aWxzX1R1cGxlMihrZXksIHZhbHVlKSxcblx0XHRcdFx0XHRsaXN0KTtcblx0XHRcdH0pLFxuXHRcdF9MaXN0X05pbCxcblx0XHRkaWN0KTtcbn07XG52YXIgZWxtJGNvcmUkRGljdCRrZXlzID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIEEzKFxuXHRcdGVsbSRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwga2V5TGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkTGlzdCRjb25zLCBrZXksIGtleUxpc3QpO1xuXHRcdFx0fSksXG5cdFx0X0xpc3RfTmlsLFxuXHRcdGRpY3QpO1xufTtcbnZhciBlbG0kY29yZSRTZXQkdG9MaXN0ID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgZGljdCA9IF9uMC5hO1xuXHRyZXR1cm4gZWxtJGNvcmUkRGljdCRrZXlzKGRpY3QpO1xufTtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkciA9IF9Kc0FycmF5X2ZvbGRyO1xudmFyIGVsbSRjb3JlJEFycmF5JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBiYXNlQ2FzZSwgX24wKSB7XG5cdFx0dmFyIHRyZWUgPSBfbjAuYztcblx0XHR2YXIgdGFpbCA9IF9uMC5kO1xuXHRcdHZhciBoZWxwZXIgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChub2RlLCBhY2MpIHtcblx0XHRcdFx0aWYgKG5vZGUuJCA9PT0gJ1N1YlRyZWUnKSB7XG5cdFx0XHRcdFx0dmFyIHN1YlRyZWUgPSBub2RlLmE7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRyLCBoZWxwZXIsIGFjYywgc3ViVHJlZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlcyA9IG5vZGUuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZHIsIGZ1bmMsIGFjYywgdmFsdWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZHIsXG5cdFx0XHRoZWxwZXIsXG5cdFx0XHRBMyhlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkciwgZnVuYywgYmFzZUNhc2UsIHRhaWwpLFxuXHRcdFx0dHJlZSk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJEFycmF5JHRvTGlzdCA9IGZ1bmN0aW9uIChhcnJheSkge1xuXHRyZXR1cm4gQTMoZWxtJGNvcmUkQXJyYXkkZm9sZHIsIGVsbSRjb3JlJExpc3QkY29ucywgX0xpc3RfTmlsLCBhcnJheSk7XG59O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRjZWlsaW5nID0gX0Jhc2ljc19jZWlsaW5nO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRmZGl2ID0gX0Jhc2ljc19mZGl2O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRsb2dCYXNlID0gRjIoXG5cdGZ1bmN0aW9uIChiYXNlLCBudW1iZXIpIHtcblx0XHRyZXR1cm4gX0Jhc2ljc19sb2cobnVtYmVyKSAvIF9CYXNpY3NfbG9nKGJhc2UpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkdG9GbG9hdCA9IF9CYXNpY3NfdG9GbG9hdDtcbnZhciBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAgPSBlbG0kY29yZSRCYXNpY3MkY2VpbGluZyhcblx0QTIoZWxtJGNvcmUkQmFzaWNzJGxvZ0Jhc2UsIDIsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvcikpO1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5ID0gX0pzQXJyYXlfZW1wdHk7XG52YXIgZWxtJGNvcmUkQXJyYXkkZW1wdHkgPSBBNChlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbiwgMCwgZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLCBlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSwgZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHkpO1xudmFyIGVsbSRjb3JlJEFycmF5JExlYWYgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdMZWFmJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEFycmF5JFN1YlRyZWUgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdTdWJUcmVlJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemVGcm9tTGlzdCA9IF9Kc0FycmF5X2luaXRpYWxpemVGcm9tTGlzdDtcbnZhciBlbG0kY29yZSRMaXN0JGZvbGRsID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBhY2MsIGxpc3QpIHtcblx0XHRmb2xkbDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKCFsaXN0LmIpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB4ID0gbGlzdC5hO1xuXHRcdFx0XHR2YXIgeHMgPSBsaXN0LmI7XG5cdFx0XHRcdHZhciAkdGVtcCRmdW5jID0gZnVuYyxcblx0XHRcdFx0XHQkdGVtcCRhY2MgPSBBMihmdW5jLCB4LCBhY2MpLFxuXHRcdFx0XHRcdCR0ZW1wJGxpc3QgPSB4cztcblx0XHRcdFx0ZnVuYyA9ICR0ZW1wJGZ1bmM7XG5cdFx0XHRcdGFjYyA9ICR0ZW1wJGFjYztcblx0XHRcdFx0bGlzdCA9ICR0ZW1wJGxpc3Q7XG5cdFx0XHRcdGNvbnRpbnVlIGZvbGRsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRyZXZlcnNlID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0cmV0dXJuIEEzKGVsbSRjb3JlJExpc3QkZm9sZGwsIGVsbSRjb3JlJExpc3QkY29ucywgX0xpc3RfTmlsLCBsaXN0KTtcbn07XG52YXIgZWxtJGNvcmUkQXJyYXkkY29tcHJlc3NOb2RlcyA9IEYyKFxuXHRmdW5jdGlvbiAobm9kZXMsIGFjYykge1xuXHRcdGNvbXByZXNzTm9kZXM6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBfbjAgPSBBMihlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplRnJvbUxpc3QsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvciwgbm9kZXMpO1xuXHRcdFx0dmFyIG5vZGUgPSBfbjAuYTtcblx0XHRcdHZhciByZW1haW5pbmdOb2RlcyA9IF9uMC5iO1xuXHRcdFx0dmFyIG5ld0FjYyA9IEEyKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdGVsbSRjb3JlJEFycmF5JFN1YlRyZWUobm9kZSksXG5cdFx0XHRcdGFjYyk7XG5cdFx0XHRpZiAoIXJlbWFpbmluZ05vZGVzLmIpIHtcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJExpc3QkcmV2ZXJzZShuZXdBY2MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyICR0ZW1wJG5vZGVzID0gcmVtYWluaW5nTm9kZXMsXG5cdFx0XHRcdFx0JHRlbXAkYWNjID0gbmV3QWNjO1xuXHRcdFx0XHRub2RlcyA9ICR0ZW1wJG5vZGVzO1xuXHRcdFx0XHRhY2MgPSAkdGVtcCRhY2M7XG5cdFx0XHRcdGNvbnRpbnVlIGNvbXByZXNzTm9kZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkYXBSID0gRjIoXG5cdGZ1bmN0aW9uICh4LCBmKSB7XG5cdFx0cmV0dXJuIGYoeCk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRlcSA9IF9VdGlsc19lcXVhbDtcbnZhciBlbG0kY29yZSRUdXBsZSRmaXJzdCA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHggPSBfbjAuYTtcblx0cmV0dXJuIHg7XG59O1xudmFyIGVsbSRjb3JlJEFycmF5JHRyZWVGcm9tQnVpbGRlciA9IEYyKFxuXHRmdW5jdGlvbiAobm9kZUxpc3QsIG5vZGVMaXN0U2l6ZSkge1xuXHRcdHRyZWVGcm9tQnVpbGRlcjpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIG5ld05vZGVTaXplID0gZWxtJGNvcmUkQmFzaWNzJGNlaWxpbmcobm9kZUxpc3RTaXplIC8gZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKTtcblx0XHRcdGlmIChuZXdOb2RlU2l6ZSA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZUZyb21MaXN0LCBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsIG5vZGVMaXN0KS5hO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyICR0ZW1wJG5vZGVMaXN0ID0gQTIoZWxtJGNvcmUkQXJyYXkkY29tcHJlc3NOb2Rlcywgbm9kZUxpc3QsIF9MaXN0X05pbCksXG5cdFx0XHRcdFx0JHRlbXAkbm9kZUxpc3RTaXplID0gbmV3Tm9kZVNpemU7XG5cdFx0XHRcdG5vZGVMaXN0ID0gJHRlbXAkbm9kZUxpc3Q7XG5cdFx0XHRcdG5vZGVMaXN0U2l6ZSA9ICR0ZW1wJG5vZGVMaXN0U2l6ZTtcblx0XHRcdFx0Y29udGludWUgdHJlZUZyb21CdWlsZGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGFkZCA9IF9CYXNpY3NfYWRkO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRhcEwgPSBGMihcblx0ZnVuY3Rpb24gKGYsIHgpIHtcblx0XHRyZXR1cm4gZih4KTtcblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGZsb29yID0gX0Jhc2ljc19mbG9vcjtcbnZhciBlbG0kY29yZSRCYXNpY3MkZ3QgPSBfVXRpbHNfZ3Q7XG52YXIgZWxtJGNvcmUkQmFzaWNzJG1heCA9IEYyKFxuXHRmdW5jdGlvbiAoeCwgeSkge1xuXHRcdHJldHVybiAoX1V0aWxzX2NtcCh4LCB5KSA+IDApID8geCA6IHk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRtdWwgPSBfQmFzaWNzX211bDtcbnZhciBlbG0kY29yZSRCYXNpY3Mkc3ViID0gX0Jhc2ljc19zdWI7XG52YXIgZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoID0gX0pzQXJyYXlfbGVuZ3RoO1xudmFyIGVsbSRjb3JlJEFycmF5JGJ1aWxkZXJUb0FycmF5ID0gRjIoXG5cdGZ1bmN0aW9uIChyZXZlcnNlTm9kZUxpc3QsIGJ1aWxkZXIpIHtcblx0XHRpZiAoIWJ1aWxkZXIubm9kZUxpc3RTaXplKSB7XG5cdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLFxuXHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgoYnVpbGRlci50YWlsKSxcblx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLFxuXHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSxcblx0XHRcdFx0YnVpbGRlci50YWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHRyZWVMZW4gPSBidWlsZGVyLm5vZGVMaXN0U2l6ZSAqIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvcjtcblx0XHRcdHZhciBkZXB0aCA9IGVsbSRjb3JlJEJhc2ljcyRmbG9vcihcblx0XHRcdFx0QTIoZWxtJGNvcmUkQmFzaWNzJGxvZ0Jhc2UsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvciwgdHJlZUxlbiAtIDEpKTtcblx0XHRcdHZhciBjb3JyZWN0Tm9kZUxpc3QgPSByZXZlcnNlTm9kZUxpc3QgPyBlbG0kY29yZSRMaXN0JHJldmVyc2UoYnVpbGRlci5ub2RlTGlzdCkgOiBidWlsZGVyLm5vZGVMaXN0O1xuXHRcdFx0dmFyIHRyZWUgPSBBMihlbG0kY29yZSRBcnJheSR0cmVlRnJvbUJ1aWxkZXIsIGNvcnJlY3ROb2RlTGlzdCwgYnVpbGRlci5ub2RlTGlzdFNpemUpO1xuXHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbixcblx0XHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKGJ1aWxkZXIudGFpbCkgKyB0cmVlTGVuLFxuXHRcdFx0XHRBMihlbG0kY29yZSRCYXNpY3MkbWF4LCA1LCBkZXB0aCAqIGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCksXG5cdFx0XHRcdHRyZWUsXG5cdFx0XHRcdGJ1aWxkZXIudGFpbCk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkRmFsc2UgPSB7JDogJ0ZhbHNlJ307XG52YXIgZWxtJGNvcmUkQmFzaWNzJGlkaXYgPSBfQmFzaWNzX2lkaXY7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGx0ID0gX1V0aWxzX2x0O1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemUgPSBfSnNBcnJheV9pbml0aWFsaXplO1xudmFyIGVsbSRjb3JlJEFycmF5JGluaXRpYWxpemVIZWxwID0gRjUoXG5cdGZ1bmN0aW9uIChmbiwgZnJvbUluZGV4LCBsZW4sIG5vZGVMaXN0LCB0YWlsKSB7XG5cdFx0aW5pdGlhbGl6ZUhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChmcm9tSW5kZXggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kY29yZSRBcnJheSRidWlsZGVyVG9BcnJheSxcblx0XHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0XHR7bm9kZUxpc3Q6IG5vZGVMaXN0LCBub2RlTGlzdFNpemU6IChsZW4gLyBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IpIHwgMCwgdGFpbDogdGFpbH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGxlYWYgPSBlbG0kY29yZSRBcnJheSRMZWFmKFxuXHRcdFx0XHRcdEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemUsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvciwgZnJvbUluZGV4LCBmbikpO1xuXHRcdFx0XHR2YXIgJHRlbXAkZm4gPSBmbixcblx0XHRcdFx0XHQkdGVtcCRmcm9tSW5kZXggPSBmcm9tSW5kZXggLSBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsXG5cdFx0XHRcdFx0JHRlbXAkbGVuID0gbGVuLFxuXHRcdFx0XHRcdCR0ZW1wJG5vZGVMaXN0ID0gQTIoZWxtJGNvcmUkTGlzdCRjb25zLCBsZWFmLCBub2RlTGlzdCksXG5cdFx0XHRcdFx0JHRlbXAkdGFpbCA9IHRhaWw7XG5cdFx0XHRcdGZuID0gJHRlbXAkZm47XG5cdFx0XHRcdGZyb21JbmRleCA9ICR0ZW1wJGZyb21JbmRleDtcblx0XHRcdFx0bGVuID0gJHRlbXAkbGVuO1xuXHRcdFx0XHRub2RlTGlzdCA9ICR0ZW1wJG5vZGVMaXN0O1xuXHRcdFx0XHR0YWlsID0gJHRlbXAkdGFpbDtcblx0XHRcdFx0Y29udGludWUgaW5pdGlhbGl6ZUhlbHA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkbGUgPSBfVXRpbHNfbGU7XG52YXIgZWxtJGNvcmUkQmFzaWNzJHJlbWFpbmRlckJ5ID0gX0Jhc2ljc19yZW1haW5kZXJCeTtcbnZhciBlbG0kY29yZSRBcnJheSRpbml0aWFsaXplID0gRjIoXG5cdGZ1bmN0aW9uIChsZW4sIGZuKSB7XG5cdFx0aWYgKGxlbiA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkQXJyYXkkZW1wdHk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB0YWlsTGVuID0gbGVuICUgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yO1xuXHRcdFx0dmFyIHRhaWwgPSBBMyhlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplLCB0YWlsTGVuLCBsZW4gLSB0YWlsTGVuLCBmbik7XG5cdFx0XHR2YXIgaW5pdGlhbEZyb21JbmRleCA9IChsZW4gLSB0YWlsTGVuKSAtIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvcjtcblx0XHRcdHJldHVybiBBNShlbG0kY29yZSRBcnJheSRpbml0aWFsaXplSGVscCwgZm4sIGluaXRpYWxGcm9tSW5kZXgsIGxlbiwgX0xpc3RfTmlsLCB0YWlsKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJE1heWJlJEp1c3QgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdKdXN0JywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJE1heWJlJE5vdGhpbmcgPSB7JDogJ05vdGhpbmcnfTtcbnZhciBlbG0kY29yZSRSZXN1bHQkRXJyID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRXJyJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJFJlc3VsdCRPayA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ09rJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRUcnVlID0geyQ6ICdUcnVlJ307XG52YXIgZWxtJGNvcmUkUmVzdWx0JGlzT2sgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdGlmIChyZXN1bHQuJCA9PT0gJ09rJykge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRGYWlsdXJlID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRmFpbHVyZScsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRGaWVsZCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0ZpZWxkJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJEluZGV4ID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnSW5kZXgnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkT25lT2YgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdPbmVPZicsIGE6IGF9O1xufTtcbnZhciBlbG0kY29yZSRCYXNpY3MkYW5kID0gX0Jhc2ljc19hbmQ7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGFwcGVuZCA9IF9VdGlsc19hcHBlbmQ7XG52YXIgZWxtJGNvcmUkQmFzaWNzJG9yID0gX0Jhc2ljc19vcjtcbnZhciBlbG0kY29yZSRDaGFyJHRvQ29kZSA9IF9DaGFyX3RvQ29kZTtcbnZhciBlbG0kY29yZSRDaGFyJGlzTG93ZXIgPSBmdW5jdGlvbiAoX2NoYXIpIHtcblx0dmFyIGNvZGUgPSBlbG0kY29yZSRDaGFyJHRvQ29kZShfY2hhcik7XG5cdHJldHVybiAoOTcgPD0gY29kZSkgJiYgKGNvZGUgPD0gMTIyKTtcbn07XG52YXIgZWxtJGNvcmUkQ2hhciRpc1VwcGVyID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHZhciBjb2RlID0gZWxtJGNvcmUkQ2hhciR0b0NvZGUoX2NoYXIpO1xuXHRyZXR1cm4gKGNvZGUgPD0gOTApICYmICg2NSA8PSBjb2RlKTtcbn07XG52YXIgZWxtJGNvcmUkQ2hhciRpc0FscGhhID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHJldHVybiBlbG0kY29yZSRDaGFyJGlzTG93ZXIoX2NoYXIpIHx8IGVsbSRjb3JlJENoYXIkaXNVcHBlcihfY2hhcik7XG59O1xudmFyIGVsbSRjb3JlJENoYXIkaXNEaWdpdCA9IGZ1bmN0aW9uIChfY2hhcikge1xuXHR2YXIgY29kZSA9IGVsbSRjb3JlJENoYXIkdG9Db2RlKF9jaGFyKTtcblx0cmV0dXJuIChjb2RlIDw9IDU3KSAmJiAoNDggPD0gY29kZSk7XG59O1xudmFyIGVsbSRjb3JlJENoYXIkaXNBbHBoYU51bSA9IGZ1bmN0aW9uIChfY2hhcikge1xuXHRyZXR1cm4gZWxtJGNvcmUkQ2hhciRpc0xvd2VyKF9jaGFyKSB8fCAoZWxtJGNvcmUkQ2hhciRpc1VwcGVyKF9jaGFyKSB8fCBlbG0kY29yZSRDaGFyJGlzRGlnaXQoX2NoYXIpKTtcbn07XG52YXIgZWxtJGNvcmUkTGlzdCRsZW5ndGggPSBmdW5jdGlvbiAoeHMpIHtcblx0cmV0dXJuIEEzKFxuXHRcdGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0RjIoXG5cdFx0XHRmdW5jdGlvbiAoX24wLCBpKSB7XG5cdFx0XHRcdHJldHVybiBpICsgMTtcblx0XHRcdH0pLFxuXHRcdDAsXG5cdFx0eHMpO1xufTtcbnZhciBlbG0kY29yZSRMaXN0JG1hcDIgPSBfTGlzdF9tYXAyO1xudmFyIGVsbSRjb3JlJExpc3QkcmFuZ2VIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChsbywgaGksIGxpc3QpIHtcblx0XHRyYW5nZUhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChfVXRpbHNfY21wKGxvLCBoaSkgPCAxKSB7XG5cdFx0XHRcdHZhciAkdGVtcCRsbyA9IGxvLFxuXHRcdFx0XHRcdCR0ZW1wJGhpID0gaGkgLSAxLFxuXHRcdFx0XHRcdCR0ZW1wJGxpc3QgPSBBMihlbG0kY29yZSRMaXN0JGNvbnMsIGhpLCBsaXN0KTtcblx0XHRcdFx0bG8gPSAkdGVtcCRsbztcblx0XHRcdFx0aGkgPSAkdGVtcCRoaTtcblx0XHRcdFx0bGlzdCA9ICR0ZW1wJGxpc3Q7XG5cdFx0XHRcdGNvbnRpbnVlIHJhbmdlSGVscDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRyYW5nZSA9IEYyKFxuXHRmdW5jdGlvbiAobG8sIGhpKSB7XG5cdFx0cmV0dXJuIEEzKGVsbSRjb3JlJExpc3QkcmFuZ2VIZWxwLCBsbywgaGksIF9MaXN0X05pbCk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgeHMpIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRlbG0kY29yZSRMaXN0JG1hcDIsXG5cdFx0XHRmLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkcmFuZ2UsXG5cdFx0XHRcdDAsXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkbGVuZ3RoKHhzKSAtIDEpLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRTdHJpbmckYWxsID0gX1N0cmluZ19hbGw7XG52YXIgZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQgPSBfU3RyaW5nX2Zyb21OdW1iZXI7XG52YXIgZWxtJGNvcmUkU3RyaW5nJGpvaW4gPSBGMihcblx0ZnVuY3Rpb24gKHNlcCwgY2h1bmtzKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X1N0cmluZ19qb2luLFxuXHRcdFx0c2VwLFxuXHRcdFx0X0xpc3RfdG9BcnJheShjaHVua3MpKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkU3RyaW5nJHVuY29ucyA9IF9TdHJpbmdfdW5jb25zO1xudmFyIGVsbSRjb3JlJFN0cmluZyRzcGxpdCA9IEYyKFxuXHRmdW5jdGlvbiAoc2VwLCBzdHJpbmcpIHtcblx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0QTIoX1N0cmluZ19zcGxpdCwgc2VwLCBzdHJpbmcpKTtcblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkaW5kZW50ID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0J1xcbiAgICAnLFxuXHRcdEEyKGVsbSRjb3JlJFN0cmluZyRzcGxpdCwgJ1xcbicsIHN0cikpO1xufTtcbnZhciBlbG0kanNvbiRKc29uJEVuY29kZSRlbmNvZGUgPSBfSnNvbl9lbmNvZGU7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JPbmVPZiA9IEYyKFxuXHRmdW5jdGlvbiAoaSwgZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1xcblxcbignICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KGkgKyAxKSArICgnKSAnICsgZWxtJGpzb24kSnNvbiREZWNvZGUkaW5kZW50KFxuXHRcdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JUb1N0cmluZyhlcnJvcikpKSk7XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmcgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0cmV0dXJuIEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmdIZWxwLCBlcnJvciwgX0xpc3RfTmlsKTtcbn07XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JUb1N0cmluZ0hlbHAgPSBGMihcblx0ZnVuY3Rpb24gKGVycm9yLCBjb250ZXh0KSB7XG5cdFx0ZXJyb3JUb1N0cmluZ0hlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHN3aXRjaCAoZXJyb3IuJCkge1xuXHRcdFx0XHRjYXNlICdGaWVsZCc6XG5cdFx0XHRcdFx0dmFyIGYgPSBlcnJvci5hO1xuXHRcdFx0XHRcdHZhciBlcnIgPSBlcnJvci5iO1xuXHRcdFx0XHRcdHZhciBpc1NpbXBsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHZhciBfbjEgPSBlbG0kY29yZSRTdHJpbmckdW5jb25zKGYpO1xuXHRcdFx0XHRcdFx0aWYgKF9uMS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIF9uMiA9IF9uMS5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgX2NoYXIgPSBfbjIuYTtcblx0XHRcdFx0XHRcdFx0dmFyIHJlc3QgPSBfbjIuYjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJENoYXIkaXNBbHBoYShfY2hhcikgJiYgQTIoZWxtJGNvcmUkU3RyaW5nJGFsbCwgZWxtJGNvcmUkQ2hhciRpc0FscGhhTnVtLCByZXN0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0dmFyIGZpZWxkTmFtZSA9IGlzU2ltcGxlID8gKCcuJyArIGYpIDogKCdbXFwnJyArIChmICsgJ1xcJ10nKSk7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJGVycm9yID0gZXJyLFxuXHRcdFx0XHRcdFx0JHRlbXAkY29udGV4dCA9IEEyKGVsbSRjb3JlJExpc3QkY29ucywgZmllbGROYW1lLCBjb250ZXh0KTtcblx0XHRcdFx0XHRlcnJvciA9ICR0ZW1wJGVycm9yO1xuXHRcdFx0XHRcdGNvbnRleHQgPSAkdGVtcCRjb250ZXh0O1xuXHRcdFx0XHRcdGNvbnRpbnVlIGVycm9yVG9TdHJpbmdIZWxwO1xuXHRcdFx0XHRjYXNlICdJbmRleCc6XG5cdFx0XHRcdFx0dmFyIGkgPSBlcnJvci5hO1xuXHRcdFx0XHRcdHZhciBlcnIgPSBlcnJvci5iO1xuXHRcdFx0XHRcdHZhciBpbmRleE5hbWUgPSAnWycgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaSkgKyAnXScpO1xuXHRcdFx0XHRcdHZhciAkdGVtcCRlcnJvciA9IGVycixcblx0XHRcdFx0XHRcdCR0ZW1wJGNvbnRleHQgPSBBMihlbG0kY29yZSRMaXN0JGNvbnMsIGluZGV4TmFtZSwgY29udGV4dCk7XG5cdFx0XHRcdFx0ZXJyb3IgPSAkdGVtcCRlcnJvcjtcblx0XHRcdFx0XHRjb250ZXh0ID0gJHRlbXAkY29udGV4dDtcblx0XHRcdFx0XHRjb250aW51ZSBlcnJvclRvU3RyaW5nSGVscDtcblx0XHRcdFx0Y2FzZSAnT25lT2YnOlxuXHRcdFx0XHRcdHZhciBlcnJvcnMgPSBlcnJvci5hO1xuXHRcdFx0XHRcdGlmICghZXJyb3JzLmIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnUmFuIGludG8gYSBKc29uLkRlY29kZS5vbmVPZiB3aXRoIG5vIHBvc3NpYmlsaXRpZXMnICsgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIWNvbnRleHQuYikge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAnISc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICcgYXQganNvbicgKyBBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHRcdFx0JycsXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JHJldmVyc2UoY29udGV4dCkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICghZXJyb3JzLmIuYikge1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyID0gZXJyb3JzLmE7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRlcnJvciA9IGVycixcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjb250ZXh0ID0gY29udGV4dDtcblx0XHRcdFx0XHRcdFx0ZXJyb3IgPSAkdGVtcCRlcnJvcjtcblx0XHRcdFx0XHRcdFx0Y29udGV4dCA9ICR0ZW1wJGNvbnRleHQ7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGVycm9yVG9TdHJpbmdIZWxwO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIHN0YXJ0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFjb250ZXh0LmIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAnSnNvbi5EZWNvZGUub25lT2YnO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJ1RoZSBKc29uLkRlY29kZS5vbmVPZiBhdCBqc29uJyArIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0JycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkcmV2ZXJzZShjb250ZXh0KSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBzdGFydGVyICsgKCcgZmFpbGVkIGluIHRoZSBmb2xsb3dpbmcgJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGxlbmd0aChlcnJvcnMpKSArICcgd2F5czonKSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHQnXFxuXFxuJyxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdGludHJvZHVjdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCwgZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JPbmVPZiwgZXJyb3JzKSkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR2YXIgbXNnID0gZXJyb3IuYTtcblx0XHRcdFx0XHR2YXIganNvbiA9IGVycm9yLmI7XG5cdFx0XHRcdFx0dmFyIGludHJvZHVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmICghY29udGV4dC5iKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAnUHJvYmxlbSB3aXRoIHRoZSBnaXZlbiB2YWx1ZTpcXG5cXG4nO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdQcm9ibGVtIHdpdGggdGhlIHZhbHVlIGF0IGpzb24nICsgKEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHRcdCcnLFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkcmV2ZXJzZShjb250ZXh0KSkgKyAnOlxcblxcbiAgICAnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGludHJvZHVjdGlvbiArIChlbG0kanNvbiRKc29uJERlY29kZSRpbmRlbnQoXG5cdFx0XHRcdFx0XHRBMihlbG0kanNvbiRKc29uJEVuY29kZSRlbmNvZGUsIDQsIGpzb24pKSArICgnXFxuXFxuJyArIG1zZykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQgPSBfSnNvbl9kZWNvZGVGaWVsZDtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRtYXAgPSBfSnNvbl9tYXAxO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZyA9IF9Kc29uX2RlY29kZVN0cmluZztcbnZhciBhdXRob3IkcHJvamVjdCRDb250ZXh0JGRlY29kZXIgPSBBMihcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwLFxuXHRhdXRob3IkcHJvamVjdCRDb250ZXh0JENvbnRleHQsXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAndXJsJywgZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSk7XG52YXIgYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJEVycm9yID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRXJyb3InLCBhOiBhfTtcbn07XG52YXIgYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJFBhZ2VNb2RlbCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1BhZ2VNb2RlbCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBhdXRob3IkcHJvamVjdCRJbmRleFBhZ2UkU3VjY2VzcyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1N1Y2Nlc3MnLCBhOiBhfTtcbn07XG52YXIgYXV0aG9yJHByb2plY3QkSWQkSWQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdJZCcsIGE6IGF9O1xufTtcbnZhciBlbG0kY29yZSRCYXNpY3MkaWRlbnRpdHkgPSBmdW5jdGlvbiAoeCkge1xuXHRyZXR1cm4geDtcbn07XG52YXIgYXV0aG9yJHByb2plY3QkSWQkbW9jayA9IGF1dGhvciRwcm9qZWN0JElkJElkKCcxMjM0NTYnKTtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJEFjdGl2ZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0FjdGl2ZScsIGE6IGF9O1xufTtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJEluYWN0aXZlID0geyQ6ICdJbmFjdGl2ZSd9O1xudmFyIGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkVGhlUHJvY2VzcyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1RoZVByb2Nlc3MnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJHRpbWUkVGltZSRQb3NpeCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1Bvc2l4JywgYTogYX07XG59O1xudmFyIGVsbSR0aW1lJFRpbWUkbWlsbGlzVG9Qb3NpeCA9IGVsbSR0aW1lJFRpbWUkUG9zaXg7XG52YXIgYXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRtb2NrID0gX0xpc3RfZnJvbUFycmF5KFxuXHRbXG5cdFx0QTIoXG5cdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRUaGVQcm9jZXNzLFxuXHRcdHtcblx0XHRcdGNvbXBsZXRpb25zOiAxMixcblx0XHRcdGNyZWF0ZWRBdDogZWxtJHRpbWUkVGltZSRtaWxsaXNUb1Bvc2l4KDE1NjU5ODQwMzU1MTQpLFxuXHRcdFx0ZGVzY3JpcHRpb246ICdXZWVrbHkgYmxvZyB1cGRhdGUgZm9yIE1lZ2FNYWtlciBDb21tdW5pdHkgYXJ0aWNsZS4gRG9uZSBvbmNlIGEgd2VlayB0byBtYWtlIHN1cmUgdGhhdCBuZXcgdG9waWNzIGFyZSBjb3ZlcmVkLicsXG5cdFx0XHRpZDogYXV0aG9yJHByb2plY3QkSWQkbW9jayxcblx0XHRcdGxhc3RBY3Rpdml0eTogZWxtJHRpbWUkVGltZSRtaWxsaXNUb1Bvc2l4KDE1NjU5ODQwMzU1MTQpLFxuXHRcdFx0dGl0bGU6ICdXZWVrbHkgYmxvZyB1cGRhdGUgZm9yIE1lZ2FNYWtlciBDb21tdW5pdHkgYXJ0aWNsZSdcblx0XHR9LFxuXHRcdGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkQWN0aXZlKFxuXHRcdFx0X1V0aWxzX1R1cGxlMigxMiwgMjApKSksXG5cdFx0QTIoXG5cdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRUaGVQcm9jZXNzLFxuXHRcdHtcblx0XHRcdGNvbXBsZXRpb25zOiAxMixcblx0XHRcdGNyZWF0ZWRBdDogZWxtJHRpbWUkVGltZSRtaWxsaXNUb1Bvc2l4KDE1NjU5ODQwMzU0MTMpLFxuXHRcdFx0ZGVzY3JpcHRpb246ICdXZWVrbHkgYmxvZyB1cGRhdGUgZm9yIE1lZ2FNYWtlciBDb21tdW5pdHkgYXJ0aWNsZS4gRG9uZSBvbmNlIGEgd2VlayB0byBtYWtlIHN1cmUgdGhhdCBuZXcgdG9waWNzIGFyZSBjb3ZlcmVkLicsXG5cdFx0XHRpZDogYXV0aG9yJHByb2plY3QkSWQkbW9jayxcblx0XHRcdGxhc3RBY3Rpdml0eTogZWxtJHRpbWUkVGltZSRtaWxsaXNUb1Bvc2l4KDE1NjU5ODQwMzU1MTQpLFxuXHRcdFx0dGl0bGU6ICdXZWVrbHkgYmxvZyB1cGRhdGUgZm9yIE1lZ2FNYWtlciBDb21tdW5pdHkgYXJ0aWNsZSdcblx0XHR9LFxuXHRcdGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkSW5hY3RpdmUpLFxuXHRcdEEyKFxuXHRcdGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkVGhlUHJvY2Vzcyxcblx0XHR7XG5cdFx0XHRjb21wbGV0aW9uczogMTIsXG5cdFx0XHRjcmVhdGVkQXQ6IGVsbSR0aW1lJFRpbWUkbWlsbGlzVG9Qb3NpeCgxNTY1OTg0MDM1NTE0KSxcblx0XHRcdGRlc2NyaXB0aW9uOiAnV2Vla2x5IGJsb2cgdXBkYXRlIGZvciBNZWdhTWFrZXIgQ29tbXVuaXR5IGFydGljbGUuIERvbmUgb25jZSBhIHdlZWsgdG8gbWFrZSBzdXJlIHRoYXQgbmV3IHRvcGljcyBhcmUgY292ZXJlZC4nLFxuXHRcdFx0aWQ6IGF1dGhvciRwcm9qZWN0JElkJG1vY2ssXG5cdFx0XHRsYXN0QWN0aXZpdHk6IGVsbSR0aW1lJFRpbWUkbWlsbGlzVG9Qb3NpeCgxNTY1OTg0MDM1NTE0KSxcblx0XHRcdHRpdGxlOiAnV2Vla2x5IGJsb2cgdXBkYXRlIGZvciBNZWdhTWFrZXIgQ29tbXVuaXR5IGFydGljbGUnXG5cdFx0fSxcblx0XHRhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJEFjdGl2ZShcblx0XHRcdF9VdGlsc19UdXBsZTIoMTIsIDIwKSkpLFxuXHRcdEEyKFxuXHRcdGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkVGhlUHJvY2Vzcyxcblx0XHR7XG5cdFx0XHRjb21wbGV0aW9uczogMTIsXG5cdFx0XHRjcmVhdGVkQXQ6IGVsbSR0aW1lJFRpbWUkbWlsbGlzVG9Qb3NpeCgxNTY1OTg0MDM1NDEzKSxcblx0XHRcdGRlc2NyaXB0aW9uOiAnV2Vla2x5IGJsb2cgdXBkYXRlIGZvciBNZWdhTWFrZXIgQ29tbXVuaXR5IGFydGljbGUuIERvbmUgb25jZSBhIHdlZWsgdG8gbWFrZSBzdXJlIHRoYXQgbmV3IHRvcGljcyBhcmUgY292ZXJlZC4nLFxuXHRcdFx0aWQ6IGF1dGhvciRwcm9qZWN0JElkJG1vY2ssXG5cdFx0XHRsYXN0QWN0aXZpdHk6IGVsbSR0aW1lJFRpbWUkbWlsbGlzVG9Qb3NpeCgxNTY1OTg0MDM1NTE0KSxcblx0XHRcdHRpdGxlOiAnV2Vla2x5IGJsb2cgdXBkYXRlIGZvciBNZWdhTWFrZXIgQ29tbXVuaXR5IGFydGljbGUnXG5cdFx0fSxcblx0XHRhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJEluYWN0aXZlKVxuXHRdKTtcbnZhciBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkYmF0Y2ggPSBfUGxhdGZvcm1fYmF0Y2g7XG52YXIgZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUgPSBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkYmF0Y2goX0xpc3RfTmlsKTtcbnZhciBlbG0kY29yZSRSZXN1bHQkbWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmdW5jLCByYSkge1xuXHRcdGlmIChyYS4kID09PSAnT2snKSB7XG5cdFx0XHR2YXIgYSA9IHJhLmE7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JE9rKFxuXHRcdFx0XHRmdW5jKGEpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGUgPSByYS5hO1xuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoZSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRSZXN1bHQkd2l0aERlZmF1bHQgPSBGMihcblx0ZnVuY3Rpb24gKGRlZiwgcmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC4kID09PSAnT2snKSB7XG5cdFx0XHR2YXIgYSA9IHJlc3VsdC5hO1xuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkZWY7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRkZWNvZGVWYWx1ZSA9IF9Kc29uX3J1bjtcbnZhciBhdXRob3IkcHJvamVjdCRJbmRleFBhZ2UkaW5pdCA9IGZ1bmN0aW9uIChmbGFncykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0fShcblx0XHRBMihcblx0XHRcdGVsbSRjb3JlJFJlc3VsdCR3aXRoRGVmYXVsdCxcblx0XHRcdGF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSRFcnJvcignRmFpbGVkIHRvIHBhcnNlIGZsYWdzJyksXG5cdFx0XHRBMihcblx0XHRcdFx0ZWxtJGNvcmUkUmVzdWx0JG1hcCxcblx0XHRcdFx0ZnVuY3Rpb24gKGNvbnRleHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJFN1Y2Nlc3MoXG5cdFx0XHRcdFx0XHRBMihhdXRob3IkcHJvamVjdCRJbmRleFBhZ2UkUGFnZU1vZGVsLCBjb250ZXh0LCBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJG1vY2spKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0QTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZGVjb2RlVmFsdWUsIGF1dGhvciRwcm9qZWN0JENvbnRleHQkZGVjb2RlciwgZmxhZ3MpKSkpO1xufTtcbnZhciBlbG0kY29yZSRQbGF0Zm9ybSRTdWIkYmF0Y2ggPSBfUGxhdGZvcm1fYmF0Y2g7XG52YXIgZWxtJGNvcmUkUGxhdGZvcm0kU3ViJG5vbmUgPSBlbG0kY29yZSRQbGF0Zm9ybSRTdWIkYmF0Y2goX0xpc3RfTmlsKTtcbnZhciBhdXRob3IkcHJvamVjdCRJbmRleFBhZ2Ukc3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gZWxtJGNvcmUkUGxhdGZvcm0kU3ViJG5vbmU7XG59O1xudmFyIGF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSR1cGRhdGUgPSBGMihcblx0ZnVuY3Rpb24gKG1zZywgbW9kZWwpIHtcblx0XHRzd2l0Y2ggKG1zZy4kKSB7XG5cdFx0XHRjYXNlICdVc2VyQ2xpY2tlZENyZWF0ZVByb2Nlc3MnOlxuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0Y2FzZSAnVXNlclVwZGF0ZWRUaXRsZUZpZWxkJzpcblx0XHRcdFx0dmFyIHRpdGxlID0gbXNnLmE7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRjYXNlICdVc2VyVXBkYXRlZERlc2NyaXB0aW9uRmllbGQnOlxuXHRcdFx0XHR2YXIgZGVzY3JpcHRpb24gPSBtc2cuYTtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdGNhc2UgJ1VzZXJTYXZlZE5ld1Byb2Nlc3MnOlxuXHRcdFx0XHR2YXIgbmV3UHJvY2VzcyA9IG1zZy5hO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHR9XG5cdH0pO1xudmFyIGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBkZXNjcmlwdGlvbiA9IF9uMC5hLmRlc2NyaXB0aW9uO1xuXHRyZXR1cm4gZGVzY3JpcHRpb247XG59O1xudmFyIGF1dGhvciRwcm9qZWN0JElkJHRvU3RyaW5nID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgaWQgPSBfbjAuYTtcblx0cmV0dXJuIGlkO1xufTtcbnZhciBlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcgPSBfSnNvbl93cmFwO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcDIgPSBfSnNvbl9tYXAyO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJHN1Y2NlZWQgPSBfSnNvbl9zdWNjZWVkO1xudmFyIGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRvSGFuZGxlckludCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdHN3aXRjaCAoaGFuZGxlci4kKSB7XG5cdFx0Y2FzZSAnTm9ybWFsJzpcblx0XHRcdHJldHVybiAwO1xuXHRcdGNhc2UgJ01heVN0b3BQcm9wYWdhdGlvbic6XG5cdFx0XHRyZXR1cm4gMTtcblx0XHRjYXNlICdNYXlQcmV2ZW50RGVmYXVsdCc6XG5cdFx0XHRyZXR1cm4gMjtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIDM7XG5cdH1cbn07XG52YXIgZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5ID0gRjIoXG5cdGZ1bmN0aW9uIChrZXksIHN0cmluZykge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9WaXJ0dWFsRG9tX3Byb3BlcnR5LFxuXHRcdFx0a2V5LFxuXHRcdFx0ZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nKHN0cmluZykpO1xuXHR9KTtcbnZhciBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZiA9IGZ1bmN0aW9uICh1cmwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSxcblx0XHQnaHJlZicsXG5cdFx0X1ZpcnR1YWxEb21fbm9KYXZhU2NyaXB0VXJpKHVybCkpO1xufTtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJGdldExpbmsgPSBGMihcblx0ZnVuY3Rpb24gKHVybCwgX24wKSB7XG5cdFx0dmFyIGlkID0gX24wLmEuaWQ7XG5cdFx0cmV0dXJuIGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKFxuXHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdGF1dGhvciRwcm9qZWN0JElkJHRvU3RyaW5nKGlkKSkpO1xuXHR9KTtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJGdldFRpdGxlID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgdGl0bGUgPSBfbjAuYS50aXRsZTtcblx0cmV0dXJuIHRpdGxlO1xufTtcbnZhciBlbG0kaHRtbCRIdG1sJGRpdiA9IF9WaXJ0dWFsRG9tX25vZGUoJ2RpdicpO1xudmFyIGVsbSRodG1sJEh0bWwkcCA9IF9WaXJ0dWFsRG9tX25vZGUoJ3AnKTtcbnZhciBlbG0kaHRtbCRIdG1sJHN0cm9uZyA9IF9WaXJ0dWFsRG9tX25vZGUoJ3N0cm9uZycpO1xudmFyIGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRleHQgPSBfVmlydHVhbERvbV90ZXh0O1xudmFyIGVsbSRodG1sJEh0bWwkdGV4dCA9IGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRleHQ7XG52YXIgZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzID0gZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5KCdjbGFzc05hbWUnKTtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJHJlbmRlckRldGFpbHMgPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBjb21wbGV0aW9ucyA9IF9uMC5hLmNvbXBsZXRpb25zO1xuXHR2YXIgcHJldmlldyA9IF9uMC5iO1xuXHRpZiAocHJldmlldy4kID09PSAnQWN0aXZlJykge1xuXHRcdHZhciBfbjIgPSBwcmV2aWV3LmE7XG5cdFx0dmFyIGNvbXBsZXRlZCA9IF9uMi5hO1xuXHRcdHZhciB0b3RhbCA9IF9uMi5iO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdmbGV4IHNwYWNlLWJldHdlZW4nKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCd3LTEvMicpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzdHJvbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ0xhc3QgQWN0aXZpdHknKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ3RleHQtZ3JheS02MDAnKVxuXHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdEYXRlIGNvbWluZycpXG5cdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHN0cm9uZyxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnUHJvZ3Jlc3MnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ3RleHQtZ3JheS02MDAnKVxuXHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoY29tcGxldGVkKSArICgnLycgKyBlbG0kY29yZSRTdHJpbmckZnJvbUludCh0b3RhbCkpKVxuXHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnZmxleCBzcGFjZS1iZXR3ZWVuJylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygndy0xLzInKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Ryb25nLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdMYXN0IENvbXBsZXRlZCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygndGV4dC1ncmF5LTYwMCcpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ0RhdGUgY29taW5nJylcblx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Ryb25nLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdDb21wbGV0aW9ucycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygndGV4dC1ncmF5LTYwMCcpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckZnJvbUludChjb21wbGV0aW9ucykpXG5cdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9XG59O1xudmFyIGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkcHJldmlld1RvQ2xhc3MgPSBGMihcblx0ZnVuY3Rpb24gKHByZXZpZXcsIHByZWZpeCkge1xuXHRcdGlmIChwcmV2aWV3LiQgPT09ICdBY3RpdmUnKSB7XG5cdFx0XHRyZXR1cm4gcHJlZml4ICsgJy1wcmltYXJ5LWRhcmsnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gcHJlZml4ICsgJy1ncmV5LTQwMCc7XG5cdFx0fVxuXHR9KTtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJHByZXZpZXdUb1N0cmluZyA9IGZ1bmN0aW9uIChwcmV2aWV3KSB7XG5cdGlmIChwcmV2aWV3LiQgPT09ICdBY3RpdmUnKSB7XG5cdFx0cmV0dXJuICdBY3RpdmUnO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAnSW5hY3RpdmUnO1xuXHR9XG59O1xudmFyIGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkcmVuZGVyU3RhdHVzID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgcHJldmlldyA9IF9uMC5iO1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoXG5cdFx0XHRcdCdpbmxpbmUtYmxvY2sgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0yIHJvdW5kZWQgdGV4dC14cyBsZWFkaW5nLW5vbmUgbWItNCAnICsgQTIoYXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRwcmV2aWV3VG9DbGFzcywgcHJldmlldywgJ2JnJykpXG5cdFx0XHRdKSxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChcblx0XHRcdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRwcmV2aWV3VG9TdHJpbmcocHJldmlldykpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRodG1sJEh0bWwkYSA9IF9WaXJ0dWFsRG9tX25vZGUoJ2EnKTtcbnZhciBlbG0kaHRtbCRIdG1sJGgzID0gX1ZpcnR1YWxEb21fbm9kZSgnaDMnKTtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJHJlbmRlclByZXZpZXcgPSBGMihcblx0ZnVuY3Rpb24gKHVybCwgcHJvY2Vzcykge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdzYi1wcm9jZXNzIGZsZXggZmxleC1jb2wgdGV4dC1zYW5zJylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygncC02IGZsZXgtMScpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkcmVuZGVyU3RhdHVzKHByb2Nlc3MpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRoMyxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygndGV4dC1iYXNlIGZvbnQtYm9sZCBtYi0yIGxlYWRpbmctdGlnaHQnKVxuXHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHRcdFx0XHRcdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRnZXRUaXRsZShwcm9jZXNzKSlcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ3RleHQtZ3JheS02MDAgbWItNCcpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJGdldERlc2NyaXB0aW9uKHByb2Nlc3MpKVxuXHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRyZW5kZXJEZXRhaWxzKHByb2Nlc3MpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdiZy1ibGFjayB0ZXh0LXdoaXRlIHctZnVsbCBwLTMgdGV4dC1jZW50ZXIgYmxvY2sgZm9udC1tZWRpdW0gaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmV5LTgwMCcpLFxuXHRcdFx0XHRcdFx0XHRBMihhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJGdldExpbmssIHVybCwgcHJvY2Vzcylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdXb3JrIE9uIFRoaXMgUHJvY2VzcycpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kc3ZnJFN2ZyR0cnVzdGVkTm9kZSA9IF9WaXJ0dWFsRG9tX25vZGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbnZhciBlbG0kc3ZnJFN2ZyRwYXRoID0gZWxtJHN2ZyRTdmckdHJ1c3RlZE5vZGUoJ3BhdGgnKTtcbnZhciBlbG0kc3ZnJFN2ZyRzdmcgPSBlbG0kc3ZnJFN2ZyR0cnVzdGVkTm9kZSgnc3ZnJyk7XG52YXIgZWxtJHN2ZyRTdmckQXR0cmlidXRlcyRjbGFzcyA9IF9WaXJ0dWFsRG9tX2F0dHJpYnV0ZSgnY2xhc3MnKTtcbnZhciBlbG0kc3ZnJFN2ZyRBdHRyaWJ1dGVzJGQgPSBfVmlydHVhbERvbV9hdHRyaWJ1dGUoJ2QnKTtcbnZhciBlbG0kc3ZnJFN2ZyRBdHRyaWJ1dGVzJGhlaWdodCA9IF9WaXJ0dWFsRG9tX2F0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG52YXIgZWxtJHN2ZyRTdmckQXR0cmlidXRlcyR2aWV3Qm94ID0gX1ZpcnR1YWxEb21fYXR0cmlidXRlKCd2aWV3Qm94Jyk7XG52YXIgZWxtJHN2ZyRTdmckQXR0cmlidXRlcyR3aWR0aCA9IF9WaXJ0dWFsRG9tX2F0dHJpYnV0ZSgnd2lkdGgnKTtcbnZhciBhdXRob3IkcHJvamVjdCRVSSRsb2dvID0gQTIoXG5cdGVsbSRzdmckU3ZnJHN2Zyxcblx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFtcblx0XHRcdGVsbSRzdmckU3ZnJEF0dHJpYnV0ZXMkd2lkdGgoJzIyJyksXG5cdFx0XHRlbG0kc3ZnJFN2ZyRBdHRyaWJ1dGVzJGhlaWdodCgnNDAnKSxcblx0XHRcdGVsbSRzdmckU3ZnJEF0dHJpYnV0ZXMkdmlld0JveCgnMCAwIDIyIDQwJylcblx0XHRdKSxcblx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFtcblx0XHRcdEEyKFxuXHRcdFx0ZWxtJHN2ZyRTdmckcGF0aCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRzdmckU3ZnJEF0dHJpYnV0ZXMkY2xhc3MoJ2ZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnknKSxcblx0XHRcdFx0XHRlbG0kc3ZnJFN2ZyRBdHRyaWJ1dGVzJGQoJ00xMy43MzQ2IDI0LjA0OTdMOS43ODc4NCAyMS43NzA5VjEyLjY1NjNMMjEuNjI4IDUuODE5ODJWMTQuOTM1MkwxNy42ODEzIDIxLjc3MDlMMjEuNjI4IDI0LjA0OTdWMzMuMTYzNUw5Ljc4Nzg0IDQwVjMwLjg4NDZMMTMuNzM0NiAyNC4wNDk3WicpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfTmlsKSxcblx0XHRcdEEyKFxuXHRcdFx0ZWxtJHN2ZyRTdmckcGF0aCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRzdmckU3ZnJEF0dHJpYnV0ZXMkY2xhc3MoJ2ZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnktbGlnaHQnKSxcblx0XHRcdFx0XHRlbG0kc3ZnJFN2ZyRBdHRyaWJ1dGVzJGQoJ00yMS42Mjc5IDUuODE5ODhMOS43ODc3MiAxMi42NTY0TDEuODk0MjkgOC4wOTk1TDEzLjczNDQgMS4yNjIyMUwyMS42Mjc5IDUuODE5ODhaJylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9OaWwpLFxuXHRcdFx0QTIoXG5cdFx0XHRlbG0kc3ZnJFN2ZyRwYXRoLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJHN2ZyRTdmckQXR0cmlidXRlcyRjbGFzcygnZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeS1saWdodCcpLFxuXHRcdFx0XHRcdGVsbSRzdmckU3ZnJEF0dHJpYnV0ZXMkZCgnTTEzLjczNDQgMjQuMDQ5OUw5Ljc4NzcyIDMwLjg4NDhMMS44OTQyOSAyNi4zMjg3TDUuODQxMDEgMTkuNDkyMkw5Ljc4NzcyIDIxLjc3MUwxMy43MzQ0IDI0LjA0OTlaJylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9OaWwpLFxuXHRcdFx0QTIoXG5cdFx0XHRlbG0kc3ZnJFN2ZyRwYXRoLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJHN2ZyRTdmckQXR0cmlidXRlcyRjbGFzcygnZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeS1kYXJrJyksXG5cdFx0XHRcdFx0ZWxtJHN2ZyRTdmckQXR0cmlidXRlcyRkKCdNOS43ODc3MiAzMC44ODQ3VjQwLjAwMDFMMS44OTQyOSAzNS40NDI0VjI2LjMyODZMOS43ODc3MiAzMC44ODQ3WicpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfTmlsKSxcblx0XHRcdEEyKFxuXHRcdFx0ZWxtJHN2ZyRTdmckcGF0aCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRzdmckU3ZnJEF0dHJpYnV0ZXMkY2xhc3MoJ2ZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnktZGFyaycpLFxuXHRcdFx0XHRcdGVsbSRzdmckU3ZnJEF0dHJpYnV0ZXMkZCgnTTkuNzg3NzIgMTIuNjU2NVYyMS43NzFMNS44NDEwMSAxOS40OTIyTDEuODk0MjkgMTcuMjEzNFY4LjA5OTYxTDkuNzg3NzIgMTIuNjU2NVonKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X05pbCksXG5cdFx0XHRBMihcblx0XHRcdGVsbSRzdmckU3ZnJHBhdGgsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kc3ZnJFN2ZyRBdHRyaWJ1dGVzJGNsYXNzKCdmaWxsLWN1cnJlbnQgdGV4dC1ibGFjaycpLFxuXHRcdFx0XHRcdGVsbSRzdmckU3ZnJEF0dHJpYnV0ZXMkZCgnTTIwLjY4MDcgMTQuMTQ1MVY1LjAzMTM0QzIwLjY4MDcgNS4wMzEzNCAyMC42ODA3IDUuMDI1ODEgMjAuNjgwNyA1LjAyMjY1QzIwLjY4MTUgNS4wMDc2NyAyMC42ODE1IDQuOTkyNjUgMjAuNjgwNyA0Ljk3NzY2VjQuOTYyNjZDMjAuNjc4NyA0Ljk0NDIxIDIwLjY3NSA0LjkyNTk4IDIwLjY2OTYgNC45MDgyQzIwLjY2NDkgNC44OTE2MiAyMC42NTk0IDQuODc1MjggMjAuNjUzIDQuODU5MjZMMjAuNjQ2NyA0Ljg0NTA1QzIwLjY0MTIgNC44MzE2MyAyMC42MzQxIDQuODE5IDIwLjYyNzggNC44MDYzN0MyMC42MjU0IDQuODAyNiAyMC42MjMzIDQuNzk4NjQgMjAuNjIxNSA0Ljc5NDUzQzIwLjYxMTIgNC43Nzc5NiAyMC42MDA5IDQuNzYyMTcgMjAuNTg5OSA0Ljc0NzE3QzIwLjU3ODggNC43MzI5NyAyMC41NjYyIDQuNzE5NTUgMjAuNTUzNiA0LjcwNjEzQzIwLjU1MDYgNC43MDIzMiAyMC41NDcxIDQuNjk4ODggMjAuNTQzMyA0LjY5NTg3QzIwLjUzMzEgNC42ODU3NiAyMC41MjIzIDQuNjc2MjcgMjAuNTExIDQuNjY3NDVMMjAuNDk4MyA0LjY1NzE5QzIwLjQ4MzIgNC42NDU3NiAyMC40Njc0IDQuNjM1MjIgMjAuNDUxIDQuNjI1NjFMMTIuNTUwNCAwLjA2MzIwNzFDMTIuNDc4NCAwLjAyMTYzOTQgMTIuMzk2OCAtMC4wMDAyNDQxNDEgMTIuMzEzNiAtMC4wMDAyNDQxNDFDMTIuMjMwNSAtMC4wMDAyNDQxNDEgMTIuMTQ4OCAwLjAyMTYzOTQgMTIuMDc2OCAwLjA2MzIwNzFMMC4yMzY2NjUgNi44OTk3MUMwLjIyMDExMSA2LjkwOTA0IDAuMjA0Mjc5IDYuOTE5NTkgMC4xODkzMDUgNi45MzEyOUgwLjE4NTM1OEwwLjE0NjY4IDYuOTY1MjNMMC4xMzY0MTkgNi45NzYyOEMwLjEyNjMxMyA2Ljk4NjUgMC4xMTY4MjQgNi45OTczIDAuMTA4MDAyIDcuMDA4NjRMMC4wOTQ1ODM1IDcuMDI1MjJDMC4wODMxNjAxIDcuMDQwMTEgMC4wNzI2MTc2IDcuMDU1NjcgMC4wNjMwMDk3IDcuMDcxNzlDMC4wNTM5MDEgNy4wODgxNSAwLjA0NTczMTMgNy4xMDUwMiAwLjAzODU0MDEgNy4xMjIzMUMwLjAzNjM1ODkgNy4xMjY5MSAwLjAzNDUxMjMgNy4xMzE2NSAwLjAzMzAxNDcgNy4xMzY1MkMwLjAyNzQ1NjcgNy4xNDk5IDAuMDIyNzEyIDcuMTYzNjEgMC4wMTg4MDY1IDcuMTc3NTZDMC4wMTg4MDY1IDcuMTgyMyAwLjAxODgwNjUgNy4xODcwNCAwLjAxODgwNjUgNy4xOTA5OEMwLjAxODgwNjUgNy4yMDgzNSAwLjAxMDkxMzEgNy4yMjU3MSAwLjAwODU0NTAyIDcuMjQzMDhDMC4wMDg1NDUwMiA3LjI2MjAyIDAuMDA4NTQ1MDIgNy4yODE3NiAwLjAwODU0NTAyIDcuMzAwN1YxNi40MjM5QzAuMDA4NDkxNjggMTYuNTA3MSAwLjAzMDM1IDE2LjU4ODkgMC4wNzE5MjAzIDE2LjY2MDlDMC4xMTM0OTEgMTYuNzMzIDAuMTczMzA2IDE2Ljc5MjggMC4yNDUzNDggMTYuODM0NEwzLjc4MTYxIDE4Ljg3NjRMMC4wNzE2OTI1IDI1LjMwMTdDMC4wNjIyMjA0IDI1LjMxODMgMC4wNTQzMjcgMjUuMzM1NiAwLjA0NjQzMzUgMjUuMzUzTDAuMDQxNjk3NSAyNS4zNjY0QzAuMDM2MTcyMSAyNS4zODA2IDAuMDMxNDM2IDI1LjM5NDggMC4wMjc0ODkzIDI1LjQwODNDMC4wMjcyNDIyIDI1LjQxMjcgMC4wMjcyNDIyIDI1LjQxNzIgMC4wMjc0ODkzIDI1LjQyMTdDMC4wMjI3NTMyIDI1LjQzOTggMC4wMTk1OTU4IDI1LjQ1OCAwLjAxNjQzODUgMjUuNDc1M0MwLjAxNjQzODUgMjUuNDk0MyAwLjAxNjQzODUgMjUuNTE0IDAuMDE2NDM4NSAyNS41MzNWMzQuNjUyM0MwLjAxNjM4NTEgMzQuNzM1NCAwLjAzODI0MzQgMzQuODE3MiAwLjA3OTgxMzcgMzQuODg5MkMwLjEyMTM4NCAzNC45NjEzIDAuMTgxMiAzNS4wMjExIDAuMjUzMjQyIDM1LjA2MjdMOC4xNDY2OCAzOS42MTk2QzguMTY0OCAzOS42MzA2IDguMTgzODEgMzkuNjQwMSA4LjIwMzUxIDM5LjY0OEM4LjI2MDM3IDM5LjY3MTQgOC4zMjEyMyAzOS42ODM0IDguMzgyNjkgMzkuNjgzNUM4LjQwMzI4IDM5LjY4MzQgOC40MjM4NCAzOS42ODIxIDguNDQ0MjYgMzkuNjc5Nkw4LjQ2NCAzOS42NzU2TDguNTA0MjUgMzkuNjY3N0w4LjUyODcyIDM5LjY1OTlDOC41Mzk3NyAzOS42NTU5IDguNTUxNjEgMzkuNjUyNyA4LjU2MjY2IDM5LjY0OEw4LjU4MDAzIDM5LjYzOTNDOC41ODgxNCAzOS42MzUgOC41OTYwNCAzOS42MzAyIDguNjAzNzEgMzkuNjI1MUwyMC40NDM5IDMyLjc4OTRDMjAuNTE1OCAzMi43NDc5IDIwLjU3NTUgMzIuNjg4MiAyMC42MTcxIDMyLjYxNjNDMjAuNjU4NyAzMi41NDQ0IDIwLjY4MDYgMzIuNDYyOCAyMC42ODA3IDMyLjM3OTdWMjMuMjU5N0MyMC42ODA2IDIzLjE3NjYgMjAuNjU4NyAyMy4wOTUgMjAuNjE3MSAyMy4wMjMxQzIwLjU3NTUgMjIuOTUxMiAyMC41MTU4IDIyLjg5MTUgMjAuNDQzOSAyMi44NUwxNi45MDc2IDIwLjgwOEwyMC42MTc1IDE0LjM4MTlDMjAuNjU5IDE0LjMwOTkgMjAuNjgwOCAxNC4yMjgyIDIwLjY4MDcgMTQuMTQ1MVpNMTIuMzEzNiAxLjAyMDY4TDE5LjI1OTkgNS4wMzEzNEw4LjM2NjkxIDExLjMyTDEuNDIwNjggNy4zMDkzOEwxMi4zMTM2IDEuMDIwNjhaTTAuOTQ3MDc1IDE2LjE1MDhWOC4xMzAzTDcuODkzMyAxMi4xNDAyVjIwLjE2MDdMNC42NTY5OSAxOC4yOTIzTDAuOTQ3MDc1IDE2LjE1MDhaTTQuNTkzODQgMTkuMzVMOC4xMzAxIDIxLjM5MTNMMTEuNjY2NCAyMy40MzMzTDguMTkzMjUgMjkuNDQ4OUwxLjEyMDczIDI1LjM2NTZMNC41OTM4NCAxOS4zNVpNMC45NDcwNzUgMjYuMzU5NEw3Ljg5MzMgMzAuMzY5M1YzOC4zOTA2TDAuOTQ3MDc1IDM0LjM3OTlWMjYuMzU5NFpNMTkuNzMzNSAxNC4wMTg4TDE1Ljg0OTkgMjAuNzQ0OEMxNS43ODczIDIwLjg1MzYgMTUuNzcwNCAyMC45ODI4IDE1LjgwMjkgMjEuMTA0QzE1LjgzNTUgMjEuMjI1MiAxNS45MTQ4IDIxLjMyODUgMTYuMDIzNSAyMS4zOTEzTDE5LjczMzUgMjMuNTMzNlYzMi4xMDExTDguODQwNTEgMzguMzkwNlYzMC4yMjMyTDEyLjcyNDEgMjMuNDk2NUMxMi43ODY3IDIzLjM4NzcgMTIuODAzNiAyMy4yNTg1IDEyLjc3MSAyMy4xMzczQzEyLjczODUgMjMuMDE2MSAxMi42NTkxIDIyLjkxMjcgMTIuNTUwNCAyMi44NUw4Ljg0MDUxIDIwLjcwNzdWMTIuMTQwMkwxOS43MzM1IDUuODUxNDdWMTQuMDE4OFonKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X05pbClcblx0XHRdKSk7XG52YXIgZWxtJGNvcmUkTGlzdCRmb2xkckhlbHBlciA9IEY0KFxuXHRmdW5jdGlvbiAoZm4sIGFjYywgY3RyLCBscykge1xuXHRcdGlmICghbHMuYikge1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGEgPSBscy5hO1xuXHRcdFx0dmFyIHIxID0gbHMuYjtcblx0XHRcdGlmICghcjEuYikge1xuXHRcdFx0XHRyZXR1cm4gQTIoZm4sIGEsIGFjYyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgYiA9IHIxLmE7XG5cdFx0XHRcdHZhciByMiA9IHIxLmI7XG5cdFx0XHRcdGlmICghcjIuYikge1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0YSxcblx0XHRcdFx0XHRcdEEyKGZuLCBiLCBhY2MpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgYyA9IHIyLmE7XG5cdFx0XHRcdFx0dmFyIHIzID0gcjIuYjtcblx0XHRcdFx0XHRpZiAoIXIzLmIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0Zm4sXG5cdFx0XHRcdFx0XHRcdGEsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRcdGIsXG5cdFx0XHRcdFx0XHRcdFx0QTIoZm4sIGMsIGFjYykpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIGQgPSByMy5hO1xuXHRcdFx0XHRcdFx0dmFyIHI0ID0gcjMuYjtcblx0XHRcdFx0XHRcdHZhciByZXMgPSAoY3RyID4gNTAwKSA/IEEzKFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0YWNjLFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JHJldmVyc2UocjQpKSA6IEE0KGVsbSRjb3JlJExpc3QkZm9sZHJIZWxwZXIsIGZuLCBhY2MsIGN0ciArIDEsIHI0KTtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0Zm4sXG5cdFx0XHRcdFx0XHRcdGEsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRcdGIsXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0XHRcdGMsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihmbiwgZCwgcmVzKSkpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJExpc3QkZm9sZHIgPSBGMyhcblx0ZnVuY3Rpb24gKGZuLCBhY2MsIGxzKSB7XG5cdFx0cmV0dXJuIEE0KGVsbSRjb3JlJExpc3QkZm9sZHJIZWxwZXIsIGZuLCBhY2MsIDAsIGxzKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIHhzKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoeCwgYWNjKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0Zih4KSxcblx0XHRcdFx0XHRcdGFjYyk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciBlbG0kaHRtbCRIdG1sJGgxID0gX1ZpcnR1YWxEb21fbm9kZSgnaDEnKTtcbnZhciBlbG0kaHRtbCRIdG1sJGgyID0gX1ZpcnR1YWxEb21fbm9kZSgnaDInKTtcbnZhciBlbG0kaHRtbCRIdG1sJGxpID0gX1ZpcnR1YWxEb21fbm9kZSgnbGknKTtcbnZhciBlbG0kaHRtbCRIdG1sJG5hdiA9IF9WaXJ0dWFsRG9tX25vZGUoJ25hdicpO1xudmFyIGVsbSRodG1sJEh0bWwkdWwgPSBfVmlydHVhbERvbV9ub2RlKCd1bCcpO1xudmFyIGF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSR2aWV3ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChtb2RlbC4kID09PSAnRXJyb3InKSB7XG5cdFx0dmFyIGVycm9yID0gbW9kZWwuYTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChlcnJvcilcblx0XHRcdFx0XSkpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBfbjEgPSBtb2RlbC5hO1xuXHRcdHZhciBjb250ZXh0ID0gX24xLmE7XG5cdFx0dmFyIHByb2Nlc3NlcyA9IF9uMS5iO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdmb250LXNhbnMgdGV4dC1ibGFjaycpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRuYXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2ZsZXggaXRlbXMtY2VudGVyIGJnLXdoaXRlIHB4LTEyIHB5LTYgbWItOCcpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnZmxleC0xIGZsZXggaXRlbXMtY2VudGVyJylcblx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGF1dGhvciRwcm9qZWN0JFVJJGxvZ28sXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkaDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ3RleHQteGwgZm9udC1ib2xkIG1sLTMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnU3ByaW5nQm9hcmQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHVsLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdmbGV4IGl0ZW1zLWNlbnRlcicpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbGksXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ20tMCBtci04Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZihjb250ZXh0LnVybCArICcvd3AtYWRtaW4vYWRtaW4ucGhwP3BhZ2U9c3ByaW5nYm9hcmQnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdzYi1saW5rIHRleHQtYmFzZSBmb250LW1lZGl1bScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnUHJvY2VzcyBMaXN0Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbGksXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ20tMCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoY29udGV4dC51cmwgKyAnL3dwLWFkbWluL2FkbWluLnBocD9wYWdlPXNwcmluZ2JvYXJkLXNldHRpbmdzJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnc2ItbGluayB0ZXh0LWJhc2UgZm9udC1tZWRpdW0nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ1NldHRpbmdzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnYmctd2hpdGUgcC0xMiBtYi0xMicpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGgyLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdmb250LWJvbGQgdGV4dC0yeGwgbWItNicpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ1Byb2Nlc3MgTGlzdCcpXG5cdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnU2VhcmNoLCBGaWx0ZXIgYW5kIENyZWF0ZSBOZXcgd2lsbCBnbyBoZXJlJylcblx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygncHgtMTInKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR1bCxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnc2ItcHJvY2Vzcy13cmFwcGVyJylcblx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHRcdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRyZW5kZXJQcmV2aWV3KGNvbnRleHQudXJsKSxcblx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzZXMpKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciRCcm93c2VyJEV4dGVybmFsID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRXh0ZXJuYWwnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkQnJvd3NlciRJbnRlcm5hbCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0ludGVybmFsJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJEJyb3dzZXIkRG9tJE5vdEZvdW5kID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnTm90Rm91bmQnLCBhOiBhfTtcbn07XG52YXIgZWxtJGNvcmUkQmFzaWNzJG5ldmVyID0gZnVuY3Rpb24gKF9uMCkge1xuXHRuZXZlcjpcblx0d2hpbGUgKHRydWUpIHtcblx0XHR2YXIgbnZyID0gX24wLmE7XG5cdFx0dmFyICR0ZW1wJF9uMCA9IG52cjtcblx0XHRfbjAgPSAkdGVtcCRfbjA7XG5cdFx0Y29udGludWUgbmV2ZXI7XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkVGFzayRQZXJmb3JtID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUGVyZm9ybScsIGE6IGF9O1xufTtcbnZhciBlbG0kY29yZSRUYXNrJHN1Y2NlZWQgPSBfU2NoZWR1bGVyX3N1Y2NlZWQ7XG52YXIgZWxtJGNvcmUkVGFzayRpbml0ID0gZWxtJGNvcmUkVGFzayRzdWNjZWVkKF9VdGlsc19UdXBsZTApO1xudmFyIGVsbSRjb3JlJFRhc2skYW5kVGhlbiA9IF9TY2hlZHVsZXJfYW5kVGhlbjtcbnZhciBlbG0kY29yZSRUYXNrJG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgdGFza0EpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdGZ1bmMoYSkpO1xuXHRcdFx0fSxcblx0XHRcdHRhc2tBKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkVGFzayRtYXAyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCB0YXNrQSwgdGFza0IpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdGZ1bmN0aW9uIChiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdFx0XHRBMihmdW5jLCBhLCBiKSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0YXNrQik7XG5cdFx0XHR9LFxuXHRcdFx0dGFza0EpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRUYXNrJHNlcXVlbmNlID0gZnVuY3Rpb24gKHRhc2tzKSB7XG5cdHJldHVybiBBMyhcblx0XHRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdGVsbSRjb3JlJFRhc2skbWFwMihlbG0kY29yZSRMaXN0JGNvbnMpLFxuXHRcdGVsbSRjb3JlJFRhc2skc3VjY2VlZChfTGlzdF9OaWwpLFxuXHRcdHRhc2tzKTtcbn07XG52YXIgZWxtJGNvcmUkUGxhdGZvcm0kc2VuZFRvQXBwID0gX1BsYXRmb3JtX3NlbmRUb0FwcDtcbnZhciBlbG0kY29yZSRUYXNrJHNwYXduQ21kID0gRjIoXG5cdGZ1bmN0aW9uIChyb3V0ZXIsIF9uMCkge1xuXHRcdHZhciB0YXNrID0gX24wLmE7XG5cdFx0cmV0dXJuIF9TY2hlZHVsZXJfc3Bhd24oXG5cdFx0XHRBMihcblx0XHRcdFx0ZWxtJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRzZW5kVG9BcHAocm91dGVyKSxcblx0XHRcdFx0dGFzaykpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRUYXNrJG9uRWZmZWN0cyA9IEYzKFxuXHRmdW5jdGlvbiAocm91dGVyLCBjb21tYW5kcywgc3RhdGUpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kY29yZSRUYXNrJG1hcCxcblx0XHRcdGZ1bmN0aW9uIChfbjApIHtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTA7XG5cdFx0XHR9LFxuXHRcdFx0ZWxtJGNvcmUkVGFzayRzZXF1ZW5jZShcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkVGFzayRzcGF3bkNtZChyb3V0ZXIpLFxuXHRcdFx0XHRcdGNvbW1hbmRzKSkpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRUYXNrJG9uU2VsZk1zZyA9IEYzKFxuXHRmdW5jdGlvbiAoX24wLCBfbjEsIF9uMikge1xuXHRcdHJldHVybiBlbG0kY29yZSRUYXNrJHN1Y2NlZWQoX1V0aWxzX1R1cGxlMCk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJFRhc2skY21kTWFwID0gRjIoXG5cdGZ1bmN0aW9uICh0YWdnZXIsIF9uMCkge1xuXHRcdHZhciB0YXNrID0gX24wLmE7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJFRhc2skUGVyZm9ybShcblx0XHRcdEEyKGVsbSRjb3JlJFRhc2skbWFwLCB0YWdnZXIsIHRhc2spKTtcblx0fSk7XG5fUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbJ1Rhc2snXSA9IF9QbGF0Zm9ybV9jcmVhdGVNYW5hZ2VyKGVsbSRjb3JlJFRhc2skaW5pdCwgZWxtJGNvcmUkVGFzayRvbkVmZmVjdHMsIGVsbSRjb3JlJFRhc2skb25TZWxmTXNnLCBlbG0kY29yZSRUYXNrJGNtZE1hcCk7XG52YXIgZWxtJGNvcmUkVGFzayRjb21tYW5kID0gX1BsYXRmb3JtX2xlYWYoJ1Rhc2snKTtcbnZhciBlbG0kY29yZSRUYXNrJHBlcmZvcm0gPSBGMihcblx0ZnVuY3Rpb24gKHRvTWVzc2FnZSwgdGFzaykge1xuXHRcdHJldHVybiBlbG0kY29yZSRUYXNrJGNvbW1hbmQoXG5cdFx0XHRlbG0kY29yZSRUYXNrJFBlcmZvcm0oXG5cdFx0XHRcdEEyKGVsbSRjb3JlJFRhc2skbWFwLCB0b01lc3NhZ2UsIHRhc2spKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kQXJyYXlTZXEgPSB7JDogJ0FycmF5U2VxJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3RvciA9IEYzKFxuXHRmdW5jdGlvbiAoYSwgYiwgYykge1xuXHRcdHJldHVybiB7JDogJ0NvbnN0cnVjdG9yJywgYTogYSwgYjogYiwgYzogY307XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRGljdGlvbmFyeSA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0RpY3Rpb25hcnknLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRMaXN0U2VxID0geyQ6ICdMaXN0U2VxJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRQcmltaXRpdmUgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdQcmltaXRpdmUnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdSZWNvcmQnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUycsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlID0gRjMoXG5cdGZ1bmN0aW9uIChhLCBiLCBjKSB7XG5cdFx0cmV0dXJuIHskOiAnU2VxdWVuY2UnLCBhOiBhLCBiOiBiLCBjOiBjfTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXRTZXEgPSB7JDogJ1NldFNlcSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRG93biA9IHskOiAnRG93bid9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kTm9PcCA9IHskOiAnTm9PcCd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXAgPSB7JDogJ1VwJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnVXNlck1zZycsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHNpemUgPSBmdW5jdGlvbiAoaGlzdG9yeSkge1xuXHRyZXR1cm4gaGlzdG9yeS5udW1NZXNzYWdlcztcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRFeHBvcnQgPSB7JDogJ0V4cG9ydCd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kSW1wb3J0ID0geyQ6ICdJbXBvcnQnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE9wZW4gPSB7JDogJ09wZW4nfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE92ZXJsYXlNc2cgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdPdmVybGF5TXNnJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUmVzdW1lID0geyQ6ICdSZXN1bWUnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGlzUGF1c2VkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cdGlmIChzdGF0ZS4kID09PSAnUnVubmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRBY2NlcHQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdBY2NlcHQnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRDaG9vc2UgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdDaG9vc2UnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRnb29kTmV3czEgPSAnXFxuVGhlIGdvb2QgbmV3cyBpcyB0aGF0IGhhdmluZyB2YWx1ZXMgbGlrZSB0aGlzIGluIHlvdXIgbWVzc2FnZSB0eXBlIGlzIG5vdFxcbnNvIGdyZWF0IGluIHRoZSBsb25nIHJ1bi4gWW91IGFyZSBiZXR0ZXIgb2ZmIHVzaW5nIHNpbXBsZXIgZGF0YSwgbGlrZVxcbic7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRnb29kTmV3czIgPSAnXFxuZnVuY3Rpb24gY2FuIHBhdHRlcm4gbWF0Y2ggb24gdGhhdCBkYXRhIGFuZCBjYWxsIHdoYXRldmVyIGZ1bmN0aW9ucywgSlNPTlxcbmRlY29kZXJzLCBldGMuIHlvdSBuZWVkLiBUaGlzIG1ha2VzIHRoZSBjb2RlIG11Y2ggbW9yZSBleHBsaWNpdCBhbmQgZWFzeSB0b1xcbmZvbGxvdyBmb3Igb3RoZXIgcmVhZGVycyAob3IgeW91IGluIGEgZmV3IG1vbnRocyEpXFxuJztcbnZhciBlbG0kaHRtbCRIdG1sJGNvZGUgPSBfVmlydHVhbERvbV9ub2RlKCdjb2RlJyk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJGNvZGUsXG5cdFx0X0xpc3RfTmlsLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KG5hbWUpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYWRkQ29tbWFzID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG5cdGlmICghaXRlbXMuYikge1xuXHRcdHJldHVybiAnJztcblx0fSBlbHNlIHtcblx0XHRpZiAoIWl0ZW1zLmIuYikge1xuXHRcdFx0dmFyIGl0ZW0gPSBpdGVtcy5hO1xuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghaXRlbXMuYi5iLmIpIHtcblx0XHRcdFx0dmFyIGl0ZW0xID0gaXRlbXMuYTtcblx0XHRcdFx0dmFyIF9uMSA9IGl0ZW1zLmI7XG5cdFx0XHRcdHZhciBpdGVtMiA9IF9uMS5hO1xuXHRcdFx0XHRyZXR1cm4gaXRlbTEgKyAoJyBhbmQgJyArIGl0ZW0yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBsYXN0SXRlbSA9IGl0ZW1zLmE7XG5cdFx0XHRcdHZhciBvdGhlckl0ZW1zID0gaXRlbXMuYjtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdCcsICcsXG5cdFx0XHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHRcdFx0b3RoZXJJdGVtcyxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0WycgYW5kICcgKyBsYXN0SXRlbV0pKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkcHJvYmxlbVRvU3RyaW5nID0gZnVuY3Rpb24gKHByb2JsZW0pIHtcblx0c3dpdGNoIChwcm9ibGVtLiQpIHtcblx0XHRjYXNlICdGdW5jdGlvbic6XG5cdFx0XHRyZXR1cm4gJ2Z1bmN0aW9ucyc7XG5cdFx0Y2FzZSAnRGVjb2Rlcic6XG5cdFx0XHRyZXR1cm4gJ0pTT04gZGVjb2RlcnMnO1xuXHRcdGNhc2UgJ1Rhc2snOlxuXHRcdFx0cmV0dXJuICd0YXNrcyc7XG5cdFx0Y2FzZSAnUHJvY2Vzcyc6XG5cdFx0XHRyZXR1cm4gJ3Byb2Nlc3Nlcyc7XG5cdFx0Y2FzZSAnU29ja2V0Jzpcblx0XHRcdHJldHVybiAnd2ViIHNvY2tldHMnO1xuXHRcdGNhc2UgJ1JlcXVlc3QnOlxuXHRcdFx0cmV0dXJuICdIVFRQIHJlcXVlc3RzJztcblx0XHRjYXNlICdQcm9ncmFtJzpcblx0XHRcdHJldHVybiAncHJvZ3JhbXMnO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gJ3ZpcnR1YWwgRE9NIHZhbHVlcyc7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3UHJvYmxlbVR5cGUgPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBuYW1lID0gX24wLm5hbWU7XG5cdHZhciBwcm9ibGVtcyA9IF9uMC5wcm9ibGVtcztcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkbGksXG5cdFx0X0xpc3RfTmlsLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShuYW1lKSxcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHQnIGNhbiBjb250YWluICcgKyAoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRhZGRDb21tYXMoXG5cdFx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRtYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkcHJvYmxlbVRvU3RyaW5nLCBwcm9ibGVtcykpICsgJy4nKSlcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3QmFkTWV0YWRhdGEgPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBtZXNzYWdlID0gX24wLm1lc3NhZ2U7XG5cdHZhciBwcm9ibGVtcyA9IF9uMC5wcm9ibGVtcztcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRbXG5cdFx0XHRBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnVGhlICcpLFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUobWVzc2FnZSksXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgdHlwZSBvZiB5b3VyIHByb2dyYW0gY2Fubm90IGJlIHJlbGlhYmx5IHNlcmlhbGl6ZWQgZm9yIGhpc3RvcnkgZmlsZXMuJylcblx0XHRcdFx0XSkpLFxuXHRcdFx0QTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ0Z1bmN0aW9ucyBjYW5ub3QgYmUgc2VyaWFsaXplZCwgbm9yIGNhbiB2YWx1ZXMgdGhhdCBjb250YWluIGZ1bmN0aW9ucy4gVGhpcyBpcyBhIHByb2JsZW0gaW4gdGhlc2UgcGxhY2VzOicpXG5cdFx0XHRcdF0pKSxcblx0XHRcdEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCR1bCxcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdEEyKGVsbSRjb3JlJExpc3QkbWFwLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdQcm9ibGVtVHlwZSwgcHJvYmxlbXMpKSxcblx0XHRcdEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZ29vZE5ld3MxKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGEsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZignaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvdHlwZXMvdW5pb25fdHlwZXMuaHRtbCcpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgndW5pb24gdHlwZXMnKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnLCBpbiB5b3VyIG1lc3NhZ2VzLiBGcm9tIHRoZXJlLCB5b3VyICcpLFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUoJ3VwZGF0ZScpLFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGdvb2ROZXdzMilcblx0XHRcdFx0XSkpXG5cdFx0XSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQ2FuY2VsID0geyQ6ICdDYW5jZWwnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JFByb2NlZWQgPSB7JDogJ1Byb2NlZWQnfTtcbnZhciBlbG0kaHRtbCRIdG1sJGJ1dHRvbiA9IF9WaXJ0dWFsRG9tX25vZGUoJ2J1dHRvbicpO1xudmFyIGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHN0eWxlID0gX1ZpcnR1YWxEb21fc3R5bGU7XG52YXIgZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlID0gZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kc3R5bGU7XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kTm9ybWFsID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnTm9ybWFsJywgYTogYX07XG59O1xudmFyIGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG9uID0gX1ZpcnR1YWxEb21fb247XG52YXIgZWxtJGh0bWwkSHRtbCRFdmVudHMkb24gPSBGMihcblx0ZnVuY3Rpb24gKGV2ZW50LCBkZWNvZGVyKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kb24sXG5cdFx0XHRldmVudCxcblx0XHRcdGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJE5vcm1hbChkZWNvZGVyKSk7XG5cdH0pO1xudmFyIGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2sgPSBmdW5jdGlvbiAobXNnKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbixcblx0XHQnY2xpY2snLFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0J1dHRvbnMgPSBmdW5jdGlvbiAoYnV0dG9ucykge1xuXHR2YXIgYnRuID0gRjIoXG5cdFx0ZnVuY3Rpb24gKG1zZywgc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdGVsbSRodG1sJEh0bWwkYnV0dG9uLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWFyZ2luLXJpZ2h0JywgJzIwcHgnKSxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2sobXNnKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0cmluZylcblx0XHRcdFx0XHRdKSk7XG5cdFx0fSk7XG5cdHZhciBidXR0b25Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoYnV0dG9ucy4kID09PSAnQWNjZXB0Jykge1xuXHRcdFx0dmFyIHByb2NlZWQgPSBidXR0b25zLmE7XG5cdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoYnRuLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JFByb2NlZWQsIHByb2NlZWQpXG5cdFx0XHRcdF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgY2FuY2VsID0gYnV0dG9ucy5hO1xuXHRcdFx0dmFyIHByb2NlZWQgPSBidXR0b25zLmI7XG5cdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoYnRuLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JENhbmNlbCwgY2FuY2VsKSxcblx0XHRcdFx0XHRBMihidG4sIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUHJvY2VlZCwgcHJvY2VlZClcblx0XHRcdFx0XSk7XG5cdFx0fVxuXHR9KCk7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICc2MHB4JyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2xpbmUtaGVpZ2h0JywgJzYwcHgnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndGV4dC1hbGlnbicsICdyaWdodCcpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig1MCwgNTAsIDUwKScpXG5cdFx0XHRdKSxcblx0XHRidXR0b25Ob2Rlcyk7XG59O1xudmFyIGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG1hcCA9IF9WaXJ0dWFsRG9tX21hcDtcbnZhciBlbG0kaHRtbCRIdG1sJG1hcCA9IGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG1hcDtcbnZhciBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQgPSBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHkoJ2lkJyk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVzc2FnZSA9IEY0KFxuXHRmdW5jdGlvbiAoY29uZmlnLCB0aXRsZSwgZGV0YWlscywgYnV0dG9ucykge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGlkKCdlbG0tZGVidWdnZXItb3ZlcmxheScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3Bvc2l0aW9uJywgJ2ZpeGVkJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndG9wJywgJzAnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdsZWZ0JywgJzAnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICd3aGl0ZScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LWZhbWlseScsICdcXCdUcmVidWNoZXQgTVNcXCcsIFxcJ0x1Y2lkYSBHcmFuZGVcXCcsIFxcJ0JpdHN0cmVhbSBWZXJhIFNhbnNcXCcsIFxcJ0hlbHZldGljYSBOZXVlXFwnLCBzYW5zLXNlcmlmJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnei1pbmRleCcsICcyMTQ3NDgzNjQ3Jylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzYwMHB4JyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICdjYWxjKDUwJSAtIDMwMHB4KScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nLXJpZ2h0JywgJ2NhbGMoNTAlIC0gMzAwcHgpJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgyMDAsIDIwMCwgMjAwLCAwLjcpJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LXNpemUnLCAnMzZweCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzgwcHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDUwLCA1MCwgNTApJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nLWxlZnQnLCAnMjJweCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndmVydGljYWwtYWxpZ24nLCAnbWlkZGxlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdsaW5lLWhlaWdodCcsICc4MHB4Jylcblx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCh0aXRsZSlcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRpZCgnZWxtLWRlYnVnZ2VyLWRldGFpbHMnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmcnLCAnIDhweCAyMHB4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdvdmVyZmxvdy15JywgJ2F1dG8nKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ21heC1oZWlnaHQnLCAnY2FsYygxMDAlIC0gMTU2cHgpJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig2MSwgNjEsIDYxKScpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdGRldGFpbHMpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy53cmFwLFxuXHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdCdXR0b25zKGJ1dHRvbnMpKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGh0bWwkSHRtbCRzcGFuID0gX1ZpcnR1YWxEb21fbm9kZSgnc3BhbicpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYnV0dG9uID0gRjIoXG5cdGZ1bmN0aW9uIChtc2csIGxhYmVsKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhtc2cpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2N1cnNvcicsICdwb2ludGVyJylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQobGFiZWwpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3SW1wb3J0RXhwb3J0ID0gRjMoXG5cdGZ1bmN0aW9uIChwcm9wcywgaW1wb3J0TXNnLCBleHBvcnRNc2cpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdHByb3BzLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRidXR0b24sIGltcG9ydE1zZywgJ0ltcG9ydCcpLFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnIC8gJyksXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRidXR0b24sIGV4cG9ydE1zZywgJ0V4cG9ydCcpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWluaUNvbnRyb2xzID0gRjIoXG5cdGZ1bmN0aW9uIChjb25maWcsIG51bU1zZ3MpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3Bvc2l0aW9uJywgJ2ZpeGVkJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYm90dG9tJywgJzAnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdyaWdodCcsICc2cHgnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdib3JkZXItcmFkaXVzJywgJzRweCcpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDYxLCA2MSwgNjEpJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAnd2hpdGUnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LWZhbWlseScsICdtb25vc3BhY2UnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb2ludGVyLWV2ZW50cycsICdhdXRvJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnei1pbmRleCcsICcyMTQ3NDgzNjQ3Jylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmcnLCAnNnB4JyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2N1cnNvcicsICdwb2ludGVyJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3RleHQtYWxpZ24nLCAnY2VudGVyJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ21pbi13aWR0aCcsICcyNGNoJyksXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soY29uZmlnLm9wZW4pXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChcblx0XHRcdFx0XHRcdFx0J0V4cGxvcmUgSGlzdG9yeSAoJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChudW1Nc2dzKSArICcpJykpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3SW1wb3J0RXhwb3J0LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZycsICc0cHggMCcpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LXNpemUnLCAnMC44ZW0nKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndGV4dC1hbGlnbicsICdjZW50ZXInKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoNTAsIDUwLCA1MCknKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0Y29uZmlnLmltcG9ydEhpc3RvcnksXG5cdFx0XHRcdFx0Y29uZmlnLmV4cG9ydEhpc3RvcnkpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRleHBsYW5hdGlvbkJhZCA9ICdcXG5UaGUgbWVzc2FnZXMgaW4gdGhpcyBoaXN0b3J5IGRvIG5vdCBtYXRjaCB0aGUgbWVzc2FnZXMgaGFuZGxlZCBieSB5b3VyXFxucHJvZ3JhbS4gSSBub3RpY2VkIGNoYW5nZXMgaW4gdGhlIGZvbGxvd2luZyB0eXBlczpcXG4nO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZXhwbGFuYXRpb25SaXNreSA9ICdcXG5UaGlzIGhpc3Rvcnkgc2VlbXMgb2xkLiBJdCB3aWxsIHdvcmsgd2l0aCB0aGlzIHByb2dyYW0sIGJ1dCBzb21lXFxubWVzc2FnZXMgaGF2ZSBiZWVuIGFkZGVkIHNpbmNlIHRoZSBoaXN0b3J5IHdhcyBjcmVhdGVkOlxcbic7XG52YXIgZWxtJGNvcmUkTGlzdCRpbnRlcnNwZXJzZSA9IEYyKFxuXHRmdW5jdGlvbiAoc2VwLCB4cykge1xuXHRcdGlmICgheHMuYikge1xuXHRcdFx0cmV0dXJuIF9MaXN0X05pbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGhkID0geHMuYTtcblx0XHRcdHZhciB0bCA9IHhzLmI7XG5cdFx0XHR2YXIgc3RlcCA9IEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoeCwgcmVzdCkge1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdHNlcCxcblx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJExpc3QkY29ucywgeCwgcmVzdCkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHZhciBzcGVyc2VkID0gQTMoZWxtJGNvcmUkTGlzdCRmb2xkciwgc3RlcCwgX0xpc3RfTmlsLCB0bCk7XG5cdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkTGlzdCRjb25zLCBoZCwgc3BlcnNlZCk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZW50aW9uID0gRjIoXG5cdGZ1bmN0aW9uICh0YWdzLCB2ZXJiZWQpIHtcblx0XHR2YXIgX24wID0gQTIoXG5cdFx0XHRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUsXG5cdFx0XHRlbG0kY29yZSRMaXN0JHJldmVyc2UodGFncykpO1xuXHRcdGlmICghX24wLmIpIHtcblx0XHRcdHJldHVybiBlbG0kaHRtbCRIdG1sJHRleHQoJycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIV9uMC5iLmIpIHtcblx0XHRcdFx0dmFyIHRhZyA9IF9uMC5hO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQodmVyYmVkKSxcblx0XHRcdFx0XHRcdFx0dGFnLFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJy4nKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCFfbjAuYi5iLmIpIHtcblx0XHRcdFx0XHR2YXIgdGFnMiA9IF9uMC5hO1xuXHRcdFx0XHRcdHZhciBfbjEgPSBfbjAuYjtcblx0XHRcdFx0XHR2YXIgdGFnMSA9IF9uMS5hO1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbGksXG5cdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQodmVyYmVkKSxcblx0XHRcdFx0XHRcdFx0XHR0YWcxLFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnIGFuZCAnKSxcblx0XHRcdFx0XHRcdFx0XHR0YWcyLFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnLicpXG5cdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgbGFzdFRhZyA9IF9uMC5hO1xuXHRcdFx0XHRcdHZhciBvdGhlclRhZ3MgPSBfbjAuYjtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGxpLFxuXHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHZlcmJlZCksXG5cdFx0XHRcdFx0XHRcdF9VdGlsc19hcChcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkaW50ZXJzcGVyc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJywgJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JHJldmVyc2Uob3RoZXJUYWdzKSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJywgYW5kICcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYXN0VGFnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJy4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NoYW5nZSA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkbGksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdtYXJnaW4nLCAnOHB4IDAnKVxuXHRcdFx0XSksXG5cdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGNoYW5nZS4kID09PSAnQWxpYXNDaGFuZ2UnKSB7XG5cdFx0XHRcdHZhciBuYW1lID0gY2hhbmdlLmE7XG5cdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LXNpemUnLCAnMS41ZW0nKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUobmFtZSlcblx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbmFtZSA9IGNoYW5nZS5hO1xuXHRcdFx0XHR2YXIgcmVtb3ZlZCA9IGNoYW5nZS5iLnJlbW92ZWQ7XG5cdFx0XHRcdHZhciBjaGFuZ2VkID0gY2hhbmdlLmIuY2hhbmdlZDtcblx0XHRcdFx0dmFyIGFkZGVkID0gY2hhbmdlLmIuYWRkZWQ7XG5cdFx0XHRcdHZhciBhcmdzTWF0Y2ggPSBjaGFuZ2UuYi5hcmdzTWF0Y2g7XG5cdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LXNpemUnLCAnMS41ZW0nKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUobmFtZSlcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHVsLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGlzdC1zdHlsZS10eXBlJywgJ2Rpc2MnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nLWxlZnQnLCAnMmVtJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZW50aW9uLCByZW1vdmVkLCAnUmVtb3ZlZCAnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZW50aW9uLCBjaGFuZ2VkLCAnQ2hhbmdlZCAnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZW50aW9uLCBhZGRlZCwgJ0FkZGVkICcpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdGFyZ3NNYXRjaCA/IGVsbSRodG1sJEh0bWwkdGV4dCgnJykgOiBlbG0kaHRtbCRIdG1sJHRleHQoJ1RoaXMgbWF5IGJlIGR1ZSB0byB0aGUgZmFjdCB0aGF0IHRoZSB0eXBlIHZhcmlhYmxlIG5hbWVzIGNoYW5nZWQuJylcblx0XHRcdFx0XHRdKTtcblx0XHRcdH1cblx0XHR9KCkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdSZXBvcnQgPSBGMihcblx0ZnVuY3Rpb24gKGlzQmFkLCByZXBvcnQpIHtcblx0XHRzd2l0Y2ggKHJlcG9ydC4kKSB7XG5cdFx0XHRjYXNlICdDb3JydXB0SGlzdG9yeSc6XG5cdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdMb29rcyBsaWtlIHRoaXMgaGlzdG9yeSBmaWxlIGlzIGNvcnJ1cHQuIEkgY2Fubm90IHVuZGVyc3RhbmQgaXQuJylcblx0XHRcdFx0XHRdKTtcblx0XHRcdGNhc2UgJ1ZlcnNpb25DaGFuZ2VkJzpcblx0XHRcdFx0dmFyIG9sZCA9IHJlcG9ydC5hO1xuXHRcdFx0XHR2YXIgX25ldyA9IHJlcG9ydC5iO1xuXHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnVGhpcyBoaXN0b3J5IHdhcyBjcmVhdGVkIHdpdGggRWxtICcgKyAob2xkICsgKCcsIGJ1dCB5b3UgYXJlIHVzaW5nIEVsbSAnICsgKF9uZXcgKyAnIHJpZ2h0IG5vdy4nKSkpKVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0Y2FzZSAnTWVzc2FnZUNoYW5nZWQnOlxuXHRcdFx0XHR2YXIgb2xkID0gcmVwb3J0LmE7XG5cdFx0XHRcdHZhciBfbmV3ID0gcmVwb3J0LmI7XG5cdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdUbyBpbXBvcnQgc29tZSBvdGhlciBoaXN0b3J5LCB0aGUgb3ZlcmFsbCBtZXNzYWdlIHR5cGUgbXVzdCcgKyAnIGJlIHRoZSBzYW1lLiBUaGUgb2xkIGhpc3RvcnkgaGFzICcpLFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShvbGQpLFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgbWVzc2FnZXMsIGJ1dCB0aGUgbmV3IHByb2dyYW0gd29ya3Mgd2l0aCAnKSxcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUoX25ldyksXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyBtZXNzYWdlcy4nKVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIGNoYW5nZXMgPSByZXBvcnQuYTtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChcblx0XHRcdFx0XHRcdFx0XHRpc0JhZCA/IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZXhwbGFuYXRpb25CYWQgOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGV4cGxhbmF0aW9uUmlza3kpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR1bCxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2xpc3Qtc3R5bGUtdHlwZScsICdub25lJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZy1sZWZ0JywgJzIwcHgnKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJExpc3QkbWFwLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDaGFuZ2UsIGNoYW5nZXMpKVxuXHRcdFx0XHRcdF0pO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3ID0gRjUoXG5cdGZ1bmN0aW9uIChjb25maWcsIGlzUGF1c2VkLCBpc09wZW4sIG51bU1zZ3MsIHN0YXRlKSB7XG5cdFx0c3dpdGNoIChzdGF0ZS4kKSB7XG5cdFx0XHRjYXNlICdOb25lJzpcblx0XHRcdFx0cmV0dXJuIGlzT3BlbiA/IGVsbSRodG1sJEh0bWwkdGV4dCgnJykgOiAoaXNQYXVzZWQgPyBBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY3Vyc29yJywgJ3BvaW50ZXInKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndGV4dC1hbGlnbicsICdjZW50ZXInKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC43KScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICd3aGl0ZScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LWZhbWlseScsICdcXCdUcmVidWNoZXQgTVNcXCcsIFxcJ0x1Y2lkYSBHcmFuZGVcXCcsIFxcJ0JpdHN0cmVhbSBWZXJhIFNhbnNcXCcsIFxcJ0hlbHZldGljYSBOZXVlXFwnLCBzYW5zLXNlcmlmJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3otaW5kZXgnLCAnMjE0NzQ4MzY0NicpLFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKGNvbmZpZy5yZXN1bWUpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd0b3AnLCAnY2FsYyg1MCUgLSA0MHB4KScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1zaXplJywgJzgwcHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2xpbmUtaGVpZ2h0JywgJzgwcHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICc4MHB4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJylcblx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnQ2xpY2sgdG8gUmVzdW1lJylcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01pbmlDb250cm9scywgY29uZmlnLCBudW1Nc2dzKVxuXHRcdFx0XHRcdFx0XSkpIDogQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWluaUNvbnRyb2xzLCBjb25maWcsIG51bU1zZ3MpKTtcblx0XHRcdGNhc2UgJ0JhZE1ldGFkYXRhJzpcblx0XHRcdFx0dmFyIGJhZE1ldGFkYXRhXyA9IHN0YXRlLmE7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZXNzYWdlLFxuXHRcdFx0XHRcdGNvbmZpZyxcblx0XHRcdFx0XHQnQ2Fubm90IHVzZSBJbXBvcnQgb3IgRXhwb3J0Jyxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdCYWRNZXRhZGF0YShiYWRNZXRhZGF0YV8pLFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQWNjZXB0KCdPaycpKTtcblx0XHRcdGNhc2UgJ0JhZEltcG9ydCc6XG5cdFx0XHRcdHZhciByZXBvcnQgPSBzdGF0ZS5hO1xuXHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVzc2FnZSxcblx0XHRcdFx0XHRjb25maWcsXG5cdFx0XHRcdFx0J0Nhbm5vdCBJbXBvcnQgSGlzdG9yeScsXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3UmVwb3J0LCB0cnVlLCByZXBvcnQpLFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQWNjZXB0KCdPaycpKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciByZXBvcnQgPSBzdGF0ZS5hO1xuXHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVzc2FnZSxcblx0XHRcdFx0XHRjb25maWcsXG5cdFx0XHRcdFx0J1dhcm5pbmcnLFxuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld1JlcG9ydCwgZmFsc2UsIHJlcG9ydCksXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRDaG9vc2UsICdDYW5jZWwnLCAnSW1wb3J0IEFueXdheScpKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kY29ybmVyVmlldyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gQTUoXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3LFxuXHRcdHtleHBvcnRIaXN0b3J5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEV4cG9ydCwgaW1wb3J0SGlzdG9yeTogZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRJbXBvcnQsIG9wZW46IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kT3BlbiwgcmVzdW1lOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJlc3VtZSwgd3JhcDogZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRPdmVybGF5TXNnfSxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGlzUGF1c2VkKG1vZGVsLnN0YXRlKSxcblx0XHRfRGVidWdnZXJfaXNPcGVuKG1vZGVsLnBvcG91dCksXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRzaXplKG1vZGVsLmhpc3RvcnkpLFxuXHRcdG1vZGVsLm92ZXJsYXkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldEN1cnJlbnRNb2RlbCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRpZiAoc3RhdGUuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0dmFyIG1vZGVsID0gc3RhdGUuYTtcblx0XHRyZXR1cm4gbW9kZWw7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIG1vZGVsID0gc3RhdGUuYjtcblx0XHRyZXR1cm4gbW9kZWw7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRVc2VyTW9kZWwgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0Q3VycmVudE1vZGVsKG1vZGVsLnN0YXRlKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRGaWVsZCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0ZpZWxkJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXggPSBGMyhcblx0ZnVuY3Rpb24gKGEsIGIsIGMpIHtcblx0XHRyZXR1cm4geyQ6ICdJbmRleCcsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEtleSA9IHskOiAnS2V5J307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyROb25lID0geyQ6ICdOb25lJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRUb2dnbGUgPSB7JDogJ1RvZ2dsZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVmFsdWUgPSB7JDogJ1ZhbHVlJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRibHVlID0gQTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAncmdiKDI4LCAwLCAyMDcpJyk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsZWZ0UGFkID0gZnVuY3Rpb24gKG1heWJlS2V5KSB7XG5cdGlmIChtYXliZUtleS4kID09PSAnTm90aGluZycpIHtcblx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICc0Y2gnKVxuXHRcdFx0XSk7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtYWtlQXJyb3cgPSBmdW5jdGlvbiAoYXJyb3cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJyM3NzcnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZy1sZWZ0JywgJzJjaCcpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcyY2gnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuXHRcdFx0XSksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoYXJyb3cpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kcHVycGxlID0gQTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAncmdiKDEzNiwgMTksIDE0NSknKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyID0gRjMoXG5cdGZ1bmN0aW9uIChtYXliZUtleSwgbWF5YmVJc0Nsb3NlZCwgZGVzY3JpcHRpb24pIHtcblx0XHR2YXIgYXJyb3cgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAobWF5YmVJc0Nsb3NlZC4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWFrZUFycm93KCcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChtYXliZUlzQ2xvc2VkLmEpIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtYWtlQXJyb3coJ+KWuCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1ha2VBcnJvdygn4pa+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KCk7XG5cdFx0aWYgKG1heWJlS2V5LiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0cmV0dXJuIEEyKGVsbSRjb3JlJExpc3QkY29ucywgYXJyb3csIGRlc2NyaXB0aW9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGtleSA9IG1heWJlS2V5LmE7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0YXJyb3csXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W2VsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kcHVycGxlXSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoa2V5KVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyA9ICcpLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb24pKSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHJlZCA9IEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJ3JnYigxOTYsIDI2LCAyMiknKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHNlcVR5cGVUb1N0cmluZyA9IEYyKFxuXHRmdW5jdGlvbiAobiwgc2VxVHlwZSkge1xuXHRcdHN3aXRjaCAoc2VxVHlwZS4kKSB7XG5cdFx0XHRjYXNlICdMaXN0U2VxJzpcblx0XHRcdFx0cmV0dXJuICdMaXN0KCcgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobikgKyAnKScpO1xuXHRcdFx0Y2FzZSAnU2V0U2VxJzpcblx0XHRcdFx0cmV0dXJuICdTZXQoJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChuKSArICcpJyk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gJ0FycmF5KCcgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobikgKyAnKScpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkU3RyaW5nJHNsaWNlID0gX1N0cmluZ19zbGljZTtcbnZhciBlbG0kY29yZSRTdHJpbmckbGVmdCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChuIDwgMSkgPyAnJyA6IEEzKGVsbSRjb3JlJFN0cmluZyRzbGljZSwgMCwgbiwgc3RyaW5nKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkU3RyaW5nJGxlbmd0aCA9IF9TdHJpbmdfbGVuZ3RoO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRuZWdhdGUgPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gLW47XG59O1xudmFyIGVsbSRjb3JlJFN0cmluZyRyaWdodCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChuIDwgMSkgPyAnJyA6IEEzKFxuXHRcdFx0ZWxtJGNvcmUkU3RyaW5nJHNsaWNlLFxuXHRcdFx0LW4sXG5cdFx0XHRlbG0kY29yZSRTdHJpbmckbGVuZ3RoKHN0cmluZyksXG5cdFx0XHRzdHJpbmcpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGVsaWRlTWlkZGxlID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gKGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoc3RyKSA8PSAxOCkgPyBzdHIgOiAoQTIoZWxtJGNvcmUkU3RyaW5nJGxlZnQsIDgsIHN0cikgKyAoJy4uLicgKyBBMihlbG0kY29yZSRTdHJpbmckcmlnaHQsIDgsIHN0cikpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RXh0cmFUaW55UmVjb3JkID0gRjMoXG5cdGZ1bmN0aW9uIChsZW5ndGgsIHN0YXJ0ZXIsIGVudHJpZXMpIHtcblx0XHRpZiAoIWVudHJpZXMuYikge1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdGxlbmd0aCArIDEsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ30nKVxuXHRcdFx0XHRcdF0pKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGZpZWxkID0gZW50cmllcy5hO1xuXHRcdFx0dmFyIHJlc3QgPSBlbnRyaWVzLmI7XG5cdFx0XHR2YXIgbmV4dExlbmd0aCA9IChsZW5ndGggKyBlbG0kY29yZSRTdHJpbmckbGVuZ3RoKGZpZWxkKSkgKyAxO1xuXHRcdFx0aWYgKG5leHRMZW5ndGggPiAxOCkge1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRsZW5ndGggKyAyLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCfigKZ9Jylcblx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfbjEgPSBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdFeHRyYVRpbnlSZWNvcmQsIG5leHRMZW5ndGgsICcsJywgcmVzdCk7XG5cdFx0XHRcdHZhciBmaW5hbExlbmd0aCA9IF9uMS5hO1xuXHRcdFx0XHR2YXIgb3RoZXJIdG1scyA9IF9uMS5iO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRmaW5hbExlbmd0aCxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdGFydGVyKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRwdXJwbGVdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChmaWVsZClcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0b3RoZXJIdG1scykpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlIZWxwID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRlbG0kY29yZSRTdHJpbmckbGVuZ3RoKHN0ciksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RyKVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kY29yZSREaWN0JGlzRW1wdHkgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkTWF5YmUkd2l0aERlZmF1bHQgPSBGMihcblx0ZnVuY3Rpb24gKF9kZWZhdWx0LCBtYXliZSkge1xuXHRcdGlmIChtYXliZS4kID09PSAnSnVzdCcpIHtcblx0XHRcdHZhciB2YWx1ZSA9IG1heWJlLmE7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZGVmYXVsdDtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAodmFsdWUuJCA9PT0gJ1JlY29yZCcpIHtcblx0XHR2YXIgcmVjb3JkID0gdmFsdWUuYjtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdFeHRyYVRpbnlSZWNvcmQsXG5cdFx0XHQwLFxuXHRcdFx0J3snLFxuXHRcdFx0ZWxtJGNvcmUkRGljdCRrZXlzKHJlY29yZCkpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55KHZhbHVlKTtcblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHN3aXRjaCAodmFsdWUuJCkge1xuXHRcdGNhc2UgJ1MnOlxuXHRcdFx0dmFyIHN0cmluZ1JlcCA9IHZhbHVlLmE7XG5cdFx0XHR2YXIgc3RyID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRlbGlkZU1pZGRsZShzdHJpbmdSZXApO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoc3RyKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRyZWRdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdHIpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKTtcblx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0dmFyIHN0cmluZ1JlcCA9IHZhbHVlLmE7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHJpbmdSZXApLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGJsdWVdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdHJpbmdSZXApXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKTtcblx0XHRjYXNlICdTZXF1ZW5jZSc6XG5cdFx0XHR2YXIgc2VxVHlwZSA9IHZhbHVlLmE7XG5cdFx0XHR2YXIgdmFsdWVMaXN0ID0gdmFsdWUuYztcblx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55SGVscChcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRzZXFUeXBlVG9TdHJpbmcsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRsZW5ndGgodmFsdWVMaXN0KSxcblx0XHRcdFx0XHRzZXFUeXBlKSk7XG5cdFx0Y2FzZSAnRGljdGlvbmFyeSc6XG5cdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IHZhbHVlLmI7XG5cdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueUhlbHAoXG5cdFx0XHRcdCdEaWN0KCcgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRsZW5ndGgoa2V5VmFsdWVQYWlycykpICsgJyknKSk7XG5cdFx0Y2FzZSAnUmVjb3JkJzpcblx0XHRcdHZhciByZWNvcmQgPSB2YWx1ZS5iO1xuXHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlSZWNvcmQocmVjb3JkKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0aWYgKCF2YWx1ZS5jLmIpIHtcblx0XHRcdFx0dmFyIG1heWJlTmFtZSA9IHZhbHVlLmE7XG5cdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55SGVscChcblx0XHRcdFx0XHRBMihlbG0kY29yZSRNYXliZSR3aXRoRGVmYXVsdCwgJ1VuaXQnLCBtYXliZU5hbWUpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBtYXliZU5hbWUgPSB2YWx1ZS5hO1xuXHRcdFx0XHR2YXIgdmFsdWVMaXN0ID0gdmFsdWUuYztcblx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlIZWxwKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChtYXliZU5hbWUuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAnVHVwbGUoJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGxlbmd0aCh2YWx1ZUxpc3QpKSArICcpJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgbmFtZSA9IG1heWJlTmFtZS5hO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbmFtZSArICcg4oCmJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCkpO1xuXHRcdFx0fVxuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlSZWNvcmQgPSBmdW5jdGlvbiAocmVjb3JkKSB7XG5cdHJldHVybiBlbG0kY29yZSREaWN0JGlzRW1wdHkocmVjb3JkKSA/IF9VdGlsc19UdXBsZTIoXG5cdFx0Mixcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgne30nKVxuXHRcdFx0XSkpIDogQTMoXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZEhlbHAsXG5cdFx0MCxcblx0XHQneyAnLFxuXHRcdGVsbSRjb3JlJERpY3QkdG9MaXN0KHJlY29yZCkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55UmVjb3JkSGVscCA9IEYzKFxuXHRmdW5jdGlvbiAobGVuZ3RoLCBzdGFydGVyLCBlbnRyaWVzKSB7XG5cdFx0aWYgKCFlbnRyaWVzLmIpIHtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRsZW5ndGggKyAyLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgfScpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24xID0gZW50cmllcy5hO1xuXHRcdFx0dmFyIGZpZWxkID0gX24xLmE7XG5cdFx0XHR2YXIgdmFsdWUgPSBfbjEuYjtcblx0XHRcdHZhciByZXN0ID0gZW50cmllcy5iO1xuXHRcdFx0dmFyIGZpZWxkTGVuID0gZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChmaWVsZCk7XG5cdFx0XHR2YXIgX24yID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RXh0cmFUaW55KHZhbHVlKTtcblx0XHRcdHZhciB2YWx1ZUxlbiA9IF9uMi5hO1xuXHRcdFx0dmFyIHZhbHVlSHRtbHMgPSBfbjIuYjtcblx0XHRcdHZhciBuZXdMZW5ndGggPSAoKGxlbmd0aCArIGZpZWxkTGVuKSArIHZhbHVlTGVuKSArIDU7XG5cdFx0XHRpZiAobmV3TGVuZ3RoID4gNjApIHtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0bGVuZ3RoICsgNCxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnLCDigKYgfScpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX24zID0gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZEhlbHAsIG5ld0xlbmd0aCwgJywgJywgcmVzdCk7XG5cdFx0XHRcdHZhciBmaW5hbExlbmd0aCA9IF9uMy5hO1xuXHRcdFx0XHR2YXIgb3RoZXJIdG1scyA9IF9uMy5iO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRmaW5hbExlbmd0aCxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdGFydGVyKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRwdXJwbGVdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChmaWVsZClcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnID0gJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJHNwYW4sIF9MaXN0X05pbCwgdmFsdWVIdG1scyksXG5cdFx0XHRcdFx0XHRcdFx0XHRvdGhlckh0bWxzKSkpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkY29tcG9zZUwgPSBGMyhcblx0ZnVuY3Rpb24gKGcsIGYsIHgpIHtcblx0XHRyZXR1cm4gZyhcblx0XHRcdGYoeCkpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRUdXBsZSRzZWNvbmQgPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciB5ID0gX24wLmI7XG5cdHJldHVybiB5O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcgPSBGMihcblx0ZnVuY3Rpb24gKG1heWJlS2V5LCBleHBhbmRvKSB7XG5cdFx0c3dpdGNoIChleHBhbmRvLiQpIHtcblx0XHRcdGNhc2UgJ1MnOlxuXHRcdFx0XHR2YXIgc3RyaW5nUmVwID0gZXhwYW5kby5hO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsZWZ0UGFkKG1heWJlS2V5KSxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGluZVN0YXJ0ZXIsXG5cdFx0XHRcdFx0XHRtYXliZUtleSxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W2VsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kcmVkXSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RyaW5nUmVwKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKSk7XG5cdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHR2YXIgc3RyaW5nUmVwID0gZXhwYW5kby5hO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsZWZ0UGFkKG1heWJlS2V5KSxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGluZVN0YXJ0ZXIsXG5cdFx0XHRcdFx0XHRtYXliZUtleSxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W2VsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kYmx1ZV0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0cmluZ1JlcClcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSkpO1xuXHRcdFx0Y2FzZSAnU2VxdWVuY2UnOlxuXHRcdFx0XHR2YXIgc2VxVHlwZSA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gZXhwYW5kby5iO1xuXHRcdFx0XHR2YXIgdmFsdWVMaXN0ID0gZXhwYW5kby5jO1xuXHRcdFx0XHRyZXR1cm4gQTQoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3U2VxdWVuY2UsIG1heWJlS2V5LCBzZXFUeXBlLCBpc0Nsb3NlZCwgdmFsdWVMaXN0KTtcblx0XHRcdGNhc2UgJ0RpY3Rpb25hcnknOlxuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBrZXlWYWx1ZVBhaXJzID0gZXhwYW5kby5iO1xuXHRcdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RGljdGlvbmFyeSwgbWF5YmVLZXksIGlzQ2xvc2VkLCBrZXlWYWx1ZVBhaXJzKTtcblx0XHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIHZhbHVlRGljdCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1JlY29yZCwgbWF5YmVLZXksIGlzQ2xvc2VkLCB2YWx1ZURpY3QpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIG1heWJlTmFtZSA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gZXhwYW5kby5iO1xuXHRcdFx0XHR2YXIgdmFsdWVMaXN0ID0gZXhwYW5kby5jO1xuXHRcdFx0XHRyZXR1cm4gQTQoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3IsIG1heWJlS2V5LCBtYXliZU5hbWUsIGlzQ2xvc2VkLCB2YWx1ZUxpc3QpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3IgPSBGNChcblx0ZnVuY3Rpb24gKG1heWJlS2V5LCBtYXliZU5hbWUsIGlzQ2xvc2VkLCB2YWx1ZUxpc3QpIHtcblx0XHR2YXIgdGlueUFyZ3MgPSBBMihcblx0XHRcdGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0QTIoZWxtJGNvcmUkQmFzaWNzJGNvbXBvc2VMLCBlbG0kY29yZSRUdXBsZSRzZWNvbmQsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueSksXG5cdFx0XHR2YWx1ZUxpc3QpO1xuXHRcdHZhciBkZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBfbjcgPSBfVXRpbHNfVHVwbGUyKG1heWJlTmFtZSwgdGlueUFyZ3MpO1xuXHRcdFx0aWYgKF9uNy5hLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRpZiAoIV9uNy5iLmIpIHtcblx0XHRcdFx0XHR2YXIgX244ID0gX243LmE7XG5cdFx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcoKScpXG5cdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgX245ID0gX243LmE7XG5cdFx0XHRcdFx0dmFyIF9uMTAgPSBfbjcuYjtcblx0XHRcdFx0XHR2YXIgeCA9IF9uMTAuYTtcblx0XHRcdFx0XHR2YXIgeHMgPSBfbjEwLmI7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcoICcpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRzcGFuLCBfTGlzdF9OaWwsIHgpLFxuXHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0XHRcdFx0XHRcdEYyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGFyZ3MsIHJlc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJywgJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJHNwYW4sIF9MaXN0X05pbCwgYXJncyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN0KSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnICknKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0eHMpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghX243LmIuYikge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gX243LmEuYTtcblx0XHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQobmFtZSlcblx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gX243LmEuYTtcblx0XHRcdFx0XHR2YXIgX24xMSA9IF9uNy5iO1xuXHRcdFx0XHRcdHZhciB4ID0gX24xMS5hO1xuXHRcdFx0XHRcdHZhciB4cyA9IF9uMTEuYjtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQobmFtZSArICcgJyksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJHNwYW4sIF9MaXN0X05pbCwgeCksXG5cdFx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRcdFx0XHRcdFx0RjIoXG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoYXJncywgcmVzdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnICcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRzcGFuLCBfTGlzdF9OaWwsIGFyZ3MpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdCkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRcdHhzKSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSgpO1xuXHRcdHZhciBfbjQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIXZhbHVlTGlzdC5iKSB7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIXZhbHVlTGlzdC5iLmIpIHtcblx0XHRcdFx0XHR2YXIgZW50cnkgPSB2YWx1ZUxpc3QuYTtcblx0XHRcdFx0XHRzd2l0Y2ggKGVudHJ5LiQpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ1MnOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbCkpO1xuXHRcdFx0XHRcdFx0Y2FzZSAnUHJpbWl0aXZlJzpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJGRpdiwgX0xpc3RfTmlsLCBfTGlzdF9OaWwpKTtcblx0XHRcdFx0XHRcdGNhc2UgJ1NlcXVlbmNlJzpcblx0XHRcdFx0XHRcdFx0dmFyIHN1YlZhbHVlTGlzdCA9IGVudHJ5LmM7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0XHRcdGlzQ2xvc2VkID8gQTIoZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSA6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUsIDApLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3U2VxdWVuY2VPcGVuKHN1YlZhbHVlTGlzdCkpKTtcblx0XHRcdFx0XHRcdGNhc2UgJ0RpY3Rpb25hcnknOlxuXHRcdFx0XHRcdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IGVudHJ5LmI7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0XHRcdGlzQ2xvc2VkID8gQTIoZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSA6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUsIDApLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RGljdGlvbmFyeU9wZW4oa2V5VmFsdWVQYWlycykpKTtcblx0XHRcdFx0XHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHRcdFx0XHRcdHZhciByZWNvcmQgPSBlbnRyeS5iO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KGlzQ2xvc2VkKSxcblx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCA/IEEyKGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbCkgOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyROb25lLCAwKSxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1JlY29yZE9wZW4ocmVjb3JkKSkpO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0dmFyIHN1YlZhbHVlTGlzdCA9IGVudHJ5LmM7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0XHRcdGlzQ2xvc2VkID8gQTIoZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSA6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUsIDApLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3JPcGVuKHN1YlZhbHVlTGlzdCkpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KGlzQ2xvc2VkKSxcblx0XHRcdFx0XHRcdGlzQ2xvc2VkID8gQTIoZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSA6IGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0NvbnN0cnVjdG9yT3Blbih2YWx1ZUxpc3QpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0oKTtcblx0XHR2YXIgbWF5YmVJc0Nsb3NlZCA9IF9uNC5hO1xuXHRcdHZhciBvcGVuSHRtbCA9IF9uNC5iO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsZWZ0UGFkKG1heWJlS2V5KSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFRvZ2dsZSlcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGluZVN0YXJ0ZXIsIG1heWJlS2V5LCBtYXliZUlzQ2xvc2VkLCBkZXNjcmlwdGlvbikpLFxuXHRcdFx0XHRcdG9wZW5IdG1sXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3JFbnRyeSA9IEYyKFxuXHRmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUsIGluZGV4KSxcblx0XHRcdEEyKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaW5kZXgpKSxcblx0XHRcdFx0dmFsdWUpKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3JPcGVuID0gZnVuY3Rpb24gKHZhbHVlTGlzdCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfTmlsLFxuXHRcdEEyKGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3JFbnRyeSwgdmFsdWVMaXN0KSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnkgPSBGMyhcblx0ZnVuY3Rpb24gKG1heWJlS2V5LCBpc0Nsb3NlZCwga2V5VmFsdWVQYWlycykge1xuXHRcdHZhciBzdGFydGVyID0gJ0RpY3QoJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChcblx0XHRcdGVsbSRjb3JlJExpc3QkbGVuZ3RoKGtleVZhbHVlUGFpcnMpKSArICcpJyk7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQobWF5YmVLZXkpLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVG9nZ2xlKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyLFxuXHRcdFx0XHRcdFx0bWF5YmVLZXksXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KGlzQ2xvc2VkKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdGFydGVyKVxuXHRcdFx0XHRcdFx0XHRdKSkpLFxuXHRcdFx0XHRcdGlzQ2xvc2VkID8gZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKSA6IGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnlPcGVuKGtleVZhbHVlUGFpcnMpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RGljdGlvbmFyeUVudHJ5ID0gRjIoXG5cdGZ1bmN0aW9uIChpbmRleCwgX24yKSB7XG5cdFx0dmFyIGtleSA9IF9uMi5hO1xuXHRcdHZhciB2YWx1ZSA9IF9uMi5iO1xuXHRcdHN3aXRjaCAoa2V5LiQpIHtcblx0XHRcdGNhc2UgJ1MnOlxuXHRcdFx0XHR2YXIgc3RyaW5nUmVwID0ga2V5LmE7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFZhbHVlLCBpbmRleCksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KHN0cmluZ1JlcCksXG5cdFx0XHRcdFx0XHR2YWx1ZSkpO1xuXHRcdFx0Y2FzZSAnUHJpbWl0aXZlJzpcblx0XHRcdFx0dmFyIHN0cmluZ1JlcCA9IGtleS5hO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRWYWx1ZSwgaW5kZXgpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChzdHJpbmdSZXApLFxuXHRcdFx0XHRcdFx0dmFsdWUpKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kS2V5LCBpbmRleCksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldyxcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KCdrZXknKSxcblx0XHRcdFx0XHRcdFx0XHRrZXkpKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFZhbHVlLCBpbmRleCksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldyxcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KCd2YWx1ZScpLFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlKSlcblx0XHRcdFx0XHRcdF0pKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnlPcGVuID0gZnVuY3Rpb24gKGtleVZhbHVlUGFpcnMpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X05pbCxcblx0XHRBMihlbG0kY29yZSRMaXN0JGluZGV4ZWRNYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnlFbnRyeSwga2V5VmFsdWVQYWlycykpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdSZWNvcmQgPSBGMyhcblx0ZnVuY3Rpb24gKG1heWJlS2V5LCBpc0Nsb3NlZCwgcmVjb3JkKSB7XG5cdFx0dmFyIF9uMSA9IGlzQ2xvc2VkID8gX1V0aWxzX1R1cGxlMyhcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlSZWNvcmQocmVjb3JkKS5iLFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKSxcblx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnJykpIDogX1V0aWxzX1R1cGxlMyhcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgneycpXG5cdFx0XHRcdF0pLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkT3BlbihyZWNvcmQpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChfVXRpbHNfVHVwbGUwKSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ30nKVxuXHRcdFx0XHRcdF0pKSk7XG5cdFx0dmFyIHN0YXJ0ID0gX24xLmE7XG5cdFx0dmFyIG1pZGRsZSA9IF9uMS5iO1xuXHRcdHZhciBlbmQgPSBfbjEuYztcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChtYXliZUtleSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRUb2dnbGUpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGluZVN0YXJ0ZXIsXG5cdFx0XHRcdFx0XHRtYXliZUtleSxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0c3RhcnQpKSxcblx0XHRcdFx0XHRtaWRkbGUsXG5cdFx0XHRcdFx0ZW5kXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkRW50cnkgPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBmaWVsZCA9IF9uMC5hO1xuXHR2YXIgdmFsdWUgPSBfbjAuYjtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRmllbGQoZmllbGQpLFxuXHRcdEEyKFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LFxuXHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChmaWVsZCksXG5cdFx0XHR2YWx1ZSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdSZWNvcmRPcGVuID0gZnVuY3Rpb24gKHJlY29yZCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfTmlsLFxuXHRcdEEyKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdSZWNvcmRFbnRyeSxcblx0XHRcdGVsbSRjb3JlJERpY3QkdG9MaXN0KHJlY29yZCkpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3U2VxdWVuY2UgPSBGNChcblx0ZnVuY3Rpb24gKG1heWJlS2V5LCBzZXFUeXBlLCBpc0Nsb3NlZCwgdmFsdWVMaXN0KSB7XG5cdFx0dmFyIHN0YXJ0ZXIgPSBBMihcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kc2VxVHlwZVRvU3RyaW5nLFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRsZW5ndGgodmFsdWVMaXN0KSxcblx0XHRcdHNlcVR5cGUpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsZWZ0UGFkKG1heWJlS2V5KSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFRvZ2dsZSlcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlcixcblx0XHRcdFx0XHRcdG1heWJlS2V5LFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RhcnRlcilcblx0XHRcdFx0XHRcdFx0XSkpKSxcblx0XHRcdFx0XHRpc0Nsb3NlZCA/IGVsbSRodG1sJEh0bWwkdGV4dCgnJykgOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdTZXF1ZW5jZU9wZW4odmFsdWVMaXN0KVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1NlcXVlbmNlT3BlbiA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X05pbCxcblx0XHRBMihlbG0kY29yZSRMaXN0JGluZGV4ZWRNYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0NvbnN0cnVjdG9yRW50cnksIHZhbHVlcykpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEV4cGFuZG9Nc2cgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdFeHBhbmRvTXNnJywgYTogYX07XG59O1xudmFyIGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyR0aXRsZSA9IGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSgndGl0bGUnKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXdNZXNzYWdlID0gRjMoXG5cdGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIGluZGV4LCBtc2cpIHtcblx0XHR2YXIgbWVzc2FnZU5hbWUgPSBfRGVidWdnZXJfbWVzc2FnZVRvU3RyaW5nKG1zZyk7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9VdGlsc19lcShjdXJyZW50SW5kZXgsIGluZGV4KSA/ICdlbG0tZGVidWdnZXItZW50cnkgZWxtLWRlYnVnZ2VyLWVudHJ5LXNlbGVjdGVkJyA6ICdlbG0tZGVidWdnZXItZW50cnknO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKGNsYXNzTmFtZSksXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhpbmRleClcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkdGl0bGUobWVzc2FnZU5hbWUpLFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2VsbS1kZWJ1Z2dlci1lbnRyeS1jb250ZW50Jylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KG1lc3NhZ2VOYW1lKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnZWxtLWRlYnVnZ2VyLWVudHJ5LWluZGV4Jylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckZnJvbUludChpbmRleCkpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRsYXp5MyA9IF9WaXJ0dWFsRG9tX2xhenkzO1xudmFyIGVsbSRodG1sJEh0bWwkTGF6eSRsYXp5MyA9IGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGxhenkzO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc01zZyA9IEYzKFxuXHRmdW5jdGlvbiAoY3VycmVudEluZGV4LCBtc2csIF9uMCkge1xuXHRcdHZhciBpbmRleCA9IF9uMC5hO1xuXHRcdHZhciByZXN0ID0gX24wLmI7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRpbmRleCAtIDEsXG5cdFx0XHRBMihcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRBNChlbG0kaHRtbCRIdG1sJExhenkkbGF6eTMsIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld01lc3NhZ2UsIGN1cnJlbnRJbmRleCwgaW5kZXgsIG1zZyksXG5cdFx0XHRcdHJlc3QpKTtcblx0fSk7XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZSA9IGZ1bmN0aW9uICh0YWcpIHtcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX25vZGUoXG5cdFx0X1ZpcnR1YWxEb21fbm9TY3JpcHQodGFnKSk7XG59O1xudmFyIGVsbSRodG1sJEh0bWwkbm9kZSA9IGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG5vZGU7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRzdHlsZXMgPSBBMyhcblx0ZWxtJGh0bWwkSHRtbCRub2RlLFxuXHQnc3R5bGUnLFxuXHRfTGlzdF9OaWwsXG5cdF9MaXN0X2Zyb21BcnJheShcblx0XHRbXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ1xcblxcbi5lbG0tZGVidWdnZXItZW50cnkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lbG0tZGVidWdnZXItZW50cnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0MSwgNDEpO1xcbn1cXG5cXG4uZWxtLWRlYnVnZ2VyLWVudHJ5LXNlbGVjdGVkLCAuZWxtLWRlYnVnZ2VyLWVudHJ5LXNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcXG59XFxuXFxuLmVsbS1kZWJ1Z2dlci1lbnRyeS1jb250ZW50IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3Y2gpO1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDFjaDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5lbG0tZGVidWdnZXItZW50cnktaW5kZXgge1xcbiAgY29sb3I6ICM2NjY7XFxuICB3aWR0aDogNWNoO1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxY2g7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4nKVxuXHRcdF0pKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSA9IDY0O1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRsID0gX0pzQXJyYXlfZm9sZGw7XG52YXIgZWxtJGNvcmUkQXJyYXkkZm9sZGwgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGJhc2VDYXNlLCBfbjApIHtcblx0XHR2YXIgdHJlZSA9IF9uMC5jO1xuXHRcdHZhciB0YWlsID0gX24wLmQ7XG5cdFx0dmFyIGhlbHBlciA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKG5vZGUsIGFjYykge1xuXHRcdFx0XHRpZiAobm9kZS4kID09PSAnU3ViVHJlZScpIHtcblx0XHRcdFx0XHR2YXIgc3ViVHJlZSA9IG5vZGUuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZGwsIGhlbHBlciwgYWNjLCBzdWJUcmVlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgdmFsdWVzID0gbm9kZS5hO1xuXHRcdFx0XHRcdHJldHVybiBBMyhlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkbCwgZnVuYywgYWNjLCB2YWx1ZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkbCxcblx0XHRcdGZ1bmMsXG5cdFx0XHRBMyhlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkbCwgaGVscGVyLCBiYXNlQ2FzZSwgdHJlZSksXG5cdFx0XHR0YWlsKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3U25hcHNob3QgPSBGMyhcblx0ZnVuY3Rpb24gKGN1cnJlbnRJbmRleCwgaW5kZXgsIF9uMCkge1xuXHRcdHZhciBtZXNzYWdlcyA9IF9uMC5tZXNzYWdlcztcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdEEzKFxuXHRcdFx0XHRlbG0kY29yZSRBcnJheSRmb2xkbCxcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRjb25zTXNnKGN1cnJlbnRJbmRleCksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoaW5kZXggLSAxLCBfTGlzdF9OaWwpLFxuXHRcdFx0XHRtZXNzYWdlcykuYik7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc1NuYXBzaG90ID0gRjMoXG5cdGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIHNuYXBzaG90LCBfbjApIHtcblx0XHR2YXIgaW5kZXggPSBfbjAuYTtcblx0XHR2YXIgcmVzdCA9IF9uMC5iO1xuXHRcdHZhciBuZXh0SW5kZXggPSBpbmRleCAtIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplO1xuXHRcdHZhciBjdXJyZW50SW5kZXhIZWxwID0gKChfVXRpbHNfY21wKG5leHRJbmRleCwgY3VycmVudEluZGV4KSA8IDEpICYmIChfVXRpbHNfY21wKGN1cnJlbnRJbmRleCwgaW5kZXgpIDwgMCkpID8gY3VycmVudEluZGV4IDogKC0xKTtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdGluZGV4IC0gZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRtYXhTbmFwc2hvdFNpemUsXG5cdFx0XHRBMihcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRBNChlbG0kaHRtbCRIdG1sJExhenkkbGF6eTMsIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld1NuYXBzaG90LCBjdXJyZW50SW5kZXhIZWxwLCBpbmRleCwgc25hcHNob3QpLFxuXHRcdFx0XHRyZXN0KSk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJEFycmF5JGxlbmd0aCA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIGxlbiA9IF9uMC5hO1xuXHRyZXR1cm4gbGVuO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXdTbmFwc2hvdHMgPSBGMihcblx0ZnVuY3Rpb24gKGN1cnJlbnRJbmRleCwgc25hcHNob3RzKSB7XG5cdFx0dmFyIGhpZ2hJbmRleCA9IGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplICogZWxtJGNvcmUkQXJyYXkkbGVuZ3RoKHNuYXBzaG90cyk7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRBMyhcblx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkZm9sZHIsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc1NuYXBzaG90KGN1cnJlbnRJbmRleCksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoaGlnaEluZGV4LCBfTGlzdF9OaWwpLFxuXHRcdFx0XHRzbmFwc2hvdHMpLmIpO1xuXHR9KTtcbnZhciBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRsYXp5MiA9IF9WaXJ0dWFsRG9tX2xhenkyO1xudmFyIGVsbSRodG1sJEh0bWwkTGF6eSRsYXp5MiA9IGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGxhenkyO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkdmlldyA9IEYyKFxuXHRmdW5jdGlvbiAobWF5YmVJbmRleCwgX24wKSB7XG5cdFx0dmFyIHNuYXBzaG90cyA9IF9uMC5zbmFwc2hvdHM7XG5cdFx0dmFyIHJlY2VudCA9IF9uMC5yZWNlbnQ7XG5cdFx0dmFyIG51bU1lc3NhZ2VzID0gX24wLm51bU1lc3NhZ2VzO1xuXHRcdHZhciBfbjEgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAobWF5YmVJbmRleC4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoLTEsICdjYWxjKDEwMCUgLSAyNHB4KScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGkgPSBtYXliZUluZGV4LmE7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKGksICdjYWxjKDEwMCUgLSA1NHB4KScpO1xuXHRcdFx0fVxuXHRcdH0oKTtcblx0XHR2YXIgaW5kZXggPSBfbjEuYTtcblx0XHR2YXIgaGVpZ2h0ID0gX24xLmI7XG5cdFx0dmFyIG5ld1N0dWZmID0gQTMoXG5cdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRjb25zTXNnKGluZGV4KSxcblx0XHRcdF9VdGlsc19UdXBsZTIobnVtTWVzc2FnZXMgLSAxLCBfTGlzdF9OaWwpLFxuXHRcdFx0cmVjZW50Lm1lc3NhZ2VzKS5iO1xuXHRcdHZhciBvbGRTdHVmZiA9IEEzKGVsbSRodG1sJEh0bWwkTGF6eSRsYXp5MiwgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3U25hcHNob3RzLCBpbmRleCwgc25hcHNob3RzKTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRpZCgnZWxtLWRlYnVnZ2VyLXNpZGViYXInKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnb3ZlcmZsb3cteScsICdhdXRvJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgaGVpZ2h0KVxuXHRcdFx0XHRdKSxcblx0XHRcdEEyKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc3R5bGVzLFxuXHRcdFx0XHRBMihlbG0kY29yZSRMaXN0JGNvbnMsIG9sZFN0dWZmLCBuZXdTdHVmZikpKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRKdW1wID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnSnVtcCcsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHJlc3VtZVN0eWxlID0gJ1xcblxcbi5lbG0tZGVidWdnZXItcmVzdW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbG0tZGVidWdnZXItcmVzdW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcXG59XFxuXFxuJztcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdSZXN1bWVCdXR0b24gPSBmdW5jdGlvbiAobWF5YmVJbmRleCkge1xuXHRpZiAobWF5YmVJbmRleC4kID09PSAnTm90aGluZycpIHtcblx0XHRyZXR1cm4gZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSZXN1bWUpLFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnZWxtLWRlYnVnZ2VyLXJlc3VtZScpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdSZXN1bWUnKSxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG5vZGUsXG5cdFx0XHRcdFx0J3N0eWxlJyxcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRyZXN1bWVTdHlsZSlcblx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRdKSk7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3VGV4dEJ1dHRvbiA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCBsYWJlbCkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2sobXNnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGxhYmVsKVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kcGxheUJ1dHRvbiA9IGZ1bmN0aW9uIChtYXliZUluZGV4KSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndGV4dC1hbGlnbicsICdjZW50ZXInKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoNTAsIDUwLCA1MCknKVxuXHRcdFx0XSksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdSZXN1bWVCdXR0b24obWF5YmVJbmRleCksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcyNHB4JyksXG5cdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdsaW5lLWhlaWdodCcsICcyNHB4JyksXG5cdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LXNpemUnLCAnMTJweCcpXG5cdFx0XHRcdFx0XSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdUZXh0QnV0dG9uLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEltcG9ydCwgJ0ltcG9ydCcpLFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgLyAnKSxcblx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld1RleHRCdXR0b24sIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRXhwb3J0LCAnRXhwb3J0Jylcblx0XHRcdFx0XHRdKSlcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3U2lkZWJhciA9IEYyKFxuXHRmdW5jdGlvbiAoc3RhdGUsIGhpc3RvcnkpIHtcblx0XHR2YXIgbWF5YmVJbmRleCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChzdGF0ZS4kID09PSAnUnVubmluZycpIHtcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaW5kZXggPSBzdGF0ZS5hO1xuXHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkSnVzdChpbmRleCk7XG5cdFx0XHR9XG5cdFx0fSgpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZGlzcGxheScsICdibG9jaycpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2Zsb2F0JywgJ2xlZnQnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICczMGNoJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICd3aGl0ZScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDYxLCA2MSwgNjEpJylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEp1bXAsXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3LCBtYXliZUluZGV4LCBoaXN0b3J5KSksXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRwbGF5QnV0dG9uKG1heWJlSW5kZXgpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRwb3BvdXRWaWV3ID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgaGlzdG9yeSA9IF9uMC5oaXN0b3J5O1xuXHR2YXIgc3RhdGUgPSBfbjAuc3RhdGU7XG5cdHZhciBleHBhbmRvID0gX24wLmV4cGFuZG87XG5cdHJldHVybiBBMyhcblx0XHRlbG0kaHRtbCRIdG1sJG5vZGUsXG5cdFx0J2JvZHknLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWFyZ2luJywgJzAnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZycsICcwJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1mYW1pbHknLCAnbW9ub3NwYWNlJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ292ZXJmbG93JywgJ2F1dG8nKVxuXHRcdFx0XSksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdTaWRlYmFyLCBzdGF0ZSwgaGlzdG9yeSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRFeHBhbmRvTXNnLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2Rpc3BsYXknLCAnYmxvY2snKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZmxvYXQnLCAnbGVmdCcpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICdjYWxjKDEwMCUgLSAzMGNoKScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdtYXJnaW4nLCAnMCcpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdvdmVyZmxvdycsICdhdXRvJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2N1cnNvcicsICdkZWZhdWx0Jylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LCBlbG0kY29yZSRNYXliZSROb3RoaW5nLCBleHBhbmRvKVxuXHRcdFx0XHRcdFx0XSkpKVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrQWxsID0geyQ6ICdCbG9ja0FsbCd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tNb3N0ID0geyQ6ICdCbG9ja01vc3QnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTm9uZSA9IHskOiAnQmxvY2tOb25lJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR0b0Jsb2NrZXJUeXBlID0gRjIoXG5cdGZ1bmN0aW9uIChpc1BhdXNlZCwgc3RhdGUpIHtcblx0XHRzd2l0Y2ggKHN0YXRlLiQpIHtcblx0XHRcdGNhc2UgJ05vbmUnOlxuXHRcdFx0XHRyZXR1cm4gaXNQYXVzZWQgPyBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrQWxsIDogZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja05vbmU7XG5cdFx0XHRjYXNlICdCYWRNZXRhZGF0YSc6XG5cdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTW9zdDtcblx0XHRcdGNhc2UgJ0JhZEltcG9ydCc6XG5cdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTW9zdDtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTW9zdDtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9CbG9ja2VyVHlwZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR0b0Jsb2NrZXJUeXBlLFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaXNQYXVzZWQobW9kZWwuc3RhdGUpLFxuXHRcdG1vZGVsLm92ZXJsYXkpO1xufTtcbnZhciBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW4gPSB7JDogJ1JCRW1wdHlfZWxtX2J1aWx0aW4nfTtcbnZhciBlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiA9IEY1KFxuXHRmdW5jdGlvbiAoYSwgYiwgYywgZCwgZSkge1xuXHRcdHJldHVybiB7JDogJ1JCTm9kZV9lbG1fYnVpbHRpbicsIGE6IGEsIGI6IGIsIGM6IGMsIGQ6IGQsIGU6IGV9O1xuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgZGljdCkge1xuXHRcdGlmIChkaWN0LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNvbG9yID0gZGljdC5hO1xuXHRcdFx0dmFyIGtleSA9IGRpY3QuYjtcblx0XHRcdHZhciB2YWx1ZSA9IGRpY3QuYztcblx0XHRcdHZhciBsZWZ0ID0gZGljdC5kO1xuXHRcdFx0dmFyIHJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0QTIoZnVuYywga2V5LCB2YWx1ZSksXG5cdFx0XHRcdEEyKGVsbSRjb3JlJERpY3QkbWFwLCBmdW5jLCBsZWZ0KSxcblx0XHRcdFx0QTIoZWxtJGNvcmUkRGljdCRtYXAsIGZ1bmMsIHJpZ2h0KSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JHNpemVIZWxwID0gRjIoXG5cdGZ1bmN0aW9uIChuLCBkaWN0KSB7XG5cdFx0c2l6ZUhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChkaWN0LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0XHRyZXR1cm4gbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBsZWZ0ID0gZGljdC5kO1xuXHRcdFx0XHR2YXIgcmlnaHQgPSBkaWN0LmU7XG5cdFx0XHRcdHZhciAkdGVtcCRuID0gQTIoZWxtJGNvcmUkRGljdCRzaXplSGVscCwgbiArIDEsIHJpZ2h0KSxcblx0XHRcdFx0XHQkdGVtcCRkaWN0ID0gbGVmdDtcblx0XHRcdFx0biA9ICR0ZW1wJG47XG5cdFx0XHRcdGRpY3QgPSAkdGVtcCRkaWN0O1xuXHRcdFx0XHRjb250aW51ZSBzaXplSGVscDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3Qkc2l6ZSA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHJldHVybiBBMihlbG0kY29yZSREaWN0JHNpemVIZWxwLCAwLCBkaWN0KTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscCA9IEYyKFxuXHRmdW5jdGlvbiAoaXNPdXRlciwgZXhwYW5kbykge1xuXHRcdHN3aXRjaCAoZXhwYW5kby4kKSB7XG5cdFx0XHRjYXNlICdTJzpcblx0XHRcdFx0cmV0dXJuIGV4cGFuZG87XG5cdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHRyZXR1cm4gZXhwYW5kbztcblx0XHRcdGNhc2UgJ1NlcXVlbmNlJzpcblx0XHRcdFx0dmFyIHNlcVR5cGUgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0dmFyIGl0ZW1zID0gZXhwYW5kby5jO1xuXHRcdFx0XHRyZXR1cm4gaXNPdXRlciA/IEEzKFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsXG5cdFx0XHRcdFx0c2VxVHlwZSxcblx0XHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscChmYWxzZSksXG5cdFx0XHRcdFx0XHRpdGVtcykpIDogKChlbG0kY29yZSRMaXN0JGxlbmd0aChpdGVtcykgPD0gOCkgPyBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlLCBzZXFUeXBlLCBmYWxzZSwgaXRlbXMpIDogZXhwYW5kbyk7XG5cdFx0XHRjYXNlICdEaWN0aW9uYXJ5Jzpcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gZXhwYW5kby5hO1xuXHRcdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IGV4cGFuZG8uYjtcblx0XHRcdFx0cmV0dXJuIGlzT3V0ZXIgPyBBMihcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnksXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfbjEpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGsgPSBfbjEuYTtcblx0XHRcdFx0XHRcdFx0dmFyIHYgPSBfbjEuYjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0ayxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGluaXRIZWxwLCBmYWxzZSwgdikpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGtleVZhbHVlUGFpcnMpKSA6ICgoZWxtJGNvcmUkTGlzdCRsZW5ndGgoa2V5VmFsdWVQYWlycykgPD0gOCkgPyBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnksIGZhbHNlLCBrZXlWYWx1ZVBhaXJzKSA6IGV4cGFuZG8pO1xuXHRcdFx0Y2FzZSAnUmVjb3JkJzpcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gZXhwYW5kby5hO1xuXHRcdFx0XHR2YXIgZW50cmllcyA9IGV4cGFuZG8uYjtcblx0XHRcdFx0cmV0dXJuIGlzT3V0ZXIgPyBBMihcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFJlY29yZCxcblx0XHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkbWFwLFxuXHRcdFx0XHRcdFx0RjIoXG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfbjIsIHYpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscCwgZmFsc2UsIHYpO1xuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGVudHJpZXMpKSA6ICgoZWxtJGNvcmUkRGljdCRzaXplKGVudHJpZXMpIDw9IDQpID8gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsIGZhbHNlLCBlbnRyaWVzKSA6IGV4cGFuZG8pO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIG1heWJlTmFtZSA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gZXhwYW5kby5iO1xuXHRcdFx0XHR2YXIgYXJncyA9IGV4cGFuZG8uYztcblx0XHRcdFx0cmV0dXJuIGlzT3V0ZXIgPyBBMyhcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJENvbnN0cnVjdG9yLFxuXHRcdFx0XHRcdG1heWJlTmFtZSxcblx0XHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscChmYWxzZSksXG5cdFx0XHRcdFx0XHRhcmdzKSkgOiAoKGVsbSRjb3JlJExpc3QkbGVuZ3RoKGFyZ3MpIDw9IDQpID8gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3RvciwgbWF5YmVOYW1lLCBmYWxzZSwgYXJncykgOiBleHBhbmRvKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscCxcblx0XHR0cnVlLFxuXHRcdF9EZWJ1Z2dlcl9pbml0KHZhbHVlKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkSGlzdG9yeSA9IEYzKFxuXHRmdW5jdGlvbiAoc25hcHNob3RzLCByZWNlbnQsIG51bU1lc3NhZ2VzKSB7XG5cdFx0cmV0dXJuIHtudW1NZXNzYWdlczogbnVtTWVzc2FnZXMsIHJlY2VudDogcmVjZW50LCBzbmFwc2hvdHM6IHNuYXBzaG90c307XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkUmVjZW50SGlzdG9yeSA9IEYzKFxuXHRmdW5jdGlvbiAobW9kZWwsIG1lc3NhZ2VzLCBudW1NZXNzYWdlcykge1xuXHRcdHJldHVybiB7bWVzc2FnZXM6IG1lc3NhZ2VzLCBtb2RlbDogbW9kZWwsIG51bU1lc3NhZ2VzOiBudW1NZXNzYWdlc307XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZW1wdHkgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEEzKFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkSGlzdG9yeSxcblx0XHRlbG0kY29yZSRBcnJheSRlbXB0eSxcblx0XHRBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFJlY2VudEhpc3RvcnksIG1vZGVsLCBfTGlzdF9OaWwsIDApLFxuXHRcdDApO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJ1bm5pbmcgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdSdW5uaW5nJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJEVycm9yID0gRjIoXG5cdGZ1bmN0aW9uIChtZXNzYWdlLCBwcm9ibGVtcykge1xuXHRcdHJldHVybiB7bWVzc2FnZTogbWVzc2FnZSwgcHJvYmxlbXM6IHByb2JsZW1zfTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkTWV0YWRhdGEgPSBGMihcblx0ZnVuY3Rpb24gKHZlcnNpb25zLCB0eXBlcykge1xuXHRcdHJldHVybiB7dHlwZXM6IHR5cGVzLCB2ZXJzaW9uczogdmVyc2lvbnN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRUeXBlcyA9IEYzKFxuXHRmdW5jdGlvbiAobWVzc2FnZSwgYWxpYXNlcywgdW5pb25zKSB7XG5cdFx0cmV0dXJuIHthbGlhc2VzOiBhbGlhc2VzLCBtZXNzYWdlOiBtZXNzYWdlLCB1bmlvbnM6IHVuaW9uc307XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJEFsaWFzID0gRjIoXG5cdGZ1bmN0aW9uIChhcmdzLCB0aXBlKSB7XG5cdFx0cmV0dXJuIHthcmdzOiBhcmdzLCB0aXBlOiB0aXBlfTtcblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdCA9IF9Kc29uX2RlY29kZUxpc3Q7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlQWxpYXMgPSBBMyhcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkQWxpYXMsXG5cdEEyKFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLFxuXHRcdCdhcmdzJyxcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRsaXN0KGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZykpLFxuXHRBMihlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCwgJ3R5cGUnLCBlbG0kanNvbiRKc29uJERlY29kZSRzdHJpbmcpKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRVbmlvbiA9IEYyKFxuXHRmdW5jdGlvbiAoYXJncywgdGFncykge1xuXHRcdHJldHVybiB7YXJnczogYXJncywgdGFnczogdGFnc307XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkZW1wdHkgPSBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG52YXIgZWxtJGNvcmUkRGljdCRCbGFjayA9IHskOiAnQmxhY2snfTtcbnZhciBlbG0kY29yZSRCYXNpY3MkY29tcGFyZSA9IF9VdGlsc19jb21wYXJlO1xudmFyIGVsbSRjb3JlJERpY3QkUmVkID0geyQ6ICdSZWQnfTtcbnZhciBlbG0kY29yZSREaWN0JGJhbGFuY2UgPSBGNShcblx0ZnVuY3Rpb24gKGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCkge1xuXHRcdGlmICgocmlnaHQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChyaWdodC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0dmFyIF9uMSA9IHJpZ2h0LmE7XG5cdFx0XHR2YXIgcksgPSByaWdodC5iO1xuXHRcdFx0dmFyIHJWID0gcmlnaHQuYztcblx0XHRcdHZhciByTGVmdCA9IHJpZ2h0LmQ7XG5cdFx0XHR2YXIgclJpZ2h0ID0gcmlnaHQuZTtcblx0XHRcdGlmICgobGVmdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGxlZnQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdFx0dmFyIF9uMyA9IGxlZnQuYTtcblx0XHRcdFx0dmFyIGxLID0gbGVmdC5iO1xuXHRcdFx0XHR2YXIgbFYgPSBsZWZ0LmM7XG5cdFx0XHRcdHZhciBsTGVmdCA9IGxlZnQuZDtcblx0XHRcdFx0dmFyIGxSaWdodCA9IGxlZnQuZTtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUmVkLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRCbGFjaywgbEssIGxWLCBsTGVmdCwgbFJpZ2h0KSxcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRCbGFjaywgckssIHJWLCByTGVmdCwgclJpZ2h0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0ckssXG5cdFx0XHRcdFx0clYsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBrZXksIHZhbHVlLCBsZWZ0LCByTGVmdCksXG5cdFx0XHRcdFx0clJpZ2h0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCgoKGxlZnQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChsZWZ0LmEuJCA9PT0gJ1JlZCcpKSAmJiAobGVmdC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKGxlZnQuZC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0XHR2YXIgX241ID0gbGVmdC5hO1xuXHRcdFx0XHR2YXIgbEsgPSBsZWZ0LmI7XG5cdFx0XHRcdHZhciBsViA9IGxlZnQuYztcblx0XHRcdFx0dmFyIF9uNiA9IGxlZnQuZDtcblx0XHRcdFx0dmFyIF9uNyA9IF9uNi5hO1xuXHRcdFx0XHR2YXIgbGxLID0gX242LmI7XG5cdFx0XHRcdHZhciBsbFYgPSBfbjYuYztcblx0XHRcdFx0dmFyIGxsTGVmdCA9IF9uNi5kO1xuXHRcdFx0XHR2YXIgbGxSaWdodCA9IF9uNi5lO1xuXHRcdFx0XHR2YXIgbFJpZ2h0ID0gbGVmdC5lO1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSZWQsXG5cdFx0XHRcdFx0bEssXG5cdFx0XHRcdFx0bFYsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIGxsSywgbGxWLCBsbExlZnQsIGxsUmlnaHQpLFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JEJsYWNrLCBrZXksIHZhbHVlLCBsUmlnaHQsIHJpZ2h0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JGluc2VydEhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIGRpY3QpIHtcblx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdHJldHVybiBBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIGtleSwgdmFsdWUsIGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG5Db2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBuS2V5ID0gZGljdC5iO1xuXHRcdFx0dmFyIG5WYWx1ZSA9IGRpY3QuYztcblx0XHRcdHZhciBuTGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciBuUmlnaHQgPSBkaWN0LmU7XG5cdFx0XHR2YXIgX24xID0gQTIoZWxtJGNvcmUkQmFzaWNzJGNvbXBhcmUsIGtleSwgbktleSk7XG5cdFx0XHRzd2l0Y2ggKF9uMS4kKSB7XG5cdFx0XHRcdGNhc2UgJ0xUJzpcblx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JGJhbGFuY2UsXG5cdFx0XHRcdFx0XHRuQ29sb3IsXG5cdFx0XHRcdFx0XHRuS2V5LFxuXHRcdFx0XHRcdFx0blZhbHVlLFxuXHRcdFx0XHRcdFx0QTMoZWxtJGNvcmUkRGljdCRpbnNlcnRIZWxwLCBrZXksIHZhbHVlLCBuTGVmdCksXG5cdFx0XHRcdFx0XHRuUmlnaHQpO1xuXHRcdFx0XHRjYXNlICdFUSc6XG5cdFx0XHRcdFx0cmV0dXJuIEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBuQ29sb3IsIG5LZXksIHZhbHVlLCBuTGVmdCwgblJpZ2h0KTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JGJhbGFuY2UsXG5cdFx0XHRcdFx0XHRuQ29sb3IsXG5cdFx0XHRcdFx0XHRuS2V5LFxuXHRcdFx0XHRcdFx0blZhbHVlLFxuXHRcdFx0XHRcdFx0bkxlZnQsXG5cdFx0XHRcdFx0XHRBMyhlbG0kY29yZSREaWN0JGluc2VydEhlbHAsIGtleSwgdmFsdWUsIG5SaWdodCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRpbnNlcnQgPSBGMyhcblx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIGRpY3QpIHtcblx0XHR2YXIgX24wID0gQTMoZWxtJGNvcmUkRGljdCRpbnNlcnRIZWxwLCBrZXksIHZhbHVlLCBkaWN0KTtcblx0XHRpZiAoKF9uMC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9uMC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0dmFyIF9uMSA9IF9uMC5hO1xuXHRcdFx0dmFyIGsgPSBfbjAuYjtcblx0XHRcdHZhciB2ID0gX24wLmM7XG5cdFx0XHR2YXIgbCA9IF9uMC5kO1xuXHRcdFx0dmFyIHIgPSBfbjAuZTtcblx0XHRcdHJldHVybiBBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRCbGFjaywgaywgdiwgbCwgcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB4ID0gX24wO1xuXHRcdFx0cmV0dXJuIHg7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JGZyb21MaXN0ID0gZnVuY3Rpb24gKGFzc29jcykge1xuXHRyZXR1cm4gQTMoXG5cdFx0ZWxtJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRGMihcblx0XHRcdGZ1bmN0aW9uIChfbjAsIGRpY3QpIHtcblx0XHRcdFx0dmFyIGtleSA9IF9uMC5hO1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBfbjAuYjtcblx0XHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJERpY3QkaW5zZXJ0LCBrZXksIHZhbHVlLCBkaWN0KTtcblx0XHRcdH0pLFxuXHRcdGVsbSRjb3JlJERpY3QkZW1wdHksXG5cdFx0YXNzb2NzKTtcbn07XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUka2V5VmFsdWVQYWlycyA9IF9Kc29uX2RlY29kZUtleVZhbHVlUGFpcnM7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZGljdCA9IGZ1bmN0aW9uIChkZWNvZGVyKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRtYXAsXG5cdFx0ZWxtJGNvcmUkRGljdCRmcm9tTGlzdCxcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRrZXlWYWx1ZVBhaXJzKGRlY29kZXIpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlVW5pb24gPSBBMyhcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVW5pb24sXG5cdEEyKFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLFxuXHRcdCdhcmdzJyxcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRsaXN0KGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZykpLFxuXHRBMihcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCxcblx0XHQndGFncycsXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkZGljdChcblx0XHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGxpc3QoZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSkpKTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRtYXAzID0gX0pzb25fbWFwMztcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVUeXBlcyA9IEE0KFxuXHRlbG0kanNvbiRKc29uJERlY29kZSRtYXAzLFxuXHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRUeXBlcyxcblx0QTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICdtZXNzYWdlJywgZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSxcblx0QTIoXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsXG5cdFx0J2FsaWFzZXMnLFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGRpY3QoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlQWxpYXMpKSxcblx0QTIoXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsXG5cdFx0J3VuaW9ucycsXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkZGljdChlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVVbmlvbikpKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRWZXJzaW9ucyA9IGZ1bmN0aW9uIChlbG0pIHtcblx0cmV0dXJuIHtlbG06IGVsbX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZVZlcnNpb25zID0gQTIoXG5cdGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcCxcblx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmVyc2lvbnMsXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAnZWxtJywgZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlciA9IEEzKFxuXHRlbG0kanNvbiRKc29uJERlY29kZSRtYXAyLFxuXHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRNZXRhZGF0YSxcblx0QTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICd2ZXJzaW9ucycsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZVZlcnNpb25zKSxcblx0QTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICd0eXBlcycsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZVR5cGVzKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUHJvYmxlbVR5cGUgPSBGMihcblx0ZnVuY3Rpb24gKG5hbWUsIHByb2JsZW1zKSB7XG5cdFx0cmV0dXJuIHtuYW1lOiBuYW1lLCBwcm9ibGVtczogcHJvYmxlbXN9O1xuXHR9KTtcbnZhciBlbG0kY29yZSRTdHJpbmckY29udGFpbnMgPSBfU3RyaW5nX2NvbnRhaW5zO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGhhc1Byb2JsZW0gPSBGMihcblx0ZnVuY3Rpb24gKHRpcGUsIF9uMCkge1xuXHRcdHZhciBwcm9ibGVtID0gX24wLmE7XG5cdFx0dmFyIHRva2VuID0gX24wLmI7XG5cdFx0cmV0dXJuIEEyKGVsbSRjb3JlJFN0cmluZyRjb250YWlucywgdG9rZW4sIHRpcGUpID8gZWxtJGNvcmUkTWF5YmUkSnVzdChwcm9ibGVtKSA6IGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJERlY29kZXIgPSB7JDogJ0RlY29kZXInfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRGdW5jdGlvbiA9IHskOiAnRnVuY3Rpb24nfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRQcm9jZXNzID0geyQ6ICdQcm9jZXNzJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUHJvZ3JhbSA9IHskOiAnUHJvZ3JhbSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFJlcXVlc3QgPSB7JDogJ1JlcXVlc3QnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRTb2NrZXQgPSB7JDogJ1NvY2tldCd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFRhc2sgPSB7JDogJ1Rhc2snfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRWaXJ0dWFsRG9tID0geyQ6ICdWaXJ0dWFsRG9tJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkcHJvYmxlbVRhYmxlID0gX0xpc3RfZnJvbUFycmF5KFxuXHRbXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRGdW5jdGlvbiwgJy0+JyksXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSREZWNvZGVyLCAnSnNvbi5EZWNvZGUuRGVjb2RlcicpLFxuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVGFzaywgJ1Rhc2suVGFzaycpLFxuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUHJvY2VzcywgJ1Byb2Nlc3MuSWQnKSxcblx0XHRfVXRpbHNfVHVwbGUyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFNvY2tldCwgJ1dlYlNvY2tldC5Mb3dMZXZlbC5XZWJTb2NrZXQnKSxcblx0XHRfVXRpbHNfVHVwbGUyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFJlcXVlc3QsICdIdHRwLlJlcXVlc3QnKSxcblx0XHRfVXRpbHNfVHVwbGUyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2dyYW0sICdQbGF0Zm9ybS5Qcm9ncmFtJyksXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRWaXJ0dWFsRG9tLCAnVmlydHVhbERvbS5Ob2RlJyksXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRWaXJ0dWFsRG9tLCAnVmlydHVhbERvbS5BdHRyaWJ1dGUnKVxuXHRdKTtcbnZhciBlbG0kY29yZSRMaXN0JG1heWJlQ29ucyA9IEYzKFxuXHRmdW5jdGlvbiAoZiwgbXgsIHhzKSB7XG5cdFx0dmFyIF9uMCA9IGYobXgpO1xuXHRcdGlmIChfbjAuJCA9PT0gJ0p1c3QnKSB7XG5cdFx0XHR2YXIgeCA9IF9uMC5hO1xuXHRcdFx0cmV0dXJuIEEyKGVsbSRjb3JlJExpc3QkY29ucywgeCwgeHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4geHM7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRMaXN0JGZpbHRlck1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgeHMpIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRtYXliZUNvbnMoZiksXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHR4cyk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGZpbmRQcm9ibGVtcyA9IGZ1bmN0aW9uICh0aXBlKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kY29yZSRMaXN0JGZpbHRlck1hcCxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRoYXNQcm9ibGVtKHRpcGUpLFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJHByb2JsZW1UYWJsZSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNvbGxlY3RCYWRBbGlhc2VzID0gRjMoXG5cdGZ1bmN0aW9uIChuYW1lLCBfbjAsIGxpc3QpIHtcblx0XHR2YXIgdGlwZSA9IF9uMC50aXBlO1xuXHRcdHZhciBfbjEgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRmaW5kUHJvYmxlbXModGlwZSk7XG5cdFx0aWYgKCFfbjEuYikge1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwcm9ibGVtcyA9IF9uMTtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRQcm9ibGVtVHlwZSwgbmFtZSwgcHJvYmxlbXMpLFxuXHRcdFx0XHRsaXN0KTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkdmFsdWVzID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIEEzKFxuXHRcdGVsbSRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgdmFsdWVMaXN0KSB7XG5cdFx0XHRcdHJldHVybiBBMihlbG0kY29yZSRMaXN0JGNvbnMsIHZhbHVlLCB2YWx1ZUxpc3QpO1xuXHRcdFx0fSksXG5cdFx0X0xpc3RfTmlsLFxuXHRcdGRpY3QpO1xufTtcbnZhciBlbG0kY29yZSRMaXN0JGFwcGVuZCA9IEYyKFxuXHRmdW5jdGlvbiAoeHMsIHlzKSB7XG5cdFx0aWYgKCF5cy5iKSB7XG5cdFx0XHRyZXR1cm4geHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBMyhlbG0kY29yZSRMaXN0JGZvbGRyLCBlbG0kY29yZSRMaXN0JGNvbnMsIHlzLCB4cyk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRMaXN0JGNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0cykge1xuXHRyZXR1cm4gQTMoZWxtJGNvcmUkTGlzdCRmb2xkciwgZWxtJGNvcmUkTGlzdCRhcHBlbmQsIF9MaXN0X05pbCwgbGlzdHMpO1xufTtcbnZhciBlbG0kY29yZSRMaXN0JGNvbmNhdE1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgbGlzdCkge1xuXHRcdHJldHVybiBlbG0kY29yZSRMaXN0JGNvbmNhdChcblx0XHRcdEEyKGVsbSRjb3JlJExpc3QkbWFwLCBmLCBsaXN0KSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNvbGxlY3RCYWRVbmlvbnMgPSBGMyhcblx0ZnVuY3Rpb24gKG5hbWUsIF9uMCwgbGlzdCkge1xuXHRcdHZhciB0YWdzID0gX24wLnRhZ3M7XG5cdFx0dmFyIF9uMSA9IEEyKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25jYXRNYXAsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRmaW5kUHJvYmxlbXMsXG5cdFx0XHRlbG0kY29yZSRMaXN0JGNvbmNhdChcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCR2YWx1ZXModGFncykpKTtcblx0XHRpZiAoIV9uMS5iKSB7XG5cdFx0XHRyZXR1cm4gbGlzdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHByb2JsZW1zID0gX24xO1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2JsZW1UeXBlLCBuYW1lLCBwcm9ibGVtcyksXG5cdFx0XHRcdGxpc3QpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRmb2xkbCA9IEYzKFxuXHRmdW5jdGlvbiAoZnVuYywgYWNjLCBkaWN0KSB7XG5cdFx0Zm9sZGw6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChkaWN0LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGtleSA9IGRpY3QuYjtcblx0XHRcdFx0dmFyIHZhbHVlID0gZGljdC5jO1xuXHRcdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdFx0dmFyIHJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0XHR2YXIgJHRlbXAkZnVuYyA9IGZ1bmMsXG5cdFx0XHRcdFx0JHRlbXAkYWNjID0gQTMoXG5cdFx0XHRcdFx0ZnVuYyxcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0QTMoZWxtJGNvcmUkRGljdCRmb2xkbCwgZnVuYywgYWNjLCBsZWZ0KSksXG5cdFx0XHRcdFx0JHRlbXAkZGljdCA9IHJpZ2h0O1xuXHRcdFx0XHRmdW5jID0gJHRlbXAkZnVuYztcblx0XHRcdFx0YWNjID0gJHRlbXAkYWNjO1xuXHRcdFx0XHRkaWN0ID0gJHRlbXAkZGljdDtcblx0XHRcdFx0Y29udGludWUgZm9sZGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRpc1BvcnRhYmxlID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgdHlwZXMgPSBfbjAudHlwZXM7XG5cdHZhciBiYWRBbGlhc2VzID0gQTMoZWxtJGNvcmUkRGljdCRmb2xkbCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY29sbGVjdEJhZEFsaWFzZXMsIF9MaXN0X05pbCwgdHlwZXMuYWxpYXNlcyk7XG5cdHZhciBfbjEgPSBBMyhlbG0kY29yZSREaWN0JGZvbGRsLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjb2xsZWN0QmFkVW5pb25zLCBiYWRBbGlhc2VzLCB0eXBlcy51bmlvbnMpO1xuXHRpZiAoIV9uMS5iKSB7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHByb2JsZW1zID0gX24xO1xuXHRcdHJldHVybiBlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRXJyb3IsIHR5cGVzLm1lc3NhZ2UsIHByb2JsZW1zKSk7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHZhciBfbjAgPSBBMihlbG0kanNvbiRKc29uJERlY29kZSRkZWNvZGVWYWx1ZSwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlciwgdmFsdWUpO1xuXHRpZiAoX24wLiQgPT09ICdFcnInKSB7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoXG5cdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRFcnJvciwgJ1RoZSBjb21waWxlciBpcyBnZW5lcmF0aW5nIGJhZCBtZXRhZGF0YS4gVGhpcyBpcyBhIGNvbXBpbGVyIGJ1ZyEnLCBfTGlzdF9OaWwpKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgbWV0YWRhdGEgPSBfbjAuYTtcblx0XHR2YXIgX24xID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaXNQb3J0YWJsZShtZXRhZGF0YSk7XG5cdFx0aWYgKF9uMS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2sobWV0YWRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3IgPSBfbjEuYTtcblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKGVycm9yKTtcblx0XHR9XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSROb25lID0geyQ6ICdOb25lJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRub25lID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSROb25lO1xudmFyIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRtYXAgPSBfUGxhdGZvcm1fbWFwO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd3JhcEluaXQgPSBGNChcblx0ZnVuY3Rpb24gKG1ldGFkYXRhLCBwb3BvdXQsIGluaXQsIGZsYWdzKSB7XG5cdFx0dmFyIF9uMCA9IGluaXQoZmxhZ3MpO1xuXHRcdHZhciB1c2VyTW9kZWwgPSBfbjAuYTtcblx0XHR2YXIgdXNlckNvbW1hbmRzID0gX24wLmI7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHR7XG5cdFx0XHRcdGV4cGFuZG86IGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdCh1c2VyTW9kZWwpLFxuXHRcdFx0XHRoaXN0b3J5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVtcHR5KHVzZXJNb2RlbCksXG5cdFx0XHRcdG1ldGFkYXRhOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGUobWV0YWRhdGEpLFxuXHRcdFx0XHRvdmVybGF5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JG5vbmUsXG5cdFx0XHRcdHBvcG91dDogcG9wb3V0LFxuXHRcdFx0XHRzdGF0ZTogZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSdW5uaW5nKHVzZXJNb2RlbClcblx0XHRcdH0sXG5cdFx0XHRBMihlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbWFwLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVzZXJNc2csIHVzZXJDb21tYW5kcykpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldExhdGVzdE1vZGVsID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cdGlmIChzdGF0ZS4kID09PSAnUnVubmluZycpIHtcblx0XHR2YXIgbW9kZWwgPSBzdGF0ZS5hO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fSBlbHNlIHtcblx0XHR2YXIgbW9kZWwgPSBzdGF0ZS5jO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fVxufTtcbnZhciBlbG0kY29yZSRQbGF0Zm9ybSRTdWIkbWFwID0gX1BsYXRmb3JtX21hcDtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBTdWJzID0gRjIoXG5cdGZ1bmN0aW9uIChzdWJzY3JpcHRpb25zLCBtb2RlbCkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRjb3JlJFBsYXRmb3JtJFN1YiRtYXAsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVzZXJNc2csXG5cdFx0XHRzdWJzY3JpcHRpb25zKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldExhdGVzdE1vZGVsKG1vZGVsLnN0YXRlKSkpO1xuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JGdldCA9IEYyKFxuXHRmdW5jdGlvbiAodGFyZ2V0S2V5LCBkaWN0KSB7XG5cdFx0Z2V0OlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIga2V5ID0gZGljdC5iO1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0XHRcdHZhciBsZWZ0ID0gZGljdC5kO1xuXHRcdFx0XHR2YXIgcmlnaHQgPSBkaWN0LmU7XG5cdFx0XHRcdHZhciBfbjEgPSBBMihlbG0kY29yZSRCYXNpY3MkY29tcGFyZSwgdGFyZ2V0S2V5LCBrZXkpO1xuXHRcdFx0XHRzd2l0Y2ggKF9uMS4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnTFQnOlxuXHRcdFx0XHRcdFx0dmFyICR0ZW1wJHRhcmdldEtleSA9IHRhcmdldEtleSxcblx0XHRcdFx0XHRcdFx0JHRlbXAkZGljdCA9IGxlZnQ7XG5cdFx0XHRcdFx0XHR0YXJnZXRLZXkgPSAkdGVtcCR0YXJnZXRLZXk7XG5cdFx0XHRcdFx0XHRkaWN0ID0gJHRlbXAkZGljdDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlIGdldDtcblx0XHRcdFx0XHRjYXNlICdFUSc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkSnVzdCh2YWx1ZSk7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHZhciAkdGVtcCR0YXJnZXRLZXkgPSB0YXJnZXRLZXksXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJGRpY3QgPSByaWdodDtcblx0XHRcdFx0XHRcdHRhcmdldEtleSA9ICR0ZW1wJHRhcmdldEtleTtcblx0XHRcdFx0XHRcdGRpY3QgPSAkdGVtcCRkaWN0O1xuXHRcdFx0XHRcdFx0Y29udGludWUgZ2V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlRGljdEhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKG9sZERpY3QsIGtleSwgdmFsdWUpIHtcblx0XHR2YXIgX24xMiA9IEEyKGVsbSRjb3JlJERpY3QkZ2V0LCBrZXksIG9sZERpY3QpO1xuXHRcdGlmIChfbjEyLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgb2xkVmFsdWUgPSBfbjEyLmE7XG5cdFx0XHRyZXR1cm4gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUhlbHAsIG9sZFZhbHVlLCB2YWx1ZSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAob2xkLCBfbmV3KSB7XG5cdFx0dmFyIF9uMyA9IF9VdGlsc19UdXBsZTIob2xkLCBfbmV3KTtcblx0XHRfbjMkNjpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0c3dpdGNoIChfbjMuYi4kKSB7XG5cdFx0XHRcdGNhc2UgJ1MnOlxuXHRcdFx0XHRcdHJldHVybiBfbmV3O1xuXHRcdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHRcdHJldHVybiBfbmV3O1xuXHRcdFx0XHRjYXNlICdTZXF1ZW5jZSc6XG5cdFx0XHRcdFx0aWYgKF9uMy5hLiQgPT09ICdTZXF1ZW5jZScpIHtcblx0XHRcdFx0XHRcdHZhciBfbjQgPSBfbjMuYTtcblx0XHRcdFx0XHRcdHZhciBpc0Nsb3NlZCA9IF9uNC5iO1xuXHRcdFx0XHRcdFx0dmFyIG9sZFZhbHVlcyA9IF9uNC5jO1xuXHRcdFx0XHRcdFx0dmFyIF9uNSA9IF9uMy5iO1xuXHRcdFx0XHRcdFx0dmFyIHNlcVR5cGUgPSBfbjUuYTtcblx0XHRcdFx0XHRcdHZhciBuZXdWYWx1ZXMgPSBfbjUuYztcblx0XHRcdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXF1ZW5jZSxcblx0XHRcdFx0XHRcdFx0c2VxVHlwZSxcblx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VMaXN0SGVscCwgb2xkVmFsdWVzLCBuZXdWYWx1ZXMpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnJlYWsgX24zJDY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdEaWN0aW9uYXJ5Jzpcblx0XHRcdFx0XHRpZiAoX24zLmEuJCA9PT0gJ0RpY3Rpb25hcnknKSB7XG5cdFx0XHRcdFx0XHR2YXIgX242ID0gX24zLmE7XG5cdFx0XHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBfbjYuYTtcblx0XHRcdFx0XHRcdHZhciBfbjcgPSBfbjMuYjtcblx0XHRcdFx0XHRcdHZhciBrZXlWYWx1ZVBhaXJzID0gX243LmI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LCBpc0Nsb3NlZCwga2V5VmFsdWVQYWlycyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJyZWFrIF9uMyQ2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnUmVjb3JkJzpcblx0XHRcdFx0XHRpZiAoX24zLmEuJCA9PT0gJ1JlY29yZCcpIHtcblx0XHRcdFx0XHRcdHZhciBfbjggPSBfbjMuYTtcblx0XHRcdFx0XHRcdHZhciBpc0Nsb3NlZCA9IF9uOC5hO1xuXHRcdFx0XHRcdFx0dmFyIG9sZERpY3QgPSBfbjguYjtcblx0XHRcdFx0XHRcdHZhciBfbjkgPSBfbjMuYjtcblx0XHRcdFx0XHRcdHZhciBuZXdEaWN0ID0gX245LmI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUmVjb3JkLFxuXHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRtYXAsXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZURpY3RIZWxwKG9sZERpY3QpLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RpY3QpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnJlYWsgX24zJDY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGlmIChfbjMuYS4kID09PSAnQ29uc3RydWN0b3InKSB7XG5cdFx0XHRcdFx0XHR2YXIgX24xMCA9IF9uMy5hO1xuXHRcdFx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gX24xMC5iO1xuXHRcdFx0XHRcdFx0dmFyIG9sZFZhbHVlcyA9IF9uMTAuYztcblx0XHRcdFx0XHRcdHZhciBfbjExID0gX24zLmI7XG5cdFx0XHRcdFx0XHR2YXIgbWF5YmVOYW1lID0gX24xMS5hO1xuXHRcdFx0XHRcdFx0dmFyIG5ld1ZhbHVlcyA9IF9uMTEuYztcblx0XHRcdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRcdFx0bWF5YmVOYW1lLFxuXHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUxpc3RIZWxwLCBvbGRWYWx1ZXMsIG5ld1ZhbHVlcykpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRicmVhayBfbjMkNjtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBfbmV3O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlTGlzdEhlbHAgPSBGMihcblx0ZnVuY3Rpb24gKG9sZHMsIG5ld3MpIHtcblx0XHR2YXIgX24wID0gX1V0aWxzX1R1cGxlMihvbGRzLCBuZXdzKTtcblx0XHRpZiAoIV9uMC5hLmIpIHtcblx0XHRcdHJldHVybiBuZXdzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIV9uMC5iLmIpIHtcblx0XHRcdFx0cmV0dXJuIG5ld3M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX24xID0gX24wLmE7XG5cdFx0XHRcdHZhciB4ID0gX24xLmE7XG5cdFx0XHRcdHZhciB4cyA9IF9uMS5iO1xuXHRcdFx0XHR2YXIgX24yID0gX24wLmI7XG5cdFx0XHRcdHZhciB5ID0gX24yLmE7XG5cdFx0XHRcdHZhciB5cyA9IF9uMi5iO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VIZWxwLCB4LCB5KSxcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlTGlzdEhlbHAsIHhzLCB5cykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZSA9IEYyKFxuXHRmdW5jdGlvbiAodmFsdWUsIGV4cGFuZG8pIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlSGVscCxcblx0XHRcdGV4cGFuZG8sXG5cdFx0XHRfRGVidWdnZXJfaW5pdCh2YWx1ZSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUluZGV4ID0gRjMoXG5cdGZ1bmN0aW9uIChuLCBmdW5jLCBsaXN0KSB7XG5cdFx0aWYgKCFsaXN0LmIpIHtcblx0XHRcdHJldHVybiBfTGlzdF9OaWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB4ID0gbGlzdC5hO1xuXHRcdFx0dmFyIHhzID0gbGlzdC5iO1xuXHRcdFx0cmV0dXJuIChuIDw9IDApID8gQTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0ZnVuYyh4KSxcblx0XHRcdFx0eHMpIDogQTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0eCxcblx0XHRcdFx0QTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCwgbiAtIDEsIGZ1bmMsIHhzKSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3Mkbm90ID0gX0Jhc2ljc19ub3Q7XG52YXIgZWxtJGNvcmUkRGljdCRnZXRNaW4gPSBmdW5jdGlvbiAoZGljdCkge1xuXHRnZXRNaW46XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0aWYgKChkaWN0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoZGljdC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkge1xuXHRcdFx0dmFyIGxlZnQgPSBkaWN0LmQ7XG5cdFx0XHR2YXIgJHRlbXAkZGljdCA9IGxlZnQ7XG5cdFx0XHRkaWN0ID0gJHRlbXAkZGljdDtcblx0XHRcdGNvbnRpbnVlIGdldE1pbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRpY3Q7XG5cdFx0fVxuXHR9XG59O1xudmFyIGVsbSRjb3JlJERpY3QkbW92ZVJlZExlZnQgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRpZiAoKChkaWN0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoZGljdC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKGRpY3QuZS4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpIHtcblx0XHRpZiAoKGRpY3QuZS5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoZGljdC5lLmQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBjbHIgPSBkaWN0LmE7XG5cdFx0XHR2YXIgayA9IGRpY3QuYjtcblx0XHRcdHZhciB2ID0gZGljdC5jO1xuXHRcdFx0dmFyIF9uMSA9IGRpY3QuZDtcblx0XHRcdHZhciBsQ2xyID0gX24xLmE7XG5cdFx0XHR2YXIgbEsgPSBfbjEuYjtcblx0XHRcdHZhciBsViA9IF9uMS5jO1xuXHRcdFx0dmFyIGxMZWZ0ID0gX24xLmQ7XG5cdFx0XHR2YXIgbFJpZ2h0ID0gX24xLmU7XG5cdFx0XHR2YXIgX24yID0gZGljdC5lO1xuXHRcdFx0dmFyIHJDbHIgPSBfbjIuYTtcblx0XHRcdHZhciBySyA9IF9uMi5iO1xuXHRcdFx0dmFyIHJWID0gX24yLmM7XG5cdFx0XHR2YXIgckxlZnQgPSBfbjIuZDtcblx0XHRcdHZhciBfbjMgPSByTGVmdC5hO1xuXHRcdFx0dmFyIHJsSyA9IHJMZWZ0LmI7XG5cdFx0XHR2YXIgcmxWID0gckxlZnQuYztcblx0XHRcdHZhciBybEwgPSByTGVmdC5kO1xuXHRcdFx0dmFyIHJsUiA9IHJMZWZ0LmU7XG5cdFx0XHR2YXIgclJpZ2h0ID0gX24yLmU7XG5cdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJlZCxcblx0XHRcdFx0cmxLLFxuXHRcdFx0XHRybFYsXG5cdFx0XHRcdEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkQmxhY2ssXG5cdFx0XHRcdFx0ayxcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwgbEssIGxWLCBsTGVmdCwgbFJpZ2h0KSxcblx0XHRcdFx0XHRybEwpLFxuXHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRCbGFjaywgckssIHJWLCBybFIsIHJSaWdodCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgY2xyID0gZGljdC5hO1xuXHRcdFx0dmFyIGsgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdiA9IGRpY3QuYztcblx0XHRcdHZhciBfbjQgPSBkaWN0LmQ7XG5cdFx0XHR2YXIgbENsciA9IF9uNC5hO1xuXHRcdFx0dmFyIGxLID0gX240LmI7XG5cdFx0XHR2YXIgbFYgPSBfbjQuYztcblx0XHRcdHZhciBsTGVmdCA9IF9uNC5kO1xuXHRcdFx0dmFyIGxSaWdodCA9IF9uNC5lO1xuXHRcdFx0dmFyIF9uNSA9IGRpY3QuZTtcblx0XHRcdHZhciByQ2xyID0gX241LmE7XG5cdFx0XHR2YXIgcksgPSBfbjUuYjtcblx0XHRcdHZhciByViA9IF9uNS5jO1xuXHRcdFx0dmFyIHJMZWZ0ID0gX241LmQ7XG5cdFx0XHR2YXIgclJpZ2h0ID0gX241LmU7XG5cdFx0XHRpZiAoY2xyLiQgPT09ICdCbGFjaycpIHtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkQmxhY2ssXG5cdFx0XHRcdFx0ayxcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwgbEssIGxWLCBsTGVmdCwgbFJpZ2h0KSxcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIHJLLCByViwgckxlZnQsIHJSaWdodCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkQmxhY2ssXG5cdFx0XHRcdFx0ayxcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwgbEssIGxWLCBsTGVmdCwgbFJpZ2h0KSxcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIHJLLCByViwgckxlZnQsIHJSaWdodCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZGljdDtcblx0fVxufTtcbnZhciBlbG0kY29yZSREaWN0JG1vdmVSZWRSaWdodCA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdGlmICgoKGRpY3QuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChkaWN0LmQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoZGljdC5lLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkge1xuXHRcdGlmICgoZGljdC5kLmQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChkaWN0LmQuZC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0dmFyIGNsciA9IGRpY3QuYTtcblx0XHRcdHZhciBrID0gZGljdC5iO1xuXHRcdFx0dmFyIHYgPSBkaWN0LmM7XG5cdFx0XHR2YXIgX24xID0gZGljdC5kO1xuXHRcdFx0dmFyIGxDbHIgPSBfbjEuYTtcblx0XHRcdHZhciBsSyA9IF9uMS5iO1xuXHRcdFx0dmFyIGxWID0gX24xLmM7XG5cdFx0XHR2YXIgX24yID0gX24xLmQ7XG5cdFx0XHR2YXIgX24zID0gX24yLmE7XG5cdFx0XHR2YXIgbGxLID0gX24yLmI7XG5cdFx0XHR2YXIgbGxWID0gX24yLmM7XG5cdFx0XHR2YXIgbGxMZWZ0ID0gX24yLmQ7XG5cdFx0XHR2YXIgbGxSaWdodCA9IF9uMi5lO1xuXHRcdFx0dmFyIGxSaWdodCA9IF9uMS5lO1xuXHRcdFx0dmFyIF9uNCA9IGRpY3QuZTtcblx0XHRcdHZhciByQ2xyID0gX240LmE7XG5cdFx0XHR2YXIgcksgPSBfbjQuYjtcblx0XHRcdHZhciByViA9IF9uNC5jO1xuXHRcdFx0dmFyIHJMZWZ0ID0gX240LmQ7XG5cdFx0XHR2YXIgclJpZ2h0ID0gX240LmU7XG5cdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJlZCxcblx0XHRcdFx0bEssXG5cdFx0XHRcdGxWLFxuXHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRCbGFjaywgbGxLLCBsbFYsIGxsTGVmdCwgbGxSaWdodCksXG5cdFx0XHRcdEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkQmxhY2ssXG5cdFx0XHRcdFx0ayxcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdGxSaWdodCxcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIHJLLCByViwgckxlZnQsIHJSaWdodCkpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNsciA9IGRpY3QuYTtcblx0XHRcdHZhciBrID0gZGljdC5iO1xuXHRcdFx0dmFyIHYgPSBkaWN0LmM7XG5cdFx0XHR2YXIgX241ID0gZGljdC5kO1xuXHRcdFx0dmFyIGxDbHIgPSBfbjUuYTtcblx0XHRcdHZhciBsSyA9IF9uNS5iO1xuXHRcdFx0dmFyIGxWID0gX241LmM7XG5cdFx0XHR2YXIgbExlZnQgPSBfbjUuZDtcblx0XHRcdHZhciBsUmlnaHQgPSBfbjUuZTtcblx0XHRcdHZhciBfbjYgPSBkaWN0LmU7XG5cdFx0XHR2YXIgckNsciA9IF9uNi5hO1xuXHRcdFx0dmFyIHJLID0gX242LmI7XG5cdFx0XHR2YXIgclYgPSBfbjYuYztcblx0XHRcdHZhciByTGVmdCA9IF9uNi5kO1xuXHRcdFx0dmFyIHJSaWdodCA9IF9uNi5lO1xuXHRcdFx0aWYgKGNsci4kID09PSAnQmxhY2snKSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGRpY3Q7XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkRGljdCRyZW1vdmVIZWxwUHJlcEVRR1QgPSBGNyhcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCwgY29sb3IsIGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0KSB7XG5cdFx0aWYgKChsZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobGVmdC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0dmFyIF9uMSA9IGxlZnQuYTtcblx0XHRcdHZhciBsSyA9IGxlZnQuYjtcblx0XHRcdHZhciBsViA9IGxlZnQuYztcblx0XHRcdHZhciBsTGVmdCA9IGxlZnQuZDtcblx0XHRcdHZhciBsUmlnaHQgPSBsZWZ0LmU7XG5cdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRjb2xvcixcblx0XHRcdFx0bEssXG5cdFx0XHRcdGxWLFxuXHRcdFx0XHRsTGVmdCxcblx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBrZXksIHZhbHVlLCBsUmlnaHQsIHJpZ2h0KSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9uMiQyOlxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0aWYgKChyaWdodC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKHJpZ2h0LmEuJCA9PT0gJ0JsYWNrJykpIHtcblx0XHRcdFx0XHRpZiAocmlnaHQuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykge1xuXHRcdFx0XHRcdFx0aWYgKHJpZ2h0LmQuYS4kID09PSAnQmxhY2snKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfbjMgPSByaWdodC5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgX240ID0gcmlnaHQuZDtcblx0XHRcdFx0XHRcdFx0dmFyIF9uNSA9IF9uNC5hO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkRGljdCRtb3ZlUmVkUmlnaHQoZGljdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRicmVhayBfbjIkMjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIF9uNiA9IHJpZ2h0LmE7XG5cdFx0XHRcdFx0XHR2YXIgX243ID0gcmlnaHQuZDtcblx0XHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JG1vdmVSZWRSaWdodChkaWN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnJlYWsgX24yJDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBkaWN0O1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRyZW1vdmVNaW4gPSBmdW5jdGlvbiAoZGljdCkge1xuXHRpZiAoKGRpY3QuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChkaWN0LmQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSB7XG5cdFx0dmFyIGNvbG9yID0gZGljdC5hO1xuXHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0dmFyIHZhbHVlID0gZGljdC5jO1xuXHRcdHZhciBsZWZ0ID0gZGljdC5kO1xuXHRcdHZhciBsQ29sb3IgPSBsZWZ0LmE7XG5cdFx0dmFyIGxMZWZ0ID0gbGVmdC5kO1xuXHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRpZiAobENvbG9yLiQgPT09ICdCbGFjaycpIHtcblx0XHRcdGlmICgobExlZnQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChsTGVmdC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0XHR2YXIgX24zID0gbExlZnQuYTtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JHJlbW92ZU1pbihsZWZ0KSxcblx0XHRcdFx0XHRyaWdodCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX240ID0gZWxtJGNvcmUkRGljdCRtb3ZlUmVkTGVmdChkaWN0KTtcblx0XHRcdFx0aWYgKF9uNC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykge1xuXHRcdFx0XHRcdHZhciBuQ29sb3IgPSBfbjQuYTtcblx0XHRcdFx0XHR2YXIgbktleSA9IF9uNC5iO1xuXHRcdFx0XHRcdHZhciBuVmFsdWUgPSBfbjQuYztcblx0XHRcdFx0XHR2YXIgbkxlZnQgPSBfbjQuZDtcblx0XHRcdFx0XHR2YXIgblJpZ2h0ID0gX240LmU7XG5cdFx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0bkNvbG9yLFxuXHRcdFx0XHRcdFx0bktleSxcblx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkcmVtb3ZlTWluKG5MZWZ0KSxcblx0XHRcdFx0XHRcdG5SaWdodCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRjb2xvcixcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCRyZW1vdmVNaW4obGVmdCksXG5cdFx0XHRcdHJpZ2h0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbjtcblx0fVxufTtcbnZhciBlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAgPSBGMihcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCkge1xuXHRcdGlmIChkaWN0LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNvbG9yID0gZGljdC5hO1xuXHRcdFx0dmFyIGtleSA9IGRpY3QuYjtcblx0XHRcdHZhciB2YWx1ZSA9IGRpY3QuYztcblx0XHRcdHZhciBsZWZ0ID0gZGljdC5kO1xuXHRcdFx0dmFyIHJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0aWYgKF9VdGlsc19jbXAodGFyZ2V0S2V5LCBrZXkpIDwgMCkge1xuXHRcdFx0XHRpZiAoKGxlZnQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChsZWZ0LmEuJCA9PT0gJ0JsYWNrJykpIHtcblx0XHRcdFx0XHR2YXIgX240ID0gbGVmdC5hO1xuXHRcdFx0XHRcdHZhciBsTGVmdCA9IGxlZnQuZDtcblx0XHRcdFx0XHRpZiAoKGxMZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobExlZnQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdHZhciBfbjYgPSBsTGVmdC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwgdGFyZ2V0S2V5LCBsZWZ0KSxcblx0XHRcdFx0XHRcdFx0cmlnaHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgX243ID0gZWxtJGNvcmUkRGljdCRtb3ZlUmVkTGVmdChkaWN0KTtcblx0XHRcdFx0XHRcdGlmIChfbjcuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG5Db2xvciA9IF9uNy5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgbktleSA9IF9uNy5iO1xuXHRcdFx0XHRcdFx0XHR2YXIgblZhbHVlID0gX243LmM7XG5cdFx0XHRcdFx0XHRcdHZhciBuTGVmdCA9IF9uNy5kO1xuXHRcdFx0XHRcdFx0XHR2YXIgblJpZ2h0ID0gX243LmU7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JGJhbGFuY2UsXG5cdFx0XHRcdFx0XHRcdFx0bkNvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdG5LZXksXG5cdFx0XHRcdFx0XHRcdFx0blZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwgdGFyZ2V0S2V5LCBuTGVmdCksXG5cdFx0XHRcdFx0XHRcdFx0blJpZ2h0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwgdGFyZ2V0S2V5LCBsZWZ0KSxcblx0XHRcdFx0XHRcdHJpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscEVRR1QsXG5cdFx0XHRcdFx0dGFyZ2V0S2V5LFxuXHRcdFx0XHRcdEE3KGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscFByZXBFUUdULCB0YXJnZXRLZXksIGRpY3QsIGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRyZW1vdmVIZWxwRVFHVCA9IEYyKFxuXHRmdW5jdGlvbiAodGFyZ2V0S2V5LCBkaWN0KSB7XG5cdFx0aWYgKGRpY3QuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdGlmIChfVXRpbHNfZXEodGFyZ2V0S2V5LCBrZXkpKSB7XG5cdFx0XHRcdHZhciBfbjEgPSBlbG0kY29yZSREaWN0JGdldE1pbihyaWdodCk7XG5cdFx0XHRcdGlmIChfbjEuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0XHR2YXIgbWluS2V5ID0gX24xLmI7XG5cdFx0XHRcdFx0dmFyIG1pblZhbHVlID0gX24xLmM7XG5cdFx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0XHRtaW5LZXksXG5cdFx0XHRcdFx0XHRtaW5WYWx1ZSxcblx0XHRcdFx0XHRcdGxlZnQsXG5cdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JHJlbW92ZU1pbihyaWdodCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JGJhbGFuY2UsXG5cdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdGxlZnQsXG5cdFx0XHRcdFx0QTIoZWxtJGNvcmUkRGljdCRyZW1vdmVIZWxwLCB0YXJnZXRLZXksIHJpZ2h0KSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JHJlbW92ZSA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCBkaWN0KSB7XG5cdFx0dmFyIF9uMCA9IEEyKGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwga2V5LCBkaWN0KTtcblx0XHRpZiAoKF9uMC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9uMC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0dmFyIF9uMSA9IF9uMC5hO1xuXHRcdFx0dmFyIGsgPSBfbjAuYjtcblx0XHRcdHZhciB2ID0gX24wLmM7XG5cdFx0XHR2YXIgbCA9IF9uMC5kO1xuXHRcdFx0dmFyIHIgPSBfbjAuZTtcblx0XHRcdHJldHVybiBBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRCbGFjaywgaywgdiwgbCwgcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB4ID0gX24wO1xuXHRcdFx0cmV0dXJuIHg7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JHVwZGF0ZSA9IEYzKFxuXHRmdW5jdGlvbiAodGFyZ2V0S2V5LCBhbHRlciwgZGljdGlvbmFyeSkge1xuXHRcdHZhciBfbjAgPSBhbHRlcihcblx0XHRcdEEyKGVsbSRjb3JlJERpY3QkZ2V0LCB0YXJnZXRLZXksIGRpY3Rpb25hcnkpKTtcblx0XHRpZiAoX24wLiQgPT09ICdKdXN0Jykge1xuXHRcdFx0dmFyIHZhbHVlID0gX24wLmE7XG5cdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkRGljdCRpbnNlcnQsIHRhcmdldEtleSwgdmFsdWUsIGRpY3Rpb25hcnkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkRGljdCRyZW1vdmUsIHRhcmdldEtleSwgZGljdGlvbmFyeSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZSA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCB2YWx1ZSkge1xuXHRcdHN3aXRjaCAodmFsdWUuJCkge1xuXHRcdFx0Y2FzZSAnUyc6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdGNhc2UgJ1ByaW1pdGl2ZSc6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdGNhc2UgJ1NlcXVlbmNlJzpcblx0XHRcdFx0dmFyIHNlcVR5cGUgPSB2YWx1ZS5hO1xuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSB2YWx1ZS5iO1xuXHRcdFx0XHR2YXIgdmFsdWVMaXN0ID0gdmFsdWUuYztcblx0XHRcdFx0c3dpdGNoIChtc2cuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ1RvZ2dsZSc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXF1ZW5jZSwgc2VxVHlwZSwgIWlzQ2xvc2VkLCB2YWx1ZUxpc3QpO1xuXHRcdFx0XHRcdGNhc2UgJ0luZGV4Jzpcblx0XHRcdFx0XHRcdGlmIChtc2cuYS4kID09PSAnTm9uZScpIHtcblx0XHRcdFx0XHRcdFx0dmFyIF9uMyA9IG1zZy5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBtc2cuYjtcblx0XHRcdFx0XHRcdFx0dmFyIHN1Yk1zZyA9IG1zZy5jO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXF1ZW5jZSxcblx0XHRcdFx0XHRcdFx0XHRzZXFUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdGlzQ2xvc2VkLFxuXHRcdFx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUoc3ViTXNnKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlTGlzdCkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdGNhc2UgJ0RpY3Rpb25hcnknOlxuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSB2YWx1ZS5hO1xuXHRcdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IHZhbHVlLmI7XG5cdFx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0XHRjYXNlICdUb2dnbGUnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRGljdGlvbmFyeSwgIWlzQ2xvc2VkLCBrZXlWYWx1ZVBhaXJzKTtcblx0XHRcdFx0XHRjYXNlICdJbmRleCc6XG5cdFx0XHRcdFx0XHR2YXIgcmVkaXJlY3QgPSBtc2cuYTtcblx0XHRcdFx0XHRcdHZhciBpbmRleCA9IG1zZy5iO1xuXHRcdFx0XHRcdFx0dmFyIHN1Yk1zZyA9IG1zZy5jO1xuXHRcdFx0XHRcdFx0c3dpdGNoIChyZWRpcmVjdC4kKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ05vbmUnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnS2V5Jzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnksXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF9uNikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBrID0gX242LmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHYgPSBfbjYuYjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlLCBzdWJNc2csIGspLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleVZhbHVlUGFpcnMpKTtcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnksXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF9uNykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBrID0gX243LmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHYgPSBfbjcuYjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZSwgc3ViTXNnLCB2KSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleVZhbHVlUGFpcnMpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRjYXNlICdSZWNvcmQnOlxuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSB2YWx1ZS5hO1xuXHRcdFx0XHR2YXIgdmFsdWVEaWN0ID0gdmFsdWUuYjtcblx0XHRcdFx0c3dpdGNoIChtc2cuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ1RvZ2dsZSc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsICFpc0Nsb3NlZCwgdmFsdWVEaWN0KTtcblx0XHRcdFx0XHRjYXNlICdJbmRleCc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHZhciBmaWVsZCA9IG1zZy5hO1xuXHRcdFx0XHRcdFx0dmFyIHN1Yk1zZyA9IG1zZy5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFJlY29yZCxcblx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkdXBkYXRlLFxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkLFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlRmllbGQoc3ViTXNnKSxcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZURpY3QpKTtcblx0XHRcdFx0fVxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIG1heWJlTmFtZSA9IHZhbHVlLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IHZhbHVlLmI7XG5cdFx0XHRcdHZhciB2YWx1ZUxpc3QgPSB2YWx1ZS5jO1xuXHRcdFx0XHRzd2l0Y2ggKG1zZy4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnVG9nZ2xlJzpcblx0XHRcdFx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJENvbnN0cnVjdG9yLCBtYXliZU5hbWUsICFpc0Nsb3NlZCwgdmFsdWVMaXN0KTtcblx0XHRcdFx0XHRjYXNlICdJbmRleCc6XG5cdFx0XHRcdFx0XHRpZiAobXNnLmEuJCA9PT0gJ05vbmUnKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfbjEwID0gbXNnLmE7XG5cdFx0XHRcdFx0XHRcdHZhciBpbmRleCA9IG1zZy5iO1xuXHRcdFx0XHRcdFx0XHR2YXIgc3ViTXNnID0gbXNnLmM7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJENvbnN0cnVjdG9yLFxuXHRcdFx0XHRcdFx0XHRcdG1heWJlTmFtZSxcblx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlSW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlKHN1Yk1zZyksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZUxpc3QpKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUZpZWxkID0gRjIoXG5cdGZ1bmN0aW9uIChtc2csIG1heWJlRXhwYW5kbykge1xuXHRcdGlmIChtYXliZUV4cGFuZG8uJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRyZXR1cm4gbWF5YmVFeHBhbmRvO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXhwYW5kbyA9IG1heWJlRXhwYW5kby5hO1xuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlLCBtc2csIGV4cGFuZG8pKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkU25hcHNob3QgPSBGMihcblx0ZnVuY3Rpb24gKG1vZGVsLCBtZXNzYWdlcykge1xuXHRcdHJldHVybiB7bWVzc2FnZXM6IG1lc3NhZ2VzLCBtb2RlbDogbW9kZWx9O1xuXHR9KTtcbnZhciBlbG0kY29yZSRBcnJheSRmcm9tTGlzdEhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKGxpc3QsIG5vZGVMaXN0LCBub2RlTGlzdFNpemUpIHtcblx0XHRmcm9tTGlzdEhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBfbjAgPSBBMihlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplRnJvbUxpc3QsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvciwgbGlzdCk7XG5cdFx0XHR2YXIganNBcnJheSA9IF9uMC5hO1xuXHRcdFx0dmFyIHJlbWFpbmluZ0l0ZW1zID0gX24wLmI7XG5cdFx0XHRpZiAoX1V0aWxzX2NtcChcblx0XHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKGpzQXJyYXkpLFxuXHRcdFx0XHRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IpIDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkYnVpbGRlclRvQXJyYXksXG5cdFx0XHRcdFx0dHJ1ZSxcblx0XHRcdFx0XHR7bm9kZUxpc3Q6IG5vZGVMaXN0LCBub2RlTGlzdFNpemU6IG5vZGVMaXN0U2l6ZSwgdGFpbDoganNBcnJheX0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyICR0ZW1wJGxpc3QgPSByZW1haW5pbmdJdGVtcyxcblx0XHRcdFx0XHQkdGVtcCRub2RlTGlzdCA9IEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRlbG0kY29yZSRBcnJheSRMZWFmKGpzQXJyYXkpLFxuXHRcdFx0XHRcdG5vZGVMaXN0KSxcblx0XHRcdFx0XHQkdGVtcCRub2RlTGlzdFNpemUgPSBub2RlTGlzdFNpemUgKyAxO1xuXHRcdFx0XHRsaXN0ID0gJHRlbXAkbGlzdDtcblx0XHRcdFx0bm9kZUxpc3QgPSAkdGVtcCRub2RlTGlzdDtcblx0XHRcdFx0bm9kZUxpc3RTaXplID0gJHRlbXAkbm9kZUxpc3RTaXplO1xuXHRcdFx0XHRjb250aW51ZSBmcm9tTGlzdEhlbHA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRBcnJheSRmcm9tTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdGlmICghbGlzdC5iKSB7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJEFycmF5JGVtcHR5O1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBBMyhlbG0kY29yZSRBcnJheSRmcm9tTGlzdEhlbHAsIGxpc3QsIF9MaXN0X05pbCwgMCk7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGRSZWNlbnQgPSBGMyhcblx0ZnVuY3Rpb24gKG1zZywgbmV3TW9kZWwsIF9uMCkge1xuXHRcdHZhciBtb2RlbCA9IF9uMC5tb2RlbDtcblx0XHR2YXIgbWVzc2FnZXMgPSBfbjAubWVzc2FnZXM7XG5cdFx0dmFyIG51bU1lc3NhZ2VzID0gX24wLm51bU1lc3NhZ2VzO1xuXHRcdHJldHVybiBfVXRpbHNfZXEobnVtTWVzc2FnZXMsIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplKSA/IF9VdGlsc19UdXBsZTIoXG5cdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFNuYXBzaG90LFxuXHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JGZyb21MaXN0KG1lc3NhZ2VzKSkpLFxuXHRcdFx0QTMoXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkUmVjZW50SGlzdG9yeSxcblx0XHRcdFx0bmV3TW9kZWwsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbbXNnXSksXG5cdFx0XHRcdDEpKSA6IF9VdGlsc19UdXBsZTIoXG5cdFx0XHRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0QTMoXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkUmVjZW50SGlzdG9yeSxcblx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdEEyKGVsbSRjb3JlJExpc3QkY29ucywgbXNnLCBtZXNzYWdlcyksXG5cdFx0XHRcdG51bU1lc3NhZ2VzICsgMSkpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRCaXR3aXNlJHNoaWZ0UmlnaHRaZkJ5ID0gX0JpdHdpc2Vfc2hpZnRSaWdodFpmQnk7XG52YXIgZWxtJGNvcmUkQXJyYXkkYml0TWFzayA9IDQyOTQ5NjcyOTUgPj4+ICgzMiAtIGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGdlID0gX1V0aWxzX2dlO1xudmFyIGVsbSRjb3JlJEJpdHdpc2UkYW5kID0gX0JpdHdpc2VfYW5kO1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JHB1c2ggPSBfSnNBcnJheV9wdXNoO1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JHNpbmdsZXRvbiA9IF9Kc0FycmF5X3NpbmdsZXRvbjtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQgPSBfSnNBcnJheV91bnNhZmVHZXQ7XG52YXIgZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlU2V0ID0gX0pzQXJyYXlfdW5zYWZlU2V0O1xudmFyIGVsbSRjb3JlJEFycmF5JGluc2VydFRhaWxJblRyZWUgPSBGNChcblx0ZnVuY3Rpb24gKHNoaWZ0LCBpbmRleCwgdGFpbCwgdHJlZSkge1xuXHRcdHZhciBwb3MgPSBlbG0kY29yZSRBcnJheSRiaXRNYXNrICYgKGluZGV4ID4+PiBzaGlmdCk7XG5cdFx0aWYgKF9VdGlsc19jbXAoXG5cdFx0XHRwb3MsXG5cdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgodHJlZSkpID4gLTEpIHtcblx0XHRcdGlmIChzaGlmdCA9PT0gNSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkcHVzaCxcblx0XHRcdFx0XHRlbG0kY29yZSRBcnJheSRMZWFmKHRhaWwpLFxuXHRcdFx0XHRcdHRyZWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG5ld1N1YiA9IGVsbSRjb3JlJEFycmF5JFN1YlRyZWUoXG5cdFx0XHRcdFx0QTQoZWxtJGNvcmUkQXJyYXkkaW5zZXJ0VGFpbEluVHJlZSwgc2hpZnQgLSBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsIGluZGV4LCB0YWlsLCBlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSkpO1xuXHRcdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkRWxtJEpzQXJyYXkkcHVzaCwgbmV3U3ViLCB0cmVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHZhbHVlID0gQTIoZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlR2V0LCBwb3MsIHRyZWUpO1xuXHRcdFx0aWYgKHZhbHVlLiQgPT09ICdTdWJUcmVlJykge1xuXHRcdFx0XHR2YXIgc3ViVHJlZSA9IHZhbHVlLmE7XG5cdFx0XHRcdHZhciBuZXdTdWIgPSBlbG0kY29yZSRBcnJheSRTdWJUcmVlKFxuXHRcdFx0XHRcdEE0KGVsbSRjb3JlJEFycmF5JGluc2VydFRhaWxJblRyZWUsIHNoaWZ0IC0gZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLCBpbmRleCwgdGFpbCwgc3ViVHJlZSkpO1xuXHRcdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlU2V0LCBwb3MsIG5ld1N1YiwgdHJlZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbmV3U3ViID0gZWxtJGNvcmUkQXJyYXkkU3ViVHJlZShcblx0XHRcdFx0XHRBNChcblx0XHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JGluc2VydFRhaWxJblRyZWUsXG5cdFx0XHRcdFx0XHRzaGlmdCAtIGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCxcblx0XHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdFx0dGFpbCxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJEVsbSRKc0FycmF5JHNpbmdsZXRvbih2YWx1ZSkpKTtcblx0XHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZVNldCwgcG9zLCBuZXdTdWIsIHRyZWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQml0d2lzZSRzaGlmdExlZnRCeSA9IF9CaXR3aXNlX3NoaWZ0TGVmdEJ5O1xudmFyIGVsbSRjb3JlJEFycmF5JHVuc2FmZVJlcGxhY2VUYWlsID0gRjIoXG5cdGZ1bmN0aW9uIChuZXdUYWlsLCBfbjApIHtcblx0XHR2YXIgbGVuID0gX24wLmE7XG5cdFx0dmFyIHN0YXJ0U2hpZnQgPSBfbjAuYjtcblx0XHR2YXIgdHJlZSA9IF9uMC5jO1xuXHRcdHZhciB0YWlsID0gX24wLmQ7XG5cdFx0dmFyIG9yaWdpbmFsVGFpbExlbiA9IGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aCh0YWlsKTtcblx0XHR2YXIgbmV3VGFpbExlbiA9IGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aChuZXdUYWlsKTtcblx0XHR2YXIgbmV3QXJyYXlMZW4gPSBsZW4gKyAobmV3VGFpbExlbiAtIG9yaWdpbmFsVGFpbExlbik7XG5cdFx0aWYgKF9VdGlsc19lcShuZXdUYWlsTGVuLCBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IpKSB7XG5cdFx0XHR2YXIgb3ZlcmZsb3cgPSBfVXRpbHNfY21wKG5ld0FycmF5TGVuID4+PiBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsIDEgPDwgc3RhcnRTaGlmdCkgPiAwO1xuXHRcdFx0aWYgKG92ZXJmbG93KSB7XG5cdFx0XHRcdHZhciBuZXdTaGlmdCA9IHN0YXJ0U2hpZnQgKyBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXA7XG5cdFx0XHRcdHZhciBuZXdUcmVlID0gQTQoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkaW5zZXJ0VGFpbEluVHJlZSxcblx0XHRcdFx0XHRuZXdTaGlmdCxcblx0XHRcdFx0XHRsZW4sXG5cdFx0XHRcdFx0bmV3VGFpbCxcblx0XHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRzaW5nbGV0b24oXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRBcnJheSRTdWJUcmVlKHRyZWUpKSk7XG5cdFx0XHRcdHJldHVybiBBNChlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbiwgbmV3QXJyYXlMZW4sIG5ld1NoaWZ0LCBuZXdUcmVlLCBlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkQXJyYXlfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0bmV3QXJyYXlMZW4sXG5cdFx0XHRcdFx0c3RhcnRTaGlmdCxcblx0XHRcdFx0XHRBNChlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlLCBzdGFydFNoaWZ0LCBsZW4sIG5ld1RhaWwsIHRyZWUpLFxuXHRcdFx0XHRcdGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEE0KGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLCBuZXdBcnJheUxlbiwgc3RhcnRTaGlmdCwgdHJlZSwgbmV3VGFpbCk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRBcnJheSRwdXNoID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBhcnJheSkge1xuXHRcdHZhciB0YWlsID0gYXJyYXkuZDtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kY29yZSRBcnJheSR1bnNhZmVSZXBsYWNlVGFpbCxcblx0XHRcdEEyKGVsbSRjb3JlJEVsbSRKc0FycmF5JHB1c2gsIGEsIHRhaWwpLFxuXHRcdFx0YXJyYXkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGFkZCA9IEYzKFxuXHRmdW5jdGlvbiAobXNnLCBtb2RlbCwgX24wKSB7XG5cdFx0dmFyIHNuYXBzaG90cyA9IF9uMC5zbmFwc2hvdHM7XG5cdFx0dmFyIHJlY2VudCA9IF9uMC5yZWNlbnQ7XG5cdFx0dmFyIG51bU1lc3NhZ2VzID0gX24wLm51bU1lc3NhZ2VzO1xuXHRcdHZhciBfbjEgPSBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGFkZFJlY2VudCwgbXNnLCBtb2RlbCwgcmVjZW50KTtcblx0XHRpZiAoX24xLmEuJCA9PT0gJ0p1c3QnKSB7XG5cdFx0XHR2YXIgc25hcHNob3QgPSBfbjEuYS5hO1xuXHRcdFx0dmFyIG5ld1JlY2VudCA9IF9uMS5iO1xuXHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JEhpc3RvcnksXG5cdFx0XHRcdEEyKGVsbSRjb3JlJEFycmF5JHB1c2gsIHNuYXBzaG90LCBzbmFwc2hvdHMpLFxuXHRcdFx0XHRuZXdSZWNlbnQsXG5cdFx0XHRcdG51bU1lc3NhZ2VzICsgMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBfbjIgPSBfbjEuYTtcblx0XHRcdHZhciBuZXdSZWNlbnQgPSBfbjEuYjtcblx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JEhpc3RvcnksIHNuYXBzaG90cywgbmV3UmVjZW50LCBudW1NZXNzYWdlcyArIDEpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRTdGVwcGluZyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1N0ZXBwaW5nJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkRG9uZSA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0RvbmUnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRnZXRIZWxwID0gRjMoXG5cdGZ1bmN0aW9uICh1cGRhdGUsIG1zZywgZ2V0UmVzdWx0KSB7XG5cdFx0aWYgKGdldFJlc3VsdC4kID09PSAnRG9uZScpIHtcblx0XHRcdHJldHVybiBnZXRSZXN1bHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBuID0gZ2V0UmVzdWx0LmE7XG5cdFx0XHR2YXIgbW9kZWwgPSBnZXRSZXN1bHQuYjtcblx0XHRcdHJldHVybiAoIW4pID8gQTIoXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkRG9uZSxcblx0XHRcdFx0bXNnLFxuXHRcdFx0XHRBMih1cGRhdGUsIG1zZywgbW9kZWwpLmEpIDogQTIoXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkU3RlcHBpbmcsXG5cdFx0XHRcdG4gLSAxLFxuXHRcdFx0XHRBMih1cGRhdGUsIG1zZywgbW9kZWwpLmEpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR1bmRvbmUgPSBmdW5jdGlvbiAoZ2V0UmVzdWx0KSB7XG5cdHVuZG9uZTpcblx0d2hpbGUgKHRydWUpIHtcblx0XHRpZiAoZ2V0UmVzdWx0LiQgPT09ICdEb25lJykge1xuXHRcdFx0dmFyIG1zZyA9IGdldFJlc3VsdC5hO1xuXHRcdFx0dmFyIG1vZGVsID0gZ2V0UmVzdWx0LmI7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgbXNnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyICR0ZW1wJGdldFJlc3VsdCA9IGdldFJlc3VsdDtcblx0XHRcdGdldFJlc3VsdCA9ICR0ZW1wJGdldFJlc3VsdDtcblx0XHRcdGNvbnRpbnVlIHVuZG9uZTtcblx0XHR9XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkQXJyYXkkZ2V0SGVscCA9IEYzKFxuXHRmdW5jdGlvbiAoc2hpZnQsIGluZGV4LCB0cmVlKSB7XG5cdFx0Z2V0SGVscDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIHBvcyA9IGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgJiAoaW5kZXggPj4+IHNoaWZ0KTtcblx0XHRcdHZhciBfbjAgPSBBMihlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQsIHBvcywgdHJlZSk7XG5cdFx0XHRpZiAoX24wLiQgPT09ICdTdWJUcmVlJykge1xuXHRcdFx0XHR2YXIgc3ViVHJlZSA9IF9uMC5hO1xuXHRcdFx0XHR2YXIgJHRlbXAkc2hpZnQgPSBzaGlmdCAtIGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCxcblx0XHRcdFx0XHQkdGVtcCRpbmRleCA9IGluZGV4LFxuXHRcdFx0XHRcdCR0ZW1wJHRyZWUgPSBzdWJUcmVlO1xuXHRcdFx0XHRzaGlmdCA9ICR0ZW1wJHNoaWZ0O1xuXHRcdFx0XHRpbmRleCA9ICR0ZW1wJGluZGV4O1xuXHRcdFx0XHR0cmVlID0gJHRlbXAkdHJlZTtcblx0XHRcdFx0Y29udGludWUgZ2V0SGVscDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB2YWx1ZXMgPSBfbjAuYTtcblx0XHRcdFx0cmV0dXJuIEEyKGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZUdldCwgZWxtJGNvcmUkQXJyYXkkYml0TWFzayAmIGluZGV4LCB2YWx1ZXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQXJyYXkkdGFpbEluZGV4ID0gZnVuY3Rpb24gKGxlbikge1xuXHRyZXR1cm4gKGxlbiA+Pj4gNSkgPDwgNTtcbn07XG52YXIgZWxtJGNvcmUkQXJyYXkkZ2V0ID0gRjIoXG5cdGZ1bmN0aW9uIChpbmRleCwgX24wKSB7XG5cdFx0dmFyIGxlbiA9IF9uMC5hO1xuXHRcdHZhciBzdGFydFNoaWZ0ID0gX24wLmI7XG5cdFx0dmFyIHRyZWUgPSBfbjAuYztcblx0XHR2YXIgdGFpbCA9IF9uMC5kO1xuXHRcdHJldHVybiAoKGluZGV4IDwgMCkgfHwgKF9VdGlsc19jbXAoaW5kZXgsIGxlbikgPiAtMSkpID8gZWxtJGNvcmUkTWF5YmUkTm90aGluZyA6ICgoX1V0aWxzX2NtcChcblx0XHRcdGluZGV4LFxuXHRcdFx0ZWxtJGNvcmUkQXJyYXkkdGFpbEluZGV4KGxlbikpID4gLTEpID8gZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdEEyKGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZUdldCwgZWxtJGNvcmUkQXJyYXkkYml0TWFzayAmIGluZGV4LCB0YWlsKSkgOiBlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0QTMoZWxtJGNvcmUkQXJyYXkkZ2V0SGVscCwgc3RhcnRTaGlmdCwgaW5kZXgsIHRyZWUpKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0ID0gRjMoXG5cdGZ1bmN0aW9uICh1cGRhdGUsIGluZGV4LCBoaXN0b3J5KSB7XG5cdFx0Z2V0OlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgcmVjZW50ID0gaGlzdG9yeS5yZWNlbnQ7XG5cdFx0XHR2YXIgc25hcHNob3RNYXggPSBoaXN0b3J5Lm51bU1lc3NhZ2VzIC0gcmVjZW50Lm51bU1lc3NhZ2VzO1xuXHRcdFx0aWYgKF9VdGlsc19jbXAoaW5kZXgsIHNuYXBzaG90TWF4KSA+IC0xKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHVuZG9uZShcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldEhlbHAodXBkYXRlKSxcblx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkU3RlcHBpbmcsIGluZGV4IC0gc25hcHNob3RNYXgsIHJlY2VudC5tb2RlbCksXG5cdFx0XHRcdFx0XHRyZWNlbnQubWVzc2FnZXMpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfbjAgPSBBMihlbG0kY29yZSRBcnJheSRnZXQsIChpbmRleCAvIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplKSB8IDAsIGhpc3Rvcnkuc25hcHNob3RzKTtcblx0XHRcdFx0aWYgKF9uMC4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHR2YXIgJHRlbXAkdXBkYXRlID0gdXBkYXRlLFxuXHRcdFx0XHRcdFx0JHRlbXAkaW5kZXggPSBpbmRleCxcblx0XHRcdFx0XHRcdCR0ZW1wJGhpc3RvcnkgPSBoaXN0b3J5O1xuXHRcdFx0XHRcdHVwZGF0ZSA9ICR0ZW1wJHVwZGF0ZTtcblx0XHRcdFx0XHRpbmRleCA9ICR0ZW1wJGluZGV4O1xuXHRcdFx0XHRcdGhpc3RvcnkgPSAkdGVtcCRoaXN0b3J5O1xuXHRcdFx0XHRcdGNvbnRpbnVlIGdldDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgbW9kZWwgPSBfbjAuYS5tb2RlbDtcblx0XHRcdFx0XHR2YXIgbWVzc2FnZXMgPSBfbjAuYS5tZXNzYWdlcztcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR1bmRvbmUoXG5cdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkZm9sZHIsXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0SGVscCh1cGRhdGUpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFN0ZXBwaW5nLCBpbmRleCAlIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplLCBtb2RlbCksXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2VzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUGF1c2VkID0gRjMoXG5cdGZ1bmN0aW9uIChhLCBiLCBjKSB7XG5cdFx0cmV0dXJuIHskOiAnUGF1c2VkJywgYTogYSwgYjogYiwgYzogY307XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZWxtVG9KcyA9IF9EZWJ1Z2dlcl91bnNhZmVDb2VyY2U7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRlbmNvZGVIZWxwID0gRjIoXG5cdGZ1bmN0aW9uIChzbmFwc2hvdCwgYWxsTWVzc2FnZXMpIHtcblx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkQXJyYXkkZm9sZGwsIGVsbSRjb3JlJExpc3QkY29ucywgYWxsTWVzc2FnZXMsIHNuYXBzaG90Lm1lc3NhZ2VzKTtcblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiRFbmNvZGUkbGlzdCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgZW50cmllcykge1xuXHRcdHJldHVybiBfSnNvbl93cmFwKFxuXHRcdFx0QTMoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdF9Kc29uX2FkZEVudHJ5KGZ1bmMpLFxuXHRcdFx0XHRfSnNvbl9lbXB0eUFycmF5KF9VdGlsc19UdXBsZTApLFxuXHRcdFx0XHRlbnRyaWVzKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZW5jb2RlID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgc25hcHNob3RzID0gX24wLnNuYXBzaG90cztcblx0dmFyIHJlY2VudCA9IF9uMC5yZWNlbnQ7XG5cdHJldHVybiBBMihcblx0XHRlbG0kanNvbiRKc29uJEVuY29kZSRsaXN0LFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZWxtVG9Kcyxcblx0XHRBMyhcblx0XHRcdGVsbSRjb3JlJEFycmF5JGZvbGRyLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRlbmNvZGVIZWxwLFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRyZXZlcnNlKHJlY2VudC5tZXNzYWdlcyksXG5cdFx0XHRzbmFwc2hvdHMpKTtcbn07XG52YXIgZWxtJGpzb24kSnNvbiRFbmNvZGUkb2JqZWN0ID0gZnVuY3Rpb24gKHBhaXJzKSB7XG5cdHJldHVybiBfSnNvbl93cmFwKFxuXHRcdEEzKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoX24wLCBvYmopIHtcblx0XHRcdFx0XHR2YXIgayA9IF9uMC5hO1xuXHRcdFx0XHRcdHZhciB2ID0gX24wLmI7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKF9Kc29uX2FkZEZpZWxkLCBrLCB2LCBvYmopO1xuXHRcdFx0XHR9KSxcblx0XHRcdF9Kc29uX2VtcHR5T2JqZWN0KF9VdGlsc19UdXBsZTApLFxuXHRcdFx0cGFpcnMpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlQWxpYXMgPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBhcmdzID0gX24wLmFyZ3M7XG5cdHZhciB0aXBlID0gX24wLnRpcGU7XG5cdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQnYXJncycsXG5cdFx0XHRcdEEyKGVsbSRqc29uJEpzb24kRW5jb2RlJGxpc3QsIGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZywgYXJncykpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndHlwZScsXG5cdFx0XHRcdGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZyh0aXBlKSlcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlRGljdCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgZGljdCkge1xuXHRcdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0XHRlbG0kY29yZSREaWN0JHRvTGlzdChcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRtYXAsXG5cdFx0XHRcdFx0RjIoXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZih2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRkaWN0KSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVVbmlvbiA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIGFyZ3MgPSBfbjAuYXJncztcblx0dmFyIHRhZ3MgPSBfbjAudGFncztcblx0cmV0dXJuIGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdChcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCdhcmdzJyxcblx0XHRcdFx0QTIoZWxtJGpzb24kSnNvbiRFbmNvZGUkbGlzdCwgZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nLCBhcmdzKSksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCd0YWdzJyxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlRGljdCxcblx0XHRcdFx0XHRlbG0kanNvbiRKc29uJEVuY29kZSRsaXN0KGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZyksXG5cdFx0XHRcdFx0dGFncykpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZVR5cGVzID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgbWVzc2FnZSA9IF9uMC5tZXNzYWdlO1xuXHR2YXIgdW5pb25zID0gX24wLnVuaW9ucztcblx0dmFyIGFsaWFzZXMgPSBfbjAuYWxpYXNlcztcblx0cmV0dXJuIGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdChcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCdtZXNzYWdlJyxcblx0XHRcdFx0ZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nKG1lc3NhZ2UpKSxcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J2FsaWFzZXMnLFxuXHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVEaWN0LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVBbGlhcywgYWxpYXNlcykpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndW5pb25zJyxcblx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlRGljdCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlVW5pb24sIHVuaW9ucykpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZVZlcnNpb25zID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgZWxtID0gX24wLmVsbTtcblx0cmV0dXJuIGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdChcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCdlbG0nLFxuXHRcdFx0XHRlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcoZWxtKSlcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgdmVyc2lvbnMgPSBfbjAudmVyc2lvbnM7XG5cdHZhciB0eXBlcyA9IF9uMC50eXBlcztcblx0cmV0dXJuIGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdChcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCd2ZXJzaW9ucycsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZVZlcnNpb25zKHZlcnNpb25zKSksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCd0eXBlcycsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZVR5cGVzKHR5cGVzKSlcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRkb3dubG9hZCA9IEYyKFxuXHRmdW5jdGlvbiAobWV0YWRhdGEsIGhpc3RvcnkpIHtcblx0XHR2YXIganNvbiA9IGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdChcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0J21ldGFkYXRhJyxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGUobWV0YWRhdGEpKSxcblx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdCdoaXN0b3J5Jyxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVuY29kZShoaXN0b3J5KSlcblx0XHRcdFx0XSkpO1xuXHRcdHZhciBoaXN0b3J5TGVuZ3RoID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRzaXplKGhpc3RvcnkpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRjb3JlJFRhc2skcGVyZm9ybSxcblx0XHRcdGZ1bmN0aW9uIChfbjApIHtcblx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kTm9PcDtcblx0XHRcdH0sXG5cdFx0XHRBMihfRGVidWdnZXJfZG93bmxvYWQsIGhpc3RvcnlMZW5ndGgsIGpzb24pKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRqc1RvRWxtID0gX0RlYnVnZ2VyX3Vuc2FmZUNvZXJjZTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSR2YWx1ZSA9IF9Kc29uX2RlY29kZVZhbHVlO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZGVjb2RlciA9IEYyKFxuXHRmdW5jdGlvbiAoaW5pdGlhbE1vZGVsLCB1cGRhdGUpIHtcblx0XHR2YXIgYWRkTWVzc2FnZSA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHJhd01zZywgX24wKSB7XG5cdFx0XHRcdHZhciBtb2RlbCA9IF9uMC5hO1xuXHRcdFx0XHR2YXIgaGlzdG9yeSA9IF9uMC5iO1xuXHRcdFx0XHR2YXIgbXNnID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRqc1RvRWxtKHJhd01zZyk7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdEEyKHVwZGF0ZSwgbXNnLCBtb2RlbCksXG5cdFx0XHRcdFx0QTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGQsIG1zZywgbW9kZWwsIGhpc3RvcnkpKTtcblx0XHRcdH0pO1xuXHRcdHZhciB1cGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChyYXdNc2dzKSB7XG5cdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdGFkZE1lc3NhZ2UsXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0aW5pdGlhbE1vZGVsLFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZW1wdHkoaW5pdGlhbE1vZGVsKSksXG5cdFx0XHRcdHJhd01zZ3MpO1xuXHRcdH07XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwLFxuXHRcdFx0dXBkYXRlTW9kZWwsXG5cdFx0XHRlbG0kanNvbiRKc29uJERlY29kZSRsaXN0KGVsbSRqc29uJEpzb24kRGVjb2RlJHZhbHVlKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0SW5pdGlhbE1vZGVsID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgc25hcHNob3RzID0gX24wLnNuYXBzaG90cztcblx0dmFyIHJlY2VudCA9IF9uMC5yZWNlbnQ7XG5cdHZhciBfbjEgPSBBMihlbG0kY29yZSRBcnJheSRnZXQsIDAsIHNuYXBzaG90cyk7XG5cdGlmIChfbjEuJCA9PT0gJ0p1c3QnKSB7XG5cdFx0dmFyIG1vZGVsID0gX24xLmEubW9kZWw7XG5cdFx0cmV0dXJuIG1vZGVsO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZWNlbnQubW9kZWw7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCYWRJbXBvcnQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdCYWRJbXBvcnQnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JENvcnJ1cHRIaXN0b3J5ID0geyQ6ICdDb3JydXB0SGlzdG9yeSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkY29ycnVwdEltcG9ydCA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmFkSW1wb3J0KGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRDb3JydXB0SGlzdG9yeSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRsb2FkTmV3SGlzdG9yeSA9IEYzKFxuXHRmdW5jdGlvbiAocmF3SGlzdG9yeSwgdXBkYXRlLCBtb2RlbCkge1xuXHRcdHZhciBwdXJlVXNlclVwZGF0ZSA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKG1zZywgdXNlck1vZGVsKSB7XG5cdFx0XHRcdHJldHVybiBBMih1cGRhdGUsIG1zZywgdXNlck1vZGVsKS5hO1xuXHRcdFx0fSk7XG5cdFx0dmFyIGluaXRpYWxVc2VyTW9kZWwgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldEluaXRpYWxNb2RlbChtb2RlbC5oaXN0b3J5KTtcblx0XHR2YXIgZGVjb2RlciA9IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZGVjb2RlciwgaW5pdGlhbFVzZXJNb2RlbCwgcHVyZVVzZXJVcGRhdGUpO1xuXHRcdHZhciBfbjAgPSBBMihlbG0kanNvbiRKc29uJERlY29kZSRkZWNvZGVWYWx1ZSwgZGVjb2RlciwgcmF3SGlzdG9yeSk7XG5cdFx0aWYgKF9uMC4kID09PSAnRXJyJykge1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0e292ZXJsYXk6IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkY29ycnVwdEltcG9ydH0pLFxuXHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBfbjEgPSBfbjAuYTtcblx0XHRcdHZhciBsYXRlc3RVc2VyTW9kZWwgPSBfbjEuYTtcblx0XHRcdHZhciBuZXdIaXN0b3J5ID0gX24xLmI7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRleHBhbmRvOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGluaXQobGF0ZXN0VXNlck1vZGVsKSxcblx0XHRcdFx0XHRcdGhpc3Rvcnk6IG5ld0hpc3RvcnksXG5cdFx0XHRcdFx0XHRvdmVybGF5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JG5vbmUsXG5cdFx0XHRcdFx0XHRzdGF0ZTogZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSdW5uaW5nKGxhdGVzdFVzZXJNb2RlbClcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0ZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGFsd2F5cyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgX24wKSB7XG5cdFx0cmV0dXJuIGE7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kc2Nyb2xsID0gZnVuY3Rpb24gKHBvcG91dCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGNvcmUkVGFzayRwZXJmb3JtLFxuXHRcdGVsbSRjb3JlJEJhc2ljcyRhbHdheXMoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wKSxcblx0XHRfRGVidWdnZXJfc2Nyb2xsKHBvcG91dCkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVwbG9hZCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1VwbG9hZCcsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHVwbG9hZCA9IEEyKFxuXHRlbG0kY29yZSRUYXNrJHBlcmZvcm0sXG5cdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXBsb2FkLFxuXHRfRGVidWdnZXJfdXBsb2FkKF9VdGlsc19UdXBsZTApKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJhZE1ldGFkYXRhID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnQmFkTWV0YWRhdGEnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRiYWRNZXRhZGF0YSA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmFkTWV0YWRhdGE7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3aXRoR29vZE1ldGFkYXRhID0gRjIoXG5cdGZ1bmN0aW9uIChtb2RlbCwgZnVuYykge1xuXHRcdHZhciBfbjAgPSBtb2RlbC5tZXRhZGF0YTtcblx0XHRpZiAoX24wLiQgPT09ICdPaycpIHtcblx0XHRcdHZhciBtZXRhZGF0YSA9IF9uMC5hO1xuXHRcdFx0cmV0dXJuIGZ1bmMobWV0YWRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3IgPSBfbjAuYTtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG92ZXJsYXk6IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYmFkTWV0YWRhdGEoZXJyb3IpXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRBbGlhc0NoYW5nZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0FsaWFzQ2hhbmdlJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrQWxpYXMgPSBGNChcblx0ZnVuY3Rpb24gKG5hbWUsIG9sZCwgX25ldywgY2hhbmdlcykge1xuXHRcdHJldHVybiAoX1V0aWxzX2VxKG9sZC50aXBlLCBfbmV3LnRpcGUpICYmIF9VdGlsc19lcShvbGQuYXJncywgX25ldy5hcmdzKSkgPyBjaGFuZ2VzIDogQTIoXG5cdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkQWxpYXNDaGFuZ2UobmFtZSksXG5cdFx0XHRjaGFuZ2VzKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkYWRkVGFnID0gRjMoXG5cdGZ1bmN0aW9uICh0YWcsIF9uMCwgY2hhbmdlcykge1xuXHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0Y2hhbmdlcyxcblx0XHRcdHtcblx0XHRcdFx0YWRkZWQ6IEEyKGVsbSRjb3JlJExpc3QkY29ucywgdGFnLCBjaGFuZ2VzLmFkZGVkKVxuXHRcdFx0fSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrVGFnID0gRjQoXG5cdGZ1bmN0aW9uICh0YWcsIG9sZCwgX25ldywgY2hhbmdlcykge1xuXHRcdHJldHVybiBfVXRpbHNfZXEob2xkLCBfbmV3KSA/IGNoYW5nZXMgOiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0Y2hhbmdlcyxcblx0XHRcdHtcblx0XHRcdFx0Y2hhbmdlZDogQTIoZWxtJGNvcmUkTGlzdCRjb25zLCB0YWcsIGNoYW5nZXMuY2hhbmdlZClcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRyZW1vdmVUYWcgPSBGMyhcblx0ZnVuY3Rpb24gKHRhZywgX24wLCBjaGFuZ2VzKSB7XG5cdFx0cmV0dXJuIF9VdGlsc191cGRhdGUoXG5cdFx0XHRjaGFuZ2VzLFxuXHRcdFx0e1xuXHRcdFx0XHRyZW1vdmVkOiBBMihlbG0kY29yZSRMaXN0JGNvbnMsIHRhZywgY2hhbmdlcy5yZW1vdmVkKVxuXHRcdFx0fSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRVbmlvbkNoYW5nZSA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1VuaW9uQ2hhbmdlJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRUYWdDaGFuZ2VzID0gRjQoXG5cdGZ1bmN0aW9uIChyZW1vdmVkLCBjaGFuZ2VkLCBhZGRlZCwgYXJnc01hdGNoKSB7XG5cdFx0cmV0dXJuIHthZGRlZDogYWRkZWQsIGFyZ3NNYXRjaDogYXJnc01hdGNoLCBjaGFuZ2VkOiBjaGFuZ2VkLCByZW1vdmVkOiByZW1vdmVkfTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGVtcHR5VGFnQ2hhbmdlcyA9IGZ1bmN0aW9uIChhcmdzTWF0Y2gpIHtcblx0cmV0dXJuIEE0KGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRUYWdDaGFuZ2VzLCBfTGlzdF9OaWwsIF9MaXN0X05pbCwgX0xpc3RfTmlsLCBhcmdzTWF0Y2gpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkaGFzVGFnQ2hhbmdlcyA9IGZ1bmN0aW9uICh0YWdDaGFuZ2VzKSB7XG5cdHJldHVybiBfVXRpbHNfZXEoXG5cdFx0dGFnQ2hhbmdlcyxcblx0XHRBNChlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVGFnQ2hhbmdlcywgX0xpc3RfTmlsLCBfTGlzdF9OaWwsIF9MaXN0X05pbCwgdHJ1ZSkpO1xufTtcbnZhciBlbG0kY29yZSREaWN0JG1lcmdlID0gRjYoXG5cdGZ1bmN0aW9uIChsZWZ0U3RlcCwgYm90aFN0ZXAsIHJpZ2h0U3RlcCwgbGVmdERpY3QsIHJpZ2h0RGljdCwgaW5pdGlhbFJlc3VsdCkge1xuXHRcdHZhciBzdGVwU3RhdGUgPSBGMyhcblx0XHRcdGZ1bmN0aW9uIChyS2V5LCByVmFsdWUsIF9uMCkge1xuXHRcdFx0XHRzdGVwU3RhdGU6XG5cdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0dmFyIGxpc3QgPSBfbjAuYTtcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gX24wLmI7XG5cdFx0XHRcdFx0aWYgKCFsaXN0LmIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRsaXN0LFxuXHRcdFx0XHRcdFx0XHRBMyhyaWdodFN0ZXAsIHJLZXksIHJWYWx1ZSwgcmVzdWx0KSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBfbjIgPSBsaXN0LmE7XG5cdFx0XHRcdFx0XHR2YXIgbEtleSA9IF9uMi5hO1xuXHRcdFx0XHRcdFx0dmFyIGxWYWx1ZSA9IF9uMi5iO1xuXHRcdFx0XHRcdFx0dmFyIHJlc3QgPSBsaXN0LmI7XG5cdFx0XHRcdFx0XHRpZiAoX1V0aWxzX2NtcChsS2V5LCByS2V5KSA8IDApIHtcblx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJHJLZXkgPSByS2V5LFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHJWYWx1ZSA9IHJWYWx1ZSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRfbjAgPSBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdHJlc3QsXG5cdFx0XHRcdFx0XHRcdFx0QTMobGVmdFN0ZXAsIGxLZXksIGxWYWx1ZSwgcmVzdWx0KSk7XG5cdFx0XHRcdFx0XHRcdHJLZXkgPSAkdGVtcCRyS2V5O1xuXHRcdFx0XHRcdFx0XHRyVmFsdWUgPSAkdGVtcCRyVmFsdWU7XG5cdFx0XHRcdFx0XHRcdF9uMCA9ICR0ZW1wJF9uMDtcblx0XHRcdFx0XHRcdFx0Y29udGludWUgc3RlcFN0YXRlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKF9VdGlsc19jbXAobEtleSwgcktleSkgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LFxuXHRcdFx0XHRcdFx0XHRcdFx0QTMocmlnaHRTdGVwLCByS2V5LCByVmFsdWUsIHJlc3VsdCkpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0cmVzdCxcblx0XHRcdFx0XHRcdFx0XHRcdEE0KGJvdGhTdGVwLCBsS2V5LCBsVmFsdWUsIHJWYWx1ZSwgcmVzdWx0KSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHZhciBfbjMgPSBBMyhcblx0XHRcdGVsbSRjb3JlJERpY3QkZm9sZGwsXG5cdFx0XHRzdGVwU3RhdGUsXG5cdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JHRvTGlzdChsZWZ0RGljdCksXG5cdFx0XHRcdGluaXRpYWxSZXN1bHQpLFxuXHRcdFx0cmlnaHREaWN0KTtcblx0XHR2YXIgbGVmdG92ZXJzID0gX24zLmE7XG5cdFx0dmFyIGludGVybWVkaWF0ZVJlc3VsdCA9IF9uMy5iO1xuXHRcdHJldHVybiBBMyhcblx0XHRcdGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKF9uNCwgcmVzdWx0KSB7XG5cdFx0XHRcdFx0dmFyIGsgPSBfbjQuYTtcblx0XHRcdFx0XHR2YXIgdiA9IF9uNC5iO1xuXHRcdFx0XHRcdHJldHVybiBBMyhsZWZ0U3RlcCwgaywgdiwgcmVzdWx0KTtcblx0XHRcdFx0fSksXG5cdFx0XHRpbnRlcm1lZGlhdGVSZXN1bHQsXG5cdFx0XHRsZWZ0b3ZlcnMpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja1VuaW9uID0gRjQoXG5cdGZ1bmN0aW9uIChuYW1lLCBvbGQsIF9uZXcsIGNoYW5nZXMpIHtcblx0XHR2YXIgdGFnQ2hhbmdlcyA9IEE2KFxuXHRcdFx0ZWxtJGNvcmUkRGljdCRtZXJnZSxcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJHJlbW92ZVRhZyxcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrVGFnLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkYWRkVGFnLFxuXHRcdFx0b2xkLnRhZ3MsXG5cdFx0XHRfbmV3LnRhZ3MsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkZW1wdHlUYWdDaGFuZ2VzKFxuXHRcdFx0XHRfVXRpbHNfZXEob2xkLmFyZ3MsIF9uZXcuYXJncykpKTtcblx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGhhc1RhZ0NoYW5nZXModGFnQ2hhbmdlcykgPyBjaGFuZ2VzIDogQTIoXG5cdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVW5pb25DaGFuZ2UsIG5hbWUsIHRhZ0NoYW5nZXMpLFxuXHRcdFx0Y2hhbmdlcyk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlnbm9yZSA9IEYzKFxuXHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgcmVwb3J0KSB7XG5cdFx0cmV0dXJuIHJlcG9ydDtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JE1lc3NhZ2VDaGFuZ2VkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnTWVzc2FnZUNoYW5nZWQnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFNvbWV0aGluZ0NoYW5nZWQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdTb21ldGhpbmdDaGFuZ2VkJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRuZXEgPSBfVXRpbHNfbm90RXF1YWw7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2tUeXBlcyA9IEYyKFxuXHRmdW5jdGlvbiAob2xkLCBfbmV3KSB7XG5cdFx0cmV0dXJuICghX1V0aWxzX2VxKG9sZC5tZXNzYWdlLCBfbmV3Lm1lc3NhZ2UpKSA/IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRNZXNzYWdlQ2hhbmdlZCwgb2xkLm1lc3NhZ2UsIF9uZXcubWVzc2FnZSkgOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkU29tZXRoaW5nQ2hhbmdlZChcblx0XHRcdEE2KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JG1lcmdlLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRpZ25vcmUsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrVW5pb24sXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlnbm9yZSxcblx0XHRcdFx0b2xkLnVuaW9ucyxcblx0XHRcdFx0X25ldy51bmlvbnMsXG5cdFx0XHRcdEE2KGVsbSRjb3JlJERpY3QkbWVyZ2UsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlnbm9yZSwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2tBbGlhcywgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaWdub3JlLCBvbGQuYWxpYXNlcywgX25ldy5hbGlhc2VzLCBfTGlzdF9OaWwpKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRWZXJzaW9uQ2hhbmdlZCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1ZlcnNpb25DaGFuZ2VkJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrID0gRjIoXG5cdGZ1bmN0aW9uIChvbGQsIF9uZXcpIHtcblx0XHRyZXR1cm4gKCFfVXRpbHNfZXEob2xkLnZlcnNpb25zLmVsbSwgX25ldy52ZXJzaW9ucy5lbG0pKSA/IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRWZXJzaW9uQ2hhbmdlZCwgb2xkLnZlcnNpb25zLmVsbSwgX25ldy52ZXJzaW9ucy5lbG0pIDogQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2tUeXBlcywgb2xkLnR5cGVzLCBfbmV3LnR5cGVzKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRSaXNreUltcG9ydCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1Jpc2t5SW1wb3J0JywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdXBsb2FkRGVjb2RlciA9IEEzKFxuXHRlbG0kanNvbiRKc29uJERlY29kZSRtYXAyLFxuXHRGMihcblx0XHRmdW5jdGlvbiAoeCwgeSkge1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoeCwgeSk7XG5cdFx0fSksXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAnbWV0YWRhdGEnLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVyKSxcblx0QTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICdoaXN0b3J5JywgZWxtJGpzb24kSnNvbiREZWNvZGUkdmFsdWUpKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkRmluZSA9IHskOiAnRmluZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlID0geyQ6ICdJbXBvc3NpYmxlJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFJpc2t5ID0geyQ6ICdSaXNreSd9O1xudmFyIGVsbSRjb3JlJExpc3QkaXNFbXB0eSA9IGZ1bmN0aW9uICh4cykge1xuXHRpZiAoIXhzLmIpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JHNvbWUgPSBmdW5jdGlvbiAobGlzdCkge1xuXHRyZXR1cm4gIWVsbSRjb3JlJExpc3QkaXNFbXB0eShsaXN0KTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGV2YWx1YXRlQ2hhbmdlID0gZnVuY3Rpb24gKGNoYW5nZSkge1xuXHRpZiAoY2hhbmdlLiQgPT09ICdBbGlhc0NoYW5nZScpIHtcblx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEltcG9zc2libGU7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHJlbW92ZWQgPSBjaGFuZ2UuYi5yZW1vdmVkO1xuXHRcdHZhciBjaGFuZ2VkID0gY2hhbmdlLmIuY2hhbmdlZDtcblx0XHR2YXIgYWRkZWQgPSBjaGFuZ2UuYi5hZGRlZDtcblx0XHR2YXIgYXJnc01hdGNoID0gY2hhbmdlLmIuYXJnc01hdGNoO1xuXHRcdHJldHVybiAoKCFhcmdzTWF0Y2gpIHx8IChlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkc29tZShjaGFuZ2VkKSB8fCBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkc29tZShyZW1vdmVkKSkpID8gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEltcG9zc2libGUgOiAoZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JHNvbWUoYWRkZWQpID8gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFJpc2t5IDogZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEZpbmUpO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCR3b3JzdENhc2UgPSBGMihcblx0ZnVuY3Rpb24gKHN0YXR1cywgc3RhdHVzTGlzdCkge1xuXHRcdHdvcnN0Q2FzZTpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKCFzdGF0dXNMaXN0LmIpIHtcblx0XHRcdFx0cmV0dXJuIHN0YXR1cztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzTGlzdC5hLiQpIHtcblx0XHRcdFx0XHRjYXNlICdJbXBvc3NpYmxlJzpcblx0XHRcdFx0XHRcdHZhciBfbjEgPSBzdGF0dXNMaXN0LmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEltcG9zc2libGU7XG5cdFx0XHRcdFx0Y2FzZSAnUmlza3knOlxuXHRcdFx0XHRcdFx0dmFyIF9uMiA9IHN0YXR1c0xpc3QuYTtcblx0XHRcdFx0XHRcdHZhciByZXN0ID0gc3RhdHVzTGlzdC5iO1xuXHRcdFx0XHRcdFx0dmFyICR0ZW1wJHN0YXR1cyA9IGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRSaXNreSxcblx0XHRcdFx0XHRcdFx0JHRlbXAkc3RhdHVzTGlzdCA9IHJlc3Q7XG5cdFx0XHRcdFx0XHRzdGF0dXMgPSAkdGVtcCRzdGF0dXM7XG5cdFx0XHRcdFx0XHRzdGF0dXNMaXN0ID0gJHRlbXAkc3RhdHVzTGlzdDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlIHdvcnN0Q2FzZTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dmFyIF9uMyA9IHN0YXR1c0xpc3QuYTtcblx0XHRcdFx0XHRcdHZhciByZXN0ID0gc3RhdHVzTGlzdC5iO1xuXHRcdFx0XHRcdFx0dmFyICR0ZW1wJHN0YXR1cyA9IHN0YXR1cyxcblx0XHRcdFx0XHRcdFx0JHRlbXAkc3RhdHVzTGlzdCA9IHJlc3Q7XG5cdFx0XHRcdFx0XHRzdGF0dXMgPSAkdGVtcCRzdGF0dXM7XG5cdFx0XHRcdFx0XHRzdGF0dXNMaXN0ID0gJHRlbXAkc3RhdHVzTGlzdDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlIHdvcnN0Q2FzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGV2YWx1YXRlID0gZnVuY3Rpb24gKHJlcG9ydCkge1xuXHRzd2l0Y2ggKHJlcG9ydC4kKSB7XG5cdFx0Y2FzZSAnQ29ycnVwdEhpc3RvcnknOlxuXHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlO1xuXHRcdGNhc2UgJ1ZlcnNpb25DaGFuZ2VkJzpcblx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkSW1wb3NzaWJsZTtcblx0XHRjYXNlICdNZXNzYWdlQ2hhbmdlZCc6XG5cdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEltcG9zc2libGU7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhciBjaGFuZ2VzID0gcmVwb3J0LmE7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCR3b3JzdENhc2UsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRGaW5lLFxuXHRcdFx0XHRBMihlbG0kY29yZSRMaXN0JG1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGV2YWx1YXRlQ2hhbmdlLCBjaGFuZ2VzKSk7XG5cdH1cbn07XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZGVjb2RlU3RyaW5nID0gX0pzb25fcnVuT25TdHJpbmc7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRhc3Nlc3NJbXBvcnQgPSBGMihcblx0ZnVuY3Rpb24gKG1ldGFkYXRhLCBqc29uU3RyaW5nKSB7XG5cdFx0dmFyIF9uMCA9IEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGRlY29kZVN0cmluZywgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR1cGxvYWREZWNvZGVyLCBqc29uU3RyaW5nKTtcblx0XHRpZiAoX24wLiQgPT09ICdFcnInKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNvcnJ1cHRJbXBvcnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24xID0gX24wLmE7XG5cdFx0XHR2YXIgZm9yZWlnbk1ldGFkYXRhID0gX24xLmE7XG5cdFx0XHR2YXIgcmF3SGlzdG9yeSA9IF9uMS5iO1xuXHRcdFx0dmFyIHJlcG9ydCA9IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrLCBmb3JlaWduTWV0YWRhdGEsIG1ldGFkYXRhKTtcblx0XHRcdHZhciBfbjIgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkZXZhbHVhdGUocmVwb3J0KTtcblx0XHRcdHN3aXRjaCAoX24yLiQpIHtcblx0XHRcdFx0Y2FzZSAnSW1wb3NzaWJsZSc6XG5cdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJhZEltcG9ydChyZXBvcnQpKTtcblx0XHRcdFx0Y2FzZSAnUmlza3knOlxuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKFxuXHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRSaXNreUltcG9ydCwgcmVwb3J0LCByYXdIaXN0b3J5KSk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRPayhyYXdIaXN0b3J5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkY2xvc2UgPSBGMihcblx0ZnVuY3Rpb24gKG1zZywgc3RhdGUpIHtcblx0XHRzd2l0Y2ggKHN0YXRlLiQpIHtcblx0XHRcdGNhc2UgJ05vbmUnOlxuXHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdGNhc2UgJ0JhZE1ldGFkYXRhJzpcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHRjYXNlICdCYWRJbXBvcnQnOlxuXHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciByYXdIaXN0b3J5ID0gc3RhdGUuYjtcblx0XHRcdFx0aWYgKG1zZy4kID09PSAnQ2FuY2VsJykge1xuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSRKdXN0KHJhd0hpc3RvcnkpO1xuXHRcdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBVcGRhdGUgPSBGMyhcblx0ZnVuY3Rpb24gKHVwZGF0ZSwgbXNnLCBtb2RlbCkge1xuXHRcdHdyYXBVcGRhdGU6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0Y2FzZSAnTm9PcCc6XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0Y2FzZSAnVXNlck1zZyc6XG5cdFx0XHRcdFx0dmFyIHVzZXJNc2cgPSBtc2cuYTtcblx0XHRcdFx0XHR2YXIgdXNlck1vZGVsID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRMYXRlc3RNb2RlbChtb2RlbC5zdGF0ZSk7XG5cdFx0XHRcdFx0dmFyIG5ld0hpc3RvcnkgPSBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGFkZCwgdXNlck1zZywgdXNlck1vZGVsLCBtb2RlbC5oaXN0b3J5KTtcblx0XHRcdFx0XHR2YXIgX24xID0gQTIodXBkYXRlLCB1c2VyTXNnLCB1c2VyTW9kZWwpO1xuXHRcdFx0XHRcdHZhciBuZXdVc2VyTW9kZWwgPSBfbjEuYTtcblx0XHRcdFx0XHR2YXIgdXNlckNtZHMgPSBfbjEuYjtcblx0XHRcdFx0XHR2YXIgY29tbWFuZHMgPSBBMihlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbWFwLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVzZXJNc2csIHVzZXJDbWRzKTtcblx0XHRcdFx0XHR2YXIgX24yID0gbW9kZWwuc3RhdGU7XG5cdFx0XHRcdFx0aWYgKF9uMi4kID09PSAnUnVubmluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGV4cGFuZG86IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2UsIG5ld1VzZXJNb2RlbCwgbW9kZWwuZXhwYW5kbyksXG5cdFx0XHRcdFx0XHRcdFx0XHRoaXN0b3J5OiBuZXdIaXN0b3J5LFxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGU6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUnVubmluZyhuZXdVc2VyTW9kZWwpXG5cdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJFBsYXRmb3JtJENtZCRiYXRjaChcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbW1hbmRzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHNjcm9sbChtb2RlbC5wb3BvdXQpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBfbjIuYTtcblx0XHRcdFx0XHRcdHZhciBpbmRleE1vZGVsID0gX24yLmI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRoaXN0b3J5OiBuZXdIaXN0b3J5LFxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGU6IEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUGF1c2VkLCBpbmRleCwgaW5kZXhNb2RlbCwgbmV3VXNlck1vZGVsKVxuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRjb21tYW5kcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdFeHBhbmRvTXNnJzpcblx0XHRcdFx0XHR2YXIgZU1zZyA9IG1zZy5hO1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRleHBhbmRvOiBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZSwgZU1zZywgbW9kZWwuZXhwYW5kbylcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdGNhc2UgJ1Jlc3VtZSc6XG5cdFx0XHRcdFx0dmFyIF9uMyA9IG1vZGVsLnN0YXRlO1xuXHRcdFx0XHRcdGlmIChfbjMuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgdXNlck1vZGVsID0gX24zLmM7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRleHBhbmRvOiBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlLCB1c2VyTW9kZWwsIG1vZGVsLmV4cGFuZG8pLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGU6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUnVubmluZyh1c2VyTW9kZWwpXG5cdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kc2Nyb2xsKG1vZGVsLnBvcG91dCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnSnVtcCc6XG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gbXNnLmE7XG5cdFx0XHRcdFx0dmFyIF9uNCA9IEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0LCB1cGRhdGUsIGluZGV4LCBtb2RlbC5oaXN0b3J5KTtcblx0XHRcdFx0XHR2YXIgaW5kZXhNb2RlbCA9IF9uNC5hO1xuXHRcdFx0XHRcdHZhciBpbmRleE1zZyA9IF9uNC5iO1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRleHBhbmRvOiBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlLCBpbmRleE1vZGVsLCBtb2RlbC5leHBhbmRvKSxcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZTogQTMoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFBhdXNlZCxcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXhNb2RlbCxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0TGF0ZXN0TW9kZWwobW9kZWwuc3RhdGUpKVxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0Y2FzZSAnT3Blbic6XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRUYXNrJHBlcmZvcm0sXG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfbjUpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRfRGVidWdnZXJfb3Blbihtb2RlbC5wb3BvdXQpKSk7XG5cdFx0XHRcdGNhc2UgJ1VwJzpcblx0XHRcdFx0XHR2YXIgaW5kZXggPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHR2YXIgX242ID0gbW9kZWwuc3RhdGU7XG5cdFx0XHRcdFx0XHRpZiAoX242LiQgPT09ICdQYXVzZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBpID0gX242LmE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc2l6ZShtb2RlbC5oaXN0b3J5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gMCkge1xuXHRcdFx0XHRcdFx0dmFyICR0ZW1wJHVwZGF0ZSA9IHVwZGF0ZSxcblx0XHRcdFx0XHRcdFx0JHRlbXAkbXNnID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRKdW1wKGluZGV4IC0gMSksXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJG1vZGVsID0gbW9kZWw7XG5cdFx0XHRcdFx0XHR1cGRhdGUgPSAkdGVtcCR1cGRhdGU7XG5cdFx0XHRcdFx0XHRtc2cgPSAkdGVtcCRtc2c7XG5cdFx0XHRcdFx0XHRtb2RlbCA9ICR0ZW1wJG1vZGVsO1xuXHRcdFx0XHRcdFx0Y29udGludWUgd3JhcFVwZGF0ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ0Rvd24nOlxuXHRcdFx0XHRcdHZhciBfbjcgPSBtb2RlbC5zdGF0ZTtcblx0XHRcdFx0XHRpZiAoX243LiQgPT09ICdSdW5uaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIGluZGV4ID0gX243LmE7XG5cdFx0XHRcdFx0XHR2YXIgdXNlck1vZGVsID0gX243LmM7XG5cdFx0XHRcdFx0XHRpZiAoX1V0aWxzX2VxKFxuXHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRzaXplKG1vZGVsLmhpc3RvcnkpIC0gMSkpIHtcblx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJHVwZGF0ZSA9IHVwZGF0ZSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRtc2cgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJlc3VtZSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRtb2RlbCA9IG1vZGVsO1xuXHRcdFx0XHRcdFx0XHR1cGRhdGUgPSAkdGVtcCR1cGRhdGU7XG5cdFx0XHRcdFx0XHRcdG1zZyA9ICR0ZW1wJG1zZztcblx0XHRcdFx0XHRcdFx0bW9kZWwgPSAkdGVtcCRtb2RlbDtcblx0XHRcdFx0XHRcdFx0Y29udGludWUgd3JhcFVwZGF0ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCR1cGRhdGUgPSB1cGRhdGUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbXNnID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRKdW1wKGluZGV4ICsgMSksXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbW9kZWwgPSBtb2RlbDtcblx0XHRcdFx0XHRcdFx0dXBkYXRlID0gJHRlbXAkdXBkYXRlO1xuXHRcdFx0XHRcdFx0XHRtc2cgPSAkdGVtcCRtc2c7XG5cdFx0XHRcdFx0XHRcdG1vZGVsID0gJHRlbXAkbW9kZWw7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIHdyYXBVcGRhdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdJbXBvcnQnOlxuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd2l0aEdvb2RNZXRhZGF0YSxcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF9uOCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR1cGxvYWQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdGNhc2UgJ0V4cG9ydCc6XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3aXRoR29vZE1ldGFkYXRhLFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAobWV0YWRhdGEpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRkb3dubG9hZCwgbWV0YWRhdGEsIG1vZGVsLmhpc3RvcnkpKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRjYXNlICdVcGxvYWQnOlxuXHRcdFx0XHRcdHZhciBqc29uU3RyaW5nID0gbXNnLmE7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3aXRoR29vZE1ldGFkYXRhLFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAobWV0YWRhdGEpIHtcblx0XHRcdFx0XHRcdFx0dmFyIF9uOSA9IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYXNzZXNzSW1wb3J0LCBtZXRhZGF0YSwganNvblN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdGlmIChfbjkuJCA9PT0gJ0VycicpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbmV3T3ZlcmxheSA9IF9uOS5hO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtvdmVybGF5OiBuZXdPdmVybGF5fSksXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJhd0hpc3RvcnkgPSBfbjkuYTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRsb2FkTmV3SGlzdG9yeSwgcmF3SGlzdG9yeSwgdXBkYXRlLCBtb2RlbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHZhciBvdmVybGF5TXNnID0gbXNnLmE7XG5cdFx0XHRcdFx0dmFyIF9uMTAgPSBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNsb3NlLCBvdmVybGF5TXNnLCBtb2RlbC5vdmVybGF5KTtcblx0XHRcdFx0XHRpZiAoX24xMC4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHRcdHtvdmVybGF5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JG5vbmV9KSxcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgcmF3SGlzdG9yeSA9IF9uMTAuYTtcblx0XHRcdFx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGxvYWROZXdIaXN0b3J5LCByYXdIaXN0b3J5LCB1cGRhdGUsIG1vZGVsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRTZXQkZm9sZHIgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGluaXRpYWxTdGF0ZSwgX24wKSB7XG5cdFx0dmFyIGRpY3QgPSBfbjAuYTtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRlbG0kY29yZSREaWN0JGZvbGRyLFxuXHRcdFx0RjMoXG5cdFx0XHRcdGZ1bmN0aW9uIChrZXksIF9uMSwgc3RhdGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoZnVuYywga2V5LCBzdGF0ZSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0aW5pdGlhbFN0YXRlLFxuXHRcdFx0ZGljdCk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChuIDwgMSkgPyBzdHJpbmcgOiBBMyhcblx0XHRcdGVsbSRjb3JlJFN0cmluZyRzbGljZSxcblx0XHRcdG4sXG5cdFx0XHRlbG0kY29yZSRTdHJpbmckbGVuZ3RoKHN0cmluZyksXG5cdFx0XHRzdHJpbmcpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRTdHJpbmckc3RhcnRzV2l0aCA9IF9TdHJpbmdfc3RhcnRzV2l0aDtcbnZhciBlbG0kdXJsJFVybCRIdHRwID0geyQ6ICdIdHRwJ307XG52YXIgZWxtJHVybCRVcmwkSHR0cHMgPSB7JDogJ0h0dHBzJ307XG52YXIgZWxtJGNvcmUkU3RyaW5nJGluZGV4ZXMgPSBfU3RyaW5nX2luZGV4ZXM7XG52YXIgZWxtJGNvcmUkU3RyaW5nJGlzRW1wdHkgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcgPT09ICcnO1xufTtcbnZhciBlbG0kY29yZSRTdHJpbmckdG9JbnQgPSBfU3RyaW5nX3RvSW50O1xudmFyIGVsbSR1cmwkVXJsJFVybCA9IEY2KFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIGhvc3QsIHBvcnRfLCBwYXRoLCBxdWVyeSwgZnJhZ21lbnQpIHtcblx0XHRyZXR1cm4ge2ZyYWdtZW50OiBmcmFnbWVudCwgaG9zdDogaG9zdCwgcGF0aDogcGF0aCwgcG9ydF86IHBvcnRfLCBwcm90b2NvbDogcHJvdG9jb2wsIHF1ZXJ5OiBxdWVyeX07XG5cdH0pO1xudmFyIGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUGF0aCA9IEY1KFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIHBhdGgsIHBhcmFtcywgZnJhZywgc3RyKSB7XG5cdFx0aWYgKGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5KHN0cikgfHwgQTIoZWxtJGNvcmUkU3RyaW5nJGNvbnRhaW5zLCAnQCcsIHN0cikpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkU3RyaW5nJGluZGV4ZXMsICc6Jywgc3RyKTtcblx0XHRcdGlmICghX24wLmIpIHtcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0QTYoZWxtJHVybCRVcmwkVXJsLCBwcm90b2NvbCwgc3RyLCBlbG0kY29yZSRNYXliZSROb3RoaW5nLCBwYXRoLCBwYXJhbXMsIGZyYWcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghX24wLmIuYikge1xuXHRcdFx0XHRcdHZhciBpID0gX24wLmE7XG5cdFx0XHRcdFx0dmFyIF9uMSA9IGVsbSRjb3JlJFN0cmluZyR0b0ludChcblx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCwgaSArIDEsIHN0cikpO1xuXHRcdFx0XHRcdGlmIChfbjEuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHBvcnRfID0gX24xO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0XHRcdEE2KFxuXHRcdFx0XHRcdFx0XHRcdGVsbSR1cmwkVXJsJFVybCxcblx0XHRcdFx0XHRcdFx0XHRwcm90b2NvbCxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckbGVmdCwgaSwgc3RyKSxcblx0XHRcdFx0XHRcdFx0XHRwb3J0Xyxcblx0XHRcdFx0XHRcdFx0XHRwYXRoLFxuXHRcdFx0XHRcdFx0XHRcdHBhcmFtcyxcblx0XHRcdFx0XHRcdFx0XHRmcmFnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVF1ZXJ5ID0gRjQoXG5cdGZ1bmN0aW9uIChwcm90b2NvbCwgcGFyYW1zLCBmcmFnLCBzdHIpIHtcblx0XHRpZiAoZWxtJGNvcmUkU3RyaW5nJGlzRW1wdHkoc3RyKSkge1xuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBfbjAgPSBBMihlbG0kY29yZSRTdHJpbmckaW5kZXhlcywgJy8nLCBzdHIpO1xuXHRcdFx0aWYgKCFfbjAuYikge1xuXHRcdFx0XHRyZXR1cm4gQTUoZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVQYXRoLCBwcm90b2NvbCwgJy8nLCBwYXJhbXMsIGZyYWcsIHN0cik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaSA9IF9uMC5hO1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0ZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVQYXRoLFxuXHRcdFx0XHRcdHByb3RvY29sLFxuXHRcdFx0XHRcdEEyKGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCwgaSwgc3RyKSxcblx0XHRcdFx0XHRwYXJhbXMsXG5cdFx0XHRcdFx0ZnJhZyxcblx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckbGVmdCwgaSwgc3RyKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kdXJsJFVybCRjaG9tcEJlZm9yZUZyYWdtZW50ID0gRjMoXG5cdGZ1bmN0aW9uIChwcm90b2NvbCwgZnJhZywgc3RyKSB7XG5cdFx0aWYgKGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5KHN0cikpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkU3RyaW5nJGluZGV4ZXMsICc/Jywgc3RyKTtcblx0XHRcdGlmICghX24wLmIpIHtcblx0XHRcdFx0cmV0dXJuIEE0KGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUXVlcnksIHByb3RvY29sLCBlbG0kY29yZSRNYXliZSROb3RoaW5nLCBmcmFnLCBzdHIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGkgPSBfbjAuYTtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUXVlcnksXG5cdFx0XHRcdFx0cHJvdG9jb2wsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCwgaSArIDEsIHN0cikpLFxuXHRcdFx0XHRcdGZyYWcsXG5cdFx0XHRcdFx0QTIoZWxtJGNvcmUkU3RyaW5nJGxlZnQsIGksIHN0cikpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJHVybCRVcmwkY2hvbXBBZnRlclByb3RvY29sID0gRjIoXG5cdGZ1bmN0aW9uIChwcm90b2NvbCwgc3RyKSB7XG5cdFx0aWYgKGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5KHN0cikpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkU3RyaW5nJGluZGV4ZXMsICcjJywgc3RyKTtcblx0XHRcdGlmICghX24wLmIpIHtcblx0XHRcdFx0cmV0dXJuIEEzKGVsbSR1cmwkVXJsJGNob21wQmVmb3JlRnJhZ21lbnQsIHByb3RvY29sLCBlbG0kY29yZSRNYXliZSROb3RoaW5nLCBzdHIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGkgPSBfbjAuYTtcblx0XHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRcdGVsbSR1cmwkVXJsJGNob21wQmVmb3JlRnJhZ21lbnQsXG5cdFx0XHRcdFx0cHJvdG9jb2wsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0XHRcdEEyKGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCwgaSArIDEsIHN0cikpLFxuXHRcdFx0XHRcdEEyKGVsbSRjb3JlJFN0cmluZyRsZWZ0LCBpLCBzdHIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSR1cmwkVXJsJGZyb21TdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBBMihlbG0kY29yZSRTdHJpbmckc3RhcnRzV2l0aCwgJ2h0dHA6Ly8nLCBzdHIpID8gQTIoXG5cdFx0ZWxtJHVybCRVcmwkY2hvbXBBZnRlclByb3RvY29sLFxuXHRcdGVsbSR1cmwkVXJsJEh0dHAsXG5cdFx0QTIoZWxtJGNvcmUkU3RyaW5nJGRyb3BMZWZ0LCA3LCBzdHIpKSA6IChBMihlbG0kY29yZSRTdHJpbmckc3RhcnRzV2l0aCwgJ2h0dHBzOi8vJywgc3RyKSA/IEEyKFxuXHRcdGVsbSR1cmwkVXJsJGNob21wQWZ0ZXJQcm90b2NvbCxcblx0XHRlbG0kdXJsJFVybCRIdHRwcyxcblx0XHRBMihlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIDgsIHN0cikpIDogZWxtJGNvcmUkTWF5YmUkTm90aGluZyk7XG59O1xudmFyIGVsbSRicm93c2VyJEJyb3dzZXIkZWxlbWVudCA9IF9Ccm93c2VyX2VsZW1lbnQ7XG52YXIgYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJG1haW4gPSBlbG0kYnJvd3NlciRCcm93c2VyJGVsZW1lbnQoXG5cdHtpbml0OiBhdXRob3IkcHJvamVjdCRJbmRleFBhZ2UkaW5pdCwgc3Vic2NyaXB0aW9uczogYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJHN1YnNjcmlwdGlvbnMsIHVwZGF0ZTogYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJHVwZGF0ZSwgdmlldzogYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJHZpZXd9KTtcbl9QbGF0Zm9ybV9leHBvcnQoeydJbmRleFBhZ2UnOnsnaW5pdCc6YXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJG1haW4oZWxtJGpzb24kSnNvbiREZWNvZGUkdmFsdWUpKHtcInZlcnNpb25zXCI6e1wiZWxtXCI6XCIwLjE5LjBcIn0sXCJ0eXBlc1wiOntcIm1lc3NhZ2VcIjpcIkluZGV4UGFnZS5Nc2dcIixcImFsaWFzZXNcIjp7XCJUaGVQcm9jZXNzLlByb2Nlc3NEYXRhXCI6e1wiYXJnc1wiOltdLFwidHlwZVwiOlwieyBpZCA6IElkLklkLCB0aXRsZSA6IFN0cmluZy5TdHJpbmcsIGRlc2NyaXB0aW9uIDogU3RyaW5nLlN0cmluZywgY29tcGxldGlvbnMgOiBCYXNpY3MuSW50LCBjcmVhdGVkQXQgOiBUaW1lLlBvc2l4LCBsYXN0QWN0aXZpdHkgOiBUaW1lLlBvc2l4IH1cIn19LFwidW5pb25zXCI6e1wiSW5kZXhQYWdlLk1zZ1wiOntcImFyZ3NcIjpbXSxcInRhZ3NcIjp7XCJVc2VyQ2xpY2tlZENyZWF0ZVByb2Nlc3NcIjpbXSxcIlVzZXJVcGRhdGVkVGl0bGVGaWVsZFwiOltcIlN0cmluZy5TdHJpbmdcIl0sXCJVc2VyVXBkYXRlZERlc2NyaXB0aW9uRmllbGRcIjpbXCJTdHJpbmcuU3RyaW5nXCJdLFwiVXNlclNhdmVkTmV3UHJvY2Vzc1wiOltcIlRoZVByb2Nlc3MuUHJvY2Vzc0RhdGFcIl0sXCJTZXJ2ZXJSZXR1cm5lZFNhdmVSZXNwb25zZVwiOltdfX0sXCJJZC5JZFwiOntcImFyZ3NcIjpbXSxcInRhZ3NcIjp7XCJJZFwiOltcIlN0cmluZy5TdHJpbmdcIl19fSxcIkJhc2ljcy5JbnRcIjp7XCJhcmdzXCI6W10sXCJ0YWdzXCI6e1wiSW50XCI6W119fSxcIlN0cmluZy5TdHJpbmdcIjp7XCJhcmdzXCI6W10sXCJ0YWdzXCI6e1wiU3RyaW5nXCI6W119fSxcIlRpbWUuUG9zaXhcIjp7XCJhcmdzXCI6W10sXCJ0YWdzXCI6e1wiUG9zaXhcIjpbXCJCYXNpY3MuSW50XCJdfX19fX0pfX0pO30odGhpcykpOyIsIi8qIGdsb2JhbCBjb250ZXh0ICovXG5pbXBvcnQgJy4uL2Nzcy9jb21tb24uY3NzJztcbmltcG9ydCAnLi4vY3NzL3Byb2Nlc3MtaW5kZXguY3NzJztcbmltcG9ydCB7IEVsbSB9IGZyb20gJy4uL2VsbS9JbmRleFBhZ2UuZWxtJztcblxuRWxtLkluZGV4UGFnZS5pbml0KHtcbiAgbm9kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsbScpLFxuICBmbGFnczogY29udGV4dCxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==