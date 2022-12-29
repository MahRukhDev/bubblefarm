(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["sanin-farm"],
  {
    "0cd2": function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    1489: function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-2f227db4]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.fade-enter-active[data-v-2f227db4],.fade-leave-active[data-v-2f227db4]{transition:opacity .25s}.fade-enter[data-v-2f227db4],.fade-leave-to[data-v-2f227db4]{opacity:0}.top-text[data-v-2f227db4]{color:var(--seance)}.bottom-text[data-v-2f227db4],.top-text[data-v-2f227db4]{font-size:1.4vw;display:flex;justify-content:center}.bottom-text[data-v-2f227db4]{color:var(--coral)!important;margin-top:1px}.top-image-desktop[data-v-2f227db4]{right:-10px;z-index:1}.bottom-image-desktop[data-v-2f227db4],.top-image-desktop[data-v-2f227db4]{position:relative;height:36px!important}.icon-top-design[data-v-2f227db4]{display:flex;justify-content:end}.icon-bottom-design[data-v-2f227db4]{display:flex;justify-content:start}span[data-v-2f227db4]{white-space:normal}.textLeftAlign[data-v-2f227db4]{text-align:left}.textRightAlign[data-v-2f227db4]{text-align:right}.pool[data-v-2f227db4]{display:flex;justify-content:center}.expand[data-v-2f227db4]{display:flex;justify-content:flex-start;margin-top:auto;margin-bottom:auto}.pool-container[data-v-2f227db4]{background-color:#fff;width:100%;display:flex;flex:1;list-style:none;font-weight:500;font-size:17px;padding:0;padding-top:0;border-radius:10px;margin:0;color:var(--seance);border:2px solid var(--lavender-rose);background:#fff}.pool-container[data-v-2f227db4]:hover{box-shadow:-2px -2px inset var(--lavender-rose)}h1[data-v-2f227db4]{font-weight:500}.title-text[data-v-2f227db4],h1[data-v-2f227db4]{font-size:1.5vw}.title-text[data-v-2f227db4]{font-weight:700}.input-amount[data-v-2f227db4]{width:100%}.sanin-expand-pool[data-v-2f227db4]{min-width:35px;min-height:35px;font-weight:700;font-size:32px;line-height:21px;padding:0;border-radius:10px;color:var(--seance);border:2px solid var(--lavender-rose);background:#fff}.sanin-expand-pool[data-v-2f227db4]:hover{box-shadow:-2px -2px inset var(--lavender-rose)}hr[data-v-2f227db4]{width:84%;margin:-1% 0 15px 8%;justify-content:center;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#ff00fa,#fd6363,#da3bf5);background-origin:border-box}hr[data-v-2f227db4],input[data-v-2f227db4]{display:flex;border:1px solid transparent}input[data-v-2f227db4]{width:100%;background-color:#121622;color:#fff;border-radius:10px;font-size:23px;padding:12px 15px}input[data-v-2f227db4]:hover{border:1px solid transparent;cursor:pointer}input[data-v-2f227db4]::-moz-placeholder{font-size:1vw}input[data-v-2f227db4]::placeholder{font-size:1vw}.action-link[data-v-2f227db4]{padding:5px 0;font-weight:500;font-size:1.1vw;overflow:hidden;color:var(--seance)!important;text-decoration:underline}.action-link[data-v-2f227db4]:hover{cursor:pointer}.action-button[data-v-2f227db4]{border-radius:10px;width:100%;border:3px solid transparent;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #b1369e;padding:10px 5px;font-weight:500;overflow:hidden;color:#fff;cursor:pointer}.action-button[data-v-2f227db4]:hover{box-shadow:inset 2px 1000px 1px #df46c8}@media(min-width:1800px){.bottom-text[data-v-2f227db4],.top-text[data-v-2f227db4]{font-size:1vw}.action-link[data-v-2f227db4]{font-size:.8vw}.title-text[data-v-2f227db4]{font-size:1.2vw;font-weight:700}}@media(max-width:1100px){.bottom-text[data-v-2f227db4],.top-text[data-v-2f227db4]{font-size:1.6vw}.action-link[data-v-2f227db4]{font-size:1.2vw}.title-text[data-v-2f227db4]{font-size:2vw;font-weight:700}}.action-tooltip[data-v-2f227db4]{width:100%}[data-v-2f227db4]::-moz-placeholder{color:#260a68;font-family:Rajdhani,Helvetica;font-style:normal;font-weight:500;align-self:center}[data-v-2f227db4]::placeholder{color:#260a68;font-family:Rajdhani,Helvetica;font-style:normal;font-weight:500;align-self:center}[data-v-2f227db4]::-webkit-input-placeholder{text-align:center}[data-v-2f227db4]:-moz-placeholder,[data-v-2f227db4]::-moz-placeholder{text-align:center}[data-v-2f227db4]:-ms-input-placeholder{text-align:center}input[data-v-2f227db4]::-webkit-inner-spin-button,input[data-v-2f227db4]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-2f227db4]{-moz-appearance:textfield}.lds-dual-ring[data-v-2f227db4]{display:inline-block}.lds-dual-ring[data-v-2f227db4]:after{content:" ";display:block;border-radius:50%;width:20px;height:20px;border:6px solid #fff;border-color:#fff transparent #fff transparent;animation:lds-dual-ring-2f227db4 1.2s linear infinite}@keyframes lds-dual-ring-2f227db4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.disable[data-v-2f227db4]{pointer-events:none;color:#ffffffdb;box-shadow:inset 2px 1000px 1px #957cf7}.button-container[data-v-2f227db4],.disable[data-v-2f227db4]{cursor:no-drop}',
          "",
        ]),
        (t.exports = e);
    },
    1676: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"multiSign","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    "1b10": function (t, e, n) {
      var a = n("316b");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = n("499e").default;
      i("c36d8b5e", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "316b": function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ':root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.hidden{display:none}.limit-trade{max-width:1920px;width:80%;margin:10px auto 20px auto;min-width:310px}@media(max-width:47.99em){.limit-trade{margin-top:25px}}.pool{display:flex;justify-content:center}.pool-container{width:100%;display:flex;flex:1;list-style:none;font-weight:500;font-size:17px;line-height:21px;padding:10px;border-radius:10px;margin:0}.notFocused{user-select:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;filter:brightness(30%);pointer-events:none}.textLeftAlign{text-align:left}.textRightAlign{text-align:right}.text-details{margin-top:10px}.amount-modal,.roi-modal{position:absolute;z-index:2;float:left;left:50%;top:50%;transform:translate(-50%,-50%)}.farm-title{position:relative;text-align:center}.card-aggregation{padding:0;padding-bottom:10px;width:30%;max-width:300px;color:var(--seance)!important;border-radius:10px;margin:auto;position:relative;width:100%;margin-top:10px;margin-bottom:20px;color:var(--seance);border:2px solid var(--lavender-rose)!important;background:#fff!important}.card-aggregation:hover{box-shadow:-2px -2px inset var(--lavender-rose)!important}.no-wrap{white-space:nowrap}.card-content{text-align:left;font-size:15px;font-weight:300}.expand{display:flex;justify-content:flex-start;margin-top:auto;margin-bottom:auto}.card-content{line-height:1.1rem;padding:15px 0 5px 15px}.pool-divider{background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#12ab9e,#8d358b);background-origin:border-box;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #2c323f;height:5px;margin:5px 0}.pool-header{width:100%;display:flex;flex:1;list-style:none;font-weight:500;font-size:17px;line-height:21px;color:#fff}.sanin-expand-pool{min-width:35px;min-height:35px;font-weight:700;font-size:32px;line-height:21px;padding:0;margin:0;margin-left:15%;border-radius:10px;color:var(--seance);border:2px solid var(--lavender-rose);background:#fff}.sanin-expand-pool:hover{box-shadow:-2px -2px inset var(--lavender-rose)}@media(max-width:47.99em){.sanin-expand-pool{min-width:30px;min-height:30px;font-weight:300;font-size:40px;line-height:15px;padding:5px;border-radius:6px}}.action-button{border-radius:8px;border:3px solid transparent;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #b1369e;padding:5px 15px;font-size:15px;font-weight:500;line-height:14px;color:#fff;cursor:pointer}.action-button:hover{box-shadow:inset 2px 1000px 1px #df46c8}.action-sm-button{padding:5px 5px;font-size:15px;font-weight:500;line-height:14px;color:#fff;cursor:pointer;border:none}.action-sm-button:hover{text-decoration:underline}div:focus{outline:none}.pool-title{color:#260a68;font-family:Rajdhani,Helvetica;font-size:20px;font-style:normal;font-weight:500;justify-content:center}@media(max-width:59.99em){.pool-title{font-size:14px}}.transition-topaz-text{color:#260a68;font-size:3.4vw}.transition-topaz-text,.transition-white-text{margin:0 auto;font-family:rajdhani;font-style:normal;font-weight:500}.transition-white-text{color:#fff;font-size:4.2vw}@media(min-width:600px){.transition-topaz-text{color:#260a68}.transition-topaz-text,.transition-white-text{margin:0 auto;font-family:rajdhani;font-size:18px;font-style:normal;font-weight:500}.transition-white-text{color:#fff}}.top-text{color:#fff}.bottom-text,.top-text{font-size:20px;display:flex;justify-content:center}.bottom-text{color:#fff!important;margin-top:1px}.info-tooltip{width:100%}.footer-space{color:#fff;font-weight:600;font-size:15px;margin-top:30px;margin-bottom:60px}@media(min-width:1800px){.bottom-text,.top-text{font-size:1vw}.title-text{font-size:1.5vw;font-weight:700}}@media(max-width:1100px){.bottom-text,.top-text{font-size:1.6vw}.title-text{font-size:2vw;font-weight:700}}@media(max-width:768px){.top-text{color:#fff;font-size:4.2vw;justify-content:unset}.bottom-text,.top-text{margin:0 auto;font-family:rajdhani;font-style:normal;font-weight:500}.bottom-text{font-size:3.4vw;color:#260a68}.title-text{font-size:20px;font-weight:500}}',
          "",
        ]),
        (t.exports = e);
    },
    "3cc5": function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract ISaninRT","name":"_representToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"contract IERC20","name":"lpToken","type":"address"},{"indexed":false,"internalType":"contract IERC20","name":"representToken","type":"address"}],"name":"AddPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"prevAllocPoint","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newAllocPoint","type":"uint256"}],"name":"SetPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"prevTokensPerBlock","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newTokensPerBlock","type":"uint256"}],"name":"SetTokensPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"prevTotalAllocPoint","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newTotalAllocPoint","type":"uint256"}],"name":"SetTotalAllocPoint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"YieldWithdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_UINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"contract ISaninRT","name":"_representToken","type":"address"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"getUserLP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accTokensPerShare","type":"uint256"},{"internalType":"contract ISaninRT","name":"representToken","type":"address"},{"internalType":"uint256","name":"totalDepositAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"representToken","outputs":[{"internalType":"contract ISaninRT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_totalAllocPoint","type":"uint256"}],"name":"setTotalAllocPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rateNumber","type":"uint256"}],"name":"updateRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenContract","type":"address"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdrawYield","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      );
    },
    "3d24": function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    4113: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"multiSign","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    4208: function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-21978cde]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.fade-enter-active[data-v-21978cde],.fade-leave-active[data-v-21978cde]{transition:opacity .25s}.fade-enter[data-v-21978cde],.fade-leave-to[data-v-21978cde]{opacity:0}.top-text[data-v-21978cde]{color:var(--seance)}.bottom-text[data-v-21978cde],.top-text[data-v-21978cde]{font-size:1.4vw;display:flex;justify-content:center}.bottom-text[data-v-21978cde]{color:var(--coral)!important;margin-top:2px}.top-image-desktop[data-v-21978cde]{right:-10px;z-index:1}.bottom-image-desktop[data-v-21978cde],.top-image-desktop[data-v-21978cde]{position:relative;height:36px!important}.icon-top-design[data-v-21978cde]{display:flex;justify-content:end}.icon-bottom-design[data-v-21978cde]{display:flex;justify-content:start}span[data-v-21978cde]{white-space:normal}.textLeftAlign[data-v-21978cde]{text-align:left}.textRightAlign[data-v-21978cde]{text-align:right}.pool[data-v-21978cde]{display:flex;justify-content:center}.expand[data-v-21978cde]{display:flex;justify-content:flex-start;margin-top:auto;margin-bottom:auto}.pool-container[data-v-21978cde]{background-color:#fff;width:100%;display:flex;flex:1;list-style:none;font-weight:500;font-size:17px;padding:0;border-radius:10px;margin:0;color:var(--seance);border:2px solid var(--lavender-rose);background:#fff}.pool-container[data-v-21978cde]:hover{box-shadow:-2px -2px inset var(--lavender-rose)}@media(max-width:47.99em){.pool-container[data-v-21978cde]{font-size:16px;line-height:16px}}.title-text[data-v-21978cde]{font-size:1.5vw;font-weight:700}.sanin-expand-pool[data-v-21978cde]{padding:0}hr[data-v-21978cde]{width:84%;margin:-1% 0 15px 8%}input[data-v-21978cde]{display:flex;width:100%;background-color:#121622;border:1px solid transparent;color:#fff;border-radius:10px;font-size:23px;padding:12px 15px}@media(max-width:47.99em){input[data-v-21978cde]{padding:15px 15px}}input[data-v-21978cde]:hover{border:1px solid transparent;cursor:pointer}input[data-v-21978cde]::-moz-placeholder{font-size:1vw}input[data-v-21978cde]::placeholder{font-size:1vw}@media(max-width:47.99em){input[data-v-21978cde]::-moz-placeholder{font-size:20px}input[data-v-21978cde]::placeholder{font-size:20px}}.action-link[data-v-21978cde]{padding:5px 0;font-weight:500;font-size:1.1vw;overflow:hidden;color:var(--seance)!important;text-decoration:underline}.action-link[data-v-21978cde]:hover{cursor:pointer}@media(max-width:47.99em){.action-link[data-v-21978cde]{width:100%;padding:3px 0;display:block;font-size:3vw;line-height:15px;background:transparent}}.action-button[data-v-21978cde]{border-radius:10px;width:100%;border:3px solid transparent;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #b1369e;padding:10px 5px;font-weight:500;overflow:hidden;color:#fff;cursor:pointer}.action-button[data-v-21978cde]:hover{box-shadow:inset 2px 1000px 1px #df46c8}@media(max-width:47.99em){.action-button[data-v-21978cde]{padding:3px;font-size:16px;line-height:30px}}.action-tooltip[data-v-21978cde]{width:100%}[data-v-21978cde]::-moz-placeholder{color:#260a68;font-family:Rajdhani,Helvetica;font-style:normal;font-weight:500;align-self:center}[data-v-21978cde]::placeholder{color:#260a68;font-family:Rajdhani,Helvetica;font-style:normal;font-weight:500;align-self:center}[data-v-21978cde]::-webkit-input-placeholder{text-align:center}[data-v-21978cde]:-moz-placeholder,[data-v-21978cde]::-moz-placeholder{text-align:center}input[data-v-21978cde]::-webkit-inner-spin-button,input[data-v-21978cde]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-21978cde]{-moz-appearance:textfield}.lds-dual-ring[data-v-21978cde]{display:inline-block}.lds-dual-ring[data-v-21978cde]:after{content:" ";display:block;border-radius:50%;width:20px;height:20px;border:6px solid #fff;border-color:#fff transparent #fff transparent;animation:lds-dual-ring-21978cde 1.2s linear infinite}@keyframes lds-dual-ring-21978cde{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.disable[data-v-21978cde]{pointer-events:none;color:#ffffffdb;box-shadow:inset 2px 1000px 1px #957cf7}.button-container[data-v-21978cde],.disable[data-v-21978cde]{cursor:no-drop}h1[data-v-21978cde]{font-size:2vw;font-weight:500}@media(max-width:47.99em){h1[data-v-21978cde]{font-size:1.5vw}}.top-image[data-v-21978cde]{right:-20px;position:relative;z-index:1}.bottom-image[data-v-21978cde]{position:relative;left:5px;height:30px!important}.transition-topaz-text[data-v-21978cde]{color:#260a68}.transition-topaz-text[data-v-21978cde],.transition-white-text[data-v-21978cde]{margin:0;font-family:rajdhani;font-size:3.4vw;font-style:normal;font-weight:500}.transition-white-text[data-v-21978cde]{color:var(--seance)}input[data-v-21978cde]:active{border:1px solid transparent}.text-details[data-v-21978cde]{padding:0;margin-left:.75rem;margin-top:7px}.input-amount[data-v-21978cde]{width:100%}.sanin-expand-pool[data-v-21978cde]{min-width:35px;min-height:35px;font-weight:700;font-size:32px;line-height:21px;padding:1px;border-radius:10px;color:var(--seance);border:2px solid var(--lavender-rose);background:#fff}.sanin-expand-pool[data-v-21978cde]:hover{box-shadow:-2px -2px inset var(--lavender-rose)}hr[data-v-21978cde]{width:99%;margin-left:3%;display:flex;justify-content:center;border:1px solid transparent;margin:0 0 25px 0;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#ff00fa,#fd6363,#da3bf5);background-origin:border-box}[data-v-21978cde]:-ms-input-placeholder{text-align:center}',
          "",
        ]),
        (t.exports = e);
    },
    "45f8b": function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ".container[data-v-5fda2296]{background:#f4f4ff54;border:1px solid #543699;border-radius:50px;height:70vh;width:350px}.header[data-v-5fda2296]{display:flex;padding:1vw;background:#4b5369;border-top-left-radius:50px;border-top-right-radius:50px}.header-icon[data-v-5fda2296]{width:10%}.header-icon[data-v-5fda2296],.header-text[data-v-5fda2296]{margin-left:20px;margin-top:5px}.header-text[data-v-5fda2296]{color:#fff;font-size:24px}.body[data-v-5fda2296]{margin-top:20px;padding:10px;margin-left:25px;margin-right:25px;display:flex;justify-content:left}.top-text[data-v-5fda2296]{display:flex;justify-content:flex-start;margin-bottom:10px;color:#fff;font-size:16px;font-weight:600}.staked-amount-container[data-v-5fda2296]{width:100%}.price-container[data-v-5fda2296]{display:flex;width:inherit;background:#4b5369;border-radius:20px}.price-converter[data-v-5fda2296]{width:80%;margin-top:5px}.usd-price[data-v-5fda2296]{font-size:20px}.token-price[data-v-5fda2296],.usd-price[data-v-5fda2296]{display:flex;justify-content:flex-end;color:#fff}.token-price[data-v-5fda2296]{font-size:15px}.right-icon[data-v-5fda2296]{width:20%;padding:10px;margin-top:5px}.converter-icon[data-v-5fda2296]{cursor:pointer}input[data-v-5fda2296]{background:inherit;border:none;font-size:20px;color:#fff}",
          "",
        ]),
        (t.exports = e);
    },
    5019: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"multiSign","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    "5a14": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var a = n("ad06"),
        i = n("bc3a"),
        s = n.n(i),
        o = n("2b0e"),
        l = n("d10d");
      Object(a["a"])(s.a, { retries: "3" });
      class r {
        async getPricesUSD(t) {
          try {
            return t
              ? (
                  await s.a.get(
                    "https://api.thegraph.com/subgraphs/name/fantasy2345/civfarm" +
                      t
                  )
                ).data
              : null;
          } catch (e) {
            throw (o["a"].$log.error(e), e);
          }
        }
        async getSaninPricesUSD(t) {
          try {
            return t
              ? (
                  await s.a.get(
                    "https://api.thegraph.com/subgraphs/name/fantasy2345/saninfarm" +
                      t
                  )
                ).data
              : null;
          } catch (e) {
            throw (o["a"].$log.error(e), e);
          }
        }
        async getPoolData(t) {
          try {
            await new l["a"]().getUserAcc().then(() => {});
            let e = await s.a.post(
              "https://api.thegraph.com/subgraphs/name/fantasy2345/civfarm",
              {
                query: `{\n            pool(id:${t}){\n                owner {\n                  id\n                }\n                  lpToken\n                  representToken\n                  allocPoint\n                  lastRewardBlock\n                  accTokensPerShare\n                  balance\n                  userCount\n                  stoneHarvested\n              }\n          }`,
              }
            );
            return e.data.data.pool;
          } catch (e) {
            throw e;
          }
        }
        async getSaninPoolData(t) {
          try {
            await new l["a"]().getUserAcc().then(() => {});
            let e = await s.a.post(
              "https://api.thegraph.com/subgraphs/name/fantasy2345/saninfarm",
              {
                query: `{\n            pool(id:${t}){\n                owner {\n                  id\n                }\n                  lpToken\n                  representToken\n                  allocPoint\n                  lastRewardBlock\n                  accTokensPerShare\n                  balance\n                  userCount\n                  stoneHarvested\n              }\n          }`,
              }
            );
            return e.data.data.pool;
          } catch (e) {
            throw e;
          }
        }
        async getDepositedAmount() {
          try {
            return await new l["a"]().getUserAcc().then((t) =>
              s.a
                .post(
                  "https://api.thegraph.com/subgraphs/name/fantasy2345/civfarm",
                  {
                    query: `{\n          users( first: 2 where: {address: "${t}"} ) { \n           address\n           amount\n         }\n       }`,
                  }
                )
                .then((t) => t)
            );
          } catch (t) {
            throw t;
          }
        }
        async getSaninDepositedAmount() {
          try {
            return await new l["a"]().getUserAcc().then((t) =>
              s.a
                .post(
                  "https://api.thegraph.com/subgraphs/name/fantasy2345/saninfarm",
                  {
                    query: `{\n          users( first: 2 where: {address: "${t}"} ) { \n           address\n           amount\n         }\n       }`,
                  }
                )
                .then((t) => t)
            );
          } catch (t) {
            throw t;
          }
        }
      }
    },
    "68c2": function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-2ff2e0c0]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}h1[data-v-2ff2e0c0]{font-size:2vw;font-weight:500}.top-image[data-v-2ff2e0c0]{right:-20px;position:relative;z-index:1}.bottom-image[data-v-2ff2e0c0]{position:relative;left:5px;height:30px!important}.transition-topaz-text[data-v-2ff2e0c0]{color:#260a68}.transition-topaz-text[data-v-2ff2e0c0],.transition-white-text[data-v-2ff2e0c0]{margin:0;font-family:rajdhani;font-size:3.4vw;font-style:normal;font-weight:500}.transition-white-text[data-v-2ff2e0c0]{color:var(--seance)}input[data-v-2ff2e0c0]:active{border:1px solid transparent}input[data-v-2ff2e0c0]::-moz-placeholder{font-size:20px}input[data-v-2ff2e0c0]::placeholder{font-size:20px}.action-tooltip[data-v-2ff2e0c0]{width:100%}.action-link[data-v-2ff2e0c0]{width:100%;padding:3px 0;display:block;font-weight:500;font-size:3vw;line-height:15px;overflow:hidden;background:transparent;color:var(--seance)!important;text-decoration:underline}.action-link[data-v-2ff2e0c0]:hover{cursor:pointer}.action-button[data-v-2ff2e0c0]{border-radius:10px;width:100%;border:3px solid transparent;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #b1369e;padding:3px;font-weight:500;font-size:16px;line-height:30px;color:#fff;cursor:pointer}.action-button[data-v-2ff2e0c0]:hover{box-shadow:inset 2px 1000px 1px #df46c8}@media(min-width:600px){.transition-topaz-text[data-v-2ff2e0c0]{color:#260a68}.transition-topaz-text[data-v-2ff2e0c0],.transition-white-text[data-v-2ff2e0c0]{margin:0;font-family:rajdhani;font-size:3.3vw;font-style:normal;font-weight:500}.transition-white-text[data-v-2ff2e0c0]{color:var(--seance)}}.fade-enter-active[data-v-2ff2e0c0],.fade-leave-active[data-v-2ff2e0c0]{transition:opacity .25s}.fade-enter[data-v-2ff2e0c0],.fade-leave-to[data-v-2ff2e0c0]{opacity:0}span[data-v-2ff2e0c0]{white-space:normal}.textLeftAlign[data-v-2ff2e0c0]{text-align:left}.textRightAlign[data-v-2ff2e0c0]{text-align:right}.text-details[data-v-2ff2e0c0]{padding:0;margin-left:.75rem;margin-top:7px}.pool[data-v-2ff2e0c0]{display:flex;justify-content:center}.expand[data-v-2ff2e0c0]{display:flex;justify-content:flex-start;margin-top:auto;margin-bottom:auto}.pool-container[data-v-2ff2e0c0]{width:100%;display:flex;flex:1;list-style:none;font-weight:500;font-size:16px;line-height:16px;padding:0;border-radius:10px;margin:0;color:var(--seance);border:2px solid var(--lavender-rose);background:#fff}.pool-container[data-v-2ff2e0c0]:hover{box-shadow:-2px -2px inset var(--lavender-rose)}.input-amount[data-v-2ff2e0c0]{width:100%}.sanin-expand-pool[data-v-2ff2e0c0]{min-width:35px;min-height:35px;font-weight:700;font-size:32px;line-height:21px;padding:1px;border-radius:10px;color:var(--seance);border:2px solid var(--lavender-rose);background:#fff}.sanin-expand-pool[data-v-2ff2e0c0]:hover{box-shadow:-2px -2px inset var(--lavender-rose)}hr[data-v-2ff2e0c0]{width:99%;margin-left:3%;justify-content:center;margin:0 0 25px 0;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#ff00fa,#fd6363,#da3bf5);background-origin:border-box}hr[data-v-2ff2e0c0],input[data-v-2ff2e0c0]{display:flex;border:1px solid transparent}input[data-v-2ff2e0c0]{width:100%;background-color:#121622;color:#fff;font-size:23px;border-radius:10px;padding:15px 15px}[data-v-2ff2e0c0]::-moz-placeholder{color:#260a68;font-family:Rajdhani,Helvetica;font-style:normal;font-weight:500;align-self:center}[data-v-2ff2e0c0]::placeholder{color:#260a68;font-family:Rajdhani,Helvetica;font-style:normal;font-weight:500;align-self:center}[data-v-2ff2e0c0]::-webkit-input-placeholder{text-align:center}[data-v-2ff2e0c0]:-moz-placeholder,[data-v-2ff2e0c0]::-moz-placeholder{text-align:center}[data-v-2ff2e0c0]:-ms-input-placeholder{text-align:center}input[data-v-2ff2e0c0]::-webkit-inner-spin-button,input[data-v-2ff2e0c0]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-2ff2e0c0]{-moz-appearance:textfield}.lds-dual-ring[data-v-2ff2e0c0]{display:inline-block}.lds-dual-ring[data-v-2ff2e0c0]:after{content:" ";display:block;border-radius:50%;width:20px;height:20px;border:6px solid #fff;border-color:#fff transparent #fff transparent;animation:lds-dual-ring-2ff2e0c0 1.2s linear infinite}@keyframes lds-dual-ring-2ff2e0c0{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.disable[data-v-2ff2e0c0]{pointer-events:none;color:#ffffffdb;box-shadow:inset 2px 1000px 1px #957cf7}.button-container[data-v-2ff2e0c0],.disable[data-v-2ff2e0c0]{cursor:no-drop}',
          "",
        ]),
        (t.exports = e);
    },
    "6a92": function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"multiSign","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    "746a": function (t, e, n) {
      var a = n("45f8b");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = n("499e").default;
      i("cac7cd66", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7629: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "farm",
              attrs: { tabindex: "0" },
              on: {
                keyup: function (e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                    ? null
                    : t.closeModals.apply(null, arguments);
                },
              },
            },
            [
              t.isHidden
                ? e(
                    "div",
                    { staticClass: "roi-modal" },
                    [
                      e("roi-calculators", {
                        attrs: { staked_coin: "DAI" },
                        on: { "close-roi-modal": t.closeRoiModal },
                      }),
                    ],
                    1
                  )
                : t._e(),
              t.amountModal
                ? e(
                    "div",
                    { staticClass: "amount-modal" },
                    [
                      e("amount-sanin-modal", {
                        attrs: {
                          pid: t.amountModalPid,
                          title: t.amountModalTitle,
                          token: t.amountModalText,
                          depositedAmount: t.depositedAmount,
                          walletBalance: t.walletBalance,
                          tokenPrice: t.tokenPrice,
                        },
                        on: {
                          "action-modal": t.actionModal,
                          "close-modal": t.closeAmountModal,
                        },
                      }),
                    ],
                    1
                  )
                : t._e(),
              t.farmPools
                ? e(
                    "div",
                    {
                      staticClass: "limit-trade",
                      class: { notFocused: t.isHidden || t.amountModal },
                    },
                    [
                      e(
                        "div",
                        { staticClass: "trades-1 rajdhani-bold-white-25px" },
                        [
                          e(
                            "b-collapse",
                            {
                              staticClass:
                                "card-aggregation is-hidden-desktop is-hidden-wide is-hidden-tablet",
                              attrs: {
                                animation: "slide",
                                "aria-id": "contentIdForA11y3",
                              },
                            },
                            [
                              e("div", { staticClass: "card-content" }, [
                                e(
                                  "div",
                                  {
                                    staticStyle: {
                                      "font-weight": "bold",
                                      color: "var(--seance) !important",
                                    },
                                  },
                                  [t._v(" SaninFarm ")]
                                ),
                                t.$store.getters.account
                                  ? t._e()
                                  : e("span", [
                                      e(
                                        "button",
                                        {
                                          staticClass: "action-button mx-1",
                                          on: {
                                            click: function (e) {
                                              return t.showWeb3Modal();
                                            },
                                          },
                                        },
                                        [t._v(" Connect wallet ")]
                                      ),
                                    ]),
                                e("div", { staticClass: "content" }, [
                                  t.$store.getters.account
                                    ? e(
                                        "div",
                                        { staticClass: "text-details" },
                                        [
                                          e(
                                            "span",
                                            {
                                              staticClass:
                                                "transition-topaz-text",
                                            },
                                            [t._v("Deposited")]
                                          ),
                                          e("span", [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t._f("formatMoney")(
                                                    t.depositedUsd
                                                  )
                                                ) +
                                                " "
                                            ),
                                          ]),
                                        ]
                                      )
                                    : t._e(),
                                  t.$store.getters.account
                                    ? e("div", [
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-topaz-text",
                                          },
                                          [t._v(" Available Yield ")]
                                        ),
                                        e("span", [
                                          t._v(
                                            " " +
                                              t._s(
                                                t._f("formatMoney")(t.yieldUsd)
                                              ) +
                                              " "
                                          ),
                                        ]),
                                        t.depositedUsd > 0 && t.yieldUsd > 0
                                          ? e("span", [
                                              t._v(
                                                " (" +
                                                  t._s(
                                                    t._f("formatPercent")(
                                                      t.yieldUsd /
                                                        t.depositedUsd
                                                    )
                                                  ) +
                                                  ") "
                                              ),
                                            ])
                                          : t._e(),
                                      ])
                                    : t._e(),
                                  t.$store.getters.account
                                    ? e("div", [
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-topaz-text",
                                          },
                                          [t._v(" Cumulative Earnings ")]
                                        ),
                                        e("span", [
                                          t._v(
                                            " " +
                                              t._s(
                                                t._f("formatMoney")(
                                                  t.totalYield
                                                )
                                              ) +
                                              " "
                                          ),
                                        ]),
                                        t.depositedUsd > 0 && t.totalYield > 0
                                          ? e("span", [
                                              t._v(
                                                " (" +
                                                  t._s(
                                                    t._f("formatPercent")(
                                                      t.totalYield /
                                                        t.depositedUsd
                                                    )
                                                  ) +
                                                  ") "
                                              ),
                                            ])
                                          : t._e(),
                                      ])
                                    : t._e(),
                                  e("div", { staticClass: "text-details" }, [
                                    e(
                                      "span",
                                      { staticClass: "transition-topaz-text" },
                                      [t._v(" Total Value Locked (TVL) ")]
                                    ),
                                    e("span", [
                                      t._v(
                                        " " +
                                          t._s(t._f("formatMoney")(t.tvlUsd)) +
                                          " "
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                              t.$store.getters.account
                                ? e("footer", [
                                    e(
                                      "button",
                                      {
                                        staticClass: "action-button mx-1",
                                        on: {
                                          click: function (e) {
                                            return t.expandAllPool();
                                          },
                                        },
                                      },
                                      [t._v(" Expand All ")]
                                    ),
                                    e(
                                      "button",
                                      {
                                        staticClass: "action-button mx-1",
                                        on: {
                                          click: function (e) {
                                            return t.collapseAllPool();
                                          },
                                        },
                                      },
                                      [t._v(" Collapse All ")]
                                    ),
                                  ])
                                : t._e(),
                            ]
                          ),
                        ],
                        1
                      ),
                      e(
                        "div",
                        {
                          staticStyle: {
                            width: "100%",
                            margin: "10px auto 10px",
                          },
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass: "farm-pool is-hidden-mobile columns",
                            },
                            [
                              e("div", { staticClass: "pool column is-12" }, [
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "pool-container columns is-multiline px-0 mt-0 py-0",
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        class: [
                                          t.$store.getters.account
                                            ? "top-text column is-4 px-0"
                                            : "top-text column is-2 px-0",
                                        ],
                                        staticStyle: { "font-weight": "bold" },
                                      },
                                      [t._v(" SaninFarm ")]
                                    ),
                                    t.$store.getters.account
                                      ? t._e()
                                      : e(
                                          "div",
                                          {
                                            staticClass:
                                              "top-text column is-4 px-0",
                                          },
                                          [
                                            e(
                                              "button",
                                              {
                                                staticClass:
                                                  "action-button mx-1",
                                                on: {
                                                  click: function (e) {
                                                    return t.showWeb3Modal();
                                                  },
                                                },
                                              },
                                              [t._v(" Connect wallet ")]
                                            ),
                                          ]
                                        ),
                                    t.$store.getters.account
                                      ? e(
                                          "div",
                                          {
                                            staticClass:
                                              "pool-title column is-1 px-0",
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass: "top-text",
                                                staticStyle: {
                                                  "font-weight": "bold",
                                                },
                                              },
                                              [t._v("Deposited")]
                                            ),
                                            e(
                                              "div",
                                              { staticClass: "bottom-text" },
                                              [
                                                t._v(
                                                  t._s(
                                                    t._f("formatMoney")(
                                                      t.depositedUsd
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t.$store.getters.account
                                      ? e(
                                          "div",
                                          { staticClass: "column is-4 px-0" },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass: "top-text",
                                                staticStyle: {
                                                  "font-weight": "bold",
                                                },
                                              },
                                              [t._v("Yield")]
                                            ),
                                            e(
                                              "div",
                                              { staticClass: "bottom-text" },
                                              [
                                                t._v(
                                                  t._s(
                                                    t._f("formatMoney")(
                                                      t.yieldUsd
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    e(
                                      "div",
                                      {
                                        class: [
                                          t.$store.getters.account
                                            ? "pool-title column is-0 px-0"
                                            : "pool-title column is-4 px-0",
                                        ],
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "top-text",
                                            staticStyle: {
                                              "font-weight": "bold",
                                            },
                                          },
                                          [t._v("TVL")]
                                        ),
                                        e(
                                          "div",
                                          { staticClass: "bottom-text" },
                                          [
                                            t._v(
                                              t._s(
                                                t._f("formatMoney")(t.tvlUsd)
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    e(
                                      "div",
                                      {
                                        class: [
                                          t.$store.getters.account
                                            ? "pool-title column is-2 ml-4 pl-6 px-0"
                                            : "pool-title column is-0 pl-5 px-0",
                                        ],
                                      },
                                      [
                                        t.$store.getters.account
                                          ? e(
                                              "b-tooltip",
                                              {
                                                staticClass: "info-tooltip",
                                                attrs: {
                                                  multilined: "",
                                                  label:
                                                    "APR: Annual Percent Return. Total below: your earnings, including all claimed rewards",
                                                },
                                              },
                                              [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass: "top-text",
                                                    staticStyle: {
                                                      "font-weight": "bold",
                                                    },
                                                  },
                                                  [
                                                    t._v(" APR  "),
                                                    e("b-icon", {
                                                      attrs: {
                                                        icon: "information-outline",
                                                        size: "is-small",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                e(
                                                  "div",
                                                  {
                                                    staticClass: "bottom-text",
                                                    staticStyle: {
                                                      "font-style": "italic",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t._f("formatMoney")(
                                                            t.totalYield
                                                          )
                                                        ) +
                                                        " "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : e(
                                              "b-tooltip",
                                              {
                                                staticClass: "info-tooltip",
                                                attrs: {
                                                  multilined: "",
                                                  label:
                                                    "APR: Annual Percent Return. Connect wallet to see your earnings",
                                                },
                                              },
                                              [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass: "top-text",
                                                    staticStyle: {
                                                      "font-weight": "bold",
                                                    },
                                                  },
                                                  [
                                                    t._v(" APR  "),
                                                    e("b-icon", {
                                                      attrs: {
                                                        icon: "information-outline",
                                                        size: "is-small",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                      ],
                                      1
                                    ),
                                    t.$store.getters.account
                                      ? e(
                                          "div",
                                          { staticClass: "expand px-0" },
                                          [
                                            t.isExpandAll < 0
                                              ? e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "sanin-expand-pool",
                                                    on: {
                                                      click: function (e) {
                                                        return t.expandAllPool();
                                                      },
                                                    },
                                                  },
                                                  [t._v(" + ")]
                                                )
                                              : e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "sanin-expand-pool",
                                                    on: {
                                                      click: function (e) {
                                                        return t.collapseAllPool();
                                                      },
                                                    },
                                                  },
                                                  [t._v(" - ")]
                                                ),
                                          ]
                                        )
                                      : t._e(),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          e(
                            "div",
                            t._l(t.farmPools, function (n) {
                              return e(
                                "div",
                                { key: n.id },
                                [
                                  e("farm-pool", {
                                    attrs: {
                                      poolItem: n,
                                      amountPid: t.amountModalPid,
                                      expandAll: t.isExpandAll,
                                    },
                                    on: {
                                      "open-roi-modal": t.openRoiModal,
                                      "open-amount-modal": t.openAmountModal,
                                      "close-amount-modal": t.closeAmountModal,
                                      yieldChanged: t.onYieldChanged,
                                      depositeChanged: t.onDepositedChanged,
                                      tvlChanged: t.onTVLChanged,
                                      tvlTokenChanged: t.onTVLTokenChanged,
                                      yieldTokenChanged: t.onYieldTokenChanged,
                                      depositeTokenChanged:
                                        t.onDepositedTokenChanged,
                                    },
                                  }),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                        ]
                      ),
                      e("div", { staticClass: "footer-space" }, [
                        e(
                          "a",
                          {
                            attrs: {
                              href: "https://t.me/civsettlers",
                              target: "_blank",
                            },
                          },
                          [
                            t._v(" Powered By Civilization "),
                            e("b-icon", { attrs: { icon: "telegram" } }),
                          ],
                          1
                        ),
                      ]),
                    ]
                  )
                : e("div", [
                    e(
                      "div",
                      {
                        staticClass:
                          "trades-1 valign-text-middle rajdhani-medium-topaz-32px",
                        staticStyle: { "margin-top": "40vh" },
                      },
                      [t._v(" Farm Data Not Available ")]
                    ),
                  ]),
            ]
          );
        },
        i = [],
        s =
          (n("13d5"),
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "farm-pool columns is-mobile" }, [
              e("div", { staticClass: "pool column is-12" }, [
                e(
                  "div",
                  {
                    staticClass:
                      "pool-container columns is-mobile is-multiline px-0",
                  },
                  [
                    !t.photoLength && t.poolData.url
                      ? e(
                          "div",
                          {
                            class: [
                              t.$store.getters.account
                                ? "column is-1 px-0 mt-0"
                                : "column is-2 px-0 mt-0",
                            ],
                          },
                          [
                            e("img", {
                              style: t.poolData.style,
                              attrs: {
                                src: t.poolData.url[0],
                                alt: "Avatar",
                                width: "36",
                                height: "36",
                              },
                            }),
                          ]
                        )
                      : t.photoLength && t.poolData.url
                      ? e(
                          "div",
                          {
                            class: [
                              t.$store.getters.account
                                ? "column is-1 px-0 mt-0"
                                : "column is-2 px-0 mt-0",
                            ],
                          },
                          [
                            e("div", { staticClass: "columns is-mobile" }, [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "column icon-design px-0 icon-top-design",
                                },
                                [
                                  e("img", {
                                    staticClass: "top-image-desktop",
                                    attrs: {
                                      width: "36",
                                      height: "36",
                                      src: t.poolData.url[0],
                                      alt: "Avatar",
                                    },
                                  }),
                                ]
                              ),
                              e(
                                "div",
                                {
                                  staticClass:
                                    "column icon-design px-0 icon-bottom-design",
                                },
                                [
                                  e("img", {
                                    staticClass: "bottom-image-desktop",
                                    attrs: {
                                      width: "36",
                                      height: "36",
                                      src: t.poolData.url[1],
                                      alt: "Avatar",
                                    },
                                  }),
                                ]
                              ),
                            ]),
                          ]
                        )
                      : t._e(),
                    e(
                      "div",
                      {
                        class: [
                          t.$store.getters.account
                            ? "column is-2 px-0 mt-0"
                            : "column is-4 px-0 mt-0",
                        ],
                      },
                      [
                        t.poolData.text
                          ? e("div", { staticClass: "title-text" }, [
                              t._v(" " + t._s(t.poolData.text) + " "),
                            ])
                          : e("div", { staticClass: "title-text" }, [
                              t._v("Data loading ..."),
                            ]),
                      ]
                    ),
                    t.$store.getters.account
                      ? e("div", { staticClass: "column is-3 px-0" }, [
                          e("div", { staticClass: "top-text" }, [
                            e("span", [
                              t._v(
                                " " +
                                  t._s(t._f("formatMoney")(t.depositedUSD)) +
                                  " "
                              ),
                            ]),
                          ]),
                          e("div", { staticClass: "bottom-text" }, [
                            e("span", [
                              t._v(
                                " " +
                                  t._s(
                                    t._f("formatToken")(
                                      t.depositedToken,
                                      t.poolData.depositedCurrency
                                    )
                                  ) +
                                  " (" +
                                  t._s(
                                    t._f("formatPercent")(
                                      t.depositedToken / t.tvlToken
                                    )
                                  ) +
                                  ") "
                              ),
                            ]),
                          ]),
                        ])
                      : t._e(),
                    t.$store.getters.account
                      ? e("div", { staticClass: "column is-2 px-0" }, [
                          e("div", { staticClass: "top-text" }, [
                            e("span", [
                              t._v(
                                " " +
                                  t._s(t._f("formatMoney")(t.yieldUsd)) +
                                  " "
                              ),
                            ]),
                          ]),
                          e("div", { staticClass: "bottom-text" }, [
                            e("span", [
                              t._v(
                                t._s(
                                  t._f("formatToken")(
                                    t.yieldToken,
                                    t.poolData.yieldCurrency
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ])
                      : t._e(),
                    e(
                      "div",
                      {
                        class: [
                          t.$store.getters.account
                            ? "column is-2 px-0"
                            : "column is-4 px-0",
                        ],
                      },
                      [
                        e("div", { staticClass: "top-text" }, [
                          e("span", {}, [
                            t._v(
                              " " + t._s(t._f("formatMoney")(t.tvlUsd)) + " "
                            ),
                          ]),
                        ]),
                        e("div", { staticClass: "bottom-text" }, [
                          e("span", [
                            t._v(
                              t._s(
                                t._f("formatToken")(
                                  t.tvlToken,
                                  t.poolData.tvlCurrency
                                )
                              )
                            ),
                          ]),
                        ]),
                      ]
                    ),
                    e(
                      "div",
                      {
                        staticClass: "column is-1 px-0",
                        on: {
                          click: function (e) {
                            return t.openRoiModal();
                          },
                        },
                      },
                      [
                        e("div", { staticClass: "top-text" }, [
                          t._v(
                            " " + t._s(t._f("formatPercent")(t.apr / 100)) + " "
                          ),
                        ]),
                      ]
                    ),
                    t.$store.getters.account
                      ? e("div", { staticClass: "expand column is-1" }, [
                          t.expandPool
                            ? e(
                                "button",
                                {
                                  staticClass: "sanin-expand-pool",
                                  on: { click: t.closeExpandPool },
                                },
                                [t._v(" - ")]
                              )
                            : e(
                                "button",
                                {
                                  staticClass: "sanin-expand-pool",
                                  on: { click: t.openExpandPool },
                                },
                                [t._v(" + ")]
                              ),
                        ])
                      : t._e(),
                    e("transition", { attrs: { name: "fade" } }, [
                      t.expandPool
                        ? e("div", { staticClass: "column is-12" }, [
                            e(
                              "div",
                              {
                                staticClass: "columns",
                                staticStyle: {
                                  width: "99%",
                                  "margin-left": "0%",
                                  "margin-top": "-2%",
                                },
                              },
                              [
                                e("div", { staticClass: "column" }, [
                                  e("span", [
                                    e(
                                      "a",
                                      {
                                        staticClass: "action-link",
                                        attrs: { target: "_blank" },
                                        on: {
                                          click: function (e) {
                                            return t.addCustomToken(
                                              t.poolData.id
                                            );
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          " Add " +
                                            t._s(t.poolData.tokenName) +
                                            " to Metamask "
                                        ),
                                      ]
                                    ),
                                  ]),
                                  t._v("      "),
                                  t.isWalletBalanceZero
                                    ? e(
                                        "a",
                                        {
                                          staticClass: "action-link",
                                          attrs: { target: "_blank" },
                                          on: {
                                            click: function (e) {
                                              return t.addCustomXToken(
                                                t.poolData.id
                                              );
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            " Add " +
                                              t._s(t.poolData.repTokenName) +
                                              " to Metamask "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  e(
                                    "a",
                                    {
                                      staticClass: "action-link",
                                      attrs: { target: "_blank" },
                                      on: {
                                        click: function (e) {
                                          return t.addCustomXToken(
                                            t.poolData.id
                                          );
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        " Add " +
                                          t._s(t.poolData.repTokenName) +
                                          " to Metamask "
                                      ),
                                    ]
                                  ),
                                  t._v("      "),
                                  t.poolData.id > 1
                                    ? e(
                                        "a",
                                        {
                                          staticClass: "action-link",
                                          attrs: {
                                            target: "_blank",
                                            autofocus: "",
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.goToUniswap();
                                            },
                                          },
                                        },
                                        [t._v(" Add v2 Liquidity ")]
                                      )
                                    : e(
                                        "a",
                                        {
                                          staticClass: "action-link",
                                          attrs: {
                                            target: "_blank",
                                            autofocus: "",
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.goToTrade(
                                                t.poolData.tokenName
                                              );
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            " Buy " +
                                              t._s(t.poolData.tokenName) +
                                              " "
                                          ),
                                        ]
                                      ),
                                  t._v("      "),
                                  t.poolData.uniswapRemove
                                    ? e(
                                        "a",
                                        {
                                          staticClass: "action-link",
                                          attrs: {
                                            target: "_blank",
                                            autofocus: "",
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.goToUniRemove();
                                            },
                                          },
                                        },
                                        [t._v(" Remove (post-withdraw) ")]
                                      )
                                    : t._e(),
                                ]),
                              ]
                            ),
                            e("hr"),
                            e(
                              "div",
                              {
                                staticClass: "columns is-mobile",
                                staticStyle: {
                                  width: "99%",
                                  "margin-left": "0%",
                                },
                              },
                              [
                                e("div", { staticClass: "column is-4" }, [
                                  e("div", { staticClass: "top-text" }, [
                                    t._v("Balance"),
                                  ]),
                                  e("div", { staticClass: "bottom-text" }, [
                                    t._v(
                                      " " +
                                        t._s(
                                          t._f("formatToken")(
                                            t.wallet_balance,
                                            t.poolData.walletBalanceToken
                                          )
                                        ) +
                                        " (" +
                                        t._s(
                                          t._f("formatMoney")(
                                            t.wallet_balance_usd
                                          )
                                        ) +
                                        ") "
                                    ),
                                  ]),
                                ]),
                                e(
                                  "div",
                                  {
                                    staticClass: "column is-2 px-0 pr-0 mr-6",
                                    class: {
                                      "button-container": t.isRewardZero,
                                    },
                                  },
                                  [
                                    t.isRewardClaimed
                                      ? e(
                                          "b-tooltip",
                                          {
                                            staticClass: "action-tooltip",
                                            attrs: {
                                              multilined: "",
                                              label: "Claim your earned yield",
                                            },
                                          },
                                          [
                                            e(
                                              "button",
                                              {
                                                staticClass: "action-button",
                                                class: {
                                                  disable: t.isRewardZero,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.claimReward();
                                                  },
                                                },
                                              },
                                              [t._v(" Claim Reward ")]
                                            ),
                                          ]
                                        )
                                      : e(
                                          "button",
                                          { staticClass: "action-button" },
                                          [
                                            e("div", {
                                              staticClass: "lds-dual-ring",
                                            }),
                                          ]
                                        ),
                                  ],
                                  1
                                ),
                                e(
                                  "div",
                                  {
                                    staticClass: "column is-2 px-0 pr-0 mr-6",
                                    class: {
                                      "button-container": t.isWalletBalanceZero,
                                    },
                                  },
                                  [
                                    t.isApproved && !t.isDepositing
                                      ? e(
                                          "b-tooltip",
                                          {
                                            staticClass: "action-tooltip",
                                            attrs: {
                                              multilined: "",
                                              label:
                                                "Deposit your tokens into the pool",
                                            },
                                          },
                                          [
                                            e(
                                              "button",
                                              {
                                                staticClass: "action-button",
                                                class: {
                                                  disable:
                                                    t.isWalletBalanceZero,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.openModal(
                                                      "Deposit"
                                                    );
                                                  },
                                                },
                                              },
                                              [t._v(" Deposit ")]
                                            ),
                                          ]
                                        )
                                      : t.isApproved || t.isDepositing
                                      ? e(
                                          "button",
                                          {
                                            staticClass: "action-button",
                                            class: {
                                              "button-container":
                                                t.isWalletBalanceZero,
                                            },
                                          },
                                          [
                                            e("div", {
                                              staticClass: "lds-dual-ring",
                                            }),
                                          ]
                                        )
                                      : e(
                                          "button",
                                          {
                                            staticClass: "action-button",
                                            class: {
                                              disable: t.isWalletBalanceZero,
                                            },
                                            on: {
                                              click: function (e) {
                                                return t.approveStakingToken(
                                                  t.poolData.id,
                                                  t.wallet_balance
                                                );
                                              },
                                            },
                                          },
                                          [t._v(" Approve Deposit ")]
                                        ),
                                  ],
                                  1
                                ),
                                e(
                                  "div",
                                  {
                                    staticClass: "column is-2 px-0",
                                    class: {
                                      "button-container":
                                        t.isDepositedAmountZero,
                                    },
                                  },
                                  [
                                    t.isWithdrawApproved && !t.isWithdrawing
                                      ? e(
                                          "b-tooltip",
                                          {
                                            staticClass: "action-tooltip",
                                            attrs: {
                                              multilined: "",
                                              label:
                                                "Withdraw your tokens from the pool",
                                            },
                                          },
                                          [
                                            e(
                                              "button",
                                              {
                                                staticClass: "action-button",
                                                class: {
                                                  disable:
                                                    t.isDepositedAmountZero,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.openModal(
                                                      "Withdraw"
                                                    );
                                                  },
                                                },
                                              },
                                              [t._v(" Withdraw ")]
                                            ),
                                          ]
                                        )
                                      : t.isWithdrawApproved || t.isWithdrawing
                                      ? e(
                                          "button",
                                          {
                                            staticClass: "action-button",
                                            class: {
                                              disable: t.isDepositedAmountZero,
                                            },
                                          },
                                          [
                                            e("div", {
                                              staticClass: "lds-dual-ring",
                                            }),
                                          ]
                                        )
                                      : e(
                                          "button",
                                          {
                                            staticClass: "action-button",
                                            class: {
                                              disable: t.isDepositedAmountZero,
                                            },
                                            on: {
                                              click: function (e) {
                                                return t.approveRepresentToken(
                                                  t.poolData.id,
                                                  t.depositedToken
                                                );
                                              },
                                            },
                                          },
                                          [t._v(" Approve Withdraw ")]
                                        ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ])
                        : t._e(),
                    ]),
                  ],
                  1
                ),
              ]),
            ]);
          }),
        o = [],
        l = n("ade3"),
        r = n("c0d8"),
        p = n.n(r),
        d = n("4360");
      const u = new p.a(p.a.givenProvider);
      function c() {
        return u.eth.net.getNetworkType().then((t) => t);
      }
      const y = c().then((t) => t),
        m = {
          1: "0xEB72B0Aa3F45f0A354B974B1f952Ff9618e017F8",
          3: "0x1bbf80c29dd89cd04be1aa73cb7e9d6d1600c702",
          4: "",
        },
        b = {
          1: "0x73a83269b9bbafc427e76be0a2c1a1db2a26f4c2",
          3: "0x9Cee90195e9334e3F1D970C7Ca72Fe13Fb80418a",
          4: "0x0577651ed93bc1c0bddfed075a11433d392190f5",
        },
        h = {
          1: "0x7131671885Ea3c8eE7C2fF2344cE48ab398b5432",
          3: "0x90fb9df74e820e916a124d46d10bbf6a511f6d3e",
          4: "0x891f98B71060A3A843818ed27C0772B89F7c8521",
        },
        f = {
          1: "0x9e614Cb7696fb47DCA5F1620a0384f1942e32710",
          3: "0x88451f26cbbda7b91e95884126a5b8f1d764fbcd",
          4: "0xc582167E10C89811200d720aE4ad13C9D76a4D53",
        },
        w = {
          1: "0x73024e43905fEd661C6c1843aB9750fD3db4f9b7",
          3: "0xd78cbf4181c85dad9b341c47bd995e94e1c37b57",
          4: "0xd221681816043b072e5F2c63E0b0b3D7ADFEB61F",
        },
        v = {
          1: "0xE5e6f0c26629F70f5865278DbF19Bc95e81Ffc1D",
          3: "0xc48be413d1af4ac39c4c0f712463268dd65752dc",
          4: "0x2A6eF0e0Bfc3577bfc36c33389d35eF54B84e22C",
        },
        T = {
          1: "0x2cC22D385903A51306bCBED351d90f6C12127Df4",
          3: "0x8846ab500a804b5a3661ef875a7ea56d0b9e2520",
          4: "0xE9d2f529d0888897741542685B634524b49A3C6f",
        },
        g = {
          1: "0x2E4b02Dc74d5383253e9dFc1bE6ef9848A4dd689",
          3: "0xb30e6b1f00f3236522cf19aa9b6f6050b5164fa4",
          4: "0x2A6eF0e0Bfc3577bfc36c33389d35eF54B84e22C",
        },
        _ = {
          1: "0xA76D77F960c9065D97a598Ef47C2DFd7F67D40Ee",
          3: "0x5b3c57404b54ad7b59160b456c3a3c370916ccb2",
          4: "0xE9d2f529d0888897741542685B634524b49A3C6f",
        },
        x = {
          1: "0xfeeeef4d7b4bf3cc8bd012d02d32ba5fd3d51e31",
          3: "0xdf4b0d8ca6eab9df53c6f3e989c0d941208fec5d",
          4: "0x0577651ed93bc1c0bddfed075a11433d392190f5",
        },
        k = {
          1: "0x4521C9aD6A3D4230803aB752Ed238BE11F8B342F",
          3: "0xb60be40d55b619d4aa4a1bff3f90a65d2e4d205b",
          4: "0x1419AA0271b5ADBe2608E71eccF881505d04b534",
        },
        M = {
          1: "0x55b71cb471a2be25deee931cf1bbb81687884960",
          3: "0x390dee82de59f20975e9bae39b281e6721f0e81b",
          4: "0x13Af52480aDEa7F25449A979ED788043bd3C5a51",
        },
        C = {
          1: "0xbd1976064da742da80ee93438cb60e00f8144f68",
          3: "0xf011d13113218e615233f20434ad5c090291a6fc",
          4: "0xCCC4278160875dA9219F7c66c10DB9bEB0757A6F",
        },
        A = {
          1: "0x394cb9e147b8b288e38615ae04f442a037bcb99f",
          3: "0xf35a937749a859e2b3e1652740ba3a41862242a7",
          4: "0x30bc11b8Cc4c696aDC2368BD898491B5A0fB0E42",
        },
        P = {
          1: "0xef6242a96627371836d6c1459ffd73cf83ff2756",
          3: "0xbce382b2a48db681c436cdec021cd430ef9a8e81",
          4: "0x30bc11b8Cc4c696aDC2368BD898491B5A0fB0E42",
        },
        D = {
          1: "0x09b40a074ee473cd693df636f1306368ef161a92",
          3: "0x6d616b5864b06e11d4c2488ae9823bc33bc7fd58",
          4: "0x30bc11b8Cc4c696aDC2368BD898491B5A0fB0E42",
        };
      var R = n("f98f"),
        S = n("3cc5"),
        I = n("8e56"),
        B = n("ebc8"),
        L = n("7ae0"),
        U = n("3d24"),
        $ = n("81be"),
        E = n("eb4f"),
        W = n("964e"),
        z = n("1676"),
        O = n("e0fb"),
        N = n("ab0a"),
        F = n("6a92"),
        j = n("5019"),
        Z = n("fb7a"),
        H = n("4113"),
        V = n("0cd2"),
        Y = n("4128"),
        J = n.n(Y);
      class X {
        constructor() {
          Object(l["a"])(this, "web3", new p.a(p.a.givenProvider)),
            Object(l["a"])(this, "networkId", null),
            Object(l["a"])(this, "farm_pool_contract", null),
            Object(l["a"])(this, "lp1_contract", null),
            Object(l["a"])(this, "lp2_contract", null),
            Object(l["a"])(this, "lp3_contract", null),
            Object(l["a"])(this, "lp4_contract", null),
            Object(l["a"])(this, "lp5_contract", null),
            Object(l["a"])(this, "rt1_contract", null),
            Object(l["a"])(this, "rt2_contract", null),
            Object(l["a"])(this, "rt3_contract", null),
            Object(l["a"])(this, "rt4_contract", null),
            Object(l["a"])(this, "rt5_contract", null),
            Object(l["a"])(this, "rt6_contract", null),
            Object(l["a"])(this, "rt7_contract", null),
            Object(l["a"])(this, "stone_contract", null);
        }
        async init() {
          if (d["a"].state.provider) {
            if (
              (d["a"].state.provider.provider.on("chainChanged", (t) => {
                this.networkId = t;
              }),
              !this.networkId)
            ) {
              const t = await y;
              switch (t) {
                case "main":
                  (this.networkId = 1), (this.chainId = 1);
                  break;
                case "kovan":
                  (this.networkId = 4), (this.chainId = 42);
                  break;
                case "rinkeby":
                  (this.networkId = 3), (this.chainId = 4);
                  break;
                default:
                  (this.networkId = 1), (this.chainId = 1);
                  break;
              }
            }
            (this.farm_pool_contract =
              "" == m[this.networkId]
                ? null
                : new this.web3.eth.Contract(S, m[this.networkId])),
              (this.lp1_contract = new this.web3.eth.Contract(
                I,
                x[this.networkId]
              )),
              (this.lp2_contract = new this.web3.eth.Contract(
                B,
                k[this.networkId]
              )),
              (this.lp3_contract = new this.web3.eth.Contract(
                L,
                M[this.networkId]
              )),
              (this.lp4_contract = new this.web3.eth.Contract(
                U,
                C[this.networkId]
              )),
              (this.lp5_contract = new this.web3.eth.Contract(
                $,
                A[this.networkId]
              )),
              (this.lp6_contract = new this.web3.eth.Contract(
                E,
                P[this.networkId]
              )),
              (this.lp7_contract = new this.web3.eth.Contract(
                W,
                D[this.networkId]
              )),
              (this.rt1_contract = new this.web3.eth.Contract(
                z,
                h[this.networkId]
              )),
              (this.rt2_contract = new this.web3.eth.Contract(
                O,
                f[this.networkId]
              )),
              (this.rt3_contract = new this.web3.eth.Contract(
                N,
                w[this.networkId]
              )),
              (this.rt4_contract = new this.web3.eth.Contract(
                F,
                v[this.networkId]
              )),
              (this.rt5_contract = new this.web3.eth.Contract(
                j,
                T[this.networkId]
              )),
              (this.rt6_contract = new this.web3.eth.Contract(
                Z,
                g[this.networkId]
              )),
              (this.rt7_contract = new this.web3.eth.Contract(
                H,
                _[this.networkId]
              )),
              (this.stone_contract = new this.web3.eth.Contract(
                V,
                b[this.networkId]
              ));
          }
        }
        async addCustomToken(t) {
          let e, n;
          await this.init();
          let a,
            i = 18;
          switch (t) {
            case 0:
              (e = x[this.networkId]),
                (a = new this.web3.eth.Contract(I, e)),
                (n = await a.methods.symbol().call());
              break;
            case 1:
              (e = k[this.networkId]),
                (a = new this.web3.eth.Contract(B, e)),
                (n = await a.methods.symbol().call());
              break;
            case 2:
              (e = M[this.networkId]),
                (a = new this.web3.eth.Contract(L, e)),
                (n = await a.methods.symbol().call());
              break;
            case 3:
              (e = C[this.networkId]),
                (a = new this.web3.eth.Contract(U, e)),
                (n = await a.methods.symbol().call());
              break;
            case 4:
              (e = A[this.networkId]),
                (a = new this.web3.eth.Contract($, e)),
                (n = await a.methods.symbol().call());
              break;
            case 5:
              (e = P[this.networkId]),
                (a = new this.web3.eth.Contract(E, e)),
                (n = await a.methods.symbol().call());
              break;
            case 6:
              (e = D[this.networkId]),
                (a = new this.web3.eth.Contract(W, e)),
                (n = await a.methods.symbol().call());
              break;
          }
          try {
            const t = await this.web3.currentProvider.request({
              method: "wallet_watchAsset",
              params: {
                type: "ERC20",
                options: { address: e, symbol: n, decimals: i },
              },
            });
            return t;
          } catch (s) {}
        }
        async addCustomXToken(t) {
          let e, n, a;
          await this.init();
          let i = 18;
          switch (t) {
            case 0:
              (e = h[this.networkId]),
                (a = new this.web3.eth.Contract(z, e)),
                (n = await a.methods.symbol().call());
              break;
            case 1:
              (e = f[this.networkId]),
                (a = new this.web3.eth.Contract(O, e)),
                (n = await a.methods.symbol().call());
              break;
            case 2:
              (e = w[this.networkId]),
                (a = new this.web3.eth.Contract(N, e)),
                (n = await a.methods.symbol().call());
              break;
            case 3:
              (e = v[this.networkId]),
                (a = new this.web3.eth.Contract(F, e)),
                (n = await a.methods.symbol().call());
              break;
            case 4:
              (e = T[this.networkId]),
                (a = new this.web3.eth.Contract(j, e)),
                (n = await a.methods.symbol().call());
              break;
            case 5:
              (e = g[this.networkId]),
                (a = new this.web3.eth.Contract(j, e)),
                (n = await a.methods.symbol().call());
              break;
            case 6:
              (e = _[this.networkId]),
                (a = new this.web3.eth.Contract(j, e)),
                (n = await a.methods.symbol().call());
              break;
          }
          try {
            const t = await this.web3.currentProvider.request({
              method: "wallet_watchAsset",
              params: {
                type: "ERC20",
                options: { address: e, symbol: n, decimals: i },
              },
            });
            return t;
          } catch (s) {}
        }
        async getNetwork() {
          return (
            await this.init(), this.web3.eth.net.getNetworkType().then((t) => t)
          );
        }
        async poolLength() {
          if ((await this.init(), this.farm_pool_contract))
            return await this.farm_pool_contract.methods.poolLength().call();
        }
        async loadbalances() {
          await this.init();
          try {
            const t = await this.web3.eth.getAccounts(),
              e = t[0];
            let n = await this.lp1_contract.methods.balanceOf(e).call(),
              a = await this.stone_contract.methods.balanceOf(e).call(),
              i = await this.lp2_contract.methods.balanceOf(e).call(),
              s = await this.lp3_contract.methods.balanceOf(e).call(),
              o = await this.lp4_contract.methods.balanceOf(e).call(),
              l = await this.lp5_contract.methods.balanceOf(e).call(),
              r = await this.lp6_contract.methods.balanceOf(e).call(),
              p = await this.lp7_contract.methods.balanceOf(e).call(),
              d = await this.rt1_contract.methods.balanceOf(e).call(),
              u = await this.rt2_contract.methods.balanceOf(e).call(),
              c = await this.rt3_contract.methods.balanceOf(e).call(),
              y = await this.rt4_contract.methods.balanceOf(e).call(),
              m = await this.rt5_contract.methods.balanceOf(e).call(),
              b = await this.rt6_contract.methods.balanceOf(e).call(),
              h = await this.rt7_contract.methods.balanceOf(e).call(),
              f = await this.web3.eth.getBalance(e);
            return {
              lp1_balance: n,
              lp2_balance: i,
              lp3_balance: s,
              lp4_balance: o,
              lp5_balance: l,
              lp6_balance: r,
              lp7_balance: p,
              stoneBalance: a,
              ethBalance: f,
              rt1_balance: d,
              rt2_balance: u,
              rt3_balance: c,
              rt4_balance: y,
              rt5_balance: m,
              rt6_balance: b,
              rt7_balance: h,
            };
          } catch (t) {
            console.log(t);
          }
        }
        async getTokenInfo(t) {
          let e, n;
          switch ((await this.init(), t)) {
            case 0:
              e = new this.web3.eth.Contract(I, x[this.networkId]);
              break;
            case 1:
              e = new this.web3.eth.Contract(B, k[this.networkId]);
              break;
            case 2:
              e = new this.web3.eth.Contract(L, M[this.networkId]);
              break;
            case 3:
              e = new this.web3.eth.Contract(U, C[this.networkId]);
              break;
            case 4:
              e = new this.web3.eth.Contract($, A[this.networkId]);
              break;
            case 5:
              e = new this.web3.eth.Contract(E, P[this.networkId]);
              break;
            case 6:
              e = new this.web3.eth.Contract(W, D[this.networkId]);
              break;
          }
          const a = await e.methods.decimals().call(),
            i = await e.methods.symbol().call();
          return { address: n, symbol: i, decimal: a };
        }
        async addToken() {
          if (
            (await this.init(),
            "" !== S[this.networkId] && "" !== x[this.networkId])
          )
            try {
              const t = await this.stone_contract.methods.decimals().call(),
                e = await this.stone_contract.methods.symbol().call();
              await this.web3.currentProvider.sendAsync({
                method: "wallet_watchAsset",
                params: {
                  type: "ERC20",
                  options: {
                    address: x[this.networkId],
                    symbol: e,
                    decimals: t,
                  },
                },
              });
            } catch (t) {}
        }
        async claimTokens(t) {
          if (
            (await this.init(),
            this.farm_pool_contract && "" !== S[this.networkId])
          )
            try {
              const e = await this.web3.eth.getAccounts(),
                n = e[0];
              let a = this.farm_pool_contract;
              await a.methods
                .withdrawYield(t)
                .send({ from: n })
                .on("error", function (t, e) {})
                .on("transactionHash", function (t) {})
                .on("confirmation", function (t, e) {});
            } catch (e) {}
        }
        async getUserAcc() {
          return (
            await this.init(), this.web3.eth.getAccounts().then((t) => t[0])
          );
        }
        async approveStakingToken(t, e) {
          if ((await this.init(), "" == m[this.networkId])) return;
          const n = await this.web3.eth.getAccounts(),
            a = n[0];
          e =
            "115792089237316195423570985008687907853269984665640564039457584007913129639935";
          let i = this[`lp${t + 1}_contract`],
            s = m[this.networkId];
          try {
            return await i.methods
              .approve(s, e)
              .send({ from: a })
              .on("error", function (t) {})
              .on("confirmation", function (t, e) {
                return console.log(t, e), a;
              });
          } catch (o) {
            console.error(o);
          }
        }
        async depositToken(t, e) {
          if ((await this.init(), !this.farm_pool_contract)) return;
          const n = await this.web3.eth.getAccounts(),
            a = n[0];
          let i = this.farm_pool_contract;
          (t = this.web3.utils.toWei(t.toString(), "ether")),
            await i.methods
              .deposit(e, t)
              .send({ from: a })
              .on("error", function (t) {})
              .on("confirmation", function (t, e) {
                return e;
              });
        }
        async approveRepresentToken(t, e) {
          if (
            (await this.init(),
            "" != m[this.networkId] &&
              "" !== O[this.networkId] &&
              "" !== N[this.networkId] &&
              "" !== F[this.networkId] &&
              "" !== j[this.networkId] &&
              "" !== Z[this.networkId] &&
              "" !== H[this.networkId])
          )
            try {
              let n = this[`rt${t + 1}_contract`],
                a = m[this.networkId];
              const i = await this.web3.eth.getAccounts(),
                s = i[0];
              return (
                (e =
                  "115792089237316195423570985008687907853269984665640564039457584007913129639935"),
                await n.methods
                  .approve(a, e)
                  .send({ from: s })
                  .on("error", function (t, e) {})
                  .on("confirmation", function (t, e) {
                    return s;
                  })
              );
            } catch (n) {}
        }
        async withdrawToken(t, e, n) {
          if (
            (await this.init(),
            this.farm_pool_contract && "" !== S[this.networkId])
          ) {
            try {
              const t = await this.web3.eth.getAccounts(),
                a = t[0];
              let i = this.farm_pool_contract;
              return (
                (e = this.web3.utils.toWei(e.toString(), "ether")),
                await i.methods
                  .withdraw(n, e)
                  .send({ from: a })
                  .on("error", function (t) {
                    console.log(t.message, !0);
                  })
                  .on("confirmation", function (t, e) {
                    console.log(t, e);
                  }),
                !0
              );
            } catch (a) {
              console.log(a);
            }
            return Promise;
          }
        }
        async withdraw(t, e) {
          if ((await this.init(), !this.farm_pool_contract)) return;
          let n = await this.getUserAcc();
          try {
            await this.farm_pool_contract.methods
              .withdraw(0, e)
              .send({ from: n })
              .on("error", function (t) {});
          } catch (a) {}
        }
        async userInfos(t) {
          if ((await this.init(), !this.farm_pool_contract)) return;
          let e = await this.getUserAcc();
          return await this.farm_pool_contract.methods.userInfo(t, e).call();
        }
        async poolInformation(t) {
          if ((await this.init(), this.farm_pool_contract))
            return await this.farm_pool_contract.methods
              .poolInfo(t)
              .call()
              .then((t) => t);
        }
        async userLP(t) {
          if ((await this.init(), !this.farm_pool_contract)) return;
          let e = await this.getUserAcc();
          return await this.farm_pool_contract.methods.getUserLP(t, e).call();
        }
        async pendingTokens(t) {
          if ((await this.init(), !this.farm_pool_contract)) return;
          const e = await this.web3.eth.getAccounts(),
            n = e[0];
          return await this.farm_pool_contract.methods
            .pendingTokens(t, n)
            .call()
            .then((t) => t);
        }
        async availableToken(t, e) {
          if ((await this.init(), "" == m[this.networkId])) return !1;
          if (!this.farm_pool_contract) return !1;
          if (t.lessThanOrEqualTo(0)) return !0;
          console.log("FARM:", m[this.networkId]);
          let n = await this.lp1_contract.methods
              .balanceOf(m[this.networkId])
              .call(),
            a = await this.farm_pool_contract.methods.poolInfo(0).call();
          console.log({ poolInfo: a });
          let i = a.totalDepositAmount;
          if (
            ((n = new J.a(n)),
            (i = new J.a(i)),
            console.log(t, this.farm_pool_contract, m[this.networkId], n, i),
            n.lessThan(i))
          )
            return !1;
          let s = n.sub(i);
          return !s.lessThan(t);
        }
        async getTVL(t) {
          return await this.init(), await new R["a"]().getTokenBalance(t);
        }
        async checkAllowance(t) {
          if ((await this.init(), "" == m[this.networkId])) return;
          let e = await this.getUserAcc();
          return await this[`lp${t + 1}_contract`].methods
            .allowance(e, m[this.networkId])
            .call();
        }
        async checkRTAllowance(t) {
          if ((await this.init(), "" == m[this.networkId])) return;
          let e = await this.getUserAcc();
          switch (t) {
            case 0:
              return await this.rt1_contract.methods
                .allowance(e, m[this.networkId])
                .call();
            case 1:
              return await this.rt2_contract.methods
                .allowance(e, m[this.networkId])
                .call();
            case 2:
              return await this.rt3_contract.methods
                .allowance(e, m[this.networkId])
                .call();
            case 3:
              return await this.rt4_contract.methods
                .allowance(e, m[this.networkId])
                .call();
            case 4:
              return await this.rt5_contract.methods
                .allowance(e, m[this.networkId])
                .call();
            case 5:
              return await this.rt6_contract.methods
                .allowance(e, m[this.networkId])
                .call();
            case 6:
              return await this.rt7_contract.methods
                .allowance(e, m[this.networkId])
                .call();
          }
        }
      }
      var G = n("9841"),
        q = n("bc3a"),
        K = n.n(q),
        Q =
          (n("5a14"),
          {
            name: "SaninFarmPoolComponent",
            components: {},
            store: d["a"],
            data() {
              return {
                isRewardZero: !1,
                isRewardClaimed: !0,
                isWalletBalanceZero: !1,
                isDepositedAmountZero: !1,
                chainId: null,
                poolData: "",
                expandPool: this.expandAll > 0,
                inputAmount: null,
                photoLength: null,
                depositedToken: 0,
                reward_debt: 0,
                depositedUSD: 0,
                yieldToken: 0,
                yieldUsd: 0,
                tvlToken: 0,
                tvlUsd: 0,
                apr: 0,
                wallet_balance: 0,
                wallet_rt_balance: 0,
                wallet_balance_usd: 0,
                wallet_balance_first_token: 0,
                wallet_balance_second_token: 0,
                wallet_balance_usd_first_token: 0,
                wallet_balance_usd_second_token: 0,
                isApproved: !1,
                isApproving: !1,
                isWithdrawApproved: !1,
                isWithdrawApproving: !1,
                isWithdrawing: !1,
                isDepositing: !1,
                sender: "",
                balancePercentage: 0,
                isHidden: 0,
                actionTitle: "",
                withdraw_disable: !1,
                deposit_disable: !1,
                tokenPrice: 0,
                civPrice: 0,
                stonePrice: 0,
                ethPrice: 0,
                saninPrice: 0,
                tailPrice: 0,
              };
            },
            computed: {
              account() {
                return this.$store.getters.account;
              },
            },
            props: {
              poolItem: { type: Object },
              amountPid: { type: Number },
              expandAll: Number,
            },
            methods: {
              openModal(t) {
                this.$emit(
                  "open-amount-modal",
                  t,
                  this.poolData.id,
                  this.poolData.text,
                  parseFloat(this.depositedToken),
                  this.wallet_balance,
                  this.tokenPrice
                );
              },
              addCustomToken(t) {
                new X()
                  .addCustomToken(t)
                  .then((t) => {})
                  .catch((t) => {});
              },
              addCustomXToken(t) {
                new X()
                  .addCustomXToken(t)
                  .then((t) => {})
                  .catch((t) => {});
              },
              goToUniswap() {
                window.open(this.poolData.uniswapLink, "_blank");
              },
              goToUniRemove() {
                window.open(this.poolData.uniswapRemove, "_blank");
              },
              async getCivPrice() {
                this.civPrice > 0 ||
                  (d["a"].state.civPrice > 0 ||
                    (await new R["a"]().updateCivPrice()),
                  (this.civPrice = d["a"].state.civPrice));
              },
              async getStonePrice() {
                this.stonePrice > 0 ||
                  (d["a"].state.stonePrice > 0 ||
                    (await new R["a"]().updateStonePrice()),
                  (this.stonePrice =
                    d["a"].state.stonePrice / Math.pow(10, 9)));
              },
              async getEthPrice() {
                this.ethPrice > 0 ||
                  (d["a"].state.ethPrice > 0 ||
                    (await new R["a"]().updateEthPrice()),
                  (this.ethPrice = d["a"].state.ethPrice));
              },
              async getSaninPrice() {
                this.saninPrice > 0 ||
                  (d["a"].state.saninPrice > 0 ||
                    (await new R["a"]().updateSaninPrice()),
                  (this.saninPrice = this.$store.state.saninPrice));
              },
              async getTailPrice() {
                this.$store.state.tailPrice > 0 ||
                  (this.$store.state.tailPrice > 0 ||
                    (await new R["a"]().updateTailPrice()),
                  (this.tailPrice = this.$store.state.tailPrice));
              },
              goToTrade(t) {
                window.open(
                  `https://app.uniswap.org/prefill/ETH/${t}/1`,
                  "_blank"
                );
              },
              closeModal() {
                this.$emit("close-amount-modal");
              },
              openExpandPool() {
                this.expandPool = !0;
              },
              closeExpandPool() {
                this.expandPool = !1;
              },
              openRoiModal() {},
              async showToast() {
                this.$toast.error(
                  "Smart Contract doesn't have enough TAIL token. Please try again later",
                  {
                    position: "top-right",
                    timeout: 2500,
                    closeOnClick: !0,
                    pauseOnFocusLoss: !0,
                    pauseOnHover: !0,
                    draggable: !0,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: !1,
                    closeButton: "button",
                    icon: !0,
                    hideProgressBar: !1,
                    rtl: !1,
                  }
                );
              },
              async claimReward() {
                this.isRewardClaimed = !1;
                let t = await new X().availableToken(
                  new J.a(this.yieldToken),
                  !1
                );
                if (!1 === t)
                  return (this.isRewardClaimed = !0), void this.showToast();
                new X()
                  .claimTokens(this.poolData.id)
                  .then(() => {
                    (this.isRewardClaimed = !0),
                      (this.isWithdrawApproved = !1),
                      (this.isWithdrawApproving = !1),
                      localStorage.setItem("w" + this.poolData.id, ""),
                      this.checkBalanceStatus();
                  })
                  .catch((t) => {
                    this.isRewardClaimed = !0;
                  })
                  .finally(() => {
                    (this.isRewardClaimed = !0),
                      this.priceUpdates(),
                      this.checkBalanceStatus();
                  });
              },
              approveRepresentToken(t, e) {
                (this.isWithdrawApproving = !0),
                  new X()
                    .approveRepresentToken(t, e)
                    .then((e) => {
                      (this.sender = e.from),
                        localStorage.setItem("w" + t, !0),
                        (this.isWithdrawApproved = !0),
                        (this.isWithdrawApproving = !1),
                        localStorage.setItem("sender", this.sender);
                    })
                    .catch((e) => {
                      (this.isWithdrawApproving = !1),
                        (this.isWithdrawApproved = !1),
                        localStorage.setItem("w" + t, "");
                    })
                    .finally(() => {
                      (this.isWithdrawApproving = !1),
                        this.priceUpdates(),
                        this.checkBalanceStatus();
                    });
              },
              approveStakingToken(t, e) {
                e > 0 &&
                  ((this.isApproving = !0),
                  new X()
                    .approveStakingToken(t, e)
                    .then((t) => {
                      (this.isApproving = !1),
                        (this.isApproved = !0),
                        (this.sender = t.from),
                        localStorage.setItem("sender", this.sender);
                    })
                    .catch((t) => {
                      (this.isApproving = !1), (this.isApproved = !1);
                    })
                    .finally(() => {
                      (this.isApproving = !1),
                        this.priceUpdates(),
                        this.checkBalanceStatus();
                    }));
              },
              async withdraw(t, e) {
                if (this.poolData.id == t) {
                  this.isWithdrawing = !0;
                  let n = await new X().availableToken(
                    new J.a(this.yieldToken),
                    !1
                  );
                  if (!1 === n)
                    return (this.isWithdrawing = !1), void this.showToast();
                  this.$emit("close-amount-modal"),
                    (this.sender = localStorage.getItem("sender")),
                    await new X()
                      .withdrawToken(this.sender, e, t)
                      .then((t) => {
                        this.isApproved = !1;
                      })
                      .finally(() => {
                        this.priceUpdates(), this.checkBalanceStatus();
                      }),
                    (this.isWithdrawing = !1);
                }
                this.priceUpdates(), this.checkBalanceStatus();
              },
              async deposit(t, e) {
                if (this.poolData.id == t) {
                  this.isDepositing = !0;
                  let n = await new X().availableToken(
                    new J.a(this.yieldToken),
                    !1
                  );
                  if (!1 === n)
                    return (this.isDepositing = !1), void this.showToast();
                  this.$emit("close-amount-modal"),
                    (this.sender = localStorage.getItem("sender")),
                    await new X()
                      .depositToken(e, t)
                      .then(() => {
                        (this.isWithdrawApproved = !1),
                          (this.isWithdrawApproving = !1),
                          (this.isApproved = !0),
                          localStorage.setItem("w" + t, ""),
                          (this.isDepositing = !1);
                      })
                      .catch((t) => {
                        this.isDepositing = !1;
                      })
                      .finally(() => {
                        (this.isDepositing = !1),
                          this.priceUpdates(),
                          this.checkBalanceStatus(),
                          (this.isWithdrawApproved = !1),
                          (this.isWithdrawApproving = !1);
                      }),
                    (this.inputAmount = null);
                }
              },
              getPendingTokens(t) {
                new X().pendingTokens(t).then((t) => {
                  (this.yieldToken = t / Math.pow(10, 18)),
                    this.$emit(
                      "yieldTokenChanged",
                      this.poolData.id,
                      this.yieldToken
                    ),
                    (this.yieldUsd =
                      this.$store.getters.getTailPrice * this.yieldToken),
                    this.$emit("yieldChanged", this.poolData.id, this.yieldUsd),
                    this.checkBalanceStatus();
                });
              },
              async getWalletBalance() {
                await d["a"].state.provider.getNetwork();
                new X()
                  .loadbalances()
                  .then((t) => {
                    switch (this.poolData.id) {
                      case 0:
                        (this.wallet_balance = new J.a(t.lp1_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                          (this.wallet_rt_balance = new J.a(t.rt1_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          new G["a"]()
                            .getSaninLPTokenPrice(0)
                            .then((t) => {
                              (this.wallet_balance_usd =
                                this.wallet_balance * t),
                                this.checkBalanceStatus();
                            })
                            .catch(() => {});
                        break;
                      case 1:
                        (this.wallet_balance = new J.a(t.lp2_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                          (this.wallet_rt_balance = new J.a(t.rt2_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_balance_usd =
                            this.saninPrice * this.wallet_balance),
                          this.checkBalanceStatus();
                        break;
                      case 2:
                        (this.wallet_balance_first_token =
                          t.lp2_balance / Math.pow(10, 18)),
                          (this.wallet_balance_second_token = new J.a(
                            t.ethBalance
                          )
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_balance = new J.a(t.lp3_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_rt_balance = new J.a(t.rt3_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          new G["a"]()
                            .getSaninLPTokenPrice(this.poolData.id)
                            .then((t) => {
                              this.wallet_balance_usd = this.wallet_balance * t;
                            })
                            .catch(() => {}),
                          (this.wallet_balance_usd_second_token =
                            this.ethPrice * this.wallet_balance_second_token),
                          (this.wallet_balance_usd_first_token =
                            this.wallet_balance_first_token * this.saninPrice),
                          this.checkBalanceStatus();
                        break;
                      case 3:
                        (this.wallet_balance_first_token =
                          t.lp1_balance / Math.pow(10, 18)),
                          (this.wallet_balance_second_token =
                            t.ethBalance / Math.pow(10, 18)),
                          (this.wallet_balance = new J.a(t.lp4_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_rt_balance = new J.a(t.rt4_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          new G["a"]()
                            .getSaninLPTokenPrice(this.poolData.id)
                            .then((t) => {
                              this.wallet_balance_usd = this.wallet_balance * t;
                            })
                            .catch(() => {}),
                          (this.wallet_balance_usd_first_token =
                            this.wallet_balance_first_token *
                            this.$store.state.tailPrice),
                          (this.wallet_balance_usd_second_token =
                            this.wallet_balance_second_token * this.ethPrice),
                          this.checkBalanceStatus();
                        break;
                      case 4:
                        (this.wallet_balance_first_token =
                          t.lp1_balance / Math.pow(10, 18)),
                          (this.wallet_balance_second_token = new J.a(
                            t.lp2_balance
                          )
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_balance = new J.a(t.lp5_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_rt_balance = new J.a(t.rt5_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          new G["a"]()
                            .getSaninLPTokenPrice(this.poolData.id)
                            .then((t) => {
                              this.wallet_balance_usd = this.wallet_balance * t;
                            })
                            .catch(() => {}),
                          (this.wallet_balance_usd_first_token =
                            this.wallet_balance_first_token *
                            this.$store.state.tailPrice),
                          (this.wallet_balance_usd_second_token =
                            this.wallet_balance_second_token * this.saninPrice),
                          this.checkBalanceStatus();
                        break;
                      case 5:
                        (this.wallet_balance_first_token =
                          t.stoneBalance / Math.pow(10, 18)),
                          (this.wallet_balance_second_token = new J.a(
                            t.lp2_balance
                          )
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_balance = new J.a(t.lp6_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_rt_balance = new J.a(t.rt6_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          new G["a"]()
                            .getSaninLPTokenPrice(this.poolData.id)
                            .then((t) => {
                              this.wallet_balance_usd = this.wallet_balance * t;
                            })
                            .catch(() => {}),
                          (this.wallet_balance_usd_first_token =
                            this.wallet_balance_first_token * this.stonePrice),
                          (this.wallet_balance_usd_second_token =
                            this.wallet_balance_second_token * this.saninPrice),
                          this.checkBalanceStatus();
                        break;
                      case 6:
                        (this.wallet_balance_first_token =
                          t.stoneBalance / Math.pow(10, 18)),
                          (this.wallet_balance_second_token = new J.a(
                            t.lp1_balance
                          )
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_balance = new J.a(t.lp7_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          (this.wallet_rt_balance = new J.a(t.rt7_balance)
                            .dividedBy(Math.pow(10, 18))
                            .toString()),
                          new G["a"]()
                            .getSaninLPTokenPrice(this.poolData.id)
                            .then((t) => {
                              this.wallet_balance_usd = this.wallet_balance * t;
                            })
                            .catch(() => {}),
                          (this.wallet_balance_usd_first_token =
                            this.wallet_balance_first_token * this.stonePrice),
                          (this.wallet_balance_usd_second_token =
                            this.wallet_balance_second_token *
                            this.$store.state.tailPrice),
                          this.checkBalanceStatus();
                        break;
                    }
                  })
                  .then(() => {
                    this.checkAllowance(this.poolData.id),
                      this.checkRTAllowance(this.poolData.id);
                  });
              },
              getDepositedAmount() {
                new X().userLP(this.poolData.id).then((t) => {
                  (this.depositedToken = new J.a(t)
                    .dividedBy(Math.pow(10, 18))
                    .toString()),
                    this.$emit(
                      "depositeTokenChanged",
                      this.poolData.id,
                      this.depositedToken
                    ),
                    new G["a"]()
                      .getSaninLPTokenPrice(this.poolData.id)
                      .then((t) => {
                        (this.tokenPrice = t),
                          (this.depositedUSD = this.depositedToken * t),
                          this.$emit(
                            "depositeChanged",
                            this.poolData.id,
                            this.depositedUSD
                          );
                      })
                      .catch(() => {});
                });
              },
              async getPoolInfo(t) {
                let e = "1";
                try {
                  if (d["a"].state.provider) {
                    let t = await d["a"].state.provider.getNetwork();
                    e = t.chainId;
                  }
                } catch (n) {}
                K.a
                  .get(
                    `https://api.civfund.org/getSaninPoolData/${t}/?chainId=${e}`
                  )
                  .then((t) => {
                    (this.tvlToken = t.data.balance),
                      this.$emit(
                        "tvlTokenChanged",
                        this.poolData.id,
                        this.tvlToken
                      ),
                      (this.tvlUsd = t.data.tvlUSD),
                      this.$emit("tvlChanged", this.poolData.id, this.tvlUsd),
                      t.data.roiPerYear && (this.apr = t.data.roiPerYearPerc);
                  })
                  .catch((t) => {});
              },
              checkAllowance(t) {
                new X().checkAllowance(t).then((t) => {
                  let e = new J.a(t);
                  e
                    .dividedBy(Math.pow(10, 18))
                    .lessThan(new J.a(this.wallet_balance))
                    ? ((this.isApproved = !1), (this.isApproving = !1))
                    : (this.isApproved = !0);
                });
              },
              checkRTAllowance(t) {
                new X().checkRTAllowance(t).then((t) => {
                  let e = new J.a(t);
                  e
                    .dividedBy(Math.pow(10, 18))
                    .lessThan(new J.a(this.wallet_rt_balance))
                    ? ((this.isWithdrawApproved = !1),
                      (this.isWithdrawApproving = !1))
                    : (this.isWithdrawApproved = !0);
                });
              },
              checkBalanceStatus() {
                (this.isWalletBalanceZero =
                  parseInt(100 * this.wallet_balance) / 100 == 0),
                  (this.isRewardZero = 0 == this.yieldToken),
                  (this.isDepositedAmountZero = 0 == this.depositedToken);
              },
              priceUpdates() {
                this.getPoolInfo(this.poolData.id),
                  this.getPendingTokens(this.poolData.id),
                  this.getDepositedAmount(),
                  this.getWalletBalance();
              },
            },
            async mounted() {
              this.getPoolInfo(this.poolData.id),
                await new R["a"]().init(),
                this.$root.$on("deposit", this.deposit),
                this.$root.$on("withdraw", this.withdraw),
                await this.getWalletBalance(),
                await this.getCivPrice(),
                await this.getStonePrice(),
                await this.getEthPrice(),
                await this.getTailPrice(),
                await this.getSaninPrice(),
                this.getDepositedAmount(),
                this.getPendingTokens(this.poolData.id),
                window.setInterval(() => {
                  this.checkBalanceStatus(), this.getWalletBalance();
                }, 2e4);
            },
            created() {
              (this.poolData = this.poolItem),
                2 == this.poolData.url.length
                  ? (this.photoLength = !0)
                  : (this.photoLength = !1);
            },
            beforeDestroy() {
              this.$root.$off("deposit", this.deposit),
                this.$root.$off("withdraw", this.withdraw);
            },
            watch: {
              expandAll: function (t) {
                this.expandPool = t > 0;
              },
              tvlToken: function (t) {
                this.$emit("tvlTokenChanged", this.poolData.id, t);
              },
              tvlUsd: function (t) {
                this.$emit("tvlChanged", this.poolData.id, t);
              },
              depositedToken: function (t) {
                this.$emit("depositeTokenChanged", this.poolData.id, t);
              },
              yieldToken: function (t) {
                this.$emit("yieldTokenChanged", this.poolData.id, t);
              },
              yieldUsd: function (t) {
                this.$emit("yieldChanged", this.poolData.id, t);
              },
              depositedUSD: function (t) {
                this.$emit("depositeChanged", this.poolData.id, t);
              },
              wallet_rt_balance: function (t) {
                this.checkRTAllowance(this.poolData.id);
              },
              account: function (t, e) {
                this.priceUpdates();
              },
            },
          }),
        tt = Q,
        et = (n("795f"), n("2877")),
        nt = Object(et["a"])(tt, s, o, !1, null, "2f227db4", null),
        at =
          (nt.exports,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "farm-pool columns is-mobile is-centered" },
              [
                e("div", { staticClass: "pool column is-11" }, [
                  e(
                    "div",
                    {
                      staticClass:
                        "pool-container columns is-mobile is-multiline px-1 mt-0",
                    },
                    [
                      e("div", { staticClass: "column is-7 pr-0" }, [
                        e("div", { staticClass: "columns is-mobile" }, [
                          !t.photoLength && t.poolData.url
                            ? e(
                                "div",
                                {
                                  staticClass: "column is-2 px-0",
                                  staticStyle: {
                                    "margin-left": "5%",
                                    "margin-right": "-5%",
                                  },
                                },
                                [
                                  e("img", {
                                    style: t.poolData.style,
                                    attrs: {
                                      src: t.poolData.url[0],
                                      alt: "Avatar",
                                    },
                                  }),
                                ]
                              )
                            : t.photoLength && t.poolData.url
                            ? e(
                                "div",
                                {
                                  staticClass: "column is-2 px-0",
                                  staticStyle: {
                                    "margin-left": "0%",
                                    "margin-right": "0%",
                                  },
                                },
                                [
                                  e(
                                    "div",
                                    { staticClass: "columns is-mobile" },
                                    [
                                      e("div", { staticClass: "column px-0" }, [
                                        e("img", {
                                          staticClass: "top-image",
                                          attrs: {
                                            src: t.poolData.url[0],
                                            alt: "Avatar",
                                          },
                                        }),
                                      ]),
                                      e("div", { staticClass: "column px-0" }, [
                                        e("img", {
                                          staticClass: "bottom-image",
                                          attrs: {
                                            src: t.poolData.url[1],
                                            alt: "Avatar",
                                          },
                                        }),
                                      ]),
                                    ]
                                  ),
                                ]
                              )
                            : t._e(),
                          e(
                            "div",
                            {
                              staticClass: "column is-full pl-5 textLeftAlign",
                            },
                            [
                              e(
                                "span",
                                { staticStyle: { "font-size": "20px" } },
                                [
                                  t._v(" " + t._s(t.poolData.text) + " "),
                                  e("br"),
                                  e(
                                    "span",
                                    { staticClass: "transition-topaz-text" },
                                    [
                                      t._v(" TVL "),
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-white-text",
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t._f("formatMoney")(t.tvlUsd)
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              e(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-weight": "700",
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.openRoiModal();
                                    },
                                  },
                                },
                                [
                                  e(
                                    "span",
                                    { staticClass: "transition-topaz-text" },
                                    [
                                      t._v(" APR "),
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-white-text",
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t._f("formatPercent")(
                                                  t.apr / 100
                                                )
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t.$store.getters.account
                            ? e("div", { staticClass: "expand column pl-5" }, [
                                t.expandPool
                                  ? e(
                                      "button",
                                      {
                                        staticClass: "sanin-expand-pool",
                                        on: { click: t.closeExpandPool },
                                      },
                                      [t._v(" - ")]
                                    )
                                  : e(
                                      "button",
                                      {
                                        staticClass: "sanin-expand-pool",
                                        on: { click: t.openExpandPool },
                                      },
                                      [t._v(" + ")]
                                    ),
                              ])
                            : t._e(),
                        ]),
                      ]),
                      e("transition", { attrs: { name: "fade" } }, [
                        t.expandPool
                          ? e("div", { staticClass: "column is-12 pl-3" }, [
                              e(
                                "div",
                                { staticClass: "columns is-mobile p-0" },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column text-details textLeftAlign",
                                    },
                                    [
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-topaz-text",
                                        },
                                        [t._v("Deposited")]
                                      ),
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-white-text",
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t._f("formatMoney")(
                                                  t.depositedUSD
                                                )
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-topaz-text",
                                          staticStyle: {
                                            "font-style": "italic",
                                          },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t._f("formatToken")(
                                                  t.depositedToken,
                                                  t.poolData.depositedCurrency
                                                )
                                              ) +
                                              " (" +
                                              t._s(
                                                t._f("formatPercent")(
                                                  t.depositedToken / t.tvlToken
                                                )
                                              ) +
                                              ") "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              e(
                                "div",
                                { staticClass: "columns is-mobile p-0" },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column text-details textLeftAlign",
                                    },
                                    [
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-topaz-text",
                                        },
                                        [t._v("Yield")]
                                      ),
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-white-text",
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t._f("formatMoney")(t.yieldUsd)
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-topaz-text",
                                          staticStyle: {
                                            "font-style": "italic",
                                          },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t._f("formatToken")(
                                                  t.yieldToken,
                                                  t.poolData.yieldCurrency
                                                )
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              e("hr"),
                              e(
                                "div",
                                {
                                  staticClass: "columns is-mobile is-multiline",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column is-12 pl-0 mt-0 text-details textLeftAlign",
                                    },
                                    [
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-topaz-text",
                                        },
                                        [t._v("Balance")]
                                      ),
                                      e(
                                        "span",
                                        {
                                          staticClass: "transition-white-text",
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t._f("formatToken")(
                                                  t.wallet_balance,
                                                  t.poolData.walletBalanceToken
                                                )
                                              ) +
                                              " (" +
                                              t._s(
                                                t._f("formatMoney")(
                                                  t.wallet_balance_usd
                                                )
                                              ) +
                                              ") "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t.isRewardClaimed
                                    ? e(
                                        "div",
                                        {
                                          staticClass: "column mx-3 px-0",
                                          class: {
                                            "button-container": t.isRewardZero,
                                          },
                                        },
                                        [
                                          e(
                                            "b-tooltip",
                                            {
                                              staticClass: "action-tooltip",
                                              attrs: {
                                                multilined: "",
                                                label:
                                                  "This will claim all you current Tail rewards",
                                              },
                                            },
                                            [
                                              e(
                                                "button",
                                                {
                                                  staticClass: "action-button",
                                                  class: {
                                                    disable: t.isRewardZero,
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.claimReward(
                                                        t.inputAmount
                                                      );
                                                    },
                                                  },
                                                },
                                                [t._v(" Claim Reward ")]
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      )
                                    : e(
                                        "div",
                                        { staticClass: "column mx-3 px-0" },
                                        [
                                          e(
                                            "button",
                                            { staticClass: "action-button" },
                                            [
                                              e("div", {
                                                staticClass: "lds-dual-ring",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                  e(
                                    "div",
                                    {
                                      staticClass: "column is-12",
                                      staticStyle: { "margin-top": "-5%" },
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass: "columns is-1 is-mobile",
                                        },
                                        [
                                          t.isApproved && !t.isDepositing
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "column mx-3 px-0",
                                                  class: {
                                                    "button-container":
                                                      t.isWalletBalanceZero,
                                                  },
                                                },
                                                [
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "action-button",
                                                      class: {
                                                        disable:
                                                          t.isWalletBalanceZero,
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          return t.openModal(
                                                            "Deposit"
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Deposit ")]
                                                  ),
                                                ]
                                              )
                                            : t.isApproved || t.isDepositing
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "column mx-3 px-0",
                                                  class: {
                                                    "button-container":
                                                      t.isWalletBalanceZero,
                                                  },
                                                },
                                                [
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "action-button",
                                                      class: {
                                                        "button-container":
                                                          t.isWalletBalanceZero,
                                                      },
                                                    },
                                                    [
                                                      e("div", {
                                                        staticClass:
                                                          "lds-dual-ring",
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "column mx-3 px-0",
                                                  class: {
                                                    "button-container":
                                                      t.isWalletBalanceZero,
                                                  },
                                                },
                                                [
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "action-button",
                                                      class: {
                                                        disable:
                                                          t.isWalletBalanceZero,
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          return t.approveStakingToken(
                                                            t.poolData.id,
                                                            t.wallet_balance
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Approve Deposit ")]
                                                  ),
                                                ]
                                              ),
                                          t.isWithdrawApproved &&
                                          !t.isWithdrawing
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "column mx-3 px-0",
                                                  class: {
                                                    "button-container":
                                                      t.isDepositedAmountZero,
                                                  },
                                                },
                                                [
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "action-button",
                                                      class: {
                                                        disable:
                                                          t.isDepositedAmountZero,
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          return t.openModal(
                                                            "Withdraw"
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Withdraw ")]
                                                  ),
                                                ]
                                              )
                                            : t.isWithdrawApproved ||
                                              t.isWithdrawing
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "column mx-3 px-0",
                                                  class: {
                                                    "button-container":
                                                      t.isDepositedAmountZero,
                                                  },
                                                },
                                                [
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "action-button",
                                                      class: {
                                                        disable:
                                                          t.isDepositedAmountZero,
                                                      },
                                                    },
                                                    [
                                                      e("div", {
                                                        staticClass:
                                                          "lds-dual-ring",
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "column mx-3 px-0",
                                                  class: {
                                                    "button-container":
                                                      t.isDepositedAmountZero,
                                                  },
                                                },
                                                [
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "action-button",
                                                      class: {
                                                        disable:
                                                          t.isDepositedAmountZero,
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          return t.approveRepresentToken(
                                                            t.poolData.id,
                                                            t.depositedToken
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Approve Withdraw ")]
                                                  ),
                                                ]
                                              ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              e(
                                "div",
                                {
                                  staticClass: "column is-4",
                                  staticStyle: { "margin-top": "-5%" },
                                },
                                [
                                  e("div", { staticClass: "columns pl-0" }, [
                                    e("div", { staticClass: "px-0 mt-0" }, [
                                      e("span", [
                                        t.poolData.id > 1 &&
                                        t.isWalletBalanceZero
                                          ? e(
                                              "a",
                                              {
                                                staticClass: "action-link",
                                                attrs: { target: "_blank" },
                                                on: {
                                                  click: function (e) {
                                                    return t.addCustomToken(
                                                      t.poolData.id
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  " Add " +
                                                    t._s(t.poolData.tokenName) +
                                                    " to Metamask "
                                                ),
                                              ]
                                            )
                                          : e(
                                              "a",
                                              {
                                                staticClass: "action-link",
                                                on: {
                                                  click: function (e) {
                                                    return t.addCustomToken(
                                                      t.poolData.id
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  " Add " +
                                                    t._s(t.poolData.tokenName) +
                                                    " to Metamask "
                                                ),
                                              ]
                                            ),
                                      ]),
                                    ]),
                                    e("div", { staticClass: "px-0" }, [
                                      t.isWalletBalanceZero ||
                                      (t.poolData.id > 1 &&
                                        t.isWalletBalanceZero)
                                        ? e(
                                            "a",
                                            {
                                              staticClass: "action-link",
                                              attrs: { target: "_blank" },
                                              on: {
                                                click: function (e) {
                                                  return t.addCustomXToken(
                                                    t.poolData.id
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                " Add " +
                                                  t._s(
                                                    t.poolData.repTokenName
                                                  ) +
                                                  " to Metamask "
                                              ),
                                            ]
                                          )
                                        : e(
                                            "a",
                                            {
                                              staticClass: "action-link",
                                              on: {
                                                click: function (e) {
                                                  return t.addCustomXToken(
                                                    t.poolData.id
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                " Add " +
                                                  t._s(
                                                    t.poolData.repTokenName
                                                  ) +
                                                  " to Metamask "
                                              ),
                                            ]
                                          ),
                                    ]),
                                    e(
                                      "div",
                                      {
                                        staticClass: "px-0",
                                        class: {
                                          highlight: t.isWalletBalanceZero,
                                        },
                                      },
                                      [
                                        t.poolData.id > 1
                                          ? e(
                                              "a",
                                              {
                                                staticClass: "action-link",
                                                attrs: {
                                                  target: "_blank",
                                                  autofocus: "",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.goToUniswap();
                                                  },
                                                },
                                              },
                                              [t._v(" Add v2 Liquidity ")]
                                            )
                                          : e(
                                              "a",
                                              {
                                                staticClass: "action-link",
                                                attrs: {
                                                  target: "_blank",
                                                  autofocus: "",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.goToTrade(
                                                      t.poolData.tokenName
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  " Buy " +
                                                    t._s(t.poolData.tokenName) +
                                                    " "
                                                ),
                                              ]
                                            ),
                                        t.poolData.uniswapRemove
                                          ? e(
                                              "a",
                                              {
                                                staticClass: "action-link",
                                                attrs: {
                                                  target: "_blank",
                                                  autofocus: "",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.goToUniRemove();
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  " Remove v2 Liquidity (post-withdraw) "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ])
                          : t._e(),
                      ]),
                    ],
                    1
                  ),
                ]),
              ]
            );
          }),
        it = [],
        st = {
          name: "SaninFarmPoolComponent",
          components: {},
          store: d["a"],
          data() {
            return {
              isRewardZero: !1,
              isRewardClaimed: !0,
              isWalletBalanceZero: !1,
              isDepositedAmountZero: !1,
              chainId: null,
              poolData: "",
              expandPool: this.expandAll > 0,
              inputAmount: null,
              photoLength: null,
              depositedToken: 0,
              reward_debt: 0,
              depositedUSD: 0,
              yieldToken: 0,
              yieldUsd: 0,
              tvlToken: 0,
              tvlUsd: 0,
              apr: 0,
              wallet_balance: 0,
              wallet_rt_balance: 0,
              wallet_balance_usd: 0,
              wallet_balance_first_token: 0,
              wallet_balance_second_token: 0,
              wallet_balance_usd_first_token: 0,
              wallet_balance_usd_second_token: 0,
              isApproved: !1,
              isApproving: !1,
              isWithdrawApproved: !1,
              isWithdrawApproving: !1,
              isWithdrawing: !1,
              isDepositing: !1,
              sender: "",
              balancePercentage: 0,
              isHidden: 0,
              actionTitle: "",
              withdraw_disable: !1,
              deposit_disable: !1,
              tokenPrice: 0,
              civPrice: 0,
              stonePrice: 0,
              ethPrice: 0,
              saninPrice: 0,
              tailPrice: 0,
            };
          },
          computed: {
            account() {
              return this.$store.getters.account;
            },
          },
          props: {
            poolItem: { type: Object },
            amountPid: { type: Number },
            expandAll: Number,
          },
          methods: {
            openModal(t) {
              this.$emit(
                "open-amount-modal",
                t,
                this.poolData.id,
                this.poolData.text,
                parseFloat(this.depositedToken),
                this.wallet_balance,
                this.tokenPrice
              );
            },
            addCustomToken(t) {
              new X()
                .addCustomToken(t)
                .then((t) => {})
                .catch((t) => {});
            },
            addCustomXToken(t) {
              new X()
                .addCustomXToken(t)
                .then((t) => {})
                .catch((t) => {});
            },
            goToUniswap() {
              window.open(this.poolData.uniswapLink, "_blank");
            },
            goToUniRemove() {
              window.open(this.poolData.uniswapRemove, "_blank");
            },
            async getStonePrice() {
              this.stonePrice > 0 ||
                (d["a"].state.stonePrice > 0 ||
                  (await new R["a"]().updateStonePrice()),
                (this.stonePrice = d["a"].state.stonePrice / Math.pow(10, 9)));
            },
            async getEthPrice() {
              this.ethPrice > 0 ||
                (d["a"].state.ethPrice > 0 ||
                  (await new R["a"]().updateEthPrice()),
                (this.ethPrice = d["a"].state.ethPrice));
            },
            async getSaninPrice() {
              this.saninPrice > 0 ||
                (d["a"].state.saninPrice > 0 ||
                  (await new R["a"]().updateSaninPrice()),
                (this.saninPrice = this.$store.state.saninPrice));
            },
            async getTailPrice() {
              console.log(this.$store.state.tailPrice, "TailPrice"),
                this.$store.state.tailPrice > 0 ||
                  (this.$store.state.tailPrice > 0 ||
                    (await new R["a"]().updateTailPrice()),
                  (this.tailPrice = this.$store.state.tailPrice));
            },
            goToTrade(t) {
              window.open(
                `https://app.uniswap.org/prefill/ETH/${t}/1`,
                "_blank"
              );
            },
            closeModal() {
              this.$emit("close-amount-modal");
            },
            openExpandPool() {
              this.expandPool = !0;
            },
            closeExpandPool() {
              this.expandPool = !1;
            },
            openRoiModal() {},
            async showToast() {
              this.$toast.error(
                "Smart Contract doesn't have enough TAIL token. Please try again later",
                {
                  position: "top-right",
                  timeout: 2500,
                  closeOnClick: !0,
                  pauseOnFocusLoss: !0,
                  pauseOnHover: !0,
                  draggable: !0,
                  draggablePercent: 0.6,
                  showCloseButtonOnHover: !1,
                  closeButton: "button",
                  icon: !0,
                  hideProgressBar: !1,
                  rtl: !1,
                }
              );
            },
            async claimReward() {
              this.isRewardClaimed = !1;
              let t = await new X().availableToken(
                new J.a(this.yieldToken),
                !1
              );
              if (!1 === t)
                return (this.isRewardClaimed = !0), void this.showToast();
              new X()
                .claimTokens(this.poolData.id)
                .then(() => {
                  (this.isRewardClaimed = !0),
                    (this.isWithdrawApproved = !1),
                    (this.isWithdrawApproving = !1),
                    localStorage.setItem("w" + this.poolData.id, ""),
                    this.checkBalanceStatus();
                })
                .catch((t) => {
                  this.isRewardClaimed = !0;
                })
                .finally(() => {
                  (this.isRewardClaimed = !0),
                    this.priceUpdates(),
                    this.checkBalanceStatus();
                });
            },
            approveRepresentToken(t, e) {
              (this.isWithdrawApproving = !0),
                new X()
                  .approveRepresentToken(t, e)
                  .then((e) => {
                    (this.sender = e.from),
                      localStorage.setItem("w" + t, !0),
                      (this.isWithdrawApproved = !0),
                      (this.isWithdrawApproving = !1),
                      localStorage.setItem("sender", this.sender);
                  })
                  .catch((e) => {
                    (this.isWithdrawApproving = !1),
                      (this.isWithdrawApproved = !1),
                      localStorage.setItem("w" + t, "");
                  })
                  .finally(() => {
                    (this.isWithdrawApproving = !1),
                      this.priceUpdates(),
                      this.checkBalanceStatus();
                  });
            },
            approveStakingToken(t, e) {
              e > 0 &&
                ((this.isApproving = !0),
                new X()
                  .approveStakingToken(t, e)
                  .then((t) => {
                    (this.isApproving = !1),
                      (this.isApproved = !0),
                      (this.sender = t.from),
                      localStorage.setItem("sender", this.sender);
                  })
                  .catch((t) => {
                    (this.isApproving = !1),
                      (this.isApproved = !1),
                      console.log(t);
                  })
                  .finally(() => {
                    (this.isApproving = !1),
                      this.priceUpdates(),
                      this.checkBalanceStatus();
                  }));
            },
            async withdraw(t, e) {
              if (this.poolData.id == t) {
                this.isWithdrawing = !0;
                let n = await new X().availableToken(
                  new J.a(this.yieldToken),
                  !1
                );
                if (!1 === n)
                  return (this.isWithdrawing = !1), void this.showToast();
                this.$emit("close-amount-modal"),
                  (this.sender = localStorage.getItem("sender")),
                  await new X()
                    .withdrawToken(this.sender, e, t)
                    .then((t) => {
                      this.isApproved = !1;
                    })
                    .finally(() => {
                      this.priceUpdates(), this.checkBalanceStatus();
                    }),
                  (this.isWithdrawing = !1);
              }
              this.priceUpdates(), this.checkBalanceStatus();
            },
            async deposit(t, e) {
              if (this.poolData.id == t) {
                this.isDepositing = !0;
                let n = await new X().availableToken(
                  new J.a(this.yieldToken),
                  !1
                );
                if (!1 === n)
                  return (this.isDepositing = !1), void this.showToast();
                this.$emit("close-amount-modal"),
                  (this.sender = localStorage.getItem("sender")),
                  await new X()
                    .depositToken(e, t)
                    .then(() => {
                      (this.isWithdrawApproved = !1),
                        (this.isWithdrawApproving = !1),
                        (this.isApproved = !0),
                        localStorage.setItem("w" + t, ""),
                        (this.isDepositing = !1);
                    })
                    .catch((t) => {
                      this.isDepositing = !1;
                    })
                    .finally(() => {
                      (this.isDepositing = !1),
                        this.priceUpdates(),
                        this.checkBalanceStatus(),
                        (this.isWithdrawApproved = !1),
                        (this.isWithdrawApproving = !1);
                    }),
                  (this.inputAmount = null);
              }
            },
            getPendingTokens(t) {
              new X().pendingTokens(t).then((t) => {
                (this.yieldToken = t / Math.pow(10, 18)),
                  this.$emit(
                    "yieldTokenChanged",
                    this.poolData.id,
                    this.yieldToken
                  ),
                  (this.yieldUsd = this.tailPrice * this.yieldToken),
                  this.$emit("yieldChanged", this.poolData.id, this.yieldUsd),
                  this.checkBalanceStatus();
              });
            },
            async getWalletBalance() {
              await d["a"].state.provider.getNetwork();
              new X()
                .loadbalances()
                .then((t) => {
                  switch (this.poolData.id) {
                    case 0:
                      (this.wallet_balance = new J.a(t.lp1_balance)
                        .dividedBy(Math.pow(10, 18))
                        .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt1_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(0)
                          .then((t) => {
                            (this.wallet_balance_usd = this.wallet_balance * t),
                              this.checkBalanceStatus();
                          })
                          .catch(() => {});
                      break;
                    case 1:
                      (this.wallet_balance = new J.a(t.lp2_balance)
                        .dividedBy(Math.pow(10, 18))
                        .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt2_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]().getSaninLPTokenPrice(1).then((t) => {
                          (this.wallet_balance_usd = this.wallet_balance * t),
                            this.checkBalanceStatus();
                        }),
                        this.checkBalanceStatus();
                      break;
                    case 2:
                      (this.wallet_balance_first_token =
                        t.lp2_balance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token = new J.a(
                          t.ethBalance
                        )
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_balance = new J.a(t.lp3_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt3_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_second_token =
                          this.ethPrice * this.wallet_balance_second_token),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token * this.saninPrice),
                        this.checkBalanceStatus();
                      break;
                    case 3:
                      (this.wallet_balance_first_token =
                        t.lp1_balance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token =
                          t.ethBalance / Math.pow(10, 18)),
                        (this.wallet_balance = new J.a(t.lp4_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt4_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token * this.tailPrice),
                        (this.wallet_balance_usd_second_token =
                          this.wallet_balance_second_token * this.ethPrice),
                        this.checkBalanceStatus();
                      break;
                    case 4:
                      (this.wallet_balance_first_token =
                        t.lp1_balance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token = new J.a(
                          t.lp2_balance
                        )
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_balance = new J.a(t.lp5_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt5_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token * this.tailPrice),
                        (this.wallet_balance_usd_second_token =
                          this.wallet_balance_second_token * this.saninPrice),
                        this.checkBalanceStatus();
                      break;
                    case 5:
                      (this.wallet_balance_first_token =
                        t.stoneBalance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token = new J.a(
                          t.lp2_balance
                        )
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_balance = new J.a(t.lp6_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt6_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token * this.stonePrice),
                        (this.wallet_balance_usd_second_token =
                          this.wallet_balance_second_token * this.saninPrice),
                        this.checkBalanceStatus();
                      break;
                    case 6:
                      (this.wallet_balance_first_token =
                        t.stoneBalance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token = new J.a(
                          t.lp1_balance
                        )
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_balance = new J.a(t.lp7_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt7_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token * this.stonePrice),
                        (this.wallet_balance_usd_second_token =
                          this.wallet_balance_second_token * this.tailPrice),
                        this.checkBalanceStatus();
                      break;
                  }
                })
                .then(() => {
                  this.checkAllowance(this.poolData.id),
                    this.checkRTAllowance(this.poolData.id);
                });
            },
            getDepositedAmount() {
              new X().userLP(this.poolData.id).then((t) => {
                (this.depositedToken = new J.a(t)
                  .dividedBy(Math.pow(10, 18))
                  .toString()),
                  this.$emit(
                    "depositeTokenChanged",
                    this.poolData.id,
                    this.depositedToken
                  ),
                  new G["a"]()
                    .getSaninLPTokenPrice(this.poolData.id)
                    .then((t) => {
                      (this.tokenPrice = t),
                        (this.depositedUSD = this.depositedToken * t),
                        this.$emit(
                          "depositeChanged",
                          this.poolData.id,
                          this.depositedUSD
                        );
                    })
                    .catch(() => {});
              });
            },
            async getPoolInfo(t) {
              let e = "1";
              try {
                if (d["a"].state.provider) {
                  let t = await d["a"].state.provider.getNetwork();
                  e = t.chainId;
                }
              } catch (n) {}
              K.a
                .get(
                  `https://api.civfund.org/getSaninPoolData/${t}/?chainId=${e}`
                )
                .then((t) => {
                  (this.tvlToken = t.data.balance),
                    this.$emit(
                      "tvlTokenChanged",
                      this.poolData.id,
                      this.tvlToken
                    ),
                    (this.tvlUsd = t.data.tvlUSD),
                    this.$emit("tvlChanged", this.poolData.id, this.tvlUsd),
                    t.data.roiPerYear && (this.apr = t.data.roiPerYearPerc);
                })
                .catch((t) => {});
            },
            checkAllowance(t) {
              new X().checkAllowance(t).then((t) => {
                let e = new J.a(t);
                e
                  .dividedBy(Math.pow(10, 18))
                  .lessThan(new J.a(this.wallet_balance))
                  ? ((this.isApproved = !1), (this.isApproving = !1))
                  : (this.isApproved = !0);
              });
            },
            checkRTAllowance(t) {
              new X().checkRTAllowance(t).then((t) => {
                let e = new J.a(t);
                e
                  .dividedBy(Math.pow(10, 18))
                  .lessThan(new J.a(this.wallet_rt_balance))
                  ? ((this.isWithdrawApproved = !1),
                    (this.isWithdrawApproving = !1))
                  : (this.isWithdrawApproved = !0);
              });
            },
            checkBalanceStatus() {
              (this.isWalletBalanceZero =
                parseInt(100 * this.wallet_balance) / 100 == 0),
                (this.isRewardZero = 0 == this.yieldToken),
                (this.isDepositedAmountZero = 0 == this.depositedToken);
            },
            priceUpdates() {
              this.getPoolInfo(this.poolData.id),
                this.getPendingTokens(this.poolData.id),
                this.getDepositedAmount(),
                this.getWalletBalance();
            },
          },
          async mounted() {
            this.getPoolInfo(this.poolData.id),
              await new R["a"]().init(),
              this.$root.$on("deposit", this.deposit),
              this.$root.$on("withdraw", this.withdraw),
              await this.getStonePrice(),
              await this.getEthPrice(),
              await this.getTailPrice(),
              await this.getSaninPrice(),
              await this.getPendingTokens(this.poolData.id),
              await this.getDepositedAmount(),
              await this.getWalletBalance(),
              window.setInterval(() => {
                this.priceUpdates(),
                  this.checkBalanceStatus(),
                  this.getWalletBalance();
              }, 2e4);
          },
          created() {
            (this.poolData = this.poolItem),
              2 == this.poolData.url.length
                ? (this.photoLength = !0)
                : (this.photoLength = !1);
          },
          beforeDestroy() {
            this.$root.$off("deposit", this.deposit),
              this.$root.$off("withdraw", this.withdraw);
          },
          watch: {
            expandAll: function (t) {
              this.expandPool = t > 0;
            },
            tvlToken: function (t) {
              this.$emit("tvlTokenChanged", this.poolData.id, t);
            },
            tvlUsd: function (t) {
              this.$emit("tvlChanged", this.poolData.id, t);
            },
            depositedToken: function (t) {
              this.$emit("depositeTokenChanged", this.poolData.id, t);
            },
            yieldToken: function (t) {
              this.$emit("yieldTokenChanged", this.poolData.id, t);
            },
            yieldUsd: function (t) {
              this.$emit("yieldChanged", this.poolData.id, t);
            },
            depositedUSD: function (t) {
              this.$emit("depositeChanged", this.poolData.id, t);
            },
            wallet_rt_balance: function (t) {
              this.checkRTAllowance(this.poolData.id);
            },
            account: function (t, e) {
              this.priceUpdates();
            },
          },
        },
        ot = st,
        lt =
          (n("d7c4"), Object(et["a"])(ot, at, it, !1, null, "2ff2e0c0", null)),
        rt =
          (lt.exports,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", [
              e(
                "div",
                {
                  staticClass:
                    "farm-pool columns is-mobile is-centered is-hidden-desktop is-hidden-wide is-hidden-tablet",
                },
                [
                  e("div", { staticClass: "pool column is-11" }, [
                    e(
                      "div",
                      {
                        staticClass:
                          "pool-container columns is-mobile is-multiline px-1 mt-0",
                      },
                      [
                        e("div", { staticClass: "column is-7 pr-0" }, [
                          e("div", { staticClass: "columns is-mobile" }, [
                            !t.photoLength && t.poolData.url
                              ? e(
                                  "div",
                                  {
                                    staticClass: "column is-2 px-0",
                                    staticStyle: {
                                      "margin-left": "5%",
                                      "margin-right": "-5%",
                                    },
                                  },
                                  [
                                    e("img", {
                                      style: t.poolData.style,
                                      attrs: {
                                        width: "36",
                                        height: "36",
                                        src: t.poolData.url[0],
                                        alt: "Avatar",
                                      },
                                    }),
                                  ]
                                )
                              : t.photoLength && t.poolData.url
                              ? e(
                                  "div",
                                  {
                                    staticClass: "column is-2 px-0",
                                    staticStyle: {
                                      "margin-left": "0%",
                                      "margin-right": "0%",
                                    },
                                  },
                                  [
                                    e(
                                      "div",
                                      { staticClass: "columns is-mobile" },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "column px-0" },
                                          [
                                            e("img", {
                                              staticClass: "top-image",
                                              attrs: {
                                                width: "36",
                                                height: "36",
                                                src: t.poolData.url[0],
                                                alt: "Avatar",
                                              },
                                            }),
                                          ]
                                        ),
                                        e(
                                          "div",
                                          { staticClass: "column px-0" },
                                          [
                                            e("img", {
                                              staticClass: "bottom-image",
                                              attrs: {
                                                src: t.poolData.url[1],
                                                alt: "Avatar",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                )
                              : t._e(),
                            e(
                              "div",
                              {
                                staticClass:
                                  "column is-full pl-5 textLeftAlign",
                              },
                              [
                                e(
                                  "span",
                                  { staticStyle: { "font-size": "20px" } },
                                  [
                                    t._v(" " + t._s(t.poolData.text) + " "),
                                    e("br"),
                                    e(
                                      "span",
                                      { staticClass: "transition-topaz-text" },
                                      [
                                        t._v(" TVL "),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-white-text",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t._f("formatMoney")(t.tvlUsd)
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                e(
                                  "span",
                                  {
                                    staticStyle: {
                                      "font-size": "13px",
                                      "font-weight": "700",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.openRoiModal();
                                      },
                                    },
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "transition-topaz-text" },
                                      [
                                        t._v(" APR "),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-white-text",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t._f("formatPercent")(
                                                    t.apr / 100
                                                  )
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t.$store.getters.account
                              ? e(
                                  "div",
                                  { staticClass: "expand column pl-5" },
                                  [
                                    t.expandPool
                                      ? e(
                                          "button",
                                          {
                                            staticClass: "sanin-expand-pool",
                                            on: { click: t.closeExpandPool },
                                          },
                                          [t._v(" - ")]
                                        )
                                      : e(
                                          "button",
                                          {
                                            staticClass: "sanin-expand-pool",
                                            on: { click: t.openExpandPool },
                                          },
                                          [t._v(" + ")]
                                        ),
                                  ]
                                )
                              : t._e(),
                          ]),
                        ]),
                        e("transition", { attrs: { name: "fade" } }, [
                          t.expandPool
                            ? e("div", { staticClass: "column is-12 pl-3" }, [
                                e(
                                  "div",
                                  { staticClass: "columns is-mobile p-0" },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "column text-details textLeftAlign",
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-topaz-text",
                                          },
                                          [t._v("Deposited")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-white-text",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t._f("formatMoney")(
                                                    t.depositedUSD
                                                  )
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-topaz-text",
                                            staticStyle: {
                                              "font-style": "italic",
                                            },
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t._f("formatToken")(
                                                    t.depositedToken,
                                                    t.poolData.depositedCurrency
                                                  )
                                                ) +
                                                " (" +
                                                t._s(
                                                  t._f("formatPercent")(
                                                    t.depositedToken /
                                                      t.tvlToken
                                                  )
                                                ) +
                                                ") "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                e(
                                  "div",
                                  { staticClass: "columns is-mobile p-0" },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "column text-details textLeftAlign",
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-topaz-text",
                                          },
                                          [t._v("Yield")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-white-text",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t._f("formatMoney")(
                                                    t.yieldUsd
                                                  )
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-topaz-text",
                                            staticStyle: {
                                              "font-style": "italic",
                                            },
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t._f("formatToken")(
                                                    t.yieldToken,
                                                    t.poolData.yieldCurrency
                                                  )
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                e("hr"),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "columns is-mobile is-multiline",
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "column is-12 pl-0 mt-0 text-details textLeftAlign",
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-topaz-text",
                                          },
                                          [t._v("Balance")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "transition-white-text",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t._f("formatToken")(
                                                    t.wallet_balance,
                                                    t.poolData
                                                      .walletBalanceToken
                                                  )
                                                ) +
                                                " (" +
                                                t._s(
                                                  t._f("formatMoney")(
                                                    t.wallet_balance_usd
                                                  )
                                                ) +
                                                ") "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t.isRewardClaimed
                                      ? e(
                                          "div",
                                          {
                                            staticClass: "column mx-3 px-0",
                                            class: {
                                              "button-container":
                                                t.isRewardZero,
                                            },
                                          },
                                          [
                                            e(
                                              "b-tooltip",
                                              {
                                                staticClass: "action-tooltip",
                                                attrs: {
                                                  multilined: "",
                                                  label:
                                                    "This will claim all you current Tail rewards",
                                                },
                                              },
                                              [
                                                e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "action-button",
                                                    class: {
                                                      disable: t.isRewardZero,
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.claimReward(
                                                          t.inputAmount
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Claim Reward ")]
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        )
                                      : e(
                                          "div",
                                          { staticClass: "column mx-3 px-0" },
                                          [
                                            e(
                                              "button",
                                              { staticClass: "action-button" },
                                              [
                                                e("div", {
                                                  staticClass: "lds-dual-ring",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                    e(
                                      "div",
                                      {
                                        staticClass: "column is-12",
                                        staticStyle: { "margin-top": "-5%" },
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "columns is-1 is-mobile",
                                          },
                                          [
                                            t.isApproved && !t.isDepositing
                                              ? e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "column mx-3 px-0",
                                                    class: {
                                                      "button-container":
                                                        t.isWalletBalanceZero,
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "action-button",
                                                        class: {
                                                          disable:
                                                            t.isWalletBalanceZero,
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.openModal(
                                                              "Deposit"
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [t._v(" Deposit ")]
                                                    ),
                                                  ]
                                                )
                                              : t.isApproved || t.isDepositing
                                              ? e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "column mx-3 px-0",
                                                    class: {
                                                      "button-container":
                                                        t.isWalletBalanceZero,
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "action-button",
                                                        class: {
                                                          "button-container":
                                                            t.isWalletBalanceZero,
                                                        },
                                                      },
                                                      [
                                                        e("div", {
                                                          staticClass:
                                                            "lds-dual-ring",
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                )
                                              : e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "column mx-3 px-0",
                                                    class: {
                                                      "button-container":
                                                        t.isWalletBalanceZero,
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "action-button",
                                                        class: {
                                                          disable:
                                                            t.isWalletBalanceZero,
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.approveStakingToken(
                                                              t.poolData.id,
                                                              t.wallet_balance
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          " Approve Deposit "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                            t.isWithdrawApproved &&
                                            !t.isWithdrawing
                                              ? e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "column mx-3 px-0",
                                                    class: {
                                                      "button-container":
                                                        t.isDepositedAmountZero,
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "action-button",
                                                        class: {
                                                          disable:
                                                            t.isDepositedAmountZero,
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.openModal(
                                                              "Withdraw"
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [t._v(" Withdraw ")]
                                                    ),
                                                  ]
                                                )
                                              : t.isWithdrawApproved ||
                                                t.isWithdrawing
                                              ? e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "column mx-3 px-0",
                                                    class: {
                                                      "button-container":
                                                        t.isDepositedAmountZero,
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "action-button",
                                                        class: {
                                                          disable:
                                                            t.isDepositedAmountZero,
                                                        },
                                                      },
                                                      [
                                                        e("div", {
                                                          staticClass:
                                                            "lds-dual-ring",
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                )
                                              : e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "column mx-3 px-0",
                                                    class: {
                                                      "button-container":
                                                        t.isDepositedAmountZero,
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "action-button",
                                                        class: {
                                                          disable:
                                                            t.isDepositedAmountZero,
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.approveRepresentToken(
                                                              t.poolData.id,
                                                              t.depositedToken
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          " Approve Withdraw "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                e(
                                  "div",
                                  {
                                    staticClass: "column is-4",
                                    staticStyle: { "margin-top": "-5%" },
                                  },
                                  [
                                    e("div", { staticClass: "columns pl-0" }, [
                                      e("div", { staticClass: "px-0 mt-0" }, [
                                        e("span", [
                                          t.poolData.id > 1 &&
                                          t.isWalletBalanceZero
                                            ? e(
                                                "a",
                                                {
                                                  staticClass: "action-link",
                                                  attrs: { target: "_blank" },
                                                  on: {
                                                    click: function (e) {
                                                      return t.addCustomToken(
                                                        t.poolData.id
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " Add " +
                                                      t._s(
                                                        t.poolData.tokenName
                                                      ) +
                                                      " to Metamask "
                                                  ),
                                                ]
                                              )
                                            : e(
                                                "a",
                                                {
                                                  staticClass: "action-link",
                                                  on: {
                                                    click: function (e) {
                                                      return t.addCustomToken(
                                                        t.poolData.id
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " Add " +
                                                      t._s(
                                                        t.poolData.tokenName
                                                      ) +
                                                      " to Metamask "
                                                  ),
                                                ]
                                              ),
                                        ]),
                                      ]),
                                      e("div", { staticClass: "px-0" }, [
                                        t.isWalletBalanceZero ||
                                        (t.poolData.id > 1 &&
                                          t.isWalletBalanceZero)
                                          ? e(
                                              "a",
                                              {
                                                staticClass: "action-link",
                                                attrs: { target: "_blank" },
                                                on: {
                                                  click: function (e) {
                                                    return t.addCustomXToken(
                                                      t.poolData.id
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  " Add " +
                                                    t._s(
                                                      t.poolData.repTokenName
                                                    ) +
                                                    " to Metamask "
                                                ),
                                              ]
                                            )
                                          : e(
                                              "a",
                                              {
                                                staticClass: "action-link",
                                                on: {
                                                  click: function (e) {
                                                    return t.addCustomXToken(
                                                      t.poolData.id
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  " Add " +
                                                    t._s(
                                                      t.poolData.repTokenName
                                                    ) +
                                                    " to Metamask "
                                                ),
                                              ]
                                            ),
                                      ]),
                                      e(
                                        "div",
                                        {
                                          staticClass: "px-0",
                                          class: {
                                            highlight: t.isWalletBalanceZero,
                                          },
                                        },
                                        [
                                          t.poolData.id > 1
                                            ? e(
                                                "a",
                                                {
                                                  staticClass: "action-link",
                                                  attrs: {
                                                    target: "_blank",
                                                    autofocus: "",
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.goToUniswap();
                                                    },
                                                  },
                                                },
                                                [t._v(" Add v2 Liquidity ")]
                                              )
                                            : e(
                                                "a",
                                                {
                                                  staticClass: "action-link",
                                                  attrs: {
                                                    target: "_blank",
                                                    autofocus: "",
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.goToTrade(
                                                        t.poolData.tokenName
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " Buy " +
                                                      t._s(
                                                        t.poolData.tokenName
                                                      ) +
                                                      " "
                                                  ),
                                                ]
                                              ),
                                          t.poolData.uniswapRemove
                                            ? e(
                                                "a",
                                                {
                                                  staticClass: "action-link",
                                                  attrs: {
                                                    target: "_blank",
                                                    autofocus: "",
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.goToUniRemove();
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " Remove v2 Liquidity (post-withdraw) "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ])
                            : t._e(),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
              e(
                "div",
                { staticClass: "farm-pool columns is-mobile is-hidden-mobile" },
                [
                  e("div", { staticClass: "pool column is-12" }, [
                    e(
                      "div",
                      {
                        staticClass:
                          "pool-container columns is-mobile is-multiline px-0",
                      },
                      [
                        !t.photoLength && t.poolData.url
                          ? e(
                              "div",
                              {
                                class: [
                                  t.$store.getters.account
                                    ? "column is-1 px-0 mt-0"
                                    : "column is-2 px-0 mt-0",
                                ],
                              },
                              [
                                e("img", {
                                  style: t.poolData.style,
                                  attrs: {
                                    src: t.poolData.url[0],
                                    alt: "Avatar",
                                    width: "36",
                                    height: "36",
                                  },
                                }),
                              ]
                            )
                          : t.photoLength && t.poolData.url
                          ? e(
                              "div",
                              {
                                class: [
                                  t.$store.getters.account
                                    ? "column is-1 px-0 mt-0"
                                    : "column is-2 px-0 mt-0",
                                ],
                              },
                              [
                                e("div", { staticClass: "columns is-mobile" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column icon-design px-0 icon-top-design",
                                    },
                                    [
                                      e("img", {
                                        staticClass: "top-image-desktop",
                                        attrs: {
                                          width: "36",
                                          height: "36",
                                          src: t.poolData.url[0],
                                          alt: "Avatar",
                                        },
                                      }),
                                    ]
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "column icon-design px-0 icon-bottom-design",
                                    },
                                    [
                                      e("img", {
                                        staticClass: "bottom-image-desktop",
                                        attrs: {
                                          width: "36",
                                          height: "36",
                                          src: t.poolData.url[1],
                                          alt: "Avatar",
                                        },
                                      }),
                                    ]
                                  ),
                                ]),
                              ]
                            )
                          : t._e(),
                        e(
                          "div",
                          {
                            class: [
                              t.$store.getters.account
                                ? "column is-2 px-0 mt-0"
                                : "column is-4 px-0 mt-0",
                            ],
                          },
                          [
                            t.poolData.text
                              ? e("div", { staticClass: "title-text" }, [
                                  t._v(" " + t._s(t.poolData.text) + " "),
                                ])
                              : e("div", { staticClass: "title-text" }, [
                                  t._v("Data loading ..."),
                                ]),
                          ]
                        ),
                        t.$store.getters.account
                          ? e("div", { staticClass: "column is-3 px-0" }, [
                              e("div", { staticClass: "top-text" }, [
                                e("span", [
                                  t._v(
                                    " " +
                                      t._s(
                                        t._f("formatMoney")(t.depositedUSD)
                                      ) +
                                      " "
                                  ),
                                ]),
                              ]),
                              e("div", { staticClass: "bottom-text" }, [
                                e("span", [
                                  t._v(
                                    " " +
                                      t._s(
                                        t._f("formatToken")(
                                          t.depositedToken,
                                          t.poolData.depositedCurrency
                                        )
                                      ) +
                                      " (" +
                                      t._s(
                                        t._f("formatPercent")(
                                          t.depositedToken / t.tvlToken
                                        )
                                      ) +
                                      ") "
                                  ),
                                ]),
                              ]),
                            ])
                          : t._e(),
                        t.$store.getters.account
                          ? e("div", { staticClass: "column is-2 px-0" }, [
                              e("div", { staticClass: "top-text" }, [
                                e("span", [
                                  t._v(
                                    " " +
                                      t._s(t._f("formatMoney")(t.yieldUsd)) +
                                      " "
                                  ),
                                ]),
                              ]),
                              e("div", { staticClass: "bottom-text" }, [
                                e("span", [
                                  t._v(
                                    " " +
                                      t._s(
                                        t._f("formatToken")(
                                          t.yieldToken,
                                          t.poolData.yieldCurrency
                                        )
                                      ) +
                                      " "
                                  ),
                                ]),
                              ]),
                            ])
                          : t._e(),
                        e(
                          "div",
                          {
                            class: [
                              t.$store.getters.account
                                ? "column is-2 px-0"
                                : "column is-4 px-0",
                            ],
                          },
                          [
                            e("div", { staticClass: "top-text" }, [
                              e("span", {}, [
                                t._v(
                                  " " +
                                    t._s(t._f("formatMoney")(t.tvlUsd)) +
                                    " "
                                ),
                              ]),
                            ]),
                            e("div", { staticClass: "bottom-text" }, [
                              e("span", [
                                t._v(
                                  t._s(
                                    t._f("formatToken")(
                                      t.tvlToken,
                                      t.poolData.tvlCurrency
                                    )
                                  )
                                ),
                              ]),
                            ]),
                          ]
                        ),
                        e(
                          "div",
                          {
                            staticClass: "column is-1 px-0",
                            on: {
                              click: function (e) {
                                return t.openRoiModal();
                              },
                            },
                          },
                          [
                            e("div", { staticClass: "top-text" }, [
                              t._v(
                                " " +
                                  t._s(t._f("formatPercent")(t.apr / 100)) +
                                  " "
                              ),
                            ]),
                          ]
                        ),
                        t.$store.getters.account
                          ? e("div", { staticClass: "expand column is-1" }, [
                              t.expandPool
                                ? e(
                                    "button",
                                    {
                                      staticClass: "sanin-expand-pool",
                                      on: { click: t.closeExpandPool },
                                    },
                                    [t._v(" - ")]
                                  )
                                : e(
                                    "button",
                                    {
                                      staticClass: "sanin-expand-pool",
                                      on: { click: t.openExpandPool },
                                    },
                                    [t._v(" + ")]
                                  ),
                            ])
                          : t._e(),
                        e("transition", { attrs: { name: "fade" } }, [
                          t.expandPool
                            ? e("div", { staticClass: "column is-12" }, [
                                e(
                                  "div",
                                  {
                                    staticClass: "columns",
                                    staticStyle: {
                                      width: "99%",
                                      "margin-left": "0%",
                                      "margin-top": "-2%",
                                    },
                                  },
                                  [
                                    e("div", { staticClass: "column" }, [
                                      e("span", [
                                        e(
                                          "a",
                                          {
                                            staticClass: "action-link",
                                            attrs: { target: "_blank" },
                                            on: {
                                              click: function (e) {
                                                return t.addCustomToken(
                                                  t.poolData.id
                                                );
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              " Add " +
                                                t._s(t.poolData.tokenName) +
                                                " to Metamask "
                                            ),
                                          ]
                                        ),
                                      ]),
                                      t._v("      "),
                                      t.isWalletBalanceZero
                                        ? e(
                                            "a",
                                            {
                                              staticClass: "action-link",
                                              attrs: { target: "_blank" },
                                              on: {
                                                click: function (e) {
                                                  return t.addCustomXToken(
                                                    t.poolData.id
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                " Add " +
                                                  t._s(
                                                    t.poolData.repTokenName
                                                  ) +
                                                  " to Metamask "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v("      "),
                                      t.poolData.id > 1
                                        ? e(
                                            "a",
                                            {
                                              staticClass: "action-link",
                                              attrs: {
                                                target: "_blank",
                                                autofocus: "",
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.goToUniswap();
                                                },
                                              },
                                            },
                                            [t._v(" Add v2 Liquidity ")]
                                          )
                                        : e(
                                            "a",
                                            {
                                              staticClass: "action-link",
                                              attrs: {
                                                target: "_blank",
                                                autofocus: "",
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.goToTrade(
                                                    t.poolData.tokenName
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                " Buy " +
                                                  t._s(t.poolData.tokenName) +
                                                  " "
                                              ),
                                            ]
                                          ),
                                      t._v("      "),
                                      t.poolData.uniswapRemove
                                        ? e(
                                            "a",
                                            {
                                              staticClass: "action-link",
                                              attrs: {
                                                target: "_blank",
                                                autofocus: "",
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.goToUniRemove();
                                                },
                                              },
                                            },
                                            [t._v(" Remove (post-withdraw) ")]
                                          )
                                        : t._e(),
                                    ]),
                                  ]
                                ),
                                e("hr"),
                                e(
                                  "div",
                                  {
                                    staticClass: "columns is-mobile",
                                    staticStyle: {
                                      width: "99%",
                                      "margin-left": "0%",
                                    },
                                  },
                                  [
                                    e("div", { staticClass: "column is-4" }, [
                                      e("div", { staticClass: "top-text" }, [
                                        t._v("Balance"),
                                      ]),
                                      e("div", { staticClass: "bottom-text" }, [
                                        t._v(
                                          " " +
                                            t._s(
                                              t._f("formatToken")(
                                                t.wallet_balance,
                                                t.poolData.walletBalanceToken
                                              )
                                            ) +
                                            " (" +
                                            t._s(
                                              t._f("formatMoney")(
                                                t.wallet_balance_usd
                                              )
                                            ) +
                                            ") "
                                        ),
                                      ]),
                                    ]),
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "column is-2 px-0 pr-0 mr-6",
                                        class: {
                                          "button-container": t.isRewardZero,
                                        },
                                      },
                                      [
                                        t.isRewardClaimed
                                          ? e(
                                              "b-tooltip",
                                              {
                                                staticClass: "action-tooltip",
                                                attrs: {
                                                  multilined: "",
                                                  label:
                                                    "Claim your earned yield",
                                                },
                                              },
                                              [
                                                e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "action-button",
                                                    class: {
                                                      disable: t.isRewardZero,
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.claimReward();
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Claim Reward ")]
                                                ),
                                              ]
                                            )
                                          : e(
                                              "button",
                                              { staticClass: "action-button" },
                                              [
                                                e("div", {
                                                  staticClass: "lds-dual-ring",
                                                }),
                                              ]
                                            ),
                                      ],
                                      1
                                    ),
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "column is-2 px-0 pr-0 mr-6",
                                        class: {
                                          "button-container":
                                            t.isWalletBalanceZero,
                                        },
                                      },
                                      [
                                        t.isApproved && !t.isDepositing
                                          ? e(
                                              "b-tooltip",
                                              {
                                                staticClass: "action-tooltip",
                                                attrs: {
                                                  multilined: "",
                                                  label:
                                                    "Deposit your tokens into the pool",
                                                },
                                              },
                                              [
                                                e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "action-button",
                                                    class: {
                                                      disable:
                                                        t.isWalletBalanceZero,
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.openModal(
                                                          "Deposit"
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Deposit ")]
                                                ),
                                              ]
                                            )
                                          : t.isApproved || t.isDepositing
                                          ? e(
                                              "button",
                                              {
                                                staticClass: "action-button",
                                                class: {
                                                  "button-container":
                                                    t.isWalletBalanceZero,
                                                },
                                              },
                                              [
                                                e("div", {
                                                  staticClass: "lds-dual-ring",
                                                }),
                                              ]
                                            )
                                          : e(
                                              "button",
                                              {
                                                staticClass: "action-button",
                                                class: {
                                                  disable:
                                                    t.isWalletBalanceZero,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.approveStakingToken(
                                                      t.poolData.id,
                                                      t.wallet_balance
                                                    );
                                                  },
                                                },
                                              },
                                              [t._v(" Approve Deposit ")]
                                            ),
                                      ],
                                      1
                                    ),
                                    e(
                                      "div",
                                      {
                                        staticClass: "column is-2 px-0",
                                        class: {
                                          "button-container":
                                            t.isDepositedAmountZero,
                                        },
                                      },
                                      [
                                        t.isWithdrawApproved && !t.isWithdrawing
                                          ? e(
                                              "b-tooltip",
                                              {
                                                staticClass: "action-tooltip",
                                                attrs: {
                                                  multilined: "",
                                                  label:
                                                    "Withdraw your tokens from the pool",
                                                },
                                              },
                                              [
                                                e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "action-button",
                                                    class: {
                                                      disable:
                                                        t.isDepositedAmountZero,
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.openModal(
                                                          "Withdraw"
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Withdraw ")]
                                                ),
                                              ]
                                            )
                                          : t.isWithdrawApproved ||
                                            t.isWithdrawing
                                          ? e(
                                              "button",
                                              {
                                                staticClass: "action-button",
                                                class: {
                                                  disable:
                                                    t.isDepositedAmountZero,
                                                },
                                              },
                                              [
                                                e("div", {
                                                  staticClass: "lds-dual-ring",
                                                }),
                                              ]
                                            )
                                          : e(
                                              "button",
                                              {
                                                staticClass: "action-button",
                                                class: {
                                                  disable:
                                                    t.isDepositedAmountZero,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.approveRepresentToken(
                                                      t.poolData.id,
                                                      t.depositedToken
                                                    );
                                                  },
                                                },
                                              },
                                              [t._v(" Approve Withdraw ")]
                                            ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ])
                            : t._e(),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
            ]);
          }),
        pt = [],
        dt = {
          name: "SaninFarmPoolComponent",
          components: {},
          store: d["a"],
          data() {
            return {
              isRewardZero: !1,
              isRewardClaimed: !0,
              isWalletBalanceZero: !1,
              isDepositedAmountZero: !1,
              chainId: null,
              poolData: "",
              expandPool: this.expandAll > 0,
              inputAmount: null,
              photoLength: null,
              depositedToken: 0,
              reward_debt: 0,
              depositedUSD: 0,
              yieldToken: 0,
              yieldUsd: 0,
              tvlToken: 0,
              tvlUsd: 0,
              apr: 0,
              wallet_balance: 0,
              wallet_rt_balance: 0,
              wallet_balance_usd: 0,
              wallet_balance_first_token: 0,
              wallet_balance_second_token: 0,
              wallet_balance_usd_first_token: 0,
              wallet_balance_usd_second_token: 0,
              isApproved: !1,
              isApproving: !1,
              isWithdrawApproved: !1,
              isWithdrawApproving: !1,
              isWithdrawing: !1,
              isDepositing: !1,
              sender: "",
              balancePercentage: 0,
              isHidden: 0,
              actionTitle: "",
              withdraw_disable: !1,
              deposit_disable: !1,
              tokenPrice: 0,
              civPrice: 0,
              stonePrice: 0,
              ethPrice: 0,
              saninPrice: 0,
              tailPrice: 0,
            };
          },
          computed: {
            account() {
              return this.$store.getters.account;
            },
          },
          props: {
            poolItem: { type: Object },
            amountPid: { type: Number },
            expandAll: Number,
          },
          methods: {
            openModal(t) {
              this.$emit(
                "open-amount-modal",
                t,
                this.poolData.id,
                this.poolData.text,
                parseFloat(this.depositedToken),
                this.wallet_balance,
                this.tokenPrice
              );
            },
            addCustomToken(t) {
              new X()
                .addCustomToken(t)
                .then((t) => {})
                .catch((t) => {});
            },
            addCustomXToken(t) {
              new X()
                .addCustomXToken(t)
                .then((t) => {})
                .catch((t) => {});
            },
            goToUniswap() {
              window.open(this.poolData.uniswapLink, "_blank");
            },
            goToUniRemove() {
              window.open(this.poolData.uniswapRemove, "_blank");
            },
            async getCivPrice() {
              this.civPrice > 0 ||
                (d["a"].state.civPrice > 0 ||
                  (await new R["a"]().updateCivPrice()),
                (this.civPrice = d["a"].state.civPrice));
            },
            async getStonePrice() {
              this.stonePrice > 0 ||
                (d["a"].state.stonePrice > 0 ||
                  (await new R["a"]().updateStonePrice()),
                (this.stonePrice = d["a"].state.stonePrice / Math.pow(10, 9)));
            },
            async getEthPrice() {
              this.ethPrice > 0 ||
                (d["a"].state.ethPrice > 0 ||
                  (await new R["a"]().updateEthPrice()),
                (this.ethPrice = d["a"].state.ethPrice));
            },
            async getSaninPrice() {
              this.saninPrice > 0 ||
                (d["a"].state.saninPrice > 0 ||
                  (await new R["a"]().updateSaninPrice()),
                (this.saninPrice = this.$store.state.saninPrice));
            },
            async getTailPrice() {
              this.$store.state.tailPrice > 0 ||
                (this.$store.state.tailPrice > 0 ||
                  (await new R["a"]().updateTailPrice()),
                (this.tailPrice = this.$store.state.tailPrice));
            },
            goToTrade(t) {
              window.open(
                `https://app.uniswap.org/prefill/ETH/${t}/1`,
                "_blank"
              );
            },
            closeModal() {
              this.$emit("close-amount-modal");
            },
            openExpandPool() {
              this.expandPool = !0;
            },
            closeExpandPool() {
              this.expandPool = !1;
            },
            openRoiModal() {},
            async showToast() {
              this.$toast.error(
                "Smart Contract doesn't have enough TAIL token. Please try again later",
                {
                  position: "top-right",
                  timeout: 2500,
                  closeOnClick: !0,
                  pauseOnFocusLoss: !0,
                  pauseOnHover: !0,
                  draggable: !0,
                  draggablePercent: 0.6,
                  showCloseButtonOnHover: !1,
                  closeButton: "button",
                  icon: !0,
                  hideProgressBar: !1,
                  rtl: !1,
                }
              );
            },
            async claimReward() {
              this.isRewardClaimed = !1;
              let t = await new X().availableToken(
                new J.a(this.yieldToken),
                !1
              );
              if (!1 === t)
                return (this.isRewardClaimed = !0), void this.showToast();
              new X()
                .claimTokens(this.poolData.id)
                .then(() => {
                  (this.isRewardClaimed = !0),
                    (this.isWithdrawApproved = !1),
                    (this.isWithdrawApproving = !1),
                    localStorage.setItem("w" + this.poolData.id, ""),
                    this.checkBalanceStatus();
                })
                .catch((t) => {
                  this.isRewardClaimed = !0;
                })
                .finally(() => {
                  (this.isRewardClaimed = !0),
                    this.priceUpdates(),
                    this.checkBalanceStatus();
                });
            },
            approveRepresentToken(t, e) {
              (this.isWithdrawApproving = !0),
                new X()
                  .approveRepresentToken(t, e)
                  .then((e) => {
                    (this.sender = e.from),
                      localStorage.setItem("w" + t, !0),
                      (this.isWithdrawApproved = !0),
                      (this.isWithdrawApproving = !1),
                      localStorage.setItem("sender", this.sender);
                  })
                  .catch((e) => {
                    (this.isWithdrawApproving = !1),
                      (this.isWithdrawApproved = !1),
                      localStorage.setItem("w" + t, "");
                  })
                  .finally(() => {
                    (this.isWithdrawApproving = !1),
                      this.priceUpdates(),
                      this.checkBalanceStatus();
                  });
            },
            approveStakingToken(t, e) {
              e > 0 &&
                ((this.isApproving = !0),
                new X()
                  .approveStakingToken(t, e)
                  .then((t) => {
                    (this.isApproving = !1),
                      (this.isApproved = !0),
                      (this.sender = t.from),
                      localStorage.setItem("sender", this.sender);
                  })
                  .catch((t) => {
                    (this.isApproving = !1), (this.isApproved = !1);
                  })
                  .finally(() => {
                    (this.isApproving = !1),
                      this.priceUpdates(),
                      this.checkBalanceStatus();
                  }));
            },
            async withdraw(t, e) {
              if (this.poolData.id == t) {
                this.isWithdrawing = !0;
                let n = await new X().availableToken(
                  new J.a(this.yieldToken),
                  !1
                );
                if (!1 === n)
                  return (this.isWithdrawing = !1), void this.showToast();
                this.$emit("close-amount-modal"),
                  (this.sender = localStorage.getItem("sender")),
                  await new X()
                    .withdrawToken(this.sender, e, t)
                    .then((t) => {
                      this.isApproved = !1;
                    })
                    .finally(() => {
                      this.priceUpdates(), this.checkBalanceStatus();
                    }),
                  (this.isWithdrawing = !1);
              }
              this.priceUpdates(), this.checkBalanceStatus();
            },
            async deposit(t, e) {
              if (this.poolData.id == t) {
                this.isDepositing = !0;
                let n = await new X().availableToken(
                  new J.a(this.yieldToken),
                  !1
                );
                if (!1 === n)
                  return (this.isDepositing = !1), void this.showToast();
                this.$emit("close-amount-modal"),
                  (this.sender = localStorage.getItem("sender")),
                  await new X()
                    .depositToken(e, t)
                    .then(() => {
                      (this.isWithdrawApproved = !1),
                        (this.isWithdrawApproving = !1),
                        (this.isApproved = !0),
                        localStorage.setItem("w" + t, ""),
                        (this.isDepositing = !1);
                    })
                    .catch((t) => {
                      this.isDepositing = !1;
                    })
                    .finally(() => {
                      (this.isDepositing = !1),
                        this.priceUpdates(),
                        this.checkBalanceStatus(),
                        (this.isWithdrawApproved = !1),
                        (this.isWithdrawApproving = !1);
                    }),
                  (this.inputAmount = null);
              }
            },
            getPendingTokens(t) {
              new X().pendingTokens(t).then((t) => {
                (this.yieldToken = t / Math.pow(10, 18)),
                  this.$emit(
                    "yieldTokenChanged",
                    this.poolData.id,
                    this.yieldToken
                  ),
                  (this.yieldUsd =
                    this.$store.getters.getTailPrice * this.yieldToken),
                  this.$emit("yieldChanged", this.poolData.id, this.yieldUsd),
                  this.checkBalanceStatus();
              });
            },
            async getWalletBalance() {
              await d["a"].state.provider.getNetwork();
              new X()
                .loadbalances()
                .then((t) => {
                  switch (this.poolData.id) {
                    case 0:
                      (this.wallet_balance = new J.a(t.lp1_balance)
                        .dividedBy(Math.pow(10, 18))
                        .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt1_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(0)
                          .then((t) => {
                            (this.wallet_balance_usd = this.wallet_balance * t),
                              this.checkBalanceStatus();
                          })
                          .catch(() => {});
                      break;
                    case 1:
                      (this.wallet_balance = new J.a(t.lp2_balance)
                        .dividedBy(Math.pow(10, 18))
                        .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt2_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_balance_usd =
                          this.saninPrice * this.wallet_balance),
                        this.checkBalanceStatus();
                      break;
                    case 2:
                      (this.wallet_balance_first_token =
                        t.lp2_balance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token = new J.a(
                          t.ethBalance
                        )
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_balance = new J.a(t.lp3_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt3_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_second_token =
                          this.ethPrice * this.wallet_balance_second_token),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token * this.saninPrice),
                        this.checkBalanceStatus();
                      break;
                    case 3:
                      (this.wallet_balance_first_token =
                        t.lp1_balance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token =
                          t.ethBalance / Math.pow(10, 18)),
                        (this.wallet_balance = new J.a(t.lp4_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt4_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token *
                          this.$store.state.tailPrice),
                        (this.wallet_balance_usd_second_token =
                          this.wallet_balance_second_token * this.ethPrice),
                        this.checkBalanceStatus();
                      break;
                    case 4:
                      (this.wallet_balance_first_token =
                        t.lp1_balance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token = new J.a(
                          t.lp2_balance
                        )
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_balance = new J.a(t.lp5_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt5_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token *
                          this.$store.state.tailPrice),
                        (this.wallet_balance_usd_second_token =
                          this.wallet_balance_second_token * this.saninPrice),
                        this.checkBalanceStatus();
                      break;
                    case 5:
                      (this.wallet_balance_first_token =
                        t.stoneBalance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token = new J.a(
                          t.lp2_balance
                        )
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_balance = new J.a(t.lp6_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt6_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token * this.stonePrice),
                        (this.wallet_balance_usd_second_token =
                          this.wallet_balance_second_token * this.saninPrice),
                        this.checkBalanceStatus();
                      break;
                    case 6:
                      (this.wallet_balance_first_token =
                        t.stoneBalance / Math.pow(10, 18)),
                        (this.wallet_balance_second_token = new J.a(
                          t.lp1_balance
                        )
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_balance = new J.a(t.lp7_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        (this.wallet_rt_balance = new J.a(t.rt7_balance)
                          .dividedBy(Math.pow(10, 18))
                          .toString()),
                        new G["a"]()
                          .getSaninLPTokenPrice(this.poolData.id)
                          .then((t) => {
                            this.wallet_balance_usd = this.wallet_balance * t;
                          })
                          .catch(() => {}),
                        (this.wallet_balance_usd_first_token =
                          this.wallet_balance_first_token * this.stonePrice),
                        (this.wallet_balance_usd_second_token =
                          this.wallet_balance_second_token *
                          this.$store.state.tailPrice),
                        this.checkBalanceStatus();
                      break;
                  }
                })
                .then(() => {
                  this.checkAllowance(this.poolData.id),
                    this.checkRTAllowance(this.poolData.id);
                });
            },
            getDepositedAmount() {
              new X().userLP(this.poolData.id).then((t) => {
                (this.depositedToken = new J.a(t)
                  .dividedBy(Math.pow(10, 18))
                  .toString()),
                  this.$emit(
                    "depositeTokenChanged",
                    this.poolData.id,
                    this.depositedToken
                  ),
                  new G["a"]()
                    .getSaninLPTokenPrice(this.poolData.id)
                    .then((t) => {
                      (this.tokenPrice = t),
                        (this.depositedUSD = this.depositedToken * t),
                        this.$emit(
                          "depositeChanged",
                          this.poolData.id,
                          this.depositedUSD
                        );
                    })
                    .catch(() => {});
              });
            },
            async getPoolInfo(t) {
              let e = "1";
              try {
                if (d["a"].state.provider) {
                  let t = await d["a"].state.provider.getNetwork();
                  e = t.chainId;
                }
              } catch (n) {}
              K.a
                .get(
                  `https://api.civfund.org/getSaninPoolData/${t}/?chainId=${e}`
                )
                .then((t) => {
                  (this.tvlToken = t.data.balance),
                    this.$emit(
                      "tvlTokenChanged",
                      this.poolData.id,
                      this.tvlToken
                    ),
                    (this.tvlUsd = t.data.tvlUSD),
                    this.$emit("tvlChanged", this.poolData.id, this.tvlUsd),
                    t.data.roiPerYear && (this.apr = t.data.roiPerYearPerc);
                })
                .catch((t) => {});
            },
            checkAllowance(t) {
              new X().checkAllowance(t).then((t) => {
                let e = new J.a(t);
                e
                  .dividedBy(Math.pow(10, 18))
                  .lessThan(new J.a(this.wallet_balance))
                  ? ((this.isApproved = !1), (this.isApproving = !1))
                  : (this.isApproved = !0);
              });
            },
            checkRTAllowance(t) {
              new X().checkRTAllowance(t).then((t) => {
                let e = new J.a(t);
                e
                  .dividedBy(Math.pow(10, 18))
                  .lessThan(new J.a(this.wallet_rt_balance))
                  ? ((this.isWithdrawApproved = !1),
                    (this.isWithdrawApproving = !1))
                  : (this.isWithdrawApproved = !0);
              });
            },
            checkBalanceStatus() {
              (this.isWalletBalanceZero =
                parseInt(100 * this.wallet_balance) / 100 == 0),
                (this.isRewardZero = 0 == this.yieldToken),
                (this.isDepositedAmountZero = 0 == this.depositedToken);
            },
            priceUpdates() {
              this.getPoolInfo(this.poolData.id),
                this.getPendingTokens(this.poolData.id),
                this.getDepositedAmount(),
                this.getWalletBalance();
            },
          },
          async mounted() {
            this.getPoolInfo(this.poolData.id),
              await new R["a"]().init(),
              this.$root.$on("deposit", this.deposit),
              this.$root.$on("withdraw", this.withdraw),
              await this.getWalletBalance(),
              await this.getCivPrice(),
              await this.getStonePrice(),
              await this.getEthPrice(),
              await this.getTailPrice(),
              await this.getSaninPrice(),
              this.getDepositedAmount(),
              this.getPendingTokens(this.poolData.id),
              window.setInterval(() => {
                this.checkBalanceStatus(), this.getWalletBalance();
              }, 2e4);
          },
          created() {
            (this.poolData = this.poolItem),
              2 == this.poolData.url.length
                ? (this.photoLength = !0)
                : (this.photoLength = !1);
          },
          beforeDestroy() {
            this.$root.$off("deposit", this.deposit),
              this.$root.$off("withdraw", this.withdraw);
          },
          watch: {
            expandAll: function (t) {
              this.expandPool = t > 0;
            },
            tvlToken: function (t) {
              this.$emit("tvlTokenChanged", this.poolData.id, t);
            },
            tvlUsd: function (t) {
              this.$emit("tvlChanged", this.poolData.id, t);
            },
            depositedToken: function (t) {
              this.$emit("depositeTokenChanged", this.poolData.id, t);
            },
            yieldToken: function (t) {
              this.$emit("yieldTokenChanged", this.poolData.id, t);
            },
            yieldUsd: function (t) {
              this.$emit("yieldChanged", this.poolData.id, t);
            },
            depositedUSD: function (t) {
              this.$emit("depositeChanged", this.poolData.id, t);
            },
            wallet_rt_balance: function (t) {
              this.checkRTAllowance(this.poolData.id);
            },
            account: function (t, e) {
              this.priceUpdates();
            },
          },
        },
        ut = dt,
        ct =
          (n("86a9"), Object(et["a"])(ut, rt, pt, !1, null, "21978cde", null)),
        yt = ct.exports,
        mt = n("7c24"),
        bt = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "container",
              attrs: { tabindex: "0" },
              on: {
                keyup: function (e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                    ? null
                    : t.closeRoiModal.apply(null, arguments);
                },
              },
            },
            [
              e("div", { staticClass: "header" }, [
                e("div", { staticClass: "header-text" }, [
                  t._v(t._s(t.title) + " " + t._s(t.token)),
                ]),
              ]),
              e("div", { staticClass: "body" }, [
                e(
                  "div",
                  { staticStyle: { width: "85%", margin: "10px auto 10px" } },
                  [
                    e(
                      "b-field",
                      [
                        e(
                          "b-slider",
                          {
                            attrs: {
                              "tooltip-always": "",
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
                            e("b-slider-tick", { attrs: { value: 25 } }),
                            e("b-slider-tick", { attrs: { value: 50 } }),
                            e("b-slider-tick", { attrs: { value: 75 } }),
                            e("b-slider-tick", { attrs: { value: 100 } }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e("div", [
                  e("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: t.inputAmount,
                        expression: "inputAmount",
                        modifiers: { number: !0 },
                      },
                    ],
                    staticClass: "input-amount",
                    attrs: { type: "number", placeholder: "Type an amount" },
                    domProps: { value: t.inputAmount },
                    on: {
                      input: [
                        function (e) {
                          e.target.composing ||
                            (t.inputAmount = t._n(e.target.value));
                        },
                        t.onInputChange,
                      ],
                      blur: function (e) {
                        return t.$forceUpdate();
                      },
                    },
                  }),
                  t.errorMessage
                    ? e("div", { staticClass: "error-message-base" }, [
                        e("h3", { staticClass: "error-message" }, [
                          t._v(t._s(t.errorMessage)),
                        ]),
                      ])
                    : t._e(),
                  e("div", { staticClass: "error-message-base" }, [
                    e("h3", { staticClass: "usd-amount" }, [
                      t._v(
                        " " +
                          t._s(t._f("formatToken")(this.inputAmount, t.token)) +
                          " (" +
                          t._s(t._f("formatMoney")(t.usdAmount)) +
                          ") "
                      ),
                    ]),
                  ]),
                ]),
                e("div", { staticClass: "buttons-container" }, [
                  e("div", { staticClass: "button-container" }, [
                    e(
                      "button",
                      {
                        staticClass: "action-button danger",
                        on: { click: t.actionReject },
                      },
                      [t._v(" Cancel ")]
                    ),
                  ]),
                  e("div", { staticClass: "button-container" }, [
                    e(
                      "button",
                      {
                        staticClass: "action-button",
                        on: { click: t.actionApproval },
                      },
                      [t._v(" " + t._s(t.title) + " ")]
                    ),
                  ]),
                ]),
              ]),
            ]
          );
        },
        ht = [],
        ft = {
          name: "amountSaninModal",
          props: {
            title: { type: String, default: "" },
            token: { type: String, default: "" },
            pid: { type: Number },
            walletBalance: {},
            depositedAmount: { type: Number },
            tokenPrice: {},
          },
          data() {
            return {
              balancePercentage: null,
              inputAmount: null,
              maxAmount: null,
              usdAmount: 0,
              errorMessage: null,
            };
          },
          methods: {
            onBalancePercentageChange(t) {
              (this.inputAmount = parseInt(this.maxAmount * t) / 100),
                (this.usdAmount = this.inputAmount * this.tokenPrice);
            },
            actionApproval() {
              "Deposit" == this.title &&
              this.inputAmount <= this.walletBalance &&
              this.inputAmount > 0
                ? (console.log(this.inputAmount),
                  (this.errorMessage = null),
                  this.$root.$emit("deposit", this.pid, this.inputAmount))
                : "Withdraw" == this.title &&
                  this.inputAmount <= this.depositedAmount &&
                  this.inputAmount > 0
                ? ((this.errorMessage = null),
                  this.$root.$emit("withdraw", this.pid, this.inputAmount))
                : (this.errorMessage = "Input amount not valid!");
            },
            actionReject() {
              this.$emit("close-modal");
            },
            onInputChange() {
              console.log("input changed"),
                (this.usdAmount = this.inputAmount * this.tokenPrice),
                "Deposit" == this.title
                  ? (this.balancePercentage =
                      (this.inputAmount / this.walletBalance) * 100)
                  : "Withdraw" == this.title &&
                    (this.balancePercentage =
                      (this.inputAmount / this.depositedAmount) * 100);
            },
          },
          mounted() {
            if ("Deposit" == this.title) {
              (this.maxAmount = parseFloat(this.walletBalance)),
                console.log("maxAmount=", this.maxAmount),
                (this.balancePercentage = 100),
                (this.inputAmount = parseInt(this.maxAmount)),
                (this.usdAmount = this.inputAmount * this.tokenPrice);
              var t = document.getElementById("inputID");
              t.addEventListener(
                "keyup",
                function () {
                  t.value = parseInt(this.maxAmount).toLocaleString();
                },
                !1
              );
            } else
              "Withdraw" == this.title &&
                ((this.maxAmount = parseFloat(this.depositedAmount)),
                console.log("maxAmount=", this.maxAmount),
                (this.balancePercentage = 25),
                (this.inputAmount = parseInt(0.25 * this.maxAmount)),
                (this.usdAmount = this.inputAmount * this.tokenPrice * 0.25));
          },
        },
        wt = ft,
        vt =
          (n("c071"), Object(et["a"])(wt, bt, ht, !1, null, "1607e064", null)),
        Tt = vt.exports,
        gt = n("c030"),
        _t = {
          components: {
            FarmPool: yt,
            RoiCalculators: mt["a"],
            AmountSaninModal: Tt,
          },
          data() {
            return {
              isHidden: 0,
              amountModal: 0,
              tokenPrice: 0,
              selectedPool: null,
              amountModalTitle: null,
              amountModalPid: null,
              amountModalText: null,
              depositedAmount: null,
              depositedUsd: 0,
              walletBalance: null,
              amount: null,
              address: null,
              totalYield: 0,
              yieldUsd: 0,
              yieldToken: 0,
              tvlUsd: 0,
              currentYieldToken: 0,
              depositedToken: 0,
              tvlToken: 0,
              farmPools: [
                {
                  id: 0,
                  isNFT: !1,
                  nftName: null,
                  url: ["/icon_sanin/tail-logo-7@2x.png"],
                  text: "Tail",
                  tokenName: "TAIL",
                  repTokenName: "xTAIL",
                  isCiv: !1,
                  tvlUsd: -1,
                  tvlToken: -1,
                  yieldUsd: -1,
                  yieldToken: -1,
                  depositedUsd: -1,
                  depositedToken: -1,
                  depositedCurrency: "TAIL",
                  walletBalanceToken: "TAIL",
                  yieldCurrency: "TAIL",
                  tvlCurrency: "TAIL",
                  first_token_id: "tail",
                  twoCoins: !1,
                  tokenContract: "0xfeeeef4d7b4bf3cc8bd012d02d32ba5fd3d51e31",
                },
                {
                  id: 1,
                  isNFT: !1,
                  nftName: null,
                  url: ["/icon_sanin/eth-logo-2@2x.png"],
                  text: "Sanin Inu",
                  isCiv: !1,
                  tvlUsd: -1,
                  tvlToken: -1,
                  yieldUsd: -1,
                  yieldToken: -1,
                  depositedUsd: -1,
                  depositedToken: -1,
                  tokenName: "SANI",
                  repTokenName: "xSANI",
                  depositedCurrency: "SANI",
                  walletBalanceToken: "SANI",
                  yieldCurrency: "TAIL",
                  tvlCurrency: "SANI",
                  first_token_id: "sanin-inu",
                  twoCoins: !1,
                  tokenContract: "0x4521c9ad6a3d4230803ab752ed238be11f8b342f",
                },
                {
                  id: 2,
                  isNFT: !1,
                  nftName: null,
                  url: [
                    "/icon_sanin/tail-logo-7@2x.png",
                    "/icon_sanin/eth-logo@2x.png",
                  ],
                  text: "Tail+Eth LP",
                  tokenName: "TAIL/ETH",
                  repTokenName: "xLPTailEth",
                  isCiv: !1,
                  depositedCurrency: "LP",
                  walletBalanceToken: "LP",
                  yieldCurrency: "TAIL",
                  tvlCurrency: "LP",
                  twoCoins: !0,
                  tvlUsd: -1,
                  tvlToken: -1,
                  yieldUsd: -1,
                  yieldToken: -1,
                  depositedUsd: -1,
                  depositedToken: -1,
                  first_token: "TAIL",
                  second_token: "ETH",
                  first_token_id: "tail",
                  second_token_id: "ethereum",
                  tokenContract: "0xfeeeef4d7b4bf3cc8bd012d02d32ba5fd3d51e31",
                  secondTokenContract:
                    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                  uniswapLink: `https://app.uniswap.org/#/add/v2/ETH/${x[1]}?chain=mainnet`,
                  uniswapRemove: `https://app.uniswap.org/#/remove/v2/ETH/${x[1]}?chain=mainnet`,
                },
                {
                  id: 3,
                  isNFT: !1,
                  nftName: null,
                  url: [
                    "/icon_sanin/tail-logo-7@2x.png",
                    "/icon_sanin/eth-logo-2@2x.png",
                  ],
                  text: "Tail+Sanin Inu LP",
                  tokenName: "TAIL/SANI",
                  repTokenName: "xLPTailSani",
                  isCiv: !1,
                  depositedCurrency: "LP",
                  walletBalanceToken: "LP",
                  yieldCurrency: "TAIL",
                  tvlUsd: -1,
                  tvlToken: -1,
                  yieldUsd: -1,
                  yieldToken: -1,
                  depositedUsd: -1,
                  depositedToken: -1,
                  tvlCurrency: "LP",
                  twoCoins: !0,
                  first_token: "TAIL",
                  second_token: "SANI",
                  first_token_id: "tail",
                  second_token_id: "sanin-inu",
                  tokenContract: "0xfeeeef4d7b4bf3cc8bd012d02d32ba5fd3d51e31",
                  secondTokenContract:
                    "0x4521c9ad6a3d4230803ab752ed238be11f8b342f",
                  uniswapLink: `https://app.uniswap.org/#/add/v2/${x[1]}/${k[1]}?chain=mainnet`,
                  uniswapRemove: `https://app.uniswap.org/#/remove/v2/${x[1]}/${k[1]}?chain=mainnet`,
                },
                {
                  id: 4,
                  isNFT: !1,
                  nftName: null,
                  url: [
                    "/icon_sanin/eth-logo-2@2x.png",
                    "/icon_sanin/eth-logo@2x.png",
                  ],
                  text: "Sanin Inu+Eth LP",
                  tokenName: "SANI/ETH",
                  repTokenName: "xLPSaniEth",
                  isCiv: !1,
                  depositedCurrency: "LP",
                  walletBalanceToken: "LP",
                  yieldCurrency: "TAIL",
                  tvlCurrency: "LP",
                  twoCoins: !0,
                  tvlUsd: -1,
                  tvlToken: -1,
                  yieldUsd: -1,
                  yieldToken: -1,
                  depositedUsd: -1,
                  depositedToken: -1,
                  first_token: "SANI",
                  second_token: "ETH",
                  first_token_id: "sanin-inu",
                  second_token_id: "ethereum",
                  tokenContract: "0x4521c9ad6a3d4230803ab752ed238be11f8b342f",
                  secondTokenContract:
                    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                  uniswapLink: `https://app.uniswap.org/#/add/v2/ETH/${k[1]}?chain=mainnet`,
                  uniswapRemove: `https://app.uniswap.org/#/remove/v2/ETH/${k[1]}?chain=mainnet`,
                },
                {
                  id: 5,
                  isNFT: !1,
                  nftName: null,
                  url: ["/icon_svg/icon.png", "/icon_sanin/eth-logo-2@2x.png"],
                  text: "Stone+Sanin Inu LP",
                  isCiv: !1,
                  depositedCurrency: "LP",
                  walletBalanceToken: "LP",
                  yieldCurrency: "TAIL",
                  tokenName: "0NE/SANI",
                  repTokenName: "xLP0NESani",
                  tvlUsd: -1,
                  tvlToken: -1,
                  yieldUsd: -1,
                  yieldToken: -1,
                  depositedUsd: -1,
                  depositedToken: -1,
                  tvlCurrency: "LP",
                  twoCoins: !0,
                  first_token: "0NE",
                  second_token: "SANI",
                  first_token_id: "civfund-stone",
                  second_token_id: "sanin-inu",
                  tokenContract: "0x73a83269b9bbafc427e76be0a2c1a1db2a26f4c2",
                  secondTokenContract:
                    "0x4521c9ad6a3d4230803ab752ed238be11f8b342f",
                  uniswapLink: `https://app.uniswap.org/#/add/v2/${b[1]}/${k[1]}?chain=mainnet`,
                  uniswapRemove: `https://app.uniswap.org/#/remove/v2/${b[1]}/${k[1]}?chain=mainnet`,
                },
                {
                  id: 6,
                  isNFT: !1,
                  nftName: null,
                  url: ["/icon_svg/icon.png", "/icon_sanin/tail-logo-7@2x.png"],
                  text: "Stone+Tail LP",
                  isCiv: !0,
                  tokenName: "0NE/TAIL",
                  repTokenName: "xLP0NETail",
                  tvlUsd: -1,
                  tvlToken: -1,
                  yieldUsd: -1,
                  yieldToken: -1,
                  depositedUsd: -1,
                  depositedToken: -1,
                  depositedCurrency: "LP",
                  walletBalanceToken: "LP",
                  yieldCurrency: "TAIL",
                  tvlCurrency: "LP",
                  twoCoins: !0,
                  first_token: "0NE",
                  second_token: "TAIL",
                  first_token_id: "civfund-stone",
                  second_token_id: "tail",
                  tokenContract: "0x73a83269b9bbafc427e76be0a2c1a1db2a26f4c2",
                  secondTokenContract:
                    "0xfeeeef4d7b4bf3cc8bd012d02d32ba5fd3d51e31",
                  uniswapLink: `https://app.uniswap.org/#/add/v2/${b[1]}/${x[1]}?chain=mainnet`,
                  uniswapRemove: `https://app.uniswap.org/#/remove/v2/${b[1]}/${x[1]}?chain=mainnet`,
                },
              ],
              isMobile: null,
              isExpandAll: -1,
            };
          },
          computed: {
            account() {
              return this.$store.getters.account;
            },
          },
          methods: {
            async showWeb3Modal() {
              await new R["a"]().connectWallet(), window.location.reload();
            },
            calcYieldUsd() {
              let t = this.farmPools.map((t) => t.yieldUsd);
              if (t.includes(-1)) return;
              const e = (t, e) => t + e;
              this.yieldUsd = t.reduce(e);
            },
            calcYieldToken() {
              let t = this.farmPools.map((t) => t.yieldToken || 0);
              if (t.includes(-1)) return;
              const e = (t, e) => t + e;
              this.yieldToken = t.reduce(e);
            },
            calcDepositedSum() {
              let t = this.farmPools.map((t) => t.depositedUsd || 0);
              if (t.includes(-1)) return;
              const e = (t, e) => t + e;
              this.depositedUsd = t.reduce(e);
            },
            calcDepositedToken() {
              let t = this.farmPools.map((t) => t.depositedToken || 0);
              if (t.includes(-1)) return;
              const e = (t, e) => t + e;
              this.depositedToken = t.reduce(e);
            },
            calcTVLSum() {
              let t = this.farmPools.map((t) => t.tvlUsd || 0);
              if (t.includes(-1)) return;
              const e = (t, e) => t + e;
              this.tvlUsd = t.reduce(e);
            },
            calcTVLToken() {
              let t = this.farmPools.map((t) => t.tvlToken || 0);
              if (t.includes(-1)) return;
              const e = (t, e) => t + e;
              this.tvlToken = t.reduce(e);
            },
            expandAllPool() {
              this.isExpandAll > 0
                ? this.isExpandAll++
                : (this.isExpandAll = 1);
            },
            collapseAllPool() {
              this.isExpandAll > 0
                ? (this.isExpandAll = -1)
                : this.isExpandAll--;
            },
            openRoiModal() {
              this.isHidden = 1;
            },
            closeRoiModal() {
              this.isHidden = 0;
            },
            openAmountModal(t, e, n, a, i, s) {
              (this.amountModalTitle = t),
                (this.amountModalPid = e),
                (this.amountModalText = n),
                (this.depositedAmount = a),
                (this.walletBalance = i),
                (this.amountModal = 1),
                (this.tokenPrice = s),
                window.scrollTo(0, 0);
            },
            closeAmountModal() {
              this.amountModal = 0;
            },
            actionModal(t, e) {},
            onYieldChanged(t, e) {
              let n = this.farmPools.findIndex((e) => e.id == t);
              n > -1 && (this.farmPools[n]["yieldUsd"] = e),
                this.calcYieldUsd();
            },
            onYieldTokenChanged(t, e) {
              let n = this.farmPools.findIndex((e) => e.id == t);
              n > -1 && (this.farmPools[n]["yieldToken"] = e),
                this.calcYieldToken();
            },
            onDepositedTokenChanged(t, e) {
              let n = this.farmPools.findIndex((e) => e.id == t);
              n > -1 && (this.farmPools[n]["depositedToken"] = e),
                this.calcDepositedToken();
            },
            onDepositedChanged(t, e) {
              let n = this.farmPools.findIndex((e) => e.id == t);
              n > -1 && (this.farmPools[n]["depositedUsd"] = e),
                this.calcDepositedSum();
            },
            onTVLChanged(t, e) {
              let n = this.farmPools.findIndex((e) => e.id == t);
              n > -1 && (this.farmPools[n]["tvlUsd"] = e), this.calcTVLSum();
            },
            onTVLTokenChanged(t, e) {
              let n = this.farmPools.findIndex((e) => e.id == t);
              n > -1 && (this.farmPools[n]["tvlToken"] = e),
                this.calcTVLToken();
            },
            closeModals() {
              this.closeAmountModal(), this.closeRoiModal();
            },
            async getTotalYield() {
              if (this.$store.getters.account)
                if (this.totalYield > 0);
                else {
                  let e = "getSaninFarmUserDetails";
                  try {
                    let t = 0,
                      n = 0,
                      a = await K.a.get(
                        `https://api.civfund.org/${e}/${this.$store.getters.account}?chainId=1`
                      );
                    (n += a.data.totalDeposited),
                      a.data.orders.map((e) => {
                        t +=
                          parseFloat(a.data.tailPrice) *
                          parseFloat(
                            gt["ethers"].utils.formatEther(e.tailHarvested)
                          );
                      }),
                      (this.totalYield = t),
                      (this.depositedUsd = 1e-18 * n);
                  } catch (t) {}
                }
            },
          },
          async mounted() {
            let t = screen.width;
            t > 780 ? (this.isMobile = !1) : t <= 780 && (this.isMobile = !0),
              this.getTotalYield();
          },
          watch: {
            account: function (t, e) {
              this.getTotalYield();
            },
          },
        },
        xt = _t,
        kt = (n("a14e"), Object(et["a"])(xt, a, i, !1, null, null, null));
      e["default"] = kt.exports;
    },
    "795f": function (t, e, n) {
      "use strict";
      n("c5d7");
    },
    "7ae0": function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    "7c24": function (t, e, n) {
      "use strict";
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "container",
              attrs: { tabindex: "0" },
              on: {
                keyup: function (e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                    ? null
                    : t.closeRoiModal.apply(null, arguments);
                },
              },
            },
            [
              e("div", { staticClass: "header" }, [
                e("div", { staticClass: "header-icon" }, [
                  e("img", {
                    attrs: { src: "/icon_svg/calculator.svg", alt: "" },
                  }),
                ]),
                e("div", { staticClass: "header-text" }, [
                  t._v("ROI CALCULATOR"),
                ]),
              ]),
              e("div", { staticClass: "body" }, [
                e("div", { staticClass: "staked-amount-container" }, [
                  e("div", { staticClass: "top-text" }, [
                    t._v(t._s(t.staked_coin) + " STAKED"),
                  ]),
                  e("div", { staticClass: "price-container" }, [
                    e("div", { staticClass: "price-converter" }, [
                      e("div", { staticClass: "usd-price" }, [
                        e("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.usd_value,
                              expression: "usd_value",
                            },
                          ],
                          attrs: { name: "", id: "" },
                          domProps: { value: t.usd_value },
                          on: {
                            input: function (e) {
                              e.target.composing ||
                                (t.usd_value = e.target.value);
                            },
                          },
                        }),
                        t._v(" USD"),
                      ]),
                      e("div", { staticClass: "token-price" }, [
                        t._v("4321.00 " + t._s(t.staked_coin)),
                      ]),
                    ]),
                    e(
                      "div",
                      {
                        staticClass: "right-icon",
                        on: {
                          click: function (e) {
                            return t.console.log("clicked");
                          },
                        },
                      },
                      [
                        e("img", {
                          staticClass: "converter-icon",
                          attrs: { src: "/icon_svg/convert.svg" },
                        }),
                      ]
                    ),
                  ]),
                ]),
                t._m(0),
                t._m(1),
              ]),
            ]
          );
        },
        i = [
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "duration-container" }, [
              e("div", { staticClass: "top-text" }),
              e("div", { staticClass: "duration-input" }, [
                e("div", { staticClass: "duration-number" }),
                e("div", { staticClass: "duration-specifier" }),
              ]),
              e("div", { staticClass: "bottom-durations" }, [
                e("div", { staticClass: "duration-button" }),
              ]),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "roi-container" }, [
              e("div", { staticClass: "roi-icon-container" }),
              e("div", { staticClass: "roi-text-container" }, [
                e("div", { staticClass: "roi-top-text" }),
                e("div", { staticClass: "roi-usd-price" }),
                e("div", { staticClass: "roi-token-price" }),
              ]),
            ]);
          },
        ],
        s = n("e67d"),
        o = n.n(s),
        l = {
          props: { staked_coin: { type: String } },
          data() {
            return { test: 0, usd_value: 1234 };
          },
          methods: {
            closeRoiModal() {
              console.log("closed"), this.$emit("close-roi-modal");
            },
          },
          mounted() {
            this.test = 1;
          },
          directives: { ClickOutside: o.a },
        },
        r = l,
        p = (n("8f14"), n("2877")),
        d = Object(p["a"])(r, a, i, !1, null, "5fda2296", null);
      e["a"] = d.exports;
    },
    "81be": function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    "86a9": function (t, e, n) {
      "use strict";
      n("cf2a");
    },
    "8dca": function (t, e, n) {
      var a = n("68c2");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = n("499e").default;
      i("5ab51926", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "8e56": function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_blacklistWalletAccount","type":"address"}],"name":"blacklistWalletChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_newBurnAddress","type":"address"}],"name":"burnAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_receiverTaxRate","type":"uint256"}],"name":"receiverTaxChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_senderTaxRate","type":"uint256"}],"name":"senderTaxChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_taxFreeAccount","type":"address"}],"name":"taxFreeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_taxedReceiverAccount","type":"address"}],"name":"taxedReceiverChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_taxedSenderAccount","type":"address"}],"name":"taxedSenderChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_sender","type":"address"},{"indexed":false,"internalType":"address","name":"_recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_burnAmount","type":"uint256"}],"name":"transferWithTax","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklistWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"mintToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiverTaxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"senderTaxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setBlacklistWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_burnAddress","type":"address"}],"name":"setBurnAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_receiverTaxRate","type":"uint256"}],"name":"setReceiverTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_senderTaxRate","type":"uint256"}],"name":"setSenderTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setTaxFree","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setTaxedReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setTaxedSender","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"taxFreeAccount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"taxedReceiver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"taxedSender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenContract","type":"address"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawETH","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      );
    },
    "8f14": function (t, e, n) {
      "use strict";
      n("746a");
    },
    "964e": function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    a14e: function (t, e, n) {
      "use strict";
      n("1b10");
    },
    ab0a: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"multiSign","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    bc73: function (t, e, n) {
      var a = n("e1e1");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = n("499e").default;
      i("8fe5e034", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c071: function (t, e, n) {
      "use strict";
      n("bc73");
    },
    c5d7: function (t, e, n) {
      var a = n("1489");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = n("499e").default;
      i("24c4ee14", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    cf2a: function (t, e, n) {
      var a = n("4208");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = n("499e").default;
      i("31099898", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d7c4: function (t, e, n) {
      "use strict";
      n("8dca");
    },
    e0fb: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"multiSign","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    e1e1: function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '[data-v-1607e064]:root{--black:#000;--coral:#ff8259;--lavender-rose:#fc9bf1;--lavender-rose-2:#f4aaeb;--seance:#851c93;--steel-gray:#f4f4ff54;--topaz:#260a68;--vulcan:#121622;--white:#fff;--font-size-l:25px;--font-size-m:23px;--font-size-xl:35px;--font-size-xxl:41px;--font-family-rajdhani:"Rajdhani",Helvetica}.container[data-v-1607e064]{background:#fff;border:1px solid #543699;border-radius:10px;width:300px}.header[data-v-1607e064]{justify-content:center;display:flex;padding:1vw;background:#fff;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:1px solid var(--coral)}.header-text[data-v-1607e064]{color:var(--seance);font-size:24px;margin-top:5px}.body[data-v-1607e064]{margin-top:30px;padding:15px;margin-left:5px;margin-right:5px;background:transparent!important}input[data-v-1607e064]{display:flex;width:100%;color:#121622;border:solid 1px var(--coral);background-color:#fff;border-radius:5px;margin-top:7%;font-size:20px;padding:7px 10px}input[data-v-1607e064]:hover{border:solid 1px var(--coral)}input[data-v-1607e064]:focus{border:solid 1px var(--seance)}input[data-v-1607e064]::-moz-placeholder{font-size:20px}input[data-v-1607e064]::placeholder{font-size:20px}input[type=number][data-v-1607e064]{-moz-appearance:textfield}input[data-v-1607e064]::-webkit-inner-spin-button,input[data-v-1607e064]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.danger[data-v-1607e064]{box-shadow:inset 2px 1000px 1px #c0392b!important}.input-amount[data-v-1607e064]{text-align:right}.action-button[data-v-1607e064]{border-radius:10px;width:100%;border:3px solid transparent;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #35b0a9;padding:5px 0;font-weight:500;font-size:20px;line-height:30px;overflow:hidden;color:#fff;cursor:pointer}.action-button[data-v-1607e064]:hover{box-shadow:inset 2px 1000px 1px #268883}[data-v-1607e064]::-moz-placeholder{color:#260a68;font-family:Rajdhani,Helvetica;font-style:normal;font-weight:500;align-self:center}[data-v-1607e064]::placeholder{color:#260a68;font-family:Rajdhani,Helvetica;font-style:normal;font-weight:500;align-self:center}.buttons-container[data-v-1607e064]{display:flex;justify-content:space-between;width:100%;margin-top:7%}.button-container[data-v-1607e064]{display:flex;width:45%}.error-message-base[data-v-1607e064]{font-style:italic;padding:1px;margin:2px;color:#333}.error-message[data-v-1607e064]{color:#fff;background:#9b0707;border:1px solid #a33a3a;border-radius:5px}.usd-amount[data-v-1607e064]{color:var(--seance);font-size:.85rem}.b-slider-thumb[data-v-1607e064]{background:var(--lavender-rose)!important;transform:rotate(45deg)!important;border:4px solid #d2d2d2!important;border-radius:4px!important;width:1.15rem!important;height:1.15rem!important}.b-slider .b-slider-track[data-v-1607e064]{background:var(--seance)!important}.b-slider-tick[data-v-1607e064]{background:var(--lavender-rose)!important;width:.625rem!important;height:.625rem!important;transform:rotate(45deg)!important;border:1px solid #8288a9!important;border-radius:unset!important;transform-origin:10px 0!important}.b-slider-track[data-v-1607e064]{background:var(--seance)}div.b-slider.is-primary.is-rounded.slider-focus div.b-slider-track div.b-slider-fill[data-v-1607e064]{background:var(--lavender-rose)!important}',
          "",
        ]),
        (t.exports = e);
    },
    e67d: function (t, e) {
      function n(t) {
        return (
          "function" === typeof t.value ||
          (console.warn(
            "[Vue-click-outside:] provided expression",
            t.expression,
            "is not a function."
          ),
          !1)
        );
      }
      function a(t, e) {
        if (!t || !e) return !1;
        for (var n = 0, a = e.length; n < a; n++)
          try {
            if (t.contains(e[n])) return !0;
            if (e[n].contains(t)) return !1;
          } catch (i) {
            return !1;
          }
        return !1;
      }
      function i(t) {
        return (
          "undefined" !== typeof t.componentInstance &&
          t.componentInstance.$isServer
        );
      }
      t.exports = {
        bind: function (t, e, s) {
          if (!n(e)) return;
          function o(e) {
            if (s.context) {
              var n = e.path || (e.composedPath && e.composedPath());
              n && n.length > 0 && n.unshift(e.target),
                t.contains(e.target) ||
                  a(s.context.popupItem, n) ||
                  t.__vueClickOutside__.callback(e);
            }
          }
          t.__vueClickOutside__ = { handler: o, callback: e.value };
          const l =
            "ontouchstart" in document.documentElement ? "touchstart" : "click";
          !i(s) && document.addEventListener(l, o);
        },
        update: function (t, e) {
          n(e) && (t.__vueClickOutside__.callback = e.value);
        },
        unbind: function (t, e, n) {
          const a =
            "ontouchstart" in document.documentElement ? "touchstart" : "click";
          !i(n) &&
            t.__vueClickOutside__ &&
            document.removeEventListener(a, t.__vueClickOutside__.handler),
            delete t.__vueClickOutside__;
        },
      };
    },
    eb4f: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    ebc8: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    fb7a: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"multiSign","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
  },
]);
