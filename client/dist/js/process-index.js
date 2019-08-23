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
var author$project$TheProcess$renderDetails = function (_n0) {
	var completions = _n0.a.completions;
	var preview = _n0.b;
	if (preview.$ === 'Active') {
		var _n2 = preview.a;
		var completed = _n2.a;
		var total = _n2.b;
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
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
													elm$html$Html$text('Last Activity')
												]))
										])),
									A2(
									elm$html$Html$p,
									_List_Nil,
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
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text(
											elm$core$String$fromInt(completed) + ('/' + elm$core$String$fromInt(total)))
										]))
								]))
						]))
				]));
	} else {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
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
													elm$html$Html$text('Last Completed')
												]))
										])),
									A2(
									elm$html$Html$p,
									_List_Nil,
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
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text(
											elm$core$String$fromInt(completions))
										]))
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
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var author$project$TheProcess$renderStatus = function (_n0) {
	var preview = _n0.b;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class(
				A2(author$project$TheProcess$previewToClass, preview, 'bg'))
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
					elm$html$Html$Attributes$class('sb-process')
				]),
			_List_fromArray(
				[
					author$project$TheProcess$renderStatus(process),
					A2(
					elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(
							author$project$TheProcess$getTitle(process))
						])),
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(
							author$project$TheProcess$getDescription(process))
						])),
					author$project$TheProcess$renderDetails(process),
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							A2(author$project$TheProcess$getLink, url, process)
						]),
					_List_fromArray(
						[
							elm$html$Html$text('Work On This Process')
						]))
				]));
	});
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
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$h1,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('SpringBoard')
						])),
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$ul,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('flex flex-wrap justify-between')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jc3MvY29tbW9uLmNzcz8yZThiIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY3NzL3Byb2Nlc3MtaW5kZXguY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZWxtL0luZGV4UGFnZS5lbG0iLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9wcm9jZXNzLWluZGV4LmpzIl0sIm5hbWVzIjpbIkVsbSIsIkluZGV4UGFnZSIsImluaXQiLCJub2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZsYWdzIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MscUJBQXFCLGlCQUFpQixHQUFHLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQixxQkFBcUIsR0FBRztBQUNyRSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHdCQUF3QixHQUFHLEdBQUc7QUFDdEQsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELHdCQUF3QixxQkFBcUIsMkJBQTJCLEdBQUcsR0FBRyxHQUFHO0FBQ2pGLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCO0FBQzdDLGlDQUFpQyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzdDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCO0FBQzdDLHdCQUF3QixpQ0FBaUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3hFLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCO0FBQzdDLHdCQUF3QjtBQUN4Qix1Q0FBdUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDekQsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELHdCQUF3QixxQkFBcUI7QUFDN0Msd0JBQXdCLHFCQUFxQjtBQUM3QywwQ0FBMEMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUMvRCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSx3QkFBd0I7QUFDeEIsaUJBQWlCOztBQUVqQixvQ0FBb0MsU0FBUyxzQkFBc0I7QUFDbkUsNkJBQTZCLFNBQVMseUJBQXlCOzs7QUFHL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qyx3QkFBd0IsRUFBRTs7OztBQUluRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyw2Q0FBNkMscUJBQXFCO0FBQ3pFO0FBQ0E7O0FBRUEsbUNBQW1DLDZCQUE2QixFQUFFO0FBQ2xFLG1DQUFtQyw2QkFBNkIsRUFBRTtBQUNsRSxtQ0FBbUMsNkJBQTZCLEVBQUU7QUFDbEUsbUNBQW1DLDhCQUE4QixFQUFFOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQixxQ0FBcUMsU0FBUyxjQUFjO0FBQzVELDhCQUE4QixTQUFTLHVCQUF1Qjs7QUFFOUQsd0NBQXdDLFNBQVMsb0JBQW9CO0FBQ3JFLGlDQUFpQyxTQUFTLDZCQUE2Qjs7QUFFdkUsK0JBQStCLFVBQVU7QUFDekMsd0JBQXdCLHNCQUFzQjs7O0FBRzlDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7O0FBSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsU0FBUztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkdBQTZHLDBEQUEwRDs7QUFFdks7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQSxxQ0FBcUMsY0FBYyxFQUFFO0FBQ3JELHFDQUFxQyxjQUFjLEVBQUU7QUFDckQscUNBQXFDLGNBQWMsRUFBRTtBQUNyRCxzQ0FBc0MsY0FBYyxFQUFFO0FBQ3RELHNDQUFzQyxvQkFBb0IsRUFBRTtBQUM1RDs7QUFFQSw2Q0FBNkMsY0FBYyxFQUFFOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsNkJBQTZCLFVBQVU7QUFDdkMsOEJBQThCLGNBQWM7QUFDNUMsZ0NBQWdDLDBDQUEwQzs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSw0QkFBNEIsY0FBYztBQUMxQyxxQ0FBcUMsZUFBZSxFQUFFO0FBQ3RELHFDQUFxQyxlQUFlLEVBQUU7QUFDdEQscUNBQXFDLGdCQUFnQixFQUFFOzs7O0FBSXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0NBQW9DLFNBQVMsb0JBQW9CO0FBQ2pFLHFDQUFxQyxTQUFTLG9CQUFvQjs7QUFFbEUsa0NBQWtDLFNBQVMsa0JBQWtCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFLGlCQUFpQixFQUFFO0FBQ3BGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsNEJBQTRCLFNBQVMsa0JBQWtCO0FBQ3ZELDhCQUE4QixnQkFBZ0I7O0FBRTlDLG1DQUFtQyxjQUFjO0FBQ2pELHFDQUFxQyxjQUFjOztBQUVuRCw2QkFBNkIsV0FBVztBQUN4Qyw4QkFBOEIsV0FBVzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILHFCQUFxQixrQkFBa0I7QUFDdkMsRUFBRTtBQUNGOzs7OztBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLGVBQWU7QUFDaEM7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDREQUE0RCxjQUFjLEVBQUU7OztBQUc1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFdBQVc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7O0FBR0Q7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsV0FBVztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7QUFHRDs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELG1CQUFtQixxQ0FBcUM7QUFDeEQsRUFBRTtBQUNGO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUEsb0RBQW9ELFlBQVk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEIsa0JBQWtCLFdBQVc7QUFDN0Isa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7O0FBSUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUJBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7OztBQUtEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCx3REFBd0QsRUFBRTtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQkFBMEIsd0JBQXdCLFFBQVE7O0FBRTFELHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCOztBQUVwQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0NBQXdDOzs7QUFHaEU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVDQUF1Qzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0EseUJBQXlCLGdDQUFnQyxvQ0FBb0M7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3Q0FBd0M7QUFDbkUsNkVBQTZFLGdCQUFnQjtBQUM3RixxQkFBcUIsOENBQThDO0FBQ25FLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0YsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNGQUFzRjtBQUM1RixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLDRDQUE0QztBQUM1QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0YsMkNBQTJDO0FBQzNDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxzQ0FBc0M7QUFDdEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNk5BQTZOO0FBQ2hPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFDekMsMkNBQTJDO0FBQzNDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsb0JBQW9CLGdCQUFnQixHQUFHLCtCQUErQixzQ0FBc0MsR0FBRyxzRUFBc0Usc0NBQXNDLEdBQUcsaUNBQWlDLDRCQUE0QixxQkFBcUIsd0JBQXdCLHNCQUFzQiw0QkFBNEIsd0JBQXdCLHFCQUFxQiwwQkFBMEIsR0FBRywrQkFBK0IsZ0JBQWdCLGVBQWUscUJBQXFCLHdCQUF3Qix1QkFBdUIsc0JBQXNCLG1CQUFtQixpQkFBaUIsR0FBRztBQUNuckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUVBQXVFLGdCQUFnQixpQkFBaUIsc0JBQXNCLG9CQUFvQixHQUFHLGdDQUFnQyxzQ0FBc0MsR0FBRztBQUM5TjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNENBQTRDO0FBQzVDLDBDQUEwQztBQUMxQyxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUE4RDtBQUNwRSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBb0Q7QUFDMUQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsOENBQThDO0FBQzlDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQ0FBMkM7QUFDcEQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSx3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUtBQXlLO0FBQzNLLGtCQUFrQixhQUFhLGtFQUFrRSxZQUFZLGVBQWUsVUFBVSxxQ0FBcUMsMEJBQTBCLG1CQUFtQiw4SUFBOEksR0FBRyxXQUFXLGlCQUFpQixrQkFBa0IsME1BQTBNLFVBQVUsa0JBQWtCLHdCQUF3QixlQUFlLGtCQUFrQixVQUFVLGtCQUFrQixrQkFBa0IsYUFBYSxlQUFlLGtCQUFrQiwyQkFBMkIsR0FBRyxHQUFHLFE7Ozs7Ozs7Ozs7OztBQzF5VG56QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLHNEQUFHLENBQUNDLFNBQUosQ0FBY0MsSUFBZCxDQUFtQjtBQUNqQkMsTUFBSSxFQUFFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FEVztBQUVqQkMsT0FBSyxFQUFFQztBQUZVLENBQW5CLEUiLCJmaWxlIjoianMvcHJvY2Vzcy1pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvanMvcHJvY2Vzcy1pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIihmdW5jdGlvbihzY29wZSl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEYoYXJpdHksIGZ1biwgd3JhcHBlcikge1xuICB3cmFwcGVyLmEgPSBhcml0eTtcbiAgd3JhcHBlci5mID0gZnVuO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gRjIoZnVuKSB7XG4gIHJldHVybiBGKDIsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuKGEsYik7IH07IH0pXG59XG5mdW5jdGlvbiBGMyhmdW4pIHtcbiAgcmV0dXJuIEYoMywgZnVuLCBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHsgcmV0dXJuIGZ1bihhLCBiLCBjKTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNChmdW4pIHtcbiAgcmV0dXJuIEYoNCwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bihhLCBiLCBjLCBkKTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNShmdW4pIHtcbiAgcmV0dXJuIEYoNSwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlKTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNihmdW4pIHtcbiAgcmV0dXJuIEYoNiwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYpOyB9OyB9OyB9OyB9OyB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIEY3KGZ1bikge1xuICByZXR1cm4gRig3LCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW5jdGlvbihnKSB7IHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSwgZiwgZyk7IH07IH07IH07IH07IH07IH07XG4gIH0pO1xufVxuZnVuY3Rpb24gRjgoZnVuKSB7XG4gIHJldHVybiBGKDgsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGcpIHsgcmV0dXJuIGZ1bmN0aW9uKGgpIHtcbiAgICByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpOyB9OyB9OyB9OyB9OyB9OyB9OyB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIEY5KGZ1bikge1xuICByZXR1cm4gRig5LCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW5jdGlvbihnKSB7IHJldHVybiBmdW5jdGlvbihoKSB7IHJldHVybiBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpKTsgfTsgfTsgfTsgfTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIEEyKGZ1biwgYSwgYikge1xuICByZXR1cm4gZnVuLmEgPT09IDIgPyBmdW4uZihhLCBiKSA6IGZ1bihhKShiKTtcbn1cbmZ1bmN0aW9uIEEzKGZ1biwgYSwgYiwgYykge1xuICByZXR1cm4gZnVuLmEgPT09IDMgPyBmdW4uZihhLCBiLCBjKSA6IGZ1bihhKShiKShjKTtcbn1cbmZ1bmN0aW9uIEE0KGZ1biwgYSwgYiwgYywgZCkge1xuICByZXR1cm4gZnVuLmEgPT09IDQgPyBmdW4uZihhLCBiLCBjLCBkKSA6IGZ1bihhKShiKShjKShkKTtcbn1cbmZ1bmN0aW9uIEE1KGZ1biwgYSwgYiwgYywgZCwgZSkge1xuICByZXR1cm4gZnVuLmEgPT09IDUgPyBmdW4uZihhLCBiLCBjLCBkLCBlKSA6IGZ1bihhKShiKShjKShkKShlKTtcbn1cbmZ1bmN0aW9uIEE2KGZ1biwgYSwgYiwgYywgZCwgZSwgZikge1xuICByZXR1cm4gZnVuLmEgPT09IDYgPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmKSA6IGZ1bihhKShiKShjKShkKShlKShmKTtcbn1cbmZ1bmN0aW9uIEE3KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZykge1xuICByZXR1cm4gZnVuLmEgPT09IDcgPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmLCBnKSA6IGZ1bihhKShiKShjKShkKShlKShmKShnKTtcbn1cbmZ1bmN0aW9uIEE4KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZywgaCkge1xuICByZXR1cm4gZnVuLmEgPT09IDggPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA6IGZ1bihhKShiKShjKShkKShlKShmKShnKShoKTtcbn1cbmZ1bmN0aW9uIEE5KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSkge1xuICByZXR1cm4gZnVuLmEgPT09IDkgPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpKSA6IGZ1bihhKShiKShjKShkKShlKShmKShnKShoKShpKTtcbn1cblxuY29uc29sZS53YXJuKCdDb21waWxlZCBpbiBERUJVRyBtb2RlLiBGb2xsb3cgdGhlIGFkdmljZSBhdCBodHRwczovL2VsbS1sYW5nLm9yZy8wLjE5LjAvb3B0aW1pemUgZm9yIGJldHRlciBwZXJmb3JtYW5jZSBhbmQgc21hbGxlciBhc3NldHMuJyk7XG5cblxudmFyIF9MaXN0X05pbF9VTlVTRUQgPSB7ICQ6IDAgfTtcbnZhciBfTGlzdF9OaWwgPSB7ICQ6ICdbXScgfTtcblxuZnVuY3Rpb24gX0xpc3RfQ29uc19VTlVTRUQoaGQsIHRsKSB7IHJldHVybiB7ICQ6IDEsIGE6IGhkLCBiOiB0bCB9OyB9XG5mdW5jdGlvbiBfTGlzdF9Db25zKGhkLCB0bCkgeyByZXR1cm4geyAkOiAnOjonLCBhOiBoZCwgYjogdGwgfTsgfVxuXG5cbnZhciBfTGlzdF9jb25zID0gRjIoX0xpc3RfQ29ucyk7XG5cbmZ1bmN0aW9uIF9MaXN0X2Zyb21BcnJheShhcnIpXG57XG5cdHZhciBvdXQgPSBfTGlzdF9OaWw7XG5cdGZvciAodmFyIGkgPSBhcnIubGVuZ3RoOyBpLS07IClcblx0e1xuXHRcdG91dCA9IF9MaXN0X0NvbnMoYXJyW2ldLCBvdXQpO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIF9MaXN0X3RvQXJyYXkoeHMpXG57XG5cdGZvciAodmFyIG91dCA9IFtdOyB4cy5iOyB4cyA9IHhzLmIpIC8vIFdISUxFX0NPTlNcblx0e1xuXHRcdG91dC5wdXNoKHhzLmEpO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbnZhciBfTGlzdF9tYXAyID0gRjMoZnVuY3Rpb24oZiwgeHMsIHlzKVxue1xuXHRmb3IgKHZhciBhcnIgPSBbXTsgeHMuYiAmJiB5cy5iOyB4cyA9IHhzLmIsIHlzID0geXMuYikgLy8gV0hJTEVfQ09OU0VTXG5cdHtcblx0XHRhcnIucHVzaChBMihmLCB4cy5hLCB5cy5hKSk7XG5cdH1cblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShhcnIpO1xufSk7XG5cbnZhciBfTGlzdF9tYXAzID0gRjQoZnVuY3Rpb24oZiwgeHMsIHlzLCB6cylcbntcblx0Zm9yICh2YXIgYXJyID0gW107IHhzLmIgJiYgeXMuYiAmJiB6cy5iOyB4cyA9IHhzLmIsIHlzID0geXMuYiwgenMgPSB6cy5iKSAvLyBXSElMRV9DT05TRVNcblx0e1xuXHRcdGFyci5wdXNoKEEzKGYsIHhzLmEsIHlzLmEsIHpzLmEpKTtcblx0fVxuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KGFycik7XG59KTtcblxudmFyIF9MaXN0X21hcDQgPSBGNShmdW5jdGlvbihmLCB3cywgeHMsIHlzLCB6cylcbntcblx0Zm9yICh2YXIgYXJyID0gW107IHdzLmIgJiYgeHMuYiAmJiB5cy5iICYmIHpzLmI7IHdzID0gd3MuYiwgeHMgPSB4cy5iLCB5cyA9IHlzLmIsIHpzID0genMuYikgLy8gV0hJTEVfQ09OU0VTXG5cdHtcblx0XHRhcnIucHVzaChBNChmLCB3cy5hLCB4cy5hLCB5cy5hLCB6cy5hKSk7XG5cdH1cblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShhcnIpO1xufSk7XG5cbnZhciBfTGlzdF9tYXA1ID0gRjYoZnVuY3Rpb24oZiwgdnMsIHdzLCB4cywgeXMsIHpzKVxue1xuXHRmb3IgKHZhciBhcnIgPSBbXTsgdnMuYiAmJiB3cy5iICYmIHhzLmIgJiYgeXMuYiAmJiB6cy5iOyB2cyA9IHZzLmIsIHdzID0gd3MuYiwgeHMgPSB4cy5iLCB5cyA9IHlzLmIsIHpzID0genMuYikgLy8gV0hJTEVfQ09OU0VTXG5cdHtcblx0XHRhcnIucHVzaChBNShmLCB2cy5hLCB3cy5hLCB4cy5hLCB5cy5hLCB6cy5hKSk7XG5cdH1cblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShhcnIpO1xufSk7XG5cbnZhciBfTGlzdF9zb3J0QnkgPSBGMihmdW5jdGlvbihmLCB4cylcbntcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShfTGlzdF90b0FycmF5KHhzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRyZXR1cm4gX1V0aWxzX2NtcChmKGEpLCBmKGIpKTtcblx0fSkpO1xufSk7XG5cbnZhciBfTGlzdF9zb3J0V2l0aCA9IEYyKGZ1bmN0aW9uKGYsIHhzKVxue1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KF9MaXN0X3RvQXJyYXkoeHMpLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdHZhciBvcmQgPSBBMihmLCBhLCBiKTtcblx0XHRyZXR1cm4gb3JkID09PSBlbG0kY29yZSRCYXNpY3MkRVEgPyAwIDogb3JkID09PSBlbG0kY29yZSRCYXNpY3MkTFQgPyAtMSA6IDE7XG5cdH0pKTtcbn0pO1xuXG5cblxuLy8gRVFVQUxJVFlcblxuZnVuY3Rpb24gX1V0aWxzX2VxKHgsIHkpXG57XG5cdGZvciAoXG5cdFx0dmFyIHBhaXIsIHN0YWNrID0gW10sIGlzRXF1YWwgPSBfVXRpbHNfZXFIZWxwKHgsIHksIDAsIHN0YWNrKTtcblx0XHRpc0VxdWFsICYmIChwYWlyID0gc3RhY2sucG9wKCkpO1xuXHRcdGlzRXF1YWwgPSBfVXRpbHNfZXFIZWxwKHBhaXIuYSwgcGFpci5iLCAwLCBzdGFjaylcblx0XHQpXG5cdHt9XG5cblx0cmV0dXJuIGlzRXF1YWw7XG59XG5cbmZ1bmN0aW9uIF9VdGlsc19lcUhlbHAoeCwgeSwgZGVwdGgsIHN0YWNrKVxue1xuXHRpZiAoZGVwdGggPiAxMDApXG5cdHtcblx0XHRzdGFjay5wdXNoKF9VdGlsc19UdXBsZTIoeCx5KSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoeCA9PT0geSlcblx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB4ICE9PSAnb2JqZWN0JyB8fCB4ID09PSBudWxsIHx8IHkgPT09IG51bGwpXG5cdHtcblx0XHR0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyAmJiBfRGVidWdfY3Jhc2goNSk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqL1xuXHRpZiAoeC4kID09PSAnU2V0X2VsbV9idWlsdGluJylcblx0e1xuXHRcdHggPSBlbG0kY29yZSRTZXQkdG9MaXN0KHgpO1xuXHRcdHkgPSBlbG0kY29yZSRTZXQkdG9MaXN0KHkpO1xuXHR9XG5cdGlmICh4LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nIHx8IHguJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKVxuXHR7XG5cdFx0eCA9IGVsbSRjb3JlJERpY3QkdG9MaXN0KHgpO1xuXHRcdHkgPSBlbG0kY29yZSREaWN0JHRvTGlzdCh5KTtcblx0fVxuXHQvLyovXG5cblx0LyoqX1VOVVNFRC9cblx0aWYgKHguJCA8IDApXG5cdHtcblx0XHR4ID0gZWxtJGNvcmUkRGljdCR0b0xpc3QoeCk7XG5cdFx0eSA9IGVsbSRjb3JlJERpY3QkdG9MaXN0KHkpO1xuXHR9XG5cdC8vKi9cblxuXHRmb3IgKHZhciBrZXkgaW4geClcblx0e1xuXHRcdGlmICghX1V0aWxzX2VxSGVscCh4W2tleV0sIHlba2V5XSwgZGVwdGggKyAxLCBzdGFjaykpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxudmFyIF9VdGlsc19lcXVhbCA9IEYyKF9VdGlsc19lcSk7XG52YXIgX1V0aWxzX25vdEVxdWFsID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gIV9VdGlsc19lcShhLGIpOyB9KTtcblxuXG5cbi8vIENPTVBBUklTT05TXG5cbi8vIENvZGUgaW4gR2VuZXJhdGUvSmF2YVNjcmlwdC5ocywgQmFzaWNzLmpzLCBhbmQgTGlzdC5qcyBkZXBlbmRzIG9uXG4vLyB0aGUgcGFydGljdWxhciBpbnRlZ2VyIHZhbHVlcyBhc3NpZ25lZCB0byBMVCwgRVEsIGFuZCBHVC5cblxuZnVuY3Rpb24gX1V0aWxzX2NtcCh4LCB5LCBvcmQpXG57XG5cdGlmICh0eXBlb2YgeCAhPT0gJ29iamVjdCcpXG5cdHtcblx0XHRyZXR1cm4geCA9PT0geSA/IC8qRVEqLyAwIDogeCA8IHkgPyAvKkxUKi8gLTEgOiAvKkdUKi8gMTtcblx0fVxuXG5cdC8qKi9cblx0aWYgKHggaW5zdGFuY2VvZiBTdHJpbmcpXG5cdHtcblx0XHR2YXIgYSA9IHgudmFsdWVPZigpO1xuXHRcdHZhciBiID0geS52YWx1ZU9mKCk7XG5cdFx0cmV0dXJuIGEgPT09IGIgPyAwIDogYSA8IGIgPyAtMSA6IDE7XG5cdH1cblx0Ly8qL1xuXG5cdC8qKl9VTlVTRUQvXG5cdGlmICh0eXBlb2YgeC4kID09PSAndW5kZWZpbmVkJylcblx0Ly8qL1xuXHQvKiovXG5cdGlmICh4LiRbMF0gPT09ICcjJylcblx0Ly8qL1xuXHR7XG5cdFx0cmV0dXJuIChvcmQgPSBfVXRpbHNfY21wKHguYSwgeS5hKSlcblx0XHRcdD8gb3JkXG5cdFx0XHQ6IChvcmQgPSBfVXRpbHNfY21wKHguYiwgeS5iKSlcblx0XHRcdFx0PyBvcmRcblx0XHRcdFx0OiBfVXRpbHNfY21wKHguYywgeS5jKTtcblx0fVxuXG5cdC8vIHRyYXZlcnNlIGNvbnNlcyB1bnRpbCBlbmQgb2YgYSBsaXN0IG9yIGEgbWlzbWF0Y2hcblx0Zm9yICg7IHguYiAmJiB5LmIgJiYgIShvcmQgPSBfVXRpbHNfY21wKHguYSwgeS5hKSk7IHggPSB4LmIsIHkgPSB5LmIpIHt9IC8vIFdISUxFX0NPTlNFU1xuXHRyZXR1cm4gb3JkIHx8ICh4LmIgPyAvKkdUKi8gMSA6IHkuYiA/IC8qTFQqLyAtMSA6IC8qRVEqLyAwKTtcbn1cblxudmFyIF9VdGlsc19sdCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIF9VdGlsc19jbXAoYSwgYikgPCAwOyB9KTtcbnZhciBfVXRpbHNfbGUgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBfVXRpbHNfY21wKGEsIGIpIDwgMTsgfSk7XG52YXIgX1V0aWxzX2d0ID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gX1V0aWxzX2NtcChhLCBiKSA+IDA7IH0pO1xudmFyIF9VdGlsc19nZSA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIF9VdGlsc19jbXAoYSwgYikgPj0gMDsgfSk7XG5cbnZhciBfVXRpbHNfY29tcGFyZSA9IEYyKGZ1bmN0aW9uKHgsIHkpXG57XG5cdHZhciBuID0gX1V0aWxzX2NtcCh4LCB5KTtcblx0cmV0dXJuIG4gPCAwID8gZWxtJGNvcmUkQmFzaWNzJExUIDogbiA/IGVsbSRjb3JlJEJhc2ljcyRHVCA6IGVsbSRjb3JlJEJhc2ljcyRFUTtcbn0pO1xuXG5cbi8vIENPTU1PTiBWQUxVRVNcblxudmFyIF9VdGlsc19UdXBsZTBfVU5VU0VEID0gMDtcbnZhciBfVXRpbHNfVHVwbGUwID0geyAkOiAnIzAnIH07XG5cbmZ1bmN0aW9uIF9VdGlsc19UdXBsZTJfVU5VU0VEKGEsIGIpIHsgcmV0dXJuIHsgYTogYSwgYjogYiB9OyB9XG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUyKGEsIGIpIHsgcmV0dXJuIHsgJDogJyMyJywgYTogYSwgYjogYiB9OyB9XG5cbmZ1bmN0aW9uIF9VdGlsc19UdXBsZTNfVU5VU0VEKGEsIGIsIGMpIHsgcmV0dXJuIHsgYTogYSwgYjogYiwgYzogYyB9OyB9XG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUzKGEsIGIsIGMpIHsgcmV0dXJuIHsgJDogJyMzJywgYTogYSwgYjogYiwgYzogYyB9OyB9XG5cbmZ1bmN0aW9uIF9VdGlsc19jaHJfVU5VU0VEKGMpIHsgcmV0dXJuIGM7IH1cbmZ1bmN0aW9uIF9VdGlsc19jaHIoYykgeyByZXR1cm4gbmV3IFN0cmluZyhjKTsgfVxuXG5cbi8vIFJFQ09SRFNcblxuZnVuY3Rpb24gX1V0aWxzX3VwZGF0ZShvbGRSZWNvcmQsIHVwZGF0ZWRGaWVsZHMpXG57XG5cdHZhciBuZXdSZWNvcmQgPSB7fTtcblxuXHRmb3IgKHZhciBrZXkgaW4gb2xkUmVjb3JkKVxuXHR7XG5cdFx0bmV3UmVjb3JkW2tleV0gPSBvbGRSZWNvcmRba2V5XTtcblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiB1cGRhdGVkRmllbGRzKVxuXHR7XG5cdFx0bmV3UmVjb3JkW2tleV0gPSB1cGRhdGVkRmllbGRzW2tleV07XG5cdH1cblxuXHRyZXR1cm4gbmV3UmVjb3JkO1xufVxuXG5cbi8vIEFQUEVORFxuXG52YXIgX1V0aWxzX2FwcGVuZCA9IEYyKF9VdGlsc19hcCk7XG5cbmZ1bmN0aW9uIF9VdGlsc19hcCh4cywgeXMpXG57XG5cdC8vIGFwcGVuZCBTdHJpbmdzXG5cdGlmICh0eXBlb2YgeHMgPT09ICdzdHJpbmcnKVxuXHR7XG5cdFx0cmV0dXJuIHhzICsgeXM7XG5cdH1cblxuXHQvLyBhcHBlbmQgTGlzdHNcblx0aWYgKCF4cy5iKVxuXHR7XG5cdFx0cmV0dXJuIHlzO1xuXHR9XG5cdHZhciByb290ID0gX0xpc3RfQ29ucyh4cy5hLCB5cyk7XG5cdHhzID0geHMuYlxuXHRmb3IgKHZhciBjdXJyID0gcm9vdDsgeHMuYjsgeHMgPSB4cy5iKSAvLyBXSElMRV9DT05TXG5cdHtcblx0XHRjdXJyID0gY3Vyci5iID0gX0xpc3RfQ29ucyh4cy5hLCB5cyk7XG5cdH1cblx0cmV0dXJuIHJvb3Q7XG59XG5cblxuXG52YXIgX0pzQXJyYXlfZW1wdHkgPSBbXTtcblxuZnVuY3Rpb24gX0pzQXJyYXlfc2luZ2xldG9uKHZhbHVlKVxue1xuICAgIHJldHVybiBbdmFsdWVdO1xufVxuXG5mdW5jdGlvbiBfSnNBcnJheV9sZW5ndGgoYXJyYXkpXG57XG4gICAgcmV0dXJuIGFycmF5Lmxlbmd0aDtcbn1cblxudmFyIF9Kc0FycmF5X2luaXRpYWxpemUgPSBGMyhmdW5jdGlvbihzaXplLCBvZmZzZXQsIGZ1bmMpXG57XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShzaXplKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gZnVuYyhvZmZzZXQgKyBpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfSnNBcnJheV9pbml0aWFsaXplRnJvbUxpc3QgPSBGMihmdW5jdGlvbiAobWF4LCBscylcbntcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KG1heCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heCAmJiBscy5iOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBscy5hO1xuICAgICAgICBscyA9IGxzLmI7XG4gICAgfVxuXG4gICAgcmVzdWx0Lmxlbmd0aCA9IGk7XG4gICAgcmV0dXJuIF9VdGlsc19UdXBsZTIocmVzdWx0LCBscyk7XG59KTtcblxudmFyIF9Kc0FycmF5X3Vuc2FmZUdldCA9IEYyKGZ1bmN0aW9uKGluZGV4LCBhcnJheSlcbntcbiAgICByZXR1cm4gYXJyYXlbaW5kZXhdO1xufSk7XG5cbnZhciBfSnNBcnJheV91bnNhZmVTZXQgPSBGMyhmdW5jdGlvbihpbmRleCwgdmFsdWUsIGFycmF5KVxue1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGFycmF5W2ldO1xuICAgIH1cblxuICAgIHJlc3VsdFtpbmRleF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfSnNBcnJheV9wdXNoID0gRjIoZnVuY3Rpb24odmFsdWUsIGFycmF5KVxue1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGggKyAxKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBhcnJheVtpXTtcbiAgICB9XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IHZhbHVlO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxudmFyIF9Kc0FycmF5X2ZvbGRsID0gRjMoZnVuY3Rpb24oZnVuYywgYWNjLCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGFjYyA9IEEyKGZ1bmMsIGFycmF5W2ldLCBhY2MpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG59KTtcblxudmFyIF9Kc0FycmF5X2ZvbGRyID0gRjMoZnVuY3Rpb24oZnVuYywgYWNjLCBhcnJheSlcbntcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAge1xuICAgICAgICBhY2MgPSBBMihmdW5jLCBhcnJheVtpXSwgYWNjKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xufSk7XG5cbnZhciBfSnNBcnJheV9tYXAgPSBGMihmdW5jdGlvbihmdW5jLCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBmdW5jKGFycmF5W2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfSnNBcnJheV9pbmRleGVkTWFwID0gRjMoZnVuY3Rpb24oZnVuYywgb2Zmc2V0LCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBBMihmdW5jLCBvZmZzZXQgKyBpLCBhcnJheVtpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX0pzQXJyYXlfc2xpY2UgPSBGMyhmdW5jdGlvbihmcm9tLCB0bywgYXJyYXkpXG57XG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKGZyb20sIHRvKTtcbn0pO1xuXG52YXIgX0pzQXJyYXlfYXBwZW5kTiA9IEYzKGZ1bmN0aW9uKG4sIGRlc3QsIHNvdXJjZSlcbntcbiAgICB2YXIgZGVzdExlbiA9IGRlc3QubGVuZ3RoO1xuICAgIHZhciBpdGVtc1RvQ29weSA9IG4gLSBkZXN0TGVuO1xuXG4gICAgaWYgKGl0ZW1zVG9Db3B5ID4gc291cmNlLmxlbmd0aClcbiAgICB7XG4gICAgICAgIGl0ZW1zVG9Db3B5ID0gc291cmNlLmxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgc2l6ZSA9IGRlc3RMZW4gKyBpdGVtc1RvQ29weTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHNpemUpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXN0TGVuOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBkZXN0W2ldO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNUb0NvcHk7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpICsgZGVzdExlbl0gPSBzb3VyY2VbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5cblxuLy8gTE9HXG5cbnZhciBfRGVidWdfbG9nX1VOVVNFRCA9IEYyKGZ1bmN0aW9uKHRhZywgdmFsdWUpXG57XG5cdHJldHVybiB2YWx1ZTtcbn0pO1xuXG52YXIgX0RlYnVnX2xvZyA9IEYyKGZ1bmN0aW9uKHRhZywgdmFsdWUpXG57XG5cdGNvbnNvbGUubG9nKHRhZyArICc6ICcgKyBfRGVidWdfdG9TdHJpbmcodmFsdWUpKTtcblx0cmV0dXJuIHZhbHVlO1xufSk7XG5cblxuLy8gVE9ET1NcblxuZnVuY3Rpb24gX0RlYnVnX3RvZG8obW9kdWxlTmFtZSwgcmVnaW9uKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdF9EZWJ1Z19jcmFzaCg4LCBtb2R1bGVOYW1lLCByZWdpb24sIG1lc3NhZ2UpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfRGVidWdfdG9kb0Nhc2UobW9kdWxlTmFtZSwgcmVnaW9uLCB2YWx1ZSlcbntcblx0cmV0dXJuIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRfRGVidWdfY3Jhc2goOSwgbW9kdWxlTmFtZSwgcmVnaW9uLCB2YWx1ZSwgbWVzc2FnZSk7XG5cdH07XG59XG5cblxuLy8gVE8gU1RSSU5HXG5cbmZ1bmN0aW9uIF9EZWJ1Z190b1N0cmluZ19VTlVTRUQodmFsdWUpXG57XG5cdHJldHVybiAnPGludGVybmFscz4nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfdG9TdHJpbmcodmFsdWUpXG57XG5cdHJldHVybiBfRGVidWdfdG9BbnNpU3RyaW5nKGZhbHNlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWUpXG57XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgJzxmdW5jdGlvbj4nKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfY3RvckNvbG9yKGFuc2ksIHZhbHVlID8gJ1RydWUnIDogJ0ZhbHNlJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfbnVtYmVyQ29sb3IoYW5zaSwgdmFsdWUgKyAnJyk7XG5cdH1cblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX2NoYXJDb2xvcihhbnNpLCBcIidcIiArIF9EZWJ1Z19hZGRTbGFzaGVzKHZhbHVlLCB0cnVlKSArIFwiJ1wiKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19zdHJpbmdDb2xvcihhbnNpLCAnXCInICsgX0RlYnVnX2FkZFNsYXNoZXModmFsdWUsIGZhbHNlKSArICdcIicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJyQnIGluIHZhbHVlKVxuXHR7XG5cdFx0dmFyIHRhZyA9IHZhbHVlLiQ7XG5cblx0XHRpZiAodHlwZW9mIHRhZyA9PT0gJ251bWJlcicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19pbnRlcm5hbENvbG9yKGFuc2ksICc8aW50ZXJuYWxzPicpO1xuXHRcdH1cblxuXHRcdGlmICh0YWdbMF0gPT09ICcjJylcblx0XHR7XG5cdFx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0XHRmb3IgKHZhciBrIGluIHZhbHVlKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoayA9PT0gJyQnKSBjb250aW51ZTtcblx0XHRcdFx0b3V0cHV0LnB1c2goX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZVtrXSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICcoJyArIG91dHB1dC5qb2luKCcsJykgKyAnKSc7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJ1NldF9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgJ1NldCcpXG5cdFx0XHRcdCsgX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCAnLmZyb21MaXN0JykgKyAnICdcblx0XHRcdFx0KyBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIGVsbSRjb3JlJFNldCR0b0xpc3QodmFsdWUpKTtcblx0XHR9XG5cblx0XHRpZiAodGFnID09PSAnUkJOb2RlX2VsbV9idWlsdGluJyB8fCB0YWcgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCAnRGljdCcpXG5cdFx0XHRcdCsgX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCAnLmZyb21MaXN0JykgKyAnICdcblx0XHRcdFx0KyBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIGVsbSRjb3JlJERpY3QkdG9MaXN0KHZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJ0FycmF5X2VsbV9idWlsdGluJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCAnQXJyYXknKVxuXHRcdFx0XHQrIF9EZWJ1Z19mYWRlQ29sb3IoYW5zaSwgJy5mcm9tTGlzdCcpICsgJyAnXG5cdFx0XHRcdCsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCBlbG0kY29yZSRBcnJheSR0b0xpc3QodmFsdWUpKTtcblx0XHR9XG5cblx0XHRpZiAodGFnID09PSAnOjonIHx8IHRhZyA9PT0gJ1tdJylcblx0XHR7XG5cdFx0XHR2YXIgb3V0cHV0ID0gJ1snO1xuXG5cdFx0XHR2YWx1ZS5iICYmIChvdXRwdXQgKz0gX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZS5hKSwgdmFsdWUgPSB2YWx1ZS5iKVxuXG5cdFx0XHRmb3IgKDsgdmFsdWUuYjsgdmFsdWUgPSB2YWx1ZS5iKSAvLyBXSElMRV9DT05TXG5cdFx0XHR7XG5cdFx0XHRcdG91dHB1dCArPSAnLCcgKyBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIHZhbHVlLmEpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG91dHB1dCArICddJztcblx0XHR9XG5cblx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSlcblx0XHR7XG5cdFx0XHRpZiAoaSA9PT0gJyQnKSBjb250aW51ZTtcblx0XHRcdHZhciBzdHIgPSBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIHZhbHVlW2ldKTtcblx0XHRcdHZhciBjMCA9IHN0clswXTtcblx0XHRcdHZhciBwYXJlbmxlc3MgPSBjMCA9PT0gJ3snIHx8IGMwID09PSAnKCcgfHwgYzAgPT09ICdbJyB8fCBjMCA9PT0gJzwnIHx8IGMwID09PSAnXCInIHx8IHN0ci5pbmRleE9mKCcgJykgPCAwO1xuXHRcdFx0b3V0cHV0ICs9ICcgJyArIChwYXJlbmxlc3MgPyBzdHIgOiAnKCcgKyBzdHIgKyAnKScpO1xuXHRcdH1cblx0XHRyZXR1cm4gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCB0YWcpICsgb3V0cHV0O1xuXHR9XG5cblx0aWYgKHR5cGVvZiBEYXRhVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIERhdGFWaWV3KVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19zdHJpbmdDb2xvcihhbnNpLCAnPCcgKyB2YWx1ZS5ieXRlTGVuZ3RoICsgJyBieXRlcz4nKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgRmlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGUpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgJzwnICsgdmFsdWUubmFtZSArICc+Jyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jylcblx0e1xuXHRcdHZhciBvdXRwdXQgPSBbXTtcblx0XHRmb3IgKHZhciBrZXkgaW4gdmFsdWUpXG5cdFx0e1xuXHRcdFx0dmFyIGZpZWxkID0ga2V5WzBdID09PSAnXycgPyBrZXkuc2xpY2UoMSkgOiBrZXk7XG5cdFx0XHRvdXRwdXQucHVzaChfRGVidWdfZmFkZUNvbG9yKGFuc2ksIGZpZWxkKSArICcgPSAnICsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZVtrZXldKSk7XG5cdFx0fVxuXHRcdGlmIChvdXRwdXQubGVuZ3RoID09PSAwKVxuXHRcdHtcblx0XHRcdHJldHVybiAne30nO1xuXHRcdH1cblx0XHRyZXR1cm4gJ3sgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyB9Jztcblx0fVxuXG5cdHJldHVybiBfRGVidWdfaW50ZXJuYWxDb2xvcihhbnNpLCAnPGludGVybmFscz4nKTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnX2FkZFNsYXNoZXMoc3RyLCBpc0NoYXIpXG57XG5cdHZhciBzID0gc3RyXG5cdFx0LnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcblx0XHQucmVwbGFjZSgvXFxuL2csICdcXFxcbicpXG5cdFx0LnJlcGxhY2UoL1xcdC9nLCAnXFxcXHQnKVxuXHRcdC5yZXBsYWNlKC9cXHIvZywgJ1xcXFxyJylcblx0XHQucmVwbGFjZSgvXFx2L2csICdcXFxcdicpXG5cdFx0LnJlcGxhY2UoL1xcMC9nLCAnXFxcXDAnKTtcblxuXHRpZiAoaXNDaGFyKVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFwnL2csICdcXFxcXFwnJyk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCBzdHJpbmcpXG57XG5cdHJldHVybiBhbnNpID8gJ1xceDFiWzk2bScgKyBzdHJpbmcgKyAnXFx4MWJbMG0nIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfbnVtYmVyQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYls5NW0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3N0cmluZ0NvbG9yKGFuc2ksIHN0cmluZylcbntcblx0cmV0dXJuIGFuc2kgPyAnXFx4MWJbOTNtJyArIHN0cmluZyArICdcXHgxYlswbScgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19jaGFyQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYls5Mm0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCBzdHJpbmcpXG57XG5cdHJldHVybiBhbnNpID8gJ1xceDFiWzM3bScgKyBzdHJpbmcgKyAnXFx4MWJbMG0nIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfaW50ZXJuYWxDb2xvcihhbnNpLCBzdHJpbmcpXG57XG5cdHJldHVybiBhbnNpID8gJ1xceDFiWzk0bScgKyBzdHJpbmcgKyAnXFx4MWJbMG0nIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfdG9IZXhEaWdpdChuKVxue1xuXHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShuIDwgMTAgPyA0OCArIG4gOiA1NSArIG4pO1xufVxuXG5cbi8vIENSQVNIXG5cblxuZnVuY3Rpb24gX0RlYnVnX2NyYXNoX1VOVVNFRChpZGVudGlmaWVyKVxue1xuXHR0aHJvdyBuZXcgRXJyb3IoJ2h0dHBzOi8vZ2l0aHViLmNvbS9lbG0vY29yZS9ibG9iLzEuMC4wL2hpbnRzLycgKyBpZGVudGlmaWVyICsgJy5tZCcpO1xufVxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z19jcmFzaChpZGVudGlmaWVyLCBmYWN0MSwgZmFjdDIsIGZhY3QzLCBmYWN0NClcbntcblx0c3dpdGNoKGlkZW50aWZpZXIpXG5cdHtcblx0XHRjYXNlIDA6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1doYXQgbm9kZSBzaG91bGQgSSB0YWtlIG92ZXI/IEluIEphdmFTY3JpcHQgSSBuZWVkIHNvbWV0aGluZyBsaWtlOlxcblxcbiAgICBFbG0uTWFpbi5pbml0KHtcXG4gICAgICAgIG5vZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxtLW5vZGVcIilcXG4gICAgfSlcXG5cXG5Zb3UgbmVlZCB0byBkbyB0aGlzIHdpdGggYW55IEJyb3dzZXIuc2FuZGJveCBvciBCcm93c2VyLmVsZW1lbnQgcHJvZ3JhbS4nKTtcblxuXHRcdGNhc2UgMTpcblx0XHRcdHRocm93IG5ldyBFcnJvcignQnJvd3Nlci5hcHBsaWNhdGlvbiBwcm9ncmFtcyBjYW5ub3QgaGFuZGxlIFVSTHMgbGlrZSB0aGlzOlxcblxcbiAgICAnICsgZG9jdW1lbnQubG9jYXRpb24uaHJlZiArICdcXG5cXG5XaGF0IGlzIHRoZSByb290PyBUaGUgcm9vdCBvZiB5b3VyIGZpbGUgc3lzdGVtPyBUcnkgbG9va2luZyBhdCB0aGlzIHByb2dyYW0gd2l0aCBgZWxtIHJlYWN0b3JgIG9yIHNvbWUgb3RoZXIgc2VydmVyLicpO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0dmFyIGpzb25FcnJvclN0cmluZyA9IGZhY3QxO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdQcm9ibGVtIHdpdGggdGhlIGZsYWdzIGdpdmVuIHRvIHlvdXIgRWxtIHByb2dyYW0gb24gaW5pdGlhbGl6YXRpb24uXFxuXFxuJyArIGpzb25FcnJvclN0cmluZyk7XG5cblx0XHRjYXNlIDM6XG5cdFx0XHR2YXIgcG9ydE5hbWUgPSBmYWN0MTtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVGhlcmUgY2FuIG9ubHkgYmUgb25lIHBvcnQgbmFtZWQgYCcgKyBwb3J0TmFtZSArICdgLCBidXQgeW91ciBwcm9ncmFtIGhhcyBtdWx0aXBsZS4nKTtcblxuXHRcdGNhc2UgNDpcblx0XHRcdHZhciBwb3J0TmFtZSA9IGZhY3QxO1xuXHRcdFx0dmFyIHByb2JsZW0gPSBmYWN0Mjtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIHNlbmQgYW4gdW5leHBlY3RlZCB0eXBlIG9mIHZhbHVlIHRocm91Z2ggcG9ydCBgJyArIHBvcnROYW1lICsgJ2A6XFxuJyArIHByb2JsZW0pO1xuXG5cdFx0Y2FzZSA1OlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gdXNlIGAoPT0pYCBvbiBmdW5jdGlvbnMuXFxuVGhlcmUgaXMgbm8gd2F5IHRvIGtub3cgaWYgZnVuY3Rpb25zIGFyZSBcInRoZSBzYW1lXCIgaW4gdGhlIEVsbSBzZW5zZS5cXG5SZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3BhY2thZ2UuZWxtLWxhbmcub3JnL3BhY2thZ2VzL2VsbS9jb3JlL2xhdGVzdC9CYXNpY3MjPT0gd2hpY2ggZGVzY3JpYmVzIHdoeSBpdCBpcyB0aGlzIHdheSBhbmQgd2hhdCB0aGUgYmV0dGVyIHZlcnNpb24gd2lsbCBsb29rIGxpa2UuJyk7XG5cblx0XHRjYXNlIDY6XG5cdFx0XHR2YXIgbW9kdWxlTmFtZSA9IGZhY3QxO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3VyIHBhZ2UgaXMgbG9hZGluZyBtdWx0aXBsZSBFbG0gc2NyaXB0cyB3aXRoIGEgbW9kdWxlIG5hbWVkICcgKyBtb2R1bGVOYW1lICsgJy4gTWF5YmUgYSBkdXBsaWNhdGUgc2NyaXB0IGlzIGdldHRpbmcgbG9hZGVkIGFjY2lkZW50YWxseT8gSWYgbm90LCByZW5hbWUgb25lIG9mIHRoZW0gc28gSSBrbm93IHdoaWNoIGlzIHdoaWNoIScpO1xuXG5cdFx0Y2FzZSA4OlxuXHRcdFx0dmFyIG1vZHVsZU5hbWUgPSBmYWN0MTtcblx0XHRcdHZhciByZWdpb24gPSBmYWN0Mjtcblx0XHRcdHZhciBtZXNzYWdlID0gZmFjdDM7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RPRE8gaW4gbW9kdWxlIGAnICsgbW9kdWxlTmFtZSArICdgICcgKyBfRGVidWdfcmVnaW9uVG9TdHJpbmcocmVnaW9uKSArICdcXG5cXG4nICsgbWVzc2FnZSk7XG5cblx0XHRjYXNlIDk6XG5cdFx0XHR2YXIgbW9kdWxlTmFtZSA9IGZhY3QxO1xuXHRcdFx0dmFyIHJlZ2lvbiA9IGZhY3QyO1xuXHRcdFx0dmFyIHZhbHVlID0gZmFjdDM7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IGZhY3Q0O1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHQnVE9ETyBpbiBtb2R1bGUgYCcgKyBtb2R1bGVOYW1lICsgJ2AgZnJvbSB0aGUgYGNhc2VgIGV4cHJlc3Npb24gJ1xuXHRcdFx0XHQrIF9EZWJ1Z19yZWdpb25Ub1N0cmluZyhyZWdpb24pICsgJ1xcblxcbkl0IHJlY2VpdmVkIHRoZSBmb2xsb3dpbmcgdmFsdWU6XFxuXFxuICAgICdcblx0XHRcdFx0KyBfRGVidWdfdG9TdHJpbmcodmFsdWUpLnJlcGxhY2UoJ1xcbicsICdcXG4gICAgJylcblx0XHRcdFx0KyAnXFxuXFxuQnV0IHRoZSBicmFuY2ggdGhhdCBoYW5kbGVzIGl0IHNheXM6XFxuXFxuICAgICcgKyBtZXNzYWdlLnJlcGxhY2UoJ1xcbicsICdcXG4gICAgJylcblx0XHRcdCk7XG5cblx0XHRjYXNlIDEwOlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCdWcgaW4gaHR0cHM6Ly9naXRodWIuY29tL2VsbS92aXJ0dWFsLWRvbS9pc3N1ZXMnKTtcblxuXHRcdGNhc2UgMTE6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBwZXJmb3JtIG1vZCAwLiBEaXZpc2lvbiBieSB6ZXJvIGVycm9yLicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19yZWdpb25Ub1N0cmluZyhyZWdpb24pXG57XG5cdGlmIChyZWdpb24uc3RhcnQubGluZSA9PT0gcmVnaW9uLmVuZC5saW5lKVxuXHR7XG5cdFx0cmV0dXJuICdvbiBsaW5lICcgKyByZWdpb24uc3RhcnQubGluZTtcblx0fVxuXHRyZXR1cm4gJ29uIGxpbmVzICcgKyByZWdpb24uc3RhcnQubGluZSArICcgdGhyb3VnaCAnICsgcmVnaW9uLmVuZC5saW5lO1xufVxuXG5cblxuLy8gTUFUSFxuXG52YXIgX0Jhc2ljc19hZGQgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICsgYjsgfSk7XG52YXIgX0Jhc2ljc19zdWIgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIC0gYjsgfSk7XG52YXIgX0Jhc2ljc19tdWwgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICogYjsgfSk7XG52YXIgX0Jhc2ljc19mZGl2ID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAvIGI7IH0pO1xudmFyIF9CYXNpY3NfaWRpdiA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIChhIC8gYikgfCAwOyB9KTtcbnZhciBfQmFzaWNzX3BvdyA9IEYyKE1hdGgucG93KTtcblxudmFyIF9CYXNpY3NfcmVtYWluZGVyQnkgPSBGMihmdW5jdGlvbihiLCBhKSB7IHJldHVybiBhICUgYjsgfSk7XG5cbi8vIGh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb20vZW4tdXMvcmVzZWFyY2gvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDIvZGl2bW9kbm90ZS1sZXR0ZXIucGRmXG52YXIgX0Jhc2ljc19tb2RCeSA9IEYyKGZ1bmN0aW9uKG1vZHVsdXMsIHgpXG57XG5cdHZhciBhbnN3ZXIgPSB4ICUgbW9kdWx1cztcblx0cmV0dXJuIG1vZHVsdXMgPT09IDBcblx0XHQ/IF9EZWJ1Z19jcmFzaCgxMSlcblx0XHQ6XG5cdCgoYW5zd2VyID4gMCAmJiBtb2R1bHVzIDwgMCkgfHwgKGFuc3dlciA8IDAgJiYgbW9kdWx1cyA+IDApKVxuXHRcdD8gYW5zd2VyICsgbW9kdWx1c1xuXHRcdDogYW5zd2VyO1xufSk7XG5cblxuLy8gVFJJR09OT01FVFJZXG5cbnZhciBfQmFzaWNzX3BpID0gTWF0aC5QSTtcbnZhciBfQmFzaWNzX2UgPSBNYXRoLkU7XG52YXIgX0Jhc2ljc19jb3MgPSBNYXRoLmNvcztcbnZhciBfQmFzaWNzX3NpbiA9IE1hdGguc2luO1xudmFyIF9CYXNpY3NfdGFuID0gTWF0aC50YW47XG52YXIgX0Jhc2ljc19hY29zID0gTWF0aC5hY29zO1xudmFyIF9CYXNpY3NfYXNpbiA9IE1hdGguYXNpbjtcbnZhciBfQmFzaWNzX2F0YW4gPSBNYXRoLmF0YW47XG52YXIgX0Jhc2ljc19hdGFuMiA9IEYyKE1hdGguYXRhbjIpO1xuXG5cbi8vIE1PUkUgTUFUSFxuXG5mdW5jdGlvbiBfQmFzaWNzX3RvRmxvYXQoeCkgeyByZXR1cm4geDsgfVxuZnVuY3Rpb24gX0Jhc2ljc190cnVuY2F0ZShuKSB7IHJldHVybiBuIHwgMDsgfVxuZnVuY3Rpb24gX0Jhc2ljc19pc0luZmluaXRlKG4pIHsgcmV0dXJuIG4gPT09IEluZmluaXR5IHx8IG4gPT09IC1JbmZpbml0eTsgfVxuXG52YXIgX0Jhc2ljc19jZWlsaW5nID0gTWF0aC5jZWlsO1xudmFyIF9CYXNpY3NfZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIF9CYXNpY3Nfcm91bmQgPSBNYXRoLnJvdW5kO1xudmFyIF9CYXNpY3Nfc3FydCA9IE1hdGguc3FydDtcbnZhciBfQmFzaWNzX2xvZyA9IE1hdGgubG9nO1xudmFyIF9CYXNpY3NfaXNOYU4gPSBpc05hTjtcblxuXG4vLyBCT09MRUFOU1xuXG5mdW5jdGlvbiBfQmFzaWNzX25vdChib29sKSB7IHJldHVybiAhYm9vbDsgfVxudmFyIF9CYXNpY3NfYW5kID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAmJiBiOyB9KTtcbnZhciBfQmFzaWNzX29yICA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgfHwgYjsgfSk7XG52YXIgX0Jhc2ljc194b3IgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICE9PSBiOyB9KTtcblxuXG5cbmZ1bmN0aW9uIF9DaGFyX3RvQ29kZShjaGFyKVxue1xuXHR2YXIgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcblx0aWYgKDB4RDgwMCA8PSBjb2RlICYmIGNvZGUgPD0gMHhEQkZGKVxuXHR7XG5cdFx0cmV0dXJuIChjb2RlIC0gMHhEODAwKSAqIDB4NDAwICsgY2hhci5jaGFyQ29kZUF0KDEpIC0gMHhEQzAwICsgMHgxMDAwMFxuXHR9XG5cdHJldHVybiBjb2RlO1xufVxuXG5mdW5jdGlvbiBfQ2hhcl9mcm9tQ29kZShjb2RlKVxue1xuXHRyZXR1cm4gX1V0aWxzX2Nocihcblx0XHQoY29kZSA8IDAgfHwgMHgxMEZGRkYgPCBjb2RlKVxuXHRcdFx0PyAnXFx1RkZGRCdcblx0XHRcdDpcblx0XHQoY29kZSA8PSAweEZGRkYpXG5cdFx0XHQ/IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcblx0XHRcdDpcblx0XHQoY29kZSAtPSAweDEwMDAwLFxuXHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKGNvZGUgLyAweDQwMCkgKyAweEQ4MDAsIGNvZGUgJSAweDQwMCArIDB4REMwMClcblx0XHQpXG5cdCk7XG59XG5cbmZ1bmN0aW9uIF9DaGFyX3RvVXBwZXIoY2hhcilcbntcblx0cmV0dXJuIF9VdGlsc19jaHIoY2hhci50b1VwcGVyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gX0NoYXJfdG9Mb3dlcihjaGFyKVxue1xuXHRyZXR1cm4gX1V0aWxzX2NocihjaGFyLnRvTG93ZXJDYXNlKCkpO1xufVxuXG5mdW5jdGlvbiBfQ2hhcl90b0xvY2FsZVVwcGVyKGNoYXIpXG57XG5cdHJldHVybiBfVXRpbHNfY2hyKGNoYXIudG9Mb2NhbGVVcHBlckNhc2UoKSk7XG59XG5cbmZ1bmN0aW9uIF9DaGFyX3RvTG9jYWxlTG93ZXIoY2hhcilcbntcblx0cmV0dXJuIF9VdGlsc19jaHIoY2hhci50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbn1cblxuXG5cbnZhciBfU3RyaW5nX2NvbnMgPSBGMihmdW5jdGlvbihjaHIsIHN0cilcbntcblx0cmV0dXJuIGNociArIHN0cjtcbn0pO1xuXG5mdW5jdGlvbiBfU3RyaW5nX3VuY29ucyhzdHJpbmcpXG57XG5cdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoMCk7XG5cdHJldHVybiB3b3JkXG5cdFx0PyBlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0MHhEODAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERCRkZcblx0XHRcdFx0PyBfVXRpbHNfVHVwbGUyKF9VdGlsc19jaHIoc3RyaW5nWzBdICsgc3RyaW5nWzFdKSwgc3RyaW5nLnNsaWNlKDIpKVxuXHRcdFx0XHQ6IF9VdGlsc19UdXBsZTIoX1V0aWxzX2NocihzdHJpbmdbMF0pLCBzdHJpbmcuc2xpY2UoMSkpXG5cdFx0KVxuXHRcdDogZWxtJGNvcmUkTWF5YmUkTm90aGluZztcbn1cblxudmFyIF9TdHJpbmdfYXBwZW5kID0gRjIoZnVuY3Rpb24oYSwgYilcbntcblx0cmV0dXJuIGEgKyBiO1xufSk7XG5cbmZ1bmN0aW9uIF9TdHJpbmdfbGVuZ3RoKHN0cilcbntcblx0cmV0dXJuIHN0ci5sZW5ndGg7XG59XG5cbnZhciBfU3RyaW5nX21hcCA9IEYyKGZ1bmN0aW9uKGZ1bmMsIHN0cmluZylcbntcblx0dmFyIGxlbiA9IHN0cmluZy5sZW5ndGg7XG5cdHZhciBhcnJheSA9IG5ldyBBcnJheShsZW4pO1xuXHR2YXIgaSA9IDA7XG5cdHdoaWxlIChpIDwgbGVuKVxuXHR7XG5cdFx0dmFyIHdvcmQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHRpZiAoMHhEODAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERCRkYpXG5cdFx0e1xuXHRcdFx0YXJyYXlbaV0gPSBmdW5jKF9VdGlsc19jaHIoc3RyaW5nW2ldICsgc3RyaW5nW2krMV0pKTtcblx0XHRcdGkgKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRhcnJheVtpXSA9IGZ1bmMoX1V0aWxzX2NocihzdHJpbmdbaV0pKTtcblx0XHRpKys7XG5cdH1cblx0cmV0dXJuIGFycmF5LmpvaW4oJycpO1xufSk7XG5cbnZhciBfU3RyaW5nX2ZpbHRlciA9IEYyKGZ1bmN0aW9uKGlzR29vZCwgc3RyKVxue1xuXHR2YXIgYXJyID0gW107XG5cdHZhciBsZW4gPSBzdHIubGVuZ3RoO1xuXHR2YXIgaSA9IDA7XG5cdHdoaWxlIChpIDwgbGVuKVxuXHR7XG5cdFx0dmFyIGNoYXIgPSBzdHJbaV07XG5cdFx0dmFyIHdvcmQgPSBzdHIuY2hhckNvZGVBdChpKTtcblx0XHRpKys7XG5cdFx0aWYgKDB4RDgwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhEQkZGKVxuXHRcdHtcblx0XHRcdGNoYXIgKz0gc3RyW2ldO1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdGlmIChpc0dvb2QoX1V0aWxzX2NocihjaGFyKSkpXG5cdFx0e1xuXHRcdFx0YXJyLnB1c2goY2hhcik7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhcnIuam9pbignJyk7XG59KTtcblxuZnVuY3Rpb24gX1N0cmluZ19yZXZlcnNlKHN0cilcbntcblx0dmFyIGxlbiA9IHN0ci5sZW5ndGg7XG5cdHZhciBhcnIgPSBuZXcgQXJyYXkobGVuKTtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciB3b3JkID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKDB4RDgwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhEQkZGKVxuXHRcdHtcblx0XHRcdGFycltsZW4gLSBpXSA9IHN0cltpICsgMV07XG5cdFx0XHRpKys7XG5cdFx0XHRhcnJbbGVuIC0gaV0gPSBzdHJbaSAtIDFdO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0YXJyW2xlbiAtIGldID0gc3RyW2ldO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYXJyLmpvaW4oJycpO1xufVxuXG52YXIgX1N0cmluZ19mb2xkbCA9IEYzKGZ1bmN0aW9uKGZ1bmMsIHN0YXRlLCBzdHJpbmcpXG57XG5cdHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoO1xuXHR2YXIgaSA9IDA7XG5cdHdoaWxlIChpIDwgbGVuKVxuXHR7XG5cdFx0dmFyIGNoYXIgPSBzdHJpbmdbaV07XG5cdFx0dmFyIHdvcmQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHRpKys7XG5cdFx0aWYgKDB4RDgwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhEQkZGKVxuXHRcdHtcblx0XHRcdGNoYXIgKz0gc3RyaW5nW2ldO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0XHRzdGF0ZSA9IEEyKGZ1bmMsIF9VdGlsc19jaHIoY2hhciksIHN0YXRlKTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59KTtcblxudmFyIF9TdHJpbmdfZm9sZHIgPSBGMyhmdW5jdGlvbihmdW5jLCBzdGF0ZSwgc3RyaW5nKVxue1xuXHR2YXIgaSA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pXG5cdHtcblx0XHR2YXIgY2hhciA9IHN0cmluZ1tpXTtcblx0XHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweERDMDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REZGRilcblx0XHR7XG5cdFx0XHRpLS07XG5cdFx0XHRjaGFyID0gc3RyaW5nW2ldICsgY2hhcjtcblx0XHR9XG5cdFx0c3RhdGUgPSBBMihmdW5jLCBfVXRpbHNfY2hyKGNoYXIpLCBzdGF0ZSk7XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufSk7XG5cbnZhciBfU3RyaW5nX3NwbGl0ID0gRjIoZnVuY3Rpb24oc2VwLCBzdHIpXG57XG5cdHJldHVybiBzdHIuc3BsaXQoc2VwKTtcbn0pO1xuXG52YXIgX1N0cmluZ19qb2luID0gRjIoZnVuY3Rpb24oc2VwLCBzdHJzKVxue1xuXHRyZXR1cm4gc3Rycy5qb2luKHNlcCk7XG59KTtcblxudmFyIF9TdHJpbmdfc2xpY2UgPSBGMyhmdW5jdGlvbihzdGFydCwgZW5kLCBzdHIpIHtcblx0cmV0dXJuIHN0ci5zbGljZShzdGFydCwgZW5kKTtcbn0pO1xuXG5mdW5jdGlvbiBfU3RyaW5nX3RyaW0oc3RyKVxue1xuXHRyZXR1cm4gc3RyLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gX1N0cmluZ190cmltTGVmdChzdHIpXG57XG5cdHJldHVybiBzdHIucmVwbGFjZSgvXlxccysvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfdHJpbVJpZ2h0KHN0cilcbntcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrJC8sICcnKTtcbn1cblxuZnVuY3Rpb24gX1N0cmluZ193b3JkcyhzdHIpXG57XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoc3RyLnRyaW0oKS5zcGxpdCgvXFxzKy9nKSk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfbGluZXMoc3RyKVxue1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KHN0ci5zcGxpdCgvXFxyXFxufFxccnxcXG4vZykpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX3RvVXBwZXIoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfdG9Mb3dlcihzdHIpXG57XG5cdHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbn1cblxudmFyIF9TdHJpbmdfYW55ID0gRjIoZnVuY3Rpb24oaXNHb29kLCBzdHJpbmcpXG57XG5cdHZhciBpID0gc3RyaW5nLmxlbmd0aDtcblx0d2hpbGUgKGktLSlcblx0e1xuXHRcdHZhciBjaGFyID0gc3RyaW5nW2ldO1xuXHRcdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKDB4REMwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhERkZGKVxuXHRcdHtcblx0XHRcdGktLTtcblx0XHRcdGNoYXIgPSBzdHJpbmdbaV0gKyBjaGFyO1xuXHRcdH1cblx0XHRpZiAoaXNHb29kKF9VdGlsc19jaHIoY2hhcikpKVxuXHRcdHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59KTtcblxudmFyIF9TdHJpbmdfYWxsID0gRjIoZnVuY3Rpb24oaXNHb29kLCBzdHJpbmcpXG57XG5cdHZhciBpID0gc3RyaW5nLmxlbmd0aDtcblx0d2hpbGUgKGktLSlcblx0e1xuXHRcdHZhciBjaGFyID0gc3RyaW5nW2ldO1xuXHRcdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKDB4REMwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhERkZGKVxuXHRcdHtcblx0XHRcdGktLTtcblx0XHRcdGNoYXIgPSBzdHJpbmdbaV0gKyBjaGFyO1xuXHRcdH1cblx0XHRpZiAoIWlzR29vZChfVXRpbHNfY2hyKGNoYXIpKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufSk7XG5cbnZhciBfU3RyaW5nX2NvbnRhaW5zID0gRjIoZnVuY3Rpb24oc3ViLCBzdHIpXG57XG5cdHJldHVybiBzdHIuaW5kZXhPZihzdWIpID4gLTE7XG59KTtcblxudmFyIF9TdHJpbmdfc3RhcnRzV2l0aCA9IEYyKGZ1bmN0aW9uKHN1Yiwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLmluZGV4T2Yoc3ViKSA9PT0gMDtcbn0pO1xuXG52YXIgX1N0cmluZ19lbmRzV2l0aCA9IEYyKGZ1bmN0aW9uKHN1Yiwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLmxlbmd0aCA+PSBzdWIubGVuZ3RoICYmXG5cdFx0c3RyLmxhc3RJbmRleE9mKHN1YikgPT09IHN0ci5sZW5ndGggLSBzdWIubGVuZ3RoO1xufSk7XG5cbnZhciBfU3RyaW5nX2luZGV4ZXMgPSBGMihmdW5jdGlvbihzdWIsIHN0cilcbntcblx0dmFyIHN1YkxlbiA9IHN1Yi5sZW5ndGg7XG5cblx0aWYgKHN1YkxlbiA8IDEpXG5cdHtcblx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHR9XG5cblx0dmFyIGkgPSAwO1xuXHR2YXIgaXMgPSBbXTtcblxuXHR3aGlsZSAoKGkgPSBzdHIuaW5kZXhPZihzdWIsIGkpKSA+IC0xKVxuXHR7XG5cdFx0aXMucHVzaChpKTtcblx0XHRpID0gaSArIHN1Ykxlbjtcblx0fVxuXG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoaXMpO1xufSk7XG5cblxuLy8gVE8gU1RSSU5HXG5cbmZ1bmN0aW9uIF9TdHJpbmdfZnJvbU51bWJlcihudW1iZXIpXG57XG5cdHJldHVybiBudW1iZXIgKyAnJztcbn1cblxuXG4vLyBJTlQgQ09OVkVSU0lPTlNcblxuZnVuY3Rpb24gX1N0cmluZ190b0ludChzdHIpXG57XG5cdHZhciB0b3RhbCA9IDA7XG5cdHZhciBjb2RlMCA9IHN0ci5jaGFyQ29kZUF0KDApO1xuXHR2YXIgc3RhcnQgPSBjb2RlMCA9PSAweDJCIC8qICsgKi8gfHwgY29kZTAgPT0gMHgyRCAvKiAtICovID8gMSA6IDA7XG5cblx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgc3RyLmxlbmd0aDsgKytpKVxuXHR7XG5cdFx0dmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcblx0XHRpZiAoY29kZSA8IDB4MzAgfHwgMHgzOSA8IGNvZGUpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0fVxuXHRcdHRvdGFsID0gMTAgKiB0b3RhbCArIGNvZGUgLSAweDMwO1xuXHR9XG5cblx0cmV0dXJuIGkgPT0gc3RhcnRcblx0XHQ/IGVsbSRjb3JlJE1heWJlJE5vdGhpbmdcblx0XHQ6IGVsbSRjb3JlJE1heWJlJEp1c3QoY29kZTAgPT0gMHgyRCA/IC10b3RhbCA6IHRvdGFsKTtcbn1cblxuXG4vLyBGTE9BVCBDT05WRVJTSU9OU1xuXG5mdW5jdGlvbiBfU3RyaW5nX3RvRmxvYXQocylcbntcblx0Ly8gY2hlY2sgaWYgaXQgaXMgYSBoZXgsIG9jdGFsLCBvciBiaW5hcnkgbnVtYmVyXG5cdGlmIChzLmxlbmd0aCA9PT0gMCB8fCAvW1xcc3hib10vLnRlc3QocykpXG5cdHtcblx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0fVxuXHR2YXIgbiA9ICtzO1xuXHQvLyBmYXN0ZXIgaXNOYU4gY2hlY2tcblx0cmV0dXJuIG4gPT09IG4gPyBlbG0kY29yZSRNYXliZSRKdXN0KG4pIDogZWxtJGNvcmUkTWF5YmUkTm90aGluZztcbn1cblxuZnVuY3Rpb24gX1N0cmluZ19mcm9tTGlzdChjaGFycylcbntcblx0cmV0dXJuIF9MaXN0X3RvQXJyYXkoY2hhcnMpLmpvaW4oJycpO1xufVxuXG5cblxuXG4vKiovXG5mdW5jdGlvbiBfSnNvbl9lcnJvclRvU3RyaW5nKGVycm9yKVxue1xuXHRyZXR1cm4gZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JUb1N0cmluZyhlcnJvcik7XG59XG4vLyovXG5cblxuLy8gQ09SRSBERUNPREVSU1xuXG5mdW5jdGlvbiBfSnNvbl9zdWNjZWVkKG1zZylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAwLFxuXHRcdGE6IG1zZ1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfSnNvbl9mYWlsKG1zZylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAxLFxuXHRcdGE6IG1zZ1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVQcmltKGRlY29kZXIpXG57XG5cdHJldHVybiB7ICQ6IDIsIGI6IGRlY29kZXIgfTtcbn1cblxudmFyIF9Kc29uX2RlY29kZUludCA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKVxuXHRcdD8gX0pzb25fZXhwZWN0aW5nKCdhbiBJTlQnLCB2YWx1ZSlcblx0XHQ6XG5cdCgtMjE0NzQ4MzY0NyA8IHZhbHVlICYmIHZhbHVlIDwgMjE0NzQ4MzY0NyAmJiAodmFsdWUgfCAwKSA9PT0gdmFsdWUpXG5cdFx0PyBlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OlxuXHQoaXNGaW5pdGUodmFsdWUpICYmICEodmFsdWUgJSAxKSlcblx0XHQ/IGVsbSRjb3JlJFJlc3VsdCRPayh2YWx1ZSlcblx0XHQ6IF9Kc29uX2V4cGVjdGluZygnYW4gSU5UJywgdmFsdWUpO1xufSk7XG5cbnZhciBfSnNvbl9kZWNvZGVCb29sID0gX0pzb25fZGVjb2RlUHJpbShmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuXHRcdD8gZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDogX0pzb25fZXhwZWN0aW5nKCdhIEJPT0wnLCB2YWx1ZSk7XG59KTtcblxudmFyIF9Kc29uX2RlY29kZUZsb2F0ID0gX0pzb25fZGVjb2RlUHJpbShmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG5cdFx0PyBlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OiBfSnNvbl9leHBlY3RpbmcoJ2EgRkxPQVQnLCB2YWx1ZSk7XG59KTtcblxudmFyIF9Kc29uX2RlY29kZVZhbHVlID0gX0pzb25fZGVjb2RlUHJpbShmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JE9rKF9Kc29uX3dyYXAodmFsdWUpKTtcbn0pO1xuXG52YXIgX0pzb25fZGVjb2RlU3RyaW5nID0gX0pzb25fZGVjb2RlUHJpbShmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG5cdFx0PyBlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpXG5cdFx0XHQ/IGVsbSRjb3JlJFJlc3VsdCRPayh2YWx1ZSArICcnKVxuXHRcdFx0OiBfSnNvbl9leHBlY3RpbmcoJ2EgU1RSSU5HJywgdmFsdWUpO1xufSk7XG5cbmZ1bmN0aW9uIF9Kc29uX2RlY29kZUxpc3QoZGVjb2RlcikgeyByZXR1cm4geyAkOiAzLCBiOiBkZWNvZGVyIH07IH1cbmZ1bmN0aW9uIF9Kc29uX2RlY29kZUFycmF5KGRlY29kZXIpIHsgcmV0dXJuIHsgJDogNCwgYjogZGVjb2RlciB9OyB9XG5cbmZ1bmN0aW9uIF9Kc29uX2RlY29kZU51bGwodmFsdWUpIHsgcmV0dXJuIHsgJDogNSwgYzogdmFsdWUgfTsgfVxuXG52YXIgX0pzb25fZGVjb2RlRmllbGQgPSBGMihmdW5jdGlvbihmaWVsZCwgZGVjb2Rlcilcbntcblx0cmV0dXJuIHtcblx0XHQkOiA2LFxuXHRcdGQ6IGZpZWxkLFxuXHRcdGI6IGRlY29kZXJcblx0fTtcbn0pO1xuXG52YXIgX0pzb25fZGVjb2RlSW5kZXggPSBGMihmdW5jdGlvbihpbmRleCwgZGVjb2Rlcilcbntcblx0cmV0dXJuIHtcblx0XHQkOiA3LFxuXHRcdGU6IGluZGV4LFxuXHRcdGI6IGRlY29kZXJcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVLZXlWYWx1ZVBhaXJzKGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogOCxcblx0XHRiOiBkZWNvZGVyXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9Kc29uX21hcE1hbnkoZiwgZGVjb2RlcnMpXG57XG5cdHJldHVybiB7XG5cdFx0JDogOSxcblx0XHRmOiBmLFxuXHRcdGc6IGRlY29kZXJzXG5cdH07XG59XG5cbnZhciBfSnNvbl9hbmRUaGVuID0gRjIoZnVuY3Rpb24oY2FsbGJhY2ssIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMTAsXG5cdFx0YjogZGVjb2Rlcixcblx0XHRoOiBjYWxsYmFja1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIF9Kc29uX29uZU9mKGRlY29kZXJzKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDExLFxuXHRcdGc6IGRlY29kZXJzXG5cdH07XG59XG5cblxuLy8gREVDT0RJTkcgT0JKRUNUU1xuXG52YXIgX0pzb25fbWFwMSA9IEYyKGZ1bmN0aW9uKGYsIGQxKVxue1xuXHRyZXR1cm4gX0pzb25fbWFwTWFueShmLCBbZDFdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwMiA9IEYzKGZ1bmN0aW9uKGYsIGQxLCBkMilcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMl0pO1xufSk7XG5cbnZhciBfSnNvbl9tYXAzID0gRjQoZnVuY3Rpb24oZiwgZDEsIGQyLCBkMylcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDNdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwNCA9IEY1KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0KVxue1xuXHRyZXR1cm4gX0pzb25fbWFwTWFueShmLCBbZDEsIGQyLCBkMywgZDRdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwNSA9IEY2KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSlcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNV0pO1xufSk7XG5cbnZhciBfSnNvbl9tYXA2ID0gRjcoZnVuY3Rpb24oZiwgZDEsIGQyLCBkMywgZDQsIGQ1LCBkNilcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDZdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwNyA9IEY4KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3KVxue1xuXHRyZXR1cm4gX0pzb25fbWFwTWFueShmLCBbZDEsIGQyLCBkMywgZDQsIGQ1LCBkNiwgZDddKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwOCA9IEY5KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOClcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOF0pO1xufSk7XG5cblxuLy8gREVDT0RFXG5cbnZhciBfSnNvbl9ydW5PblN0cmluZyA9IEYyKGZ1bmN0aW9uKGRlY29kZXIsIHN0cmluZylcbntcblx0dHJ5XG5cdHtcblx0XHR2YXIgdmFsdWUgPSBKU09OLnBhcnNlKHN0cmluZyk7XG5cdFx0cmV0dXJuIF9Kc29uX3J1bkhlbHAoZGVjb2RlciwgdmFsdWUpO1xuXHR9XG5cdGNhdGNoIChlKVxuXHR7XG5cdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkRmFpbHVyZSwgJ1RoaXMgaXMgbm90IHZhbGlkIEpTT04hICcgKyBlLm1lc3NhZ2UsIF9Kc29uX3dyYXAoc3RyaW5nKSkpO1xuXHR9XG59KTtcblxudmFyIF9Kc29uX3J1biA9IEYyKGZ1bmN0aW9uKGRlY29kZXIsIHZhbHVlKVxue1xuXHRyZXR1cm4gX0pzb25fcnVuSGVscChkZWNvZGVyLCBfSnNvbl91bndyYXAodmFsdWUpKTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9ydW5IZWxwKGRlY29kZXIsIHZhbHVlKVxue1xuXHRzd2l0Y2ggKGRlY29kZXIuJClcblx0e1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBkZWNvZGVyLmIodmFsdWUpO1xuXG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuICh2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0PyBlbG0kY29yZSRSZXN1bHQkT2soZGVjb2Rlci5jKVxuXHRcdFx0XHQ6IF9Kc29uX2V4cGVjdGluZygnbnVsbCcsIHZhbHVlKTtcblxuXHRcdGNhc2UgMzpcblx0XHRcdGlmICghX0pzb25faXNBcnJheSh2YWx1ZSkpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBfSnNvbl9leHBlY3RpbmcoJ2EgTElTVCcsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfSnNvbl9ydW5BcnJheURlY29kZXIoZGVjb2Rlci5iLCB2YWx1ZSwgX0xpc3RfZnJvbUFycmF5KTtcblxuXHRcdGNhc2UgNDpcblx0XHRcdGlmICghX0pzb25faXNBcnJheSh2YWx1ZSkpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBfSnNvbl9leHBlY3RpbmcoJ2FuIEFSUkFZJywgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIF9Kc29uX3J1bkFycmF5RGVjb2RlcihkZWNvZGVyLmIsIHZhbHVlLCBfSnNvbl90b0VsbUFycmF5KTtcblxuXHRcdGNhc2UgNjpcblx0XHRcdHZhciBmaWVsZCA9IGRlY29kZXIuZDtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8ICEoZmllbGQgaW4gdmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBPQkpFQ1Qgd2l0aCBhIGZpZWxkIG5hbWVkIGAnICsgZmllbGQgKyAnYCcsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGRlY29kZXIuYiwgdmFsdWVbZmllbGRdKTtcblx0XHRcdHJldHVybiAoZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSkgPyByZXN1bHQgOiBlbG0kY29yZSRSZXN1bHQkRXJyKEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJEZpZWxkLCBmaWVsZCwgcmVzdWx0LmEpKTtcblxuXHRcdGNhc2UgNzpcblx0XHRcdHZhciBpbmRleCA9IGRlY29kZXIuZTtcblx0XHRcdGlmICghX0pzb25faXNBcnJheSh2YWx1ZSkpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBfSnNvbl9leHBlY3RpbmcoJ2FuIEFSUkFZJywgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGluZGV4ID49IHZhbHVlLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIF9Kc29uX2V4cGVjdGluZygnYSBMT05HRVIgYXJyYXkuIE5lZWQgaW5kZXggJyArIGluZGV4ICsgJyBidXQgb25seSBzZWUgJyArIHZhbHVlLmxlbmd0aCArICcgZW50cmllcycsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGRlY29kZXIuYiwgdmFsdWVbaW5kZXhdKTtcblx0XHRcdHJldHVybiAoZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSkgPyByZXN1bHQgOiBlbG0kY29yZSRSZXN1bHQkRXJyKEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJEluZGV4LCBpbmRleCwgcmVzdWx0LmEpKTtcblxuXHRcdGNhc2UgODpcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8IF9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBPQkpFQ1QnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBrZXlWYWx1ZVBhaXJzID0gX0xpc3RfTmlsO1xuXHRcdFx0Ly8gVE9ETyB0ZXN0IHBlcmYgb2YgT2JqZWN0LmtleXMgYW5kIHN3aXRjaCB3aGVuIHN1cHBvcnQgaXMgZ29vZCBlbm91Z2hcblx0XHRcdGZvciAodmFyIGtleSBpbiB2YWx1ZSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLmIsIHZhbHVlW2tleV0pO1xuXHRcdFx0XHRcdGlmICghZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihBMihlbG0kanNvbiRKc29uJERlY29kZSRGaWVsZCwga2V5LCByZXN1bHQuYSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzID0gX0xpc3RfQ29ucyhfVXRpbHNfVHVwbGUyKGtleSwgcmVzdWx0LmEpLCBrZXlWYWx1ZVBhaXJzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRPayhlbG0kY29yZSRMaXN0JHJldmVyc2Uoa2V5VmFsdWVQYWlycykpO1xuXG5cdFx0Y2FzZSA5OlxuXHRcdFx0dmFyIGFuc3dlciA9IGRlY29kZXIuZjtcblx0XHRcdHZhciBkZWNvZGVycyA9IGRlY29kZXIuZztcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVjb2RlcnMubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGRlY29kZXJzW2ldLCB2YWx1ZSk7XG5cdFx0XHRcdGlmICghZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0YW5zd2VyID0gYW5zd2VyKHJlc3VsdC5hKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2soYW5zd2VyKTtcblxuXHRcdGNhc2UgMTA6XG5cdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLmIsIHZhbHVlKTtcblx0XHRcdHJldHVybiAoIWVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdD8gcmVzdWx0XG5cdFx0XHRcdDogX0pzb25fcnVuSGVscChkZWNvZGVyLmgocmVzdWx0LmEpLCB2YWx1ZSk7XG5cblx0XHRjYXNlIDExOlxuXHRcdFx0dmFyIGVycm9ycyA9IF9MaXN0X05pbDtcblx0XHRcdGZvciAodmFyIHRlbXAgPSBkZWNvZGVyLmc7IHRlbXAuYjsgdGVtcCA9IHRlbXAuYikgLy8gV0hJTEVfQ09OU1xuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscCh0ZW1wLmEsIHZhbHVlKTtcblx0XHRcdFx0aWYgKGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVycm9ycyA9IF9MaXN0X0NvbnMocmVzdWx0LmEsIGVycm9ycyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihlbG0kanNvbiRKc29uJERlY29kZSRPbmVPZihlbG0kY29yZSRMaXN0JHJldmVyc2UoZXJyb3JzKSkpO1xuXG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkRmFpbHVyZSwgZGVjb2Rlci5hLCBfSnNvbl93cmFwKHZhbHVlKSkpO1xuXG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRPayhkZWNvZGVyLmEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9Kc29uX3J1bkFycmF5RGVjb2RlcihkZWNvZGVyLCB2YWx1ZSwgdG9FbG1WYWx1ZSlcbntcblx0dmFyIGxlbiA9IHZhbHVlLmxlbmd0aDtcblx0dmFyIGFycmF5ID0gbmV3IEFycmF5KGxlbik7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG5cdHtcblx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLCB2YWx1ZVtpXSk7XG5cdFx0aWYgKCFlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJEluZGV4LCBpLCByZXN1bHQuYSkpO1xuXHRcdH1cblx0XHRhcnJheVtpXSA9IHJlc3VsdC5hO1xuXHR9XG5cdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2sodG9FbG1WYWx1ZShhcnJheSkpO1xufVxuXG5mdW5jdGlvbiBfSnNvbl9pc0FycmF5KHZhbHVlKVxue1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgKHR5cGVvZiBGaWxlTGlzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlTGlzdCk7XG59XG5cbmZ1bmN0aW9uIF9Kc29uX3RvRWxtQXJyYXkoYXJyYXkpXG57XG5cdHJldHVybiBBMihlbG0kY29yZSRBcnJheSRpbml0aWFsaXplLCBhcnJheS5sZW5ndGgsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGFycmF5W2ldOyB9KTtcbn1cblxuZnVuY3Rpb24gX0pzb25fZXhwZWN0aW5nKHR5cGUsIHZhbHVlKVxue1xuXHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihBMihlbG0kanNvbiRKc29uJERlY29kZSRGYWlsdXJlLCAnRXhwZWN0aW5nICcgKyB0eXBlLCBfSnNvbl93cmFwKHZhbHVlKSkpO1xufVxuXG5cbi8vIEVRVUFMSVRZXG5cbmZ1bmN0aW9uIF9Kc29uX2VxdWFsaXR5KHgsIHkpXG57XG5cdGlmICh4ID09PSB5KVxuXHR7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoeC4kICE9PSB5LiQpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzd2l0Y2ggKHguJClcblx0e1xuXHRcdGNhc2UgMDpcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4geC5hID09PSB5LmE7XG5cblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4geC5iID09PSB5LmI7XG5cblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4geC5jID09PSB5LmM7XG5cblx0XHRjYXNlIDM6XG5cdFx0Y2FzZSA0OlxuXHRcdGNhc2UgODpcblx0XHRcdHJldHVybiBfSnNvbl9lcXVhbGl0eSh4LmIsIHkuYik7XG5cblx0XHRjYXNlIDY6XG5cdFx0XHRyZXR1cm4geC5kID09PSB5LmQgJiYgX0pzb25fZXF1YWxpdHkoeC5iLCB5LmIpO1xuXG5cdFx0Y2FzZSA3OlxuXHRcdFx0cmV0dXJuIHguZSA9PT0geS5lICYmIF9Kc29uX2VxdWFsaXR5KHguYiwgeS5iKTtcblxuXHRcdGNhc2UgOTpcblx0XHRcdHJldHVybiB4LmYgPT09IHkuZiAmJiBfSnNvbl9saXN0RXF1YWxpdHkoeC5nLCB5LmcpO1xuXG5cdFx0Y2FzZSAxMDpcblx0XHRcdHJldHVybiB4LmggPT09IHkuaCAmJiBfSnNvbl9lcXVhbGl0eSh4LmIsIHkuYik7XG5cblx0XHRjYXNlIDExOlxuXHRcdFx0cmV0dXJuIF9Kc29uX2xpc3RFcXVhbGl0eSh4LmcsIHkuZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gX0pzb25fbGlzdEVxdWFsaXR5KGFEZWNvZGVycywgYkRlY29kZXJzKVxue1xuXHR2YXIgbGVuID0gYURlY29kZXJzLmxlbmd0aDtcblx0aWYgKGxlbiAhPT0gYkRlY29kZXJzLmxlbmd0aClcblx0e1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuXHR7XG5cdFx0aWYgKCFfSnNvbl9lcXVhbGl0eShhRGVjb2RlcnNbaV0sIGJEZWNvZGVyc1tpXSkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBFTkNPREVcblxudmFyIF9Kc29uX2VuY29kZSA9IEYyKGZ1bmN0aW9uKGluZGVudExldmVsLCB2YWx1ZSlcbntcblx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KF9Kc29uX3Vud3JhcCh2YWx1ZSksIG51bGwsIGluZGVudExldmVsKSArICcnO1xufSk7XG5cbmZ1bmN0aW9uIF9Kc29uX3dyYXAodmFsdWUpIHsgcmV0dXJuIHsgJDogMCwgYTogdmFsdWUgfTsgfVxuZnVuY3Rpb24gX0pzb25fdW53cmFwKHZhbHVlKSB7IHJldHVybiB2YWx1ZS5hOyB9XG5cbmZ1bmN0aW9uIF9Kc29uX3dyYXBfVU5VU0VEKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfVxuZnVuY3Rpb24gX0pzb25fdW53cmFwX1VOVVNFRCh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH1cblxuZnVuY3Rpb24gX0pzb25fZW1wdHlBcnJheSgpIHsgcmV0dXJuIFtdOyB9XG5mdW5jdGlvbiBfSnNvbl9lbXB0eU9iamVjdCgpIHsgcmV0dXJuIHt9OyB9XG5cbnZhciBfSnNvbl9hZGRGaWVsZCA9IEYzKGZ1bmN0aW9uKGtleSwgdmFsdWUsIG9iamVjdClcbntcblx0b2JqZWN0W2tleV0gPSBfSnNvbl91bndyYXAodmFsdWUpO1xuXHRyZXR1cm4gb2JqZWN0O1xufSk7XG5cbmZ1bmN0aW9uIF9Kc29uX2FkZEVudHJ5KGZ1bmMpXG57XG5cdHJldHVybiBGMihmdW5jdGlvbihlbnRyeSwgYXJyYXkpXG5cdHtcblx0XHRhcnJheS5wdXNoKF9Kc29uX3Vud3JhcChmdW5jKGVudHJ5KSkpO1xuXHRcdHJldHVybiBhcnJheTtcblx0fSk7XG59XG5cbnZhciBfSnNvbl9lbmNvZGVOdWxsID0gX0pzb25fd3JhcChudWxsKTtcblxuXG5cbi8vIFRBU0tTXG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfc3VjY2VlZCh2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiAwLFxuXHRcdGE6IHZhbHVlXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfZmFpbChlcnJvcilcbntcblx0cmV0dXJuIHtcblx0XHQkOiAxLFxuXHRcdGE6IGVycm9yXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfYmluZGluZyhjYWxsYmFjaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAyLFxuXHRcdGI6IGNhbGxiYWNrLFxuXHRcdGM6IG51bGxcblx0fTtcbn1cblxudmFyIF9TY2hlZHVsZXJfYW5kVGhlbiA9IEYyKGZ1bmN0aW9uKGNhbGxiYWNrLCB0YXNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDMsXG5cdFx0YjogY2FsbGJhY2ssXG5cdFx0ZDogdGFza1xuXHR9O1xufSk7XG5cbnZhciBfU2NoZWR1bGVyX29uRXJyb3IgPSBGMihmdW5jdGlvbihjYWxsYmFjaywgdGFzaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiA0LFxuXHRcdGI6IGNhbGxiYWNrLFxuXHRcdGQ6IHRhc2tcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3JlY2VpdmUoY2FsbGJhY2spXG57XG5cdHJldHVybiB7XG5cdFx0JDogNSxcblx0XHRiOiBjYWxsYmFja1xuXHR9O1xufVxuXG5cbi8vIFBST0NFU1NFU1xuXG52YXIgX1NjaGVkdWxlcl9ndWlkID0gMDtcblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9yYXdTcGF3bih0YXNrKVxue1xuXHR2YXIgcHJvYyA9IHtcblx0XHQkOiAwLFxuXHRcdGU6IF9TY2hlZHVsZXJfZ3VpZCsrLFxuXHRcdGY6IHRhc2ssXG5cdFx0ZzogbnVsbCxcblx0XHRoOiBbXVxuXHR9O1xuXG5cdF9TY2hlZHVsZXJfZW5xdWV1ZShwcm9jKTtcblxuXHRyZXR1cm4gcHJvYztcbn1cblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9zcGF3bih0YXNrKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKF9TY2hlZHVsZXJfcmF3U3Bhd24odGFzaykpKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfcmF3U2VuZChwcm9jLCBtc2cpXG57XG5cdHByb2MuaC5wdXNoKG1zZyk7XG5cdF9TY2hlZHVsZXJfZW5xdWV1ZShwcm9jKTtcbn1cblxudmFyIF9TY2hlZHVsZXJfc2VuZCA9IEYyKGZ1bmN0aW9uKHByb2MsIG1zZylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdF9TY2hlZHVsZXJfcmF3U2VuZChwcm9jLCBtc2cpO1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKSk7XG5cdH0pO1xufSk7XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfa2lsbChwcm9jKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIHRhc2sgPSBwcm9jLmY7XG5cdFx0aWYgKHRhc2suJCA9PT0gMiAmJiB0YXNrLmMpXG5cdFx0e1xuXHRcdFx0dGFzay5jKCk7XG5cdFx0fVxuXG5cdFx0cHJvYy5mID0gbnVsbDtcblxuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKSk7XG5cdH0pO1xufVxuXG5cbi8qIFNURVAgUFJPQ0VTU0VTXG5cbnR5cGUgYWxpYXMgUHJvY2VzcyA9XG4gIHsgJCA6IHRhZ1xuICAsIGlkIDogdW5pcXVlX2lkXG4gICwgcm9vdCA6IFRhc2tcbiAgLCBzdGFjayA6IG51bGwgfCB7ICQ6IFNVQ0NFRUQgfCBGQUlMLCBhOiBjYWxsYmFjaywgYjogc3RhY2sgfVxuICAsIG1haWxib3ggOiBbbXNnXVxuICB9XG5cbiovXG5cblxudmFyIF9TY2hlZHVsZXJfd29ya2luZyA9IGZhbHNlO1xudmFyIF9TY2hlZHVsZXJfcXVldWUgPSBbXTtcblxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2VucXVldWUocHJvYylcbntcblx0X1NjaGVkdWxlcl9xdWV1ZS5wdXNoKHByb2MpO1xuXHRpZiAoX1NjaGVkdWxlcl93b3JraW5nKVxuXHR7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdF9TY2hlZHVsZXJfd29ya2luZyA9IHRydWU7XG5cdHdoaWxlIChwcm9jID0gX1NjaGVkdWxlcl9xdWV1ZS5zaGlmdCgpKVxuXHR7XG5cdFx0X1NjaGVkdWxlcl9zdGVwKHByb2MpO1xuXHR9XG5cdF9TY2hlZHVsZXJfd29ya2luZyA9IGZhbHNlO1xufVxuXG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfc3RlcChwcm9jKVxue1xuXHR3aGlsZSAocHJvYy5mKVxuXHR7XG5cdFx0dmFyIHJvb3RUYWcgPSBwcm9jLmYuJDtcblx0XHRpZiAocm9vdFRhZyA9PT0gMCB8fCByb290VGFnID09PSAxKVxuXHRcdHtcblx0XHRcdHdoaWxlIChwcm9jLmcgJiYgcHJvYy5nLiQgIT09IHJvb3RUYWcpXG5cdFx0XHR7XG5cdFx0XHRcdHByb2MuZyA9IHByb2MuZy5pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFwcm9jLmcpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByb2MuZiA9IHByb2MuZy5iKHByb2MuZi5hKTtcblx0XHRcdHByb2MuZyA9IHByb2MuZy5pO1xuXHRcdH1cblx0XHRlbHNlIGlmIChyb290VGFnID09PSAyKVxuXHRcdHtcblx0XHRcdHByb2MuZi5jID0gcHJvYy5mLmIoZnVuY3Rpb24obmV3Um9vdCkge1xuXHRcdFx0XHRwcm9jLmYgPSBuZXdSb290O1xuXHRcdFx0XHRfU2NoZWR1bGVyX2VucXVldWUocHJvYyk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZWxzZSBpZiAocm9vdFRhZyA9PT0gNSlcblx0XHR7XG5cdFx0XHRpZiAocHJvYy5oLmxlbmd0aCA9PT0gMClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cHJvYy5mID0gcHJvYy5mLmIocHJvYy5oLnNoaWZ0KCkpO1xuXHRcdH1cblx0XHRlbHNlIC8vIGlmIChyb290VGFnID09PSAzIHx8IHJvb3RUYWcgPT09IDQpXG5cdFx0e1xuXHRcdFx0cHJvYy5nID0ge1xuXHRcdFx0XHQkOiByb290VGFnID09PSAzID8gMCA6IDEsXG5cdFx0XHRcdGI6IHByb2MuZi5iLFxuXHRcdFx0XHRpOiBwcm9jLmdcblx0XHRcdH07XG5cdFx0XHRwcm9jLmYgPSBwcm9jLmYuZDtcblx0XHR9XG5cdH1cbn1cblxuXG5cbmZ1bmN0aW9uIF9Qcm9jZXNzX3NsZWVwKHRpbWUpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApKTtcblx0XHR9LCB0aW1lKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHsgY2xlYXJUaW1lb3V0KGlkKTsgfTtcblx0fSk7XG59XG5cblxuXG5cbi8vIFBST0dSQU1TXG5cblxudmFyIF9QbGF0Zm9ybV93b3JrZXIgPSBGNChmdW5jdGlvbihpbXBsLCBmbGFnRGVjb2RlciwgZGVidWdNZXRhZGF0YSwgYXJncylcbntcblx0cmV0dXJuIF9QbGF0Zm9ybV9pbml0aWFsaXplKFxuXHRcdGZsYWdEZWNvZGVyLFxuXHRcdGFyZ3MsXG5cdFx0aW1wbC5pbml0LFxuXHRcdGltcGwudXBkYXRlLFxuXHRcdGltcGwuc3Vic2NyaXB0aW9ucyxcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkge30gfVxuXHQpO1xufSk7XG5cblxuXG4vLyBJTklUSUFMSVpFIEEgUFJPR1JBTVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9pbml0aWFsaXplKGZsYWdEZWNvZGVyLCBhcmdzLCBpbml0LCB1cGRhdGUsIHN1YnNjcmlwdGlvbnMsIHN0ZXBwZXJCdWlsZGVyKVxue1xuXHR2YXIgcmVzdWx0ID0gQTIoX0pzb25fcnVuLCBmbGFnRGVjb2RlciwgX0pzb25fd3JhcChhcmdzID8gYXJnc1snZmxhZ3MnXSA6IHVuZGVmaW5lZCkpO1xuXHRlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpIHx8IF9EZWJ1Z19jcmFzaCgyIC8qKi8sIF9Kc29uX2Vycm9yVG9TdHJpbmcocmVzdWx0LmEpIC8qKi8pO1xuXHR2YXIgbWFuYWdlcnMgPSB7fTtcblx0cmVzdWx0ID0gaW5pdChyZXN1bHQuYSk7XG5cdHZhciBtb2RlbCA9IHJlc3VsdC5hO1xuXHR2YXIgc3RlcHBlciA9IHN0ZXBwZXJCdWlsZGVyKHNlbmRUb0FwcCwgbW9kZWwpO1xuXHR2YXIgcG9ydHMgPSBfUGxhdGZvcm1fc2V0dXBFZmZlY3RzKG1hbmFnZXJzLCBzZW5kVG9BcHApO1xuXG5cdGZ1bmN0aW9uIHNlbmRUb0FwcChtc2csIHZpZXdNZXRhZGF0YSlcblx0e1xuXHRcdHJlc3VsdCA9IEEyKHVwZGF0ZSwgbXNnLCBtb2RlbCk7XG5cdFx0c3RlcHBlcihtb2RlbCA9IHJlc3VsdC5hLCB2aWV3TWV0YWRhdGEpO1xuXHRcdF9QbGF0Zm9ybV9kaXNwYXRjaEVmZmVjdHMobWFuYWdlcnMsIHJlc3VsdC5iLCBzdWJzY3JpcHRpb25zKG1vZGVsKSk7XG5cdH1cblxuXHRfUGxhdGZvcm1fZGlzcGF0Y2hFZmZlY3RzKG1hbmFnZXJzLCByZXN1bHQuYiwgc3Vic2NyaXB0aW9ucyhtb2RlbCkpO1xuXG5cdHJldHVybiBwb3J0cyA/IHsgcG9ydHM6IHBvcnRzIH0gOiB7fTtcbn1cblxuXG5cbi8vIFRSQUNLIFBSRUxPQURTXG4vL1xuLy8gVGhpcyBpcyB1c2VkIGJ5IGNvZGUgaW4gZWxtL2Jyb3dzZXIgYW5kIGVsbS9odHRwXG4vLyB0byByZWdpc3RlciBhbnkgSFRUUCByZXF1ZXN0cyB0aGF0IGFyZSB0cmlnZ2VyZWQgYnkgaW5pdC5cbi8vXG5cblxudmFyIF9QbGF0Zm9ybV9wcmVsb2FkO1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9yZWdpc3RlclByZWxvYWQodXJsKVxue1xuXHRfUGxhdGZvcm1fcHJlbG9hZC5hZGQodXJsKTtcbn1cblxuXG5cbi8vIEVGRkVDVCBNQU5BR0VSU1xuXG5cbnZhciBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnMgPSB7fTtcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fc2V0dXBFZmZlY3RzKG1hbmFnZXJzLCBzZW5kVG9BcHApXG57XG5cdHZhciBwb3J0cztcblxuXHQvLyBzZXR1cCBhbGwgbmVjZXNzYXJ5IGVmZmVjdCBtYW5hZ2Vyc1xuXHRmb3IgKHZhciBrZXkgaW4gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzKVxuXHR7XG5cdFx0dmFyIG1hbmFnZXIgPSBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNba2V5XTtcblxuXHRcdGlmIChtYW5hZ2VyLmEpXG5cdFx0e1xuXHRcdFx0cG9ydHMgPSBwb3J0cyB8fCB7fTtcblx0XHRcdHBvcnRzW2tleV0gPSBtYW5hZ2VyLmEoa2V5LCBzZW5kVG9BcHApO1xuXHRcdH1cblxuXHRcdG1hbmFnZXJzW2tleV0gPSBfUGxhdGZvcm1faW5zdGFudGlhdGVNYW5hZ2VyKG1hbmFnZXIsIHNlbmRUb0FwcCk7XG5cdH1cblxuXHRyZXR1cm4gcG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2NyZWF0ZU1hbmFnZXIoaW5pdCwgb25FZmZlY3RzLCBvblNlbGZNc2csIGNtZE1hcCwgc3ViTWFwKVxue1xuXHRyZXR1cm4ge1xuXHRcdGI6IGluaXQsXG5cdFx0Yzogb25FZmZlY3RzLFxuXHRcdGQ6IG9uU2VsZk1zZyxcblx0XHRlOiBjbWRNYXAsXG5cdFx0Zjogc3ViTWFwXG5cdH07XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2luc3RhbnRpYXRlTWFuYWdlcihpbmZvLCBzZW5kVG9BcHApXG57XG5cdHZhciByb3V0ZXIgPSB7XG5cdFx0Zzogc2VuZFRvQXBwLFxuXHRcdGg6IHVuZGVmaW5lZFxuXHR9O1xuXG5cdHZhciBvbkVmZmVjdHMgPSBpbmZvLmM7XG5cdHZhciBvblNlbGZNc2cgPSBpbmZvLmQ7XG5cdHZhciBjbWRNYXAgPSBpbmZvLmU7XG5cdHZhciBzdWJNYXAgPSBpbmZvLmY7XG5cblx0ZnVuY3Rpb24gbG9vcChzdGF0ZSlcblx0e1xuXHRcdHJldHVybiBBMihfU2NoZWR1bGVyX2FuZFRoZW4sIGxvb3AsIF9TY2hlZHVsZXJfcmVjZWl2ZShmdW5jdGlvbihtc2cpXG5cdFx0e1xuXHRcdFx0dmFyIHZhbHVlID0gbXNnLmE7XG5cblx0XHRcdGlmIChtc2cuJCA9PT0gMClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIEEzKG9uU2VsZk1zZywgcm91dGVyLCB2YWx1ZSwgc3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY21kTWFwICYmIHN1Yk1hcFxuXHRcdFx0XHQ/IEE0KG9uRWZmZWN0cywgcm91dGVyLCB2YWx1ZS5pLCB2YWx1ZS5qLCBzdGF0ZSlcblx0XHRcdFx0OiBBMyhvbkVmZmVjdHMsIHJvdXRlciwgY21kTWFwID8gdmFsdWUuaSA6IHZhbHVlLmosIHN0YXRlKTtcblx0XHR9KSk7XG5cdH1cblxuXHRyZXR1cm4gcm91dGVyLmggPSBfU2NoZWR1bGVyX3Jhd1NwYXduKEEyKF9TY2hlZHVsZXJfYW5kVGhlbiwgbG9vcCwgaW5mby5iKSk7XG59XG5cblxuXG4vLyBST1VUSU5HXG5cblxudmFyIF9QbGF0Zm9ybV9zZW5kVG9BcHAgPSBGMihmdW5jdGlvbihyb3V0ZXIsIG1zZylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHJvdXRlci5nKG1zZyk7XG5cdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApKTtcblx0fSk7XG59KTtcblxuXG52YXIgX1BsYXRmb3JtX3NlbmRUb1NlbGYgPSBGMihmdW5jdGlvbihyb3V0ZXIsIG1zZylcbntcblx0cmV0dXJuIEEyKF9TY2hlZHVsZXJfc2VuZCwgcm91dGVyLmgsIHtcblx0XHQkOiAwLFxuXHRcdGE6IG1zZ1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gQkFHU1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9sZWFmKGhvbWUpXG57XG5cdHJldHVybiBmdW5jdGlvbih2YWx1ZSlcblx0e1xuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAxLFxuXHRcdFx0azogaG9tZSxcblx0XHRcdGw6IHZhbHVlXG5cdFx0fTtcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fYmF0Y2gobGlzdClcbntcblx0cmV0dXJuIHtcblx0XHQkOiAyLFxuXHRcdG06IGxpc3Rcblx0fTtcbn1cblxuXG52YXIgX1BsYXRmb3JtX21hcCA9IEYyKGZ1bmN0aW9uKHRhZ2dlciwgYmFnKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDMsXG5cdFx0bjogdGFnZ2VyLFxuXHRcdG86IGJhZ1xuXHR9XG59KTtcblxuXG5cbi8vIFBJUEUgQkFHUyBJTlRPIEVGRkVDVCBNQU5BR0VSU1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9kaXNwYXRjaEVmZmVjdHMobWFuYWdlcnMsIGNtZEJhZywgc3ViQmFnKVxue1xuXHR2YXIgZWZmZWN0c0RpY3QgPSB7fTtcblx0X1BsYXRmb3JtX2dhdGhlckVmZmVjdHModHJ1ZSwgY21kQmFnLCBlZmZlY3RzRGljdCwgbnVsbCk7XG5cdF9QbGF0Zm9ybV9nYXRoZXJFZmZlY3RzKGZhbHNlLCBzdWJCYWcsIGVmZmVjdHNEaWN0LCBudWxsKTtcblxuXHRmb3IgKHZhciBob21lIGluIG1hbmFnZXJzKVxuXHR7XG5cdFx0X1NjaGVkdWxlcl9yYXdTZW5kKG1hbmFnZXJzW2hvbWVdLCB7XG5cdFx0XHQkOiAnZngnLFxuXHRcdFx0YTogZWZmZWN0c0RpY3RbaG9tZV0gfHwgeyBpOiBfTGlzdF9OaWwsIGo6IF9MaXN0X05pbCB9XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fZ2F0aGVyRWZmZWN0cyhpc0NtZCwgYmFnLCBlZmZlY3RzRGljdCwgdGFnZ2Vycylcbntcblx0c3dpdGNoIChiYWcuJClcblx0e1xuXHRcdGNhc2UgMTpcblx0XHRcdHZhciBob21lID0gYmFnLms7XG5cdFx0XHR2YXIgZWZmZWN0ID0gX1BsYXRmb3JtX3RvRWZmZWN0KGlzQ21kLCBob21lLCB0YWdnZXJzLCBiYWcubCk7XG5cdFx0XHRlZmZlY3RzRGljdFtob21lXSA9IF9QbGF0Zm9ybV9pbnNlcnQoaXNDbWQsIGVmZmVjdCwgZWZmZWN0c0RpY3RbaG9tZV0pO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0Zm9yICh2YXIgbGlzdCA9IGJhZy5tOyBsaXN0LmI7IGxpc3QgPSBsaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHRcdHtcblx0XHRcdFx0X1BsYXRmb3JtX2dhdGhlckVmZmVjdHMoaXNDbWQsIGxpc3QuYSwgZWZmZWN0c0RpY3QsIHRhZ2dlcnMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdFx0X1BsYXRmb3JtX2dhdGhlckVmZmVjdHMoaXNDbWQsIGJhZy5vLCBlZmZlY3RzRGljdCwge1xuXHRcdFx0XHRwOiBiYWcubixcblx0XHRcdFx0cTogdGFnZ2Vyc1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fdG9FZmZlY3QoaXNDbWQsIGhvbWUsIHRhZ2dlcnMsIHZhbHVlKVxue1xuXHRmdW5jdGlvbiBhcHBseVRhZ2dlcnMoeClcblx0e1xuXHRcdGZvciAodmFyIHRlbXAgPSB0YWdnZXJzOyB0ZW1wOyB0ZW1wID0gdGVtcC5xKVxuXHRcdHtcblx0XHRcdHggPSB0ZW1wLnAoeCk7XG5cdFx0fVxuXHRcdHJldHVybiB4O1xuXHR9XG5cblx0dmFyIG1hcCA9IGlzQ21kXG5cdFx0PyBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbaG9tZV0uZVxuXHRcdDogX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW2hvbWVdLmY7XG5cblx0cmV0dXJuIEEyKG1hcCwgYXBwbHlUYWdnZXJzLCB2YWx1ZSlcbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1faW5zZXJ0KGlzQ21kLCBuZXdFZmZlY3QsIGVmZmVjdHMpXG57XG5cdGVmZmVjdHMgPSBlZmZlY3RzIHx8IHsgaTogX0xpc3RfTmlsLCBqOiBfTGlzdF9OaWwgfTtcblxuXHRpc0NtZFxuXHRcdD8gKGVmZmVjdHMuaSA9IF9MaXN0X0NvbnMobmV3RWZmZWN0LCBlZmZlY3RzLmkpKVxuXHRcdDogKGVmZmVjdHMuaiA9IF9MaXN0X0NvbnMobmV3RWZmZWN0LCBlZmZlY3RzLmopKTtcblxuXHRyZXR1cm4gZWZmZWN0cztcbn1cblxuXG5cbi8vIFBPUlRTXG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2NoZWNrUG9ydE5hbWUobmFtZSlcbntcblx0aWYgKF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXSlcblx0e1xuXHRcdF9EZWJ1Z19jcmFzaCgzLCBuYW1lKVxuXHR9XG59XG5cblxuXG4vLyBPVVRHT0lORyBQT1JUU1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9vdXRnb2luZ1BvcnQobmFtZSwgY29udmVydGVyKVxue1xuXHRfUGxhdGZvcm1fY2hlY2tQb3J0TmFtZShuYW1lKTtcblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdID0ge1xuXHRcdGU6IF9QbGF0Zm9ybV9vdXRnb2luZ1BvcnRNYXAsXG5cdFx0cjogY29udmVydGVyLFxuXHRcdGE6IF9QbGF0Zm9ybV9zZXR1cE91dGdvaW5nUG9ydFxuXHR9O1xuXHRyZXR1cm4gX1BsYXRmb3JtX2xlYWYobmFtZSk7XG59XG5cblxudmFyIF9QbGF0Zm9ybV9vdXRnb2luZ1BvcnRNYXAgPSBGMihmdW5jdGlvbih0YWdnZXIsIHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfSk7XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3NldHVwT3V0Z29pbmdQb3J0KG5hbWUpXG57XG5cdHZhciBzdWJzID0gW107XG5cdHZhciBjb252ZXJ0ZXIgPSBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0ucjtcblxuXHQvLyBDUkVBVEUgTUFOQUdFUlxuXG5cdHZhciBpbml0ID0gX1Byb2Nlc3Nfc2xlZXAoMCk7XG5cblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLmIgPSBpbml0O1xuXHRfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0uYyA9IEYzKGZ1bmN0aW9uKHJvdXRlciwgY21kTGlzdCwgc3RhdGUpXG5cdHtcblx0XHRmb3IgKCA7IGNtZExpc3QuYjsgY21kTGlzdCA9IGNtZExpc3QuYikgLy8gV0hJTEVfQ09OU1xuXHRcdHtcblx0XHRcdC8vIGdyYWIgYSBzZXBhcmF0ZSByZWZlcmVuY2UgdG8gc3VicyBpbiBjYXNlIHVuc3Vic2NyaWJlIGlzIGNhbGxlZFxuXHRcdFx0dmFyIGN1cnJlbnRTdWJzID0gc3Vicztcblx0XHRcdHZhciB2YWx1ZSA9IF9Kc29uX3Vud3JhcChjb252ZXJ0ZXIoY21kTGlzdC5hKSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRTdWJzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRjdXJyZW50U3Vic1tpXSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBpbml0O1xuXHR9KTtcblxuXHQvLyBQVUJMSUMgQVBJXG5cblx0ZnVuY3Rpb24gc3Vic2NyaWJlKGNhbGxiYWNrKVxuXHR7XG5cdFx0c3Vicy5wdXNoKGNhbGxiYWNrKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGNhbGxiYWNrKVxuXHR7XG5cdFx0Ly8gY29weSBzdWJzIGludG8gYSBuZXcgYXJyYXkgaW4gY2FzZSB1bnN1YnNjcmliZSBpcyBjYWxsZWQgd2l0aGluIGFcblx0XHQvLyBzdWJzY3JpYmVkIGNhbGxiYWNrXG5cdFx0c3VicyA9IHN1YnMuc2xpY2UoKTtcblx0XHR2YXIgaW5kZXggPSBzdWJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdGlmIChpbmRleCA+PSAwKVxuXHRcdHtcblx0XHRcdHN1YnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN1YnNjcmliZTogc3Vic2NyaWJlLFxuXHRcdHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuXHR9O1xufVxuXG5cblxuLy8gSU5DT01JTkcgUE9SVFNcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1faW5jb21pbmdQb3J0KG5hbWUsIGNvbnZlcnRlcilcbntcblx0X1BsYXRmb3JtX2NoZWNrUG9ydE5hbWUobmFtZSk7XG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXSA9IHtcblx0XHRmOiBfUGxhdGZvcm1faW5jb21pbmdQb3J0TWFwLFxuXHRcdHI6IGNvbnZlcnRlcixcblx0XHRhOiBfUGxhdGZvcm1fc2V0dXBJbmNvbWluZ1BvcnRcblx0fTtcblx0cmV0dXJuIF9QbGF0Zm9ybV9sZWFmKG5hbWUpO1xufVxuXG5cbnZhciBfUGxhdGZvcm1faW5jb21pbmdQb3J0TWFwID0gRjIoZnVuY3Rpb24odGFnZ2VyLCBmaW5hbFRhZ2dlcilcbntcblx0cmV0dXJuIGZ1bmN0aW9uKHZhbHVlKVxuXHR7XG5cdFx0cmV0dXJuIHRhZ2dlcihmaW5hbFRhZ2dlcih2YWx1ZSkpO1xuXHR9O1xufSk7XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3NldHVwSW5jb21pbmdQb3J0KG5hbWUsIHNlbmRUb0FwcClcbntcblx0dmFyIHN1YnMgPSBfTGlzdF9OaWw7XG5cdHZhciBjb252ZXJ0ZXIgPSBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0ucjtcblxuXHQvLyBDUkVBVEUgTUFOQUdFUlxuXG5cdHZhciBpbml0ID0gX1NjaGVkdWxlcl9zdWNjZWVkKG51bGwpO1xuXG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXS5iID0gaW5pdDtcblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLmMgPSBGMyhmdW5jdGlvbihyb3V0ZXIsIHN1Ykxpc3QsIHN0YXRlKVxuXHR7XG5cdFx0c3VicyA9IHN1Ykxpc3Q7XG5cdFx0cmV0dXJuIGluaXQ7XG5cdH0pO1xuXG5cdC8vIFBVQkxJQyBBUElcblxuXHRmdW5jdGlvbiBzZW5kKGluY29taW5nVmFsdWUpXG5cdHtcblx0XHR2YXIgcmVzdWx0ID0gQTIoX0pzb25fcnVuLCBjb252ZXJ0ZXIsIF9Kc29uX3dyYXAoaW5jb21pbmdWYWx1ZSkpO1xuXG5cdFx0ZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSB8fCBfRGVidWdfY3Jhc2goNCwgbmFtZSwgcmVzdWx0LmEpO1xuXG5cdFx0dmFyIHZhbHVlID0gcmVzdWx0LmE7XG5cdFx0Zm9yICh2YXIgdGVtcCA9IHN1YnM7IHRlbXAuYjsgdGVtcCA9IHRlbXAuYikgLy8gV0hJTEVfQ09OU1xuXHRcdHtcblx0XHRcdHNlbmRUb0FwcCh0ZW1wLmEodmFsdWUpKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4geyBzZW5kOiBzZW5kIH07XG59XG5cblxuXG4vLyBFWFBPUlQgRUxNIE1PRFVMRVNcbi8vXG4vLyBIYXZlIERFQlVHIGFuZCBQUk9EIHZlcnNpb25zIHNvIHRoYXQgd2UgY2FuICgxKSBnaXZlIG5pY2VyIGVycm9ycyBpblxuLy8gZGVidWcgbW9kZSBhbmQgKDIpIG5vdCBwYXkgZm9yIHRoZSBiaXRzIG5lZWRlZCBmb3IgdGhhdCBpbiBwcm9kIG1vZGUuXG4vL1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9leHBvcnRfVU5VU0VEKGV4cG9ydHMpXG57XG5cdHNjb3BlWydFbG0nXVxuXHRcdD8gX1BsYXRmb3JtX21lcmdlRXhwb3J0c1Byb2Qoc2NvcGVbJ0VsbSddLCBleHBvcnRzKVxuXHRcdDogc2NvcGVbJ0VsbSddID0gZXhwb3J0cztcbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzUHJvZChvYmosIGV4cG9ydHMpXG57XG5cdGZvciAodmFyIG5hbWUgaW4gZXhwb3J0cylcblx0e1xuXHRcdChuYW1lIGluIG9iailcblx0XHRcdD8gKG5hbWUgPT0gJ2luaXQnKVxuXHRcdFx0XHQ/IF9EZWJ1Z19jcmFzaCg2KVxuXHRcdFx0XHQ6IF9QbGF0Zm9ybV9tZXJnZUV4cG9ydHNQcm9kKG9ialtuYW1lXSwgZXhwb3J0c1tuYW1lXSlcblx0XHRcdDogKG9ialtuYW1lXSA9IGV4cG9ydHNbbmFtZV0pO1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2V4cG9ydChleHBvcnRzKVxue1xuXHRzY29wZVsnRWxtJ11cblx0XHQ/IF9QbGF0Zm9ybV9tZXJnZUV4cG9ydHNEZWJ1ZygnRWxtJywgc2NvcGVbJ0VsbSddLCBleHBvcnRzKVxuXHRcdDogc2NvcGVbJ0VsbSddID0gZXhwb3J0cztcbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzRGVidWcobW9kdWxlTmFtZSwgb2JqLCBleHBvcnRzKVxue1xuXHRmb3IgKHZhciBuYW1lIGluIGV4cG9ydHMpXG5cdHtcblx0XHQobmFtZSBpbiBvYmopXG5cdFx0XHQ/IChuYW1lID09ICdpbml0Jylcblx0XHRcdFx0PyBfRGVidWdfY3Jhc2goNiwgbW9kdWxlTmFtZSlcblx0XHRcdFx0OiBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzRGVidWcobW9kdWxlTmFtZSArICcuJyArIG5hbWUsIG9ialtuYW1lXSwgZXhwb3J0c1tuYW1lXSlcblx0XHRcdDogKG9ialtuYW1lXSA9IGV4cG9ydHNbbmFtZV0pO1xuXHR9XG59XG5cblxuXG5cbi8vIEhFTFBFUlNcblxuXG52YXIgX1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwO1xuXG52YXIgX1ZpcnR1YWxEb21fZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDoge307XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwZW5kQ2hpbGQocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxudmFyIF9WaXJ0dWFsRG9tX2luaXQgPSBGNChmdW5jdGlvbih2aXJ0dWFsTm9kZSwgZmxhZ0RlY29kZXIsIGRlYnVnTWV0YWRhdGEsIGFyZ3MpXG57XG5cdC8vIE5PVEU6IHRoaXMgZnVuY3Rpb24gbmVlZHMgX1BsYXRmb3JtX2V4cG9ydCBhdmFpbGFibGUgdG8gd29ya1xuXG5cdC8qKl9VTlVTRUQvXG5cdHZhciBub2RlID0gYXJnc1snbm9kZSddO1xuXHQvLyovXG5cdC8qKi9cblx0dmFyIG5vZGUgPSBhcmdzICYmIGFyZ3NbJ25vZGUnXSA/IGFyZ3NbJ25vZGUnXSA6IF9EZWJ1Z19jcmFzaCgwKTtcblx0Ly8qL1xuXG5cdG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG5cdFx0X1ZpcnR1YWxEb21fcmVuZGVyKHZpcnR1YWxOb2RlLCBmdW5jdGlvbigpIHt9KSxcblx0XHRub2RlXG5cdCk7XG5cblx0cmV0dXJuIHt9O1xufSk7XG5cblxuXG4vLyBURVhUXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fdGV4dChzdHJpbmcpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMCxcblx0XHRhOiBzdHJpbmdcblx0fTtcbn1cblxuXG5cbi8vIE5PREVcblxuXG52YXIgX1ZpcnR1YWxEb21fbm9kZU5TID0gRjIoZnVuY3Rpb24obmFtZXNwYWNlLCB0YWcpXG57XG5cdHJldHVybiBGMihmdW5jdGlvbihmYWN0TGlzdCwga2lkTGlzdClcblx0e1xuXHRcdGZvciAodmFyIGtpZHMgPSBbXSwgZGVzY2VuZGFudHNDb3VudCA9IDA7IGtpZExpc3QuYjsga2lkTGlzdCA9IGtpZExpc3QuYikgLy8gV0hJTEVfQ09OU1xuXHRcdHtcblx0XHRcdHZhciBraWQgPSBraWRMaXN0LmE7XG5cdFx0XHRkZXNjZW5kYW50c0NvdW50ICs9IChraWQuYiB8fCAwKTtcblx0XHRcdGtpZHMucHVzaChraWQpO1xuXHRcdH1cblx0XHRkZXNjZW5kYW50c0NvdW50ICs9IGtpZHMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdCQ6IDEsXG5cdFx0XHRjOiB0YWcsXG5cdFx0XHRkOiBfVmlydHVhbERvbV9vcmdhbml6ZUZhY3RzKGZhY3RMaXN0KSxcblx0XHRcdGU6IGtpZHMsXG5cdFx0XHRmOiBuYW1lc3BhY2UsXG5cdFx0XHRiOiBkZXNjZW5kYW50c0NvdW50XG5cdFx0fTtcblx0fSk7XG59KTtcblxuXG52YXIgX1ZpcnR1YWxEb21fbm9kZSA9IF9WaXJ0dWFsRG9tX25vZGVOUyh1bmRlZmluZWQpO1xuXG5cblxuLy8gS0VZRUQgTk9ERVxuXG5cbnZhciBfVmlydHVhbERvbV9rZXllZE5vZGVOUyA9IEYyKGZ1bmN0aW9uKG5hbWVzcGFjZSwgdGFnKVxue1xuXHRyZXR1cm4gRjIoZnVuY3Rpb24oZmFjdExpc3QsIGtpZExpc3QpXG5cdHtcblx0XHRmb3IgKHZhciBraWRzID0gW10sIGRlc2NlbmRhbnRzQ291bnQgPSAwOyBraWRMaXN0LmI7IGtpZExpc3QgPSBraWRMaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHR2YXIga2lkID0ga2lkTGlzdC5hO1xuXHRcdFx0ZGVzY2VuZGFudHNDb3VudCArPSAoa2lkLmIuYiB8fCAwKTtcblx0XHRcdGtpZHMucHVzaChraWQpO1xuXHRcdH1cblx0XHRkZXNjZW5kYW50c0NvdW50ICs9IGtpZHMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdCQ6IDIsXG5cdFx0XHRjOiB0YWcsXG5cdFx0XHRkOiBfVmlydHVhbERvbV9vcmdhbml6ZUZhY3RzKGZhY3RMaXN0KSxcblx0XHRcdGU6IGtpZHMsXG5cdFx0XHRmOiBuYW1lc3BhY2UsXG5cdFx0XHRiOiBkZXNjZW5kYW50c0NvdW50XG5cdFx0fTtcblx0fSk7XG59KTtcblxuXG52YXIgX1ZpcnR1YWxEb21fa2V5ZWROb2RlID0gX1ZpcnR1YWxEb21fa2V5ZWROb2RlTlModW5kZWZpbmVkKTtcblxuXG5cbi8vIENVU1RPTVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2N1c3RvbShmYWN0TGlzdCwgbW9kZWwsIHJlbmRlciwgZGlmZilcbntcblx0cmV0dXJuIHtcblx0XHQkOiAzLFxuXHRcdGQ6IF9WaXJ0dWFsRG9tX29yZ2FuaXplRmFjdHMoZmFjdExpc3QpLFxuXHRcdGc6IG1vZGVsLFxuXHRcdGg6IHJlbmRlcixcblx0XHRpOiBkaWZmXG5cdH07XG59XG5cblxuXG4vLyBNQVBcblxuXG52YXIgX1ZpcnR1YWxEb21fbWFwID0gRjIoZnVuY3Rpb24odGFnZ2VyLCBub2RlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDQsXG5cdFx0ajogdGFnZ2VyLFxuXHRcdGs6IG5vZGUsXG5cdFx0YjogMSArIChub2RlLmIgfHwgMClcblx0fTtcbn0pO1xuXG5cblxuLy8gTEFaWVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3RodW5rKHJlZnMsIHRodW5rKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDUsXG5cdFx0bDogcmVmcyxcblx0XHRtOiB0aHVuayxcblx0XHRrOiB1bmRlZmluZWRcblx0fTtcbn1cblxudmFyIF9WaXJ0dWFsRG9tX2xhenkgPSBGMihmdW5jdGlvbihmdW5jLCBhKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGFdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZnVuYyhhKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenkyID0gRjMoZnVuY3Rpb24oZnVuYywgYSwgYilcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEEyKGZ1bmMsIGEsIGIpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTMgPSBGNChmdW5jdGlvbihmdW5jLCBhLCBiLCBjKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGNdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTMoZnVuYywgYSwgYiwgYyk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5NCA9IEY1KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZF0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBNChmdW5jLCBhLCBiLCBjLCBkKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenk1ID0gRjYoZnVuY3Rpb24oZnVuYywgYSwgYiwgYywgZCwgZSlcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjLCBkLCBlXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEE1KGZ1bmMsIGEsIGIsIGMsIGQsIGUpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTYgPSBGNyhmdW5jdGlvbihmdW5jLCBhLCBiLCBjLCBkLCBlLCBmKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGMsIGQsIGUsIGZdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTYoZnVuYywgYSwgYiwgYywgZCwgZSwgZik7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5NyA9IEY4KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGcpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZ10sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBNyhmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenk4ID0gRjkoZnVuY3Rpb24oZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZywgaClcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEE4KGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gRkFDVFNcblxuXG52YXIgX1ZpcnR1YWxEb21fb24gPSBGMihmdW5jdGlvbihrZXksIGhhbmRsZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogJ2EwJyxcblx0XHRuOiBrZXksXG5cdFx0bzogaGFuZGxlclxuXHR9O1xufSk7XG52YXIgX1ZpcnR1YWxEb21fc3R5bGUgPSBGMihmdW5jdGlvbihrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMScsXG5cdFx0bjoga2V5LFxuXHRcdG86IHZhbHVlXG5cdH07XG59KTtcbnZhciBfVmlydHVhbERvbV9wcm9wZXJ0eSA9IEYyKGZ1bmN0aW9uKGtleSwgdmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0JDogJ2EyJyxcblx0XHRuOiBrZXksXG5cdFx0bzogdmFsdWVcblx0fTtcbn0pO1xudmFyIF9WaXJ0dWFsRG9tX2F0dHJpYnV0ZSA9IEYyKGZ1bmN0aW9uKGtleSwgdmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0JDogJ2EzJyxcblx0XHRuOiBrZXksXG5cdFx0bzogdmFsdWVcblx0fTtcbn0pO1xudmFyIF9WaXJ0dWFsRG9tX2F0dHJpYnV0ZU5TID0gRjMoZnVuY3Rpb24obmFtZXNwYWNlLCBrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhNCcsXG5cdFx0bjoga2V5LFxuXHRcdG86IHsgZjogbmFtZXNwYWNlLCBvOiB2YWx1ZSB9XG5cdH07XG59KTtcblxuXG5cbi8vIFhTUyBBVFRBQ0sgVkVDVE9SIENIRUNLU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vU2NyaXB0KHRhZylcbntcblx0cmV0dXJuIHRhZyA9PSAnc2NyaXB0JyA/ICdwJyA6IHRhZztcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbm9Pbk9yRm9ybUFjdGlvbihrZXkpXG57XG5cdHJldHVybiAvXihvbnxmb3JtQWN0aW9uJCkvaS50ZXN0KGtleSkgPyAnZGF0YS0nICsga2V5IDoga2V5O1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9ub0lubmVySHRtbE9yRm9ybUFjdGlvbihrZXkpXG57XG5cdHJldHVybiBrZXkgPT0gJ2lubmVySFRNTCcgfHwga2V5ID09ICdmb3JtQWN0aW9uJyA/ICdkYXRhLScgKyBrZXkgOiBrZXk7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdFVyaV9VTlVTRUQodmFsdWUpXG57XG5cdHJldHVybiAvXmphdmFzY3JpcHQ6L2kudGVzdCh2YWx1ZS5yZXBsYWNlKC9cXHMvZywnJykpID8gJycgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbm9KYXZhU2NyaXB0VXJpKHZhbHVlKVxue1xuXHRyZXR1cm4gL15qYXZhc2NyaXB0Oi9pLnRlc3QodmFsdWUucmVwbGFjZSgvXFxzL2csJycpKVxuXHRcdD8gJ2phdmFzY3JpcHQ6YWxlcnQoXCJUaGlzIGlzIGFuIFhTUyB2ZWN0b3IuIFBsZWFzZSB1c2UgcG9ydHMgb3Igd2ViIGNvbXBvbmVudHMgaW5zdGVhZC5cIiknXG5cdFx0OiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbm9KYXZhU2NyaXB0T3JIdG1sVXJpX1VOVVNFRCh2YWx1ZSlcbntcblx0cmV0dXJuIC9eXFxzKihqYXZhc2NyaXB0OnxkYXRhOnRleHRcXC9odG1sKS9pLnRlc3QodmFsdWUpID8gJycgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbm9KYXZhU2NyaXB0T3JIdG1sVXJpKHZhbHVlKVxue1xuXHRyZXR1cm4gL15cXHMqKGphdmFzY3JpcHQ6fGRhdGE6dGV4dFxcL2h0bWwpL2kudGVzdCh2YWx1ZSlcblx0XHQ/ICdqYXZhc2NyaXB0OmFsZXJ0KFwiVGhpcyBpcyBhbiBYU1MgdmVjdG9yLiBQbGVhc2UgdXNlIHBvcnRzIG9yIHdlYiBjb21wb25lbnRzIGluc3RlYWQuXCIpJ1xuXHRcdDogdmFsdWU7XG59XG5cblxuXG4vLyBNQVAgRkFDVFNcblxuXG52YXIgX1ZpcnR1YWxEb21fbWFwQXR0cmlidXRlID0gRjIoZnVuY3Rpb24oZnVuYywgYXR0cilcbntcblx0cmV0dXJuIChhdHRyLiQgPT09ICdhMCcpXG5cdFx0PyBBMihfVmlydHVhbERvbV9vbiwgYXR0ci5uLCBfVmlydHVhbERvbV9tYXBIYW5kbGVyKGZ1bmMsIGF0dHIubykpXG5cdFx0OiBhdHRyO1xufSk7XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX21hcEhhbmRsZXIoZnVuYywgaGFuZGxlcilcbntcblx0dmFyIHRhZyA9IGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRvSGFuZGxlckludChoYW5kbGVyKTtcblxuXHQvLyAwID0gTm9ybWFsXG5cdC8vIDEgPSBNYXlTdG9wUHJvcGFnYXRpb25cblx0Ly8gMiA9IE1heVByZXZlbnREZWZhdWx0XG5cdC8vIDMgPSBDdXN0b21cblxuXHRyZXR1cm4ge1xuXHRcdCQ6IGhhbmRsZXIuJCxcblx0XHRhOlxuXHRcdFx0IXRhZ1xuXHRcdFx0XHQ/IEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcCwgZnVuYywgaGFuZGxlci5hKVxuXHRcdFx0XHQ6XG5cdFx0XHRBMyhlbG0kanNvbiRKc29uJERlY29kZSRtYXAyLFxuXHRcdFx0XHR0YWcgPCAzXG5cdFx0XHRcdFx0PyBfVmlydHVhbERvbV9tYXBFdmVudFR1cGxlXG5cdFx0XHRcdFx0OiBfVmlydHVhbERvbV9tYXBFdmVudFJlY29yZCxcblx0XHRcdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkc3VjY2VlZChmdW5jKSxcblx0XHRcdFx0aGFuZGxlci5hXG5cdFx0XHQpXG5cdH07XG59XG5cbnZhciBfVmlydHVhbERvbV9tYXBFdmVudFR1cGxlID0gRjIoZnVuY3Rpb24oZnVuYywgdHVwbGUpXG57XG5cdHJldHVybiBfVXRpbHNfVHVwbGUyKGZ1bmModHVwbGUuYSksIHR1cGxlLmIpO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9tYXBFdmVudFJlY29yZCA9IEYyKGZ1bmN0aW9uKGZ1bmMsIHJlY29yZClcbntcblx0cmV0dXJuIHtcblx0XHRtZXNzYWdlOiBmdW5jKHJlY29yZC5tZXNzYWdlKSxcblx0XHRzdG9wUHJvcGFnYXRpb246IHJlY29yZC5zdG9wUHJvcGFnYXRpb24sXG5cdFx0cHJldmVudERlZmF1bHQ6IHJlY29yZC5wcmV2ZW50RGVmYXVsdFxuXHR9XG59KTtcblxuXG5cbi8vIE9SR0FOSVpFIEZBQ1RTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fb3JnYW5pemVGYWN0cyhmYWN0TGlzdClcbntcblx0Zm9yICh2YXIgZmFjdHMgPSB7fTsgZmFjdExpc3QuYjsgZmFjdExpc3QgPSBmYWN0TGlzdC5iKSAvLyBXSElMRV9DT05TXG5cdHtcblx0XHR2YXIgZW50cnkgPSBmYWN0TGlzdC5hO1xuXG5cdFx0dmFyIHRhZyA9IGVudHJ5LiQ7XG5cdFx0dmFyIGtleSA9IGVudHJ5Lm47XG5cdFx0dmFyIHZhbHVlID0gZW50cnkubztcblxuXHRcdGlmICh0YWcgPT09ICdhMicpXG5cdFx0e1xuXHRcdFx0KGtleSA9PT0gJ2NsYXNzTmFtZScpXG5cdFx0XHRcdD8gX1ZpcnR1YWxEb21fYWRkQ2xhc3MoZmFjdHMsIGtleSwgX0pzb25fdW53cmFwKHZhbHVlKSlcblx0XHRcdFx0OiBmYWN0c1trZXldID0gX0pzb25fdW53cmFwKHZhbHVlKTtcblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIHN1YkZhY3RzID0gZmFjdHNbdGFnXSB8fCAoZmFjdHNbdGFnXSA9IHt9KTtcblx0XHQodGFnID09PSAnYTMnICYmIGtleSA9PT0gJ2NsYXNzJylcblx0XHRcdD8gX1ZpcnR1YWxEb21fYWRkQ2xhc3Moc3ViRmFjdHMsIGtleSwgdmFsdWUpXG5cdFx0XHQ6IHN1YkZhY3RzW2tleV0gPSB2YWx1ZTtcblx0fVxuXG5cdHJldHVybiBmYWN0cztcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYWRkQ2xhc3Mob2JqZWN0LCBrZXksIG5ld0NsYXNzKVxue1xuXHR2YXIgY2xhc3NlcyA9IG9iamVjdFtrZXldO1xuXHRvYmplY3Rba2V5XSA9IGNsYXNzZXMgPyBjbGFzc2VzICsgJyAnICsgbmV3Q2xhc3MgOiBuZXdDbGFzcztcbn1cblxuXG5cbi8vIFJFTkRFUlxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3JlbmRlcih2Tm9kZSwgZXZlbnROb2RlKVxue1xuXHR2YXIgdGFnID0gdk5vZGUuJDtcblxuXHRpZiAodGFnID09PSA1KVxuXHR7XG5cdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX3JlbmRlcih2Tm9kZS5rIHx8ICh2Tm9kZS5rID0gdk5vZGUubSgpKSwgZXZlbnROb2RlKTtcblx0fVxuXG5cdGlmICh0YWcgPT09IDApXG5cdHtcblx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fZG9jLmNyZWF0ZVRleHROb2RlKHZOb2RlLmEpO1xuXHR9XG5cblx0aWYgKHRhZyA9PT0gNClcblx0e1xuXHRcdHZhciBzdWJOb2RlID0gdk5vZGUuaztcblx0XHR2YXIgdGFnZ2VyID0gdk5vZGUuajtcblxuXHRcdHdoaWxlIChzdWJOb2RlLiQgPT09IDQpXG5cdFx0e1xuXHRcdFx0dHlwZW9mIHRhZ2dlciAhPT0gJ29iamVjdCdcblx0XHRcdFx0PyB0YWdnZXIgPSBbdGFnZ2VyLCBzdWJOb2RlLmpdXG5cdFx0XHRcdDogdGFnZ2VyLnB1c2goc3ViTm9kZS5qKTtcblxuXHRcdFx0c3ViTm9kZSA9IHN1Yk5vZGUuaztcblx0XHR9XG5cblx0XHR2YXIgc3ViRXZlbnRSb290ID0geyBqOiB0YWdnZXIsIHA6IGV2ZW50Tm9kZSB9O1xuXHRcdHZhciBkb21Ob2RlID0gX1ZpcnR1YWxEb21fcmVuZGVyKHN1Yk5vZGUsIHN1YkV2ZW50Um9vdCk7XG5cdFx0ZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYgPSBzdWJFdmVudFJvb3Q7XG5cdFx0cmV0dXJuIGRvbU5vZGU7XG5cdH1cblxuXHRpZiAodGFnID09PSAzKVxuXHR7XG5cdFx0dmFyIGRvbU5vZGUgPSB2Tm9kZS5oKHZOb2RlLmcpO1xuXHRcdF9WaXJ0dWFsRG9tX2FwcGx5RmFjdHMoZG9tTm9kZSwgZXZlbnROb2RlLCB2Tm9kZS5kKTtcblx0XHRyZXR1cm4gZG9tTm9kZTtcblx0fVxuXG5cdC8vIGF0IHRoaXMgcG9pbnQgYHRhZ2AgbXVzdCBiZSAxIG9yIDJcblxuXHR2YXIgZG9tTm9kZSA9IHZOb2RlLmZcblx0XHQ/IF9WaXJ0dWFsRG9tX2RvYy5jcmVhdGVFbGVtZW50TlModk5vZGUuZiwgdk5vZGUuYylcblx0XHQ6IF9WaXJ0dWFsRG9tX2RvYy5jcmVhdGVFbGVtZW50KHZOb2RlLmMpO1xuXG5cdGlmIChfVmlydHVhbERvbV9kaXZlcnRIcmVmVG9BcHAgJiYgdk5vZGUuYyA9PSAnYScpXG5cdHtcblx0XHRkb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwKGRvbU5vZGUpKTtcblx0fVxuXG5cdF9WaXJ0dWFsRG9tX2FwcGx5RmFjdHMoZG9tTm9kZSwgZXZlbnROb2RlLCB2Tm9kZS5kKTtcblxuXHRmb3IgKHZhciBraWRzID0gdk5vZGUuZSwgaSA9IDA7IGkgPCBraWRzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fYXBwZW5kQ2hpbGQoZG9tTm9kZSwgX1ZpcnR1YWxEb21fcmVuZGVyKHRhZyA9PT0gMSA/IGtpZHNbaV0gOiBraWRzW2ldLmIsIGV2ZW50Tm9kZSkpO1xuXHR9XG5cblx0cmV0dXJuIGRvbU5vZGU7XG59XG5cblxuXG4vLyBBUFBMWSBGQUNUU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5RmFjdHMoZG9tTm9kZSwgZXZlbnROb2RlLCBmYWN0cylcbntcblx0Zm9yICh2YXIga2V5IGluIGZhY3RzKVxuXHR7XG5cdFx0dmFyIHZhbHVlID0gZmFjdHNba2V5XTtcblxuXHRcdGtleSA9PT0gJ2ExJ1xuXHRcdFx0PyBfVmlydHVhbERvbV9hcHBseVN0eWxlcyhkb21Ob2RlLCB2YWx1ZSlcblx0XHRcdDpcblx0XHRrZXkgPT09ICdhMCdcblx0XHRcdD8gX1ZpcnR1YWxEb21fYXBwbHlFdmVudHMoZG9tTm9kZSwgZXZlbnROb2RlLCB2YWx1ZSlcblx0XHRcdDpcblx0XHRrZXkgPT09ICdhMydcblx0XHRcdD8gX1ZpcnR1YWxEb21fYXBwbHlBdHRycyhkb21Ob2RlLCB2YWx1ZSlcblx0XHRcdDpcblx0XHRrZXkgPT09ICdhNCdcblx0XHRcdD8gX1ZpcnR1YWxEb21fYXBwbHlBdHRyc05TKGRvbU5vZGUsIHZhbHVlKVxuXHRcdFx0OlxuXHRcdCgoa2V5ICE9PSAndmFsdWUnICYmIGtleSAhPT0gJ2NoZWNrZWQnKSB8fCBkb21Ob2RlW2tleV0gIT09IHZhbHVlKSAmJiAoZG9tTm9kZVtrZXldID0gdmFsdWUpO1xuXHR9XG59XG5cblxuXG4vLyBBUFBMWSBTVFlMRVNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVN0eWxlcyhkb21Ob2RlLCBzdHlsZXMpXG57XG5cdHZhciBkb21Ob2RlU3R5bGUgPSBkb21Ob2RlLnN0eWxlO1xuXG5cdGZvciAodmFyIGtleSBpbiBzdHlsZXMpXG5cdHtcblx0XHRkb21Ob2RlU3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuXHR9XG59XG5cblxuXG4vLyBBUFBMWSBBVFRSU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5QXR0cnMoZG9tTm9kZSwgYXR0cnMpXG57XG5cdGZvciAodmFyIGtleSBpbiBhdHRycylcblx0e1xuXHRcdHZhciB2YWx1ZSA9IGF0dHJzW2tleV07XG5cdFx0dHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xuXHRcdFx0PyBkb21Ob2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuXHRcdFx0OiBkb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuXHR9XG59XG5cblxuXG4vLyBBUFBMWSBOQU1FU1BBQ0VEIEFUVFJTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlBdHRyc05TKGRvbU5vZGUsIG5zQXR0cnMpXG57XG5cdGZvciAodmFyIGtleSBpbiBuc0F0dHJzKVxuXHR7XG5cdFx0dmFyIHBhaXIgPSBuc0F0dHJzW2tleV07XG5cdFx0dmFyIG5hbWVzcGFjZSA9IHBhaXIuZjtcblx0XHR2YXIgdmFsdWUgPSBwYWlyLm87XG5cblx0XHR0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG5cdFx0XHQ/IGRvbU5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlLCBrZXksIHZhbHVlKVxuXHRcdFx0OiBkb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZSwga2V5KTtcblx0fVxufVxuXG5cblxuLy8gQVBQTFkgRVZFTlRTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlFdmVudHMoZG9tTm9kZSwgZXZlbnROb2RlLCBldmVudHMpXG57XG5cdHZhciBhbGxDYWxsYmFja3MgPSBkb21Ob2RlLmVsbUZzIHx8IChkb21Ob2RlLmVsbUZzID0ge30pO1xuXG5cdGZvciAodmFyIGtleSBpbiBldmVudHMpXG5cdHtcblx0XHR2YXIgbmV3SGFuZGxlciA9IGV2ZW50c1trZXldO1xuXHRcdHZhciBvbGRDYWxsYmFjayA9IGFsbENhbGxiYWNrc1trZXldO1xuXG5cdFx0aWYgKCFuZXdIYW5kbGVyKVxuXHRcdHtcblx0XHRcdGRvbU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIG9sZENhbGxiYWNrKTtcblx0XHRcdGFsbENhbGxiYWNrc1trZXldID0gdW5kZWZpbmVkO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG9sZENhbGxiYWNrKVxuXHRcdHtcblx0XHRcdHZhciBvbGRIYW5kbGVyID0gb2xkQ2FsbGJhY2sucTtcblx0XHRcdGlmIChvbGRIYW5kbGVyLiQgPT09IG5ld0hhbmRsZXIuJClcblx0XHRcdHtcblx0XHRcdFx0b2xkQ2FsbGJhY2sucSA9IG5ld0hhbmRsZXI7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0ZG9tTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGtleSwgb2xkQ2FsbGJhY2spO1xuXHRcdH1cblxuXHRcdG9sZENhbGxiYWNrID0gX1ZpcnR1YWxEb21fbWFrZUNhbGxiYWNrKGV2ZW50Tm9kZSwgbmV3SGFuZGxlcik7XG5cdFx0ZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgb2xkQ2FsbGJhY2ssXG5cdFx0XHRfVmlydHVhbERvbV9wYXNzaXZlU3VwcG9ydGVkXG5cdFx0XHQmJiB7IHBhc3NpdmU6IGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRvSGFuZGxlckludChuZXdIYW5kbGVyKSA8IDIgfVxuXHRcdCk7XG5cdFx0YWxsQ2FsbGJhY2tzW2tleV0gPSBvbGRDYWxsYmFjaztcblx0fVxufVxuXG5cblxuLy8gUEFTU0lWRSBFVkVOVFNcblxuXG52YXIgX1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZDtcblxudHJ5XG57XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0JywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkgeyBfVmlydHVhbERvbV9wYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTsgfVxuXHR9KSk7XG59XG5jYXRjaChlKSB7fVxuXG5cblxuLy8gRVZFTlQgSEFORExFUlNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9tYWtlQ2FsbGJhY2soZXZlbnROb2RlLCBpbml0aWFsSGFuZGxlcilcbntcblx0ZnVuY3Rpb24gY2FsbGJhY2soZXZlbnQpXG5cdHtcblx0XHR2YXIgaGFuZGxlciA9IGNhbGxiYWNrLnE7XG5cdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoaGFuZGxlci5hLCBldmVudCk7XG5cblx0XHRpZiAoIWVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciB0YWcgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0b0hhbmRsZXJJbnQoaGFuZGxlcik7XG5cblx0XHQvLyAwID0gTm9ybWFsXG5cdFx0Ly8gMSA9IE1heVN0b3BQcm9wYWdhdGlvblxuXHRcdC8vIDIgPSBNYXlQcmV2ZW50RGVmYXVsdFxuXHRcdC8vIDMgPSBDdXN0b21cblxuXHRcdHZhciB2YWx1ZSA9IHJlc3VsdC5hO1xuXHRcdHZhciBtZXNzYWdlID0gIXRhZyA/IHZhbHVlIDogdGFnIDwgMyA/IHZhbHVlLmEgOiB2YWx1ZS5tZXNzYWdlO1xuXHRcdHZhciBzdG9wUHJvcGFnYXRpb24gPSB0YWcgPT0gMSA/IHZhbHVlLmIgOiB0YWcgPT0gMyAmJiB2YWx1ZS5zdG9wUHJvcGFnYXRpb247XG5cdFx0dmFyIGN1cnJlbnRFdmVudE5vZGUgPSAoXG5cdFx0XHRzdG9wUHJvcGFnYXRpb24gJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCksXG5cdFx0XHQodGFnID09IDIgPyB2YWx1ZS5iIDogdGFnID09IDMgJiYgdmFsdWUucHJldmVudERlZmF1bHQpICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCksXG5cdFx0XHRldmVudE5vZGVcblx0XHQpO1xuXHRcdHZhciB0YWdnZXI7XG5cdFx0dmFyIGk7XG5cdFx0d2hpbGUgKHRhZ2dlciA9IGN1cnJlbnRFdmVudE5vZGUuailcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIHRhZ2dlciA9PSAnZnVuY3Rpb24nKVxuXHRcdFx0e1xuXHRcdFx0XHRtZXNzYWdlID0gdGFnZ2VyKG1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKHZhciBpID0gdGFnZ2VyLmxlbmd0aDsgaS0tOyApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRtZXNzYWdlID0gdGFnZ2VyW2ldKG1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjdXJyZW50RXZlbnROb2RlID0gY3VycmVudEV2ZW50Tm9kZS5wO1xuXHRcdH1cblx0XHRjdXJyZW50RXZlbnROb2RlKG1lc3NhZ2UsIHN0b3BQcm9wYWdhdGlvbik7IC8vIHN0b3BQcm9wYWdhdGlvbiBpbXBsaWVzIGlzU3luY1xuXHR9XG5cblx0Y2FsbGJhY2sucSA9IGluaXRpYWxIYW5kbGVyO1xuXG5cdHJldHVybiBjYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZXF1YWxFdmVudHMoeCwgeSlcbntcblx0cmV0dXJuIHguJCA9PSB5LiQgJiYgX0pzb25fZXF1YWxpdHkoeC5hLCB5LmEpO1xufVxuXG5cblxuLy8gRElGRlxuXG5cbi8vIFRPRE86IFNob3VsZCB3ZSBkbyBwYXRjaGVzIGxpa2UgaW4gaU9TP1xuLy9cbi8vIHR5cGUgUGF0Y2hcbi8vICAgPSBBdCBJbnQgUGF0Y2hcbi8vICAgfCBCYXRjaCAoTGlzdCBQYXRjaClcbi8vICAgfCBDaGFuZ2UgLi4uXG4vL1xuLy8gSG93IGNvdWxkIGl0IG5vdCBiZSBiZXR0ZXI/XG4vL1xuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZih4LCB5KVxue1xuXHR2YXIgcGF0Y2hlcyA9IFtdO1xuXHRfVmlydHVhbERvbV9kaWZmSGVscCh4LCB5LCBwYXRjaGVzLCAwKTtcblx0cmV0dXJuIHBhdGNoZXM7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIHR5cGUsIGluZGV4LCBkYXRhKVxue1xuXHR2YXIgcGF0Y2ggPSB7XG5cdFx0JDogdHlwZSxcblx0XHRyOiBpbmRleCxcblx0XHRzOiBkYXRhLFxuXHRcdHQ6IHVuZGVmaW5lZCxcblx0XHR1OiB1bmRlZmluZWRcblx0fTtcblx0cGF0Y2hlcy5wdXNoKHBhdGNoKTtcblx0cmV0dXJuIHBhdGNoO1xufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHgsIHksIHBhdGNoZXMsIGluZGV4KVxue1xuXHRpZiAoeCA9PT0geSlcblx0e1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciB4VHlwZSA9IHguJDtcblx0dmFyIHlUeXBlID0geS4kO1xuXG5cdC8vIEJhaWwgaWYgeW91IHJ1biBpbnRvIGRpZmZlcmVudCB0eXBlcyBvZiBub2Rlcy4gSW1wbGllcyB0aGF0IHRoZVxuXHQvLyBzdHJ1Y3R1cmUgaGFzIGNoYW5nZWQgc2lnbmlmaWNhbnRseSBhbmQgaXQncyBub3Qgd29ydGggYSBkaWZmLlxuXHRpZiAoeFR5cGUgIT09IHlUeXBlKVxuXHR7XG5cdFx0aWYgKHhUeXBlID09PSAxICYmIHlUeXBlID09PSAyKVxuXHRcdHtcblx0XHRcdHkgPSBfVmlydHVhbERvbV9kZWtleSh5KTtcblx0XHRcdHlUeXBlID0gMTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAwLCBpbmRleCwgeSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm93IHdlIGtub3cgdGhhdCBib3RoIG5vZGVzIGFyZSB0aGUgc2FtZSAkLlxuXHRzd2l0Y2ggKHlUeXBlKVxuXHR7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0dmFyIHhSZWZzID0geC5sO1xuXHRcdFx0dmFyIHlSZWZzID0geS5sO1xuXHRcdFx0dmFyIGkgPSB4UmVmcy5sZW5ndGg7XG5cdFx0XHR2YXIgc2FtZSA9IGkgPT09IHlSZWZzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChzYW1lICYmIGktLSlcblx0XHRcdHtcblx0XHRcdFx0c2FtZSA9IHhSZWZzW2ldID09PSB5UmVmc1tpXTtcblx0XHRcdH1cblx0XHRcdGlmIChzYW1lKVxuXHRcdFx0e1xuXHRcdFx0XHR5LmsgPSB4Lms7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHkuayA9IHkubSgpO1xuXHRcdFx0dmFyIHN1YlBhdGNoZXMgPSBbXTtcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHguaywgeS5rLCBzdWJQYXRjaGVzLCAwKTtcblx0XHRcdHN1YlBhdGNoZXMubGVuZ3RoID4gMCAmJiBfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMSwgaW5kZXgsIHN1YlBhdGNoZXMpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSA0OlxuXHRcdFx0Ly8gZ2F0aGVyIG5lc3RlZCB0YWdnZXJzXG5cdFx0XHR2YXIgeFRhZ2dlcnMgPSB4Lmo7XG5cdFx0XHR2YXIgeVRhZ2dlcnMgPSB5Lmo7XG5cdFx0XHR2YXIgbmVzdGluZyA9IGZhbHNlO1xuXG5cdFx0XHR2YXIgeFN1Yk5vZGUgPSB4Lms7XG5cdFx0XHR3aGlsZSAoeFN1Yk5vZGUuJCA9PT0gNClcblx0XHRcdHtcblx0XHRcdFx0bmVzdGluZyA9IHRydWU7XG5cblx0XHRcdFx0dHlwZW9mIHhUYWdnZXJzICE9PSAnb2JqZWN0J1xuXHRcdFx0XHRcdD8geFRhZ2dlcnMgPSBbeFRhZ2dlcnMsIHhTdWJOb2RlLmpdXG5cdFx0XHRcdFx0OiB4VGFnZ2Vycy5wdXNoKHhTdWJOb2RlLmopO1xuXG5cdFx0XHRcdHhTdWJOb2RlID0geFN1Yk5vZGUuaztcblx0XHRcdH1cblxuXHRcdFx0dmFyIHlTdWJOb2RlID0geS5rO1xuXHRcdFx0d2hpbGUgKHlTdWJOb2RlLiQgPT09IDQpXG5cdFx0XHR7XG5cdFx0XHRcdG5lc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdHR5cGVvZiB5VGFnZ2VycyAhPT0gJ29iamVjdCdcblx0XHRcdFx0XHQ/IHlUYWdnZXJzID0gW3lUYWdnZXJzLCB5U3ViTm9kZS5qXVxuXHRcdFx0XHRcdDogeVRhZ2dlcnMucHVzaCh5U3ViTm9kZS5qKTtcblxuXHRcdFx0XHR5U3ViTm9kZSA9IHlTdWJOb2RlLms7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEp1c3QgYmFpbCBpZiBkaWZmZXJlbnQgbnVtYmVycyBvZiB0YWdnZXJzLiBUaGlzIGltcGxpZXMgdGhlXG5cdFx0XHQvLyBzdHJ1Y3R1cmUgb2YgdGhlIHZpcnR1YWwgRE9NIGhhcyBjaGFuZ2VkLlxuXHRcdFx0aWYgKG5lc3RpbmcgJiYgeFRhZ2dlcnMubGVuZ3RoICE9PSB5VGFnZ2Vycy5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAwLCBpbmRleCwgeSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2hlY2sgaWYgdGFnZ2VycyBhcmUgXCJ0aGUgc2FtZVwiXG5cdFx0XHRpZiAobmVzdGluZyA/ICFfVmlydHVhbERvbV9wYWlyd2lzZVJlZkVxdWFsKHhUYWdnZXJzLCB5VGFnZ2VycykgOiB4VGFnZ2VycyAhPT0geVRhZ2dlcnMpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAyLCBpbmRleCwgeVRhZ2dlcnMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBkaWZmIGV2ZXJ5dGhpbmcgYmVsb3cgdGhlIHRhZ2dlcnNcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhTdWJOb2RlLCB5U3ViTm9kZSwgcGF0Y2hlcywgaW5kZXggKyAxKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMDpcblx0XHRcdGlmICh4LmEgIT09IHkuYSlcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDMsIGluZGV4LCB5LmEpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAxOlxuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZk5vZGVzKHgsIHksIHBhdGNoZXMsIGluZGV4LCBfVmlydHVhbERvbV9kaWZmS2lkcyk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlIDI6XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmTm9kZXMoeCwgeSwgcGF0Y2hlcywgaW5kZXgsIF9WaXJ0dWFsRG9tX2RpZmZLZXllZEtpZHMpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdFx0aWYgKHguaCAhPT0geS5oKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMCwgaW5kZXgsIHkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBmYWN0c0RpZmYgPSBfVmlydHVhbERvbV9kaWZmRmFjdHMoeC5kLCB5LmQpO1xuXHRcdFx0ZmFjdHNEaWZmICYmIF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCA0LCBpbmRleCwgZmFjdHNEaWZmKTtcblxuXHRcdFx0dmFyIHBhdGNoID0geS5pKHguZywgeS5nKTtcblx0XHRcdHBhdGNoICYmIF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCA1LCBpbmRleCwgcGF0Y2gpO1xuXG5cdFx0XHRyZXR1cm47XG5cdH1cbn1cblxuLy8gYXNzdW1lcyB0aGUgaW5jb21pbmcgYXJyYXlzIGFyZSB0aGUgc2FtZSBsZW5ndGhcbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3BhaXJ3aXNlUmVmRXF1YWwoYXMsIGJzKVxue1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0aWYgKGFzW2ldICE9PSBic1tpXSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2RpZmZOb2Rlcyh4LCB5LCBwYXRjaGVzLCBpbmRleCwgZGlmZktpZHMpXG57XG5cdC8vIEJhaWwgaWYgb2J2aW91cyBpbmRpY2F0b3JzIGhhdmUgY2hhbmdlZC4gSW1wbGllcyBtb3JlIHNlcmlvdXNcblx0Ly8gc3RydWN0dXJhbCBjaGFuZ2VzIHN1Y2ggdGhhdCBpdCdzIG5vdCB3b3J0aCBpdCB0byBkaWZmLlxuXHRpZiAoeC5jICE9PSB5LmMgfHwgeC5mICE9PSB5LmYpXG5cdHtcblx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMCwgaW5kZXgsIHkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBmYWN0c0RpZmYgPSBfVmlydHVhbERvbV9kaWZmRmFjdHMoeC5kLCB5LmQpO1xuXHRmYWN0c0RpZmYgJiYgX1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDQsIGluZGV4LCBmYWN0c0RpZmYpO1xuXG5cdGRpZmZLaWRzKHgsIHksIHBhdGNoZXMsIGluZGV4KTtcbn1cblxuXG5cbi8vIERJRkYgRkFDVFNcblxuXG4vLyBUT0RPIEluc3RlYWQgb2YgY3JlYXRpbmcgYSBuZXcgZGlmZiBvYmplY3QsIGl0J3MgcG9zc2libGUgdG8ganVzdCB0ZXN0IGlmXG4vLyB0aGVyZSAqaXMqIGEgZGlmZi4gRHVyaW5nIHRoZSBhY3R1YWwgcGF0Y2gsIGRvIHRoZSBkaWZmIGFnYWluIGFuZCBtYWtlIHRoZVxuLy8gbW9kaWZpY2F0aW9ucyBkaXJlY3RseS4gVGhpcyB3YXksIHRoZXJlJ3Mgbm8gbmV3IGFsbG9jYXRpb25zLiBXb3J0aCBpdD9cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2RpZmZGYWN0cyh4LCB5LCBjYXRlZ29yeSlcbntcblx0dmFyIGRpZmY7XG5cblx0Ly8gbG9vayBmb3IgY2hhbmdlcyBhbmQgcmVtb3ZhbHNcblx0Zm9yICh2YXIgeEtleSBpbiB4KVxuXHR7XG5cdFx0aWYgKHhLZXkgPT09ICdhMScgfHwgeEtleSA9PT0gJ2EwJyB8fCB4S2V5ID09PSAnYTMnIHx8IHhLZXkgPT09ICdhNCcpXG5cdFx0e1xuXHRcdFx0dmFyIHN1YkRpZmYgPSBfVmlydHVhbERvbV9kaWZmRmFjdHMoeFt4S2V5XSwgeVt4S2V5XSB8fCB7fSwgeEtleSk7XG5cdFx0XHRpZiAoc3ViRGlmZilcblx0XHRcdHtcblx0XHRcdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0XHRcdGRpZmZbeEtleV0gPSBzdWJEaWZmO1xuXHRcdFx0fVxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gcmVtb3ZlIGlmIG5vdCBpbiB0aGUgbmV3IGZhY3RzXG5cdFx0aWYgKCEoeEtleSBpbiB5KSlcblx0XHR7XG5cdFx0XHRkaWZmID0gZGlmZiB8fCB7fTtcblx0XHRcdGRpZmZbeEtleV0gPVxuXHRcdFx0XHQhY2F0ZWdvcnlcblx0XHRcdFx0XHQ/ICh0eXBlb2YgeFt4S2V5XSA9PT0gJ3N0cmluZycgPyAnJyA6IG51bGwpXG5cdFx0XHRcdFx0OlxuXHRcdFx0XHQoY2F0ZWdvcnkgPT09ICdhMScpXG5cdFx0XHRcdFx0PyAnJ1xuXHRcdFx0XHRcdDpcblx0XHRcdFx0KGNhdGVnb3J5ID09PSAnYTAnIHx8IGNhdGVnb3J5ID09PSAnYTMnKVxuXHRcdFx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHRcdFx0OlxuXHRcdFx0XHR7IGY6IHhbeEtleV0uZiwgbzogdW5kZWZpbmVkIH07XG5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZhciB4VmFsdWUgPSB4W3hLZXldO1xuXHRcdHZhciB5VmFsdWUgPSB5W3hLZXldO1xuXG5cdFx0Ly8gcmVmZXJlbmNlIGVxdWFsLCBzbyBkb24ndCB3b3JyeSBhYm91dCBpdFxuXHRcdGlmICh4VmFsdWUgPT09IHlWYWx1ZSAmJiB4S2V5ICE9PSAndmFsdWUnICYmIHhLZXkgIT09ICdjaGVja2VkJ1xuXHRcdFx0fHwgY2F0ZWdvcnkgPT09ICdhMCcgJiYgX1ZpcnR1YWxEb21fZXF1YWxFdmVudHMoeFZhbHVlLCB5VmFsdWUpKVxuXHRcdHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdGRpZmZbeEtleV0gPSB5VmFsdWU7XG5cdH1cblxuXHQvLyBhZGQgbmV3IHN0dWZmXG5cdGZvciAodmFyIHlLZXkgaW4geSlcblx0e1xuXHRcdGlmICghKHlLZXkgaW4geCkpXG5cdFx0e1xuXHRcdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0XHRkaWZmW3lLZXldID0geVt5S2V5XTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZGlmZjtcbn1cblxuXG5cbi8vIERJRkYgS0lEU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2RpZmZLaWRzKHhQYXJlbnQsIHlQYXJlbnQsIHBhdGNoZXMsIGluZGV4KVxue1xuXHR2YXIgeEtpZHMgPSB4UGFyZW50LmU7XG5cdHZhciB5S2lkcyA9IHlQYXJlbnQuZTtcblxuXHR2YXIgeExlbiA9IHhLaWRzLmxlbmd0aDtcblx0dmFyIHlMZW4gPSB5S2lkcy5sZW5ndGg7XG5cblx0Ly8gRklHVVJFIE9VVCBJRiBUSEVSRSBBUkUgSU5TRVJUUyBPUiBSRU1PVkFMU1xuXG5cdGlmICh4TGVuID4geUxlbilcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCA2LCBpbmRleCwge1xuXHRcdFx0djogeUxlbixcblx0XHRcdGk6IHhMZW4gLSB5TGVuXG5cdFx0fSk7XG5cdH1cblx0ZWxzZSBpZiAoeExlbiA8IHlMZW4pXG5cdHtcblx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgNywgaW5kZXgsIHtcblx0XHRcdHY6IHhMZW4sXG5cdFx0XHRlOiB5S2lkc1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gUEFJUldJU0UgRElGRiBFVkVSWVRISU5HIEVMU0VcblxuXHRmb3IgKHZhciBtaW5MZW4gPSB4TGVuIDwgeUxlbiA/IHhMZW4gOiB5TGVuLCBpID0gMDsgaSA8IG1pbkxlbjsgaSsrKVxuXHR7XG5cdFx0dmFyIHhLaWQgPSB4S2lkc1tpXTtcblx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4S2lkLCB5S2lkc1tpXSwgcGF0Y2hlcywgKytpbmRleCk7XG5cdFx0aW5kZXggKz0geEtpZC5iIHx8IDA7XG5cdH1cbn1cblxuXG5cbi8vIEtFWUVEIERJRkZcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmS2V5ZWRLaWRzKHhQYXJlbnQsIHlQYXJlbnQsIHBhdGNoZXMsIHJvb3RJbmRleClcbntcblx0dmFyIGxvY2FsUGF0Y2hlcyA9IFtdO1xuXG5cdHZhciBjaGFuZ2VzID0ge307IC8vIERpY3QgU3RyaW5nIEVudHJ5XG5cdHZhciBpbnNlcnRzID0gW107IC8vIEFycmF5IHsgaW5kZXggOiBJbnQsIGVudHJ5IDogRW50cnkgfVxuXHQvLyB0eXBlIEVudHJ5ID0geyB0YWcgOiBTdHJpbmcsIHZub2RlIDogVk5vZGUsIGluZGV4IDogSW50LCBkYXRhIDogXyB9XG5cblx0dmFyIHhLaWRzID0geFBhcmVudC5lO1xuXHR2YXIgeUtpZHMgPSB5UGFyZW50LmU7XG5cdHZhciB4TGVuID0geEtpZHMubGVuZ3RoO1xuXHR2YXIgeUxlbiA9IHlLaWRzLmxlbmd0aDtcblx0dmFyIHhJbmRleCA9IDA7XG5cdHZhciB5SW5kZXggPSAwO1xuXG5cdHZhciBpbmRleCA9IHJvb3RJbmRleDtcblxuXHR3aGlsZSAoeEluZGV4IDwgeExlbiAmJiB5SW5kZXggPCB5TGVuKVxuXHR7XG5cdFx0dmFyIHggPSB4S2lkc1t4SW5kZXhdO1xuXHRcdHZhciB5ID0geUtpZHNbeUluZGV4XTtcblxuXHRcdHZhciB4S2V5ID0geC5hO1xuXHRcdHZhciB5S2V5ID0geS5hO1xuXHRcdHZhciB4Tm9kZSA9IHguYjtcblx0XHR2YXIgeU5vZGUgPSB5LmI7XG5cblx0XHR2YXIgbmV3TWF0Y2ggPSB1bmRlZmluZWQ7XG5cdFx0dmFyIG9sZE1hdGNoID0gdW5kZWZpbmVkO1xuXG5cdFx0Ly8gY2hlY2sgaWYga2V5cyBtYXRjaFxuXG5cdFx0aWYgKHhLZXkgPT09IHlLZXkpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhOb2RlLCB5Tm9kZSwgbG9jYWxQYXRjaGVzLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSB4Tm9kZS5iIHx8IDA7XG5cblx0XHRcdHhJbmRleCsrO1xuXHRcdFx0eUluZGV4Kys7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBsb29rIGFoZWFkIDEgdG8gZGV0ZWN0IGluc2VydGlvbnMgYW5kIHJlbW92YWxzLlxuXG5cdFx0dmFyIHhOZXh0ID0geEtpZHNbeEluZGV4ICsgMV07XG5cdFx0dmFyIHlOZXh0ID0geUtpZHNbeUluZGV4ICsgMV07XG5cblx0XHRpZiAoeE5leHQpXG5cdFx0e1xuXHRcdFx0dmFyIHhOZXh0S2V5ID0geE5leHQuYTtcblx0XHRcdHZhciB4TmV4dE5vZGUgPSB4TmV4dC5iO1xuXHRcdFx0b2xkTWF0Y2ggPSB5S2V5ID09PSB4TmV4dEtleTtcblx0XHR9XG5cblx0XHRpZiAoeU5leHQpXG5cdFx0e1xuXHRcdFx0dmFyIHlOZXh0S2V5ID0geU5leHQuYTtcblx0XHRcdHZhciB5TmV4dE5vZGUgPSB5TmV4dC5iO1xuXHRcdFx0bmV3TWF0Y2ggPSB4S2V5ID09PSB5TmV4dEtleTtcblx0XHR9XG5cblxuXHRcdC8vIHN3YXAgeCBhbmQgeVxuXHRcdGlmIChuZXdNYXRjaCAmJiBvbGRNYXRjaClcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeE5vZGUsIHlOZXh0Tm9kZSwgbG9jYWxQYXRjaGVzLCBpbmRleCk7XG5cdFx0XHRfVmlydHVhbERvbV9pbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeEtleSwgeU5vZGUsIHlJbmRleCwgaW5zZXJ0cyk7XG5cdFx0XHRpbmRleCArPSB4Tm9kZS5iIHx8IDA7XG5cblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeEtleSwgeE5leHROb2RlLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSB4TmV4dE5vZGUuYiB8fCAwO1xuXG5cdFx0XHR4SW5kZXggKz0gMjtcblx0XHRcdHlJbmRleCArPSAyO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gaW5zZXJ0IHlcblx0XHRpZiAobmV3TWF0Y2gpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB5S2V5LCB5Tm9kZSwgeUluZGV4LCBpbnNlcnRzKTtcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhOb2RlLCB5TmV4dE5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXG5cdFx0XHR4SW5kZXggKz0gMTtcblx0XHRcdHlJbmRleCArPSAyO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gcmVtb3ZlIHhcblx0XHRpZiAob2xkTWF0Y2gpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB4S2V5LCB4Tm9kZSwgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeE5leHROb2RlLCB5Tm9kZSwgbG9jYWxQYXRjaGVzLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSB4TmV4dE5vZGUuYiB8fCAwO1xuXG5cdFx0XHR4SW5kZXggKz0gMjtcblx0XHRcdHlJbmRleCArPSAxO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gcmVtb3ZlIHgsIGluc2VydCB5XG5cdFx0aWYgKHhOZXh0ICYmIHhOZXh0S2V5ID09PSB5TmV4dEtleSlcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHhLZXksIHhOb2RlLCBpbmRleCk7XG5cdFx0XHRfVmlydHVhbERvbV9pbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeUtleSwgeU5vZGUsIHlJbmRleCwgaW5zZXJ0cyk7XG5cdFx0XHRpbmRleCArPSB4Tm9kZS5iIHx8IDA7XG5cblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4TmV4dE5vZGUsIHlOZXh0Tm9kZSwgbG9jYWxQYXRjaGVzLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSB4TmV4dE5vZGUuYiB8fCAwO1xuXG5cdFx0XHR4SW5kZXggKz0gMjtcblx0XHRcdHlJbmRleCArPSAyO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHQvLyBlYXQgdXAgYW55IHJlbWFpbmluZyBub2RlcyB3aXRoIHJlbW92ZU5vZGUgYW5kIGluc2VydE5vZGVcblxuXHR3aGlsZSAoeEluZGV4IDwgeExlbilcblx0e1xuXHRcdGluZGV4Kys7XG5cdFx0dmFyIHggPSB4S2lkc1t4SW5kZXhdO1xuXHRcdHZhciB4Tm9kZSA9IHguYjtcblx0XHRfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeC5hLCB4Tm9kZSwgaW5kZXgpO1xuXHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblx0XHR4SW5kZXgrKztcblx0fVxuXG5cdHdoaWxlICh5SW5kZXggPCB5TGVuKVxuXHR7XG5cdFx0dmFyIGVuZEluc2VydHMgPSBlbmRJbnNlcnRzIHx8IFtdO1xuXHRcdHZhciB5ID0geUtpZHNbeUluZGV4XTtcblx0XHRfVmlydHVhbERvbV9pbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeS5hLCB5LmIsIHVuZGVmaW5lZCwgZW5kSW5zZXJ0cyk7XG5cdFx0eUluZGV4Kys7XG5cdH1cblxuXHRpZiAobG9jYWxQYXRjaGVzLmxlbmd0aCA+IDAgfHwgaW5zZXJ0cy5sZW5ndGggPiAwIHx8IGVuZEluc2VydHMpXG5cdHtcblx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgOCwgcm9vdEluZGV4LCB7XG5cdFx0XHR3OiBsb2NhbFBhdGNoZXMsXG5cdFx0XHR4OiBpbnNlcnRzLFxuXHRcdFx0eTogZW5kSW5zZXJ0c1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBDSEFOR0VTIEZST00gS0VZRUQgRElGRlxuXG5cbnZhciBfVmlydHVhbERvbV9QT1NURklYID0gJ19lbG1XNkJMJztcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9pbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5LCB2bm9kZSwgeUluZGV4LCBpbnNlcnRzKVxue1xuXHR2YXIgZW50cnkgPSBjaGFuZ2VzW2tleV07XG5cblx0Ly8gbmV2ZXIgc2VlbiB0aGlzIGtleSBiZWZvcmVcblx0aWYgKCFlbnRyeSlcblx0e1xuXHRcdGVudHJ5ID0ge1xuXHRcdFx0YzogMCxcblx0XHRcdHo6IHZub2RlLFxuXHRcdFx0cjogeUluZGV4LFxuXHRcdFx0czogdW5kZWZpbmVkXG5cdFx0fTtcblxuXHRcdGluc2VydHMucHVzaCh7IHI6IHlJbmRleCwgQTogZW50cnkgfSk7XG5cdFx0Y2hhbmdlc1trZXldID0gZW50cnk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSB3YXMgcmVtb3ZlZCBlYXJsaWVyLCBhIG1hdGNoIVxuXHRpZiAoZW50cnkuYyA9PT0gMSlcblx0e1xuXHRcdGluc2VydHMucHVzaCh7IHI6IHlJbmRleCwgQTogZW50cnkgfSk7XG5cblx0XHRlbnRyeS5jID0gMjtcblx0XHR2YXIgc3ViUGF0Y2hlcyA9IFtdO1xuXHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKGVudHJ5LnosIHZub2RlLCBzdWJQYXRjaGVzLCBlbnRyeS5yKTtcblx0XHRlbnRyeS5yID0geUluZGV4O1xuXHRcdGVudHJ5LnMucyA9IHtcblx0XHRcdHc6IHN1YlBhdGNoZXMsXG5cdFx0XHRBOiBlbnRyeVxuXHRcdH07XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSBoYXMgYWxyZWFkeSBiZWVuIGluc2VydGVkIG9yIG1vdmVkLCBhIGR1cGxpY2F0ZSFcblx0X1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGtleSArIF9WaXJ0dWFsRG9tX1BPU1RGSVgsIHZub2RlLCB5SW5kZXgsIGluc2VydHMpO1xufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBrZXksIHZub2RlLCBpbmRleClcbntcblx0dmFyIGVudHJ5ID0gY2hhbmdlc1trZXldO1xuXG5cdC8vIG5ldmVyIHNlZW4gdGhpcyBrZXkgYmVmb3JlXG5cdGlmICghZW50cnkpXG5cdHtcblx0XHR2YXIgcGF0Y2ggPSBfVmlydHVhbERvbV9wdXNoUGF0Y2gobG9jYWxQYXRjaGVzLCA5LCBpbmRleCwgdW5kZWZpbmVkKTtcblxuXHRcdGNoYW5nZXNba2V5XSA9IHtcblx0XHRcdGM6IDEsXG5cdFx0XHR6OiB2bm9kZSxcblx0XHRcdHI6IGluZGV4LFxuXHRcdFx0czogcGF0Y2hcblx0XHR9O1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgd2FzIGluc2VydGVkIGVhcmxpZXIsIGEgbWF0Y2ghXG5cdGlmIChlbnRyeS5jID09PSAwKVxuXHR7XG5cdFx0ZW50cnkuYyA9IDI7XG5cdFx0dmFyIHN1YlBhdGNoZXMgPSBbXTtcblx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh2bm9kZSwgZW50cnkueiwgc3ViUGF0Y2hlcywgaW5kZXgpO1xuXG5cdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKGxvY2FsUGF0Y2hlcywgOSwgaW5kZXgsIHtcblx0XHRcdHc6IHN1YlBhdGNoZXMsXG5cdFx0XHRBOiBlbnRyeVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgaGFzIGFscmVhZHkgYmVlbiByZW1vdmVkIG9yIG1vdmVkLCBhIGR1cGxpY2F0ZSFcblx0X1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGtleSArIF9WaXJ0dWFsRG9tX1BPU1RGSVgsIHZub2RlLCBpbmRleCk7XG59XG5cblxuXG4vLyBBREQgRE9NIE5PREVTXG4vL1xuLy8gRWFjaCBET00gbm9kZSBoYXMgYW4gXCJpbmRleFwiIGFzc2lnbmVkIGluIG9yZGVyIG9mIHRyYXZlcnNhbC4gSXQgaXMgaW1wb3J0YW50XG4vLyB0byBtaW5pbWl6ZSBvdXIgY3Jhd2wgb3ZlciB0aGUgYWN0dWFsIERPTSwgc28gdGhlc2UgaW5kZXhlcyAoYWxvbmcgd2l0aCB0aGVcbi8vIGRlc2NlbmRhbnRzQ291bnQgb2YgdmlydHVhbCBub2RlcykgbGV0IHVzIHNraXAgdG91Y2hpbmcgZW50aXJlIHN1YnRyZWVzIG9mXG4vLyB0aGUgRE9NIGlmIHdlIGtub3cgdGhlcmUgYXJlIG5vIHBhdGNoZXMgdGhlcmUuXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYWRkRG9tTm9kZXMoZG9tTm9kZSwgdk5vZGUsIHBhdGNoZXMsIGV2ZW50Tm9kZSlcbntcblx0X1ZpcnR1YWxEb21fYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBwYXRjaGVzLCAwLCAwLCB2Tm9kZS5iLCBldmVudE5vZGUpO1xufVxuXG5cbi8vIGFzc3VtZXMgYHBhdGNoZXNgIGlzIG5vbi1lbXB0eSBhbmQgaW5kZXhlcyBpbmNyZWFzZSBtb25vdG9uaWNhbGx5LlxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBwYXRjaGVzLCBpLCBsb3csIGhpZ2gsIGV2ZW50Tm9kZSlcbntcblx0dmFyIHBhdGNoID0gcGF0Y2hlc1tpXTtcblx0dmFyIGluZGV4ID0gcGF0Y2gucjtcblxuXHR3aGlsZSAoaW5kZXggPT09IGxvdylcblx0e1xuXHRcdHZhciBwYXRjaFR5cGUgPSBwYXRjaC4kO1xuXG5cdFx0aWYgKHBhdGNoVHlwZSA9PT0gMSlcblx0XHR7XG5cdFx0XHRfVmlydHVhbERvbV9hZGREb21Ob2Rlcyhkb21Ob2RlLCB2Tm9kZS5rLCBwYXRjaC5zLCBldmVudE5vZGUpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChwYXRjaFR5cGUgPT09IDgpXG5cdFx0e1xuXHRcdFx0cGF0Y2gudCA9IGRvbU5vZGU7XG5cdFx0XHRwYXRjaC51ID0gZXZlbnROb2RlO1xuXG5cdFx0XHR2YXIgc3ViUGF0Y2hlcyA9IHBhdGNoLnMudztcblx0XHRcdGlmIChzdWJQYXRjaGVzLmxlbmd0aCA+IDApXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChkb21Ob2RlLCB2Tm9kZSwgc3ViUGF0Y2hlcywgMCwgbG93LCBoaWdoLCBldmVudE5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmIChwYXRjaFR5cGUgPT09IDkpXG5cdFx0e1xuXHRcdFx0cGF0Y2gudCA9IGRvbU5vZGU7XG5cdFx0XHRwYXRjaC51ID0gZXZlbnROb2RlO1xuXG5cdFx0XHR2YXIgZGF0YSA9IHBhdGNoLnM7XG5cdFx0XHRpZiAoZGF0YSlcblx0XHRcdHtcblx0XHRcdFx0ZGF0YS5BLnMgPSBkb21Ob2RlO1xuXHRcdFx0XHR2YXIgc3ViUGF0Y2hlcyA9IGRhdGEudztcblx0XHRcdFx0aWYgKHN1YlBhdGNoZXMubGVuZ3RoID4gMClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChkb21Ob2RlLCB2Tm9kZSwgc3ViUGF0Y2hlcywgMCwgbG93LCBoaWdoLCBldmVudE5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRwYXRjaC50ID0gZG9tTm9kZTtcblx0XHRcdHBhdGNoLnUgPSBldmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0aSsrO1xuXG5cdFx0aWYgKCEocGF0Y2ggPSBwYXRjaGVzW2ldKSB8fCAoaW5kZXggPSBwYXRjaC5yKSA+IGhpZ2gpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIHRhZyA9IHZOb2RlLiQ7XG5cblx0aWYgKHRhZyA9PT0gNClcblx0e1xuXHRcdHZhciBzdWJOb2RlID0gdk5vZGUuaztcblxuXHRcdHdoaWxlIChzdWJOb2RlLiQgPT09IDQpXG5cdFx0e1xuXHRcdFx0c3ViTm9kZSA9IHN1Yk5vZGUuaztcblx0XHR9XG5cblx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHN1Yk5vZGUsIHBhdGNoZXMsIGksIGxvdyArIDEsIGhpZ2gsIGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmKTtcblx0fVxuXG5cdC8vIHRhZyBtdXN0IGJlIDEgb3IgMiBhdCB0aGlzIHBvaW50XG5cblx0dmFyIHZLaWRzID0gdk5vZGUuZTtcblx0dmFyIGNoaWxkTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7XG5cdGZvciAodmFyIGogPSAwOyBqIDwgdktpZHMubGVuZ3RoOyBqKyspXG5cdHtcblx0XHRsb3crKztcblx0XHR2YXIgdktpZCA9IHRhZyA9PT0gMSA/IHZLaWRzW2pdIDogdktpZHNbal0uYjtcblx0XHR2YXIgbmV4dExvdyA9IGxvdyArICh2S2lkLmIgfHwgMCk7XG5cdFx0aWYgKGxvdyA8PSBpbmRleCAmJiBpbmRleCA8PSBuZXh0TG93KVxuXHRcdHtcblx0XHRcdGkgPSBfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoY2hpbGROb2Rlc1tqXSwgdktpZCwgcGF0Y2hlcywgaSwgbG93LCBuZXh0TG93LCBldmVudE5vZGUpO1xuXHRcdFx0aWYgKCEocGF0Y2ggPSBwYXRjaGVzW2ldKSB8fCAoaW5kZXggPSBwYXRjaC5yKSA+IGhpZ2gpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsb3cgPSBuZXh0TG93O1xuXHR9XG5cdHJldHVybiBpO1xufVxuXG5cblxuLy8gQVBQTFkgUEFUQ0hFU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhyb290RG9tTm9kZSwgb2xkVmlydHVhbE5vZGUsIHBhdGNoZXMsIGV2ZW50Tm9kZSlcbntcblx0aWYgKHBhdGNoZXMubGVuZ3RoID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIHJvb3REb21Ob2RlO1xuXHR9XG5cblx0X1ZpcnR1YWxEb21fYWRkRG9tTm9kZXMocm9vdERvbU5vZGUsIG9sZFZpcnR1YWxOb2RlLCBwYXRjaGVzLCBldmVudE5vZGUpO1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzSGVscChyb290RG9tTm9kZSwgcGF0Y2hlcyk7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlc0hlbHAocm9vdERvbU5vZGUsIHBhdGNoZXMpXG57XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcGF0Y2hlcy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHZhciBwYXRjaCA9IHBhdGNoZXNbaV07XG5cdFx0dmFyIGxvY2FsRG9tTm9kZSA9IHBhdGNoLnRcblx0XHR2YXIgbmV3Tm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2gobG9jYWxEb21Ob2RlLCBwYXRjaCk7XG5cdFx0aWYgKGxvY2FsRG9tTm9kZSA9PT0gcm9vdERvbU5vZGUpXG5cdFx0e1xuXHRcdFx0cm9vdERvbU5vZGUgPSBuZXdOb2RlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcm9vdERvbU5vZGU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2goZG9tTm9kZSwgcGF0Y2gpXG57XG5cdHN3aXRjaCAocGF0Y2guJClcblx0e1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBfVmlydHVhbERvbV9hcHBseVBhdGNoUmVkcmF3KGRvbU5vZGUsIHBhdGNoLnMsIHBhdGNoLnUpO1xuXG5cdFx0Y2FzZSA0OlxuXHRcdFx0X1ZpcnR1YWxEb21fYXBwbHlGYWN0cyhkb21Ob2RlLCBwYXRjaC51LCBwYXRjaC5zKTtcblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdFx0ZG9tTm9kZS5yZXBsYWNlRGF0YSgwLCBkb21Ob2RlLmxlbmd0aCwgcGF0Y2gucyk7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBfVmlydHVhbERvbV9hcHBseVBhdGNoZXNIZWxwKGRvbU5vZGUsIHBhdGNoLnMpO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0aWYgKGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZi5qID0gcGF0Y2gucztcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYgPSB7IGo6IHBhdGNoLnMsIHA6IHBhdGNoLnUgfTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSA2OlxuXHRcdFx0dmFyIGRhdGEgPSBwYXRjaC5zO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmk7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5yZW1vdmVDaGlsZChkb21Ob2RlLmNoaWxkTm9kZXNbZGF0YS52XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgNzpcblx0XHRcdHZhciBkYXRhID0gcGF0Y2gucztcblx0XHRcdHZhciBraWRzID0gZGF0YS5lO1xuXHRcdFx0dmFyIGkgPSBkYXRhLnY7XG5cdFx0XHR2YXIgdGhlRW5kID0gZG9tTm9kZS5jaGlsZE5vZGVzW2ldO1xuXHRcdFx0Zm9yICg7IGkgPCBraWRzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmluc2VydEJlZm9yZShfVmlydHVhbERvbV9yZW5kZXIoa2lkc1tpXSwgcGF0Y2gudSksIHRoZUVuZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgOTpcblx0XHRcdHZhciBkYXRhID0gcGF0Y2gucztcblx0XHRcdGlmICghZGF0YSlcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbU5vZGUpO1xuXHRcdFx0XHRyZXR1cm4gZG9tTm9kZTtcblx0XHRcdH1cblx0XHRcdHZhciBlbnRyeSA9IGRhdGEuQTtcblx0XHRcdGlmICh0eXBlb2YgZW50cnkuciAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21Ob2RlKTtcblx0XHRcdH1cblx0XHRcdGVudHJ5LnMgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXNIZWxwKGRvbU5vZGUsIGRhdGEudyk7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgODpcblx0XHRcdHJldHVybiBfVmlydHVhbERvbV9hcHBseVBhdGNoUmVvcmRlcihkb21Ob2RlLCBwYXRjaCk7XG5cblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gcGF0Y2gucyhkb21Ob2RlKTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRfRGVidWdfY3Jhc2goMTApOyAvLyAnUmFuIGludG8gYW4gdW5rbm93biBwYXRjaCEnXG5cdH1cbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoUmVkcmF3KGRvbU5vZGUsIHZOb2RlLCBldmVudE5vZGUpXG57XG5cdHZhciBwYXJlbnROb2RlID0gZG9tTm9kZS5wYXJlbnROb2RlO1xuXHR2YXIgbmV3Tm9kZSA9IF9WaXJ0dWFsRG9tX3JlbmRlcih2Tm9kZSwgZXZlbnROb2RlKTtcblxuXHRpZiAoIW5ld05vZGUuZWxtX2V2ZW50X25vZGVfcmVmKVxuXHR7XG5cdFx0bmV3Tm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYgPSBkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZjtcblx0fVxuXG5cdGlmIChwYXJlbnROb2RlICYmIG5ld05vZGUgIT09IGRvbU5vZGUpXG5cdHtcblx0XHRwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBkb21Ob2RlKTtcblx0fVxuXHRyZXR1cm4gbmV3Tm9kZTtcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseVBhdGNoUmVvcmRlcihkb21Ob2RlLCBwYXRjaClcbntcblx0dmFyIGRhdGEgPSBwYXRjaC5zO1xuXG5cdC8vIHJlbW92ZSBlbmQgaW5zZXJ0c1xuXHR2YXIgZnJhZyA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZW9yZGVyRW5kSW5zZXJ0c0hlbHAoZGF0YS55LCBwYXRjaCk7XG5cblx0Ly8gcmVtb3ZhbHNcblx0ZG9tTm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlc0hlbHAoZG9tTm9kZSwgZGF0YS53KTtcblxuXHQvLyBpbnNlcnRzXG5cdHZhciBpbnNlcnRzID0gZGF0YS54O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGluc2VydHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgaW5zZXJ0ID0gaW5zZXJ0c1tpXTtcblx0XHR2YXIgZW50cnkgPSBpbnNlcnQuQTtcblx0XHR2YXIgbm9kZSA9IGVudHJ5LmMgPT09IDJcblx0XHRcdD8gZW50cnkuc1xuXHRcdFx0OiBfVmlydHVhbERvbV9yZW5kZXIoZW50cnkueiwgcGF0Y2gudSk7XG5cdFx0ZG9tTm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgZG9tTm9kZS5jaGlsZE5vZGVzW2luc2VydC5yXSk7XG5cdH1cblxuXHQvLyBhZGQgZW5kIGluc2VydHNcblx0aWYgKGZyYWcpXG5cdHtcblx0XHRfVmlydHVhbERvbV9hcHBlbmRDaGlsZChkb21Ob2RlLCBmcmFnKTtcblx0fVxuXG5cdHJldHVybiBkb21Ob2RlO1xufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZW9yZGVyRW5kSW5zZXJ0c0hlbHAoZW5kSW5zZXJ0cywgcGF0Y2gpXG57XG5cdGlmICghZW5kSW5zZXJ0cylcblx0e1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBmcmFnID0gX1ZpcnR1YWxEb21fZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmRJbnNlcnRzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0dmFyIGluc2VydCA9IGVuZEluc2VydHNbaV07XG5cdFx0dmFyIGVudHJ5ID0gaW5zZXJ0LkE7XG5cdFx0X1ZpcnR1YWxEb21fYXBwZW5kQ2hpbGQoZnJhZywgZW50cnkuYyA9PT0gMlxuXHRcdFx0PyBlbnRyeS5zXG5cdFx0XHQ6IF9WaXJ0dWFsRG9tX3JlbmRlcihlbnRyeS56LCBwYXRjaC51KVxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIGZyYWc7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShub2RlKVxue1xuXHQvLyBURVhUIE5PREVTXG5cblx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDMpXG5cdHtcblx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fdGV4dChub2RlLnRleHRDb250ZW50KTtcblx0fVxuXG5cblx0Ly8gV0VJUkQgTk9ERVNcblxuXHRpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSlcblx0e1xuXHRcdHJldHVybiBfVmlydHVhbERvbV90ZXh0KCcnKTtcblx0fVxuXG5cblx0Ly8gRUxFTUVOVCBOT0RFU1xuXG5cdHZhciBhdHRyTGlzdCA9IF9MaXN0X05pbDtcblx0dmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuXHRmb3IgKHZhciBpID0gYXR0cnMubGVuZ3RoOyBpLS07IClcblx0e1xuXHRcdHZhciBhdHRyID0gYXR0cnNbaV07XG5cdFx0dmFyIG5hbWUgPSBhdHRyLm5hbWU7XG5cdFx0dmFyIHZhbHVlID0gYXR0ci52YWx1ZTtcblx0XHRhdHRyTGlzdCA9IF9MaXN0X0NvbnMoIEEyKF9WaXJ0dWFsRG9tX2F0dHJpYnV0ZSwgbmFtZSwgdmFsdWUpLCBhdHRyTGlzdCApO1xuXHR9XG5cblx0dmFyIHRhZyA9IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR2YXIga2lkTGlzdCA9IF9MaXN0X05pbDtcblx0dmFyIGtpZHMgPSBub2RlLmNoaWxkTm9kZXM7XG5cblx0Zm9yICh2YXIgaSA9IGtpZHMubGVuZ3RoOyBpLS07IClcblx0e1xuXHRcdGtpZExpc3QgPSBfTGlzdF9Db25zKF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoa2lkc1tpXSksIGtpZExpc3QpO1xuXHR9XG5cdHJldHVybiBBMyhfVmlydHVhbERvbV9ub2RlLCB0YWcsIGF0dHJMaXN0LCBraWRMaXN0KTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGVrZXkoa2V5ZWROb2RlKVxue1xuXHR2YXIga2V5ZWRLaWRzID0ga2V5ZWROb2RlLmU7XG5cdHZhciBsZW4gPSBrZXllZEtpZHMubGVuZ3RoO1xuXHR2YXIga2lkcyA9IG5ldyBBcnJheShsZW4pO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuXHR7XG5cdFx0a2lkc1tpXSA9IGtleWVkS2lkc1tpXS5iO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHQkOiAxLFxuXHRcdGM6IGtleWVkTm9kZS5jLFxuXHRcdGQ6IGtleWVkTm9kZS5kLFxuXHRcdGU6IGtpZHMsXG5cdFx0Zjoga2V5ZWROb2RlLmYsXG5cdFx0Yjoga2V5ZWROb2RlLmJcblx0fTtcbn1cblxuXG5cbnZhciBfQml0d2lzZV9hbmQgPSBGMihmdW5jdGlvbihhLCBiKVxue1xuXHRyZXR1cm4gYSAmIGI7XG59KTtcblxudmFyIF9CaXR3aXNlX29yID0gRjIoZnVuY3Rpb24oYSwgYilcbntcblx0cmV0dXJuIGEgfCBiO1xufSk7XG5cbnZhciBfQml0d2lzZV94b3IgPSBGMihmdW5jdGlvbihhLCBiKVxue1xuXHRyZXR1cm4gYSBeIGI7XG59KTtcblxuZnVuY3Rpb24gX0JpdHdpc2VfY29tcGxlbWVudChhKVxue1xuXHRyZXR1cm4gfmE7XG59O1xuXG52YXIgX0JpdHdpc2Vfc2hpZnRMZWZ0QnkgPSBGMihmdW5jdGlvbihvZmZzZXQsIGEpXG57XG5cdHJldHVybiBhIDw8IG9mZnNldDtcbn0pO1xuXG52YXIgX0JpdHdpc2Vfc2hpZnRSaWdodEJ5ID0gRjIoZnVuY3Rpb24ob2Zmc2V0LCBhKVxue1xuXHRyZXR1cm4gYSA+PiBvZmZzZXQ7XG59KTtcblxudmFyIF9CaXR3aXNlX3NoaWZ0UmlnaHRaZkJ5ID0gRjIoZnVuY3Rpb24ob2Zmc2V0LCBhKVxue1xuXHRyZXR1cm4gYSA+Pj4gb2Zmc2V0O1xufSk7XG5cblxuXG5cbi8vIEhFTFBFUlNcblxuXG5mdW5jdGlvbiBfRGVidWdnZXJfdW5zYWZlQ29lcmNlKHZhbHVlKVxue1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cblxuXG4vLyBQUk9HUkFNU1xuXG5cbnZhciBfRGVidWdnZXJfZWxlbWVudCA9IEY0KGZ1bmN0aW9uKGltcGwsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHRyZXR1cm4gX1BsYXRmb3JtX2luaXRpYWxpemUoXG5cdFx0ZmxhZ0RlY29kZXIsXG5cdFx0YXJncyxcblx0XHRBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBJbml0LCBfSnNvbl93cmFwKGRlYnVnTWV0YWRhdGEpLCBfRGVidWdnZXJfcG9wb3V0KCksIGltcGwuaW5pdCksXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwVXBkYXRlKGltcGwudXBkYXRlKSxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBTdWJzKGltcGwuc3Vic2NyaXB0aW9ucyksXG5cdFx0ZnVuY3Rpb24oc2VuZFRvQXBwLCBpbml0aWFsTW9kZWwpXG5cdFx0e1xuXHRcdFx0dmFyIHZpZXcgPSBpbXBsLnZpZXc7XG5cdFx0XHR2YXIgdGl0bGUgPSBfVmlydHVhbERvbV9kb2MudGl0bGU7XG5cdFx0XHR2YXIgZG9tTm9kZSA9IGFyZ3MgJiYgYXJnc1snbm9kZSddID8gYXJnc1snbm9kZSddIDogX0RlYnVnX2NyYXNoKDApO1xuXHRcdFx0dmFyIGN1cnJOb2RlID0gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShkb21Ob2RlKTtcblx0XHRcdHZhciBjdXJyQmxvY2tlciA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9CbG9ja2VyVHlwZShpbml0aWFsTW9kZWwpO1xuXHRcdFx0dmFyIGN1cnJQb3BvdXQ7XG5cblx0XHRcdHZhciBjb3JuZXJOb2RlID0gX1ZpcnR1YWxEb21fZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZG9tTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb3JuZXJOb2RlLCBkb21Ob2RlLm5leHRTaWJsaW5nKTtcblx0XHRcdHZhciBjb3JuZXJDdXJyID0gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShjb3JuZXJOb2RlKTtcblxuXHRcdFx0aW5pdGlhbE1vZGVsLnBvcG91dC5hID0gc2VuZFRvQXBwO1xuXG5cdFx0XHRyZXR1cm4gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKGluaXRpYWxNb2RlbCwgZnVuY3Rpb24obW9kZWwpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBuZXh0Tm9kZSA9IEEyKF9WaXJ0dWFsRG9tX21hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnLCB2aWV3KGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0VXNlck1vZGVsKG1vZGVsKSkpO1xuXHRcdFx0XHR2YXIgcGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY3Vyck5vZGUsIG5leHROb2RlKTtcblx0XHRcdFx0ZG9tTm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhkb21Ob2RlLCBjdXJyTm9kZSwgcGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3Vyck5vZGUgPSBuZXh0Tm9kZTtcblxuXHRcdFx0XHQvLyB1cGRhdGUgYmxvY2tlclxuXG5cdFx0XHRcdHZhciBuZXh0QmxvY2tlciA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9CbG9ja2VyVHlwZShtb2RlbCk7XG5cdFx0XHRcdF9EZWJ1Z2dlcl91cGRhdGVCbG9ja2VyKGN1cnJCbG9ja2VyLCBuZXh0QmxvY2tlcik7XG5cdFx0XHRcdGN1cnJCbG9ja2VyID0gbmV4dEJsb2NrZXI7XG5cblx0XHRcdFx0Ly8gdmlldyBjb3JuZXJcblxuXHRcdFx0XHRpZiAoIW1vZGVsLnBvcG91dC5iKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIGNvcm5lck5leHQgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGNvcm5lclZpZXcobW9kZWwpO1xuXHRcdFx0XHRcdHZhciBjb3JuZXJQYXRjaGVzID0gX1ZpcnR1YWxEb21fZGlmZihjb3JuZXJDdXJyLCBjb3JuZXJOZXh0KTtcblx0XHRcdFx0XHRjb3JuZXJOb2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzKGNvcm5lck5vZGUsIGNvcm5lckN1cnIsIGNvcm5lclBhdGNoZXMsIHNlbmRUb0FwcCk7XG5cdFx0XHRcdFx0Y29ybmVyQ3VyciA9IGNvcm5lck5leHQ7XG5cdFx0XHRcdFx0Y3VyclBvcG91dCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyB2aWV3IHBvcG91dFxuXG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RvYyA9IG1vZGVsLnBvcG91dC5iOyAvLyBTV0lUQ0ggVE8gUE9QT1VUIERPQ1xuXHRcdFx0XHRjdXJyUG9wb3V0IHx8IChjdXJyUG9wb3V0ID0gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShtb2RlbC5wb3BvdXQuYikpO1xuXHRcdFx0XHR2YXIgbmV4dFBvcG91dCA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kcG9wb3V0Vmlldyhtb2RlbCk7XG5cdFx0XHRcdHZhciBwb3BvdXRQYXRjaGVzID0gX1ZpcnR1YWxEb21fZGlmZihjdXJyUG9wb3V0LCBuZXh0UG9wb3V0KTtcblx0XHRcdFx0X1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzKG1vZGVsLnBvcG91dC5iLmJvZHksIGN1cnJQb3BvdXQsIHBvcG91dFBhdGNoZXMsIHNlbmRUb0FwcCk7XG5cdFx0XHRcdGN1cnJQb3BvdXQgPSBuZXh0UG9wb3V0O1xuXHRcdFx0XHRfVmlydHVhbERvbV9kb2MgPSBkb2N1bWVudDsgLy8gU1dJVENIIEJBQ0sgVE8gTk9STUFMIERPQ1xuXHRcdFx0fSk7XG5cdFx0fVxuXHQpO1xufSk7XG5cblxudmFyIF9EZWJ1Z2dlcl9kb2N1bWVudCA9IEY0KGZ1bmN0aW9uKGltcGwsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHRyZXR1cm4gX1BsYXRmb3JtX2luaXRpYWxpemUoXG5cdFx0ZmxhZ0RlY29kZXIsXG5cdFx0YXJncyxcblx0XHRBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBJbml0LCBfSnNvbl93cmFwKGRlYnVnTWV0YWRhdGEpLCBfRGVidWdnZXJfcG9wb3V0KCksIGltcGwuaW5pdCksXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwVXBkYXRlKGltcGwudXBkYXRlKSxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBTdWJzKGltcGwuc3Vic2NyaXB0aW9ucyksXG5cdFx0ZnVuY3Rpb24oc2VuZFRvQXBwLCBpbml0aWFsTW9kZWwpXG5cdFx0e1xuXHRcdFx0dmFyIGRpdmVydEhyZWZUb0FwcCA9IGltcGwuc2V0dXAgJiYgaW1wbC5zZXR1cChmdW5jdGlvbih4KSB7IHJldHVybiBzZW5kVG9BcHAoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnKHgpKTsgfSk7XG5cdFx0XHR2YXIgdmlldyA9IGltcGwudmlldztcblx0XHRcdHZhciB0aXRsZSA9IF9WaXJ0dWFsRG9tX2RvYy50aXRsZTtcblx0XHRcdHZhciBib2R5Tm9kZSA9IF9WaXJ0dWFsRG9tX2RvYy5ib2R5O1xuXHRcdFx0dmFyIGN1cnJOb2RlID0gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShib2R5Tm9kZSk7XG5cdFx0XHR2YXIgY3VyckJsb2NrZXIgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUoaW5pdGlhbE1vZGVsKTtcblx0XHRcdHZhciBjdXJyUG9wb3V0O1xuXG5cdFx0XHRpbml0aWFsTW9kZWwucG9wb3V0LmEgPSBzZW5kVG9BcHA7XG5cblx0XHRcdHJldHVybiBfQnJvd3Nlcl9tYWtlQW5pbWF0b3IoaW5pdGlhbE1vZGVsLCBmdW5jdGlvbihtb2RlbClcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwID0gZGl2ZXJ0SHJlZlRvQXBwO1xuXHRcdFx0XHR2YXIgZG9jID0gdmlldyhlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldFVzZXJNb2RlbChtb2RlbCkpO1xuXHRcdFx0XHR2YXIgbmV4dE5vZGUgPSBfVmlydHVhbERvbV9ub2RlKCdib2R5JykoX0xpc3RfTmlsKShcblx0XHRcdFx0XHRfVXRpbHNfYXAoXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSRMaXN0JG1hcCwgX1ZpcnR1YWxEb21fbWFwKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXNlck1zZyksIGRvYy5ib2R5KSxcblx0XHRcdFx0XHRcdF9MaXN0X0NvbnMoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRjb3JuZXJWaWV3KG1vZGVsKSwgX0xpc3RfTmlsKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdFx0dmFyIHBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJOb2RlLCBuZXh0Tm9kZSk7XG5cdFx0XHRcdGJvZHlOb2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzKGJvZHlOb2RlLCBjdXJyTm9kZSwgcGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3Vyck5vZGUgPSBuZXh0Tm9kZTtcblx0XHRcdFx0X1ZpcnR1YWxEb21fZGl2ZXJ0SHJlZlRvQXBwID0gMDtcblx0XHRcdFx0KHRpdGxlICE9PSBkb2MudGl0bGUpICYmIChfVmlydHVhbERvbV9kb2MudGl0bGUgPSB0aXRsZSA9IGRvYy50aXRsZSk7XG5cblx0XHRcdFx0Ly8gdXBkYXRlIGJsb2NrZXJcblxuXHRcdFx0XHR2YXIgbmV4dEJsb2NrZXIgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUobW9kZWwpO1xuXHRcdFx0XHRfRGVidWdnZXJfdXBkYXRlQmxvY2tlcihjdXJyQmxvY2tlciwgbmV4dEJsb2NrZXIpO1xuXHRcdFx0XHRjdXJyQmxvY2tlciA9IG5leHRCbG9ja2VyO1xuXG5cdFx0XHRcdC8vIHZpZXcgcG9wb3V0XG5cblx0XHRcdFx0aWYgKCFtb2RlbC5wb3BvdXQuYikgeyBjdXJyUG9wb3V0ID0gdW5kZWZpbmVkOyByZXR1cm47IH1cblxuXHRcdFx0XHRfVmlydHVhbERvbV9kb2MgPSBtb2RlbC5wb3BvdXQuYjsgLy8gU1dJVENIIFRPIFBPUE9VVCBET0Ncblx0XHRcdFx0Y3VyclBvcG91dCB8fCAoY3VyclBvcG91dCA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUobW9kZWwucG9wb3V0LmIpKTtcblx0XHRcdFx0dmFyIG5leHRQb3BvdXQgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHBvcG91dFZpZXcobW9kZWwpO1xuXHRcdFx0XHR2YXIgcG9wb3V0UGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY3VyclBvcG91dCwgbmV4dFBvcG91dCk7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhtb2RlbC5wb3BvdXQuYi5ib2R5LCBjdXJyUG9wb3V0LCBwb3BvdXRQYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRjdXJyUG9wb3V0ID0gbmV4dFBvcG91dDtcblx0XHRcdFx0X1ZpcnR1YWxEb21fZG9jID0gZG9jdW1lbnQ7IC8vIFNXSVRDSCBCQUNLIFRPIE5PUk1BTCBET0Ncblx0XHRcdH0pO1xuXHRcdH1cblx0KTtcbn0pO1xuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9wb3BvdXQoKVxue1xuXHRyZXR1cm4ge1xuXHRcdGI6IHVuZGVmaW5lZCxcblx0XHRhOiB1bmRlZmluZWRcblx0fTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX2lzT3Blbihwb3BvdXQpXG57XG5cdHJldHVybiAhIXBvcG91dC5iO1xufVxuXG5mdW5jdGlvbiBfRGVidWdnZXJfb3Blbihwb3BvdXQpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRfRGVidWdnZXJfb3BlbldpbmRvdyhwb3BvdXQpO1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBfRGVidWdnZXJfb3BlbldpbmRvdyhwb3BvdXQpXG57XG5cdHZhciB3ID0gOTAwLCBoID0gMzYwLCB4ID0gc2NyZWVuLndpZHRoIC0gdywgeSA9IHNjcmVlbi5oZWlnaHQgLSBoO1xuXHR2YXIgZGVidWdnZXJXaW5kb3cgPSB3aW5kb3cub3BlbignJywgJycsICd3aWR0aD0nICsgdyArICcsaGVpZ2h0PScgKyBoICsgJyxsZWZ0PScgKyB4ICsgJyx0b3A9JyArIHkpO1xuXHR2YXIgZG9jID0gZGVidWdnZXJXaW5kb3cuZG9jdW1lbnQ7XG5cdGRvYy50aXRsZSA9ICdFbG0gRGVidWdnZXInO1xuXG5cdC8vIGhhbmRsZSBhcnJvdyBrZXlzXG5cdGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5tZXRhS2V5ICYmIGV2ZW50LndoaWNoID09PSA4MiAmJiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0ZXZlbnQud2hpY2ggPT09IDM4ICYmIChwb3BvdXQuYShlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVwKSwgZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG5cdFx0ZXZlbnQud2hpY2ggPT09IDQwICYmIChwb3BvdXQuYShlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJERvd24pLCBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcblx0fSk7XG5cblx0Ly8gaGFuZGxlIHdpbmRvdyBjbG9zZVxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgY2xvc2UpO1xuXHRkZWJ1Z2dlcldpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRwb3BvdXQuYiA9IHVuZGVmaW5lZDtcblx0XHRwb3BvdXQuYShlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE5vT3ApO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd1bmxvYWQnLCBjbG9zZSk7XG5cdH0pO1xuXHRmdW5jdGlvbiBjbG9zZSgpIHtcblx0XHRwb3BvdXQuYiA9IHVuZGVmaW5lZDtcblx0XHRwb3BvdXQuYShlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE5vT3ApO1xuXHRcdGRlYnVnZ2VyV2luZG93LmNsb3NlKCk7XG5cdH1cblxuXHQvLyByZWdpc3RlciBuZXcgd2luZG93XG5cdHBvcG91dC5iID0gZG9jO1xufVxuXG5cblxuLy8gU0NST0xMXG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX3Njcm9sbChwb3BvdXQpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRpZiAocG9wb3V0LmIpXG5cdFx0e1xuXHRcdFx0dmFyIG1zZ3MgPSBwb3BvdXQuYi5nZXRFbGVtZW50QnlJZCgnZWxtLWRlYnVnZ2VyLXNpZGViYXInKTtcblx0XHRcdGlmIChtc2dzKVxuXHRcdFx0e1xuXHRcdFx0XHRtc2dzLnNjcm9sbFRvcCA9IG1zZ3Muc2Nyb2xsSGVpZ2h0O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn1cblxuXG5cbi8vIFVQTE9BRFxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl91cGxvYWQoKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJ3RleHQvanNvbicpO1xuXHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KVxuXHRcdHtcblx0XHRcdHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSlcblx0XHRcdHtcblx0XHRcdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKGUudGFyZ2V0LnJlc3VsdCkpO1xuXHRcdFx0fTtcblx0XHRcdGZpbGVSZWFkZXIucmVhZEFzVGV4dChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblx0XHR9KTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdGVsZW1lbnQuY2xpY2soKTtcblx0fSk7XG59XG5cblxuXG4vLyBET1dOTE9BRFxuXG5cbnZhciBfRGVidWdnZXJfZG93bmxvYWQgPSBGMihmdW5jdGlvbihoaXN0b3J5TGVuZ3RoLCBqc29uKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0dmFyIGZpbGVOYW1lID0gJ2hpc3RvcnktJyArIGhpc3RvcnlMZW5ndGggKyAnLnR4dCc7XG5cdFx0dmFyIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblx0XHR2YXIgbWltZSA9ICd0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgnO1xuXHRcdHZhciBkb25lID0gX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApO1xuXG5cdFx0Ly8gZm9yIElFMTArXG5cdFx0aWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKVxuXHRcdHtcblx0XHRcdG5hdmlnYXRvci5tc1NhdmVCbG9iKG5ldyBCbG9iKFtqc29uU3RyaW5nXSwge3R5cGU6IG1pbWV9KSwgZmlsZU5hbWUpO1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKGRvbmUpO1xuXHRcdH1cblxuXHRcdC8vIGZvciBIVE1MNVxuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6JyArIG1pbWUgKyAnLCcgKyBlbmNvZGVVUklDb21wb25lbnQoanNvblN0cmluZykpO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVOYW1lKTtcblx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRlbGVtZW50LmNsaWNrKCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblx0XHRjYWxsYmFjayhkb25lKTtcblx0fSk7XG59KTtcblxuXG5cbi8vIFBPUE9VVCBDT05URU5UXG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX21lc3NhZ2VUb1N0cmluZyh2YWx1ZSlcbntcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuXHR7XG5cdFx0cmV0dXJuIHZhbHVlID8gJ1RydWUnIDogJ0ZhbHNlJztcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuXHR7XG5cdFx0cmV0dXJuIHZhbHVlICsgJyc7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiAnXCInICsgX0RlYnVnZ2VyX2FkZFNsYXNoZXModmFsdWUsIGZhbHNlKSArICdcIic7XG5cdH1cblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpXG5cdHtcblx0XHRyZXR1cm4gXCInXCIgKyBfRGVidWdnZXJfYWRkU2xhc2hlcyh2YWx1ZSwgdHJ1ZSkgKyBcIidcIjtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8ICEoJyQnIGluIHZhbHVlKSlcblx0e1xuXHRcdHJldHVybiAn4oCmJztcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUuJCA9PT0gJ251bWJlcicpXG5cdHtcblx0XHRyZXR1cm4gJ+KApic7XG5cdH1cblxuXHR2YXIgY29kZSA9IHZhbHVlLiQuY2hhckNvZGVBdCgwKTtcblx0aWYgKGNvZGUgPT09IDB4MjMgLyogIyAqLyB8fCAvKiBhICovIDB4NjEgPD0gY29kZSAmJiBjb2RlIDw9IDB4N0EgLyogeiAqLylcblx0e1xuXHRcdHJldHVybiAn4oCmJztcblx0fVxuXG5cdGlmIChbJ0FycmF5X2VsbV9idWlsdGluJywgJ1NldF9lbG1fYnVpbHRpbicsICdSQk5vZGVfZWxtX2J1aWx0aW4nLCAnUkJFbXB0eV9lbG1fYnVpbHRpbiddLmluZGV4T2YodmFsdWUuJCkgPj0gMClcblx0e1xuXHRcdHJldHVybiAn4oCmJztcblx0fVxuXG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXHRzd2l0Y2ggKGtleXMubGVuZ3RoKVxuXHR7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIHZhbHVlLiQ7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIHZhbHVlLiQgKyAnICcgKyBfRGVidWdnZXJfbWVzc2FnZVRvU3RyaW5nKHZhbHVlLmEpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gdmFsdWUuJCArICcg4oCmICcgKyBfRGVidWdnZXJfbWVzc2FnZVRvU3RyaW5nKHZhbHVlW2tleXNba2V5cy5sZW5ndGggLSAxXV0pO1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX2luaXQodmFsdWUpXG57XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0e1xuXHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJENvbnN0cnVjdG9yLCBlbG0kY29yZSRNYXliZSRKdXN0KHZhbHVlID8gJ1RydWUnIDogJ0ZhbHNlJyksIHRydWUsIF9MaXN0X05pbCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcblx0e1xuXHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFByaW1pdGl2ZSh2YWx1ZSArICcnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuXHR7XG5cdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUygnXCInICsgX0RlYnVnZ2VyX2FkZFNsYXNoZXModmFsdWUsIGZhbHNlKSArICdcIicpO1xuXHR9XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUyhcIidcIiArIF9EZWJ1Z2dlcl9hZGRTbGFzaGVzKHZhbHVlLCB0cnVlKSArIFwiJ1wiKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICckJyBpbiB2YWx1ZSlcblx0e1xuXHRcdHZhciB0YWcgPSB2YWx1ZS4kO1xuXG5cdFx0aWYgKHRhZyA9PT0gJzo6JyB8fCB0YWcgPT09ICdbXScpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTGlzdFNlcSwgdHJ1ZSxcblx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRtYXAsIF9EZWJ1Z2dlcl9pbml0LCB2YWx1ZSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJ1NldF9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2V0U2VxLCB0cnVlLFxuXHRcdFx0XHRBMyhlbG0kY29yZSRTZXQkZm9sZHIsIF9EZWJ1Z2dlcl9pbml0Q29ucywgX0xpc3RfTmlsLCB2YWx1ZSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicgfHwgdGFnID09ICdSQkVtcHR5X2VsbV9idWlsdGluJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LCB0cnVlLFxuXHRcdFx0XHRBMyhlbG0kY29yZSREaWN0JGZvbGRyLCBfRGVidWdnZXJfaW5pdEtleVZhbHVlQ29ucywgX0xpc3RfTmlsLCB2YWx1ZSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJ0FycmF5X2VsbV9idWlsdGluJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXF1ZW5jZSwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRBcnJheVNlcSwgdHJ1ZSxcblx0XHRcdFx0QTMoZWxtJGNvcmUkQXJyYXkkZm9sZHIsIF9EZWJ1Z2dlcl9pbml0Q29ucywgX0xpc3RfTmlsLCB2YWx1ZSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0YWcgPT09ICdudW1iZXInKVxuXHRcdHtcblx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFByaW1pdGl2ZSgnPGludGVybmFscz4nKTtcblx0XHR9XG5cblx0XHR2YXIgY2hhciA9IHRhZy5jaGFyQ29kZUF0KDApO1xuXHRcdGlmIChjaGFyID09PSAzNSB8fCA2NSA8PSBjaGFyICYmIGNoYXIgPD0gOTApXG5cdFx0e1xuXHRcdFx0dmFyIGxpc3QgPSBfTGlzdF9OaWw7XG5cdFx0XHRmb3IgKHZhciBpIGluIHZhbHVlKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaSA9PT0gJyQnKSBjb250aW51ZTtcblx0XHRcdFx0bGlzdCA9IF9MaXN0X0NvbnMoX0RlYnVnZ2VyX2luaXQodmFsdWVbaV0pLCBsaXN0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJENvbnN0cnVjdG9yLCBjaGFyID09PSAzNSA/IGVsbSRjb3JlJE1heWJlJE5vdGhpbmcgOiBlbG0kY29yZSRNYXliZSRKdXN0KHRhZyksIHRydWUsIGVsbSRjb3JlJExpc3QkcmV2ZXJzZShsaXN0KSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUHJpbWl0aXZlKCc8aW50ZXJuYWxzPicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG5cdHtcblx0XHR2YXIgZGljdCA9IGVsbSRjb3JlJERpY3QkZW1wdHk7XG5cdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSlcblx0XHR7XG5cdFx0XHRkaWN0ID0gQTMoZWxtJGNvcmUkRGljdCRpbnNlcnQsIGksIF9EZWJ1Z2dlcl9pbml0KHZhbHVlW2ldKSwgZGljdCk7XG5cdFx0fVxuXHRcdHJldHVybiBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFJlY29yZCwgdHJ1ZSwgZGljdCk7XG5cdH1cblxuXHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRQcmltaXRpdmUoJzxpbnRlcm5hbHM+Jyk7XG59XG5cbnZhciBfRGVidWdnZXJfaW5pdENvbnMgPSBGMihmdW5jdGlvbiBpbml0Q29uc0hlbHAodmFsdWUsIGxpc3QpXG57XG5cdHJldHVybiBfTGlzdF9Db25zKF9EZWJ1Z2dlcl9pbml0KHZhbHVlKSwgbGlzdCk7XG59KTtcblxudmFyIF9EZWJ1Z2dlcl9pbml0S2V5VmFsdWVDb25zID0gRjMoZnVuY3Rpb24oa2V5LCB2YWx1ZSwgbGlzdClcbntcblx0cmV0dXJuIF9MaXN0X0NvbnMoXG5cdFx0X1V0aWxzX1R1cGxlMihfRGVidWdnZXJfaW5pdChrZXkpLCBfRGVidWdnZXJfaW5pdCh2YWx1ZSkpLFxuXHRcdGxpc3Rcblx0KTtcbn0pO1xuXG5mdW5jdGlvbiBfRGVidWdnZXJfYWRkU2xhc2hlcyhzdHIsIGlzQ2hhcilcbntcblx0dmFyIHMgPSBzdHJcblx0XHQucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKVxuXHRcdC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJylcblx0XHQucmVwbGFjZSgvXFx0L2csICdcXFxcdCcpXG5cdFx0LnJlcGxhY2UoL1xcci9nLCAnXFxcXHInKVxuXHRcdC5yZXBsYWNlKC9cXHYvZywgJ1xcXFx2Jylcblx0XHQucmVwbGFjZSgvXFwwL2csICdcXFxcMCcpO1xuXHRpZiAoaXNDaGFyKVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFwnL2csICdcXFxcXFwnJyk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG5cdH1cbn1cblxuXG5cbi8vIEJMT0NLIEVWRU5UU1xuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl91cGRhdGVCbG9ja2VyKG9sZEJsb2NrZXIsIG5ld0Jsb2NrZXIpXG57XG5cdGlmIChvbGRCbG9ja2VyID09PSBuZXdCbG9ja2VyKSByZXR1cm47XG5cblx0dmFyIG9sZEV2ZW50cyA9IF9EZWJ1Z2dlcl9ibG9ja2VyVG9FdmVudHMob2xkQmxvY2tlcik7XG5cdHZhciBuZXdFdmVudHMgPSBfRGVidWdnZXJfYmxvY2tlclRvRXZlbnRzKG5ld0Jsb2NrZXIpO1xuXG5cdC8vIHJlbW92ZSBvbGQgYmxvY2tlcnNcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvbGRFdmVudHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG9sZEV2ZW50c1tpXSwgX0RlYnVnZ2VyX2Jsb2NrZXIsIHRydWUpO1xuXHR9XG5cblx0Ly8gYWRkIG5ldyBibG9ja2Vyc1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5ld0V2ZW50cy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmV3RXZlbnRzW2ldLCBfRGVidWdnZXJfYmxvY2tlciwgdHJ1ZSk7XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBfRGVidWdnZXJfYmxvY2tlcihldmVudClcbntcblx0aWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiBldmVudC5tZXRhS2V5ICYmIGV2ZW50LndoaWNoID09PSA4Milcblx0e1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBpc1Njcm9sbCA9IGV2ZW50LnR5cGUgPT09ICdzY3JvbGwnIHx8IGV2ZW50LnR5cGUgPT09ICd3aGVlbCc7XG5cdGZvciAodmFyIG5vZGUgPSBldmVudC50YXJnZXQ7IG5vZGU7IG5vZGUgPSBub2RlLnBhcmVudE5vZGUpXG5cdHtcblx0XHRpZiAoaXNTY3JvbGwgPyBub2RlLmlkID09PSAnZWxtLWRlYnVnZ2VyLWRldGFpbHMnIDogbm9kZS5pZCA9PT0gJ2VsbS1kZWJ1Z2dlci1vdmVybGF5Jylcblx0XHR7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9ibG9ja2VyVG9FdmVudHMoYmxvY2tlcilcbntcblx0cmV0dXJuIGJsb2NrZXIgPT09IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tOb25lXG5cdFx0PyBbXVxuXHRcdDogYmxvY2tlciA9PT0gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja01vc3Rcblx0XHRcdD8gX0RlYnVnZ2VyX21vc3RFdmVudHNcblx0XHRcdDogX0RlYnVnZ2VyX2FsbEV2ZW50cztcbn1cblxudmFyIF9EZWJ1Z2dlcl9tb3N0RXZlbnRzID0gW1xuXHQnY2xpY2snLCAnZGJsY2xpY2snLCAnbW91c2Vtb3ZlJyxcblx0J21vdXNldXAnLCAnbW91c2Vkb3duJywgJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZScsXG5cdCd0b3VjaHN0YXJ0JywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJywgJ3RvdWNobW92ZScsXG5cdCdwb2ludGVyZG93bicsICdwb2ludGVydXAnLCAncG9pbnRlcm92ZXInLCAncG9pbnRlcm91dCcsXG5cdCdwb2ludGVyZW50ZXInLCAncG9pbnRlcmxlYXZlJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJjYW5jZWwnLFxuXHQnZHJhZ3N0YXJ0JywgJ2RyYWcnLCAnZHJhZ2VuZCcsICdkcmFnZW50ZXInLCAnZHJhZ292ZXInLCAnZHJhZ2xlYXZlJywgJ2Ryb3AnLFxuXHQna2V5dXAnLCAna2V5ZG93bicsICdrZXlwcmVzcycsXG5cdCdpbnB1dCcsICdjaGFuZ2UnLFxuXHQnZm9jdXMnLCAnYmx1cidcbl07XG5cbnZhciBfRGVidWdnZXJfYWxsRXZlbnRzID0gX0RlYnVnZ2VyX21vc3RFdmVudHMuY29uY2F0KCd3aGVlbCcsICdzY3JvbGwnKTtcblxuXG5cblxuXG4vLyBFTEVNRU5UXG5cblxudmFyIF9EZWJ1Z2dlcl9lbGVtZW50O1xuXG52YXIgX0Jyb3dzZXJfZWxlbWVudCA9IF9EZWJ1Z2dlcl9lbGVtZW50IHx8IEY0KGZ1bmN0aW9uKGltcGwsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHRyZXR1cm4gX1BsYXRmb3JtX2luaXRpYWxpemUoXG5cdFx0ZmxhZ0RlY29kZXIsXG5cdFx0YXJncyxcblx0XHRpbXBsLmluaXQsXG5cdFx0aW1wbC51cGRhdGUsXG5cdFx0aW1wbC5zdWJzY3JpcHRpb25zLFxuXHRcdGZ1bmN0aW9uKHNlbmRUb0FwcCwgaW5pdGlhbE1vZGVsKSB7XG5cdFx0XHR2YXIgdmlldyA9IGltcGwudmlldztcblx0XHRcdC8qKl9VTlVTRUQvXG5cdFx0XHR2YXIgZG9tTm9kZSA9IGFyZ3NbJ25vZGUnXTtcblx0XHRcdC8vKi9cblx0XHRcdC8qKi9cblx0XHRcdHZhciBkb21Ob2RlID0gYXJncyAmJiBhcmdzWydub2RlJ10gPyBhcmdzWydub2RlJ10gOiBfRGVidWdfY3Jhc2goMCk7XG5cdFx0XHQvLyovXG5cdFx0XHR2YXIgY3Vyck5vZGUgPSBfVmlydHVhbERvbV92aXJ0dWFsaXplKGRvbU5vZGUpO1xuXG5cdFx0XHRyZXR1cm4gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKGluaXRpYWxNb2RlbCwgZnVuY3Rpb24obW9kZWwpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBuZXh0Tm9kZSA9IHZpZXcobW9kZWwpO1xuXHRcdFx0XHR2YXIgcGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY3Vyck5vZGUsIG5leHROb2RlKTtcblx0XHRcdFx0ZG9tTm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhkb21Ob2RlLCBjdXJyTm9kZSwgcGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3Vyck5vZGUgPSBuZXh0Tm9kZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0KTtcbn0pO1xuXG5cblxuLy8gRE9DVU1FTlRcblxuXG52YXIgX0RlYnVnZ2VyX2RvY3VtZW50O1xuXG52YXIgX0Jyb3dzZXJfZG9jdW1lbnQgPSBfRGVidWdnZXJfZG9jdW1lbnQgfHwgRjQoZnVuY3Rpb24oaW1wbCwgZmxhZ0RlY29kZXIsIGRlYnVnTWV0YWRhdGEsIGFyZ3MpXG57XG5cdHJldHVybiBfUGxhdGZvcm1faW5pdGlhbGl6ZShcblx0XHRmbGFnRGVjb2Rlcixcblx0XHRhcmdzLFxuXHRcdGltcGwuaW5pdCxcblx0XHRpbXBsLnVwZGF0ZSxcblx0XHRpbXBsLnN1YnNjcmlwdGlvbnMsXG5cdFx0ZnVuY3Rpb24oc2VuZFRvQXBwLCBpbml0aWFsTW9kZWwpIHtcblx0XHRcdHZhciBkaXZlcnRIcmVmVG9BcHAgPSBpbXBsLnNldHVwICYmIGltcGwuc2V0dXAoc2VuZFRvQXBwKVxuXHRcdFx0dmFyIHZpZXcgPSBpbXBsLnZpZXc7XG5cdFx0XHR2YXIgdGl0bGUgPSBfVmlydHVhbERvbV9kb2MudGl0bGU7XG5cdFx0XHR2YXIgYm9keU5vZGUgPSBfVmlydHVhbERvbV9kb2MuYm9keTtcblx0XHRcdHZhciBjdXJyTm9kZSA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoYm9keU5vZGUpO1xuXHRcdFx0cmV0dXJuIF9Ccm93c2VyX21ha2VBbmltYXRvcihpbml0aWFsTW9kZWwsIGZ1bmN0aW9uKG1vZGVsKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9kaXZlcnRIcmVmVG9BcHAgPSBkaXZlcnRIcmVmVG9BcHA7XG5cdFx0XHRcdHZhciBkb2MgPSB2aWV3KG1vZGVsKTtcblx0XHRcdFx0dmFyIG5leHROb2RlID0gX1ZpcnR1YWxEb21fbm9kZSgnYm9keScpKF9MaXN0X05pbCkoZG9jLmJvZHkpO1xuXHRcdFx0XHR2YXIgcGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY3Vyck5vZGUsIG5leHROb2RlKTtcblx0XHRcdFx0Ym9keU5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMoYm9keU5vZGUsIGN1cnJOb2RlLCBwYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRjdXJyTm9kZSA9IG5leHROb2RlO1xuXHRcdFx0XHRfVmlydHVhbERvbV9kaXZlcnRIcmVmVG9BcHAgPSAwO1xuXHRcdFx0XHQodGl0bGUgIT09IGRvYy50aXRsZSkgJiYgKF9WaXJ0dWFsRG9tX2RvYy50aXRsZSA9IHRpdGxlID0gZG9jLnRpdGxlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0KTtcbn0pO1xuXG5cblxuLy8gQU5JTUFUSU9OXG5cblxudmFyIF9Ccm93c2VyX2NhbmNlbEFuaW1hdGlvbkZyYW1lID1cblx0dHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJ1xuXHRcdD8gY2FuY2VsQW5pbWF0aW9uRnJhbWVcblx0XHQ6IGZ1bmN0aW9uKGlkKSB7IGNsZWFyVGltZW91dChpZCk7IH07XG5cbnZhciBfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuXHR0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJ1xuXHRcdD8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5cdFx0OiBmdW5jdGlvbihjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTsgfTtcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9tYWtlQW5pbWF0b3IobW9kZWwsIGRyYXcpXG57XG5cdGRyYXcobW9kZWwpO1xuXG5cdHZhciBzdGF0ZSA9IDA7XG5cblx0ZnVuY3Rpb24gdXBkYXRlSWZOZWVkZWQoKVxuXHR7XG5cdFx0c3RhdGUgPSBzdGF0ZSA9PT0gMVxuXHRcdFx0PyAwXG5cdFx0XHQ6ICggX0Jyb3dzZXJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUlmTmVlZGVkKSwgZHJhdyhtb2RlbCksIDEgKTtcblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbihuZXh0TW9kZWwsIGlzU3luYylcblx0e1xuXHRcdG1vZGVsID0gbmV4dE1vZGVsO1xuXG5cdFx0aXNTeW5jXG5cdFx0XHQ/ICggZHJhdyhtb2RlbCksXG5cdFx0XHRcdHN0YXRlID09PSAyICYmIChzdGF0ZSA9IDEpXG5cdFx0XHRcdClcblx0XHRcdDogKCBzdGF0ZSA9PT0gMCAmJiBfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlSWZOZWVkZWQpLFxuXHRcdFx0XHRzdGF0ZSA9IDJcblx0XHRcdFx0KTtcblx0fTtcbn1cblxuXG5cbi8vIEFQUExJQ0FUSU9OXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfYXBwbGljYXRpb24oaW1wbClcbntcblx0dmFyIG9uVXJsQ2hhbmdlID0gaW1wbC5vblVybENoYW5nZTtcblx0dmFyIG9uVXJsUmVxdWVzdCA9IGltcGwub25VcmxSZXF1ZXN0O1xuXHR2YXIga2V5ID0gZnVuY3Rpb24oKSB7IGtleS5hKG9uVXJsQ2hhbmdlKF9Ccm93c2VyX2dldFVybCgpKSk7IH07XG5cblx0cmV0dXJuIF9Ccm93c2VyX2RvY3VtZW50KHtcblx0XHRzZXR1cDogZnVuY3Rpb24oc2VuZFRvQXBwKVxuXHRcdHtcblx0XHRcdGtleS5hID0gc2VuZFRvQXBwO1xuXHRcdFx0X0Jyb3dzZXJfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywga2V5KTtcblx0XHRcdF9Ccm93c2VyX3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA8IDAgfHwgX0Jyb3dzZXJfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBrZXkpO1xuXG5cdFx0XHRyZXR1cm4gRjIoZnVuY3Rpb24oZG9tTm9kZSwgZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICghZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQuYnV0dG9uIDwgMSAmJiAhZG9tTm9kZS50YXJnZXQgJiYgIWRvbU5vZGUuaGFzQXR0cmlidXRlKCdkb3dubG9hZCcpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR2YXIgaHJlZiA9IGRvbU5vZGUuaHJlZjtcblx0XHRcdFx0XHR2YXIgY3VyciA9IF9Ccm93c2VyX2dldFVybCgpO1xuXHRcdFx0XHRcdHZhciBuZXh0ID0gZWxtJHVybCRVcmwkZnJvbVN0cmluZyhocmVmKS5hO1xuXHRcdFx0XHRcdHNlbmRUb0FwcChvblVybFJlcXVlc3QoXG5cdFx0XHRcdFx0XHQobmV4dFxuXHRcdFx0XHRcdFx0XHQmJiBjdXJyLnByb3RvY29sID09PSBuZXh0LnByb3RvY29sXG5cdFx0XHRcdFx0XHRcdCYmIGN1cnIuaG9zdCA9PT0gbmV4dC5ob3N0XG5cdFx0XHRcdFx0XHRcdCYmIGN1cnIucG9ydF8uYSA9PT0gbmV4dC5wb3J0Xy5hXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdD8gZWxtJGJyb3dzZXIkQnJvd3NlciRJbnRlcm5hbChuZXh0KVxuXHRcdFx0XHRcdFx0XHQ6IGVsbSRicm93c2VyJEJyb3dzZXIkRXh0ZXJuYWwoaHJlZilcblx0XHRcdFx0XHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbihmbGFncylcblx0XHR7XG5cdFx0XHRyZXR1cm4gQTMoaW1wbC5pbml0LCBmbGFncywgX0Jyb3dzZXJfZ2V0VXJsKCksIGtleSk7XG5cdFx0fSxcblx0XHR2aWV3OiBpbXBsLnZpZXcsXG5cdFx0dXBkYXRlOiBpbXBsLnVwZGF0ZSxcblx0XHRzdWJzY3JpcHRpb25zOiBpbXBsLnN1YnNjcmlwdGlvbnNcblx0fSk7XG59XG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldFVybCgpXG57XG5cdHJldHVybiBlbG0kdXJsJFVybCRmcm9tU3RyaW5nKF9WaXJ0dWFsRG9tX2RvYy5sb2NhdGlvbi5ocmVmKS5hIHx8IF9EZWJ1Z19jcmFzaCgxKTtcbn1cblxudmFyIF9Ccm93c2VyX2dvID0gRjIoZnVuY3Rpb24oa2V5LCBuKVxue1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkVGFzayRwZXJmb3JtLCBlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbigpIHtcblx0XHRuICYmIGhpc3RvcnkuZ28obik7XG5cdFx0a2V5KCk7XG5cdH0pKTtcbn0pO1xuXG52YXIgX0Jyb3dzZXJfcHVzaFVybCA9IEYyKGZ1bmN0aW9uKGtleSwgdXJsKVxue1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkVGFzayRwZXJmb3JtLCBlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbigpIHtcblx0XHRoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybCk7XG5cdFx0a2V5KCk7XG5cdH0pKTtcbn0pO1xuXG52YXIgX0Jyb3dzZXJfcmVwbGFjZVVybCA9IEYyKGZ1bmN0aW9uKGtleSwgdXJsKVxue1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkVGFzayRwZXJmb3JtLCBlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbigpIHtcblx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIHVybCk7XG5cdFx0a2V5KCk7XG5cdH0pKTtcbn0pO1xuXG5cblxuLy8gR0xPQkFMIEVWRU5UU1xuXG5cbnZhciBfQnJvd3Nlcl9mYWtlTm9kZSA9IHsgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7fSwgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7fSB9O1xudmFyIF9Ccm93c2VyX2RvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IF9Ccm93c2VyX2Zha2VOb2RlO1xudmFyIF9Ccm93c2VyX3dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogX0Jyb3dzZXJfZmFrZU5vZGU7XG5cbnZhciBfQnJvd3Nlcl9vbiA9IEYzKGZ1bmN0aW9uKG5vZGUsIGV2ZW50TmFtZSwgc2VuZFRvU2VsZilcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfc3Bhd24oX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0ZnVuY3Rpb24gaGFuZGxlcihldmVudClcdHsgX1NjaGVkdWxlcl9yYXdTcGF3bihzZW5kVG9TZWxmKGV2ZW50KSk7IH1cblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBfVmlydHVhbERvbV9wYXNzaXZlU3VwcG9ydGVkICYmIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpOyB9O1xuXHR9KSk7XG59KTtcblxudmFyIF9Ccm93c2VyX2RlY29kZUV2ZW50ID0gRjIoZnVuY3Rpb24oZGVjb2RlciwgZXZlbnQpXG57XG5cdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGRlY29kZXIsIGV2ZW50KTtcblx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkgPyBlbG0kY29yZSRNYXliZSRKdXN0KHJlc3VsdC5hKSA6IGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG59KTtcblxuXG5cbi8vIFBBR0UgVklTSUJJTElUWVxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX3Zpc2liaWxpdHlJbmZvKClcbntcblx0cmV0dXJuICh0eXBlb2YgX1ZpcnR1YWxEb21fZG9jLmhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0PyB7IGhpZGRlbjogJ2hpZGRlbicsIGNoYW5nZTogJ3Zpc2liaWxpdHljaGFuZ2UnIH1cblx0XHQ6XG5cdCh0eXBlb2YgX1ZpcnR1YWxEb21fZG9jLm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0PyB7IGhpZGRlbjogJ21vekhpZGRlbicsIGNoYW5nZTogJ21venZpc2liaWxpdHljaGFuZ2UnIH1cblx0XHQ6XG5cdCh0eXBlb2YgX1ZpcnR1YWxEb21fZG9jLm1zSGlkZGVuICE9PSAndW5kZWZpbmVkJylcblx0XHQ/IHsgaGlkZGVuOiAnbXNIaWRkZW4nLCBjaGFuZ2U6ICdtc3Zpc2liaWxpdHljaGFuZ2UnIH1cblx0XHQ6XG5cdCh0eXBlb2YgX1ZpcnR1YWxEb21fZG9jLndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0PyB7IGhpZGRlbjogJ3dlYmtpdEhpZGRlbicsIGNoYW5nZTogJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnIH1cblx0XHQ6IHsgaGlkZGVuOiAnaGlkZGVuJywgY2hhbmdlOiAndmlzaWJpbGl0eWNoYW5nZScgfTtcbn1cblxuXG5cbi8vIEFOSU1BVElPTiBGUkFNRVNcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9yQUYoKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0dmFyIGlkID0gX0Jyb3dzZXJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKERhdGUubm93KCkpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdF9Ccm93c2VyX2NhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcblx0XHR9O1xuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9ub3coKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKERhdGUubm93KCkpKTtcblx0fSk7XG59XG5cblxuXG4vLyBET00gU1RVRkZcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl93aXRoTm9kZShpZCwgZG9TdHVmZilcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcblx0XHRcdHZhciBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdFx0Y2FsbGJhY2sobm9kZVxuXHRcdFx0XHQ/IF9TY2hlZHVsZXJfc3VjY2VlZChkb1N0dWZmKG5vZGUpKVxuXHRcdFx0XHQ6IF9TY2hlZHVsZXJfZmFpbChlbG0kYnJvd3NlciRCcm93c2VyJERvbSROb3RGb3VuZChpZCkpXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl93aXRoV2luZG93KGRvU3R1ZmYpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG5cdFx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoZG9TdHVmZigpKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5cbi8vIEZPQ1VTIGFuZCBCTFVSXG5cblxudmFyIF9Ccm93c2VyX2NhbGwgPSBGMihmdW5jdGlvbihmdW5jdGlvbk5hbWUsIGlkKVxue1xuXHRyZXR1cm4gX0Jyb3dzZXJfd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRub2RlW2Z1bmN0aW9uTmFtZV0oKTtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMDtcblx0fSk7XG59KTtcblxuXG5cbi8vIFdJTkRPVyBWSUVXUE9SVFxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldFZpZXdwb3J0KClcbntcblx0cmV0dXJuIHtcblx0XHRzY2VuZTogX0Jyb3dzZXJfZ2V0U2NlbmUoKSxcblx0XHR2aWV3cG9ydDoge1xuXHRcdFx0eDogX0Jyb3dzZXJfd2luZG93LnBhZ2VYT2Zmc2V0LFxuXHRcdFx0eTogX0Jyb3dzZXJfd2luZG93LnBhZ2VZT2Zmc2V0LFxuXHRcdFx0d2lkdGg6IF9Ccm93c2VyX2RvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRoZWlnaHQ6IF9Ccm93c2VyX2RvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9nZXRTY2VuZSgpXG57XG5cdHZhciBib2R5ID0gX0Jyb3dzZXJfZG9jLmJvZHk7XG5cdHZhciBlbGVtID0gX0Jyb3dzZXJfZG9jLmRvY3VtZW50RWxlbWVudDtcblx0cmV0dXJuIHtcblx0XHR3aWR0aDogTWF0aC5tYXgoYm9keS5zY3JvbGxXaWR0aCwgYm9keS5vZmZzZXRXaWR0aCwgZWxlbS5zY3JvbGxXaWR0aCwgZWxlbS5vZmZzZXRXaWR0aCwgZWxlbS5jbGllbnRXaWR0aCksXG5cdFx0aGVpZ2h0OiBNYXRoLm1heChib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIGVsZW0uc2Nyb2xsSGVpZ2h0LCBlbGVtLm9mZnNldEhlaWdodCwgZWxlbS5jbGllbnRIZWlnaHQpXG5cdH07XG59XG5cbnZhciBfQnJvd3Nlcl9zZXRWaWV3cG9ydCA9IEYyKGZ1bmN0aW9uKHgsIHkpXG57XG5cdHJldHVybiBfQnJvd3Nlcl93aXRoV2luZG93KGZ1bmN0aW9uKClcblx0e1xuXHRcdF9Ccm93c2VyX3dpbmRvdy5zY3JvbGwoeCwgeSk7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTA7XG5cdH0pO1xufSk7XG5cblxuXG4vLyBFTEVNRU5UIFZJRVdQT1JUXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfZ2V0Vmlld3BvcnRPZihpZClcbntcblx0cmV0dXJuIF9Ccm93c2VyX3dpdGhOb2RlKGlkLCBmdW5jdGlvbihub2RlKVxuXHR7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNjZW5lOiB7XG5cdFx0XHRcdHdpZHRoOiBub2RlLnNjcm9sbFdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IG5vZGUuc2Nyb2xsSGVpZ2h0XG5cdFx0XHR9LFxuXHRcdFx0dmlld3BvcnQ6IHtcblx0XHRcdFx0eDogbm9kZS5zY3JvbGxMZWZ0LFxuXHRcdFx0XHR5OiBub2RlLnNjcm9sbFRvcCxcblx0XHRcdFx0d2lkdGg6IG5vZGUuY2xpZW50V2lkdGgsXG5cdFx0XHRcdGhlaWdodDogbm9kZS5jbGllbnRIZWlnaHRcblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcbn1cblxuXG52YXIgX0Jyb3dzZXJfc2V0Vmlld3BvcnRPZiA9IEYzKGZ1bmN0aW9uKGlkLCB4LCB5KVxue1xuXHRyZXR1cm4gX0Jyb3dzZXJfd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpXG5cdHtcblx0XHRub2RlLnNjcm9sbExlZnQgPSB4O1xuXHRcdG5vZGUuc2Nyb2xsVG9wID0geTtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMDtcblx0fSk7XG59KTtcblxuXG5cbi8vIEVMRU1FTlRcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9nZXRFbGVtZW50KGlkKVxue1xuXHRyZXR1cm4gX0Jyb3dzZXJfd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpXG5cdHtcblx0XHR2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dmFyIHggPSBfQnJvd3Nlcl93aW5kb3cucGFnZVhPZmZzZXQ7XG5cdFx0dmFyIHkgPSBfQnJvd3Nlcl93aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNjZW5lOiBfQnJvd3Nlcl9nZXRTY2VuZSgpLFxuXHRcdFx0dmlld3BvcnQ6IHtcblx0XHRcdFx0eDogeCxcblx0XHRcdFx0eTogeSxcblx0XHRcdFx0d2lkdGg6IF9Ccm93c2VyX2RvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRcdGhlaWdodDogX0Jyb3dzZXJfZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblx0XHRcdH0sXG5cdFx0XHRlbGVtZW50OiB7XG5cdFx0XHRcdHg6IHggKyByZWN0LmxlZnQsXG5cdFx0XHRcdHk6IHkgKyByZWN0LnRvcCxcblx0XHRcdFx0d2lkdGg6IHJlY3Qud2lkdGgsXG5cdFx0XHRcdGhlaWdodDogcmVjdC5oZWlnaHRcblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcbn1cblxuXG5cbi8vIExPQUQgYW5kIFJFTE9BRFxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX3JlbG9hZChza2lwQ2FjaGUpXG57XG5cdHJldHVybiBBMihlbG0kY29yZSRUYXNrJHBlcmZvcm0sIGVsbSRjb3JlJEJhc2ljcyRuZXZlciwgX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fZG9jLmxvY2F0aW9uLnJlbG9hZChza2lwQ2FjaGUpO1xuXHR9KSk7XG59XG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2xvYWQodXJsKVxue1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkVGFzayRwZXJmb3JtLCBlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHRyeVxuXHRcdHtcblx0XHRcdF9Ccm93c2VyX3dpbmRvdy5sb2NhdGlvbiA9IHVybDtcblx0XHR9XG5cdFx0Y2F0Y2goZXJyKVxuXHRcdHtcblx0XHRcdC8vIE9ubHkgRmlyZWZveCBjYW4gdGhyb3cgYSBOU19FUlJPUl9NQUxGT1JNRURfVVJJIGV4Y2VwdGlvbiBoZXJlLlxuXHRcdFx0Ly8gT3RoZXIgYnJvd3NlcnMgcmVsb2FkIHRoZSBwYWdlLCBzbyBsZXQncyBiZSBjb25zaXN0ZW50IGFib3V0IHRoYXQuXG5cdFx0XHRfVmlydHVhbERvbV9kb2MubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcblx0XHR9XG5cdH0pKTtcbn1cbnZhciBhdXRob3IkcHJvamVjdCRDb250ZXh0JENvbnRleHQgPSBmdW5jdGlvbiAodXJsKSB7XG5cdHJldHVybiB7dXJsOiB1cmx9O1xufTtcbnZhciBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IgPSAzMjtcbnZhciBlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbiA9IEY0KFxuXHRmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuXHRcdHJldHVybiB7JDogJ0FycmF5X2VsbV9idWlsdGluJywgYTogYSwgYjogYiwgYzogYywgZDogZH07XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRFUSA9IHskOiAnRVEnfTtcbnZhciBlbG0kY29yZSRCYXNpY3MkR1QgPSB7JDogJ0dUJ307XG52YXIgZWxtJGNvcmUkQmFzaWNzJExUID0geyQ6ICdMVCd9O1xudmFyIGVsbSRjb3JlJERpY3QkZm9sZHIgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGFjYywgdCkge1xuXHRcdGZvbGRyOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAodC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBrZXkgPSB0LmI7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHQuYztcblx0XHRcdFx0dmFyIGxlZnQgPSB0LmQ7XG5cdFx0XHRcdHZhciByaWdodCA9IHQuZTtcblx0XHRcdFx0dmFyICR0ZW1wJGZ1bmMgPSBmdW5jLFxuXHRcdFx0XHRcdCR0ZW1wJGFjYyA9IEEzKFxuXHRcdFx0XHRcdGZ1bmMsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdEEzKGVsbSRjb3JlJERpY3QkZm9sZHIsIGZ1bmMsIGFjYywgcmlnaHQpKSxcblx0XHRcdFx0XHQkdGVtcCR0ID0gbGVmdDtcblx0XHRcdFx0ZnVuYyA9ICR0ZW1wJGZ1bmM7XG5cdFx0XHRcdGFjYyA9ICR0ZW1wJGFjYztcblx0XHRcdFx0dCA9ICR0ZW1wJHQ7XG5cdFx0XHRcdGNvbnRpbnVlIGZvbGRyO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRjb25zID0gX0xpc3RfY29ucztcbnZhciBlbG0kY29yZSREaWN0JHRvTGlzdCA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHJldHVybiBBMyhcblx0XHRlbG0kY29yZSREaWN0JGZvbGRyLFxuXHRcdEYzKFxuXHRcdFx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIGxpc3QpIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKGtleSwgdmFsdWUpLFxuXHRcdFx0XHRcdGxpc3QpO1xuXHRcdFx0fSksXG5cdFx0X0xpc3RfTmlsLFxuXHRcdGRpY3QpO1xufTtcbnZhciBlbG0kY29yZSREaWN0JGtleXMgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTMoXG5cdFx0ZWxtJGNvcmUkRGljdCRmb2xkcixcblx0XHRGMyhcblx0XHRcdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBrZXlMaXN0KSB7XG5cdFx0XHRcdHJldHVybiBBMihlbG0kY29yZSRMaXN0JGNvbnMsIGtleSwga2V5TGlzdCk7XG5cdFx0XHR9KSxcblx0XHRfTGlzdF9OaWwsXG5cdFx0ZGljdCk7XG59O1xudmFyIGVsbSRjb3JlJFNldCR0b0xpc3QgPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBkaWN0ID0gX24wLmE7XG5cdHJldHVybiBlbG0kY29yZSREaWN0JGtleXMoZGljdCk7XG59O1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRyID0gX0pzQXJyYXlfZm9sZHI7XG52YXIgZWxtJGNvcmUkQXJyYXkkZm9sZHIgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGJhc2VDYXNlLCBfbjApIHtcblx0XHR2YXIgdHJlZSA9IF9uMC5jO1xuXHRcdHZhciB0YWlsID0gX24wLmQ7XG5cdFx0dmFyIGhlbHBlciA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKG5vZGUsIGFjYykge1xuXHRcdFx0XHRpZiAobm9kZS4kID09PSAnU3ViVHJlZScpIHtcblx0XHRcdFx0XHR2YXIgc3ViVHJlZSA9IG5vZGUuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZHIsIGhlbHBlciwgYWNjLCBzdWJUcmVlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgdmFsdWVzID0gbm9kZS5hO1xuXHRcdFx0XHRcdHJldHVybiBBMyhlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkciwgZnVuYywgYWNjLCB2YWx1ZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkcixcblx0XHRcdGhlbHBlcixcblx0XHRcdEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRyLCBmdW5jLCBiYXNlQ2FzZSwgdGFpbCksXG5cdFx0XHR0cmVlKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkQXJyYXkkdG9MaXN0ID0gZnVuY3Rpb24gKGFycmF5KSB7XG5cdHJldHVybiBBMyhlbG0kY29yZSRBcnJheSRmb2xkciwgZWxtJGNvcmUkTGlzdCRjb25zLCBfTGlzdF9OaWwsIGFycmF5KTtcbn07XG52YXIgZWxtJGNvcmUkQmFzaWNzJGNlaWxpbmcgPSBfQmFzaWNzX2NlaWxpbmc7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGZkaXYgPSBfQmFzaWNzX2ZkaXY7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGxvZ0Jhc2UgPSBGMihcblx0ZnVuY3Rpb24gKGJhc2UsIG51bWJlcikge1xuXHRcdHJldHVybiBfQmFzaWNzX2xvZyhudW1iZXIpIC8gX0Jhc2ljc19sb2coYmFzZSk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyR0b0Zsb2F0ID0gX0Jhc2ljc190b0Zsb2F0O1xudmFyIGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCA9IGVsbSRjb3JlJEJhc2ljcyRjZWlsaW5nKFxuXHRBMihlbG0kY29yZSRCYXNpY3MkbG9nQmFzZSwgMiwgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKSk7XG52YXIgZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHkgPSBfSnNBcnJheV9lbXB0eTtcbnZhciBlbG0kY29yZSRBcnJheSRlbXB0eSA9IEE0KGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLCAwLCBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsIGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5LCBlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSk7XG52YXIgZWxtJGNvcmUkQXJyYXkkTGVhZiA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0xlYWYnLCBhOiBhfTtcbn07XG52YXIgZWxtJGNvcmUkQXJyYXkkU3ViVHJlZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1N1YlRyZWUnLCBhOiBhfTtcbn07XG52YXIgZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZUZyb21MaXN0ID0gX0pzQXJyYXlfaW5pdGlhbGl6ZUZyb21MaXN0O1xudmFyIGVsbSRjb3JlJExpc3QkZm9sZGwgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGFjYywgbGlzdCkge1xuXHRcdGZvbGRsOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoIWxpc3QuYikge1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHggPSBsaXN0LmE7XG5cdFx0XHRcdHZhciB4cyA9IGxpc3QuYjtcblx0XHRcdFx0dmFyICR0ZW1wJGZ1bmMgPSBmdW5jLFxuXHRcdFx0XHRcdCR0ZW1wJGFjYyA9IEEyKGZ1bmMsIHgsIGFjYyksXG5cdFx0XHRcdFx0JHRlbXAkbGlzdCA9IHhzO1xuXHRcdFx0XHRmdW5jID0gJHRlbXAkZnVuYztcblx0XHRcdFx0YWNjID0gJHRlbXAkYWNjO1xuXHRcdFx0XHRsaXN0ID0gJHRlbXAkbGlzdDtcblx0XHRcdFx0Y29udGludWUgZm9sZGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRMaXN0JHJldmVyc2UgPSBmdW5jdGlvbiAobGlzdCkge1xuXHRyZXR1cm4gQTMoZWxtJGNvcmUkTGlzdCRmb2xkbCwgZWxtJGNvcmUkTGlzdCRjb25zLCBfTGlzdF9OaWwsIGxpc3QpO1xufTtcbnZhciBlbG0kY29yZSRBcnJheSRjb21wcmVzc05vZGVzID0gRjIoXG5cdGZ1bmN0aW9uIChub2RlcywgYWNjKSB7XG5cdFx0Y29tcHJlc3NOb2Rlczpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIF9uMCA9IEEyKGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemVGcm9tTGlzdCwgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLCBub2Rlcyk7XG5cdFx0XHR2YXIgbm9kZSA9IF9uMC5hO1xuXHRcdFx0dmFyIHJlbWFpbmluZ05vZGVzID0gX24wLmI7XG5cdFx0XHR2YXIgbmV3QWNjID0gQTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkU3ViVHJlZShub2RlKSxcblx0XHRcdFx0YWNjKTtcblx0XHRcdGlmICghcmVtYWluaW5nTm9kZXMuYikge1xuXHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTGlzdCRyZXZlcnNlKG5ld0FjYyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgJHRlbXAkbm9kZXMgPSByZW1haW5pbmdOb2Rlcyxcblx0XHRcdFx0XHQkdGVtcCRhY2MgPSBuZXdBY2M7XG5cdFx0XHRcdG5vZGVzID0gJHRlbXAkbm9kZXM7XG5cdFx0XHRcdGFjYyA9ICR0ZW1wJGFjYztcblx0XHRcdFx0Y29udGludWUgY29tcHJlc3NOb2Rlcztcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRhcFIgPSBGMihcblx0ZnVuY3Rpb24gKHgsIGYpIHtcblx0XHRyZXR1cm4gZih4KTtcblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGVxID0gX1V0aWxzX2VxdWFsO1xudmFyIGVsbSRjb3JlJFR1cGxlJGZpcnN0ID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgeCA9IF9uMC5hO1xuXHRyZXR1cm4geDtcbn07XG52YXIgZWxtJGNvcmUkQXJyYXkkdHJlZUZyb21CdWlsZGVyID0gRjIoXG5cdGZ1bmN0aW9uIChub2RlTGlzdCwgbm9kZUxpc3RTaXplKSB7XG5cdFx0dHJlZUZyb21CdWlsZGVyOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgbmV3Tm9kZVNpemUgPSBlbG0kY29yZSRCYXNpY3MkY2VpbGluZyhub2RlTGlzdFNpemUgLyBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IpO1xuXHRcdFx0aWYgKG5ld05vZGVTaXplID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiBBMihlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplRnJvbUxpc3QsIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvciwgbm9kZUxpc3QpLmE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgJHRlbXAkbm9kZUxpc3QgPSBBMihlbG0kY29yZSRBcnJheSRjb21wcmVzc05vZGVzLCBub2RlTGlzdCwgX0xpc3RfTmlsKSxcblx0XHRcdFx0XHQkdGVtcCRub2RlTGlzdFNpemUgPSBuZXdOb2RlU2l6ZTtcblx0XHRcdFx0bm9kZUxpc3QgPSAkdGVtcCRub2RlTGlzdDtcblx0XHRcdFx0bm9kZUxpc3RTaXplID0gJHRlbXAkbm9kZUxpc3RTaXplO1xuXHRcdFx0XHRjb250aW51ZSB0cmVlRnJvbUJ1aWxkZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkYWRkID0gX0Jhc2ljc19hZGQ7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGFwTCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgeCkge1xuXHRcdHJldHVybiBmKHgpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRCYXNpY3MkZmxvb3IgPSBfQmFzaWNzX2Zsb29yO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRndCA9IF9VdGlsc19ndDtcbnZhciBlbG0kY29yZSRCYXNpY3MkbWF4ID0gRjIoXG5cdGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0cmV0dXJuIChfVXRpbHNfY21wKHgsIHkpID4gMCkgPyB4IDogeTtcblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJG11bCA9IF9CYXNpY3NfbXVsO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRzdWIgPSBfQmFzaWNzX3N1YjtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGggPSBfSnNBcnJheV9sZW5ndGg7XG52YXIgZWxtJGNvcmUkQXJyYXkkYnVpbGRlclRvQXJyYXkgPSBGMihcblx0ZnVuY3Rpb24gKHJldmVyc2VOb2RlTGlzdCwgYnVpbGRlcikge1xuXHRcdGlmICghYnVpbGRlci5ub2RlTGlzdFNpemUpIHtcblx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkQXJyYXlfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aChidWlsZGVyLnRhaWwpLFxuXHRcdFx0XHRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsXG5cdFx0XHRcdGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5LFxuXHRcdFx0XHRidWlsZGVyLnRhaWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgdHJlZUxlbiA9IGJ1aWxkZXIubm9kZUxpc3RTaXplICogZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yO1xuXHRcdFx0dmFyIGRlcHRoID0gZWxtJGNvcmUkQmFzaWNzJGZsb29yKFxuXHRcdFx0XHRBMihlbG0kY29yZSRCYXNpY3MkbG9nQmFzZSwgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLCB0cmVlTGVuIC0gMSkpO1xuXHRcdFx0dmFyIGNvcnJlY3ROb2RlTGlzdCA9IHJldmVyc2VOb2RlTGlzdCA/IGVsbSRjb3JlJExpc3QkcmV2ZXJzZShidWlsZGVyLm5vZGVMaXN0KSA6IGJ1aWxkZXIubm9kZUxpc3Q7XG5cdFx0XHR2YXIgdHJlZSA9IEEyKGVsbSRjb3JlJEFycmF5JHRyZWVGcm9tQnVpbGRlciwgY29ycmVjdE5vZGVMaXN0LCBidWlsZGVyLm5vZGVMaXN0U2l6ZSk7XG5cdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLFxuXHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgoYnVpbGRlci50YWlsKSArIHRyZWVMZW4sXG5cdFx0XHRcdEEyKGVsbSRjb3JlJEJhc2ljcyRtYXgsIDUsIGRlcHRoICogZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwKSxcblx0XHRcdFx0dHJlZSxcblx0XHRcdFx0YnVpbGRlci50YWlsKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRGYWxzZSA9IHskOiAnRmFsc2UnfTtcbnZhciBlbG0kY29yZSRCYXNpY3MkaWRpdiA9IF9CYXNpY3NfaWRpdjtcbnZhciBlbG0kY29yZSRCYXNpY3MkbHQgPSBfVXRpbHNfbHQ7XG52YXIgZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZSA9IF9Kc0FycmF5X2luaXRpYWxpemU7XG52YXIgZWxtJGNvcmUkQXJyYXkkaW5pdGlhbGl6ZUhlbHAgPSBGNShcblx0ZnVuY3Rpb24gKGZuLCBmcm9tSW5kZXgsIGxlbiwgbm9kZUxpc3QsIHRhaWwpIHtcblx0XHRpbml0aWFsaXplSGVscDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKGZyb21JbmRleCA8IDApIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JGJ1aWxkZXJUb0FycmF5LFxuXHRcdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRcdHtub2RlTGlzdDogbm9kZUxpc3QsIG5vZGVMaXN0U2l6ZTogKGxlbiAvIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvcikgfCAwLCB0YWlsOiB0YWlsfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbGVhZiA9IGVsbSRjb3JlJEFycmF5JExlYWYoXG5cdFx0XHRcdFx0QTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZSwgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLCBmcm9tSW5kZXgsIGZuKSk7XG5cdFx0XHRcdHZhciAkdGVtcCRmbiA9IGZuLFxuXHRcdFx0XHRcdCR0ZW1wJGZyb21JbmRleCA9IGZyb21JbmRleCAtIGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvcixcblx0XHRcdFx0XHQkdGVtcCRsZW4gPSBsZW4sXG5cdFx0XHRcdFx0JHRlbXAkbm9kZUxpc3QgPSBBMihlbG0kY29yZSRMaXN0JGNvbnMsIGxlYWYsIG5vZGVMaXN0KSxcblx0XHRcdFx0XHQkdGVtcCR0YWlsID0gdGFpbDtcblx0XHRcdFx0Zm4gPSAkdGVtcCRmbjtcblx0XHRcdFx0ZnJvbUluZGV4ID0gJHRlbXAkZnJvbUluZGV4O1xuXHRcdFx0XHRsZW4gPSAkdGVtcCRsZW47XG5cdFx0XHRcdG5vZGVMaXN0ID0gJHRlbXAkbm9kZUxpc3Q7XG5cdFx0XHRcdHRhaWwgPSAkdGVtcCR0YWlsO1xuXHRcdFx0XHRjb250aW51ZSBpbml0aWFsaXplSGVscDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRsZSA9IF9VdGlsc19sZTtcbnZhciBlbG0kY29yZSRCYXNpY3MkcmVtYWluZGVyQnkgPSBfQmFzaWNzX3JlbWFpbmRlckJ5O1xudmFyIGVsbSRjb3JlJEFycmF5JGluaXRpYWxpemUgPSBGMihcblx0ZnVuY3Rpb24gKGxlbiwgZm4pIHtcblx0XHRpZiAobGVuIDw9IDApIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRBcnJheSRlbXB0eTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHRhaWxMZW4gPSBsZW4gJSBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3I7XG5cdFx0XHR2YXIgdGFpbCA9IEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemUsIHRhaWxMZW4sIGxlbiAtIHRhaWxMZW4sIGZuKTtcblx0XHRcdHZhciBpbml0aWFsRnJvbUluZGV4ID0gKGxlbiAtIHRhaWxMZW4pIC0gZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yO1xuXHRcdFx0cmV0dXJuIEE1KGVsbSRjb3JlJEFycmF5JGluaXRpYWxpemVIZWxwLCBmbiwgaW5pdGlhbEZyb21JbmRleCwgbGVuLCBfTGlzdF9OaWwsIHRhaWwpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTWF5YmUkSnVzdCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0p1c3QnLCBhOiBhfTtcbn07XG52YXIgZWxtJGNvcmUkTWF5YmUkTm90aGluZyA9IHskOiAnTm90aGluZyd9O1xudmFyIGVsbSRjb3JlJFJlc3VsdCRFcnIgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdFcnInLCBhOiBhfTtcbn07XG52YXIgZWxtJGNvcmUkUmVzdWx0JE9rID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnT2snLCBhOiBhfTtcbn07XG52YXIgZWxtJGNvcmUkQmFzaWNzJFRydWUgPSB7JDogJ1RydWUnfTtcbnZhciBlbG0kY29yZSRSZXN1bHQkaXNPayA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0aWYgKHJlc3VsdC4kID09PSAnT2snKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJEZhaWx1cmUgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdGYWlsdXJlJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJEZpZWxkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRmllbGQnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkSW5kZXggPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdJbmRleCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRPbmVPZiA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ09uZU9mJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRhbmQgPSBfQmFzaWNzX2FuZDtcbnZhciBlbG0kY29yZSRCYXNpY3MkYXBwZW5kID0gX1V0aWxzX2FwcGVuZDtcbnZhciBlbG0kY29yZSRCYXNpY3Mkb3IgPSBfQmFzaWNzX29yO1xudmFyIGVsbSRjb3JlJENoYXIkdG9Db2RlID0gX0NoYXJfdG9Db2RlO1xudmFyIGVsbSRjb3JlJENoYXIkaXNMb3dlciA9IGZ1bmN0aW9uIChfY2hhcikge1xuXHR2YXIgY29kZSA9IGVsbSRjb3JlJENoYXIkdG9Db2RlKF9jaGFyKTtcblx0cmV0dXJuICg5NyA8PSBjb2RlKSAmJiAoY29kZSA8PSAxMjIpO1xufTtcbnZhciBlbG0kY29yZSRDaGFyJGlzVXBwZXIgPSBmdW5jdGlvbiAoX2NoYXIpIHtcblx0dmFyIGNvZGUgPSBlbG0kY29yZSRDaGFyJHRvQ29kZShfY2hhcik7XG5cdHJldHVybiAoY29kZSA8PSA5MCkgJiYgKDY1IDw9IGNvZGUpO1xufTtcbnZhciBlbG0kY29yZSRDaGFyJGlzQWxwaGEgPSBmdW5jdGlvbiAoX2NoYXIpIHtcblx0cmV0dXJuIGVsbSRjb3JlJENoYXIkaXNMb3dlcihfY2hhcikgfHwgZWxtJGNvcmUkQ2hhciRpc1VwcGVyKF9jaGFyKTtcbn07XG52YXIgZWxtJGNvcmUkQ2hhciRpc0RpZ2l0ID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHZhciBjb2RlID0gZWxtJGNvcmUkQ2hhciR0b0NvZGUoX2NoYXIpO1xuXHRyZXR1cm4gKGNvZGUgPD0gNTcpICYmICg0OCA8PSBjb2RlKTtcbn07XG52YXIgZWxtJGNvcmUkQ2hhciRpc0FscGhhTnVtID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHJldHVybiBlbG0kY29yZSRDaGFyJGlzTG93ZXIoX2NoYXIpIHx8IChlbG0kY29yZSRDaGFyJGlzVXBwZXIoX2NoYXIpIHx8IGVsbSRjb3JlJENoYXIkaXNEaWdpdChfY2hhcikpO1xufTtcbnZhciBlbG0kY29yZSRMaXN0JGxlbmd0aCA9IGZ1bmN0aW9uICh4cykge1xuXHRyZXR1cm4gQTMoXG5cdFx0ZWxtJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRGMihcblx0XHRcdGZ1bmN0aW9uIChfbjAsIGkpIHtcblx0XHRcdFx0cmV0dXJuIGkgKyAxO1xuXHRcdFx0fSksXG5cdFx0MCxcblx0XHR4cyk7XG59O1xudmFyIGVsbSRjb3JlJExpc3QkbWFwMiA9IF9MaXN0X21hcDI7XG52YXIgZWxtJGNvcmUkTGlzdCRyYW5nZUhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKGxvLCBoaSwgbGlzdCkge1xuXHRcdHJhbmdlSGVscDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKF9VdGlsc19jbXAobG8sIGhpKSA8IDEpIHtcblx0XHRcdFx0dmFyICR0ZW1wJGxvID0gbG8sXG5cdFx0XHRcdFx0JHRlbXAkaGkgPSBoaSAtIDEsXG5cdFx0XHRcdFx0JHRlbXAkbGlzdCA9IEEyKGVsbSRjb3JlJExpc3QkY29ucywgaGksIGxpc3QpO1xuXHRcdFx0XHRsbyA9ICR0ZW1wJGxvO1xuXHRcdFx0XHRoaSA9ICR0ZW1wJGhpO1xuXHRcdFx0XHRsaXN0ID0gJHRlbXAkbGlzdDtcblx0XHRcdFx0Y29udGludWUgcmFuZ2VIZWxwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSRMaXN0JHJhbmdlID0gRjIoXG5cdGZ1bmN0aW9uIChsbywgaGkpIHtcblx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkTGlzdCRyYW5nZUhlbHAsIGxvLCBoaSwgX0xpc3RfTmlsKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRpbmRleGVkTWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4cykge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdGVsbSRjb3JlJExpc3QkbWFwMixcblx0XHRcdGYsXG5cdFx0XHRBMihcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRyYW5nZSxcblx0XHRcdFx0MCxcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRsZW5ndGgoeHMpIC0gMSksXG5cdFx0XHR4cyk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJFN0cmluZyRhbGwgPSBfU3RyaW5nX2FsbDtcbnZhciBlbG0kY29yZSRTdHJpbmckZnJvbUludCA9IF9TdHJpbmdfZnJvbU51bWJlcjtcbnZhciBlbG0kY29yZSRTdHJpbmckam9pbiA9IEYyKFxuXHRmdW5jdGlvbiAoc2VwLCBjaHVua3MpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfU3RyaW5nX2pvaW4sXG5cdFx0XHRzZXAsXG5cdFx0XHRfTGlzdF90b0FycmF5KGNodW5rcykpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRTdHJpbmckdW5jb25zID0gX1N0cmluZ191bmNvbnM7XG52YXIgZWxtJGNvcmUkU3RyaW5nJHNwbGl0ID0gRjIoXG5cdGZ1bmN0aW9uIChzZXAsIHN0cmluZykge1xuXHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRBMihfU3RyaW5nX3NwbGl0LCBzZXAsIHN0cmluZykpO1xuXHR9KTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRpbmRlbnQgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHQnXFxuICAgICcsXG5cdFx0QTIoZWxtJGNvcmUkU3RyaW5nJHNwbGl0LCAnXFxuJywgc3RyKSk7XG59O1xudmFyIGVsbSRqc29uJEpzb24kRW5jb2RlJGVuY29kZSA9IF9Kc29uX2VuY29kZTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRlcnJvck9uZU9mID0gRjIoXG5cdGZ1bmN0aW9uIChpLCBlcnJvcikge1xuXHRcdHJldHVybiAnXFxuXFxuKCcgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaSArIDEpICsgKCcpICcgKyBlbG0kanNvbiRKc29uJERlY29kZSRpbmRlbnQoXG5cdFx0XHRlbG0kanNvbiRKc29uJERlY29kZSRlcnJvclRvU3RyaW5nKGVycm9yKSkpKTtcblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JUb1N0cmluZyA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHRyZXR1cm4gQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JUb1N0cmluZ0hlbHAsIGVycm9yLCBfTGlzdF9OaWwpO1xufTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRlcnJvclRvU3RyaW5nSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAoZXJyb3IsIGNvbnRleHQpIHtcblx0XHRlcnJvclRvU3RyaW5nSGVscDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0c3dpdGNoIChlcnJvci4kKSB7XG5cdFx0XHRcdGNhc2UgJ0ZpZWxkJzpcblx0XHRcdFx0XHR2YXIgZiA9IGVycm9yLmE7XG5cdFx0XHRcdFx0dmFyIGVyciA9IGVycm9yLmI7XG5cdFx0XHRcdFx0dmFyIGlzU2ltcGxlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0dmFyIF9uMSA9IGVsbSRjb3JlJFN0cmluZyR1bmNvbnMoZik7XG5cdFx0XHRcdFx0XHRpZiAoX24xLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgX24yID0gX24xLmE7XG5cdFx0XHRcdFx0XHRcdHZhciBfY2hhciA9IF9uMi5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgcmVzdCA9IF9uMi5iO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkQ2hhciRpc0FscGhhKF9jaGFyKSAmJiBBMihlbG0kY29yZSRTdHJpbmckYWxsLCBlbG0kY29yZSRDaGFyJGlzQWxwaGFOdW0sIHJlc3QpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0oKTtcblx0XHRcdFx0XHR2YXIgZmllbGROYW1lID0gaXNTaW1wbGUgPyAoJy4nICsgZikgOiAoJ1tcXCcnICsgKGYgKyAnXFwnXScpKTtcblx0XHRcdFx0XHR2YXIgJHRlbXAkZXJyb3IgPSBlcnIsXG5cdFx0XHRcdFx0XHQkdGVtcCRjb250ZXh0ID0gQTIoZWxtJGNvcmUkTGlzdCRjb25zLCBmaWVsZE5hbWUsIGNvbnRleHQpO1xuXHRcdFx0XHRcdGVycm9yID0gJHRlbXAkZXJyb3I7XG5cdFx0XHRcdFx0Y29udGV4dCA9ICR0ZW1wJGNvbnRleHQ7XG5cdFx0XHRcdFx0Y29udGludWUgZXJyb3JUb1N0cmluZ0hlbHA7XG5cdFx0XHRcdGNhc2UgJ0luZGV4Jzpcblx0XHRcdFx0XHR2YXIgaSA9IGVycm9yLmE7XG5cdFx0XHRcdFx0dmFyIGVyciA9IGVycm9yLmI7XG5cdFx0XHRcdFx0dmFyIGluZGV4TmFtZSA9ICdbJyArIChlbG0kY29yZSRTdHJpbmckZnJvbUludChpKSArICddJyk7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJGVycm9yID0gZXJyLFxuXHRcdFx0XHRcdFx0JHRlbXAkY29udGV4dCA9IEEyKGVsbSRjb3JlJExpc3QkY29ucywgaW5kZXhOYW1lLCBjb250ZXh0KTtcblx0XHRcdFx0XHRlcnJvciA9ICR0ZW1wJGVycm9yO1xuXHRcdFx0XHRcdGNvbnRleHQgPSAkdGVtcCRjb250ZXh0O1xuXHRcdFx0XHRcdGNvbnRpbnVlIGVycm9yVG9TdHJpbmdIZWxwO1xuXHRcdFx0XHRjYXNlICdPbmVPZic6XG5cdFx0XHRcdFx0dmFyIGVycm9ycyA9IGVycm9yLmE7XG5cdFx0XHRcdFx0aWYgKCFlcnJvcnMuYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdSYW4gaW50byBhIEpzb24uRGVjb2RlLm9uZU9mIHdpdGggbm8gcG9zc2liaWxpdGllcycgKyBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghY29udGV4dC5iKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICchJztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJyBhdCBqc29uJyArIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHRcdFx0XHQnJyxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkcmV2ZXJzZShjb250ZXh0KSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0oKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKCFlcnJvcnMuYi5iKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBlcnIgPSBlcnJvcnMuYTtcblx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGVycm9yID0gZXJyLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGNvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHRcdFx0XHRlcnJvciA9ICR0ZW1wJGVycm9yO1xuXHRcdFx0XHRcdFx0XHRjb250ZXh0ID0gJHRlbXAkY29udGV4dDtcblx0XHRcdFx0XHRcdFx0Y29udGludWUgZXJyb3JUb1N0cmluZ0hlbHA7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgc3RhcnRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIWNvbnRleHQuYikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICdKc29uLkRlY29kZS5vbmVPZic7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAnVGhlIEpzb24uRGVjb2RlLm9uZU9mIGF0IGpzb24nICsgQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGNvbnRleHQpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0oKTtcblx0XHRcdFx0XHRcdFx0dmFyIGludHJvZHVjdGlvbiA9IHN0YXJ0ZXIgKyAoJyBmYWlsZWQgaW4gdGhlIGZvbGxvd2luZyAnICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkbGVuZ3RoKGVycm9ycykpICsgJyB3YXlzOicpKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHRcdCdcXG5cXG4nLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW50cm9kdWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRpbmRleGVkTWFwLCBlbG0kanNvbiRKc29uJERlY29kZSRlcnJvck9uZU9mLCBlcnJvcnMpKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHZhciBtc2cgPSBlcnJvci5hO1xuXHRcdFx0XHRcdHZhciBqc29uID0gZXJyb3IuYjtcblx0XHRcdFx0XHR2YXIgaW50cm9kdWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKCFjb250ZXh0LmIpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdQcm9ibGVtIHdpdGggdGhlIGdpdmVuIHZhbHVlOlxcblxcbic7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ1Byb2JsZW0gd2l0aCB0aGUgdmFsdWUgYXQganNvbicgKyAoQTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHRcdFx0JycsXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGNvbnRleHQpKSArICc6XFxuXFxuICAgICcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0oKTtcblx0XHRcdFx0XHRyZXR1cm4gaW50cm9kdWN0aW9uICsgKGVsbSRqc29uJEpzb24kRGVjb2RlJGluZGVudChcblx0XHRcdFx0XHRcdEEyKGVsbSRqc29uJEpzb24kRW5jb2RlJGVuY29kZSwgNCwganNvbikpICsgKCdcXG5cXG4nICsgbXNnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCA9IF9Kc29uX2RlY29kZUZpZWxkO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcCA9IF9Kc29uX21hcDE7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nID0gX0pzb25fZGVjb2RlU3RyaW5nO1xudmFyIGF1dGhvciRwcm9qZWN0JENvbnRleHQkZGVjb2RlciA9IEEyKFxuXHRlbG0kanNvbiRKc29uJERlY29kZSRtYXAsXG5cdGF1dGhvciRwcm9qZWN0JENvbnRleHQkQ29udGV4dCxcblx0QTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICd1cmwnLCBlbG0kanNvbiRKc29uJERlY29kZSRzdHJpbmcpKTtcbnZhciBhdXRob3IkcHJvamVjdCRJbmRleFBhZ2UkRXJyb3IgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdFcnJvcicsIGE6IGF9O1xufTtcbnZhciBhdXRob3IkcHJvamVjdCRJbmRleFBhZ2UkUGFnZU1vZGVsID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnUGFnZU1vZGVsJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSRTdWNjZXNzID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnU3VjY2VzcycsIGE6IGF9O1xufTtcbnZhciBhdXRob3IkcHJvamVjdCRJZCRJZCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0lkJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRpZGVudGl0eSA9IGZ1bmN0aW9uICh4KSB7XG5cdHJldHVybiB4O1xufTtcbnZhciBhdXRob3IkcHJvamVjdCRJZCRtb2NrID0gYXV0aG9yJHByb2plY3QkSWQkSWQoJzEyMzQ1NicpO1xudmFyIGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkQWN0aXZlID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnQWN0aXZlJywgYTogYX07XG59O1xudmFyIGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkSW5hY3RpdmUgPSB7JDogJ0luYWN0aXZlJ307XG52YXIgYXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRUaGVQcm9jZXNzID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnVGhlUHJvY2VzcycsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kdGltZSRUaW1lJFBvc2l4ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUG9zaXgnLCBhOiBhfTtcbn07XG52YXIgZWxtJHRpbWUkVGltZSRtaWxsaXNUb1Bvc2l4ID0gZWxtJHRpbWUkVGltZSRQb3NpeDtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJG1vY2sgPSBfTGlzdF9mcm9tQXJyYXkoXG5cdFtcblx0XHRBMihcblx0XHRhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJFRoZVByb2Nlc3MsXG5cdFx0e1xuXHRcdFx0Y29tcGxldGlvbnM6IDEyLFxuXHRcdFx0Y3JlYXRlZEF0OiBlbG0kdGltZSRUaW1lJG1pbGxpc1RvUG9zaXgoMTU2NTk4NDAzNTUxNCksXG5cdFx0XHRkZXNjcmlwdGlvbjogJ1dlZWtseSBibG9nIHVwZGF0ZSBmb3IgTWVnYU1ha2VyIENvbW11bml0eSBhcnRpY2xlLiBEb25lIG9uY2UgYSB3ZWVrIHRvIG1ha2Ugc3VyZSB0aGF0IG5ldyB0b3BpY3MgYXJlIGNvdmVyZWQuJyxcblx0XHRcdGlkOiBhdXRob3IkcHJvamVjdCRJZCRtb2NrLFxuXHRcdFx0bGFzdEFjdGl2aXR5OiBlbG0kdGltZSRUaW1lJG1pbGxpc1RvUG9zaXgoMTU2NTk4NDAzNTUxNCksXG5cdFx0XHR0aXRsZTogJ1dlZWtseSBibG9nIHVwZGF0ZSBmb3IgTWVnYU1ha2VyIENvbW11bml0eSBhcnRpY2xlJ1xuXHRcdH0sXG5cdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRBY3RpdmUoXG5cdFx0XHRfVXRpbHNfVHVwbGUyKDEyLCAyMCkpKSxcblx0XHRBMihcblx0XHRhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJFRoZVByb2Nlc3MsXG5cdFx0e1xuXHRcdFx0Y29tcGxldGlvbnM6IDEyLFxuXHRcdFx0Y3JlYXRlZEF0OiBlbG0kdGltZSRUaW1lJG1pbGxpc1RvUG9zaXgoMTU2NTk4NDAzNTQxMyksXG5cdFx0XHRkZXNjcmlwdGlvbjogJ1dlZWtseSBibG9nIHVwZGF0ZSBmb3IgTWVnYU1ha2VyIENvbW11bml0eSBhcnRpY2xlLiBEb25lIG9uY2UgYSB3ZWVrIHRvIG1ha2Ugc3VyZSB0aGF0IG5ldyB0b3BpY3MgYXJlIGNvdmVyZWQuJyxcblx0XHRcdGlkOiBhdXRob3IkcHJvamVjdCRJZCRtb2NrLFxuXHRcdFx0bGFzdEFjdGl2aXR5OiBlbG0kdGltZSRUaW1lJG1pbGxpc1RvUG9zaXgoMTU2NTk4NDAzNTUxNCksXG5cdFx0XHR0aXRsZTogJ1dlZWtseSBibG9nIHVwZGF0ZSBmb3IgTWVnYU1ha2VyIENvbW11bml0eSBhcnRpY2xlJ1xuXHRcdH0sXG5cdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRJbmFjdGl2ZSlcblx0XSk7XG52YXIgZWxtJGNvcmUkUGxhdGZvcm0kQ21kJGJhdGNoID0gX1BsYXRmb3JtX2JhdGNoO1xudmFyIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lID0gZWxtJGNvcmUkUGxhdGZvcm0kQ21kJGJhdGNoKF9MaXN0X05pbCk7XG52YXIgZWxtJGNvcmUkUmVzdWx0JG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgcmEpIHtcblx0XHRpZiAocmEuJCA9PT0gJ09rJykge1xuXHRcdFx0dmFyIGEgPSByYS5hO1xuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRPayhcblx0XHRcdFx0ZnVuYyhhKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBlID0gcmEuYTtcblx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKGUpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkUmVzdWx0JHdpdGhEZWZhdWx0ID0gRjIoXG5cdGZ1bmN0aW9uIChkZWYsIHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuJCA9PT0gJ09rJykge1xuXHRcdFx0dmFyIGEgPSByZXN1bHQuYTtcblx0XHRcdHJldHVybiBhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkZGVjb2RlVmFsdWUgPSBfSnNvbl9ydW47XG52YXIgYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJGluaXQgPSBmdW5jdGlvbiAoZmxhZ3MpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChtb2RlbCkge1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdH0oXG5cdFx0QTIoXG5cdFx0XHRlbG0kY29yZSRSZXN1bHQkd2l0aERlZmF1bHQsXG5cdFx0XHRhdXRob3IkcHJvamVjdCRJbmRleFBhZ2UkRXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSBmbGFncycpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRjb3JlJFJlc3VsdCRtYXAsXG5cdFx0XHRcdGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSRTdWNjZXNzKFxuXHRcdFx0XHRcdFx0QTIoYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJFBhZ2VNb2RlbCwgY29udGV4dCwgYXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRtb2NrKSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGRlY29kZVZhbHVlLCBhdXRob3IkcHJvamVjdCRDb250ZXh0JGRlY29kZXIsIGZsYWdzKSkpKTtcbn07XG52YXIgZWxtJGNvcmUkUGxhdGZvcm0kU3ViJGJhdGNoID0gX1BsYXRmb3JtX2JhdGNoO1xudmFyIGVsbSRjb3JlJFBsYXRmb3JtJFN1YiRub25lID0gZWxtJGNvcmUkUGxhdGZvcm0kU3ViJGJhdGNoKF9MaXN0X05pbCk7XG52YXIgYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJHN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIGVsbSRjb3JlJFBsYXRmb3JtJFN1YiRub25lO1xufTtcbnZhciBhdXRob3IkcHJvamVjdCRJbmRleFBhZ2UkdXBkYXRlID0gRjIoXG5cdGZ1bmN0aW9uIChtc2csIG1vZGVsKSB7XG5cdFx0c3dpdGNoIChtc2cuJCkge1xuXHRcdFx0Y2FzZSAnVXNlckNsaWNrZWRDcmVhdGVQcm9jZXNzJzpcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdGNhc2UgJ1VzZXJVcGRhdGVkVGl0bGVGaWVsZCc6XG5cdFx0XHRcdHZhciB0aXRsZSA9IG1zZy5hO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0Y2FzZSAnVXNlclVwZGF0ZWREZXNjcmlwdGlvbkZpZWxkJzpcblx0XHRcdFx0dmFyIGRlc2NyaXB0aW9uID0gbXNnLmE7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRjYXNlICdVc2VyU2F2ZWROZXdQcm9jZXNzJzpcblx0XHRcdFx0dmFyIG5ld1Byb2Nlc3MgPSBtc2cuYTtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0fVxuXHR9KTtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJGdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgZGVzY3JpcHRpb24gPSBfbjAuYS5kZXNjcmlwdGlvbjtcblx0cmV0dXJuIGRlc2NyaXB0aW9uO1xufTtcbnZhciBhdXRob3IkcHJvamVjdCRJZCR0b1N0cmluZyA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIGlkID0gX24wLmE7XG5cdHJldHVybiBpZDtcbn07XG52YXIgZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nID0gX0pzb25fd3JhcDtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRtYXAyID0gX0pzb25fbWFwMjtcbnZhciBlbG0kanNvbiRKc29uJERlY29kZSRzdWNjZWVkID0gX0pzb25fc3VjY2VlZDtcbnZhciBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0b0hhbmRsZXJJbnQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRzd2l0Y2ggKGhhbmRsZXIuJCkge1xuXHRcdGNhc2UgJ05vcm1hbCc6XG5cdFx0XHRyZXR1cm4gMDtcblx0XHRjYXNlICdNYXlTdG9wUHJvcGFnYXRpb24nOlxuXHRcdFx0cmV0dXJuIDE7XG5cdFx0Y2FzZSAnTWF5UHJldmVudERlZmF1bHQnOlxuXHRcdFx0cmV0dXJuIDI7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAzO1xuXHR9XG59O1xudmFyIGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCBzdHJpbmcpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfVmlydHVhbERvbV9wcm9wZXJ0eSxcblx0XHRcdGtleSxcblx0XHRcdGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZyhzdHJpbmcpKTtcblx0fSk7XG52YXIgZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYgPSBmdW5jdGlvbiAodXJsKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksXG5cdFx0J2hyZWYnLFxuXHRcdF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdFVyaSh1cmwpKTtcbn07XG52YXIgYXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRnZXRMaW5rID0gRjIoXG5cdGZ1bmN0aW9uICh1cmwsIF9uMCkge1xuXHRcdHZhciBpZCA9IF9uMC5hLmlkO1xuXHRcdHJldHVybiBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZihcblx0XHRcdF9VdGlsc19hcChcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRhdXRob3IkcHJvamVjdCRJZCR0b1N0cmluZyhpZCkpKTtcblx0fSk7XG52YXIgYXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRnZXRUaXRsZSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHRpdGxlID0gX24wLmEudGl0bGU7XG5cdHJldHVybiB0aXRsZTtcbn07XG52YXIgZWxtJGh0bWwkSHRtbCRkaXYgPSBfVmlydHVhbERvbV9ub2RlKCdkaXYnKTtcbnZhciBlbG0kaHRtbCRIdG1sJHAgPSBfVmlydHVhbERvbV9ub2RlKCdwJyk7XG52YXIgZWxtJGh0bWwkSHRtbCRzdHJvbmcgPSBfVmlydHVhbERvbV9ub2RlKCdzdHJvbmcnKTtcbnZhciBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0ZXh0ID0gX1ZpcnR1YWxEb21fdGV4dDtcbnZhciBlbG0kaHRtbCRIdG1sJHRleHQgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0ZXh0O1xudmFyIGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkcmVuZGVyRGV0YWlscyA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIGNvbXBsZXRpb25zID0gX24wLmEuY29tcGxldGlvbnM7XG5cdHZhciBwcmV2aWV3ID0gX24wLmI7XG5cdGlmIChwcmV2aWV3LiQgPT09ICdBY3RpdmUnKSB7XG5cdFx0dmFyIF9uMiA9IHByZXZpZXcuYTtcblx0XHR2YXIgY29tcGxldGVkID0gX24yLmE7XG5cdFx0dmFyIHRvdGFsID0gX24yLmI7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzdHJvbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdMYXN0IEFjdGl2aXR5Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnRGF0ZSBjb21pbmcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHN0cm9uZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ1Byb2dyZXNzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckZnJvbUludChjb21wbGV0ZWQpICsgKCcvJyArIGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHRvdGFsKSkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHN0cm9uZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ0xhc3QgQ29tcGxldGVkJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnRGF0ZSBjb21pbmcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHN0cm9uZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ0NvbXBsZXRpb25zJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckZnJvbUludChjb21wbGV0aW9ucykpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fVxufTtcbnZhciBhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJHByZXZpZXdUb0NsYXNzID0gRjIoXG5cdGZ1bmN0aW9uIChwcmV2aWV3LCBwcmVmaXgpIHtcblx0XHRpZiAocHJldmlldy4kID09PSAnQWN0aXZlJykge1xuXHRcdFx0cmV0dXJuIHByZWZpeCArICctcHJpbWFyeS1kYXJrJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHByZWZpeCArICctZ3JleS00MDAnO1xuXHRcdH1cblx0fSk7XG52YXIgYXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRwcmV2aWV3VG9TdHJpbmcgPSBmdW5jdGlvbiAocHJldmlldykge1xuXHRpZiAocHJldmlldy4kID09PSAnQWN0aXZlJykge1xuXHRcdHJldHVybiAnQWN0aXZlJztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJ0luYWN0aXZlJztcblx0fVxufTtcbnZhciBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MgPSBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHkoJ2NsYXNzTmFtZScpO1xudmFyIGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkcmVuZGVyU3RhdHVzID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgcHJldmlldyA9IF9uMC5iO1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoXG5cdFx0XHRcdEEyKGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkcHJldmlld1RvQ2xhc3MsIHByZXZpZXcsICdiZycpKVxuXHRcdFx0XSksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoXG5cdFx0XHRcdGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkcHJldmlld1RvU3RyaW5nKHByZXZpZXcpKVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kaHRtbCRIdG1sJGEgPSBfVmlydHVhbERvbV9ub2RlKCdhJyk7XG52YXIgZWxtJGh0bWwkSHRtbCRoMyA9IF9WaXJ0dWFsRG9tX25vZGUoJ2gzJyk7XG52YXIgYXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRyZW5kZXJQcmV2aWV3ID0gRjIoXG5cdGZ1bmN0aW9uICh1cmwsIHByb2Nlc3MpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnc2ItcHJvY2VzcycpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRyZW5kZXJTdGF0dXMocHJvY2VzcyksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRoMyxcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoXG5cdFx0XHRcdFx0XHRcdGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkZ2V0VGl0bGUocHJvY2VzcykpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChcblx0XHRcdFx0XHRcdFx0YXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRnZXREZXNjcmlwdGlvbihwcm9jZXNzKSlcblx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRhdXRob3IkcHJvamVjdCRUaGVQcm9jZXNzJHJlbmRlckRldGFpbHMocHJvY2VzcyksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoYXV0aG9yJHByb2plY3QkVGhlUHJvY2VzcyRnZXRMaW5rLCB1cmwsIHByb2Nlc3MpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnV29yayBPbiBUaGlzIFByb2Nlc3MnKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRmb2xkckhlbHBlciA9IEY0KFxuXHRmdW5jdGlvbiAoZm4sIGFjYywgY3RyLCBscykge1xuXHRcdGlmICghbHMuYikge1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGEgPSBscy5hO1xuXHRcdFx0dmFyIHIxID0gbHMuYjtcblx0XHRcdGlmICghcjEuYikge1xuXHRcdFx0XHRyZXR1cm4gQTIoZm4sIGEsIGFjYyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgYiA9IHIxLmE7XG5cdFx0XHRcdHZhciByMiA9IHIxLmI7XG5cdFx0XHRcdGlmICghcjIuYikge1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0YSxcblx0XHRcdFx0XHRcdEEyKGZuLCBiLCBhY2MpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgYyA9IHIyLmE7XG5cdFx0XHRcdFx0dmFyIHIzID0gcjIuYjtcblx0XHRcdFx0XHRpZiAoIXIzLmIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0Zm4sXG5cdFx0XHRcdFx0XHRcdGEsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRcdGIsXG5cdFx0XHRcdFx0XHRcdFx0QTIoZm4sIGMsIGFjYykpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIGQgPSByMy5hO1xuXHRcdFx0XHRcdFx0dmFyIHI0ID0gcjMuYjtcblx0XHRcdFx0XHRcdHZhciByZXMgPSAoY3RyID4gNTAwKSA/IEEzKFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0YWNjLFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JHJldmVyc2UocjQpKSA6IEE0KGVsbSRjb3JlJExpc3QkZm9sZHJIZWxwZXIsIGZuLCBhY2MsIGN0ciArIDEsIHI0KTtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0Zm4sXG5cdFx0XHRcdFx0XHRcdGEsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRcdGIsXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0XHRcdGMsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihmbiwgZCwgcmVzKSkpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJExpc3QkZm9sZHIgPSBGMyhcblx0ZnVuY3Rpb24gKGZuLCBhY2MsIGxzKSB7XG5cdFx0cmV0dXJuIEE0KGVsbSRjb3JlJExpc3QkZm9sZHJIZWxwZXIsIGZuLCBhY2MsIDAsIGxzKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIHhzKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoeCwgYWNjKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0Zih4KSxcblx0XHRcdFx0XHRcdGFjYyk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciBlbG0kaHRtbCRIdG1sJGgxID0gX1ZpcnR1YWxEb21fbm9kZSgnaDEnKTtcbnZhciBlbG0kaHRtbCRIdG1sJHVsID0gX1ZpcnR1YWxEb21fbm9kZSgndWwnKTtcbnZhciBhdXRob3IkcHJvamVjdCRJbmRleFBhZ2UkdmlldyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRpZiAobW9kZWwuJCA9PT0gJ0Vycm9yJykge1xuXHRcdHZhciBlcnJvciA9IG1vZGVsLmE7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoZXJyb3IpXG5cdFx0XHRcdF0pKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgX24xID0gbW9kZWwuYTtcblx0XHR2YXIgY29udGV4dCA9IF9uMS5hO1xuXHRcdHZhciBwcm9jZXNzZXMgPSBfbjEuYjtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkaDEsXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdTcHJpbmdCb2FyZCcpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdWwsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2ZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbicpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdGF1dGhvciRwcm9qZWN0JFRoZVByb2Nlc3MkcmVuZGVyUHJldmlldyhjb250ZXh0LnVybCksXG5cdFx0XHRcdFx0XHRcdFx0cHJvY2Vzc2VzKSlcblx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRdKSk7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkQnJvd3NlciRFeHRlcm5hbCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0V4dGVybmFsJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJEJyb3dzZXIkSW50ZXJuYWwgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdJbnRlcm5hbCcsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciRCcm93c2VyJERvbSROb3RGb3VuZCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ05vdEZvdW5kJywgYTogYX07XG59O1xudmFyIGVsbSRjb3JlJEJhc2ljcyRuZXZlciA9IGZ1bmN0aW9uIChfbjApIHtcblx0bmV2ZXI6XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dmFyIG52ciA9IF9uMC5hO1xuXHRcdHZhciAkdGVtcCRfbjAgPSBudnI7XG5cdFx0X24wID0gJHRlbXAkX24wO1xuXHRcdGNvbnRpbnVlIG5ldmVyO1xuXHR9XG59O1xudmFyIGVsbSRjb3JlJFRhc2skUGVyZm9ybSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1BlcmZvcm0nLCBhOiBhfTtcbn07XG52YXIgZWxtJGNvcmUkVGFzayRzdWNjZWVkID0gX1NjaGVkdWxlcl9zdWNjZWVkO1xudmFyIGVsbSRjb3JlJFRhc2skaW5pdCA9IGVsbSRjb3JlJFRhc2skc3VjY2VlZChfVXRpbHNfVHVwbGUwKTtcbnZhciBlbG0kY29yZSRUYXNrJGFuZFRoZW4gPSBfU2NoZWR1bGVyX2FuZFRoZW47XG52YXIgZWxtJGNvcmUkVGFzayRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIHRhc2tBKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0ZnVuY3Rpb24gKGEpIHtcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0XHRmdW5jKGEpKTtcblx0XHRcdH0sXG5cdFx0XHR0YXNrQSk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJFRhc2skbWFwMiA9IEYzKFxuXHRmdW5jdGlvbiAoZnVuYywgdGFza0EsIHRhc2tCKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0ZnVuY3Rpb24gKGEpIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRmdW5jdGlvbiAoYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0XHRcdFx0QTIoZnVuYywgYSwgYikpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGFza0IpO1xuXHRcdFx0fSxcblx0XHRcdHRhc2tBKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkVGFzayRzZXF1ZW5jZSA9IGZ1bmN0aW9uICh0YXNrcykge1xuXHRyZXR1cm4gQTMoXG5cdFx0ZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRlbG0kY29yZSRUYXNrJG1hcDIoZWxtJGNvcmUkTGlzdCRjb25zKSxcblx0XHRlbG0kY29yZSRUYXNrJHN1Y2NlZWQoX0xpc3RfTmlsKSxcblx0XHR0YXNrcyk7XG59O1xudmFyIGVsbSRjb3JlJFBsYXRmb3JtJHNlbmRUb0FwcCA9IF9QbGF0Zm9ybV9zZW5kVG9BcHA7XG52YXIgZWxtJGNvcmUkVGFzayRzcGF3bkNtZCA9IEYyKFxuXHRmdW5jdGlvbiAocm91dGVyLCBfbjApIHtcblx0XHR2YXIgdGFzayA9IF9uMC5hO1xuXHRcdHJldHVybiBfU2NoZWR1bGVyX3NwYXduKFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0ZWxtJGNvcmUkUGxhdGZvcm0kc2VuZFRvQXBwKHJvdXRlciksXG5cdFx0XHRcdHRhc2spKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkVGFzayRvbkVmZmVjdHMgPSBGMyhcblx0ZnVuY3Rpb24gKHJvdXRlciwgY29tbWFuZHMsIHN0YXRlKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGNvcmUkVGFzayRtYXAsXG5cdFx0XHRmdW5jdGlvbiAoX24wKSB7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHRcdFx0fSxcblx0XHRcdGVsbSRjb3JlJFRhc2skc2VxdWVuY2UoXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdGVsbSRjb3JlJFRhc2skc3Bhd25DbWQocm91dGVyKSxcblx0XHRcdFx0XHRjb21tYW5kcykpKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkVGFzayRvblNlbGZNc2cgPSBGMyhcblx0ZnVuY3Rpb24gKF9uMCwgX24xLCBfbjIpIHtcblx0XHRyZXR1cm4gZWxtJGNvcmUkVGFzayRzdWNjZWVkKF9VdGlsc19UdXBsZTApO1xuXHR9KTtcbnZhciBlbG0kY29yZSRUYXNrJGNtZE1hcCA9IEYyKFxuXHRmdW5jdGlvbiAodGFnZ2VyLCBfbjApIHtcblx0XHR2YXIgdGFzayA9IF9uMC5hO1xuXHRcdHJldHVybiBlbG0kY29yZSRUYXNrJFBlcmZvcm0oXG5cdFx0XHRBMihlbG0kY29yZSRUYXNrJG1hcCwgdGFnZ2VyLCB0YXNrKSk7XG5cdH0pO1xuX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzWydUYXNrJ10gPSBfUGxhdGZvcm1fY3JlYXRlTWFuYWdlcihlbG0kY29yZSRUYXNrJGluaXQsIGVsbSRjb3JlJFRhc2skb25FZmZlY3RzLCBlbG0kY29yZSRUYXNrJG9uU2VsZk1zZywgZWxtJGNvcmUkVGFzayRjbWRNYXApO1xudmFyIGVsbSRjb3JlJFRhc2skY29tbWFuZCA9IF9QbGF0Zm9ybV9sZWFmKCdUYXNrJyk7XG52YXIgZWxtJGNvcmUkVGFzayRwZXJmb3JtID0gRjIoXG5cdGZ1bmN0aW9uICh0b01lc3NhZ2UsIHRhc2spIHtcblx0XHRyZXR1cm4gZWxtJGNvcmUkVGFzayRjb21tYW5kKFxuXHRcdFx0ZWxtJGNvcmUkVGFzayRQZXJmb3JtKFxuXHRcdFx0XHRBMihlbG0kY29yZSRUYXNrJG1hcCwgdG9NZXNzYWdlLCB0YXNrKSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEFycmF5U2VxID0geyQ6ICdBcnJheVNlcSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kQ29uc3RydWN0b3IgPSBGMyhcblx0ZnVuY3Rpb24gKGEsIGIsIGMpIHtcblx0XHRyZXR1cm4geyQ6ICdDb25zdHJ1Y3RvcicsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnkgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdEaWN0aW9uYXJ5JywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTGlzdFNlcSA9IHskOiAnTGlzdFNlcSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUHJpbWl0aXZlID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUHJpbWl0aXZlJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUmVjb3JkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnUmVjb3JkJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1MnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXF1ZW5jZSA9IEYzKFxuXHRmdW5jdGlvbiAoYSwgYiwgYykge1xuXHRcdHJldHVybiB7JDogJ1NlcXVlbmNlJywgYTogYSwgYjogYiwgYzogY307XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2V0U2VxID0geyQ6ICdTZXRTZXEnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJERvd24gPSB7JDogJ0Rvd24nfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE5vT3AgPSB7JDogJ05vT3AnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVwID0geyQ6ICdVcCd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXNlck1zZyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1VzZXJNc2cnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRzaXplID0gZnVuY3Rpb24gKGhpc3RvcnkpIHtcblx0cmV0dXJuIGhpc3RvcnkubnVtTWVzc2FnZXM7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRXhwb3J0ID0geyQ6ICdFeHBvcnQnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEltcG9ydCA9IHskOiAnSW1wb3J0J307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRPcGVuID0geyQ6ICdPcGVuJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRPdmVybGF5TXNnID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnT3ZlcmxheU1zZycsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJlc3VtZSA9IHskOiAnUmVzdW1lJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRpc1BhdXNlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRpZiAoc3RhdGUuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQWNjZXB0ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnQWNjZXB0JywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQ2hvb3NlID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnQ2hvb3NlJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZ29vZE5ld3MxID0gJ1xcblRoZSBnb29kIG5ld3MgaXMgdGhhdCBoYXZpbmcgdmFsdWVzIGxpa2UgdGhpcyBpbiB5b3VyIG1lc3NhZ2UgdHlwZSBpcyBub3RcXG5zbyBncmVhdCBpbiB0aGUgbG9uZyBydW4uIFlvdSBhcmUgYmV0dGVyIG9mZiB1c2luZyBzaW1wbGVyIGRhdGEsIGxpa2VcXG4nO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZ29vZE5ld3MyID0gJ1xcbmZ1bmN0aW9uIGNhbiBwYXR0ZXJuIG1hdGNoIG9uIHRoYXQgZGF0YSBhbmQgY2FsbCB3aGF0ZXZlciBmdW5jdGlvbnMsIEpTT05cXG5kZWNvZGVycywgZXRjLiB5b3UgbmVlZC4gVGhpcyBtYWtlcyB0aGUgY29kZSBtdWNoIG1vcmUgZXhwbGljaXQgYW5kIGVhc3kgdG9cXG5mb2xsb3cgZm9yIG90aGVyIHJlYWRlcnMgKG9yIHlvdSBpbiBhIGZldyBtb250aHMhKVxcbic7XG52YXIgZWxtJGh0bWwkSHRtbCRjb2RlID0gX1ZpcnR1YWxEb21fbm9kZSgnY29kZScpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRjb2RlLFxuXHRcdF9MaXN0X05pbCxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChuYW1lKVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGFkZENvbW1hcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuXHRpZiAoIWl0ZW1zLmIpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKCFpdGVtcy5iLmIpIHtcblx0XHRcdHZhciBpdGVtID0gaXRlbXMuYTtcblx0XHRcdHJldHVybiBpdGVtO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWl0ZW1zLmIuYi5iKSB7XG5cdFx0XHRcdHZhciBpdGVtMSA9IGl0ZW1zLmE7XG5cdFx0XHRcdHZhciBfbjEgPSBpdGVtcy5iO1xuXHRcdFx0XHR2YXIgaXRlbTIgPSBfbjEuYTtcblx0XHRcdFx0cmV0dXJuIGl0ZW0xICsgKCcgYW5kICcgKyBpdGVtMik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbGFzdEl0ZW0gPSBpdGVtcy5hO1xuXHRcdFx0XHR2YXIgb3RoZXJJdGVtcyA9IGl0ZW1zLmI7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHQnLCAnLFxuXHRcdFx0XHRcdF9VdGlsc19hcChcblx0XHRcdFx0XHRcdG90aGVySXRlbXMsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFsnIGFuZCAnICsgbGFzdEl0ZW1dKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHByb2JsZW1Ub1N0cmluZyA9IGZ1bmN0aW9uIChwcm9ibGVtKSB7XG5cdHN3aXRjaCAocHJvYmxlbS4kKSB7XG5cdFx0Y2FzZSAnRnVuY3Rpb24nOlxuXHRcdFx0cmV0dXJuICdmdW5jdGlvbnMnO1xuXHRcdGNhc2UgJ0RlY29kZXInOlxuXHRcdFx0cmV0dXJuICdKU09OIGRlY29kZXJzJztcblx0XHRjYXNlICdUYXNrJzpcblx0XHRcdHJldHVybiAndGFza3MnO1xuXHRcdGNhc2UgJ1Byb2Nlc3MnOlxuXHRcdFx0cmV0dXJuICdwcm9jZXNzZXMnO1xuXHRcdGNhc2UgJ1NvY2tldCc6XG5cdFx0XHRyZXR1cm4gJ3dlYiBzb2NrZXRzJztcblx0XHRjYXNlICdSZXF1ZXN0Jzpcblx0XHRcdHJldHVybiAnSFRUUCByZXF1ZXN0cyc7XG5cdFx0Y2FzZSAnUHJvZ3JhbSc6XG5cdFx0XHRyZXR1cm4gJ3Byb2dyYW1zJztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICd2aXJ0dWFsIERPTSB2YWx1ZXMnO1xuXHR9XG59O1xudmFyIGVsbSRodG1sJEh0bWwkbGkgPSBfVmlydHVhbERvbV9ub2RlKCdsaScpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld1Byb2JsZW1UeXBlID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgbmFtZSA9IF9uMC5uYW1lO1xuXHR2YXIgcHJvYmxlbXMgPSBfbjAucHJvYmxlbXM7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJGxpLFxuXHRcdF9MaXN0X05pbCxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUobmFtZSksXG5cdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChcblx0XHRcdFx0JyBjYW4gY29udGFpbiAnICsgKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYWRkQ29tbWFzKFxuXHRcdFx0XHRcdEEyKGVsbSRjb3JlJExpc3QkbWFwLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHByb2JsZW1Ub1N0cmluZywgcHJvYmxlbXMpKSArICcuJykpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0JhZE1ldGFkYXRhID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgbWVzc2FnZSA9IF9uMC5tZXNzYWdlO1xuXHR2YXIgcHJvYmxlbXMgPSBfbjAucHJvYmxlbXM7XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0W1xuXHRcdFx0QTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ1RoZSAnKSxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlKG1lc3NhZ2UpLFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnIHR5cGUgb2YgeW91ciBwcm9ncmFtIGNhbm5vdCBiZSByZWxpYWJseSBzZXJpYWxpemVkIGZvciBoaXN0b3J5IGZpbGVzLicpXG5cdFx0XHRcdF0pKSxcblx0XHRcdEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdGdW5jdGlvbnMgY2Fubm90IGJlIHNlcmlhbGl6ZWQsIG5vciBjYW4gdmFsdWVzIHRoYXQgY29udGFpbiBmdW5jdGlvbnMuIFRoaXMgaXMgYSBwcm9ibGVtIGluIHRoZXNlIHBsYWNlczonKVxuXHRcdFx0XHRdKSksXG5cdFx0XHRBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkdWwsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRBMihlbG0kY29yZSRMaXN0JG1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3UHJvYmxlbVR5cGUsIHByb2JsZW1zKSksXG5cdFx0XHRBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkcCxcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGdvb2ROZXdzMSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJ2h0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL3R5cGVzL3VuaW9uX3R5cGVzLmh0bWwnKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ3VuaW9uIHR5cGVzJylcblx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJywgaW4geW91ciBtZXNzYWdlcy4gRnJvbSB0aGVyZSwgeW91ciAnKSxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlKCd1cGRhdGUnKSxcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRnb29kTmV3czIpXG5cdFx0XHRcdF0pKVxuXHRcdF0pO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JENhbmNlbCA9IHskOiAnQ2FuY2VsJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRQcm9jZWVkID0geyQ6ICdQcm9jZWVkJ307XG52YXIgZWxtJGh0bWwkSHRtbCRidXR0b24gPSBfVmlydHVhbERvbV9ub2RlKCdidXR0b24nKTtcbnZhciBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRzdHlsZSA9IF9WaXJ0dWFsRG9tX3N0eWxlO1xudmFyIGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSA9IGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHN0eWxlO1xudmFyIGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJE5vcm1hbCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ05vcm1hbCcsIGE6IGF9O1xufTtcbnZhciBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRvbiA9IF9WaXJ0dWFsRG9tX29uO1xudmFyIGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uID0gRjIoXG5cdGZ1bmN0aW9uIChldmVudCwgZGVjb2Rlcikge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG9uLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSROb3JtYWwoZGVjb2RlcikpO1xuXHR9KTtcbnZhciBlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb24sXG5cdFx0J2NsaWNrJyxcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRzdWNjZWVkKG1zZykpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdCdXR0b25zID0gZnVuY3Rpb24gKGJ1dHRvbnMpIHtcblx0dmFyIGJ0biA9IEYyKFxuXHRcdGZ1bmN0aW9uIChtc2csIHN0cmluZykge1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJGJ1dHRvbixcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ21hcmdpbi1yaWdodCcsICcyMHB4JyksXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKG1zZylcblx0XHRcdFx0XHRdKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdHJpbmcpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdH0pO1xuXHR2YXIgYnV0dG9uTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGJ1dHRvbnMuJCA9PT0gJ0FjY2VwdCcpIHtcblx0XHRcdHZhciBwcm9jZWVkID0gYnV0dG9ucy5hO1xuXHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKGJ0biwgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRQcm9jZWVkLCBwcm9jZWVkKVxuXHRcdFx0XHRdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNhbmNlbCA9IGJ1dHRvbnMuYTtcblx0XHRcdHZhciBwcm9jZWVkID0gYnV0dG9ucy5iO1xuXHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKGJ0biwgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRDYW5jZWwsIGNhbmNlbCksXG5cdFx0XHRcdFx0QTIoYnRuLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JFByb2NlZWQsIHByb2NlZWQpXG5cdFx0XHRcdF0pO1xuXHRcdH1cblx0fSgpO1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnNjBweCcpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdsaW5lLWhlaWdodCcsICc2MHB4JyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3RleHQtYWxpZ24nLCAncmlnaHQnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoNTAsIDUwLCA1MCknKVxuXHRcdFx0XSksXG5cdFx0YnV0dG9uTm9kZXMpO1xufTtcbnZhciBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRtYXAgPSBfVmlydHVhbERvbV9tYXA7XG52YXIgZWxtJGh0bWwkSHRtbCRtYXAgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRtYXA7XG52YXIgZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGlkID0gZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5KCdpZCcpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lc3NhZ2UgPSBGNChcblx0ZnVuY3Rpb24gKGNvbmZpZywgdGl0bGUsIGRldGFpbHMsIGJ1dHRvbnMpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRpZCgnZWxtLWRlYnVnZ2VyLW92ZXJsYXknKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb3NpdGlvbicsICdmaXhlZCcpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3RvcCcsICcwJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGVmdCcsICcwJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnMTAwJScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAnd2hpdGUnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb2ludGVyLWV2ZW50cycsICdub25lJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1mYW1pbHknLCAnXFwnVHJlYnVjaGV0IE1TXFwnLCBcXCdMdWNpZGEgR3JhbmRlXFwnLCBcXCdCaXRzdHJlYW0gVmVyYSBTYW5zXFwnLCBcXCdIZWx2ZXRpY2EgTmV1ZVxcJywgc2Fucy1zZXJpZicpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3otaW5kZXgnLCAnMjE0NzQ4MzY0NycpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICc2MDBweCcpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nLWxlZnQnLCAnY2FsYyg1MCUgLSAzMDBweCknKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZy1yaWdodCcsICdjYWxjKDUwJSAtIDMwMHB4KScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC43KScpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb2ludGVyLWV2ZW50cycsICdhdXRvJylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1zaXplJywgJzM2cHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICc4MHB4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig1MCwgNTAsIDUwKScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZy1sZWZ0JywgJzIycHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3ZlcnRpY2FsLWFsaWduJywgJ21pZGRsZScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGluZS1oZWlnaHQnLCAnODBweCcpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQodGl0bGUpXG5cdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ2VsbS1kZWJ1Z2dlci1kZXRhaWxzJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nJywgJyA4cHggMjBweCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnb3ZlcmZsb3cteScsICdhdXRvJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdtYXgtaGVpZ2h0JywgJ2NhbGMoMTAwJSAtIDE1NnB4KScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoNjEsIDYxLCA2MSknKVxuXHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRkZXRhaWxzKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRjb25maWcud3JhcCxcblx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3QnV0dG9ucyhidXR0b25zKSlcblx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRodG1sJEh0bWwkc3BhbiA9IF9WaXJ0dWFsRG9tX25vZGUoJ3NwYW4nKTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGJ1dHRvbiA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCBsYWJlbCkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2sobXNnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGxhYmVsKVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0ltcG9ydEV4cG9ydCA9IEYzKFxuXHRmdW5jdGlvbiAocHJvcHMsIGltcG9ydE1zZywgZXhwb3J0TXNnKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRwcm9wcyxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYnV0dG9uLCBpbXBvcnRNc2csICdJbXBvcnQnKSxcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyAvICcpLFxuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYnV0dG9uLCBleHBvcnRNc2csICdFeHBvcnQnKVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01pbmlDb250cm9scyA9IEYyKFxuXHRmdW5jdGlvbiAoY29uZmlnLCBudW1Nc2dzKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb3NpdGlvbicsICdmaXhlZCcpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JvdHRvbScsICcwJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncmlnaHQnLCAnNnB4JyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYm9yZGVyLXJhZGl1cycsICc0cHgnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig2MSwgNjEsIDYxKScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJ3doaXRlJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1mYW1pbHknLCAnbW9ub3NwYWNlJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3otaW5kZXgnLCAnMjE0NzQ4MzY0NycpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nJywgJzZweCcpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjdXJzb3InLCAncG9pbnRlcicpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd0ZXh0LWFsaWduJywgJ2NlbnRlcicpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdtaW4td2lkdGgnLCAnMjRjaCcpLFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKGNvbmZpZy5vcGVuKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoXG5cdFx0XHRcdFx0XHRcdCdFeHBsb3JlIEhpc3RvcnkgKCcgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobnVtTXNncykgKyAnKScpKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0ltcG9ydEV4cG9ydCxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmcnLCAnNHB4IDAnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1zaXplJywgJzAuOGVtJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3RleHQtYWxpZ24nLCAnY2VudGVyJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDUwLCA1MCwgNTApJylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdGNvbmZpZy5pbXBvcnRIaXN0b3J5LFxuXHRcdFx0XHRcdGNvbmZpZy5leHBvcnRIaXN0b3J5KVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZXhwbGFuYXRpb25CYWQgPSAnXFxuVGhlIG1lc3NhZ2VzIGluIHRoaXMgaGlzdG9yeSBkbyBub3QgbWF0Y2ggdGhlIG1lc3NhZ2VzIGhhbmRsZWQgYnkgeW91clxcbnByb2dyYW0uIEkgbm90aWNlZCBjaGFuZ2VzIGluIHRoZSBmb2xsb3dpbmcgdHlwZXM6XFxuJztcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGV4cGxhbmF0aW9uUmlza3kgPSAnXFxuVGhpcyBoaXN0b3J5IHNlZW1zIG9sZC4gSXQgd2lsbCB3b3JrIHdpdGggdGhpcyBwcm9ncmFtLCBidXQgc29tZVxcbm1lc3NhZ2VzIGhhdmUgYmVlbiBhZGRlZCBzaW5jZSB0aGUgaGlzdG9yeSB3YXMgY3JlYXRlZDpcXG4nO1xudmFyIGVsbSRjb3JlJExpc3QkaW50ZXJzcGVyc2UgPSBGMihcblx0ZnVuY3Rpb24gKHNlcCwgeHMpIHtcblx0XHRpZiAoIXhzLmIpIHtcblx0XHRcdHJldHVybiBfTGlzdF9OaWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBoZCA9IHhzLmE7XG5cdFx0XHR2YXIgdGwgPSB4cy5iO1xuXHRcdFx0dmFyIHN0ZXAgPSBGMihcblx0XHRcdFx0ZnVuY3Rpb24gKHgsIHJlc3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRzZXAsXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSRMaXN0JGNvbnMsIHgsIHJlc3QpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR2YXIgc3BlcnNlZCA9IEEzKGVsbSRjb3JlJExpc3QkZm9sZHIsIHN0ZXAsIF9MaXN0X05pbCwgdGwpO1xuXHRcdFx0cmV0dXJuIEEyKGVsbSRjb3JlJExpc3QkY29ucywgaGQsIHNwZXJzZWQpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVudGlvbiA9IEYyKFxuXHRmdW5jdGlvbiAodGFncywgdmVyYmVkKSB7XG5cdFx0dmFyIF9uMCA9IEEyKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlLFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRyZXZlcnNlKHRhZ3MpKTtcblx0XHRpZiAoIV9uMC5iKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFfbjAuYi5iKSB7XG5cdFx0XHRcdHZhciB0YWcgPSBfbjAuYTtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbGksXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHZlcmJlZCksXG5cdFx0XHRcdFx0XHRcdHRhZyxcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcuJylcblx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghX24wLmIuYi5iKSB7XG5cdFx0XHRcdFx0dmFyIHRhZzIgPSBfbjAuYTtcblx0XHRcdFx0XHR2YXIgX24xID0gX24wLmI7XG5cdFx0XHRcdFx0dmFyIHRhZzEgPSBfbjEuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGxpLFxuXHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHZlcmJlZCksXG5cdFx0XHRcdFx0XHRcdFx0dGFnMSxcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyBhbmQgJyksXG5cdFx0XHRcdFx0XHRcdFx0dGFnMixcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJy4nKVxuXHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGxhc3RUYWcgPSBfbjAuYTtcblx0XHRcdFx0XHR2YXIgb3RoZXJUYWdzID0gX24wLmI7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCh2ZXJiZWQpLFxuXHRcdFx0XHRcdFx0XHRfVXRpbHNfYXAoXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGludGVyc3BlcnNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcsICcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRyZXZlcnNlKG90aGVyVGFncykpLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcsIGFuZCAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFzdFRhZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcuJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDaGFuZ2UgPSBmdW5jdGlvbiAoY2hhbmdlKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJGxpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWFyZ2luJywgJzhweCAwJylcblx0XHRcdF0pLFxuXHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChjaGFuZ2UuJCA9PT0gJ0FsaWFzQ2hhbmdlJykge1xuXHRcdFx0XHR2YXIgbmFtZSA9IGNoYW5nZS5hO1xuXHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1zaXplJywgJzEuNWVtJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlKG5hbWUpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG5hbWUgPSBjaGFuZ2UuYTtcblx0XHRcdFx0dmFyIHJlbW92ZWQgPSBjaGFuZ2UuYi5yZW1vdmVkO1xuXHRcdFx0XHR2YXIgY2hhbmdlZCA9IGNoYW5nZS5iLmNoYW5nZWQ7XG5cdFx0XHRcdHZhciBhZGRlZCA9IGNoYW5nZS5iLmFkZGVkO1xuXHRcdFx0XHR2YXIgYXJnc01hdGNoID0gY2hhbmdlLmIuYXJnc01hdGNoO1xuXHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1zaXplJywgJzEuNWVtJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlKG5hbWUpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR1bCxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2xpc3Qtc3R5bGUtdHlwZScsICdkaXNjJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZy1sZWZ0JywgJzJlbScpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVudGlvbiwgcmVtb3ZlZCwgJ1JlbW92ZWQgJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVudGlvbiwgY2hhbmdlZCwgJ0NoYW5nZWQgJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVudGlvbiwgYWRkZWQsICdBZGRlZCAnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRhcmdzTWF0Y2ggPyBlbG0kaHRtbCRIdG1sJHRleHQoJycpIDogZWxtJGh0bWwkSHRtbCR0ZXh0KCdUaGlzIG1heSBiZSBkdWUgdG8gdGhlIGZhY3QgdGhhdCB0aGUgdHlwZSB2YXJpYWJsZSBuYW1lcyBjaGFuZ2VkLicpXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHR9XG5cdFx0fSgpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3UmVwb3J0ID0gRjIoXG5cdGZ1bmN0aW9uIChpc0JhZCwgcmVwb3J0KSB7XG5cdFx0c3dpdGNoIChyZXBvcnQuJCkge1xuXHRcdFx0Y2FzZSAnQ29ycnVwdEhpc3RvcnknOlxuXHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnTG9va3MgbGlrZSB0aGlzIGhpc3RvcnkgZmlsZSBpcyBjb3JydXB0LiBJIGNhbm5vdCB1bmRlcnN0YW5kIGl0LicpXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRjYXNlICdWZXJzaW9uQ2hhbmdlZCc6XG5cdFx0XHRcdHZhciBvbGQgPSByZXBvcnQuYTtcblx0XHRcdFx0dmFyIF9uZXcgPSByZXBvcnQuYjtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ1RoaXMgaGlzdG9yeSB3YXMgY3JlYXRlZCB3aXRoIEVsbSAnICsgKG9sZCArICgnLCBidXQgeW91IGFyZSB1c2luZyBFbG0gJyArIChfbmV3ICsgJyByaWdodCBub3cuJykpKSlcblx0XHRcdFx0XHRdKTtcblx0XHRcdGNhc2UgJ01lc3NhZ2VDaGFuZ2VkJzpcblx0XHRcdFx0dmFyIG9sZCA9IHJlcG9ydC5hO1xuXHRcdFx0XHR2YXIgX25ldyA9IHJlcG9ydC5iO1xuXHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnVG8gaW1wb3J0IHNvbWUgb3RoZXIgaGlzdG9yeSwgdGhlIG92ZXJhbGwgbWVzc2FnZSB0eXBlIG11c3QnICsgJyBiZSB0aGUgc2FtZS4gVGhlIG9sZCBoaXN0b3J5IGhhcyAnKSxcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUob2xkKSxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnIG1lc3NhZ2VzLCBidXQgdGhlIG5ldyBwcm9ncmFtIHdvcmtzIHdpdGggJyksXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlKF9uZXcpLFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgbWVzc2FnZXMuJylcblx0XHRcdFx0XHRdKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBjaGFuZ2VzID0gcmVwb3J0LmE7XG5cdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoXG5cdFx0XHRcdFx0XHRcdFx0aXNCYWQgPyBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGV4cGxhbmF0aW9uQmFkIDogZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRleHBsYW5hdGlvblJpc2t5KVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdWwsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdsaXN0LXN0eWxlLXR5cGUnLCAnbm9uZScpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICcyMHB4Jylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSRMaXN0JG1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q2hhbmdlLCBjaGFuZ2VzKSlcblx0XHRcdFx0XHRdKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlldyA9IEY1KFxuXHRmdW5jdGlvbiAoY29uZmlnLCBpc1BhdXNlZCwgaXNPcGVuLCBudW1Nc2dzLCBzdGF0ZSkge1xuXHRcdHN3aXRjaCAoc3RhdGUuJCkge1xuXHRcdFx0Y2FzZSAnTm9uZSc6XG5cdFx0XHRcdHJldHVybiBpc09wZW4gPyBlbG0kaHRtbCRIdG1sJHRleHQoJycpIDogKGlzUGF1c2VkID8gQTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2N1cnNvcicsICdwb2ludGVyJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3RleHQtYWxpZ24nLCAnY2VudGVyJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNyknKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAnd2hpdGUnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1mYW1pbHknLCAnXFwnVHJlYnVjaGV0IE1TXFwnLCBcXCdMdWNpZGEgR3JhbmRlXFwnLCBcXCdCaXRzdHJlYW0gVmVyYSBTYW5zXFwnLCBcXCdIZWx2ZXRpY2EgTmV1ZVxcJywgc2Fucy1zZXJpZicpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd6LWluZGV4JywgJzIxNDc0ODM2NDYnKSxcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhjb25maWcucmVzdW1lKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndG9wJywgJ2NhbGMoNTAlIC0gNDBweCknKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtc2l6ZScsICc4MHB4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdsaW5lLWhlaWdodCcsICc4MHB4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnODBweCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnMTAwJScpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ0NsaWNrIHRvIFJlc3VtZScpXG5cdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNaW5pQ29udHJvbHMsIGNvbmZpZywgbnVtTXNncylcblx0XHRcdFx0XHRcdF0pKSA6IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01pbmlDb250cm9scywgY29uZmlnLCBudW1Nc2dzKSk7XG5cdFx0XHRjYXNlICdCYWRNZXRhZGF0YSc6XG5cdFx0XHRcdHZhciBiYWRNZXRhZGF0YV8gPSBzdGF0ZS5hO1xuXHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVzc2FnZSxcblx0XHRcdFx0XHRjb25maWcsXG5cdFx0XHRcdFx0J0Nhbm5vdCB1c2UgSW1wb3J0IG9yIEV4cG9ydCcsXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3QmFkTWV0YWRhdGEoYmFkTWV0YWRhdGFfKSxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEFjY2VwdCgnT2snKSk7XG5cdFx0XHRjYXNlICdCYWRJbXBvcnQnOlxuXHRcdFx0XHR2YXIgcmVwb3J0ID0gc3RhdGUuYTtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lc3NhZ2UsXG5cdFx0XHRcdFx0Y29uZmlnLFxuXHRcdFx0XHRcdCdDYW5ub3QgSW1wb3J0IEhpc3RvcnknLFxuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld1JlcG9ydCwgdHJ1ZSwgcmVwb3J0KSxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEFjY2VwdCgnT2snKSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR2YXIgcmVwb3J0ID0gc3RhdGUuYTtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lc3NhZ2UsXG5cdFx0XHRcdFx0Y29uZmlnLFxuXHRcdFx0XHRcdCdXYXJuaW5nJyxcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdSZXBvcnQsIGZhbHNlLCByZXBvcnQpLFxuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQ2hvb3NlLCAnQ2FuY2VsJywgJ0ltcG9ydCBBbnl3YXknKSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGNvcm5lclZpZXcgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEE1KFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlldyxcblx0XHR7ZXhwb3J0SGlzdG9yeTogZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRFeHBvcnQsIGltcG9ydEhpc3Rvcnk6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kSW1wb3J0LCBvcGVuOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE9wZW4sIHJlc3VtZTogZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSZXN1bWUsIHdyYXA6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kT3ZlcmxheU1zZ30sXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRpc1BhdXNlZChtb2RlbC5zdGF0ZSksXG5cdFx0X0RlYnVnZ2VyX2lzT3Blbihtb2RlbC5wb3BvdXQpLFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc2l6ZShtb2RlbC5oaXN0b3J5KSxcblx0XHRtb2RlbC5vdmVybGF5KTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRDdXJyZW50TW9kZWwgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblx0aWYgKHN0YXRlLiQgPT09ICdSdW5uaW5nJykge1xuXHRcdHZhciBtb2RlbCA9IHN0YXRlLmE7XG5cdFx0cmV0dXJuIG1vZGVsO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBtb2RlbCA9IHN0YXRlLmI7XG5cdFx0cmV0dXJuIG1vZGVsO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0VXNlck1vZGVsID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldEN1cnJlbnRNb2RlbChtb2RlbC5zdGF0ZSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRmllbGQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdGaWVsZCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4ID0gRjMoXG5cdGZ1bmN0aW9uIChhLCBiLCBjKSB7XG5cdFx0cmV0dXJuIHskOiAnSW5kZXgnLCBhOiBhLCBiOiBiLCBjOiBjfTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRLZXkgPSB7JDogJ0tleSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTm9uZSA9IHskOiAnTm9uZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVG9nZ2xlID0geyQ6ICdUb2dnbGUnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFZhbHVlID0geyQ6ICdWYWx1ZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kYmx1ZSA9IEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJ3JnYigyOCwgMCwgMjA3KScpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZCA9IGZ1bmN0aW9uIChtYXliZUtleSkge1xuXHRpZiAobWF5YmVLZXkuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0cmV0dXJuIF9MaXN0X05pbDtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nLWxlZnQnLCAnNGNoJylcblx0XHRcdF0pO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWFrZUFycm93ID0gZnVuY3Rpb24gKGFycm93KSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICcjNzc3JyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICcyY2gnKSxcblx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnMmNoJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcblx0XHRcdF0pLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGFycm93KVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHB1cnBsZSA9IEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJ3JnYigxMzYsIDE5LCAxNDUpJyk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlciA9IEYzKFxuXHRmdW5jdGlvbiAobWF5YmVLZXksIG1heWJlSXNDbG9zZWQsIGRlc2NyaXB0aW9uKSB7XG5cdFx0dmFyIGFycm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKG1heWJlSXNDbG9zZWQuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1ha2VBcnJvdygnJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobWF5YmVJc0Nsb3NlZC5hKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWFrZUFycm93KCfilrgnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtYWtlQXJyb3coJ+KWvicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSgpO1xuXHRcdGlmIChtYXliZUtleS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdHJldHVybiBBMihlbG0kY29yZSRMaXN0JGNvbnMsIGFycm93LCBkZXNjcmlwdGlvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBrZXkgPSBtYXliZUtleS5hO1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdGFycm93LFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHB1cnBsZV0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGtleSlcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcgPSAnKSxcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uKSkpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRyZWQgPSBBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICdyZ2IoMTk2LCAyNiwgMjIpJyk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRzZXFUeXBlVG9TdHJpbmcgPSBGMihcblx0ZnVuY3Rpb24gKG4sIHNlcVR5cGUpIHtcblx0XHRzd2l0Y2ggKHNlcVR5cGUuJCkge1xuXHRcdFx0Y2FzZSAnTGlzdFNlcSc6XG5cdFx0XHRcdHJldHVybiAnTGlzdCgnICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG4pICsgJyknKTtcblx0XHRcdGNhc2UgJ1NldFNlcSc6XG5cdFx0XHRcdHJldHVybiAnU2V0KCcgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobikgKyAnKScpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuICdBcnJheSgnICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG4pICsgJyknKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJFN0cmluZyRzbGljZSA9IF9TdHJpbmdfc2xpY2U7XG52YXIgZWxtJGNvcmUkU3RyaW5nJGxlZnQgPSBGMihcblx0ZnVuY3Rpb24gKG4sIHN0cmluZykge1xuXHRcdHJldHVybiAobiA8IDEpID8gJycgOiBBMyhlbG0kY29yZSRTdHJpbmckc2xpY2UsIDAsIG4sIHN0cmluZyk7XG5cdH0pO1xudmFyIGVsbSRjb3JlJFN0cmluZyRsZW5ndGggPSBfU3RyaW5nX2xlbmd0aDtcbnZhciBlbG0kY29yZSRCYXNpY3MkbmVnYXRlID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIC1uO1xufTtcbnZhciBlbG0kY29yZSRTdHJpbmckcmlnaHQgPSBGMihcblx0ZnVuY3Rpb24gKG4sIHN0cmluZykge1xuXHRcdHJldHVybiAobiA8IDEpID8gJycgOiBBMyhcblx0XHRcdGVsbSRjb3JlJFN0cmluZyRzbGljZSxcblx0XHRcdC1uLFxuXHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHJpbmcpLFxuXHRcdFx0c3RyaW5nKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRlbGlkZU1pZGRsZSA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIChlbG0kY29yZSRTdHJpbmckbGVuZ3RoKHN0cikgPD0gMTgpID8gc3RyIDogKEEyKGVsbSRjb3JlJFN0cmluZyRsZWZ0LCA4LCBzdHIpICsgKCcuLi4nICsgQTIoZWxtJGNvcmUkU3RyaW5nJHJpZ2h0LCA4LCBzdHIpKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueVJlY29yZCA9IEYzKFxuXHRmdW5jdGlvbiAobGVuZ3RoLCBzdGFydGVyLCBlbnRyaWVzKSB7XG5cdFx0aWYgKCFlbnRyaWVzLmIpIHtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRsZW5ndGggKyAxLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCd9Jylcblx0XHRcdFx0XHRdKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBmaWVsZCA9IGVudHJpZXMuYTtcblx0XHRcdHZhciByZXN0ID0gZW50cmllcy5iO1xuXHRcdFx0dmFyIG5leHRMZW5ndGggPSAobGVuZ3RoICsgZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChmaWVsZCkpICsgMTtcblx0XHRcdGlmIChuZXh0TGVuZ3RoID4gMTgpIHtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0bGVuZ3RoICsgMixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgn4oCmfScpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX24xID0gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RXh0cmFUaW55UmVjb3JkLCBuZXh0TGVuZ3RoLCAnLCcsIHJlc3QpO1xuXHRcdFx0XHR2YXIgZmluYWxMZW5ndGggPSBfbjEuYTtcblx0XHRcdFx0dmFyIG90aGVySHRtbHMgPSBfbjEuYjtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0ZmluYWxMZW5ndGgsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RhcnRlciksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W2VsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kcHVycGxlXSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoZmllbGQpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdG90aGVySHRtbHMpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55SGVscCA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0ZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHIpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0cilcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGNvcmUkRGljdCRpc0VtcHR5ID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0aWYgKGRpY3QuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGVsbSRjb3JlJE1heWJlJHdpdGhEZWZhdWx0ID0gRjIoXG5cdGZ1bmN0aW9uIChfZGVmYXVsdCwgbWF5YmUpIHtcblx0XHRpZiAobWF5YmUuJCA9PT0gJ0p1c3QnKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSBtYXliZS5hO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2RlZmF1bHQ7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdFeHRyYVRpbnkgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKHZhbHVlLiQgPT09ICdSZWNvcmQnKSB7XG5cdFx0dmFyIHJlY29yZCA9IHZhbHVlLmI7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RXh0cmFUaW55UmVjb3JkLFxuXHRcdFx0MCxcblx0XHRcdCd7Jyxcblx0XHRcdGVsbSRjb3JlJERpY3Qka2V5cyhyZWNvcmQpKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueSh2YWx1ZSk7XG5cdH1cbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRzd2l0Y2ggKHZhbHVlLiQpIHtcblx0XHRjYXNlICdTJzpcblx0XHRcdHZhciBzdHJpbmdSZXAgPSB2YWx1ZS5hO1xuXHRcdFx0dmFyIHN0ciA9IGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kZWxpZGVNaWRkbGUoc3RyaW5nUmVwKTtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRlbG0kY29yZSRTdHJpbmckbGVuZ3RoKHN0ciksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W2VsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kcmVkXSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RyKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKSk7XG5cdFx0Y2FzZSAnUHJpbWl0aXZlJzpcblx0XHRcdHZhciBzdHJpbmdSZXAgPSB2YWx1ZS5hO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoc3RyaW5nUmVwKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRibHVlXSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RyaW5nUmVwKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKSk7XG5cdFx0Y2FzZSAnU2VxdWVuY2UnOlxuXHRcdFx0dmFyIHNlcVR5cGUgPSB2YWx1ZS5hO1xuXHRcdFx0dmFyIHZhbHVlTGlzdCA9IHZhbHVlLmM7XG5cdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueUhlbHAoXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kc2VxVHlwZVRvU3RyaW5nLFxuXHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkbGVuZ3RoKHZhbHVlTGlzdCksXG5cdFx0XHRcdFx0c2VxVHlwZSkpO1xuXHRcdGNhc2UgJ0RpY3Rpb25hcnknOlxuXHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSB2YWx1ZS5iO1xuXHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlIZWxwKFxuXHRcdFx0XHQnRGljdCgnICsgKGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KFxuXHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkbGVuZ3RoKGtleVZhbHVlUGFpcnMpKSArICcpJykpO1xuXHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHR2YXIgcmVjb3JkID0gdmFsdWUuYjtcblx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55UmVjb3JkKHJlY29yZCk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGlmICghdmFsdWUuYy5iKSB7XG5cdFx0XHRcdHZhciBtYXliZU5hbWUgPSB2YWx1ZS5hO1xuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueUhlbHAoXG5cdFx0XHRcdFx0QTIoZWxtJGNvcmUkTWF5YmUkd2l0aERlZmF1bHQsICdVbml0JywgbWF5YmVOYW1lKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbWF5YmVOYW1lID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIHZhbHVlTGlzdCA9IHZhbHVlLmM7XG5cdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55SGVscChcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAobWF5YmVOYW1lLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ1R1cGxlKCcgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRsZW5ndGgodmFsdWVMaXN0KSkgKyAnKScpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIG5hbWUgPSBtYXliZU5hbWUuYTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG5hbWUgKyAnIOKApic7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSgpKTtcblx0XHRcdH1cblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55UmVjb3JkID0gZnVuY3Rpb24gKHJlY29yZCkge1xuXHRyZXR1cm4gZWxtJGNvcmUkRGljdCRpc0VtcHR5KHJlY29yZCkgPyBfVXRpbHNfVHVwbGUyKFxuXHRcdDIsXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ3t9Jylcblx0XHRcdF0pKSA6IEEzKFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlSZWNvcmRIZWxwLFxuXHRcdDAsXG5cdFx0J3sgJyxcblx0XHRlbG0kY29yZSREaWN0JHRvTGlzdChyZWNvcmQpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZEhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKGxlbmd0aCwgc3RhcnRlciwgZW50cmllcykge1xuXHRcdGlmICghZW50cmllcy5iKSB7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0bGVuZ3RoICsgMixcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnIH0nKVxuXHRcdFx0XHRcdF0pKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9uMSA9IGVudHJpZXMuYTtcblx0XHRcdHZhciBmaWVsZCA9IF9uMS5hO1xuXHRcdFx0dmFyIHZhbHVlID0gX24xLmI7XG5cdFx0XHR2YXIgcmVzdCA9IGVudHJpZXMuYjtcblx0XHRcdHZhciBmaWVsZExlbiA9IGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoZmllbGQpO1xuXHRcdFx0dmFyIF9uMiA9IGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueSh2YWx1ZSk7XG5cdFx0XHR2YXIgdmFsdWVMZW4gPSBfbjIuYTtcblx0XHRcdHZhciB2YWx1ZUh0bWxzID0gX24yLmI7XG5cdFx0XHR2YXIgbmV3TGVuZ3RoID0gKChsZW5ndGggKyBmaWVsZExlbikgKyB2YWx1ZUxlbikgKyA1O1xuXHRcdFx0aWYgKG5ld0xlbmd0aCA+IDYwKSB7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGxlbmd0aCArIDQsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJywg4oCmIH0nKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9uMyA9IEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlSZWNvcmRIZWxwLCBuZXdMZW5ndGgsICcsICcsIHJlc3QpO1xuXHRcdFx0XHR2YXIgZmluYWxMZW5ndGggPSBfbjMuYTtcblx0XHRcdFx0dmFyIG90aGVySHRtbHMgPSBfbjMuYjtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0ZmluYWxMZW5ndGgsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RhcnRlciksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W2VsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kcHVycGxlXSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoZmllbGQpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyA9ICcpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRzcGFuLCBfTGlzdF9OaWwsIHZhbHVlSHRtbHMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3RoZXJIdG1scykpKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJGNvbXBvc2VMID0gRjMoXG5cdGZ1bmN0aW9uIChnLCBmLCB4KSB7XG5cdFx0cmV0dXJuIGcoXG5cdFx0XHRmKHgpKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkVHVwbGUkc2Vjb25kID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgeSA9IF9uMC5iO1xuXHRyZXR1cm4geTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3ID0gRjIoXG5cdGZ1bmN0aW9uIChtYXliZUtleSwgZXhwYW5kbykge1xuXHRcdHN3aXRjaCAoZXhwYW5kby4kKSB7XG5cdFx0XHRjYXNlICdTJzpcblx0XHRcdFx0dmFyIHN0cmluZ1JlcCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChtYXliZUtleSksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyLFxuXHRcdFx0XHRcdFx0bWF5YmVLZXksXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHJlZF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0cmluZ1JlcClcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSkpO1xuXHRcdFx0Y2FzZSAnUHJpbWl0aXZlJzpcblx0XHRcdFx0dmFyIHN0cmluZ1JlcCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChtYXliZUtleSksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyLFxuXHRcdFx0XHRcdFx0bWF5YmVLZXksXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGJsdWVdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChzdHJpbmdSZXApXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XSkpKTtcblx0XHRcdGNhc2UgJ1NlcXVlbmNlJzpcblx0XHRcdFx0dmFyIHNlcVR5cGUgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0dmFyIHZhbHVlTGlzdCA9IGV4cGFuZG8uYztcblx0XHRcdFx0cmV0dXJuIEE0KGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1NlcXVlbmNlLCBtYXliZUtleSwgc2VxVHlwZSwgaXNDbG9zZWQsIHZhbHVlTGlzdCk7XG5cdFx0XHRjYXNlICdEaWN0aW9uYXJ5Jzpcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gZXhwYW5kby5hO1xuXHRcdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IGV4cGFuZG8uYjtcblx0XHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnksIG1heWJlS2V5LCBpc0Nsb3NlZCwga2V5VmFsdWVQYWlycyk7XG5cdFx0XHRjYXNlICdSZWNvcmQnOlxuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciB2YWx1ZURpY3QgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHJldHVybiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdSZWNvcmQsIG1heWJlS2V5LCBpc0Nsb3NlZCwgdmFsdWVEaWN0KTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBtYXliZU5hbWUgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0dmFyIHZhbHVlTGlzdCA9IGV4cGFuZG8uYztcblx0XHRcdFx0cmV0dXJuIEE0KGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0NvbnN0cnVjdG9yLCBtYXliZUtleSwgbWF5YmVOYW1lLCBpc0Nsb3NlZCwgdmFsdWVMaXN0KTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0NvbnN0cnVjdG9yID0gRjQoXG5cdGZ1bmN0aW9uIChtYXliZUtleSwgbWF5YmVOYW1lLCBpc0Nsb3NlZCwgdmFsdWVMaXN0KSB7XG5cdFx0dmFyIHRpbnlBcmdzID0gQTIoXG5cdFx0XHRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdEEyKGVsbSRjb3JlJEJhc2ljcyRjb21wb3NlTCwgZWxtJGNvcmUkVHVwbGUkc2Vjb25kLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdFeHRyYVRpbnkpLFxuXHRcdFx0dmFsdWVMaXN0KTtcblx0XHR2YXIgZGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX243ID0gX1V0aWxzX1R1cGxlMihtYXliZU5hbWUsIHRpbnlBcmdzKTtcblx0XHRcdGlmIChfbjcuYS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0aWYgKCFfbjcuYi5iKSB7XG5cdFx0XHRcdFx0dmFyIF9uOCA9IF9uNy5hO1xuXHRcdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnKCknKVxuXHRcdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIF9uOSA9IF9uNy5hO1xuXHRcdFx0XHRcdHZhciBfbjEwID0gX243LmI7XG5cdFx0XHRcdFx0dmFyIHggPSBfbjEwLmE7XG5cdFx0XHRcdFx0dmFyIHhzID0gX24xMC5iO1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnKCAnKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkc3BhbiwgX0xpc3RfTmlsLCB4KSxcblx0XHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdFx0XHRcdFx0XHRGMihcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChhcmdzLCByZXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCcsICcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRzcGFuLCBfTGlzdF9OaWwsIGFyZ3MpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdCkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyApJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdHhzKSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIV9uNy5iLmIpIHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IF9uNy5hLmE7XG5cdFx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KG5hbWUpXG5cdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IF9uNy5hLmE7XG5cdFx0XHRcdFx0dmFyIF9uMTEgPSBfbjcuYjtcblx0XHRcdFx0XHR2YXIgeCA9IF9uMTEuYTtcblx0XHRcdFx0XHR2YXIgeHMgPSBfbjExLmI7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KG5hbWUgKyAnICcpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRzcGFuLCBfTGlzdF9OaWwsIHgpLFxuXHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0XHRcdFx0XHRcdEYyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGFyZ3MsIHJlc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJyAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkc3BhbiwgX0xpc3RfTmlsLCBhcmdzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3QpKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0XHR4cykpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0oKTtcblx0XHR2YXIgX240ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCF2YWx1ZUxpc3QuYikge1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCF2YWx1ZUxpc3QuYi5iKSB7XG5cdFx0XHRcdFx0dmFyIGVudHJ5ID0gdmFsdWVMaXN0LmE7XG5cdFx0XHRcdFx0c3dpdGNoIChlbnRyeS4kKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdTJzpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJGRpdiwgX0xpc3RfTmlsLCBfTGlzdF9OaWwpKTtcblx0XHRcdFx0XHRcdGNhc2UgJ1ByaW1pdGl2ZSc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSk7XG5cdFx0XHRcdFx0XHRjYXNlICdTZXF1ZW5jZSc6XG5cdFx0XHRcdFx0XHRcdHZhciBzdWJWYWx1ZUxpc3QgPSBlbnRyeS5jO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KGlzQ2xvc2VkKSxcblx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCA/IEEyKGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbCkgOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyROb25lLCAwKSxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1NlcXVlbmNlT3BlbihzdWJWYWx1ZUxpc3QpKSk7XG5cdFx0XHRcdFx0XHRjYXNlICdEaWN0aW9uYXJ5Jzpcblx0XHRcdFx0XHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSBlbnRyeS5iO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KGlzQ2xvc2VkKSxcblx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCA/IEEyKGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbCkgOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyROb25lLCAwKSxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnlPcGVuKGtleVZhbHVlUGFpcnMpKSk7XG5cdFx0XHRcdFx0XHRjYXNlICdSZWNvcmQnOlxuXHRcdFx0XHRcdFx0XHR2YXIgcmVjb3JkID0gZW50cnkuYjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQgPyBBMihlbG0kaHRtbCRIdG1sJGRpdiwgX0xpc3RfTmlsLCBfTGlzdF9OaWwpIDogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTm9uZSwgMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdSZWNvcmRPcGVuKHJlY29yZCkpKTtcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHZhciBzdWJWYWx1ZUxpc3QgPSBlbnRyeS5jO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KGlzQ2xvc2VkKSxcblx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCA/IEEyKGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbCkgOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyROb25lLCAwKSxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0NvbnN0cnVjdG9yT3BlbihzdWJWYWx1ZUxpc3QpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRpc0Nsb3NlZCA/IEEyKGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbCkgOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3Rvck9wZW4odmFsdWVMaXN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KCk7XG5cdFx0dmFyIG1heWJlSXNDbG9zZWQgPSBfbjQuYTtcblx0XHR2YXIgb3Blbkh0bWwgPSBfbjQuYjtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChtYXliZUtleSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRUb2dnbGUpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyLCBtYXliZUtleSwgbWF5YmVJc0Nsb3NlZCwgZGVzY3JpcHRpb24pKSxcblx0XHRcdFx0XHRvcGVuSHRtbFxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0NvbnN0cnVjdG9yRW50cnkgPSBGMihcblx0ZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyROb25lLCBpbmRleCksXG5cdFx0XHRBMihcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LFxuXHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KGluZGV4KSksXG5cdFx0XHRcdHZhbHVlKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0NvbnN0cnVjdG9yT3BlbiA9IGZ1bmN0aW9uICh2YWx1ZUxpc3QpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X05pbCxcblx0XHRBMihlbG0kY29yZSRMaXN0JGluZGV4ZWRNYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0NvbnN0cnVjdG9yRW50cnksIHZhbHVlTGlzdCkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5ID0gRjMoXG5cdGZ1bmN0aW9uIChtYXliZUtleSwgaXNDbG9zZWQsIGtleVZhbHVlUGFpcnMpIHtcblx0XHR2YXIgc3RhcnRlciA9ICdEaWN0KCcgKyAoZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoXG5cdFx0XHRlbG0kY29yZSRMaXN0JGxlbmd0aChrZXlWYWx1ZVBhaXJzKSkgKyAnKScpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsZWZ0UGFkKG1heWJlS2V5KSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFRvZ2dsZSlcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlcixcblx0XHRcdFx0XHRcdG1heWJlS2V5LFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoc3RhcnRlcilcblx0XHRcdFx0XHRcdFx0XSkpKSxcblx0XHRcdFx0XHRpc0Nsb3NlZCA/IGVsbSRodG1sJEh0bWwkdGV4dCgnJykgOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5T3BlbihrZXlWYWx1ZVBhaXJzKVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnlFbnRyeSA9IEYyKFxuXHRmdW5jdGlvbiAoaW5kZXgsIF9uMikge1xuXHRcdHZhciBrZXkgPSBfbjIuYTtcblx0XHR2YXIgdmFsdWUgPSBfbjIuYjtcblx0XHRzd2l0Y2ggKGtleS4kKSB7XG5cdFx0XHRjYXNlICdTJzpcblx0XHRcdFx0dmFyIHN0cmluZ1JlcCA9IGtleS5hO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRWYWx1ZSwgaW5kZXgpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChzdHJpbmdSZXApLFxuXHRcdFx0XHRcdFx0dmFsdWUpKTtcblx0XHRcdGNhc2UgJ1ByaW1pdGl2ZSc6XG5cdFx0XHRcdHZhciBzdHJpbmdSZXAgPSBrZXkuYTtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVmFsdWUsIGluZGV4KSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldyxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3Qoc3RyaW5nUmVwKSxcblx0XHRcdFx0XHRcdHZhbHVlKSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEtleSwgaW5kZXgpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdCgna2V5JyksXG5cdFx0XHRcdFx0XHRcdFx0a2V5KSksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRWYWx1ZSwgaW5kZXgpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdCgndmFsdWUnKSxcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSkpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5T3BlbiA9IGZ1bmN0aW9uIChrZXlWYWx1ZVBhaXJzKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRfTGlzdF9OaWwsXG5cdFx0QTIoZWxtJGNvcmUkTGlzdCRpbmRleGVkTWFwLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5RW50cnksIGtleVZhbHVlUGFpcnMpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkID0gRjMoXG5cdGZ1bmN0aW9uIChtYXliZUtleSwgaXNDbG9zZWQsIHJlY29yZCkge1xuXHRcdHZhciBfbjEgPSBpc0Nsb3NlZCA/IF9VdGlsc19UdXBsZTMoXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55UmVjb3JkKHJlY29yZCkuYixcblx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnJyksXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJycpKSA6IF9VdGlsc19UdXBsZTMoXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHRleHQoJ3snKVxuXHRcdFx0XHRdKSxcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1JlY29yZE9wZW4ocmVjb3JkKSxcblx0XHRcdEEyKFxuXHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsZWZ0UGFkKFxuXHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoX1V0aWxzX1R1cGxlMCkpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCd9Jylcblx0XHRcdFx0XHRdKSkpO1xuXHRcdHZhciBzdGFydCA9IF9uMS5hO1xuXHRcdHZhciBtaWRkbGUgPSBfbjEuYjtcblx0XHR2YXIgZW5kID0gX24xLmM7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQobWF5YmVLZXkpLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVG9nZ2xlKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyLFxuXHRcdFx0XHRcdFx0bWF5YmVLZXksXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRNYXliZSRKdXN0KGlzQ2xvc2VkKSxcblx0XHRcdFx0XHRcdHN0YXJ0KSksXG5cdFx0XHRcdFx0bWlkZGxlLFxuXHRcdFx0XHRcdGVuZFxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1JlY29yZEVudHJ5ID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgZmllbGQgPSBfbjAuYTtcblx0dmFyIHZhbHVlID0gX24wLmI7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEZpZWxkKGZpZWxkKSxcblx0XHRBMihcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldyxcblx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoZmllbGQpLFxuXHRcdFx0dmFsdWUpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkT3BlbiA9IGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X05pbCxcblx0XHRBMihcblx0XHRcdGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkRW50cnksXG5cdFx0XHRlbG0kY29yZSREaWN0JHRvTGlzdChyZWNvcmQpKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1NlcXVlbmNlID0gRjQoXG5cdGZ1bmN0aW9uIChtYXliZUtleSwgc2VxVHlwZSwgaXNDbG9zZWQsIHZhbHVlTGlzdCkge1xuXHRcdHZhciBzdGFydGVyID0gQTIoXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHNlcVR5cGVUb1N0cmluZyxcblx0XHRcdGVsbSRjb3JlJExpc3QkbGVuZ3RoKHZhbHVlTGlzdCksXG5cdFx0XHRzZXFUeXBlKTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChtYXliZUtleSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRUb2dnbGUpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGluZVN0YXJ0ZXIsXG5cdFx0XHRcdFx0XHRtYXliZUtleSxcblx0XHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KHN0YXJ0ZXIpXG5cdFx0XHRcdFx0XHRcdF0pKSksXG5cdFx0XHRcdFx0aXNDbG9zZWQgPyBlbG0kaHRtbCRIdG1sJHRleHQoJycpIDogZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3U2VxdWVuY2VPcGVuKHZhbHVlTGlzdClcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdTZXF1ZW5jZU9wZW4gPSBmdW5jdGlvbiAodmFsdWVzKSB7XG5cdHJldHVybiBBMihcblx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRfTGlzdF9OaWwsXG5cdFx0QTIoZWxtJGNvcmUkTGlzdCRpbmRleGVkTWFwLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3RvckVudHJ5LCB2YWx1ZXMpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRFeHBhbmRvTXNnID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRXhwYW5kb01zZycsIGE6IGF9O1xufTtcbnZhciBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkdGl0bGUgPSBlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHkoJ3RpdGxlJyk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3TWVzc2FnZSA9IEYzKFxuXHRmdW5jdGlvbiAoY3VycmVudEluZGV4LCBpbmRleCwgbXNnKSB7XG5cdFx0dmFyIG1lc3NhZ2VOYW1lID0gX0RlYnVnZ2VyX21lc3NhZ2VUb1N0cmluZyhtc2cpO1xuXHRcdHZhciBjbGFzc05hbWUgPSBfVXRpbHNfZXEoY3VycmVudEluZGV4LCBpbmRleCkgPyAnZWxtLWRlYnVnZ2VyLWVudHJ5IGVsbS1kZWJ1Z2dlci1lbnRyeS1zZWxlY3RlZCcgOiAnZWxtLWRlYnVnZ2VyLWVudHJ5Jztcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcyhjbGFzc05hbWUpLFxuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soaW5kZXgpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHRpdGxlKG1lc3NhZ2VOYW1lKSxcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdlbG0tZGVidWdnZXItZW50cnktY29udGVudCcpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChtZXNzYWdlTmFtZSlcblx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2VsbS1kZWJ1Z2dlci1lbnRyeS1pbmRleCcpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaW5kZXgpKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbGF6eTMgPSBfVmlydHVhbERvbV9sYXp5MztcbnZhciBlbG0kaHRtbCRIdG1sJExhenkkbGF6eTMgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRsYXp5MztcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGNvbnNNc2cgPSBGMyhcblx0ZnVuY3Rpb24gKGN1cnJlbnRJbmRleCwgbXNnLCBfbjApIHtcblx0XHR2YXIgaW5kZXggPSBfbjAuYTtcblx0XHR2YXIgcmVzdCA9IF9uMC5iO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0aW5kZXggLSAxLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0QTQoZWxtJGh0bWwkSHRtbCRMYXp5JGxhenkzLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXdNZXNzYWdlLCBjdXJyZW50SW5kZXgsIGluZGV4LCBtc2cpLFxuXHRcdFx0XHRyZXN0KSk7XG5cdH0pO1xudmFyIGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG5vZGUgPSBmdW5jdGlvbiAodGFnKSB7XG5cdHJldHVybiBfVmlydHVhbERvbV9ub2RlKFxuXHRcdF9WaXJ0dWFsRG9tX25vU2NyaXB0KHRhZykpO1xufTtcbnZhciBlbG0kaHRtbCRIdG1sJG5vZGUgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRub2RlO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc3R5bGVzID0gQTMoXG5cdGVsbSRodG1sJEh0bWwkbm9kZSxcblx0J3N0eWxlJyxcblx0X0xpc3RfTmlsLFxuXHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0W1xuXHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KCdcXG5cXG4uZWxtLWRlYnVnZ2VyLWVudHJ5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWxtLWRlYnVnZ2VyLWVudHJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcXG59XFxuXFxuLmVsbS1kZWJ1Z2dlci1lbnRyeS1zZWxlY3RlZCwgLmVsbS1kZWJ1Z2dlci1lbnRyeS1zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XFxufVxcblxcbi5lbG0tZGVidWdnZXItZW50cnktY29udGVudCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gN2NoKTtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxY2g7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZWxtLWRlYnVnZ2VyLWVudHJ5LWluZGV4IHtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgd2lkdGg6IDVjaDtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgcGFkZGluZy1yaWdodDogMWNoO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuJylcblx0XHRdKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRtYXhTbmFwc2hvdFNpemUgPSA2NDtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkbCA9IF9Kc0FycmF5X2ZvbGRsO1xudmFyIGVsbSRjb3JlJEFycmF5JGZvbGRsID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBiYXNlQ2FzZSwgX24wKSB7XG5cdFx0dmFyIHRyZWUgPSBfbjAuYztcblx0XHR2YXIgdGFpbCA9IF9uMC5kO1xuXHRcdHZhciBoZWxwZXIgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChub2RlLCBhY2MpIHtcblx0XHRcdFx0aWYgKG5vZGUuJCA9PT0gJ1N1YlRyZWUnKSB7XG5cdFx0XHRcdFx0dmFyIHN1YlRyZWUgPSBub2RlLmE7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRsLCBoZWxwZXIsIGFjYywgc3ViVHJlZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlcyA9IG5vZGUuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZGwsIGZ1bmMsIGFjYywgdmFsdWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZGwsXG5cdFx0XHRmdW5jLFxuXHRcdFx0QTMoZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZGwsIGhlbHBlciwgYmFzZUNhc2UsIHRyZWUpLFxuXHRcdFx0dGFpbCk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld1NuYXBzaG90ID0gRjMoXG5cdGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIGluZGV4LCBfbjApIHtcblx0XHR2YXIgbWVzc2FnZXMgPSBfbjAubWVzc2FnZXM7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRBMyhcblx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkZm9sZGwsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc01zZyhjdXJyZW50SW5kZXgpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKGluZGV4IC0gMSwgX0xpc3RfTmlsKSxcblx0XHRcdFx0bWVzc2FnZXMpLmIpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGNvbnNTbmFwc2hvdCA9IEYzKFxuXHRmdW5jdGlvbiAoY3VycmVudEluZGV4LCBzbmFwc2hvdCwgX24wKSB7XG5cdFx0dmFyIGluZGV4ID0gX24wLmE7XG5cdFx0dmFyIHJlc3QgPSBfbjAuYjtcblx0XHR2YXIgbmV4dEluZGV4ID0gaW5kZXggLSBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZTtcblx0XHR2YXIgY3VycmVudEluZGV4SGVscCA9ICgoX1V0aWxzX2NtcChuZXh0SW5kZXgsIGN1cnJlbnRJbmRleCkgPCAxKSAmJiAoX1V0aWxzX2NtcChjdXJyZW50SW5kZXgsIGluZGV4KSA8IDApKSA/IGN1cnJlbnRJbmRleCA6ICgtMSk7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRpbmRleCAtIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplLFxuXHRcdFx0QTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0QTQoZWxtJGh0bWwkSHRtbCRMYXp5JGxhenkzLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXdTbmFwc2hvdCwgY3VycmVudEluZGV4SGVscCwgaW5kZXgsIHNuYXBzaG90KSxcblx0XHRcdFx0cmVzdCkpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRBcnJheSRsZW5ndGggPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBsZW4gPSBfbjAuYTtcblx0cmV0dXJuIGxlbjtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3U25hcHNob3RzID0gRjIoXG5cdGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIHNuYXBzaG90cykge1xuXHRcdHZhciBoaWdoSW5kZXggPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSAqIGVsbSRjb3JlJEFycmF5JGxlbmd0aChzbmFwc2hvdHMpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0QTMoXG5cdFx0XHRcdGVsbSRjb3JlJEFycmF5JGZvbGRyLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGNvbnNTbmFwc2hvdChjdXJyZW50SW5kZXgpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKGhpZ2hJbmRleCwgX0xpc3RfTmlsKSxcblx0XHRcdFx0c25hcHNob3RzKS5iKTtcblx0fSk7XG52YXIgZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbGF6eTIgPSBfVmlydHVhbERvbV9sYXp5MjtcbnZhciBlbG0kaHRtbCRIdG1sJExhenkkbGF6eTIgPSBlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRsYXp5MjtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXcgPSBGMihcblx0ZnVuY3Rpb24gKG1heWJlSW5kZXgsIF9uMCkge1xuXHRcdHZhciBzbmFwc2hvdHMgPSBfbjAuc25hcHNob3RzO1xuXHRcdHZhciByZWNlbnQgPSBfbjAucmVjZW50O1xuXHRcdHZhciBudW1NZXNzYWdlcyA9IF9uMC5udW1NZXNzYWdlcztcblx0XHR2YXIgX24xID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKG1heWJlSW5kZXguJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKC0xLCAnY2FsYygxMDAlIC0gMjRweCknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpID0gbWF5YmVJbmRleC5hO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihpLCAnY2FsYygxMDAlIC0gNTRweCknKTtcblx0XHRcdH1cblx0XHR9KCk7XG5cdFx0dmFyIGluZGV4ID0gX24xLmE7XG5cdFx0dmFyIGhlaWdodCA9IF9uMS5iO1xuXHRcdHZhciBuZXdTdHVmZiA9IEEzKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc01zZyhpbmRleCksXG5cdFx0XHRfVXRpbHNfVHVwbGUyKG51bU1lc3NhZ2VzIC0gMSwgX0xpc3RfTmlsKSxcblx0XHRcdHJlY2VudC5tZXNzYWdlcykuYjtcblx0XHR2YXIgb2xkU3R1ZmYgPSBBMyhlbG0kaHRtbCRIdG1sJExhenkkbGF6eTIsIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld1NuYXBzaG90cywgaW5kZXgsIHNuYXBzaG90cyk7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ2VsbS1kZWJ1Z2dlci1zaWRlYmFyJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnMTAwJScpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ292ZXJmbG93LXknLCAnYXV0bycpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsIGhlaWdodClcblx0XHRcdFx0XSksXG5cdFx0XHRBMihcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHN0eWxlcyxcblx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRjb25zLCBvbGRTdHVmZiwgbmV3U3R1ZmYpKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kSnVtcCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0p1bXAnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRyZXN1bWVTdHlsZSA9ICdcXG5cXG4uZWxtLWRlYnVnZ2VyLXJlc3VtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWxtLWRlYnVnZ2VyLXJlc3VtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxufVxcblxcbic7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3UmVzdW1lQnV0dG9uID0gZnVuY3Rpb24gKG1heWJlSW5kZXgpIHtcblx0aWYgKG1heWJlSW5kZXguJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0cmV0dXJuIGVsbSRodG1sJEh0bWwkdGV4dCgnJyk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUmVzdW1lKSxcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2VsbS1kZWJ1Z2dlci1yZXN1bWUnKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnUmVzdW1lJyksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRub2RlLFxuXHRcdFx0XHRcdCdzdHlsZScsXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCR0ZXh0KGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kcmVzdW1lU3R5bGUpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld1RleHRCdXR0b24gPSBGMihcblx0ZnVuY3Rpb24gKG1zZywgbGFiZWwpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKG1zZyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dChsYWJlbClcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHBsYXlCdXR0b24gPSBmdW5jdGlvbiAobWF5YmVJbmRleCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3RleHQtYWxpZ24nLCAnY2VudGVyJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDUwLCA1MCwgNTApJylcblx0XHRcdF0pLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3UmVzdW1lQnV0dG9uKG1heWJlSW5kZXgpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnMjRweCcpLFxuXHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGluZS1oZWlnaHQnLCAnMjRweCcpLFxuXHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1zaXplJywgJzEycHgnKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3VGV4dEJ1dHRvbiwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRJbXBvcnQsICdJbXBvcnQnKSxcblx0XHRcdFx0XHRcdGVsbSRodG1sJEh0bWwkdGV4dCgnIC8gJyksXG5cdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdUZXh0QnV0dG9uLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEV4cG9ydCwgJ0V4cG9ydCcpXG5cdFx0XHRcdFx0XSkpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld1NpZGViYXIgPSBGMihcblx0ZnVuY3Rpb24gKHN0YXRlLCBoaXN0b3J5KSB7XG5cdFx0dmFyIG1heWJlSW5kZXggPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoc3RhdGUuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gc3RhdGUuYTtcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJEp1c3QoaW5kZXgpO1xuXHRcdFx0fVxuXHRcdH0oKTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2Rpc3BsYXknLCAnYmxvY2snKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmbG9hdCcsICdsZWZ0JyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnMzBjaCcpLFxuXHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAnd2hpdGUnKSxcblx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig2MSwgNjEsIDYxKScpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRKdW1wLFxuXHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkdmlldywgbWF5YmVJbmRleCwgaGlzdG9yeSkpLFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kcGxheUJ1dHRvbihtYXliZUluZGV4KVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kcG9wb3V0VmlldyA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIGhpc3RvcnkgPSBfbjAuaGlzdG9yeTtcblx0dmFyIHN0YXRlID0gX24wLnN0YXRlO1xuXHR2YXIgZXhwYW5kbyA9IF9uMC5leHBhbmRvO1xuXHRyZXR1cm4gQTMoXG5cdFx0ZWxtJGh0bWwkSHRtbCRub2RlLFxuXHRcdCdib2R5Jyxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ21hcmdpbicsICcwJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmcnLCAnMCcpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtZmFtaWx5JywgJ21vbm9zcGFjZScpLFxuXHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdvdmVyZmxvdycsICdhdXRvJylcblx0XHRcdF0pLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3U2lkZWJhciwgc3RhdGUsIGhpc3RvcnkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRXhwYW5kb01zZyxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdkaXNwbGF5JywgJ2Jsb2NrJyksXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2Zsb2F0JywgJ2xlZnQnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnY2FsYygxMDAlIC0gMzBjaCknKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWFyZ2luJywgJzAnKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnb3ZlcmZsb3cnLCAnYXV0bycpLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjdXJzb3InLCAnZGVmYXVsdCcpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldywgZWxtJGNvcmUkTWF5YmUkTm90aGluZywgZXhwYW5kbylcblx0XHRcdFx0XHRcdF0pKSlcblx0XHRcdF0pKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja0FsbCA9IHskOiAnQmxvY2tBbGwnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTW9zdCA9IHskOiAnQmxvY2tNb3N0J307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja05vbmUgPSB7JDogJ0Jsb2NrTm9uZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdG9CbG9ja2VyVHlwZSA9IEYyKFxuXHRmdW5jdGlvbiAoaXNQYXVzZWQsIHN0YXRlKSB7XG5cdFx0c3dpdGNoIChzdGF0ZS4kKSB7XG5cdFx0XHRjYXNlICdOb25lJzpcblx0XHRcdFx0cmV0dXJuIGlzUGF1c2VkID8gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja0FsbCA6IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tOb25lO1xuXHRcdFx0Y2FzZSAnQmFkTWV0YWRhdGEnOlxuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja01vc3Q7XG5cdFx0XHRjYXNlICdCYWRJbXBvcnQnOlxuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja01vc3Q7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja01vc3Q7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdG9CbG9ja2VyVHlwZSxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGlzUGF1c2VkKG1vZGVsLnN0YXRlKSxcblx0XHRtb2RlbC5vdmVybGF5KTtcbn07XG52YXIgZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluID0geyQ6ICdSQkVtcHR5X2VsbV9idWlsdGluJ307XG52YXIgZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4gPSBGNShcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQsIGUpIHtcblx0XHRyZXR1cm4geyQ6ICdSQk5vZGVfZWxtX2J1aWx0aW4nLCBhOiBhLCBiOiBiLCBjOiBjLCBkOiBkLCBlOiBlfTtcblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIGRpY3QpIHtcblx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdEEyKGZ1bmMsIGtleSwgdmFsdWUpLFxuXHRcdFx0XHRBMihlbG0kY29yZSREaWN0JG1hcCwgZnVuYywgbGVmdCksXG5cdFx0XHRcdEEyKGVsbSRjb3JlJERpY3QkbWFwLCBmdW5jLCByaWdodCkpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRzaXplSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgZGljdCkge1xuXHRcdHNpemVIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIG47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdFx0dmFyIHJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0XHR2YXIgJHRlbXAkbiA9IEEyKGVsbSRjb3JlJERpY3Qkc2l6ZUhlbHAsIG4gKyAxLCByaWdodCksXG5cdFx0XHRcdFx0JHRlbXAkZGljdCA9IGxlZnQ7XG5cdFx0XHRcdG4gPSAkdGVtcCRuO1xuXHRcdFx0XHRkaWN0ID0gJHRlbXAkZGljdDtcblx0XHRcdFx0Y29udGludWUgc2l6ZUhlbHA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JHNpemUgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkRGljdCRzaXplSGVscCwgMCwgZGljdCk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAgPSBGMihcblx0ZnVuY3Rpb24gKGlzT3V0ZXIsIGV4cGFuZG8pIHtcblx0XHRzd2l0Y2ggKGV4cGFuZG8uJCkge1xuXHRcdFx0Y2FzZSAnUyc6XG5cdFx0XHRcdHJldHVybiBleHBhbmRvO1xuXHRcdFx0Y2FzZSAnUHJpbWl0aXZlJzpcblx0XHRcdFx0cmV0dXJuIGV4cGFuZG87XG5cdFx0XHRjYXNlICdTZXF1ZW5jZSc6XG5cdFx0XHRcdHZhciBzZXFUeXBlID0gZXhwYW5kby5hO1xuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHZhciBpdGVtcyA9IGV4cGFuZG8uYztcblx0XHRcdFx0cmV0dXJuIGlzT3V0ZXIgPyBBMyhcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlLFxuXHRcdFx0XHRcdHNlcVR5cGUsXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAoZmFsc2UpLFxuXHRcdFx0XHRcdFx0aXRlbXMpKSA6ICgoZWxtJGNvcmUkTGlzdCRsZW5ndGgoaXRlbXMpIDw9IDgpID8gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXF1ZW5jZSwgc2VxVHlwZSwgZmFsc2UsIGl0ZW1zKSA6IGV4cGFuZG8pO1xuXHRcdFx0Y2FzZSAnRGljdGlvbmFyeSc6XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHJldHVybiBpc091dGVyID8gQTIoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LFxuXHRcdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoX24xKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBrID0gX24xLmE7XG5cdFx0XHRcdFx0XHRcdHZhciB2ID0gX24xLmI7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscCwgZmFsc2UsIHYpKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzKSkgOiAoKGVsbSRjb3JlJExpc3QkbGVuZ3RoKGtleVZhbHVlUGFpcnMpIDw9IDgpID8gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LCBmYWxzZSwga2V5VmFsdWVQYWlycykgOiBleHBhbmRvKTtcblx0XHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGVudHJpZXMgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHJldHVybiBpc091dGVyID8gQTIoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JG1hcCxcblx0XHRcdFx0XHRcdEYyKFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoX24yLCB2KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAsIGZhbHNlLCB2KTtcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRlbnRyaWVzKSkgOiAoKGVsbSRjb3JlJERpY3Qkc2l6ZShlbnRyaWVzKSA8PSA0KSA/IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUmVjb3JkLCBmYWxzZSwgZW50cmllcykgOiBleHBhbmRvKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBtYXliZU5hbWUgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0dmFyIGFyZ3MgPSBleHBhbmRvLmM7XG5cdFx0XHRcdHJldHVybiBpc091dGVyID8gQTMoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRtYXliZU5hbWUsXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAoZmFsc2UpLFxuXHRcdFx0XHRcdFx0YXJncykpIDogKChlbG0kY29yZSRMaXN0JGxlbmd0aChhcmdzKSA8PSA0KSA/IEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kQ29uc3RydWN0b3IsIG1heWJlTmFtZSwgZmFsc2UsIGFyZ3MpIDogZXhwYW5kbyk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGluaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAsXG5cdFx0dHJ1ZSxcblx0XHRfRGVidWdnZXJfaW5pdCh2YWx1ZSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JEhpc3RvcnkgPSBGMyhcblx0ZnVuY3Rpb24gKHNuYXBzaG90cywgcmVjZW50LCBudW1NZXNzYWdlcykge1xuXHRcdHJldHVybiB7bnVtTWVzc2FnZXM6IG51bU1lc3NhZ2VzLCByZWNlbnQ6IHJlY2VudCwgc25hcHNob3RzOiBzbmFwc2hvdHN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFJlY2VudEhpc3RvcnkgPSBGMyhcblx0ZnVuY3Rpb24gKG1vZGVsLCBtZXNzYWdlcywgbnVtTWVzc2FnZXMpIHtcblx0XHRyZXR1cm4ge21lc3NhZ2VzOiBtZXNzYWdlcywgbW9kZWw6IG1vZGVsLCBudW1NZXNzYWdlczogbnVtTWVzc2FnZXN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVtcHR5ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdHJldHVybiBBMyhcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JEhpc3RvcnksXG5cdFx0ZWxtJGNvcmUkQXJyYXkkZW1wdHksXG5cdFx0QTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRSZWNlbnRIaXN0b3J5LCBtb2RlbCwgX0xpc3RfTmlsLCAwKSxcblx0XHQwKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSdW5uaW5nID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUnVubmluZycsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRFcnJvciA9IEYyKFxuXHRmdW5jdGlvbiAobWVzc2FnZSwgcHJvYmxlbXMpIHtcblx0XHRyZXR1cm4ge21lc3NhZ2U6IG1lc3NhZ2UsIHByb2JsZW1zOiBwcm9ibGVtc307XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJE1ldGFkYXRhID0gRjIoXG5cdGZ1bmN0aW9uICh2ZXJzaW9ucywgdHlwZXMpIHtcblx0XHRyZXR1cm4ge3R5cGVzOiB0eXBlcywgdmVyc2lvbnM6IHZlcnNpb25zfTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVHlwZXMgPSBGMyhcblx0ZnVuY3Rpb24gKG1lc3NhZ2UsIGFsaWFzZXMsIHVuaW9ucykge1xuXHRcdHJldHVybiB7YWxpYXNlczogYWxpYXNlcywgbWVzc2FnZTogbWVzc2FnZSwgdW5pb25zOiB1bmlvbnN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRBbGlhcyA9IEYyKFxuXHRmdW5jdGlvbiAoYXJncywgdGlwZSkge1xuXHRcdHJldHVybiB7YXJnczogYXJncywgdGlwZTogdGlwZX07XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGxpc3QgPSBfSnNvbl9kZWNvZGVMaXN0O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZUFsaWFzID0gQTMoXG5cdGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcDIsXG5cdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJEFsaWFzLFxuXHRBMihcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCxcblx0XHQnYXJncycsXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdChlbG0kanNvbiRKc29uJERlY29kZSRzdHJpbmcpKSxcblx0QTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICd0eXBlJywgZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVW5pb24gPSBGMihcblx0ZnVuY3Rpb24gKGFyZ3MsIHRhZ3MpIHtcblx0XHRyZXR1cm4ge2FyZ3M6IGFyZ3MsIHRhZ3M6IHRhZ3N9O1xuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JGVtcHR5ID0gZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xudmFyIGVsbSRjb3JlJERpY3QkQmxhY2sgPSB7JDogJ0JsYWNrJ307XG52YXIgZWxtJGNvcmUkQmFzaWNzJGNvbXBhcmUgPSBfVXRpbHNfY29tcGFyZTtcbnZhciBlbG0kY29yZSREaWN0JFJlZCA9IHskOiAnUmVkJ307XG52YXIgZWxtJGNvcmUkRGljdCRiYWxhbmNlID0gRjUoXG5cdGZ1bmN0aW9uIChjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQpIHtcblx0XHRpZiAoKHJpZ2h0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAocmlnaHQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBfbjEgPSByaWdodC5hO1xuXHRcdFx0dmFyIHJLID0gcmlnaHQuYjtcblx0XHRcdHZhciByViA9IHJpZ2h0LmM7XG5cdFx0XHR2YXIgckxlZnQgPSByaWdodC5kO1xuXHRcdFx0dmFyIHJSaWdodCA9IHJpZ2h0LmU7XG5cdFx0XHRpZiAoKGxlZnQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChsZWZ0LmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdHZhciBfbjMgPSBsZWZ0LmE7XG5cdFx0XHRcdHZhciBsSyA9IGxlZnQuYjtcblx0XHRcdFx0dmFyIGxWID0gbGVmdC5jO1xuXHRcdFx0XHR2YXIgbExlZnQgPSBsZWZ0LmQ7XG5cdFx0XHRcdHZhciBsUmlnaHQgPSBsZWZ0LmU7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJlZCxcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIHJLLCByViwgckxlZnQsIHJSaWdodCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdHJLLFxuXHRcdFx0XHRcdHJWLFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwga2V5LCB2YWx1ZSwgbGVmdCwgckxlZnQpLFxuXHRcdFx0XHRcdHJSaWdodCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICgoKChsZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobGVmdC5hLiQgPT09ICdSZWQnKSkgJiYgKGxlZnQuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChsZWZ0LmQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdFx0dmFyIF9uNSA9IGxlZnQuYTtcblx0XHRcdFx0dmFyIGxLID0gbGVmdC5iO1xuXHRcdFx0XHR2YXIgbFYgPSBsZWZ0LmM7XG5cdFx0XHRcdHZhciBfbjYgPSBsZWZ0LmQ7XG5cdFx0XHRcdHZhciBfbjcgPSBfbjYuYTtcblx0XHRcdFx0dmFyIGxsSyA9IF9uNi5iO1xuXHRcdFx0XHR2YXIgbGxWID0gX242LmM7XG5cdFx0XHRcdHZhciBsbExlZnQgPSBfbjYuZDtcblx0XHRcdFx0dmFyIGxsUmlnaHQgPSBfbjYuZTtcblx0XHRcdFx0dmFyIGxSaWdodCA9IGxlZnQuZTtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkUmVkLFxuXHRcdFx0XHRcdGxLLFxuXHRcdFx0XHRcdGxWLFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JEJsYWNrLCBsbEssIGxsViwgbGxMZWZ0LCBsbFJpZ2h0KSxcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRCbGFjaywga2V5LCB2YWx1ZSwgbFJpZ2h0LCByaWdodCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRpbnNlcnRIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBkaWN0KSB7XG5cdFx0aWYgKGRpY3QuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRyZXR1cm4gQTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBrZXksIHZhbHVlLCBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBuQ29sb3IgPSBkaWN0LmE7XG5cdFx0XHR2YXIgbktleSA9IGRpY3QuYjtcblx0XHRcdHZhciBuVmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbkxlZnQgPSBkaWN0LmQ7XG5cdFx0XHR2YXIgblJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0dmFyIF9uMSA9IEEyKGVsbSRjb3JlJEJhc2ljcyRjb21wYXJlLCBrZXksIG5LZXkpO1xuXHRcdFx0c3dpdGNoIChfbjEuJCkge1xuXHRcdFx0XHRjYXNlICdMVCc6XG5cdFx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0bkNvbG9yLFxuXHRcdFx0XHRcdFx0bktleSxcblx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdEEzKGVsbSRjb3JlJERpY3QkaW5zZXJ0SGVscCwga2V5LCB2YWx1ZSwgbkxlZnQpLFxuXHRcdFx0XHRcdFx0blJpZ2h0KTtcblx0XHRcdFx0Y2FzZSAnRVEnOlxuXHRcdFx0XHRcdHJldHVybiBBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgbkNvbG9yLCBuS2V5LCB2YWx1ZSwgbkxlZnQsIG5SaWdodCk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0bkNvbG9yLFxuXHRcdFx0XHRcdFx0bktleSxcblx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdG5MZWZ0LFxuXHRcdFx0XHRcdFx0QTMoZWxtJGNvcmUkRGljdCRpbnNlcnRIZWxwLCBrZXksIHZhbHVlLCBuUmlnaHQpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkaW5zZXJ0ID0gRjMoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBkaWN0KSB7XG5cdFx0dmFyIF9uMCA9IEEzKGVsbSRjb3JlJERpY3QkaW5zZXJ0SGVscCwga2V5LCB2YWx1ZSwgZGljdCk7XG5cdFx0aWYgKChfbjAuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfbjAuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBfbjEgPSBfbjAuYTtcblx0XHRcdHZhciBrID0gX24wLmI7XG5cdFx0XHR2YXIgdiA9IF9uMC5jO1xuXHRcdFx0dmFyIGwgPSBfbjAuZDtcblx0XHRcdHZhciByID0gX24wLmU7XG5cdFx0XHRyZXR1cm4gQTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIGssIHYsIGwsIHIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgeCA9IF9uMDtcblx0XHRcdHJldHVybiB4O1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRmcm9tTGlzdCA9IGZ1bmN0aW9uIChhc3NvY3MpIHtcblx0cmV0dXJuIEEzKFxuXHRcdGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0RjIoXG5cdFx0XHRmdW5jdGlvbiAoX24wLCBkaWN0KSB7XG5cdFx0XHRcdHZhciBrZXkgPSBfbjAuYTtcblx0XHRcdFx0dmFyIHZhbHVlID0gX24wLmI7XG5cdFx0XHRcdHJldHVybiBBMyhlbG0kY29yZSREaWN0JGluc2VydCwga2V5LCB2YWx1ZSwgZGljdCk7XG5cdFx0XHR9KSxcblx0XHRlbG0kY29yZSREaWN0JGVtcHR5LFxuXHRcdGFzc29jcyk7XG59O1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGtleVZhbHVlUGFpcnMgPSBfSnNvbl9kZWNvZGVLZXlWYWx1ZVBhaXJzO1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGRpY3QgPSBmdW5jdGlvbiAoZGVjb2Rlcikge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwLFxuXHRcdGVsbSRjb3JlJERpY3QkZnJvbUxpc3QsXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUka2V5VmFsdWVQYWlycyhkZWNvZGVyKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZVVuaW9uID0gQTMoXG5cdGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcDIsXG5cdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFVuaW9uLFxuXHRBMihcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCxcblx0XHQnYXJncycsXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdChlbG0kanNvbiRKc29uJERlY29kZSRzdHJpbmcpKSxcblx0QTIoXG5cdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsXG5cdFx0J3RhZ3MnLFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGRpY3QoXG5cdFx0XHRlbG0kanNvbiRKc29uJERlY29kZSRsaXN0KGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZykpKSk7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMyA9IF9Kc29uX21hcDM7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlVHlwZXMgPSBBNChcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMyxcblx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVHlwZXMsXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAnbWVzc2FnZScsIGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZyksXG5cdEEyKFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLFxuXHRcdCdhbGlhc2VzJyxcblx0XHRlbG0kanNvbiRKc29uJERlY29kZSRkaWN0KGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZUFsaWFzKSksXG5cdEEyKFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLFxuXHRcdCd1bmlvbnMnLFxuXHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJGRpY3QoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlVW5pb24pKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmVyc2lvbnMgPSBmdW5jdGlvbiAoZWxtKSB7XG5cdHJldHVybiB7ZWxtOiBlbG19O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVWZXJzaW9ucyA9IEEyKFxuXHRlbG0kanNvbiRKc29uJERlY29kZSRtYXAsXG5cdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFZlcnNpb25zLFxuXHRBMihlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCwgJ2VsbScsIGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZykpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZXIgPSBBMyhcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkTWV0YWRhdGEsXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAndmVyc2lvbnMnLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVWZXJzaW9ucyksXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAndHlwZXMnLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVUeXBlcykpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2JsZW1UeXBlID0gRjIoXG5cdGZ1bmN0aW9uIChuYW1lLCBwcm9ibGVtcykge1xuXHRcdHJldHVybiB7bmFtZTogbmFtZSwgcHJvYmxlbXM6IHByb2JsZW1zfTtcblx0fSk7XG52YXIgZWxtJGNvcmUkU3RyaW5nJGNvbnRhaW5zID0gX1N0cmluZ19jb250YWlucztcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRoYXNQcm9ibGVtID0gRjIoXG5cdGZ1bmN0aW9uICh0aXBlLCBfbjApIHtcblx0XHR2YXIgcHJvYmxlbSA9IF9uMC5hO1xuXHRcdHZhciB0b2tlbiA9IF9uMC5iO1xuXHRcdHJldHVybiBBMihlbG0kY29yZSRTdHJpbmckY29udGFpbnMsIHRva2VuLCB0aXBlKSA/IGVsbSRjb3JlJE1heWJlJEp1c3QocHJvYmxlbSkgOiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSREZWNvZGVyID0geyQ6ICdEZWNvZGVyJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRnVuY3Rpb24gPSB7JDogJ0Z1bmN0aW9uJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUHJvY2VzcyA9IHskOiAnUHJvY2Vzcyd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2dyYW0gPSB7JDogJ1Byb2dyYW0nfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRSZXF1ZXN0ID0geyQ6ICdSZXF1ZXN0J307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkU29ja2V0ID0geyQ6ICdTb2NrZXQnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRUYXNrID0geyQ6ICdUYXNrJ307XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmlydHVhbERvbSA9IHskOiAnVmlydHVhbERvbSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJHByb2JsZW1UYWJsZSA9IF9MaXN0X2Zyb21BcnJheShcblx0W1xuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRnVuY3Rpb24sICctPicpLFxuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRGVjb2RlciwgJ0pzb24uRGVjb2RlLkRlY29kZXInKSxcblx0XHRfVXRpbHNfVHVwbGUyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFRhc2ssICdUYXNrLlRhc2snKSxcblx0XHRfVXRpbHNfVHVwbGUyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2Nlc3MsICdQcm9jZXNzLklkJyksXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRTb2NrZXQsICdXZWJTb2NrZXQuTG93TGV2ZWwuV2ViU29ja2V0JyksXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRSZXF1ZXN0LCAnSHR0cC5SZXF1ZXN0JyksXG5cdFx0X1V0aWxzX1R1cGxlMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRQcm9ncmFtLCAnUGxhdGZvcm0uUHJvZ3JhbScpLFxuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmlydHVhbERvbSwgJ1ZpcnR1YWxEb20uTm9kZScpLFxuXHRcdF9VdGlsc19UdXBsZTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmlydHVhbERvbSwgJ1ZpcnR1YWxEb20uQXR0cmlidXRlJylcblx0XSk7XG52YXIgZWxtJGNvcmUkTGlzdCRtYXliZUNvbnMgPSBGMyhcblx0ZnVuY3Rpb24gKGYsIG14LCB4cykge1xuXHRcdHZhciBfbjAgPSBmKG14KTtcblx0XHRpZiAoX24wLiQgPT09ICdKdXN0Jykge1xuXHRcdFx0dmFyIHggPSBfbjAuYTtcblx0XHRcdHJldHVybiBBMihlbG0kY29yZSRMaXN0JGNvbnMsIHgsIHhzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHhzO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRmaWx0ZXJNYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIHhzKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdGVsbSRjb3JlJExpc3QkbWF5YmVDb25zKGYpLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRmaW5kUHJvYmxlbXMgPSBmdW5jdGlvbiAodGlwZSkge1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGNvcmUkTGlzdCRmaWx0ZXJNYXAsXG5cdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaGFzUHJvYmxlbSh0aXBlKSxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRwcm9ibGVtVGFibGUpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjb2xsZWN0QmFkQWxpYXNlcyA9IEYzKFxuXHRmdW5jdGlvbiAobmFtZSwgX24wLCBsaXN0KSB7XG5cdFx0dmFyIHRpcGUgPSBfbjAudGlwZTtcblx0XHR2YXIgX24xID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZmluZFByb2JsZW1zKHRpcGUpO1xuXHRcdGlmICghX24xLmIpIHtcblx0XHRcdHJldHVybiBsaXN0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcHJvYmxlbXMgPSBfbjE7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUHJvYmxlbVR5cGUsIG5hbWUsIHByb2JsZW1zKSxcblx0XHRcdFx0bGlzdCk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kY29yZSREaWN0JHZhbHVlcyA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHJldHVybiBBMyhcblx0XHRlbG0kY29yZSREaWN0JGZvbGRyLFxuXHRcdEYzKFxuXHRcdFx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIHZhbHVlTGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoZWxtJGNvcmUkTGlzdCRjb25zLCB2YWx1ZSwgdmFsdWVMaXN0KTtcblx0XHRcdH0pLFxuXHRcdF9MaXN0X05pbCxcblx0XHRkaWN0KTtcbn07XG52YXIgZWxtJGNvcmUkTGlzdCRhcHBlbmQgPSBGMihcblx0ZnVuY3Rpb24gKHhzLCB5cykge1xuXHRcdGlmICgheXMuYikge1xuXHRcdFx0cmV0dXJuIHhzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkTGlzdCRmb2xkciwgZWxtJGNvcmUkTGlzdCRjb25zLCB5cywgeHMpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkTGlzdCRjb25jYXQgPSBmdW5jdGlvbiAobGlzdHMpIHtcblx0cmV0dXJuIEEzKGVsbSRjb3JlJExpc3QkZm9sZHIsIGVsbSRjb3JlJExpc3QkYXBwZW5kLCBfTGlzdF9OaWwsIGxpc3RzKTtcbn07XG52YXIgZWxtJGNvcmUkTGlzdCRjb25jYXRNYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIGxpc3QpIHtcblx0XHRyZXR1cm4gZWxtJGNvcmUkTGlzdCRjb25jYXQoXG5cdFx0XHRBMihlbG0kY29yZSRMaXN0JG1hcCwgZiwgbGlzdCkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjb2xsZWN0QmFkVW5pb25zID0gRjMoXG5cdGZ1bmN0aW9uIChuYW1lLCBfbjAsIGxpc3QpIHtcblx0XHR2YXIgdGFncyA9IF9uMC50YWdzO1xuXHRcdHZhciBfbjEgPSBBMihcblx0XHRcdGVsbSRjb3JlJExpc3QkY29uY2F0TWFwLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZmluZFByb2JsZW1zLFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25jYXQoXG5cdFx0XHRcdGVsbSRjb3JlJERpY3QkdmFsdWVzKHRhZ3MpKSk7XG5cdFx0aWYgKCFfbjEuYikge1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwcm9ibGVtcyA9IF9uMTtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRQcm9ibGVtVHlwZSwgbmFtZSwgcHJvYmxlbXMpLFxuXHRcdFx0XHRsaXN0KTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkZm9sZGwgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGFjYywgZGljdCkge1xuXHRcdGZvbGRsOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IGRpY3QuYztcblx0XHRcdFx0dmFyIGxlZnQgPSBkaWN0LmQ7XG5cdFx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdFx0dmFyICR0ZW1wJGZ1bmMgPSBmdW5jLFxuXHRcdFx0XHRcdCR0ZW1wJGFjYyA9IEEzKFxuXHRcdFx0XHRcdGZ1bmMsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdEEzKGVsbSRjb3JlJERpY3QkZm9sZGwsIGZ1bmMsIGFjYywgbGVmdCkpLFxuXHRcdFx0XHRcdCR0ZW1wJGRpY3QgPSByaWdodDtcblx0XHRcdFx0ZnVuYyA9ICR0ZW1wJGZ1bmM7XG5cdFx0XHRcdGFjYyA9ICR0ZW1wJGFjYztcblx0XHRcdFx0ZGljdCA9ICR0ZW1wJGRpY3Q7XG5cdFx0XHRcdGNvbnRpbnVlIGZvbGRsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaXNQb3J0YWJsZSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHR5cGVzID0gX24wLnR5cGVzO1xuXHR2YXIgYmFkQWxpYXNlcyA9IEEzKGVsbSRjb3JlJERpY3QkZm9sZGwsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNvbGxlY3RCYWRBbGlhc2VzLCBfTGlzdF9OaWwsIHR5cGVzLmFsaWFzZXMpO1xuXHR2YXIgX24xID0gQTMoZWxtJGNvcmUkRGljdCRmb2xkbCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY29sbGVjdEJhZFVuaW9ucywgYmFkQWxpYXNlcywgdHlwZXMudW5pb25zKTtcblx0aWYgKCFfbjEuYikge1xuXHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBwcm9ibGVtcyA9IF9uMTtcblx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJEVycm9yLCB0eXBlcy5tZXNzYWdlLCBwcm9ibGVtcykpO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHR2YXIgX24wID0gQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZGVjb2RlVmFsdWUsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZXIsIHZhbHVlKTtcblx0aWYgKF9uMC4kID09PSAnRXJyJykge1xuXHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKFxuXHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRXJyb3IsICdUaGUgY29tcGlsZXIgaXMgZ2VuZXJhdGluZyBiYWQgbWV0YWRhdGEuIFRoaXMgaXMgYSBjb21waWxlciBidWchJywgX0xpc3RfTmlsKSk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIG1ldGFkYXRhID0gX24wLmE7XG5cdFx0dmFyIF9uMSA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlzUG9ydGFibGUobWV0YWRhdGEpO1xuXHRcdGlmIChfbjEuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JE9rKG1ldGFkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yID0gX24xLmE7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkTm9uZSA9IHskOiAnTm9uZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkbm9uZSA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkTm9uZTtcbnZhciBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbWFwID0gX1BsYXRmb3JtX21hcDtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBJbml0ID0gRjQoXG5cdGZ1bmN0aW9uIChtZXRhZGF0YSwgcG9wb3V0LCBpbml0LCBmbGFncykge1xuXHRcdHZhciBfbjAgPSBpbml0KGZsYWdzKTtcblx0XHR2YXIgdXNlck1vZGVsID0gX24wLmE7XG5cdFx0dmFyIHVzZXJDb21tYW5kcyA9IF9uMC5iO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0e1xuXHRcdFx0XHRleHBhbmRvOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGluaXQodXNlck1vZGVsKSxcblx0XHRcdFx0aGlzdG9yeTogZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRlbXB0eSh1c2VyTW9kZWwpLFxuXHRcdFx0XHRtZXRhZGF0YTogZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlKG1ldGFkYXRhKSxcblx0XHRcdFx0b3ZlcmxheTogZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRub25lLFxuXHRcdFx0XHRwb3BvdXQ6IHBvcG91dCxcblx0XHRcdFx0c3RhdGU6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUnVubmluZyh1c2VyTW9kZWwpXG5cdFx0XHR9LFxuXHRcdFx0QTIoZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnLCB1c2VyQ29tbWFuZHMpKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRMYXRlc3RNb2RlbCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRpZiAoc3RhdGUuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0dmFyIG1vZGVsID0gc3RhdGUuYTtcblx0XHRyZXR1cm4gbW9kZWw7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIG1vZGVsID0gc3RhdGUuYztcblx0XHRyZXR1cm4gbW9kZWw7XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkUGxhdGZvcm0kU3ViJG1hcCA9IF9QbGF0Zm9ybV9tYXA7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwU3VicyA9IEYyKFxuXHRmdW5jdGlvbiAoc3Vic2NyaXB0aW9ucywgbW9kZWwpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRTdWIkbWFwLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnLFxuXHRcdFx0c3Vic2NyaXB0aW9ucyhcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRMYXRlc3RNb2RlbChtb2RlbC5zdGF0ZSkpKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRnZXQgPSBGMihcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCkge1xuXHRcdGdldDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKGRpY3QuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGtleSA9IGRpY3QuYjtcblx0XHRcdFx0dmFyIHZhbHVlID0gZGljdC5jO1xuXHRcdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdFx0dmFyIHJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0XHR2YXIgX24xID0gQTIoZWxtJGNvcmUkQmFzaWNzJGNvbXBhcmUsIHRhcmdldEtleSwga2V5KTtcblx0XHRcdFx0c3dpdGNoIChfbjEuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ0xUJzpcblx0XHRcdFx0XHRcdHZhciAkdGVtcCR0YXJnZXRLZXkgPSB0YXJnZXRLZXksXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJGRpY3QgPSBsZWZ0O1xuXHRcdFx0XHRcdFx0dGFyZ2V0S2V5ID0gJHRlbXAkdGFyZ2V0S2V5O1xuXHRcdFx0XHRcdFx0ZGljdCA9ICR0ZW1wJGRpY3Q7XG5cdFx0XHRcdFx0XHRjb250aW51ZSBnZXQ7XG5cdFx0XHRcdFx0Y2FzZSAnRVEnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJEp1c3QodmFsdWUpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR2YXIgJHRlbXAkdGFyZ2V0S2V5ID0gdGFyZ2V0S2V5LFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRkaWN0ID0gcmlnaHQ7XG5cdFx0XHRcdFx0XHR0YXJnZXRLZXkgPSAkdGVtcCR0YXJnZXRLZXk7XG5cdFx0XHRcdFx0XHRkaWN0ID0gJHRlbXAkZGljdDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlIGdldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZURpY3RIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChvbGREaWN0LCBrZXksIHZhbHVlKSB7XG5cdFx0dmFyIF9uMTIgPSBBMihlbG0kY29yZSREaWN0JGdldCwga2V5LCBvbGREaWN0KTtcblx0XHRpZiAoX24xMi4kID09PSAnTm90aGluZycpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG9sZFZhbHVlID0gX24xMi5hO1xuXHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VIZWxwLCBvbGRWYWx1ZSwgdmFsdWUpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUhlbHAgPSBGMihcblx0ZnVuY3Rpb24gKG9sZCwgX25ldykge1xuXHRcdHZhciBfbjMgPSBfVXRpbHNfVHVwbGUyKG9sZCwgX25ldyk7XG5cdFx0X24zJDY6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHN3aXRjaCAoX24zLmIuJCkge1xuXHRcdFx0XHRjYXNlICdTJzpcblx0XHRcdFx0XHRyZXR1cm4gX25ldztcblx0XHRcdFx0Y2FzZSAnUHJpbWl0aXZlJzpcblx0XHRcdFx0XHRyZXR1cm4gX25ldztcblx0XHRcdFx0Y2FzZSAnU2VxdWVuY2UnOlxuXHRcdFx0XHRcdGlmIChfbjMuYS4kID09PSAnU2VxdWVuY2UnKSB7XG5cdFx0XHRcdFx0XHR2YXIgX240ID0gX24zLmE7XG5cdFx0XHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBfbjQuYjtcblx0XHRcdFx0XHRcdHZhciBvbGRWYWx1ZXMgPSBfbjQuYztcblx0XHRcdFx0XHRcdHZhciBfbjUgPSBfbjMuYjtcblx0XHRcdFx0XHRcdHZhciBzZXFUeXBlID0gX241LmE7XG5cdFx0XHRcdFx0XHR2YXIgbmV3VmFsdWVzID0gX241LmM7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsXG5cdFx0XHRcdFx0XHRcdHNlcVR5cGUsXG5cdFx0XHRcdFx0XHRcdGlzQ2xvc2VkLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlTGlzdEhlbHAsIG9sZFZhbHVlcywgbmV3VmFsdWVzKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJyZWFrIF9uMyQ2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnRGljdGlvbmFyeSc6XG5cdFx0XHRcdFx0aWYgKF9uMy5hLiQgPT09ICdEaWN0aW9uYXJ5Jykge1xuXHRcdFx0XHRcdFx0dmFyIF9uNiA9IF9uMy5hO1xuXHRcdFx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gX242LmE7XG5cdFx0XHRcdFx0XHR2YXIgX243ID0gX24zLmI7XG5cdFx0XHRcdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IF9uNy5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRGljdGlvbmFyeSwgaXNDbG9zZWQsIGtleVZhbHVlUGFpcnMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRicmVhayBfbjMkNjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHRcdFx0aWYgKF9uMy5hLiQgPT09ICdSZWNvcmQnKSB7XG5cdFx0XHRcdFx0XHR2YXIgX244ID0gX24zLmE7XG5cdFx0XHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBfbjguYTtcblx0XHRcdFx0XHRcdHZhciBvbGREaWN0ID0gX244LmI7XG5cdFx0XHRcdFx0XHR2YXIgX245ID0gX24zLmI7XG5cdFx0XHRcdFx0XHR2YXIgbmV3RGljdCA9IF9uOS5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFJlY29yZCxcblx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VEaWN0SGVscChvbGREaWN0KSxcblx0XHRcdFx0XHRcdFx0XHRuZXdEaWN0KSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJyZWFrIF9uMyQ2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoX24zLmEuJCA9PT0gJ0NvbnN0cnVjdG9yJykge1xuXHRcdFx0XHRcdFx0dmFyIF9uMTAgPSBfbjMuYTtcblx0XHRcdFx0XHRcdHZhciBpc0Nsb3NlZCA9IF9uMTAuYjtcblx0XHRcdFx0XHRcdHZhciBvbGRWYWx1ZXMgPSBfbjEwLmM7XG5cdFx0XHRcdFx0XHR2YXIgX24xMSA9IF9uMy5iO1xuXHRcdFx0XHRcdFx0dmFyIG1heWJlTmFtZSA9IF9uMTEuYTtcblx0XHRcdFx0XHRcdHZhciBuZXdWYWx1ZXMgPSBfbjExLmM7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kQ29uc3RydWN0b3IsXG5cdFx0XHRcdFx0XHRcdG1heWJlTmFtZSxcblx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VMaXN0SGVscCwgb2xkVmFsdWVzLCBuZXdWYWx1ZXMpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnJlYWsgX24zJDY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gX25ldztcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUxpc3RIZWxwID0gRjIoXG5cdGZ1bmN0aW9uIChvbGRzLCBuZXdzKSB7XG5cdFx0dmFyIF9uMCA9IF9VdGlsc19UdXBsZTIob2xkcywgbmV3cyk7XG5cdFx0aWYgKCFfbjAuYS5iKSB7XG5cdFx0XHRyZXR1cm4gbmV3cztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFfbjAuYi5iKSB7XG5cdFx0XHRcdHJldHVybiBuZXdzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9uMSA9IF9uMC5hO1xuXHRcdFx0XHR2YXIgeCA9IF9uMS5hO1xuXHRcdFx0XHR2YXIgeHMgPSBfbjEuYjtcblx0XHRcdFx0dmFyIF9uMiA9IF9uMC5iO1xuXHRcdFx0XHR2YXIgeSA9IF9uMi5hO1xuXHRcdFx0XHR2YXIgeXMgPSBfbjIuYjtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlSGVscCwgeCwgeSksXG5cdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUxpc3RIZWxwLCB4cywgeXMpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2UgPSBGMihcblx0ZnVuY3Rpb24gKHZhbHVlLCBleHBhbmRvKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUhlbHAsXG5cdFx0XHRleHBhbmRvLFxuXHRcdFx0X0RlYnVnZ2VyX2luaXQodmFsdWUpKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCA9IEYzKFxuXHRmdW5jdGlvbiAobiwgZnVuYywgbGlzdCkge1xuXHRcdGlmICghbGlzdC5iKSB7XG5cdFx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgeCA9IGxpc3QuYTtcblx0XHRcdHZhciB4cyA9IGxpc3QuYjtcblx0XHRcdHJldHVybiAobiA8PSAwKSA/IEEyKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdGZ1bmMoeCksXG5cdFx0XHRcdHhzKSA6IEEyKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdHgsXG5cdFx0XHRcdEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlSW5kZXgsIG4gLSAxLCBmdW5jLCB4cykpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQmFzaWNzJG5vdCA9IF9CYXNpY3Nfbm90O1xudmFyIGVsbSRjb3JlJERpY3QkZ2V0TWluID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0Z2V0TWluOlxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGlmICgoZGljdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpIHtcblx0XHRcdHZhciBsZWZ0ID0gZGljdC5kO1xuXHRcdFx0dmFyICR0ZW1wJGRpY3QgPSBsZWZ0O1xuXHRcdFx0ZGljdCA9ICR0ZW1wJGRpY3Q7XG5cdFx0XHRjb250aW51ZSBnZXRNaW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkaWN0O1xuXHRcdH1cblx0fVxufTtcbnZhciBlbG0kY29yZSREaWN0JG1vdmVSZWRMZWZ0ID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0aWYgKCgoZGljdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChkaWN0LmUuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSB7XG5cdFx0aWYgKChkaWN0LmUuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZS5kLmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHR2YXIgY2xyID0gZGljdC5hO1xuXHRcdFx0dmFyIGsgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdiA9IGRpY3QuYztcblx0XHRcdHZhciBfbjEgPSBkaWN0LmQ7XG5cdFx0XHR2YXIgbENsciA9IF9uMS5hO1xuXHRcdFx0dmFyIGxLID0gX24xLmI7XG5cdFx0XHR2YXIgbFYgPSBfbjEuYztcblx0XHRcdHZhciBsTGVmdCA9IF9uMS5kO1xuXHRcdFx0dmFyIGxSaWdodCA9IF9uMS5lO1xuXHRcdFx0dmFyIF9uMiA9IGRpY3QuZTtcblx0XHRcdHZhciByQ2xyID0gX24yLmE7XG5cdFx0XHR2YXIgcksgPSBfbjIuYjtcblx0XHRcdHZhciByViA9IF9uMi5jO1xuXHRcdFx0dmFyIHJMZWZ0ID0gX24yLmQ7XG5cdFx0XHR2YXIgX24zID0gckxlZnQuYTtcblx0XHRcdHZhciBybEsgPSByTGVmdC5iO1xuXHRcdFx0dmFyIHJsViA9IHJMZWZ0LmM7XG5cdFx0XHR2YXIgcmxMID0gckxlZnQuZDtcblx0XHRcdHZhciBybFIgPSByTGVmdC5lO1xuXHRcdFx0dmFyIHJSaWdodCA9IF9uMi5lO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSZWQsXG5cdFx0XHRcdHJsSyxcblx0XHRcdFx0cmxWLFxuXHRcdFx0XHRBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0cmxMKSxcblx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIHJLLCByViwgcmxSLCByUmlnaHQpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNsciA9IGRpY3QuYTtcblx0XHRcdHZhciBrID0gZGljdC5iO1xuXHRcdFx0dmFyIHYgPSBkaWN0LmM7XG5cdFx0XHR2YXIgX240ID0gZGljdC5kO1xuXHRcdFx0dmFyIGxDbHIgPSBfbjQuYTtcblx0XHRcdHZhciBsSyA9IF9uNC5iO1xuXHRcdFx0dmFyIGxWID0gX240LmM7XG5cdFx0XHR2YXIgbExlZnQgPSBfbjQuZDtcblx0XHRcdHZhciBsUmlnaHQgPSBfbjQuZTtcblx0XHRcdHZhciBfbjUgPSBkaWN0LmU7XG5cdFx0XHR2YXIgckNsciA9IF9uNS5hO1xuXHRcdFx0dmFyIHJLID0gX241LmI7XG5cdFx0XHR2YXIgclYgPSBfbjUuYztcblx0XHRcdHZhciByTGVmdCA9IF9uNS5kO1xuXHRcdFx0dmFyIHJSaWdodCA9IF9uNS5lO1xuXHRcdFx0aWYgKGNsci4kID09PSAnQmxhY2snKSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNShlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgZWxtJGNvcmUkRGljdCRSZWQsIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGRpY3Q7XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkRGljdCRtb3ZlUmVkUmlnaHQgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRpZiAoKChkaWN0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoZGljdC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKGRpY3QuZS4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpIHtcblx0XHRpZiAoKGRpY3QuZC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoZGljdC5kLmQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBjbHIgPSBkaWN0LmE7XG5cdFx0XHR2YXIgayA9IGRpY3QuYjtcblx0XHRcdHZhciB2ID0gZGljdC5jO1xuXHRcdFx0dmFyIF9uMSA9IGRpY3QuZDtcblx0XHRcdHZhciBsQ2xyID0gX24xLmE7XG5cdFx0XHR2YXIgbEsgPSBfbjEuYjtcblx0XHRcdHZhciBsViA9IF9uMS5jO1xuXHRcdFx0dmFyIF9uMiA9IF9uMS5kO1xuXHRcdFx0dmFyIF9uMyA9IF9uMi5hO1xuXHRcdFx0dmFyIGxsSyA9IF9uMi5iO1xuXHRcdFx0dmFyIGxsViA9IF9uMi5jO1xuXHRcdFx0dmFyIGxsTGVmdCA9IF9uMi5kO1xuXHRcdFx0dmFyIGxsUmlnaHQgPSBfbjIuZTtcblx0XHRcdHZhciBsUmlnaHQgPSBfbjEuZTtcblx0XHRcdHZhciBfbjQgPSBkaWN0LmU7XG5cdFx0XHR2YXIgckNsciA9IF9uNC5hO1xuXHRcdFx0dmFyIHJLID0gX240LmI7XG5cdFx0XHR2YXIgclYgPSBfbjQuYztcblx0XHRcdHZhciByTGVmdCA9IF9uNC5kO1xuXHRcdFx0dmFyIHJSaWdodCA9IF9uNC5lO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSZWQsXG5cdFx0XHRcdGxLLFxuXHRcdFx0XHRsVixcblx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIGxsSywgbGxWLCBsbExlZnQsIGxsUmlnaHQpLFxuXHRcdFx0XHRBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRsUmlnaHQsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjbHIgPSBkaWN0LmE7XG5cdFx0XHR2YXIgayA9IGRpY3QuYjtcblx0XHRcdHZhciB2ID0gZGljdC5jO1xuXHRcdFx0dmFyIF9uNSA9IGRpY3QuZDtcblx0XHRcdHZhciBsQ2xyID0gX241LmE7XG5cdFx0XHR2YXIgbEsgPSBfbjUuYjtcblx0XHRcdHZhciBsViA9IF9uNS5jO1xuXHRcdFx0dmFyIGxMZWZ0ID0gX241LmQ7XG5cdFx0XHR2YXIgbFJpZ2h0ID0gX241LmU7XG5cdFx0XHR2YXIgX242ID0gZGljdC5lO1xuXHRcdFx0dmFyIHJDbHIgPSBfbjYuYTtcblx0XHRcdHZhciBySyA9IF9uNi5iO1xuXHRcdFx0dmFyIHJWID0gX242LmM7XG5cdFx0XHR2YXIgckxlZnQgPSBfbjYuZDtcblx0XHRcdHZhciByUmlnaHQgPSBfbjYuZTtcblx0XHRcdGlmIChjbHIuJCA9PT0gJ0JsYWNrJykge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0XHRrLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBsSywgbFYsIGxMZWZ0LCBsUmlnaHQpLFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwgckssIHJWLCByTGVmdCwgclJpZ2h0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0XHRrLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0QTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkUmVkLCBsSywgbFYsIGxMZWZ0LCBsUmlnaHQpLFxuXHRcdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwgckssIHJWLCByTGVmdCwgclJpZ2h0KSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBkaWN0O1xuXHR9XG59O1xudmFyIGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscFByZXBFUUdUID0gRjcoXG5cdGZ1bmN0aW9uICh0YXJnZXRLZXksIGRpY3QsIGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCkge1xuXHRcdGlmICgobGVmdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGxlZnQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBfbjEgPSBsZWZ0LmE7XG5cdFx0XHR2YXIgbEsgPSBsZWZ0LmI7XG5cdFx0XHR2YXIgbFYgPSBsZWZ0LmM7XG5cdFx0XHR2YXIgbExlZnQgPSBsZWZ0LmQ7XG5cdFx0XHR2YXIgbFJpZ2h0ID0gbGVmdC5lO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdGxLLFxuXHRcdFx0XHRsVixcblx0XHRcdFx0bExlZnQsXG5cdFx0XHRcdEE1KGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBlbG0kY29yZSREaWN0JFJlZCwga2V5LCB2YWx1ZSwgbFJpZ2h0LCByaWdodCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfbjIkMjpcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdGlmICgocmlnaHQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChyaWdodC5hLiQgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0aWYgKHJpZ2h0LmQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0XHRcdGlmIChyaWdodC5kLmEuJCA9PT0gJ0JsYWNrJykge1xuXHRcdFx0XHRcdFx0XHR2YXIgX24zID0gcmlnaHQuYTtcblx0XHRcdFx0XHRcdFx0dmFyIF9uNCA9IHJpZ2h0LmQ7XG5cdFx0XHRcdFx0XHRcdHZhciBfbjUgPSBfbjQuYTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJERpY3QkbW92ZVJlZFJpZ2h0KGRpY3QpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YnJlYWsgX24yJDI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBfbjYgPSByaWdodC5hO1xuXHRcdFx0XHRcdFx0dmFyIF9uNyA9IHJpZ2h0LmQ7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkRGljdCRtb3ZlUmVkUmlnaHQoZGljdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJyZWFrIF9uMiQyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGljdDtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkcmVtb3ZlTWluID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0aWYgKChkaWN0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoZGljdC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkge1xuXHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHR2YXIga2V5ID0gZGljdC5iO1xuXHRcdHZhciB2YWx1ZSA9IGRpY3QuYztcblx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHR2YXIgbENvbG9yID0gbGVmdC5hO1xuXHRcdHZhciBsTGVmdCA9IGxlZnQuZDtcblx0XHR2YXIgcmlnaHQgPSBkaWN0LmU7XG5cdFx0aWYgKGxDb2xvci4kID09PSAnQmxhY2snKSB7XG5cdFx0XHRpZiAoKGxMZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobExlZnQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdFx0dmFyIF9uMyA9IGxMZWZ0LmE7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRjb2xvcixcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRyZW1vdmVNaW4obGVmdCksXG5cdFx0XHRcdFx0cmlnaHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9uNCA9IGVsbSRjb3JlJERpY3QkbW92ZVJlZExlZnQoZGljdCk7XG5cdFx0XHRcdGlmIChfbjQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0XHR2YXIgbkNvbG9yID0gX240LmE7XG5cdFx0XHRcdFx0dmFyIG5LZXkgPSBfbjQuYjtcblx0XHRcdFx0XHR2YXIgblZhbHVlID0gX240LmM7XG5cdFx0XHRcdFx0dmFyIG5MZWZ0ID0gX240LmQ7XG5cdFx0XHRcdFx0dmFyIG5SaWdodCA9IF9uNC5lO1xuXHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0XHRcdG5Db2xvcixcblx0XHRcdFx0XHRcdG5LZXksXG5cdFx0XHRcdFx0XHRuVmFsdWUsXG5cdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JHJlbW92ZU1pbihuTGVmdCksXG5cdFx0XHRcdFx0XHRuUmlnaHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdGVsbSRjb3JlJERpY3QkcmVtb3ZlTWluKGxlZnQpLFxuXHRcdFx0XHRyaWdodCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdH1cbn07XG52YXIgZWxtJGNvcmUkRGljdCRyZW1vdmVIZWxwID0gRjIoXG5cdGZ1bmN0aW9uICh0YXJnZXRLZXksIGRpY3QpIHtcblx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdGlmIChfVXRpbHNfY21wKHRhcmdldEtleSwga2V5KSA8IDApIHtcblx0XHRcdFx0aWYgKChsZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobGVmdC5hLiQgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0dmFyIF9uNCA9IGxlZnQuYTtcblx0XHRcdFx0XHR2YXIgbExlZnQgPSBsZWZ0LmQ7XG5cdFx0XHRcdFx0aWYgKChsTGVmdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGxMZWZ0LmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHR2YXIgX242ID0gbExlZnQuYTtcblx0XHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRBMihlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAsIHRhcmdldEtleSwgbGVmdCksXG5cdFx0XHRcdFx0XHRcdHJpZ2h0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIF9uNyA9IGVsbSRjb3JlJERpY3QkbW92ZVJlZExlZnQoZGljdCk7XG5cdFx0XHRcdFx0XHRpZiAoX243LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBuQ29sb3IgPSBfbjcuYTtcblx0XHRcdFx0XHRcdFx0dmFyIG5LZXkgPSBfbjcuYjtcblx0XHRcdFx0XHRcdFx0dmFyIG5WYWx1ZSA9IF9uNy5jO1xuXHRcdFx0XHRcdFx0XHR2YXIgbkxlZnQgPSBfbjcuZDtcblx0XHRcdFx0XHRcdFx0dmFyIG5SaWdodCA9IF9uNy5lO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0XHRcdG5Db2xvcixcblx0XHRcdFx0XHRcdFx0XHRuS2V5LFxuXHRcdFx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRBMihlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAsIHRhcmdldEtleSwgbkxlZnQpLFxuXHRcdFx0XHRcdFx0XHRcdG5SaWdodCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAsIHRhcmdldEtleSwgbGVmdCksXG5cdFx0XHRcdFx0XHRyaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRlbG0kY29yZSREaWN0JHJlbW92ZUhlbHBFUUdULFxuXHRcdFx0XHRcdHRhcmdldEtleSxcblx0XHRcdFx0XHRBNyhlbG0kY29yZSREaWN0JHJlbW92ZUhlbHBQcmVwRVFHVCwgdGFyZ2V0S2V5LCBkaWN0LCBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscEVRR1QgPSBGMihcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCkge1xuXHRcdGlmIChkaWN0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHR2YXIgY29sb3IgPSBkaWN0LmE7XG5cdFx0XHR2YXIga2V5ID0gZGljdC5iO1xuXHRcdFx0dmFyIHZhbHVlID0gZGljdC5jO1xuXHRcdFx0dmFyIGxlZnQgPSBkaWN0LmQ7XG5cdFx0XHR2YXIgcmlnaHQgPSBkaWN0LmU7XG5cdFx0XHRpZiAoX1V0aWxzX2VxKHRhcmdldEtleSwga2V5KSkge1xuXHRcdFx0XHR2YXIgX24xID0gZWxtJGNvcmUkRGljdCRnZXRNaW4ocmlnaHQpO1xuXHRcdFx0XHRpZiAoX24xLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0dmFyIG1pbktleSA9IF9uMS5iO1xuXHRcdFx0XHRcdHZhciBtaW5WYWx1ZSA9IF9uMS5jO1xuXHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdFx0bWluS2V5LFxuXHRcdFx0XHRcdFx0bWluVmFsdWUsXG5cdFx0XHRcdFx0XHRsZWZ0LFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRyZW1vdmVNaW4ocmlnaHQpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRsZWZ0LFxuXHRcdFx0XHRcdEEyKGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwgdGFyZ2V0S2V5LCByaWdodCkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCRyZW1vdmUgPSBGMihcblx0ZnVuY3Rpb24gKGtleSwgZGljdCkge1xuXHRcdHZhciBfbjAgPSBBMihlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAsIGtleSwgZGljdCk7XG5cdFx0aWYgKChfbjAuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfbjAuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBfbjEgPSBfbjAuYTtcblx0XHRcdHZhciBrID0gX24wLmI7XG5cdFx0XHR2YXIgdiA9IF9uMC5jO1xuXHRcdFx0dmFyIGwgPSBfbjAuZDtcblx0XHRcdHZhciByID0gX24wLmU7XG5cdFx0XHRyZXR1cm4gQTUoZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGVsbSRjb3JlJERpY3QkQmxhY2ssIGssIHYsIGwsIHIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgeCA9IF9uMDtcblx0XHRcdHJldHVybiB4O1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkRGljdCR1cGRhdGUgPSBGMyhcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgYWx0ZXIsIGRpY3Rpb25hcnkpIHtcblx0XHR2YXIgX24wID0gYWx0ZXIoXG5cdFx0XHRBMihlbG0kY29yZSREaWN0JGdldCwgdGFyZ2V0S2V5LCBkaWN0aW9uYXJ5KSk7XG5cdFx0aWYgKF9uMC4kID09PSAnSnVzdCcpIHtcblx0XHRcdHZhciB2YWx1ZSA9IF9uMC5hO1xuXHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJERpY3QkaW5zZXJ0LCB0YXJnZXRLZXksIHZhbHVlLCBkaWN0aW9uYXJ5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEEyKGVsbSRjb3JlJERpY3QkcmVtb3ZlLCB0YXJnZXRLZXksIGRpY3Rpb25hcnkpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUgPSBGMihcblx0ZnVuY3Rpb24gKG1zZywgdmFsdWUpIHtcblx0XHRzd2l0Y2ggKHZhbHVlLiQpIHtcblx0XHRcdGNhc2UgJ1MnOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRjYXNlICdTZXF1ZW5jZSc6XG5cdFx0XHRcdHZhciBzZXFUeXBlID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gdmFsdWUuYjtcblx0XHRcdFx0dmFyIHZhbHVlTGlzdCA9IHZhbHVlLmM7XG5cdFx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0XHRjYXNlICdUb2dnbGUnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsIHNlcVR5cGUsICFpc0Nsb3NlZCwgdmFsdWVMaXN0KTtcblx0XHRcdFx0XHRjYXNlICdJbmRleCc6XG5cdFx0XHRcdFx0XHRpZiAobXNnLmEuJCA9PT0gJ05vbmUnKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfbjMgPSBtc2cuYTtcblx0XHRcdFx0XHRcdFx0dmFyIGluZGV4ID0gbXNnLmI7XG5cdFx0XHRcdFx0XHRcdHZhciBzdWJNc2cgPSBtc2cuYztcblx0XHRcdFx0XHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsXG5cdFx0XHRcdFx0XHRcdFx0c2VxVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlSW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlKHN1Yk1zZyksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZUxpc3QpKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRjYXNlICdEaWN0aW9uYXJ5Jzpcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSB2YWx1ZS5iO1xuXHRcdFx0XHRzd2l0Y2ggKG1zZy4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnVG9nZ2xlJzpcblx0XHRcdFx0XHRcdHJldHVybiBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnksICFpc0Nsb3NlZCwga2V5VmFsdWVQYWlycyk7XG5cdFx0XHRcdFx0Y2FzZSAnSW5kZXgnOlxuXHRcdFx0XHRcdFx0dmFyIHJlZGlyZWN0ID0gbXNnLmE7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBtc2cuYjtcblx0XHRcdFx0XHRcdHZhciBzdWJNc2cgPSBtc2cuYztcblx0XHRcdFx0XHRcdHN3aXRjaCAocmVkaXJlY3QuJCkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICdOb25lJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0tleSc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfbjYpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgayA9IF9uNi5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB2ID0gX242LmI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZSwgc3ViTXNnLCBrKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzKSk7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfbjcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgayA9IF9uNy5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB2ID0gX243LmI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUsIHN1Yk1zZywgdikpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0Y2FzZSAnUmVjb3JkJzpcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIHZhbHVlRGljdCA9IHZhbHVlLmI7XG5cdFx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0XHRjYXNlICdUb2dnbGUnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUmVjb3JkLCAhaXNDbG9zZWQsIHZhbHVlRGljdCk7XG5cdFx0XHRcdFx0Y2FzZSAnSW5kZXgnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR2YXIgZmllbGQgPSBtc2cuYTtcblx0XHRcdFx0XHRcdHZhciBzdWJNc2cgPSBtc2cuYjtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsXG5cdFx0XHRcdFx0XHRcdGlzQ2xvc2VkLFxuXHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRlbG0kY29yZSREaWN0JHVwZGF0ZSxcblx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcblx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUZpZWxkKHN1Yk1zZyksXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWVEaWN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBtYXliZU5hbWUgPSB2YWx1ZS5hO1xuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSB2YWx1ZS5iO1xuXHRcdFx0XHR2YXIgdmFsdWVMaXN0ID0gdmFsdWUuYztcblx0XHRcdFx0c3dpdGNoIChtc2cuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ1RvZ2dsZSc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3RvciwgbWF5YmVOYW1lLCAhaXNDbG9zZWQsIHZhbHVlTGlzdCk7XG5cdFx0XHRcdFx0Y2FzZSAnSW5kZXgnOlxuXHRcdFx0XHRcdFx0aWYgKG1zZy5hLiQgPT09ICdOb25lJykge1xuXHRcdFx0XHRcdFx0XHR2YXIgX24xMCA9IG1zZy5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBtc2cuYjtcblx0XHRcdFx0XHRcdFx0dmFyIHN1Yk1zZyA9IG1zZy5jO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRcdFx0XHRtYXliZU5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZShzdWJNc2cpLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVMaXN0KSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVGaWVsZCA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCBtYXliZUV4cGFuZG8pIHtcblx0XHRpZiAobWF5YmVFeHBhbmRvLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0cmV0dXJuIG1heWJlRXhwYW5kbztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGV4cGFuZG8gPSBtYXliZUV4cGFuZG8uYTtcblx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZSwgbXNnLCBleHBhbmRvKSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFNuYXBzaG90ID0gRjIoXG5cdGZ1bmN0aW9uIChtb2RlbCwgbWVzc2FnZXMpIHtcblx0XHRyZXR1cm4ge21lc3NhZ2VzOiBtZXNzYWdlcywgbW9kZWw6IG1vZGVsfTtcblx0fSk7XG52YXIgZWxtJGNvcmUkQXJyYXkkZnJvbUxpc3RIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChsaXN0LCBub2RlTGlzdCwgbm9kZUxpc3RTaXplKSB7XG5cdFx0ZnJvbUxpc3RIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZUZyb21MaXN0LCBlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsIGxpc3QpO1xuXHRcdFx0dmFyIGpzQXJyYXkgPSBfbjAuYTtcblx0XHRcdHZhciByZW1haW5pbmdJdGVtcyA9IF9uMC5iO1xuXHRcdFx0aWYgKF9VdGlsc19jbXAoXG5cdFx0XHRcdGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aChqc0FycmF5KSxcblx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKSA8IDApIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JGJ1aWxkZXJUb0FycmF5LFxuXHRcdFx0XHRcdHRydWUsXG5cdFx0XHRcdFx0e25vZGVMaXN0OiBub2RlTGlzdCwgbm9kZUxpc3RTaXplOiBub2RlTGlzdFNpemUsIHRhaWw6IGpzQXJyYXl9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciAkdGVtcCRsaXN0ID0gcmVtYWluaW5nSXRlbXMsXG5cdFx0XHRcdFx0JHRlbXAkbm9kZUxpc3QgPSBBMihcblx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkTGVhZihqc0FycmF5KSxcblx0XHRcdFx0XHRub2RlTGlzdCksXG5cdFx0XHRcdFx0JHRlbXAkbm9kZUxpc3RTaXplID0gbm9kZUxpc3RTaXplICsgMTtcblx0XHRcdFx0bGlzdCA9ICR0ZW1wJGxpc3Q7XG5cdFx0XHRcdG5vZGVMaXN0ID0gJHRlbXAkbm9kZUxpc3Q7XG5cdFx0XHRcdG5vZGVMaXN0U2l6ZSA9ICR0ZW1wJG5vZGVMaXN0U2l6ZTtcblx0XHRcdFx0Y29udGludWUgZnJvbUxpc3RIZWxwO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQXJyYXkkZnJvbUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xuXHRpZiAoIWxpc3QuYikge1xuXHRcdHJldHVybiBlbG0kY29yZSRBcnJheSRlbXB0eTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gQTMoZWxtJGNvcmUkQXJyYXkkZnJvbUxpc3RIZWxwLCBsaXN0LCBfTGlzdF9OaWwsIDApO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkYWRkUmVjZW50ID0gRjMoXG5cdGZ1bmN0aW9uIChtc2csIG5ld01vZGVsLCBfbjApIHtcblx0XHR2YXIgbW9kZWwgPSBfbjAubW9kZWw7XG5cdFx0dmFyIG1lc3NhZ2VzID0gX24wLm1lc3NhZ2VzO1xuXHRcdHZhciBudW1NZXNzYWdlcyA9IF9uMC5udW1NZXNzYWdlcztcblx0XHRyZXR1cm4gX1V0aWxzX2VxKG51bU1lc3NhZ2VzLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSkgPyBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0ZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRTbmFwc2hvdCxcblx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRlbG0kY29yZSRBcnJheSRmcm9tTGlzdChtZXNzYWdlcykpKSxcblx0XHRcdEEzKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFJlY2VudEhpc3RvcnksXG5cdFx0XHRcdG5ld01vZGVsLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W21zZ10pLFxuXHRcdFx0XHQxKSkgOiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0ZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdEEzKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFJlY2VudEhpc3RvcnksXG5cdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRBMihlbG0kY29yZSRMaXN0JGNvbnMsIG1zZywgbWVzc2FnZXMpLFxuXHRcdFx0XHRudW1NZXNzYWdlcyArIDEpKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkQml0d2lzZSRzaGlmdFJpZ2h0WmZCeSA9IF9CaXR3aXNlX3NoaWZ0UmlnaHRaZkJ5O1xudmFyIGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgPSA0Mjk0OTY3Mjk1ID4+PiAoMzIgLSBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXApO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRnZSA9IF9VdGlsc19nZTtcbnZhciBlbG0kY29yZSRCaXR3aXNlJGFuZCA9IF9CaXR3aXNlX2FuZDtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSRwdXNoID0gX0pzQXJyYXlfcHVzaDtcbnZhciBlbG0kY29yZSRFbG0kSnNBcnJheSRzaW5nbGV0b24gPSBfSnNBcnJheV9zaW5nbGV0b247XG52YXIgZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlR2V0ID0gX0pzQXJyYXlfdW5zYWZlR2V0O1xudmFyIGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZVNldCA9IF9Kc0FycmF5X3Vuc2FmZVNldDtcbnZhciBlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlID0gRjQoXG5cdGZ1bmN0aW9uIChzaGlmdCwgaW5kZXgsIHRhaWwsIHRyZWUpIHtcblx0XHR2YXIgcG9zID0gZWxtJGNvcmUkQXJyYXkkYml0TWFzayAmIChpbmRleCA+Pj4gc2hpZnQpO1xuXHRcdGlmIChfVXRpbHNfY21wKFxuXHRcdFx0cG9zLFxuXHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKHRyZWUpKSA+IC0xKSB7XG5cdFx0XHRpZiAoc2hpZnQgPT09IDUpIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJEVsbSRKc0FycmF5JHB1c2gsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkTGVhZih0YWlsKSxcblx0XHRcdFx0XHR0cmVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBuZXdTdWIgPSBlbG0kY29yZSRBcnJheSRTdWJUcmVlKFxuXHRcdFx0XHRcdEE0KGVsbSRjb3JlJEFycmF5JGluc2VydFRhaWxJblRyZWUsIHNoaWZ0IC0gZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLCBpbmRleCwgdGFpbCwgZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHkpKTtcblx0XHRcdFx0cmV0dXJuIEEyKGVsbSRjb3JlJEVsbSRKc0FycmF5JHB1c2gsIG5ld1N1YiwgdHJlZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB2YWx1ZSA9IEEyKGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZUdldCwgcG9zLCB0cmVlKTtcblx0XHRcdGlmICh2YWx1ZS4kID09PSAnU3ViVHJlZScpIHtcblx0XHRcdFx0dmFyIHN1YlRyZWUgPSB2YWx1ZS5hO1xuXHRcdFx0XHR2YXIgbmV3U3ViID0gZWxtJGNvcmUkQXJyYXkkU3ViVHJlZShcblx0XHRcdFx0XHRBNChlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlLCBzaGlmdCAtIGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCwgaW5kZXgsIHRhaWwsIHN1YlRyZWUpKTtcblx0XHRcdFx0cmV0dXJuIEEzKGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZVNldCwgcG9zLCBuZXdTdWIsIHRyZWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG5ld1N1YiA9IGVsbSRjb3JlJEFycmF5JFN1YlRyZWUoXG5cdFx0XHRcdFx0QTQoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlLFxuXHRcdFx0XHRcdFx0c2hpZnQgLSBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsXG5cdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdHRhaWwsXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRzaW5nbGV0b24odmFsdWUpKSk7XG5cdFx0XHRcdHJldHVybiBBMyhlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVTZXQsIHBvcywgbmV3U3ViLCB0cmVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJpdHdpc2Ukc2hpZnRMZWZ0QnkgPSBfQml0d2lzZV9zaGlmdExlZnRCeTtcbnZhciBlbG0kY29yZSRBcnJheSR1bnNhZmVSZXBsYWNlVGFpbCA9IEYyKFxuXHRmdW5jdGlvbiAobmV3VGFpbCwgX24wKSB7XG5cdFx0dmFyIGxlbiA9IF9uMC5hO1xuXHRcdHZhciBzdGFydFNoaWZ0ID0gX24wLmI7XG5cdFx0dmFyIHRyZWUgPSBfbjAuYztcblx0XHR2YXIgdGFpbCA9IF9uMC5kO1xuXHRcdHZhciBvcmlnaW5hbFRhaWxMZW4gPSBlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgodGFpbCk7XG5cdFx0dmFyIG5ld1RhaWxMZW4gPSBlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgobmV3VGFpbCk7XG5cdFx0dmFyIG5ld0FycmF5TGVuID0gbGVuICsgKG5ld1RhaWxMZW4gLSBvcmlnaW5hbFRhaWxMZW4pO1xuXHRcdGlmIChfVXRpbHNfZXEobmV3VGFpbExlbiwgZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKSkge1xuXHRcdFx0dmFyIG92ZXJmbG93ID0gX1V0aWxzX2NtcChuZXdBcnJheUxlbiA+Pj4gZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLCAxIDw8IHN0YXJ0U2hpZnQpID4gMDtcblx0XHRcdGlmIChvdmVyZmxvdykge1xuXHRcdFx0XHR2YXIgbmV3U2hpZnQgPSBzdGFydFNoaWZ0ICsgZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwO1xuXHRcdFx0XHR2YXIgbmV3VHJlZSA9IEE0KFxuXHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JGluc2VydFRhaWxJblRyZWUsXG5cdFx0XHRcdFx0bmV3U2hpZnQsXG5cdFx0XHRcdFx0bGVuLFxuXHRcdFx0XHRcdG5ld1RhaWwsXG5cdFx0XHRcdFx0ZWxtJGNvcmUkRWxtJEpzQXJyYXkkc2luZ2xldG9uKFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkQXJyYXkkU3ViVHJlZSh0cmVlKSkpO1xuXHRcdFx0XHRyZXR1cm4gQTQoZWxtJGNvcmUkQXJyYXkkQXJyYXlfZWxtX2J1aWx0aW4sIG5ld0FycmF5TGVuLCBuZXdTaGlmdCwgbmV3VHJlZSwgZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdG5ld0FycmF5TGVuLFxuXHRcdFx0XHRcdHN0YXJ0U2hpZnQsXG5cdFx0XHRcdFx0QTQoZWxtJGNvcmUkQXJyYXkkaW5zZXJ0VGFpbEluVHJlZSwgc3RhcnRTaGlmdCwgbGVuLCBuZXdUYWlsLCB0cmVlKSxcblx0XHRcdFx0XHRlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBNChlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbiwgbmV3QXJyYXlMZW4sIHN0YXJ0U2hpZnQsIHRyZWUsIG5ld1RhaWwpO1xuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkQXJyYXkkcHVzaCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYXJyYXkpIHtcblx0XHR2YXIgdGFpbCA9IGFycmF5LmQ7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0ZWxtJGNvcmUkQXJyYXkkdW5zYWZlUmVwbGFjZVRhaWwsXG5cdFx0XHRBMihlbG0kY29yZSRFbG0kSnNBcnJheSRwdXNoLCBhLCB0YWlsKSxcblx0XHRcdGFycmF5KTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGQgPSBGMyhcblx0ZnVuY3Rpb24gKG1zZywgbW9kZWwsIF9uMCkge1xuXHRcdHZhciBzbmFwc2hvdHMgPSBfbjAuc25hcHNob3RzO1xuXHRcdHZhciByZWNlbnQgPSBfbjAucmVjZW50O1xuXHRcdHZhciBudW1NZXNzYWdlcyA9IF9uMC5udW1NZXNzYWdlcztcblx0XHR2YXIgX24xID0gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGRSZWNlbnQsIG1zZywgbW9kZWwsIHJlY2VudCk7XG5cdFx0aWYgKF9uMS5hLiQgPT09ICdKdXN0Jykge1xuXHRcdFx0dmFyIHNuYXBzaG90ID0gX24xLmEuYTtcblx0XHRcdHZhciBuZXdSZWNlbnQgPSBfbjEuYjtcblx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRIaXN0b3J5LFxuXHRcdFx0XHRBMihlbG0kY29yZSRBcnJheSRwdXNoLCBzbmFwc2hvdCwgc25hcHNob3RzKSxcblx0XHRcdFx0bmV3UmVjZW50LFxuXHRcdFx0XHRudW1NZXNzYWdlcyArIDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24yID0gX24xLmE7XG5cdFx0XHR2YXIgbmV3UmVjZW50ID0gX24xLmI7XG5cdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRIaXN0b3J5LCBzbmFwc2hvdHMsIG5ld1JlY2VudCwgbnVtTWVzc2FnZXMgKyAxKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkU3RlcHBpbmcgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdTdGVwcGluZycsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JERvbmUgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdEb25lJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0SGVscCA9IEYzKFxuXHRmdW5jdGlvbiAodXBkYXRlLCBtc2csIGdldFJlc3VsdCkge1xuXHRcdGlmIChnZXRSZXN1bHQuJCA9PT0gJ0RvbmUnKSB7XG5cdFx0XHRyZXR1cm4gZ2V0UmVzdWx0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbiA9IGdldFJlc3VsdC5hO1xuXHRcdFx0dmFyIG1vZGVsID0gZ2V0UmVzdWx0LmI7XG5cdFx0XHRyZXR1cm4gKCFuKSA/IEEyKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JERvbmUsXG5cdFx0XHRcdG1zZyxcblx0XHRcdFx0QTIodXBkYXRlLCBtc2csIG1vZGVsKS5hKSA6IEEyKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFN0ZXBwaW5nLFxuXHRcdFx0XHRuIC0gMSxcblx0XHRcdFx0QTIodXBkYXRlLCBtc2csIG1vZGVsKS5hKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkdW5kb25lID0gZnVuY3Rpb24gKGdldFJlc3VsdCkge1xuXHR1bmRvbmU6XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0aWYgKGdldFJlc3VsdC4kID09PSAnRG9uZScpIHtcblx0XHRcdHZhciBtc2cgPSBnZXRSZXN1bHQuYTtcblx0XHRcdHZhciBtb2RlbCA9IGdldFJlc3VsdC5iO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIG1zZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciAkdGVtcCRnZXRSZXN1bHQgPSBnZXRSZXN1bHQ7XG5cdFx0XHRnZXRSZXN1bHQgPSAkdGVtcCRnZXRSZXN1bHQ7XG5cdFx0XHRjb250aW51ZSB1bmRvbmU7XG5cdFx0fVxuXHR9XG59O1xudmFyIGVsbSRjb3JlJEFycmF5JGdldEhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKHNoaWZ0LCBpbmRleCwgdHJlZSkge1xuXHRcdGdldEhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBwb3MgPSBlbG0kY29yZSRBcnJheSRiaXRNYXNrICYgKGluZGV4ID4+PiBzaGlmdCk7XG5cdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlR2V0LCBwb3MsIHRyZWUpO1xuXHRcdFx0aWYgKF9uMC4kID09PSAnU3ViVHJlZScpIHtcblx0XHRcdFx0dmFyIHN1YlRyZWUgPSBfbjAuYTtcblx0XHRcdFx0dmFyICR0ZW1wJHNoaWZ0ID0gc2hpZnQgLSBlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsXG5cdFx0XHRcdFx0JHRlbXAkaW5kZXggPSBpbmRleCxcblx0XHRcdFx0XHQkdGVtcCR0cmVlID0gc3ViVHJlZTtcblx0XHRcdFx0c2hpZnQgPSAkdGVtcCRzaGlmdDtcblx0XHRcdFx0aW5kZXggPSAkdGVtcCRpbmRleDtcblx0XHRcdFx0dHJlZSA9ICR0ZW1wJHRyZWU7XG5cdFx0XHRcdGNvbnRpbnVlIGdldEhlbHA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdmFsdWVzID0gX24wLmE7XG5cdFx0XHRcdHJldHVybiBBMihlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQsIGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgJiBpbmRleCwgdmFsdWVzKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEFycmF5JHRhaWxJbmRleCA9IGZ1bmN0aW9uIChsZW4pIHtcblx0cmV0dXJuIChsZW4gPj4+IDUpIDw8IDU7XG59O1xudmFyIGVsbSRjb3JlJEFycmF5JGdldCA9IEYyKFxuXHRmdW5jdGlvbiAoaW5kZXgsIF9uMCkge1xuXHRcdHZhciBsZW4gPSBfbjAuYTtcblx0XHR2YXIgc3RhcnRTaGlmdCA9IF9uMC5iO1xuXHRcdHZhciB0cmVlID0gX24wLmM7XG5cdFx0dmFyIHRhaWwgPSBfbjAuZDtcblx0XHRyZXR1cm4gKChpbmRleCA8IDApIHx8IChfVXRpbHNfY21wKGluZGV4LCBsZW4pID4gLTEpKSA/IGVsbSRjb3JlJE1heWJlJE5vdGhpbmcgOiAoKF9VdGlsc19jbXAoXG5cdFx0XHRpbmRleCxcblx0XHRcdGVsbSRjb3JlJEFycmF5JHRhaWxJbmRleChsZW4pKSA+IC0xKSA/IGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRBMihlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQsIGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgJiBpbmRleCwgdGFpbCkpIDogZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdEEzKGVsbSRjb3JlJEFycmF5JGdldEhlbHAsIHN0YXJ0U2hpZnQsIGluZGV4LCB0cmVlKSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldCA9IEYzKFxuXHRmdW5jdGlvbiAodXBkYXRlLCBpbmRleCwgaGlzdG9yeSkge1xuXHRcdGdldDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIHJlY2VudCA9IGhpc3RvcnkucmVjZW50O1xuXHRcdFx0dmFyIHNuYXBzaG90TWF4ID0gaGlzdG9yeS5udW1NZXNzYWdlcyAtIHJlY2VudC5udW1NZXNzYWdlcztcblx0XHRcdGlmIChfVXRpbHNfY21wKGluZGV4LCBzbmFwc2hvdE1heCkgPiAtMSkge1xuXHRcdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR1bmRvbmUoXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRnZXRIZWxwKHVwZGF0ZSksXG5cdFx0XHRcdFx0XHRBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFN0ZXBwaW5nLCBpbmRleCAtIHNuYXBzaG90TWF4LCByZWNlbnQubW9kZWwpLFxuXHRcdFx0XHRcdFx0cmVjZW50Lm1lc3NhZ2VzKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkQXJyYXkkZ2V0LCAoaW5kZXggLyBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSkgfCAwLCBoaXN0b3J5LnNuYXBzaG90cyk7XG5cdFx0XHRcdGlmIChfbjAuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJHVwZGF0ZSA9IHVwZGF0ZSxcblx0XHRcdFx0XHRcdCR0ZW1wJGluZGV4ID0gaW5kZXgsXG5cdFx0XHRcdFx0XHQkdGVtcCRoaXN0b3J5ID0gaGlzdG9yeTtcblx0XHRcdFx0XHR1cGRhdGUgPSAkdGVtcCR1cGRhdGU7XG5cdFx0XHRcdFx0aW5kZXggPSAkdGVtcCRpbmRleDtcblx0XHRcdFx0XHRoaXN0b3J5ID0gJHRlbXAkaGlzdG9yeTtcblx0XHRcdFx0XHRjb250aW51ZSBnZXQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG1vZGVsID0gX24wLmEubW9kZWw7XG5cdFx0XHRcdFx0dmFyIG1lc3NhZ2VzID0gX24wLmEubWVzc2FnZXM7XG5cdFx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkdW5kb25lKFxuXHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJEFycmF5JGZvbGRyLFxuXHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldEhlbHAodXBkYXRlKSxcblx0XHRcdFx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRTdGVwcGluZywgaW5kZXggJSBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSwgbW9kZWwpLFxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlcykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFBhdXNlZCA9IEYzKFxuXHRmdW5jdGlvbiAoYSwgYiwgYykge1xuXHRcdHJldHVybiB7JDogJ1BhdXNlZCcsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVsbVRvSnMgPSBfRGVidWdnZXJfdW5zYWZlQ29lcmNlO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZW5jb2RlSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAoc25hcHNob3QsIGFsbE1lc3NhZ2VzKSB7XG5cdFx0cmV0dXJuIEEzKGVsbSRjb3JlJEFycmF5JGZvbGRsLCBlbG0kY29yZSRMaXN0JGNvbnMsIGFsbE1lc3NhZ2VzLCBzbmFwc2hvdC5tZXNzYWdlcyk7XG5cdH0pO1xudmFyIGVsbSRqc29uJEpzb24kRW5jb2RlJGxpc3QgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIGVudHJpZXMpIHtcblx0XHRyZXR1cm4gX0pzb25fd3JhcChcblx0XHRcdEEzKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHRfSnNvbl9hZGRFbnRyeShmdW5jKSxcblx0XHRcdFx0X0pzb25fZW1wdHlBcnJheShfVXRpbHNfVHVwbGUwKSxcblx0XHRcdFx0ZW50cmllcykpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVuY29kZSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHNuYXBzaG90cyA9IF9uMC5zbmFwc2hvdHM7XG5cdHZhciByZWNlbnQgPSBfbjAucmVjZW50O1xuXHRyZXR1cm4gQTIoXG5cdFx0ZWxtJGpzb24kSnNvbiRFbmNvZGUkbGlzdCxcblx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVsbVRvSnMsXG5cdFx0QTMoXG5cdFx0XHRlbG0kY29yZSRBcnJheSRmb2xkcixcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZW5jb2RlSGVscCxcblx0XHRcdGVsbSRjb3JlJExpc3QkcmV2ZXJzZShyZWNlbnQubWVzc2FnZXMpLFxuXHRcdFx0c25hcHNob3RzKSk7XG59O1xudmFyIGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdCA9IGZ1bmN0aW9uIChwYWlycykge1xuXHRyZXR1cm4gX0pzb25fd3JhcChcblx0XHRBMyhcblx0XHRcdGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKF9uMCwgb2JqKSB7XG5cdFx0XHRcdFx0dmFyIGsgPSBfbjAuYTtcblx0XHRcdFx0XHR2YXIgdiA9IF9uMC5iO1xuXHRcdFx0XHRcdHJldHVybiBBMyhfSnNvbl9hZGRGaWVsZCwgaywgdiwgb2JqKTtcblx0XHRcdFx0fSksXG5cdFx0XHRfSnNvbl9lbXB0eU9iamVjdChfVXRpbHNfVHVwbGUwKSxcblx0XHRcdHBhaXJzKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZUFsaWFzID0gZnVuY3Rpb24gKF9uMCkge1xuXHR2YXIgYXJncyA9IF9uMC5hcmdzO1xuXHR2YXIgdGlwZSA9IF9uMC50aXBlO1xuXHRyZXR1cm4gZWxtJGpzb24kSnNvbiRFbmNvZGUkb2JqZWN0KFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J2FyZ3MnLFxuXHRcdFx0XHRBMihlbG0kanNvbiRKc29uJEVuY29kZSRsaXN0LCBlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcsIGFyZ3MpKSxcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J3R5cGUnLFxuXHRcdFx0XHRlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcodGlwZSkpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZURpY3QgPSBGMihcblx0ZnVuY3Rpb24gKGYsIGRpY3QpIHtcblx0XHRyZXR1cm4gZWxtJGpzb24kSnNvbiRFbmNvZGUkb2JqZWN0KFxuXHRcdFx0ZWxtJGNvcmUkRGljdCR0b0xpc3QoXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRjb3JlJERpY3QkbWFwLFxuXHRcdFx0XHRcdEYyKFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGYodmFsdWUpO1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0ZGljdCkpKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlVW5pb24gPSBmdW5jdGlvbiAoX24wKSB7XG5cdHZhciBhcmdzID0gX24wLmFyZ3M7XG5cdHZhciB0YWdzID0gX24wLnRhZ3M7XG5cdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQnYXJncycsXG5cdFx0XHRcdEEyKGVsbSRqc29uJEpzb24kRW5jb2RlJGxpc3QsIGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZywgYXJncykpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndGFncycsXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZURpY3QsXG5cdFx0XHRcdFx0ZWxtJGpzb24kSnNvbiRFbmNvZGUkbGlzdChlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcpLFxuXHRcdFx0XHRcdHRhZ3MpKVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVUeXBlcyA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIG1lc3NhZ2UgPSBfbjAubWVzc2FnZTtcblx0dmFyIHVuaW9ucyA9IF9uMC51bmlvbnM7XG5cdHZhciBhbGlhc2VzID0gX24wLmFsaWFzZXM7XG5cdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQnbWVzc2FnZScsXG5cdFx0XHRcdGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZyhtZXNzYWdlKSksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCdhbGlhc2VzJyxcblx0XHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlRGljdCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlQWxpYXMsIGFsaWFzZXMpKSxcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J3VuaW9ucycsXG5cdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZURpY3QsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZVVuaW9uLCB1bmlvbnMpKVxuXHRcdFx0XSkpO1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVWZXJzaW9ucyA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIGVsbSA9IF9uMC5lbG07XG5cdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQnZWxtJyxcblx0XHRcdFx0ZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nKGVsbSkpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZSA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHZlcnNpb25zID0gX24wLnZlcnNpb25zO1xuXHR2YXIgdHlwZXMgPSBfbjAudHlwZXM7XG5cdHJldHVybiBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndmVyc2lvbnMnLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVWZXJzaW9ucyh2ZXJzaW9ucykpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndHlwZXMnLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVUeXBlcyh0eXBlcykpXG5cdFx0XHRdKSk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZG93bmxvYWQgPSBGMihcblx0ZnVuY3Rpb24gKG1ldGFkYXRhLCBoaXN0b3J5KSB7XG5cdFx0dmFyIGpzb24gPSBlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdCdtZXRhZGF0YScsXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlKG1ldGFkYXRhKSksXG5cdFx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHQnaGlzdG9yeScsXG5cdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRlbmNvZGUoaGlzdG9yeSkpXG5cdFx0XHRcdF0pKTtcblx0XHR2YXIgaGlzdG9yeUxlbmd0aCA9IGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc2l6ZShoaXN0b3J5KTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRlbG0kY29yZSRUYXNrJHBlcmZvcm0sXG5cdFx0XHRmdW5jdGlvbiAoX24wKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE5vT3A7XG5cdFx0XHR9LFxuXHRcdFx0QTIoX0RlYnVnZ2VyX2Rvd25sb2FkLCBoaXN0b3J5TGVuZ3RoLCBqc29uKSk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkanNUb0VsbSA9IF9EZWJ1Z2dlcl91bnNhZmVDb2VyY2U7XG52YXIgZWxtJGpzb24kSnNvbiREZWNvZGUkdmFsdWUgPSBfSnNvbl9kZWNvZGVWYWx1ZTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGRlY29kZXIgPSBGMihcblx0ZnVuY3Rpb24gKGluaXRpYWxNb2RlbCwgdXBkYXRlKSB7XG5cdFx0dmFyIGFkZE1lc3NhZ2UgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChyYXdNc2csIF9uMCkge1xuXHRcdFx0XHR2YXIgbW9kZWwgPSBfbjAuYTtcblx0XHRcdFx0dmFyIGhpc3RvcnkgPSBfbjAuYjtcblx0XHRcdFx0dmFyIG1zZyA9IGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkanNUb0VsbShyYXdNc2cpO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRBMih1cGRhdGUsIG1zZywgbW9kZWwpLFxuXHRcdFx0XHRcdEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkYWRkLCBtc2csIG1vZGVsLCBoaXN0b3J5KSk7XG5cdFx0XHR9KTtcblx0XHR2YXIgdXBkYXRlTW9kZWwgPSBmdW5jdGlvbiAocmF3TXNncykge1xuXHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHRhZGRNZXNzYWdlLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGluaXRpYWxNb2RlbCxcblx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVtcHR5KGluaXRpYWxNb2RlbCkpLFxuXHRcdFx0XHRyYXdNc2dzKTtcblx0XHR9O1xuXHRcdHJldHVybiBBMihcblx0XHRcdGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcCxcblx0XHRcdHVwZGF0ZU1vZGVsLFxuXHRcdFx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdChlbG0kanNvbiRKc29uJERlY29kZSR2YWx1ZSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldEluaXRpYWxNb2RlbCA9IGZ1bmN0aW9uIChfbjApIHtcblx0dmFyIHNuYXBzaG90cyA9IF9uMC5zbmFwc2hvdHM7XG5cdHZhciByZWNlbnQgPSBfbjAucmVjZW50O1xuXHR2YXIgX24xID0gQTIoZWxtJGNvcmUkQXJyYXkkZ2V0LCAwLCBzbmFwc2hvdHMpO1xuXHRpZiAoX24xLiQgPT09ICdKdXN0Jykge1xuXHRcdHZhciBtb2RlbCA9IF9uMS5hLm1vZGVsO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVjZW50Lm1vZGVsO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmFkSW1wb3J0ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnQmFkSW1wb3J0JywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRDb3JydXB0SGlzdG9yeSA9IHskOiAnQ29ycnVwdEhpc3RvcnknfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNvcnJ1cHRJbXBvcnQgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJhZEltcG9ydChlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkQ29ycnVwdEhpc3RvcnkpO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kbG9hZE5ld0hpc3RvcnkgPSBGMyhcblx0ZnVuY3Rpb24gKHJhd0hpc3RvcnksIHVwZGF0ZSwgbW9kZWwpIHtcblx0XHR2YXIgcHVyZVVzZXJVcGRhdGUgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChtc2csIHVzZXJNb2RlbCkge1xuXHRcdFx0XHRyZXR1cm4gQTIodXBkYXRlLCBtc2csIHVzZXJNb2RlbCkuYTtcblx0XHRcdH0pO1xuXHRcdHZhciBpbml0aWFsVXNlck1vZGVsID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRnZXRJbml0aWFsTW9kZWwobW9kZWwuaGlzdG9yeSk7XG5cdFx0dmFyIGRlY29kZXIgPSBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGRlY29kZXIsIGluaXRpYWxVc2VyTW9kZWwsIHB1cmVVc2VyVXBkYXRlKTtcblx0XHR2YXIgX24wID0gQTIoZWxtJGpzb24kSnNvbiREZWNvZGUkZGVjb2RlVmFsdWUsIGRlY29kZXIsIHJhd0hpc3RvcnkpO1xuXHRcdGlmIChfbjAuJCA9PT0gJ0VycicpIHtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdHtvdmVybGF5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNvcnJ1cHRJbXBvcnR9KSxcblx0XHRcdFx0ZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24xID0gX24wLmE7XG5cdFx0XHR2YXIgbGF0ZXN0VXNlck1vZGVsID0gX24xLmE7XG5cdFx0XHR2YXIgbmV3SGlzdG9yeSA9IF9uMS5iO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZXhwYW5kbzogZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0KGxhdGVzdFVzZXJNb2RlbCksXG5cdFx0XHRcdFx0XHRoaXN0b3J5OiBuZXdIaXN0b3J5LFxuXHRcdFx0XHRcdFx0b3ZlcmxheTogZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRub25lLFxuXHRcdFx0XHRcdFx0c3RhdGU6IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUnVubmluZyhsYXRlc3RVc2VyTW9kZWwpXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHR9XG5cdH0pO1xudmFyIGVsbSRjb3JlJEJhc2ljcyRhbHdheXMgPSBGMihcblx0ZnVuY3Rpb24gKGEsIF9uMCkge1xuXHRcdHJldHVybiBhO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHNjcm9sbCA9IGZ1bmN0aW9uIChwb3BvdXQpIHtcblx0cmV0dXJuIEEyKFxuXHRcdGVsbSRjb3JlJFRhc2skcGVyZm9ybSxcblx0XHRlbG0kY29yZSRCYXNpY3MkYWx3YXlzKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kTm9PcCksXG5cdFx0X0RlYnVnZ2VyX3Njcm9sbChwb3BvdXQpKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVcGxvYWQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdVcGxvYWQnLCBhOiBhfTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR1cGxvYWQgPSBBMihcblx0ZWxtJGNvcmUkVGFzayRwZXJmb3JtLFxuXHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVwbG9hZCxcblx0X0RlYnVnZ2VyX3VwbG9hZChfVXRpbHNfVHVwbGUwKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCYWRNZXRhZGF0YSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0JhZE1ldGFkYXRhJywgYTogYX07XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYmFkTWV0YWRhdGEgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJhZE1ldGFkYXRhO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd2l0aEdvb2RNZXRhZGF0YSA9IEYyKFxuXHRmdW5jdGlvbiAobW9kZWwsIGZ1bmMpIHtcblx0XHR2YXIgX24wID0gbW9kZWwubWV0YWRhdGE7XG5cdFx0aWYgKF9uMC4kID09PSAnT2snKSB7XG5cdFx0XHR2YXIgbWV0YWRhdGEgPSBfbjAuYTtcblx0XHRcdHJldHVybiBmdW5jKG1ldGFkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yID0gX24wLmE7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRvdmVybGF5OiBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGJhZE1ldGFkYXRhKGVycm9yKVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkQWxpYXNDaGFuZ2UgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdBbGlhc0NoYW5nZScsIGE6IGF9O1xufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja0FsaWFzID0gRjQoXG5cdGZ1bmN0aW9uIChuYW1lLCBvbGQsIF9uZXcsIGNoYW5nZXMpIHtcblx0XHRyZXR1cm4gKF9VdGlsc19lcShvbGQudGlwZSwgX25ldy50aXBlKSAmJiBfVXRpbHNfZXEob2xkLmFyZ3MsIF9uZXcuYXJncykpID8gY2hhbmdlcyA6IEEyKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEFsaWFzQ2hhbmdlKG5hbWUpLFxuXHRcdFx0Y2hhbmdlcyk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGFkZFRhZyA9IEYzKFxuXHRmdW5jdGlvbiAodGFnLCBfbjAsIGNoYW5nZXMpIHtcblx0XHRyZXR1cm4gX1V0aWxzX3VwZGF0ZShcblx0XHRcdGNoYW5nZXMsXG5cdFx0XHR7XG5cdFx0XHRcdGFkZGVkOiBBMihlbG0kY29yZSRMaXN0JGNvbnMsIHRhZywgY2hhbmdlcy5hZGRlZClcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja1RhZyA9IEY0KFxuXHRmdW5jdGlvbiAodGFnLCBvbGQsIF9uZXcsIGNoYW5nZXMpIHtcblx0XHRyZXR1cm4gX1V0aWxzX2VxKG9sZCwgX25ldykgPyBjaGFuZ2VzIDogX1V0aWxzX3VwZGF0ZShcblx0XHRcdGNoYW5nZXMsXG5cdFx0XHR7XG5cdFx0XHRcdGNoYW5nZWQ6IEEyKGVsbSRjb3JlJExpc3QkY29ucywgdGFnLCBjaGFuZ2VzLmNoYW5nZWQpXG5cdFx0XHR9KTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkcmVtb3ZlVGFnID0gRjMoXG5cdGZ1bmN0aW9uICh0YWcsIF9uMCwgY2hhbmdlcykge1xuXHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0Y2hhbmdlcyxcblx0XHRcdHtcblx0XHRcdFx0cmVtb3ZlZDogQTIoZWxtJGNvcmUkTGlzdCRjb25zLCB0YWcsIGNoYW5nZXMucmVtb3ZlZClcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVW5pb25DaGFuZ2UgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdVbmlvbkNoYW5nZScsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVGFnQ2hhbmdlcyA9IEY0KFxuXHRmdW5jdGlvbiAocmVtb3ZlZCwgY2hhbmdlZCwgYWRkZWQsIGFyZ3NNYXRjaCkge1xuXHRcdHJldHVybiB7YWRkZWQ6IGFkZGVkLCBhcmdzTWF0Y2g6IGFyZ3NNYXRjaCwgY2hhbmdlZDogY2hhbmdlZCwgcmVtb3ZlZDogcmVtb3ZlZH07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRlbXB0eVRhZ0NoYW5nZXMgPSBmdW5jdGlvbiAoYXJnc01hdGNoKSB7XG5cdHJldHVybiBBNChlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVGFnQ2hhbmdlcywgX0xpc3RfTmlsLCBfTGlzdF9OaWwsIF9MaXN0X05pbCwgYXJnc01hdGNoKTtcbn07XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGhhc1RhZ0NoYW5nZXMgPSBmdW5jdGlvbiAodGFnQ2hhbmdlcykge1xuXHRyZXR1cm4gX1V0aWxzX2VxKFxuXHRcdHRhZ0NoYW5nZXMsXG5cdFx0QTQoZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFRhZ0NoYW5nZXMsIF9MaXN0X05pbCwgX0xpc3RfTmlsLCBfTGlzdF9OaWwsIHRydWUpKTtcbn07XG52YXIgZWxtJGNvcmUkRGljdCRtZXJnZSA9IEY2KFxuXHRmdW5jdGlvbiAobGVmdFN0ZXAsIGJvdGhTdGVwLCByaWdodFN0ZXAsIGxlZnREaWN0LCByaWdodERpY3QsIGluaXRpYWxSZXN1bHQpIHtcblx0XHR2YXIgc3RlcFN0YXRlID0gRjMoXG5cdFx0XHRmdW5jdGlvbiAocktleSwgclZhbHVlLCBfbjApIHtcblx0XHRcdFx0c3RlcFN0YXRlOlxuXHRcdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRcdHZhciBsaXN0ID0gX24wLmE7XG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IF9uMC5iO1xuXHRcdFx0XHRcdGlmICghbGlzdC5iKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0bGlzdCxcblx0XHRcdFx0XHRcdFx0QTMocmlnaHRTdGVwLCByS2V5LCByVmFsdWUsIHJlc3VsdCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgX24yID0gbGlzdC5hO1xuXHRcdFx0XHRcdFx0dmFyIGxLZXkgPSBfbjIuYTtcblx0XHRcdFx0XHRcdHZhciBsVmFsdWUgPSBfbjIuYjtcblx0XHRcdFx0XHRcdHZhciByZXN0ID0gbGlzdC5iO1xuXHRcdFx0XHRcdFx0aWYgKF9VdGlsc19jbXAobEtleSwgcktleSkgPCAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRyS2V5ID0gcktleSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRyVmFsdWUgPSByVmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkX24wID0gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRyZXN0LFxuXHRcdFx0XHRcdFx0XHRcdEEzKGxlZnRTdGVwLCBsS2V5LCBsVmFsdWUsIHJlc3VsdCkpO1xuXHRcdFx0XHRcdFx0XHRyS2V5ID0gJHRlbXAkcktleTtcblx0XHRcdFx0XHRcdFx0clZhbHVlID0gJHRlbXAkclZhbHVlO1xuXHRcdFx0XHRcdFx0XHRfbjAgPSAkdGVtcCRfbjA7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIHN0ZXBTdGF0ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmIChfVXRpbHNfY21wKGxLZXksIHJLZXkpID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdCxcblx0XHRcdFx0XHRcdFx0XHRcdEEzKHJpZ2h0U3RlcCwgcktleSwgclZhbHVlLCByZXN1bHQpKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdHJlc3QsXG5cdFx0XHRcdFx0XHRcdFx0XHRBNChib3RoU3RlcCwgbEtleSwgbFZhbHVlLCByVmFsdWUsIHJlc3VsdCkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR2YXIgX24zID0gQTMoXG5cdFx0XHRlbG0kY29yZSREaWN0JGZvbGRsLFxuXHRcdFx0c3RlcFN0YXRlLFxuXHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCR0b0xpc3QobGVmdERpY3QpLFxuXHRcdFx0XHRpbml0aWFsUmVzdWx0KSxcblx0XHRcdHJpZ2h0RGljdCk7XG5cdFx0dmFyIGxlZnRvdmVycyA9IF9uMy5hO1xuXHRcdHZhciBpbnRlcm1lZGlhdGVSZXN1bHQgPSBfbjMuYjtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0RjIoXG5cdFx0XHRcdGZ1bmN0aW9uIChfbjQsIHJlc3VsdCkge1xuXHRcdFx0XHRcdHZhciBrID0gX240LmE7XG5cdFx0XHRcdFx0dmFyIHYgPSBfbjQuYjtcblx0XHRcdFx0XHRyZXR1cm4gQTMobGVmdFN0ZXAsIGssIHYsIHJlc3VsdCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0aW50ZXJtZWRpYXRlUmVzdWx0LFxuXHRcdFx0bGVmdG92ZXJzKTtcblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2tVbmlvbiA9IEY0KFxuXHRmdW5jdGlvbiAobmFtZSwgb2xkLCBfbmV3LCBjaGFuZ2VzKSB7XG5cdFx0dmFyIHRhZ0NoYW5nZXMgPSBBNihcblx0XHRcdGVsbSRjb3JlJERpY3QkbWVyZ2UsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRyZW1vdmVUYWcsXG5cdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja1RhZyxcblx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGFkZFRhZyxcblx0XHRcdG9sZC50YWdzLFxuXHRcdFx0X25ldy50YWdzLFxuXHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGVtcHR5VGFnQ2hhbmdlcyhcblx0XHRcdFx0X1V0aWxzX2VxKG9sZC5hcmdzLCBfbmV3LmFyZ3MpKSk7XG5cdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRoYXNUYWdDaGFuZ2VzKHRhZ0NoYW5nZXMpID8gY2hhbmdlcyA6IEEyKFxuXHRcdFx0ZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0QTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFVuaW9uQ2hhbmdlLCBuYW1lLCB0YWdDaGFuZ2VzKSxcblx0XHRcdGNoYW5nZXMpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRpZ25vcmUgPSBGMyhcblx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIHJlcG9ydCkge1xuXHRcdHJldHVybiByZXBvcnQ7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRNZXNzYWdlQ2hhbmdlZCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ01lc3NhZ2VDaGFuZ2VkJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRTb21ldGhpbmdDaGFuZ2VkID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnU29tZXRoaW5nQ2hhbmdlZCcsIGE6IGF9O1xufTtcbnZhciBlbG0kY29yZSRCYXNpY3MkbmVxID0gX1V0aWxzX25vdEVxdWFsO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrVHlwZXMgPSBGMihcblx0ZnVuY3Rpb24gKG9sZCwgX25ldykge1xuXHRcdHJldHVybiAoIV9VdGlsc19lcShvbGQubWVzc2FnZSwgX25ldy5tZXNzYWdlKSkgPyBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkTWVzc2FnZUNoYW5nZWQsIG9sZC5tZXNzYWdlLCBfbmV3Lm1lc3NhZ2UpIDogZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFNvbWV0aGluZ0NoYW5nZWQoXG5cdFx0XHRBNihcblx0XHRcdFx0ZWxtJGNvcmUkRGljdCRtZXJnZSxcblx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaWdub3JlLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja1VuaW9uLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRpZ25vcmUsXG5cdFx0XHRcdG9sZC51bmlvbnMsXG5cdFx0XHRcdF9uZXcudW5pb25zLFxuXHRcdFx0XHRBNihlbG0kY29yZSREaWN0JG1lcmdlLCBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRpZ25vcmUsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrQWxpYXMsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlnbm9yZSwgb2xkLmFsaWFzZXMsIF9uZXcuYWxpYXNlcywgX0xpc3RfTmlsKSkpO1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVmVyc2lvbkNoYW5nZWQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdWZXJzaW9uQ2hhbmdlZCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVjayA9IEYyKFxuXHRmdW5jdGlvbiAob2xkLCBfbmV3KSB7XG5cdFx0cmV0dXJuICghX1V0aWxzX2VxKG9sZC52ZXJzaW9ucy5lbG0sIF9uZXcudmVyc2lvbnMuZWxtKSkgPyBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVmVyc2lvbkNoYW5nZWQsIG9sZC52ZXJzaW9ucy5lbG0sIF9uZXcudmVyc2lvbnMuZWxtKSA6IEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrVHlwZXMsIG9sZC50eXBlcywgX25ldy50eXBlcyk7XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUmlza3lJbXBvcnQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdSaXNreUltcG9ydCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHVwbG9hZERlY29kZXIgPSBBMyhcblx0ZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0RjIoXG5cdFx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKHgsIHkpO1xuXHRcdH0pLFxuXHRBMihlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCwgJ21ldGFkYXRhJywgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlciksXG5cdEEyKGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAnaGlzdG9yeScsIGVsbSRqc29uJEpzb24kRGVjb2RlJHZhbHVlKSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEZpbmUgPSB7JDogJ0ZpbmUnfTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkSW1wb3NzaWJsZSA9IHskOiAnSW1wb3NzaWJsZSd9O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRSaXNreSA9IHskOiAnUmlza3knfTtcbnZhciBlbG0kY29yZSRMaXN0JGlzRW1wdHkgPSBmdW5jdGlvbiAoeHMpIHtcblx0aWYgKCF4cy5iKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRzb21lID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0cmV0dXJuICFlbG0kY29yZSRMaXN0JGlzRW1wdHkobGlzdCk7XG59O1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRldmFsdWF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcblx0aWYgKGNoYW5nZS4kID09PSAnQWxpYXNDaGFuZ2UnKSB7XG5cdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlO1xuXHR9IGVsc2Uge1xuXHRcdHZhciByZW1vdmVkID0gY2hhbmdlLmIucmVtb3ZlZDtcblx0XHR2YXIgY2hhbmdlZCA9IGNoYW5nZS5iLmNoYW5nZWQ7XG5cdFx0dmFyIGFkZGVkID0gY2hhbmdlLmIuYWRkZWQ7XG5cdFx0dmFyIGFyZ3NNYXRjaCA9IGNoYW5nZS5iLmFyZ3NNYXRjaDtcblx0XHRyZXR1cm4gKCghYXJnc01hdGNoKSB8fCAoZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JHNvbWUoY2hhbmdlZCkgfHwgZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JHNvbWUocmVtb3ZlZCkpKSA/IGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlIDogKGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRzb21lKGFkZGVkKSA/IGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRSaXNreSA6IGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRGaW5lKTtcblx0fVxufTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkd29yc3RDYXNlID0gRjIoXG5cdGZ1bmN0aW9uIChzdGF0dXMsIHN0YXR1c0xpc3QpIHtcblx0XHR3b3JzdENhc2U6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmICghc3RhdHVzTGlzdC5iKSB7XG5cdFx0XHRcdHJldHVybiBzdGF0dXM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzd2l0Y2ggKHN0YXR1c0xpc3QuYS4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnSW1wb3NzaWJsZSc6XG5cdFx0XHRcdFx0XHR2YXIgX24xID0gc3RhdHVzTGlzdC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlO1xuXHRcdFx0XHRcdGNhc2UgJ1Jpc2t5Jzpcblx0XHRcdFx0XHRcdHZhciBfbjIgPSBzdGF0dXNMaXN0LmE7XG5cdFx0XHRcdFx0XHR2YXIgcmVzdCA9IHN0YXR1c0xpc3QuYjtcblx0XHRcdFx0XHRcdHZhciAkdGVtcCRzdGF0dXMgPSBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkUmlza3ksXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJHN0YXR1c0xpc3QgPSByZXN0O1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gJHRlbXAkc3RhdHVzO1xuXHRcdFx0XHRcdFx0c3RhdHVzTGlzdCA9ICR0ZW1wJHN0YXR1c0xpc3Q7XG5cdFx0XHRcdFx0XHRjb250aW51ZSB3b3JzdENhc2U7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHZhciBfbjMgPSBzdGF0dXNMaXN0LmE7XG5cdFx0XHRcdFx0XHR2YXIgcmVzdCA9IHN0YXR1c0xpc3QuYjtcblx0XHRcdFx0XHRcdHZhciAkdGVtcCRzdGF0dXMgPSBzdGF0dXMsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJHN0YXR1c0xpc3QgPSByZXN0O1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gJHRlbXAkc3RhdHVzO1xuXHRcdFx0XHRcdFx0c3RhdHVzTGlzdCA9ICR0ZW1wJHN0YXR1c0xpc3Q7XG5cdFx0XHRcdFx0XHRjb250aW51ZSB3b3JzdENhc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRldmFsdWF0ZSA9IGZ1bmN0aW9uIChyZXBvcnQpIHtcblx0c3dpdGNoIChyZXBvcnQuJCkge1xuXHRcdGNhc2UgJ0NvcnJ1cHRIaXN0b3J5Jzpcblx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkSW1wb3NzaWJsZTtcblx0XHRjYXNlICdWZXJzaW9uQ2hhbmdlZCc6XG5cdFx0XHRyZXR1cm4gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEltcG9zc2libGU7XG5cdFx0Y2FzZSAnTWVzc2FnZUNoYW5nZWQnOlxuXHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2YXIgY2hhbmdlcyA9IHJlcG9ydC5hO1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkd29yc3RDYXNlLFxuXHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkRmluZSxcblx0XHRcdFx0QTIoZWxtJGNvcmUkTGlzdCRtYXAsIGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRldmFsdWF0ZUNoYW5nZSwgY2hhbmdlcykpO1xuXHR9XG59O1xudmFyIGVsbSRqc29uJEpzb24kRGVjb2RlJGRlY29kZVN0cmluZyA9IF9Kc29uX3J1bk9uU3RyaW5nO1xudmFyIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYXNzZXNzSW1wb3J0ID0gRjIoXG5cdGZ1bmN0aW9uIChtZXRhZGF0YSwganNvblN0cmluZykge1xuXHRcdHZhciBfbjAgPSBBMihlbG0kanNvbiRKc29uJERlY29kZSRkZWNvZGVTdHJpbmcsIGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdXBsb2FkRGVjb2RlciwganNvblN0cmluZyk7XG5cdFx0aWYgKF9uMC4kID09PSAnRXJyJykge1xuXHRcdFx0cmV0dXJuIGVsbSRjb3JlJFJlc3VsdCRFcnIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRjb3JydXB0SW1wb3J0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9uMSA9IF9uMC5hO1xuXHRcdFx0dmFyIGZvcmVpZ25NZXRhZGF0YSA9IF9uMS5hO1xuXHRcdFx0dmFyIHJhd0hpc3RvcnkgPSBfbjEuYjtcblx0XHRcdHZhciByZXBvcnQgPSBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVjaywgZm9yZWlnbk1ldGFkYXRhLCBtZXRhZGF0YSk7XG5cdFx0XHR2YXIgX24yID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGV2YWx1YXRlKHJlcG9ydCk7XG5cdFx0XHRzd2l0Y2ggKF9uMi4kKSB7XG5cdFx0XHRcdGNhc2UgJ0ltcG9zc2libGUnOlxuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkRXJyKFxuXHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCYWRJbXBvcnQocmVwb3J0KSk7XG5cdFx0XHRcdGNhc2UgJ1Jpc2t5Jzpcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkUmVzdWx0JEVycihcblx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUmlza3lJbXBvcnQsIHJlcG9ydCwgcmF3SGlzdG9yeSkpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRSZXN1bHQkT2socmF3SGlzdG9yeSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNsb3NlID0gRjIoXG5cdGZ1bmN0aW9uIChtc2csIHN0YXRlKSB7XG5cdFx0c3dpdGNoIChzdGF0ZS4kKSB7XG5cdFx0XHRjYXNlICdOb25lJzpcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHRjYXNlICdCYWRNZXRhZGF0YSc6XG5cdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0Y2FzZSAnQmFkSW1wb3J0Jzpcblx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR2YXIgcmF3SGlzdG9yeSA9IHN0YXRlLmI7XG5cdFx0XHRcdGlmIChtc2cuJCA9PT0gJ0NhbmNlbCcpIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkSnVzdChyYXdIaXN0b3J5KTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwVXBkYXRlID0gRjMoXG5cdGZ1bmN0aW9uICh1cGRhdGUsIG1zZywgbW9kZWwpIHtcblx0XHR3cmFwVXBkYXRlOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRzd2l0Y2ggKG1zZy4kKSB7XG5cdFx0XHRcdGNhc2UgJ05vT3AnOlxuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdGNhc2UgJ1VzZXJNc2cnOlxuXHRcdFx0XHRcdHZhciB1c2VyTXNnID0gbXNnLmE7XG5cdFx0XHRcdFx0dmFyIHVzZXJNb2RlbCA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0TGF0ZXN0TW9kZWwobW9kZWwuc3RhdGUpO1xuXHRcdFx0XHRcdHZhciBuZXdIaXN0b3J5ID0gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGQsIHVzZXJNc2csIHVzZXJNb2RlbCwgbW9kZWwuaGlzdG9yeSk7XG5cdFx0XHRcdFx0dmFyIF9uMSA9IEEyKHVwZGF0ZSwgdXNlck1zZywgdXNlck1vZGVsKTtcblx0XHRcdFx0XHR2YXIgbmV3VXNlck1vZGVsID0gX24xLmE7XG5cdFx0XHRcdFx0dmFyIHVzZXJDbWRzID0gX24xLmI7XG5cdFx0XHRcdFx0dmFyIGNvbW1hbmRzID0gQTIoZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG1hcCwgZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnLCB1c2VyQ21kcyk7XG5cdFx0XHRcdFx0dmFyIF9uMiA9IG1vZGVsLnN0YXRlO1xuXHRcdFx0XHRcdGlmIChfbjIuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRleHBhbmRvOiBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlLCBuZXdVc2VyTW9kZWwsIG1vZGVsLmV4cGFuZG8pLFxuXHRcdFx0XHRcdFx0XHRcdFx0aGlzdG9yeTogbmV3SGlzdG9yeSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJ1bm5pbmcobmV3VXNlck1vZGVsKVxuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkYmF0Y2goXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21tYW5kcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRzY3JvbGwobW9kZWwucG9wb3V0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIGluZGV4ID0gX24yLmE7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXhNb2RlbCA9IF9uMi5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0aGlzdG9yeTogbmV3SGlzdG9yeSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFBhdXNlZCwgaW5kZXgsIGluZGV4TW9kZWwsIG5ld1VzZXJNb2RlbClcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0Y29tbWFuZHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnRXhwYW5kb01zZyc6XG5cdFx0XHRcdFx0dmFyIGVNc2cgPSBtc2cuYTtcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZXhwYW5kbzogQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUsIGVNc2csIG1vZGVsLmV4cGFuZG8pXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0ZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRjYXNlICdSZXN1bWUnOlxuXHRcdFx0XHRcdHZhciBfbjMgPSBtb2RlbC5zdGF0ZTtcblx0XHRcdFx0XHRpZiAoX24zLiQgPT09ICdSdW5uaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHVzZXJNb2RlbCA9IF9uMy5jO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXhwYW5kbzogQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZSwgdXNlck1vZGVsLCBtb2RlbC5leHBhbmRvKSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJ1bm5pbmcodXNlck1vZGVsKVxuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHNjcm9sbChtb2RlbC5wb3BvdXQpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ0p1bXAnOlxuXHRcdFx0XHRcdHZhciBpbmRleCA9IG1zZy5hO1xuXHRcdFx0XHRcdHZhciBfbjQgPSBBMyhlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldCwgdXBkYXRlLCBpbmRleCwgbW9kZWwuaGlzdG9yeSk7XG5cdFx0XHRcdFx0dmFyIGluZGV4TW9kZWwgPSBfbjQuYTtcblx0XHRcdFx0XHR2YXIgaW5kZXhNc2cgPSBfbjQuYjtcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZXhwYW5kbzogQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZSwgaW5kZXhNb2RlbCwgbW9kZWwuZXhwYW5kbyksXG5cdFx0XHRcdFx0XHRcdFx0c3RhdGU6IEEzKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRQYXVzZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4TW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldExhdGVzdE1vZGVsKG1vZGVsLnN0YXRlKSlcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdGNhc2UgJ09wZW4nOlxuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkVGFzayRwZXJmb3JtLFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoX241KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kTm9PcDtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0X0RlYnVnZ2VyX29wZW4obW9kZWwucG9wb3V0KSkpO1xuXHRcdFx0XHRjYXNlICdVcCc6XG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0dmFyIF9uNiA9IG1vZGVsLnN0YXRlO1xuXHRcdFx0XHRcdFx0aWYgKF9uNi4kID09PSAnUGF1c2VkJykge1xuXHRcdFx0XHRcdFx0XHR2YXIgaSA9IF9uNi5hO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHNpemUobW9kZWwuaGlzdG9yeSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSgpO1xuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApIHtcblx0XHRcdFx0XHRcdHZhciAkdGVtcCR1cGRhdGUgPSB1cGRhdGUsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJG1zZyA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kSnVtcChpbmRleCAtIDEpLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRtb2RlbCA9IG1vZGVsO1xuXHRcdFx0XHRcdFx0dXBkYXRlID0gJHRlbXAkdXBkYXRlO1xuXHRcdFx0XHRcdFx0bXNnID0gJHRlbXAkbXNnO1xuXHRcdFx0XHRcdFx0bW9kZWwgPSAkdGVtcCRtb2RlbDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlIHdyYXBVcGRhdGU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdEb3duJzpcblx0XHRcdFx0XHR2YXIgX243ID0gbW9kZWwuc3RhdGU7XG5cdFx0XHRcdFx0aWYgKF9uNy4kID09PSAnUnVubmluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCBlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBpbmRleCA9IF9uNy5hO1xuXHRcdFx0XHRcdFx0dmFyIHVzZXJNb2RlbCA9IF9uNy5jO1xuXHRcdFx0XHRcdFx0aWYgKF9VdGlsc19lcShcblx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc2l6ZShtb2RlbC5oaXN0b3J5KSAtIDEpKSB7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCR1cGRhdGUgPSB1cGRhdGUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbXNnID0gZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSZXN1bWUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbW9kZWwgPSBtb2RlbDtcblx0XHRcdFx0XHRcdFx0dXBkYXRlID0gJHRlbXAkdXBkYXRlO1xuXHRcdFx0XHRcdFx0XHRtc2cgPSAkdGVtcCRtc2c7XG5cdFx0XHRcdFx0XHRcdG1vZGVsID0gJHRlbXAkbW9kZWw7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIHdyYXBVcGRhdGU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkdXBkYXRlID0gdXBkYXRlLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG1zZyA9IGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kSnVtcChpbmRleCArIDEpLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG1vZGVsID0gbW9kZWw7XG5cdFx0XHRcdFx0XHRcdHVwZGF0ZSA9ICR0ZW1wJHVwZGF0ZTtcblx0XHRcdFx0XHRcdFx0bXNnID0gJHRlbXAkbXNnO1xuXHRcdFx0XHRcdFx0XHRtb2RlbCA9ICR0ZW1wJG1vZGVsO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZSB3cmFwVXBkYXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnSW1wb3J0Jzpcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdpdGhHb29kTWV0YWRhdGEsXG5cdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfbjgpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdXBsb2FkKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRjYXNlICdFeHBvcnQnOlxuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd2l0aEdvb2RNZXRhZGF0YSxcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZG93bmxvYWQsIG1ldGFkYXRhLCBtb2RlbC5oaXN0b3J5KSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0Y2FzZSAnVXBsb2FkJzpcblx0XHRcdFx0XHR2YXIganNvblN0cmluZyA9IG1zZy5hO1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd2l0aEdvb2RNZXRhZGF0YSxcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfbjkgPSBBMihlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGFzc2Vzc0ltcG9ydCwgbWV0YWRhdGEsIGpzb25TdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRpZiAoX245LiQgPT09ICdFcnInKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG5ld092ZXJsYXkgPSBfbjkuYTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7b3ZlcmxheTogbmV3T3ZlcmxheX0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByYXdIaXN0b3J5ID0gX245LmE7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEzKGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kbG9hZE5ld0hpc3RvcnksIHJhd0hpc3RvcnksIHVwZGF0ZSwgbW9kZWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR2YXIgb3ZlcmxheU1zZyA9IG1zZy5hO1xuXHRcdFx0XHRcdHZhciBfbjEwID0gQTIoZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRjbG9zZSwgb3ZlcmxheU1zZywgbW9kZWwub3ZlcmxheSk7XG5cdFx0XHRcdFx0aWYgKF9uMTAuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0XHR7b3ZlcmxheTogZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRub25lfSksXG5cdFx0XHRcdFx0XHRcdGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHJhd0hpc3RvcnkgPSBfbjEwLmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTMoZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRsb2FkTmV3SGlzdG9yeSwgcmF3SGlzdG9yeSwgdXBkYXRlLCBtb2RlbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJGNvcmUkU2V0JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBpbml0aWFsU3RhdGUsIF9uMCkge1xuXHRcdHZhciBkaWN0ID0gX24wLmE7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0ZWxtJGNvcmUkRGljdCRmb2xkcixcblx0XHRcdEYzKFxuXHRcdFx0XHRmdW5jdGlvbiAoa2V5LCBfbjEsIHN0YXRlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKGZ1bmMsIGtleSwgc3RhdGUpO1xuXHRcdFx0XHR9KSxcblx0XHRcdGluaXRpYWxTdGF0ZSxcblx0XHRcdGRpY3QpO1xuXHR9KTtcbnZhciBlbG0kY29yZSRTdHJpbmckZHJvcExlZnQgPSBGMihcblx0ZnVuY3Rpb24gKG4sIHN0cmluZykge1xuXHRcdHJldHVybiAobiA8IDEpID8gc3RyaW5nIDogQTMoXG5cdFx0XHRlbG0kY29yZSRTdHJpbmckc2xpY2UsXG5cdFx0XHRuLFxuXHRcdFx0ZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHJpbmcpLFxuXHRcdFx0c3RyaW5nKTtcblx0fSk7XG52YXIgZWxtJGNvcmUkU3RyaW5nJHN0YXJ0c1dpdGggPSBfU3RyaW5nX3N0YXJ0c1dpdGg7XG52YXIgZWxtJHVybCRVcmwkSHR0cCA9IHskOiAnSHR0cCd9O1xudmFyIGVsbSR1cmwkVXJsJEh0dHBzID0geyQ6ICdIdHRwcyd9O1xudmFyIGVsbSRjb3JlJFN0cmluZyRpbmRleGVzID0gX1N0cmluZ19pbmRleGVzO1xudmFyIGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5ID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRyZXR1cm4gc3RyaW5nID09PSAnJztcbn07XG52YXIgZWxtJGNvcmUkU3RyaW5nJHRvSW50ID0gX1N0cmluZ190b0ludDtcbnZhciBlbG0kdXJsJFVybCRVcmwgPSBGNihcblx0ZnVuY3Rpb24gKHByb3RvY29sLCBob3N0LCBwb3J0XywgcGF0aCwgcXVlcnksIGZyYWdtZW50KSB7XG5cdFx0cmV0dXJuIHtmcmFnbWVudDogZnJhZ21lbnQsIGhvc3Q6IGhvc3QsIHBhdGg6IHBhdGgsIHBvcnRfOiBwb3J0XywgcHJvdG9jb2w6IHByb3RvY29sLCBxdWVyeTogcXVlcnl9O1xuXHR9KTtcbnZhciBlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVBhdGggPSBGNShcblx0ZnVuY3Rpb24gKHByb3RvY29sLCBwYXRoLCBwYXJhbXMsIGZyYWcsIHN0cikge1xuXHRcdGlmIChlbG0kY29yZSRTdHJpbmckaXNFbXB0eShzdHIpIHx8IEEyKGVsbSRjb3JlJFN0cmluZyRjb250YWlucywgJ0AnLCBzdHIpKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9uMCA9IEEyKGVsbSRjb3JlJFN0cmluZyRpbmRleGVzLCAnOicsIHN0cik7XG5cdFx0XHRpZiAoIV9uMC5iKSB7XG5cdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdEE2KGVsbSR1cmwkVXJsJFVybCwgcHJvdG9jb2wsIHN0ciwgZWxtJGNvcmUkTWF5YmUkTm90aGluZywgcGF0aCwgcGFyYW1zLCBmcmFnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIV9uMC5iLmIpIHtcblx0XHRcdFx0XHR2YXIgaSA9IF9uMC5hO1xuXHRcdFx0XHRcdHZhciBfbjEgPSBlbG0kY29yZSRTdHJpbmckdG9JbnQoXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGkgKyAxLCBzdHIpKTtcblx0XHRcdFx0XHRpZiAoX24xLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBwb3J0XyA9IF9uMTtcblx0XHRcdFx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdFx0XHRBNihcblx0XHRcdFx0XHRcdFx0XHRlbG0kdXJsJFVybCRVcmwsXG5cdFx0XHRcdFx0XHRcdFx0cHJvdG9jb2wsXG5cdFx0XHRcdFx0XHRcdFx0QTIoZWxtJGNvcmUkU3RyaW5nJGxlZnQsIGksIHN0ciksXG5cdFx0XHRcdFx0XHRcdFx0cG9ydF8sXG5cdFx0XHRcdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHRcdFx0XHRwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0ZnJhZykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVRdWVyeSA9IEY0KFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIHBhcmFtcywgZnJhZywgc3RyKSB7XG5cdFx0aWYgKGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5KHN0cikpIHtcblx0XHRcdHJldHVybiBlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX24wID0gQTIoZWxtJGNvcmUkU3RyaW5nJGluZGV4ZXMsICcvJywgc3RyKTtcblx0XHRcdGlmICghX24wLmIpIHtcblx0XHRcdFx0cmV0dXJuIEE1KGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUGF0aCwgcHJvdG9jb2wsICcvJywgcGFyYW1zLCBmcmFnLCBzdHIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGkgPSBfbjAuYTtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUGF0aCxcblx0XHRcdFx0XHRwcm90b2NvbCxcblx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGksIHN0ciksXG5cdFx0XHRcdFx0cGFyYW1zLFxuXHRcdFx0XHRcdGZyYWcsXG5cdFx0XHRcdFx0QTIoZWxtJGNvcmUkU3RyaW5nJGxlZnQsIGksIHN0cikpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVGcmFnbWVudCA9IEYzKFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIGZyYWcsIHN0cikge1xuXHRcdGlmIChlbG0kY29yZSRTdHJpbmckaXNFbXB0eShzdHIpKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9uMCA9IEEyKGVsbSRjb3JlJFN0cmluZyRpbmRleGVzLCAnPycsIHN0cik7XG5cdFx0XHRpZiAoIV9uMC5iKSB7XG5cdFx0XHRcdHJldHVybiBBNChlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVF1ZXJ5LCBwcm90b2NvbCwgZWxtJGNvcmUkTWF5YmUkTm90aGluZywgZnJhZywgc3RyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpID0gX24wLmE7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVF1ZXJ5LFxuXHRcdFx0XHRcdHByb3RvY29sLFxuXHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGkgKyAxLCBzdHIpKSxcblx0XHRcdFx0XHRmcmFnLFxuXHRcdFx0XHRcdEEyKGVsbSRjb3JlJFN0cmluZyRsZWZ0LCBpLCBzdHIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIGVsbSR1cmwkVXJsJGNob21wQWZ0ZXJQcm90b2NvbCA9IEYyKFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIHN0cikge1xuXHRcdGlmIChlbG0kY29yZSRTdHJpbmckaXNFbXB0eShzdHIpKSB7XG5cdFx0XHRyZXR1cm4gZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9uMCA9IEEyKGVsbSRjb3JlJFN0cmluZyRpbmRleGVzLCAnIycsIHN0cik7XG5cdFx0XHRpZiAoIV9uMC5iKSB7XG5cdFx0XHRcdHJldHVybiBBMyhlbG0kdXJsJFVybCRjaG9tcEJlZm9yZUZyYWdtZW50LCBwcm90b2NvbCwgZWxtJGNvcmUkTWF5YmUkTm90aGluZywgc3RyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpID0gX24wLmE7XG5cdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHRlbG0kdXJsJFVybCRjaG9tcEJlZm9yZUZyYWdtZW50LFxuXHRcdFx0XHRcdHByb3RvY29sLFxuXHRcdFx0XHRcdGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGkgKyAxLCBzdHIpKSxcblx0XHRcdFx0XHRBMihlbG0kY29yZSRTdHJpbmckbGVmdCwgaSwgc3RyKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBlbG0kdXJsJFVybCRmcm9tU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gQTIoZWxtJGNvcmUkU3RyaW5nJHN0YXJ0c1dpdGgsICdodHRwOi8vJywgc3RyKSA/IEEyKFxuXHRcdGVsbSR1cmwkVXJsJGNob21wQWZ0ZXJQcm90b2NvbCxcblx0XHRlbG0kdXJsJFVybCRIdHRwLFxuXHRcdEEyKGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCwgNywgc3RyKSkgOiAoQTIoZWxtJGNvcmUkU3RyaW5nJHN0YXJ0c1dpdGgsICdodHRwczovLycsIHN0cikgPyBBMihcblx0XHRlbG0kdXJsJFVybCRjaG9tcEFmdGVyUHJvdG9jb2wsXG5cdFx0ZWxtJHVybCRVcmwkSHR0cHMsXG5cdFx0QTIoZWxtJGNvcmUkU3RyaW5nJGRyb3BMZWZ0LCA4LCBzdHIpKSA6IGVsbSRjb3JlJE1heWJlJE5vdGhpbmcpO1xufTtcbnZhciBlbG0kYnJvd3NlciRCcm93c2VyJGVsZW1lbnQgPSBfQnJvd3Nlcl9lbGVtZW50O1xudmFyIGF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSRtYWluID0gZWxtJGJyb3dzZXIkQnJvd3NlciRlbGVtZW50KFxuXHR7aW5pdDogYXV0aG9yJHByb2plY3QkSW5kZXhQYWdlJGluaXQsIHN1YnNjcmlwdGlvbnM6IGF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSRzdWJzY3JpcHRpb25zLCB1cGRhdGU6IGF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSR1cGRhdGUsIHZpZXc6IGF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSR2aWV3fSk7XG5fUGxhdGZvcm1fZXhwb3J0KHsnSW5kZXhQYWdlJzp7J2luaXQnOmF1dGhvciRwcm9qZWN0JEluZGV4UGFnZSRtYWluKGVsbSRqc29uJEpzb24kRGVjb2RlJHZhbHVlKSh7XCJ2ZXJzaW9uc1wiOntcImVsbVwiOlwiMC4xOS4wXCJ9LFwidHlwZXNcIjp7XCJtZXNzYWdlXCI6XCJJbmRleFBhZ2UuTXNnXCIsXCJhbGlhc2VzXCI6e1wiVGhlUHJvY2Vzcy5Qcm9jZXNzRGF0YVwiOntcImFyZ3NcIjpbXSxcInR5cGVcIjpcInsgaWQgOiBJZC5JZCwgdGl0bGUgOiBTdHJpbmcuU3RyaW5nLCBkZXNjcmlwdGlvbiA6IFN0cmluZy5TdHJpbmcsIGNvbXBsZXRpb25zIDogQmFzaWNzLkludCwgY3JlYXRlZEF0IDogVGltZS5Qb3NpeCwgbGFzdEFjdGl2aXR5IDogVGltZS5Qb3NpeCB9XCJ9fSxcInVuaW9uc1wiOntcIkluZGV4UGFnZS5Nc2dcIjp7XCJhcmdzXCI6W10sXCJ0YWdzXCI6e1wiVXNlckNsaWNrZWRDcmVhdGVQcm9jZXNzXCI6W10sXCJVc2VyVXBkYXRlZFRpdGxlRmllbGRcIjpbXCJTdHJpbmcuU3RyaW5nXCJdLFwiVXNlclVwZGF0ZWREZXNjcmlwdGlvbkZpZWxkXCI6W1wiU3RyaW5nLlN0cmluZ1wiXSxcIlVzZXJTYXZlZE5ld1Byb2Nlc3NcIjpbXCJUaGVQcm9jZXNzLlByb2Nlc3NEYXRhXCJdLFwiU2VydmVyUmV0dXJuZWRTYXZlUmVzcG9uc2VcIjpbXX19LFwiSWQuSWRcIjp7XCJhcmdzXCI6W10sXCJ0YWdzXCI6e1wiSWRcIjpbXCJTdHJpbmcuU3RyaW5nXCJdfX0sXCJCYXNpY3MuSW50XCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIkludFwiOltdfX0sXCJTdHJpbmcuU3RyaW5nXCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIlN0cmluZ1wiOltdfX0sXCJUaW1lLlBvc2l4XCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIlBvc2l4XCI6W1wiQmFzaWNzLkludFwiXX19fX19KX19KTt9KHRoaXMpKTsiLCIvKiBnbG9iYWwgY29udGV4dCAqL1xuaW1wb3J0ICcuLi9jc3MvY29tbW9uLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9wcm9jZXNzLWluZGV4LmNzcyc7XG5pbXBvcnQgeyBFbG0gfSBmcm9tICcuLi9lbG0vSW5kZXhQYWdlLmVsbSc7XG5cbkVsbS5JbmRleFBhZ2UuaW5pdCh7XG4gIG5vZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbG0nKSxcbiAgZmxhZ3M6IGNvbnRleHQsXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=