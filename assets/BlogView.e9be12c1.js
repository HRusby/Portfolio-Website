import {
  e as c,
  g as m,
  r as _,
  o as e,
  l as i,
  w as h,
  b as s,
  t as n,
  u as p,
  c as r,
  F as f,
  n as g,
} from './vendor.51463699.js'
const b = { class: 'bg-slate-500 min-h-xl shadow-md shadow-gray-600' },
  x = { class: 'font-extrabold text-xl' },
  k = c({
    props: { post: { type: Object, required: !0 } },
    setup(t) {
      const o = m({ postRoute: '/blogpost/' + t.post.name })
      return (a, v) => {
        const u = _('router-link')
        return (
          e(),
          i(
            u,
            { to: p(o).postRoute },
            {
              default: h(() => [
                s('div', b, [
                  s('h1', x, n(t.post.name), 1),
                  s('p', null, n(t.post.blurb), 1),
                ]),
              ]),
              _: 1,
            },
            8,
            ['to']
          )
        )
      }
    },
  })
let l = [
  {
    id: 1,
    name: 'test',
    filepath: 'MarkdownFiles/test.md',
    blurb: 'Test Markdown Config',
  },
  { id: 2, name: 'test2', filepath: 'MarkdownFiles/test2.md' },
]
const w = { class: 'grid grid-cols-5 gap-4 w-4/5 mx-auto' },
  C = c({
    setup(t) {
      return (
        console.log(l[0]),
        (d, o) => (
          e(),
          r('div', w, [
            (e(!0),
            r(
              f,
              null,
              g(p(l), (a) => (e(), i(k, { post: a }, null, 8, ['post']))),
              256
            )),
          ])
        )
      )
    },
  })
export { C as default }
