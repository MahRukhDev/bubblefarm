(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["tradelytics"],
  {
    "41f2": function (e, t, a) {
      "use strict";
      a.r(t);
      var r = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            { staticClass: "analytics-page" },
            [
              e.error
                ? t(
                    "b-notification",
                    {
                      attrs: {
                        type: "is-danger",
                        "has-icon": "",
                        "aria-close-label": "Close notification",
                        role: "alert",
                      },
                    },
                    [e._v(" " + e._s(e.message) + " ")]
                  )
                : e._e(),
              t(
                "p",
                {
                  staticClass:
                    "is-size-3-desktop is-size-4-tablet has-text-light mb-4",
                },
                [e._v("CivTrade analytics for " + e._s(e.currentNetwork))]
              ),
              t(
                "div",
                { staticClass: "is-flex is-justify-content-end mb-4" },
                [
                  t("b-input", {
                    staticClass: "mr-2",
                    attrs: { placeholder: "Search" },
                    model: {
                      value: e.searchTerm,
                      callback: function (t) {
                        e.searchTerm = t;
                      },
                      expression: "searchTerm",
                    },
                  }),
                  t(
                    "b-select",
                    {
                      staticClass: "mr-2",
                      model: {
                        value: e.perPage,
                        callback: function (t) {
                          e.perPage = t;
                        },
                        expression: "perPage",
                      },
                    },
                    [
                      t("option", { attrs: { value: "10" } }, [
                        e._v("10 per page"),
                      ]),
                      t("option", { attrs: { value: "25" } }, [
                        e._v("25 per page"),
                      ]),
                      t("option", { attrs: { value: "50" } }, [
                        e._v("50 per page"),
                      ]),
                      t("option", { attrs: { value: "100" } }, [
                        e._v("100 per page"),
                      ]),
                      t("option", { attrs: { value: "500" } }, [
                        e._v("500 per page"),
                      ]),
                    ]
                  ),
                  t(
                    "b-button",
                    {
                      staticClass: "is-primary",
                      on: {
                        click: function (t) {
                          return e.exportToCSV();
                        },
                      },
                    },
                    [e._v("Export to CSV")]
                  ),
                ],
                1
              ),
              e.loaded
                ? t(
                    "b-table",
                    {
                      attrs: {
                        data: e.displayData,
                        paginated: !0,
                        "per-page": e.perPage,
                        hoverable: !0,
                        "sticky-header": !0,
                        height: "450px",
                        striped: !0,
                        "debounce-search": 1e3,
                      },
                    },
                    [
                      t("b-table-column", {
                        attrs: { field: "orderID", label: "ID", sortable: "" },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  e._v(" " + e._s(t.row["orderID"]) + " "),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          1264194038
                        ),
                      }),
                      t("b-table-column", {
                        attrs: {
                          field: "orderState",
                          label: "Status",
                          sortable: "",
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  e._v(" " + e._s(t.row["orderState"]) + " "),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          4138503180
                        ),
                      }),
                      t("b-table-column", {
                        attrs: { field: "trader", label: "From", sortable: "" },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (a) {
                                return [
                                  t(
                                    "a",
                                    {
                                      attrs: {
                                        href: a.row["trader"],
                                        target: "_blank",
                                      },
                                    },
                                    [e._v(e._s(a.row["walletShort"]))]
                                  ),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          859794217
                        ),
                      }),
                      t("b-table-column", {
                        attrs: {
                          field: "AmountFrom",
                          label: "Traded",
                          sortable: "",
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  e._v(
                                    " " +
                                      e._s(t.row["AmountFrom"]) +
                                      " " +
                                      e._s(t.row["tokenFrom"]) +
                                      " "
                                  ),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          1316553603
                        ),
                      }),
                      t("b-table-column", {
                        attrs: {
                          field: "AmountTo",
                          label: "Wanted",
                          sortable: "",
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  e._v(
                                    " " +
                                      e._s(t.row["AmountTo"]) +
                                      " " +
                                      e._s(t.row["tokenTo"]) +
                                      " "
                                  ),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          1091566499
                        ),
                      }),
                      t("b-table-column", {
                        attrs: {
                          field: "targetPrice",
                          label: "Target price",
                          sortable: "",
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  e._v(" " + e._s(t.row["targetPrice"]) + " "),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          3638845257
                        ),
                      }),
                      t("b-table-column", {
                        attrs: {
                          field: "invertedPrice",
                          label: "Inverted price",
                          sortable: "",
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  e._v(
                                    " " + e._s(t.row["invertedPrice"]) + " "
                                  ),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          701572587
                        ),
                      }),
                      t("b-table-column", {
                        attrs: {
                          field: "poolFee",
                          label: "Earn%",
                          sortable: "",
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  e._v(" " + e._s(t.row["poolFee"]) + " "),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          248281903
                        ),
                      }),
                      t("b-table-column", {
                        attrs: {
                          field: "timeInTrade",
                          label: "Duration",
                          sortable: "",
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  e._v(" " + e._s(t.row["timeInTrade"]) + " "),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          3733994625
                        ),
                      }),
                      t("b-table-column", {
                        attrs: {
                          field: "timeOpened",
                          label: "Opened",
                          sortable: "",
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (a) {
                                return [
                                  t(
                                    "a",
                                    {
                                      attrs: {
                                        href: a.row["openTxn"],
                                        title: a.row["openedAgo"],
                                        target: "_blank",
                                      },
                                    },
                                    [e._v(e._s(a.row["timeOpened"]))]
                                  ),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          3516044184
                        ),
                      }),
                      t("b-table-column", {
                        attrs: {
                          field: "timeClosed",
                          label: "Closed",
                          sortable: "",
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "default",
                              fn: function (a) {
                                return [
                                  t(
                                    "a",
                                    {
                                      attrs: {
                                        href: a.row["closeTxn"],
                                        title: a.row["closedAgo"],
                                        target: "_blank",
                                      },
                                    },
                                    [e._v(e._s(a.row["timeClosed"]))]
                                  ),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          4054222682
                        ),
                      }),
                    ],
                    1
                  )
                : e._e(),
            ],
            1
          );
        },
        o = [],
        s = a("9841"),
        l = a("f98f");
      const n = 250;
      var i = {
          name: "Analytics",
          watch: {
            "$store.state.chainId": async function (e, t) {
              void 0 !== t && (await this.parseAnalytics());
            },
            searchTerm: {
              deep: !0,
              handler: async function () {
                this.timeout && clearTimeout(this.timeout),
                  (this.timeout = setTimeout(async () => {
                    this.displayData = this.data.filter((e) => {
                      for (const t in e) {
                        const a = e[t];
                        if (
                          a
                            .toString()
                            .toLowerCase()
                            .includes(this.searchTerm.toString().toLowerCase())
                        )
                          return (
                            this.$log.debug("Found search term on: " + e[t]),
                            e[t]
                          );
                      }
                      return !1;
                    });
                  }, n));
              },
            },
          },
          async mounted() {
            await this.parseAnalytics();
          },
          data: () => ({
            data: [],
            displayData: [],
            searchTerm: null,
            loaded: !1,
            error: !1,
            perPage: 10,
            currentNetwork: "Ethereum",
            message:
              "An error occurred loading the analytics, please try again",
          }),
          methods: {
            async parseAnalytics() {
              const e = this.$buefy.loading.open();
              try {
                (this.data = await new s["a"]().getAnalytics()),
                  (this.displayData = await new s["a"]().getAnalytics()),
                  await this.getCurrentNetwork(),
                  (this.loaded = !0);
              } catch (t) {
                this.$log.error(t),
                  (this.error = !0),
                  this.$buefy.toast.open({
                    duration: 5e3,
                    message: this.message,
                    position: "is-bottom",
                    type: "is-danger",
                  });
              } finally {
                e.close();
              }
            },
            exportToCSV: function () {
              const e = (e, t) => (null === t ? "" : t),
                t = Object.keys(this.data[0]),
                a = [
                  t.join(","),
                  ...this.displayData.map((a) =>
                    t.map((t) => JSON.stringify(a[t], e)).join(",")
                  ),
                ].join("\r\n");
              let r = document.createElement("a");
              r.setAttribute(
                "href",
                "data:text/csv;charset=utf-8," + encodeURI(a)
              ),
                r.setAttribute("download", "civ-trades-export.csv"),
                (r.style.display = "none"),
                document.body.appendChild(r),
                r.click(),
                document.body.removeChild(r);
            },
            async getCurrentNetwork() {
              let e = await new l["a"]().getChainId();
              this.currentNetwork =
                1 === e
                  ? "Ethereum"
                  : 4 === e
                  ? "Rinkeby"
                  : 5 === e
                  ? "Goerli"
                  : 42 === e
                  ? "Kovan"
                  : 137 === e
                  ? "Polygon"
                  : 80001 === e
                  ? "Mumbai"
                  : "Ethereum";
            },
          },
        },
        c = i,
        u = (a("5f65"), a("2877")),
        d = Object(u["a"])(c, r, o, !1, null, "170258c7", null);
      t["default"] = d.exports;
    },
    "5f65": function (e, t, a) {
      "use strict";
      a("cf62");
    },
    cf62: function (e, t, a) {
      var r = a("d08b");
      r.__esModule && (r = r.default),
        "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var o = a("499e").default;
      o("272e0842", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d08b: function (e, t, a) {
      var r = a("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          '[data-v-170258c7]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.analytics-page[data-v-170258c7]{width:90%;margin:80px auto 30px auto;border-radius:5px;min-width:310px}',
          "",
        ]),
        (e.exports = t);
    },
  },
]);
