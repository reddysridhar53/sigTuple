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

module.exports = "<main>\n  <section class=\"select-game\">\n    <div class=\"select-game_container\">\n      <h4>Please select Game Level</h4>\n      <ul>\n        <li class=\"btn\" [attr.disabled]=\"gameStarted ? true : null\" (click)=\"selectGame('easy')\">Easy (3 X 3)</li>\n        <li class=\"btn\" [attr.disabled]=\"gameStarted ? true : null\" (click)=\"selectGame('medium')\">Medium (4 X 4)</li>\n        <li class=\"btn\" [attr.disabled]=\"gameStarted ? true : null\" (click)=\"selectGame('hard')\">Hard (6 X 6)</li>\n      </ul>  \n    </div>\n    <div class=\"game-grid\">\n      <template [ngIf]=\"gameSelected\">\n        <div *ngIf=\"gameStarted\" class=\"game-timer\">\n          <div class=\"timer\"><span>Timer - </span><span>{{countdownMinutes}}</span> : <span>{{countdownSeconds}}</span></div>\n          <div class=\"score\"><span>Your Score</span> - <span>{{totalScore}} <strong *ngIf=\"highestScore\">/ {{highestScore}}</strong></span></div>\n        </div>\n        <div class=\"game-grid_container\">\n          <div class=\"row-cell\" *ngFor=\"let row of grid.rows | arrayLength; let i = index\">\n            <div class=\"col-cell\" *ngFor=\"let col of grid.cols | arrayLength; let j = index\">\n              <span class=\"cell\" (click)=\"calculateScore(i, j)\" [ngStyle]=\"setBackGroundColor(i, j)\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"game-grid_action\" >\n          <span class=\"start btn\" [attr.disabled]=\"gameStarted ? true : null\" (click)=\"startGame()\">start game</span>\n          <span class=\"reset btn\" [attr.disabled]=\"!gameStarted ? true : null\" (click)=\"resetGame()\">reset game</span> \n        </div>\n      </template>  \n    </div>\n    <div *ngIf=\"gameOver\" class=\"timer-notify\">\n      <div class=\"bgMask\"></div>\n      <div class=\"notify-message\">\n        <span (click)=\"resetGame()\">close</span>\n        <p>You have reached the end of your game. Your score is: <strong>{{totalScore}}</strong><br/>Please start a new game.</p>\n        <button (click)=\"resetGame()\">start new game</button>\n      </div>\n    </div>\n  </section>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-size: 15px;\n  font-family: Lato, 'sans-serif'; }\n  main .select-game {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n    main .select-game .select-game_container h4 {\n      font-size: 1.4em;\n      text-align: center;\n      color: #666;\n      font-weight: bold; }\n    main .select-game .select-game_container ul {\n      padding: 0;\n      text-align: center;\n      margin: 0; }\n      main .select-game .select-game_container ul li {\n        list-style-type: none;\n        display: inline-block;\n        border-radius: 20px;\n        padding: 10px 20px;\n        color: #fff;\n        font-weight: bold;\n        text-transform: uppercase;\n        cursor: pointer;\n        opacity: 0.8; }\n        main .select-game .select-game_container ul li:hover {\n          opacity: 1; }\n        main .select-game .select-game_container ul li:nth-child(1) {\n          background: #009688; }\n        main .select-game .select-game_container ul li:nth-child(2) {\n          background: #cb2127; }\n        main .select-game .select-game_container ul li:nth-child(3) {\n          background: red; }\n        main .select-game .select-game_container ul li[disabled] {\n          cursor: not-allowed;\n          pointer-events: none;\n          opacity: .65; }\n  main .game-grid {\n    text-align: center;\n    font-weight: bold; }\n    main .game-grid .score, main .game-grid .timer {\n      display: inline-block;\n      margin: 1em 0 0;\n      font-size: 1.2em; }\n    main .game-grid .score {\n      margin-left: 1em; }\n    main .game-grid strong {\n      color: #cb2127; }\n  main .game-grid_container {\n    text-align: center;\n    margin: 1em 0; }\n    main .game-grid_container .col-cell {\n      display: inline-block; }\n    main .game-grid_container .cell {\n      display: inline-block;\n      width: 100px;\n      height: 100px;\n      border-radius: 6px;\n      box-shadow: 1px 2px 4px 1px #666;\n      margin: 4px;\n      cursor: pointer; }\n  main .game-grid_action {\n    text-align: center; }\n    main .game-grid_action .btn, main .game-grid_action .timer-notify .notify-message button, main .timer-notify .notify-message .game-grid_action button {\n      display: inline-block;\n      vertical-align: middle;\n      width: 30%;\n      padding: 0.4em;\n      font-size: 1em;\n      font-weight: 500;\n      transition: 500ms all;\n      border-radius: 20px;\n      letter-spacing: 1px;\n      text-transform: uppercase; }\n      main .game-grid_action .btn:hover, main .game-grid_action .timer-notify .notify-message button:hover, main .timer-notify .notify-message .game-grid_action button:hover {\n        font-weight: 900; }\n      main .game-grid_action .btn.start, main .game-grid_action .timer-notify .notify-message button.start, main .timer-notify .notify-message .game-grid_action button.start {\n        color: #fff;\n        background: #00bcd4; }\n      main .game-grid_action .btn.reset, main .game-grid_action .timer-notify .notify-message button.reset, main .timer-notify .notify-message .game-grid_action button.reset {\n        color: #fff;\n        background: #00bcd4; }\n  main .timer-notify {\n    height: 100%;\n    width: 100%;\n    position: relative; }\n    main .timer-notify .bgMask {\n      position: fixed;\n      background: rgba(0, 0, 0, 0.4);\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n      left: 0;\n      right: 0;\n      transition: 300ms all; }\n    main .timer-notify .notify-message {\n      position: absolute;\n      transition: 300ms all;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      width: 400px;\n      height: 250px;\n      padding: 1.5em;\n      z-index: 4;\n      background: #fff;\n      text-align: center; }\n      main .timer-notify .notify-message span {\n        position: absolute;\n        right: 1em;\n        top: 1em;\n        cursor: pointer; }\n      main .timer-notify .notify-message p {\n        font-size: 1.4em;\n        font-weight: 600;\n        line-height: 1.5;\n        text-transform: capitalize;\n        margin: 1em 0; }\n      main .timer-notify .notify-message button {\n        background: #cb2127;\n        outline: none;\n        width: auto;\n        color: #fff;\n        border: 1px solid #cb2127; }\n", ""]);

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
    function AppComponent(ele) {
        this.ele = ele;
        this.grid = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        this.gameSelected = false;
        this.counter = 120;
        this.totalScore = 0;
    };
    AppComponent.prototype.selectGame = function (gameType) {
        var grid = this.getGrid(gameType);
        this.constructGrid(grid);
    };
    AppComponent.prototype.setBackGroundColor = function (row, col) {
        if (row === this.rowHighlight && col === this.colHighlight) {
            return { 'background': 'green' };
        }
        return { 'background': '#f5f5f5' };
    };
    AppComponent.prototype.calculateScore = function (row, col) {
        if (row === this.rowHighlight && col === this.colHighlight) {
            this.totalScore += 1;
        }
        else {
            this.totalScore = this.totalScore > 0 ? this.totalScore - 1 : 0;
        }
        console.log('Score: ', this.totalScore);
    };
    AppComponent.prototype.startGame = function () {
        this.gameStarted = true;
        this._setCountdownTimer();
    };
    AppComponent.prototype.resetGame = function () {
        this.totalScore = 0;
        this.gameStarted = false;
        this.gameSelected = false;
        this.counter = 120;
        this.gameOver = false;
        if (this.sub && typeof this.sub.unsubscribe === 'function') {
            this.sub.unsubscribe();
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.resetGame();
    };
    AppComponent.prototype.highlightGrid = function () {
        this.rowHighlight = this.getRandomNumber(0, this.grid.cols);
        this.colHighlight = this.getRandomNumber(0, this.grid.cols);
        console.log('Row: ' + this.rowHighlight + ' Col: ' + this.colHighlight);
    };
    AppComponent.prototype.getRandomNumber = function (min, max) {
        if (min === void 0) { min = 0; }
        return Math.floor(Math.random() * (max - min)) + min;
    };
    AppComponent.prototype.constructGrid = function (grid) {
        if (grid === void 0) { grid = {}; }
        if (!grid) {
            this.gameSelected = false;
            return;
        }
        this.gameSelected = true;
        this.grid = grid;
        this.gameStarted = false;
    };
    AppComponent.prototype.getGrid = function (gameType) {
        switch (gameType) {
            case 'easy':
                return { rows: 3, cols: 3 };
            case 'medium':
                return { rows: 4, cols: 4 };
            case 'hard':
                return { rows: 6, cols: 6 };
        }
    };
    AppComponent.prototype._setCountdownTimer = function () {
        var _this = this;
        var that = this;
        this.sub = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(0, 1000).take(this.counter)
            .map(function () { return --_this.counter; })
            .subscribe(function (res) {
            if (res < 0) {
                that._notifyUser();
            }
            else {
                that.highlightGrid();
                that._showCountdown(res);
            }
        });
    };
    AppComponent.prototype._notifyUser = function () {
        this.gameOver = true;
        if (localStorage.getItem('highestScore')) {
            this.highestScore = parseInt(localStorage.getItem('highestScore'), 10);
            if (this.highestScore < this.totalScore) {
                this.highestScore = this.totalScore;
            }
            localStorage.setItem('highestScore', '' + this.highestScore);
        }
        else {
            localStorage.setItem('highestScore', '' + this.totalScore);
        }
    };
    AppComponent.prototype._showCountdown = function (time) {
        this.countdownMinutes = this._calMinutes(time);
        this.countdownSeconds = this._calSeconds(time);
    };
    AppComponent.prototype._calSeconds = function (ticks) {
        return this._pad(Math.floor(ticks % 60));
    };
    AppComponent.prototype._calMinutes = function (ticks) {
        return this._pad((Math.floor(ticks / 60)) % 60);
    };
    AppComponent.prototype._pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_array_construct_pipe__ = __webpack_require__("../../../../../src/app/pipes/array.construct.pipe.ts");
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
            __WEBPACK_IMPORTED_MODULE_5__pipes_array_construct_pipe__["a" /* ArrayConstruct */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        providers: []
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/array.construct.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayConstruct; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrayConstruct = (function () {
    function ArrayConstruct() {
    }
    ArrayConstruct.prototype.transform = function (value, args) {
        var res = [];
        for (var i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    };
    return ArrayConstruct;
}());
ArrayConstruct = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'arrayLength' })
], ArrayConstruct);

//# sourceMappingURL=array.construct.pipe.js.map

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