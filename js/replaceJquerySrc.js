"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  function e(e, t, i, s) {
    Object.defineProperty(e, t, {
      get: i,
      set: s,
      enumerable: !0,
      configurable: !0
    });
  }

  var t,
      i,
      s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
      n = {},
      r = {},
      a = s.parcelRequiref6b1;
  null == a && ((a = function a(e) {
    if (e in n) return n[e].exports;

    if (e in r) {
      var t = r[e];
      delete r[e];
      var i = {
        id: e,
        exports: {}
      };
      return n[e] = i, t.call(i.exports, i, i.exports), i.exports;
    }

    var s = Error("Cannot find module '" + e + "'");
    throw s.code = "MODULE_NOT_FOUND", s;
  }).register = function (e, t) {
    r[e] = t;
  }, s.parcelRequiref6b1 = a);
  var o = a.register;

  function h(e, t, i, s, n, r, a) {
    try {
      var o = e[r](a),
          h = o.value;
    } catch (e) {
      i(e);
      return;
    }

    o.done ? t(h) : Promise.resolve(h).then(s, n);
  }

  function p(e) {
    return function () {
      var t = this,
          i = arguments;
      return new Promise(function (s, n) {
        var r = e.apply(t, i);

        function a(e) {
          h(r, s, n, a, o, "next", e);
        }

        function o(e) {
          h(r, s, n, a, o, "throw", e);
        }

        a(void 0);
      });
    };
  }

  function l(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : _typeof(e);
  }

  function c(e, t) {
    var i,
        s,
        n,
        r,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & n[0]) throw n[1];
        return n[1];
      },
      trys: [],
      ops: []
    };
    return r = {
      next: o(0),
      throw: o(1),
      return: o(2)
    }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
      return this;
    }), r;

    function o(o) {
      return function (h) {
        return function (o) {
          if (i) throw TypeError("Generator is already executing.");

          for (; r && (r = 0, o[0] && (a = 0)), a;) {
            try {
              if (i = 1, s && (n = 2 & o[0] ? s.return : o[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, o[1])).done) return n;

              switch (s = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                case 0:
                case 1:
                  n = o;
                  break;

                case 4:
                  return a.label++, {
                    value: o[1],
                    done: !1
                  };

                case 5:
                  a.label++, s = o[1], o = [0];
                  continue;

                case 7:
                  o = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                    a.label = o[1];
                    break;
                  }

                  if (6 === o[0] && a.label < n[1]) {
                    a.label = n[1], n = o;
                    break;
                  }

                  if (n && a.label < n[2]) {
                    a.label = n[2], a.ops.push(o);
                    break;
                  }

                  n[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              o = t.call(e, a);
            } catch (e) {
              o = [6, e], s = 0;
            } finally {
              i = n = 0;
            }
          }

          if (5 & o[0]) throw o[1];
          return {
            value: o[0] ? o[1] : void 0,
            done: !0
          };
        }([o, h]);
      };
    }
  }

  o("jVLb9", function (e, t) {
    e.exports = "export class Utils {\n    constructor(selector) {\n        this.elements = Utils.getSelector(selector);\n        this.element = this.get(0);\n        return this;\n    }\n\n    /* $$ Template START $$ */\n\n    each(func) {\n        if (!this.elements.length) {\n            return this;\n        }\n        this.elements.forEach((el, index) => {\n            func.call(el, el, index);\n        });\n        return this;\n    }\n\n    prev() {\n        if (!this.element) {\n            return this;\n        }\n        return new Utils(this.element.previousElementSibling);\n    }\n\n    next() {\n        if (!this.element) {\n            return this;\n        }\n        return new Utils(this.element.nextElementSibling);\n    }\n\n    prevAll(filter) {\n        if (!this.element) {\n            return this;\n        }\n        const sibs = [];\n        while ((this.element = this.element.previousSibling)) {\n            if (this.element.nodeType === 3) {\n                continue; // ignore text nodes\n            }\n            if (!filter || filter(this.element)) sibs.push(this.element);\n        }\n        return new Utils(sibs);\n    }\n\n    nextAll(filter) {\n        if (!this.element) {\n            return this;\n        }\n        const sibs = [];\n        let nextElem = this.element.parentNode.firstChild;\n        do {\n            if (nextElem.nodeType === 3) continue; // ignore text nodes\n            if (nextElem === this.element) continue; // ignore this.element of target\n            if (nextElem === this.element.nextElementSibling) {\n                if (!filter || filter(this.element)) {\n                    sibs.push(nextElem);\n                    this.element = nextElem;\n                }\n            }\n        } while ((nextElem = nextElem.nextSibling));\n        return new Utils(sibs);\n    }\n\n    closest(selector) {\n        if (!this.element) {\n            return this;\n        }\n        const matchesSelector =\n            this.element.matches ||\n            this.element.webkitMatchesSelector ||\n            this.element.mozMatchesSelector ||\n            this.element.msMatchesSelector;\n\n        while (this.element) {\n            if (matchesSelector.call(this.element, selector)) {\n                return new Utils(this.element);\n            }\n            this.element = this.element.parentElement;\n        }\n        return this;\n    }\n\n    parentsUntil(selector, filter) {\n        if (!this.element) {\n            return this;\n        }\n        const result = [];\n        const matchesSelector =\n            this.element.matches ||\n            this.element.webkitMatchesSelector ||\n            this.element.mozMatchesSelector ||\n            this.element.msMatchesSelector;\n\n        // match start from parent\n        let el = this.element.parentElement;\n        while (el && !matchesSelector.call(el, selector)) {\n            if (!filter) {\n                result.push(el);\n            } else if (matchesSelector.call(el, filter)) {\n                result.push(el);\n            }\n            el = el.parentElement;\n        }\n        return new Utils(result);\n    }\n\n    val(value) {\n        if (!this.element) {\n            return '';\n        }\n        if (value === undefined) {\n            return this.element.value;\n        }\n        this.element.value = value;\n    }\n\n    attr(name, value) {\n        if (value === undefined) {\n            if (!this.element) {\n                return '';\n            }\n            return this.element.getAttribute(name);\n        }\n        this.each((el) => {\n            el.setAttribute(name, value);\n        });\n        return this;\n    }\n\n    removeAttr(attributes) {\n        const attrs = attributes.split(' ');\n        this.each((el) => {\n            attrs.forEach((attr) => el.removeAttribute(attr));\n        });\n        return this;\n    }\n\n    hasAttribute(attribute) {\n        if (!this.element) {\n            return false;\n        }\n        return this.element.hasAttribute(attribute);\n    }\n\n    data(name, value) {\n        return this.attr('data-'+name, value);\n    }\n\n    css(css, value) {\n        if (value !== undefined) {\n            this.each((el) => {\n                Utils.setCss(el, css, value);\n            });\n            return this;\n        }\n        if (typeof css === 'object') {\n            for (const property in css) {\n                if (Object.prototype.hasOwnProperty.call(css, property)) {\n                    this.each((el) => {\n                        Utils.setCss(el, property, css[property]);\n                    });\n                }\n            }\n            return this;\n        }\n        const cssProp = Utils.camelCase(css);\n        const property = Utils.styleSupport(cssProp);\n        return getComputedStyle(this.element)[property];\n    }\n\n    addClass(classNames = '') {\n        this.each((el) => {\n            // IE doesn't support multiple arguments\n            classNames.split(' ').forEach((className) => {\n                el.classList.add(className);\n            });\n        });\n        return this;\n    }\n\n    removeClass(classNames) {\n        this.each((el) => {\n            // IE doesn't support multiple arguments\n            classNames.split(' ').forEach((className) => {\n                el.classList.remove(className);\n            });\n        });\n        return this;\n    }\n\n    hasClass(className) {\n        if (!this.element) {\n            return false;\n        }\n        return this.element.classList.contains(className);\n    }\n\n    toggleClass(className) {\n        if (!this.element) {\n            return this;\n        }\n        this.element.classList.toggle(className);\n    }\n\n    find(selector) {\n        return new Utils(Utils.getSelector(selector, this.element));\n    }\n\n    first() {\n        return new Utils(this.elements[0]);\n    }\n\n    eq(index) {\n        return new Utils(this.elements[index]);\n    }\n\n    parent() {\n        return new Utils(this.element.parentElement);\n    }\n\n    offsetParent() {\n        if (!this.element) {\n            return this;\n        }\n        return new Utils(this.element.offsetParent);\n    }\n\n    children() {\n        return new Utils(this.element.children);\n    }\n\n    get(index) {\n        if (index !== undefined) {\n            return this.elements[index];\n        }\n        return this.elements;\n    }\n\n    siblings() {\n        if (!this.element) {\n            return this;\n        }\n        const elements = Array.prototype.filter.call(\n            this.element.parentNode.children,\n            (child) => child !== this.element\n        );\n        return new Utils(elements);\n    }\n\n    index() {\n        if (!this.element) return -1;\n        let i = 0;\n        do {\n            i++;\n        } while ((this.element = this.element.previousElementSibling));\n        return i;\n    }\n\n    wrap(className) {\n        this.each((el) => {\n            const wrapper = document.createElement('div');\n            wrapper.className = className;\n            el.parentNode.insertBefore(wrapper, el);\n            wrapper.appendChild(el);\n        });\n        return this;\n    }\n\n    unwrap() {\n        this.each((el) => {\n            const elParentNode = el.parentNode;\n\n            if (elParentNode !== document.body) {\n                elParentNode.parentNode.insertBefore(el, elParentNode);\n                elParentNode.parentNode.removeChild(elParentNode);\n            }\n        });\n        return this;\n    }\n\n    on(events, listener) {\n        events.split(' ').forEach((eventName) => {\n            this.each((el) => {\n                const tNEventName = Utils.setEventName(el, eventName);\n                if (!Array.isArray(Utils.eventListeners[tNEventName])) {\n                    Utils.eventListeners[tNEventName] = [];\n                }\n                Utils.eventListeners[tNEventName].push(listener);\n\n                // https://github.com/microsoft/TypeScript/issues/28357\n                if (el) {\n                    el.addEventListener(eventName.split('.')[0], listener);\n                }\n            });\n        });\n\n        return this;\n    }\n\n    one(event, listener) {\n        this.each((el) => {\n            new Utils(el).on(event, () => {\n                new Utils(el).off(event);\n                listener(event);\n            });\n        });\n        return this;\n    }\n\n    off(eventNames) {\n        Object.keys(Utils.eventListeners).forEach((tNEventName) => {\n            const currentEventName = Utils.getEventNameFromId(tNEventName);\n            eventNames.split(' ').forEach((eventName) => {\n                if (Utils.isEventMatched(eventName, currentEventName)) {\n                    this.each((el) => {\n                        if (\n                            Utils.getElementEventName(el, currentEventName) ===\n                            tNEventName\n                        ) {\n                            Utils.eventListeners[tNEventName].forEach(\n                                (listener) => {\n                                    el.removeEventListener(\n                                        currentEventName.split('.')[0],\n                                        listener\n                                    );\n                                }\n                            );\n                            delete Utils.eventListeners[tNEventName];\n                        }\n                    });\n                }\n            });\n        });\n        return this;\n    }\n\n    trigger(event, detail) {\n        if (!this.element) {\n            return this;\n        }\n        const eventName = event.split('.')[0];\n        const isNativeEvent =\n            typeof document.body['on'+eventName] !== 'undefined';\n        if (isNativeEvent) {\n            this.each((el) => {\n                el.dispatchEvent(new Event(eventName));\n            });\n            return this;\n        }\n        const customEvent = new CustomEvent(eventName, {\n            detail: detail || null,\n        });\n        this.each((el) => {\n            el.dispatchEvent(customEvent);\n        });\n        return this;\n    }\n\n    html(html) {\n        if (html === undefined) {\n            if (!this.element) {\n                return '';\n            }\n            return this.element.innerHTML;\n        }\n        this.each((el) => {\n            el.innerHTML = html;\n        });\n        return this;\n    }\n\n    text(text) {\n        if (text === undefined) {\n            if (!this.element) {\n                return '';\n            }\n            return this.element.textContent;\n        }\n        this.each((el) => {\n            el.textContent = text;\n        });\n        return this;\n    }\n\n    hide() {\n        this.each((el) => {\n            el.style.display = 'none';\n        });\n    }\n\n    show() {\n        this.each((el) => {\n            el.style.display = '';\n        });\n    }\n\n    clone() {\n        return new Utils(this.element.cloneNode(true));\n    }\n\n    append(html) {\n        this.each((el) => {\n            if (typeof html === 'string') {\n                el.insertAdjacentHTML('beforeend', html);\n            } else {\n                el.appendChild(html);\n            }\n        });\n        return this;\n    }\n\n    prepend(html) {\n        this.each((el) => {\n            if (typeof html === 'string') {\n                el.insertAdjacentHTML('afterbegin', html);\n            } else {\n                el.insertBefore(html, el.firstChild);\n            }\n        });\n        return this;\n    }\n\n    remove() {\n        this.each((el) => {\n            el.parentNode.removeChild(el);\n        });\n        return this;\n    }\n\n    empty() {\n        this.each((el) => {\n            el.innerHTML = '';\n        });\n        return this;\n    }\n\n    contains(child) {\n        return this.element !== child && this.element.contains(child);\n    }\n\n    is(el) {\n        if (typeof el === 'string') {\n            return (\n                this.element.matches ||\n                this.element.matchesSelector ||\n                this.element.msMatchesSelector ||\n                this.element.mozMatchesSelector ||\n                this.element.webkitMatchesSelector ||\n                this.element.oMatchesSelector\n            ).call(this.element, el);\n        }\n        return this.element === (el.element || el);\n    }\n\n    width() {\n        if (!this.element) {\n            return 0;\n        }\n        const style = window.getComputedStyle(this.element, null);\n        return parseFloat(style.width.replace('px', ''));\n    }\n\n    // Outer Width With Margin if margin is true\n    outerWidth(margin) {\n        if (!this.element) {\n            return 0;\n        }\n        if (margin !== undefined) {\n            let width = this.element.offsetWidth;\n            const style = window.getComputedStyle(this.element);\n\n            width +=\n                parseInt(style.marginLeft, 10) +\n                parseInt(style.marginRight, 10);\n            return width;\n        }\n        return this.element.offsetWidth;\n    }\n\n    height() {\n        if (!this.element) {\n            return 0;\n        }\n        const style = window.getComputedStyle(this.element, null);\n        return parseFloat(style.height.replace('px', ''));\n    }\n\n    outerHeight(margin) {\n        if (!this.element) {\n            return 0;\n        }\n        if (margin !== undefined) {\n            let height = this.element.offsetHeight;\n            const style = getComputedStyle(this.element);\n\n            height +=\n                parseInt(style.marginTop, 10) +\n                parseInt(style.marginBottom, 10);\n            return height;\n        }\n        return this.element.offsetHeight;\n    }\n\n    offset() {\n        if (!this.element) {\n            return {\n                left: 0,\n                top: 0,\n            };\n        }\n        const box = this.element.getBoundingClientRect();\n        return {\n            top:\n                box.top +\n                window.pageYOffset -\n                document.documentElement.clientTop,\n            left:\n                box.left +\n                window.pageXOffset -\n                document.documentElement.clientLeft,\n        };\n    }\n\n    position() {\n        return {\n            left: this.element.offsetLeft,\n            top: this.element.offsetTop,\n        };\n    }\n\n    static generateUUID() {\n        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {\n            // eslint-disable-next-line no-bitwise\n            const r = (Math.random() * 16) | 0;\n            // eslint-disable-next-line no-bitwise\n            const v = c === 'x' ? r : (r & 0x3) | 0x8;\n            return v.toString(16);\n        });\n    }\n\n    static setEventName(el, eventName) {\n        // Need to verify https://stackoverflow.com/questions/1915341/whats-wrong-with-adding-properties-to-dom-element-objects\n        const elementUUId = el.eventEmitterUUID;\n        const uuid = elementUUId || Utils.generateUUID();\n        // eslint-disable-next-line no-param-reassign\n        el.eventEmitterUUID = uuid;\n        return Utils.getEventName(eventName, uuid);\n    }\n\n    static getElementEventName(el, eventName) {\n        const elementUUId = el.eventEmitterUUID;\n        /* istanbul ignore next */\n        const uuid = elementUUId || Utils.generateUUID();\n        // eslint-disable-next-line no-param-reassign\n        el.eventEmitterUUID = uuid;\n        return Utils.getEventName(eventName, uuid);\n    }\n\n    static getEventName(eventName, uuid) {\n        return eventName+'__EVENT_EMITTER__'+uuid;\n    }\n\n    static getEventNameFromId(eventName) {\n        return eventName.split('__EVENT_EMITTER__')[0];\n    }\n\n    static getSelector(selector, context) {\n        if (selector && typeof selector !== 'string') {\n            if (selector.length !== undefined) {\n                return selector;\n            }\n            return [selector];\n        }\n        context = context || document;\n\n        // For performance reasons, use getElementById\n        // eslint-disable-next-line no-control-regex\n        const idRegex = /^#(?:[\\w-]|\\\\.|[^\\x00-\\xa0])*$/;\n        if (idRegex.test(selector)) {\n            const el = document.getElementById(selector.substring(1));\n            return el ? [el] : [];\n        }\n        return [].slice.call(context.querySelectorAll(selector) || []);\n    }\n\n    static styleSupport(prop) {\n        let vendorProp;\n        let supportedProp;\n        const capProp = prop.charAt(0).toUpperCase() + prop.slice(1);\n        const prefixes = ['Moz', 'Webkit', 'O', 'ms'];\n        let div = document.createElement('div');\n\n        if (prop in div.style) {\n            supportedProp = prop;\n        } else {\n            for (let i = 0; i < prefixes.length; i++) {\n                vendorProp = prefixes[i] + capProp;\n                if (vendorProp in div.style) {\n                    supportedProp = vendorProp;\n                    break;\n                }\n            }\n        }\n\n        div = null;\n        return supportedProp;\n    }\n\n    // https://gist.github.com/cballou/4007063\n    static setCss(el, prop, value) {\n        // prettier-ignore\n        let cssProperty = Utils.camelCase(prop);\n        cssProperty = Utils.styleSupport(cssProperty);\n        el.style[cssProperty] = value;\n    }\n\n    static camelCase(text) {\n        return text.replace(/-([a-z])/gi, (s, group1) => group1.toUpperCase());\n    }\n\n    static isEventMatched(event, eventName) {\n        const eventNamespace = eventName.split('.');\n        return event\n            .split('.')\n            .filter((e) => e)\n            .every((e) => eventNamespace.indexOf(e) !== -1);\n    }\n\n    /* $$ Template END $$ */\n}\n\nUtils.eventListeners = {};\n\nexport default function $utils(selector) {\n    return new Utils(selector);\n}\n";
  }), o("8NOO4", function (t, i) {
    e(t.exports, "isIdentifierStart", function () {
      return f;
    }), e(t.exports, "isIdentifierChar", function () {
      return m;
    }), e(t.exports, "TokenType", function () {
      return x;
    }), e(t.exports, "keywordTypes", function () {
      return b;
    }), e(t.exports, "tokTypes", function () {
      return S;
    }), e(t.exports, "lineBreak", function () {
      return k;
    }), e(t.exports, "lineBreakG", function () {
      return _;
    }), e(t.exports, "isNewLine", function () {
      return w;
    }), e(t.exports, "nonASCIIwhitespace", function () {
      return C;
    }), e(t.exports, "Position", function () {
      return O;
    }), e(t.exports, "SourceLocation", function () {
      return j;
    }), e(t.exports, "getLineInfo", function () {
      return R;
    }), e(t.exports, "defaultOptions", function () {
      return D;
    }), e(t.exports, "Parser", function () {
      return B;
    }), e(t.exports, "Node", function () {
      return ei;
    }), e(t.exports, "TokContext", function () {
      return er;
    }), e(t.exports, "tokContexts", function () {
      return ea;
    }), e(t.exports, "Token", function () {
      return eA;
    }), e(t.exports, "version", function () {
      return eL;
    }), e(t.exports, "parse", function () {
      return eV;
    }), e(t.exports, "parseExpressionAt", function () {
      return eO;
    }), e(t.exports, "tokenizer", function () {
      return ej;
    });
    var s = {
      3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
      5: "class enum extends super const export import",
      6: "enum",
      strict: "implements interface let package private protected public static yield",
      strictBind: "eval arguments"
    },
        n = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
        r = {
      5: n,
      "5module": n + " export import",
      6: n + " const class extends export import super"
    },
        a = /^in(stanceof)?$/,
        o = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        h = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
        p = RegExp("[" + o + "]"),
        l = RegExp("[" + o + h + "]");
    o = h = null;
    var c = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
        u = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

    function d(e, t) {
      for (var i = 65536, s = 0; s < t.length; s += 2) {
        if ((i += t[s]) > e) return !1;
        if ((i += t[s + 1]) >= e) return !0;
      }
    }

    function f(e, t) {
      return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && p.test(String.fromCharCode(e)) : !1 !== t && d(e, c)));
    }

    function m(e, t) {
      return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && l.test(String.fromCharCode(e)) : !1 !== t && (d(e, c) || d(e, u)))));
    }

    var x = function x(e, t) {
      void 0 === t && (t = {}), this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = t.binop || null, this.updateContext = null;
    };

    function g(e, t) {
      return new x(e, {
        beforeExpr: !0,
        binop: t
      });
    }

    var y = {
      beforeExpr: !0
    },
        v = {
      startsExpr: !0
    },
        b = {};

    function E(e, t) {
      return void 0 === t && (t = {}), t.keyword = e, b[e] = new x(e, t);
    }

    var S = {
      num: new x("num", v),
      regexp: new x("regexp", v),
      string: new x("string", v),
      name: new x("name", v),
      eof: new x("eof"),
      bracketL: new x("[", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      bracketR: new x("]"),
      braceL: new x("{", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      braceR: new x("}"),
      parenL: new x("(", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      parenR: new x(")"),
      comma: new x(",", y),
      semi: new x(";", y),
      colon: new x(":", y),
      dot: new x("."),
      question: new x("?", y),
      questionDot: new x("?."),
      arrow: new x("=>", y),
      template: new x("template"),
      invalidTemplate: new x("invalidTemplate"),
      ellipsis: new x("...", y),
      backQuote: new x("`", v),
      dollarBraceL: new x("${", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      eq: new x("=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      assign: new x("_=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      incDec: new x("++/--", {
        prefix: !0,
        postfix: !0,
        startsExpr: !0
      }),
      prefix: new x("!/~", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      logicalOR: g("||", 1),
      logicalAND: g("&&", 2),
      bitwiseOR: g("|", 3),
      bitwiseXOR: g("^", 4),
      bitwiseAND: g("&", 5),
      equality: g("==/!=/===/!==", 6),
      relational: g("</>/<=/>=", 7),
      bitShift: g("<</>>/>>>", 8),
      plusMin: new x("+/-", {
        beforeExpr: !0,
        binop: 9,
        prefix: !0,
        startsExpr: !0
      }),
      modulo: g("%", 10),
      star: g("*", 10),
      slash: g("/", 10),
      starstar: new x("**", {
        beforeExpr: !0
      }),
      coalesce: g("??", 1),
      _break: E("break"),
      _case: E("case", y),
      _catch: E("catch"),
      _continue: E("continue"),
      _debugger: E("debugger"),
      _default: E("default", y),
      _do: E("do", {
        isLoop: !0,
        beforeExpr: !0
      }),
      _else: E("else", y),
      _finally: E("finally"),
      _for: E("for", {
        isLoop: !0
      }),
      _function: E("function", v),
      _if: E("if"),
      _return: E("return", y),
      _switch: E("switch"),
      _throw: E("throw", y),
      _try: E("try"),
      _var: E("var"),
      _const: E("const"),
      _while: E("while", {
        isLoop: !0
      }),
      _with: E("with"),
      _new: E("new", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      _this: E("this", v),
      _super: E("super", v),
      _class: E("class", v),
      _extends: E("extends", y),
      _export: E("export"),
      _import: E("import", v),
      _null: E("null", v),
      _true: E("true", v),
      _false: E("false", v),
      _in: E("in", {
        beforeExpr: !0,
        binop: 7
      }),
      _instanceof: E("instanceof", {
        beforeExpr: !0,
        binop: 7
      }),
      _typeof: E("typeof", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _void: E("void", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _delete: E("delete", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      })
    },
        k = /\r\n?|\n|\u2028|\u2029/,
        _ = RegExp(k.source, "g");

    function w(e, t) {
      return 10 === e || 13 === e || !t && (8232 === e || 8233 === e);
    }

    var C = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
        A = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
        T = Object.prototype,
        N = T.hasOwnProperty,
        I = T.toString;

    function P(e, t) {
      return N.call(e, t);
    }

    var L = Array.isArray || function (e) {
      return "[object Array]" === I.call(e);
    };

    function V(e) {
      return RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
    }

    var O = function O(e, t) {
      this.line = e, this.column = t;
    };

    O.prototype.offset = function (e) {
      return new O(this.line, this.column + e);
    };

    var j = function j(e, t, i) {
      this.start = t, this.end = i, null !== e.sourceFile && (this.source = e.sourceFile);
    };

    function R(e, t) {
      for (var i = 1, s = 0;;) {
        _.lastIndex = s;

        var n = _.exec(e);

        if (!n || !(n.index < t)) return new O(i, t - s);
        ++i, s = n.index + n[0].length;
      }
    }

    var D = {
      ecmaVersion: 10,
      sourceType: "script",
      onInsertedSemicolon: null,
      onTrailingComma: null,
      allowReserved: null,
      allowReturnOutsideFunction: !1,
      allowImportExportEverywhere: !1,
      allowAwaitOutsideFunction: !1,
      allowHashBang: !1,
      locations: !1,
      onToken: null,
      onComment: null,
      ranges: !1,
      program: null,
      sourceFile: null,
      directSourceFile: null,
      preserveParens: !1
    };

    function M(e, t) {
      return 2 | (e ? 4 : 0) | (t ? 8 : 0);
    }

    var B = function B(e, t, i) {
      this.options = e = function (e) {
        var t,
            i = {};

        for (var s in D) {
          i[s] = e && P(e, s) ? e[s] : D[s];
        }

        if (i.ecmaVersion >= 2015 && (i.ecmaVersion -= 2009), null == i.allowReserved && (i.allowReserved = i.ecmaVersion < 5), L(i.onToken)) {
          var n = i.onToken;

          i.onToken = function (e) {
            return n.push(e);
          };
        }

        return L(i.onComment) && (i.onComment = (t = i.onComment, function (e, s, n, r, a, o) {
          var h = {
            type: e ? "Block" : "Line",
            value: s,
            start: n,
            end: r
          };
          i.locations && (h.loc = new j(this, a, o)), i.ranges && (h.range = [n, r]), t.push(h);
        })), i;
      }(e), this.sourceFile = e.sourceFile, this.keywords = V(r[e.ecmaVersion >= 6 ? 6 : "module" === e.sourceType ? "5module" : 5]);
      var n = "";

      if (!0 !== e.allowReserved) {
        for (var a = e.ecmaVersion; !(n = s[a]); a--) {
          ;
        }

        "module" === e.sourceType && (n += " await");
      }

      this.reservedWords = V(n);
      var o = (n ? n + " " : "") + s.strict;
      this.reservedWordsStrict = V(o), this.reservedWordsStrictBind = V(o + " " + s.strictBind), this.input = String(t), this.containsEsc = !1, i ? (this.pos = i, this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(k).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = S.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === e.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = {}, 0 === this.pos && e.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null;
    },
        U = {
      inFunction: {
        configurable: !0
      },
      inGenerator: {
        configurable: !0
      },
      inAsync: {
        configurable: !0
      },
      allowSuper: {
        configurable: !0
      },
      allowDirectSuper: {
        configurable: !0
      },
      treatFunctionsAsVar: {
        configurable: !0
      }
    };

    B.prototype.parse = function () {
      var e = this.options.program || this.startNode();
      return this.nextToken(), this.parseTopLevel(e);
    }, U.inFunction.get = function () {
      return (2 & this.currentVarScope().flags) > 0;
    }, U.inGenerator.get = function () {
      return (8 & this.currentVarScope().flags) > 0;
    }, U.inAsync.get = function () {
      return (4 & this.currentVarScope().flags) > 0;
    }, U.allowSuper.get = function () {
      return (64 & this.currentThisScope().flags) > 0;
    }, U.allowDirectSuper.get = function () {
      return (128 & this.currentThisScope().flags) > 0;
    }, U.treatFunctionsAsVar.get = function () {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }, B.prototype.inNonArrowFunction = function () {
      return (2 & this.currentThisScope().flags) > 0;
    }, B.extend = function () {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      for (var i = this, s = 0; s < e.length; s++) {
        i = e[s](i);
      }

      return i;
    }, B.parse = function (e, t) {
      return new this(t, e).parse();
    }, B.parseExpressionAt = function (e, t, i) {
      var s = new this(i, e, t);
      return s.nextToken(), s.parseExpression();
    }, B.tokenizer = function (e, t) {
      return new this(t, e);
    }, Object.defineProperties(B.prototype, U);
    var F = B.prototype,
        q = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;

    function X() {
      this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
    }

    F.strictDirective = function (e) {
      for (;;) {
        A.lastIndex = e, e += A.exec(this.input)[0].length;
        var t = q.exec(this.input.slice(e));
        if (!t) return !1;

        if ("use strict" === (t[1] || t[2])) {
          A.lastIndex = e + t[0].length;
          var i = A.exec(this.input),
              s = i.index + i[0].length,
              n = this.input.charAt(s);
          return ";" === n || "}" === n || k.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(n) || "!" === n && "=" === this.input.charAt(s + 1));
        }

        e += t[0].length, A.lastIndex = e, e += A.exec(this.input)[0].length, ";" === this.input[e] && e++;
      }
    }, F.eat = function (e) {
      return this.type === e && (this.next(), !0);
    }, F.isContextual = function (e) {
      return this.type === S.name && this.value === e && !this.containsEsc;
    }, F.eatContextual = function (e) {
      return !!this.isContextual(e) && (this.next(), !0);
    }, F.expectContextual = function (e) {
      this.eatContextual(e) || this.unexpected();
    }, F.canInsertSemicolon = function () {
      return this.type === S.eof || this.type === S.braceR || k.test(this.input.slice(this.lastTokEnd, this.start));
    }, F.insertSemicolon = function () {
      if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
    }, F.semicolon = function () {
      this.eat(S.semi) || this.insertSemicolon() || this.unexpected();
    }, F.afterTrailingComma = function (e, t) {
      if (this.type === e) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
    }, F.expect = function (e) {
      this.eat(e) || this.unexpected();
    }, F.unexpected = function (e) {
      this.raise(null != e ? e : this.start, "Unexpected token");
    }, F.checkPatternErrors = function (e, t) {
      if (e) {
        e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
        var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
        i > -1 && this.raiseRecoverable(i, "Parenthesized pattern");
      }
    }, F.checkExpressionErrors = function (e, t) {
      if (!e) return !1;
      var i = e.shorthandAssign,
          s = e.doubleProto;
      if (!t) return i >= 0 || s >= 0;
      i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
    }, F.checkYieldAwaitInDefaultParams = function () {
      this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
    }, F.isSimpleAssignTarget = function (e) {
      return "ParenthesizedExpression" === e.type ? this.isSimpleAssignTarget(e.expression) : "Identifier" === e.type || "MemberExpression" === e.type;
    };
    var J = B.prototype;

    J.parseTopLevel = function (e) {
      var t = {};

      for (e.body || (e.body = []); this.type !== S.eof;) {
        var i = this.parseStatement(null, !0, t);
        e.body.push(i);
      }

      if (this.inModule) for (var s = 0, n = Object.keys(this.undefinedExports); s < n.length; s += 1) {
        var r = n[s];
        this.raiseRecoverable(this.undefinedExports[r].start, "Export '" + r + "' is not defined");
      }
      return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
    };

    var W = {
      kind: "loop"
    },
        z = {
      kind: "switch"
    };
    J.isLet = function (e) {
      if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
      A.lastIndex = this.pos;
      var t = A.exec(this.input),
          i = this.pos + t[0].length,
          s = this.input.charCodeAt(i);
      if (91 === s) return !0;
      if (e) return !1;
      if (123 === s) return !0;

      if (f(s, !0)) {
        for (var n = i + 1; m(this.input.charCodeAt(n), !0);) {
          ++n;
        }

        var r = this.input.slice(i, n);
        if (!a.test(r)) return !0;
      }

      return !1;
    }, J.isAsyncFunction = function () {
      if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
      A.lastIndex = this.pos;
      var e = A.exec(this.input),
          t = this.pos + e[0].length;
      return !k.test(this.input.slice(this.pos, t)) && "function" === this.input.slice(t, t + 8) && (t + 8 === this.input.length || !m(this.input.charAt(t + 8)));
    }, J.parseStatement = function (e, t, i) {
      var s,
          n = this.type,
          r = this.startNode();

      switch (this.isLet(e) && (n = S._var, s = "let"), n) {
        case S._break:
        case S._continue:
          return this.parseBreakContinueStatement(r, n.keyword);

        case S._debugger:
          return this.parseDebuggerStatement(r);

        case S._do:
          return this.parseDoStatement(r);

        case S._for:
          return this.parseForStatement(r);

        case S._function:
          return e && (this.strict || "if" !== e && "label" !== e) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(r, !1, !e);

        case S._class:
          return e && this.unexpected(), this.parseClass(r, !0);

        case S._if:
          return this.parseIfStatement(r);

        case S._return:
          return this.parseReturnStatement(r);

        case S._switch:
          return this.parseSwitchStatement(r);

        case S._throw:
          return this.parseThrowStatement(r);

        case S._try:
          return this.parseTryStatement(r);

        case S._const:
        case S._var:
          return s = s || this.value, e && "var" !== s && this.unexpected(), this.parseVarStatement(r, s);

        case S._while:
          return this.parseWhileStatement(r);

        case S._with:
          return this.parseWithStatement(r);

        case S.braceL:
          return this.parseBlock(!0, r);

        case S.semi:
          return this.parseEmptyStatement(r);

        case S._export:
        case S._import:
          if (this.options.ecmaVersion > 10 && n === S._import) {
            A.lastIndex = this.pos;
            var a = A.exec(this.input),
                o = this.pos + a[0].length,
                h = this.input.charCodeAt(o);
            if (40 === h || 46 === h) return this.parseExpressionStatement(r, this.parseExpression());
          }

          return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n === S._import ? this.parseImport(r) : this.parseExport(r, i);

        default:
          if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(r, !0, !e);
          var p = this.value,
              l = this.parseExpression();
          if (n === S.name && "Identifier" === l.type && this.eat(S.colon)) return this.parseLabeledStatement(r, p, l, e);
          return this.parseExpressionStatement(r, l);
      }
    }, J.parseBreakContinueStatement = function (e, t) {
      var i = "break" === t;
      this.next(), this.eat(S.semi) || this.insertSemicolon() ? e.label = null : this.type !== S.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());

      for (var s = 0; s < this.labels.length; ++s) {
        var n = this.labels[s];
        if ((null == e.label || n.name === e.label.name) && (null != n.kind && (i || "loop" === n.kind) || e.label && i)) break;
      }

      return s === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
    }, J.parseDebuggerStatement = function (e) {
      return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
    }, J.parseDoStatement = function (e) {
      return this.next(), this.labels.push(W), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(S._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(S.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
    }, J.parseForStatement = function (e) {
      this.next();
      var t = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
      if (this.labels.push(W), this.enterScope(0), this.expect(S.parenL), this.type === S.semi) return t > -1 && this.unexpected(t), this.parseFor(e, null);
      var i = this.isLet();

      if (this.type === S._var || this.type === S._const || i) {
        var s = this.startNode(),
            n = i ? "let" : this.value;
        return (this.next(), this.parseVar(s, !0, n), this.finishNode(s, "VariableDeclaration"), (this.type === S._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === s.declarations.length) ? (this.options.ecmaVersion >= 9 && (this.type === S._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, s)) : (t > -1 && this.unexpected(t), this.parseFor(e, s));
      }

      var r = new X(),
          a = this.parseExpression(!0, r);
      return this.type === S._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === S._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.toAssignable(a, !1, r), this.checkLVal(a), this.parseForIn(e, a)) : (this.checkExpressionErrors(r, !0), t > -1 && this.unexpected(t), this.parseFor(e, a));
    }, J.parseFunctionStatement = function (e, t, i) {
      return this.next(), this.parseFunction(e, G | (i ? 0 : Q), !1, t);
    }, J.parseIfStatement = function (e) {
      return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(S._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
    }, J.parseReturnStatement = function (e) {
      return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(S.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
    }, J.parseSwitchStatement = function (e) {
      this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(S.braceL), this.labels.push(z), this.enterScope(0);

      for (var t, i = !1; this.type !== S.braceR;) {
        if (this.type === S._case || this.type === S._default) {
          var s = this.type === S._case;
          t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), s ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(S.colon);
        } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
      }

      return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
    }, J.parseThrowStatement = function (e) {
      return this.next(), k.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
    };
    var H = [];
    J.parseTryStatement = function (e) {
      if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === S._catch) {
        var t = this.startNode();

        if (this.next(), this.eat(S.parenL)) {
          t.param = this.parseBindingAtom();
          var i = "Identifier" === t.param.type;
          this.enterScope(i ? 32 : 0), this.checkLVal(t.param, i ? 4 : 2), this.expect(S.parenR);
        } else this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0);

        t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
      }

      return e.finalizer = this.eat(S._finally) ? this.parseBlock() : null, e.handler || e.finalizer || this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
    }, J.parseVarStatement = function (e, t) {
      return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration");
    }, J.parseWhileStatement = function (e) {
      return this.next(), e.test = this.parseParenExpression(), this.labels.push(W), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
    }, J.parseWithStatement = function (e) {
      return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
    }, J.parseEmptyStatement = function (e) {
      return this.next(), this.finishNode(e, "EmptyStatement");
    }, J.parseLabeledStatement = function (e, t, i, s) {
      for (var n = 0, r = this.labels; n < r.length; n += 1) {
        r[n].name === t && this.raise(i.start, "Label '" + t + "' is already declared");
      }

      for (var a = this.type.isLoop ? "loop" : this.type === S._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
        var h = this.labels[o];
        if (h.statementStart === e.start) h.statementStart = this.start, h.kind = a;else break;
      }

      return this.labels.push({
        name: t,
        kind: a,
        statementStart: this.start
      }), e.body = this.parseStatement(s ? -1 === s.indexOf("label") ? s + "label" : s : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
    }, J.parseExpressionStatement = function (e, t) {
      return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
    }, J.parseBlock = function (e, t, i) {
      for (void 0 === e && (e = !0), void 0 === t && (t = this.startNode()), t.body = [], this.expect(S.braceL), e && this.enterScope(0); this.type !== S.braceR;) {
        var s = this.parseStatement(null);
        t.body.push(s);
      }

      return i && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
    }, J.parseFor = function (e, t) {
      return e.init = t, this.expect(S.semi), e.test = this.type === S.semi ? null : this.parseExpression(), this.expect(S.semi), e.update = this.type === S.parenR ? null : this.parseExpression(), this.expect(S.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
    }, J.parseForIn = function (e, t) {
      var i = this.type === S._in;
      return this.next(), "VariableDeclaration" === t.type && null != t.declarations[0].init && (!i || this.options.ecmaVersion < 8 || this.strict || "var" !== t.kind || "Identifier" !== t.declarations[0].id.type) ? this.raise(t.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer") : "AssignmentPattern" === t.type && this.raise(t.start, "Invalid left-hand side in for-loop"), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(S.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
    }, J.parseVar = function (e, t, i) {
      for (e.declarations = [], e.kind = i;;) {
        var s = this.startNode();
        if (this.parseVarId(s, i), this.eat(S.eq) ? s.init = this.parseMaybeAssign(t) : "const" !== i || this.type === S._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === s.id.type || t && (this.type === S._in || this.isContextual("of")) ? s.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), e.declarations.push(this.finishNode(s, "VariableDeclarator")), !this.eat(S.comma)) break;
      }

      return e;
    }, J.parseVarId = function (e, t) {
      e.id = this.parseBindingAtom(), this.checkLVal(e.id, "var" === t ? 1 : 2, !1);
    };
    var G = 1,
        Q = 2;
    J.parseFunction = function (e, t, i, s) {
      this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === S.star && t & Q && this.unexpected(), e.generator = this.eat(S.star)), this.options.ecmaVersion >= 8 && (e.async = !!s), t & G && (e.id = 4 & t && this.type !== S.name ? null : this.parseIdent(), e.id && !(t & Q) && this.checkLVal(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
      var n = this.yieldPos,
          r = this.awaitPos,
          a = this.awaitIdentPos;
      return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(M(e.async, e.generator)), t & G || (e.id = this.type === S.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1), this.yieldPos = n, this.awaitPos = r, this.awaitIdentPos = a, this.finishNode(e, t & G ? "FunctionDeclaration" : "FunctionExpression");
    }, J.parseFunctionParams = function (e) {
      this.expect(S.parenL), e.params = this.parseBindingList(S.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
    }, J.parseClass = function (e, t) {
      this.next();
      var i = this.strict;
      this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
      var s = this.startNode(),
          n = !1;

      for (s.body = [], this.expect(S.braceL); this.type !== S.braceR;) {
        var r = this.parseClassElement(null !== e.superClass);
        r && (s.body.push(r), "MethodDefinition" === r.type && "constructor" === r.kind && (n && this.raise(r.start, "Duplicate constructor in the same class"), n = !0));
      }

      return this.strict = i, this.next(), e.body = this.finishNode(s, "ClassBody"), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
    }, J.parseClassElement = function (e) {
      var t = this;
      if (this.eat(S.semi)) return null;

      var i = this.startNode(),
          s = function s(e, _s) {
        void 0 === _s && (_s = !1);
        var n = t.start,
            r = t.startLoc;
        return !!t.eatContextual(e) && (!(t.type === S.parenL || _s && t.canInsertSemicolon()) || (i.key && t.unexpected(), i.computed = !1, i.key = t.startNodeAt(n, r), i.key.name = e, t.finishNode(i.key, "Identifier"), !1));
      };

      i.kind = "method", i.static = s("static");
      var n = this.eat(S.star),
          r = !1;
      !n && (this.options.ecmaVersion >= 8 && s("async", !0) ? (r = !0, n = this.options.ecmaVersion >= 9 && this.eat(S.star)) : s("get") ? i.kind = "get" : s("set") && (i.kind = "set")), i.key || this.parsePropertyName(i);
      var a = i.key,
          o = !1;
      return i.computed || i.static || ("Identifier" !== a.type || "constructor" !== a.name) && ("Literal" !== a.type || "constructor" !== a.value) ? i.static && "Identifier" === a.type && "prototype" === a.name && this.raise(a.start, "Classes may not have a static property named prototype") : ("method" !== i.kind && this.raise(a.start, "Constructor can't have get/set modifier"), n && this.raise(a.start, "Constructor can't be a generator"), r && this.raise(a.start, "Constructor can't be an async method"), i.kind = "constructor", o = e), this.parseClassMethod(i, n, r, o), "get" === i.kind && 0 !== i.value.params.length && this.raiseRecoverable(i.value.start, "getter should have no params"), "set" === i.kind && 1 !== i.value.params.length && this.raiseRecoverable(i.value.start, "setter should have exactly one param"), "set" === i.kind && "RestElement" === i.value.params[0].type && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params"), i;
    }, J.parseClassMethod = function (e, t, i, s) {
      return e.value = this.parseMethod(t, i, s), this.finishNode(e, "MethodDefinition");
    }, J.parseClassId = function (e, t) {
      this.type === S.name ? (e.id = this.parseIdent(), t && this.checkLVal(e.id, 2, !1)) : (!0 === t && this.unexpected(), e.id = null);
    }, J.parseClassSuper = function (e) {
      e.superClass = this.eat(S._extends) ? this.parseExprSubscripts() : null;
    }, J.parseExport = function (e, t) {
      if (this.next(), this.eat(S.star)) return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseIdent(!0), this.checkExport(t, e.exported.name, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== S.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");

      if (this.eat(S._default)) {
        if (this.checkExport(t, "default", this.lastTokStart), this.type === S._function || (i = this.isAsyncFunction())) {
          var i,
              s = this.startNode();
          this.next(), i && this.next(), e.declaration = this.parseFunction(s, 4 | G, !1, i);
        } else if (this.type === S._class) {
          var n = this.startNode();
          e.declaration = this.parseClass(n, "nullableID");
        } else e.declaration = this.parseMaybeAssign(), this.semicolon();

        return this.finishNode(e, "ExportDefaultDeclaration");
      }

      if (this.shouldParseExportStatement()) e.declaration = this.parseStatement(null), "VariableDeclaration" === e.declaration.type ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id.name, e.declaration.id.start), e.specifiers = [], e.source = null;else {
        if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== S.string && this.unexpected(), e.source = this.parseExprAtom();else {
          for (var r = 0, a = e.specifiers; r < a.length; r += 1) {
            var o = a[r];
            this.checkUnreserved(o.local), this.checkLocalExport(o.local);
          }

          e.source = null;
        }
        this.semicolon();
      }
      return this.finishNode(e, "ExportNamedDeclaration");
    }, J.checkExport = function (e, t, i) {
      e && (P(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = !0);
    }, J.checkPatternExport = function (e, t) {
      var i = t.type;
      if ("Identifier" === i) this.checkExport(e, t.name, t.start);else if ("ObjectPattern" === i) for (var s = 0, n = t.properties; s < n.length; s += 1) {
        var r = n[s];
        this.checkPatternExport(e, r);
      } else if ("ArrayPattern" === i) for (var a = 0, o = t.elements; a < o.length; a += 1) {
        var h = o[a];
        h && this.checkPatternExport(e, h);
      } else "Property" === i ? this.checkPatternExport(e, t.value) : "AssignmentPattern" === i ? this.checkPatternExport(e, t.left) : "RestElement" === i ? this.checkPatternExport(e, t.argument) : "ParenthesizedExpression" === i && this.checkPatternExport(e, t.expression);
    }, J.checkVariableExport = function (e, t) {
      if (e) for (var i = 0; i < t.length; i += 1) {
        var s = t[i];
        this.checkPatternExport(e, s.id);
      }
    }, J.shouldParseExportStatement = function () {
      return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction();
    }, J.parseExportSpecifiers = function (e) {
      var t = [],
          i = !0;

      for (this.expect(S.braceL); !this.eat(S.braceR);) {
        if (i) i = !1;else if (this.expect(S.comma), this.afterTrailingComma(S.braceR)) break;
        var s = this.startNode();
        s.local = this.parseIdent(!0), s.exported = this.eatContextual("as") ? this.parseIdent(!0) : s.local, this.checkExport(e, s.exported.name, s.exported.start), t.push(this.finishNode(s, "ExportSpecifier"));
      }

      return t;
    }, J.parseImport = function (e) {
      return this.next(), this.type === S.string ? (e.specifiers = H, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === S.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
    }, J.parseImportSpecifiers = function () {
      var e = [],
          t = !0;

      if (this.type === S.name) {
        var i = this.startNode();
        if (i.local = this.parseIdent(), this.checkLVal(i.local, 2), e.push(this.finishNode(i, "ImportDefaultSpecifier")), !this.eat(S.comma)) return e;
      }

      if (this.type === S.star) {
        var s = this.startNode();
        return this.next(), this.expectContextual("as"), s.local = this.parseIdent(), this.checkLVal(s.local, 2), e.push(this.finishNode(s, "ImportNamespaceSpecifier")), e;
      }

      for (this.expect(S.braceL); !this.eat(S.braceR);) {
        if (t) t = !1;else if (this.expect(S.comma), this.afterTrailingComma(S.braceR)) break;
        var n = this.startNode();
        n.imported = this.parseIdent(!0), this.eatContextual("as") ? n.local = this.parseIdent() : (this.checkUnreserved(n.imported), n.local = n.imported), this.checkLVal(n.local, 2), e.push(this.finishNode(n, "ImportSpecifier"));
      }

      return e;
    }, J.adaptDirectivePrologue = function (e) {
      for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) {
        e[t].directive = e[t].expression.raw.slice(1, -1);
      }
    }, J.isDirectiveCandidate = function (e) {
      return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "string" == typeof e.expression.value && ('"' === this.input[e.start] || "'" === this.input[e.start]);
    };
    var K = B.prototype;
    K.toAssignable = function (e, t, i) {
      if (this.options.ecmaVersion >= 6 && e) switch (e.type) {
        case "Identifier":
          this.inAsync && "await" === e.name && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
          break;

        case "ObjectPattern":
        case "ArrayPattern":
        case "RestElement":
          break;

        case "ObjectExpression":
          e.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);

          for (var s = 0, n = e.properties; s < n.length; s += 1) {
            var r = n[s];
            this.toAssignable(r, t), "RestElement" === r.type && ("ArrayPattern" === r.argument.type || "ObjectPattern" === r.argument.type) && this.raise(r.argument.start, "Unexpected token");
          }

          break;

        case "Property":
          "init" !== e.kind && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
          break;

        case "ArrayExpression":
          e.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(e.elements, t);
          break;

        case "SpreadElement":
          e.type = "RestElement", this.toAssignable(e.argument, t), "AssignmentPattern" === e.argument.type && this.raise(e.argument.start, "Rest elements cannot have a default value");
          break;

        case "AssignmentExpression":
          "=" !== e.operator && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);

        case "AssignmentPattern":
          break;

        case "ParenthesizedExpression":
          this.toAssignable(e.expression, t, i);
          break;

        case "ChainExpression":
          this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
          break;

        case "MemberExpression":
          if (!t) break;

        default:
          this.raise(e.start, "Assigning to rvalue");
      } else i && this.checkPatternErrors(i, !0);
      return e;
    }, K.toAssignableList = function (e, t) {
      for (var i = e.length, s = 0; s < i; s++) {
        var n = e[s];
        n && this.toAssignable(n, t);
      }

      if (i) {
        var r = e[i - 1];
        6 === this.options.ecmaVersion && t && r && "RestElement" === r.type && "Identifier" !== r.argument.type && this.unexpected(r.argument.start);
      }

      return e;
    }, K.parseSpread = function (e) {
      var t = this.startNode();
      return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
    }, K.parseRestBinding = function () {
      var e = this.startNode();
      return this.next(), 6 === this.options.ecmaVersion && this.type !== S.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
    }, K.parseBindingAtom = function () {
      if (this.options.ecmaVersion >= 6) switch (this.type) {
        case S.bracketL:
          var e = this.startNode();
          return this.next(), e.elements = this.parseBindingList(S.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");

        case S.braceL:
          return this.parseObj(!0);
      }
      return this.parseIdent();
    }, K.parseBindingList = function (e, t, i) {
      for (var s = [], n = !0; !this.eat(e);) {
        if (n ? n = !1 : this.expect(S.comma), t && this.type === S.comma) s.push(null);else if (i && this.afterTrailingComma(e)) break;else if (this.type === S.ellipsis) {
          var r = this.parseRestBinding();
          this.parseBindingListItem(r), s.push(r), this.type === S.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);
          break;
        } else {
          var a = this.parseMaybeDefault(this.start, this.startLoc);
          this.parseBindingListItem(a), s.push(a);
        }
      }

      return s;
    }, K.parseBindingListItem = function (e) {
      return e;
    }, K.parseMaybeDefault = function (e, t, i) {
      if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(S.eq)) return i;
      var s = this.startNodeAt(e, t);
      return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");
    }, K.checkLVal = function (e, t, i) {
      switch (void 0 === t && (t = 0), e.type) {
        case "Identifier":
          2 === t && "let" === e.name && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode"), i && (P(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = !0), 0 !== t && 5 !== t && this.declareName(e.name, t, e.start);
          break;

        case "ChainExpression":
          this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
          break;

        case "MemberExpression":
          t && this.raiseRecoverable(e.start, "Binding member expression");
          break;

        case "ObjectPattern":
          for (var s = 0, n = e.properties; s < n.length; s += 1) {
            var r = n[s];
            this.checkLVal(r, t, i);
          }

          break;

        case "Property":
          this.checkLVal(e.value, t, i);
          break;

        case "ArrayPattern":
          for (var a = 0, o = e.elements; a < o.length; a += 1) {
            var h = o[a];
            h && this.checkLVal(h, t, i);
          }

          break;

        case "AssignmentPattern":
          this.checkLVal(e.left, t, i);
          break;

        case "RestElement":
          this.checkLVal(e.argument, t, i);
          break;

        case "ParenthesizedExpression":
          this.checkLVal(e.expression, t, i);
          break;

        default:
          this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");
      }
    };
    var $ = B.prototype;
    $.checkPropClash = function (e, t, i) {
      if ((!(this.options.ecmaVersion >= 9) || "SpreadElement" !== e.type) && (!(this.options.ecmaVersion >= 6) || !e.computed && !e.method && !e.shorthand)) {
        var s,
            n = e.key;

        switch (n.type) {
          case "Identifier":
            s = n.name;
            break;

          case "Literal":
            s = String(n.value);
            break;

          default:
            return;
        }

        var r = e.kind;

        if (this.options.ecmaVersion >= 6) {
          "__proto__" === s && "init" === r && (t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = n.start) : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")), t.proto = !0);
          return;
        }

        var a = t[s = "$" + s];
        a ? ("init" === r ? this.strict && a.init || a.get || a.set : a.init || a[r]) && this.raiseRecoverable(n.start, "Redefinition of property") : a = t[s] = {
          init: !1,
          get: !1,
          set: !1
        }, a[r] = !0;
      }
    }, $.parseExpression = function (e, t) {
      var i = this.start,
          s = this.startLoc,
          n = this.parseMaybeAssign(e, t);

      if (this.type === S.comma) {
        var r = this.startNodeAt(i, s);

        for (r.expressions = [n]; this.eat(S.comma);) {
          r.expressions.push(this.parseMaybeAssign(e, t));
        }

        return this.finishNode(r, "SequenceExpression");
      }

      return n;
    }, $.parseMaybeAssign = function (e, t, i) {
      if (this.isContextual("yield")) {
        if (this.inGenerator) return this.parseYield(e);
        this.exprAllowed = !1;
      }

      var s = !1,
          n = -1,
          r = -1;
      t ? (n = t.parenthesizedAssign, r = t.trailingComma, t.parenthesizedAssign = t.trailingComma = -1) : (t = new X(), s = !0);
      var a = this.start,
          o = this.startLoc;
      (this.type === S.parenL || this.type === S.name) && (this.potentialArrowAt = this.start);
      var h = this.parseMaybeConditional(e, t);

      if (i && (h = i.call(this, h, a, o)), this.type.isAssign) {
        var p = this.startNodeAt(a, o);
        return p.operator = this.value, p.left = this.type === S.eq ? this.toAssignable(h, !1, t) : h, s || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= p.left.start && (t.shorthandAssign = -1), this.checkLVal(h), this.next(), p.right = this.parseMaybeAssign(e), this.finishNode(p, "AssignmentExpression");
      }

      return s && this.checkExpressionErrors(t, !0), n > -1 && (t.parenthesizedAssign = n), r > -1 && (t.trailingComma = r), h;
    }, $.parseMaybeConditional = function (e, t) {
      var i = this.start,
          s = this.startLoc,
          n = this.parseExprOps(e, t);
      if (this.checkExpressionErrors(t)) return n;

      if (this.eat(S.question)) {
        var r = this.startNodeAt(i, s);
        return r.test = n, r.consequent = this.parseMaybeAssign(), this.expect(S.colon), r.alternate = this.parseMaybeAssign(e), this.finishNode(r, "ConditionalExpression");
      }

      return n;
    }, $.parseExprOps = function (e, t) {
      var i = this.start,
          s = this.startLoc,
          n = this.parseMaybeUnary(t, !1);
      return this.checkExpressionErrors(t) ? n : n.start === i && "ArrowFunctionExpression" === n.type ? n : this.parseExprOp(n, i, s, -1, e);
    }, $.parseExprOp = function (e, t, i, s, n) {
      var r = this.type.binop;

      if (null != r && (!n || this.type !== S._in) && r > s) {
        var a = this.type === S.logicalOR || this.type === S.logicalAND,
            o = this.type === S.coalesce;
        o && (r = S.logicalAND.binop);
        var h = this.value;
        this.next();
        var p = this.start,
            l = this.startLoc,
            c = this.parseExprOp(this.parseMaybeUnary(null, !1), p, l, r, n),
            u = this.buildBinary(t, i, e, c, h, a || o);
        return (a && this.type === S.coalesce || o && (this.type === S.logicalOR || this.type === S.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(u, t, i, s, n);
      }

      return e;
    }, $.buildBinary = function (e, t, i, s, n, r) {
      var a = this.startNodeAt(e, t);
      return a.left = i, a.operator = n, a.right = s, this.finishNode(a, r ? "LogicalExpression" : "BinaryExpression");
    }, $.parseMaybeUnary = function (e, t) {
      var i,
          s = this.start,
          n = this.startLoc;
      if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) i = this.parseAwait(), t = !0;else if (this.type.prefix) {
        var r = this.startNode(),
            a = this.type === S.incDec;
        r.operator = this.value, r.prefix = !0, this.next(), r.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), a ? this.checkLVal(r.argument) : this.strict && "delete" === r.operator && "Identifier" === r.argument.type ? this.raiseRecoverable(r.start, "Deleting local variable in strict mode") : t = !0, i = this.finishNode(r, a ? "UpdateExpression" : "UnaryExpression");
      } else {
        if (i = this.parseExprSubscripts(e), this.checkExpressionErrors(e)) return i;

        for (; this.type.postfix && !this.canInsertSemicolon();) {
          var o = this.startNodeAt(s, n);
          o.operator = this.value, o.prefix = !1, o.argument = i, this.checkLVal(i), this.next(), i = this.finishNode(o, "UpdateExpression");
        }
      }
      return !t && this.eat(S.starstar) ? this.buildBinary(s, n, i, this.parseMaybeUnary(null, !1), "**", !1) : i;
    }, $.parseExprSubscripts = function (e) {
      var t = this.start,
          i = this.startLoc,
          s = this.parseExprAtom(e);
      if ("ArrowFunctionExpression" === s.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return s;
      var n = this.parseSubscripts(s, t, i);
      return e && "MemberExpression" === n.type && (e.parenthesizedAssign >= n.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= n.start && (e.parenthesizedBind = -1)), n;
    }, $.parseSubscripts = function (e, t, i, s) {
      for (var n = this.options.ecmaVersion >= 8 && "Identifier" === e.type && "async" === e.name && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start == 5 && this.potentialArrowAt === e.start, r = !1;;) {
        var a = this.parseSubscript(e, t, i, s, n, r);

        if (a.optional && (r = !0), a === e || "ArrowFunctionExpression" === a.type) {
          if (r) {
            var o = this.startNodeAt(t, i);
            o.expression = a, a = this.finishNode(o, "ChainExpression");
          }

          return a;
        }

        e = a;
      }
    }, $.parseSubscript = function (e, t, i, s, n, r) {
      var a = this.options.ecmaVersion >= 11,
          o = a && this.eat(S.questionDot);
      s && o && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
      var h = this.eat(S.bracketL);

      if (h || o && this.type !== S.parenL && this.type !== S.backQuote || this.eat(S.dot)) {
        var p = this.startNodeAt(t, i);
        p.object = e, p.property = h ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved), p.computed = !!h, h && this.expect(S.bracketR), a && (p.optional = o), e = this.finishNode(p, "MemberExpression");
      } else if (!s && this.eat(S.parenL)) {
        var l = new X(),
            c = this.yieldPos,
            u = this.awaitPos,
            d = this.awaitIdentPos;
        this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
        var f = this.parseExprList(S.parenR, this.options.ecmaVersion >= 8, !1, l);
        if (n && !o && !this.canInsertSemicolon() && this.eat(S.arrow)) return this.checkPatternErrors(l, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = c, this.awaitPos = u, this.awaitIdentPos = d, this.parseArrowExpression(this.startNodeAt(t, i), f, !0);
        this.checkExpressionErrors(l, !0), this.yieldPos = c || this.yieldPos, this.awaitPos = u || this.awaitPos, this.awaitIdentPos = d || this.awaitIdentPos;
        var m = this.startNodeAt(t, i);
        m.callee = e, m.arguments = f, a && (m.optional = o), e = this.finishNode(m, "CallExpression");
      } else if (this.type === S.backQuote) {
        (o || r) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
        var x = this.startNodeAt(t, i);
        x.tag = e, x.quasi = this.parseTemplate({
          isTagged: !0
        }), e = this.finishNode(x, "TaggedTemplateExpression");
      }

      return e;
    }, $.parseExprAtom = function (e) {
      this.type === S.slash && this.readRegexp();
      var t,
          i = this.potentialArrowAt === this.start;

      switch (this.type) {
        case S._super:
          return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), t = this.startNode(), this.next(), this.type !== S.parenL || this.allowDirectSuper || this.raise(t.start, "super() call outside constructor of a subclass"), this.type !== S.dot && this.type !== S.bracketL && this.type !== S.parenL && this.unexpected(), this.finishNode(t, "Super");

        case S._this:
          return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");

        case S.name:
          var s = this.start,
              n = this.startLoc,
              r = this.containsEsc,
              a = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !r && "async" === a.name && !this.canInsertSemicolon() && this.eat(S._function)) return this.parseFunction(this.startNodeAt(s, n), 0, !1, !0);

          if (i && !this.canInsertSemicolon()) {
            if (this.eat(S.arrow)) return this.parseArrowExpression(this.startNodeAt(s, n), [a], !1);
            if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === S.name && !r) return a = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(S.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(s, n), [a], !0);
          }

          return a;

        case S.regexp:
          var o = this.value;
          return (t = this.parseLiteral(o.value)).regex = {
            pattern: o.pattern,
            flags: o.flags
          }, t;

        case S.num:
        case S.string:
          return this.parseLiteral(this.value);

        case S._null:
        case S._true:
        case S._false:
          return (t = this.startNode()).value = this.type === S._null ? null : this.type === S._true, t.raw = this.type.keyword, this.next(), this.finishNode(t, "Literal");

        case S.parenL:
          var h = this.start,
              p = this.parseParenAndDistinguishExpression(i);
          return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(p) && (e.parenthesizedAssign = h), e.parenthesizedBind < 0 && (e.parenthesizedBind = h)), p;

        case S.bracketL:
          return t = this.startNode(), this.next(), t.elements = this.parseExprList(S.bracketR, !0, !0, e), this.finishNode(t, "ArrayExpression");

        case S.braceL:
          return this.parseObj(!1, e);

        case S._function:
          return t = this.startNode(), this.next(), this.parseFunction(t, 0);

        case S._class:
          return this.parseClass(this.startNode(), !1);

        case S._new:
          return this.parseNew();

        case S.backQuote:
          return this.parseTemplate();

        case S._import:
          if (this.options.ecmaVersion >= 11) return this.parseExprImport();
          return this.unexpected();

        default:
          this.unexpected();
      }
    }, $.parseExprImport = function () {
      var e = this.startNode();
      this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
      var t = this.parseIdent(!0);

      switch (this.type) {
        case S.parenL:
          return this.parseDynamicImport(e);

        case S.dot:
          return e.meta = t, this.parseImportMeta(e);

        default:
          this.unexpected();
      }
    }, $.parseDynamicImport = function (e) {
      if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(S.parenR)) {
        var t = this.start;
        this.eat(S.comma) && this.eat(S.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
      }

      return this.finishNode(e, "ImportExpression");
    }, $.parseImportMeta = function (e) {
      this.next();
      var t = this.containsEsc;
      return e.property = this.parseIdent(!0), "meta" !== e.property.name && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), "module" !== this.options.sourceType && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
    }, $.parseLiteral = function (e) {
      var t = this.startNode();
      return t.value = e, t.raw = this.input.slice(this.start, this.end), 110 === t.raw.charCodeAt(t.raw.length - 1) && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
    }, $.parseParenExpression = function () {
      this.expect(S.parenL);
      var e = this.parseExpression();
      return this.expect(S.parenR), e;
    }, $.parseParenAndDistinguishExpression = function (e) {
      var t,
          i = this.start,
          s = this.startLoc,
          n = this.options.ecmaVersion >= 8;

      if (this.options.ecmaVersion >= 6) {
        this.next();
        var r,
            a = this.start,
            o = this.startLoc,
            h = [],
            p = !0,
            l = !1,
            c = new X(),
            u = this.yieldPos,
            d = this.awaitPos;

        for (this.yieldPos = 0, this.awaitPos = 0; this.type !== S.parenR;) {
          if (p ? p = !1 : this.expect(S.comma), n && this.afterTrailingComma(S.parenR, !0)) {
            l = !0;
            break;
          }

          if (this.type === S.ellipsis) {
            r = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === S.comma && this.raise(this.start, "Comma is not permitted after the rest element");
            break;
          }

          h.push(this.parseMaybeAssign(!1, c, this.parseParenItem));
        }

        var f = this.start,
            m = this.startLoc;
        if (this.expect(S.parenR), e && !this.canInsertSemicolon() && this.eat(S.arrow)) return this.checkPatternErrors(c, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = u, this.awaitPos = d, this.parseParenArrowList(i, s, h);
        (!h.length || l) && this.unexpected(this.lastTokStart), r && this.unexpected(r), this.checkExpressionErrors(c, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = d || this.awaitPos, h.length > 1 ? ((t = this.startNodeAt(a, o)).expressions = h, this.finishNodeAt(t, "SequenceExpression", f, m)) : t = h[0];
      } else t = this.parseParenExpression();

      if (!this.options.preserveParens) return t;
      var x = this.startNodeAt(i, s);
      return x.expression = t, this.finishNode(x, "ParenthesizedExpression");
    }, $.parseParenItem = function (e) {
      return e;
    }, $.parseParenArrowList = function (e, t, i) {
      return this.parseArrowExpression(this.startNodeAt(e, t), i);
    };
    var Y = [];
    $.parseNew = function () {
      this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
      var e = this.startNode(),
          t = this.parseIdent(!0);

      if (this.options.ecmaVersion >= 6 && this.eat(S.dot)) {
        e.meta = t;
        var i = this.containsEsc;
        return e.property = this.parseIdent(!0), "target" !== e.property.name && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction() || this.raiseRecoverable(e.start, "'new.target' can only be used in functions"), this.finishNode(e, "MetaProperty");
      }

      var s = this.start,
          n = this.startLoc,
          r = this.type === S._import;
      return e.callee = this.parseSubscripts(this.parseExprAtom(), s, n, !0), r && "ImportExpression" === e.callee.type && this.raise(s, "Cannot use new with import()"), this.eat(S.parenL) ? e.arguments = this.parseExprList(S.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Y, this.finishNode(e, "NewExpression");
    }, $.parseTemplateElement = function (e) {
      var t = e.isTagged,
          i = this.startNode();
      return this.type === S.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
        raw: this.value,
        cooked: null
      }) : i.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
        cooked: this.value
      }, this.next(), i.tail = this.type === S.backQuote, this.finishNode(i, "TemplateElement");
    }, $.parseTemplate = function (e) {
      void 0 === e && (e = {});
      var t = e.isTagged;
      void 0 === t && (t = !1);
      var i = this.startNode();
      this.next(), i.expressions = [];
      var s = this.parseTemplateElement({
        isTagged: t
      });

      for (i.quasis = [s]; !s.tail;) {
        this.type === S.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(S.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(S.braceR), i.quasis.push(s = this.parseTemplateElement({
          isTagged: t
        }));
      }

      return this.next(), this.finishNode(i, "TemplateLiteral");
    }, $.isAsyncProp = function (e) {
      return !e.computed && "Identifier" === e.key.type && "async" === e.key.name && (this.type === S.name || this.type === S.num || this.type === S.string || this.type === S.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === S.star) && !k.test(this.input.slice(this.lastTokEnd, this.start));
    }, $.parseObj = function (e, t) {
      var i = this.startNode(),
          s = !0,
          n = {};

      for (i.properties = [], this.next(); !this.eat(S.braceR);) {
        if (s) s = !1;else if (this.expect(S.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(S.braceR)) break;
        var r = this.parseProperty(e, t);
        e || this.checkPropClash(r, n, t), i.properties.push(r);
      }

      return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
    }, $.parseProperty = function (e, t) {
      var i,
          s,
          n,
          r,
          a = this.startNode();
      if (this.options.ecmaVersion >= 9 && this.eat(S.ellipsis)) return e ? (a.argument = this.parseIdent(!1), this.type === S.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === S.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(!1, t), this.type === S.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
      this.options.ecmaVersion >= 6 && (a.method = !1, a.shorthand = !1, (e || t) && (n = this.start, r = this.startLoc), e || (i = this.eat(S.star)));
      var o = this.containsEsc;
      return this.parsePropertyName(a), !e && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(a) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(S.star), this.parsePropertyName(a, t)) : s = !1, this.parsePropertyValue(a, e, i, s, n, r, t, o), this.finishNode(a, "Property");
    }, $.parsePropertyValue = function (e, t, i, s, n, r, a, o) {
      if ((i || s) && this.type === S.colon && this.unexpected(), this.eat(S.colon)) e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), e.kind = "init";else if (this.options.ecmaVersion >= 6 && this.type === S.parenL) t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(i, s);else if (t || o || !(this.options.ecmaVersion >= 5) || e.computed || "Identifier" !== e.key.type || "get" !== e.key.name && "set" !== e.key.name || this.type === S.comma || this.type === S.braceR || this.type === S.eq) this.options.ecmaVersion >= 6 && !e.computed && "Identifier" === e.key.type ? ((i || s) && this.unexpected(), this.checkUnreserved(e.key), "await" !== e.key.name || this.awaitIdentPos || (this.awaitIdentPos = n), e.kind = "init", t ? e.value = this.parseMaybeDefault(n, r, e.key) : this.type === S.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), e.value = this.parseMaybeDefault(n, r, e.key)) : e.value = e.key, e.shorthand = !0) : this.unexpected();else {
        (i || s) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
        var h = "get" === e.kind ? 0 : 1;

        if (e.value.params.length !== h) {
          var p = e.value.start;
          "get" === e.kind ? this.raiseRecoverable(p, "getter should have no params") : this.raiseRecoverable(p, "setter should have exactly one param");
        } else "set" === e.kind && "RestElement" === e.value.params[0].type && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
      }
    }, $.parsePropertyName = function (e) {
      if (this.options.ecmaVersion >= 6) {
        if (this.eat(S.bracketL)) return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(S.bracketR), e.key;
        e.computed = !1;
      }

      return e.key = this.type === S.num || this.type === S.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved);
    }, $.initFunction = function (e) {
      e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
    }, $.parseMethod = function (e, t, i) {
      var s = this.startNode(),
          n = this.yieldPos,
          r = this.awaitPos,
          a = this.awaitIdentPos;
      return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = e), this.options.ecmaVersion >= 8 && (s.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | M(t, s.generator) | (i ? 128 : 0)), this.expect(S.parenL), s.params = this.parseBindingList(S.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0), this.yieldPos = n, this.awaitPos = r, this.awaitIdentPos = a, this.finishNode(s, "FunctionExpression");
    }, $.parseArrowExpression = function (e, t, i) {
      var s = this.yieldPos,
          n = this.awaitPos,
          r = this.awaitIdentPos;
      return this.enterScope(16 | M(i, !1)), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1), this.yieldPos = s, this.awaitPos = n, this.awaitIdentPos = r, this.finishNode(e, "ArrowFunctionExpression");
    }, $.parseFunctionBody = function (e, t, i) {
      var s = t && this.type !== S.braceL,
          n = this.strict,
          r = !1;
      if (s) e.body = this.parseMaybeAssign(), e.expression = !0, this.checkParams(e, !1);else {
        var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
        (!n || a) && (r = this.strictDirective(this.end)) && a && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");
        var o = this.labels;
        this.labels = [], r && (this.strict = !0), this.checkParams(e, !n && !r && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLVal(e.id, 5), e.body = this.parseBlock(!1, void 0, r && !n), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = o;
      }
      this.exitScope();
    }, $.isSimpleParamList = function (e) {
      for (var t = 0; t < e.length; t += 1) {
        if ("Identifier" !== e[t].type) return !1;
      }

      return !0;
    }, $.checkParams = function (e, t) {
      for (var i = {}, s = 0, n = e.params; s < n.length; s += 1) {
        var r = n[s];
        this.checkLVal(r, 1, t ? null : i);
      }
    }, $.parseExprList = function (e, t, i, s) {
      for (var n = [], r = !0; !this.eat(e);) {
        if (r) r = !1;else if (this.expect(S.comma), t && this.afterTrailingComma(e)) break;
        var a = void 0;
        i && this.type === S.comma ? a = null : this.type === S.ellipsis ? (a = this.parseSpread(s), s && this.type === S.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, s), n.push(a);
      }

      return n;
    }, $.checkUnreserved = function (e) {
      var t = e.start,
          i = e.end,
          s = e.name;
      this.inGenerator && "yield" === s && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === s && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(s) && this.raise(t, "Unexpected keyword '" + s + "'"), (!(this.options.ecmaVersion < 6) || -1 === this.input.slice(t, i).indexOf("\\")) && (this.strict ? this.reservedWordsStrict : this.reservedWords).test(s) && (this.inAsync || "await" !== s || this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + s + "' is reserved"));
    }, $.parseIdent = function (e, t) {
      var i = this.startNode();
      return this.type === S.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, ("class" === i.name || "function" === i.name) && (this.lastTokEnd !== this.lastTokStart + 1 || 46 !== this.input.charCodeAt(this.lastTokStart)) && this.context.pop()) : this.unexpected(), this.next(!!e), this.finishNode(i, "Identifier"), e || (this.checkUnreserved(i), "await" !== i.name || this.awaitIdentPos || (this.awaitIdentPos = i.start)), i;
    }, $.parseYield = function (e) {
      this.yieldPos || (this.yieldPos = this.start);
      var t = this.startNode();
      return this.next(), this.type === S.semi || this.canInsertSemicolon() || this.type !== S.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(S.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
    }, $.parseAwait = function () {
      this.awaitPos || (this.awaitPos = this.start);
      var e = this.startNode();
      return this.next(), e.argument = this.parseMaybeUnary(null, !1), this.finishNode(e, "AwaitExpression");
    };
    var Z = B.prototype;
    Z.raise = function (e, t) {
      var i = R(this.input, e),
          s = SyntaxError(t += " (" + i.line + ":" + i.column + ")");
      throw s.pos = e, s.loc = i, s.raisedAt = this.pos, s;
    }, Z.raiseRecoverable = Z.raise, Z.curPosition = function () {
      if (this.options.locations) return new O(this.curLine, this.pos - this.lineStart);
    };

    var ee = B.prototype,
        et = function et(e) {
      this.flags = e, this.var = [], this.lexical = [], this.functions = [];
    };

    ee.enterScope = function (e) {
      this.scopeStack.push(new et(e));
    }, ee.exitScope = function () {
      this.scopeStack.pop();
    }, ee.treatFunctionsAsVarInScope = function (e) {
      return 2 & e.flags || !this.inModule && 1 & e.flags;
    }, ee.declareName = function (e, t, i) {
      var s = !1;

      if (2 === t) {
        var n = this.currentScope();
        s = n.lexical.indexOf(e) > -1 || n.functions.indexOf(e) > -1 || n.var.indexOf(e) > -1, n.lexical.push(e), this.inModule && 1 & n.flags && delete this.undefinedExports[e];
      } else if (4 === t) this.currentScope().lexical.push(e);else if (3 === t) {
        var r = this.currentScope();
        s = this.treatFunctionsAsVar ? r.lexical.indexOf(e) > -1 : r.lexical.indexOf(e) > -1 || r.var.indexOf(e) > -1, r.functions.push(e);
      } else for (var a = this.scopeStack.length - 1; a >= 0; --a) {
        var o = this.scopeStack[a];

        if (o.lexical.indexOf(e) > -1 && !(32 & o.flags && o.lexical[0] === e) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(e) > -1) {
          s = !0;
          break;
        }

        if (o.var.push(e), this.inModule && 1 & o.flags && delete this.undefinedExports[e], 3 & o.flags) break;
      }

      s && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
    }, ee.checkLocalExport = function (e) {
      -1 === this.scopeStack[0].lexical.indexOf(e.name) && -1 === this.scopeStack[0].var.indexOf(e.name) && (this.undefinedExports[e.name] = e);
    }, ee.currentScope = function () {
      return this.scopeStack[this.scopeStack.length - 1];
    }, ee.currentVarScope = function () {
      for (var e = this.scopeStack.length - 1;; e--) {
        var t = this.scopeStack[e];
        if (3 & t.flags) return t;
      }
    }, ee.currentThisScope = function () {
      for (var e = this.scopeStack.length - 1;; e--) {
        var t = this.scopeStack[e];
        if (3 & t.flags && !(16 & t.flags)) return t;
      }
    };

    var ei = function ei(e, t, i) {
      this.type = "", this.start = t, this.end = 0, e.options.locations && (this.loc = new j(e, i)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [t, 0]);
    },
        es = B.prototype;

    function en(e, t, i, s) {
      return e.type = t, e.end = i, this.options.locations && (e.loc.end = s), this.options.ranges && (e.range[1] = i), e;
    }

    es.startNode = function () {
      return new ei(this, this.start, this.startLoc);
    }, es.startNodeAt = function (e, t) {
      return new ei(this, e, t);
    }, es.finishNode = function (e, t) {
      return en.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
    }, es.finishNodeAt = function (e, t, i, s) {
      return en.call(this, e, t, i, s);
    };

    var er = function er(e, t, i, s, n) {
      this.token = e, this.isExpr = !!t, this.preserveSpace = !!i, this.override = s, this.generator = !!n;
    },
        ea = {
      b_stat: new er("{", !1),
      b_expr: new er("{", !0),
      b_tmpl: new er("${", !1),
      p_stat: new er("(", !1),
      p_expr: new er("(", !0),
      q_tmpl: new er("`", !0, !0, function (e) {
        return e.tryReadTemplateToken();
      }),
      f_stat: new er("function", !1),
      f_expr: new er("function", !0),
      f_expr_gen: new er("function", !0, !1, null, !0),
      f_gen: new er("function", !1, !1, null, !0)
    },
        eo = B.prototype;

    eo.initialContext = function () {
      return [ea.b_stat];
    }, eo.braceIsBlock = function (e) {
      var t = this.curContext();
      return t === ea.f_expr || t === ea.f_stat || (e === S.colon && (t === ea.b_stat || t === ea.b_expr) ? !t.isExpr : e === S._return || e === S.name && this.exprAllowed ? k.test(this.input.slice(this.lastTokEnd, this.start)) : e === S._else || e === S.semi || e === S.eof || e === S.parenR || e === S.arrow || (e === S.braceL ? t === ea.b_stat : e !== S._var && e !== S._const && e !== S.name && !this.exprAllowed));
    }, eo.inGeneratorContext = function () {
      for (var e = this.context.length - 1; e >= 1; e--) {
        var t = this.context[e];
        if ("function" === t.token) return t.generator;
      }

      return !1;
    }, eo.updateContext = function (e) {
      var t,
          i = this.type;
      i.keyword && e === S.dot ? this.exprAllowed = !1 : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
    }, S.parenR.updateContext = S.braceR.updateContext = function () {
      if (1 === this.context.length) {
        this.exprAllowed = !0;
        return;
      }

      var e = this.context.pop();
      e === ea.b_stat && "function" === this.curContext().token && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
    }, S.braceL.updateContext = function (e) {
      this.context.push(this.braceIsBlock(e) ? ea.b_stat : ea.b_expr), this.exprAllowed = !0;
    }, S.dollarBraceL.updateContext = function () {
      this.context.push(ea.b_tmpl), this.exprAllowed = !0;
    }, S.parenL.updateContext = function (e) {
      var t = e === S._if || e === S._for || e === S._with || e === S._while;
      this.context.push(t ? ea.p_stat : ea.p_expr), this.exprAllowed = !0;
    }, S.incDec.updateContext = function () {}, S._function.updateContext = S._class.updateContext = function (e) {
      !e.beforeExpr || e === S.semi || e === S._else || e === S._return && k.test(this.input.slice(this.lastTokEnd, this.start)) || (e === S.colon || e === S.braceL) && this.curContext() === ea.b_stat ? this.context.push(ea.f_stat) : this.context.push(ea.f_expr), this.exprAllowed = !1;
    }, S.backQuote.updateContext = function () {
      this.curContext() === ea.q_tmpl ? this.context.pop() : this.context.push(ea.q_tmpl), this.exprAllowed = !1;
    }, S.star.updateContext = function (e) {
      if (e === S._function) {
        var t = this.context.length - 1;
        this.context[t] === ea.f_expr ? this.context[t] = ea.f_expr_gen : this.context[t] = ea.f_gen;
      }

      this.exprAllowed = !0;
    }, S.name.updateContext = function (e) {
      var t = !1;
      this.options.ecmaVersion >= 6 && e !== S.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
    };
    var eh = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
        ep = eh + " Extended_Pictographic",
        el = {
      9: eh,
      10: ep,
      11: ep
    },
        ec = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
        eu = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
        ed = eu + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
        ef = {
      9: eu,
      10: ed,
      11: ed + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"
    },
        em = {};

    function ex(e) {
      var t = em[e] = {
        binary: V(el[e] + " " + ec),
        nonBinary: {
          General_Category: V(ec),
          Script: V(ef[e])
        }
      };
      t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
    }

    ex(9), ex(10), ex(11);

    var eg = B.prototype,
        ey = function ey(e) {
      this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = em[e.options.ecmaVersion >= 11 ? 11 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
    };

    function ev(e) {
      return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, (1023 & e) + 56320);
    }

    function eb(e) {
      return 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || e >= 91 && e <= 94 || e >= 123 && e <= 125;
    }

    function eE(e) {
      return e >= 65 && e <= 90 || e >= 97 && e <= 122;
    }

    function eS(e) {
      return eE(e) || 95 === e;
    }

    function ek(e) {
      return e >= 48 && e <= 57;
    }

    function e_(e) {
      return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
    }

    function ew(e) {
      return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
    }

    function eC(e) {
      return e >= 48 && e <= 55;
    }

    ey.prototype.reset = function (e, t, i) {
      var s = -1 !== i.indexOf("u");
      this.start = 0 | e, this.source = t + "", this.flags = i, this.switchU = s && this.parser.options.ecmaVersion >= 6, this.switchN = s && this.parser.options.ecmaVersion >= 9;
    }, ey.prototype.raise = function (e) {
      this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
    }, ey.prototype.at = function (e, t) {
      void 0 === t && (t = !1);
      var i = this.source,
          s = i.length;
      if (e >= s) return -1;
      var n = i.charCodeAt(e);
      if (!(t || this.switchU) || n <= 55295 || n >= 57344 || e + 1 >= s) return n;
      var r = i.charCodeAt(e + 1);
      return r >= 56320 && r <= 57343 ? (n << 10) + r - 56613888 : n;
    }, ey.prototype.nextIndex = function (e, t) {
      void 0 === t && (t = !1);
      var i = this.source,
          s = i.length;
      if (e >= s) return s;
      var n,
          r = i.charCodeAt(e);
      return !(t || this.switchU) || r <= 55295 || r >= 57344 || e + 1 >= s || (n = i.charCodeAt(e + 1)) < 56320 || n > 57343 ? e + 1 : e + 2;
    }, ey.prototype.current = function (e) {
      return void 0 === e && (e = !1), this.at(this.pos, e);
    }, ey.prototype.lookahead = function (e) {
      return void 0 === e && (e = !1), this.at(this.nextIndex(this.pos, e), e);
    }, ey.prototype.advance = function (e) {
      void 0 === e && (e = !1), this.pos = this.nextIndex(this.pos, e);
    }, ey.prototype.eat = function (e, t) {
      return void 0 === t && (t = !1), this.current(t) === e && (this.advance(t), !0);
    }, eg.validateRegExpFlags = function (e) {
      for (var t = e.validFlags, i = e.flags, s = 0; s < i.length; s++) {
        var n = i.charAt(s);
        -1 === t.indexOf(n) && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(n, s + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
      }
    }, eg.validateRegExpPattern = function (e) {
      this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = !0, this.regexp_pattern(e));
    }, eg.regexp_pattern = function (e) {
      e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");

      for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
        var s = i[t];
        -1 === e.groupNames.indexOf(s) && e.raise("Invalid named capture referenced");
      }
    }, eg.regexp_disjunction = function (e) {
      for (this.regexp_alternative(e); e.eat(124);) {
        this.regexp_alternative(e);
      }

      this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
    }, eg.regexp_alternative = function (e) {
      for (; e.pos < e.source.length && this.regexp_eatTerm(e);) {
        ;
      }
    }, eg.regexp_eatTerm = function (e) {
      return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? !!this.regexp_eatAtom(e) : !!this.regexp_eatExtendedAtom(e)) && (this.regexp_eatQuantifier(e), !0);
    }, eg.regexp_eatAssertion = function (e) {
      var t = e.pos;
      if (e.lastAssertionIsQuantifiable = !1, e.eat(94) || e.eat(36)) return !0;

      if (e.eat(92)) {
        if (e.eat(66) || e.eat(98)) return !0;
        e.pos = t;
      }

      if (e.eat(40) && e.eat(63)) {
        var i = !1;
        if (this.options.ecmaVersion >= 9 && (i = e.eat(60)), e.eat(61) || e.eat(33)) return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !i, !0;
      }

      return e.pos = t, !1;
    }, eg.regexp_eatQuantifier = function (e, t) {
      return void 0 === t && (t = !1), !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), !0);
    }, eg.regexp_eatQuantifierPrefix = function (e, t) {
      return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
    }, eg.regexp_eatBracedQuantifier = function (e, t) {
      var i = e.pos;

      if (e.eat(123)) {
        var s = 0,
            n = -1;
        if (this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue), e.eat(125))) return -1 !== n && n < s && !t && e.raise("numbers out of order in {} quantifier"), !0;
        e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = i;
      }

      return !1;
    }, eg.regexp_eatAtom = function (e) {
      return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
    }, eg.regexp_eatReverseSolidusAtomEscape = function (e) {
      var t = e.pos;

      if (e.eat(92)) {
        if (this.regexp_eatAtomEscape(e)) return !0;
        e.pos = t;
      }

      return !1;
    }, eg.regexp_eatUncapturingGroup = function (e) {
      var t = e.pos;

      if (e.eat(40)) {
        if (e.eat(63) && e.eat(58)) {
          if (this.regexp_disjunction(e), e.eat(41)) return !0;
          e.raise("Unterminated group");
        }

        e.pos = t;
      }

      return !1;
    }, eg.regexp_eatCapturingGroup = function (e) {
      if (e.eat(40)) {
        if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : 63 === e.current() && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, !0;
        e.raise("Unterminated group");
      }

      return !1;
    }, eg.regexp_eatExtendedAtom = function (e) {
      return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
    }, eg.regexp_eatInvalidBracedQuantifier = function (e) {
      return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
    }, eg.regexp_eatSyntaxCharacter = function (e) {
      var t = e.current();
      return !!eb(t) && (e.lastIntValue = t, e.advance(), !0);
    }, eg.regexp_eatPatternCharacters = function (e) {
      for (var t = e.pos, i = 0; -1 !== (i = e.current()) && !eb(i);) {
        e.advance();
      }

      return e.pos !== t;
    }, eg.regexp_eatExtendedPatternCharacter = function (e) {
      var t = e.current();
      return -1 !== t && 36 !== t && (!(t >= 40) || !(t <= 43)) && 46 !== t && 63 !== t && 91 !== t && 94 !== t && 124 !== t && (e.advance(), !0);
    }, eg.regexp_groupSpecifier = function (e) {
      if (e.eat(63)) {
        if (this.regexp_eatGroupName(e)) {
          -1 !== e.groupNames.indexOf(e.lastStringValue) && e.raise("Duplicate capture group name"), e.groupNames.push(e.lastStringValue);
          return;
        }

        e.raise("Invalid group");
      }
    }, eg.regexp_eatGroupName = function (e) {
      if (e.lastStringValue = "", e.eat(60)) {
        if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
        e.raise("Invalid capture group name");
      }

      return !1;
    }, eg.regexp_eatRegExpIdentifierName = function (e) {
      if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
        for (e.lastStringValue += ev(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e);) {
          e.lastStringValue += ev(e.lastIntValue);
        }

        return !0;
      }

      return !1;
    }, eg.regexp_eatRegExpIdentifierStart = function (e) {
      var t,
          i = e.pos,
          s = this.options.ecmaVersion >= 11,
          n = e.current(s);
      return (e.advance(s), 92 === n && this.regexp_eatRegExpUnicodeEscapeSequence(e, s) && (n = e.lastIntValue), f(t = n, !0) || 36 === t || 95 === t) ? (e.lastIntValue = n, !0) : (e.pos = i, !1);
    }, eg.regexp_eatRegExpIdentifierPart = function (e) {
      var t,
          i = e.pos,
          s = this.options.ecmaVersion >= 11,
          n = e.current(s);
      return (e.advance(s), 92 === n && this.regexp_eatRegExpUnicodeEscapeSequence(e, s) && (n = e.lastIntValue), m(t = n, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t) ? (e.lastIntValue = n, !0) : (e.pos = i, !1);
    }, eg.regexp_eatAtomEscape = function (e) {
      return !!(this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) || (e.switchU && (99 === e.current() && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
    }, eg.regexp_eatBackReference = function (e) {
      var t = e.pos;

      if (this.regexp_eatDecimalEscape(e)) {
        var i = e.lastIntValue;
        if (e.switchU) return i > e.maxBackReference && (e.maxBackReference = i), !0;
        if (i <= e.numCapturingParens) return !0;
        e.pos = t;
      }

      return !1;
    }, eg.regexp_eatKGroupName = function (e) {
      if (e.eat(107)) {
        if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
        e.raise("Invalid named reference");
      }

      return !1;
    }, eg.regexp_eatCharacterEscape = function (e) {
      return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
    }, eg.regexp_eatCControlLetter = function (e) {
      var t = e.pos;

      if (e.eat(99)) {
        if (this.regexp_eatControlLetter(e)) return !0;
        e.pos = t;
      }

      return !1;
    }, eg.regexp_eatZero = function (e) {
      return !(48 !== e.current() || ek(e.lookahead())) && (e.lastIntValue = 0, e.advance(), !0);
    }, eg.regexp_eatControlEscape = function (e) {
      var t = e.current();
      return 116 === t ? (e.lastIntValue = 9, e.advance(), !0) : 110 === t ? (e.lastIntValue = 10, e.advance(), !0) : 118 === t ? (e.lastIntValue = 11, e.advance(), !0) : 102 === t ? (e.lastIntValue = 12, e.advance(), !0) : 114 === t && (e.lastIntValue = 13, e.advance(), !0);
    }, eg.regexp_eatControlLetter = function (e) {
      var t = e.current();
      return !!eE(t) && (e.lastIntValue = t % 32, e.advance(), !0);
    }, eg.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
      void 0 === t && (t = !1);
      var i = e.pos,
          s = t || e.switchU;

      if (e.eat(117)) {
        if (this.regexp_eatFixedHexDigits(e, 4)) {
          var n,
              r = e.lastIntValue;

          if (s && r >= 55296 && r <= 56319) {
            var a = e.pos;

            if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
              var o = e.lastIntValue;
              if (o >= 56320 && o <= 57343) return e.lastIntValue = (r - 55296) * 1024 + (o - 56320) + 65536, !0;
            }

            e.pos = a, e.lastIntValue = r;
          }

          return !0;
        }

        if (s && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && (n = e.lastIntValue) >= 0 && n <= 1114111) return !0;
        s && e.raise("Invalid unicode escape"), e.pos = i;
      }

      return !1;
    }, eg.regexp_eatIdentityEscape = function (e) {
      if (e.switchU) return !!this.regexp_eatSyntaxCharacter(e) || !!e.eat(47) && (e.lastIntValue = 47, !0);
      var t = e.current();
      return 99 !== t && (!e.switchN || 107 !== t) && (e.lastIntValue = t, e.advance(), !0);
    }, eg.regexp_eatDecimalEscape = function (e) {
      e.lastIntValue = 0;
      var t = e.current();

      if (t >= 49 && t <= 57) {
        do {
          e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
        } while ((t = e.current()) >= 48 && t <= 57);

        return !0;
      }

      return !1;
    }, eg.regexp_eatCharacterClassEscape = function (e) {
      var t = e.current();
      if (100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t) return e.lastIntValue = -1, e.advance(), !0;

      if (e.switchU && this.options.ecmaVersion >= 9 && (80 === t || 112 === t)) {
        if (e.lastIntValue = -1, e.advance(), e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125)) return !0;
        e.raise("Invalid property name");
      }

      return !1;
    }, eg.regexp_eatUnicodePropertyValueExpression = function (e) {
      var t = e.pos;

      if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
        var i = e.lastStringValue;

        if (this.regexp_eatUnicodePropertyValue(e)) {
          var s = e.lastStringValue;
          return this.regexp_validateUnicodePropertyNameAndValue(e, i, s), !0;
        }
      }

      if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
        var n = e.lastStringValue;
        return this.regexp_validateUnicodePropertyNameOrValue(e, n), !0;
      }

      return !1;
    }, eg.regexp_validateUnicodePropertyNameAndValue = function (e, t, i) {
      P(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
    }, eg.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
      e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
    }, eg.regexp_eatUnicodePropertyName = function (e) {
      var t = 0;

      for (e.lastStringValue = ""; eS(t = e.current());) {
        e.lastStringValue += ev(t), e.advance();
      }

      return "" !== e.lastStringValue;
    }, eg.regexp_eatUnicodePropertyValue = function (e) {
      var t,
          i = 0;

      for (e.lastStringValue = ""; eS(t = i = e.current()) || ek(t);) {
        e.lastStringValue += ev(i), e.advance();
      }

      return "" !== e.lastStringValue;
    }, eg.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
      return this.regexp_eatUnicodePropertyValue(e);
    }, eg.regexp_eatCharacterClass = function (e) {
      if (e.eat(91)) {
        if (e.eat(94), this.regexp_classRanges(e), e.eat(93)) return !0;
        e.raise("Unterminated character class");
      }

      return !1;
    }, eg.regexp_classRanges = function (e) {
      for (; this.regexp_eatClassAtom(e);) {
        var t = e.lastIntValue;

        if (e.eat(45) && this.regexp_eatClassAtom(e)) {
          var i = e.lastIntValue;
          e.switchU && (-1 === t || -1 === i) && e.raise("Invalid character class"), -1 !== t && -1 !== i && t > i && e.raise("Range out of order in character class");
        }
      }
    }, eg.regexp_eatClassAtom = function (e) {
      var t = e.pos;

      if (e.eat(92)) {
        if (this.regexp_eatClassEscape(e)) return !0;

        if (e.switchU) {
          var i = e.current();
          (99 === i || eC(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
        }

        e.pos = t;
      }

      var s = e.current();
      return 93 !== s && (e.lastIntValue = s, e.advance(), !0);
    }, eg.regexp_eatClassEscape = function (e) {
      var t = e.pos;
      if (e.eat(98)) return e.lastIntValue = 8, !0;
      if (e.switchU && e.eat(45)) return e.lastIntValue = 45, !0;

      if (!e.switchU && e.eat(99)) {
        if (this.regexp_eatClassControlLetter(e)) return !0;
        e.pos = t;
      }

      return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
    }, eg.regexp_eatClassControlLetter = function (e) {
      var t = e.current();
      return (!!ek(t) || 95 === t) && (e.lastIntValue = t % 32, e.advance(), !0);
    }, eg.regexp_eatHexEscapeSequence = function (e) {
      var t = e.pos;

      if (e.eat(120)) {
        if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
        e.switchU && e.raise("Invalid escape"), e.pos = t;
      }

      return !1;
    }, eg.regexp_eatDecimalDigits = function (e) {
      var t = e.pos,
          i = 0;

      for (e.lastIntValue = 0; ek(i = e.current());) {
        e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
      }

      return e.pos !== t;
    }, eg.regexp_eatHexDigits = function (e) {
      var t = e.pos,
          i = 0;

      for (e.lastIntValue = 0; e_(i = e.current());) {
        e.lastIntValue = 16 * e.lastIntValue + ew(i), e.advance();
      }

      return e.pos !== t;
    }, eg.regexp_eatLegacyOctalEscapeSequence = function (e) {
      if (this.regexp_eatOctalDigit(e)) {
        var t = e.lastIntValue;

        if (this.regexp_eatOctalDigit(e)) {
          var i = e.lastIntValue;
          t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = 64 * t + 8 * i + e.lastIntValue : e.lastIntValue = 8 * t + i;
        } else e.lastIntValue = t;

        return !0;
      }

      return !1;
    }, eg.regexp_eatOctalDigit = function (e) {
      var t = e.current();
      return eC(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
    }, eg.regexp_eatFixedHexDigits = function (e, t) {
      var i = e.pos;
      e.lastIntValue = 0;

      for (var s = 0; s < t; ++s) {
        var n = e.current();
        if (!e_(n)) return e.pos = i, !1;
        e.lastIntValue = 16 * e.lastIntValue + ew(n), e.advance();
      }

      return !0;
    };

    var eA = function eA(e) {
      this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new j(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
    },
        eT = B.prototype;

    function eN(e) {
      return "function" != typeof BigInt ? null : BigInt(e.replace(/_/g, ""));
    }

    function eI(e) {
      return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, (1023 & e) + 56320);
    }

    eT.next = function (e) {
      !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new eA(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
    }, eT.getToken = function () {
      return this.next(), new eA(this);
    }, "undefined" != typeof Symbol && (eT[Symbol.iterator] = function () {
      var e = this;
      return {
        next: function next() {
          var t = e.getToken();
          return {
            done: t.type === S.eof,
            value: t
          };
        }
      };
    }), eT.curContext = function () {
      return this.context[this.context.length - 1];
    }, eT.nextToken = function () {
      var e = this.curContext();
      return (e && e.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length) ? this.finishToken(S.eof) : e.override ? e.override(this) : void this.readToken(this.fullCharCodeAtPos());
    }, eT.readToken = function (e) {
      return f(e, this.options.ecmaVersion >= 6) || 92 === e ? this.readWord() : this.getTokenFromCode(e);
    }, eT.fullCharCodeAtPos = function () {
      var e = this.input.charCodeAt(this.pos);
      return e <= 55295 || e >= 57344 ? e : (e << 10) + this.input.charCodeAt(this.pos + 1) - 56613888;
    }, eT.skipBlockComment = function () {
      var e,
          t = this.options.onComment && this.curPosition(),
          i = this.pos,
          s = this.input.indexOf("*/", this.pos += 2);
      if (-1 === s && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations) for (_.lastIndex = i; (e = _.exec(this.input)) && e.index < this.pos;) {
        ++this.curLine, this.lineStart = e.index + e[0].length;
      }
      this.options.onComment && this.options.onComment(!0, this.input.slice(i + 2, s), i, this.pos, t, this.curPosition());
    }, eT.skipLineComment = function (e) {
      for (var t = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !w(s);) {
        s = this.input.charCodeAt(++this.pos);
      }

      this.options.onComment && this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, i, this.curPosition());
    }, eT.skipSpace = function () {
      e: for (; this.pos < this.input.length;) {
        var e = this.input.charCodeAt(this.pos);

        switch (e) {
          case 32:
          case 160:
            ++this.pos;
            break;

          case 13:
            10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;

          case 10:
          case 8232:
          case 8233:
            ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
            break;

          case 47:
            switch (this.input.charCodeAt(this.pos + 1)) {
              case 42:
                this.skipBlockComment();
                break;

              case 47:
                this.skipLineComment(2);
                break;

              default:
                break e;
            }

            break;

          default:
            if (e > 8 && e < 14 || e >= 5760 && C.test(String.fromCharCode(e))) ++this.pos;else break e;
        }
      }
    }, eT.finishToken = function (e, t) {
      this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
      var i = this.type;
      this.type = e, this.value = t, this.updateContext(i);
    }, eT.readToken_dot = function () {
      var e = this.input.charCodeAt(this.pos + 1);
      if (e >= 48 && e <= 57) return this.readNumber(!0);
      var t = this.input.charCodeAt(this.pos + 2);
      return this.options.ecmaVersion >= 6 && 46 === e && 46 === t ? (this.pos += 3, this.finishToken(S.ellipsis)) : (++this.pos, this.finishToken(S.dot));
    }, eT.readToken_slash = function () {
      var e = this.input.charCodeAt(this.pos + 1);
      return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === e ? this.finishOp(S.assign, 2) : this.finishOp(S.slash, 1);
    }, eT.readToken_mult_modulo_exp = function (e) {
      var t = this.input.charCodeAt(this.pos + 1),
          i = 1,
          s = 42 === e ? S.star : S.modulo;
      return (this.options.ecmaVersion >= 7 && 42 === e && 42 === t && (++i, s = S.starstar, t = this.input.charCodeAt(this.pos + 2)), 61 === t) ? this.finishOp(S.assign, i + 1) : this.finishOp(s, i);
    }, eT.readToken_pipe_amp = function (e) {
      var t = this.input.charCodeAt(this.pos + 1);
      return t === e ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(S.assign, 3) : this.finishOp(124 === e ? S.logicalOR : S.logicalAND, 2) : 61 === t ? this.finishOp(S.assign, 2) : this.finishOp(124 === e ? S.bitwiseOR : S.bitwiseAND, 1);
    }, eT.readToken_caret = function () {
      return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(S.assign, 2) : this.finishOp(S.bitwiseXOR, 1);
    }, eT.readToken_plus_min = function (e) {
      var t = this.input.charCodeAt(this.pos + 1);
      return t === e ? 45 === t && !this.inModule && 62 === this.input.charCodeAt(this.pos + 2) && (0 === this.lastTokEnd || k.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(S.incDec, 2) : 61 === t ? this.finishOp(S.assign, 2) : this.finishOp(S.plusMin, 1);
    }, eT.readToken_lt_gt = function (e) {
      var t = this.input.charCodeAt(this.pos + 1),
          i = 1;
      return t === e ? (i = 62 === e && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i)) ? this.finishOp(S.assign, i + 1) : this.finishOp(S.bitShift, i) : 33 !== t || 60 !== e || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === t && (i = 2), this.finishOp(S.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
    }, eT.readToken_eq_excl = function (e) {
      var t = this.input.charCodeAt(this.pos + 1);
      return 61 === t ? this.finishOp(S.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === e && 62 === t && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(S.arrow)) : this.finishOp(61 === e ? S.eq : S.prefix, 1);
    }, eT.readToken_question = function () {
      var e = this.options.ecmaVersion;

      if (e >= 11) {
        var t = this.input.charCodeAt(this.pos + 1);

        if (46 === t) {
          var i = this.input.charCodeAt(this.pos + 2);
          if (i < 48 || i > 57) return this.finishOp(S.questionDot, 2);
        }

        if (63 === t) return e >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(S.assign, 3) : this.finishOp(S.coalesce, 2);
      }

      return this.finishOp(S.question, 1);
    }, eT.getTokenFromCode = function (e) {
      switch (e) {
        case 46:
          return this.readToken_dot();

        case 40:
          return ++this.pos, this.finishToken(S.parenL);

        case 41:
          return ++this.pos, this.finishToken(S.parenR);

        case 59:
          return ++this.pos, this.finishToken(S.semi);

        case 44:
          return ++this.pos, this.finishToken(S.comma);

        case 91:
          return ++this.pos, this.finishToken(S.bracketL);

        case 93:
          return ++this.pos, this.finishToken(S.bracketR);

        case 123:
          return ++this.pos, this.finishToken(S.braceL);

        case 125:
          return ++this.pos, this.finishToken(S.braceR);

        case 58:
          return ++this.pos, this.finishToken(S.colon);

        case 96:
          if (this.options.ecmaVersion < 6) break;
          return ++this.pos, this.finishToken(S.backQuote);

        case 48:
          var t = this.input.charCodeAt(this.pos + 1);
          if (120 === t || 88 === t) return this.readRadixNumber(16);

          if (this.options.ecmaVersion >= 6) {
            if (111 === t || 79 === t) return this.readRadixNumber(8);
            if (98 === t || 66 === t) return this.readRadixNumber(2);
          }

        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return this.readNumber(!1);

        case 34:
        case 39:
          return this.readString(e);

        case 47:
          return this.readToken_slash();

        case 37:
        case 42:
          return this.readToken_mult_modulo_exp(e);

        case 124:
        case 38:
          return this.readToken_pipe_amp(e);

        case 94:
          return this.readToken_caret();

        case 43:
        case 45:
          return this.readToken_plus_min(e);

        case 60:
        case 62:
          return this.readToken_lt_gt(e);

        case 61:
        case 33:
          return this.readToken_eq_excl(e);

        case 63:
          return this.readToken_question();

        case 126:
          return this.finishOp(S.prefix, 1);
      }

      this.raise(this.pos, "Unexpected character '" + eI(e) + "'");
    }, eT.finishOp = function (e, t) {
      var i = this.input.slice(this.pos, this.pos + t);
      return this.pos += t, this.finishToken(e, i);
    }, eT.readRegexp = function () {
      for (var e, t, i = this.pos;;) {
        this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
        var s = this.input.charAt(this.pos);
        if (k.test(s) && this.raise(i, "Unterminated regular expression"), e) e = !1;else {
          if ("[" === s) t = !0;else if ("]" === s && t) t = !1;else if ("/" === s && !t) break;
          e = "\\" === s;
        }
        ++this.pos;
      }

      var n = this.input.slice(i, this.pos);
      ++this.pos;
      var r = this.pos,
          a = this.readWord1();
      this.containsEsc && this.unexpected(r);
      var o = this.regexpState || (this.regexpState = new ey(this));
      o.reset(i, n, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
      var h = null;

      try {
        h = new RegExp(n, a);
      } catch (e) {}

      return this.finishToken(S.regexp, {
        pattern: n,
        flags: a,
        value: h
      });
    }, eT.readInt = function (e, t, i) {
      for (var s = this.options.ecmaVersion >= 12 && void 0 === t, n = i && 48 === this.input.charCodeAt(this.pos), r = this.pos, a = 0, o = 0, h = 0, p = null == t ? 1 / 0 : t; h < p; ++h, ++this.pos) {
        var l = this.input.charCodeAt(this.pos),
            c = void 0;

        if (s && 95 === l) {
          n && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = l;
          continue;
        }

        if ((c = l >= 97 ? l - 97 + 10 : l >= 65 ? l - 65 + 10 : l >= 48 && l <= 57 ? l - 48 : 1 / 0) >= e) break;
        o = l, a = a * e + c;
      }

      return (s && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === r || null != t && this.pos - r !== t) ? null : a;
    }, eT.readRadixNumber = function (e) {
      var t = this.pos;
      this.pos += 2;
      var i = this.readInt(e);
      return null == i && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (i = eN(this.input.slice(t, this.pos)), ++this.pos) : f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(S.num, i);
    }, eT.readNumber = function (e) {
      var t,
          i = this.pos;
      e || null !== this.readInt(10, void 0, !0) || this.raise(i, "Invalid number");
      var s = this.pos - i >= 2 && 48 === this.input.charCodeAt(i);
      s && this.strict && this.raise(i, "Invalid number");
      var n = this.input.charCodeAt(this.pos);

      if (!s && !e && this.options.ecmaVersion >= 11 && 110 === n) {
        var r = eN(this.input.slice(i, this.pos));
        return ++this.pos, f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(S.num, r);
      }

      s && /[89]/.test(this.input.slice(i, this.pos)) && (s = !1), 46 !== n || s || (++this.pos, this.readInt(10), n = this.input.charCodeAt(this.pos)), 69 !== n && 101 !== n || s || ((43 === (n = this.input.charCodeAt(++this.pos)) || 45 === n) && ++this.pos, null === this.readInt(10) && this.raise(i, "Invalid number")), f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
      var a = (t = this.input.slice(i, this.pos), s ? parseInt(t, 8) : parseFloat(t.replace(/_/g, "")));
      return this.finishToken(S.num, a);
    }, eT.readCodePoint = function () {
      var e;

      if (123 === this.input.charCodeAt(this.pos)) {
        this.options.ecmaVersion < 6 && this.unexpected();
        var t = ++this.pos;
        e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(t, "Code point out of bounds");
      } else e = this.readHexChar(4);

      return e;
    }, eT.readString = function (e) {
      for (var t = "", i = ++this.pos;;) {
        this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
        var s = this.input.charCodeAt(this.pos);
        if (s === e) break;
        92 === s ? (t += this.input.slice(i, this.pos) + this.readEscapedChar(!1), i = this.pos) : (w(s, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
      }

      return t += this.input.slice(i, this.pos++), this.finishToken(S.string, t);
    };
    var eP = {};
    eT.tryReadTemplateToken = function () {
      this.inTemplateElement = !0;

      try {
        this.readTmplToken();
      } catch (e) {
        if (e === eP) this.readInvalidTemplateToken();else throw e;
      }

      this.inTemplateElement = !1;
    }, eT.invalidStringToken = function (e, t) {
      if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw eP;
      this.raise(e, t);
    }, eT.readTmplToken = function () {
      for (var e = "", t = this.pos;;) {
        this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
        var i = this.input.charCodeAt(this.pos);

        if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.pos + 1)) {
          if (this.pos === this.start && (this.type === S.template || this.type === S.invalidTemplate)) {
            if (36 === i) return this.pos += 2, this.finishToken(S.dollarBraceL);
            return ++this.pos, this.finishToken(S.backQuote);
          }

          return e += this.input.slice(t, this.pos), this.finishToken(S.template, e);
        }

        if (92 === i) e += this.input.slice(t, this.pos) + this.readEscapedChar(!0), t = this.pos;else if (w(i)) {
          switch (e += this.input.slice(t, this.pos), ++this.pos, i) {
            case 13:
              10 === this.input.charCodeAt(this.pos) && ++this.pos;

            case 10:
              e += "\n";
              break;

            default:
              e += String.fromCharCode(i);
          }

          this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
        } else ++this.pos;
      }
    }, eT.readInvalidTemplateToken = function () {
      for (; this.pos < this.input.length; this.pos++) {
        switch (this.input[this.pos]) {
          case "\\":
            ++this.pos;
            break;

          case "$":
            if ("{" !== this.input[this.pos + 1]) break;

          case "`":
            return this.finishToken(S.invalidTemplate, this.input.slice(this.start, this.pos));
        }
      }

      this.raise(this.start, "Unterminated template");
    }, eT.readEscapedChar = function (e) {
      var t = this.input.charCodeAt(++this.pos);

      switch (++this.pos, t) {
        case 110:
          return "\n";

        case 114:
          return "\r";

        case 120:
          return String.fromCharCode(this.readHexChar(2));

        case 117:
          return eI(this.readCodePoint());

        case 116:
          return "	";

        case 98:
          return "\b";

        case 118:
          return "\v";

        case 102:
          return "\f";

        case 13:
          10 === this.input.charCodeAt(this.pos) && ++this.pos;

        case 10:
          return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";

        case 56:
        case 57:
          if (e) {
            var i = this.pos - 1;
            return this.invalidStringToken(i, "Invalid escape sequence in template string"), null;
          }

        default:
          if (t >= 48 && t <= 55) {
            var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                n = parseInt(s, 8);
            return n > 255 && (n = parseInt(s = s.slice(0, -1), 8)), this.pos += s.length - 1, t = this.input.charCodeAt(this.pos), ("0" !== s || 56 === t || 57 === t) && (this.strict || e) && this.invalidStringToken(this.pos - 1 - s.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(n);
          }

          if (w(t)) return "";
          return String.fromCharCode(t);
      }
    }, eT.readHexChar = function (e) {
      var t = this.pos,
          i = this.readInt(16, e);
      return null === i && this.invalidStringToken(t, "Bad character escape sequence"), i;
    }, eT.readWord1 = function () {
      this.containsEsc = !1;

      for (var e = "", t = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
        var n = this.fullCharCodeAtPos();
        if (m(n, s)) this.pos += n <= 65535 ? 1 : 2;else if (92 === n) {
          this.containsEsc = !0, e += this.input.slice(i, this.pos);
          var r = this.pos;
          117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
          var a = this.readCodePoint();
          (t ? f : m)(a, s) || this.invalidStringToken(r, "Invalid Unicode escape"), e += eI(a), i = this.pos;
        } else break;
        t = !1;
      }

      return e + this.input.slice(i, this.pos);
    }, eT.readWord = function () {
      var e = this.readWord1(),
          t = S.name;
      return this.keywords.test(e) && (t = b[e]), this.finishToken(t, e);
    };
    var eL = "7.4.1";

    function eV(e, t) {
      return B.parse(e, t);
    }

    function eO(e, t, i) {
      return B.parseExpressionAt(e, t, i);
    }

    function ej(e, t) {
      return B.tokenizer(e, t);
    }

    B.acorn = {
      Parser: B,
      version: eL,
      defaultOptions: D,
      Position: O,
      SourceLocation: j,
      getLineInfo: R,
      Node: ei,
      TokenType: x,
      tokTypes: S,
      keywordTypes: b,
      TokContext: er,
      tokContexts: ea,
      isIdentifierChar: m,
      isIdentifierStart: f,
      Token: eA,
      isNewLine: w,
      lineBreak: k,
      lineBreakG: _,
      nonASCIIwhitespace: C
    };
  }), o("80lpX", function (e, t) {
    e.exports = JSON.parse('{"name":"espree","description":"An Esprima-compatible JavaScript parser built on Acorn","author":"Nicholas C. Zakas <nicholas+npm@nczconsulting.com>","homepage":"https://github.com/eslint/espree","main":"espree.js","version":"7.3.1","files":["lib","espree.js"],"engines":{"node":"^10.12.0 || >=12.0.0"},"repository":"eslint/espree","bugs":{"url":"http://github.com/eslint/espree.git"},"license":"BSD-2-Clause","dependencies":{"acorn":"^7.4.0","acorn-jsx":"^5.3.1","eslint-visitor-keys":"^1.3.0"},"devDependencies":{"browserify":"^16.5.0","chai":"^4.2.0","eslint":"^6.0.1","eslint-config-eslint":"^5.0.1","eslint-plugin-node":"^9.1.0","eslint-release":"^1.0.0","esprima":"latest","esprima-fb":"^8001.2001.0-dev-harmony-fb","json-diff":"^0.5.4","leche":"^2.3.0","mocha":"^6.2.0","nyc":"^14.1.1","regenerate":"^1.4.0","shelljs":"^0.3.0","shelljs-nodecli":"^0.1.1","unicode-6.3.0":"^0.7.5"},"keywords":["ast","ecmascript","javascript","parser","syntax","acorn"],"scripts":{"generate-regex":"node tools/generate-identifier-regex.js","test":"npm run-script lint && node Makefile.js test","lint":"node Makefile.js lint","fixlint":"node Makefile.js lint --fix","sync-docs":"node Makefile.js docs","browserify":"node Makefile.js browserify","generate-release":"eslint-generate-release","generate-alpharelease":"eslint-generate-prerelease alpha","generate-betarelease":"eslint-generate-prerelease beta","generate-rcrelease":"eslint-generate-prerelease rc","publish-release":"eslint-publish-release"}}');
  }), o("a8cff", function (e, t) {
    var i = a("jkWpo"),
        s = Object.freeze(Object.keys(i)),
        n = !0,
        r = !1,
        o = void 0;

    try {
      for (var h, p = s[Symbol.iterator](); !(n = (h = p.next()).done); n = !0) {
        var l = h.value;
        Object.freeze(i[l]);
      }
    } catch (e) {
      r = !0, o = e;
    } finally {
      try {
        n || null == p.return || p.return();
      } finally {
        if (r) throw o;
      }
    }

    Object.freeze(i);
    var c = new Set(["parent", "leadingComments", "trailingComments"]);

    function u(e) {
      return !c.has(e) && "_" !== e[0];
    }

    e.exports = Object.freeze({
      KEYS: i,
      getKeys: function getKeys(e) {
        return Object.keys(e).filter(u);
      },
      unionWith: function unionWith(e) {
        var t = Object.assign({}, i),
            s = !0,
            n = !1,
            r = void 0;

        try {
          for (var a, o = Object.keys(e)[Symbol.iterator](); !(s = (a = o.next()).done); s = !0) {
            var h = a.value;

            if (t.hasOwnProperty(h)) {
              var p = new Set(e[h]),
                  l = !0,
                  c = !1,
                  u = void 0;

              try {
                for (var d, f = t[h][Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                  var m = d.value;
                  p.add(m);
                }
              } catch (e) {
                c = !0, u = e;
              } finally {
                try {
                  l || null == f.return || f.return();
                } finally {
                  if (c) throw u;
                }
              }

              t[h] = Object.freeze(Array.from(p));
            } else t[h] = Object.freeze(Array.from(e[h]));
          }
        } catch (e) {
          n = !0, r = e;
        } finally {
          try {
            s || null == o.return || o.return();
          } finally {
            if (n) throw r;
          }
        }

        return Object.freeze(t);
      }
    });
  }), o("jkWpo", function (e, t) {
    e.exports = JSON.parse('{"AssignmentExpression":["left","right"],"AssignmentPattern":["left","right"],"ArrayExpression":["elements"],"ArrayPattern":["elements"],"ArrowFunctionExpression":["params","body"],"AwaitExpression":["argument"],"BlockStatement":["body"],"BinaryExpression":["left","right"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ChainExpression":["expression"],"ClassBody":["body"],"ClassDeclaration":["id","superClass","body"],"ClassExpression":["id","superClass","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["body","test"],"EmptyStatement":[],"ExportAllDeclaration":["exported","source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["exported","local"],"ExpressionStatement":["expression"],"ExperimentalRestProperty":["argument"],"ExperimentalSpreadProperty":["argument"],"ForStatement":["init","test","update","body"],"ForInStatement":["left","right","body"],"ForOfStatement":["left","right","body"],"FunctionDeclaration":["id","params","body"],"FunctionExpression":["id","params","body"],"Identifier":[],"IfStatement":["test","consequent","alternate"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportExpression":["source"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["imported","local"],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"JSXFragment":["openingFragment","children","closingFragment"],"Literal":[],"LabeledStatement":["label","body"],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"MetaProperty":["meta","property"],"MethodDefinition":["key","value"],"NewExpression":["callee","arguments"],"ObjectExpression":["properties"],"ObjectPattern":["properties"],"Program":["body"],"Property":["key","value"],"RestElement":["argument"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SpreadElement":["argument"],"Super":[],"SwitchStatement":["discriminant","cases"],"SwitchCase":["test","consequent"],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"YieldExpression":["argument"]}');
  }), o("4rf7n", function (e, t) {
    e.exports = JSON.parse('{"name":"estraverse","description":"ECMAScript JS AST traversal functions","homepage":"https://github.com/estools/estraverse","main":"estraverse.js","version":"4.3.0","engines":{"node":">=4.0"},"maintainers":[{"name":"Yusuke Suzuki","email":"utatane.tea@gmail.com","web":"http://github.com/Constellation"}],"repository":{"type":"git","url":"http://github.com/estools/estraverse.git"},"devDependencies":{"babel-preset-env":"^1.6.1","babel-register":"^6.3.13","chai":"^2.1.1","espree":"^1.11.0","gulp":"^3.8.10","gulp-bump":"^0.2.2","gulp-filter":"^2.0.0","gulp-git":"^1.0.1","gulp-tag-version":"^1.3.0","jshint":"^2.5.6","mocha":"^2.1.0"},"license":"BSD-2-Clause","scripts":{"test":"npm run-script lint && npm run-script unit-test","lint":"jshint estraverse.js","unit-test":"mocha --compilers js:babel-register"}}');
  }), "function" == typeof SuppressedError && SuppressedError;
  var u = (t = a("jVLb9")) && t.__esModule ? t : {
    default: t
  },
      d = {};

  function f(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var i = 0, s = Array(t); i < t; i++) {
      s[i] = e[i];
    }

    return s;
  }

  function m(e) {
    return function (e) {
      if (Array.isArray(e)) return f(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return f(e, void 0);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i) return Array.from(i);
        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return f(e, void 0);
      }
    }(e) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  var x = a("8NOO4"),
      g = {};

  function y(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
  }

  function v(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  function b(e, t, i) {
    return t && v(e.prototype, t), i && v(e, i), e;
  }

  function E(e) {
    return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function S(e, t, i) {
    return (S = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, i) {
      var s = function (e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = E(e));) {
          ;
        }

        return e;
      }(e, t);

      if (s) {
        var n = Object.getOwnPropertyDescriptor(s, t);
        return n.get ? n.get.call(i || e) : n.value;
      }
    })(e, t, i || e);
  }

  function k(e, t) {
    return (k = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function _(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && k(e, t);
  }

  function w(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var i,
          s = E(e);
      return i = t ? Reflect.construct(s, arguments, E(this).constructor) : s.apply(this, arguments), i && ("object" === l(i) || "function" == typeof i) ? i : function (e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(this);
    };
  }

  var C = {};
  C = {
    quot: '"',
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    frasl: "⁄",
    euro: "€",
    image: "ℑ",
    weierp: "℘",
    real: "ℜ",
    trade: "™",
    alefsym: "ℵ",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lArr: "⇐",
    uArr: "⇑",
    rArr: "⇒",
    dArr: "⇓",
    hArr: "⇔",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    lang: "〈",
    rang: "〉",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦"
  };
  var A = /^[\da-fA-F]+$/,
      T = /^\d+$/,
      N = new WeakMap();

  function I(e) {
    e = e.Parser.acorn || e;
    var t = N.get(e);

    if (!t) {
      var i = e.tokTypes,
          s = e.TokContext,
          n = e.TokenType,
          r = new s("<tag", !1),
          a = new s("</tag", !1),
          o = new s("<tag>...</tag>", !0, !0),
          h = {
        jsxName: new n("jsxName"),
        jsxText: new n("jsxText", {
          beforeExpr: !0
        }),
        jsxTagStart: new n("jsxTagStart", {
          startsExpr: !0
        }),
        jsxTagEnd: new n("jsxTagEnd")
      };
      h.jsxTagStart.updateContext = function () {
        this.context.push(o), this.context.push(r), this.exprAllowed = !1;
      }, h.jsxTagEnd.updateContext = function (e) {
        var t = this.context.pop();
        t === r && e === i.slash || t === a ? (this.context.pop(), this.exprAllowed = this.curContext() === o) : this.exprAllowed = !0;
      }, t = {
        tokContexts: {
          tc_oTag: r,
          tc_cTag: a,
          tc_expr: o
        },
        tokTypes: h
      }, N.set(e, t);
    }

    return t;
  }

  function P(e) {
    return e ? "JSXIdentifier" === e.type ? e.name : "JSXNamespacedName" === e.type ? e.namespace.name + ":" + e.name.name : "JSXMemberExpression" === e.type ? P(e.object) + "." + P(e.property) : void 0 : e;
  }

  Object.defineProperty(g = function g(e) {
    return e = e || {}, function (t) {
      var i, s, n, r, o, h, p, l, c, u, d, f;
      return i = {
        allowNamespaces: !1 !== e.allowNamespaces,
        allowNamespacedObjects: !!e.allowNamespacedObjects
      }, n = I(s = t.acorn || a("8NOO4")), r = s.tokTypes, o = n.tokTypes, h = s.tokContexts, p = n.tokContexts.tc_oTag, l = n.tokContexts.tc_cTag, c = n.tokContexts.tc_expr, u = s.isNewLine, d = s.isIdentifierStart, f = s.isIdentifierChar, function (e) {
        _(s, e);

        var t = w(s);

        function s() {
          return y(this, s), t.apply(this, arguments);
        }

        return b(s, [{
          key: "jsx_readToken",
          value: function value() {
            for (var e = "", t = this.pos;;) {
              this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
              var i = this.input.charCodeAt(this.pos);

              switch (i) {
                case 60:
                case 123:
                  if (this.pos === this.start) {
                    if (60 === i && this.exprAllowed) return ++this.pos, this.finishToken(o.jsxTagStart);
                    return this.getTokenFromCode(i);
                  }

                  return e += this.input.slice(t, this.pos), this.finishToken(o.jsxText, e);

                case 38:
                  e += this.input.slice(t, this.pos) + this.jsx_readEntity(), t = this.pos;
                  break;

                case 62:
                case 125:
                  this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (62 === i ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');

                default:
                  u(i) ? (e += this.input.slice(t, this.pos) + this.jsx_readNewLine(!0), t = this.pos) : ++this.pos;
              }
            }
          }
        }, {
          key: "jsx_readNewLine",
          value: function value(e) {
            var t,
                i = this.input.charCodeAt(this.pos);
            return ++this.pos, 13 === i && 10 === this.input.charCodeAt(this.pos) ? (++this.pos, t = e ? "\n" : "\r\n") : t = String.fromCharCode(i), this.options.locations && (++this.curLine, this.lineStart = this.pos), t;
          }
        }, {
          key: "jsx_readString",
          value: function value(e) {
            for (var t = "", i = ++this.pos;;) {
              this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
              var s = this.input.charCodeAt(this.pos);
              if (s === e) break;
              38 === s ? (t += this.input.slice(i, this.pos) + this.jsx_readEntity(), i = this.pos) : u(s) ? (t += this.input.slice(i, this.pos) + this.jsx_readNewLine(!1), i = this.pos) : ++this.pos;
            }

            return t += this.input.slice(i, this.pos++), this.finishToken(r.string, t);
          }
        }, {
          key: "jsx_readEntity",
          value: function value() {
            var e,
                t = "",
                i = 0,
                s = this.input[this.pos];
            "&" !== s && this.raise(this.pos, "Entity must start with an ampersand");

            for (var n = ++this.pos; this.pos < this.input.length && i++ < 10;) {
              if (";" === (s = this.input[this.pos++])) {
                "#" === t[0] ? "x" === t[1] ? (t = t.substr(2), A.test(t) && (e = String.fromCharCode(parseInt(t, 16)))) : (t = t.substr(1), T.test(t) && (e = String.fromCharCode(parseInt(t, 10)))) : e = C[t];
                break;
              }

              t += s;
            }

            return e || (this.pos = n, "&");
          }
        }, {
          key: "jsx_readWord",
          value: function value() {
            var e,
                t = this.pos;

            do {
              e = this.input.charCodeAt(++this.pos);
            } while (f(e) || 45 === e);

            return this.finishToken(o.jsxName, this.input.slice(t, this.pos));
          }
        }, {
          key: "jsx_parseIdentifier",
          value: function value() {
            var e = this.startNode();
            return this.type === o.jsxName ? e.name = this.value : this.type.keyword ? e.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
          }
        }, {
          key: "jsx_parseNamespacedName",
          value: function value() {
            var e = this.start,
                t = this.startLoc,
                s = this.jsx_parseIdentifier();
            if (!i.allowNamespaces || !this.eat(r.colon)) return s;
            var n = this.startNodeAt(e, t);
            return n.namespace = s, n.name = this.jsx_parseIdentifier(), this.finishNode(n, "JSXNamespacedName");
          }
        }, {
          key: "jsx_parseElementName",
          value: function value() {
            if (this.type === o.jsxTagEnd) return "";
            var e = this.start,
                t = this.startLoc,
                s = this.jsx_parseNamespacedName();

            for (this.type !== r.dot || "JSXNamespacedName" !== s.type || i.allowNamespacedObjects || this.unexpected(); this.eat(r.dot);) {
              var n = this.startNodeAt(e, t);
              n.object = s, n.property = this.jsx_parseIdentifier(), s = this.finishNode(n, "JSXMemberExpression");
            }

            return s;
          }
        }, {
          key: "jsx_parseAttributeValue",
          value: function value() {
            switch (this.type) {
              case r.braceL:
                var e = this.jsx_parseExpressionContainer();
                return "JSXEmptyExpression" === e.expression.type && this.raise(e.start, "JSX attributes must only be assigned a non-empty expression"), e;

              case o.jsxTagStart:
              case r.string:
                return this.parseExprAtom();

              default:
                this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
            }
          }
        }, {
          key: "jsx_parseEmptyExpression",
          value: function value() {
            var e = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
            return this.finishNodeAt(e, "JSXEmptyExpression", this.start, this.startLoc);
          }
        }, {
          key: "jsx_parseExpressionContainer",
          value: function value() {
            var e = this.startNode();
            return this.next(), e.expression = this.type === r.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(r.braceR), this.finishNode(e, "JSXExpressionContainer");
          }
        }, {
          key: "jsx_parseAttribute",
          value: function value() {
            var e = this.startNode();
            return this.eat(r.braceL) ? (this.expect(r.ellipsis), e.argument = this.parseMaybeAssign(), this.expect(r.braceR), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsx_parseNamespacedName(), e.value = this.eat(r.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
          }
        }, {
          key: "jsx_parseOpeningElementAt",
          value: function value(e, t) {
            var i = this.startNodeAt(e, t);
            i.attributes = [];
            var s = this.jsx_parseElementName();

            for (s && (i.name = s); this.type !== r.slash && this.type !== o.jsxTagEnd;) {
              i.attributes.push(this.jsx_parseAttribute());
            }

            return i.selfClosing = this.eat(r.slash), this.expect(o.jsxTagEnd), this.finishNode(i, s ? "JSXOpeningElement" : "JSXOpeningFragment");
          }
        }, {
          key: "jsx_parseClosingElementAt",
          value: function value(e, t) {
            var i = this.startNodeAt(e, t),
                s = this.jsx_parseElementName();
            return s && (i.name = s), this.expect(o.jsxTagEnd), this.finishNode(i, s ? "JSXClosingElement" : "JSXClosingFragment");
          }
        }, {
          key: "jsx_parseElementAt",
          value: function value(e, t) {
            var i = this.startNodeAt(e, t),
                s = [],
                n = this.jsx_parseOpeningElementAt(e, t),
                a = null;

            if (!n.selfClosing) {
              t: for (;;) {
                switch (this.type) {
                  case o.jsxTagStart:
                    if (e = this.start, t = this.startLoc, this.next(), this.eat(r.slash)) {
                      a = this.jsx_parseClosingElementAt(e, t);
                      break t;
                    }

                    s.push(this.jsx_parseElementAt(e, t));
                    break;

                  case o.jsxText:
                    s.push(this.parseExprAtom());
                    break;

                  case r.braceL:
                    s.push(this.jsx_parseExpressionContainer());
                    break;

                  default:
                    this.unexpected();
                }
              }

              P(a.name) !== P(n.name) && this.raise(a.start, "Expected corresponding JSX closing tag for <" + P(n.name) + ">");
            }

            var h = n.name ? "Element" : "Fragment";
            return i["opening" + h] = n, i["closing" + h] = a, i.children = s, this.type === r.relational && "<" === this.value && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(i, "JSX" + h);
          }
        }, {
          key: "jsx_parseText",
          value: function value() {
            var e = this.parseLiteral(this.value);
            return e.type = "JSXText", e;
          }
        }, {
          key: "jsx_parseElement",
          value: function value() {
            var e = this.start,
                t = this.startLoc;
            return this.next(), this.jsx_parseElementAt(e, t);
          }
        }, {
          key: "parseExprAtom",
          value: function value(e) {
            return this.type === o.jsxText ? this.jsx_parseText() : this.type === o.jsxTagStart ? this.jsx_parseElement() : S(E(s.prototype), "parseExprAtom", this).call(this, e);
          }
        }, {
          key: "readToken",
          value: function value(e) {
            var t = this.curContext();
            if (t === c) return this.jsx_readToken();

            if (t === p || t === l) {
              if (d(e)) return this.jsx_readWord();
              if (62 == e) return ++this.pos, this.finishToken(o.jsxTagEnd);
              if ((34 === e || 39 === e) && t == p) return this.jsx_readString(e);
            }

            return 60 === e && this.exprAllowed && 33 !== this.input.charCodeAt(this.pos + 1) ? (++this.pos, this.finishToken(o.jsxTagStart)) : S(E(s.prototype), "readToken", this).call(this, e);
          }
        }, {
          key: "updateContext",
          value: function value(e) {
            if (this.type == r.braceL) {
              var t = this.curContext();
              t == p ? this.context.push(h.b_expr) : t == c ? this.context.push(h.b_tmpl) : S(E(s.prototype), "updateContext", this).call(this, e), this.exprAllowed = !0;
            } else {
              if (this.type !== r.slash || e !== o.jsxTagStart) return S(E(s.prototype), "updateContext", this).call(this, e);
              this.context.length -= 2, this.context.push(l), this.exprAllowed = !1;
            }
          }
        }], [{
          key: "acornJsx",
          get: function get() {
            return n;
          }
        }]), s;
      }(t);
    };
  }, "tokTypes", {
    get: function get() {
      return I(a("8NOO4")).tokTypes;
    },
    configurable: !0,
    enumerable: !0
  });
  var L = {};
  L = {
    AssignmentExpression: "AssignmentExpression",
    AssignmentPattern: "AssignmentPattern",
    ArrayExpression: "ArrayExpression",
    ArrayPattern: "ArrayPattern",
    ArrowFunctionExpression: "ArrowFunctionExpression",
    AwaitExpression: "AwaitExpression",
    BlockStatement: "BlockStatement",
    BinaryExpression: "BinaryExpression",
    BreakStatement: "BreakStatement",
    CallExpression: "CallExpression",
    CatchClause: "CatchClause",
    ClassBody: "ClassBody",
    ClassDeclaration: "ClassDeclaration",
    ClassExpression: "ClassExpression",
    ConditionalExpression: "ConditionalExpression",
    ContinueStatement: "ContinueStatement",
    DoWhileStatement: "DoWhileStatement",
    DebuggerStatement: "DebuggerStatement",
    EmptyStatement: "EmptyStatement",
    ExpressionStatement: "ExpressionStatement",
    ForStatement: "ForStatement",
    ForInStatement: "ForInStatement",
    ForOfStatement: "ForOfStatement",
    FunctionDeclaration: "FunctionDeclaration",
    FunctionExpression: "FunctionExpression",
    Identifier: "Identifier",
    IfStatement: "IfStatement",
    Literal: "Literal",
    LabeledStatement: "LabeledStatement",
    LogicalExpression: "LogicalExpression",
    MemberExpression: "MemberExpression",
    MetaProperty: "MetaProperty",
    MethodDefinition: "MethodDefinition",
    NewExpression: "NewExpression",
    ObjectExpression: "ObjectExpression",
    ObjectPattern: "ObjectPattern",
    Program: "Program",
    Property: "Property",
    RestElement: "RestElement",
    ReturnStatement: "ReturnStatement",
    SequenceExpression: "SequenceExpression",
    SpreadElement: "SpreadElement",
    Super: "Super",
    SwitchCase: "SwitchCase",
    SwitchStatement: "SwitchStatement",
    TaggedTemplateExpression: "TaggedTemplateExpression",
    TemplateElement: "TemplateElement",
    TemplateLiteral: "TemplateLiteral",
    ThisExpression: "ThisExpression",
    ThrowStatement: "ThrowStatement",
    TryStatement: "TryStatement",
    UnaryExpression: "UnaryExpression",
    UpdateExpression: "UpdateExpression",
    VariableDeclaration: "VariableDeclaration",
    VariableDeclarator: "VariableDeclarator",
    WhileStatement: "WhileStatement",
    WithStatement: "WithStatement",
    YieldExpression: "YieldExpression",
    JSXIdentifier: "JSXIdentifier",
    JSXNamespacedName: "JSXNamespacedName",
    JSXMemberExpression: "JSXMemberExpression",
    JSXEmptyExpression: "JSXEmptyExpression",
    JSXExpressionContainer: "JSXExpressionContainer",
    JSXElement: "JSXElement",
    JSXClosingElement: "JSXClosingElement",
    JSXOpeningElement: "JSXOpeningElement",
    JSXAttribute: "JSXAttribute",
    JSXSpreadAttribute: "JSXSpreadAttribute",
    JSXText: "JSXText",
    ExportDefaultDeclaration: "ExportDefaultDeclaration",
    ExportNamedDeclaration: "ExportNamedDeclaration",
    ExportAllDeclaration: "ExportAllDeclaration",
    ExportSpecifier: "ExportSpecifier",
    ImportDeclaration: "ImportDeclaration",
    ImportSpecifier: "ImportSpecifier",
    ImportDefaultSpecifier: "ImportDefaultSpecifier",
    ImportNamespaceSpecifier: "ImportNamespaceSpecifier"
  };
  var V = {},
      O = {},
      j = {
    Boolean: "Boolean",
    Identifier: "Identifier",
    Keyword: "Keyword",
    Null: "Null",
    Numeric: "Numeric",
    Punctuator: "Punctuator",
    String: "String",
    RegularExpression: "RegularExpression",
    Template: "Template",
    JSXIdentifier: "JSXIdentifier",
    JSXText: "JSXText"
  };

  function R(e, t) {
    this._acornTokTypes = e, this._tokens = [], this._curlyBrace = null, this._code = t;
  }

  R.prototype = {
    constructor: R,
    translate: function translate(e, t) {
      var i = e.type,
          s = this._acornTokTypes;
      if (i === s.name) e.type = j.Identifier, "static" === e.value && (e.type = j.Keyword), t.ecmaVersion > 5 && ("yield" === e.value || "let" === e.value) && (e.type = j.Keyword);else if (i === s.semi || i === s.comma || i === s.parenL || i === s.parenR || i === s.braceL || i === s.braceR || i === s.dot || i === s.bracketL || i === s.colon || i === s.question || i === s.bracketR || i === s.ellipsis || i === s.arrow || i === s.jsxTagStart || i === s.incDec || i === s.starstar || i === s.jsxTagEnd || i === s.prefix || i === s.questionDot || i.binop && !i.keyword || i.isAssign) e.type = j.Punctuator, e.value = this._code.slice(e.start, e.end);else if (i === s.jsxName) e.type = j.JSXIdentifier;else if ("jsxText" === i.label || i === s.jsxAttrValueToken) e.type = j.JSXText;else if (i.keyword) "true" === i.keyword || "false" === i.keyword ? e.type = j.Boolean : "null" === i.keyword ? e.type = j.Null : e.type = j.Keyword;else if (i === s.num) e.type = j.Numeric, e.value = this._code.slice(e.start, e.end);else if (i === s.string) t.jsxAttrValueToken ? (t.jsxAttrValueToken = !1, e.type = j.JSXText) : e.type = j.String, e.value = this._code.slice(e.start, e.end);else if (i === s.regexp) {
        e.type = j.RegularExpression;
        var n = e.value;
        e.regex = {
          flags: n.flags,
          pattern: n.pattern
        }, e.value = "/".concat(n.pattern, "/").concat(n.flags);
      }
      return e;
    },
    onToken: function onToken(e, t) {
      var i = this,
          s = this._acornTokTypes,
          n = t.tokens,
          r = this._tokens;

      function a() {
        var e, t, s, r, a;
        n.push((e = i._tokens, t = i._code, s = e[0], r = e[e.length - 1], a = {
          type: j.Template,
          value: t.slice(s.start, r.end)
        }, s.loc && (a.loc = {
          start: s.loc.start,
          end: r.loc.end
        }), s.range && (a.start = s.range[0], a.end = r.range[1], a.range = [a.start, a.end]), a)), i._tokens = [];
      }

      if (e.type === s.eof) {
        this._curlyBrace && n.push(this.translate(this._curlyBrace, t));
        return;
      }

      if (e.type === s.backQuote) {
        this._curlyBrace && (n.push(this.translate(this._curlyBrace, t)), this._curlyBrace = null), r.push(e), r.length > 1 && a();
        return;
      }

      if (e.type === s.dollarBraceL) {
        r.push(e), a();
        return;
      }

      if (e.type === s.braceR) {
        this._curlyBrace && n.push(this.translate(this._curlyBrace, t)), this._curlyBrace = e;
        return;
      }

      if (e.type === s.template || e.type === s.invalidTemplate) {
        this._curlyBrace && (r.push(this._curlyBrace), this._curlyBrace = null), r.push(e);
        return;
      }

      this._curlyBrace && (n.push(this.translate(this._curlyBrace, t)), this._curlyBrace = null), n.push(this.translate(e, t));
    }
  }, O = R;
  var D = {},
      M = [3, 5, 6, 7, 8, 9, 10, 11, 12],
      B = (D = {
    normalizeOptions: function normalizeOptions(e) {
      var t = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
        if ("number" != typeof e) throw Error("ecmaVersion must be a number. Received value of type ".concat(void 0 === e ? "undefined" : l(e), " instead."));
        var t = e;
        if (t >= 2015 && (t -= 2009), !M.includes(t)) throw Error("Invalid ecmaVersion.");
        return t;
      }(e.ecmaVersion),
          i = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "script";
        if ("script" === e || "module" === e) return e;
        throw Error("Invalid sourceType.");
      }(e.sourceType),
          s = !0 === e.range,
          n = !0 === e.loc;

      if ("module" === i && t < 6) throw Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");
      return Object.assign({}, e, {
        ecmaVersion: t,
        sourceType: i,
        ranges: s,
        locations: n
      });
    },
    getLatestEcmaVersion: function getLatestEcmaVersion() {
      return M[M.length - 1];
    },
    getSupportedEcmaVersions: function getSupportedEcmaVersions() {
      return m(M);
    }
  }).normalizeOptions,
      U = Symbol("espree's internal state"),
      F = Symbol("espree's esprimaFinishNode");

  V = function V() {
    return function (e) {
      var t = Object.assign({}, e.acorn.tokTypes);
      return e.acornJsx && Object.assign(t, e.acornJsx.tokTypes), function (i) {
        _(n, i);

        var s = w(n);

        function n(e, i) {
          y(this, n), ("object" != _typeof(e) || null === e) && (e = {}), "string" == typeof i || i instanceof String || (i = String(i));
          var r,
              a = B(e),
              o = a.ecmaFeatures || {},
              h = !0 === a.tokens ? new O(t, i) : null;
          return (r = s.call(this, {
            ecmaVersion: a.ecmaVersion,
            sourceType: a.sourceType,
            ranges: a.ranges,
            locations: a.locations,
            allowReturnOutsideFunction: !!o.globalReturn,
            onToken: function onToken(e) {
              h && h.onToken(e, r[U]), e.type !== t.eof && (r[U].lastToken = e);
            },
            onComment: function onComment(e, t, i, s, n, a) {
              if (r[U].comments) {
                var o,
                    h = (o = {
                  type: e ? "Block" : "Line",
                  value: t
                }, "number" == typeof i && (o.start = i, o.end = s, o.range = [i, s]), "object" == _typeof(n) && (o.loc = {
                  start: n,
                  end: a
                }), o);
                r[U].comments.push(h);
              }
            }
          }, i))[U] = {
            tokens: h ? [] : null,
            comments: !0 === a.comment ? [] : null,
            impliedStrict: !0 === o.impliedStrict && r.options.ecmaVersion >= 5,
            ecmaVersion: r.options.ecmaVersion,
            jsxAttrValueToken: !1,
            lastToken: null
          }, r;
        }

        return b(n, [{
          key: "tokenize",
          value: function value() {
            do {
              this.next();
            } while (this.type !== t.eof);

            this.next();
            var e = this[U],
                i = e.tokens;
            return e.comments && (i.comments = e.comments), i;
          }
        }, {
          key: "finishNode",
          value: function value() {
            for (var e, t = arguments.length, i = Array(t), s = 0; s < t; s++) {
              i[s] = arguments[s];
            }

            var r = (e = S(E(n.prototype), "finishNode", this)).call.apply(e, [this].concat(m(i)));
            return this[F](r);
          }
        }, {
          key: "finishNodeAt",
          value: function value() {
            for (var e, t = arguments.length, i = Array(t), s = 0; s < t; s++) {
              i[s] = arguments[s];
            }

            var r = (e = S(E(n.prototype), "finishNodeAt", this)).call.apply(e, [this].concat(m(i)));
            return this[F](r);
          }
        }, {
          key: "parse",
          value: function value() {
            var e = this[U],
                t = S(E(n.prototype), "parse", this).call(this);
            return t.sourceType = this.options.sourceType, e.comments && (t.comments = e.comments), e.tokens && (t.tokens = e.tokens), t.range && (t.range[0] = t.body.length ? t.body[0].range[0] : t.range[0], t.range[1] = e.lastToken ? e.lastToken.range[1] : t.range[1]), t.loc && (t.loc.start = t.body.length ? t.body[0].loc.start : t.loc.start, t.loc.end = e.lastToken ? e.lastToken.loc.end : t.loc.end), t;
          }
        }, {
          key: "parseTopLevel",
          value: function value(e) {
            return this[U].impliedStrict && (this.strict = !0), S(E(n.prototype), "parseTopLevel", this).call(this, e);
          }
        }, {
          key: "raise",
          value: function value(t, i) {
            var s = e.acorn.getLineInfo(this.input, t),
                n = SyntaxError(i);
            throw n.index = t, n.lineNumber = s.line, n.column = s.column + 1, n;
          }
        }, {
          key: "raiseRecoverable",
          value: function value(e, t) {
            this.raise(e, t);
          }
        }, {
          key: "unexpected",
          value: function value(e) {
            var t = "Unexpected token";

            if (null != e) {
              if (this.pos = e, this.options.locations) for (; this.pos < this.lineStart;) {
                this.lineStart = this.input.lastIndexOf("\n", this.lineStart - 2) + 1, --this.curLine;
              }
              this.nextToken();
            }

            this.end > this.start && (t += " ".concat(this.input.slice(this.start, this.end))), this.raise(this.start, t);
          }
        }, {
          key: "jsx_readString",
          value: function value(e) {
            var i = S(E(n.prototype), "jsx_readString", this).call(this, e);
            return this.type === t.string && (this[U].jsxAttrValueToken = !0), i;
          }
        }, {
          key: F,
          value: function value(e) {
            if ("TemplateElement" === e.type) {
              var t = "${" === this.input.slice(e.end, e.end + 2);
              e.range && (e.range[0]--, e.range[1] += t ? 2 : 1), e.loc && (e.loc.start.column--, e.loc.end.column += t ? 2 : 1);
            }

            return e.type.indexOf("Function") > -1 && !e.generator && (e.generator = !1), e;
          }
        }]), n;
      }(e);
    };
  };

  var q = D.getLatestEcmaVersion,
      X = D.getSupportedEcmaVersions,
      J = {
    _regular: null,
    _jsx: null,

    get regular() {
      return null === this._regular && (this._regular = x.Parser.extend(V())), this._regular;
    },

    get jsx() {
      return null === this._jsx && (this._jsx = x.Parser.extend(g(), V())), this._jsx;
    },

    get: function get(e) {
      return e && e.ecmaFeatures && e.ecmaFeatures.jsx ? this.jsx : this.regular;
    }
  };
  a("80lpX").version, i = function i(e, t) {
    return new (J.get(t))(t, e).parse();
  }, function () {
    var e,
        t = {};

    for (e in "function" == typeof Object.create && (t = Object.create(null)), L) {
      Object.hasOwnProperty.call(L, e) && (t[e] = L[e]);
    }

    "function" == typeof Object.freeze && Object.freeze(t);
  }(), a("a8cff").KEYS, q(), X();
  var W = {};
  !function e(t) {
    var i, s, n, r, o, h;

    function p(e) {
      var t,
          i,
          s = {};

      for (t in e) {
        e.hasOwnProperty(t) && ("object" == _typeof(i = e[t]) && null !== i ? s[t] = p(i) : s[t] = i);
      }

      return s;
    }

    function l(e, t) {
      this.parent = e, this.key = t;
    }

    function c(e, t, i, s) {
      this.node = e, this.path = t, this.wrap = i, this.ref = s;
    }

    function u() {}

    function d(e) {
      return null != e && "object" == _typeof(e) && "string" == typeof e.type;
    }

    function f(e, t) {
      return (e === i.ObjectExpression || e === i.ObjectPattern) && "properties" === t;
    }

    function m(e, t) {
      return new u().traverse(e, t);
    }

    return i = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      Program: "Program",
      Property: "Property",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression"
    }, n = {
      AssignmentExpression: ["left", "right"],
      AssignmentPattern: ["left", "right"],
      ArrayExpression: ["elements"],
      ArrayPattern: ["elements"],
      ArrowFunctionExpression: ["params", "body"],
      AwaitExpression: ["argument"],
      BlockStatement: ["body"],
      BinaryExpression: ["left", "right"],
      BreakStatement: ["label"],
      CallExpression: ["callee", "arguments"],
      CatchClause: ["param", "body"],
      ClassBody: ["body"],
      ClassDeclaration: ["id", "superClass", "body"],
      ClassExpression: ["id", "superClass", "body"],
      ComprehensionBlock: ["left", "right"],
      ComprehensionExpression: ["blocks", "filter", "body"],
      ConditionalExpression: ["test", "consequent", "alternate"],
      ContinueStatement: ["label"],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ["body", "test"],
      EmptyStatement: [],
      ExportAllDeclaration: ["source"],
      ExportDefaultDeclaration: ["declaration"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source"],
      ExportSpecifier: ["exported", "local"],
      ExpressionStatement: ["expression"],
      ForStatement: ["init", "test", "update", "body"],
      ForInStatement: ["left", "right", "body"],
      ForOfStatement: ["left", "right", "body"],
      FunctionDeclaration: ["id", "params", "body"],
      FunctionExpression: ["id", "params", "body"],
      GeneratorExpression: ["blocks", "filter", "body"],
      Identifier: [],
      IfStatement: ["test", "consequent", "alternate"],
      ImportExpression: ["source"],
      ImportDeclaration: ["specifiers", "source"],
      ImportDefaultSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportSpecifier: ["imported", "local"],
      Literal: [],
      LabeledStatement: ["label", "body"],
      LogicalExpression: ["left", "right"],
      MemberExpression: ["object", "property"],
      MetaProperty: ["meta", "property"],
      MethodDefinition: ["key", "value"],
      ModuleSpecifier: [],
      NewExpression: ["callee", "arguments"],
      ObjectExpression: ["properties"],
      ObjectPattern: ["properties"],
      Program: ["body"],
      Property: ["key", "value"],
      RestElement: ["argument"],
      ReturnStatement: ["argument"],
      SequenceExpression: ["expressions"],
      SpreadElement: ["argument"],
      Super: [],
      SwitchStatement: ["discriminant", "cases"],
      SwitchCase: ["test", "consequent"],
      TaggedTemplateExpression: ["tag", "quasi"],
      TemplateElement: [],
      TemplateLiteral: ["quasis", "expressions"],
      ThisExpression: [],
      ThrowStatement: ["argument"],
      TryStatement: ["block", "handler", "finalizer"],
      UnaryExpression: ["argument"],
      UpdateExpression: ["argument"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id", "init"],
      WhileStatement: ["test", "body"],
      WithStatement: ["object", "body"],
      YieldExpression: ["argument"]
    }, s = {
      Break: r = {},
      Skip: o = {},
      Remove: h = {}
    }, l.prototype.replace = function (e) {
      this.parent[this.key] = e;
    }, l.prototype.remove = function () {
      return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
    }, u.prototype.path = function () {
      var e, t, i, s, n;

      function r(e, t) {
        if (Array.isArray(t)) for (i = 0, s = t.length; i < s; ++i) {
          e.push(t[i]);
        } else e.push(t);
      }

      if (!this.__current.path) return null;

      for (e = 2, n = [], t = this.__leavelist.length; e < t; ++e) {
        r(n, this.__leavelist[e].path);
      }

      return r(n, this.__current.path), n;
    }, u.prototype.type = function () {
      return this.current().type || this.__current.wrap;
    }, u.prototype.parents = function () {
      var e, t, i;

      for (e = 1, i = [], t = this.__leavelist.length; e < t; ++e) {
        i.push(this.__leavelist[e].node);
      }

      return i;
    }, u.prototype.current = function () {
      return this.__current.node;
    }, u.prototype.__execute = function (e, t) {
      var i, s;
      return s = void 0, i = this.__current, this.__current = t, this.__state = null, e && (s = e.call(this, t.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = i, s;
    }, u.prototype.notify = function (e) {
      this.__state = e;
    }, u.prototype.skip = function () {
      this.notify(o);
    }, u.prototype.break = function () {
      this.notify(r);
    }, u.prototype.remove = function () {
      this.notify(h);
    }, u.prototype.__initialize = function (e, t) {
      this.visitor = t, this.root = e, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null, this.__fallback = null, "iteration" === t.fallback ? this.__fallback = Object.keys : "function" == typeof t.fallback && (this.__fallback = t.fallback), this.__keys = n, t.keys && (this.__keys = Object.assign(Object.create(this.__keys), t.keys));
    }, u.prototype.traverse = function (e, t) {
      var i, s, n, a, h, p, l, u, m, x, g, y;

      for (this.__initialize(e, t), y = {}, i = this.__worklist, s = this.__leavelist, i.push(new c(e, null, null, null)), s.push(new c(null, null, null, null)); i.length;) {
        if ((n = i.pop()) === y) {
          if (n = s.pop(), p = this.__execute(t.leave, n), this.__state === r || p === r) return;
          continue;
        }

        if (n.node) {
          if (p = this.__execute(t.enter, n), this.__state === r || p === r) return;
          if (i.push(y), s.push(n), this.__state === o || p === o) continue;

          if (h = (a = n.node).type || n.wrap, !(x = this.__keys[h])) {
            if (this.__fallback) x = this.__fallback(a);else throw Error("Unknown node type " + h + ".");
          }

          for (u = x.length; (u -= 1) >= 0;) {
            if (g = a[l = x[u]]) {
              if (Array.isArray(g)) {
                for (m = g.length; (m -= 1) >= 0;) {
                  if (g[m]) {
                    if (f(h, x[u])) n = new c(g[m], [l, m], "Property", null);else {
                      if (!d(g[m])) continue;
                      n = new c(g[m], [l, m], null, null);
                    }
                    i.push(n);
                  }
                }
              } else d(g) && i.push(new c(g, l, null, null));
            }
          }
        }
      }
    }, u.prototype.replace = function (e, t) {
      var i, s, n, a, p, u, m, x, g, y, v, b, E;

      function S(e) {
        var t, s, n, r;

        if (e.ref.remove()) {
          for (s = e.ref.key, r = e.ref.parent, t = i.length; t--;) {
            if ((n = i[t]).ref && n.ref.parent === r) {
              if (n.ref.key < s) break;
              --n.ref.key;
            }
          }
        }
      }

      for (this.__initialize(e, t), v = {}, i = this.__worklist, s = this.__leavelist, b = {
        root: e
      }, u = new c(e, null, null, new l(b, "root")), i.push(u), s.push(u); i.length;) {
        if ((u = i.pop()) === v) {
          if (u = s.pop(), void 0 !== (p = this.__execute(t.leave, u)) && p !== r && p !== o && p !== h && u.ref.replace(p), (this.__state === h || p === h) && S(u), this.__state === r || p === r) return b.root;
          continue;
        }

        if (void 0 !== (p = this.__execute(t.enter, u)) && p !== r && p !== o && p !== h && (u.ref.replace(p), u.node = p), (this.__state === h || p === h) && (S(u), u.node = null), this.__state === r || p === r) break;

        if ((n = u.node) && (i.push(v), s.push(u), this.__state !== o && p !== o)) {
          if (a = n.type || u.wrap, !(g = this.__keys[a])) {
            if (this.__fallback) g = this.__fallback(n);else throw Error("Unknown node type " + a + ".");
          }

          for (m = g.length; (m -= 1) >= 0;) {
            if (y = n[E = g[m]]) {
              if (Array.isArray(y)) {
                for (x = y.length; (x -= 1) >= 0;) {
                  if (y[x]) {
                    if (f(a, g[m])) u = new c(y[x], [E, x], "Property", new l(y, x));else {
                      if (!d(y[x])) continue;
                      u = new c(y[x], [E, x], null, new l(y, x));
                    }
                    i.push(u);
                  }
                }
              } else d(y) && i.push(new c(y, E, null, new l(n, E)));
            }
          }
        }
      }

      return b.root;
    }, t.version = a("4rf7n").version, t.Syntax = i, t.traverse = m, t.replace = function (e, t) {
      return new u().replace(e, t);
    }, t.attachComments = function (e, t, i) {
      var n,
          r,
          a,
          o,
          h = [];
      if (!e.range) throw Error("attachComments needs range information");

      if (!i.length) {
        if (t.length) {
          for (a = 0, r = t.length; a < r; a += 1) {
            (n = p(t[a])).extendedRange = [0, e.range[0]], h.push(n);
          }

          e.leadingComments = h;
        }

        return e;
      }

      for (a = 0, r = t.length; a < r; a += 1) {
        h.push(function (e, t) {
          var i;
          return i = function (e, t) {
            var i, s, n, r;

            for (s = e.length, n = 0; s;) {
              t(e[r = n + (i = s >>> 1)]) ? s = i : (n = r + 1, s -= i + 1);
            }

            return n;
          }(t, function t(t) {
            return t.range[0] > e.range[0];
          }), e.extendedRange = [e.range[0], e.range[1]], i !== t.length && (e.extendedRange[1] = t[i].range[0]), (i -= 1) >= 0 && (e.extendedRange[0] = t[i].range[1]), e;
        }(p(t[a]), i));
      }

      return o = 0, m(e, {
        enter: function enter(e) {
          for (var t; o < h.length && !((t = h[o]).extendedRange[1] > e.range[0]);) {
            t.extendedRange[1] === e.range[0] ? (e.leadingComments || (e.leadingComments = []), e.leadingComments.push(t), h.splice(o, 1)) : o += 1;
          }

          return o === h.length ? s.Break : h[o].extendedRange[0] > e.range[1] ? s.Skip : void 0;
        }
      }), o = 0, m(e, {
        leave: function leave(e) {
          for (var t; o < h.length && (t = h[o], !(e.range[1] < t.extendedRange[0]));) {
            e.range[1] === t.extendedRange[0] ? (e.trailingComments || (e.trailingComments = []), e.trailingComments.push(t), h.splice(o, 1)) : o += 1;
          }

          return o === h.length ? s.Break : h[o].extendedRange[0] > e.range[1] ? s.Skip : void 0;
        }
      }), e;
    }, t.VisitorKeys = n, t.VisitorOption = s, t.Controller = u, t.cloneEnvironment = function () {
      return e({});
    }, t;
  }(W);
  var z = {};

  function H(e) {
    for (; e;) {
      switch (e.type) {
        case "CallExpression":
          e = e.callee;
          break;

        case "MemberExpression":
          if ("ThisExpression" === e.object.type) return e.property;
          e = e.object;
          break;

        case "Identifier":
          return e;

        default:
          return null;
      }
    }
  }

  function G(e) {
    var t = H(e);
    return t && RegExp("^\\$.").test(t && t.name) || ["$", "jQuery"].includes(t && t.name);
  }

  function Q(e) {
    return i(e, {
      ecmaVersion: 2021,
      sourceType: "module",
      comment: !0
    });
  }

  function K(e, t, i, s, n, r) {
    return $.apply(this, arguments);
  }

  function $() {
    return ($ = p(function (e, t, i, s, n, r) {
      var a, o, h, p, l, u;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            if (a = Q(n + t + r), o = [], W.traverse(a, {
              enter: function enter(e) {
                if (e.callee && "MemberExpression" === e.callee.type) {
                  var t = e.callee.property.name;
                  ("ThisExpression" === e.callee.object.type || "Identifier" === e.callee.object.type) && 0 > i.indexOf(t) && o.push(e.callee.property.name);
                }
              }
            }), h = m(new Set(o)), p = "", h.forEach(function (t) {
              s[t] && s[t].range && (p += e.substring(s[t].range.start, s[t].range.end));
            }), l = m(i).concat(m(h)), !h.length) return [3, 2];
            return [4, K(e, t + p, l, s, n, r)];

          case 1:
            u = c.sent(), p += u.methodsData, l = m(l).concat([u.allMethods]), c.label = 2;

          case 2:
            return [2, {
              methodsData: p,
              allMethods: l
            }];
        }
      });
    })).apply(this, arguments);
  }

  z = ["add", "addBack", "addClass", "after", "ajax", "ajaxComplete", "ajaxError", "ajaxPrefilter", "ajaxSend", "ajaxSetup", "ajaxStart", "ajaxStop", "ajaxSuccess", "ajaxTransport", "animate", "append", "appendTo", "attr", "attr", "before", "bind", "blur", "camelCase", "change", "children", "cleanData", "clearQueue", "click", "clone", "clone", "closest", "constructor", "contains", "contents", "contextmenu", "css", "css", "data", "data", "dblclick", "delay", "delegate", "dequeue", "dequeue", "detach", "each", "each", "empty", "end", "eq", "error", "escapeSelector", "even", "extend", "extend", "fadeIn", "fadeOut", "fadeTo", "fadeToggle", "filter", "filter", "find", "find", "finish", "first", "focus", "focusin", "focusout", "fx", "get", "get", "getJSON", "getScript", "globalEval", "grep", "has", "hasClass", "hasData", "height", "hide", "holdReady", "hover", "html", "htmlPrefilter", "inArray", "index", "init", "innerHeight", "innerWidth", "insertAfter", "insertBefore", "is", "isArray", "isEmptyObject", "isFunction", "isNumeric", "isPlainObject", "isWindow", "isXMLDoc", "keydown", "keypress", "keyup", "last", "load", "makeArray", "map", "map", "merge", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "next", "nextAll", "nextUntil", "noConflict", "nodeName", "noop", "not", "now", "odd", "off", "offset", "offsetParent", "on", "one", "outerHeight", "outerWidth", "param", "parent", "parents", "parentsUntil", "parseHTML", "parseJSON", "parseXML", "position", "post", "prepend", "prependTo", "prev", "prevAll", "prevUntil", "promise", "prop", "prop", "proxy", "push", "pushStack", "queue", "queue", "ready", "ready", "readyException", "remove", "removeAttr", "removeAttr", "removeClass", "removeData", "removeData", "removeEvent", "removeProp", "replaceAll", "replaceWith", "resize", "scroll", "scrollLeft", "scrollTop", "select", "serialize", "serializeArray", "show", "siblings", "slice", "slideDown", "slideToggle", "slideUp", "sort", "speed", "splice", "stop", "style", "submit", "text", "text", "toArray", "toggle", "toggleClass", "trigger", "triggerHandler", "trim", "type", "unbind", "undelegate", "unique", "uniqueSort", "unwrap", "val", "when", "width", "wrap", "wrapAll", "wrapInner"];

  var Y = function Y(e, t) {
    var i = {
      start: 0,
      end: 0
    };
    return t.comments.forEach(function (e) {
      "Block" === e.type && (e.value.includes("$$ Template START $$") ? i.start = e.start : e.value.includes("$$ Template END $$") && (i.end = e.end));
    }), {
      outputStart: e.substring(0, i.start),
      outputEnd: e.substring(i.end, e.length)
    };
  };

  function Z() {
    return (Z = p(function (e, t) {
      var i, s, n, r, a, o, h, p;
      return c(this, function (l) {
        switch (l.label) {
          case 0:
            return i = {}, s = Q(t), W.traverse(s, {
              enter: function enter(e) {
                if ("MethodDefinition" === e.type) return i[e.key.name] = {
                  name: e.key.name,
                  range: {
                    start: e.start,
                    end: e.end
                  }
                }, W.VisitorOption.Skip;
              }
            }), n = [], r = "", e.forEach(function (e) {
              i[e] ? r += t.substring(i[e].range.start, i[e].range.end) : n.push(e);
            }), o = (a = Y(t, s)).outputStart, h = a.outputEnd, [4, K(t, r, e, i, o, h)];

          case 1:
            return p = l.sent(), [2, {
              data: o + r + p.methodsData + h,
              remainingMethods: n
            }];
        }
      });
    })).apply(this, arguments);
  }

  function ee() {
    return (ee = p(function (e) {
      var t, i, s, n, r;
      return c(this, function (a) {
        return t = Q(e), i = [], W.traverse(t, {
          enter: function enter(e) {
            e.callee && "MemberExpression" === e.callee.type && G(e) && i.push(e.callee.property.name);
          }
        }), s = new Set(i), n = new Set(z), r = new Set(m(s).filter(function (e) {
          return n.has(e);
        })), [2, m(r)];
      });
    })).apply(this, arguments);
  }

  function et() {
    return (et = p(function (e) {
      var t, i;
      return c(this, function (s) {
        switch (s.label) {
          case 0:
            return console.log("alljQueryMethods", e), [4, d.getJQueryMethodsFromSource(e)];

          case 1:
            return console.log("methods333333333", t = s.sent()), console.log("methodsFilesssssData", u.default), [4, d.generateAlternativeMethods(t, u.default)];

          case 2:
            return console.log("generatedMethods", i = s.sent()), [4, prettier.format(i.data, {
              parser: "babel",
              tabWidth: 4,
              plugins: prettierPlugins,
              singleQuote: !0
            })];

          case 3:
            return [2, {
              formattedOutput: s.sent(),
              methodsFound: t,
              remainingMethods: i.remainingMethods
            }];
        }
      });
    })).apply(this, arguments);
  }

  d = {
    traverse: H,
    isjQuery: G,
    getAST: Q,
    generateAlternativeMethods: function generateAlternativeMethods(e, t) {
      return Z.apply(this, arguments);
    },
    getJQueryMethodsFromSource: function getJQueryMethodsFromSource(e) {
      return ee.apply(this, arguments);
    }
  }, window.ReplaceJquery = function (e) {
    return et.apply(this, arguments);
  };
}();
