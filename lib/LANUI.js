import './main.css';
import ke, { useState as mr } from 'react';
var H = function () {
    return (
        (H =
            Object.assign ||
            function (b) {
                for (var p, u = 1, d = arguments.length; u < d; u++) {
                    p = arguments[u];
                    for (var l in p)
                        Object.prototype.hasOwnProperty.call(p, l) &&
                            (b[l] = p[l]);
                }
                return b;
            }),
        H.apply(this, arguments)
    );
};
function gr(i, b) {
    var p = {};
    for (var u in i)
        Object.prototype.hasOwnProperty.call(i, u) &&
            b.indexOf(u) < 0 &&
            (p[u] = i[u]);
    if (i != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var d = 0, u = Object.getOwnPropertySymbols(i); d < u.length; d++)
            b.indexOf(u[d]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, u[d]) &&
                (p[u[d]] = i[u[d]]);
    return p;
}
var Se = {},
    hr = {
        get exports() {
            return Se;
        },
        set exports(i) {
            Se = i;
        },
    },
    Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function _r() {
    if (fr) return Ee;
    fr = 1;
    var i = ke,
        b = Symbol.for('react.element'),
        p = Symbol.for('react.fragment'),
        u = Object.prototype.hasOwnProperty,
        d =
            i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
    function E(h, f, j) {
        var _,
            R = {},
            k = null,
            N = null;
        j !== void 0 && (k = '' + j),
            f.key !== void 0 && (k = '' + f.key),
            f.ref !== void 0 && (N = f.ref);
        for (_ in f) u.call(f, _) && !l.hasOwnProperty(_) && (R[_] = f[_]);
        if (h && h.defaultProps)
            for (_ in ((f = h.defaultProps), f))
                R[_] === void 0 && (R[_] = f[_]);
        return {
            $$typeof: b,
            type: h,
            key: k,
            ref: N,
            props: R,
            _owner: d.current,
        };
    }
    return (Ee.Fragment = p), (Ee.jsx = E), (Ee.jsxs = E), Ee;
}
var Oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function Er() {
    return (
        pr ||
            ((pr = 1),
            process.env.NODE_ENV !== 'production' &&
                (function () {
                    var i = ke,
                        b = Symbol.for('react.element'),
                        p = Symbol.for('react.portal'),
                        u = Symbol.for('react.fragment'),
                        d = Symbol.for('react.strict_mode'),
                        l = Symbol.for('react.profiler'),
                        E = Symbol.for('react.provider'),
                        h = Symbol.for('react.context'),
                        f = Symbol.for('react.forward_ref'),
                        j = Symbol.for('react.suspense'),
                        _ = Symbol.for('react.suspense_list'),
                        R = Symbol.for('react.memo'),
                        k = Symbol.for('react.lazy'),
                        N = Symbol.for('react.offscreen'),
                        K = Symbol.iterator,
                        Pe = '@@iterator';
                    function Te(e) {
                        if (e === null || typeof e != 'object') return null;
                        var r = (K && e[K]) || e[Pe];
                        return typeof r == 'function' ? r : null;
                    }
                    var T =
                        i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                    function m(e) {
                        {
                            for (
                                var r = arguments.length,
                                    t = new Array(r > 1 ? r - 1 : 0),
                                    n = 1;
                                n < r;
                                n++
                            )
                                t[n - 1] = arguments[n];
                            xe('error', e, t);
                        }
                    }
                    function xe(e, r, t) {
                        {
                            var n = T.ReactDebugCurrentFrame,
                                s = n.getStackAddendum();
                            s !== '' && ((r += '%s'), (t = t.concat([s])));
                            var c = t.map(function (o) {
                                return String(o);
                            });
                            c.unshift('Warning: ' + r),
                                Function.prototype.apply.call(
                                    console[e],
                                    console,
                                    c
                                );
                        }
                    }
                    var Ce = !1,
                        De = !1,
                        Fe = !1,
                        Ne = !1,
                        $e = !1,
                        X;
                    X = Symbol.for('react.module.reference');
                    function Ae(e) {
                        return !!(
                            typeof e == 'string' ||
                            typeof e == 'function' ||
                            e === u ||
                            e === l ||
                            $e ||
                            e === d ||
                            e === j ||
                            e === _ ||
                            Ne ||
                            e === N ||
                            Ce ||
                            De ||
                            Fe ||
                            (typeof e == 'object' &&
                                e !== null &&
                                (e.$$typeof === k ||
                                    e.$$typeof === R ||
                                    e.$$typeof === E ||
                                    e.$$typeof === h ||
                                    e.$$typeof === f || // This needs to include all possible module reference object
                                    // types supported by any Flight configuration anywhere since
                                    // we don't know which Flight build this will end up being used
                                    // with.
                                    e.$$typeof === X ||
                                    e.getModuleId !== void 0))
                        );
                    }
                    function Ie(e, r, t) {
                        var n = e.displayName;
                        if (n) return n;
                        var s = r.displayName || r.name || '';
                        return s !== '' ? t + '(' + s + ')' : t;
                    }
                    function Z(e) {
                        return e.displayName || 'Context';
                    }
                    function w(e) {
                        if (e == null) return null;
                        if (
                            (typeof e.tag == 'number' &&
                                m(
                                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                                ),
                            typeof e == 'function')
                        )
                            return e.displayName || e.name || null;
                        if (typeof e == 'string') return e;
                        switch (e) {
                            case u:
                                return 'Fragment';
                            case p:
                                return 'Portal';
                            case l:
                                return 'Profiler';
                            case d:
                                return 'StrictMode';
                            case j:
                                return 'Suspense';
                            case _:
                                return 'SuspenseList';
                        }
                        if (typeof e == 'object')
                            switch (e.$$typeof) {
                                case h:
                                    var r = e;
                                    return Z(r) + '.Consumer';
                                case E:
                                    var t = e;
                                    return Z(t._context) + '.Provider';
                                case f:
                                    return Ie(e, e.render, 'ForwardRef');
                                case R:
                                    var n = e.displayName || null;
                                    return n !== null ? n : w(e.type) || 'Memo';
                                case k: {
                                    var s = e,
                                        c = s._payload,
                                        o = s._init;
                                    try {
                                        return w(o(c));
                                    } catch {
                                        return null;
                                    }
                                }
                            }
                        return null;
                    }
                    var P = Object.assign,
                        D = 0,
                        Q,
                        ee,
                        re,
                        te,
                        ne,
                        ae,
                        oe;
                    function ie() {}
                    ie.__reactDisabledLog = !0;
                    function We() {
                        {
                            if (D === 0) {
                                (Q = console.log),
                                    (ee = console.info),
                                    (re = console.warn),
                                    (te = console.error),
                                    (ne = console.group),
                                    (ae = console.groupCollapsed),
                                    (oe = console.groupEnd);
                                var e = {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: ie,
                                    writable: !0,
                                };
                                Object.defineProperties(console, {
                                    info: e,
                                    log: e,
                                    warn: e,
                                    error: e,
                                    group: e,
                                    groupCollapsed: e,
                                    groupEnd: e,
                                });
                            }
                            D++;
                        }
                    }
                    function Le() {
                        {
                            if ((D--, D === 0)) {
                                var e = {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                };
                                Object.defineProperties(console, {
                                    log: P({}, e, {
                                        value: Q,
                                    }),
                                    info: P({}, e, {
                                        value: ee,
                                    }),
                                    warn: P({}, e, {
                                        value: re,
                                    }),
                                    error: P({}, e, {
                                        value: te,
                                    }),
                                    group: P({}, e, {
                                        value: ne,
                                    }),
                                    groupCollapsed: P({}, e, {
                                        value: ae,
                                    }),
                                    groupEnd: P({}, e, {
                                        value: oe,
                                    }),
                                });
                            }
                            D < 0 &&
                                m(
                                    'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
                                );
                        }
                    }
                    var Y = T.ReactCurrentDispatcher,
                        U;
                    function $(e, r, t) {
                        {
                            if (U === void 0)
                                try {
                                    throw Error();
                                } catch (s) {
                                    var n = s.stack
                                        .trim()
                                        .match(/\n( *(at )?)/);
                                    U = (n && n[1]) || '';
                                }
                            return (
                                `
` +
                                U +
                                e
                            );
                        }
                    }
                    var M = !1,
                        A;
                    {
                        var Ye = typeof WeakMap == 'function' ? WeakMap : Map;
                        A = new Ye();
                    }
                    function se(e, r) {
                        if (!e || M) return '';
                        {
                            var t = A.get(e);
                            if (t !== void 0) return t;
                        }
                        var n;
                        M = !0;
                        var s = Error.prepareStackTrace;
                        Error.prepareStackTrace = void 0;
                        var c;
                        (c = Y.current), (Y.current = null), We();
                        try {
                            if (r) {
                                var o = function () {
                                    throw Error();
                                };
                                if (
                                    (Object.defineProperty(
                                        o.prototype,
                                        'props',
                                        {
                                            set: function () {
                                                throw Error();
                                            },
                                        }
                                    ),
                                    typeof Reflect == 'object' &&
                                        Reflect.construct)
                                ) {
                                    try {
                                        Reflect.construct(o, []);
                                    } catch (S) {
                                        n = S;
                                    }
                                    Reflect.construct(e, [], o);
                                } else {
                                    try {
                                        o.call();
                                    } catch (S) {
                                        n = S;
                                    }
                                    e.call(o.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (S) {
                                    n = S;
                                }
                                e();
                            }
                        } catch (S) {
                            if (S && n && typeof S.stack == 'string') {
                                for (
                                    var a = S.stack.split(`
`),
                                        g = n.stack.split(`
`),
                                        v = a.length - 1,
                                        y = g.length - 1;
                                    v >= 1 && y >= 0 && a[v] !== g[y];

                                )
                                    y--;
                                for (; v >= 1 && y >= 0; v--, y--)
                                    if (a[v] !== g[y]) {
                                        if (v !== 1 || y !== 1)
                                            do
                                                if (
                                                    (v--,
                                                    y--,
                                                    y < 0 || a[v] !== g[y])
                                                ) {
                                                    var O =
                                                        `
` + a[v].replace(' at new ', ' at ');
                                                    return (
                                                        e.displayName &&
                                                            O.includes(
                                                                '<anonymous>'
                                                            ) &&
                                                            (O = O.replace(
                                                                '<anonymous>',
                                                                e.displayName
                                                            )),
                                                        typeof e ==
                                                            'function' &&
                                                            A.set(e, O),
                                                        O
                                                    );
                                                }
                                            while (v >= 1 && y >= 0);
                                        break;
                                    }
                            }
                        } finally {
                            (M = !1),
                                (Y.current = c),
                                Le(),
                                (Error.prepareStackTrace = s);
                        }
                        var C = e ? e.displayName || e.name : '',
                            _e = C ? $(C) : '';
                        return typeof e == 'function' && A.set(e, _e), _e;
                    }
                    function Ue(e, r, t) {
                        return se(e, !1);
                    }
                    function Me(e) {
                        var r = e.prototype;
                        return !!(r && r.isReactComponent);
                    }
                    function I(e, r, t) {
                        if (e == null) return '';
                        if (typeof e == 'function') return se(e, Me(e));
                        if (typeof e == 'string') return $(e);
                        switch (e) {
                            case j:
                                return $('Suspense');
                            case _:
                                return $('SuspenseList');
                        }
                        if (typeof e == 'object')
                            switch (e.$$typeof) {
                                case f:
                                    return Ue(e.render);
                                case R:
                                    return I(e.type, r, t);
                                case k: {
                                    var n = e,
                                        s = n._payload,
                                        c = n._init;
                                    try {
                                        return I(c(s), r, t);
                                    } catch {}
                                }
                            }
                        return '';
                    }
                    var W = Object.prototype.hasOwnProperty,
                        ue = {},
                        ce = T.ReactDebugCurrentFrame;
                    function L(e) {
                        if (e) {
                            var r = e._owner,
                                t = I(e.type, e._source, r ? r.type : null);
                            ce.setExtraStackFrame(t);
                        } else ce.setExtraStackFrame(null);
                    }
                    function Ve(e, r, t, n, s) {
                        {
                            var c = Function.call.bind(W);
                            for (var o in e)
                                if (c(e, o)) {
                                    var a = void 0;
                                    try {
                                        if (typeof e[o] != 'function') {
                                            var g = Error(
                                                (n || 'React class') +
                                                    ': ' +
                                                    t +
                                                    ' type `' +
                                                    o +
                                                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                                                    typeof e[o] +
                                                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                                            );
                                            throw (
                                                ((g.name =
                                                    'Invariant Violation'),
                                                g)
                                            );
                                        }
                                        a = e[o](
                                            r,
                                            o,
                                            n,
                                            t,
                                            null,
                                            'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                                        );
                                    } catch (v) {
                                        a = v;
                                    }
                                    a &&
                                        !(a instanceof Error) &&
                                        (L(s),
                                        m(
                                            '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                                            n || 'React class',
                                            t,
                                            o,
                                            typeof a
                                        ),
                                        L(null)),
                                        a instanceof Error &&
                                            !(a.message in ue) &&
                                            ((ue[a.message] = !0),
                                            L(s),
                                            m(
                                                'Failed %s type: %s',
                                                t,
                                                a.message
                                            ),
                                            L(null));
                                }
                        }
                    }
                    var ze = Array.isArray;
                    function V(e) {
                        return ze(e);
                    }
                    function Be(e) {
                        {
                            var r =
                                    typeof Symbol == 'function' &&
                                    Symbol.toStringTag,
                                t =
                                    (r && e[Symbol.toStringTag]) ||
                                    e.constructor.name ||
                                    'Object';
                            return t;
                        }
                    }
                    function qe(e) {
                        try {
                            return le(e), !1;
                        } catch {
                            return !0;
                        }
                    }
                    function le(e) {
                        return '' + e;
                    }
                    function fe(e) {
                        if (qe(e))
                            return (
                                m(
                                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                                    Be(e)
                                ),
                                le(e)
                            );
                    }
                    var F = T.ReactCurrentOwner,
                        Je = {
                            key: !0,
                            ref: !0,
                            __self: !0,
                            __source: !0,
                        },
                        pe,
                        de,
                        z;
                    z = {};
                    function Ge(e) {
                        if (W.call(e, 'ref')) {
                            var r = Object.getOwnPropertyDescriptor(
                                e,
                                'ref'
                            ).get;
                            if (r && r.isReactWarning) return !1;
                        }
                        return e.ref !== void 0;
                    }
                    function He(e) {
                        if (W.call(e, 'key')) {
                            var r = Object.getOwnPropertyDescriptor(
                                e,
                                'key'
                            ).get;
                            if (r && r.isReactWarning) return !1;
                        }
                        return e.key !== void 0;
                    }
                    function Ke(e, r) {
                        if (
                            typeof e.ref == 'string' &&
                            F.current &&
                            r &&
                            F.current.stateNode !== r
                        ) {
                            var t = w(F.current.type);
                            z[t] ||
                                (m(
                                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                                    w(F.current.type),
                                    e.ref
                                ),
                                (z[t] = !0));
                        }
                    }
                    function Xe(e, r) {
                        {
                            var t = function () {
                                pe ||
                                    ((pe = !0),
                                    m(
                                        '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                                        r
                                    ));
                            };
                            (t.isReactWarning = !0),
                                Object.defineProperty(e, 'key', {
                                    get: t,
                                    configurable: !0,
                                });
                        }
                    }
                    function Ze(e, r) {
                        {
                            var t = function () {
                                de ||
                                    ((de = !0),
                                    m(
                                        '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                                        r
                                    ));
                            };
                            (t.isReactWarning = !0),
                                Object.defineProperty(e, 'ref', {
                                    get: t,
                                    configurable: !0,
                                });
                        }
                    }
                    var Qe = function (e, r, t, n, s, c, o) {
                        var a = {
                            // This tag allows us to uniquely identify this as a React Element
                            $$typeof: b,
                            // Built-in properties that belong on the element
                            type: e,
                            key: r,
                            ref: t,
                            props: o,
                            // Record the component responsible for creating this element.
                            _owner: c,
                        };
                        return (
                            (a._store = {}),
                            Object.defineProperty(a._store, 'validated', {
                                configurable: !1,
                                enumerable: !1,
                                writable: !0,
                                value: !1,
                            }),
                            Object.defineProperty(a, '_self', {
                                configurable: !1,
                                enumerable: !1,
                                writable: !1,
                                value: n,
                            }),
                            Object.defineProperty(a, '_source', {
                                configurable: !1,
                                enumerable: !1,
                                writable: !1,
                                value: s,
                            }),
                            Object.freeze &&
                                (Object.freeze(a.props), Object.freeze(a)),
                            a
                        );
                    };
                    function er(e, r, t, n, s) {
                        {
                            var c,
                                o = {},
                                a = null,
                                g = null;
                            t !== void 0 && (fe(t), (a = '' + t)),
                                He(r) && (fe(r.key), (a = '' + r.key)),
                                Ge(r) && ((g = r.ref), Ke(r, s));
                            for (c in r)
                                W.call(r, c) &&
                                    !Je.hasOwnProperty(c) &&
                                    (o[c] = r[c]);
                            if (e && e.defaultProps) {
                                var v = e.defaultProps;
                                for (c in v) o[c] === void 0 && (o[c] = v[c]);
                            }
                            if (a || g) {
                                var y =
                                    typeof e == 'function'
                                        ? e.displayName || e.name || 'Unknown'
                                        : e;
                                a && Xe(o, y), g && Ze(o, y);
                            }
                            return Qe(e, a, g, s, n, F.current, o);
                        }
                    }
                    var B = T.ReactCurrentOwner,
                        ve = T.ReactDebugCurrentFrame;
                    function x(e) {
                        if (e) {
                            var r = e._owner,
                                t = I(e.type, e._source, r ? r.type : null);
                            ve.setExtraStackFrame(t);
                        } else ve.setExtraStackFrame(null);
                    }
                    var q;
                    q = !1;
                    function J(e) {
                        return (
                            typeof e == 'object' &&
                            e !== null &&
                            e.$$typeof === b
                        );
                    }
                    function ye() {
                        {
                            if (B.current) {
                                var e = w(B.current.type);
                                if (e)
                                    return (
                                        `

Check the render method of \`` +
                                        e +
                                        '`.'
                                    );
                            }
                            return '';
                        }
                    }
                    function rr(e) {
                        {
                            if (e !== void 0) {
                                var r = e.fileName.replace(/^.*[\\\/]/, ''),
                                    t = e.lineNumber;
                                return (
                                    `

Check your code at ` +
                                    r +
                                    ':' +
                                    t +
                                    '.'
                                );
                            }
                            return '';
                        }
                    }
                    var be = {};
                    function tr(e) {
                        {
                            var r = ye();
                            if (!r) {
                                var t =
                                    typeof e == 'string'
                                        ? e
                                        : e.displayName || e.name;
                                t &&
                                    (r =
                                        `

Check the top-level render call using <` +
                                        t +
                                        '>.');
                            }
                            return r;
                        }
                    }
                    function me(e, r) {
                        {
                            if (
                                !e._store ||
                                e._store.validated ||
                                e.key != null
                            )
                                return;
                            e._store.validated = !0;
                            var t = tr(r);
                            if (be[t]) return;
                            be[t] = !0;
                            var n = '';
                            e &&
                                e._owner &&
                                e._owner !== B.current &&
                                (n =
                                    ' It was passed a child from ' +
                                    w(e._owner.type) +
                                    '.'),
                                x(e),
                                m(
                                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                                    t,
                                    n
                                ),
                                x(null);
                        }
                    }
                    function ge(e, r) {
                        {
                            if (typeof e != 'object') return;
                            if (V(e))
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    J(n) && me(n, r);
                                }
                            else if (J(e))
                                e._store && (e._store.validated = !0);
                            else if (e) {
                                var s = Te(e);
                                if (typeof s == 'function' && s !== e.entries)
                                    for (
                                        var c = s.call(e), o;
                                        !(o = c.next()).done;

                                    )
                                        J(o.value) && me(o.value, r);
                            }
                        }
                    }
                    function nr(e) {
                        {
                            var r = e.type;
                            if (r == null || typeof r == 'string') return;
                            var t;
                            if (typeof r == 'function') t = r.propTypes;
                            else if (
                                typeof r == 'object' &&
                                (r.$$typeof === f || // Note: Memo only checks outer props here.
                                    // Inner props are checked in the reconciler.
                                    r.$$typeof === R)
                            )
                                t = r.propTypes;
                            else return;
                            if (t) {
                                var n = w(r);
                                Ve(t, e.props, 'prop', n, e);
                            } else if (r.PropTypes !== void 0 && !q) {
                                q = !0;
                                var s = w(r);
                                m(
                                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                                    s || 'Unknown'
                                );
                            }
                            typeof r.getDefaultProps == 'function' &&
                                !r.getDefaultProps.isReactClassApproved &&
                                m(
                                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                                );
                        }
                    }
                    function ar(e) {
                        {
                            for (
                                var r = Object.keys(e.props), t = 0;
                                t < r.length;
                                t++
                            ) {
                                var n = r[t];
                                if (n !== 'children' && n !== 'key') {
                                    x(e),
                                        m(
                                            'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                                            n
                                        ),
                                        x(null);
                                    break;
                                }
                            }
                            e.ref !== null &&
                                (x(e),
                                m(
                                    'Invalid attribute `ref` supplied to `React.Fragment`.'
                                ),
                                x(null));
                        }
                    }
                    function he(e, r, t, n, s, c) {
                        {
                            var o = Ae(e);
                            if (!o) {
                                var a = '';
                                (e === void 0 ||
                                    (typeof e == 'object' &&
                                        e !== null &&
                                        Object.keys(e).length === 0)) &&
                                    (a +=
                                        " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                                var g = rr(s);
                                g ? (a += g) : (a += ye());
                                var v;
                                e === null
                                    ? (v = 'null')
                                    : V(e)
                                    ? (v = 'array')
                                    : e !== void 0 && e.$$typeof === b
                                    ? ((v =
                                          '<' +
                                          (w(e.type) || 'Unknown') +
                                          ' />'),
                                      (a =
                                          ' Did you accidentally export a JSX literal instead of a component?'))
                                    : (v = typeof e),
                                    m(
                                        'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                                        v,
                                        a
                                    );
                            }
                            var y = er(e, r, t, s, c);
                            if (y == null) return y;
                            if (o) {
                                var O = r.children;
                                if (O !== void 0)
                                    if (n)
                                        if (V(O)) {
                                            for (var C = 0; C < O.length; C++)
                                                ge(O[C], e);
                                            Object.freeze && Object.freeze(O);
                                        } else
                                            m(
                                                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                                            );
                                    else ge(O, e);
                            }
                            return e === u ? ar(y) : nr(y), y;
                        }
                    }
                    function or(e, r, t) {
                        return he(e, r, t, !0);
                    }
                    function ir(e, r, t) {
                        return he(e, r, t, !1);
                    }
                    var sr = ir,
                        ur = or;
                    (Oe.Fragment = u), (Oe.jsx = sr), (Oe.jsxs = ur);
                })()),
        Oe
    );
}
(function (i) {
    process.env.NODE_ENV === 'production'
        ? (i.exports = _r())
        : (i.exports = Er());
})(hr);
const G = Se.jsx,
    dr = Se.jsxs;
var Fr = function (i) {
    var b = i.primary,
        p = b === void 0 ? !1 : b,
        u = i.size,
        d = u === void 0 ? 'medium' : u,
        l = i.backgroundColor,
        E = i.label,
        h = gr(i, ['primary', 'size', 'backgroundColor', 'label']),
        f = p ? 'storybook-button--primary' : 'storybook-button--secondary';
    return G(
        'button',
        H(
            {
                type: 'button',
                className: [
                    'storybook-button',
                    'storybook-button--'.concat(d),
                    f,
                ].join(' '),
                style: { backgroundColor: l },
            },
            h,
            { children: E }
        )
    );
};
var cr = {},
    Or = {
        get exports() {
            return cr;
        },
        set exports(i) {
            cr = i;
        },
    };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function (i) {
    (function () {
        var b = {}.hasOwnProperty;
        function p() {
            for (var u = [], d = 0; d < arguments.length; d++) {
                var l = arguments[d];
                if (l) {
                    var E = typeof l;
                    if (E === 'string' || E === 'number') u.push(l);
                    else if (Array.isArray(l)) {
                        if (l.length) {
                            var h = p.apply(null, l);
                            h && u.push(h);
                        }
                    } else if (E === 'object') {
                        if (
                            l.toString !== Object.prototype.toString &&
                            !l.toString.toString().includes('[native code]')
                        ) {
                            u.push(l.toString());
                            continue;
                        }
                        for (var f in l) b.call(l, f) && l[f] && u.push(f);
                    }
                }
            }
            return u.join(' ');
        }
        i.exports
            ? ((p.default = p), (i.exports = p))
            : (window.classNames = p);
    })();
})(Or);
const Rr = cr;
var lr = function () {
    return (
        (lr =
            Object.assign ||
            function (i) {
                for (var b, p = 1, u = arguments.length; p < u; p++) {
                    b = arguments[p];
                    for (var d in b)
                        Object.prototype.hasOwnProperty.call(b, d) &&
                            (i[d] = b[d]);
                }
                return i;
            }),
        lr.apply(this, arguments)
    );
};
function wr(i, b) {
    var p = {};
    for (var u in i)
        Object.prototype.hasOwnProperty.call(i, u) &&
            b.indexOf(u) < 0 &&
            (p[u] = i[u]);
    if (i != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var d = 0, u = Object.getOwnPropertySymbols(i); d < u.length; d++)
            b.indexOf(u[d]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, u[d]) &&
                (p[u[d]] = i[u[d]]);
    return p;
}
var je = {},
    Sr = {
        get exports() {
            return je;
        },
        set exports(i) {
            je = i;
        },
    },
    Re = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function jr() {
    if (vr) return Re;
    vr = 1;
    var i = ke,
        b = Symbol.for('react.element'),
        p = Symbol.for('react.fragment'),
        u = Object.prototype.hasOwnProperty,
        d =
            i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
    function E(h, f, j) {
        var _,
            R = {},
            k = null,
            N = null;
        j !== void 0 && (k = '' + j),
            f.key !== void 0 && (k = '' + f.key),
            f.ref !== void 0 && (N = f.ref);
        for (_ in f) u.call(f, _) && !l.hasOwnProperty(_) && (R[_] = f[_]);
        if (h && h.defaultProps)
            for (_ in ((f = h.defaultProps), f))
                R[_] === void 0 && (R[_] = f[_]);
        return {
            $$typeof: b,
            type: h,
            key: k,
            ref: N,
            props: R,
            _owner: d.current,
        };
    }
    return (Re.Fragment = p), (Re.jsx = E), (Re.jsxs = E), Re;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function kr() {
    return (
        yr ||
            ((yr = 1),
            process.env.NODE_ENV !== 'production' &&
                (function () {
                    var i = ke,
                        b = Symbol.for('react.element'),
                        p = Symbol.for('react.portal'),
                        u = Symbol.for('react.fragment'),
                        d = Symbol.for('react.strict_mode'),
                        l = Symbol.for('react.profiler'),
                        E = Symbol.for('react.provider'),
                        h = Symbol.for('react.context'),
                        f = Symbol.for('react.forward_ref'),
                        j = Symbol.for('react.suspense'),
                        _ = Symbol.for('react.suspense_list'),
                        R = Symbol.for('react.memo'),
                        k = Symbol.for('react.lazy'),
                        N = Symbol.for('react.offscreen'),
                        K = Symbol.iterator,
                        Pe = '@@iterator';
                    function Te(e) {
                        if (e === null || typeof e != 'object') return null;
                        var r = (K && e[K]) || e[Pe];
                        return typeof r == 'function' ? r : null;
                    }
                    var T =
                        i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                    function m(e) {
                        {
                            for (
                                var r = arguments.length,
                                    t = new Array(r > 1 ? r - 1 : 0),
                                    n = 1;
                                n < r;
                                n++
                            )
                                t[n - 1] = arguments[n];
                            xe('error', e, t);
                        }
                    }
                    function xe(e, r, t) {
                        {
                            var n = T.ReactDebugCurrentFrame,
                                s = n.getStackAddendum();
                            s !== '' && ((r += '%s'), (t = t.concat([s])));
                            var c = t.map(function (o) {
                                return String(o);
                            });
                            c.unshift('Warning: ' + r),
                                Function.prototype.apply.call(
                                    console[e],
                                    console,
                                    c
                                );
                        }
                    }
                    var Ce = !1,
                        De = !1,
                        Fe = !1,
                        Ne = !1,
                        $e = !1,
                        X;
                    X = Symbol.for('react.module.reference');
                    function Ae(e) {
                        return !!(
                            typeof e == 'string' ||
                            typeof e == 'function' ||
                            e === u ||
                            e === l ||
                            $e ||
                            e === d ||
                            e === j ||
                            e === _ ||
                            Ne ||
                            e === N ||
                            Ce ||
                            De ||
                            Fe ||
                            (typeof e == 'object' &&
                                e !== null &&
                                (e.$$typeof === k ||
                                    e.$$typeof === R ||
                                    e.$$typeof === E ||
                                    e.$$typeof === h ||
                                    e.$$typeof === f || // This needs to include all possible module reference object
                                    // types supported by any Flight configuration anywhere since
                                    // we don't know which Flight build this will end up being used
                                    // with.
                                    e.$$typeof === X ||
                                    e.getModuleId !== void 0))
                        );
                    }
                    function Ie(e, r, t) {
                        var n = e.displayName;
                        if (n) return n;
                        var s = r.displayName || r.name || '';
                        return s !== '' ? t + '(' + s + ')' : t;
                    }
                    function Z(e) {
                        return e.displayName || 'Context';
                    }
                    function w(e) {
                        if (e == null) return null;
                        if (
                            (typeof e.tag == 'number' &&
                                m(
                                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                                ),
                            typeof e == 'function')
                        )
                            return e.displayName || e.name || null;
                        if (typeof e == 'string') return e;
                        switch (e) {
                            case u:
                                return 'Fragment';
                            case p:
                                return 'Portal';
                            case l:
                                return 'Profiler';
                            case d:
                                return 'StrictMode';
                            case j:
                                return 'Suspense';
                            case _:
                                return 'SuspenseList';
                        }
                        if (typeof e == 'object')
                            switch (e.$$typeof) {
                                case h:
                                    var r = e;
                                    return Z(r) + '.Consumer';
                                case E:
                                    var t = e;
                                    return Z(t._context) + '.Provider';
                                case f:
                                    return Ie(e, e.render, 'ForwardRef');
                                case R:
                                    var n = e.displayName || null;
                                    return n !== null ? n : w(e.type) || 'Memo';
                                case k: {
                                    var s = e,
                                        c = s._payload,
                                        o = s._init;
                                    try {
                                        return w(o(c));
                                    } catch {
                                        return null;
                                    }
                                }
                            }
                        return null;
                    }
                    var P = Object.assign,
                        D = 0,
                        Q,
                        ee,
                        re,
                        te,
                        ne,
                        ae,
                        oe;
                    function ie() {}
                    ie.__reactDisabledLog = !0;
                    function We() {
                        {
                            if (D === 0) {
                                (Q = console.log),
                                    (ee = console.info),
                                    (re = console.warn),
                                    (te = console.error),
                                    (ne = console.group),
                                    (ae = console.groupCollapsed),
                                    (oe = console.groupEnd);
                                var e = {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: ie,
                                    writable: !0,
                                };
                                Object.defineProperties(console, {
                                    info: e,
                                    log: e,
                                    warn: e,
                                    error: e,
                                    group: e,
                                    groupCollapsed: e,
                                    groupEnd: e,
                                });
                            }
                            D++;
                        }
                    }
                    function Le() {
                        {
                            if ((D--, D === 0)) {
                                var e = {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                };
                                Object.defineProperties(console, {
                                    log: P({}, e, {
                                        value: Q,
                                    }),
                                    info: P({}, e, {
                                        value: ee,
                                    }),
                                    warn: P({}, e, {
                                        value: re,
                                    }),
                                    error: P({}, e, {
                                        value: te,
                                    }),
                                    group: P({}, e, {
                                        value: ne,
                                    }),
                                    groupCollapsed: P({}, e, {
                                        value: ae,
                                    }),
                                    groupEnd: P({}, e, {
                                        value: oe,
                                    }),
                                });
                            }
                            D < 0 &&
                                m(
                                    'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
                                );
                        }
                    }
                    var Y = T.ReactCurrentDispatcher,
                        U;
                    function $(e, r, t) {
                        {
                            if (U === void 0)
                                try {
                                    throw Error();
                                } catch (s) {
                                    var n = s.stack
                                        .trim()
                                        .match(/\n( *(at )?)/);
                                    U = (n && n[1]) || '';
                                }
                            return (
                                `
` +
                                U +
                                e
                            );
                        }
                    }
                    var M = !1,
                        A;
                    {
                        var Ye = typeof WeakMap == 'function' ? WeakMap : Map;
                        A = new Ye();
                    }
                    function se(e, r) {
                        if (!e || M) return '';
                        {
                            var t = A.get(e);
                            if (t !== void 0) return t;
                        }
                        var n;
                        M = !0;
                        var s = Error.prepareStackTrace;
                        Error.prepareStackTrace = void 0;
                        var c;
                        (c = Y.current), (Y.current = null), We();
                        try {
                            if (r) {
                                var o = function () {
                                    throw Error();
                                };
                                if (
                                    (Object.defineProperty(
                                        o.prototype,
                                        'props',
                                        {
                                            set: function () {
                                                throw Error();
                                            },
                                        }
                                    ),
                                    typeof Reflect == 'object' &&
                                        Reflect.construct)
                                ) {
                                    try {
                                        Reflect.construct(o, []);
                                    } catch (S) {
                                        n = S;
                                    }
                                    Reflect.construct(e, [], o);
                                } else {
                                    try {
                                        o.call();
                                    } catch (S) {
                                        n = S;
                                    }
                                    e.call(o.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (S) {
                                    n = S;
                                }
                                e();
                            }
                        } catch (S) {
                            if (S && n && typeof S.stack == 'string') {
                                for (
                                    var a = S.stack.split(`
`),
                                        g = n.stack.split(`
`),
                                        v = a.length - 1,
                                        y = g.length - 1;
                                    v >= 1 && y >= 0 && a[v] !== g[y];

                                )
                                    y--;
                                for (; v >= 1 && y >= 0; v--, y--)
                                    if (a[v] !== g[y]) {
                                        if (v !== 1 || y !== 1)
                                            do
                                                if (
                                                    (v--,
                                                    y--,
                                                    y < 0 || a[v] !== g[y])
                                                ) {
                                                    var O =
                                                        `
` + a[v].replace(' at new ', ' at ');
                                                    return (
                                                        e.displayName &&
                                                            O.includes(
                                                                '<anonymous>'
                                                            ) &&
                                                            (O = O.replace(
                                                                '<anonymous>',
                                                                e.displayName
                                                            )),
                                                        typeof e ==
                                                            'function' &&
                                                            A.set(e, O),
                                                        O
                                                    );
                                                }
                                            while (v >= 1 && y >= 0);
                                        break;
                                    }
                            }
                        } finally {
                            (M = !1),
                                (Y.current = c),
                                Le(),
                                (Error.prepareStackTrace = s);
                        }
                        var C = e ? e.displayName || e.name : '',
                            _e = C ? $(C) : '';
                        return typeof e == 'function' && A.set(e, _e), _e;
                    }
                    function Ue(e, r, t) {
                        return se(e, !1);
                    }
                    function Me(e) {
                        var r = e.prototype;
                        return !!(r && r.isReactComponent);
                    }
                    function I(e, r, t) {
                        if (e == null) return '';
                        if (typeof e == 'function') return se(e, Me(e));
                        if (typeof e == 'string') return $(e);
                        switch (e) {
                            case j:
                                return $('Suspense');
                            case _:
                                return $('SuspenseList');
                        }
                        if (typeof e == 'object')
                            switch (e.$$typeof) {
                                case f:
                                    return Ue(e.render);
                                case R:
                                    return I(e.type, r, t);
                                case k: {
                                    var n = e,
                                        s = n._payload,
                                        c = n._init;
                                    try {
                                        return I(c(s), r, t);
                                    } catch {}
                                }
                            }
                        return '';
                    }
                    var W = Object.prototype.hasOwnProperty,
                        ue = {},
                        ce = T.ReactDebugCurrentFrame;
                    function L(e) {
                        if (e) {
                            var r = e._owner,
                                t = I(e.type, e._source, r ? r.type : null);
                            ce.setExtraStackFrame(t);
                        } else ce.setExtraStackFrame(null);
                    }
                    function Ve(e, r, t, n, s) {
                        {
                            var c = Function.call.bind(W);
                            for (var o in e)
                                if (c(e, o)) {
                                    var a = void 0;
                                    try {
                                        if (typeof e[o] != 'function') {
                                            var g = Error(
                                                (n || 'React class') +
                                                    ': ' +
                                                    t +
                                                    ' type `' +
                                                    o +
                                                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                                                    typeof e[o] +
                                                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                                            );
                                            throw (
                                                ((g.name =
                                                    'Invariant Violation'),
                                                g)
                                            );
                                        }
                                        a = e[o](
                                            r,
                                            o,
                                            n,
                                            t,
                                            null,
                                            'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                                        );
                                    } catch (v) {
                                        a = v;
                                    }
                                    a &&
                                        !(a instanceof Error) &&
                                        (L(s),
                                        m(
                                            '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                                            n || 'React class',
                                            t,
                                            o,
                                            typeof a
                                        ),
                                        L(null)),
                                        a instanceof Error &&
                                            !(a.message in ue) &&
                                            ((ue[a.message] = !0),
                                            L(s),
                                            m(
                                                'Failed %s type: %s',
                                                t,
                                                a.message
                                            ),
                                            L(null));
                                }
                        }
                    }
                    var ze = Array.isArray;
                    function V(e) {
                        return ze(e);
                    }
                    function Be(e) {
                        {
                            var r =
                                    typeof Symbol == 'function' &&
                                    Symbol.toStringTag,
                                t =
                                    (r && e[Symbol.toStringTag]) ||
                                    e.constructor.name ||
                                    'Object';
                            return t;
                        }
                    }
                    function qe(e) {
                        try {
                            return le(e), !1;
                        } catch {
                            return !0;
                        }
                    }
                    function le(e) {
                        return '' + e;
                    }
                    function fe(e) {
                        if (qe(e))
                            return (
                                m(
                                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                                    Be(e)
                                ),
                                le(e)
                            );
                    }
                    var F = T.ReactCurrentOwner,
                        Je = {
                            key: !0,
                            ref: !0,
                            __self: !0,
                            __source: !0,
                        },
                        pe,
                        de,
                        z;
                    z = {};
                    function Ge(e) {
                        if (W.call(e, 'ref')) {
                            var r = Object.getOwnPropertyDescriptor(
                                e,
                                'ref'
                            ).get;
                            if (r && r.isReactWarning) return !1;
                        }
                        return e.ref !== void 0;
                    }
                    function He(e) {
                        if (W.call(e, 'key')) {
                            var r = Object.getOwnPropertyDescriptor(
                                e,
                                'key'
                            ).get;
                            if (r && r.isReactWarning) return !1;
                        }
                        return e.key !== void 0;
                    }
                    function Ke(e, r) {
                        if (
                            typeof e.ref == 'string' &&
                            F.current &&
                            r &&
                            F.current.stateNode !== r
                        ) {
                            var t = w(F.current.type);
                            z[t] ||
                                (m(
                                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                                    w(F.current.type),
                                    e.ref
                                ),
                                (z[t] = !0));
                        }
                    }
                    function Xe(e, r) {
                        {
                            var t = function () {
                                pe ||
                                    ((pe = !0),
                                    m(
                                        '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                                        r
                                    ));
                            };
                            (t.isReactWarning = !0),
                                Object.defineProperty(e, 'key', {
                                    get: t,
                                    configurable: !0,
                                });
                        }
                    }
                    function Ze(e, r) {
                        {
                            var t = function () {
                                de ||
                                    ((de = !0),
                                    m(
                                        '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                                        r
                                    ));
                            };
                            (t.isReactWarning = !0),
                                Object.defineProperty(e, 'ref', {
                                    get: t,
                                    configurable: !0,
                                });
                        }
                    }
                    var Qe = function (e, r, t, n, s, c, o) {
                        var a = {
                            // This tag allows us to uniquely identify this as a React Element
                            $$typeof: b,
                            // Built-in properties that belong on the element
                            type: e,
                            key: r,
                            ref: t,
                            props: o,
                            // Record the component responsible for creating this element.
                            _owner: c,
                        };
                        return (
                            (a._store = {}),
                            Object.defineProperty(a._store, 'validated', {
                                configurable: !1,
                                enumerable: !1,
                                writable: !0,
                                value: !1,
                            }),
                            Object.defineProperty(a, '_self', {
                                configurable: !1,
                                enumerable: !1,
                                writable: !1,
                                value: n,
                            }),
                            Object.defineProperty(a, '_source', {
                                configurable: !1,
                                enumerable: !1,
                                writable: !1,
                                value: s,
                            }),
                            Object.freeze &&
                                (Object.freeze(a.props), Object.freeze(a)),
                            a
                        );
                    };
                    function er(e, r, t, n, s) {
                        {
                            var c,
                                o = {},
                                a = null,
                                g = null;
                            t !== void 0 && (fe(t), (a = '' + t)),
                                He(r) && (fe(r.key), (a = '' + r.key)),
                                Ge(r) && ((g = r.ref), Ke(r, s));
                            for (c in r)
                                W.call(r, c) &&
                                    !Je.hasOwnProperty(c) &&
                                    (o[c] = r[c]);
                            if (e && e.defaultProps) {
                                var v = e.defaultProps;
                                for (c in v) o[c] === void 0 && (o[c] = v[c]);
                            }
                            if (a || g) {
                                var y =
                                    typeof e == 'function'
                                        ? e.displayName || e.name || 'Unknown'
                                        : e;
                                a && Xe(o, y), g && Ze(o, y);
                            }
                            return Qe(e, a, g, s, n, F.current, o);
                        }
                    }
                    var B = T.ReactCurrentOwner,
                        ve = T.ReactDebugCurrentFrame;
                    function x(e) {
                        if (e) {
                            var r = e._owner,
                                t = I(e.type, e._source, r ? r.type : null);
                            ve.setExtraStackFrame(t);
                        } else ve.setExtraStackFrame(null);
                    }
                    var q;
                    q = !1;
                    function J(e) {
                        return (
                            typeof e == 'object' &&
                            e !== null &&
                            e.$$typeof === b
                        );
                    }
                    function ye() {
                        {
                            if (B.current) {
                                var e = w(B.current.type);
                                if (e)
                                    return (
                                        `

Check the render method of \`` +
                                        e +
                                        '`.'
                                    );
                            }
                            return '';
                        }
                    }
                    function rr(e) {
                        {
                            if (e !== void 0) {
                                var r = e.fileName.replace(/^.*[\\\/]/, ''),
                                    t = e.lineNumber;
                                return (
                                    `

Check your code at ` +
                                    r +
                                    ':' +
                                    t +
                                    '.'
                                );
                            }
                            return '';
                        }
                    }
                    var be = {};
                    function tr(e) {
                        {
                            var r = ye();
                            if (!r) {
                                var t =
                                    typeof e == 'string'
                                        ? e
                                        : e.displayName || e.name;
                                t &&
                                    (r =
                                        `

Check the top-level render call using <` +
                                        t +
                                        '>.');
                            }
                            return r;
                        }
                    }
                    function me(e, r) {
                        {
                            if (
                                !e._store ||
                                e._store.validated ||
                                e.key != null
                            )
                                return;
                            e._store.validated = !0;
                            var t = tr(r);
                            if (be[t]) return;
                            be[t] = !0;
                            var n = '';
                            e &&
                                e._owner &&
                                e._owner !== B.current &&
                                (n =
                                    ' It was passed a child from ' +
                                    w(e._owner.type) +
                                    '.'),
                                x(e),
                                m(
                                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                                    t,
                                    n
                                ),
                                x(null);
                        }
                    }
                    function ge(e, r) {
                        {
                            if (typeof e != 'object') return;
                            if (V(e))
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    J(n) && me(n, r);
                                }
                            else if (J(e))
                                e._store && (e._store.validated = !0);
                            else if (e) {
                                var s = Te(e);
                                if (typeof s == 'function' && s !== e.entries)
                                    for (
                                        var c = s.call(e), o;
                                        !(o = c.next()).done;

                                    )
                                        J(o.value) && me(o.value, r);
                            }
                        }
                    }
                    function nr(e) {
                        {
                            var r = e.type;
                            if (r == null || typeof r == 'string') return;
                            var t;
                            if (typeof r == 'function') t = r.propTypes;
                            else if (
                                typeof r == 'object' &&
                                (r.$$typeof === f || // Note: Memo only checks outer props here.
                                    // Inner props are checked in the reconciler.
                                    r.$$typeof === R)
                            )
                                t = r.propTypes;
                            else return;
                            if (t) {
                                var n = w(r);
                                Ve(t, e.props, 'prop', n, e);
                            } else if (r.PropTypes !== void 0 && !q) {
                                q = !0;
                                var s = w(r);
                                m(
                                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                                    s || 'Unknown'
                                );
                            }
                            typeof r.getDefaultProps == 'function' &&
                                !r.getDefaultProps.isReactClassApproved &&
                                m(
                                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                                );
                        }
                    }
                    function ar(e) {
                        {
                            for (
                                var r = Object.keys(e.props), t = 0;
                                t < r.length;
                                t++
                            ) {
                                var n = r[t];
                                if (n !== 'children' && n !== 'key') {
                                    x(e),
                                        m(
                                            'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                                            n
                                        ),
                                        x(null);
                                    break;
                                }
                            }
                            e.ref !== null &&
                                (x(e),
                                m(
                                    'Invalid attribute `ref` supplied to `React.Fragment`.'
                                ),
                                x(null));
                        }
                    }
                    function he(e, r, t, n, s, c) {
                        {
                            var o = Ae(e);
                            if (!o) {
                                var a = '';
                                (e === void 0 ||
                                    (typeof e == 'object' &&
                                        e !== null &&
                                        Object.keys(e).length === 0)) &&
                                    (a +=
                                        " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                                var g = rr(s);
                                g ? (a += g) : (a += ye());
                                var v;
                                e === null
                                    ? (v = 'null')
                                    : V(e)
                                    ? (v = 'array')
                                    : e !== void 0 && e.$$typeof === b
                                    ? ((v =
                                          '<' +
                                          (w(e.type) || 'Unknown') +
                                          ' />'),
                                      (a =
                                          ' Did you accidentally export a JSX literal instead of a component?'))
                                    : (v = typeof e),
                                    m(
                                        'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                                        v,
                                        a
                                    );
                            }
                            var y = er(e, r, t, s, c);
                            if (y == null) return y;
                            if (o) {
                                var O = r.children;
                                if (O !== void 0)
                                    if (n)
                                        if (V(O)) {
                                            for (var C = 0; C < O.length; C++)
                                                ge(O[C], e);
                                            Object.freeze && Object.freeze(O);
                                        } else
                                            m(
                                                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                                            );
                                    else ge(O, e);
                            }
                            return e === u ? ar(y) : nr(y), y;
                        }
                    }
                    function or(e, r, t) {
                        return he(e, r, t, !0);
                    }
                    function ir(e, r, t) {
                        return he(e, r, t, !1);
                    }
                    var sr = ir,
                        ur = or;
                    (we.Fragment = u), (we.jsx = sr), (we.jsxs = ur);
                })()),
        we
    );
}
(function (i) {
    process.env.NODE_ENV === 'production'
        ? (i.exports = jr())
        : (i.exports = kr());
})(Sr);
const Pr = je.jsx;
je.jsxs;
var Tr = function (i) {
        var b = i.primary,
            p = b === void 0 ? !1 : b,
            u = i.size,
            d = u === void 0 ? 'medium' : u,
            l = i.backgroundColor,
            E = i.label,
            h = wr(i, ['primary', 'size', 'backgroundColor', 'label']),
            f = p ? 'storybook-button--primary' : 'storybook-button--secondary';
        return Pr(
            'button',
            lr(
                {
                    type: 'button',
                    className: [
                        'storybook-button',
                        'storybook-button--'.concat(d),
                        f,
                    ].join(' '),
                    style: { backgroundColor: l },
                },
                h,
                { children: E }
            )
        );
    },
    br = {},
    xr = {
        get exports() {
            return br;
        },
        set exports(i) {
            br = i;
        },
    };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function (i) {
    (function () {
        var b = {}.hasOwnProperty;
        function p() {
            for (var u = [], d = 0; d < arguments.length; d++) {
                var l = arguments[d];
                if (l) {
                    var E = typeof l;
                    if (E === 'string' || E === 'number') u.push(l);
                    else if (Array.isArray(l)) {
                        if (l.length) {
                            var h = p.apply(null, l);
                            h && u.push(h);
                        }
                    } else if (E === 'object') {
                        if (
                            l.toString !== Object.prototype.toString &&
                            !l.toString.toString().includes('[native code]')
                        ) {
                            u.push(l.toString());
                            continue;
                        }
                        for (var f in l) b.call(l, f) && l[f] && u.push(f);
                    }
                }
            }
            return u.join(' ');
        }
        i.exports
            ? ((p.default = p), (i.exports = p))
            : (window.classNames = p);
    })();
})(xr);
var Cr = function (i) {
    var b,
        p = mr(!0),
        u = p[0],
        d = p[1],
        l = function () {
            d(!1);
        },
        E = i.className,
        h = i.type,
        f = i.description,
        j = Rr(
            'alt-main',
            'alert',
            E,
            ((b = {}), (b['alt-'.concat(h)] = h), b)
        );
    return u
        ? dr(
              'div',
              H(
                  { className: j },
                  {
                      children: [
                          G(
                              'div',
                              H(
                                  { className: 'quit', onClick: l },
                                  {
                                      children: G(
                                          'svg',
                                          H(
                                              {
                                                  viewBox: '64 64 896 896',
                                                  height: '1em',
                                                  fill: 'currentColor',
                                              },
                                              {
                                                  children: G('path', {
                                                      d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
                                                  }),
                                              }
                                          )
                                      ),
                                  }
                              )
                          ),
                          dr('div', {
                              children: [
                                  G(Tr, {
                                      label: 'click me',
                                      size: 'large',
                                      primary: !0,
                                  }),
                                  G(
                                      'div',
                                      H(
                                          { className: 'content' },
                                          { children: f }
                                      )
                                  ),
                              ],
                          }),
                      ],
                  }
              )
          )
        : G('div', {});
};
Cr.defaultProps = {
    type: 'primary',
    description: '请输入内容',
};
export { Cr as Alert, Fr as Button };
