import {
  r as L,
  o as _,
  c as d,
  a as i,
  w as l,
  b as c,
  d as u,
  e as m,
  u as f,
  R as x,
  F as g,
  f as $,
  g as w,
  h as R,
  t as S,
  p as E,
  m as O,
  i as P,
  j as B,
  k as T,
} from './vendor.51463699.js'
const H = function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e)
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === 'childList')
        for (const a of r.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(e) {
    const r = {}
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (r.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (r.credentials = 'omit')
        : (r.credentials = 'same-origin'),
      r
    )
  }
  function n(e) {
    if (e.ep) return
    e.ep = !0
    const r = t(e)
    fetch(e.href, r)
  }
}
H()
var V = (s, o) => {
  const t = s.__vccOpts || s
  for (const [n, e] of o) t[n] = e
  return t
}
const A = {},
  C = {
    class:
      'sticky top-0 w-screen justify-between px-4 py-4 bg-highlight inline-block shadow-xl',
  },
  N = c(
    'h3',
    { style: { display: 'inline' } },
    [u('Harry'), c('span', { style: { color: 'red' } }, '.'), u('Rusby')],
    -1
  ),
  M = { class: 'space-x-8 inline-block float-right' },
  j = u('Home'),
  D = u('About'),
  F = u('Blog')
function I(s, o) {
  const t = L('RouterLink')
  return (
    _(),
    d('header', C, [
      i(
        t,
        { to: '/', class: 'text-2xl font-medium float-left' },
        { default: l(() => [N]), _: 1 }
      ),
      c('nav', M, [
        i(
          t,
          { class: 'navBarRouterLink', to: '/' },
          { default: l(() => [j]), _: 1 }
        ),
        i(
          t,
          { class: 'navBarRouterLink', to: '/about' },
          { default: l(() => [D]), _: 1 }
        ),
        i(
          t,
          { class: 'navBarRouterLink', to: '/blog' },
          { default: l(() => [F]), _: 1 }
        ),
      ]),
    ])
  )
}
var q = V(A, [['render', I]])
const z = m({
    setup(s) {
      return (o, t) => (_(), d(g, null, [i(q), i(f(x))], 64))
    },
  }),
  W = 'modulepreload',
  h = {},
  K = '/',
  p = function (o, t) {
    return !t || t.length === 0
      ? o()
      : Promise.all(
          t.map((n) => {
            if (((n = `${K}${n}`), n in h)) return
            h[n] = !0
            const e = n.endsWith('.css'),
              r = e ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${n}"]${r}`)) return
            const a = document.createElement('link')
            if (
              ((a.rel = e ? 'stylesheet' : W),
              e || ((a.as = 'script'), (a.crossOrigin = '')),
              (a.href = n),
              document.head.appendChild(a),
              e)
            )
              return new Promise((b, k) => {
                a.addEventListener('load', b), a.addEventListener('error', k)
              })
          })
        ).then(() => o())
  },
  G = { class: 'w-2/3 self-center grid place-items-center py-5 bg-highlight' },
  J = ['src'],
  Q = m({
    props: { imgsrc: String },
    setup(s) {
      return (o, t) => (
        _(),
        d('div', G, [
          c('img', { src: s.imgsrc, height: '25', width: '25' }, null, 8, J),
          $(o.$slots, 'default'),
        ])
      )
    },
  }),
  U = ['innerHTML'],
  y = m({
    props: { markdown: String, name: String },
    setup(s) {
      const o = s,
        t = w({ md: null })
      async function n() {
        t.md = await fetch('/MarkdownFiles/' + o.name + '.md')
          .then((e) => e.text())
          .then((e) => E.sanitize(O.parse(e)))
          .then((e) => (e === null ? '' : e))
          .then((e) => (t.md = e))
      }
      return (
        R(() => {
          n(), console.log(o.name)
        }),
        (e, r) => (
          _(),
          d(
            g,
            null,
            [
              c('div', { innerHTML: f(t).md }, null, 8, U),
              c('div', null, S(o.name), 1),
            ],
            64
          )
        )
      )
    },
  })
var X = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: y,
  }),
  Y = '/assets/logo.da9b9095.svg'
const Z = { class: 'flex justify-center' },
  ee = c('h1', null, 'Test', -1),
  te = c('p', null, 'Some more Content', -1),
  oe = m({
    setup(s) {
      return (o, t) => (
        _(),
        d('main', Z, [
          i(Q, { imgsrc: f(Y) }, { default: l(() => [ee, te]), _: 1 }, 8, [
            'imgsrc',
          ]),
          i(y),
        ])
      )
    },
  }),
  ne = P({
    history: B('/'),
    routes: [
      { path: '/', name: 'home', component: oe },
      {
        path: '/about',
        name: 'about',
        component: () =>
          p(
            () => import('./AboutView.475c66eb.js'),
            [
              'assets/AboutView.475c66eb.js',
              'assets/AboutView.ab071ea6.css',
              'assets/vendor.51463699.js',
            ]
          ),
      },
      {
        path: '/blog',
        name: 'blog',
        component: () =>
          p(
            () => import('./BlogView.e9be12c1.js'),
            ['assets/BlogView.e9be12c1.js', 'assets/vendor.51463699.js']
          ),
      },
      {
        path: '/blogpost/:name',
        name: 'blogpost',
        component: () =>
          p(
            () =>
              Promise.resolve().then(function () {
                return X
              }),
            void 0
          ),
        props: !0,
      },
    ],
  }),
  v = T(z)
v.use(ne)
v.mount('#app')
export { V as _ }
