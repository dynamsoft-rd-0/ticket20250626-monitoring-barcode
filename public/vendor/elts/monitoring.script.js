var originalPromise = window.Promise;

window.NREUM || (NREUM = {});
NREUM.init = {
  distributed_tracing: { enabled: true },
  privacy: { cookies_enabled: true },
  ajax: { deny_list: ['bam.nr-data.net'] }
};

NREUM.loader_config = {
  accountID: '4067145',
  trustKey: '1920239',
  agentID: '1386173444',
  licenseKey: 'NRJS-d2f1596b3bc84b1e9b9',
  applicationID: '1386173444'
};
NREUM.info = {
  beacon: 'bam.nr-data.net',
  errorBeacon: 'bam.nr-data.net',
  licenseKey: 'NRJS-d2f1596b3bc84b1e9b9',
  applicationID: '1386173444',
  sa: 1
}; /*! For license information please see nr-loader-spa-1.260.0.min.js.LICENSE.txt */
(() => {
  var e,
    t,
    r = {
      234: (e, t, r) => {
        'use strict';
        r.d(t, {
          P_: () => m,
          Mt: () => b,
          C5: () => s,
          DL: () => w,
          OP: () => O,
          lF: () => D,
          Yu: () => _,
          Dg: () => v,
          CX: () => c,
          GE: () => E,
          sU: () => I
        });
        var n = r(8632),
          i = r(9567);
        const o = {
            beacon: n.ce.beacon,
            errorBeacon: n.ce.errorBeacon,
            licenseKey: void 0,
            applicationID: void 0,
            sa: void 0,
            queueTime: void 0,
            applicationTime: void 0,
            ttGuid: void 0,
            user: void 0,
            account: void 0,
            product: void 0,
            extra: void 0,
            jsAttributes: {},
            userAttributes: void 0,
            atts: void 0,
            transactionName: void 0,
            tNamePlain: void 0
          },
          a = {};
        function s(e) {
          if (!e)
            throw new Error('All info objects require an agent identifier!');
          if (!a[e]) throw new Error('Info for '.concat(e, ' was never set'));
          return a[e];
        }
        function c(e, t) {
          if (!e)
            throw new Error('All info objects require an agent identifier!');
          a[e] = (0, i.D)(t, o);
          const r = (0, n.ek)(e);
          r && (r.info = a[e]);
        }
        const u = (e) => {
          if (!e || 'string' != typeof e) return !1;
          try {
            document.createDocumentFragment().querySelector(e);
          } catch {
            return !1;
          }
          return !0;
        };
        var d = r(7056),
          l = r(50);
        const f = '[data-nr-mask]',
          h = () => {
            const e = {
              mask_selector: '*',
              block_selector: '[data-nr-block]',
              mask_input_options: {
                color: !1,
                date: !1,
                'datetime-local': !1,
                email: !1,
                month: !1,
                number: !1,
                range: !1,
                search: !1,
                tel: !1,
                text: !1,
                time: !1,
                url: !1,
                week: !1,
                textarea: !1,
                select: !1,
                password: !0
              }
            };
            return {
              feature_flags: [],
              proxy: { assets: void 0, beacon: void 0 },
              privacy: { cookies_enabled: !0 },
              ajax: {
                deny_list: void 0,
                block_internal: !0,
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0
              },
              distributed_tracing: {
                enabled: void 0,
                exclude_newrelic_header: void 0,
                cors_use_newrelic_header: void 0,
                cors_use_tracecontext_headers: void 0,
                allowed_origins: void 0
              },
              session: { expiresMs: d.oD, inactiveMs: d.Hb },
              ssl: void 0,
              obfuscate: void 0,
              jserrors: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              metrics: { enabled: !0, autoStart: !0 },
              page_action: {
                enabled: !0,
                harvestTimeSeconds: 30,
                autoStart: !0
              },
              page_view_event: { enabled: !0, autoStart: !0 },
              page_view_timing: {
                enabled: !0,
                harvestTimeSeconds: 30,
                long_task: !1,
                autoStart: !0
              },
              session_trace: {
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0
              },
              harvest: { tooManyRequestsDelay: 60 },
              session_replay: {
                autoStart: !0,
                enabled: !1,
                harvestTimeSeconds: 60,
                preload: !1,
                sampling_rate: 10,
                error_sampling_rate: 100,
                collect_fonts: !1,
                inline_images: !1,
                inline_stylesheet: !0,
                mask_all_inputs: !0,
                get mask_text_selector() {
                  return e.mask_selector;
                },
                set mask_text_selector(t) {
                  u(t)
                    ? (e.mask_selector = ''.concat(t, ',').concat(f))
                    : '' === t || null === t
                      ? (e.mask_selector = f)
                      : (0, l.Z)(
                          "An invalid session_replay.mask_selector was provided. '*' will be used.",
                          t
                        );
                },
                get block_class() {
                  return 'nr-block';
                },
                get ignore_class() {
                  return 'nr-ignore';
                },
                get mask_text_class() {
                  return 'nr-mask';
                },
                get block_selector() {
                  return e.block_selector;
                },
                set block_selector(t) {
                  u(t)
                    ? (e.block_selector += ','.concat(t))
                    : '' !== t &&
                      (0, l.Z)(
                        'An invalid session_replay.block_selector was provided and will not be used',
                        t
                      );
                },
                get mask_input_options() {
                  return e.mask_input_options;
                },
                set mask_input_options(t) {
                  t && 'object' == typeof t
                    ? (e.mask_input_options = { ...t, password: !0 })
                    : (0, l.Z)(
                        'An invalid session_replay.mask_input_option was provided and will not be used',
                        t
                      );
                }
              },
              spa: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              soft_navigations: {
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0
              }
            };
          },
          p = {},
          g = 'All configuration objects require an agent identifier!';
        function m(e) {
          if (!e) throw new Error(g);
          if (!p[e])
            throw new Error('Configuration for '.concat(e, ' was never set'));
          return p[e];
        }
        function v(e, t) {
          if (!e) throw new Error(g);
          p[e] = (0, i.D)(t, h());
          const r = (0, n.ek)(e);
          r && (r.init = p[e]);
        }
        function b(e, t) {
          if (!e) throw new Error(g);
          var r = m(e);
          if (r) {
            for (var n = t.split('.'), i = 0; i < n.length - 1; i++)
              if ('object' != typeof (r = r[n[i]])) return;
            r = r[n[n.length - 1]];
          }
          return r;
        }
        const y = {
            accountID: void 0,
            trustKey: void 0,
            agentID: void 0,
            licenseKey: void 0,
            applicationID: void 0,
            xpid: void 0
          },
          A = {};
        function w(e) {
          if (!e)
            throw new Error(
              'All loader-config objects require an agent identifier!'
            );
          if (!A[e])
            throw new Error('LoaderConfig for '.concat(e, ' was never set'));
          return A[e];
        }
        function E(e, t) {
          if (!e)
            throw new Error(
              'All loader-config objects require an agent identifier!'
            );
          A[e] = (0, i.D)(t, y);
          const r = (0, n.ek)(e);
          r && (r.loader_config = A[e]);
        }
        const _ = (0, n.mF)().o;
        var x = r(385),
          R = r(6818);
        const S = {
            buildEnv: R.Re,
            distMethod: R.gF,
            version: R.q4,
            originTime: x.sK
          },
          T = {
            customTransaction: void 0,
            disabled: !1,
            isolatedBacklog: !1,
            loaderType: void 0,
            maxBytes: 3e4,
            onerror: void 0,
            origin: '' + x._A.location,
            ptid: void 0,
            releaseIds: {},
            appMetadata: {},
            session: void 0,
            denyList: void 0,
            harvestCount: 0,
            timeKeeper: void 0
          },
          N = {};
        function O(e) {
          if (!e)
            throw new Error('All runtime objects require an agent identifier!');
          if (!N[e])
            throw new Error('Runtime for '.concat(e, ' was never set'));
          return N[e];
        }
        function I(e, t) {
          if (!e)
            throw new Error('All runtime objects require an agent identifier!');
          N[e] = { ...(0, i.D)(t, T), ...S };
          const r = (0, n.ek)(e);
          r && (r.runtime = N[e]);
        }
        function D(e) {
          return (function (e) {
            try {
              const t = s(e);
              return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID;
            } catch (e) {
              return !1;
            }
          })(e);
        }
      },
      9567: (e, t, r) => {
        'use strict';
        r.d(t, { D: () => i });
        var n = r(50);
        function i(e, t) {
          try {
            if (!e || 'object' != typeof e)
              return (0, n.Z)(
                'Setting a Configurable requires an object as input'
              );
            if (!t || 'object' != typeof t)
              return (0, n.Z)(
                'Setting a Configurable requires a model to set its initial properties'
              );
            const r = Object.create(
                Object.getPrototypeOf(t),
                Object.getOwnPropertyDescriptors(t)
              ),
              o = 0 === Object.keys(r).length ? e : r;
            for (let a in o)
              if (void 0 !== e[a])
                try {
                  if (null === e[a]) {
                    r[a] = null;
                    continue;
                  }
                  Array.isArray(e[a]) && Array.isArray(t[a])
                    ? (r[a] = Array.from(new Set([...e[a], ...t[a]])))
                    : 'object' == typeof e[a] && 'object' == typeof t[a]
                      ? (r[a] = i(e[a], t[a]))
                      : (r[a] = e[a]);
                } catch (e) {
                  (0, n.Z)(
                    'An error occurred while setting a property of a Configurable',
                    e
                  );
                }
            return r;
          } catch (e) {
            (0, n.Z)('An error occured while setting a Configurable', e);
          }
        }
      },
      6818: (e, t, r) => {
        'use strict';
        r.d(t, { Re: () => i, gF: () => o, lF: () => a, q4: () => n });
        const n = '1.260.0',
          i = 'PROD',
          o = 'CDN',
          a = '2.0.0-alpha.12';
      },
      385: (e, t, r) => {
        'use strict';
        r.d(t, {
          FN: () => c,
          IF: () => l,
          LW: () => a,
          Nk: () => h,
          Tt: () => u,
          _A: () => o,
          iS: () => s,
          il: () => n,
          sK: () => p,
          ux: () => d,
          v6: () => i,
          w1: () => f
        });
        const n = 'undefined' != typeof window && !!window.document,
          i =
            'undefined' != typeof WorkerGlobalScope &&
            (('undefined' != typeof self &&
              self instanceof WorkerGlobalScope &&
              self.navigator instanceof WorkerNavigator) ||
              ('undefined' != typeof globalThis &&
                globalThis instanceof WorkerGlobalScope &&
                globalThis.navigator instanceof WorkerNavigator)),
          o = n
            ? window
            : 'undefined' != typeof WorkerGlobalScope &&
              (('undefined' != typeof self &&
                self instanceof WorkerGlobalScope &&
                self) ||
                ('undefined' != typeof globalThis &&
                  globalThis instanceof WorkerGlobalScope &&
                  globalThis)),
          a = 'complete' === o?.document?.readyState,
          s = Boolean('hidden' === o?.document?.visibilityState),
          c = '' + o?.location,
          u = /iPad|iPhone|iPod/.test(o.navigator?.userAgent),
          d = u && 'undefined' == typeof SharedWorker,
          l = (() => {
            const e = o.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);
            return Array.isArray(e) && e.length >= 2 ? +e[1] : 0;
          })(),
          f = Boolean(n && window.document.documentMode),
          h = !!o.navigator?.sendBeacon,
          p = Math.floor(Date.now() - performance.now());
      },
      1117: (e, t, r) => {
        'use strict';
        r.d(t, { w: () => o });
        var n = r(50);
        const i = { agentIdentifier: '', ee: void 0 };
        class o {
          constructor(e) {
            try {
              if ('object' != typeof e)
                return (0, n.Z)('shared context requires an object as input');
              (this.sharedContext = {}),
                Object.assign(this.sharedContext, i),
                Object.entries(e).forEach((e) => {
                  let [t, r] = e;
                  Object.keys(i).includes(t) && (this.sharedContext[t] = r);
                });
            } catch (e) {
              (0, n.Z)('An error occurred while setting SharedContext', e);
            }
          }
        }
      },
      1199: (e, t, r) => {
        'use strict';
        r.d(t, { R2: () => a, zR: () => i, zh: () => o });
        var n = [];
        function i(e) {
          if (o(e)) return !1;
          if (0 === n.length) return !0;
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            if ('*' === r.hostname) return !1;
            if (s(r.hostname, e.hostname) && c(r.pathname, e.pathname))
              return !1;
          }
          return !0;
        }
        function o(e) {
          return void 0 === e.hostname;
        }
        function a(e) {
          if (((n = []), e && e.length))
            for (var t = 0; t < e.length; t++) {
              let r = e[t];
              if (!r) continue;
              0 === r.indexOf('http://')
                ? (r = r.substring(7))
                : 0 === r.indexOf('https://') && (r = r.substring(8));
              const i = r.indexOf('/');
              let o, a;
              i > 0
                ? ((o = r.substring(0, i)), (a = r.substring(i)))
                : ((o = r), (a = ''));
              let [s] = o.split(':');
              n.push({ hostname: s, pathname: a });
            }
        }
        function s(e, t) {
          return !(e.length > t.length) && t.indexOf(e) === t.length - e.length;
        }
        function c(e, t) {
          return (
            0 === e.indexOf('/') && (e = e.substring(1)),
            0 === t.indexOf('/') && (t = t.substring(1)),
            '' === e || e === t
          );
        }
      },
      8e3: (e, t, r) => {
        'use strict';
        r.d(t, { LP: () => l, RP: () => c, o5: () => u });
        var n = r(8325),
          i = r(1284),
          o = r(4322),
          a = r(3325);
        const s = {};
        function c(e, t) {
          const r = { staged: !1, priority: a.p[t] || 0 };
          d(e), s[e].get(t) || s[e].set(t, r);
        }
        function u(e, t) {
          d(e), s[e].get(t) && s[e].delete(t), s[e].size && f(e);
        }
        function d(e) {
          if (!e) throw new Error('agentIdentifier required');
          s[e] || (s[e] = new Map());
        }
        function l() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '',
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'feature',
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ((d(e), !e || !s[e].get(t) || r)) return h(e, t);
          (s[e].get(t).staged = !0), f(e);
        }
        function f(e) {
          const t = Array.from(s[e]);
          t.every((e) => {
            let [t, r] = e;
            return r.staged;
          }) &&
            (t.sort((e, t) => e[1].priority - t[1].priority),
            t.forEach((t) => {
              let [r] = t;
              s[e].delete(r), h(e, r);
            }));
        }
        function h(e, t) {
          const r = e ? n.ee.get(e) : n.ee,
            a = o.X.handlers;
          if (r.backlog && a) {
            var s = r.backlog[t],
              c = a[t];
            if (c) {
              for (var u = 0; s && u < s.length; ++u) p(s[u], c);
              (0, i.D)(c, function (e, t) {
                (0, i.D)(t, function (t, r) {
                  r[0].on(e, r[1]);
                });
              });
            }
            r.isolatedBacklog || delete a[t],
              (r.backlog[t] = null),
              r.emit('drain-' + t, []);
          }
        }
        function p(e, t) {
          var r = e[1];
          (0, i.D)(t[r], function (t, r) {
            var n = e[0];
            if (r[0] === n) {
              var i = r[1],
                o = e[3],
                a = e[2];
              i.apply(o, a);
            }
          });
        }
      },
      8325: (e, t, r) => {
        'use strict';
        r.d(t, { A: () => c, ee: () => u });
        var n = r(8632),
          i = r(2210),
          o = r(234);
        class a {
          constructor(e) {
            this.contextId = e;
          }
        }
        var s = r(3117);
        const c = 'nr@context:'.concat(s.a),
          u = (function e(t, r) {
            var n = {},
              s = {},
              d = {},
              l = !1;
            try {
              l = 16 === r.length && (0, o.OP)(r).isolatedBacklog;
            } catch (e) {}
            var f = {
              on: p,
              addEventListener: p,
              removeEventListener: function (e, t) {
                var r = n[e];
                if (!r) return;
                for (var i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1);
              },
              emit: function (e, r, n, i, o) {
                !1 !== o && (o = !0);
                if (u.aborted && !i) return;
                t && o && t.emit(e, r, n);
                for (var a = h(n), c = g(e), d = c.length, l = 0; l < d; l++)
                  c[l].apply(a, r);
                var p = v()[s[e]];
                p && p.push([f, e, r, a]);
                return a;
              },
              get: m,
              listeners: g,
              context: h,
              buffer: function (e, t) {
                const r = v();
                if (((t = t || 'feature'), f.aborted)) return;
                Object.entries(e || {}).forEach((e) => {
                  let [n, i] = e;
                  (s[i] = t), t in r || (r[t] = []);
                });
              },
              abort: function () {
                (f._aborted = !0),
                  Object.keys(f.backlog).forEach((e) => {
                    delete f.backlog[e];
                  });
              },
              isBuffering: function (e) {
                return !!v()[s[e]];
              },
              debugId: r,
              backlog: l
                ? {}
                : t && 'object' == typeof t.backlog
                  ? t.backlog
                  : {},
              isolatedBacklog: l
            };
            return (
              Object.defineProperty(f, 'aborted', {
                get: () => {
                  let e = f._aborted || !1;
                  return e || (t && (e = t.aborted), e);
                }
              }),
              f
            );
            function h(e) {
              return e && e instanceof a
                ? e
                : e
                  ? (0, i.X)(e, c, () => new a(c))
                  : new a(c);
            }
            function p(e, t) {
              n[e] = g(e).concat(t);
            }
            function g(e) {
              return n[e] || [];
            }
            function m(t) {
              return (d[t] = d[t] || e(f, t));
            }
            function v() {
              return f.backlog;
            }
          })(void 0, 'globalEE'),
          d = (0, n.fP)();
        d.ee || (d.ee = u);
      },
      5546: (e, t, r) => {
        'use strict';
        r.d(t, { E: () => n, p: () => i });
        var n = r(8325).ee.get('handle');
        function i(e, t, r, i, o) {
          o
            ? (o.buffer([e], i), o.emit(e, t, r))
            : (n.buffer([e], i), n.emit(e, t, r));
        }
      },
      4322: (e, t, r) => {
        'use strict';
        r.d(t, { X: () => o });
        var n = r(5546);
        o.on = a;
        var i = (o.handlers = {});
        function o(e, t, r, o) {
          a(o || n.E, i, e, t, r);
        }
        function a(e, t, r, i, o) {
          o || (o = 'feature'), e || (e = n.E);
          var a = (t[o] = t[o] || {});
          (a[r] = a[r] || []).push([e, i]);
        }
      },
      3239: (e, t, r) => {
        'use strict';
        r.d(t, { bP: () => s, iz: () => c, m$: () => a });
        var n = r(385);
        let i = !1,
          o = !1;
        try {
          const e = {
            get passive() {
              return (i = !0), !1;
            },
            get signal() {
              return (o = !0), !1;
            }
          };
          n._A.addEventListener('test', null, e),
            n._A.removeEventListener('test', null, e);
        } catch (e) {}
        function a(e, t) {
          return i || o ? { capture: !!e, passive: i, signal: t } : !!e;
        }
        function s(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          window.addEventListener(e, t, a(r, n));
        }
        function c(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          document.addEventListener(e, t, a(r, n));
        }
      },
      3117: (e, t, r) => {
        'use strict';
        r.d(t, { a: () => n });
        const n = (0, r(4402).Rl)();
      },
      4402: (e, t, r) => {
        'use strict';
        r.d(t, { Ht: () => u, M: () => c, Rl: () => a, ky: () => s });
        var n = r(385);
        const i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        function o(e, t) {
          return e ? 15 & e[t] : (16 * Math.random()) | 0;
        }
        function a() {
          const e = n._A?.crypto || n._A?.msCrypto;
          let t,
            r = 0;
          return (
            e &&
              e.getRandomValues &&
              (t = e.getRandomValues(new Uint8Array(30))),
            i
              .split('')
              .map((e) =>
                'x' === e
                  ? o(t, r++).toString(16)
                  : 'y' === e
                    ? ((3 & o()) | 8).toString(16)
                    : e
              )
              .join('')
          );
        }
        function s(e) {
          const t = n._A?.crypto || n._A?.msCrypto;
          let r,
            i = 0;
          t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)));
          const a = [];
          for (var s = 0; s < e; s++) a.push(o(r, i++).toString(16));
          return a.join('');
        }
        function c() {
          return s(16);
        }
        function u() {
          return s(32);
        }
      },
      7056: (e, t, r) => {
        'use strict';
        r.d(t, {
          Bq: () => n,
          Hb: () => a,
          IK: () => u,
          K4: () => i,
          oD: () => o,
          uT: () => c,
          wO: () => s
        });
        const n = 'NRBA',
          i = 'SESSION',
          o = 144e5,
          a = 18e5,
          s = {
            STARTED: 'session-started',
            PAUSE: 'session-pause',
            RESET: 'session-reset',
            RESUME: 'session-resume',
            UPDATE: 'session-update'
          },
          c = { SAME_TAB: 'same-tab', CROSS_TAB: 'cross-tab' },
          u = { OFF: 0, FULL: 1, ERROR: 2 };
      },
      7894: (e, t, r) => {
        'use strict';
        function n() {
          return Math.floor(performance.now());
        }
        r.d(t, { z: () => n });
      },
      7243: (e, t, r) => {
        'use strict';
        r.d(t, { e: () => i });
        var n = r(385);
        function i(e) {
          if (0 === (e || '').indexOf('data:')) return { protocol: 'data' };
          try {
            const t = new URL(e, location.href),
              r = {
                port: t.port,
                hostname: t.hostname,
                pathname: t.pathname,
                search: t.search,
                protocol: t.protocol.slice(0, t.protocol.indexOf(':')),
                sameOrigin:
                  t.protocol === n._A?.location?.protocol &&
                  t.host === n._A?.location?.host
              };
            return (
              (r.port && '' !== r.port) ||
                ('http:' === t.protocol && (r.port = '80'),
                'https:' === t.protocol && (r.port = '443')),
              r.pathname && '' !== r.pathname
                ? r.pathname.startsWith('/') ||
                  (r.pathname = '/'.concat(r.pathname))
                : (r.pathname = '/'),
              r
            );
          } catch (e) {
            return {};
          }
        }
      },
      50: (e, t, r) => {
        'use strict';
        function n(e, t) {
          'function' == typeof console.warn &&
            (console.warn('New Relic: '.concat(e)), t && console.warn(t));
        }
        r.d(t, { Z: () => n });
      },
      2825: (e, t, r) => {
        'use strict';
        r.d(t, { N: () => c, T: () => s });
        var n = r(8325),
          i = r(385);
        const o = 'newrelic';
        const a = new Set(),
          s = {};
        function c(e, t) {
          const r = n.ee.get(t);
          (s[t] ??= {}),
            e &&
              'object' == typeof e &&
              (a.has(t) ||
                (r.emit('rumresp', [e]),
                (s[t] = e),
                a.add(t),
                (function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  try {
                    i._A.dispatchEvent(new CustomEvent(o, { detail: e }));
                  } catch (e) {}
                })({ loaded: !0 })));
        }
      },
      2210: (e, t, r) => {
        'use strict';
        r.d(t, { X: () => i });
        var n = Object.prototype.hasOwnProperty;
        function i(e, t, r) {
          if (n.call(e, t)) return e[t];
          var i = r();
          if (Object.defineProperty && Object.keys)
            try {
              return (
                Object.defineProperty(e, t, {
                  value: i,
                  writable: !0,
                  enumerable: !1
                }),
                i
              );
            } catch (e) {}
          return (e[t] = i), i;
        }
      },
      7872: (e, t, r) => {
        'use strict';
        function n(e) {
          var t = this;
          let r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 500,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          const i = n?.leading || !1;
          let o;
          return function () {
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            i &&
              void 0 === o &&
              (e.apply(t, a),
              (o = setTimeout(() => {
                o = clearTimeout(o);
              }, r))),
              i ||
                (clearTimeout(o),
                (o = setTimeout(() => {
                  e.apply(t, a);
                }, r)));
          };
        }
        function i(e) {
          var t = this;
          let r = !1;
          return function () {
            if (!r) {
              r = !0;
              for (
                var n = arguments.length, i = new Array(n), o = 0;
                o < n;
                o++
              )
                i[o] = arguments[o];
              e.apply(t, i);
            }
          };
        }
        r.d(t, { D: () => n, Z: () => i });
      },
      1284: (e, t, r) => {
        'use strict';
        r.d(t, { D: () => n });
        const n = (e, t) =>
          Object.entries(e || {}).map((e) => {
            let [r, n] = e;
            return t(r, n);
          });
      },
      4351: (e, t, r) => {
        'use strict';
        r.d(t, { P: () => o });
        var n = r(8325);
        const i = () => {
          const e = new WeakSet();
          return (t, r) => {
            if ('object' == typeof r && null !== r) {
              if (e.has(r)) return;
              e.add(r);
            }
            return r;
          };
        };
        function o(e) {
          try {
            return JSON.stringify(e, i());
          } catch (e) {
            try {
              n.ee.emit('internal-error', [e]);
            } catch (e) {}
          }
        }
      },
      3960: (e, t, r) => {
        'use strict';
        r.d(t, { KB: () => a, b2: () => o });
        var n = r(3239);
        function i() {
          return (
            'undefined' == typeof document || 'complete' === document.readyState
          );
        }
        function o(e, t) {
          if (i()) return e();
          (0, n.bP)('load', e, t);
        }
        function a(e) {
          if (i()) return e();
          (0, n.iz)('DOMContentLoaded', e);
        }
      },
      8632: (e, t, r) => {
        'use strict';
        r.d(t, {
          EZ: () => d,
          ce: () => o,
          ek: () => u,
          fP: () => a,
          gG: () => l,
          h5: () => c,
          mF: () => s
        });
        var n = r(385),
          i = r(7894);
        const o = { beacon: 'bam.nr-data.net', errorBeacon: 'bam.nr-data.net' };
        function a() {
          return (
            n._A.NREUM || (n._A.NREUM = {}),
            void 0 === n._A.newrelic && (n._A.newrelic = n._A.NREUM),
            n._A.NREUM
          );
        }
        function s() {
          let e = a();
          return (
            e.o ||
              (e.o = {
                ST: n._A.setTimeout,
                SI: n._A.setImmediate,
                CT: n._A.clearTimeout,
                XHR: n._A.XMLHttpRequest,
                REQ: n._A.Request,
                EV: n._A.Event,
                PR: n._A.Promise,
                MO: n._A.MutationObserver,
                FETCH: n._A.fetch
              }),
            e
          );
        }
        function c(e, t) {
          let r = a();
          (r.initializedAgents ??= {}),
            (t.initializedAt = { ms: (0, i.z)(), date: new Date() }),
            (r.initializedAgents[e] = t);
        }
        function u(e) {
          let t = a();
          return t.initializedAgents?.[e];
        }
        function d(e, t) {
          a()[e] = t;
        }
        function l() {
          return (
            (function () {
              let e = a();
              const t = e.info || {};
              e.info = { beacon: o.beacon, errorBeacon: o.errorBeacon, ...t };
            })(),
            (function () {
              let e = a();
              const t = e.init || {};
              e.init = { ...t };
            })(),
            s(),
            (function () {
              let e = a();
              const t = e.loader_config || {};
              e.loader_config = { ...t };
            })(),
            a()
          );
        }
      },
      7956: (e, t, r) => {
        'use strict';
        r.d(t, { N: () => i });
        var n = r(3239);
        function i(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0;
          (0, n.iz)(
            'visibilitychange',
            function () {
              if (t) return void ('hidden' === document.visibilityState && e());
              e(document.visibilityState);
            },
            r,
            i
          );
        }
      },
      7806: (e, t, r) => {
        'use strict';
        r.d(t, {
          em: () => b,
          u5: () => T,
          QU: () => I,
          _L: () => j,
          Gm: () => L,
          Lg: () => M,
          BV: () => V,
          Kf: () => Y
        });
        var n = r(8325),
          i = r(3117);
        const o = 'nr@original:'.concat(i.a);
        var a = Object.prototype.hasOwnProperty,
          s = !1;
        function c(e, t) {
          return (
            e || (e = n.ee),
            (r.inPlace = function (e, t, n, i, o) {
              n || (n = '');
              const a = '-' === n.charAt(0);
              for (let s = 0; s < t.length; s++) {
                const c = t[s],
                  u = e[c];
                d(u) || (e[c] = r(u, a ? c + n : n, i, c, o));
              }
            }),
            (r.flag = o),
            r
          );
          function r(t, r, n, s, c) {
            return d(t)
              ? t
              : (r || (r = ''),
                (nrWrapper[o] = t),
                (function (e, t, r) {
                  if (Object.defineProperty && Object.keys)
                    try {
                      return (
                        Object.keys(e).forEach(function (r) {
                          Object.defineProperty(t, r, {
                            get: function () {
                              return e[r];
                            },
                            set: function (t) {
                              return (e[r] = t), t;
                            }
                          });
                        }),
                        t
                      );
                    } catch (e) {
                      u([e], r);
                    }
                  for (var n in e) a.call(e, n) && (t[n] = e[n]);
                })(t, nrWrapper, e),
                nrWrapper);
            function nrWrapper() {
              var o, a, d, l;
              try {
                (a = this),
                  (o = [...arguments]),
                  (d = 'function' == typeof n ? n(o, a) : n || {});
              } catch (t) {
                u([t, '', [o, a, s], d], e);
              }
              i(r + 'start', [o, a, s], d, c);
              try {
                return (l = t.apply(a, o));
              } catch (e) {
                throw (i(r + 'err', [o, a, e], d, c), e);
              } finally {
                i(r + 'end', [o, a, l], d, c);
              }
            }
          }
          function i(r, n, i, o) {
            if (!s || t) {
              var a = s;
              s = !0;
              try {
                e.emit(r, n, i, t, o);
              } catch (t) {
                u([t, r, n, i], e);
              }
              s = a;
            }
          }
        }
        function u(e, t) {
          t || (t = n.ee);
          try {
            t.emit('internal-error', e);
          } catch (e) {}
        }
        function d(e) {
          return !(e && 'function' == typeof e && e.apply && !e[o]);
        }
        var l = r(2210),
          f = r(385);
        const h = {},
          p = f._A.XMLHttpRequest,
          g = 'addEventListener',
          m = 'removeEventListener',
          v = 'nr@wrapped:'.concat(n.A);
        function b(e) {
          var t = (function (e) {
            return (e || n.ee).get('events');
          })(e);
          if (h[t.debugId]++) return t;
          h[t.debugId] = 1;
          var r = c(t, !0);
          function i(e) {
            r.inPlace(e, [g, m], '-', o);
          }
          function o(e, t) {
            return e[1];
          }
          return (
            'getPrototypeOf' in Object &&
              (f.il && y(document, i), y(f._A, i), y(p.prototype, i)),
            t.on(g + '-start', function (e, t) {
              var n = e[1];
              if (
                null !== n &&
                ('function' == typeof n || 'object' == typeof n)
              ) {
                var i = (0, l.X)(n, v, function () {
                  var e = {
                    object: function () {
                      if ('function' != typeof n.handleEvent) return;
                      return n.handleEvent.apply(n, arguments);
                    },
                    function: n
                  }[typeof n];
                  return e ? r(e, 'fn-', null, e.name || 'anonymous') : n;
                });
                this.wrapped = e[1] = i;
              }
            }),
            t.on(m + '-start', function (e) {
              e[1] = this.wrapped || e[1];
            }),
            t
          );
        }
        function y(e, t) {
          let r = e;
          for (
            ;
            'object' == typeof r && !Object.prototype.hasOwnProperty.call(r, g);

          )
            r = Object.getPrototypeOf(r);
          for (
            var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2;
            o < n;
            o++
          )
            i[o - 2] = arguments[o];
          r && t(r, ...i);
        }
        var A = 'fetch-',
          w = A + 'body-',
          E = ['arrayBuffer', 'blob', 'json', 'text', 'formData'],
          _ = f._A.Request,
          x = f._A.Response,
          R = 'prototype';
        const S = {};
        function T(e) {
          const t = (function (e) {
            return (e || n.ee).get('fetch');
          })(e);
          if (!(_ && x && f._A.fetch)) return t;
          if (S[t.debugId]++) return t;
          function r(e, r, i) {
            var o = e[r];
            'function' == typeof o &&
              (e[r] = function () {
                var e,
                  r = [...arguments],
                  a = {};
                t.emit(i + 'before-start', [r], a),
                  a[n.A] && a[n.A].dt && (e = a[n.A].dt);
                var s = o.apply(this, r);
                return (
                  t.emit(i + 'start', [r, e], s),
                  s.then(
                    function (e) {
                      return t.emit(i + 'end', [null, e], s), e;
                    },
                    function (e) {
                      throw (t.emit(i + 'end', [e], s), e);
                    }
                  )
                );
              });
          }
          return (
            (S[t.debugId] = 1),
            E.forEach((e) => {
              r(_[R], e, w), r(x[R], e, w);
            }),
            r(f._A, 'fetch', A),
            t.on(A + 'end', function (e, r) {
              var n = this;
              if (r) {
                var i = r.headers.get('content-length');
                null !== i && (n.rxSize = i), t.emit(A + 'done', [null, r], n);
              } else t.emit(A + 'done', [e], n);
            }),
            t
          );
        }
        const N = {},
          O = ['pushState', 'replaceState'];
        function I(e) {
          const t = (function (e) {
            return (e || n.ee).get('history');
          })(e);
          return (
            !f.il ||
              N[t.debugId]++ ||
              ((N[t.debugId] = 1), c(t).inPlace(window.history, O, '-')),
            t
          );
        }
        var D = r(3239);
        const P = {},
          C = ['appendChild', 'insertBefore', 'replaceChild'];
        function j(e) {
          const t = (function (e) {
            return (e || n.ee).get('jsonp');
          })(e);
          if (!f.il || P[t.debugId]) return t;
          P[t.debugId] = !0;
          var r = c(t),
            i = /[?&](?:callback|cb)=([^&#]+)/,
            o = /(.*)\.([^.]+)/,
            a = /^(\w+)(\.|$)(.*)$/;
          function s(e, t) {
            if (!e) return t;
            const r = e.match(a),
              n = r[1];
            return s(r[3], t[n]);
          }
          return (
            r.inPlace(Node.prototype, C, 'dom-'),
            t.on('dom-start', function (e) {
              !(function (e) {
                if (
                  !e ||
                  'string' != typeof e.nodeName ||
                  'script' !== e.nodeName.toLowerCase()
                )
                  return;
                if ('function' != typeof e.addEventListener) return;
                var n = ((a = e.src), (c = a.match(i)), c ? c[1] : null);
                var a, c;
                if (!n) return;
                var u = (function (e) {
                  var t = e.match(o);
                  if (t && t.length >= 3)
                    return { key: t[2], parent: s(t[1], window) };
                  return { key: e, parent: window };
                })(n);
                if ('function' != typeof u.parent[u.key]) return;
                var d = {};
                function l() {
                  t.emit('jsonp-end', [], d),
                    e.removeEventListener('load', l, (0, D.m$)(!1)),
                    e.removeEventListener('error', f, (0, D.m$)(!1));
                }
                function f() {
                  t.emit('jsonp-error', [], d),
                    t.emit('jsonp-end', [], d),
                    e.removeEventListener('load', l, (0, D.m$)(!1)),
                    e.removeEventListener('error', f, (0, D.m$)(!1));
                }
                r.inPlace(u.parent, [u.key], 'cb-', d),
                  e.addEventListener('load', l, (0, D.m$)(!1)),
                  e.addEventListener('error', f, (0, D.m$)(!1)),
                  t.emit('new-jsonp', [e.src], d);
              })(e[0]);
            }),
            t
          );
        }
        const k = {};
        function L(e) {
          const t = (function (e) {
            return (e || n.ee).get('mutation');
          })(e);
          if (!f.il || k[t.debugId]) return t;
          k[t.debugId] = !0;
          var r = c(t),
            i = f._A.MutationObserver;
          return (
            i &&
              ((window.MutationObserver = function (e) {
                return this instanceof i
                  ? new i(r(e, 'fn-'))
                  : i.apply(this, arguments);
              }),
              (MutationObserver.prototype = i.prototype)),
            t
          );
        }
        const H = {};
        function M(e) {
          const t = (function (e) {
            return (e || n.ee).get('promise');
          })(e);
          if (H[t.debugId]) return t;
          H[t.debugId] = !0;
          var r = t.context,
            i = c(t),
            a = f._A.Promise;
          return (
            a &&
              (function () {
                function e(r) {
                  var n = t.context(),
                    o = i(r, 'executor-', n, null, !1);
                  const s = Reflect.construct(a, [o], e);
                  return (
                    (t.context(s).getCtx = function () {
                      return n;
                    }),
                    s
                  );
                }
                (f._A.Promise = e),
                  Object.defineProperty(e, 'name', { value: 'Promise' }),
                  (e.toString = function () {
                    return a.toString();
                  }),
                  Object.setPrototypeOf(e, a),
                  ['all', 'race'].forEach(function (r) {
                    const n = a[r];
                    e[r] = function (e) {
                      let i = !1;
                      [...(e || [])].forEach((e) => {
                        this.resolve(e).then(a('all' === r), a(!1));
                      });
                      const o = n.apply(this, arguments);
                      return o;
                      function a(e) {
                        return function () {
                          t.emit('propagate', [null, !i], o, !1, !1),
                            (i = i || !e);
                        };
                      }
                    };
                  }),
                  ['resolve', 'reject'].forEach(function (r) {
                    const n = a[r];
                    e[r] = function (e) {
                      const r = n.apply(this, arguments);
                      return (
                        e !== r && t.emit('propagate', [e, !0], r, !1, !1), r
                      );
                    };
                  }),
                  (e.prototype = a.prototype);
                const n = a.prototype.then;
                (a.prototype.then = function () {
                  var e = this,
                    o = r(e);
                  o.promise = e;
                  for (
                    var a = arguments.length, s = new Array(a), c = 0;
                    c < a;
                    c++
                  )
                    s[c] = arguments[c];
                  (s[0] = i(s[0], 'cb-', o, null, !1)),
                    (s[1] = i(s[1], 'cb-', o, null, !1));
                  const u = n.apply(this, s);
                  return (
                    (o.nextPromise = u),
                    t.emit('propagate', [e, !0], u, !1, !1),
                    u
                  );
                }),
                  (a.prototype.then[o] = n),
                  t.on('executor-start', function (e) {
                    (e[0] = i(e[0], 'resolve-', this, null, !1)),
                      (e[1] = i(e[1], 'resolve-', this, null, !1));
                  }),
                  t.on('executor-err', function (e, t, r) {
                    e[1](r);
                  }),
                  t.on('cb-end', function (e, r, n) {
                    t.emit('propagate', [n, !0], this.nextPromise, !1, !1);
                  }),
                  t.on('propagate', function (e, r, n) {
                    (this.getCtx && !r) ||
                      (this.getCtx = function () {
                        if (e instanceof Promise) var r = t.context(e);
                        return r && r.getCtx ? r.getCtx() : this;
                      });
                  });
              })(),
            t
          );
        }
        const U = {},
          z = 'setTimeout',
          F = 'setInterval',
          B = 'clearTimeout',
          G = '-start',
          q = '-',
          K = [z, 'setImmediate', F, B, 'clearImmediate'];
        function V(e) {
          const t = (function (e) {
            return (e || n.ee).get('timer');
          })(e);
          if (U[t.debugId]++) return t;
          U[t.debugId] = 1;
          var r = c(t);
          return (
            r.inPlace(f._A, K.slice(0, 2), z + q),
            r.inPlace(f._A, K.slice(2, 3), F + q),
            r.inPlace(f._A, K.slice(3), B + q),
            t.on(F + G, function (e, t, n) {
              e[0] = r(e[0], 'fn-', null, n);
            }),
            t.on(z + G, function (e, t, n) {
              (this.method = n),
                (this.timerDuration = isNaN(e[1]) ? 0 : +e[1]),
                (e[0] = r(e[0], 'fn-', this, n));
            }),
            t
          );
        }
        var Z = r(50);
        const W = {},
          X = ['open', 'send'];
        function Y(e) {
          var t = e || n.ee;
          const r = (function (e) {
            return (e || n.ee).get('xhr');
          })(t);
          if (W[r.debugId]++) return r;
          (W[r.debugId] = 1), b(t);
          var i = c(r),
            o = f._A.XMLHttpRequest,
            a = f._A.MutationObserver,
            s = f._A.Promise,
            u = f._A.setInterval,
            d = 'readystatechange',
            l = [
              'onload',
              'onerror',
              'onabort',
              'onloadstart',
              'onloadend',
              'onprogress',
              'ontimeout'
            ],
            h = [],
            p = (f._A.XMLHttpRequest = function (e) {
              const t = new o(e),
                n = r.context(t);
              try {
                r.emit('new-xhr', [t], n),
                  t.addEventListener(
                    d,
                    ((a = n),
                    function () {
                      var e = this;
                      e.readyState > 3 &&
                        !a.resolved &&
                        ((a.resolved = !0), r.emit('xhr-resolved', [], e)),
                        i.inPlace(e, l, 'fn-', w);
                    }),
                    (0, D.m$)(!1)
                  );
              } catch (e) {
                (0, Z.Z)('An error occurred while intercepting XHR', e);
                try {
                  r.emit('internal-error', [e]);
                } catch (e) {}
              }
              var a;
              return t;
            });
          function g(e, t) {
            i.inPlace(t, ['onreadystatechange'], 'fn-', w);
          }
          if (
            ((function (e, t) {
              for (var r in e) t[r] = e[r];
            })(o, p),
            (p.prototype = o.prototype),
            i.inPlace(p.prototype, X, '-xhr-', w),
            r.on('send-xhr-start', function (e, t) {
              g(e, t),
                (function (e) {
                  h.push(e),
                    a && (m ? m.then(A) : u ? u(A) : ((v = -v), (y.data = v)));
                })(t);
            }),
            r.on('open-xhr-start', g),
            a)
          ) {
            var m = s && s.resolve();
            if (!u && !s) {
              var v = 1,
                y = document.createTextNode(v);
              new a(A).observe(y, { characterData: !0 });
            }
          } else
            t.on('fn-end', function (e) {
              (e[0] && e[0].type === d) || A();
            });
          function A() {
            for (var e = 0; e < h.length; e++) g(0, h[e]);
            h.length && (h = []);
          }
          function w(e, t) {
            return t;
          }
          return r;
        }
      },
      7825: (e, t, r) => {
        'use strict';
        r.d(t, { t: () => n });
        const n = r(3325).D.ajax;
      },
      6660: (e, t, r) => {
        'use strict';
        r.d(t, { t: () => n });
        const n = r(3325).D.jserrors;
      },
      3081: (e, t, r) => {
        'use strict';
        r.d(t, {
          gF: () => o,
          mY: () => i,
          t9: () => n,
          vz: () => s,
          xS: () => a
        });
        const n = r(3325).D.metrics,
          i = 'sm',
          o = 'cm',
          a = 'storeSupportabilityMetrics',
          s = 'storeEventMetrics';
      },
      4649: (e, t, r) => {
        'use strict';
        r.d(t, { t: () => n });
        const n = r(3325).D.pageAction;
      },
      7633: (e, t, r) => {
        'use strict';
        r.d(t, { t: () => n });
        const n = r(3325).D.pageViewEvent;
      },
      9251: (e, t, r) => {
        'use strict';
        r.d(t, { t: () => n });
        const n = r(3325).D.pageViewTiming;
      },
      7144: (e, t, r) => {
        'use strict';
        r.d(t, {
          Ef: () => o,
          J0: () => f,
          Mi: () => l,
          Vb: () => a,
          Ye: () => c,
          fm: () => u,
          i9: () => s,
          pB: () => h,
          t9: () => i,
          u0: () => d
        });
        var n = r(7056);
        const i = r(3325).D.sessionReplay,
          o = {
            RECORD: 'recordReplay',
            PAUSE: 'pauseReplay',
            REPLAY_RUNNING: 'replayRunning',
            ERROR_DURING_REPLAY: 'errorDuringReplay'
          },
          a = 0.12,
          s = {
            DomContentLoaded: 0,
            Load: 1,
            FullSnapshot: 2,
            IncrementalSnapshot: 3,
            Meta: 4,
            Custom: 5
          },
          c = 1e6,
          u = 64e3,
          d = { [n.IK.ERROR]: 15e3, [n.IK.FULL]: 3e5, [n.IK.OFF]: 0 },
          l = {
            RESET: { message: 'Session was reset', sm: 'Reset' },
            IMPORT: { message: 'Recorder failed to import', sm: 'Import' },
            TOO_MANY: { message: '429: Too Many Requests', sm: 'Too-Many' },
            TOO_BIG: { message: 'Payload was too large', sm: 'Too-Big' },
            CROSS_TAB: {
              message: 'Session Entity was set to OFF on another tab',
              sm: 'Cross-Tab'
            },
            ENTITLEMENTS: {
              message: 'Session Replay is not allowed and will not be started',
              sm: 'Entitlement'
            }
          },
          f = 5e3,
          h = { API: 'api' };
      },
      3112: (e, t, r) => {
        'use strict';
        r.d(t, { HM: () => c, Rc: () => a, rU: () => s, wi: () => u });
        var n = r(234),
          i = r(8488),
          o = r(385);
        function a(e) {
          return (
            !!n.Yu.MO &&
            (0, i.H)(e) &&
            !0 === (0, n.Mt)(e, 'session_trace.enabled')
          );
        }
        function s(e) {
          return !0 === (0, n.Mt)(e, 'session_replay.preload') && a(e);
        }
        function c(e, t) {
          return !!a(e) && (!!t?.isNew || !!t?.state.sessionReplayMode);
        }
        function u(e, t) {
          const r = t.correctAbsoluteTimestamp(e);
          return {
            originalTimestamp: e,
            correctedTimestamp: r,
            timestampDiff: e - r,
            originTime: o.sK,
            correctedOriginTime: t.correctedOriginTime,
            originTimeDiff: Math.floor(o.sK - t.correctedOriginTime)
          };
        }
      },
      3614: (e, t, r) => {
        'use strict';
        r.d(t, {
          BST_RESOURCE: () => i,
          END: () => s,
          FEATURE_NAME: () => n,
          FN_END: () => u,
          FN_START: () => c,
          PUSH_STATE: () => d,
          RESOURCE: () => o,
          START: () => a,
          c: () => l
        });
        const n = r(3325).D.sessionTrace,
          i = 'bstResource',
          o = 'resource',
          a = '-start',
          s = '-end',
          c = 'fn' + a,
          u = 'fn' + s,
          d = 'pushState',
          l = 1e3;
      },
      6216: (e, t, r) => {
        'use strict';
        r.d(t, {
          K8: () => s,
          QZ: () => c,
          cS: () => o,
          sE: () => i,
          t9: () => a,
          vh: () => u
        });
        var n = r(3325);
        const i = ['click', 'keydown', 'submit'],
          o = 'api',
          a = n.D.softNav,
          s = { INITIAL_PAGE_LOAD: '', ROUTE_CHANGE: 1, UNSPECIFIED: 2 },
          c = { INTERACTION: 1, AJAX: 2, CUSTOM_END: 3, CUSTOM_TRACER: 4 },
          u = { IP: 'in progress', FIN: 'finished', CAN: 'cancelled' };
      },
      7836: (e, t, r) => {
        'use strict';
        r.d(t, {
          BODY: () => E,
          CB_END: () => _,
          CB_START: () => u,
          END: () => w,
          FEATURE_NAME: () => i,
          FETCH: () => R,
          FETCH_BODY: () => v,
          FETCH_DONE: () => m,
          FETCH_START: () => g,
          FN_END: () => c,
          FN_START: () => s,
          INTERACTION: () => f,
          INTERACTION_API: () => d,
          INTERACTION_EVENTS: () => o,
          JSONP_END: () => b,
          JSONP_NODE: () => p,
          JS_TIME: () => x,
          MAX_TIMER_BUDGET: () => a,
          REMAINING: () => l,
          SPA_NODE: () => h,
          START: () => A,
          originalSetTimeout: () => y
        });
        var n = r(234);
        const i = r(3325).D.spa,
          o = ['click', 'submit', 'keypress', 'keydown', 'keyup', 'change'],
          a = 999,
          s = 'fn-start',
          c = 'fn-end',
          u = 'cb-start',
          d = 'api-ixn-',
          l = 'remaining',
          f = 'interaction',
          h = 'spaNode',
          p = 'jsonpNode',
          g = 'fetch-start',
          m = 'fetch-done',
          v = 'fetch-body-',
          b = 'jsonp-end',
          y = n.Yu.ST,
          A = '-start',
          w = '-end',
          E = '-body',
          _ = 'cb' + w,
          x = 'jsTime',
          R = 'fetch';
      },
      5938: (e, t, r) => {
        'use strict';
        r.d(t, { W: () => i });
        var n = r(8325);
        class i {
          constructor(e, t, r) {
            (this.agentIdentifier = e),
              (this.aggregator = t),
              (this.ee = n.ee.get(e)),
              (this.featureName = r),
              (this.blocked = !1);
          }
        }
      },
      8488: (e, t, r) => {
        'use strict';
        r.d(t, { H: () => o });
        var n = r(234),
          i = r(385);
        const o = (e) => i.il && !0 === (0, n.Mt)(e, 'privacy.cookies_enabled');
      },
      2758: (e, t, r) => {
        'use strict';
        r.d(t, { j: () => _ });
        var n = r(3325),
          i = r(234),
          o = r(5546),
          a = r(8325),
          s = r(8e3),
          c = r(3960),
          u = r(385),
          d = r(50),
          l = r(3081),
          f = r(8632),
          h = r(7144);
        const p = [
            'setErrorHandler',
            'finished',
            'addToTrace',
            'addRelease',
            'addPageAction',
            'setCurrentRouteName',
            'setPageViewName',
            'setCustomAttribute',
            'interaction',
            'noticeError',
            'setUserId',
            'setApplicationVersion',
            'start',
            h.Ef.RECORD,
            h.Ef.PAUSE
          ],
          g = ['setErrorHandler', 'finished', 'addToTrace', 'addRelease'];
        var m = r(7894),
          v = r(7056);
        function b() {
          const e = (0, f.gG)();
          p.forEach((t) => {
            e[t] = function () {
              for (
                var r = arguments.length, n = new Array(r), i = 0;
                i < r;
                i++
              )
                n[i] = arguments[i];
              return (function (t) {
                for (
                  var r = arguments.length,
                    n = new Array(r > 1 ? r - 1 : 0),
                    i = 1;
                  i < r;
                  i++
                )
                  n[i - 1] = arguments[i];
                let o = [];
                return (
                  Object.values(e.initializedAgents).forEach((e) => {
                    e.exposed && e.api[t] && o.push(e.api[t](...n));
                  }),
                  o.length > 1 ? o : o[0]
                );
              })(t, ...n);
            };
          });
        }
        const y = {};
        var A = r(2825);
        const w = (e) => {
          const t = e.startsWith('http');
          (e += '/'), (r.p = t ? e : 'https://' + e);
        };
        let E = !1;
        function _(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            p = arguments.length > 2 ? arguments[2] : void 0,
            _ = arguments.length > 3 ? arguments[3] : void 0,
            {
              init: x,
              info: R,
              loader_config: S,
              runtime: T = { loaderType: p },
              exposed: N = !0
            } = t;
          const O = (0, f.gG)();
          R || ((x = O.init), (R = O.info), (S = O.loader_config)),
            (0, i.Dg)(e.agentIdentifier, x || {}),
            (0, i.GE)(e.agentIdentifier, S || {}),
            (R.jsAttributes ??= {}),
            u.v6 && (R.jsAttributes.isWorker = !0),
            (0, i.CX)(e.agentIdentifier, R);
          const I = (0, i.P_)(e.agentIdentifier),
            D = [R.beacon, R.errorBeacon];
          E ||
            (I.proxy.assets && (w(I.proxy.assets), D.push(I.proxy.assets)),
            I.proxy.beacon && D.push(I.proxy.beacon),
            b(),
            (0, f.EZ)('activatedFeatures', A.T),
            (e.runSoftNavOverSpa &&=
              !0 === I.soft_navigations.enabled &&
              I.feature_flags.includes('soft_nav'))),
            (T.denyList = [
              ...(I.ajax.deny_list || []),
              ...(I.ajax.block_internal ? D : [])
            ]),
            (T.ptid = e.agentIdentifier),
            (0, i.sU)(e.agentIdentifier, T),
            void 0 === e.api &&
              (e.api = (function (e, t) {
                let f =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                t || (0, s.RP)(e, 'api');
                const p = {};
                var b = a.ee.get(e),
                  A = b.get('tracer');
                (y[e] = v.IK.OFF),
                  b.on(h.Ef.REPLAY_RUNNING, (t) => {
                    y[e] = t;
                  });
                var w = 'api-',
                  E = w + 'ixn-';
                function _(t, r, n, o) {
                  const a = (0, i.C5)(e);
                  return (
                    null === r
                      ? delete a.jsAttributes[t]
                      : (0, i.CX)(e, {
                          ...a,
                          jsAttributes: { ...a.jsAttributes, [t]: r }
                        }),
                    S(w, n, !0, o || null === r ? 'session' : void 0)(t, r)
                  );
                }
                function x() {}
                g.forEach((e) => {
                  p[e] = S(w, e, !0, 'api');
                }),
                  (p.addPageAction = S(w, 'addPageAction', !0, n.D.pageAction)),
                  (p.setPageViewName = function (t, r) {
                    if ('string' == typeof t)
                      return (
                        '/' !== t.charAt(0) && (t = '/' + t),
                        ((0, i.OP)(e).customTransaction =
                          (r || 'http://custom.transaction') + t),
                        S(w, 'setPageViewName', !0)()
                      );
                  }),
                  (p.setCustomAttribute = function (e, t) {
                    let r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if ('string' == typeof e) {
                      if (
                        ['string', 'number', 'boolean'].includes(typeof t) ||
                        null === t
                      )
                        return _(e, t, 'setCustomAttribute', r);
                      (0, d.Z)(
                        'Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <'.concat(
                          typeof t,
                          '> was provided.'
                        )
                      );
                    } else
                      (0, d.Z)(
                        'Failed to execute setCustomAttribute.\nName must be a string type, but a type of <'.concat(
                          typeof e,
                          '> was provided.'
                        )
                      );
                  }),
                  (p.setUserId = function (e) {
                    if ('string' == typeof e || null === e)
                      return _('enduser.id', e, 'setUserId', !0);
                    (0, d.Z)(
                      'Failed to execute setUserId.\nNon-null value must be a string type, but a type of <'.concat(
                        typeof e,
                        '> was provided.'
                      )
                    );
                  }),
                  (p.setApplicationVersion = function (e) {
                    if ('string' == typeof e || null === e)
                      return _(
                        'application.version',
                        e,
                        'setApplicationVersion',
                        !1
                      );
                    (0, d.Z)(
                      'Failed to execute setApplicationVersion. Expected <String | null>, but got <'.concat(
                        typeof e,
                        '>.'
                      )
                    );
                  }),
                  (p.start = () => {
                    try {
                      (0, o.p)(
                        l.xS,
                        ['API/start/called'],
                        void 0,
                        n.D.metrics,
                        b
                      ),
                        b.emit('manual-start-all');
                    } catch (e) {
                      (0, d.Z)('An unexpected issue occurred', e);
                    }
                  }),
                  (p[h.Ef.RECORD] = function () {
                    (0, o.p)(
                      l.xS,
                      ['API/recordReplay/called'],
                      void 0,
                      n.D.metrics,
                      b
                    ),
                      (0, o.p)(h.Ef.RECORD, [], void 0, n.D.sessionReplay, b);
                  }),
                  (p[h.Ef.PAUSE] = function () {
                    (0, o.p)(
                      l.xS,
                      ['API/pauseReplay/called'],
                      void 0,
                      n.D.metrics,
                      b
                    ),
                      (0, o.p)(h.Ef.PAUSE, [], void 0, n.D.sessionReplay, b);
                  }),
                  (p.interaction = function (e) {
                    return new x().get('object' == typeof e ? e : {});
                  });
                const R = (x.prototype = {
                  createTracer: function (e, t) {
                    var r = {},
                      i = this,
                      a = 'function' == typeof t;
                    return (
                      (0, o.p)(
                        l.xS,
                        ['API/createTracer/called'],
                        void 0,
                        n.D.metrics,
                        b
                      ),
                      f ||
                        (0, o.p)(
                          E + 'tracer',
                          [(0, m.z)(), e, r],
                          i,
                          n.D.spa,
                          b
                        ),
                      function () {
                        if (
                          (A.emit(
                            (a ? '' : 'no-') + 'fn-start',
                            [(0, m.z)(), i, a],
                            r
                          ),
                          a)
                        )
                          try {
                            return t.apply(this, arguments);
                          } catch (e) {
                            const t = 'string' == typeof e ? new Error(e) : e;
                            throw (
                              (A.emit('fn-err', [arguments, this, t], r), t)
                            );
                          } finally {
                            A.emit('fn-end', [(0, m.z)()], r);
                          }
                      }
                    );
                  }
                });
                function S(e, t, r, i) {
                  return function () {
                    return (
                      (0, o.p)(
                        l.xS,
                        ['API/' + t + '/called'],
                        void 0,
                        n.D.metrics,
                        b
                      ),
                      i &&
                        (0, o.p)(
                          e + t,
                          [(0, m.z)(), ...arguments],
                          r ? null : this,
                          i,
                          b
                        ),
                      r ? void 0 : this
                    );
                  };
                }
                function T() {
                  r.e(111)
                    .then(r.bind(r, 7438))
                    .then((t) => {
                      let { setAPI: r } = t;
                      r(e), (0, s.LP)(e, 'api');
                    })
                    .catch((e) => {
                      (0, d.Z)('Downloading runtime APIs failed...', e),
                        b.abort();
                    });
                }
                return (
                  [
                    'actionText',
                    'setName',
                    'setAttribute',
                    'save',
                    'ignore',
                    'onEnd',
                    'getContext',
                    'end',
                    'get'
                  ].forEach((e) => {
                    R[e] = S(E, e, void 0, f ? n.D.softNav : n.D.spa);
                  }),
                  (p.setCurrentRouteName = f
                    ? S(E, 'routeName', void 0, n.D.softNav)
                    : S(w, 'routeName', !0, n.D.spa)),
                  (p.noticeError = function (t, r) {
                    'string' == typeof t && (t = new Error(t)),
                      (0, o.p)(
                        l.xS,
                        ['API/noticeError/called'],
                        void 0,
                        n.D.metrics,
                        b
                      ),
                      (0, o.p)(
                        'err',
                        [t, (0, m.z)(), !1, r, !!y[e]],
                        void 0,
                        n.D.jserrors,
                        b
                      );
                  }),
                  u.il ? (0, c.b2)(() => T(), !0) : T(),
                  p
                );
              })(e.agentIdentifier, _, e.runSoftNavOverSpa)),
            void 0 === e.exposed && (e.exposed = N),
            (E = !0);
        }
      },
      8993: (e, t, r) => {
        r.nc = (() => {
          try {
            return document?.currentScript?.nonce;
          } catch (e) {}
          return '';
        })();
      },
      3325: (e, t, r) => {
        'use strict';
        r.d(t, { D: () => n, p: () => i });
        const n = {
            ajax: 'ajax',
            jserrors: 'jserrors',
            metrics: 'metrics',
            pageAction: 'page_action',
            pageViewEvent: 'page_view_event',
            pageViewTiming: 'page_view_timing',
            sessionReplay: 'session_replay',
            sessionTrace: 'session_trace',
            softNav: 'soft_navigations',
            spa: 'spa'
          },
          i = {
            [n.pageViewEvent]: 1,
            [n.pageViewTiming]: 2,
            [n.metrics]: 3,
            [n.jserrors]: 4,
            [n.ajax]: 5,
            [n.sessionTrace]: 6,
            [n.pageAction]: 7,
            [n.spa]: 8,
            [n.softNav]: 9,
            [n.sessionReplay]: 10
          };
      }
    },
    n = {};
  function i(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var o = (n[e] = { exports: {} });
    return r[e](o, o.exports, i), o.exports;
  }
  (i.m = r),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
    (i.u = (e) =>
      ({ 111: 'nr-spa', 164: 'nr-spa-compressor', 433: 'nr-spa-recorder' })[e] +
      '-1.260.0.min.js'),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = 'NRBA-1.260.0.PROD:'),
    (i.l = (r, n, o, a) => {
      if (e[r]) e[r].push(n);
      else {
        var s, c;
        if (void 0 !== o)
          for (
            var u = document.getElementsByTagName('script'), d = 0;
            d < u.length;
            d++
          ) {
            var l = u[d];
            if (
              l.getAttribute('src') == r ||
              l.getAttribute('data-webpack') == t + o
            ) {
              s = l;
              break;
            }
          }
        if (!s) {
          c = !0;
          var f = {
            111: 'sha512-yg/3G4Xi/nUUSGUZ5sZ5laGfxYiBl4A4z1KiCDtOZnnyZ1yRz/gldBGvnLQkCt9iHEG+xaLgGYJXknmRQ1RRBg==',
            433: 'sha512-+r3Wkk8iuDgwHGMXW/4TexrEk4BUtJDwoydKiVtCg/OhRaVQjDykRQ5pq++NLNYgn6VmvYTyFNtJOzAGjbQYxQ==',
            164: 'sha512-B0foyUJVqgCiRQ77L/MyMwRicWPhe+NqE2lxw/3pl055wE8eTQpuvUp+2B2d8y2J7zEgKz6qDFwcVFoxG46BKw=='
          };
          ((s = document.createElement('script')).charset = 'utf-8'),
            (s.timeout = 120),
            i.nc && s.setAttribute('nonce', i.nc),
            s.setAttribute('data-webpack', t + o),
            (s.src = r),
            0 !== s.src.indexOf(window.location.origin + '/') &&
              (s.crossOrigin = 'anonymous'),
            f[a] && (s.integrity = f[a]);
        }
        e[r] = [n];
        var h = (t, n) => {
            (s.onerror = s.onload = null), clearTimeout(p);
            var i = e[r];
            if (
              (delete e[r],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          p = setTimeout(
            h.bind(null, void 0, { type: 'timeout', target: s }),
            12e4
          );
        (s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (i.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.p = 'https://js-agent.newrelic.com/'),
    (() => {
      var e = { 801: 0, 92: 0 };
      i.f.j = (t, r) => {
        var n = i.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var o = new Promise((r, i) => (n = e[t] = [r, i]));
            r.push((n[2] = o));
            var a = i.p + i.u(t),
              s = new Error();
            i.l(
              a,
              (r) => {
                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ('load' === r.type ? 'missing' : r.type),
                    a = r && r.target && r.target.src;
                  (s.message =
                    'Loading chunk ' + t + ' failed.\n(' + o + ': ' + a + ')'),
                    (s.name = 'ChunkLoadError'),
                    (s.type = o),
                    (s.request = a),
                    n[1](s);
                }
              },
              'chunk-' + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var n,
            o,
            [a, s, c] = r,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) i.o(s, n) && (i.m[n] = s[n]);
            if (c) c(i);
          }
          for (t && t(r); u < a.length; u++)
            (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self['webpackChunk:NRBA-1.260.0.PROD'] =
          self['webpackChunk:NRBA-1.260.0.PROD'] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      'use strict';
      i(8993);
      var e = i(50),
        t = i(7144),
        r = i(4402),
        n = i(8325);
      class o {
        agentIdentifier;
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (0, r.ky)(16);
          (this.agentIdentifier = e), (this.ee = n.ee.get(e));
        }
        #e(t) {
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i];
          if ('function' == typeof this.api?.[t]) return this.api[t](...n);
          (0, e.Z)(
            'Call to agent api '.concat(
              t,
              ' failed. The API is not currently initialized.'
            )
          );
        }
        addPageAction(e, t) {
          return this.#e('addPageAction', e, t);
        }
        setPageViewName(e, t) {
          return this.#e('setPageViewName', e, t);
        }
        setCustomAttribute(e, t, r) {
          return this.#e('setCustomAttribute', e, t, r);
        }
        noticeError(e, t) {
          return this.#e('noticeError', e, t);
        }
        setUserId(e) {
          return this.#e('setUserId', e);
        }
        setApplicationVersion(e) {
          return this.#e('setApplicationVersion', e);
        }
        setErrorHandler(e) {
          return this.#e('setErrorHandler', e);
        }
        finished(e) {
          return this.#e('finished', e);
        }
        addRelease(e, t) {
          return this.#e('addRelease', e, t);
        }
        start(e) {
          return this.#e('start', e);
        }
        recordReplay() {
          return this.#e(t.Ef.RECORD);
        }
        pauseReplay() {
          return this.#e(t.Ef.PAUSE);
        }
        addToTrace(e) {
          return this.#e('addToTrace', e);
        }
        setCurrentRouteName(e) {
          return this.#e('setCurrentRouteName', e);
        }
        interaction() {
          return this.#e('interaction');
        }
      }
      var a = i(3325),
        s = i(234);
      const c = Object.values(a.D);
      function u(e) {
        const t = {};
        return (
          c.forEach((r) => {
            t[r] = (function (e, t) {
              return !0 === (0, s.Mt)(t, ''.concat(e, '.enabled'));
            })(r, e);
          }),
          t
        );
      }
      var d = i(2758);
      var l = i(8e3),
        f = i(5938),
        h = i(3960),
        p = i(385),
        g = i(3112),
        m = i(8488),
        v = i(7872);
      class b extends f.W {
        constructor(e, t, r) {
          let n =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          super(e, t, r),
            (this.auto = n),
            (this.abortHandler = void 0),
            (this.featAggregate = void 0),
            (this.onAggregateImported = void 0),
            !1 ===
              (0, s.Mt)(
                this.agentIdentifier,
                ''.concat(this.featureName, '.autoStart')
              ) && (this.auto = !1),
            this.auto
              ? (0, l.RP)(e, r)
              : this.ee.on(
                  'manual-start-all',
                  (0, v.Z)(() => {
                    (0, l.RP)(this.agentIdentifier, this.featureName),
                      (this.auto = !0),
                      this.importAggregator();
                  })
                );
        }
        importAggregator() {
          let t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          if (this.featAggregate || !this.auto) return;
          this.onAggregateImported = new Promise((e) => {
            t = e;
          });
          const n = async () => {
            let n;
            try {
              if ((0, m.H)(this.agentIdentifier)) {
                const { setupAgentSession: e } = await i
                  .e(111)
                  .then(i.bind(i, 9446));
                n = e(this.agentIdentifier);
              }
            } catch (t) {
              (0, e.Z)(
                'A problem occurred when starting up session manager. This page will not start or extend any session.',
                t
              ),
                this.featureName === a.D.sessionReplay && this.abortHandler?.();
            }
            try {
              if (!this.#t(this.featureName, n))
                return (
                  (0, l.LP)(this.agentIdentifier, this.featureName), void t(!1)
                );
              const { lazyFeatureLoader: e } = await i
                  .e(111)
                  .then(i.bind(i, 8582)),
                { Aggregate: o } = await e(this.featureName, 'aggregate');
              (this.featAggregate = new o(
                this.agentIdentifier,
                this.aggregator,
                r
              )),
                t(!0);
            } catch (r) {
              (0, e.Z)(
                'Downloading and initializing '.concat(
                  this.featureName,
                  ' failed...'
                ),
                r
              ),
                this.abortHandler?.(),
                (0, l.LP)(this.agentIdentifier, this.featureName, !0),
                t(!1),
                this.ee && this.ee.abort();
            }
          };
          p.il ? (0, h.b2)(() => n(), !0) : n();
        }
        #t(e, t) {
          return e !== a.D.sessionReplay || (0, g.HM)(this.agentIdentifier, t);
        }
      }
      var y = i(7633);
      class A extends b {
        static featureName = y.t;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, y.t, r), this.importAggregator();
        }
      }
      var w = i(1117),
        E = i(1284);
      class _ extends w.w {
        constructor(e) {
          super(e), (this.aggregatedData = {});
        }
        store(e, t, r, n, i) {
          var o = this.getBucket(e, t, r, i);
          return (
            (o.metrics = (function (e, t) {
              t || (t = { count: 0 });
              return (
                (t.count += 1),
                (0, E.D)(e, function (e, r) {
                  t[e] = x(r, t[e]);
                }),
                t
              );
            })(n, o.metrics)),
            o
          );
        }
        merge(e, t, r, n, i) {
          var o = this.getBucket(e, t, n, i);
          if (o.metrics) {
            var a = o.metrics;
            (a.count += r.count),
              (0, E.D)(r, function (e, t) {
                if ('count' !== e) {
                  var n = a[e],
                    i = r[e];
                  i && !i.c
                    ? (a[e] = x(i.t, n))
                    : (a[e] = (function (e, t) {
                        if (!t) return e;
                        t.c || (t = R(t.t));
                        return (
                          (t.min = Math.min(e.min, t.min)),
                          (t.max = Math.max(e.max, t.max)),
                          (t.t += e.t),
                          (t.sos += e.sos),
                          (t.c += e.c),
                          t
                        );
                      })(i, a[e]));
                }
              });
          } else o.metrics = r;
        }
        storeMetric(e, t, r, n) {
          var i = this.getBucket(e, t, r);
          return (i.stats = x(n, i.stats)), i;
        }
        getBucket(e, t, r, n) {
          this.aggregatedData[e] || (this.aggregatedData[e] = {});
          var i = this.aggregatedData[e][t];
          return (
            i ||
              ((i = this.aggregatedData[e][t] = { params: r || {} }),
              n && (i.custom = n)),
            i
          );
        }
        get(e, t) {
          return t
            ? this.aggregatedData[e] && this.aggregatedData[e][t]
            : this.aggregatedData[e];
        }
        take(e) {
          for (var t = {}, r = '', n = !1, i = 0; i < e.length; i++)
            (t[(r = e[i])] = Object.values(this.aggregatedData[r] || {})),
              t[r].length && (n = !0),
              delete this.aggregatedData[r];
          return n ? t : null;
        }
      }
      function x(e, t) {
        return null == e
          ? (function (e) {
              e ? e.c++ : (e = { c: 1 });
              return e;
            })(t)
          : t
            ? (t.c || (t = R(t.t)),
              (t.c += 1),
              (t.t += e),
              (t.sos += e * e),
              e > t.max && (t.max = e),
              e < t.min && (t.min = e),
              t)
            : { t: e };
      }
      function R(e) {
        return { t: e, min: e, max: e, sos: e * e, c: 1 };
      }
      var S = i(8632),
        T = i(4351);
      var N = i(5546),
        O = i(7956),
        I = i(3239),
        D = i(9251),
        P = i(7894);
      class C extends b {
        static featureName = D.t;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, D.t, r),
            p.il &&
              ((0, O.N)(
                () => (0, N.p)('docHidden', [(0, P.z)()], void 0, D.t, this.ee),
                !0
              ),
              (0, I.bP)('pagehide', () =>
                (0, N.p)('winPagehide', [(0, P.z)()], void 0, D.t, this.ee)
              ),
              this.importAggregator());
        }
      }
      var j = i(3081);
      class k extends b {
        static featureName = j.t9;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, j.t9, r), this.importAggregator();
        }
      }
      var L = i(6660);
      class H {
        constructor(e, t, r, n, i) {
          (this.name = 'UncaughtError'),
            (this.message = 'string' == typeof e ? e : (0, T.P)(e)),
            (this.sourceURL = t),
            (this.line = r),
            (this.column = n),
            (this.__newrelic = i);
        }
      }
      function M(e) {
        return F(e)
          ? e
          : new H(
              void 0 !== e?.message ? e.message : e,
              e?.filename || e?.sourceURL,
              e?.lineno || e?.line,
              e?.colno || e?.col,
              e?.__newrelic
            );
      }
      function U(e) {
        let t = 'Unhandled Promise Rejection';
        if (F(e?.reason))
          try {
            return (
              (e.reason.message = t + ': ' + e.reason.message), M(e.reason)
            );
          } catch (t) {
            return M(e.reason);
          }
        if (void 0 === e.reason) return M(t);
        const r = M(e.reason);
        return (r.message = t + ': ' + r?.message), r;
      }
      function z(e) {
        if (
          e.error instanceof SyntaxError &&
          !/:\d+$/.test(e.error.stack?.trim())
        ) {
          const t = new H(
            e.message,
            e.filename,
            e.lineno,
            e.colno,
            e.error.__newrelic
          );
          return (t.name = SyntaxError.name), t;
        }
        return F(e.error) ? e.error : M(e);
      }
      function F(e) {
        return e instanceof Error && !!e.stack;
      }
      class B extends b {
        static featureName = L.t;
        #r = !1;
        constructor(e, r) {
          let n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, r, L.t, n);
          try {
            this.removeOnAbort = new AbortController();
          } catch (e) {}
          this.ee.on('internal-error', (e) => {
            this.abortHandler &&
              (0, N.p)(
                'ierr',
                [M(e), (0, P.z)(), !0, {}, this.#r],
                void 0,
                this.featureName,
                this.ee
              );
          }),
            this.ee.on(t.Ef.REPLAY_RUNNING, (e) => {
              this.#r = e;
            }),
            p._A.addEventListener(
              'unhandledrejection',
              (e) => {
                this.abortHandler &&
                  (0, N.p)(
                    'err',
                    [
                      U(e),
                      (0, P.z)(),
                      !1,
                      { unhandledPromiseRejection: 1 },
                      this.#r
                    ],
                    void 0,
                    this.featureName,
                    this.ee
                  );
              },
              (0, I.m$)(!1, this.removeOnAbort?.signal)
            ),
            p._A.addEventListener(
              'error',
              (e) => {
                this.abortHandler &&
                  (0, N.p)(
                    'err',
                    [z(e), (0, P.z)(), !1, {}, this.#r],
                    void 0,
                    this.featureName,
                    this.ee
                  );
              },
              (0, I.m$)(!1, this.removeOnAbort?.signal)
            ),
            (this.abortHandler = this.#n),
            this.importAggregator();
        }
        #n() {
          this.removeOnAbort?.abort(), (this.abortHandler = void 0);
        }
      }
      var G = i(2210);
      let q = 1;
      const K = 'nr@id';
      function V(e) {
        const t = typeof e;
        return !e || ('object' !== t && 'function' !== t)
          ? -1
          : e === p._A
            ? 0
            : (0, G.X)(e, K, function () {
                return q++;
              });
      }
      function Z(e) {
        if ('string' == typeof e && e.length) return e.length;
        if ('object' == typeof e) {
          if (
            'undefined' != typeof ArrayBuffer &&
            e instanceof ArrayBuffer &&
            e.byteLength
          )
            return e.byteLength;
          if ('undefined' != typeof Blob && e instanceof Blob && e.size)
            return e.size;
          if (!('undefined' != typeof FormData && e instanceof FormData))
            try {
              return (0, T.P)(e).length;
            } catch (e) {
              return;
            }
        }
      }
      var W = i(7806),
        X = i(7243);
      class Y {
        constructor(e) {
          this.agentIdentifier = e;
        }
        generateTracePayload(e) {
          if (!this.shouldGenerateTrace(e)) return null;
          var t = (0, s.DL)(this.agentIdentifier);
          if (!t) return null;
          var n = (t.accountID || '').toString() || null,
            i = (t.agentID || '').toString() || null,
            o = (t.trustKey || '').toString() || null;
          if (!n || !i) return null;
          var a = (0, r.M)(),
            c = (0, r.Ht)(),
            u = Date.now(),
            d = { spanId: a, traceId: c, timestamp: u };
          return (
            (e.sameOrigin ||
              (this.isAllowedOrigin(e) &&
                this.useTraceContextHeadersForCors())) &&
              ((d.traceContextParentHeader =
                this.generateTraceContextParentHeader(a, c)),
              (d.traceContextStateHeader = this.generateTraceContextStateHeader(
                a,
                u,
                n,
                i,
                o
              ))),
            ((e.sameOrigin && !this.excludeNewrelicHeader()) ||
              (!e.sameOrigin &&
                this.isAllowedOrigin(e) &&
                this.useNewrelicHeaderForCors())) &&
              (d.newrelicHeader = this.generateTraceHeader(a, c, u, n, i, o)),
            d
          );
        }
        generateTraceContextParentHeader(e, t) {
          return '00-' + t + '-' + e + '-01';
        }
        generateTraceContextStateHeader(e, t, r, n, i) {
          return i + '@nr=0-1-' + r + '-' + n + '-' + e + '----' + t;
        }
        generateTraceHeader(e, t, r, n, i, o) {
          if (!('function' == typeof p._A?.btoa)) return null;
          var a = {
            v: [0, 1],
            d: { ty: 'Browser', ac: n, ap: i, id: e, tr: t, ti: r }
          };
          return o && n !== o && (a.d.tk = o), btoa((0, T.P)(a));
        }
        shouldGenerateTrace(e) {
          return this.isDtEnabled() && this.isAllowedOrigin(e);
        }
        isAllowedOrigin(e) {
          var t = !1,
            r = {};
          if (
            ((0, s.Mt)(this.agentIdentifier, 'distributed_tracing') &&
              (r = (0, s.P_)(this.agentIdentifier).distributed_tracing),
            e.sameOrigin)
          )
            t = !0;
          else if (r.allowed_origins instanceof Array)
            for (var n = 0; n < r.allowed_origins.length; n++) {
              var i = (0, X.e)(r.allowed_origins[n]);
              if (
                e.hostname === i.hostname &&
                e.protocol === i.protocol &&
                e.port === i.port
              ) {
                t = !0;
                break;
              }
            }
          return t;
        }
        isDtEnabled() {
          var e = (0, s.Mt)(this.agentIdentifier, 'distributed_tracing');
          return !!e && !!e.enabled;
        }
        excludeNewrelicHeader() {
          var e = (0, s.Mt)(this.agentIdentifier, 'distributed_tracing');
          return !!e && !!e.exclude_newrelic_header;
        }
        useNewrelicHeaderForCors() {
          var e = (0, s.Mt)(this.agentIdentifier, 'distributed_tracing');
          return !!e && !1 !== e.cors_use_newrelic_header;
        }
        useTraceContextHeadersForCors() {
          var e = (0, s.Mt)(this.agentIdentifier, 'distributed_tracing');
          return !!e && !!e.cors_use_tracecontext_headers;
        }
      }
      var J = i(7825),
        Q = i(1199),
        ee = ['load', 'error', 'abort', 'timeout'],
        te = ee.length,
        re = s.Yu.REQ,
        ne = s.Yu.XHR;
      class ie extends b {
        static featureName = J.t;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, J.t, r),
            (this.dt = new Y(e)),
            (this.handler = (e, t, r, n) => (0, N.p)(e, t, r, n, this.ee));
          try {
            const e = {
              xmlhttprequest: 'xhr',
              fetch: 'fetch',
              beacon: 'beacon'
            };
            p._A?.performance?.getEntriesByType('resource').forEach((t) => {
              if (t.initiatorType in e && 0 !== t.responseStatus) {
                const r = { status: t.responseStatus },
                  n = {
                    rxSize: t.transferSize,
                    duration: Math.floor(t.duration),
                    cbTime: 0
                  };
                oe(r, t.name),
                  this.handler(
                    'xhr',
                    [r, n, t.startTime, t.responseEnd, e[t.initiatorType]],
                    void 0,
                    a.D.ajax
                  );
              }
            });
          } catch (e) {}
          (0, W.u5)(this.ee),
            (0, W.Kf)(this.ee),
            (function (e, t, r, n) {
              function i(e) {
                var t = this;
                (t.totalCbs = 0),
                  (t.called = 0),
                  (t.cbTime = 0),
                  (t.end = E),
                  (t.ended = !1),
                  (t.xhrGuids = {}),
                  (t.lastSize = null),
                  (t.loadCaptureCalled = !1),
                  (t.params = this.params || {}),
                  (t.metrics = this.metrics || {}),
                  e.addEventListener(
                    'load',
                    function (r) {
                      _(t, e);
                    },
                    (0, I.m$)(!1)
                  ),
                  p.IF ||
                    e.addEventListener(
                      'progress',
                      function (e) {
                        t.lastSize = e.loaded;
                      },
                      (0, I.m$)(!1)
                    );
              }
              function o(e) {
                (this.params = { method: e[0] }),
                  oe(this, e[1]),
                  (this.metrics = {});
              }
              function c(t, r) {
                var i = (0, s.DL)(e);
                i.xpid &&
                  this.sameOrigin &&
                  r.setRequestHeader('X-NewRelic-ID', i.xpid);
                var o = n.generateTracePayload(this.parsedOrigin);
                if (o) {
                  var a = !1;
                  o.newrelicHeader &&
                    (r.setRequestHeader('newrelic', o.newrelicHeader),
                    (a = !0)),
                    o.traceContextParentHeader &&
                      (r.setRequestHeader(
                        'traceparent',
                        o.traceContextParentHeader
                      ),
                      o.traceContextStateHeader &&
                        r.setRequestHeader(
                          'tracestate',
                          o.traceContextStateHeader
                        ),
                      (a = !0)),
                    a && (this.dt = o);
                }
              }
              function u(e, r) {
                var n = this.metrics,
                  i = e[0],
                  o = this;
                if (n && i) {
                  var a = Z(i);
                  a && (n.txSize = a);
                }
                (this.startTime = (0, P.z)()),
                  (this.body = i),
                  (this.listener = function (e) {
                    try {
                      'abort' !== e.type ||
                        o.loadCaptureCalled ||
                        (o.params.aborted = !0),
                        ('load' !== e.type ||
                          (o.called === o.totalCbs &&
                            (o.onloadCalled || 'function' != typeof r.onload) &&
                            'function' == typeof o.end)) &&
                          o.end(r);
                    } catch (e) {
                      try {
                        t.emit('internal-error', [e]);
                      } catch (e) {}
                    }
                  });
                for (var s = 0; s < te; s++)
                  r.addEventListener(ee[s], this.listener, (0, I.m$)(!1));
              }
              function d(e, t, r) {
                (this.cbTime += e),
                  t ? (this.onloadCalled = !0) : (this.called += 1),
                  this.called !== this.totalCbs ||
                    (!this.onloadCalled && 'function' == typeof r.onload) ||
                    'function' != typeof this.end ||
                    this.end(r);
              }
              function l(e, t) {
                var r = '' + V(e) + !!t;
                this.xhrGuids &&
                  !this.xhrGuids[r] &&
                  ((this.xhrGuids[r] = !0), (this.totalCbs += 1));
              }
              function f(e, t) {
                var r = '' + V(e) + !!t;
                this.xhrGuids &&
                  this.xhrGuids[r] &&
                  (delete this.xhrGuids[r], (this.totalCbs -= 1));
              }
              function h() {
                this.endTime = (0, P.z)();
              }
              function g(e, r) {
                r instanceof ne &&
                  'load' === e[0] &&
                  t.emit('xhr-load-added', [e[1], e[2]], r);
              }
              function m(e, r) {
                r instanceof ne &&
                  'load' === e[0] &&
                  t.emit('xhr-load-removed', [e[1], e[2]], r);
              }
              function v(e, t, r) {
                t instanceof ne &&
                  ('onload' === r && (this.onload = !0),
                  ('load' === (e[0] && e[0].type) || this.onload) &&
                    (this.xhrCbStart = (0, P.z)()));
              }
              function b(e, r) {
                this.xhrCbStart &&
                  t.emit(
                    'xhr-cb-time',
                    [(0, P.z)() - this.xhrCbStart, this.onload, r],
                    r
                  );
              }
              function y(e) {
                var t,
                  r = e[1] || {};
                if (
                  ('string' == typeof e[0]
                    ? 0 === (t = e[0]).length &&
                      p.il &&
                      (t = '' + p._A.location.href)
                    : e[0] && e[0].url
                      ? (t = e[0].url)
                      : p._A?.URL && e[0] && e[0] instanceof URL
                        ? (t = e[0].href)
                        : 'function' == typeof e[0].toString &&
                          (t = e[0].toString()),
                  'string' == typeof t && 0 !== t.length)
                ) {
                  t &&
                    ((this.parsedOrigin = (0, X.e)(t)),
                    (this.sameOrigin = this.parsedOrigin.sameOrigin));
                  var i = n.generateTracePayload(this.parsedOrigin);
                  if (i && (i.newrelicHeader || i.traceContextParentHeader))
                    if (e[0] && e[0].headers)
                      s(e[0].headers, i) && (this.dt = i);
                    else {
                      var o = {};
                      for (var a in r) o[a] = r[a];
                      (o.headers = new Headers(r.headers || {})),
                        s(o.headers, i) && (this.dt = i),
                        e.length > 1 ? (e[1] = o) : e.push(o);
                    }
                }
                function s(e, t) {
                  var r = !1;
                  return (
                    t.newrelicHeader &&
                      (e.set('newrelic', t.newrelicHeader), (r = !0)),
                    t.traceContextParentHeader &&
                      (e.set('traceparent', t.traceContextParentHeader),
                      t.traceContextStateHeader &&
                        e.set('tracestate', t.traceContextStateHeader),
                      (r = !0)),
                    r
                  );
                }
              }
              function A(e, t) {
                (this.params = {}),
                  (this.metrics = {}),
                  (this.startTime = (0, P.z)()),
                  (this.dt = t),
                  e.length >= 1 && (this.target = e[0]),
                  e.length >= 2 && (this.opts = e[1]);
                var r,
                  n = this.opts || {},
                  i = this.target;
                'string' == typeof i
                  ? (r = i)
                  : 'object' == typeof i && i instanceof re
                    ? (r = i.url)
                    : p._A?.URL &&
                      'object' == typeof i &&
                      i instanceof URL &&
                      (r = i.href),
                  oe(this, r);
                var o = (
                  '' + ((i && i instanceof re && i.method) || n.method || 'GET')
                ).toUpperCase();
                (this.params.method = o),
                  (this.body = n.body),
                  (this.txSize = Z(n.body) || 0);
              }
              function w(e, t) {
                if (
                  ((this.endTime = (0, P.z)()),
                  this.params || (this.params = {}),
                  (0, Q.zh)(this.params))
                )
                  return;
                let n;
                (this.params.status = t ? t.status : 0),
                  'string' == typeof this.rxSize &&
                    this.rxSize.length > 0 &&
                    (n = +this.rxSize);
                const i = {
                  txSize: this.txSize,
                  rxSize: n,
                  duration: (0, P.z)() - this.startTime
                };
                r(
                  'xhr',
                  [this.params, i, this.startTime, this.endTime, 'fetch'],
                  this,
                  a.D.ajax
                );
              }
              function E(e) {
                const t = this.params,
                  n = this.metrics;
                if (!this.ended) {
                  this.ended = !0;
                  for (let t = 0; t < te; t++)
                    e.removeEventListener(ee[t], this.listener, !1);
                  t.aborted ||
                    (0, Q.zh)(t) ||
                    ((n.duration = (0, P.z)() - this.startTime),
                    this.loadCaptureCalled || 4 !== e.readyState
                      ? null == t.status && (t.status = 0)
                      : _(this, e),
                    (n.cbTime = this.cbTime),
                    r(
                      'xhr',
                      [t, n, this.startTime, this.endTime, 'xhr'],
                      this,
                      a.D.ajax
                    ));
                }
              }
              function _(e, r) {
                e.params.status = r.status;
                var n = (function (e, t) {
                  var r = e.responseType;
                  return 'json' === r && null !== t
                    ? t
                    : 'arraybuffer' === r || 'blob' === r || 'json' === r
                      ? Z(e.response)
                      : 'text' === r || '' === r || void 0 === r
                        ? Z(e.responseText)
                        : void 0;
                })(r, e.lastSize);
                if ((n && (e.metrics.rxSize = n), e.sameOrigin)) {
                  var i = r.getResponseHeader('X-NewRelic-App-Data');
                  i &&
                    ((0, N.p)(
                      j.mY,
                      ['Ajax/CrossApplicationTracing/Header/Seen'],
                      void 0,
                      a.D.metrics,
                      t
                    ),
                    (e.params.cat = i.split(', ').pop()));
                }
                e.loadCaptureCalled = !0;
              }
              t.on('new-xhr', i),
                t.on('open-xhr-start', o),
                t.on('open-xhr-end', c),
                t.on('send-xhr-start', u),
                t.on('xhr-cb-time', d),
                t.on('xhr-load-added', l),
                t.on('xhr-load-removed', f),
                t.on('xhr-resolved', h),
                t.on('addEventListener-end', g),
                t.on('removeEventListener-end', m),
                t.on('fn-end', b),
                t.on('fetch-before-start', y),
                t.on('fetch-start', A),
                t.on('fn-start', v),
                t.on('fetch-done', w);
            })(e, this.ee, this.handler, this.dt),
            this.importAggregator();
        }
      }
      function oe(e, t) {
        var r = (0, X.e)(t),
          n = e.params || e;
        (n.hostname = r.hostname),
          (n.port = r.port),
          (n.protocol = r.protocol),
          (n.host = r.hostname + ':' + r.port),
          (n.pathname = r.pathname),
          (e.parsedOrigin = r),
          (e.sameOrigin = r.sameOrigin);
      }
      var ae = i(3614);
      const {
        BST_RESOURCE: se,
        RESOURCE: ce,
        START: ue,
        END: de,
        FEATURE_NAME: le,
        FN_END: fe,
        FN_START: he,
        PUSH_STATE: pe
      } = ae;
      var ge = i(7056);
      class me extends b {
        static featureName = t.t9;
        #i;
        constructor(e, r) {
          let n,
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          super(e, r, t.t9, i), (this.replayRunning = !1);
          try {
            n = JSON.parse(
              localStorage.getItem(''.concat(ge.Bq, '_').concat(ge.K4))
            );
          } catch (e) {}
          (0, g.Rc)(e) && this.ee.on('recordReplay', () => this.#o()),
            this.#a(n)
              ? ((this.#i = n?.sessionReplayMode), this.#s())
              : this.importAggregator(),
            this.ee.on('err', (e) => {
              this.replayRunning &&
                ((this.errorNoticed = !0),
                (0, N.p)(
                  t.Ef.ERROR_DURING_REPLAY,
                  [e],
                  void 0,
                  this.featureName,
                  this.ee
                ));
            }),
            this.ee.on(t.Ef.REPLAY_RUNNING, (e) => {
              this.replayRunning = e;
            });
        }
        #a(e) {
          return (
            (e &&
              (e.sessionReplayMode === ge.IK.FULL ||
                e.sessionReplayMode === ge.IK.ERROR)) ||
            (0, g.rU)(this.agentIdentifier)
          );
        }
        #c = !1;
        async #s(e) {
          if (!this.#c) {
            this.#c = !0;
            try {
              const { Recorder: t } = await Promise.all([
                i.e(111),
                i.e(433)
              ]).then(i.bind(i, 4345));
              (this.recorder ??= new t({
                mode: this.#i,
                agentIdentifier: this.agentIdentifier,
                trigger: e,
                ee: this.ee
              })),
                this.recorder.startRecording(),
                (this.abortHandler = this.recorder.stopRecording);
            } catch (e) {}
            this.importAggregator({
              recorder: this.recorder,
              errorNoticed: this.errorNoticed
            });
          }
        }
        #o() {
          this.featAggregate
            ? this.featAggregate.mode !== ge.IK.FULL &&
              this.featAggregate.initializeRecording(ge.IK.FULL, !0)
            : ((this.#i = ge.IK.FULL),
              this.#s(t.pB.API),
              this.recorder &&
                this.recorder.parent.mode !== ge.IK.FULL &&
                ((this.recorder.parent.mode = ge.IK.FULL),
                this.recorder.stopRecording(),
                this.recorder.startRecording(),
                (this.abortHandler = this.recorder.stopRecording)));
        }
      }
      var ve = i(6216);
      class be extends b {
        static featureName = ve.t9;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if ((super(e, t, ve.t9, r), !p.il || !s.Yu.MO)) return;
          const n = (0, W.QU)(this.ee),
            i = (0, W.em)(this.ee),
            o = () =>
              (0, N.p)(
                'newURL',
                [(0, P.z)(), '' + window.location],
                void 0,
                this.featureName,
                this.ee
              );
          n.on('pushState-end', o), n.on('replaceState-end', o);
          try {
            this.removeOnAbort = new AbortController();
          } catch (e) {}
          (0, I.bP)(
            'popstate',
            (e) =>
              (0, N.p)(
                'newURL',
                [e.timeStamp, '' + window.location],
                void 0,
                this.featureName,
                this.ee
              ),
            !0,
            this.removeOnAbort?.signal
          );
          let a = !1;
          const c = new s.Yu.MO((e, t) => {
              a ||
                ((a = !0),
                requestAnimationFrame(() => {
                  (0, N.p)(
                    'newDom',
                    [(0, P.z)()],
                    void 0,
                    this.featureName,
                    this.ee
                  ),
                    (a = !1);
                }));
            }),
            u = (0, v.D)(
              (e) => {
                (0, N.p)('newUIEvent', [e], void 0, this.featureName, this.ee),
                  c.observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                  });
              },
              100,
              { leading: !0 }
            );
          i.on('fn-start', (e) => {
            let [t] = e;
            ve.sE.includes(t?.type) && u(t);
          });
          for (let e of ve.sE) document.addEventListener(e, () => {});
          (this.abortHandler = function () {
            this.removeOnAbort?.abort(),
              c.disconnect(),
              (this.abortHandler = void 0);
          }),
            this.importAggregator({ domObserver: c });
        }
      }
      var ye = i(7836);
      const {
        FEATURE_NAME: Ae,
        START: we,
        END: Ee,
        BODY: _e,
        CB_END: xe,
        JS_TIME: Re,
        FETCH: Se,
        FN_START: Te,
        CB_START: Ne,
        FN_END: Oe
      } = ye;
      var Ie = i(4649);
      class De extends b {
        static featureName = Ie.t;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, Ie.t, r), this.importAggregator();
        }
      }
      new (class extends o {
        constructor(t, r) {
          super(r),
            p._A
              ? ((this.sharedAggregator = new _({
                  agentIdentifier: this.agentIdentifier
                })),
                (this.features = {}),
                (0, S.h5)(this.agentIdentifier, this),
                (this.desiredFeatures = new Set(t.features || [])),
                this.desiredFeatures.add(A),
                (this.runSoftNavOverSpa = [...this.desiredFeatures].some(
                  (e) => e.featureName === a.D.softNav
                )),
                (0, d.j)(this, t, t.loaderType || 'agent'),
                this.run())
              : (0, e.Z)(
                  'Failed to initialize the agent. Could not determine the runtime environment.'
                );
        }
        get config() {
          return {
            info: this.info,
            init: this.init,
            loader_config: this.loader_config,
            runtime: this.runtime
          };
        }
        run() {
          try {
            const t = u(this.agentIdentifier),
              r = [...this.desiredFeatures];
            r.sort((e, t) => a.p[e.featureName] - a.p[t.featureName]),
              r.forEach((r) => {
                if (!t[r.featureName] && r.featureName !== a.D.pageViewEvent)
                  return;
                if (this.runSoftNavOverSpa && r.featureName === a.D.spa) return;
                if (!this.runSoftNavOverSpa && r.featureName === a.D.softNav)
                  return;
                const n = (function (e) {
                  switch (e) {
                    case a.D.ajax:
                      return [a.D.jserrors];
                    case a.D.sessionTrace:
                      return [a.D.ajax, a.D.pageViewEvent];
                    case a.D.sessionReplay:
                      return [a.D.sessionTrace];
                    case a.D.pageViewTiming:
                      return [a.D.pageViewEvent];
                    default:
                      return [];
                  }
                })(r.featureName);
                n.every((e) => e in this.features) ||
                  (0, e.Z)(
                    ''
                      .concat(
                        r.featureName,
                        ' is enabled but one or more dependent features has not been initialized ('
                      )
                      .concat(
                        (0, T.P)(n),
                        '). This may cause unintended consequences or missing data...'
                      )
                  ),
                  (this.features[r.featureName] = new r(
                    this.agentIdentifier,
                    this.sharedAggregator
                  ));
              });
          } catch (t) {
            (0, e.Z)(
              'Failed to initialize all enabled instrument classes (agent aborted) -',
              t
            );
            for (const e in this.features) this.features[e].abortHandler?.();
            const r = (0, S.fP)();
            delete r.initializedAgents[this.agentIdentifier]?.api,
              delete r.initializedAgents[this.agentIdentifier]?.features,
              delete this.sharedAggregator;
            return r.ee.get(this.agentIdentifier).abort(), !1;
          }
        }
      })({
        features: [
          ie,
          A,
          C,
          class extends b {
            static featureName = le;
            constructor(e, t) {
              super(
                e,
                t,
                le,
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2]
              );
              if (!(0, m.H)(this.agentIdentifier))
                return void (0, l.o5)(this.agentIdentifier, this.featureName);
              const r = this.ee;
              let n;
              (0, W.QU)(r),
                (this.eventsEE = (0, W.em)(r)),
                this.eventsEE.on(he, function (e, t) {
                  this.bstStart = (0, P.z)();
                }),
                this.eventsEE.on(fe, function (e, t) {
                  (0, N.p)(
                    'bst',
                    [e[0], t, this.bstStart, (0, P.z)()],
                    void 0,
                    a.D.sessionTrace,
                    r
                  );
                }),
                r.on(pe + ue, function (e) {
                  (this.time = (0, P.z)()),
                    (this.startPath = location.pathname + location.hash);
                }),
                r.on(pe + de, function (e) {
                  (0, N.p)(
                    'bstHist',
                    [
                      location.pathname + location.hash,
                      this.startPath,
                      this.time
                    ],
                    void 0,
                    a.D.sessionTrace,
                    r
                  );
                });
              try {
                (n = new PerformanceObserver((e) => {
                  const t = e.getEntries();
                  (0, N.p)(se, [t], void 0, a.D.sessionTrace, r);
                })),
                  n.observe({ type: ce, buffered: !0 });
              } catch (e) {}
              this.importAggregator({ resourceObserver: n });
            }
          },
          me,
          k,
          De,
          B,
          be,
          class extends b {
            static featureName = Ae;
            constructor(e, t) {
              var r;
              if (
                (super(
                  e,
                  t,
                  Ae,
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2]
                ),
                (r = this),
                !p.il)
              )
                return;
              try {
                this.removeOnAbort = new AbortController();
              } catch (e) {}
              let n,
                i = 0;
              const o = this.ee.get('tracer'),
                a = (0, W._L)(this.ee),
                s = (0, W.Lg)(this.ee),
                c = (0, W.BV)(this.ee),
                u = (0, W.Kf)(this.ee),
                d = this.ee.get('events'),
                l = (0, W.u5)(this.ee),
                f = (0, W.QU)(this.ee),
                h = (0, W.Gm)(this.ee);
              function g(e, t) {
                f.emit('newURL', ['' + window.location, t]);
              }
              function m() {
                i++, (n = window.location.hash), (this[Te] = (0, P.z)());
              }
              function v() {
                i--, window.location.hash !== n && g(0, !0);
                var e = (0, P.z)();
                (this[Re] = ~~this[Re] + e - this[Te]), (this[Oe] = e);
              }
              function b(e, t) {
                e.on(t, function () {
                  this[t] = (0, P.z)();
                });
              }
              this.ee.on(Te, m),
                s.on(Ne, m),
                a.on(Ne, m),
                this.ee.on(Oe, v),
                s.on(xe, v),
                a.on(xe, v),
                this.ee.on('fn-err', function () {
                  for (
                    var t = arguments.length, n = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    n[i] = arguments[i];
                  n[2]?.__newrelic?.[e] ||
                    (0, N.p)(
                      'function-err',
                      [...n],
                      void 0,
                      r.featureName,
                      r.ee
                    );
                }),
                this.ee.buffer([Te, Oe, 'xhr-resolved'], this.featureName),
                d.buffer([Te], this.featureName),
                c.buffer(
                  ['setTimeout' + Ee, 'clearTimeout' + we, Te],
                  this.featureName
                ),
                u.buffer([Te, 'new-xhr', 'send-xhr' + we], this.featureName),
                l.buffer(
                  [Se + we, Se + '-done', Se + _e + we, Se + _e + Ee],
                  this.featureName
                ),
                f.buffer(['newURL'], this.featureName),
                h.buffer([Te], this.featureName),
                s.buffer(
                  ['propagate', Ne, xe, 'executor-err', 'resolve' + we],
                  this.featureName
                ),
                o.buffer([Te, 'no-' + Te], this.featureName),
                a.buffer(
                  ['new-jsonp', 'cb-start', 'jsonp-error', 'jsonp-end'],
                  this.featureName
                ),
                b(l, Se + we),
                b(l, Se + '-done'),
                b(a, 'new-jsonp'),
                b(a, 'jsonp-end'),
                b(a, 'cb-start'),
                f.on('pushState-end', g),
                f.on('replaceState-end', g),
                window.addEventListener(
                  'hashchange',
                  g,
                  (0, I.m$)(!0, this.removeOnAbort?.signal)
                ),
                window.addEventListener(
                  'load',
                  g,
                  (0, I.m$)(!0, this.removeOnAbort?.signal)
                ),
                window.addEventListener(
                  'popstate',
                  function () {
                    g(0, i > 1);
                  },
                  (0, I.m$)(!0, this.removeOnAbort?.signal)
                ),
                (this.abortHandler = this.#n),
                this.importAggregator();
            }
            #n() {
              this.removeOnAbort?.abort(), (this.abortHandler = void 0);
            }
          }
        ],
        loaderType: 'spa'
      });
    })();
})();


window.Promise = originalPromise;
