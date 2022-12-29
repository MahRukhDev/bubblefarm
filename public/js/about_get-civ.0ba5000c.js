(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["about~get-civ"],
  {
    "0c81": function (e) {
      e.exports = JSON.parse(
        '{"name":"@vue-stripe/vue-stripe","version":"4.4.4","description":"Stripe Checkout & Elements for Vue.js","author":"jofftiquez@gmail.com","scripts":{"build":"rollup -c","lint":"vue-cli-service lint --fix","prebuild":"rimraf dist","test":"jest"},"main":"dist/index.js","module":"dist","dependencies":{"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},"devDependencies":{"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3","eslint":"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2","jest":"^24.9.0","lint-staged":"^9.5.0","rimraf":"^3.0.0","rollup":"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},"bugs":{"url":"https://github.com/vue-stripe/vue-stripe/issues"},"gitHooks":{"pre-commit":"lint-staged"},"homepage":"https://github.com/vue-stripe/vue-stripe#readme","keywords":["vue","vuejs","stripe","checkout","payment"],"license":"MIT","lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},"repository":{"type":"git","url":"git@github.com:vue-stripe/vue-stripe.git"},"typings":"typings/index.d.ts"}'
      );
    },
    "0cbd": function (e, n, t) {
      var r = t("24fb");
      (n = r(!1)),
        n.push([
          e.i,
          "#stripe-payment-element-errors{margin-top:10px;color:red;font-size:20px;font-weight:900}",
          "",
        ]),
        (e.exports = n);
    },
    "4c47": function (e, n, t) {
      "use strict";
      var r = function () {
          var e = this,
            n = e._self._c;
          return n("div", { staticClass: "columns" }, [
            n("div", { staticClass: "column is-6 is-offset-3" }, [
              n("div", { staticClass: "card mt-6" }, [
                n("div", { staticClass: "card-content" }, [
                  n("div", { staticClass: "content has-text-left" }, [
                    n("img", {
                      attrs: {
                        width: "50",
                        height: "50",
                        src: t("53e7"),
                        alt: "CIV Logo",
                      },
                    }),
                    null === e.elementsOptions.clientSecret
                      ? n("div", { attrs: { id: "prepare-checkout" } }, [
                          n("h3", [e._v("Get your $CIV today")]),
                          n("p", { staticClass: "is-size-6" }, [
                            e._v(" $ available: "),
                            null === e.polygonAvailable ||
                            null === e.ethereumAvailable
                              ? n("span", [e._v("Loading ...")])
                              : n("span", [
                                  e._v(
                                    "$" +
                                      e._s(e.ethereumAvailable) +
                                      " max (Ethereum), $" +
                                      e._s(e.polygonAvailable) +
                                      " max (Polygon)"
                                  ),
                                ]),
                          ]),
                          n("div", { attrs: { id: "form" } }, [
                            n(
                              "form",
                              {
                                ref: "form",
                                on: {
                                  submit: function (n) {
                                    return (
                                      n.preventDefault(), e.prepareCheckout()
                                    );
                                  },
                                },
                              },
                              [
                                n(
                                  "b-field",
                                  {
                                    attrs: {
                                      label: "$ investment",
                                      horizontal: "",
                                    },
                                  },
                                  [
                                    n("b-input", {
                                      attrs: {
                                        icon: "cash",
                                        placeholder: "100",
                                      },
                                      nativeOn: {
                                        keydown: function (n) {
                                          return e.onNumberInputKeypress(n);
                                        },
                                      },
                                      model: {
                                        value: e.amount,
                                        callback: function (n) {
                                          e.amount = n;
                                        },
                                        expression: "amount",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                n(
                                  "b-field",
                                  {
                                    attrs: {
                                      label: "Wallet address",
                                      horizontal: "",
                                    },
                                  },
                                  [
                                    n("b-input", {
                                      attrs: {
                                        icon: "wallet",
                                        placeholder: "0x...",
                                        pattern: "^0x[a-fA-F0-9]{40}$",
                                        minlength: "42",
                                      },
                                      model: {
                                        value: e.address,
                                        callback: function (n) {
                                          e.address = n;
                                        },
                                        expression: "address",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                n(
                                  "b-field",
                                  {
                                    attrs: {
                                      label: "Blockchain",
                                      horizontal: "",
                                    },
                                  },
                                  [
                                    n(
                                      "b-radio",
                                      {
                                        attrs: {
                                          name: "network",
                                          "native-value": "1",
                                        },
                                        on: {
                                          input: function (n) {
                                            return e.getTokenReceived();
                                          },
                                        },
                                        model: {
                                          value: e.network,
                                          callback: function (n) {
                                            e.network = n;
                                          },
                                          expression: "network",
                                        },
                                      },
                                      [e._v(" Ethereum Mainnet ")]
                                    ),
                                    n(
                                      "b-radio",
                                      {
                                        attrs: {
                                          name: "network",
                                          "native-value": "137",
                                        },
                                        on: {
                                          input: function (n) {
                                            return e.getTokenReceived();
                                          },
                                        },
                                        model: {
                                          value: e.network,
                                          callback: function (n) {
                                            e.network = n;
                                          },
                                          expression: "network",
                                        },
                                      },
                                      [e._v(" Polygon Matic ")]
                                    ),
                                  ],
                                  1
                                ),
                                e.loadingQuote
                                  ? n(
                                      "div",
                                      {
                                        staticClass:
                                          "mb-2 has-text-weight-bold has-text-info",
                                      },
                                      [e._v("Quoting...")]
                                    )
                                  : e.civTokensToReceive > 0
                                  ? n(
                                      "div",
                                      {
                                        staticClass:
                                          "mb-2 has-text-weight-bold has-text-success",
                                      },
                                      [
                                        e._v(
                                          e._s(e.civTokensToReceive) +
                                            " CIV tokens (market estimate)"
                                        ),
                                      ]
                                    )
                                  : e.showGasError
                                  ? n(
                                      "div",
                                      {
                                        staticClass:
                                          "mb-2 has-text-weight-bold has-text-danger",
                                      },
                                      [
                                        e._v(
                                          "! Not enough to pay $" +
                                            e._s(e.gasFees) +
                                            " gas fees (estimated)"
                                        ),
                                      ]
                                    )
                                  : e.showAmountError
                                  ? n(
                                      "div",
                                      {
                                        staticClass:
                                          "mb-2 has-text-weight-bold has-text-danger",
                                      },
                                      [
                                        e._v(
                                          "$ value exceeds current availability"
                                        ),
                                      ]
                                    )
                                  : n(
                                      "div",
                                      {
                                        staticClass:
                                          "mb-2 has-text-weight-bold has-text-info",
                                      },
                                      [
                                        e._v(
                                          "Please fill the form to get your market quote"
                                        ),
                                      ]
                                    ),
                                n(
                                  "b-button",
                                  {
                                    attrs: {
                                      "native-type": "submit",
                                      type: "is-success",
                                      disabled: e.disableGetCivButton(),
                                    },
                                  },
                                  [e._v("Get $CIV ")]
                                ),
                              ],
                              1
                            ),
                          ]),
                        ])
                      : null !== e.elementsOptions.clientSecret
                      ? n("div", { attrs: { id: "order-summary" } }, [
                          n("h3", { staticClass: "has-text-weight-bold" }, [
                            e._v("Your Order Summary"),
                          ]),
                          n("div", [
                            n("strong", [
                              e._v("$" + e._s(e.orderMetadata.dollarAmount)),
                            ]),
                            e._v(" investment for "),
                            n("strong", [
                              e._v(e._s(e.orderMetadata.civTokens)),
                            ]),
                            e._v(" CIV tokens (market estimate) "),
                          ]),
                          n("div", [
                            n("strong", [
                              e._v(e._s(e.orderMetadata.chainName)),
                            ]),
                            e._v(" blockchain, wallet address: "),
                          ]),
                          n("div", { staticClass: "has-text-weight-bold" }, [
                            e._v(e._s(e.orderMetadata.walletAddress)),
                          ]),
                          n("div", [
                            e._v("Fees paid: "),
                            n("strong", [
                              e._v("$" + e._s(e.orderMetadata.stripeFee)),
                            ]),
                            e._v(" card + "),
                            n("strong", [
                              e._v("$" + e._s(e.orderMetadata.gasFee)),
                            ]),
                            e._v(" gas"),
                          ]),
                          n("div", [
                            e._v(
                              "Tokens sent to your wallet automatically within 1 hour"
                            ),
                          ]),
                          n("div", [
                            e._v(
                              "Terms of service: all payments final upon delivery of the tokens to your wallet, as proven by the relevant block explorer (Etherscan.io or Polygonscan.com)"
                            ),
                          ]),
                          n(
                            "div",
                            { staticClass: "mt-5" },
                            [
                              n("stripe-element-payment", {
                                ref: "paymentRef",
                                attrs: {
                                  "test-mode": !0,
                                  pk: e.publishableKey,
                                  "elements-options": e.elementsOptions,
                                  "confirm-params": e.confirmParams,
                                },
                                on: {
                                  loading: function (n) {
                                    return e.loadingPayment();
                                  },
                                  "element-ready": function (n) {
                                    return e.elementReady();
                                  },
                                  error: function (n) {
                                    return e.onError();
                                  },
                                },
                              }),
                              e.cardDetailsElementReady
                                ? e._e()
                                : n(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-info has-text-weight-bold",
                                    },
                                    [e._v("Card details loading...")]
                                  ),
                              e.cardDetailsElementReady
                                ? n(
                                    "b-button",
                                    {
                                      staticClass: "mt-4 mr-3",
                                      attrs: { type: "is-success" },
                                      on: {
                                        click: function (n) {
                                          return e.pay();
                                        },
                                      },
                                    },
                                    [e._v("Invest now")]
                                  )
                                : e._e(),
                              n("b-loading", {
                                model: {
                                  value: e.paymentLoading,
                                  callback: function (n) {
                                    e.paymentLoading = n;
                                  },
                                  expression: "paymentLoading",
                                },
                              }),
                            ],
                            1
                          ),
                        ])
                      : e._e(),
                  ]),
                ]),
              ]),
            ]),
          ]);
        },
        i = [],
        o = t("acaf"),
        s = t("9841");
      const a = 500;
      var l = {
          name: "GetCiv",
          components: { StripeElementPayment: o["StripeElementPayment"] },
          watch: {
            amount: {
              deep: !0,
              handler: function () {
                this.timeout && clearTimeout(this.timeout),
                  (this.timeout = setTimeout(async () => {
                    await this.getTokenReceived();
                  }, a));
              },
            },
          },
          async mounted() {
            const e = this.$buefy.loading.open();
            try {
              let n = await new s["a"]().getMaxDollarSwappable(1);
              n = 0.95 * Number(n.maxDollarSwappable);
              let t = await new s["a"]().getMaxDollarSwappable(137);
              (t = 0.95 * Number(t.maxDollarSwappable)),
                (this.ethereumAvailable = n.toFixed(2)),
                (this.polygonAvailable = t.toFixed(2));
            } catch (n) {
              this.$log.error(n),
                this.$buefy.toast.open({
                  duration: 5e3,
                  message:
                    "We cannot calculate available amounts. Please try again later",
                  position: "is-bottom",
                  type: "is-danger",
                });
            } finally {
              e.close();
            }
          },
          data() {
            return {
              loading: !0,
              publishableKey:
                "pk_live_51KIeR7BBfZzq7hW0HssFY412qgfm1TxSN85Fz4yzcJFsCtoEQ6NXg3e9owOVRI5RBoVvwrR4beTTxmwAw4pxpV8P00ojylnuHE",
              elementsOptions: {
                clientSecret: null,
                appearance: { theme: "night", labels: "floating" },
              },
              confirmParams: {
                return_url: "https://bubbleswap.co/get-civ/success",
              },
              showAmountError: !1,
              showGasError: !1,
              gasFees: null,
              civTokensToReceive: null,
              loadingQuote: !1,
              amount: null,
              address: null,
              network: 1,
              ethereumAvailable: null,
              polygonAvailable: null,
              orderMetadata: null,
              paymentLoading: !1,
              cardDetailsElementReady: !1,
            };
          },
          methods: {
            async prepareCheckout() {
              const e = this.amount,
                n = this.address,
                t = this.network;
              await this.initializePayment({
                dollarAmount: e,
                walletAddress: n,
                network: t.toString(),
              });
            },
            async initializePayment(e) {
              const n = this.$buefy.loading.open();
              try {
                const t = await new s["a"]().getPaymentClientSecret({
                  userInput: e,
                });
                (this.orderMetadata = t.metadata),
                  (this.elementsOptions.clientSecret = t.clientSecret);
              } catch (t) {
                this.$log.error(t),
                  this.$buefy.toast.open({
                    duration: 5e3,
                    message: "Payment did not confirm. Please try again later",
                    position: "is-bottom",
                    type: "is-danger",
                  });
              } finally {
                n.close();
              }
            },
            reset() {
              (this.amount = null),
                (this.address = null),
                (this.network = "ethereum");
            },
            onNumberInputKeypress(e) {
              let n = e.charCode || e.keyCode || 0,
                t =
                  8 === n ||
                  9 === n ||
                  13 === n ||
                  46 === n ||
                  110 === n ||
                  190 === n ||
                  37 === n ||
                  39 === n ||
                  188 === n ||
                  (n >= 48 && n <= 57) ||
                  (n >= 96 && n <= 105);
              t || e.preventDefault(),
                setTimeout(() => {
                  let e = new RegExp("^[0-9]*[.,]?[0-9]*$");
                  if (this.amount && !e.test(this.amount)) {
                    let e = this.amount.split(".");
                    (e = e.shift() + "." + e.join("")), (this.amount = e);
                  }
                  this.amount = this.amount.replace(",", ".");
                }, 10);
            },
            async pay() {
              this.$refs.paymentRef.submit();
            },
            goBack() {
              (this.elementsOptions.clientSecret = null),
                (this.cardDetailsElementReady = !1);
            },
            disableGetCivButton() {
              return (
                null === this.civTokensToReceive ||
                0 === this.civTokensToReceive ||
                null === this.address
              );
            },
            loadingPayment() {
              this.paymentLoading = !0;
            },
            onError() {
              this.$nextTick(() => {
                this.paymentLoading = !1;
              });
            },
            elementReady() {
              this.cardDetailsElementReady = !0;
            },
            async getTokenReceived() {
              (this.showAmountError = !1),
                (this.showGasError = !1),
                (this.gasFees = null),
                (this.civTokensToReceive = null);
              let e =
                1 === parseInt(this.network)
                  ? parseFloat(this.ethereumAvailable)
                  : parseFloat(this.polygonAvailable);
              if (this.amount >= e) this.showAmountError = !0;
              else {
                if (this.amount <= 0) return;
                {
                  this.loadingQuote = !0;
                  let e = 0.97 * this.amount,
                    n = await new s["a"]().getSwapDetails(e, this.network),
                    t = n.dollarSwapPrice;
                  (n = n.toTokens),
                    (n = Number(n)),
                    n > 0
                      ? (this.civTokensToReceive = n.toFixed(3))
                      : ((this.showGasError = !0),
                        (this.gasFees = t.toFixed(2)));
                }
              }
              this.loadingQuote = !1;
            },
          },
        },
        c = l,
        u = (t("80d4"), t("2877")),
        d = Object(u["a"])(c, r, i, !1, null, null, null);
      n["a"] = d.exports;
    },
    "73a8": function (e, n, t) {
      var r = t("0cbd");
      r.__esModule && (r = r.default),
        "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var i = t("499e").default;
      i("5cbef28b", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "80d4": function (e, n, t) {
      "use strict";
      t("73a8");
    },
    acaf: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = "auto",
        i = [
          "auto",
          "bg",
          "cs",
          "da",
          "de",
          "el",
          "en",
          "en-GB",
          "es",
          "es-419",
          "et",
          "fi",
          "fr",
          "fr-CA",
          "hu",
          "id",
          "it",
          "ja",
          "lt",
          "lv",
          "ms",
          "mt",
          "nb",
          "nl",
          "pl",
          "pt",
          "pt-BR",
          "ro",
          "ru",
          "sk",
          "sl",
          "sv",
          "tr",
          "zh",
          "zh-HK",
          "zh-TW",
        ],
        o = ["auto", "book", "donate", "pay"],
        s = ["required", "auto"],
        a = {
          base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": { color: "#aab7c4" },
          },
          invalid: { color: "#fa755a", iconColor: "#fa755a" },
        },
        l = t("0c81").version,
        c = {
          name: "vue-stripe",
          version: l,
          url: "https://vuestripe.com",
          partner_id: "pp_partner_IqtOXpBSuz0IE2",
        },
        u = {
          install: function (e, n) {
            var t = n.pk,
              r = n.stripeAccount,
              i = n.apiVersion,
              o = n.locale,
              s = window.Stripe(t, {
                stripeAccount: r,
                apiVersion: i,
                locale: o,
              });
            s.registerAppInfo(c), (e.prototype.$stripe = s);
          },
        };
      function d(e, n) {
        return e((n = { exports: {} }), n.exports), n.exports;
      }
      var p = d(function (e) {
          var n = (function (e) {
            var n,
              t = Object.prototype,
              r = t.hasOwnProperty,
              i = "function" == typeof Symbol ? Symbol : {},
              o = i.iterator || "@@iterator",
              s = i.asyncIterator || "@@asyncIterator",
              a = i.toStringTag || "@@toStringTag";
            function l(e, n, t, r) {
              var i = n && n.prototype instanceof f ? n : f,
                o = Object.create(i.prototype),
                s = new _(r || []);
              return (
                (o._invoke = (function (e, n, t) {
                  var r = u;
                  return function (i, o) {
                    if (r === p)
                      throw new Error("Generator is already running");
                    if (r === m) {
                      if ("throw" === i) throw o;
                      return T();
                    }
                    for (t.method = i, t.arg = o; ; ) {
                      var s = t.delegate;
                      if (s) {
                        var a = k(s, t);
                        if (a) {
                          if (a === h) continue;
                          return a;
                        }
                      }
                      if ("next" === t.method) t.sent = t._sent = t.arg;
                      else if ("throw" === t.method) {
                        if (r === u) throw ((r = m), t.arg);
                        t.dispatchException(t.arg);
                      } else "return" === t.method && t.abrupt("return", t.arg);
                      r = p;
                      var l = c(e, n, t);
                      if ("normal" === l.type) {
                        if (((r = t.done ? m : d), l.arg === h)) continue;
                        return { value: l.arg, done: t.done };
                      }
                      "throw" === l.type &&
                        ((r = m), (t.method = "throw"), (t.arg = l.arg));
                    }
                  };
                })(e, t, s)),
                o
              );
            }
            function c(e, n, t) {
              try {
                return { type: "normal", arg: e.call(n, t) };
              } catch (e) {
                return { type: "throw", arg: e };
              }
            }
            e.wrap = l;
            var u = "suspendedStart",
              d = "suspendedYield",
              p = "executing",
              m = "completed",
              h = {};
            function f() {}
            function y() {}
            function v() {}
            var g = {};
            g[o] = function () {
              return this;
            };
            var b = Object.getPrototypeOf,
              w = b && b(b(O([])));
            w && w !== t && r.call(w, o) && (g = w);
            var E = (v.prototype = f.prototype = Object.create(g));
            function S(e) {
              ["next", "throw", "return"].forEach(function (n) {
                e[n] = function (e) {
                  return this._invoke(n, e);
                };
              });
            }
            function A(e) {
              var n;
              this._invoke = function (t, i) {
                function o() {
                  return new Promise(function (n, o) {
                    !(function n(t, i, o, s) {
                      var a = c(e[t], e, i);
                      if ("throw" !== a.type) {
                        var l = a.arg,
                          u = l.value;
                        return u && "object" == typeof u && r.call(u, "__await")
                          ? Promise.resolve(u.__await).then(
                              function (e) {
                                n("next", e, o, s);
                              },
                              function (e) {
                                n("throw", e, o, s);
                              }
                            )
                          : Promise.resolve(u).then(
                              function (e) {
                                (l.value = e), o(l);
                              },
                              function (e) {
                                return n("throw", e, o, s);
                              }
                            );
                      }
                      s(a.arg);
                    })(t, i, n, o);
                  });
                }
                return (n = n ? n.then(o, o) : o());
              };
            }
            function k(e, t) {
              var r = e.iterator[t.method];
              if (r === n) {
                if (((t.delegate = null), "throw" === t.method)) {
                  if (
                    e.iterator.return &&
                    ((t.method = "return"),
                    (t.arg = n),
                    k(e, t),
                    "throw" === t.method)
                  )
                    return h;
                  (t.method = "throw"),
                    (t.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return h;
              }
              var i = c(r, e.iterator, t.arg);
              if ("throw" === i.type)
                return (
                  (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), h
                );
              var o = i.arg;
              return o
                ? o.done
                  ? ((t[e.resultName] = o.value),
                    (t.next = e.nextLoc),
                    "return" !== t.method && ((t.method = "next"), (t.arg = n)),
                    (t.delegate = null),
                    h)
                  : o
                : ((t.method = "throw"),
                  (t.arg = new TypeError("iterator result is not an object")),
                  (t.delegate = null),
                  h);
            }
            function x(e) {
              var n = { tryLoc: e[0] };
              1 in e && (n.catchLoc = e[1]),
                2 in e && ((n.finallyLoc = e[2]), (n.afterLoc = e[3])),
                this.tryEntries.push(n);
            }
            function C(e) {
              var n = e.completion || {};
              (n.type = "normal"), delete n.arg, (e.completion = n);
            }
            function _(e) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(x, this),
                this.reset(!0);
            }
            function O(e) {
              if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var i = -1,
                    s = function t() {
                      for (; ++i < e.length; )
                        if (r.call(e, i))
                          return (t.value = e[i]), (t.done = !1), t;
                      return (t.value = n), (t.done = !0), t;
                    };
                  return (s.next = s);
                }
              }
              return { next: T };
            }
            function T() {
              return { value: n, done: !0 };
            }
            return (
              (y.prototype = E.constructor = v),
              (v.constructor = y),
              (v[a] = y.displayName = "GeneratorFunction"),
              (e.isGeneratorFunction = function (e) {
                var n = "function" == typeof e && e.constructor;
                return (
                  !!n &&
                  (n === y || "GeneratorFunction" === (n.displayName || n.name))
                );
              }),
              (e.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, v)
                    : ((e.__proto__ = v),
                      a in e || (e[a] = "GeneratorFunction")),
                  (e.prototype = Object.create(E)),
                  e
                );
              }),
              (e.awrap = function (e) {
                return { __await: e };
              }),
              S(A.prototype),
              (A.prototype[s] = function () {
                return this;
              }),
              (e.AsyncIterator = A),
              (e.async = function (n, t, r, i) {
                var o = new A(l(n, t, r, i));
                return e.isGeneratorFunction(t)
                  ? o
                  : o.next().then(function (e) {
                      return e.done ? e.value : o.next();
                    });
              }),
              S(E),
              (E[a] = "Generator"),
              (E[o] = function () {
                return this;
              }),
              (E.toString = function () {
                return "[object Generator]";
              }),
              (e.keys = function (e) {
                var n = [];
                for (var t in e) n.push(t);
                return (
                  n.reverse(),
                  function t() {
                    for (; n.length; ) {
                      var r = n.pop();
                      if (r in e) return (t.value = r), (t.done = !1), t;
                    }
                    return (t.done = !0), t;
                  }
                );
              }),
              (e.values = O),
              (_.prototype = {
                constructor: _,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = n),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = n),
                    this.tryEntries.forEach(C),
                    !e)
                  )
                    for (var t in this)
                      "t" === t.charAt(0) &&
                        r.call(this, t) &&
                        !isNaN(+t.slice(1)) &&
                        (this[t] = n);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;
                  function i(r, i) {
                    return (
                      (a.type = "throw"),
                      (a.arg = e),
                      (t.next = r),
                      i && ((t.method = "next"), (t.arg = n)),
                      !!i
                    );
                  }
                  for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var s = this.tryEntries[o],
                      a = s.completion;
                    if ("root" === s.tryLoc) return i("end");
                    if (s.tryLoc <= this.prev) {
                      var l = r.call(s, "catchLoc"),
                        c = r.call(s, "finallyLoc");
                      if (l && c) {
                        if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                        if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                      } else if (l) {
                        if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                      } else {
                        if (!c)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, n) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var i = this.tryEntries[t];
                    if (
                      i.tryLoc <= this.prev &&
                      r.call(i, "finallyLoc") &&
                      this.prev < i.finallyLoc
                    ) {
                      var o = i;
                      break;
                    }
                  }
                  o &&
                    ("break" === e || "continue" === e) &&
                    o.tryLoc <= n &&
                    n <= o.finallyLoc &&
                    (o = null);
                  var s = o ? o.completion : {};
                  return (
                    (s.type = e),
                    (s.arg = n),
                    o
                      ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                      : this.complete(s)
                  );
                },
                complete: function (e, n) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && n && (this.next = n),
                    h
                  );
                },
                finish: function (e) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var t = this.tryEntries[n];
                    if (t.finallyLoc === e)
                      return this.complete(t.completion, t.afterLoc), C(t), h;
                  }
                },
                catch: function (e) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var t = this.tryEntries[n];
                    if (t.tryLoc === e) {
                      var r = t.completion;
                      if ("throw" === r.type) {
                        var i = r.arg;
                        C(t);
                      }
                      return i;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, t, r) {
                  return (
                    (this.delegate = {
                      iterator: O(e),
                      resultName: t,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = n),
                    h
                  );
                },
              }),
              e
            );
          })(e.exports);
          try {
            regeneratorRuntime = n;
          } catch (e) {
            Function("r", "regeneratorRuntime = r")(n);
          }
        }),
        m = p;
      function h(e) {
        return (h =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var f,
        y = "https://js.stripe.com/v3",
        v = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        g =
          "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        b = function () {
          for (
            var e = document.querySelectorAll('script[src^="'.concat(y, '"]')),
              n = 0;
            n < e.length;
            n++
          ) {
            var t = e[n];
            if (v.test(t.src)) return t;
          }
          return null;
        },
        w = function (e) {
          var n =
              e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            t = document.createElement("script");
          t.src = "".concat(y).concat(n);
          var r = document.head || document.body;
          if (!r)
            throw new Error(
              "Expected document.body not to be null. Stripe.js requires a <body> element."
            );
          return r.appendChild(t), t;
        },
        E = function (e, n) {
          e &&
            e._registerWrapper &&
            e._registerWrapper({
              name: "stripe-js",
              version: "1.13.2",
              startTime: n,
            });
        },
        S = null,
        A = function (e) {
          return null !== S
            ? S
            : (S = new Promise(function (n, t) {
                if ("undefined" != typeof window)
                  if ((window.Stripe && e && console.warn(g), window.Stripe))
                    n(window.Stripe);
                  else
                    try {
                      var r = b();
                      r && e ? console.warn(g) : r || (r = w(e)),
                        r.addEventListener("load", function () {
                          window.Stripe
                            ? n(window.Stripe)
                            : t(new Error("Stripe.js not available"));
                        }),
                        r.addEventListener("error", function () {
                          t(new Error("Failed to load Stripe.js"));
                        });
                    } catch (e) {
                      return void t(e);
                    }
                else n(null);
              }));
        },
        k = function (e, n, t) {
          if (null === e) return null;
          var r = e.apply(void 0, n);
          return E(r, t), r;
        },
        x = function (e) {
          var n =
            "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
              JSON.stringify(e),
              "\n"
            );
          if (null === e || "object" !== h(e)) throw new Error(n);
          if (
            1 === Object.keys(e).length &&
            "boolean" == typeof e.advancedFraudSignals
          )
            return e;
          throw new Error(n);
        },
        C = !1,
        _ = function () {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          C = !0;
          var r = Date.now();
          return A(f).then(function (e) {
            return k(e, n, r);
          });
        };
      _.setLoadParameters = function (e) {
        if (C)
          throw new Error(
            "You cannot change load parameters after calling loadStripe"
          );
        f = x(e);
      };
      var O = {
          beforeCreate: function () {
            var e = this.$options.props;
            e &&
              (this._$coertions = Object.keys(e)
                .filter(function (n) {
                  return e[n].coerce;
                })
                .map(function (n) {
                  return [n, e[n].coerce];
                }));
          },
          computed: {
            $coerced: function () {
              var e = this;
              return this._$coertions.reduce(function (n, t) {
                var r = t[0],
                  i = t[1];
                return (n[r] = i.call(e, e.$props[r])), n;
              }, {});
            },
          },
        },
        T = {
          pk: { type: String, required: !0 },
          mode: {
            type: String,
            validator: function (e) {
              return ["payment", "subscription"].includes(e);
            },
          },
          lineItems: { type: Array, default: void 0 },
          items: { type: Array },
          successUrl: { type: String, default: window.location.href },
          cancelUrl: { type: String, default: window.location.href },
          submitType: {
            type: String,
            validator: function (e) {
              return o.includes(e);
            },
          },
          billingAddressCollection: {
            type: String,
            default: "auto",
            validator: function (e) {
              return s.includes(e);
            },
          },
          clientReferenceId: { type: String },
          customerEmail: { type: String },
          sessionId: { type: String },
          stripeAccount: { type: String, default: void 0 },
          apiVersion: { type: String, default: void 0 },
          locale: {
            type: String,
            default: r,
            coerce: function (e) {
              return i.includes(e)
                ? e
                : (console.warn(
                    "VueStripe Warning: '"
                      .concat(
                        e,
                        "' is not supported by Stripe yet. Falling back to default '"
                      )
                      .concat(r, "'.")
                  ),
                  r);
            },
          },
          shippingAddressCollection: {
            type: Object,
            validator: function (e) {
              return Object.prototype.hasOwnProperty.call(
                e,
                "allowedCountries"
              );
            },
          },
          disableAdvancedFraudDetection: { type: Boolean },
          stripeOptions: { type: Object, default: null },
        },
        P = {
          props: T,
          mixins: [O],
          render: function (e) {
            return e;
          },
          methods: {
            redirectToCheckout: function () {
              var e, n, t;
              return m.async(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          this.$emit("loading", !0),
                          this.disableAdvancedFraudDetection &&
                            _.setLoadParameters({ advancedFraudSignals: !1 }),
                          (e = {
                            stripeAccount: this.stripeAccount,
                            apiVersion: this.apiVersion,
                            locale: this.locale,
                          }),
                          (r.next = 6),
                          m.awrap(_(this.pk, e))
                        );
                      case 6:
                        if (
                          ((n = r.sent).registerAppInfo(c), !this.sessionId)
                        ) {
                          r.next = 11;
                          break;
                        }
                        return (
                          n.redirectToCheckout({ sessionId: this.sessionId }),
                          r.abrupt("return")
                        );
                      case 11:
                        if (
                          !this.lineItems ||
                          !this.lineItems.length ||
                          this.mode
                        ) {
                          r.next = 14;
                          break;
                        }
                        return (
                          console.error(
                            "Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"
                          ),
                          r.abrupt("return")
                        );
                      case 14:
                        return (
                          (t = {
                            billingAddressCollection:
                              this.billingAddressCollection,
                            cancelUrl: this.cancelUrl,
                            clientReferenceId: this.clientReferenceId,
                            customerEmail: this.customerEmail,
                            items: this.items,
                            lineItems: this.lineItems,
                            locale: this.$coerced.locale,
                            mode: this.mode,
                            shippingAddressCollection:
                              this.shippingAddressCollection,
                            submitType: this.submitType,
                            successUrl: this.successUrl,
                          }),
                          r.abrupt("return", n.redirectToCheckout(t))
                        );
                      case 18:
                        (r.prev = 18),
                          (r.t0 = r.catch(0)),
                          console.error(r.t0),
                          this.$emit("error", r.t0);
                      case 22:
                      case "end":
                        return r.stop();
                    }
                },
                null,
                this,
                [[0, 18]]
              );
            },
          },
        };
      function $(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var R = $;
      function j(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function I(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? j(Object(t), !0).forEach(function (n) {
                R(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var B = "card",
        D = {
          props: {
            pk: { type: String, required: !0 },
            testMode: { type: Boolean, default: !1 },
            stripeAccount: { type: String, default: void 0 },
            apiVersion: { type: String, default: void 0 },
            locale: { type: String, default: "auto" },
            elementsOptions: {
              type: Object,
              default: function () {
                return {};
              },
            },
            tokenData: {
              type: Object,
              default: function () {
                return {};
              },
            },
            disableAdvancedFraudDetection: { type: Boolean },
            classes: {
              type: Object,
              default: function () {
                return {};
              },
            },
            elementStyle: {
              type: Object,
              default: function () {
                return a;
              },
            },
            value: { type: String, default: void 0 },
            hidePostalCode: Boolean,
            iconStyle: {
              type: String,
              default: "default",
              validator: function (e) {
                return ["solid", "default"].includes(e);
              },
            },
            hideIcon: Boolean,
            disabled: Boolean,
          },
          data: function () {
            return {
              loading: !1,
              stripe: null,
              elements: null,
              element: null,
              card: null,
            };
          },
          computed: {
            form: function () {
              return document.getElementById("stripe-element-form");
            },
          },
          mounted: function () {
            var e,
              n,
              t = this;
            return m.async(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        this.disableAdvancedFraudDetection &&
                          _.setLoadParameters({ advancedFraudSignals: !1 }),
                        (e = {
                          stripeAccount: this.stripeAccount,
                          apiVersion: this.apiVersion,
                          locale: this.locale,
                        }),
                        (n = {
                          classes: this.classes,
                          style: this.elementStyle,
                          value: this.value,
                          hidePostalCode: this.hidePostalCode,
                          iconStyle: this.iconStyle,
                          hideIcon: this.hideIcon,
                          disabled: this.disabled,
                        }),
                        (r.next = 5),
                        m.awrap(_(this.pk, e))
                      );
                    case 5:
                      (this.stripe = r.sent),
                        this.stripe.registerAppInfo(c),
                        (this.elements = this.stripe.elements(
                          this.elementsOptions
                        )),
                        (this.element = this.elements.create(B, n)),
                        this.element.mount("#stripe-element-mount-point"),
                        this.element.on("change", function (e) {
                          var n = document.getElementById(
                            "stripe-element-errors"
                          );
                          e.error
                            ? (n.textContent = e.error.message)
                            : (n.textContent = ""),
                            t.onChange(e);
                        }),
                        this.element.on("blur", this.onBlur),
                        this.element.on("click", this.onClick),
                        this.element.on("escape", this.onEscape),
                        this.element.on("focus", this.onFocus),
                        this.element.on("ready", this.onReady),
                        this.form.addEventListener("submit", function (e) {
                          var n, r, i, o;
                          return m.async(
                            function (s) {
                              for (;;)
                                switch ((s.prev = s.next)) {
                                  case 0:
                                    return (
                                      (s.prev = 0),
                                      t.$emit("loading", !0),
                                      e.preventDefault(),
                                      (n = I({}, t.element)),
                                      t.amount && (n.amount = t.amount),
                                      (s.next = 7),
                                      m.awrap(
                                        t.stripe.createToken(n, t.tokenData)
                                      )
                                    );
                                  case 7:
                                    if (
                                      ((r = s.sent),
                                      (i = r.token),
                                      !(o = r.error))
                                    ) {
                                      s.next = 15;
                                      break;
                                    }
                                    return (
                                      (document.getElementById(
                                        "stripe-element-errors"
                                      ).textContent = o.message),
                                      t.$emit("error", o),
                                      s.abrupt("return")
                                    );
                                  case 15:
                                    t.$emit("token", i), (s.next = 22);
                                    break;
                                  case 18:
                                    (s.prev = 18),
                                      (s.t0 = s.catch(0)),
                                      console.error(s.t0),
                                      t.$emit("error", s.t0);
                                  case 22:
                                    return (
                                      (s.prev = 22),
                                      t.$emit("loading", !1),
                                      s.finish(22)
                                    );
                                  case 25:
                                  case "end":
                                    return s.stop();
                                }
                            },
                            null,
                            null,
                            [[0, 18, 22, 25]]
                          );
                        });
                    case 17:
                    case "end":
                      return r.stop();
                  }
              },
              null,
              this
            );
          },
          methods: {
            submit: function () {
              this.$refs.submitButtonRef.click();
            },
            clear: function () {
              this.element.clear();
            },
            destroy: function () {
              this.element.destroy();
            },
            focus: function () {
              console.warn(
                "This method will currently not work on iOS 13+ due to a system limitation."
              ),
                this.element.focus();
            },
            unmount: function () {
              this.element.unmount();
            },
            update: function (e) {
              this.element.update(e);
            },
            onChange: function (e) {
              this.$emit("element-change", e);
            },
            onReady: function (e) {
              this.$emit("element-ready", e);
            },
            onFocus: function (e) {
              this.$emit("element-focus", e);
            },
            onBlur: function (e) {
              this.$emit("element-blur", e);
            },
            onEscape: function (e) {
              this.$emit("element-escape", e);
            },
            onClick: function (e) {
              this.$emit("element-click", e);
            },
          },
        };
      function L(e, n, t, r, i, o, s, a, l, c) {
        "boolean" != typeof s && ((l = a), (a = s), (s = !1));
        const u = "function" == typeof t ? t.options : t;
        let d;
        if (
          (e &&
            e.render &&
            ((u.render = e.render),
            (u.staticRenderFns = e.staticRenderFns),
            (u._compiled = !0),
            i && (u.functional = !0)),
          r && (u._scopeId = r),
          o
            ? ((d = function (e) {
                (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  n && n.call(this, l(e)),
                  e &&
                    e._registeredComponents &&
                    e._registeredComponents.add(o);
              }),
              (u._ssrRegister = d))
            : n &&
              (d = s
                ? function (e) {
                    n.call(this, c(e, this.$root.$options.shadowRoot));
                  }
                : function (e) {
                    n.call(this, a(e));
                  }),
          d)
        )
          if (u.functional) {
            const e = u.render;
            u.render = function (n, t) {
              return d.call(t), e(n, t);
            };
          } else {
            const e = u.beforeCreate;
            u.beforeCreate = e ? [].concat(e, d) : [d];
          }
        return t;
      }
      const F =
        "undefined" != typeof navigator &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
      function N(e) {
        return (e, n) => G(e, n);
      }
      let M;
      const V = {};
      function G(e, n) {
        const t = F ? n.media || "default" : e,
          r = V[t] || (V[t] = { ids: new Set(), styles: [] });
        if (!r.ids.has(e)) {
          r.ids.add(e);
          let t = n.source;
          if (
            (n.map &&
              ((t += "\n/*# sourceURL=" + n.map.sources[0] + " */"),
              (t +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(n.map)))) +
                " */")),
            r.element ||
              ((r.element = document.createElement("style")),
              (r.element.type = "text/css"),
              n.media && r.element.setAttribute("media", n.media),
              void 0 === M &&
                (M = document.head || document.getElementsByTagName("head")[0]),
              M.appendChild(r.element)),
            "styleSheet" in r.element)
          )
            r.styles.push(t),
              (r.element.styleSheet.cssText = r.styles
                .filter(Boolean)
                .join("\n"));
          else {
            const e = r.ids.size - 1,
              n = document.createTextNode(t),
              i = r.element.childNodes;
            i[e] && r.element.removeChild(i[e]),
              i.length
                ? r.element.insertBefore(n, i[e])
                : r.element.appendChild(n);
          }
        }
      }
      const U = D;
      var q = function () {
          var e = this.$createElement,
            n = this._self._c || e;
          return n("div", [
            n(
              "form",
              { attrs: { id: "stripe-element-form" } },
              [
                n("div", { attrs: { id: "stripe-element-mount-point" } }),
                this._v(" "),
                this._t("stripe-element-errors", [
                  n("div", {
                    attrs: { id: "stripe-element-errors", role: "alert" },
                  }),
                ]),
                this._v(" "),
                n("button", {
                  ref: "submitButtonRef",
                  staticClass: "hide",
                  attrs: { type: "submit" },
                }),
              ],
              2
            ),
          ]);
        },
        z = [];
      q._withStripped = !0;
      const H = function (e) {
          e &&
            e("data-v-4dd8360e_0", {
              source:
                "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement[data-v-4dd8360e] {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n.StripeElement--focus[data-v-4dd8360e] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n.StripeElement--invalid[data-v-4dd8360e] {\n  border-color: #fa755a;\n}\n.StripeElement--webkit-autofill[data-v-4dd8360e] {\n  background-color: #fefde5 !important;\n}\n.hide[data-v-4dd8360e] {\n  display: none;\n}\n",
              map: {
                version: 3,
                sources: [
                  "/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue",
                ],
                names: [],
                mappings:
                  ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",
                file: "Card.vue",
                sourcesContent: [
                  "<template>\n  <div>\n    <form id=\"stripe-element-form\">\n      <div id=\"stripe-element-mount-point\" />\n      <slot name=\"stripe-element-errors\">\n        <div\n          id=\"stripe-element-errors\"\n          role=\"alert\"\n        />\n      </slot>\n      <button\n        ref=\"submitButtonRef\"\n        type=\"submit\"\n        class=\"hide\"\n      />\n    </form>\n  </div>\n</template>\n\n<script>\nimport { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';\n// import { isSecureHost } from '../utils';\nimport {\n  DEFAULT_ELEMENT_STYLE,\n  STRIPE_PARTNER_DETAILS,\n  // INSECURE_HOST_ERROR_MESSAGE,\n} from '../constants';\nconst ELEMENT_TYPE = 'card';\nexport default {\n  props: {\n    pk: {\n      type: String,\n      required: true,\n    },\n    testMode: {\n      type: Boolean,\n      default: false,\n    },\n    stripeAccount: {\n      type: String,\n      default: undefined,\n    },\n    apiVersion: {\n      type: String,\n      default: undefined,\n    },\n    locale: {\n      type: String,\n      default: 'auto',\n    },\n    elementsOptions: {\n      type: Object,\n      default: () => ({}),\n    },\n    tokenData: {\n      type: Object,\n      default: () => ({}),\n    },\n    disableAdvancedFraudDetection: {\n      type: Boolean,\n    },\n    // element specific options\n    classes: {\n      type: Object,\n      default: () => ({}),\n    },\n    elementStyle: {\n      type: Object,\n      default: () => (DEFAULT_ELEMENT_STYLE),\n    },\n    value: {\n      type: String,\n      default: undefined,\n    },\n    hidePostalCode: Boolean,\n    iconStyle: {\n      type: String,\n      default: 'default',\n      validator: value => ['solid', 'default'].includes(value),\n    },\n    hideIcon: Boolean,\n    disabled: Boolean,\n  },\n  data () {\n    return {\n      loading: false,\n      stripe: null,\n      elements: null,\n      element: null,\n      card: null,\n    };\n  },\n  computed: {\n    form () {\n      return document.getElementById('stripe-element-form');\n    },\n  },\n  async mounted () {\n    // FIXME: temporarily remove to avoid problems with remote non-production deployments\n    // if (!isSecureHost(this.testMode)) {\n    //   document.getElementById('stripe-element-mount-point').innerHTML = `<p style=\"color: red\">${INSECURE_HOST_ERROR_MESSAGE}</p>`;\n    //   return;\n    // }\n\n    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });\n\n    const stripeOptions = {\n      stripeAccount: this.stripeAccount,\n      apiVersion: this.apiVersion,\n      locale: this.locale,\n    };\n    const createOptions = {\n      classes: this.classes,\n      style: this.elementStyle,\n      value: this.value,\n      hidePostalCode: this.hidePostalCode,\n      iconStyle: this.iconStyle,\n      hideIcon: this.hideIcon,\n      disabled: this.disabled,\n    };\n\n    this.stripe = await loadStripe(this.pk, stripeOptions);\n    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);\n    this.elements = this.stripe.elements(this.elementsOptions);\n    this.element = this.elements.create(ELEMENT_TYPE, createOptions);\n    this.element.mount('#stripe-element-mount-point');\n\n    this.element.on('change', (event) => {\n      var displayError = document.getElementById('stripe-element-errors');\n      if (event.error) {\n        displayError.textContent = event.error.message;\n      } else {\n        displayError.textContent = '';\n      }\n      this.onChange(event);\n    });\n\n    this.element.on('blur', this.onBlur);\n    this.element.on('click', this.onClick);\n    this.element.on('escape', this.onEscape);\n    this.element.on('focus', this.onFocus);\n    this.element.on('ready', this.onReady);\n\n    this.form.addEventListener('submit', async (event) => {\n      try {\n        this.$emit('loading', true);\n        event.preventDefault();\n        const data = {\n          ...this.element,\n        };\n        if (this.amount) data.amount = this.amount;\n        const { token, error } = await this.stripe.createToken(data, this.tokenData);\n        if (error) {\n          const errorElement = document.getElementById('stripe-element-errors');\n          errorElement.textContent = error.message;\n          this.$emit('error', error);\n          return;\n        }\n        this.$emit('token', token);\n      } catch (error) {\n        console.error(error);\n        this.$emit('error', error);\n      } finally {\n        this.$emit('loading', false);\n      }\n    });\n  },\n  methods: {\n    /**\n     * Triggers the submission of the form\n     * @return {void}\n     */\n    submit () {\n      this.$refs.submitButtonRef.click();\n    },\n    /**\n     * Clears the element\n     * @return {void}\n     */\n    clear () {\n      this.element.clear();\n    },\n    /**\n     * Destroys the element\n     * @return {void}\n     */\n    destroy () {\n      this.element.destroy();\n    },\n    /**\n     * Focuses on the element\n     * @return {void}\n     */\n    focus () {\n      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');\n      this.element.focus();\n    },\n    /**\n     * Unmounts the element\n     * @return {void}\n     */\n    unmount () {\n      this.element.unmount();\n    },\n    /**\n     * Updates the element\n     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.\n     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.\n     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.\n     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.\n     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.\n     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.\n     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.\n     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled\n     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.\n     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.\n     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.\n     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.\n     */\n    update (opts) {\n      this.element.update(opts);\n    },\n    // events\n    onChange (e) {\n      this.$emit('element-change', e);\n    },\n    onReady (e) {\n      this.$emit('element-ready', e);\n    },\n    onFocus (e) {\n      this.$emit('element-focus', e);\n    },\n    onBlur (e) {\n      this.$emit('element-blur', e);\n    },\n    onEscape (e) {\n      this.$emit('element-escape', e);\n    },\n    onClick (e) {\n      this.$emit('element-click', e);\n    },\n  },\n};\n</script>\n\n<style scoped>\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.hide {\n  display: none;\n}\n</style>\n",
                ],
              },
              media: void 0,
            });
        },
        Y = "data-v-4dd8360e",
        Q = L(
          { render: q, staticRenderFns: z },
          H,
          U,
          Y,
          !1,
          void 0,
          !1,
          N,
          void 0,
          void 0
        );
      var W = "payment",
        J = {
          props: {
            pk: { type: String, required: !0 },
            testMode: { type: Boolean, default: !1 },
            elementsOptions: {
              type: Object,
              required: !0,
              default: function () {
                return {};
              },
            },
            confirmParams: {
              type: Object,
              required: !0,
              default: function () {
                return {};
              },
            },
            redirect: { type: String, default: "always" },
            createOptions: {
              type: Object,
              default: function () {
                return {};
              },
            },
            stripeAccount: { type: String, default: void 0 },
            apiVersion: { type: String, default: void 0 },
            locale: { type: String, default: "auto" },
            disableAdvancedFraudDetection: { type: Boolean },
          },
          data: function () {
            return { loading: !1, stripe: null, elements: null, element: null };
          },
          computed: {
            form: function () {
              return document.getElementById("stripe-payment-element-form");
            },
          },
          mounted: function () {
            var e,
              n = this;
            return m.async(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.disableAdvancedFraudDetection &&
                          _.setLoadParameters({ advancedFraudSignals: !1 }),
                        (e = {
                          stripeAccount: this.stripeAccount,
                          apiVersion: this.apiVersion,
                          locale: this.locale,
                        }),
                        (t.next = 4),
                        m.awrap(_(this.pk, e))
                      );
                    case 4:
                      (this.stripe = t.sent),
                        this.stripe.registerAppInfo(c),
                        (this.elements = this.stripe.elements(
                          this.elementsOptions
                        )),
                        (this.element = this.elements.create(
                          W,
                          this.createOptions
                        )),
                        this.element.mount(
                          "#stripe-payment-element-mount-point"
                        ),
                        this.element.on("change", function (e) {
                          var t = document.getElementById(
                            "stripe-payment-element-errors"
                          );
                          e.error
                            ? (t.textContent = e.error.message)
                            : (t.textContent = ""),
                            n.onChange(e);
                        }),
                        this.element.on("blur", this.onBlur),
                        this.element.on("click", this.onClick),
                        this.element.on("escape", this.onEscape),
                        this.element.on("focus", this.onFocus),
                        this.element.on("ready", this.onReady),
                        this.form.addEventListener("submit", function (e) {
                          var t, r;
                          return m.async(
                            function (i) {
                              for (;;)
                                switch ((i.prev = i.next)) {
                                  case 0:
                                    return (
                                      (i.prev = 0),
                                      n.$emit("loading", !0),
                                      e.preventDefault(),
                                      (i.next = 5),
                                      m.awrap(
                                        n.stripe.confirmPayment({
                                          elements: n.elements,
                                          confirmParams: n.confirmParams,
                                          redirect: n.redirect,
                                        })
                                      )
                                    );
                                  case 5:
                                    if (((t = i.sent), !(r = t.error))) {
                                      i.next = 12;
                                      break;
                                    }
                                    return (
                                      (document.getElementById(
                                        "stripe-payment-element-errors"
                                      ).textContent = r.message),
                                      n.$emit("error", r),
                                      i.abrupt("return")
                                    );
                                  case 12:
                                    i.next = 18;
                                    break;
                                  case 14:
                                    (i.prev = 14),
                                      (i.t0 = i.catch(0)),
                                      console.error(i.t0),
                                      n.$emit("error", i.t0);
                                  case 18:
                                    return (
                                      (i.prev = 18),
                                      n.$emit("loading", !1),
                                      i.finish(18)
                                    );
                                  case 21:
                                  case "end":
                                    return i.stop();
                                }
                            },
                            null,
                            null,
                            [[0, 14, 18, 21]]
                          );
                        });
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              null,
              this
            );
          },
          methods: {
            submit: function () {
              this.$refs.submitButtonRef.click();
            },
            clear: function () {
              this.element.clear();
            },
            destroy: function () {
              this.element.destroy();
            },
            focus: function () {
              console.warn(
                "This method will currently not work on iOS 13+ due to a system limitation."
              ),
                this.element.focus();
            },
            collapse: function () {
              this.element.collapse();
            },
            getElement: function () {
              this.element.getElement();
            },
            unmount: function () {
              this.element.unmount();
            },
            update: function (e) {
              this.element.update(e);
            },
            onChange: function (e) {
              this.$emit("element-change", e);
            },
            onReady: function (e) {
              this.$emit("element-ready", e);
            },
            onFocus: function (e) {
              this.$emit("element-focus", e);
            },
            onBlur: function (e) {
              this.$emit("element-blur", e);
            },
            onEscape: function (e) {
              this.$emit("element-escape", e);
            },
            onClick: function (e) {
              this.$emit("element-click", e);
            },
          },
        };
      const K = J;
      var X = function () {
          var e = this.$createElement,
            n = this._self._c || e;
          return n("div", [
            n(
              "form",
              { attrs: { id: "stripe-payment-element-form" } },
              [
                n("div", {
                  attrs: { id: "stripe-payment-element-mount-point" },
                }),
                this._v(" "),
                this._t("stripe-payment-element-errors", [
                  n("div", {
                    attrs: {
                      id: "stripe-payment-element-errors",
                      role: "alert",
                    },
                  }),
                ]),
                this._v(" "),
                n("button", {
                  ref: "submitButtonRef",
                  staticClass: "hide",
                  attrs: { type: "submit" },
                }),
              ],
              2
            ),
          ]);
        },
        Z = [];
      X._withStripped = !0;
      const ee = function (e) {
          e &&
            e("data-v-3329b3f8_0", {
              source:
                "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.hide[data-v-3329b3f8] {\n  display: none;\n}\n",
              map: {
                version: 3,
                sources: [
                  "/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue",
                ],
                names: [],
                mappings:
                  ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmQA;;;EAGA;AACA;EACA,aAAA;AACA",
                file: "Payment.vue",
                sourcesContent: [
                  "<template>\n  <div>\n    <form id=\"stripe-payment-element-form\">\n      <div id=\"stripe-payment-element-mount-point\" />\n      <slot name=\"stripe-payment-element-errors\">\n        <div\n          id=\"stripe-payment-element-errors\"\n          role=\"alert\"\n        />\n      </slot>\n      <button\n        ref=\"submitButtonRef\"\n        type=\"submit\"\n        class=\"hide\"\n      />\n    </form>\n  </div>\n</template>\n\n<script>\nimport { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';\n// import { isSecureHost } from '../utils';\nimport {\n  STRIPE_PARTNER_DETAILS,\n  // INSECURE_HOST_ERROR_MESSAGE,\n} from '../constants';\nconst ELEMENT_TYPE = 'payment';\nexport default {\n  props: {\n    pk: {\n      type: String,\n      required: true,\n    },\n    testMode: {\n      type: Boolean,\n      default: false,\n    },\n    elementsOptions: {\n      type: Object,\n      required: true,\n      default: () => ({}),\n    },\n    confirmParams: {\n      type: Object,\n      required: true,\n      default: () => ({}),\n    },\n    redirect: {\n      type: String,\n      default: 'always',\n    },\n    createOptions: {\n      type: Object,\n      default: () => ({}),\n    },\n    stripeAccount: {\n      type: String,\n      default: undefined,\n    },\n    apiVersion: {\n      type: String,\n      default: undefined,\n    },\n    locale: {\n      type: String,\n      default: 'auto',\n    },\n    disableAdvancedFraudDetection: {\n      type: Boolean,\n    },\n  },\n  data () {\n    return {\n      loading: false,\n      stripe: null,\n      elements: null,\n      element: null,\n    };\n  },\n  computed: {\n    form () {\n      return document.getElementById('stripe-payment-element-form');\n    },\n  },\n  async mounted () {\n    // FIXME: temporarily remove to avoid problems with remote non-production deployments\n    // if (!isSecureHost(this.testMode)) {\n    //   document.getElementById(\n    //     'stripe-payment-element-mount-point',\n    //   ).innerHTML = `<p style=\"color: red\">${INSECURE_HOST_ERROR_MESSAGE}</p>`;\n    //   return;\n    // }\n\n    if (this.disableAdvancedFraudDetection) {\n      loadStripe.setLoadParameters({ advancedFraudSignals: false });\n    }\n\n    const stripeOptions = {\n      stripeAccount: this.stripeAccount,\n      apiVersion: this.apiVersion,\n      locale: this.locale,\n    };\n\n    this.stripe = await loadStripe(this.pk, stripeOptions);\n    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);\n\n    this.elements = this.stripe.elements(this.elementsOptions);\n    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);\n    this.element.mount('#stripe-payment-element-mount-point');\n\n    this.element.on('change', event => {\n      var displayError = document.getElementById(\n        'stripe-payment-element-errors',\n      );\n      if (event.error) {\n        displayError.textContent = event.error.message;\n      } else {\n        displayError.textContent = '';\n      }\n      this.onChange(event);\n    });\n\n    this.element.on('blur', this.onBlur);\n    this.element.on('click', this.onClick);\n    this.element.on('escape', this.onEscape);\n    this.element.on('focus', this.onFocus);\n    this.element.on('ready', this.onReady);\n\n    this.form.addEventListener('submit', async event => {\n      try {\n        this.$emit('loading', true);\n        event.preventDefault();\n        const { error } = await this.stripe.confirmPayment({\n          elements: this.elements,\n          confirmParams: this.confirmParams,\n          redirect: this.redirect,\n        });\n        if (error) {\n          const errorElement = document.getElementById(\n            'stripe-payment-element-errors',\n          );\n          errorElement.textContent = error.message;\n          this.$emit('error', error);\n          return;\n        }\n      } catch (error) {\n        console.error(error);\n        this.$emit('error', error);\n      } finally {\n        this.$emit('loading', false);\n      }\n    });\n  },\n  methods: {\n    /**\n     * Triggers the submission of the form\n     * @return {void}\n     */\n    submit () {\n      this.$refs.submitButtonRef.click();\n    },\n    /**\n     * Clears the element\n     * @return {void}\n     */\n    clear () {\n      this.element.clear();\n    },\n    /**\n     * Destroys the element\n     * @return {void}\n     */\n    destroy () {\n      this.element.destroy();\n    },\n    /**\n     * Focuses on the element\n     * @return {void}\n     */\n    focus () {\n      console.warn(\n        'This method will currently not work on iOS 13+ due to a system limitation.',\n      );\n      this.element.focus();\n    },\n    /**\n     * Collapses the Payment Element into a row of payment method tabs\n     * @return {void}\n     */\n    collapse () {\n      this.element.collapse();\n    },\n    /**\n     * Retrieves a previously created element\n     */\n    getElement () {\n      this.element.getElement();\n    },\n    /**\n     * Unmounts the element\n     * @return {void}\n     */\n    unmount () {\n      this.element.unmount();\n    },\n    /**\n     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element\n     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.\n     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.\n     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.\n     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.\n     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.\n     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.\n     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.\n     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.\n     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.\n     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.\n     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.\n     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.\n     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.\n     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.\n     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.\n     */\n    update (opts) {\n      this.element.update(opts);\n    },\n    // events\n    onChange (e) {\n      this.$emit('element-change', e);\n    },\n    onReady (e) {\n      this.$emit('element-ready', e);\n    },\n    onFocus (e) {\n      this.$emit('element-focus', e);\n    },\n    onBlur (e) {\n      this.$emit('element-blur', e);\n    },\n    onEscape (e) {\n      this.$emit('element-escape', e);\n    },\n    onClick (e) {\n      this.$emit('element-click', e);\n    },\n  },\n};\n</script>\n\n<style scoped>\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.hide {\n  display: none;\n}\n</style>\n",
                ],
              },
              media: void 0,
            });
        },
        ne = L(
          { render: X, staticRenderFns: Z },
          ee,
          K,
          "data-v-3329b3f8",
          !1,
          void 0,
          !1,
          N,
          void 0,
          void 0
        );
      var te = {
        install: function (e, n) {
          var t, r, i, o, s, a, l;
          return m.async(function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  (t = n.pk),
                    (r = n.stripeAccount),
                    (i = n.apiVersion),
                    (o = n.locale),
                    (s = n.elementsOptions),
                    (a = window.Stripe(t, {
                      stripeAccount: r,
                      apiVersion: i,
                      locale: o,
                    })).registerAppInfo(c),
                    (l = a.elements(s)),
                    (e.prototype.$stripe = a),
                    (e.prototype.$stripeElements = l);
                case 6:
                case "end":
                  return u.stop();
              }
          });
        },
      };
      (n.StripeCheckout = P),
        (n.StripeElementCard = Q),
        (n.StripeElementPayment = ne),
        (n.StripeElementsPlugin = te),
        (n.StripePlugin = u);
    },
  },
]);
