(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["options"],
  {
    2358: function (t, a, e) {
      "use strict";
      e.r(a);
      var o = function () {
          var t = this,
            a = t._self._c;
          return a("div", { staticClass: "options-page" }, [
            a("img", { attrs: { alt: "Vue logo", src: e("ac83") } }),
            t._m(0),
            a("div", { staticClass: "options" }, [
              a(
                "ul",
                { staticClass: "options-list" },
                [
                  a(
                    "router-link",
                    { attrs: { tag: "li", to: { name: "Invest" } } },
                    [t._v(" Invest (Soon) ")]
                  ),
                  a(
                    "router-link",
                    { attrs: { tag: "li", to: { name: "Trade" } } },
                    [t._v(" Trade ")]
                  ),
                  t._m(1),
                  a(
                    "router-link",
                    { attrs: { tag: "li", to: { name: "ChooseWallet" } } },
                    [t._v(" Connect Wallet ")]
                  ),
                ],
                1
              ),
            ]),
          ]);
        },
        i = [
          function () {
            var t = this,
              a = t._self._c;
            return a("div", { staticClass: "info" }, [
              a("p", [t._v("ETH Available: 5.6")]),
              a("p", [t._v("CIV: 128,567.0")]),
            ]);
          },
          function () {
            var t = this,
              a = t._self._c;
            return a("li", [
              a(
                "a",
                {
                  attrs: { href: "https://dao.civfund.com", target: "_blank" },
                },
                [t._v(" Vote ")]
              ),
            ]);
          },
        ],
        n = { name: "Options" },
        s = n,
        r = (e("bebd"), e("2877")),
        p = Object(r["a"])(s, o, i, !1, null, "f4f8643e", null);
      a["default"] = p.exports;
    },
    "3c28": function (t, a, e) {
      var o = e("24fb");
      (a = o(!1)),
        a.push([
          t.i,
          '[data-v-f4f8643e]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.info[data-v-f4f8643e]{margin-top:15px;margin-bottom:35px;font-size:25px;line-height:30px;color:#fff}.options-page[data-v-f4f8643e]{margin-top:150px}.options-page img[data-v-f4f8643e]{width:285px;height:276px}.options[data-v-f4f8643e]{margin-top:20px}.options-list li[data-v-f4f8643e]{cursor:pointer;width:286px;height:45px;font-weight:500;font-size:22px;line-height:21px;padding:10px;border-radius:30px;margin:12px auto;color:#fff;border:2px solid transparent;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#12ab9e,#8d358b);background-origin:border-box;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #2c323f}.options-list[data-v-f4f8643e]:hover{box-shadow:inset 2px 1000px 1px #4b5369}.options-list[data-v-f4f8643e]:last-child{font-weight:600;font-size:18px;width:195px;border:5px solid transparent;margin-top:50px;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#12ab9e,#8d358b)}',
          "",
        ]),
        (t.exports = a);
    },
    ac83: function (t, a, e) {
      t.exports = e.p + "public/img/civ-txt.6d06ac29.png";
    },
    bebd: function (t, a, e) {
      "use strict";
      e("d71d");
    },
    d71d: function (t, a, e) {
      var o = e("3c28");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var i = e("499e").default;
      i("b8f4c51a", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
