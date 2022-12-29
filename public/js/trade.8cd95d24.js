(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["trade"],
  {
    "06bb": function (t, a, e) {
      var i = e("56d4");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var o = e("499e").default;
      o("6f6b9921", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0f65": function (t, a, e) {
      var i = e("24fb");
      (a = i(!1)),
        a.push([
          t.i,
          '[data-v-8c529f74]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.trade-performance-info-icon[data-v-8c529f74]{position:relative;top:3px;left:5px}.trade-performance-info-icon[data-v-8c529f74]:hover{cursor:pointer;opacity:.7}h1[data-v-8c529f74]{font-weight:900;line-height:55px}.list[data-v-8c529f74],h1[data-v-8c529f74]{font-size:22px;color:#fff}.list[data-v-8c529f74]{margin-top:0;margin-bottom:30px;line-height:22px;font-weight:500;text-align:center}.row-style[data-v-8c529f74]{border-radius:10px;border:1px solid transparent;background-origin:border-box;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #2c323f;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#12ab9e,#8d358b);font-weight:600;font-size:25px;line-height:30px;color:#fff;padding:0;margin:10px 20%}.row-style .bordered[data-v-8c529f74]{border-right:1px solid #00fcde}.status-tag-text[data-v-8c529f74]{width:-moz-fit-content!important;width:fit-content!important;margin-right:0!important;margin-left:0!important;padding-right:0!important;margin-top:0!important;white-space:nowrap!important;padding-top:18px!important}.status-tag-button[data-v-8c529f74]{margin-left:3vw!important}.status-tag-button[data-v-8c529f74]:hover{background:#f4f4ff54!important}.status-tag[data-v-8c529f74]{width:50%;border-radius:10px;font-weight:700;font-size:20px;line-height:17px;padding:10px;color:#fff;background:#000;border:1px solid #462564;margin:10px;cursor:pointer}.pending[data-v-8c529f74],.status-tag[data-v-8c529f74]:hover{background:transparent}.pending[data-v-8c529f74]{border-color:transparent;cursor:default;padding-top:2px}.crypto-tag[data-v-8c529f74]{display:flex;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;height:35px;font-weight:500;border-radius:22px;font-size:20px;line-height:20px}.crypto-tag img[data-v-8c529f74]{margin-right:10px;width:21px;height:21px}.crypto-tag .amount[data-v-8c529f74]{padding-right:5px}.label[data-v-8c529f74]{color:#c1c1c1}.m-value[data-v-8c529f74]{font-weight:500;font-size:18px;line-height:22px}.status-tag-mobile[data-v-8c529f74]{width:195px;margin:auto}.your-trades[data-v-8c529f74]{font-weight:500;font-size:20px;line-height:20px;color:#fff}.your-trades a[data-v-8c529f74]{color:rgba(0,252,222,.6)!important}.trades-table[data-v-8c529f74]{min-width:760px;max-width:1200px;width:100%;margin:0 auto}.trades-table .row[data-v-8c529f74],.trades-table header[data-v-8c529f74]{display:flex}.trades-table .col[data-v-8c529f74]{flex:1;margin-left:30px;align-items:center;justify-content:left;display:flex}',
          "",
        ]),
        (t.exports = a);
    },
    "0fe4": function (t, a, e) {
      "use strict";
      var i = function () {
          var t = this,
            a = t._self._c;
          return a(
            "b-modal",
            {
              model: {
                value: t.isComponentModalActive,
                callback: function (a) {
                  t.isComponentModalActive = a;
                },
                expression: "isComponentModalActive",
              },
            },
            [
              a("div", { staticClass: "confirmation-modal" }, [
                a("div", { staticClass: "columns is-mobile" }, [
                  a("div", { staticClass: "column is-four-fifths" }, [
                    a("p", [t._v(t._s(t.title))]),
                  ]),
                  a("button", {
                    staticClass: "delete",
                    attrs: { type: "button" },
                    on: {
                      click: function (a) {
                        return t.$emit("close");
                      },
                    },
                  }),
                ]),
                a("div", { staticClass: "main-notification" }, [
                  a("div", { staticClass: "c-notification" }, [
                    t.notificationTitle
                      ? a("p", { staticClass: "c-notification-title" }, [
                          t._v(" " + t._s(t.notificationTitle) + " "),
                        ])
                      : t._e(),
                    t.notificationSubTitle
                      ? a("p", { staticClass: "c-notification-subtitle" }, [
                          t._v(" " + t._s(t.notificationSubTitle) + " "),
                        ])
                      : t._e(),
                    t.notificationContent
                      ? a("p", { staticClass: "c-notification-content" }, [
                          t._v(" " + t._s(t.notificationContent) + " "),
                        ])
                      : t._e(),
                    t.notificationDisabledContent
                      ? a(
                          "p",
                          { staticClass: "c-notification-disabled-content" },
                          [
                            t._v(
                              " " + t._s(t.notificationDisabledContent) + " "
                            ),
                          ]
                        )
                      : t._e(),
                  ]),
                ]),
                t.disableButtons
                  ? t._e()
                  : a(
                      "button",
                      {
                        staticClass: "action-button",
                        on: {
                          click: function (a) {
                            return t.onSubmitAction();
                          },
                        },
                      },
                      [t._v(" Submit ")]
                    ),
                t.disableButtons
                  ? t._e()
                  : a(
                      "button",
                      {
                        staticClass: "action-button",
                        on: {
                          click: function (a) {
                            return t.closeModal();
                          },
                        },
                      },
                      [t._v(" Dismiss ")]
                    ),
              ]),
            ]
          );
        },
        o = [],
        s = {
          name: "TradeActionConfirmationModal",
          components: {},
          props: {
            title: { type: String, default: "" },
            notificationTitle: { type: String, default: "" },
            notificationSubTitle: { type: String, default: "" },
            notificationContent: { type: String, default: "" },
            notificationDisabledContent: { type: String, default: "" },
            isComponentModalActive: { type: Boolean, default: !1 },
            type: { type: String, default: "", required: !0 },
            disableButtons: { type: Boolean, default: !1 },
          },
          methods: {
            onSubmitAction() {
              this.$emit("onSubmitAction", this.type);
            },
            closeModal() {
              this.$emit("close");
            },
          },
        },
        n = s,
        r = (e("a2f8"), e("2877")),
        l = Object(r["a"])(n, i, o, !1, null, "35a8d611", null);
      a["a"] = l.exports;
    },
    "17bc": function (t, a, e) {
      var i = e("0f65");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var o = e("499e").default;
      o("08da43a2", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "236e": function (t, a, e) {
      "use strict";
      e("5b92");
    },
    "24a2": function (t, a, e) {
      var i = e("92a7");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var o = e("499e").default;
      o("4206a500", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    3259: function (t, a, e) {
      var i = e("24fb");
      (a = i(!1)),
        a.push([
          t.i,
          ':root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.trades-table .flex-icon i{display:flex;align-items:center;justify-content:center}.title-tooltip{position:relative;top:3px}',
          "",
        ]),
        (t.exports = a);
    },
    "37a4": function (t, a, e) {
      "use strict";
      e("17bc");
    },
    "3a63": function (t, a, e) {
      "use strict";
      e("dcd5");
    },
    "3c8a": function (t, a, e) {
      "use strict";
      var i = function () {
          var t = this,
            a = t._self._c;
          return a(
            "b-modal",
            {
              attrs: { "can-cancel": ["x"] },
              model: {
                value: t.modalActive,
                callback: function (a) {
                  t.modalActive = a;
                },
                expression: "modalActive",
              },
            },
            [
              a("div", { staticClass: "trade-info-modal" }, [
                a("button", {
                  staticClass: "delete",
                  attrs: { type: "button" },
                  on: {
                    click: function (a) {
                      return t.$emit("close");
                    },
                  },
                }),
                a("div", { staticClass: "trade-info-modal has-text-light" }, [
                  a("div", { staticClass: "is-size-5" }, [
                    t._v(
                      "CivTrade ID " +
                        t._s(t.mergedTrade.orderId) +
                        "v" +
                        t._s(t.mergedTrade.version) +
                        " Balance"
                    ),
                  ]),
                  a("hr", { staticClass: "has-background-dark mt-0 mb-2" }),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pb-0" }, [
                      t._v(" " + t._s(t.mergedTrade.tokenSymbol0) + " "),
                    ]),
                    a(
                      "div",
                      { staticClass: "column is-half has-text-right pb-0" },
                      [t._v(" " + t._s(t.mergedTrade.currentAmount0) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" " + t._s(t.mergedTrade.tokenSymbol1) + " "),
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.currentAmount1) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" Fee income "),
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.feePercent) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0" }, [
                      t._v(" % filled "),
                    ]),
                    a(
                      "div",
                      { staticClass: "column is-half has-text-right pt-0" },
                      [t._v(" " + t._s(t.mergedTrade.percentFilled) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "is-size-5" }, [
                    t._v("Price of " + t._s(t.mergedTrade.pairName)),
                  ]),
                  a("hr", { staticClass: "has-background-dark mt-0 mb-2" }),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pb-0" }, [
                      t._v(" Target "),
                    ]),
                    a(
                      "div",
                      { staticClass: "column is-half has-text-right pb-0" },
                      [t._v(" " + t._s(t.mergedTrade.targetPrice) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" Current "),
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.actualPrice) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0" }, [
                      t._v(" Initial "),
                    ]),
                    a(
                      "div",
                      { staticClass: "column is-half has-text-right pt-0" },
                      [t._v(" " + t._s(t.mergedTrade.initialPrice) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "is-size-5" }, [
                    t._v("Price of " + t._s(t.mergedTrade.pairInverted)),
                  ]),
                  a("hr", { staticClass: "has-background-dark mt-0 mb-2" }),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pb-0" }, [
                      t._v(" Target "),
                    ]),
                    a(
                      "div",
                      { staticClass: "column is-half has-text-right pb-0" },
                      [t._v(" " + t._s(t.mergedTrade.invertedPrice) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" Current "),
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.actualInverted) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0" }, [
                      t._v(" Initial "),
                    ]),
                    a(
                      "div",
                      { staticClass: "column is-half has-text-right pt-0" },
                      [t._v(" " + t._s(t.mergedTrade.initialInverted) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "is-size-5" }, [
                    t._v("CivTrade Opened"),
                  ]),
                  a("hr", { staticClass: "has-background-dark mt-0 mb-2" }),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pb-0" }, [
                      t._v(" Type "),
                    ]),
                    a(
                      "div",
                      { staticClass: "column is-half has-text-right pb-0" },
                      [t._v(" " + t._s(t.mergedTrade.tradeType) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" On "),
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.dateOpenedDay) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" At "),
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.dateOpenedTime) + " ")]
                    ),
                  ]),
                  a("div", { staticClass: "columns pl-4 is-mobile" }, [
                    a("div", { staticClass: "column is-half pt-0" }, [
                      t._v(" Duration "),
                    ]),
                    a(
                      "div",
                      { staticClass: "column is-half has-text-right pt-0" },
                      [t._v(" " + t._s(t.mergedTrade.elapsed) + " ")]
                    ),
                  ]),
                ]),
              ]),
            ]
          );
        },
        o = [],
        s = e("901e"),
        n = e.n(s),
        r = e("f98f"),
        l = e("9841"),
        d = {
          name: "TradePerformanceModal",
          props: ["trade", "isComponentModalActive"],
          components: {},
          watch: {
            isComponentModalActive: {
              handler: async function () {
                if (this.isComponentModalActive)
                  if (void 0 === this.trade.example) {
                    const a = this.$buefy.loading.open();
                    try {
                      const t = await new r["a"]().getAddress(),
                        e = await new l["a"]().getTradeBalance(
                          t,
                          this.trade.orderId,
                          this.trade.version
                        );
                      (this.mergedTrade = { ...this.trade, ...e }),
                        this.$log.debug(e),
                        this.$log.debug(this.mergedTrade);
                    } catch (t) {
                      (this.isApproved = !1),
                        this.$log.error(t),
                        this.$buefy.toast.open({
                          duration: 5e3,
                          message:
                            "An error occurred while parsing trade info. Please try again later",
                          position: "is-bottom",
                          type: "is-danger",
                        });
                    } finally {
                      a.close();
                    }
                  } else this.mergedTrade = this.trade;
                else this.$emit("close");
                this.modalActive = this.isComponentModalActive;
              },
            },
          },
          data() {
            return { modalActive: !1, mergedTrade: {} };
          },
          methods: {
            getPosition() {
              return window.innerWidth <= 760 ? "is-top" : "is-right";
            },
            getCurrentBalanceForToken0(t) {
              const a = new n.a(10).pow(parseInt(t.token0Decimals));
              let e = new n.a(t.currentAmount0)
                .dividedBy(a)
                .decimalPlaces(parseInt(t.token0Decimals));
              (!e.isNaN() && e.isFinite()) || (e = 0);
              try {
                const t = e.toString(10).match(/^-?\d+(?:\.\d{0,6})?/);
                return null !== t && t.length > 0 ? t[0] : 0;
              } catch (i) {
                return this.$log.error(i), "N/A";
              }
            },
            getCurrentBalanceForToken1(t) {
              const a = new n.a(10).pow(parseInt(t.token1Decimals));
              let e = new n.a(t.currentAmount1)
                .dividedBy(a)
                .decimalPlaces(parseInt(t.token1Decimals));
              (!e.isNaN() && e.isFinite()) || (e = 0);
              try {
                const t = e.toString(10).match(/^-?\d+(?:\.\d{0,6})?/);
                return null !== t && t.length > 0 ? t[0] : 0;
              } catch (i) {
                return this.$log.error(i), "N/A";
              }
            },
          },
        },
        c = d,
        p = (e("236e"), e("2877")),
        f = Object(p["a"])(c, i, o, !1, null, null, null);
      a["a"] = f.exports;
    },
    4461: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = function () {
          var t = this,
            a = t._self._c;
          return a(
            "div",
            [
              a(
                "div",
                { staticClass: "trades-performance" },
                [
                  a("trades-performance-mobile", {
                    staticClass: "is-hidden-tablet",
                    attrs: { trades: t.trades },
                    on: {
                      onSubmitAction: t.onSubmitAction,
                      onSubmitOrOpenClick: t.onSubmitOrOpenClick,
                      onPartFilledClick: t.onPartFilledClick,
                    },
                  }),
                  a("trades-performance-tablet", {
                    staticClass: "is-hidden-mobile",
                    attrs: { trades: t.trades },
                    on: {
                      onSubmitAction: t.onSubmitAction,
                      onSubmitOrOpenClick: t.onSubmitOrOpenClick,
                      onPartFilledClick: t.onPartFilledClick,
                    },
                  }),
                ],
                1
              ),
              a("trade-action-confirmation-modal", {
                attrs: {
                  type: t.actionType,
                  "is-component-modal-active": t.confirmationModal,
                  title: t.confirmationTitle,
                  "notification-content": t.confirmationContent,
                  "disable-buttons": t.disableButtons,
                },
                on: {
                  onSubmitAction: t.onSubmitAction,
                  close: function (a) {
                    t.confirmationModal = !1;
                  },
                },
              }),
            ],
            1
          );
        },
        o = [],
        s =
          (e("14d9"),
          function () {
            var t = this,
              a = t._self._c;
            return a(
              "div",
              [
                a("div", { staticClass: "list" }, [
                  a("div", { staticClass: "columns is-mobile mb-0 pb-0" }, [
                    a("div", { staticClass: "column is-full mb-4 pb-0" }, [
                      a(
                        "p",
                        [
                          t._v("Your CivTrades "),
                          a(
                            "b-tooltip",
                            {
                              staticClass: "title-tooltip",
                              attrs: { position: "is-bottom" },
                              scopedSlots: t._u([
                                {
                                  key: "content",
                                  fn: function () {
                                    return [
                                      t._v(" Showing Target trades only."),
                                      a("br"),
                                      t._v("The blockchain will show your "),
                                      a("br"),
                                      t._v("new positions after few minutes "),
                                    ];
                                  },
                                  proxy: !0,
                                },
                              ]),
                            },
                            [a("b-icon", { attrs: { icon: "information" } })],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  a(
                    "div",
                    { staticClass: "columns mt-0 mb-0" },
                    t._l(t.trades, function (e, i) {
                      return a(
                        "div",
                        {
                          key: i,
                          staticClass:
                            "column is-half-fullhd is-offset-one-quarter-fullhd is-half-widescreen is-offset-one-quarter-widescreen mt-0 pt-0",
                        },
                        [
                          a("div", { staticClass: "row-style" }, [
                            a("div", { staticClass: "column is-3-desktop" }, [
                              a(
                                "div",
                                { staticClass: "m-value" },
                                [
                                  isNaN(parseFloat(e.amount0))
                                    ? a("span", [t._v("?")])
                                    : a("span", [t._v(t._s(e.amount0))]),
                                  a("img", {
                                    attrs: {
                                      src: t.getImage(e.tokenSymbol0),
                                      alt: e.tokenSymbol0,
                                    },
                                  }),
                                  t._v("   " + t._s(e.tokenSymbol0) + "   "),
                                  a("b-icon", {
                                    staticClass: "flex-icon",
                                    attrs: {
                                      icon: "chevron-right",
                                      size: "is-small",
                                      type: "is-light",
                                    },
                                  }),
                                ],
                                1
                              ),
                              a(
                                "div",
                                { staticClass: "m-value" },
                                [
                                  a("b-icon", {
                                    staticClass: "flex-icon",
                                    attrs: {
                                      icon: "chevron-right",
                                      size: "is-small",
                                      type: "is-light",
                                    },
                                  }),
                                  isNaN(parseFloat(e.amount1))
                                    ? a("span", [t._v("?")])
                                    : a("span", [t._v("  " + t._s(e.amount1))]),
                                  a("img", {
                                    attrs: {
                                      src: t.getImage(e.tokenSymbol1),
                                      alt: e.tokenSymbol1,
                                    },
                                  }),
                                  t._v("   " + t._s(e.tokenSymbol1) + " "),
                                  a(
                                    "span",
                                    {
                                      staticClass:
                                        "trade-performance-info-icon",
                                      on: {
                                        click: function (a) {
                                          (t.selectedTrade = e),
                                            (t.tradePerformanceModalOpen = !0);
                                        },
                                      },
                                    },
                                    [
                                      a(
                                        "svg",
                                        {
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "xmlns:xlink":
                                              "http://www.w3.org/1999/xlink",
                                            width: "25",
                                            height: "25",
                                            viewBox: "0 0 50 50",
                                          },
                                        },
                                        [
                                          a("image", {
                                            attrs: {
                                              width: "50",
                                              height: "50",
                                              "xlink:href":
                                                "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAACMElEQVRIib2Wu2uUQRTFf5soKgaJVoqyRBA3KoJpBEkjBDQP2OB/IGhna6cGrO3FwsJASKpYiCIRBDHINgGX4AMr4yLYROIjG98cGTifXNbdTdZNvDAw33fPnDN3Zu6dyUliFTsCjACHgALQBSwDr4CXwF3gRVOKJNKgnZL0QGuzGePrctWLpBO4CZwN/x4BD4EK8AHoBvLAAHAy4G4B54FfzSLpljQX5j4h6WiTaLF/IoyZM88fTAR3SiobWJU0sgp5bUv4FY8vm+8vkXEDVtYw+2ZRZULjtSL9IdzBfxTI2lDg6o8iJf+calMga1PmK2UihaCcXyeRfOAsdABFH7QnPqL4GF5rkl57fMwngW11/BXzJSsmkT5/3A+grcAO50xmu0P/CnDOWf8F2ALsqhHK+PqSSI8/XgdADvgGJP80cMclZMxRFF1aZoHjwDP7LwSOjK8nrd+81240rOm0pIqknH2XJJ1xv0vSpKRZSTslfbV/wP5j5hj19/wmzyjZ9jCLT8ASkPw/gNvAW/cT/p2Xc8lLdQN477GpoJYD33IiWQBOAPuDyF7ggPubgX3Ad/cxNtvLEvAYeAN8BmYCJtlCh1WTDQWR68BFF7oxb/AicNn+dLKuun/ae/LT+7NYw/c0rV3vBudJ73/L+PWuXYONahehClfbrMLVRlWYOvfJcIsCw0Gg4X3CRt2Mrd7xKRc+tnvHx9bKayXhWnqt1Fr27joMHKzz7roHPG84GvgNfW8f3QDXdzUAAAAASUVORK5CYII=",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            a("div", { staticClass: "column is-3-desktop" }, [
                              a(
                                "div",
                                {
                                  staticClass:
                                    "status-tag status-tag-mobile pending",
                                },
                                [
                                  a("span", [t._v(t._s(e.status) + " ")]),
                                  "Open" === e.status
                                    ? a(
                                        "span",
                                        {
                                          staticClass:
                                            "status-tag status-tag-mobile mt-0 ml-3",
                                          on: {
                                            click: function (a) {
                                              return t.onSubmitOrOpenClick(e);
                                            },
                                          },
                                        },
                                        [t._v(" Close ")]
                                      )
                                    : t._e(),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      );
                    }),
                    0
                  ),
                  void 0 !== t.trades && 0 === t.trades.length
                    ? a(
                        "div",
                        {
                          staticClass:
                            "column is-half-fullhd is-offset-one-quarter-fullhd is-half-widescreen is-offset-one-quarter-widescreen mt-0 pt-0",
                        },
                        [
                          a("div", { staticClass: "row-style" }, [
                            a("div", { staticClass: "column is-3-desktop" }, [
                              a(
                                "div",
                                { staticClass: "m-value" },
                                [
                                  t._v(" 30,000 "),
                                  a("img", {
                                    attrs: { src: e("dbd0"), alt: "Ethereum" },
                                  }),
                                  t._v("  EXAMPLE "),
                                  a("b-icon", {
                                    staticClass: "flex-icon",
                                    attrs: {
                                      icon: "chevron-right",
                                      size: "is-small",
                                      type: "is-light",
                                    },
                                  }),
                                  t._v(" 340,000 "),
                                  a("img", {
                                    attrs: { src: e("41c9"), alt: "CIV" },
                                  }),
                                  t._v("  CIV "),
                                  a(
                                    "span",
                                    {
                                      staticClass:
                                        "trade-performance-info-icon",
                                      on: {
                                        click: function (a) {
                                          (t.selectedTrade = t.exampleTrade),
                                            (t.tradePerformanceModalOpen = !0);
                                        },
                                      },
                                    },
                                    [
                                      a(
                                        "svg",
                                        {
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "xmlns:xlink":
                                              "http://www.w3.org/1999/xlink",
                                            width: "25",
                                            height: "25",
                                            viewBox: "0 0 50 50",
                                          },
                                        },
                                        [
                                          a("image", {
                                            attrs: {
                                              width: "50",
                                              height: "50",
                                              "xlink:href":
                                                "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAACMElEQVRIib2Wu2uUQRTFf5soKgaJVoqyRBA3KoJpBEkjBDQP2OB/IGhna6cGrO3FwsJASKpYiCIRBDHINgGX4AMr4yLYROIjG98cGTifXNbdTdZNvDAw33fPnDN3Zu6dyUliFTsCjACHgALQBSwDr4CXwF3gRVOKJNKgnZL0QGuzGePrctWLpBO4CZwN/x4BD4EK8AHoBvLAAHAy4G4B54FfzSLpljQX5j4h6WiTaLF/IoyZM88fTAR3SiobWJU0sgp5bUv4FY8vm+8vkXEDVtYw+2ZRZULjtSL9IdzBfxTI2lDg6o8iJf+calMga1PmK2UihaCcXyeRfOAsdABFH7QnPqL4GF5rkl57fMwngW11/BXzJSsmkT5/3A+grcAO50xmu0P/CnDOWf8F2ALsqhHK+PqSSI8/XgdADvgGJP80cMclZMxRFF1aZoHjwDP7LwSOjK8nrd+81240rOm0pIqknH2XJJ1xv0vSpKRZSTslfbV/wP5j5hj19/wmzyjZ9jCLT8ASkPw/gNvAW/cT/p2Xc8lLdQN477GpoJYD33IiWQBOAPuDyF7ggPubgX3Ad/cxNtvLEvAYeAN8BmYCJtlCh1WTDQWR68BFF7oxb/AicNn+dLKuun/ae/LT+7NYw/c0rV3vBudJ73/L+PWuXYONahehClfbrMLVRlWYOvfJcIsCw0Gg4X3CRt2Mrd7xKRc+tnvHx9bKayXhWnqt1Fr27joMHKzz7roHPG84GvgNfW8f3QDXdzUAAAAASUVORK5CYII=",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              a("div", { staticClass: "column is-3-desktop" }, [
                                a(
                                  "div",
                                  {
                                    staticClass:
                                      "status-tag status-tag-mobile pending",
                                  },
                                  [t._v("Filled")]
                                ),
                                a("div", { staticClass: "columns is-mobile" }, [
                                  a(
                                    "div",
                                    { staticClass: "column is-8-mobile" },
                                    [
                                      a(
                                        "div",
                                        {
                                          staticClass:
                                            "status-tag status-tag-mobile mt-2",
                                          on: {
                                            click: function (a) {
                                              return t.onSubmitAction();
                                            },
                                          },
                                        },
                                        [t._v("Withdraw")]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      )
                    : t._e(),
                ]),
                void 0 !== t.trades
                  ? a(
                      "div",
                      { staticClass: "your-trades" },
                      [
                        t._v(" Enter "),
                        a("router-link", { attrs: { to: { name: "Trade" } } }, [
                          t._v("New CivTrade"),
                        ]),
                      ],
                      1
                    )
                  : t._e(),
                a("trade-performance-modal", {
                  attrs: {
                    trade: t.selectedTrade,
                    "is-component-modal-active": t.tradePerformanceModalOpen,
                  },
                  on: {
                    close: function (a) {
                      t.tradePerformanceModalOpen = !1;
                    },
                  },
                }),
              ],
              1
            );
          }),
        n = [],
        r = function () {
          var t = this,
            a = t._self._c;
          return a("section", [
            "action" === t.type
              ? a(
                  "section",
                  [
                    "Open" === t.trade.status
                      ? a(
                          "b-tooltip",
                          {
                            attrs: {
                              label:
                                "Immediately receive the current balance of tokens in your position",
                              position: t.getPosition(),
                            },
                          },
                          [a("b-icon", { attrs: { icon: "information" } })],
                          1
                        )
                      : t._e(),
                  ],
                  1
                )
              : "status" === t.type
              ? a(
                  "section",
                  [
                    "Open" === t.trade.status && "0" === t.trade.currentAmount1
                      ? a(
                          "b-tooltip",
                          {
                            attrs: {
                              label:
                                "CivTrade actively in the market & earning fees",
                              position: t.getPosition(),
                            },
                          },
                          [a("b-icon", { attrs: { icon: "information" } })],
                          1
                        )
                      : t._e(),
                    "Open" === t.trade.status && "0" !== t.trade.currentAmount1
                      ? a(
                          "b-tooltip",
                          {
                            attrs: {
                              label:
                                "CivTrade actively in the market & earning fees",
                              position: t.getPosition(),
                            },
                          },
                          [a("b-icon", { attrs: { icon: "information" } })],
                          1
                        )
                      : t._e(),
                    "Completed" === t.trade.status
                      ? a(
                          "b-tooltip",
                          {
                            attrs: {
                              label:
                                "CivTrade closed & tokens sent to your wallet",
                              position: t.getPosition(),
                            },
                          },
                          [a("b-icon", { attrs: { icon: "information" } })],
                          1
                        )
                      : t._e(),
                    "Closed" === t.trade.status
                      ? a(
                          "b-tooltip",
                          {
                            attrs: {
                              label:
                                "CivTrade closed & tokens sent to your wallet",
                              position: t.getPosition(),
                            },
                          },
                          [a("b-icon", { attrs: { icon: "information" } })],
                          1
                        )
                      : t._e(),
                    "Filled" === t.trade.status
                      ? a(
                          "b-tooltip",
                          {
                            attrs: {
                              label:
                                "CivTrade auto-completed & tokens sent to your wallet",
                              position: t.getPosition(),
                            },
                          },
                          [a("b-icon", { attrs: { icon: "information" } })],
                          1
                        )
                      : t._e(),
                    "Error" === t.trade.status
                      ? a(
                          "b-tooltip",
                          {
                            attrs: {
                              label:
                                "Attention: error, please email civ@civfund.org for help",
                              position: t.getPosition(),
                            },
                          },
                          [a("b-icon", { attrs: { icon: "information" } })],
                          1
                        )
                      : t._e(),
                    "Undefined" === t.trade.status
                      ? a(
                          "b-tooltip",
                          {
                            attrs: {
                              label:
                                "No known status, please email civ@civfund.org for help",
                              position: t.getPosition(),
                            },
                          },
                          [a("b-icon", { attrs: { icon: "information" } })],
                          1
                        )
                      : t._e(),
                  ],
                  1
                )
              : t._e(),
          ]);
        },
        l = [],
        d = {
          name: "TradesInfoTooltip",
          props: ["trade", "type"],
          methods: {
            getPosition() {
              return window.innerWidth <= 760 ? "is-left" : "is-right";
            },
          },
        },
        c = d,
        p = e("2877"),
        f = Object(p["a"])(c, r, l, !1, null, "d0f8b358", null),
        u = f.exports,
        m = e("3c8a"),
        g = {
          name: "TradesPerformanceMobile",
          components: { TradePerformanceModal: m["a"] },
          props: ["trades"],
          data() {
            return {
              selectedTrade: [],
              tradePerformanceModalOpen: !1,
              exampleTrade: {
                example: !0,
                orderId: 18809,
                pairName: "EXAMPLE per CIV",
                pairInverted: "CIV per EXAMPLE",
                amount0: 3e4,
                amount1: 34e4,
                tokenName0: "EXAMPLE",
                tokenName1: "Civilization",
                status: "Filled",
                currentAmount1: "0",
                token0Decimals: 18,
                token1Decimals: 18,
                currentAmount0: 100,
                dateOpenedDay: "18 DEC 2021",
                dateOpenedTime: "22:27:48 UTC",
                elapsed: "22 days, 10h:41m,25s",
                actualPrice: 1.09,
                initialPrice: 1.11,
                targetPrice: 1.22,
                invertedPrice: 0.25,
                actualInverted: 0.19,
                initialInverted: 0.2,
                percentFilled: "30%",
              },
            };
          },
          methods: {
            onSubmitAction() {
              this.$emit("onSubmitAction", this.type);
            },
            getImage(t) {
              let a = [],
                e = JSON.parse(localStorage.getItem("allTokensList"));
              return (
                e &&
                  (a = e.filter(
                    (a) => a.symbol.toLowerCase() === t.toLowerCase()
                  )),
                void 0 !== a[0]
                  ? a[0].logoURI
                  : "data:image/png;base64,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"
              );
            },
            onSubmitOrOpenClick(t) {
              this.$emit("onSubmitOrOpenClick", t);
            },
            onPartFilledClick(t) {
              this.$emit("onPartFilledClick", t);
            },
          },
        },
        v = g,
        h = (e("6a3b"), Object(p["a"])(v, s, n, !1, null, "f13a4f8e", null)),
        b = h.exports,
        x = function () {
          var t = this,
            a = t._self._c;
          return a(
            "div",
            [
              a(
                "h1",
                [
                  t._v(" Your CivTrades "),
                  a(
                    "b-tooltip",
                    {
                      staticClass: "title-tooltip",
                      attrs: {
                        label:
                          "Showing Target trades only. The blockchain will show your new positions after few minutes",
                        position: "is-bottom",
                      },
                    },
                    [a("b-icon", { attrs: { icon: "information" } })],
                    1
                  ),
                ],
                1
              ),
              a("div", { staticClass: "list" }, [
                a(
                  "div",
                  { staticClass: "trades-table" },
                  [
                    t._l(t.trades, function (e, i) {
                      return a(
                        "div",
                        { key: i, staticClass: "row row-style" },
                        [
                          a("div", { staticClass: "col" }, [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "crypto-tag" }, [
                                isNaN(parseFloat(e.amount0))
                                  ? a("span", { staticClass: "amount" }, [
                                      t._v("?"),
                                    ])
                                  : a("span", { staticClass: "amount" }, [
                                      t._v(t._s(e.amount0)),
                                    ]),
                                a("img", {
                                  attrs: {
                                    src: t.getImage(e.tokenSymbol0),
                                    alt: e.tokenSymbol0,
                                  },
                                }),
                                t._v(" " + t._s(e.tokenSymbol0) + " "),
                              ]),
                            ]),
                            a(
                              "div",
                              { staticClass: "row" },
                              [
                                a("b-icon", {
                                  staticClass: "flex-icon",
                                  attrs: {
                                    icon: "chevron-right",
                                    size: "is-large",
                                    type: "is-light",
                                  },
                                }),
                              ],
                              1
                            ),
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "crypto-tag" }, [
                                isNaN(parseFloat(e.amount1))
                                  ? a("span", { staticClass: "amount" }, [
                                      t._v("?"),
                                    ])
                                  : a("span", { staticClass: "amount" }, [
                                      t._v(t._s(e.amount1)),
                                    ]),
                                a("img", {
                                  attrs: {
                                    src: t.getImage(e.tokenSymbol1),
                                    alt: e.tokenSymbol1,
                                  },
                                }),
                                t._v(" " + t._s(e.tokenSymbol1) + "  "),
                              ]),
                            ]),
                            a(
                              "span",
                              {
                                staticClass: "trade-performance-info-icon",
                                on: {
                                  click: function (a) {
                                    (t.selectedTrade = e),
                                      (t.tradePerformanceModalOpen = !0);
                                  },
                                },
                              },
                              [
                                a(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink":
                                        "http://www.w3.org/1999/xlink",
                                      width: "25",
                                      height: "25",
                                      viewBox: "0 0 50 50",
                                    },
                                  },
                                  [
                                    a("image", {
                                      attrs: {
                                        width: "50",
                                        height: "50",
                                        "xlink:href":
                                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAACMElEQVRIib2Wu2uUQRTFf5soKgaJVoqyRBA3KoJpBEkjBDQP2OB/IGhna6cGrO3FwsJASKpYiCIRBDHINgGX4AMr4yLYROIjG98cGTifXNbdTdZNvDAw33fPnDN3Zu6dyUliFTsCjACHgALQBSwDr4CXwF3gRVOKJNKgnZL0QGuzGePrctWLpBO4CZwN/x4BD4EK8AHoBvLAAHAy4G4B54FfzSLpljQX5j4h6WiTaLF/IoyZM88fTAR3SiobWJU0sgp5bUv4FY8vm+8vkXEDVtYw+2ZRZULjtSL9IdzBfxTI2lDg6o8iJf+calMga1PmK2UihaCcXyeRfOAsdABFH7QnPqL4GF5rkl57fMwngW11/BXzJSsmkT5/3A+grcAO50xmu0P/CnDOWf8F2ALsqhHK+PqSSI8/XgdADvgGJP80cMclZMxRFF1aZoHjwDP7LwSOjK8nrd+81240rOm0pIqknH2XJJ1xv0vSpKRZSTslfbV/wP5j5hj19/wmzyjZ9jCLT8ASkPw/gNvAW/cT/p2Xc8lLdQN477GpoJYD33IiWQBOAPuDyF7ggPubgX3Ad/cxNtvLEvAYeAN8BmYCJtlCh1WTDQWR68BFF7oxb/AicNn+dLKuun/ae/LT+7NYw/c0rV3vBudJ73/L+PWuXYONahehClfbrMLVRlWYOvfJcIsCw0Gg4X3CRt2Mrd7xKRc+tnvHx9bKayXhWnqt1Fr27joMHKzz7roHPG84GvgNfW8f3QDXdzUAAAAASUVORK5CYII=",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                          a("div", { staticClass: "col" }, [
                            a(
                              "div",
                              {
                                staticClass:
                                  "status-tag pending status-tag-text",
                              },
                              [t._v(" " + t._s(e.status) + " ")]
                            ),
                            "Open" === e.status
                              ? a(
                                  "div",
                                  {
                                    staticClass: "status-tag status-tag-button",
                                    on: {
                                      click: function (a) {
                                        return t.onSubmitOrOpenClick(e);
                                      },
                                    },
                                  },
                                  [t._v(" Close ")]
                                )
                              : t._e(),
                          ]),
                        ]
                      );
                    }),
                    void 0 !== t.trades && 0 === t.trades.length
                      ? a("div", { staticClass: "row row-style" }, [
                          a("div", { staticClass: "col" }, [
                            t._m(0),
                            a(
                              "div",
                              { staticClass: "row" },
                              [
                                a("b-icon", {
                                  staticClass: "flex-icon",
                                  attrs: {
                                    icon: "chevron-right",
                                    size: "is-large",
                                    type: "is-light",
                                  },
                                }),
                              ],
                              1
                            ),
                            t._m(1),
                            a(
                              "span",
                              {
                                staticClass: "trade-performance-info-icon",
                                on: {
                                  click: function (a) {
                                    (t.selectedTrade = t.exampleTrade),
                                      (t.tradePerformanceModalOpen = !0);
                                  },
                                },
                              },
                              [
                                a(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink":
                                        "http://www.w3.org/1999/xlink",
                                      width: "25",
                                      height: "25",
                                      viewBox: "0 0 50 50",
                                    },
                                  },
                                  [
                                    a("image", {
                                      attrs: {
                                        width: "50",
                                        height: "50",
                                        "xlink:href":
                                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAACMElEQVRIib2Wu2uUQRTFf5soKgaJVoqyRBA3KoJpBEkjBDQP2OB/IGhna6cGrO3FwsJASKpYiCIRBDHINgGX4AMr4yLYROIjG98cGTifXNbdTdZNvDAw33fPnDN3Zu6dyUliFTsCjACHgALQBSwDr4CXwF3gRVOKJNKgnZL0QGuzGePrctWLpBO4CZwN/x4BD4EK8AHoBvLAAHAy4G4B54FfzSLpljQX5j4h6WiTaLF/IoyZM88fTAR3SiobWJU0sgp5bUv4FY8vm+8vkXEDVtYw+2ZRZULjtSL9IdzBfxTI2lDg6o8iJf+calMga1PmK2UihaCcXyeRfOAsdABFH7QnPqL4GF5rkl57fMwngW11/BXzJSsmkT5/3A+grcAO50xmu0P/CnDOWf8F2ALsqhHK+PqSSI8/XgdADvgGJP80cMclZMxRFF1aZoHjwDP7LwSOjK8nrd+81240rOm0pIqknH2XJJ1xv0vSpKRZSTslfbV/wP5j5hj19/wmzyjZ9jCLT8ASkPw/gNvAW/cT/p2Xc8lLdQN477GpoJYD33IiWQBOAPuDyF7ggPubgX3Ad/cxNtvLEvAYeAN8BmYCJtlCh1WTDQWR68BFF7oxb/AicNn+dLKuun/ae/LT+7NYw/c0rV3vBudJ73/L+PWuXYONahehClfbrMLVRlWYOvfJcIsCw0Gg4X3CRt2Mrd7xKRc+tnvHx9bKayXhWnqt1Fr27joMHKzz7roHPG84GvgNfW8f3QDXdzUAAAAASUVORK5CYII=",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                          a(
                            "div",
                            { staticClass: "row" },
                            [
                              a(
                                "div",
                                {
                                  staticClass:
                                    "status-tag pending status-tag-text",
                                },
                                [t._v(" Filled ")]
                              ),
                              a(
                                "div",
                                { staticClass: "pending" },
                                [
                                  a("trades-info-tooltip", {
                                    attrs: {
                                      trade: t.exampleTrade,
                                      type: "status",
                                    },
                                  }),
                                ],
                                1
                              ),
                              a(
                                "div",
                                {
                                  staticClass: "status-tag status-tag-button",
                                  on: {
                                    click: function (a) {
                                      return t.onSubmitAction();
                                    },
                                  },
                                },
                                [t._v(" Withdraw ")]
                              ),
                              a(
                                "b-tooltip",
                                {
                                  attrs: {
                                    label: "This will complete your order",
                                  },
                                },
                                [
                                  a("b-icon", {
                                    attrs: { icon: "information" },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ])
                      : t._e(),
                  ],
                  2
                ),
              ]),
              void 0 !== t.trades
                ? a(
                    "div",
                    { staticClass: "your-trades" },
                    [
                      t._v(" Enter "),
                      a("router-link", { attrs: { to: { name: "Trade" } } }, [
                        t._v("New CivTrade"),
                      ]),
                    ],
                    1
                  )
                : t._e(),
              a("trade-performance-modal", {
                attrs: {
                  trade: t.selectedTrade,
                  "is-component-modal-active": t.tradePerformanceModalOpen,
                },
                on: {
                  close: function (a) {
                    t.tradePerformanceModalOpen = !1;
                  },
                },
              }),
            ],
            1
          );
        },
        A = [
          function () {
            var t = this,
              a = t._self._c;
            return a("div", { staticClass: "row" }, [
              a("div", { staticClass: "crypto-tag" }, [
                t._v(" 30,000 "),
                a("img", { attrs: { src: e("dbd0"), alt: "Ethereum" } }),
                t._v(" EXAMPLE "),
              ]),
            ]);
          },
          function () {
            var t = this,
              a = t._self._c;
            return a("div", { staticClass: "row" }, [
              a("div", { staticClass: "crypto-tag" }, [
                t._v(" 340,000 "),
                a("img", { attrs: { src: e("41c9"), alt: "CIV" } }),
                t._v(" CIV "),
              ]),
            ]);
          },
        ],
        C = {
          components: { TradePerformanceModal: m["a"], TradesInfoTooltip: u },
          name: "TradesPerformanceTablet",
          props: ["trades"],
          data() {
            return {
              selectedTrade: [],
              tradePerformanceModalOpen: !1,
              exampleTrade: {
                example: !0,
                orderId: 18809,
                pairName: "EXAMPLE per CIV",
                pairInverted: "CIV per EXAMPLE",
                amount0: 3e4,
                amount1: 34e4,
                tokenName0: "EXAMPLE",
                tokenName1: "Civilization",
                status: "Filled",
                currentAmount1: "0",
                token0Decimals: 18,
                token1Decimals: 18,
                currentAmount0: 100,
                dateOpenedDay: "18 DEC 2021",
                dateOpenedTime: "22:27:48 UTC",
                elapsed: "22 days, 10h:41m,25s",
                actualPrice: 1.09,
                initialPrice: 1.11,
                targetPrice: 1.22,
                invertedPrice: 0.25,
                actualInverted: 0.19,
                initialInverted: 0.2,
                percentFilled: "30%",
              },
            };
          },
          methods: {
            onSubmitAction() {
              this.$emit("onSubmitAction", this.type);
            },
            getImage(t) {
              let a = [],
                e = JSON.parse(localStorage.getItem("allTokensList"));
              return (
                e &&
                  (a = e.filter(
                    (a) => a.symbol.toLowerCase() === t.toLowerCase()
                  )),
                void 0 !== a[0]
                  ? a[0].logoURI
                  : "data:image/png;base64,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"
              );
            },
            onSubmitOrOpenClick(t) {
              this.$emit("onSubmitOrOpenClick", t);
            },
            onPartFilledClick(t) {
              this.$emit("onPartFilledClick", t);
            },
          },
        },
        w = C,
        k =
          (e("37a4"),
          e("3a63"),
          Object(p["a"])(w, x, A, !1, null, "8c529f74", null)),
        y = k.exports,
        T = e("9841"),
        S = e("4360"),
        P = e("0fe4"),
        O = e("f98f"),
        I = e("c030"),
        L = {
          name: "TradesPerformance",
          store: S["a"],
          components: {
            TradeActionConfirmationModal: P["a"],
            TradesPerformanceTablet: y,
            TradesPerformanceMobile: b,
          },
          data: () => ({
            trades: void 0,
            actionType: "",
            confirmationModal: !1,
            confirmationTitle: "Confirmation",
            confirmationContent: null,
            disableButtons: !1,
            selectedTrade: void 0,
          }),
          watch: {
            "$store.state.chainId": async function () {
              await this.updateTrades();
            },
          },
          mounted: async function () {
            await this.updateTrades();
          },
          methods: {
            async onSubmitAction() {
              let t = void 0;
              if (
                ((this.confirmationContent = "Request in progress..."),
                (this.confirmationModal = !0),
                (this.disableButtons = !0),
                void 0 === this.selectedTrade)
              )
                this.confirmationContent =
                  "Example transaction: cannot be withdrawn. CivTrade with real tokens, to withdraw funds";
              else
                try {
                  const a = new O["a"]();
                  let e;
                  if (
                    (this.$log.debug(
                      "Trade version is: " + this.selectedTrade.version
                    ),
                    1 === this.selectedTrade.version)
                  )
                    e = await new I["ethers"].Contract(
                      await a.getManagerAddress(),
                      await a.getAbi(),
                      S["a"].state.signer
                    );
                  else {
                    if (2 !== this.selectedTrade.version)
                      throw "Unsupported version";
                    e = await new I["ethers"].Contract(
                      await a.getManagerAddressV2(),
                      await a.getAbiV2(),
                      S["a"].state.signer
                    );
                  }
                  this.$log.debug("cancelling " + this.selectedTrade.orderId);
                  let i = await S["a"].state.provider.getFeeData().gasPrice;
                  this.$log.debug("Estimated gas: " + i),
                    await e.closePos(this.selectedTrade.orderId),
                    (this.confirmationContent =
                      "Your request submitted successfully"),
                    (t = this.trades.findIndex(
                      (t) => t.orderId === this.selectedTrade.orderId
                    ));
                } catch (a) {
                  this.$log.error(a),
                    4001 === a.code
                      ? (this.confirmationContent =
                          "You rejected the transaction")
                      : (this.confirmationContent =
                          "An error occurred, please try again");
                } finally {
                  await this.updateTrades(),
                    Number.isInteger(t) && (this.trades[t].status = "Closed");
                }
              this.selectedTrade = void 0;
            },
            onSubmitOrOpenClick(t) {
              (this.disableButtons = !1),
                (this.actionType = "Cancel"),
                (this.confirmationModal = !0),
                (this.confirmationContent =
                  "Close this order and withdraw its current balance of tokens, before it is auto-filled?"),
                (this.selectedTrade = t);
            },
            onPartFilledClick(t) {
              (this.disableButtons = !1),
                (this.actionType = "Pre-close"),
                (this.confirmationModal = !0),
                (this.confirmationContent =
                  "Pre-close this part-filled order?"),
                (this.selectedTrade = t);
            },
            async updateTrades() {
              const t = this.$buefy.loading.open();
              try {
                let a = await new O["a"]().getAddress();
                null === a
                  ? await this.$router.push("/")
                  : ((this.trades = await new T["a"]().getTrades(a)),
                    this.$log.debug("Trades for :" + a),
                    this.$log.debug(this.trades));
              } catch (a) {
                this.$log.error(a),
                  this.$buefy.toast.open({
                    duration: 5e3,
                    message: "Your request failed, please try again",
                    position: "is-bottom",
                    type: "is-danger",
                  });
              } finally {
                t.close();
              }
            },
          },
        },
        M = L,
        z = (e("4ad2"), Object(p["a"])(M, i, o, !1, null, "3c782eb2", null));
      a["default"] = z.exports;
    },
    "4ad2": function (t, a, e) {
      "use strict";
      e("24a2");
    },
    "56d4": function (t, a, e) {
      var i = e("24fb");
      (a = i(!1)),
        a.push([
          t.i,
          '[data-v-f13a4f8e]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.trade-performance-info-icon[data-v-f13a4f8e]{position:relative;top:3px;left:5px}.trade-performance-info-icon[data-v-f13a4f8e]:hover{cursor:pointer;opacity:.7}h1[data-v-f13a4f8e]{font-weight:500;font-size:45px;line-height:55px;color:#fff}hr[data-v-f13a4f8e]{width:365px;margin:20px auto auto auto;border:1px solid #00fcde}.list[data-v-f13a4f8e]{font-size:18px;line-height:22px;color:#fff;font-weight:500;text-align:center;background:#f4f4ff54;border-radius:10px;margin:25px}.list p[data-v-f13a4f8e]{text-align:left;color:#fff;padding:10px 10px 6px 23px;font-weight:900;font-size:22px;line-height:24px}.c-arrow-down[data-v-f13a4f8e]{position:relative;top:2px}.cog-icon[data-v-f13a4f8e]{margin-top:20px;cursor:pointer;margin-right:30px}.row-style[data-v-f13a4f8e]{border-radius:10px;border:1px solid transparent;background-origin:border-box;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #2c323f;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#12ab9e,#8d358b);font-weight:600;font-size:25px;line-height:30px;color:#fff;padding:0;margin:0 20px}.row-style .bordered[data-v-f13a4f8e]{border-right:1px solid #12ab9e}.status-tag[data-v-f13a4f8e]{width:100%;border-radius:10px;font-weight:500;font-size:25px;line-height:17px;padding:15px;color:#fff;background:#f4f4ff54;border:1px solid #462564;cursor:pointer}.crypto-tag[data-v-f13a4f8e]{display:flex;justify-content:center;align-items:center;width:90px;height:35px;background:#000;border-radius:22px;font-weight:700;font-size:16px;line-height:20px}img[data-v-f13a4f8e]{margin-left:10px;width:21px;height:21px}.label[data-v-f13a4f8e]{color:#c1c1c1;margin:0;padding:0}.m-value[data-v-f13a4f8e]{font-weight:500;font-size:18px;line-height:22px;display:flex;justify-content:center;align-items:center}.m-value img[data-v-f13a4f8e]{width:24px;height:24px}.status-tag-mobile[data-v-f13a4f8e]{width:100%;margin:-4% 0 -1% 0;font-size:20px;font-weight:700;background:#000}.status-tag-mobile[data-v-f13a4f8e]:hover{background:#f4f4ff54}.status-tag-mobile.pending[data-v-f13a4f8e]{background:transparent;border-color:transparent;cursor:default}.your-trades[data-v-f13a4f8e]{font-weight:500;font-size:20px;line-height:20px;color:#fff}.your-trades a[data-v-f13a4f8e]{color:rgba(0,252,222,.6)!important}.title-tooltip[data-v-f13a4f8e]{position:relative;top:3px}',
          "",
        ]),
        (t.exports = a);
    },
    "5b92": function (t, a, e) {
      var i = e("a2974");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var o = e("499e").default;
      o("50950486", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6a3b": function (t, a, e) {
      "use strict";
      e("06bb");
    },
    "7f80": function (t, a, e) {
      var i = e("24fb");
      (a = i(!1)),
        a.push([
          t.i,
          '[data-v-35a8d611]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.confirmation-modal[data-v-35a8d611]{background-color:#f4f4ff54;max-width:470px;width:90%;border-radius:30px;margin:auto;padding:15px 10px}.confirmation-modal .column p[data-v-35a8d611]{text-align:left;color:#fff;padding:0 10px;font-weight:300;font-size:20px;line-height:24px}.confirmation-modal .columns[data-v-35a8d611]{position:relative}.confirmation-modal .columns button[data-v-35a8d611]{position:absolute;top:8px;right:16px}.c-notification[data-v-35a8d611]{width:90%;height:auto;font-weight:500;font-size:22px;border-radius:24px;padding:15px 15px 0 15px;margin:12px auto;border:1px solid transparent;background-origin:border-box;background-clip:content-box,border-box}.c-notification .c-notification-content[data-v-35a8d611],.c-notification .c-notification-title[data-v-35a8d611]{color:#fff;font-weight:500;font-size:16px;line-height:20px;text-align:center;padding:0;margin-bottom:12px}.c-notification .c-notification-subtitle[data-v-35a8d611]{font-weight:500;font-size:20px;line-height:24px;text-align:center;color:#00fcde;margin-bottom:15px}.c-notification .c-notification-disabled-content[data-v-35a8d611]{font-weight:500;font-size:16px;line-height:20px;text-align:center;color:#999;margin-bottom:15px}.action-button[data-v-35a8d611]{border-radius:31px;width:113px;height:50px;border:3px solid transparent;background-origin:border-box;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #000;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#12ab9e,#8d358b);margin:0 0 25px 20px;font-weight:600;font-size:25px;line-height:30px;color:#fff;cursor:pointer}.action-button[data-v-35a8d611]:hover{box-shadow:inset 2px 1000px 1px #4b5369}',
          "",
        ]),
        (t.exports = a);
    },
    "92a7": function (t, a, e) {
      var i = e("24fb");
      (a = i(!1)),
        a.push([
          t.i,
          ".trades-performance[data-v-3c782eb2]{margin-top:5px;margin-bottom:80px}",
          "",
        ]),
        (t.exports = a);
    },
    a2974: function (t, a, e) {
      var i = e("24fb");
      (a = i(!1)),
        a.push([
          t.i,
          ':root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.trade-info-modal{background-color:#f4f4ff54;max-width:530px;width:90%;border-radius:10px;margin:auto;padding:15px 10px;text-align:left;position:relative}.trade-info-modal .delete{position:absolute;top:8px;right:8px;z-index:100}.trade-info-modal .tooltip-icon{position:relative;top:2px;left:5px}.trade-info-modal .tooltip-icon:hover{cursor:pointer}.trade-info-modal .tooltip-icon .tooltip-content{max-width:450px!important;min-width:290px!important;padding:30px!important;background:#191b1f!important}.trade-info-modal .tooltip-icon .tooltip-content .note{font-size:14px!important}.trade-info-modal .tooltip-icon .mdi-information-outline:before{color:grey!important}.trade-info-modal .tooltip-icon .mdi-information-outline:hover:before{color:#fff!important}.trade-info-modal .tooltip-icon .header{margin-bottom:15px;padding-bottom:5px}.trade-info-modal .tooltip-icon div{color:#fff!important;font-weight:500!important;font-size:16px!important;padding:2px}',
          "",
        ]),
        (t.exports = a);
    },
    a2f8: function (t, a, e) {
      "use strict";
      e("fdb6");
    },
    dcd5: function (t, a, e) {
      var i = e("3259");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var o = e("499e").default;
      o("35c4eb0e", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    fdb6: function (t, a, e) {
      var i = e("7f80");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var o = e("499e").default;
      o("c8860328", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
