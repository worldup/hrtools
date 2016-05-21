!function (window) {
    var names, i;
    if (!window.console)for (names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"], window.console = {}, i = 0; i < names.length; i++)window.console[names[i]] = function () {
    }
}(window), Array.isArray || (Array.isArray = function (vArg) {
    return "[object Array]" === Object.prototype.toString.call(vArg)
}), Array.prototype.indexOf || (Array.prototype.indexOf = function (match, fromIndex) {
    var len = this.length;
    for (fromIndex |= 0, 0 > fromIndex && (fromIndex = Math.max(0, len + fromIndex)); len > fromIndex; fromIndex++)if (fromIndex in this && this[fromIndex] === match)return fromIndex;
    return -1
}), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (match, fromIndex) {
    var len = this.length >>> 0;
    for (fromIndex |= 0, (!fromIndex || fromIndex >= len) && (fromIndex = len - 1), 0 > fromIndex && (fromIndex += len); fromIndex >= 0; fromIndex--)if (fromIndex in this && this[fromIndex] === match)return fromIndex;
    return -1
}), Array.prototype.every || (Array.prototype.every = function (fun, thisp) {
    var t, len, i;
    if ("function" != typeof fun)throw new TypeError;
    for (t = new Object(this), len = t.length >>> 0, i = 0; len > i; i++)if (i in t && !fun.call(thisp, t[i], i, t))return !1;
    return !0
}), Array.prototype.filter || (Array.prototype.filter = function (fun, thisp) {
    var t, len, res, i, val;
    if ("function" != typeof fun)throw new TypeError;
    for (t = new Object(this), len = t.length >>> 0, res = [], i = 0; len > i; i++)i in t && (val = t[i], fun.call(thisp, val, i, t) && res.push(val));
    return res
}), Array.prototype.map || (Array.prototype.map = function (fun, thisp) {
    var len, res, i;
    if ("function" != typeof fun)throw new TypeError;
    for (len = this.length >>> 0, res = new Array(len), i = 0; len > i; i++)i in this && (res[i] = fun.call(thisp, this[i], i, this));
    return res
}), Array.prototype.forEach || (Array.prototype.forEach = function (fun, thisp) {
    this.map(fun, thisp)
}), Array.prototype.some || (Array.prototype.some = function (fun, thisp) {
    var t, len, i;
    if ("function" != typeof fun)throw new TypeError;
    for (t = new Object(this), len = t.length >>> 0, i = 0; len > i; i++)if (i in t && fun.call(thisp, t[i], i, t))return !0;
    return !1
}), Array.prototype.reduce || (Array.prototype.reduce = function reduce(accumulator) {
    if (null === this || void 0 === this)throw new TypeError("Object is null or undefined");
    var i = 0, l = this.length >> 0, curr;
    if ("function" != typeof accumulator)throw new TypeError("First argument is not callable");
    if (arguments.length < 2) {
        if (0 === l)throw new TypeError("Array length is 0 and no second argument");
        curr = this[0], i = 1
    } else curr = arguments[1];
    for (; l > i;)i in this && (curr = accumulator.call(void 0, curr, this[i], i, this)), ++i;
    return curr
}), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (callbackfn, initialValue) {
    var t, len, k, accumulator;
    if (null == this)throw new TypeError;
    if (t = Object(this), len = t.length >>> 0, "function" != typeof callbackfn)throw new TypeError;
    if (0 === len && 1 === arguments.length)throw new TypeError;
    if (k = len - 1, arguments.length >= 2)accumulator = arguments[1]; else for (; ;) {
        if (k in this) {
            accumulator = this[k--];
            break
        }
        if (--k < 0)throw new TypeError
    }
    for (; k >= 0;)k in t && (accumulator = callbackfn.call(void 0, accumulator, t[k], k, t)), k--;
    return accumulator
}), Object.keys || (Object.keys = function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !{toString: null}.propertyIsEnumerable("toString"), dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], dontEnumsLength = dontEnums.length;
    return function (obj) {
        var result, prop, i;
        if ("object" != typeof obj && "function" != typeof obj || null === obj)throw new TypeError("Object.keys called on non-object");
        result = [];
        for (prop in obj)hasOwnProperty.call(obj, prop) && result.push(prop);
        if (hasDontEnumBug)for (i = 0; dontEnumsLength > i; i++)hasOwnProperty.call(obj, dontEnums[i]) && result.push(dontEnums[i]);
        return result
    }
}()), Date.prototype.addYears || (Date.prototype.addYears = function (num) {
    return this.setFullYear(this.getFullYear() + num), this
}), Date.prototype.addMonths || (Date.prototype.addMonths = function (num) {
    var tmpdtm = this.getDate();
    return this.setMonth(this.getMonth() + num), tmpdtm > this.getDate() && this.addDays(-this.getDate()), this
}), Date.prototype.addDays || (Date.prototype.addDays = function (num) {
    return this.setTime(this.getTime() + 864e5 * num), this
}), Date.prototype.addHours || (Date.prototype.addHours = function (num) {
    return this.setHours(this.getHours() + num), this
}), Date.prototype.addMinutes || (Date.prototype.addMinutes = function (num) {
    return this.setMinutes(this.getMinutes() + num), this
}), Date.prototype.addSeconds || (Date.prototype.addSeconds = function (num) {
    return this.setSeconds(this.getSeconds() + num), this
}), Date.prototype.format || (Date.prototype.format = function (pattern) {
    function replacer(patternPart, result) {
        pattern = pattern.replace(patternPart, result)
    }

    pattern = pattern || "yyyy-MM-dd HH:mm:ss";
    var _zeroPad = function (source, length) {
        var pre = "", negative = 0 > source, string = String(Math.abs(source));
        return string.length < length && (pre = new Array(length - string.length + 1).join("0")), (negative ? "-" : "") + pre + string
    }, year = this.getFullYear(), month = this.getMonth() + 1, date2 = this.getDate(), hours = this.getHours(), minutes = this.getMinutes(), seconds = this.getSeconds();
    return replacer(/yyyy/g, _zeroPad(year, 4)), replacer(/yy/g, _zeroPad(parseInt(year.toString().slice(2), 10), 2)), replacer(/MM/g, _zeroPad(month, 2)), replacer(/M/g, month), replacer(/dd/g, _zeroPad(date2, 2)), replacer(/d/g, date2), replacer(/HH/g, _zeroPad(hours, 2)), replacer(/H/g, hours), replacer(/hh/g, _zeroPad(hours % 12, 2)), replacer(/h/g, hours % 12), replacer(/mm/g, _zeroPad(minutes, 2)), replacer(/m/g, minutes), replacer(/ss/g, _zeroPad(seconds, 2)), replacer(/s/g, seconds), pattern
}), String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
}), String.prototype.trimLeft || (String.prototype.trimLeft = function () {
    return this.replace(/^\s+/g, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function () {
    return this.replace(/\s+$/g, "")
}), window.JSON || function () {
    function f(n) {
        return 10 > n ? "0" + n : n
    }

    function quote(string) {
        return escapable.lastIndex = 0, escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return "string" == typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        switch (value && "object" == typeof value && "function" == typeof value.toJSON && (value = value.toJSON(key)), "function" == typeof rep && (value = rep.call(holder, key, value)), typeof value) {
            case"string":
                return quote(value);
            case"number":
                return isFinite(value) ? String(value) : "null";
            case"boolean":
            case"null":
                return String(value);
            case"object":
                if (!value)return "null";
                if (gap += indent, partial = [], "[object Array]" === Object.prototype.toString.apply(value)) {
                    for (length = value.length, i = 0; length > i; i += 1)partial[i] = str(i, value) || "null";
                    return v = 0 === partial.length ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]", gap = mind, v
                }
                if (rep && "object" == typeof rep)for (length = rep.length, i = 0; length > i; i += 1)"string" == typeof rep[i] && (k = rep[i], v = str(k, value), v && partial.push(quote(k) + (gap ? ": " : ":") + v)); else for (k in value)Object.prototype.hasOwnProperty.call(value, k) && (v = str(k, value), v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                return v = 0 === partial.length ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}", gap = mind, v
        }
    }

    window.JSON = {}, "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (key) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function (value, replacer, space) {
        var i;
        if (gap = "", indent = "", "number" == typeof space)for (i = 0; space > i; i += 1)indent += " "; else"string" == typeof space && (indent = space);
        if (rep = replacer, replacer && "function" != typeof replacer && ("object" != typeof replacer || "number" != typeof replacer.length))throw new Error("JSON.stringify");
        return str("", {"": value})
    }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
        function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && "object" == typeof value)for (k in value)Object.prototype.hasOwnProperty.call(value, k) && (v = walk(value, k), void 0 !== v ? value[k] = v : delete value[k]);
            return reviver.call(holder, key, value)
        }

        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), !window.TemplateEngine && function () {
    window.TemplateEngine = {
        guid: function () {
            return "TEGUID__" + (this.guid._counter++).toString(36)
        },
        space: {},
        cache: {},
        isUndefined: function (object) {
            return "undefined" == typeof object
        },
        isFunction: function (object) {
            return "function" == typeof object
        },
        trim: function (str) {
            return str.replace(/^\s+|\s+$/g, "")
        },
        ie6: window.VBArray && !window.XMLHttpRequest,
        v8: !!"".trim,
        push: "".trim ? "+=" : ".push",
        split: function (str, separator, limit) {
            if ("[object RegExp]" !== Object.prototype.toString.call(separator))return str.split(separator, limit);
            var output = [], lastLastIndex = 0, flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.sticky ? "y" : ""), separator = RegExp(separator.source, flags + "g"), _compliantExecNpcg = void 0 === /()??/.exec("")[1], separator2, match, lastIndex, lastLength;
            if (str += "", _compliantExecNpcg || (separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags)), void 0 === limit || 0 > +limit)limit = 1 / 0; else if (limit = Math.floor(+limit), !limit)return [];
            for (; (match = separator.exec(str)) && (lastIndex = match.index + match[0].length, !(lastIndex > lastLastIndex && (output.push(str.slice(lastLastIndex, match.index)), !_compliantExecNpcg && match.length > 1 && match[0].replace(separator2, function () {
                for (var i = 1; i < arguments.length - 2; i++)void 0 === arguments[i] && (match[i] = void 0)
            }), match.length > 1 && match.index < str.length && Array.prototype.push.apply(output, match.slice(1)), lastLength = match[0].length, lastLastIndex = lastIndex, output.length >= limit)));)separator.lastIndex === match.index && separator.lastIndex++;
            return lastLastIndex === str.length ? (lastLength || !separator.test("")) && output.push("") : output.push(str.slice(lastLastIndex)), output.length > limit ? output.slice(0, limit) : output
        },
        get: function (tplpath, tplroot, callback) {
            var url, that = this, version = !that.isUndefined(window.Version) && Version.c ? Version.c : "";
            return that.isFunction(tplroot) && (callback = tplroot, tplroot = ""), "" == tplroot ? tplroot += "/" : (-1 === tplroot.indexOf("http") && (tplroot = "http://" + tplroot), tplroot.lastIndexOf("/") !== tplroot.length - 1 && (tplroot += "/")), tplpath = tplpath.trim(), tplpath = tplpath.replace(/(https?:\/\/[^\/]+)?(\/r\/\d+)?(.*)/, function ($0, $1, $2, $3) {
                return $2 ? $2 + $3 : "tpl/" + $3.replace(/^\/tpl\/(a|article|ats|c|clt|company|h|job|lpt|www|xy)\/tpl\/|^\/?(article|ats|b|c|clt|erp|h|p|xy)\/|^\//, "")
            }), 0 === tplpath.indexOf("/") && (tplpath = tplpath.substring(1)), url = tplroot + tplpath, version && (url += "?" + version), that.cache[url] ? callback && callback.call(that, that.cache[url]) : LT.ajax({
                url: url,
                type: "GET",
                dataType: "html",
                cache: !0,
                success: function (data) {
                    that.cache[url] = data, callback && callback.call(that, data)
                }
            }), this
        },
        format: function (template, object, paramarray, list, guid) {
            var tplist, tplExp, tplTemp, css, jsExp, jsTemp, cssExp, cssTemp, style, _html, i, that = this;
            if ("string" != typeof template)return template;
            for (object = object || {}, list = list || {}, guid = guid || that.guid(), tplist = {}, tplExp = /<template(.*name=['"]([^'"]+)*)?\b[^>]*>([^<]*(?:(?!<\/template>)<[^<]*)*)<\/template>/gim; tplTemp = tplExp.exec(template);)tplTemp[2] && (tplist[tplTemp[2]] = tplTemp[3]);
            if (tplist.main)return that.format(tplist.main, object, paramarray, tplist, guid);
            for (css = js = html = "", jsExp = /<script\b[^>]*>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/gim, cssExp = /<style\b[^>]*>([^<]*(?:(?!<\/style>)<[^<]*)*)<\/style>/gim; jsTemp = jsExp.exec(template);)js += "\r\n" + jsTemp[1];
            for (; cssTemp = cssExp.exec(template);)css += "\r\n" + cssTemp[1];
            for (html = template.replace(cssExp, "").replace(jsExp, ""), js = that.trim(js), css = that.trim(css), html = that.trim(html), js && (that.space[guid] = {
                data: object,
                params: paramarray,
                template: {
                    guid: guid, list: list, format: function (_tpl, _obj, _paramarray) {
                        return that.format(_tpl, _obj, _paramarray, list, guid)
                    }
                }
            }, js = js.replace(/\$ROOT/gi, '$("#"+ $TEMPLATE.guid)').replace(/@import\(([^\)]*)\)/gi, "$TEMPLATE.list[$1]").replace(/@format\(/gi, "$TEMPLATE.format("), js = '<script type="text/javascript">(function($DATA,$PARAMS,$TEMPLATE){' + js + '\r\n})(window.TemplateEngine.space["' + guid + '"].data,window.TemplateEngine.space["' + guid + '"].params,window.TemplateEngine.space["' + guid + '"].template);delete window.TemplateEngine.space["' + guid + '"];</script>'), css && (css = css.replace(/\/\*(.|\n)*?\*\//gi, "").replace(/\r?\n/gi, "").replace(/([a-zA-Z0-9_\-#*\.:\s,\(\)'"<>=]*)(\{)/gi, function (a, b, c) {
                var _b, i;
                if (b = that.trim(b), "" === b)return "\r\n#" + guid + c;
                for (_b = b.split(","), i = 0; i < _b.length; i++)_b[i] = that.trim(_b[i]), _b[i] = "\r\n#" + guid + (0 === _b[i].indexOf(":") ? "" : " ") + _b[i];
                return _b.join(",") + c
            }), that.ie6 ? (style = document.getElementById("templateengine_css"), style || (style = document.createElement("style"), style.setAttribute("type", "text/css"), style.setAttribute("id", "templateengine_css"), document.getElementsByTagName("head")[0].appendChild(style)), style.styleSheet ? style.styleSheet.cssText += css : style.appendChild(document.createTextNode(css)), css = "") : css = '<style type="text/css">' + css + "\r\n</style>"), html = html.replace(/\$ROOT/gim, guid), _html = that.split(html, /(<\?[\s\S]*?\?>)/gim), i = 0; i < _html.length; i++)_html[i] && (new RegExp("<\\?[\\s\\S]*?\\?>", "igm").test(_html[i]) ? (_html[i] = _html[i].replace(/<\?([\s\S]*?)\?>/gim, "$1"), _html[i] = _html[i].replace(/@([a-zA-Z\$_]+)/gim, "$DATA.$1"), _html[i] = _html[i].replace(/print\((.*?)\);/gim, "_" + that.push + '(($1)||"");\n'), 0 === _html[i].indexOf("=") && (_html[i] = "_" + that.push + "((" + _html[i].substring(1) + ')==null?"":(' + _html[i].substring(1) + "));\n")) : _html[i] = "_" + that.push + '("' + _html[i].replace(/\"/g, '\\"').replace(/\r\n/g, "\\r\\n").replace(/\n/g, "\\n") + '");\n');
            _html.unshift(that.v8 ? 'var _="";' : "var _=[];"), that.v8 || _html.push('_=_.join("");'), _html.push("return _;"), html = _html.join("");
            try {
                html = new Function("$DATA", "$PARAMS", "$TEMPLATE", html)(object, paramarray, list)
            } catch (e) {
                throw"undefined" != typeof console && console.error("Template format error: " + html), e
            }
            return css + html + js
        }
    }, window.TemplateEngine.guid._counter = 1
}(), function (window, document, undefined) {
    var moduleName = "NodeTpl", ie6 = window.VBArray && !window.XMLHttpRequest;
    window[moduleName] = {
        _data: {}, _tpls: {}, guid: function () {
            return "NTGUID__" + (this.guid._counter++).toString(36)
        }, dguid: function () {
            return "NDTGUID__" + (this.dguid._counter++).toString(36)
        }, rguid: function () {
            return "NRTGUID__" + (this.rguid._counter++).toString(36)
        }, _load: function (url, callback) {
            var that = this, _script = document.createElement("script");
            return _script.type = "text/javascript", "undefined" != typeof FileManager && FileManager.prefix && (url = FileManager.prefix(url)), _script.readyState ? (_script.onreadystatechange = function () {
                ie6 && !this.getAttribute("initialized") && (document.getElementsByTagName("head")[0].appendChild(_script), this.setAttribute("initialized", !0)), ("loaded" == this.readyState || "complete" == this.readyState) && (this.onreadystatechange = null, callback && callback.call(that))
            }, _script.src = url, !ie6 && document.getElementsByTagName("head")[0].appendChild(_script)) : (_script.src = url, _script.onload = function () {
                callback && callback.call(that)
            }, document.getElementsByTagName("head")[0].appendChild(_script)), this
        }, _fixcss: function (css) {
            var style = document.getElementById("nodetpl_css");
            style || (style = document.createElement("style"), style.setAttribute("type", "text/css"), style.setAttribute("id", "nodetpl_css"), document.getElementsByTagName("head")[0].appendChild(style)), style.styleSheet ? style.styleSheet.cssText += css : style.appendChild(document.createTextNode(css))
        }, _getCurrentScript: function () {
            var head, nodes, stack, i, node, doc = document;
            if (doc.currentScript)return doc.currentScript.src;
            try {
                a.b.c()
            } catch (e) {
                stack = e.stack, !stack && window.opera && (stack = (String(e).match(/of linked script \S+/g) || []).join(" "))
            }
            if (stack)return stack = stack.replace(/(at Global code \([^\)]+\))[\s\S]*/i, "$1"), stack = stack.split(/[@ ]/g).pop(), stack = "(" == stack[0] ? stack.slice(1, -1) : stack, stack.replace(/(:\d+)?:\d+$/i, "");
            for (head = doc.head || doc.getElementsByTagName("head")[0], nodes = head.getElementsByTagName("script"), i = 0; node = nodes[i++];)if ("interactive" === node.readyState)return node.className = node.src
        }, get: function (path, data, callback) {
            var that = this, namespace, cache, sroot = "//concat.lietou-static.com/pics/pc/", protocalReg = /^(?:https?:)?\/\//;
            return path = path.trim(), protocalReg.test(path) || (path = 0 === path.indexOf("/") ? sroot + path.substring(1) : sroot + "tpls/" + path), 0 === path.indexOf("//concat") && (path = location.protocol + path), /\.js$/.test(path) || (path += ".js"), (namespace = (/^(?:https?:)?\/\/[^\/]+(\/r\/\d+)?(\/tpls)?(.*)/g.exec(path) || [0, 0, 0, ""])[3]) ? (cache = that._tpls, "function" == typeof data && (callback = data, data = {}), "object" == typeof(cache[path] || cache[namespace]) && "function" == typeof(cache[path] || cache[namespace]).main ? "function" == typeof callback && (data === !1 ? callback.call(that, {
                render: function (_data) {
                    return (cache[path] || cache[namespace]).main(_data || {})
                }
            }) : callback.call(that, (cache[path] || cache[namespace]).main(data))) : this._load(path, function () {
                "function" == typeof callback && "object" == typeof(cache[path] || cache[namespace]) && "function" == typeof(cache[path] || cache[namespace]).main && (data === !1 ? callback.call(that, {
                    render: function (_data) {
                        return (cache[path] || cache[namespace]).main(_data || {})
                    }
                }) : callback.call(that, (cache[path] || cache[namespace]).main(data)))
            }), this) : !1
        }
    }, window[moduleName].render = function (html, data, callback) {
        var path = this.rguid(), that = this, cache = that._tpls, renderTools = {
            trim: function (str) {
                return str.replace(/^\s+|\s+$/g, "")
            }, split: function (str, separator, limit) {
                if ("[object RegExp]" !== Object.prototype.toString.call(separator))return str.split(separator, limit);
                var output = [], lastLastIndex = 0, flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.sticky ? "y" : ""), separator = RegExp(separator.source, flags + "g"), _compliantExecNpcg = /()??/.exec("")[1] === undefined, separator2, match, lastIndex, lastLength;
                if (str += "", _compliantExecNpcg || (separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags)), limit === undefined || 0 > +limit)limit = 1 / 0; else if (limit = Math.floor(+limit), !limit)return [];
                for (; (match = separator.exec(str)) && (lastIndex = match.index + match[0].length, !(lastIndex > lastLastIndex && (output.push(str.slice(lastLastIndex, match.index)), !_compliantExecNpcg && match.length > 1 && match[0].replace(separator2, function () {
                    for (var i = 1; i < arguments.length - 2; i++)arguments[i] === undefined && (match[i] = undefined)
                }), match.length > 1 && match.index < str.length && Array.prototype.push.apply(output, match.slice(1)), lastLength = match[0].length, lastLastIndex = lastIndex, output.length >= limit)));)separator.lastIndex === match.index && separator.lastIndex++;
                return lastLastIndex === str.length ? (lastLength || !separator.test("")) && output.push("") : output.push(str.slice(lastLastIndex)), output.length > limit ? output.slice(0, limit) : output
            }, precompile: function (tpl) {
                var tplTemp, tplList, compileList, tplExp;
                if (!tpl)return !1;
                for (tplList = {}, compileList = {}, tplExp = /<template(.*name=['"]([^'"]+)*)?\b[^>]*>([^<]*(?:(?!<\/template>)<[^<]*)*)<\/template>/gim; tplTemp = tplExp.exec(tpl);)tplTemp[2] && (tplList[tplTemp[2]] = tplTemp[3]);
                return tplList.main = tplList.main || tpl, this.compile(tplList, compileList), compileList
            }, compile: function (tplList, compileList) {
                var tplname, html, jsExp, cssExp, jsTemp, cssTemp, jscode, csscode, _jscode, i, _html, that = this;
                if ("object" != typeof tplList)return !1;
                for (tplname in tplList)if (html = tplList[tplname]) {
                    if (jsExp = /<script\b[^>]*>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/gim, cssExp = /<style\b[^>]*>([^<]*(?:(?!<\/style>)<[^<]*)*)<\/style>/gim, jscode = "", csscode = "", html = html.replace(cssExp, function ($, $1) {
                            return csscode += "\r\n" + $1, ""
                        }).replace(jsExp, function ($, $1) {
                            return jscode += "\r\n" + $1, ""
                        }), jscode = that.trim(jscode), csscode = that.trim(csscode), html = that.trim(html), csscode && (csscode = csscode.replace(/'/g, "\\'"), csscode = "    css += '" + csscode.replace(/\/\*(.|\n)*?\*\//gi, "").replace(/\r?\n/gi, "").replace(/([a-zA-Z0-9_\-#*\.:\s,\(\)'"<>=]*)(\{)/gi, function (a, b, c) {
                                var sguid, _b, i;
                                if (sguid = "main" === tplname ? "guid" : "guid + dguid", b = that.trim(b), "" === b)return "#' + " + sguid + " + '" + c;
                                for (_b = b.split(","), i = 0; i < _b.length; i++)_b[i] = that.trim(_b[i]), _b[i] = "';\r\n    css += '#' + " + sguid + " + '" + (0 === _b[i].indexOf(":") ? "" : " ") + _b[i];
                                return _b.join(",") + c
                            }), csscode += "';"), jscode) {
                        for (_jscode = that.split(jscode, /\r?\n/g), i = 0; i < _jscode.length; i++)_jscode[i] && (_jscode[i] = "    template.push('" + _jscode[i].replace(/\\/g, "\\\\").replace(/\'/g, "\\'").replace(/\r\n/g, "\n").replace(/\n/g, "\\n").replace(/\$SUBROOT/g, "$(\\'#'+ guid + dguid + '\\')").replace(/(^|[^\.])require\(([^\)]*)\)/gi, function (a, b, c) {
                                var _c = (c || "").split(",");
                                return _c.map(function (value, index) {
                                    _c[index] = that.trim(_c[index])
                                }), b + "$TPLS[" + _c[0] + "](" + (_c.length > 1 ? _c[1] : "$DATA") + ", \"'+ guid +'\")"
                            }) + "\\n');\n");
                        jscode = _jscode.join("")
                    }
                    if (html) {
                        for (_html = that.split(html, /(<\?[\s\S]*?\?>)/g), i = 0; i < _html.length; i++)_html[i] && (new RegExp("<\\?[\\s\\S]*?\\?>", "igm").test(_html[i]) ? (_html[i] = _html[i].replace(/<\?([\s\S]*?)\?>/gim, "$1"), _html[i] = _html[i].replace(/@([a-zA-Z\$_]+)/gim, "$DATA.$1"), _html[i] = _html[i].replace(/print\((.*?)\);/gim, "    template.push(($1) || '');\n"), 0 === _html[i].indexOf("=") && (_html[i] = "    template.push(((" + _html[i].substring(1) + ") == null ? '' : (" + _html[i].substring(1) + ")));")) : _html[i] = "\n    template.push('" + _html[i].replace(/\\/g, "\\\\").replace(/\'/g, "\\'").replace(/\r\n/g, "\n").replace(/\n/g, "\\n") + "');\n");
                        html = _html.join(""), html = html.replace(/\$ROOT/gim, "'+ guid +'"), html = html.replace(/\$SUBROOT/gim, "'+ guid + dguid +'")
                    }
                    compileList[tplname] = {css: csscode, js: jscode, html: html}
                }
            }, templete: function (path, tpl) {
                var i, _html, html = "", tpls = [];
                for (i in tpl)_html = "", _html += '  "' + i + '": function($DATA, guid){\n', _html += "    var css = '', dguid = N.dguid();\n", _html += "    var template = {\n", _html += "      init: function(){\n", _html += "        this.v8 = !!''.trim;\n", _html += "        this.result = this.v8 ? '' : [];\n", _html += "      },\n", _html += "      push: function(str){\n", _html += "        this.v8 ? (this.result += str) : this.result.push(str);\n", _html += "      },\n", _html += "      html: function(){\n", _html += "        return this.v8 ? this.result : this.result.join('');\n", _html += "      }\n", _html += "    };\n", _html += "    guid = guid || N.guid();\n", _html += "    template.init();\n", tpl[i].css && (_html += tpl[i].css + "\n", _html += "    if(N.ie6){\n", _html += "      N._fixcss(css);\n", _html += "    } else {\n", _html += "      template.push('<style>' + css + '</style>');\n", _html += "    }"), tpl[i].html && (_html += tpl[i].html), tpl[i].js && (_html += "    template.push('<script>');\n", _html += "    template.push('(function(window, document, undefined){\\n');\n", _html += "    template.push('  var $ROOT = $(\"#'+ guid +'\");\\n');\n", _html += "    template.push('  var $TPLS = NodeTpl._tpls[\"'+ PATH +'\"];\\n');\n", _html += "    template.push('  var $DATA = NodeTpl._data[\"'+ dguid +'\"];\\n');\n", _html += tpl[i].js, _html += "    template.push('})(window, document);\\n');\n", _html += "    template.push('delete NodeTpl._data[\"'+ dguid +'\"];\\n');\n", _html += "    template.push('</script>\\n');\n"), _html += "    $DATA && (N._data[dguid] = $DATA);\n", _html += "    return template.html();\n", _html += "  }", tpls.push(_html);
                return html += "(function(N, undefined){\n", html += "  var PATH = '" + path + "';\n", html += "  if(!N || !N._tpls) return false;\n", html += "  N._tpls[PATH] = N._tpls[PATH] ||\n{\n", html += tpls.join(",\n"), html += "\n};", html += "\n})(window.NodeTpl);"
            }
        };
        return "function" == typeof data && (callback = data, data = {}), new Function(renderTools.templete(path, renderTools.precompile(html)))(), "function" == typeof callback && "object" == typeof cache[path] && "function" == typeof cache[path].main && callback.call(that, cache[path].main(data)), that
    }, window[moduleName].guid._counter = 1, window[moduleName].dguid._counter = 1, window[moduleName].rguid._counter = 1
}(window, document);
var LT = {};
LT.Namespace = function () {
    var a = arguments, o = null, i, j, d;
    for (i = 0; i < a.length; i++)for (d = a[i].split("."), o = LT, j = "LT" == d[0] ? 1 : 0; j < d.length; j++)o[d[j]] = o[d[j]] || {}, o = o[d[j]];
    return o
}, LT.Env = {
    domain: "liepin.com",
    sRoot: "//concat.lietou-static.com/pics/pc/",
    wwwRoot: "https://www.liepin.com/",
    aRoot: "https://a.liepin.com/",
    jobRoot: "https://job.liepin.com/",
    companyRoot: "https://company.liepin.com/",
    hRoot: "https://h.liepin.com/",
    cRoot: "https://c.liepin.com/",
    itRoot: "https://it.liepin.com/",
    snsRoot: "https://sns.liepin.com/",
    lptRoot: "https://lpt.liepin.com/",
    cltRoot: "https://clt.liepin.com/",
    articleRoot: "https://article.liepin.com/",
    rtsRoot: "https://rts.liepin.com/",
    passportRoot: "https://passport.liepin.com/",
    mskRoot: "https://msk.liepin.com/",
    payRoot: "https://pay.liepin.com/",
    jzRoot: "https://jz.liepin.com/",
    xptRoot: "https://xpt.liepin.com/",
    atsRoot: "https://ats.liepin.com/",
    campusRoot: "https://campus.liepin.com/",
    xyRoot: "https://xy.liepin.com/",
    mxyRoot: "https://mxy.liepin.com/",
    eventRoot: "https://event.liepin.com/",
    vipRoot: "https://vip.liepin.com/"
}, LT.System = {}, LT.System.guid = function () {
    return "LTGUID__" + (LT.System.guid._counter++).toString(36)
}, LT.System.guid._counter = 1, LT.Object = {
    isUndefined: function (object) {
        return "undefined" == typeof object
    }, isBoolean: function (object) {
        return "boolean" == typeof object
    }, isString: function (object) {
        return "string" == typeof object
    }, isElement: function (object) {
        return object && 1 == object.nodeType
    }, isFunction: function (object) {
        return "function" == typeof object
    }, isObject: function (object) {
        return "object" == typeof object
    }, isArray: function (object) {
        return "[object Array]" === Object.prototype.toString.call(object)
    }, isNumber: function (object) {
        return "number" == typeof object
    }, isJQuery: function (object) {
        return object instanceof window.jQuery
    }, extend: function () {
        var i, key, result = arguments[0] || {}, length = arguments.length;
        for (i = 1; length > i; i++)if ("object" == typeof arguments[i])for (key in arguments[i])arguments[length - 1] === !0 && arguments[i][key].constructor == Object ? LT.Object.extend(result[key], arguments[i][key]) : result[key] = arguments[i][key];
        return result
    }, extendParams: function () {
        var i, args = arguments, result = args[0];
        if (LT.Object.isArray(result))for (i = 1; i < args.length; i++)"object" == typeof args[i] && Object.keys(args[i]).forEach(function (key) {
            result.push({name: key, value: args[i][key]})
        }); else for (i = 1; i < args.length; i++)"object" == typeof args[i] && LT.Object.extend(result, args[i]);
        return result
    }, toQueryString: function (source, keyname) {
        var t, k, rt = [];
        for (k in source)t = source[k], LT.Object.isFunction(t) || (LT.Object.isObject(t) ? rt.push(LT.Object.toQueryString(t, k)) : /^\d+$/.test(k) ? rt.push(encodeURIComponent(keyname || k) + "=" + encodeURIComponent(t)) : rt.push(encodeURIComponent(k) + "=" + encodeURIComponent(t)));
        return rt.join("&")
    }
}, LT.Array = {
    remove: function (source, value) {
        for (var i = 0; i < source.length; i++)if (source[i] === value) {
            source.splice(i, 1);
            break
        }
        return source
    }, removeAt: function (source, index) {
        return source.splice(index, 1)[0], source
    }, empty: function (source) {
        source.length = 0
    }, unique: function (source, compareFn) {
        var len = source.length, result = source.slice(0), i, datum;
        for ("function" != typeof compareFn && (compareFn = function (item1, item2) {
            return item1 === item2
        }); --len > 0;)for (datum = result[len], i = len; i--;)if (compareFn(datum, result[i])) {
            result.splice(len, 1);
            break
        }
        return result
    }
}, LT.Function = {
    empty: function () {
    }
}, LT.String = {
    realLength: function (source) {
        return source.replace(/[\u4e00-\u9fa5]/g, "**").length
    }, nl2br: function (source) {
        return (source || "").replace(/([^>])\n/g, "$1<br />")
    }, stripTags: function (source) {
        return source.replace(/<\/?[^>]+>/gim, "")
    }, stripScript: function (source) {
        return source.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gim, "")
    }, escapeHTML: function (source) {
        return source.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }, unescapeHTML: function (source) {
        return source.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    }, substr: function (source, begin, num, dot) {
        for (var end, ascRegexp = /[^\x00-\xFF]/g, i = 0, ibegin = begin; begin > i;)i++ && source.charAt(i).match(ascRegexp) && begin--;
        for (i = begin, end = begin + num; end > i;)i++ && source.charAt(i).match(ascRegexp) && end--;
        return dot && source.length > end ? (source = LT.String.substr(source, ibegin, num - dot.length + (dot.length % 2 === 0 ? 0 : 1), !1), source + dot) : source.substring(begin, end)
    }, include: function (source, key) {
        return source.indexOf(key) > -1
    }, startsWith: function (source, key) {
        return 0 === source.indexOf(key)
    }, endsWith: function (source, key) {
        var d = source.length - key.length;
        return d >= 0 && source.lastIndexOf(key) === d
    }, isBlank: function (source) {
        return /^\s*$/.test(source)
    }, isEmail: function (source) {
        return /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,8}$/.test(source)
    }, isMobile: function (source) {
        return /^((\(\d{2,3}\))|(\d{3}\-))?(1[34578]\d{9})$/.test(source) || /^(001)[2-9]\d{9}$/.test(source)
    }, isUrl: function (source) {
        return /^(http:|https:|ftp:)\/\/(?:[0-9a-zA-Z]+|[0-9a-zA-Z][\w-]+)\.[\w-]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/.test(source)
    }, isIp: function (source) {
        return /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])\.(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])\.(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])\.(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/.test(source)
    }, isNumber: function (source) {
        return /^\d+$/.test(source)
    }, isZip: function (source) {
        return /^[1-9]\d{5}$/.test(source)
    }, isEN: function (source) {
        return /^[A-Za-z]+$/.test(source)
    }, isCN: function (source) {
        return /^[\u4e00-\u9fa5]+$/.test(source)
    }, isIdCard: function (source, strict) {
        function isLeap(year) {
            return year % 4 === 0 && year % 400 !== 0 || year % 400 === 0
        }

        function verifyDate(year, month, date) {
            if (1 > month || month > 12)return !1;
            var days = DATES[month];
            return 2 === month && isLeap(year) && (days = 29), date > 0 && days >= date
        }

        function verify15(id) {
            var year, month, date;
            return /^[0-9]{15}$/.test(id) ? (year = parseInt("19" + id.substr(6, 2), 10), month = parseInt(id.substr(8, 2), 10), date = parseInt(id.substr(10, 2), 10), verifyDate(year, month, date) ? !0 : !1) : !1
        }

        function verify18(id) {
            var year, month, date, vcode, sum, i, mod;
            if (!/^[0-9]{17}[0-9xX]$/.test(id))return !1;
            if (year = parseInt(id.substr(6, 4), 10), month = parseInt(id.substr(10, 2), 10), date = parseInt(id.substr(12, 2), 10), vcode = id.substr(17, 1), !verifyDate(year, month, date))return !1;
            for (sum = 0, i = 0; 17 > i; i++)sum += parseInt(id.charAt(i), 10) * WI[i];
            return mod = sum % 11, VERIFY_CODE.charAt(mod) === vcode
        }

        function verify(id) {
            return id ? (id = String(id), 18 === id.length ? verify18(id) : 15 === id.length ? verify15(id) : !1) : !1
        }

        var DATES, WI, VERIFY_CODE;
        return strict ? (DATES = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], WI = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], VERIFY_CODE = "10X98765432", verify(source)) : /^\d{17}[xX\d]$|^\d{15}$/.test(source)
    }, getEmailLoginUrl: function (email) {
        if (!email || !LT.String.isEmail(email))return "about:blank";
        var urls = ["163.com", "126.com", "qq.com", "139.com", "hotmail.com", "sohu.com", "sina.com", "sina.cn", "yeah.net", "189.cn", "21cn.com", "21cn.net", "yahoo.cn", "yahoo.com.cn", "yahoo.com", ["gmail.com", "mail.google.com"]], domain = email.substring(email.indexOf("@") + 1), redirect = "www." + domain;
        return urls.map(function (value) {
            Array.isArray(value) || (value = [value, "mail." + value]), domain === value[0] && (redirect = value[1])
        }), "http://" + redirect
    }, getQuery: function (key, url) {
        var rts, rt, queryReg;
        for (url = url || window.location.href + "", -1 !== url.indexOf("#") && (url = url.substring(0, url.indexOf("#"))), rts = [], queryReg = new RegExp("(^|\\?|&)" + key + "=([^&]*)(?=&|#|$)", "g"); null != (rt = queryReg.exec(url));)rts.push(decodeURIComponent(rt[2]));
        return 0 == rts.length ? null : 1 == rts.length ? rts[0] : rts
    }, setQuery: function (key, value, url) {
        var i, hash, p;
        if (LT.Object.isArray(key)) {
            for (url = value || window.location.href + "", i = 0; i < key.length; i++)url = this.setQuery(key[i], url);
            return url
        }
        if (LT.Object.isObject(key)) {
            url = value || window.location.href + "";
            for (i in key)url = this.setQuery(i, key[i], url);
            return url
        }
        for (url = url || window.location.href + "", hash = "", -1 !== url.indexOf("#") && (hash = url.substring(url.indexOf("#"))), url = url.replace(hash, ""), url = url.replace(new RegExp("(^|\\?|&)" + key + "=[^&]*(?=&|#|$)", "g"), "$1"), url = url.replace(/(\?|&)&*/g, "$1"), url = url.replace(/&+$/g, ""), value = LT.Object.isArray(value) ? value : [value], i = value.length - 1; i >= 0; i--)value[i] = encodeURIComponent(value[i]);
        return p = key + "=" + value.join("&" + key + "="), url + (/\?/.test(url) ? "&" : "?") + p + hash
    }, queryToObject: function (url) {
        url = url || window.location.href + "";
        var hash = "", obj = {};
        return -1 !== url.indexOf("#") && (hash = url.substring(url.indexOf("#"))), url = url.replace(hash, ""), url = -1 !== url.indexOf("?") ? url.substring(url.indexOf("?") + 1) : url, url.split("&").map(function (v) {
            var _v = v.split("=");
            try {
                _v.length >= 2 && (obj[_v[0]] = decodeURIComponent(_v[1]))
            } catch (e) {
            }
        }), obj
    }, split: function (str, separator, limit) {
        if ("[object RegExp]" !== Object.prototype.toString.call(separator))return str.split(separator, limit);
        var output = [], lastLastIndex = 0, flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.sticky ? "y" : ""), separator = RegExp(separator.source, flags + "g"), _compliantExecNpcg = void 0 === /()??/.exec("")[1], separator2, match, lastIndex, lastLength;
        if (str += "", _compliantExecNpcg || (separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags)), void 0 === limit || 0 > +limit)limit = 1 / 0; else if (limit = Math.floor(+limit), !limit)return [];
        for (; (match = separator.exec(str)) && (lastIndex = match.index + match[0].length, !(lastIndex > lastLastIndex && (output.push(str.slice(lastLastIndex, match.index)), !_compliantExecNpcg && match.length > 1 && match[0].replace(separator2, function () {
            for (var i = 1; i < arguments.length - 2; i++)void 0 === arguments[i] && (match[i] = void 0)
        }), match.length > 1 && match.index < str.length && Array.prototype.push.apply(output, match.slice(1)), lastLength = match[0].length, lastLastIndex = lastIndex, output.length >= limit)));)separator.lastIndex === match.index && separator.lastIndex++;
        return lastLastIndex === str.length ? (lastLength || !separator.test("")) && output.push("") : output.push(str.slice(lastLastIndex)), output.length > limit ? output.slice(0, limit) : output
    }, md5: function (data) {
        function hex_md5(s) {
            return binl2hex(core_md5(str2binl(s), s.length * chrsz))
        }

        function b64_md5(s) {
            return binl2b64(core_md5(str2binl(s), s.length * chrsz))
        }

        function hex_hmac_md5(key, data) {
            return binl2hex(core_hmac_md5(key, data))
        }

        function b64_hmac_md5(key, data) {
            return binl2b64(core_hmac_md5(key, data))
        }

        function calcMD5(s) {
            return binl2hex(core_md5(str2binl(s), s.length * chrsz))
        }

        function md5_vm_test() {
            return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
        }

        function core_md5(x, len) {
            var a, b, c, d, i, olda, oldb, oldc, oldd;
            for (x[len >> 5] |= 128 << len % 32, x[(len + 64 >>> 9 << 4) + 14] = len, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, i = 0; i < x.length; i += 16)olda = a, oldb = b, oldc = c, oldd = d, a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936), d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586), c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819), b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330), a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897), d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426), c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341), b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983), a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416), d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417), c = md5_ff(c, d, a, b, x[i + 10], 17, -42063), b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162), a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682), d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101), c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290), b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329), a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510), d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632), c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713), b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302), a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691), d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083), c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335), b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848), a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438), d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690), c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961), b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501), a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467), d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784), c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473), b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734), a = md5_hh(a, b, c, d, x[i + 5], 4, -378558), d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463), c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562), b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556), a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060), d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353), c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632), b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640), a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174), d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222), c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979), b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189), a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487), d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835), c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520), b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651), a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844), d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415), c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905), b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055), a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571), d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606), c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523), b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799), a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359), d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744), c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380), b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649), a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070), d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379), c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259), b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551), a = safe_add(a, olda), b = safe_add(b, oldb), c = safe_add(c, oldc), d = safe_add(d, oldd);
            return Array(a, b, c, d)
        }

        function md5_cmn(q, a, b, x, s, t) {
            return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
        }

        function md5_ff(a, b, c, d, x, s, t) {
            return md5_cmn(b & c | ~b & d, a, b, x, s, t)
        }

        function md5_gg(a, b, c, d, x, s, t) {
            return md5_cmn(b & d | c & ~d, a, b, x, s, t)
        }

        function md5_hh(a, b, c, d, x, s, t) {
            return md5_cmn(b ^ c ^ d, a, b, x, s, t)
        }

        function md5_ii(a, b, c, d, x, s, t) {
            return md5_cmn(c ^ (b | ~d), a, b, x, s, t)
        }

        function core_hmac_md5(key, data) {
            var ipad, opad, i, hash, bkey = str2binl(key);
            for (bkey.length > 16 && (bkey = core_md5(bkey, key.length * chrsz)), ipad = Array(16), opad = Array(16), i = 0; 16 > i; i++)ipad[i] = 909522486 ^ bkey[i], opad[i] = 1549556828 ^ bkey[i];
            return hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz), core_md5(opad.concat(hash), 640)
        }

        function safe_add(x, y) {
            var lsw = (65535 & x) + (65535 & y), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | 65535 & lsw
        }

        function bit_rol(num, cnt) {
            return num << cnt | num >>> 32 - cnt
        }

        function str2binl(str) {
            var i, bin = Array(), mask = (1 << chrsz) - 1;
            for (i = 0; i < str.length * chrsz; i += chrsz)bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
            return bin
        }

        function binl2hex(binarray) {
            var i, hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", str = "";
            for (i = 0; i < 4 * binarray.length; i++)str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 15);
            return str
        }

        function binl2b64(binarray) {
            var i, triplet, j, tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", str = "";
            for (i = 0; i < 4 * binarray.length; i += 3)for (triplet = (binarray[i >> 2] >> 8 * (i % 4) & 255) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 255) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 255, j = 0; 4 > j; j++)str += 8 * i + 6 * j > 32 * binarray.length ? b64pad : tab.charAt(triplet >> 6 * (3 - j) & 63);
            return str
        }

        var hexcase = 0, b64pad = "", chrsz = 8;
        return hex_md5(data)
    }, encrypt: function (source, cookiename) {
        var i, userid = LT.User.user_id || "0", key1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), len1 = key1.length, key2 = userid.split(""), key3 = parseInt(userid), key4 = key1.slice(key3 % len1).concat(key1.slice(0, key3 % len1).reverse()), result = new Array;
        for (i = 0; i < key2.length; i++)result.push(key4[(i * i + parseInt(key2[i])) % key4.length]);
        for (cookiename && LT.Cookie.set(cookiename, result.join("")), key4.reverse(), result.sort(), i = 0; i < key2.length; i++)result.push(key4[(i * i + parseInt(key2[i])) % key4.length]);
        return window.location.hostname.split(".").reverse().slice(0, 2).reverse().join(".") === LT.Env.domain ? LT.String.md5(result.join("") + source + userid).split("").reverse().join("") : LT.String.md5(userid + result.join("") + source).split("").reverse().join("")
    }, encryptMobile: function (name, value) {
        var md5key, md5value;
        return name && value && (value = value.split("").sort().join("") + name, md5key = LT.String.md5(value).substring(4, 12), value = value.split("").sort().join(""), md5value = LT.String.md5(value), LT.Cookie.set(md5key, md5value, !1, "/", "liepin.com")), this
    }
}, LT.Number = {
    pad: function (source, length) {
        var pre = "", negative = 0 > source, string = String(Math.abs(source));
        return string.length < length && (pre = new Array(length - string.length + 1).join("0")), (negative ? "-" : "") + pre + string
    }, random: function (min, max) {
        return null == max && (max = min, min = 0), Math.floor(min + Math.random() * (max - min))
    }
}, LT.Date = {
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    isLeapYear: function (date) {
        var y = date.getFullYear();
        return y % 4 == 0 && y % 100 != 0 || y % 400 == 0
    },
    isWeekend: function (date) {
        return 0 == date.getDay() || 6 == date.getDay()
    },
    isWeekDay: function (date) {
        return !this.isWeekend(date)
    },
    getDaysInMonth: function (date) {
        return [31, this.isLeapYear(date) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getMonth()]
    },
    getDayName: function (date) {
        return this.dayNames[date.getDay()]
    },
    getMonthName: function (date) {
        return this.monthNames[date.getMonth()]
    },
    getDayOfYear: function (date) {
        var tmpdtm = new Date("1/1/" + date.getFullYear());
        return Math.floor((date.getTime() - tmpdtm.getTime()) / 864e5)
    },
    getWeekOfYear: function (date) {
        return Math.ceil(this.getDayOfYear(date) / 7)
    },
    setDayOfYear: function (date, day) {
        return date.setMonth(0), date.setDate(day), date
    },
    zeroTime: function (date) {
        return date.setMilliseconds(0), date.setSeconds(0), date.setMinutes(0), date.setHours(0), date
    },
    dateDiff: function (start, end, diff) {
        var diffn = 1;
        switch (diff) {
            case"S":
                diffn = 1e3;
                break;
            case"m":
                diffn = 6e4;
                break;
            case"H":
                diffn = 36e5;
                break;
            case"D":
                diffn = 864e5;
                break;
            case"M":
                diffn = 26784e5;
                break;
            case"Y":
                diffn = 31536e6
        }
        return parseInt((start.getTime() - end.getTime()) / parseInt(diffn))
    },
    format: function (source, pattern) {
        function replacer(patternPart, result) {
            pattern = pattern.replace(patternPart, result)
        }

        LT.Object.isString(source) && (pattern = source, source = null), source = source || new Date, pattern = pattern || "yyyy-MM-dd HH:mm:ss";
        var pad = LT.Number.pad, year = source.getFullYear(), month = source.getMonth() + 1, date2 = source.getDate(), hours = source.getHours(), minutes = source.getMinutes(), seconds = source.getSeconds();
        return replacer(/yyyy/g, pad(year, 4)), replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2)), replacer(/MM/g, pad(month, 2)), replacer(/M/g, month), replacer(/dd/g, pad(date2, 2)), replacer(/d/g, date2), replacer(/HH/g, pad(hours, 2)), replacer(/H/g, hours), replacer(/hh/g, pad(hours % 12, 2)), replacer(/h/g, hours % 12), replacer(/mm/g, pad(minutes, 2)), replacer(/m/g, minutes), replacer(/ss/g, pad(seconds, 2)), replacer(/s/g, seconds), pattern
    },
    parse: function (source) {
        var d, d1, d0, reg = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+$");
        return LT.Object.isString(source) ? reg.test(source) || isNaN(Date.parse(source)) ? (d = source.split(/ |T/), d1 = d.length > 1 ? d[1].split(/[^\d]/) : [0, 0, 0], d0 = d[0].split(/[^\d]/), new Date(d0[0] - 0, d0[1] - 1, d0[2] - 0, d1[0] - 0, d1[1] - 0, d1[2] - 0)) : new Date(source) : new Date
    }
}, LT.Browser = {
    IE: !(!window.attachEvent || window.opera),
    IE6: "6" == (/msie\s*(\d+)\.\d+/g.exec(navigator.userAgent.toLowerCase()) || [0, "0"])[1],
    IE7: navigator.userAgent.indexOf("MSIE 7.0") > -1,
    IE8: navigator.userAgent.indexOf("MSIE 8.0") > -1,
    Sogou: navigator.userAgent.indexOf("SE 2.X") > -1,
    Opera: !!window.opera,
    WebKit: navigator.userAgent.indexOf("AppleWebKit/") > -1,
    Gecko: navigator.userAgent.indexOf("Gecko") > -1 && -1 == navigator.userAgent.indexOf("KHTML"),
    Safari: -1 != navigator.userAgent.indexOf("Safari"),
    Mobile: "createTouch" in document && !("onmousemove" in document.documentElement) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent),
    getName: function () {
        var _a = "", _n = navigator.userAgent.toLowerCase(), _c = function (browser) {
            return _n.indexOf(browser) > -1
        }, _b = (_c("opera") === !0 ? "opera" : (_c("msie") && _c("360se")) === !0 ? "360se" : (_c("msie") && _c("tencenttraveler") && _c("metasr")) === !0 ? "sogobrowser" : (_c("msie") && _c("qqbrowser")) === !0 ? "QQbrowser" : (_c("msie") && _c("tencenttraveler")) === !0 ? "TTbrowser" : _c("msie") === !0 ? "msie" : _c("se 2.x") === !0 ? "sogou" : (_c("safari") && !_c("chrome")) === !0 ? "safari" : _c("maxthon") === !0 ? "maxthon" : (_c("chrome") && _c("safari") && _c("qihu 360ee")) === !0 ? "360ee" : (_c("chrome") && _c("taobrowser")) === !0 ? "taobrowser" : _c("chrome") === !0 ? "chrome" : (_c("gecko") && !_c("webkit") && _c("seamonkey")) === !0 ? "SeaMonkey" : (_c("gecko") && !_c("webkit") && !_c("netscape")) === !0 ? "firefox" : (_c("gecko") && !_c("webkit") && _c("netscape")) === !0 ? "netscape" : "other").toLowerCase();
        switch (_b) {
            case"360se":
            case"qihu 360ee":
            case"sogou":
                _a = _b;
                break;
            case"opera":
            case"safari":
            case"firefox":
            case"qqbrowser":
            case"seamonkey":
            case"taobrowser":
                _a = _b + _n.substring(_n.lastIndexOf("/"));
                break;
            case"netscape":
            case"chrome":
                _a = _b + _n.substring(_n.lastIndexOf("/"), _n.lastIndexOf(" "));
                break;
            case"maxthon":
                _a = _b + _n.substring(_n.lastIndexOf("/"), _n.lastIndexOf("chrome"));
                break;
            case"ttbrowser":
                _a = _b + _n.substring(_n.lastIndexOf("/"), _n.lastIndexOf(")"));
                break;
            case"msie":
                _a = _n.substring(_n.lastIndexOf(_b)).substring(0, _n.substring(_n.lastIndexOf(_b)).indexOf(";"));
                break;
            default:
                _a = _b
        }
        return _a
    },
    addFavorate: function (name, url) {
        this.IE ? window.external.addFavorite(url, name) : window.sidebar && window.sidebar.addPanel(name, url, "")
    },
    setHomepage: function (element, url) {
        try {
            element.style.behavior = "url(#default#homepage)", element.setHomePage(url)
        } catch (e) {
            if (window.netscape)try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。")
            }
        }
    },
    copy: function (o) {
        function onfail() {
            LT.Object.isElement(o) && o.select()
        }

        var str;
        return str = LT.Object.isElement(o) ? o.value : o, window.clipboardData && clipboardData.setData ? clipboardData.setData("text", str) ? !0 : (alert("您的浏览器设置不允许脚本访问剪切板"), !1) : (alert("您的浏览器不支持脚本复制,请尝试手动复制"), !1)
    },
    bgiframe: function (node) {
        if (!LT.Browser.IE6)return node;
        var iframe = node.getElementsByTagName("iframe"), html;
        return iframe.length > 0 && "bgiframe" == iframe[0].className ? node : (html = "<iframe class=\"bgiframe\" frameborder=\"0\" tabindex=\"-1\" src=\"javascript:false;\" style=\"display:block;position:absolute;z-index:-1;filter:Alpha(Opacity='0');top:expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px');left:expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px');width:expression(this.parentNode.offsetWidth+'px');height:expression(this.parentNode.offsetHeight+'px');\"/>", node.insertBefore(document.createElement(html), node.firstChild), node)
    }
}, LT.Cookie = {
    get: function (name) {
        var i, c, ret, nameEQ = name + "=", ca = document.cookie.split(";");
        for (i = 0; i < ca.length; i++) {
            for (c = ca[i]; " " == c.charAt(0);)c = c.substring(1, c.length);
            if (0 == c.indexOf(nameEQ)) {
                try {
                    ret = decodeURIComponent(c.substring(nameEQ.length, c.length))
                } catch (e) {
                    ret = unescape(c.substring(nameEQ.length, c.length))
                }
                return ret
            }
        }
        return null
    }, set: function (name, value, days, path, domain, secure) {
        var expires, date;
        LT.Object.isNumber(days) ? (date = new Date, date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3), expires = date.toGMTString()) : expires = LT.Object.isString(days) ? days : !1, document.cookie = name + "=" + encodeURIComponent(value) + (expires ? ";expires=" + expires : "") + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "")
    }, del: function (name, path, domain, secure) {
        LT.Cookie.set(name, "", -1, path, domain, secure)
    }
}, LT.Store = function () {
    function getStorage() {
        return storage ? storage : (storage = doc.body.appendChild(doc.createElement("div")), storage.style.display = "none", storage.addBehavior("#default#userData"), storage.load(localStorageName), storage)
    }

    var api = {}, win = window, doc = win.document, localStorageName = "localStorage", globalStorageName = "globalStorage", storage;
    return api.set = function (key, value) {
    }, api.setProxy = function (params, domains, callback) {
        var i, iframe, onloadEvent;
        if ("object" != typeof params)return !1;
        "function" == typeof domains && (callback = domains, domains = ""), domains = domains ? domains.split(",") : ["www." + LT.Env.domain];
        try {
            for (params = JSON.stringify(params), i = 0; i < domains.length; i++)iframe = document.createElement("iframe"), iframe.style.display = "none", iframe.src = "//" + domains[i] + ".liepin.com/storeproxy.html?store=" + encodeURIComponent(params), onloadEvent = function () {
            }, iframe.attachEvent ? iframe.attachEvent("onload", onloadEvent) : iframe.onload = onloadEvent, document.body.appendChild(iframe)
        } catch (e) {
        }
        window.setTimeout(callback, 1e3)
    }, api.get = function (key) {
    }, api.remove = function (key) {
    }, api.clear = function () {
    }, localStorageName in win && win[localStorageName] ? (storage = win[localStorageName], api.set = function (key, val) {
        storage.setItem(key, val)
    }, api.get = function (key) {
        return storage.getItem(key)
    }, api.remove = function (key) {
        storage.removeItem(key)
    }, api.clear = function () {
        storage.clear()
    }) : globalStorageName in win && win[globalStorageName] ? (storage = win[globalStorageName][win.location.hostname], api.set = function (key, val) {
        storage[key] = val
    }, api.get = function (key) {
        return storage[key] && storage[key].value
    }, api.remove = function (key) {
        delete storage[key]
    }, api.clear = function () {
        for (var key in storage)delete storage[key]
    }) : doc.documentElement.addBehavior && (api.set = function (key, val) {
        var storage = getStorage();
        storage.setAttribute(key, val), storage.save(localStorageName)
    }, api.get = function (key) {
        var storage = getStorage();
        return storage.getAttribute(key)
    }, api.remove = function (key) {
        var storage = getStorage();
        storage.removeAttribute(key), storage.save(localStorageName)
    }, api.clear = function () {
        var i, attr, storage = getStorage(), attributes = storage.XMLDocument.documentElement.attributes;
        for (storage.load(localStorageName), i = 0; attr = attributes[i]; i++)storage.removeAttribute(attr.name);
        storage.save(localStorageName)
    }), api
}(), LT.Page = {
    isStrictMode: "BackCompat" != document.compatMode, pointerX: function (event) {
        return event.pageX || event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)
    }, pointerY: function (event) {
        return event.pageY || event.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
    }, pageHeight: function () {
        return this.isStrictMode ? Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) : Math.max(document.body.scrollHeight, document.body.clientHeight)
    }, pageWidth: function () {
        return this.isStrictMode ? Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) : Math.max(document.body.scrollWidth, document.body.clientWidth)
    }, winWidth: function () {
        return this.isStrictMode ? document.documentElement.clientWidth : document.body.clientWidth
    }, winHeight: function () {
        return this.isStrictMode ? document.documentElement.clientHeight : document.body.clientHeight
    }, scrollTop: function () {
        return LT.Browser.WebKit ? window.pageYOffset : this.isStrictMode ? document.documentElement.scrollTop : document.body.scrollTop
    }, scrollLeft: function () {
        return LT.Browser.WebKit ? window.pageXOffset : this.isStrictMode ? document.documentElement.scrollLeft : document.body.scrollLeft
    }
}, LT.Event = {
    isCapsLockOn: function (e) {
        var c = e.keyCode || e.which, s = e.shiftKey;
        return c >= 65 && 90 >= c && !s || c >= 97 && 122 >= c && s ? !0 : !1
    }, element: function (e) {
        var n = e.target || e.srcElement;
        return this.resolveTextNode(n)
    }, relatedTarget: function (e) {
        var t = e.relatedTarget;
        return t || ("mouseout" == e.type || "mouseleave" == e.type ? t = e.toElement : "mouseover" == e.type && (t = e.fromElement)), this.resolveTextNode(t)
    }, resolveTextNode: function (n) {
        try {
            if (n && 3 == n.nodeType)return n.parentNode
        } catch (e) {
        }
        return n
    }, pointerX: function (event) {
        return event.pageX || event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)
    }, pointerY: function (event) {
        return event.pageY || event.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
    }, isStrictMode: "BackCompat" != document.compatMode, pageHeight: function () {
        return this.isStrictMode ? Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) : Math.max(document.body.scrollHeight, document.body.clientHeight)
    }, pageWidth: function () {
        return this.isStrictMode ? Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) : Math.max(document.body.scrollWidth, document.body.clientWidth)
    }, winWidth: function () {
        return this.isStrictMode ? document.documentElement.clientWidth : document.body.clientWidth
    }, winHeight: function () {
        return this.isStrictMode ? document.documentElement.clientHeight : document.body.clientHeight
    }, scrollTop: function () {
        return LT.Browser.WebKit ? window.pageYOffset : this.isStrictMode ? document.documentElement.scrollTop : document.body.scrollTop
    }, scrollLeft: function () {
        return LT.Browser.WebKit ? window.pageXOffset : this.isStrictMode ? document.documentElement.scrollLeft : document.body.scrollLeft
    }, preventDefault: function (event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = !1
    }, stopPropagation: function (event) {
        Browser.IE ? this.stop = function (event) {
            event.returnValue = !1, event.cancelBubble = !0
        } : this.stop = function (event) {
            event.preventDefault(), event.stopPropagation()
        }
    }, _queue: {}, queue: function (name, func) {
        var that = this;
        func ? (that._queue[name] || (that._queue[name] = new Array), that._queue[name].push(func)) : this.deQueue(name, func)
    }, deQueue: function (name) {
        var that = this, arg = arguments;
        name && that._queue[name] && function () {
            that._queue[name].forEach(function (v, i) {
                v.apply(window, arg)
            })
        }()
    }
}, LT.Dom = {}, function () {
    var ready = LT.Dom.ready = function () {
        function ready() {
            if (!ready.isReady) {
                ready.isReady = !0;
                for (var i = 0, j = readyList.length; j > i; i++)readyList[i]()
            }
        }

        function doScrollCheck() {
            try {
                document.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(doScrollCheck, 1)
            }
            ready()
        }

        function bindReady() {
            if (!readyBound)if (readyBound = !0, "complete" === document.readyState)ready.isReady = !0; else if (document.addEventListener)document.addEventListener("DOMContentLoaded", DOMContentLoaded, !1), window.addEventListener("load", ready, !1); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", DOMContentLoaded), window.attachEvent("onload", ready);
                var toplevel = !1;
                try {
                    toplevel = null == window.frameElement
                } catch (e) {
                }
                document.documentElement.doScroll && toplevel && doScrollCheck()
            }
        }

        var readyBound = !1, readyList = [], DOMContentLoaded;
        return document.addEventListener ? DOMContentLoaded = function () {
            document.removeEventListener("DOMContentLoaded", DOMContentLoaded, !1), ready()
        } : document.attachEvent && (DOMContentLoaded = function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", DOMContentLoaded), ready())
        }), bindReady(), function (callback) {
            ready.isReady ? callback() : readyList.push(callback)
        }
    }();
    ready.isReady = !1
}(), LT.Dom.hasClass = function (obj, cls) {
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"))
}, LT.Dom.addClass = function (obj, cls) {
    return this.hasClass(obj, cls) || (obj.className += " " + cls), this
}, LT.Dom.removeClass = function (obj, cls) {
    if (this.hasClass(obj, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg, " ")
    }
    return this
}, LT.Pager = {
    bar: function (page, total, number) {
        var _html, _tempa, i;
        for (number |= 5, page = parseInt(page || 0), _html = '<div class="pagerbar">', _html += '<a class="first', (0 == page || 1 == total) && (_html += " disabled"), _html += '" number="0" href="javascript:;" title="首页"></a>', _tempa = new Array, i = page - number; page + number > i; i++)i >= 0 && total > i && _tempa.push(i);
        for (_tempa.sort(function (a, b) {
            return Math.abs(a - page) - Math.abs(b - page)
        }), _tempa = _tempa.slice(0, number), _tempa.sort(function (a, b) {
            return a - b
        }), _html += '<a href="javascript:;"', 0 == page && (_html += ' class=" disabled"'), _html += ' number="' + (page - 1) + '">上页</a>', i = 0; i < _tempa.length; i++)_html += '<a href="javascript:;"', page == _tempa[i] && (_html += ' class="current"'), _html += ' number="' + _tempa[i] + '">' + (_tempa[i] + 1) + "</a>";
        return _tempa[_tempa.length - 1] < total - 1 && (_html += '<span class="ellipsis">…</span>'), _html += '<a class="', page == total - 1 && (_html += " disabled"), _html += '" number="' + (page + 1) + '" href="javascript:;">下页</a>', _html += '<a class="last', page == total - 1 && (_html += " disabled"), _html += '" number="' + (total - 1) + '" href="javascript:;" title="末页"></a>', _html += "</div>"
    }, ajax: function (options) {
        var container, callback, separator, _ajax, pager, i, _success, init = !0, _host = location.hostname, _crossDomain = !1, _protocol = "https:" == document.location.protocol ? "https://" : "http://";
        for (0 !== options.url.indexOf(_protocol) ? (separator = 0 === options.url.indexOf("/") ? "" : "/", options.url = _protocol + _host + separator + options.url) : 0 !== options.url.indexOf(_protocol + _host) && (_crossDomain = !0), _ajax = function () {
            var that = this;
            _crossDomain ? LT.Domain.use(options.url.substring(options.url.indexOf(_protocol) + _protocol.length).split("/").splice(0, 1).join(), function () {
                LT.ajax(that)
            }) : LT.ajax(that)
        }, pager = function (content) {
            if (content) {
                var pagerbar = content.filter(".pagerbar").add(content.find(".pagerbar"));
                pagerbar.find("a").bind("click", function () {
                    return $(this).hasClass("disabled") || $(this).hasClass("current") ? !1 : (options.data.curPage = $(this).attr("number"), void _ajax.call(options))
                }), pagerbar.bind("refresh", function (event, page) {
                    page && (options.data.curPage = page), _ajax.call(options)
                })
            }
        }, i = 1; i < arguments.length; i++)LT.Object.isObject(arguments[i]) && (container = arguments[i]), LT.Object.isString(arguments[i]) && (container = $(arguments[i])), LT.Object.isBoolean(arguments[i]) && (init = arguments[i]), LT.Object.isFunction(arguments[i]) && (callback = arguments[i]);
        options.data = LT.Object.extend({
            pageSize: 10,
            curPage: 0
        }, options.data), options.success = options.success || function (data) {
                var $data = $(data);
                return container && container.empty() && $data.appendTo(container), $data
            }, _success = options.success, options.success = function (data) {
            pager(_success.call(options, data))
        }, init ? _ajax.call(options) : pager(container ? container.contents() : ""), container && container.bind("Pager", function (event, page) {
            options.data.curPage = page || 0, _ajax.call(options)
        })
    }, event: function (container, fun, thisp) {
        if (container && fun) {
            var pagerbar = container.filter(".pagerbar").add(container.find(".pagerbar"));
            pagerbar.find("a").bind("click", function () {
                return $(this).hasClass("disabled") || $(this).hasClass("current") ? !1 : (thisp = thisp || {}, thisp.curPage = $(this).attr("number"), void fun.call(thisp))
            })
        }
    }, pageAjax: function (container, options) {
        function state(e) {
            if (history.state) {
                var state = e.state || history.state;
                document.title = state.title, doPager(state.url, !1)
            }
        }

        return options = LT.Object.extend({
            init: !0,
            selector: "",
            callback: !1
        }, options), doPager = function (url, pushstate) {
            LT.Pager.ajax({
                url: url.substring(0, url.indexOf("?")),
                type: "GET",
                data: LT.String.queryToObject(url),
                dataType: "html",
                cache: !1,
                success: function (data) {
                    var pagedata = $(data).find(options.selector).html();
                    pagedata && (container.html(pagedata), options.callback && options.callback.call(container), pushstate && window.history.pushState && window.history.pushState({
                        url: url,
                        title: document.title
                    }, document.title, url))
                }
            })
        }, window.history.pushState && window.history.pushState({
            url: window.location.href,
            title: document.title
        }, document.title, window.location.href), window.addEventListener ? window.addEventListener("popstate", function (e) {
            state(e)
        }, !1) : window.attachEvent && window.attachEvent("onpopstate", function (e) {
            state(e)
        }), container.delegate(".pagerbar a", "click", function (event) {
            var url = $(this).attr("href");
            url = 0 === url.indexOf("javascript:;") ? "" : url, url && doPager(url, !0), event.preventDefault()
        }), options.init && options.callback && options.callback.call(container), this
    }
}, LT.Namespace("User"), LT.User.get = function () {
    this.isLogin = null != LT.Cookie.get("user_id"), this.user_id = LT.Cookie.get("user_id"), this.is_lp_user = LT.Cookie.get("is_lp_user"), this.user_name = LT.Cookie.get("user_name"), this.user_kind = LT.Cookie.get("user_kind"), this.user_photo = LT.Cookie.get("user_photo") || "55557f3b28ee44a8919620ce01a.gif", this.socket = null
}, LT.User.get(), LT.Event.queue("login", function () {
    LT.User.get(), LT.Config && LT.Config.init && LT.Config.init()
}), LT.User.requireLoginConfig = {role: "0", close: !0, skin: "0", register: null}, LT.User.requireLogin = function () {
    var i, tplUrl, options = LT.Object.extend({
        register: !LT.User.is_lp_user,
        role: LT.User.user_kind,
        success: null,
        callback: null
    }, LT.User.requireLoginConfig);
    if (0 === arguments.length)options.callback = function () {
    }; else for (i = 0; i < arguments.length; i++)LT.Object.isObject(arguments[i]) ? LT.Object.extend(options, arguments[i]) : LT.Object.isFunction(arguments[i]) && (options.callback = arguments[i]);
    LT.User.isLogin ? options.callback && options.callback.call(options) : (tplUrl = "//concat.lietou-static.com/dev/www/pc/revs/v1/tpls/user/pop_ajaxLogin_v1_90fde183.js", NodeTpl.get(tplUrl, options, function (d) {
        var opt = {title: !1, content: d, lock: !0, padding: 0};
        options.close === !1 && (opt.dblclose = !1, opt.cancel = options.close), $.dialog(opt)
    }))
}, LT.User.behavior = function () {
    var that = this, surl = "//statistic2.liepin.com/";
    $(window).on("scroll.Behavior mousemove.Behavior", function (event) {
        var x = event.offsetX, y = event.offsetY;
        that.behavior.data.p.length >= 20 ? ((new Image).src = surl + "?p=" + that.behavior.data.p.toString() + "&" + Math.random(), that.behavior.data.p = []) : that.behavior.data.p.push([x, y])
    }).on("click.Behavior", function (event) {
        var x = event.offsetX, y = event.offsetY;
        (new Image).src = surl + "?c=" + x + "," + y + "&" + Math.random()
    }).on("beforeunload.Behavior", function (event) {
        var p = that.behavior.data.p.length > 0 ? "&p=" + that.behavior.data.p.toString() : "";
        that.behavior.data.x = 1, (new Image).src = surl + "?x=" + that.behavior.data.x + p + "&" + Math.random()
    })
}, LT.User.behavior.data = {p: [], x: 0}, LT.User.Profile = {
    Data: {},
    cookie: "_ltu",
    version: "1.1",
    _get: function (callback, error) {
        var that = this;
        if (error = error || callback, !LT.User.isLogin || !LT.ajax)return error && error.call(that), this;
        switch (LT.User.user_kind) {
            case"0":
                LT.ajax({
                    url: LT.Env.cRoot + "user/getusercinfo.json",
                    type: "GET",
                    dataType: "json",
                    cache: !1,
                    async: !1,
                    success: function (data) {
                        1 === data.flag && LT.Object.extend(that.Data, data.data), that.Data.id = LT.User.user_id, that.Data.v = that.version, LT.Cookie.set(that.cookie, JSON.stringify(that.Data), !1, "/", LT.Env.domain), callback && callback.call(that, !0)
                    },
                    error: function () {
                        error && error.call(that, !1)
                    }
                });
                break;
            default:
                that.Data = {}, LT.Cookie.set(that.cookie, "{}", !1, "/", LT.Env.domain), error && error.call(that, !1)
        }
        return this
    },
    init: function (callback) {
        return this._get(callback), this
    },
    get: function (key) {
        return this.Data.v !== this.version && LT.Object.extend(this.Data, JSON.parse(LT.Cookie.get(this.cookie) || "{}")), (this.Data.v !== this.version || this.Data.id !== LT.User.user_id) && this._get(), this.Data[key]
    },
    refresh: function (callback) {
        return delete this.Data.v, this._get(callback), this
    }
}, LT.Biz = {}, LT.Biz.C = {
    Attention: {
        get: function () {
            var i, options = {
                auto: !0,
                callback: null,
                error: null
            }, ids = "", url = "", type = LT.User.user_kind || "";
            if (arguments.length < 1)return !1;
            for (ids = String(arguments[0] || ""), i = 1; i < arguments.length; i++)LT.Object.isBoolean(arguments[i]) ? options.auto = arguments[i] : LT.Object.isObject(arguments[i]) ? LT.Object.extend(options, arguments[i]) : LT.Object.isFunction(arguments[i]) && (options.callback = arguments[i]);
            if ("0" == type || "" == type) {
                switch (options.targetType) {
                    case"company":
                        url = "attention/loadattention-b.json";
                        break;
                    default:
                        url = "attention/loadattention.json"
                }
                LT.ajax({
                    url: LT.Env.snsRoot + url,
                    type: "POST",
                    data: {userh_ids: ids},
                    dataType: "json",
                    success: function (data) {
                        "1" == data.flag ? options.auto ? $(data.data.attentions).each(function () {
                            1 == this.attention_flag ? ($('a.btn_attention[uid="' + this.userh_id + '"]').removeClass().addClass("btn_attention attention_cancel"), $('a.link_attention[uid="' + this.userh_id + '"]').html("取消关注").removeClass("attention_enabled").addClass("attention_cancel"), $("span.lbl_attention_count[uid='" + this.userh_id + "']").html(this.attention_cnt), $('a.btn-attention[data-uid="' + this.userh_id + '"]').text("取消关注").removeClass("btn-attention-add").addClass("btn-attention-cancel"), $('span.lbl-attention[data-uid="' + this.userh_id + '"]').html(this.attention_cnt)) : ($('a.btn_attention[uid="' + this.userh_id + '"]').removeClass().addClass("btn_attention attention_enabled"), $('a.link_attention[uid="' + this.userh_id + '"]').html("关注").removeClass("attention_cancel").addClass("attention_enabled"), $('span.lbl_attention_count[uid="' + this.userh_id + '"]').html(this.attention_cnt), $('a.btn-attention[data-uid="' + this.userh_id + '"]').text("关注").removeClass("btn-attention-cancel").addClass("btn-attention-add"), $('span.lbl-attention[data-uid="' + this.userh_id + '"]').html(this.attention_cnt)), options.callback && options.callback.call(null, data)
                        }) : options.callback && options.callback.call(null, data) : options.error && options.error.call(null, data);
                    }
                })
            }
        }, add: function () {
            var i, options = {
                user_kinds: ["0", "1", "2"],
                auto: !0,
                msg: "添加关注成功！",
                callback: null,
                deny: null,
                error: null
            }, ids = "", url = "", args = arguments, user_kind = "", denyMsg = "抱歉，此功能仅供$使用！";
            if (arguments.length < 1)return !1;
            for (ids = String(arguments[0] || ""), i = 1; i < arguments.length; i++)Array.isArray(arguments[i]) ? options.user_kinds = arguments[i] : LT.Object.isBoolean(arguments[i]) ? options.auto = arguments[i] : LT.Object.isObject(arguments[i]) ? LT.Object.extend(options, arguments[i]) : LT.Object.isFunction(arguments[i]) && (options.callback = arguments[i]);
            denyMsg = denyMsg.replace(/\$/g, options.user_kinds.join().replace(/0/g, "经理人").replace(/1/g, "企业用户").replace(/2/g, "猎头用户").replace(/,/g, "和")), LT.User.requireLogin(function () {
                if (user_kind = LT.User.user_kind, -1 === options.user_kinds.indexOf(user_kind))return void $.dialog.error(denyMsg, function () {
                    options.deny && options.deny.call(options)
                });
                if ("0" == user_kind) {
                    switch (options.targetType) {
                        case"company":
                            url = "connection/attention-b.json";
                            break;
                        default:
                            url = "connection/addattention.json"
                    }
                    LT.ajax({
                        url: LT.Env.snsRoot + url,
                        type: "POST",
                        data: {userh_ids: ids},
                        dataType: "json",
                        cache: !1,
                        success: function (data) {
                            1 === data.flag ? "4" == data.code ? $.dialog.error(data.msg) : data.code || ($(ids.split(",")).each(function () {
                                $('a.btn_attention[uid="' + this + '"]').removeClass().addClass("btn_attention attention_cancel"), $('a.link_attention[uid="' + this + '"]').html("取消关注").removeClass("attention_enabled").addClass("attention_cancel"), $('span.lbl_attention_count[uid="' + this.userh_id + '"]').html(function () {
                                    return parseInt($(this).html()) + 1
                                }), $('a.btn-attention[data-uid="' + this + '"]').text("取消关注").removeClass("btn-attention-add").addClass("btn-attention-cancel"), $('span.lbl-attention[data-uid="' + this + '"]').html(function () {
                                    return parseInt($(this).html()) + 1
                                })
                            }), "company" === options.targetType ? options.callback && options.callback.call(null, data) : $.dialog.alert(options.msg, function () {
                                options.callback && options.callback.call(null, data)
                            })) : 0 === data.flag && ($.dialog.error(data.msg), delete options.callback, LT.Attention.get.call(null, ids, options))
                        }
                    })
                }
            })
        }, remove: function () {
            var i, options = {
                user_kinds: ["0", "1", "2"],
                auto: !0,
                callback: null,
                deny: null,
                error: null
            }, user_kind = "", ids = "", url = "", denyMsg = "抱歉，此功能仅供$使用！";
            if (arguments.length < 1)return !1;
            for (ids = String(arguments[0] || ""), i = 1; i < arguments.length; i++)Array.isArray(arguments[i]) ? options.user_kinds = arguments[i] : LT.Object.isBoolean(arguments[i]) ? options.auto = arguments[i] : LT.Object.isObject(arguments[i]) ? LT.Object.extend(options, arguments[i]) : LT.Object.isFunction(arguments[i]) && (options.callback = arguments[i]);
            denyMsg = denyMsg.replace(/\$/g, options.user_kinds.join().replace(/0/g, "经理人").replace(/1/g, "企业用户").replace(/2/g, "猎头用户").replace(/,/g, "和")), LT.User.requireLogin(function () {
                if (user_kind = LT.User.user_kind, -1 === options.user_kinds.indexOf(user_kind))return void $.dialog.error(denyMsg, function () {
                    options.deny && options.deny.call(options)
                });
                if ("0" == user_kind) {
                    switch (options.targetType) {
                        case"company":
                            url = "connection/cancel-b.json";
                            break;
                        default:
                            url = "connection/removeattention.json"
                    }
                    LT.ajax({
                        url: LT.Env.snsRoot + url,
                        type: "POST",
                        data: {userh_ids: ids},
                        dataType: "json",
                        cache: !1,
                        success: function (data) {
                            "1" == data.flag ? ($(ids.split(",")).each(function () {
                                $('a.btn_attention[uid="' + this + '"]').removeClass().addClass("btn_attention attention_enabled"), $('a.link_attention[uid="' + this + '"]').html("关注").removeClass("attention_cancel").addClass("attention_enabled"), $('span.lbl_attention_count[uid="' + this + '"]').html(function () {
                                    return parseInt($(this).html()) - 1
                                }), $('a.btn-attention[data-uid="' + this + '"]').text("关注").removeClass("btn-attention-cancel").addClass("btn-attention-add"), $('span.lbl-attention[data-uid="' + this + '"]').html(function () {
                                    return parseInt($(this).html()) - 1
                                })
                            }), $.dialog.alert("取消关注成功！", function () {
                                options.callback && options.callback.call(options, data)
                            })) : $.dialog.error(data.msg || data.err, function () {
                                options.error && options.error.call(options, data)
                            })
                        }
                    })
                }
            })
        }, seek: function () {
            var i, arg, options = {uid: 0, success: null, error: null};
            for (i = 0; i < arguments.length; i++)arg = arguments[i], LT.Object.isNumber(arg) || LT.Object.isString(arg) ? options.uid = arg : LT.Object.isObject(arg) ? LT.Object.extend(options, arg) : LT.Object.isFunction(arg) && (options.success = arg);
            return options.uid ? void LT.ajax({
                url: LT.Env.cRoot + "message/editattentionrequest.json",
                type: "POST",
                data: "userHId=" + options.uid,
                dataType: "json",
                success: function (data) {
                    var _data, tplData;
                    1 === data.flag ? (_data = data.data || {}, options.isDraftResume = _data.isDraftResume, options.userHName = _data.userHName, 1 == options.isDraftResume ? $.dialog({
                        title: "提示信息",
                        content: '<div style="padidng:20px 0 30px; font-size:14px;">您的简历不完善，完善简历后才能求关注！</div>',
                        lock: !0,
                        okVal: "立即完善简历",
                        ok: function () {
                            window.location.href = LT.Env.cRoot + "resume/getdefaultresume/"
                        },
                        cancel: !0
                    }) : (tplData = {
                        uid: options.uid,
                        hName: options.userHName,
                        success: options.success,
                        error: options.error
                    }, NodeTpl.get("//concat.lietou-static.com/dev/sns/pc/revs/v1/tpls/connection/seek_attention_2c7d0544.js", tplData, function (d) {
                        $.dialog({title: "邀请猎头关注我", content: d, lock: !0})
                    }))) : $.dialog.error(data.msg)
                }
            }) : this
        }
    }, Message: {
        send: function () {
            var formdata, i, j, callback, that = this, ids = "", options = {
                user_kinds: ["0", "2"],
                message_kind: "00",
                source: "",
                showface: !0,
                callback: null,
                error: null,
                deny: null
            }, user_kind = "", denyMsg = "抱歉，此功能仅供$使用！";
            if (arguments.length < 1)return !1;
            for (i = 0; i < arguments.length; i++)if (null != arguments[i])if (LT.Object.isString(arguments[i]))ids = arguments[i]; else if (Array.isArray(arguments[i]))for (formdata = arguments[i], j = 0; j < formdata.length; j++)"receiver.userId" === formdata[j].name && (ids = formdata[j].value); else LT.Object.isObject(arguments[i]) ? LT.Object.extend(options, arguments[i]) : LT.Object.isFunction(arguments[i]) && (options.callback = arguments[i]);
            denyMsg = denyMsg.replace(/\$/g, options.user_kinds.join(",").replace(/0/g, "经理人").replace(/1/g, "企业用户").replace(/2/g, "猎头用户").replace(/,/g, "和")), callback = function (data) {
                formdata ? that.post.call(this, formdata, data) : that.save.call(this, data)
            }, that.save = function (data) {
                var title = "2" == this.message_kind ? "委托简历" : "发私信", message = "很高兴认识您，有任何问题欢迎交流沟通。";
                data = data || {}, LT.Object.extend(data, this, {message: message}), NodeTpl.get("//concat.lietou-static.com/dev/c/pc/revs/v1/tpls/message/message_send_7202acf7.js", data, function (d) {
                    $.dialog({title: title, content: d, lock: !0})
                })
            }, that.post = function (formdata, predata) {
                var options = this;
                LT.ajax({
                    url: LT.Env.cRoot + "message/publish.json",
                    type: "POST",
                    data: formdata,
                    dataType: "json",
                    cache: !1,
                    success: function (data) {
                        if (1 === data.flag) {
                            var _data = data.data || {};
                            if (1 === _data.biz)options.callback && options.callback.call(options, _data, predata); else if (_data.code)switch (_data.code) {
                                case 100123005:
                                case 100123006:
                                    NodeTpl.get("//concat.lietou-static.com/dev/c/pc/revs/v1/tpls/goldcard/tobe_goldcard_49b44979.js", {showtype: "leavemessage"}, function (d) {
                                        $.dialog({title: "升级金卡会员", content: d, lock: !0})
                                    });
                                    break;
                                default:
                                    options.error && options.error.call(options, _data)
                            } else options.error && options.error.call(options, _data)
                        } else"11007" === data.code ? $.dialog({
                            title: !1,
                            content: '<p class="text-center">您的简历尚未完善，无法使用私信功能</p><p class="text-center">请先完善您的简历</p>',
                            ok: function () {
                                window.location.href = LT.Env.cRoot + "resume/getdefaultresume/"
                            },
                            cancel: function () {
                                this.close()
                            }
                        }) : options.error && options.error.call(options, data)
                    }
                })
            }, LT.User.requireLogin(function () {
                return user_kind = LT.User.user_kind, -1 === options.user_kinds.indexOf(user_kind) ? void $.dialog.error(denyMsg, function () {
                    options.deny && options.deny.call(options)
                }) : void("0" == user_kind && LT.ajax({
                    url: LT.Env.cRoot + "message/sendmessagepopview.json",
                    type: "POST",
                    data: {to_user_id: ids, message_kind: options.message_kind},
                    dataType: "json",
                    cache: !1,
                    success: function (data) {
                        var _data, SendProccess;
                        if (data && 1 === data.flag) {
                            if (_data = data.data || {}, 2 === _data.biz)return void $.dialog.alert('您目前暂未达到猎头顾问搜寻人选的条件，建议您通过<br />应聘企业职位的方式获得发展机会。&nbsp;&nbsp;<a href="' + LT.Env.wwwRoot + 'zhaopin/?salary=0$10&jobKind=2">搜索企业职位</a>');
                            if (SendProccess = function () {
                                    callback && callback.call(options, _data)
                                }, !(_data.goldcard || _data.cVerify || 3 === _data.attention_status || _data.maxCount || 0 == _data.receiver.user_kind || _data.isBindWeixin))return void NodeTpl.get("//concat.lietou-static.com/dev/c/pc/revs/v1/tpls/message/wesion_before_send_7ae78163.js", {
                                callback: function () {
                                    SendProccess()
                                }, wxurl: _data.wxQrResultDto.qrUrl
                            }, function (d) {
                                $.dialog({title: "绑定微信", padding: 0, content: d, lock: !0})
                            });
                            if (!_data.goldcard && !_data.cVerify && _data.receiver.majia && 3 !== _data.attention_status && !_data.maxCount)return void NodeTpl.get("//concat.lietou-static.com/dev/c/pc/revs/v1/tpls/goldcard/tobe_goldcard_49b44979.js", {showtype: "message-majia"}, function (d) {
                                $.dialog({title: "升级金卡会员", content: d, lock: !0})
                            });
                            !_data.goldcard && !_data.cVerify && 3 !== _data.attention_status && !_data.maxCount || 3 !== _data.attention_status && 0 == _data.receiver.user_kind ? NodeTpl.get("//concat.lietou-static.com/dev/c/pc/revs/v1/tpls/message/attention_before_send_b2db609f.js", {
                                to_user_id: ids,
                                to_user_kind: _data.receiver.user_kind,
                                attention_status: _data.attention_status,
                                callback: function () {
                                    SendProccess()
                                }
                            }, function (d) {
                                $.dialog({title: "相互关注", padding: 0, content: d, lock: !0})
                            }) : SendProccess()
                        } else $.dialog.alert(data.msg)
                    }
                }))
            })
        }
    }, Connection: {
        addColleage: function () {
            var options, callback, i;
            if (arguments.length < 4)return this;
            for (options = {
                connect_res_id: arguments[0],
                connected_res_id: arguments[1],
                connect_rwd_id: arguments[2],
                connected_rwd_id: arguments[3]
            }, i = 4; i < arguments.length; i++)LT.Object.isObject(arguments[i]) ? LT.Object.extend(options, arguments[i]) : LT.Object.isFunction(arguments[i]) && (callback = arguments[i]);
            LT.ajax({
                url: LT.Env.cRoot + "connection/addattentionandendorse/",
                dataType: "json",
                type: "POST",
                data: options,
                cache: !1,
                success: function (data) {
                    1 == data.flag ? callback && callback.call(this, data) : $.dialog.error(data.msg)
                },
                error: function () {
                    $.dialog.error("系统异常请稍后再试！")
                }
            })
        }, ignoreColleage: function () {
            var callback, i, options = {blackUserId: arguments[0], res_id_encode: arguments[1]};
            if (arguments.length < 1)return this;
            for (i = 2; i < arguments.length; i++)LT.Object.isObject(arguments[i]) ? LT.Object.extend(data, arguments[i]) : LT.Object.isFunction(arguments[i]) && (callback = arguments[i]);
            LT.ajax({
                url: LT.Env.snsRoot + "sns/addblacklist.json",
                dataType: "json",
                type: "POST",
                data: options,
                cache: !1,
                success: function (data) {
                    1 == data.flag ? callback && callback.call(this, data) : $.dialog.error(data.msg)
                }
            })
        }, checkColleage: function () {
            var i, options = {ids: "", success: null, error: null};
            if (0 === arguments.length)return this;
            for (options.ids = String(arguments[0] || ""), i = 1; i < arguments.length; i++)LT.Object.isObject(arguments[i]) ? LT.Object.extend(options, arguments[i]) : LT.Object.isFunction(arguments[i]) && (null == options.success ? options.success = arguments[i] : options.error = arguments[i]);
            LT.ajax({
                url: LT.Env.cRoot + "sns/getuserrealtiontags",
                type: "POST",
                data: {otheruser_ids: options.ids},
                dataType: "json",
                success: function (data) {
                    "1" == data.flag ? options.success && options.success.call(null, data.data) : options.error && options.error.call(null, data)
                }
            })
        }
    }
}, LT.Namespace("Relation"), LT.Relation.eventName = "click.relation", LT.Relation.dataName = "widget-Relation-data", LT.Relation.paramName = "widget-Relation-param", LT.Relation.init = function (selector) {
    var $newSelector = $(selector);
    this.$selector ? this.$selector = this.$selector.add($newSelector) : this.$selector = $newSelector, this.getStatus($newSelector)
}, LT.Relation.getStatus = function ($newSelector) {
    var ids = [], _this = this;
    $newSelector.each(function () {
        var param = $(this).data(_this.dataName) || $(this).data(_this.paramName);
        ids.push(param.user_id)
    }), ids.length && LT.Ajax({
        url: LT.Env.snsRoot + "connection/getuserrealtion.json",
        type: "POST",
        data: "otheruser_ids=" + ids.join(),
        dataType: "json",
        success: function (data) {
            1 == data.flag && (_this.upStatus($newSelector, data.data), _this.event($newSelector))
        }
    })
}, LT.Relation.upStatus = function ($selector, data) {
    var _this = this;
    $selector.each(function () {
        var param = $(this).data(_this.dataName) || $(this).data(_this.paramName), user_id = param.user_id, user_kind = Number(param.user_kind), relation = Number(data[String(param.user_id)]);
        if (0 == user_kind)switch (relation) {
            case 0:
                break;
            case 1:
                $(this).replaceWith($('<i class="icons24 icons24-success"></i><span class="text-success">已发送邀请</span>'));
                break;
            case 2:
                $(this).html("发私信").addClass("widget-btn-message");
                break;
            case 3:
        } else switch (relation) {
            case 0:
                $(this).html("+关注");
                break;
            case 1:
                $(this).replaceWith($('<i class="icons24 icons24-success"></i><span class="text-success">已关注</span>'));
                break;
            case 2:
                $(this).html("发私信").addClass("widget-btn-message");
                break;
            case 3:
                $(this).html("+关注")
        }
        $(this).data(_this.dataName, {relation: relation, user_kind: user_kind, user_id: user_id})
    }), this.refresh($selector)
}, LT.Relation.event = function ($newSelector) {
    var _this = this;
    $newSelector.unbind(this.eventName).bind(this.eventName, function () {
        var data = $(this).data(_this.dataName), relation = data.relation || 0, param = $(this).data(_this.paramName), userKind = data.user_kind;
        if (0 == userKind)switch (relation) {
            case 0:
                _this.add(data.user_id, param, function () {
                    _this.reload(data.user_id), LT.UserCard.reload(data.user_id)
                });
                break;
            case 1:
                break;
            case 2:
                LT.Message.send(data.user_id, param);
                break;
            case 3:
                _this.agree(data.user_id, function () {
                    _this.reload(data.user_id), LT.UserCard.reload(data.user_id)
                })
        } else switch (relation) {
            case 0:
                LT.Attention.add(data.user_id, function () {
                    _this.reload(data.user_id), LT.UserCard.reload(data.user_id)
                });
                break;
            case 1:
                break;
            case 2:
                LT.Message.send(data.user_id, param);
                break;
            case 3:
                LT.Attention.add(data.user_id, function () {
                    _this.reload(data.user_id), LT.UserCard.reload(data.user_id)
                })
        }
    })
}, LT.Relation.add = function (id) {
    var i, len, args = Array.prototype.slice.call(arguments, 1), callback = function () {
    }, extendObj = {};
    if (args.length)for (i = 0, len = args.length; len > i; i++)"[object Function]" === Object.prototype.toString.call(args[i]) ? callback = args[i] : "[object Object]" === Object.prototype.toString.call(args[i]) && (extendObj = args[i]);
    LT.Ajax({
        url: LT.Env.snsRoot + "connection/beforeaddattention.json",
        type: "POST",
        data: "follower_id=" + id,
        dataType: "json",
        success: function (data) {
            var sendData;
            1 == data.flag ? (data = data.data, data.follower_id = id, sendData = LT.Object.extend(extendObj, data, {
                follower_id: id,
                success: callback
            }), LT.User.requireLogin(function () {
                NodeTpl.get("//concat.lietou-static.com/dev/sns/pc/revs/v1/tpls/connection/relation_966c82ad.js", sendData, function (d) {
                    $.dialog({title: "申请加好友", content: d, lock: !0})
                })
            })) : $.dialog.error(data.msg)
        }
    })
}, LT.Relation.agree = function (id, callback) {
    LT.User.requireLogin(function () {
        LT.Ajax({
            url: LT.Env.snsRoot + "connection/agreeattention2.json",
            type: "POST",
            data: "follower_id=" + id,
            dataType: "json",
            success: function (data) {
                1 == data.flag ? callback && callback() : $.dialog.error(data.msg)
            }
        })
    })
}, LT.Relation.refuse = function (id, callback) {
    LT.User.requireLogin(function () {
        LT.Ajax({
            url: LT.Env.snsRoot + "connection/deletenotice.json",
            type: "POST",
            data: "notification_id=" + id,
            dataType: "json",
            success: function (data) {
                1 == data.flag && callback && callback()
            }
        })
    })
}, LT.Relation.remove = function (id, callback) {
    LT.User.requireLogin(function () {
        LT.Ajax({
            url: LT.Env.snsRoot + "connection/removeattention.json",
            type: "POST",
            data: "userh_ids=" + id,
            dataType: "json",
            success: function (data) {
                1 == data.flag ? callback && callback() : $.dialog.error(data.msg)
            }
        })
    })
}, LT.Relation.authenticate = function (id, callback) {
    LT.User.requireLogin(function () {
        LT.Ajax({
            url: LT.Env.snsRoot + "connection/authworkexp.json",
            type: "POST",
            data: "othserUserId=" + id,
            dataType: "json",
            success: function (data) {
                1 == data.flag ? callback && callback(data) : $.dialog.error(data.msg)
            }
        })
    })
}, LT.Relation.reload = function (userId) {
    var _this = this;
    this.$selector && this.$selector.each(function () {
        var data = $(this).data(_this.dataName);
        data.user_id == userId && _this.getStatus($(this).unbind(_this.eventName))
    })
}, LT.Relation.cacheCallback = [], LT.Relation.callbackClear = function () {
    this.cacheCallback.length = 0
}, LT.Relation.callback = function (fn, filter) {
    this.cacheCallback.push({callback: fn, filter: filter})
}, LT.Relation.refresh = function (elms) {
    var i, len, $elms;
    for (i = 0, len = this.cacheCallback.length; len > i; i++)$elms = elms.length ? elms : this.$selector, this.cacheCallback[i].filter && ($elms = $elms.filter(this.cacheCallback[i].filter)), this.cacheCallback[i].callback && this.cacheCallback[i]($elms)
}, LT.Namespace("UserCard"), LT.UserCard.dataName = "widget-UserCard-data", LT.UserCard.paramName = "widget-UserCard-param", LT.UserCard.init = function (selector) {
    var $newSelector = $(selector);
    this.$selector ? this.$selector = this.$selector.add($newSelector) : this.$selector = $newSelector, LT.File.Js.load("//concat.lietou-static.com/core/pc/revs/js/common/plugins/jquery.bubblenew_9d4b5801.js"), NodeTpl.get("//concat.lietou-static.com/dev/sns/pc/revs/v1/tpls/usercard/usercard_60cdc757.js"), this.event($newSelector)
}, LT.UserCard.event = function ($newSelector) {
    var _this = this, timer = "";
    $newSelector.bind("mouseenter.usercard", function () {
        var data = $(this).data(_this.dataName), $this = $(this), param = $(this).data(_this.paramName);
        data ? _this.showUserCard(data, $this) : timer = setTimeout(function () {
            LT.Ajax({
                url: LT.Env.snsRoot + "user/getUserNameCard.json",
                type: "POST",
                data: {user_id: param.user_id, user_kind: param.user_kind, degree: param.degree},
                dataType: "json",
                success: function (data) {
                    1 == data.flag ? ($this.data(_this.dataName, data.data), _this.showUserCard(data.data || {message: "由于用户设置，不能查看对方人脉名片"}, $this, data.flag)) : 2 == data.code && $this.data(_this.dataName, {message: "由于用户设置，不能查看对方人脉名片"})
                }
            })
        }, 500)
    }).bind("mouseleave.usercard", function () {
        clearTimeout(timer)
    })
}, LT.UserCard.showUserCard = function (data, elms, status) {
    this.ctrlTime && clearTimeout(this.ctrlTime), this.prevCard && this.prevCard.unbind("mouseenter.showUserCard mouseleave.showUserCard").undelegate().hide();
    var $elms = $(elms), _this = this;
    NodeTpl.get("//concat.lietou-static.com/dev/sns/pc/revs/v1/tpls/usercard/usercard_60cdc757.js", data, function (d) {
        LT.File.Js.load("//concat.lietou-static.com/core/pc/revs/js/common/plugins/jquery.bubblenew_9d4b5801.js", function () {
            var _plugin, $box, _para = {
                handler: !0,
                position: "br",
                content: d,
                close: !1,
                type: null,
                margin: 10,
                offset: !0,
                size: "medium",
                theme: "inverse"
            };
            (2 == status || void 0 != data.message) && (_para.content = data.message, _para.size = "small", _para.theme = "warning", _para.position = "tr"), $(elms).BubbleNew(_para), _plugin = $elms.data("plugin_BubbleNew"), $box = _plugin.bubble, $elms.bind("mouseleave.showUserCard", function () {
                return clearTimeout(_this.ctrlTime), _this.ctrlTime = setTimeout(function () {
                    $box.unbind("mouseenter.showUserCard mouseleave.showUserCard").undelegate().hide(), $elms.unbind("mouseenter.showUserCard mouseleave.showUserCard")
                }, 300), !1
            }), $box.bind("mouseleave.showUserCard", function () {
                return clearTimeout(_this.ctrlTime), _this.ctrlTime = setTimeout(function () {
                    $box.unbind("mouseenter.showUserCard mouseleave.showUserCard").undelegate().hide(), $elms.unbind("mouseenter.showUserCard mouseleave.showUserCard")
                }, 300), !1
            }).bind("mouseenter.showUserCard", function () {
                return clearTimeout(_this.ctrlTime), !1
            }).delegate('[data-selector="relation"]', "click", function () {
                var id = $(this).attr("data-id"), relation = $(this).attr("data-relation");
                0 == relation ? LT.Relation.add(id, function () {
                    LT.Relation.reload(id), _this.reload(id)
                }) : 3 == relation && LT.Relation.agree(id, function () {
                    LT.Relation.reload(id), _this.reload(id), $box.hide()
                })
            }).delegate('[data-selector="message"]', "click", function () {
                LT.Message.send($(this).attr("data-id"), $elms.data(_this.paramName))
            }), _this.prevCard = $box.show()
        })
    })
}, LT.UserCard.reload = function (userId) {
    var _this = this;
    this.$selector && this.$selector.each(function () {
        var data = $(this).data(_this.dataName);
        data && data.user_id == userId && $(this).data(_this.dataName, "")
    })
}, LT.File = {}, LT.File.loader = function () {
    function createScript(url, callback) {
        var urls, completeNum, ie6, i;
        if (url = url.trim(), urls = url ? url.split(/\s*,\s*/) : [], completeNum = 0, ie6 = window.VBArray && !window.XMLHttpRequest, callback = callback || function () {
                }, 0 === urls.length)callback instanceof Function && callback(); else for (i = 0; i < urls.length; i++)!function (_path) {
            var __path, _script;
            window.Version && window.Version.c && (_path += (-1 !== _path.indexOf("?") ? "&" : "?") + window.Version.c), __path = _path.replace(/\/r\/\d+/, ""), LT.File.Js.cache(__path) ? !function () {
                "loaded" === LT.File.Js.cache(__path) ? (completeNum++, completeNum >= urls.length ? callback() : "") : window.setTimeout(arguments.callee, 200)
            }() : (LT.File.Js.cache(__path, "loading"), _script = dc.createElement("script"), _script.type = "text/javascript", _script.readyState ? (_script.onreadystatechange = function () {
                ie6 && !this.getAttribute("initialized") && (dc.getElementsByTagName("head")[0].appendChild(_script), this.setAttribute("initialized", !0)), ("loaded" == this.readyState || "complete" == this.readyState) && (LT.File.Js.cache(__path, "loaded"), this.onreadystatechange = null, completeNum++, completeNum >= urls.length ? callback() : "")
            }, _script.src = _path, !ie6 && dc.getElementsByTagName("head")[0].appendChild(_script)) : (_script.src = _path, _script.onload = function () {
                LT.File.Js.cache(__path, "loaded"), completeNum++, completeNum >= urls.length ? callback() : ""
            }, dc.getElementsByTagName("head")[0].appendChild(_script)))
        }(urls[i])
    }

    function createLink(url, callback) {
        var urls, links, i;
        if (url = url.trim(), urls = url ? url.split(/\s*,\s*/) : [], links = [], callback = callback || function () {
                }, 0 === urls.length)callback instanceof Function && callback(); else {
            for (i = 0; i < urls.length; i++)links[i] = dc.createElement("link"), links[i].rel = "stylesheet", links[i].href = urls[i], dc.getElementsByTagName("head")[0].appendChild(links[i]);
            callback instanceof Function ? callback() : ""
        }
    }

    var dc = document;
    return {
        load: function (option, callback) {
            var _type = "", _url = "", _callback = callback;
            switch (option.type ? _type = option.type : "", option.url ? _url = option.url : "", "undefined" != typeof FileManager && FileManager.prefix && (_url = FileManager.prefix(_url)), "boolean" == typeof option.filtration ? filtration = option.filtration : "", _type) {
                case"js":
                case"javascript":
                    createScript(_url, _callback);
                    break;
                case"css":
                    createLink(_url, _callback)
            }
            return this
        }
    }
}, LT.File.Js = {
    _cache: {}, cache: function (name, value) {
        if (!name)throw new Error("LT.File.Js.cache -> name is null.");
        return value ? (this._cache[name] = value, this) : this._cache[name] || null
    }, load: function (namelist, callback) {
        var protocalReg, arr, that = this;
        return namelist ? (protocalReg = /^(?:https?:)?\/\//, arr = namelist.split(/\s*,\s*/).map(function (v) {
            return protocalReg.test(v) ? v : "//concat.lietou-static.com/pics/pc/" + v.substring(1)
        }), LT.File.loader().load({type: "js", url: arr.join(",")}, callback), that) : that
    }
}, LT.File.loadImage = function (imageUrl, callback) {
    var img = new Image;
    return img.src = imageUrl, img.complete ? void(callback && callback.apply(img)) : void(img.onload = function () {
        callback && callback.apply(img)
    })
}, LT.File.path = function (filepath) {
    return filepath
}, LT.Domain = {
    _crossed: !1, _cross: function () {
        try {
            document.domain = window.location.hostname.split(".").reverse().slice(0, 2).reverse().join("."), this._crossed = !0
        } catch (e) {
        }
    }, _needCross: function (host) {
        return host != location.hostname
    }, _root: function (host) {
        return host || (host = location.protocol + "//" + location.hostname, location.port && (host += ":" + location.port)), host.replace(/(https?:\/\/)?([^\/]+)(\s|\S)*/g, "$2")
    }, proxies: {}, init: function (hosts, callback) {
        var i, hostname, iframe, onloadEvent, that = this, hostarr = hosts.split(",");
        for (i = 0; i < hostarr.length; i++)hostname = hostarr[i], that._needCross(hostname) && (that._crossed || that._cross(), that.proxies[hostname] ? !function () {
            that.proxies[hostname].loaded ? callback && callback.call(that, hostname) : setTimeout(arguments.callee, 100)
        }() : (iframe = document.createElement("iframe"), iframe.style.display = "none", document.body.insertBefore(iframe, document.body.firstChild), iframe.src = "//" + hostname + "/ajaxproxy.html", that.proxies[hostname] = iframe, that.proxies[hostname].loaded = !1, onloadEvent = function () {
            iframe.contentWindow.location.href.replace(/^http[s]?:/, "") !== iframe.src.replace(/^http[s]?:/, "") ? iframe.contentWindow.location.href = iframe.src : (that.proxies[hostname] = iframe, that.proxies[hostname].loaded = !0, callback && callback.call(that, hostname))
        }, iframe.attachEvent ? iframe.attachEvent("onload", onloadEvent) : iframe.onload = onloadEvent))
    }, use: function (hostname, callback) {
        var that = this;
        that.proxies.xhr || (that.proxies.xhr = jQuery.ajaxSettings.xhr), that._needCross(hostname) ? that.proxies[hostname] && that.proxies[hostname].loaded ? ($.ajaxSetup({
            crossDomain: !1,
            xhr: function () {
                return "script" == this.dataType ? that.proxies.xhr() : that._root(this.url) == location.hostname ? that.proxies.xhr() : that.proxies[hostname].contentWindow.getTransport()
            }
        }), callback && callback.call(this)) : LT.Domain.init(hostname, function (host) {
            LT.Domain.use(host, callback)
        }) : callback && callback.call(this)
    }
}, LT.Ajax = LT.ajax = function (options) {
    LT.Object.extend(options, {}), 0 === options.url.indexOf("//") && (options.url = location.protocol + options.url), 0 !== options.url.indexOf("http") && (options.url = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + (-1 === options.url.indexOf("/") ? "/" + options.url : options.url));
    var host = options.url.replace(/(https?:\/\/)?([^\/]+)(\s|\S)*/g, "$2");
    return LT.Domain.use(host, function () {
        $.ajax(options)
    }), this
}, LT.ajaxExtend = function (obj, method, callback) {
    if (window.$ && obj && method) {
        var _method;
        obj = obj || {}, _method = obj[method], obj[method] = function () {
            _method && _method.apply(this, arguments), callback.apply(this, arguments)
        }
    }
}, LT.Ads = {init: !1}, LT.Ads.fillSlot = function () {
    var i, script, head, args = arguments, name = "lt_ads_", slots = [];
    if (0 !== args.length) {
        if (window.jQuery && LT.Object.isJQuery(args[0]))args[0].each(function () {
            var _slots, _slot, i, s;
            if ("sloted" === $(this).attr("sloted"))return !0;
            if (_slots = [], _slot = $(this).attr("slots"))_slots = _slots.concat(_slot.split(",")); else for (i = 1; i < args.length; i++)args[i] && (LT.Object.isArray(args[i]) && (_slots = _slots.concat(args[i])), LT.Object.isNumber(args[i]) && (_slots = _slots.concat(args[i].toString())), LT.Object.isString(args[i]) && (_slots = _slots.concat(args[i].split(","))));
            for (s = 0; s < _slots.length; s++)$("<div />").attr("id", name + _slots[s]).addClass("lt_ads").appendTo($(this));
            slots = slots.concat(_slots), $(this).attr("sloted", "sloted")
        }); else for (i = 0; i < args.length; i++)args[i] && (LT.Object.isArray(args[i]) && (slots = slots.concat(args[i])), LT.Object.isNumber(args[i]) && (slots = slots.concat(args[i].toString())), LT.Object.isString(args[i]) && (slots = slots.concat(args[i].split(","))));
        0 !== slots.length && (this.init || (script = document.createElement("script"), head = document.getElementsByTagName("head"), script.type = "text/javascript", script.src = "//cbjs.baidu.com/js/m.js", head.length > 0 && head[0].appendChild(script)), function () {
            var i, slot, sloter;
            if (window.BAIDU_CLB_fillSlotAsync)for (window.BAIDU_CLB_setConfig("domainPolicyFileUrl", "/ajaxproxy.html"), i = 0; i < slots.length; i++)slot = slots[i], sloter = name + slot, document.getElementById(sloter) && window.BAIDU_CLB_fillSlotAsync(slot, sloter); else window.setTimeout(arguments.callee, 500)
        }())
    }
}, function (window, document) {
    function LiepinAds() {
        var i, _LPADS = window._LPADS;
        if (this.config = {
                uuid: LT.Cookie.get("_uuid") || "",
                mscid: LT.Cookie.get("_mscid") || "",
                viewUrl: "//ad.liepin.com/adremote/recordingcnt/?adInstanceId=$adInstanceId$&uuid=$uuid$",
                clickUrl: "https://ad.liepin.com/adremote/forward/?adPositionId=$adPositionId$&adInstanceId=$adInstanceId$&uuid=$uuid$&mscid=$mscid$&userId=$user_id$",
                batchUrl: "//ad.liepin.com/adremote/batchoutput/?ids=$adPositionIds$&uuid=$uuid$&mscid=$mscid$&userId=$user_id$"
            }, this.slots = [], _LPADS && "[object Array]" === Object.prototype.toString.call(_LPADS))for (i = 0; i < _LPADS.length; i++)this.push(_LPADS[i]);
        this.init()
    }

    LiepinAds.prototype.init = function () {
        var that = this, slotsIds = [];
        window.$ && $('[id^="LPAdSlots-"]').each(function () {
            var id = this.id.replace("LPAdSlots-", "");
            slotsIds.push(id)
        }), that.push(slotsIds.join(","))
    }, LiepinAds.prototype.ready = function (ids) {
        var element, user_id, _tempArr, idsArr = [], readyArr = [], i = 0;
        if ("number" == typeof ids && (ids = ids.toString()), "string" != typeof ids)return this;
        for (idsArr = ids.split(","), i = 0; i < idsArr.length; i++)element = document.getElementById("LPAdSlots-" + idsArr[i]), element && "loaded" !== element.getAttribute("data-loaded") && (element.setAttribute("data-loaded", "loaded"), readyArr.push(idsArr[i]));
        if (user_id = LT.Cookie.get("user_id") || "", LT.Browser.IE6)for (_tempArr = [], i = 0; i < readyArr.length; i++)_tempArr.push(readyArr[i]), (i % 20 === 0 || i === readyArr.length - 1) && (this.get(this.config.batchUrl.replace(/\$adPositionIds\$/gi, _tempArr.join(",")).replace(/\$uuid\$/gi, this.config.uuid).replace(/\$mscid\$/gi, this.config.mscid).replace(/\$user_id\$/gi, user_id)), _tempArr = []); else readyArr.length > 0 && this.get(this.config.batchUrl.replace(/\$adPositionIds\$/gi, readyArr.join(",")).replace(/\$uuid\$/gi, this.config.uuid).replace(/\$mscid\$/gi, this.config.mscid).replace(/\$user_id\$/gi, user_id));
        return this
    }, LiepinAds.prototype.push = function () {
        var i, _args = arguments;
        if (1 !== _args.length)return this;
        if (_args = _args[0], "[object Array]" === Object.prototype.toString.call(_args))for (i = 0; i < _args.length; i++)this.push(_args[i]); else"object" == typeof _args ? (this.slots.push(_args), this.flush()) : this.ready(_args);
        return this
    }, LiepinAds.prototype.flush = function () {
        for (var html, element, ad, clickUrl, viewUrl, slot, user_id, img; this.slots.length > 0;)if (clickUrl = this.config.clickUrl, viewUrl = this.config.viewUrl, slot = this.slots.shift() || {}, user_id = LT.Cookie.get("user_id") || "", slot.id && (ad = LT.Object.isArray(slot.ads) ? slot.ads[Math.floor(Math.random() * slot.ads.length)] : LT.Object.isObject(slot.ads) ? slot.ads : {}, element = document.getElementById("LPAdSlots-" + slot.id)))if (slot.active && "undefined" != typeof ad.id) {
            switch (element.setAttribute("data-completed", "completed"), LT.Dom.addClass(element, "LPAdSlots"), slot.size && (/^(auto|\d+%?)$/g.test(slot.size.width) && (element.style.width = "auto" === slot.size.width ? slot.size.width : slot.size.width + "px"), /^(auto|\d+%?)$/g.test(slot.size.height) && (element.style.height = "auto" === slot.size.height ? slot.size.height : slot.size.height + "px")), clickUrl = clickUrl.replace(/\$adPositionId\$/gi, slot.id).replace(/\$adInstanceId\$/gi, ad.id).replace(/\$uuid\$/gi, this.config.uuid).replace(/\$mscid\$/gi, this.config.mscid).replace(/\$user_id\$/gi, user_id), viewUrl = viewUrl.replace(/\$adInstanceId\$/gi, ad.id).replace(/\$uuid\$/gi, this.config.uuid), slot.type) {
                case 0:
                    html = '<a href="' + clickUrl + '" target="_blank"><img src="' + ad.content.replace(/^https?:/, "") + '" width="' + slot.size.width + '" height="' + slot.size.height + '" /></a>';
                    break;
                case 1:
                    html = '<a href="' + clickUrl + '" target="_blank">' + ad.content + "</a>"
            }
            html && (element.innerHTML = html, img = document.createElement("img"), img.src = viewUrl + "&" + Math.random())
        } else element.parentNode.removeChild(element)
    }, LiepinAds.prototype.get = function (url, callback) {
        var _script = document.createElement("script");
        return _script.type = "text/javascript", url += "&" + Math.random(), _script.readyState ? (_script.onreadystatechange = function () {
            LT.Browser.IE6 && !this.getAttribute("initialized") && (document.getElementsByTagName("head")[0].appendChild(_script), this.setAttribute("initialized", !0)), ("loaded" === this.readyState || "complete" === this.readyState) && (this.onreadystatechange = null, callback && callback())
        }, _script.src = url, !LT.Browser.IE6 && document.getElementsByTagName("head")[0].appendChild(_script)) : (_script.src = url, _script.onload = function () {
            callback && callback()
        }, document.getElementsByTagName("head")[0].appendChild(_script)), this
    }, LT.Dom.ready(function () {
        window._LPADS = new LiepinAds
    })
}(window, document), function (window, document) {
    var _d = function (str) {
        return str.split("").reverse().join("")
    }, name = _d("ag");
    window[name] = function (action, value) {
        var obj = window[name], init = function () {
            var s, h, hash, index;
            try {
                hash = LT.String.md5(obj.id), index = Math.floor(Math.random() * (hash.length - 5)), hash = hash.substring(index, index + 5), s = obj.domain === _d("pre") ? _d("-citsitats//") + (obj.domain || "www") + _d("?ag/moc.uoteil.") + hash : _d("-citsitats//") + (obj.domain || "www") + _d("?ag/moc.nipeil.") + hash, obj.__inited = 0, document.write(unescape('%3Cscript src="' + s + ' "%3E%3C/script%3E'))
            } catch (e) {
            }
        }, deserialize = function (data) {
            var j, result = [];
            try {
                if (data === _d("weivegap"))return "";
                for (j = 1; j < data.length; j += 2)result.push(String.fromCharCode(parseInt(data.substring(j, j + 2), 16).toString(10)));
                return result = result.reverse().join(""), result = "G" === data.substring(0, 1) ? ".c-" + result : "H" === data.substring(0, 1) ? ".r-" + result : ".e--"
            } catch (e) {
                return ".e--"
            }
        }, fetch = function () {
            var arr, i, style, h, css = "";
            try {
                if (!value)return;
                if (arr = value.match(/[GH]([^GH]+)/g) || [], 0 === arr.length)return;
                for (i = 0; i < arr.length; i++)arr[i] = deserialize(arr[i]);
                if (h = document.getElementsByTagName(_d("daeh"))[0], !h)return;
                for (style = document.createElement(_d("elyts")), style.type = _d("ssc/txet"),
                         h.appendChild(style), css = arr.join(",") + _d("};tnatropmi! enon:yalpsid{"), style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), obj.__inited = 1, i = 0; i < obj.__queue.length; i++)obj.__queue[i]()
            } catch (e) {
            }
        };
        switch (action) {
            case _d("etaerc"):
                obj.id = value;
                break;
            case _d("niamod"):
                obj.domain = value;
                break;
            case _d("dnes"):
                init();
                break;
            case _d("kcart"):
                fetch()
        }
    }, window[name].__inited = -1, window[name].__queue = [], window[name].then = function (fn) {
        return "function" == typeof fn && (1 === this.__inited ? fn() : this.__queue.push(fn)), this
    }, window[name].on = function (event, fn) {
        return "error" === event && "function" == typeof fn && 0 === this.__inited && fn(), this
    }, window[name].toString = function () {
        return ""
    }
}(window, document), LT.Error = {
    track: function () {
    }
}, LT.Cat = {
    track: function (url, params) {
        return -1 !== navigator.userAgent.indexOf("Baiduspider") ? !1 : void((new Image).src = url + "?" + LT.Object.toQueryString(params) + "&" + Math.random())
    }, catchJs: function (message, url, line) {
        var user_id = LT.User.user_id;
        return LT.Cat.track("//cat-app.liepin.com/broker-service/api/js", {
            v: 1,
            timestamp: (new Date).valueOf(),
            error: message + "url:" + location.href + ",file:" + url + ",line:" + line + "," + (user_id ? ",userid:" + user_id : ""),
            file: url,
            url: location.href,
            line: line,
            data: ""
        }), !1
    }, catchAjaxError: function (url, times, status, code) {
        var user_id = LT.User.user_id;
        LT.Cat.track("//cat-app.liepin.com/broker-service/api/js", {
            v: 1,
            timestamp: (new Date).valueOf(),
            error: "[AjaxError]url:" + url + ",times:" + times + ",status:" + status + ",code:" + code + (user_id ? ",userid:" + user_id : ""),
            file: url,
            url: location.href,
            line: 0,
            data: ""
        })
    }, catchAjax: function (url, times, status) {
        LT.Cat.track("//cat-app.liepin.com/broker-service/api/single", {
            v: 1,
            ts: (new Date).valueOf(),
            tu: url,
            d: times,
            hs: status,
            ec: ""
        })
    }
}, window.onerror = LT.Cat.catchJs, LT.Dom.ready(function () {
    window.$ && $.ajaxSettings && (LT.ajaxExtend($.ajaxSettings, "beforeSend", function (jqXHR, settings) {
        jqXHR && (jqXHR._startTime = (new Date).valueOf())
    }), LT.ajaxExtend($.ajaxSettings, "complete", function (jqXHR, textStatus) {
        var url = this.url;
        jqXHR && jqXHR._startTime && this.cat && (/^\//.test(this.url) && (url = location.protocol + "//" + location.hostname + url), LT.Cat.catchAjax(url, (new Date).valueOf() - jqXHR._startTime, textStatus))
    }), LT.ajaxExtend($.ajaxSettings, "error", function (jqXHR, textStatus, errorThrown) {
        var url = this.url;
        jqXHR && jqXHR._startTime && (/^\//.test(this.url) && (url = location.protocol + "//" + location.hostname + url), "abort" !== textStatus && LT.Cat.catchAjaxError(url, (new Date).valueOf() - jqXHR._startTime, textStatus, errorThrown))
    }))
}), LT.Widget = {
    selector: "[data-widget]", endSelector: '[data-widget-inited="true"]', init: function (selector) {
        var $selector, moduleGroup, _this, hasOwnProperty, i;
        this.locked = 1, $selector = $(selector || this.selector), moduleGroup = {}, _this = this, $selector.each(function () {
            var param = $(this).attr("data-param"), objParam = _this.parseParam(param), module = objParam.module;
            module in moduleGroup || (moduleGroup[module] = $(this).attr("data-widget")), $(this).data("widget-" + module + "-param", objParam)
        }), hasOwnProperty = Object.hasOwnProperty;
        for (i in moduleGroup)hasOwnProperty.call(moduleGroup, i) && LT[i] && LT[i].init && LT[i].init($selector.filter('[data-widget="' + moduleGroup[i] + '"]'));
        $selector.attr("data-widget-inited", "true"), this.locked = 0
    }, parseParam: function (str) {
        var obj, tmpArr, i, len, tmpStr;
        if ("" !== str.trim()) {
            for (obj = {}, tmpArr = str.split("&"), i = 0, len = tmpArr.length; len > i; i++)tmpStr = tmpArr[i].split("="), tmpStr.length && tmpStr[0] && (obj[tmpStr[0]] = tmpStr[1]);
            return obj
        }
        return ""
    }, refresh: function (fn) {
        var _this = this;
        this.locked && setTimeout(function () {
            _this.refresh(fn)
        }, 100), this.init($(this.selector).not(this.endSelector)), fn && fn()
    }
}, LT.Dom.ready(function () {
    LT.Widget.init()
}), LT.Namespace("Comet"), LT.Comet.fileLoaded = !1, LT.Comet.socket = null, LT.Comet.init = function (callback) {
    var _this = this;
    LT.User.isLogin && !this.fileLoaded && LT.File.Js.load("//concat.lietou-static.com/core/pc/revs/js/common/socket.io/socket.io-1.3.5_ec594969.js", function () {
        _this.fileLoaded = !0, _this.connect(callback)
    })
}, LT.Comet.connect = function (callback) {
    if (this.fileLoaded) {
        if (window.io) {
            var ie = navigator.userAgent.match(/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(\d+)/i);
            ie && ie[2] < 10 ? this.socket = window.io.connect && window.io.connect("//comet.liepin.com", {
                    transports: ["polling"],
                    upgrade: !1,
                    reconnectionDelay: 1e4,
                    reconnectionDelayMax: 1e4,
                    reconnectionAttempts: 5,
                    randomizationFactor: 1,
                    query: {url: window.location.href}
                }) : this.socket = window.io.connect && window.io.connect("//comet.liepin.com", {
                    transports: ["websocket"],
                    rememberUpgrade: !0,
                    reconnectionDelay: 1e4,
                    reconnectionDelayMax: 1e4,
                    reconnectionAttempts: 5,
                    randomizationFactor: 1,
                    query: {url: window.location.href}
                }), callback && callback()
        }
    } else this.init(callback)
}, LT.Comet.getSocket = function () {
    return this.socket
}, LT.Comet.on = function (type, listener) {
    var _this = this;
    this.socket ? this.socket.on(type, listener) : this.connect(function () {
        _this.socket.on(type, listener)
    })
}, LT.Comet.off = function (type) {
    this.socket.off(type)
}, window.$ && LT.Dom.ready(function () {
    $.ajaxSettings && (LT.ajaxExtend($.ajaxSettings, "beforeSend", function () {
        var url = this.url, data = this.data || "", __key = "__mn__", fieldName = "", fieldValue = "";
        -1 !== url.indexOf(__key) && (fieldName = LT.String.getQuery(__key, url), "" !== fieldName && (fieldValue = "GET" === this.type.toUpperCase() ? LT.String.getQuery(fieldName, url) || "" : LT.String.getQuery(fieldName, data) || "", "" !== fieldValue && LT.String.encryptMobile(fieldName, fieldValue)))
    }), LT.ajaxExtend($.ajaxSettings, "beforeSend", function () {
        this.mask && $.fn.LoadingUI && this.mask.LoadingUI("show")
    }), LT.ajaxExtend($.ajaxSettings, "complete", function (jqXHR, textStatus) {
        this.mask && $.fn.LoadingUI && this.mask.LoadingUI("hide")
    }), LT.ajaxExtend($.ajaxSettings, "complete", function (jqXHR, textStatus) {
        var loginUrl, verifyUrl;
        jqXHR && jqXHR.getAllResponseHeaders() && (loginUrl = jqXHR.getResponseHeader("LP_LOGIN_FORWARD") || "", loginUrl && (top.location.href = decodeURIComponent(loginUrl)), verifyUrl = jqXHR.getResponseHeader("LP-VERIFY-FORWARD") || "", verifyUrl && (top.location.href = decodeURIComponent(verifyUrl)))
    }));
    try {
        $("body").on("mousedown", "a[data-promid]", function () {
            var promid = $(this).attr("data-promid") || "", href = $(this).attr("href");
            promid && (href = href.replace(/[^#]+/, function (url) {
                return url + (-1 === url.indexOf("?") ? "?" : "&") + promid
            }), $(this).attr("href", href).removeAttr("data-promid"))
        })
    } catch (e) {
    }
});