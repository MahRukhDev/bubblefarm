(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pro-trade"],
  {
    "09a1": function (t, e, o) {
      "use strict";
      o("e36e");
    },
    "0fe4": function (t, e, o) {
      "use strict";
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-modal",
            {
              model: {
                value: t.isComponentModalActive,
                callback: function (e) {
                  t.isComponentModalActive = e;
                },
                expression: "isComponentModalActive",
              },
            },
            [
              e("div", { staticClass: "confirmation-modal" }, [
                e("div", { staticClass: "columns is-mobile" }, [
                  e("div", { staticClass: "column is-four-fifths" }, [
                    e("p", [t._v(t._s(t.title))]),
                  ]),
                  e("button", {
                    staticClass: "delete",
                    attrs: { type: "button" },
                    on: {
                      click: function (e) {
                        return t.$emit("close");
                      },
                    },
                  }),
                ]),
                e("div", { staticClass: "main-notification" }, [
                  e("div", { staticClass: "c-notification" }, [
                    t.notificationTitle
                      ? e("p", { staticClass: "c-notification-title" }, [
                          t._v(" " + t._s(t.notificationTitle) + " "),
                        ])
                      : t._e(),
                    t.notificationSubTitle
                      ? e("p", { staticClass: "c-notification-subtitle" }, [
                          t._v(" " + t._s(t.notificationSubTitle) + " "),
                        ])
                      : t._e(),
                    t.notificationContent
                      ? e("p", { staticClass: "c-notification-content" }, [
                          t._v(" " + t._s(t.notificationContent) + " "),
                        ])
                      : t._e(),
                    t.notificationDisabledContent
                      ? e(
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
                  : e(
                      "button",
                      {
                        staticClass: "action-button",
                        on: {
                          click: function (e) {
                            return t.onSubmitAction();
                          },
                        },
                      },
                      [t._v(" Submit ")]
                    ),
                t.disableButtons
                  ? t._e()
                  : e(
                      "button",
                      {
                        staticClass: "action-button",
                        on: {
                          click: function (e) {
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
        i = [],
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
        r = s,
        n = (o("a2f8"), o("2877")),
        l = Object(n["a"])(r, a, i, !1, null, "35a8d611", null);
      e["a"] = l.exports;
    },
    "10da": function (t, e, o) {
      var a = o("413b");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("995328f2", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "14e5c": function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-abecf21c]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}@media screen and (min-width:700px){.recent-trades[data-v-abecf21c]{height:620px!important}}@media screen and (min-width:700px){.recent-trades .fixed-height[data-v-abecf21c]{height:460px}}.recent-trades>div[data-v-abecf21c]{height:100%}.recent-trades .block-title[data-v-abecf21c]{text-align:left;font-size:18px;color:#26a69a;font-weight:600;background-color:#282e41;padding:6px 6px 6px 15px;border:1px solid #262b3a;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.recent-trades .block-title.light[data-v-abecf21c]{color:#00fcde;background-color:unset;border:none}.recent-trades .block-title .order-book-dropdown[data-v-abecf21c]{font-size:15px;color:#fff;font-weight:400;cursor:pointer;margin-right:.5vw;margin-top:2px}.recent-trades .box-border[data-v-abecf21c]{border:1px solid #262b3a;background:#f4f4ff54}.recent-trades .padding-bottom[data-v-abecf21c]{padding-bottom:.75rem!important}.recent-trades .table-data[data-v-abecf21c]{margin-top:10px}.recent-trades .table-data .header[data-v-abecf21c]{color:#95a0af;font-weight:500;font-size:14px}.recent-trades .order-book-danger[data-v-abecf21c]{color:#ef5350;white-space:nowrap}.recent-trades .order-book-danger[data-v-abecf21c],.recent-trades .order-book-info[data-v-abecf21c]{font-size:12px;font-weight:500;overflow:hidden;text-overflow:ellipsis}.recent-trades .order-book-info[data-v-abecf21c]{color:#fff}.recent-trades .order-book-info-dark[data-v-abecf21c]{color:#96a1af;font-weight:500}.recent-trades .order-book-success[data-v-abecf21c]{color:#26a69a;font-size:12px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.recent-trades .order-book-row[data-v-abecf21c]{height:23.5px;cursor:pointer}.recent-trades .order-book-row[data-v-abecf21c]:hover{filter:brightness(90%)}.recent-trades .time-padding[data-v-abecf21c]{padding-right:30px}.recent-trades .nowrap[data-v-abecf21c]{white-space:nowrap}',
          "",
        ]),
        (t.exports = e);
    },
    "18cc": function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ':root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.pro-trade .input,.pro-trade .select select,.pro-trade .taginput .taginput-container.is-focusable,.pro-trade .textarea{background:#2c323f;border:none;border-radius:10px;color:#fff;width:100%;margin-top:2px}.pro-trade .input:focus,.pro-trade .select select:focus,.pro-trade .taginput .taginput-container.is-focusable:focus,.pro-trade .textarea:focus{border:none!important;box-shadow:none!important}.pro-trade .input::-moz-placeholder,.pro-trade .select select::-moz-placeholder,.pro-trade .taginput .taginput-container.is-focusable::-moz-placeholder,.pro-trade .textarea::-moz-placeholder{font-size:16px;font-weight:500;font-family:Poppins,sans-serif}.pro-trade .input::placeholder,.pro-trade .select select::placeholder,.pro-trade .taginput .taginput-container.is-focusable::placeholder,.pro-trade .textarea::placeholder{font-size:16px;font-weight:500;font-family:Poppins,sans-serif}',
          "",
        ]),
        (t.exports = e);
    },
    "236e": function (t, e, o) {
      "use strict";
      o("5b92");
    },
    3035: function (t, e, o) {
      "use strict";
      o("10da");
    },
    "3c8a": function (t, e, o) {
      "use strict";
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-modal",
            {
              attrs: { "can-cancel": ["x"] },
              model: {
                value: t.modalActive,
                callback: function (e) {
                  t.modalActive = e;
                },
                expression: "modalActive",
              },
            },
            [
              e("div", { staticClass: "trade-info-modal" }, [
                e("button", {
                  staticClass: "delete",
                  attrs: { type: "button" },
                  on: {
                    click: function (e) {
                      return t.$emit("close");
                    },
                  },
                }),
                e("div", { staticClass: "trade-info-modal has-text-light" }, [
                  e("div", { staticClass: "is-size-5" }, [
                    t._v(
                      "CivTrade ID " +
                        t._s(t.mergedTrade.orderId) +
                        "v" +
                        t._s(t.mergedTrade.version) +
                        " Balance"
                    ),
                  ]),
                  e("hr", { staticClass: "has-background-dark mt-0 mb-2" }),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pb-0" }, [
                      t._v(" " + t._s(t.mergedTrade.tokenSymbol0) + " "),
                    ]),
                    e(
                      "div",
                      { staticClass: "column is-half has-text-right pb-0" },
                      [t._v(" " + t._s(t.mergedTrade.currentAmount0) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" " + t._s(t.mergedTrade.tokenSymbol1) + " "),
                    ]),
                    e(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.currentAmount1) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" Fee income "),
                    ]),
                    e(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.feePercent) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0" }, [
                      t._v(" % filled "),
                    ]),
                    e(
                      "div",
                      { staticClass: "column is-half has-text-right pt-0" },
                      [t._v(" " + t._s(t.mergedTrade.percentFilled) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "is-size-5" }, [
                    t._v("Price of " + t._s(t.mergedTrade.pairName)),
                  ]),
                  e("hr", { staticClass: "has-background-dark mt-0 mb-2" }),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pb-0" }, [
                      t._v(" Target "),
                    ]),
                    e(
                      "div",
                      { staticClass: "column is-half has-text-right pb-0" },
                      [t._v(" " + t._s(t.mergedTrade.targetPrice) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" Current "),
                    ]),
                    e(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.actualPrice) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0" }, [
                      t._v(" Initial "),
                    ]),
                    e(
                      "div",
                      { staticClass: "column is-half has-text-right pt-0" },
                      [t._v(" " + t._s(t.mergedTrade.initialPrice) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "is-size-5" }, [
                    t._v("Price of " + t._s(t.mergedTrade.pairInverted)),
                  ]),
                  e("hr", { staticClass: "has-background-dark mt-0 mb-2" }),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pb-0" }, [
                      t._v(" Target "),
                    ]),
                    e(
                      "div",
                      { staticClass: "column is-half has-text-right pb-0" },
                      [t._v(" " + t._s(t.mergedTrade.invertedPrice) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" Current "),
                    ]),
                    e(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.actualInverted) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0" }, [
                      t._v(" Initial "),
                    ]),
                    e(
                      "div",
                      { staticClass: "column is-half has-text-right pt-0" },
                      [t._v(" " + t._s(t.mergedTrade.initialInverted) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "is-size-5" }, [
                    t._v("CivTrade Opened"),
                  ]),
                  e("hr", { staticClass: "has-background-dark mt-0 mb-2" }),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pb-0" }, [
                      t._v(" Type "),
                    ]),
                    e(
                      "div",
                      { staticClass: "column is-half has-text-right pb-0" },
                      [t._v(" " + t._s(t.mergedTrade.tradeType) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" On "),
                    ]),
                    e(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.dateOpenedDay) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0 pb-0" }, [
                      t._v(" At "),
                    ]),
                    e(
                      "div",
                      {
                        staticClass: "column is-half has-text-right pt-0 pb-0",
                      },
                      [t._v(" " + t._s(t.mergedTrade.dateOpenedTime) + " ")]
                    ),
                  ]),
                  e("div", { staticClass: "columns pl-4 is-mobile" }, [
                    e("div", { staticClass: "column is-half pt-0" }, [
                      t._v(" Duration "),
                    ]),
                    e(
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
        i = [],
        s = o("901e"),
        r = o.n(s),
        n = o("f98f"),
        l = o("9841"),
        d = {
          name: "TradePerformanceModal",
          props: ["trade", "isComponentModalActive"],
          components: {},
          watch: {
            isComponentModalActive: {
              handler: async function () {
                if (this.isComponentModalActive)
                  if (void 0 === this.trade.example) {
                    const e = this.$buefy.loading.open();
                    try {
                      const t = await new n["a"]().getAddress(),
                        o = await new l["a"]().getTradeBalance(
                          t,
                          this.trade.orderId,
                          this.trade.version
                        );
                      (this.mergedTrade = { ...this.trade, ...o }),
                        this.$log.debug(o),
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
                      e.close();
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
              const e = new r.a(10).pow(parseInt(t.token0Decimals));
              let o = new r.a(t.currentAmount0)
                .dividedBy(e)
                .decimalPlaces(parseInt(t.token0Decimals));
              (!o.isNaN() && o.isFinite()) || (o = 0);
              try {
                const t = o.toString(10).match(/^-?\d+(?:\.\d{0,6})?/);
                return null !== t && t.length > 0 ? t[0] : 0;
              } catch (a) {
                return this.$log.error(a), "N/A";
              }
            },
            getCurrentBalanceForToken1(t) {
              const e = new r.a(10).pow(parseInt(t.token1Decimals));
              let o = new r.a(t.currentAmount1)
                .dividedBy(e)
                .decimalPlaces(parseInt(t.token1Decimals));
              (!o.isNaN() && o.isFinite()) || (o = 0);
              try {
                const t = o.toString(10).match(/^-?\d+(?:\.\d{0,6})?/);
                return null !== t && t.length > 0 ? t[0] : 0;
              } catch (a) {
                return this.$log.error(a), "N/A";
              }
            },
          },
        },
        c = d,
        p = (o("236e"), o("2877")),
        f = Object(p["a"])(c, a, i, !1, null, null, null);
      e["a"] = f.exports;
    },
    "413b": function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-c9910d74]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}@media screen and (min-width:700px){.order-book[data-v-c9910d74]{height:620px!important}}@media screen and (min-width:700px){.order-book .fixed-height[data-v-c9910d74]{height:460px}}.order-book>div[data-v-c9910d74]{height:100%}.order-book .block-title[data-v-c9910d74]{text-align:left;font-size:18px;color:#26a69a;font-weight:600;background-color:#282e41;padding:6px 6px 6px 15px;border:1px solid #262b3a}.order-book .block-title.light[data-v-c9910d74]{color:#00fcde;background-color:unset;border:none}.order-book .block-title .order-book-dropdown[data-v-c9910d74]{font-size:15px;color:#fff;font-weight:400;cursor:pointer;margin-right:.5vw;margin-top:0;min-width:-moz-fit-content;min-width:fit-content;position:relative;top:-3px}.order-book .box-border[data-v-c9910d74]{border:1px solid #262b3a;background:#f4f4ff54}.order-book .empty-box[data-v-c9910d74]{height:51px;border-right:none}.order-book .padding-bottom[data-v-c9910d74]{padding-bottom:.75rem!important}.order-book .table-data[data-v-c9910d74]{margin-top:10px}.order-book .table-data .header[data-v-c9910d74]{color:#95a0af;font-weight:500;font-size:14px}.order-book .order-book-danger[data-v-c9910d74]{color:#ef5350}.order-book .order-book-danger[data-v-c9910d74],.order-book .order-book-info[data-v-c9910d74]{font-size:12px;font-weight:500;overflow:hidden;text-overflow:ellipsis}.order-book .order-book-info[data-v-c9910d74]{color:#fff}.order-book .order-book-info-dark[data-v-c9910d74]{color:#96a1af;font-weight:500;overflow:hidden;text-overflow:ellipsis}.order-book .order-book-success[data-v-c9910d74]{color:#26a69a;font-size:12px;font-weight:500;overflow:hidden;text-overflow:ellipsis}.order-book .order-book-row[data-v-c9910d74]{height:23.5px}.order-book .order-book-row[data-v-c9910d74]:hover{cursor:pointer}.order-book .more-block[data-v-c9910d74]{border-top:1px solid #262b3a;border-bottom:1px solid #262b3a;height:25px}.order-book .more-block .more-button[data-v-c9910d74]{right:-10px;color:#8d358b!important}.order-book .dropdown-content[data-v-c9910d74]{background-color:#f4f4ff54;border-radius:10px;height:180px;position:absolute;width:140px;top:35px;left:-20px;z-index:9999;border:1px solid #2f3548;text-align:right}.order-book .dropdown-content div[data-v-c9910d74]{padding-left:20px;line-height:22px}.order-book .dropdown-content div[data-v-c9910d74]:first-child{padding-top:10px}.order-book .dropdown-content .drop-title[data-v-c9910d74]{text-align:left;padding-bottom:8px}.order-book .dropdown-content .active[data-v-c9910d74]{color:#26a69a;font-weight:400}.order-book .text-ellipsis[data-v-c9910d74]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.order-book .nowrap[data-v-c9910d74]{white-space:nowrap}.order-book .progress-bar[data-v-c9910d74]{position:absolute;height:18px;right:0}.order-book .ask[data-v-c9910d74]{background-color:rgba(239,83,80,.2509803922)}.order-book .bid[data-v-c9910d74]{background-color:rgba(38,166,154,.2509803922)}',
          "",
        ]),
        (t.exports = e);
    },
    5361: function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-72169c16]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.change-token-label[data-v-72169c16]{color:#26a69a;font-size:18px;font-weight:600}.change-token[data-v-72169c16]{background-color:#000;border-radius:22px;width:250px;min-width:150px;height:37px;cursor:pointer;margin-right:20px;padding:5px}.change-token .token-logo[data-v-72169c16]{position:relative;left:5px}.change-token .token-name[data-v-72169c16]{color:#fff;position:relative;top:2px;font-size:18px;font-weight:700;text-overflow:ellipsis;overflow:hidden;width:80px}.change-token .arrow-icon[data-v-72169c16]{position:relative;width:20px;right:14px;top:1px}.change-token[data-v-72169c16]:hover{filter:brightness(120%)}',
          "",
        ]),
        (t.exports = e);
    },
    5385: function (t, e, o) {
      var a = o("6a2b");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("e16145cc", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    5791: function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-595fcbc0]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.swap[data-v-595fcbc0]{height:360px}.swap .set-max[data-v-595fcbc0]{cursor:pointer}.swap .set-max[data-v-595fcbc0]:hover{filter:brightness(150%)}.swap .box-border[data-v-595fcbc0]{background:#f4f4ff54}.swap .block-label[data-v-595fcbc0]{margin-left:15px}@media screen and (max-width:700px){.swap .block-label[data-v-595fcbc0]{margin-top:0!important;border-top:1px solid #262b3a;margin-left:15px}}.swap .trade-label[data-v-595fcbc0]{color:#26a69a;font-size:18px;font-weight:600;text-align:left;margin-top:20px}.swap .type-label .selected[data-v-595fcbc0]{color:#26a69a;font-weight:600}.swap .type-label .not-selected[data-v-595fcbc0],.swap .type-label .selected[data-v-595fcbc0]{font-size:15px;margin-right:.5vw;margin-top:0;min-width:-moz-fit-content;min-width:fit-content;position:relative;left:15px;top:3px}.swap .type-label .not-selected[data-v-595fcbc0]{color:#838d9b;font-weight:400;cursor:pointer}.swap .type-label .not-selected[data-v-595fcbc0]:hover{filter:brightness(200%)}@media screen and (max-width:1777px)and (min-width:1409px){.swap .input-wrapper[data-v-595fcbc0]{max-width:14vw}}@media screen and (max-width:1180px)and (min-width:770px){.swap .input-wrapper[data-v-595fcbc0]{max-width:21vw}}.swap .full-width[data-v-595fcbc0]{width:100%}.swap .input-container[data-v-595fcbc0]{background:#2c323f;border-radius:10px}.swap .token-label[data-v-595fcbc0]{color:#fff;position:relative;right:10px;top:8px;width:100px;margin-left:5px;overflow:hidden;text-overflow:ellipsis;text-align:right}.swap .token-label a[data-v-595fcbc0]{color:#6495ed!important;font-size:16px;text-decoration:underline;font-weight:500}.swap .input-token-label[data-v-595fcbc0]{color:#fff;position:relative;right:10px;top:8px}.swap .container-top-border[data-v-595fcbc0]{border-top:1px solid #262b3a}.swap .max-min-label[data-v-595fcbc0]{font-size:15px;color:#626e7e;font-weight:500;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.swap .buy-button[data-v-595fcbc0]{font-family:Poppins,sans-serif!important;width:100%;height:50px;cursor:pointer;border:none;border-radius:10px;color:#fff;font-size:16px;font-weight:500;background:#26a69a}.swap .buy-button[data-v-595fcbc0]:hover{filter:brightness(120%)}.swap .sell-button[data-v-595fcbc0]{font-family:Poppins,sans-serif!important;width:100%;height:50px;cursor:pointer;border:none;border-radius:10px;color:#fff;font-size:16px;font-weight:500;background:#ef5350}.swap .sell-button[data-v-595fcbc0]:hover{filter:brightness(120%)}.swap .price-error[data-v-595fcbc0]{color:#f14668!important;font-size:14px!important;padding:0!important;font-weight:400!important}',
          "",
        ]),
        (t.exports = e);
    },
    "5b92": function (t, e, o) {
      var a = o("a2974");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("50950486", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5d48": function (t, e, o) {
      var a = o("5791");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("5178c7ef", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5fd3": function (t, e, o) {
      var a = o("e117");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("0ebf7a8e", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6a2b": function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-48a943ce]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.pro-trade[data-v-48a943ce]{font-family:Poppins,sans-serif;margin-top:0}.pro-trade .z-index-high[data-v-48a943ce]{z-index:9999}.pro-trade .box-border[data-v-48a943ce]{background:#f4f4ff54}.pro-trade .border-top[data-v-48a943ce]{border-top:1px solid #262b3a}.pro-trade .border-left[data-v-48a943ce]{border-left:1px solid #262b3a}.pro-trade .trade-label[data-v-48a943ce]{color:#26a69a;font-size:18px;font-weight:600;text-align:left;margin-top:20px}',
          "",
        ]),
        (t.exports = e);
    },
    "78a5": function (t, e, o) {
      "use strict";
      o("5385");
    },
    "7e21": function (t, e, o) {
      var a = o("5361");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("a1a9d652", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "7f80": function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-35a8d611]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.confirmation-modal[data-v-35a8d611]{background-color:#f4f4ff54;max-width:470px;width:90%;border-radius:30px;margin:auto;padding:15px 10px}.confirmation-modal .column p[data-v-35a8d611]{text-align:left;color:#fff;padding:0 10px;font-weight:300;font-size:20px;line-height:24px}.confirmation-modal .columns[data-v-35a8d611]{position:relative}.confirmation-modal .columns button[data-v-35a8d611]{position:absolute;top:8px;right:16px}.c-notification[data-v-35a8d611]{width:90%;height:auto;font-weight:500;font-size:22px;border-radius:24px;padding:15px 15px 0 15px;margin:12px auto;border:1px solid transparent;background-origin:border-box;background-clip:content-box,border-box}.c-notification .c-notification-content[data-v-35a8d611],.c-notification .c-notification-title[data-v-35a8d611]{color:#fff;font-weight:500;font-size:16px;line-height:20px;text-align:center;padding:0;margin-bottom:12px}.c-notification .c-notification-subtitle[data-v-35a8d611]{font-weight:500;font-size:20px;line-height:24px;text-align:center;color:#00fcde;margin-bottom:15px}.c-notification .c-notification-disabled-content[data-v-35a8d611]{font-weight:500;font-size:16px;line-height:20px;text-align:center;color:#999;margin-bottom:15px}.action-button[data-v-35a8d611]{border-radius:31px;width:113px;height:50px;border:3px solid transparent;background-origin:border-box;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #000;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#12ab9e,#8d358b);margin:0 0 25px 20px;font-weight:600;font-size:25px;line-height:30px;color:#fff;cursor:pointer}.action-button[data-v-35a8d611]:hover{box-shadow:inset 2px 1000px 1px #4b5369}',
          "",
        ]),
        (t.exports = e);
    },
    8184: function (t, e, o) {
      "use strict";
      o("7e21");
    },
    "82f8d": function (t, e, o) {
      var a = o("d47e");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("fd5f064a", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "90cc": function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-3abced23]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}@media screen and (max-width:768px){.trading-view[data-v-3abced23]{height:465px!important}iframe[data-v-3abced23]{height:400px!important}}.trading-view[data-v-3abced23]{overflow:hidden!important;height:870px}.trading-view iframe[data-v-3abced23]{width:100%;height:93%}.trading-view .choose-chart[data-v-3abced23]{height:40px;border-bottom:0;text-align:left;font-size:18px;color:#26a69a;font-weight:600;background-color:#282e41;padding:6px 6px 6px 0;border:1px solid #262b3a}.trading-view .choose-chart>div[data-v-3abced23]{margin-left:10px}.trading-view .choose-chart .selected[data-v-3abced23]{color:#26a69a;font-weight:600}.trading-view .choose-chart .not-selected[data-v-3abced23],.trading-view .choose-chart .selected[data-v-3abced23]{font-size:15px;margin-right:.7rem;margin-top:0;min-width:-moz-fit-content;min-width:fit-content;position:relative;left:15px;top:3px}.trading-view .choose-chart .not-selected[data-v-3abced23]{color:#838d9b;font-weight:400;cursor:pointer}.trading-view .choose-chart .not-selected[data-v-3abced23]:hover{filter:brightness(200%)}.trading-view .token-info[data-v-3abced23]{height:25px;font-size:12px;border:1px solid #363c4e;border-bottom:0;color:#26a69a;text-align:left;font-weight:600;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.trading-view .token-info>div[data-v-3abced23]{margin-left:10px}.trading-view .token-info .data[data-v-3abced23]{font-weight:400;color:#838d9b;margin-right:.5vw;margin-top:0;min-width:-moz-fit-content;min-width:fit-content;position:relative;left:15px}.trading-view .token-info .data[data-v-3abced23]:hover{filter:brightness(120%)}',
          "",
        ]),
        (t.exports = e);
    },
    "91e0": function (t, e, o) {
      var a = o("14e5c");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("4959dc81", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "96c4": function (t, e, o) {
      "use strict";
      o("91e0");
    },
    "993d": function (t, e, o) {
      "use strict";
      o("b4cbd");
    },
    a0bd: function (t, e, o) {
      "use strict";
      o.r(e);
      var a = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "pro-trade" }, [
            e(
              "div",
              { staticClass: "columns is-gapless mb-0" },
              [
                e("trading-view", {
                  attrs: {
                    "from-token": t.fromToken,
                    orders: t.orders,
                    "token-data": t.tokenData,
                  },
                }),
                e("swap", {
                  staticClass: "is-hidden-tablet mt-3",
                  attrs: { mode: 1, pool: t.pool, rate: t.rate },
                }),
                e("value", {
                  staticClass: "is-hidden-tablet",
                  attrs: {
                    mode: 1,
                    "from-token": t.fromToken,
                    "label-enabled": !0,
                  },
                }),
                e("swap", {
                  staticClass: "is-hidden-tablet",
                  attrs: { mode: 2, pool: t.pool, rate: t.rate },
                }),
                e("value", {
                  staticClass: "is-hidden-tablet",
                  attrs: {
                    mode: 2,
                    "from-token": t.fromToken,
                    "label-enabled": !0,
                  },
                }),
                e("change-token", {
                  staticClass: "is-hidden-tablet",
                  on: { update: t.updatePage },
                }),
                e("orders", {
                  staticClass: "is-hidden-tablet",
                  attrs: { orders: t.orders },
                  on: { "update-orders": t.updateOrders },
                }),
                e("order-book", {
                  attrs: {
                    "top-of-order-book": t.topOfOrderBook,
                    "bottom-of-order-book": t.bottomOfOrderBook,
                    "mid-of-order-book": t.midOfOrderBook,
                    pool: t.pool,
                    "from-token": t.fromToken,
                    rate: t.rate,
                  },
                  on: { "update-gap-percent": t.updateGapPercent },
                }),
                e("recent-trades", {
                  attrs: {
                    swaps: t.swaps,
                    "from-token": t.fromToken,
                    pool: t.pool,
                    feeTier: t.feeTier,
                    rate: t.rate,
                  },
                  on: { update: t.updatePage },
                }),
              ],
              1
            ),
          ]);
        },
        i = [],
        s = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "column is-8-fullhd is-6-desktop is-6-tablet" },
            [
              e("div", { staticClass: "trading-view" }, [
                e(
                  "div",
                  {
                    staticClass:
                      "choose-chart is-flex is-justify-content-start is-align-items-center",
                  },
                  [
                    e(
                      "div",
                      { staticClass: "is-flex" },
                      [
                        t._v(" Chart "),
                        t._l(t.availableCharts, function (o, a) {
                          return e(
                            "div",
                            {
                              key: a,
                              class: {
                                selected: t.selectedChart === o.chartString,
                                "not-selected":
                                  t.selectedChart !== o.chartString,
                              },
                              on: {
                                click: function (e) {
                                  return t.changeIframeTo(o.chartString);
                                },
                              },
                            },
                            [t._v(" " + t._s(o.label) + " ")]
                          );
                        }),
                      ],
                      2
                    ),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass:
                      "token-info is-flex is-justify-content-start is-align-items-center",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "is-flex is-justify-content-space-evenly",
                      },
                      [
                        t._v(
                          " Token Info - Pool " +
                            t._s(t.tokenData.feeTier) +
                            " "
                        ),
                        e("div", { staticClass: "data" }, [
                          t._v(
                            "TotalSupply: " +
                              t._s(t._f("intlFormat")(t.tokenData.supply)) +
                              " " +
                              t._s(this.fromToken.symbol) +
                              "     MarketCap: $" +
                              t._s(t._f("intlFormat")(t.tokenData.marketCap)) +
                              "     TxnTotal: " +
                              t._s(
                                t._f("formatPrice")(t.tokenData.txnsTotal, 0)
                              ) +
                              "    VolumeTotal: $" +
                              t._s(
                                t._f("intlFormat")(t.tokenData.volumeUSDtotal)
                              ) +
                              "    Txn24hr: " +
                              t._s(
                                t._f("formatPrice")(t.tokenData.txnsToday, 0)
                              ) +
                              "    Volume24hr: $" +
                              t._s(
                                t._f("intlFormat")(t.tokenData.volumeUSDtoday)
                              )
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
                null !== t.tradingViewUrl
                  ? e("iframe", {
                      key: "iframe" + t.tradingViewUrl,
                      attrs: { src: t.tradingViewUrl },
                    })
                  : t._e(),
              ]),
              e(
                "div",
                { staticClass: "columns" },
                [
                  e("orders", {
                    staticClass: "is-hidden-mobile",
                    attrs: { orders: t.orders },
                  }),
                ],
                1
              ),
            ]
          );
        },
        r = [],
        n =
          (o("14d9"),
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "column is-12 order-book" },
              [
                e(
                  "div",
                  { staticClass: "columns is-gapless orders box-border mb-0" },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "column is-12 padding-bottom pt-0 mt-0 table-dark",
                      },
                      [
                        e(
                          "div",
                          { staticClass: "block-title ml-0 mb-3 mt-0" },
                          [t._v("Your Orders")]
                        ),
                        e(
                          "b-table",
                          { attrs: { data: t.orders, "sticky-header": !0 } },
                          [
                            e("b-table-column", {
                              attrs: { field: "dateOpened", label: "Time" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      t._v(
                                        " " + t._s(e.row["dateOpened"]) + " "
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("b-table-column", {
                              attrs: { field: "status", label: "Status" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      t._v(" " + t._s(e.row["status"]) + " "),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("b-table-column", {
                              attrs: { field: "tokenSymbol0", label: "From" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      t._v(
                                        " " +
                                          t._s(e.row["amount0"]) +
                                          " " +
                                          t._s(e.row["tokenSymbol0"]) +
                                          " "
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("b-table-column", {
                              attrs: { field: "tokenSymbol1", label: "To" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (o) {
                                    return [
                                      e("div", { staticClass: "absolute" }, [
                                        e("div", { staticClass: "arrow" }, [
                                          t._v(" ⮞ "),
                                        ]),
                                      ]),
                                      t._v(
                                        " " +
                                          t._s(o.row["amount1"]) +
                                          " " +
                                          t._s(o.row["tokenSymbol1"]) +
                                          " "
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("b-table-column", {
                              attrs: { field: "targetPrice", label: "Price" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (o) {
                                    return [
                                      t._v(
                                        " " + t._s(o.row["targetPrice"]) + " "
                                      ),
                                      e(
                                        "span",
                                        {
                                          staticClass:
                                            "trade-performance-info-icon",
                                          on: {
                                            click: function (e) {
                                              (t.selectedTrade = o.row),
                                                (t.tradePerformanceModalOpen =
                                                  !0);
                                            },
                                          },
                                        },
                                        [
                                          e("b-icon", {
                                            attrs: {
                                              icon: "information-outline",
                                              "custom-size": "fa-2x",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("b-table-column", {
                              attrs: { field: "tradeType", label: "Type" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      t._v(
                                        " " + t._s(e.row["tradeType"]) + " "
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("b-table-column", {
                              attrs: { field: "action", label: "Action" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (o) {
                                    return [
                                      "Open" === o.row.status
                                        ? e(
                                            "div",
                                            {
                                              staticClass:
                                                "status-tag status-tag-button",
                                              on: {
                                                click: function (e) {
                                                  return t.onSubmitOrOpenClick(
                                                    o.row
                                                  );
                                                },
                                              },
                                            },
                                            [e("a", [t._v(" Close ")])]
                                          )
                                        : t._e(),
                                    ];
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                e("trade-action-confirmation-modal", {
                  attrs: {
                    type: t.actionType,
                    "is-component-modal-active": t.confirmationModal,
                    title: t.confirmationTitle,
                    "notification-content": t.confirmationContent,
                    "disable-buttons": t.disableButtons,
                  },
                  on: {
                    onSubmitAction: t.onSubmitAction,
                    close: function (e) {
                      t.confirmationModal = !1;
                    },
                  },
                }),
                e("trade-performance-modal", {
                  attrs: {
                    trade: t.selectedTrade,
                    "is-component-modal-active": t.tradePerformanceModalOpen,
                  },
                  on: {
                    close: function (e) {
                      t.tradePerformanceModalOpen = !1;
                    },
                  },
                }),
              ],
              1
            );
          }),
        l = [],
        d = o("f98f"),
        c = o("0fe4"),
        p = o("3c8a"),
        f = o("4360"),
        h = o("c030"),
        m = {
          name: "Orders",
          store: f["a"],
          components: {
            TradeActionConfirmationModal: c["a"],
            TradePerformanceModal: p["a"],
          },
          props: { orders: Array },
          data() {
            return {
              tradePerformanceModalOpen: !1,
              disableButtons: !0,
              actionType: "Cancel",
              confirmationModal: !1,
              confirmationContent: "",
              confirmationTitle: "Confirmation",
              selectedTrade: void 0,
            };
          },
          methods: {
            onSubmitOrOpenClick(t) {
              (this.disableButtons = !1),
                (this.actionType = "Cancel"),
                (this.confirmationModal = !0),
                (this.confirmationContent =
                  "Are you sure you want to cancel this order before it is executed?"),
                (this.selectedTrade = t);
            },
            async onSubmitAction() {
              if (
                ((this.confirmationContent = "Request in progress..."),
                (this.confirmationModal = !0),
                (this.disableButtons = !0),
                void 0 === this.selectedTrade)
              )
                this.confirmationContent =
                  "This is only an Example transaction and therefore cannot be withdrawn. Please submit a CivTrade to be able to withdraw funds";
              else
                try {
                  const t = new d["a"]();
                  let e;
                  if (
                    (this.$log.debug(
                      "Trade version is: " + this.selectedTrade.version
                    ),
                    1 === this.selectedTrade.version)
                  )
                    e = await new h["ethers"].Contract(
                      await t.getManagerAddress(),
                      await t.getAbi(),
                      f["a"].state.signer
                    );
                  else {
                    if (2 !== this.selectedTrade.version)
                      throw "Unsupported version";
                    e = await new h["ethers"].Contract(
                      await t.getManagerAddressV2(),
                      await t.getAbiV2(),
                      f["a"].state.signer
                    );
                  }
                  let o = await new d["a"]().getAddress();
                  this.$log.debug("cancelling " + this.selectedTrade.orderId);
                  let a = await e
                    .closePos(this.selectedTrade.orderId)
                    .estimateGas({ from: o });
                  this.$log.debug("Estimated gas: " + a),
                    await e.closePos(this.selectedTrade.orderId),
                    (this.confirmationContent =
                      "Your request submitted successfully");
                } catch (t) {
                  this.$log.error(t),
                    4001 === t.code
                      ? (this.confirmationContent =
                          "You rejected the transaction")
                      : (this.confirmationContent =
                          "An error occurred, please try again");
                } finally {
                  this.$emit("updateOrders");
                }
              this.selectedTrade = void 0;
            },
          },
        },
        u = m,
        b = (o("fdec"), o("2877")),
        v = Object(b["a"])(u, n, l, !1, null, null, null),
        g = v.exports,
        w = o("9841"),
        k = {
          name: "TradingView",
          components: { Orders: g },
          props: { orders: Array, tokenData: Object, fromToken: Object },
          watch: {
            fromToken: {
              deep: !0,
              handler: async function () {
                await this.getTradingViewURL(), await this.getAvailableCharts();
              },
            },
          },
          data() {
            return {
              selectedChart: null,
              tradingViewUrl: null,
              availableCharts: [],
            };
          },
          methods: {
            async getTradingViewURL() {
              let t = await new w["a"]().getChartString(this.fromToken.symbol);
              (this.selectedChart = t),
                this.$log.debug(t),
                (this.tradingViewUrl =
                  "https://www.tradingview.com/widgetembed/?frameElementId=tradingview_0edbc&interval=1D&range=12M&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&theme=dark&style=1&locale=en&withdateranges=1&symbol=" +
                  t);
            },
            async getAvailableCharts() {
              if (
                ((this.availableCharts = []),
                "ETH" !== this.fromToken.symbol &&
                  "WETH" !== this.fromToken.symbol)
              )
                try {
                  const t = await new w["a"]().getChartEth(
                    this.fromToken.symbol
                  );
                  if ("NONE" !== t.toUpperCase()) {
                    const e = "1/" + t;
                    this.availableCharts.push({
                      label: "ETH/" + this.fromToken.symbol,
                      chartString: t,
                    }),
                      this.availableCharts.push({
                        label: this.fromToken.symbol + "/ETH",
                        chartString: e,
                      });
                  }
                } catch (t) {
                  this.$log.debug(t);
                }
              if ("USDT" !== this.fromToken.symbol)
                try {
                  const t = await new w["a"]().getChartUsdt(
                    this.fromToken.symbol
                  );
                  if ("NONE" !== t.toUpperCase()) {
                    const e = "1/" + t;
                    this.availableCharts.push({
                      label: "USDT/" + this.fromToken.symbol,
                      chartString: t,
                    }),
                      this.availableCharts.push({
                        label: this.fromToken.symbol + "/USDT",
                        chartString: e,
                      });
                  }
                } catch (t) {
                  this.$log.debug(t);
                }
            },
            changeIframeTo(t) {
              (this.selectedChart = t),
                (this.tradingViewUrl =
                  "https://www.tradingview.com/widgetembed/?frameElementId=tradingview_0edbc&interval=1D&range=12M&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&theme=dark&style=1&locale=en&withdateranges=1&symbol=" +
                  t);
            },
          },
        },
        x = k,
        T = (o("09a1"), Object(b["a"])(x, s, r, !1, null, "3abced23", null)),
        y = T.exports,
        C = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass:
                "column is-2-fullhd is-3-desktop is-3-tablet order-book",
            },
            [
              e(
                "div",
                { staticClass: "columns is-gapless pb-0 mb-0 box-border" },
                [
                  e(
                    "div",
                    { staticClass: "column is-12 padding-bottom pb-0 mb-0" },
                    [
                      e(
                        "div",
                        {
                          staticClass:
                            "block-title is-flex is-justify-content-space-between",
                        },
                        [
                          e("div", { staticClass: "text-ellipsis" }, [
                            t._v("DeFi Order Book"),
                          ]),
                          e(
                            "div",
                            { staticClass: "order-book-dropdown is-relative" },
                            [
                              e(
                                "span",
                                {
                                  on: {
                                    click: function (e) {
                                      return t.togglePercentageDropdown();
                                    },
                                  },
                                },
                                [
                                  t._v(" " + t._s(t.selectedPercentage) + "% "),
                                  e("b-icon", {
                                    staticStyle: {
                                      position: "relative",
                                      top: "5px",
                                    },
                                    attrs: { icon: "chevron-down" },
                                  }),
                                ],
                                1
                              ),
                              t.percentageDropdownActive
                                ? e(
                                    "div",
                                    { staticClass: "dropdown-content pr-4" },
                                    [
                                      t._m(0),
                                      e(
                                        "div",
                                        {
                                          class: {
                                            active: 1 === t.selectedPercentage,
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.setPercentage(1);
                                            },
                                          },
                                        },
                                        [t._v("1%")]
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: {
                                            active: 2 === t.selectedPercentage,
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.setPercentage(2);
                                            },
                                          },
                                        },
                                        [t._v("2%")]
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: {
                                            active: 3 === t.selectedPercentage,
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.setPercentage(3);
                                            },
                                          },
                                        },
                                        [t._v("3%")]
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: {
                                            active: 5 === t.selectedPercentage,
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.setPercentage(5);
                                            },
                                          },
                                        },
                                        [t._v("5%")]
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: {
                                            active: 9 === t.selectedPercentage,
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.setPercentage(9);
                                            },
                                          },
                                        },
                                        [t._v("9%")]
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]
                          ),
                        ]
                      ),
                      e(
                        "div",
                        { staticClass: "columns table-data is-mobile" },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "column ml-4 header is-one-quarter has-text-left nowrap",
                            },
                            [
                              t._v(
                                t._s(
                                  t.getMidPrice(
                                    t.midOfOrderBook.token0Symbol,
                                    t.midOfOrderBook.token1Symbol
                                  )
                                ) +
                                  "/" +
                                  t._s(
                                    t.getMidPrice(
                                      t.midOfOrderBook.token1Symbol,
                                      t.midOfOrderBook.token0Symbol
                                    )
                                  )
                              ),
                            ]
                          ),
                          e(
                            "div",
                            {
                              staticClass:
                                "column pr-2 header is-one-third has-text-right nowrap",
                            },
                            [t._v("$price")]
                          ),
                          e(
                            "div",
                            {
                              staticClass:
                                "column pr-4 header has-text-right nowrap",
                            },
                            [t._v("$value")]
                          ),
                        ]
                      ),
                      e("div", [
                        e(
                          "div",
                          { staticStyle: { "min-height": "240px" } },
                          [
                            e(
                              "div",
                              { staticStyle: { position: "relative" } },
                              t._l(t.topOfOrderBook, function (o, a) {
                                return e("div", {
                                  key: a,
                                  staticClass: "progress-bar ask",
                                  style: {
                                    top: 23.5 * a + "px",
                                    width: t.getProgressBarWidth(o),
                                  },
                                });
                              }),
                              0
                            ),
                            t._l(t.topOfOrderBook, function (o, a) {
                              return e(
                                "div",
                                {
                                  key: a,
                                  staticClass:
                                    "columns is-mobile order-book-row",
                                  on: {
                                    click: function (e) {
                                      return t.setTokenPrice(o);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column ml-4 is-one-quarter order-book-danger pt-0 has-text-left",
                                      attrs: {
                                        title: t._f("formatPrice")(
                                          t.getPriceTokens(o),
                                          6
                                        ),
                                        id: a,
                                      },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("intlFormat")(
                                            t.getPriceTokens(o)
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column pr-2 is-one-third order-book-info pt-0 has-text-right",
                                      attrs: {
                                        title: t._f("formatPrice")(
                                          t.getPrice(o),
                                          6
                                        ),
                                      },
                                    },
                                    [
                                      t._v(
                                        t._s(t._f("intlFormat")(t.getPrice(o)))
                                      ),
                                    ]
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column pr-4 order-book-info pt-0 has-text-right is-relative",
                                      attrs: {
                                        title: t._f("formatPrice")(
                                          o.usdValue,
                                          6
                                        ),
                                      },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(t._f("intlFormat")(o.usdValue)) +
                                          " "
                                      ),
                                    ]
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                        e(
                          "div",
                          {
                            staticClass:
                              "columns is-mobile mt-1 mb-5 ml-0 mr-0 more-block",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass:
                                  "column ml-4 is-one-quarter order-book-info is-size-6 pt-0 pb-1 pl-0 has-text-left",
                                attrs: {
                                  title: t._f("formatPrice")(
                                    t.getMidPrice(
                                      t.midOfOrderBook.token0Price,
                                      t.midOfOrderBook.token1Price
                                    ),
                                    6
                                  ),
                                },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(
                                      t._f("intlFormat")(
                                        t.getMidPrice(
                                          t.midOfOrderBook.token0Price,
                                          t.midOfOrderBook.token1Price
                                        )
                                      )
                                    ) +
                                    " "
                                ),
                              ]
                            ),
                            e(
                              "div",
                              {
                                staticClass:
                                  "column is-one-third order-book-info-dark is-size-6 pt-0 pb-1 pl-0 pr-2 mr-0 has-text-right",
                                attrs: {
                                  title: t._f("formatPrice")(
                                    t.getMidValue(
                                      t.midOfOrderBook.price0USD,
                                      t.midOfOrderBook.price1USD
                                    ),
                                    6
                                  ),
                                },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(
                                      t._f("intlFormat")(
                                        t.getMidValue(
                                          t.midOfOrderBook.price0USD,
                                          t.midOfOrderBook.price1USD
                                        )
                                      )
                                    ) +
                                    " "
                                ),
                              ]
                            ),
                            e(
                              "div",
                              {
                                staticClass:
                                  "column order-book-info-dark is-size-6 pt-0 pb-5 pl-0 pr-4 has-text-right is-relative more-button",
                                attrs: { title: "More" },
                              },
                              [
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      href: t.getPoolUrl(),
                                      target: "_blank",
                                    },
                                  },
                                  [t._v("More")]
                                ),
                              ]
                            ),
                          ]
                        ),
                        e(
                          "div",
                          [
                            e(
                              "div",
                              { staticStyle: { position: "relative" } },
                              t._l(t.bottomOfOrderBook, function (o, a) {
                                return e("div", {
                                  key: a,
                                  staticClass: "progress-bar bid",
                                  style: {
                                    top: 23.5 * a + "px",
                                    width: t.getProgressBarWidth(o),
                                  },
                                });
                              }),
                              0
                            ),
                            t._l(t.bottomOfOrderBook, function (o, a) {
                              return e(
                                "div",
                                {
                                  key: a,
                                  staticClass:
                                    "columns is-mobile order-book-row",
                                  on: {
                                    click: function (e) {
                                      return t.setTokenPrice(o);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column ml-4 is-one-quarter order-book-success pt-0 pb-1 has-text-left",
                                      attrs: {
                                        id: a,
                                        title: t._f("formatPrice")(
                                          t.getPriceTokens(o),
                                          6
                                        ),
                                      },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("intlFormat")(
                                            t.getPriceTokens(o)
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column is-one-third order-book-info pr-2 pt-0 pb-1 has-text-right",
                                      attrs: {
                                        title: t._f("formatPrice")(
                                          t.getPrice(o),
                                          6
                                        ),
                                      },
                                    },
                                    [
                                      t._v(
                                        t._s(t._f("intlFormat")(t.getPrice(o)))
                                      ),
                                    ]
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column order-book-info pr-4 pt-0 pb-1 has-text-right is-relative",
                                      attrs: {
                                        title: t._f("formatPrice")(
                                          o.usdValue,
                                          6
                                        ),
                                      },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(t._f("intlFormat")(o.usdValue)) +
                                          " "
                                      ),
                                    ]
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              e("div", { staticClass: "columns is-gapless fixed-height" }, [
                e(
                  "div",
                  { staticClass: "column is-12" },
                  [
                    e("swap", {
                      staticClass: "is-hidden-mobile",
                      attrs: { mode: 1, pool: t.pool, rate: t.rate },
                    }),
                    e("value", {
                      staticClass: "is-hidden-mobile",
                      attrs: {
                        mode: 1,
                        "from-token": t.fromToken,
                        "label-enabled": !0,
                      },
                    }),
                    e("div", { staticClass: "box-border empty-box" }),
                  ],
                  1
                ),
              ]),
            ]
          );
        },
        _ = [
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "drop-title" }, [
              e("i", [t._v("Price interval")]),
            ]);
          },
        ],
        P = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "swap box-border" }, [
            e(
              "div",
              {
                staticClass:
                  "columns is-gapless trade-label mb-0 mt-2 block-label",
              },
              [
                t._v(
                  t._s(1 === t.mode ? "Buy" : "Sell") +
                    " " +
                    t._s(t.fromToken.symbol) +
                    " "
                ),
              ]
            ),
            e(
              "div",
              {
                staticClass:
                  "columns is-gapless type-label ml-0 mb-0 mt-0 block-label is-mobile",
              },
              [
                e(
                  "div",
                  { staticClass: "column is-2 has-text-left selected" },
                  [t._v("Limit")]
                ),
                e(
                  "div",
                  {
                    staticClass: "column is-2 has-text-left not-selected",
                    on: {
                      click: function (e) {
                        return t.openMainView(
                          t.mode,
                          t.fromToken.symbol,
                          t.toToken.symbol,
                          2
                        );
                      },
                    },
                  },
                  [t._v("Market")]
                ),
                e(
                  "div",
                  {
                    staticClass: "column is-2 has-text-left not-selected",
                    on: {
                      click: function (e) {
                        return t.openMainView(
                          t.mode,
                          t.fromToken.symbol,
                          t.toToken.symbol,
                          3
                        );
                      },
                    },
                  },
                  [t._v("Cheaper")]
                ),
              ]
            ),
            e(
              "div",
              { staticClass: "columns is-gapless is-mobile pl-5 pr-5 mt-3" },
              [
                e(
                  "div",
                  { staticClass: "column trade-label mt-0 pt-0 input-wrapper" },
                  [
                    t.isConnected()
                      ? e(
                          "div",
                          {
                            staticStyle: {
                              width: "92%",
                              margin: "10px auto 10px",
                            },
                          },
                          [
                            e(
                              "b-field",
                              [
                                e(
                                  "b-slider",
                                  {
                                    attrs: {
                                      min: 0,
                                      max: 100,
                                      tooltip: !0,
                                      format: "percent",
                                      rounded: !0,
                                      "bigger-slider-focus": !0,
                                    },
                                    on: { change: t.onBalancePercentageChange },
                                    model: {
                                      value: t.balancePercentage,
                                      callback: function (e) {
                                        t.balancePercentage = e;
                                      },
                                      expression: "balancePercentage",
                                    },
                                  },
                                  [
                                    e("b-slider-tick", { attrs: { value: 0 } }),
                                    e("b-slider-tick", {
                                      attrs: { value: 25 },
                                    }),
                                    e("b-slider-tick", {
                                      attrs: { value: 50 },
                                    }),
                                    e("b-slider-tick", {
                                      attrs: { value: 75 },
                                    }),
                                    e("b-slider-tick", {
                                      attrs: { value: 100 },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    e(
                      "div",
                      {
                        staticClass:
                          "is-flex is-justify-content-space-between mt-1",
                      },
                      [
                        e("div", { staticClass: "pl-3 max-min-label" }, [
                          t._v(
                            " Balance: " +
                              t._s(t._f("formatPrice")(t.balance, 6)) +
                              " " +
                              t._s(
                                1 === t.mode
                                  ? t.toToken.symbol
                                  : t.fromToken.symbol
                              ) +
                              " "
                          ),
                        ]),
                      ]
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "is-flex is-justify-content-space-between input-container",
                      },
                      [
                        e("b-input", {
                          staticClass: "full-width",
                          attrs: { placeholder: "Amount" },
                          nativeOn: {
                            keydown: function (e) {
                              return t.onNumberInputKeypress(e);
                            },
                          },
                          model: {
                            value: t.amount,
                            callback: function (e) {
                              t.amount = e;
                            },
                            expression: "amount",
                          },
                        }),
                        e("div", { staticClass: "token-label" }, [
                          t._v(
                            t._s(
                              1 === t.mode
                                ? t.toToken.symbol
                                : t.fromToken.symbol
                            )
                          ),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "is-flex is-justify-content-space-between mt-1 input-container",
                      },
                      [
                        e("b-input", {
                          staticClass: "full-width",
                          attrs: { placeholder: "Price" },
                          nativeOn: {
                            keydown: function (e) {
                              return t.onNumberInputKeypress(e);
                            },
                          },
                          model: {
                            value: t.price,
                            callback: function (e) {
                              t.price = e;
                            },
                            expression: "price",
                          },
                        }),
                        e("div", { staticClass: "token-label" }, [
                          t._v(
                            t._s(
                              1 === t.mode
                                ? t.fromToken.symbol
                                : t.toToken.symbol
                            )
                          ),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "is-flex is-justify-content-space-between mt-1",
                      },
                      [
                        1 === t.mode
                          ? e("div", { staticClass: "pl-3 max-min-label" }, [
                              t._v(
                                "Current (min): " +
                                  t._s(
                                    t._f("formatPrice")(t.calculateMax(), 6)
                                  ) +
                                  " " +
                                  t._s(t.fromToken.symbol) +
                                  " "
                              ),
                            ])
                          : e("div", { staticClass: "pl-4 max-min-label" }, [
                              t._v(
                                "Current (min): " +
                                  t._s(
                                    t._f("formatPrice")(t.calculateMin(), 6)
                                  ) +
                                  " " +
                                  t._s(t.toToken.symbol) +
                                  " "
                              ),
                            ]),
                      ]
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "is-flex is-justify-content-space-between mt-1 input-container",
                      },
                      [
                        e("b-input", {
                          staticClass: "full-width",
                          attrs: { readonly: "true", placeholder: "Total" },
                          nativeOn: {
                            keydown: function (e) {
                              return t.onNumberInputKeypress(e);
                            },
                          },
                          model: {
                            value: t.total,
                            callback: function (e) {
                              t.total = e;
                            },
                            expression: "total",
                          },
                        }),
                        e("div", { staticClass: "input-token-label" }, [
                          t._v(
                            t._s(
                              1 === t.mode
                                ? t.fromToken.symbol
                                : t.toToken.symbol
                            )
                          ),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "is-flex is-justify-content-space-between mt-1",
                      },
                      [
                        e("div", { staticClass: "full-width" }, [
                          t.isConnected()
                            ? t.noAmountChosen
                              ? e(
                                  "button",
                                  {
                                    class: {
                                      "buy-button": 1 === t.mode,
                                      "sell-button": 2 === t.mode,
                                    },
                                    attrs: { disabled: t.noAmountChosen },
                                  },
                                  [t._v("Set input amount ")]
                                )
                              : t.showPriceError
                              ? e(
                                  "button",
                                  {
                                    class: {
                                      "buy-button": 1 === t.mode,
                                      "sell-button": 2 === t.mode,
                                    },
                                    attrs: { disabled: t.showPriceError },
                                  },
                                  [t._v("Choose a higher price ")]
                                )
                              : t.balanceExceeded
                              ? e(
                                  "button",
                                  {
                                    class: {
                                      "buy-button": 1 === t.mode,
                                      "sell-button": 2 === t.mode,
                                    },
                                    attrs: { disabled: t.balanceExceeded },
                                    on: {
                                      click: function (e) {
                                        return t.trade();
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "Add " +
                                        t._s(
                                          1 === t.mode
                                            ? t.toToken.symbol
                                            : t.fromToken.symbol
                                        ) +
                                        " balance "
                                    ),
                                  ]
                                )
                              : t.isApproved
                              ? t.isApproved
                                ? e(
                                    "button",
                                    {
                                      class: {
                                        "buy-button": 1 === t.mode,
                                        "sell-button": 2 === t.mode,
                                      },
                                      on: {
                                        click: function (e) {
                                          return t.trade();
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        t._s(1 === t.mode ? "Buy" : "Sell") +
                                          " " +
                                          t._s(t.fromToken.symbol) +
                                          " "
                                      ),
                                    ]
                                  )
                                : t._e()
                              : e(
                                  "button",
                                  {
                                    class: {
                                      "buy-button": 1 === t.mode,
                                      "sell-button": 2 === t.mode,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.requestApproval();
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "Approve " +
                                        t._s(
                                          1 === t.mode
                                            ? t.toToken.symbol
                                            : t.fromToken.symbol
                                        ) +
                                        " "
                                    ),
                                  ]
                                )
                            : e(
                                "button",
                                {
                                  class: {
                                    "buy-button": 1 === t.mode,
                                    "sell-button": 2 === t.mode,
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.connectWallet();
                                    },
                                  },
                                },
                                [t._v("Connect wallet ")]
                              ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]);
        },
        O = [],
        S = o("901e"),
        z = o.n(S),
        B = o("b6a3"),
        M = o("e51c"),
        A = {
          name: "Swap",
          store: f["a"],
          props: {
            mode: Number,
            pool: void 0,
            setPriceFromValue: Number,
            rate: void 0,
          },
          data() {
            return {
              balance: 0,
              fromToken: { symbol: null },
              toToken: { symbol: null },
              amount: void 0,
              price: void 0,
              total: void 0,
              isApproved: !1,
              balanceExceeded: !1,
              showPriceError: !0,
              noAmountChosen: !0,
              balancePercentage: 25,
            };
          },
          watch: {
            "$route.params.fromAddress": {
              deep: !0,
              handler: function () {
                this.init();
              },
            },
            "$store.state.proViewBuyValue": {
              deep: !0,
              handler: function () {
                1 === this.mode &&
                  (this.price = this.$store.state.proViewBuyValue);
              },
            },
            "$store.state.proViewSellValue": {
              deep: !0,
              handler: function () {
                2 === this.mode &&
                  (this.price = this.$store.state.proViewSellValue);
              },
            },
            amount() {
              const t = new z.a(this.amount).multipliedBy(this.price);
              !t.isNaN() && t.isFinite()
                ? (this.total = t.toString(10))
                : (this.total = null),
                (this.balanceExceeded = this.amount > this.balance),
                (this.noAmountChosen =
                  void 0 === this.amount || this.amount <= 0),
                setTimeout(() => {
                  let t = new RegExp("^[0-9]*[.,]?[0-9]*$");
                  if (this.amount && !t.test(this.amount)) {
                    let t = this.amount.split(".");
                    (t = t.shift() + "." + t.join("")), (this.amount = t);
                  }
                  this.amount = this.amount.replace(",", ".");
                }, 10),
                this.updatePercentFromFromTokenValue(this.amount);
            },
            price() {
              const t = new z.a(this.amount).multipliedBy(this.price);
              let e;
              if (
                (!t.isNaN() && t.isFinite()
                  ? (this.total = t.toString(10))
                  : (this.total = null),
                1 === this.mode)
              )
                (e = new z.a(this.calculateMax()).plus(
                  this.calculateMinimumRateOffset()
                )),
                  (this.showPriceError =
                    void 0 !== this.rate &&
                    -1 === new z.a(this.price).comparedTo(e));
              else {
                const t = new z.a(this.calculateMin()).plus(
                  this.calculateMinimumRateOffset()
                );
                this.showPriceError =
                  void 0 !== this.rate &&
                  1 !== new z.a(this.price).comparedTo(t);
              }
            },
          },
          async mounted() {
            await this.init();
          },
          methods: {
            async init() {
              const t = this.$route.params.fromAddress;
              let e = await new d["a"]().getTokensList();
              this.fromToken = e.filter(
                (e) => e.address.toLowerCase() === t.toLowerCase()
              )[0];
              let o = await new d["a"]().getProViewToToken(this.fromToken);
              (this.toToken = e.filter(
                (t) => t.address.toLowerCase() === o.toLowerCase()
              )[0]),
                1 === this.mode
                  ? setTimeout(async () => {
                      (this.balance = await new d["a"]().getTokenBalance(
                        this.toToken
                      )),
                        this.preSetTargetPrice(),
                        this.onBalancePercentageChange(25);
                    }, 1e3)
                  : setTimeout(async () => {
                      (this.balance = await new d["a"]().getTokenBalance(
                        this.fromToken
                      )),
                        this.preSetTargetPrice(),
                        this.onBalancePercentageChange(25);
                    }, 1e3),
                await this.checkIfAlreadyApproved();
            },
            onNumberInputKeypress(t) {
              let e = t.charCode || t.keyCode || 0,
                o =
                  8 === e ||
                  9 === e ||
                  13 === e ||
                  46 === e ||
                  110 === e ||
                  190 === e ||
                  37 === e ||
                  39 === e ||
                  188 === e ||
                  (e >= 48 && e <= 57) ||
                  (e >= 96 && e <= 105);
              o || t.preventDefault();
            },
            async trade() {
              const t = this.$buefy.loading.open(),
                e = new d["a"](),
                o = await e.getChainId();
              try {
                let a,
                  i,
                  s = await e.getAddress(),
                  r = e.getNativeToken(o);
                1 === this.mode
                  ? ((a = this.toToken.symbol === r),
                    (i =
                      this.toToken.symbol === r
                        ? new z.a(this.amount).shiftedBy(18).toString(10)
                        : 0))
                  : ((a = this.fromToken.symbol === r),
                    (i =
                      this.fromToken.symbol === r
                        ? new z.a(this.amount).shiftedBy(18).toString(10)
                        : 0));
                let n,
                  l = this.fromToken.address,
                  c = this.toToken.address,
                  p = this.pool;
                n =
                  1 === this.mode
                    ? await new w["a"]().evaluateLimitTrade(
                        p,
                        c,
                        l,
                        this.amount,
                        this.price,
                        o
                      )
                    : await new w["a"]().evaluateLimitTrade(
                        p,
                        l,
                        c,
                        this.amount,
                        this.price,
                        o
                      );
                let m = Number(n.data.amount1) > 0,
                  u = n.data.tickLower,
                  b = n.data.tickUpper,
                  v = new z.a(n.data.liquidity).toString(10);
                this.$log.debug("Amount: " + this.amount),
                  this.$log.debug("Price: " + this.price),
                  this.$log.debug("From address: " + l);
                let g = await new h["ethers"].Contract(
                  await e.getManagerAddressV2(),
                  await e.getAbiV2(),
                  f["a"].state.signer
                );
                this.$log.debug(`${a} ${m} ${p} ${u} ${b} ${v}`);
                let k = await f["a"].state.provider.getFeeData().gasPrice;
                this.$log.debug("Estimated gas web3: " + k);
                let x,
                  T,
                  y = !1;
                this.$log.debug("Send relayed is: " + y);
                let C = await Object(B["a"])(
                  y,
                  g,
                  p,
                  m,
                  a,
                  i,
                  u,
                  b,
                  new z.a(v).toString(10),
                  k,
                  x,
                  T
                );
                this.$log.debug("Receipt", C);
                let _ = e.getExplorerLink(o);
                this.etherscanLink = _ + C.transactionHash;
                const P = (await new w["a"]().isSubscribedEmail(s)).data;
                (this.subscribedEmail = P.email ? P.email : void 0),
                  (this.swapPlaced = !0);
              } catch (a) {
                this.$log.error(a),
                  this.$buefy.toast.open({
                    duration: 5e3,
                    message:
                      "Wallet did not confirm, blockchain unresponsive, or market prices changed. Please try again later",
                    position: "is-bottom",
                    type: "is-danger",
                  });
              } finally {
                t.close(),
                  (this.balance = await new d["a"]().getTokenBalance(
                    this.toToken
                  ));
              }
            },
            async requestApproval() {
              const t = this.$buefy.loading.open();
              try {
                1 === this.mode
                  ? await this.approve(this.toToken.address)
                  : await this.approve(this.fromToken.address),
                  (this.isApproved = !0);
              } catch (e) {
                (this.isApproved = !1),
                  this.$log.error(e),
                  this.$buefy.toast.open({
                    duration: 5e3,
                    message:
                      "Wallet did not Approve, or blockchain unresponsive. Please try again later",
                    position: "is-bottom",
                    type: "is-danger",
                  });
              } finally {
                t.close();
              }
            },
            async approve(t) {
              let e = this;
              await new h["ethers"].Contract(t, M["a"], f["a"].state.signer)
                .approve(
                  await new d["a"]().getManagerAddressV2(),
                  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                )
                .then(function (t) {
                  e.$log.debug(t);
                });
            },
            async checkIfAlreadyApproved() {
              let t = await new d["a"]().getChainId(),
                e = 1 === this.mode ? this.toToken : this.fromToken;
              if (void 0 !== e.symbol) {
                let a = new d["a"]().getNativeToken(t);
                if (e.symbol === a) return (this.isApproved = !0), !0;
                if (this.isConnected())
                  try {
                    this.$log.debug("Checking Approve");
                    let t = await this.getTokenAllowance(e.address),
                      o = t <= 0;
                    return (this.isApproved = !o), !o;
                  } catch (o) {
                    this.$buefy.toast.open({
                      duration: 5e3,
                      message:
                        "Wallet did not Approve, or blockchain unresponsive. Please try again later",
                      position: "is-bottom",
                      type: "is-danger",
                    }),
                      this.$log.error(o);
                  }
              } else
                this.$log.debug(
                  "From token is missing, skipping check of approval"
                );
            },
            async getTokenAllowance(t) {
              let e = await new d["a"]().getAddress(),
                o = await new h["ethers"].Contract(
                  t,
                  M["a"],
                  f["a"].state.signer
                );
              return await o.allowance(
                e,
                await new d["a"]().getManagerAddressV2()
              );
            },
            calculateMin() {
              let t = new z.a(this.rate).decimalPlaces(6);
              return t.isNaN() || !t.isFinite() ? 0 : t.toString(10);
            },
            calculateMax() {
              let t = new z.a(1).dividedBy(this.rate).decimalPlaces(6);
              return t.isNaN() || !t.isFinite() ? 0 : t.toString(10);
            },
            isConnected() {
              return f["a"].getters.account;
            },
            calculateMinimumRateOffset() {
              const t = 0.2;
              if (1 === this.mode) {
                const e = new z.a(1).dividedBy(this.rate);
                let o = new z.a(e).multipliedBy(t).decimalPlaces(18);
                return (o = new z.a(o).dividedBy(100).decimalPlaces(18)), o;
              }
              {
                let e = new z.a(this.rate).multipliedBy(t).decimalPlaces(18);
                return (e = new z.a(e).dividedBy(100).decimalPlaces(18)), e;
              }
            },
            async connectWallet() {
              await new d["a"]().connectWallet();
            },
            onBalancePercentageChange(t) {
              if (this.balance > 0) {
                const e = new z.a(this.balance)
                  .multipliedBy(t)
                  .dividedBy(100)
                  .decimalPlaces(18)
                  .toString();
                this.$log.debug(`Set fromTokenValue ${e} from percentage`),
                  (this.amount = e);
              } else this.amount = "0";
            },
            updatePercentFromFromTokenValue(t) {
              const e = new z.a(t)
                .dividedBy(this.balance)
                .multipliedBy(100)
                .decimalPlaces(18)
                .toNumber();
              this.$log.debug(
                "Set balance percentage from fromTokenValue " + e
              ),
                (this.balancePercentage = e);
            },
            openMainView(t, e, o, a) {
              1 === t
                ? window.open(`/prefill-trade/${o}/${e}/0/${a}`, "_blank")
                : window.open(`/prefill-trade/${e}/${o}/0/${a}`, "_blank");
            },
            preSetTargetPrice() {
              if (1 === this.mode) {
                const t = this.calculateMax();
                if (t) {
                  const e = new z.a(t).multipliedBy(5).dividedBy(100);
                  this.price = new z.a(t).plus(e).toString(10);
                }
              } else {
                const t = this.calculateMin();
                if (t) {
                  const e = new z.a(t).multipliedBy(5).dividedBy(100);
                  this.price = new z.a(t).plus(e).toString(10);
                }
              }
            },
          },
        },
        $ = A,
        V = (o("cc6e"), Object(b["a"])($, P, O, !1, null, "595fcbc0", null)),
        D = V.exports,
        j = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "value box-border pl-2 pr-2" }, [
            e(
              "div",
              {
                staticClass:
                  "columns is-mobile mt-0 pt-0 pb-0 mb-0 container-top-border",
                class: { "is-invisible": !t.labelEnabled },
              },
              [
                e(
                  "div",
                  { staticClass: "column trade-label pb-0 mb-3 ml-2 m-0" },
                  [t._v("$ Value")]
                ),
              ]
            ),
            e("div", { staticClass: "columns is-mobile pl-4 pr-4 mt-0" }, [
              e("div", { staticClass: "column trade-label mt-0 pt-0" }, [
                e(
                  "div",
                  {
                    staticClass:
                      "is-flex is-justify-content-space-between input-container",
                  },
                  [
                    e("b-input", {
                      attrs: { placeholder: t.placeholder },
                      nativeOn: {
                        keydown: function (e) {
                          return t.onNumberInputKeypress(e);
                        },
                      },
                      model: {
                        value: t.price,
                        callback: function (e) {
                          t.price = e;
                        },
                        expression: "price",
                      },
                    }),
                    e("div", { staticClass: "token-label" }, [
                      e(
                        "a",
                        {
                          on: {
                            click: function (e) {
                              return t.setDollarPrice();
                            },
                          },
                        },
                        [t._v("Set")]
                      ),
                    ]),
                    e("div", { staticClass: "token-label" }, [t._v("$")]),
                  ],
                  1
                ),
                e(
                  "div",
                  {
                    staticClass:
                      "is-flex is-justify-content-space-between mt-1",
                  },
                  [
                    e("div", { staticClass: "pl-3 max-min-label" }, [
                      t._v(
                        "Current: $" +
                          t._s(
                            1 === t.mode ? t.fromTokenPrice : t.toTokenPrice
                          ) +
                          " per " +
                          t._s(
                            1 === t.mode ? t.fromToken.symbol : t.toToken.symbol
                          )
                      ),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]);
        },
        F = [],
        I = o("2ef0e"),
        N = o.n(I),
        L = {
          name: "Value",
          store: f["a"],
          props: { labelEnabled: Boolean, fromToken: Object, mode: Number },
          watch: {
            fromToken: {
              deep: !0,
              handler: async function () {
                await this.init();
              },
            },
          },
          data() {
            return {
              toToken: {},
              fromTokenPrice: void 0,
              toTokenPrice: void 0,
              dollarValue: void 0,
              price: void 0,
              placeholder: void 0,
            };
          },
          async mounted() {
            await this.init();
          },
          methods: {
            async init() {
              if (this.fromToken && this.fromToken.address) {
                let t = await new d["a"]().getTokensList(),
                  e = await new d["a"]().getProViewToToken(this.fromToken);
                if (e) {
                  this.toToken = await t.filter(
                    (t) => t.address.toLowerCase() === e.toLowerCase()
                  )[0];
                  let o = await new w["a"]().getPricesUSD(this.fromToken.id);
                  (this.fromTokenPrice = N.a.get(o, "0.current_price", 0)),
                    (o = await new w["a"]().getPricesUSD(this.toToken.id)),
                    (this.toTokenPrice = N.a.get(o, "0.current_price", 0)),
                    1 === this.mode
                      ? (this.dollarValue = new z.a(this.fromTokenPrice)
                          .decimalPlaces(18)
                          .toString(10))
                      : (this.dollarValue = new z.a(this.toTokenPrice)
                          .decimalPlaces(18)
                          .toString(10)),
                    (this.placeholder =
                      "$ per " +
                      (1 === this.mode
                        ? this.fromToken.symbol
                        : this.toToken.symbol));
                }
                this.preSetValue();
              }
            },
            onNumberInputKeypress(t) {
              let e = t.charCode || t.keyCode || 0,
                o =
                  8 === e ||
                  9 === e ||
                  13 === e ||
                  46 === e ||
                  110 === e ||
                  190 === e ||
                  37 === e ||
                  39 === e ||
                  188 === e ||
                  (e >= 48 && e <= 57) ||
                  (e >= 96 && e <= 105);
              o || t.preventDefault();
            },
            setDollarPrice() {
              let t;
              1 === this.mode
                ? ((t = new z.a(this.toTokenPrice)
                    .dividedBy(this.price)
                    .decimalPlaces(6)),
                  (!t.isNaN() && t.isFinite()) || (t = 0),
                  this.$store.dispatch("setProViewBuyValue", t.toString(10)),
                  this.$store.dispatch(
                    "setProViewSellValue",
                    new z.a(1).dividedBy(t).toString(10)
                  ))
                : ((t = new z.a(this.fromTokenPrice)
                    .dividedBy(this.price)
                    .decimalPlaces(6)),
                  (!t.isNaN() && t.isFinite()) || (t = 0),
                  this.$store.dispatch("setProViewSellValue", t.toString(10)),
                  this.$store.dispatch(
                    "setProViewBuyValue",
                    new z.a(1).dividedBy(t).toString(10)
                  ));
            },
            preSetValue() {
              if (1 === this.mode) {
                let t = new z.a(this.dollarValue)
                  .multipliedBy(5)
                  .dividedBy(100);
                this.price = new z.a(this.dollarValue).minus(t).toString(10);
              } else {
                let t = new z.a(this.dollarValue)
                  .multipliedBy(5)
                  .dividedBy(100);
                this.price = new z.a(this.dollarValue).plus(t).toString(10);
              }
            },
          },
        },
        U = L,
        E = (o("d7bb"), Object(b["a"])(U, j, F, !1, null, "befdf778", null)),
        q = E.exports,
        R = {
          name: "OrderBook",
          props: {
            topOfOrderBook: Array,
            bottomOfOrderBook: Array,
            fromToken: Object,
            midOfOrderBook: Object,
            pool: void 0,
            rate: void 0,
          },
          components: { Value: q, Swap: D },
          watch: {
            fromToken: {
              deep: !0,
              handler: async function (t) {
                let e = await new d["a"]().getTokensList(),
                  o = await new d["a"]().getProViewToToken(t);
                this.toToken = e.filter(
                  (t) => t.address.toLowerCase() === o.toLowerCase()
                )[0];
              },
            },
          },
          data() {
            return {
              percentageDropdownActive: !1,
              selectedPercentage: 1,
              toToken: {},
            };
          },
          methods: {
            togglePercentageDropdown() {
              this.percentageDropdownActive = !this.percentageDropdownActive;
            },
            setPercentage(t) {
              (this.selectedPercentage = t),
                this.togglePercentageDropdown(),
                this.$emit("update-gap-percent", t);
            },
            getPoolUrl() {
              return this.pool
                ? "https://info.uniswap.org/#/pools/" + this.pool
                : "#";
            },
            getPrice(t) {
              if (
                this.fromToken &&
                this.fromToken.address &&
                this.toToken &&
                this.toToken.address
              )
                return this.fromToken.address < this.toToken.address
                  ? t.price0USD
                  : t.price1USD;
            },
            getPriceTokens(t) {
              if (
                this.fromToken &&
                this.fromToken.address &&
                this.toToken &&
                this.toToken.address
              )
                return this.fromToken.address > this.toToken.address ||
                  ("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" ===
                    this.fromToken.address.toLowerCase() &&
                    "0xdac17f958d2ee523a2206206994597c13d831ec7" ===
                      this.toToken.address.toLowerCase())
                  ? t.priceTarget
                  : t.invertedPriceTarget;
            },
            getMidPrice(t, e) {
              if (
                this.fromToken &&
                this.fromToken.address &&
                this.toToken &&
                this.toToken.address
              )
                return this.fromToken.address > this.toToken.address ||
                  ("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" ===
                    this.fromToken.address.toLowerCase() &&
                    "0xdac17f958d2ee523a2206206994597c13d831ec7" ===
                      this.toToken.address.toLowerCase())
                  ? e
                  : t;
            },
            getMidValue(t, e) {
              if (
                this.fromToken &&
                this.fromToken.address &&
                this.toToken &&
                this.toToken.address
              )
                return this.fromToken.address > this.toToken.address ? e : t;
            },
            setTokenPrice(t) {
              const e = this.getPriceTokens(t);
              "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" ===
              this.fromToken.address
                ? (this.$store.dispatch("setProViewSellValue", e.toString(10)),
                  this.$store.dispatch(
                    "setProViewBuyValue",
                    new z.a(1).dividedBy(e).toString(10)
                  ))
                : (this.$store.dispatch("setProViewBuyValue", e.toString(10)),
                  this.$store.dispatch(
                    "setProViewSellValue",
                    new z.a(1).dividedBy(e).toString(10)
                  ));
            },
            getProgressBarWidth(t) {
              let e = 8;
              return (
                window.innerWidth < 769 && (e = 20),
                e - (e * (100 - t.sharePercent)) / 100 + "vw"
              );
            },
          },
        },
        H = R,
        W = (o("3035"), Object(b["a"])(H, C, _, !1, null, "c9910d74", null)),
        K = W.exports,
        G = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass:
                "column is-2-fullhd is-3-desktop is-3-tablet recent-trades",
            },
            [
              e(
                "div",
                { staticClass: "columns is-gapless pb-0 mb-0 box-border" },
                [
                  e(
                    "div",
                    { staticClass: "column is-12 box-border padding-bottom" },
                    [
                      e("div", { staticClass: "block-title" }, [
                        t._v(
                          "Recent Swaps at " +
                            t._s(t._f("feeTierFormat")(t.feeTier))
                        ),
                      ]),
                      t._m(0),
                      e(
                        "div",
                        t._l(t.swaps, function (o, a) {
                          return e(
                            "div",
                            {
                              key: a,
                              staticClass: "columns is-mobile order-book-row",
                              on: {
                                click: function (e) {
                                  return t.openTransaction(o);
                                },
                              },
                            },
                            [
                              t.getAmount(o) < 0
                                ? e(
                                    "div",
                                    {
                                      staticClass:
                                        "column ml-4 pl-3 is-one-quarter order-book-danger pt-0 pb-1 has-text-left nowrap",
                                      attrs: { id: a, title: t.getPrice(o) },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t._f("intlFormat")(t.getPrice(o))
                                          ) +
                                          " "
                                      ),
                                    ]
                                  )
                                : e(
                                    "div",
                                    {
                                      staticClass:
                                        "column ml-4 pl-3 is-one-quarter order-book-success pt-0 pb-1 has-text-left nowrap",
                                      attrs: { id: a, title: t.getPrice(o) },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t._f("intlFormat")(t.getPrice(o))
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                              e(
                                "div",
                                {
                                  staticClass:
                                    "column is-one-quarter order-book-info pr-5 pt-0 pb-1 has-text-right nowrap",
                                  attrs: {
                                    title: t._f("formatPrice")(o.amountUSD, 6),
                                  },
                                },
                                [
                                  t._v(
                                    " " +
                                      t._s(t._f("intlFormat")(o.amountUSD)) +
                                      " "
                                  ),
                                ]
                              ),
                              e(
                                "div",
                                {
                                  staticClass:
                                    "column ml-0 pl-0 pt-0 pb-1 is-one-quarter order-book-info has-text-left nowrap",
                                  attrs: { title: t.getOrigin(o) },
                                },
                                [t._v(" " + t._s(t.getOrigin(o)) + " ")]
                              ),
                              e(
                                "div",
                                {
                                  staticClass:
                                    "column order-book-info pl-1 pt-0 pb-1 has-text-left is-relative nowrap",
                                  attrs: {
                                    title: t._f("dateFormatFromDatestamp")(
                                      o.timestamp
                                    ),
                                  },
                                },
                                [
                                  t._v(
                                    " " +
                                      t._s(
                                        t._f("dateFormatFromTimestamp")(
                                          o.timestamp
                                        )
                                      ) +
                                      " "
                                  ),
                                ]
                              ),
                            ]
                          );
                        }),
                        0
                      ),
                    ]
                  ),
                ]
              ),
              e("div", { staticClass: "columns is-gapless fixed-height" }, [
                e(
                  "div",
                  { staticClass: "column is-12" },
                  [
                    e("swap", {
                      staticClass: "is-hidden-mobile",
                      attrs: { mode: 2, rate: t.rate, pool: t.pool },
                    }),
                    e("value", {
                      staticClass: "is-hidden-mobile",
                      attrs: {
                        mode: 2,
                        "from-token": t.fromToken,
                        "label-enabled": !1,
                      },
                    }),
                    e("change-token", {
                      staticClass: "is-hidden-mobile",
                      on: { update: t.updatePage },
                    }),
                  ],
                  1
                ),
              ]),
            ]
          );
        },
        Y = [
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "columns table-data is-mobile" }, [
              e(
                "div",
                {
                  staticClass:
                    "column header ml-4 pl-3 is-one-quarter has-text-left nowrap",
                },
                [t._v("$price")]
              ),
              e(
                "div",
                {
                  staticClass:
                    "column header pr-6 is-one-quarter has-text-right nowrap",
                },
                [t._v("$value")]
              ),
              e(
                "div",
                {
                  staticClass:
                    "column header ml-0 pl-0 is-one-quarter has-text-left nowrap",
                },
                [t._v("Wallet")]
              ),
              e(
                "div",
                { staticClass: "column header pl-1 has-text-left nowrap" },
                [t._v("Time")]
              ),
            ]);
          },
        ],
        J = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "box-border border-top z-index-high pt-2",
              staticStyle: {
                height: "51px",
                "border-left": "none",
                "margin-top": "0",
              },
            },
            [
              e(
                "div",
                {
                  staticClass: "is-flex is-justify-content-end",
                  on: {
                    click: function (e) {
                      t.fromTokenListModalOpen = !0;
                    },
                  },
                },
                [
                  e(
                    "div",
                    {
                      staticClass: "trade-label change-token-label mr-4 mt-1",
                      staticStyle: { "white-space": "nowrap" },
                    },
                    [t._v(" Change Token ")]
                  ),
                  e(
                    "div",
                    {
                      staticClass:
                        "change-token is-flex is-justify-content-space-between mr-1",
                    },
                    [
                      e("img", {
                        staticClass: "token-logo",
                        attrs: { src: t.fromToken.logoURI },
                      }),
                      e("div", { staticClass: "token-name" }, [
                        t._v(t._s(t.fromToken.symbol)),
                      ]),
                      e("img", {
                        staticClass: "arrow-icon",
                        attrs: { src: o("e727"), alt: "Arrow Down" },
                      }),
                    ]
                  ),
                ]
              ),
              e("token-list-modal", {
                attrs: {
                  "all-tokens": t.allTokens,
                  "from-token": t.fromToken,
                  "to-token": {},
                  "is-component-modal-active": t.fromTokenListModalOpen,
                },
                on: {
                  selected: t.fromTokenSelected,
                  close: function (e) {
                    t.fromTokenListModalOpen = !1;
                  },
                },
              }),
            ],
            1
          );
        },
        Q = [],
        X = o("f0f7"),
        Z = {
          name: "ChangeToken",
          components: { TokenListModal: X["a"] },
          data() {
            return { allTokens: [], fromTokenListModalOpen: !1, fromToken: {} };
          },
          async mounted() {
            const t = this.$route.params.fromAddress;
            (this.allTokens = await new d["a"]().getProVIewTokensList()),
              (this.fromToken = this.allTokens.filter((e) => e.address === t)),
              (this.fromToken = this.fromToken[0]);
          },
          methods: {
            async fromTokenSelected(t) {
              (this.fromTokenListModalOpen = !1),
                (this.fromToken = t),
                this.$router
                  .push({
                    name: "Pro Trade",
                    params: { fromAddress: this.fromToken.address },
                  })
                  .catch(() => {}),
                this.$emit("update");
            },
          },
        },
        tt = Z,
        et = (o("8184"), Object(b["a"])(tt, J, Q, !1, null, "72169c16", null)),
        ot = et.exports,
        at = {
          name: "RecentTrades",
          props: {
            swaps: Array,
            fromToken: {},
            pool: void 0,
            feeTier: void 0,
            rate: null,
          },
          data() {
            return { toToken: {} };
          },
          components: { ChangeToken: ot, Value: q, Swap: D },
          watch: {
            fromToken: {
              deep: !0,
              handler: async function (t) {
                let e = await new d["a"]().getTokensList(),
                  o = await new d["a"]().getProViewToToken(t);
                this.toToken = e.filter(
                  (t) => t.address.toLowerCase() === o.toLowerCase()
                )[0];
              },
            },
          },
          methods: {
            updatePage() {
              this.$emit("update");
            },
            openTransaction(t) {
              window.open(
                "https://etherscan.io/tx/" + t.transactionID,
                "_blank"
              );
            },
            getPrice(t) {
              if (this.fromToken)
                return this.fromToken.address < this.toToken.address
                  ? t.price0USD
                  : t.price1USD;
            },
            getAmount(t) {
              if (this.fromToken)
                return this.fromToken.address < this.toToken.address
                  ? t.amount1
                  : t.amount0;
            },
            getOrigin(t) {
              return t.origin;
            },
          },
        },
        it = at,
        st = (o("96c4"), Object(b["a"])(it, G, Y, !1, null, "abecf21c", null)),
        rt = st.exports;
      const nt = 3,
        lt = 6e4;
      var dt = {
          name: "ProTrade",
          components: {
            ChangeToken: ot,
            Orders: g,
            Value: q,
            Swap: D,
            RecentTrades: rt,
            OrderBook: K,
            TradingView: y,
          },
          data() {
            return {
              orders: [],
              pool: null,
              rate: null,
              feeTier: null,
              topOfOrderBook: [],
              bottomOfOrderBook: [],
              midOfOrderBook: {},
              tokenData: {},
              swaps: [],
              fromToken: {},
              gapPercent: 0.01,
            };
          },
          async mounted() {
            await this.getFromToken(),
              (this.loadingComponent = this.$buefy.loading.open()),
              (this.requests = nt),
              (this.chainId = await new d["a"]().getChainId()),
              (this.address = await new d["a"]().getAddress()),
              await this.init(),
              (this.interval = setInterval(async () => {
                await this.init();
              }, lt));
          },
          destroyed() {
            clearTimeout(this.interval);
          },
          methods: {
            getOrders() {
              new w["a"]().getTrades(this.address).then((t) => {
                (this.orders = t),
                  this.requests--,
                  0 === this.requests && this.loadingComponent.close();
              }, this.handleError);
            },
            async getPool() {
              let t = await new d["a"]().getProVIewTokensList();
              const e = t.filter(
                (t) => t.address === this.fromToken.address && void 0 !== t.pool
              )[0];
              (this.pool = e.pool), (this.feeTier = e.feeTier);
            },
            getMidOfOrderBook() {
              new w["a"]().getMidOfOrderBook(this.pool, this.chainId).then(
                (t) => {
                  (this.midOfOrderBook = t.data),
                    this.requests--,
                    0 === this.requests && this.loadingComponent.close();
                },
                (t) => {
                  this.$log.error(t),
                    this.requests--,
                    0 === this.requests && this.loadingComponent.close();
                }
              );
            },
            getSwaps() {
              new w["a"]().getSwaps(this.pool, this.chainId).then((t) => {
                (this.swaps = t.data),
                  this.requests--,
                  0 === this.requests && this.loadingComponent.close();
              }, this.handleError);
            },
            getTokenData() {
              new w["a"]()
                .getTokenInfoFull(
                  this.$route.params.fromAddress,
                  this.pool,
                  this.chainId
                )
                .then(
                  (t) => {
                    this.tokenData = t.data;
                  },
                  (t) => {
                    this.$log.error(t);
                  }
                );
            },
            async init() {
              try {
                await this.getPool();
                const t = await new d["a"]().getProViewToToken(this.fromToken);
                (this.rate = (
                  await new w["a"]().getPool(
                    this.fromToken.address,
                    t,
                    await new d["a"]().getChainId()
                  )
                ).data.rate),
                  this.getMidOfOrderBook(),
                  this.getSwaps(),
                  this.getOrders(),
                  this.getTokenData(),
                  await this.getTopAndBottomOfOrderBook();
              } catch (t) {
                this.$log.error(t),
                  this.loadingComponent.close(),
                  this.$buefy.toast.open({
                    duration: 5e3,
                    message: "An error occurred, please try again",
                    position: "is-bottom",
                    type: "is-danger",
                  });
              }
            },
            handleError(t) {
              this.$log.error(t),
                (this.requests = 0),
                this.$buefy.toast.open({
                  duration: 5e3,
                  message: "An error occurred, please try again",
                  position: "is-bottom",
                  type: "is-danger",
                }),
                this.loadingComponent.close();
            },
            updateGapPercent(t) {
              (this.gapPercent = t / 100),
                (this.loadingComponent = this.$buefy.loading.open()),
                (this.requests = 1),
                this.getTopAndBottomOfOrderBook();
            },
            async updatePage() {
              (this.loadingComponent = this.$buefy.loading.open()),
                (this.requests = nt),
                await this.getFromToken(),
                await this.init();
            },
            async getFromToken() {
              const t = this.$route.params.fromAddress;
              (this.fromToken = (await new d["a"]().getTokensList()).filter(
                (e) => e.address === t
              )),
                (this.fromToken = this.fromToken[0]);
            },
            async updateOrders() {
              await this.getOrders();
            },
            async getTopAndBottomOfOrderBook() {
              let t = await new w["a"]().getTopOfOrderBook(
                  this.pool,
                  this.gapPercent,
                  this.chainId
                ),
                e = await new w["a"]().getBottomOfOrderBook(
                  this.pool,
                  this.gapPercent,
                  this.chainId
                );
              this.fromToken.address <=
              "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
                ? (this.bottomOfOrderBook = e.data)
                : (this.topOfOrderBook = e.data.reverse()),
                this.fromToken.address <=
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
                  ? (this.topOfOrderBook = t.data.reverse())
                  : (this.bottomOfOrderBook = t.data),
                this.requests--,
                0 === this.requests && this.loadingComponent.close();
              try {
                let t = Math.max.apply(
                    Math,
                    this.topOfOrderBook.map((t) => t.usdValue)
                  ),
                  e = Math.max.apply(
                    Math,
                    this.bottomOfOrderBook.map((t) => t.usdValue)
                  ),
                  o = Math.max(t, e),
                  a = Math.min.apply(
                    Math,
                    this.topOfOrderBook.map((t) => t.usdValue)
                  ),
                  i = Math.min.apply(
                    Math,
                    this.bottomOfOrderBook.map((t) => t.usdValue)
                  ),
                  s = Math.min(a, i) / 2;
                this.topOfOrderBook.forEach((t) => {
                  t.sharePercent = ((t.usdValue - s) / o) * 80;
                }),
                  this.bottomOfOrderBook.forEach((t) => {
                    t.sharePercent = ((t.usdValue - s) / o) * 80;
                  });
              } catch (o) {
                this.$log.error(o);
              }
            },
          },
        },
        ct = dt,
        pt =
          (o("78a5"),
          o("993d"),
          Object(b["a"])(ct, a, i, !1, null, "48a943ce", null));
      e["default"] = pt.exports;
    },
    a2974: function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ':root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.trade-info-modal{background-color:#f4f4ff54;max-width:530px;width:90%;border-radius:10px;margin:auto;padding:15px 10px;text-align:left;position:relative}.trade-info-modal .delete{position:absolute;top:8px;right:8px;z-index:100}.trade-info-modal .tooltip-icon{position:relative;top:2px;left:5px}.trade-info-modal .tooltip-icon:hover{cursor:pointer}.trade-info-modal .tooltip-icon .tooltip-content{max-width:450px!important;min-width:290px!important;padding:30px!important;background:#191b1f!important}.trade-info-modal .tooltip-icon .tooltip-content .note{font-size:14px!important}.trade-info-modal .tooltip-icon .mdi-information-outline:before{color:grey!important}.trade-info-modal .tooltip-icon .mdi-information-outline:hover:before{color:#fff!important}.trade-info-modal .tooltip-icon .header{margin-bottom:15px;padding-bottom:5px}.trade-info-modal .tooltip-icon div{color:#fff!important;font-weight:500!important;font-size:16px!important;padding:2px}',
          "",
        ]),
        (t.exports = e);
    },
    a2f8: function (t, e, o) {
      "use strict";
      o("fdb6");
    },
    b4cbd: function (t, e, o) {
      var a = o("18cc");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("4c401be4", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    cc6e: function (t, e, o) {
      "use strict";
      o("5d48");
    },
    d47e: function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-befdf778]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.value[data-v-befdf778]{height:150px}.value .box-border[data-v-befdf778]{border:1px solid #262b3a;background:#f4f4ff54}.value .trade-label[data-v-befdf778]{color:#26a69a;font-size:18px;font-weight:600;text-align:left;margin-top:20px}.value .input-container[data-v-befdf778]{background:#2c323f;border-radius:10px}.value .container-top-border[data-v-befdf778]{border-top:1px solid #262b3a}.value .max-min-label[data-v-befdf778]{font-size:15px;color:#626e7e;font-weight:500;white-space:nowrap}.value .token-label[data-v-befdf778]{color:#fff;position:relative;right:10px;top:8px;width:30px;margin-left:5px}.value .token-label a[data-v-befdf778]{color:#6495ed!important;font-size:16px;text-decoration:underline;font-weight:500}',
          "",
        ]),
        (t.exports = e);
    },
    d7bb: function (t, e, o) {
      "use strict";
      o("82f8d");
    },
    e117: function (t, e, o) {
      var a = o("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ':root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.orders{overflow:hidden!important}.orders.box-border{border:1px solid #262b3a;background:#f4f4ff54}.orders .block-title{text-align:left;font-size:18px;color:#26a69a;font-weight:600;background-color:#282e41;padding:6px 6px 6px 15px;border:1px solid #262b3a}.orders .block-title.light{color:#00fcde;background-color:unset;border:none}.orders .block-title .order-book-dropdown{font-size:15px;color:#fff;font-weight:400;cursor:pointer;margin-right:.5vw;margin-top:2px}.orders .trade-performance-info-icon{position:relative;top:0;left:-4px}.orders .trade-performance-info-icon:hover{cursor:pointer;opacity:.7}@media screen and (max-width:769px){.orders .table-dark{height:100%!important}}.orders .table-dark{height:309.5px}.orders .table-dark table{background:transparent!important;color:#fff;padding:0!important;font-size:14px;margin-left:20px;overflow-x:hidden!important;overflow-y:scroll!important}.orders .table-dark th{color:#626e7e;font-size:14px;padding:0!important;background:#f4f4ff54!important}.orders .table-dark td,.orders .table-dark th{border:none!important;text-align:left;padding:0!important;padding-bottom:8px!important}.orders .table-dark td a,.orders .table-dark th a{text-decoration:underline;font-style:italic}.orders .table-dark .b-table .table-wrapper.has-sticky-header{height:255px;overflow-y:auto;overflow-x:hidden}.orders .table-dark .b-table .table-wrapper.has-mobile-cards tr{background:transparent!important;margin-right:30px}.orders .table-dark .absolute{position:absolute}.orders .table-dark .arrow{position:relative;left:-15px}@media screen and (max-width:769px){.orders .table-dark .arrow{display:none}}@media screen and (min-height:501px){.orders .b-table .table-wrapper.has-sticky-header{height:calc(100vh - 780px)}}',
          "",
        ]),
        (t.exports = e);
    },
    e36e: function (t, e, o) {
      var a = o("90cc");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("40beb492", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e727: function (t, e, o) {
      t.exports = o.p + "public/assets/arrowImage.0e97d243.svg";
    },
    fdb6: function (t, e, o) {
      var a = o("7f80");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = o("499e").default;
      i("c8860328", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    fdec: function (t, e, o) {
      "use strict";
      o("5fd3");
    },
  },
]);
