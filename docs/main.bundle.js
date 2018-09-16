webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"timer-section\">\n    <div class=\"timer-section_container\">\n      <div class=\"timer-section_container_inner\">\n        <h3  *ngIf=\"!timerSet\">Please set your countdown</h3>\n        <h3  *ngIf=\"timerSet\">Your countdown timer is set to <br/><strong>{{countdownTime.date}}, &nbsp;&nbsp;{{countdownTime.time}}</strong></h3>\n        <div *ngIf=\"!timerSet\" class=\"timer-section_container_content\">\n          <form #inputTimerForm=\"ngForm\">\n            <div class=\"timer-section_container_content_input\">\n              <span [ngClass]=\"submitForm && (!inputTimerForm.controls.hours.touched || !inputTimerForm.controls.hours.valid) ? 'in-valid' : 'valid'\">\n                <input name=\"hours\" type=\"number\" required min=\"0\" placeholder=\"Hours\" ngModel #hours=\"ngModel\">\n              </span>\n              <span [ngClass]=\"submitForm && (!inputTimerForm.controls.minutes.touched || !inputTimerForm.controls.minutes.valid) ? 'in-valid' : 'valid'\">\n                <input name=\"minutes\" type=\"number\" required min=\"0\" max=\"59\" placeholder=\"Minutes\" ngModel #minutes=\"ngModel\">\n              </span>\n              <span [ngClass]=\"submitForm && (!inputTimerForm.controls.seconds.touched || !inputTimerForm.controls.seconds.valid) ? 'in-valid' : 'valid'\">\n                <input name=\"seconds\" type=\"number\" required min=\"0\" max=\"59\" placeholder=\"Seconds\" ngModel #seconds=\"ngModel\">\n              </span>\n            </div>\n          </form>  \n          <div *ngIf=\"submitForm && formError\" class=\"error\">\n            Please enter valid time.\n          </div>\n          <div class=\"timer-section_container_content_action\">\n            <span (click)=\"setTimer(inputTimerForm)\">set timer</span>\n            <span (click)=\"clearTimer(inputTimerForm)\">clear</span>\n          </div>\n        </div>\n        <div *ngIf=\"timerSet\" class=\"timer-section_container_countdown\">\n          <div class=\"timer-section_container_countdown_content\">\n            <div>\n              <span>Hours</span>\n              <span>{{countdownHours}}</span>\n            </div>\n            <div>\n              <span>Minutes</span>\n              <span>{{countdownMinutes}}</span>\n            </div>\n            <div>\n              <span>Seconds</span>\n              <span>{{countdownSeconds}}</span>\n            </div>\n          </div>\n          <div class=\"timer-section_container_countdown_action\">\n            <span (click)=\"resetTimer()\">reset timer</span>\n          </div>\n        </div>\n      </div>  \n    </div>\n    <div *ngIf=\"countdownEnd\" class=\"timer-notify\">\n      <div class=\"bgMask\"></div>\n      <div class=\"notify-message\">\n        <span (click)=\"startNewTimer()\">close</span>\n        <p>You have reached the end of your countdown. Please start a new timer.</p>\n        <button (click)=\"startNewTimer()\">start new timer</button>\n      </div>\n    </div>\n  </section>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-size: 15px;\n  font-family: Lato, 'sans-serif'; }\n  main .timer-section {\n    background: #f5f5f5;\n    width: 100%;\n    height: 100%;\n    position: relative; }\n    main .timer-section .btn, main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_action span, main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_countdown .timer-section_container_countdown_action span, main .timer-section .timer-notify .notify-message button {\n      display: inline-block;\n      vertical-align: middle;\n      width: 30%;\n      padding: 0.4em;\n      font-size: 1em;\n      font-weight: 500;\n      transition: 500ms all;\n      border-radius: 4px;\n      letter-spacing: 1px;\n      text-transform: uppercase; }\n      main .timer-section .btn:hover, main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_action span:hover, main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_countdown .timer-section_container_countdown_action span:hover, main .timer-section .timer-notify .notify-message button:hover {\n        font-weight: 600; }\n    main .timer-section .timer-section_container {\n      position: absolute;\n      width: 400px;\n      height: 250px;\n      background: #fff;\n      top: 50%;\n      left: 50%;\n      padding: 1.5em;\n      text-align: center;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      box-sizing: border-box; }\n      main .timer-section .timer-section_container .timer-section_container_inner h3 {\n        text-transform: uppercase;\n        font-size: 1.2em;\n        font-weight: 600;\n        color: #666;\n        letter-spacing: 1.2px;\n        line-height: 1.5;\n        margin: 0; }\n        main .timer-section .timer-section_container .timer-section_container_inner h3 strong {\n          padding: 0.2em 1em;\n          background: #f5f5f5;\n          color: #333;\n          border-radius: 4px; }\n      main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content {\n        padding: 1.5em 0 0; }\n        main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_input span {\n          display: inline-block;\n          vertical-align: middle;\n          width: 29%;\n          margin-right: 1%; }\n          main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_input span:last-child {\n            margin-right: 0; }\n          main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_input span.in-valid input {\n            border: 1px solid red; }\n          main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_input span input {\n            height: 2.65em;\n            border-radius: 4px;\n            line-height: 2.65em;\n            color: #333;\n            font-size: 1.2em;\n            border: 1px solid #ddd;\n            width: 100%;\n            text-align: center;\n            outline: none;\n            -webkit-appearance: textfield;\n            -moz-appearance: textfield;\n            appearance: textfield; }\n            main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_input span input::-webkit-inner-spin-button, main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_input span input::-webkit-outer-spin-button {\n              -webkit-appearance: none; }\n        main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .error {\n          font-size: 0.85em;\n          margin: 1em 0 0;\n          transition: 1s all;\n          color: red; }\n        main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_action {\n          padding: 2em 0; }\n          main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_action span {\n            cursor: pointer; }\n            main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_action span:hover {\n              font-weight: 600; }\n            main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_action span:first-child {\n              margin-right: 5%;\n              background: #009688;\n              color: #fff;\n              border: 1px solid #009688; }\n            main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_content .timer-section_container_content_action span:last-child {\n              background: #f5f5f5;\n              border: 1px solid #ddd;\n              color: #666; }\n      main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_countdown {\n        padding: 1em; }\n        main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_countdown .timer-section_container_countdown_content {\n          text-align: center; }\n          main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_countdown .timer-section_container_countdown_content div {\n            display: inline-block;\n            width: 30%;\n            margin: 1%;\n            vertical-align: middle; }\n            main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_countdown .timer-section_container_countdown_content div span {\n              font-size: 1em; }\n              main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_countdown .timer-section_container_countdown_content div span:first-child {\n                font-weight: 500;\n                color: #666;\n                display: block; }\n              main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_countdown .timer-section_container_countdown_content div span:last-child {\n                display: block;\n                font-size: 3em;\n                font-weight: 600;\n                color: #333; }\n        main .timer-section .timer-section_container .timer-section_container_inner .timer-section_container_countdown .timer-section_container_countdown_action span {\n          width: auto;\n          background: #cb2127;\n          color: #fff;\n          border: 1px solid #cb2127; }\n    main .timer-section .timer-notify {\n      height: 100%;\n      width: 100%;\n      position: relative; }\n      main .timer-section .timer-notify .bgMask {\n        position: fixed;\n        background: rgba(0, 0, 0, 0.4);\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        left: 0;\n        right: 0;\n        transition: 300ms all; }\n      main .timer-section .timer-notify .notify-message {\n        position: absolute;\n        transition: 300ms all;\n        left: 50%;\n        top: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 400px;\n        height: 250px;\n        padding: 1.5em;\n        z-index: 4;\n        background: #fff;\n        text-align: center; }\n        main .timer-section .timer-notify .notify-message span {\n          position: absolute;\n          right: 1em;\n          top: 1em;\n          cursor: pointer; }\n        main .timer-section .timer-notify .notify-message p {\n          font-size: 1.4em;\n          font-weight: 600;\n          line-height: 1.5;\n          text-transform: capitalize;\n          margin: 1em 0; }\n        main .timer-section .timer-notify .notify-message button {\n          background: #cb2127;\n          outline: none;\n          width: auto;\n          color: #fff;\n          border: 1px solid #cb2127; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.countdownTime = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        this.countdownEnd = false;
        this.submitForm = false;
    };
    AppComponent.prototype.setTimer = function (form) {
        this.submitForm = true;
        this.formError = false;
        if (!form.valid
            ||
                !form.controls.hours.touched
            ||
                !form.controls.minutes.touched
            ||
                !form.controls.seconds.touched) {
            this.formError = true;
            return;
        }
        if (form.value.hours < 0
            ||
                form.value.minutes < 0 || form.value.minutes > 59
            ||
                form.value.seconds < 0 || form.value.seconds > 59) {
            this.formError = true;
            return;
        }
        this._setCountdownTimer(form.value.hours, form.value.minutes, form.value.seconds);
        this.timerSet = true;
    };
    AppComponent.prototype._setCountdownTimer = function (hrs, mins, secs) {
        if (hrs === void 0) { hrs = 0; }
        if (mins === void 0) { mins = 0; }
        if (secs === void 0) { secs = 0; }
        var currentTime = new Date();
        var currentInputTime = new Date();
        currentInputTime.setHours(currentInputTime.getHours() + hrs);
        currentInputTime.setMinutes(currentInputTime.getMinutes() + mins);
        currentInputTime.setSeconds(currentInputTime.getSeconds() + secs);
        this.countdownTime['date'] = (new Date(currentInputTime)).toDateString();
        this.countdownTime['time'] = (new Date(currentInputTime)).toLocaleTimeString();
        var timeDiff = Math.abs(currentInputTime - currentTime);
        timeDiff = timeDiff / 1000;
        var that = this;
        this.timerObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(1000, 1000).take(timeDiff)
            .map(function () { return timeDiff -= 1; })
            .subscribe(function (res) {
            if (res <= 0) {
                that._notifyUser();
            }
            else {
                that._showCountdown(res);
            }
        });
    };
    AppComponent.prototype._notifyUser = function () {
        this.countdownHours = 0;
        this.countdownMinutes = 0;
        this.countdownSeconds = 0;
        this.countdownEnd = true;
    };
    AppComponent.prototype._showCountdown = function (time) {
        this.countdownHours = this._calHours(time);
        this.countdownMinutes = this._calMinutes(time);
        this.countdownSeconds = this._calSeconds(time);
    };
    AppComponent.prototype._calSeconds = function (ticks) {
        return this._pad(Math.floor(ticks % 60));
    };
    AppComponent.prototype._calMinutes = function (ticks) {
        return this._pad((Math.floor(ticks / 60)) % 60);
    };
    AppComponent.prototype._calHours = function (ticks) {
        return this._pad(Math.floor(((ticks / 60) / 60) % 60));
    };
    AppComponent.prototype._calDays = function (ticks) {
        return this._pad(Math.floor(((ticks / 60) / 60) / 24));
    };
    AppComponent.prototype._pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    AppComponent.prototype.startNewTimer = function () {
        this.resetTimer();
        this.countdownEnd = false;
    };
    AppComponent.prototype.resetTimer = function () {
        this.timerSet = false;
        this.submitForm = false;
        if (this.timerObservable) {
            this.timerObservable.unsubscribe();
        }
    };
    AppComponent.prototype.clearTimer = function (form) {
        form.resetForm();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        providers: []
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map