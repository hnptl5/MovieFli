webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeriesDetailComponent = (function () {
    function SeriesDetailComponent() {
    }
    SeriesDetailComponent.prototype.ngOnInit = function () {
    };
    return SeriesDetailComponent;
}());
SeriesDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-series-detail',
        template: __webpack_require__(251),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], SeriesDetailComponent);

//# sourceMappingURL=series-detail.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__series_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeriesListComponent = (function () {
    function SeriesListComponent(seriesService, router) {
        this.seriesService = seriesService;
        this.router = router;
        this.seriesList = [];
    }
    SeriesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seriesService.StoreSeries()
            .subscribe(function (series) { return _this.seriesList = series; }, function (error) { return _this.errorMessage = error; });
    };
    SeriesListComponent.prototype.onSelect = function () {
        this.router.navigate(['/series-detail']);
    };
    return SeriesListComponent;
}());
SeriesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-series-list',
        template: __webpack_require__(252),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__series_service__["a" /* SeriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__series_service__["a" /* SeriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SeriesListComponent);

var _a, _b;
//# sourceMappingURL=series-list.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_storage_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SeriesService = (function () {
    function SeriesService(http, dataStorageService) {
        this.http = http;
        this.dataStorageService = dataStorageService;
    }
    SeriesService.prototype.StoreSeries = function () {
        return this.http.put('https://movieflixhani.firebaseio.com/series.json', this.dataStorageService.getSeries())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.statusText); });
    };
    return SeriesService;
}());
SeriesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_storage_service__["a" /* DataStorageService */]) === "function" && _b || Object])
], SeriesService);

var _a, _b;
//# sourceMappingURL=series.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 158;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(170);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: 'AIzaSyDG-5G5_uLl6Ry7_4L_OsAKeABRr1r4vlI',
            authDomain: 'movieflixhani.firebaseapp.com'
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(244),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_signin_signin_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movie_list_movie_list_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__series_list_series_list_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__series_list_series_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__movie_list_movie_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__movie_list_movie_detail_movie_detail_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_guard_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__series_list_data_storage_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__series_list_series_detail_series_detail_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_7__auth_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_8__movie_list_movie_list_component__["a" /* MovieListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__series_list_series_list_component__["a" /* SeriesListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__movie_list_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__series_list_series_detail_series_detail_component__["a" /* SeriesDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__series_list_series_service__["a" /* SeriesService */], __WEBPACK_IMPORTED_MODULE_11__movie_list_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_14__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_17__series_list_data_storage_service__["a" /* DataStorageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_signup_signup_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_signin_signin_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_list_movie_list_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__series_list_series_list_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__movie_list_movie_detail_movie_detail_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__series_list_series_detail_series_detail_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_4__movie_list_movie_list_component__["a" /* MovieListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'movie-detail', component: __WEBPACK_IMPORTED_MODULE_7__movie_list_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */] },
    { path: 'series-detail', component: __WEBPACK_IMPORTED_MODULE_9__series_list_series_detail_series_detail_component__["a" /* SeriesDetailComponent */] },
    { path: 'tv-series', component: __WEBPACK_IMPORTED_MODULE_5__series_list_series_list_component__["a" /* SeriesListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_3__auth_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_1__auth_signup_signup_component__["a" /* SignupComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(AppRoutes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.Signout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(247),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".container{\r\n  max-width: 300px;\r\n}\r\n\r\n.container{\r\n  margin-top: 90px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".container{\r\n  max-width: 400px;\r\n}\r\n\r\n.container{\r\n  margin-top: 70px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "img {\r\n  display:inline;\r\n  width:15%;\r\n  height:15%;\r\n}\r\n\r\nbody{\r\n  background-color: darkslategray;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "img {\r\n  display:inline;\r\n  width:15%;\r\n  height:15%;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"onSignin(signinForm)\" #signinForm=\"ngForm\">\n    <h2>Please Sign In</h2>\n    <label for=\"email\"\n           class=\"sr-only\">User Name</label>\n    <input type=\"email\"\n           class=\"form-control\"\n           name=\"email\"\n           id=\"email\"\n           placeholder=\"Email\"\n           required\n           ngModel>\n    <label for=\"password\"\n           class=\"sr-only\">Password</label>\n    <input type=\"password\"\n           class=\"form-control\"\n           name=\"password\"\n           id=\"password\"\n           placeholder=\"Password\" required\n           ngModel>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\"\n               value=\"Remember me\">\n        Remember Me\n      </label>\n    </div>\n    <button type=\"submit\"\n            class=\"btn btn-block btn-block btn-primary\"\n            [disabled]>\n      Sign in\n    </button>\n    <button type=\"button\"\n            class=\"btn btn-primary btn-block\"\n            (click)=\"onClick()\">Sign Up\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\">\n    <h2 class=\"form-signup-heading\">Register</h2>\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"firstname\" class=\"sr-only\">FirstName</label>-->\n      <!--<input type=\"text\"-->\n             <!--id=\"firstname\"-->\n             <!--name=\"firstname\"-->\n             <!--class=\"form-control\"-->\n             <!--placeholder=\"FirstName\"-->\n             <!--required [(ngModel)]=\"user.firstname\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"lastname\"-->\n             <!--class=\"sr-only\">LastName</label>-->\n      <!--<input type=\"text\"-->\n             <!--class=\"form-control\"-->\n             <!--id=\"lastname\"-->\n             <!--name=\"lastname\"-->\n             <!--placeholder=\"LastName\"-->\n             <!--required [(ngModel)]=\"user.lastname\">-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <label for=\"email\"\n             class=\"sr-only\">Email</label>\n      <input type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             placeholder=\"Email\"\n             name=\"email\"\n             required\n             ngModel>\n    </div>\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"username\"-->\n             <!--class=\"sr-only\">Username</label>-->\n      <!--<input type=\"username\"-->\n             <!--class=\"form-control\"-->\n             <!--id=\"username\"-->\n             <!--placeholder=\"UserName\"-->\n             <!--name=\"username\"-->\n             <!--required [(ngModel)]=\"user.username\">-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <label for=\"password\"\n             class=\"sr-only\">Password</label>\n      <input type=\"password\"\n             class=\"form-control\"\n             name=\"password\"\n             id=\"password\"\n             placeholder=\"Password\"\n             required\n             ngModel>\n    </div>\n    <div>\n      <button class=\"btn btn-primary\" [disabled]=\"signupForm.form.invalid\">Sign up</button>\n      <button class=\"btn btn-danger\"\n              (click)=\"onClick()\">Cancel\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n<div class=\"container-fluid\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" routerLink=\"/\">MovieFlix</a>\n  </div>\n  <div class=\"collpase navbar-collpase\">\n    <ul class=\"nav navbar-nav \">\n      <li routerLinkActive=\"active\"><a routerLink=\"/signin\">User</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/movies\">Movies</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/tv-series\">Tv Series</a></li>\n      <li><a routerLink=\"/\" (click)=\"onLogout()\">Logout</a></li>\n    </ul>\n  </div>\n</div>\n</nav>\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "\n\n<!--<nav class=\"navbar navbar-default\">-->\n<!--<div class=\"container-fluid\">-->\n<!--<div class=\"navbar-header\">-->\n<!--<a routerLink=\"/\" class=\"navbar-brand\">Recipe Book</a>-->\n<!--</div>-->\n<!--<div class=\"collapse navbar-collapse\">-->\n<!--<ul class=\"nav navbar-nav\">-->\n<!--<li routerLinkActive=\"active\"><a routerLink=\"/recipes\">Recipes</a></li>-->\n<!--<li routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Shopping List</a></li>-->\n<!--</ul>-->\n<!--<ul class=\"nav navbar-nav navbar-right\">-->\n<!--<li class=\"dropdown\" appDropdown>-->\n<!--<a style=\"cursor: pointer\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>-->\n<!--<ul class=\"dropdown-menu\">-->\n<!--<li><a style=\"cursor: pointer\">Save Data</a></li>-->\n<!--<li><a style=\"cursor: pointer\">Fetch Data</a></li>-->\n<!--</ul>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--</div>-->\n<!--</nav>-->\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<p>\n  movie-detail works!\n</p>\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<!--<table>-->\n<!--<thead>-->\n<!--<tr>-->\n<!--<th>Title</th>-->\n<!--<th>Year</th>-->\n<!--<th>Actors</th>-->\n<!--</tr>-->\n<!--</thead>-->\n<!--<tbody>-->\n<!--<tr *ngFor=\"let movie of movieList\">-->\n<!--<td>{{movie.title}}</td>-->\n<!--<td>{{movie.actors}}</td>-->\n<!--<td>{{movie.year}}</td>-->\n<!--<td><img [src]=\"movie.poster\"></td>-->\n<!--</tr>-->\n<!--</tbody>-->\n<!--</table>-->\n\n<div class=\"row\">\n  <a href=\"#\" *ngFor=\"let movie of movieList\" routerLink=\"/movie-detail\">\n    <img [src]=\" movie.poster\" (click)=\"onSelect()\">\n  </a>\n\n</div>\n\n<nav aria-label=\"Page navigation example\">\n  <ul class=\"pagination\">\n    <li class=\"page-item\"><a class=\"page-link\">Previous</a  ></li>\n    <li class=\"page-item\"><a class=\"page-link\" routerLink=\"movies\">1</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<p>\n  series-detail works!\n</p>\n"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<!--<table>-->\n<!--<thead>-->\n<!--<tr>-->\n<!--<th>FirstName</th>-->\n<!--<th>LastName</th>-->\n<!--<th>profilePic</th>-->\n<!--</tr>-->\n<!--</thead>-->\n\n<!--<tbody>-->\n<!--<tr *ngFor=\"let user of userList\">-->\n<!--<td>{{user.firstName}}</td>-->\n<!--<td>{{user.lastName}}</td>-->\n<!--<td><img [src]=\"user.profilePic\"></td>-->\n<!--</tr>-->\n<!--</tbody>-->\n<!--</table>-->\n\n\n<!--<div id=\"display_dialog\">-->\n  <!--<table>-->\n    <!--<tr *ngFor=\"let series of seriesList\">-->\n      <!--<td>-->\n        <!--<img [src]=\"series.poster\">-->\n      <!--</td>-->\n      <!--<td>-->\n        <!--<div class=\"title\">{{series.title}}({{series.year}})</div>-->\n        <!--<div class=\"rating\">{{series.imdbRating}}/10 <u>Metascore: </u>{{series.metaScore}}/100</div>-->\n        <!--<div class=\"duration\"><u>Duration: </u>{{series.runtime}} - {{series.genre}}</div>-->\n        <!--<div class=\"plot\">{{series.plot}}</div>-->\n        <!--<div class=\"directors\"><u>Directors: </u> {{series.director}}</div>-->\n        <!--<div class=\"stars\"><u>Stars: </u> {{series.actors}}</div>-->\n      <!--</td>-->\n    <!--</tr>-->\n  <!--</table>-->\n<!--</div>-->\n\n\n<div class=\"row\">\n  <a href=\"#\" *ngFor=\"let series of seriesList\" routerLink=\"series-detail\">\n    <img [src]=\" series.poster\" (click)=\"onSelect()\">\n  </a>\n</div>\n\n"

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])();
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.onSignupUser = function (email, password) {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(email, password).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.onSigninUser = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.getToken()
                .then(function (token) {
                _this.token = token;
            });
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.getToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.Signout = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataStorageService = (function () {
    function DataStorageService() {
        this.movies = [
            {
                'title': 'Avengers: Age of Ultron',
                'year': 2015,
                'rated': 'PG-13',
                'released': '2015-05-01',
                'runtime': '141 min',
                'genre': 'Action, Adventure, Sci-Fi',
                'director': 'Joss Whedon',
                'writer': 'Joss Whedon, Stan Lee (Marvel comics), Jack Kirby (Marvel comics)',
                'actors': 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans',
                'plot': 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans.',
                'language': 'English',
                'country': 'USA',
                'awards': '1 win & 12 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTU4MDU3NDQ5Ml5BMl5BanBnXkFtZTgwOTU5MDUxNTE@._V1_SX300.jpg',
                'metaScore': 66,
                'imdbRating': 7.6,
                'imdbVotes': 370909,
                'imdbId': 'tt2395427',
                'type': 'movie'
            }, {
                'title': 'The Avengers',
                'year': 2012,
                'rated': 'PG-13',
                'released': '2012-05-04',
                'runtime': '143 min',
                'genre': 'Action, Sci-Fi, Thriller',
                'director': 'Joss Whedon',
                'writer': 'Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)',
                'actors': 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
                'plot': 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
                'language': 'English, Russian',
                'country': 'USA',
                'awards': 'Nominated for 1 Oscar. Another 35 wins & 76 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg',
                'metaScore': 69,
                'imdbRating': 8.1,
                'imdbVotes': 920458,
                'imdbId': 'tt0848228',
                'type': 'movie'
            },
            {
                'title': 'The Shawshank Redemption',
                'year': 1994,
                'rated': 'R',
                'released': '1994-10-14',
                'runtime': '142 min',
                'genre': 'Crime, Drama',
                'director': 'Frank Darabont',
                'writer': 'Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)',
                'actors': 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
                'plot': 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
                'language': 'English',
                'country': 'USA',
                'awards': 'Nominated for 7 Oscars. Another 14 wins & 20 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
                'metaScore': 80,
                'imdbRating': 9.3,
                'imdbVotes': 1590699,
                'imdbId': 'tt0111161',
                'type': 'movie'
            },
            {
                'title': 'Batman Begins',
                'year': 2005,
                'rated': 'PG-13',
                'released': '2005-06-15',
                'runtime': '140 min',
                'genre': 'Action, Adventure',
                'director': 'Christopher Nolan',
                'writer': 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
                'actors': 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
                'plot': 'After training with his mentor, Batman begins his war on crime to free the crime-ridden Gotham City from corruption that the Scarecrow and the League of Shadows have cast upon it.',
                'language': 'English, Urdu, Mandarin',
                'country': 'USA, UK',
                'awards': 'Nominated for 1 Oscar. Another 16 wins & 63 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
                'metaScore': 70,
                'imdbRating': 8.3,
                'imdbVotes': 906246,
                'imdbId': 'tt0372784',
                'type': 'movie'
            },
            {
                'title': 'The Dark Knight',
                'year': 2008,
                'rated': 'PG-13',
                'released': '2008-07-18',
                'runtime': '152 min',
                'genre': 'Action, Crime, Drama',
                'director': 'Christopher Nolan',
                'writer': 'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
                'actors': 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
                'plot': 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
                'language': 'English, Mandarin',
                'country': 'USA, UK',
                'awards': 'Won 2 Oscars. Another 141 wins & 126 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
                'metaScore': 82,
                'imdbRating': 9.0,
                'imdbVotes': 1564829,
                'imdbId': 'tt0468569',
                'type': 'movie'
            },
            {
                'title': 'The Dark Knight Rises',
                'year': 2012,
                'rated': 'PG-13',
                'released': '2012-07-20',
                'runtime': '164 min',
                'genre': 'Action, Thriller',
                'director': 'Christopher Nolan',
                'writer': 'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
                'actors': 'Christian Bale, Gary Oldman, Tom Hardy, Joseph Gordon-Levitt',
                'plot': 'Eight years after the Joker\'s reign of anarchy, the Dark Knight, with the help of the enigmatic Selia, is forced from his imposed exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.',
                'language': 'English',
                'country': 'USA, UK',
                'awards': 'Nominated for 1 BAFTA Film Award. Another 44 wins & 98 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg',
                'metaScore': 78,
                'imdbRating': 8.5,
                'imdbVotes': 1070247,
                'imdbId': 'tt1345836',
                'type': 'movie'
            },
            {
                'title': 'Guardians of the Galaxy',
                'year': 2014,
                'rated': 'PG-13',
                'released': '2014-08-01',
                'runtime': '121 min',
                'genre': 'Action, Adventure, Sci-Fi',
                'director': 'James Gunn',
                'writer': 'James Gunn, Nicole Perlman, Dan Abnett (comic book), Andy Lanning (comic book)',
                'actors': 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel',
                'plot': 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
                'language': 'English',
                'country': 'USA, UK',
                'awards': 'Nominated for 2 Oscars. Another 45 wins & 87 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg',
                'metaScore': 76,
                'imdbRating': 8.1,
                'imdbVotes': 606903,
                'imdbId': 'tt2015381',
                'type': 'movie'
            },
            {
                'title': 'Inception',
                'year': 2010,
                'rated': 'PG-13',
                'released': '2010-07-16',
                'runtime': '148 min',
                'genre': 'Action, Mystery, Sci-Fi',
                'director': 'Christopher Nolan',
                'writer': 'Christopher Nolan',
                'actors': 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
                'plot': 'A thief who steals corporate secrets through use of the dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
                'language': 'English, Japanese, French',
                'country': 'USA, UK',
                'awards': 'Won 4 Oscars. Another 138 wins & 192 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
                'metaScore': 74,
                'imdbRating': 8.8,
                'imdbVotes': 1366602,
                'imdbId': 'tt1375666',
                'type': 'movie'
            },
            {
                'title': 'The Walk',
                'year': 2015,
                'rated': 'PG',
                'released': '2015-10-09',
                'runtime': '123 min',
                'genre': 'Adventure, Biography, Drama',
                'director': 'Robert Zemeckis',
                'writer': 'Robert Zemeckis (screenplay), Christopher Browne (screenplay), Philippe Petit (book)',
                'actors': 'Joseph Gordon-Levitt, Guillaume Baillargeon, Ã‰milie Leclerc, Mark Trafford',
                'plot': 'In 1974, high-wire artist Philippe Petit recruits a team of people to help him realize his dream: to walk the immense void between the World Trade Center towers.',
                'language': 'English, French',
                'country': 'USA',
                'awards': '1 win & 9 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BNTY4MzA4Mzc5Nl5BMl5BanBnXkFtZTgwNDIzMzk5NjE@._V1_SX300.jpg',
                'metaScore': 70,
                'imdbRating': 7.5,
                'imdbVotes': 47717,
                'imdbId': 'tt3488710',
                'type': 'movie'
            },
            {
                'title': 'Pulp Fiction',
                'year': 1994,
                'rated': 'R',
                'released': '1994-10-14',
                'runtime': '154 min',
                'genre': 'Crime, Drama',
                'director': 'Quentin Tarantino',
                'writer': 'Quentin Tarantino (story), Roger Avary (story), Quentin Tarantino',
                'actors': 'Tim Roth, Laura Lovelace, John Travolta, Samuel L. Jackson',
                'plot': 'The lives of two mob hit men, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
                'language': 'English, Spanish, French',
                'country': 'USA',
                'awards': 'Won 1 Oscar. Another 53 wins & 58 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg',
                'metaScore': 94,
                'imdbRating': 8.9,
                'imdbVotes': 1235868,
                'imdbId': 'tt0110912',
                'type': 'movie'
            },
            {
                'title': 'Schindler\'s List',
                'year': 1993,
                'rated': 'R',
                'released': '1994-02-04',
                'runtime': '195 min',
                'genre': 'Biography, Drama, History',
                'director': 'Steven Spielberg',
                'writer': 'Thomas Keneally (book), Steven Zaillian (screenplay)',
                'actors': 'Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall',
                'plot': 'In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
                'language': 'English, Hebrew, German, Polish',
                'country': 'USA',
                'awards': 'Won 7 Oscars. Another 69 wins & 32 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_SX300.jpg',
                'metaScore': 93,
                'imdbRating': 8.9,
                'imdbVotes': 808194,
                'imdbId': 'tt0108052',
                'type': 'movie'
            },
            {
                'title': 'The Lord of the Rings: The Return of the King',
                'year': 2003,
                'rated': 'PG-13',
                'released': '2003-12-17',
                'runtime': '201 min',
                'genre': 'Adventure, Drama, Fantasy',
                'director': 'Peter Jackson',
                'writer': 'J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)',
                'actors': 'Noel Appleby, Ali Astin, Sean Astin, David Aston',
                'plot': 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
                'language': 'English, Quenya, Old English, Sindarin',
                'country': 'USA, New Zealand',
                'awards': 'Won 11 Oscars. Another 158 wins & 107 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX300.jpg',
                'metaScore': 94,
                'imdbRating': 8.9,
                'imdbVotes': 1147689,
                'imdbId': 'tt0167260',
                'type': 'movie'
            },
            {
                'title': 'Fight Club',
                'year': 1999,
                'rated': 'R',
                'released': '1999-10-15',
                'runtime': '139 min',
                'genre': 'Drama',
                'director': 'David Fincher',
                'writer': 'Chuck Palahniuk (novel), Jim Uhls (screenplay)',
                'actors': 'Edward Norton, Brad Pitt, Helena Bonham Carter, Meat Loaf',
                'plot': 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...',
                'language': 'English',
                'country': 'USA, Germany',
                'awards': 'Nominated for 1 Oscar. Another 8 wins & 27 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX300.jpg',
                'metaScore': 66,
                'imdbRating': 8.8,
                'imdbVotes': 1254308,
                'imdbId': 'tt0137523',
                'type': 'movie'
            },
            {
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'year': 2001,
                'rated': 'PG-13',
                'released': '2001-12-19',
                'runtime': '178 min',
                'genre': 'Adventure, Drama, Fantasy',
                'director': 'Peter Jackson',
                'writer': 'J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)',
                'actors': 'Alan Howard, Noel Appleby, Sean Astin, Sala Baker',
                'plot': 'A meek Hobbit and eight companions set out on a journey to destroy the One Ring and the Dark Lord Sauron.',
                'language': 'English, Sindarin',
                'country': 'New Zealand, USA',
                'awards': 'Won 4 Oscars. Another 101 wins & 111 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SX300.jpg',
                'metaScore': 92,
                'imdbRating': 8.8,
                'imdbVotes': 1160499,
                'imdbId': 'tt0120737',
                'type': 'movie'
            },
            {
                'title': 'Forrest Gump',
                'year': 1994,
                'rated': 'PG-13',
                'released': '1994-07-06',
                'runtime': '142 min',
                'genre': 'Drama, Romance',
                'director': 'Robert Zemeckis',
                'writer': 'Winston Groom (novel), Eric Roth (screenplay)',
                'actors': 'Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys',
                'plot': 'Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.',
                'language': 'English',
                'country': 'USA',
                'awards': 'Won 6 Oscars. Another 37 wins & 51 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTI1Nzk1MzQwMV5BMl5BanBnXkFtZTYwODkxOTA5._V1_SX300.jpg',
                'metaScore': 82,
                'imdbRating': 8.8,
                'imdbVotes': 1167104,
                'imdbId': 'tt0109830',
                'type': 'movie'
            },
            {
                'title': 'The Lord of the Rings: The Two Towers',
                'year': 2002,
                'rated': 'PG-13',
                'released': '2002-12-18',
                'runtime': '179 min',
                'genre': 'Adventure, Drama, Fantasy',
                'director': 'Peter Jackson',
                'writer': 'J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Stephen Sinclair (screenplay), Peter Jackson (screenplay)',
                'actors': 'Bruce Allpress, Sean Astin, John Bach, Sala Baker',
                'plot': 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
                'language': 'English, Sindarin, Old English',
                'country': 'USA, New Zealand',
                'awards': 'Won 2 Oscars. Another 105 wins & 114 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg',
                'metaScore': 88,
                'imdbRating': 8.7,
                'imdbVotes': 1037590,
                'imdbId': 'tt0167261',
                'type': 'movie'
            },
            {
                'title': 'The Matrix',
                'year': 1999,
                'rated': 'R',
                'released': '1999-03-31',
                'runtime': '136 min',
                'genre': 'Action, Sci-Fi',
                'director': 'Andy Wachowski, Lana Wachowski',
                'writer': 'Andy Wachowski, Lana Wachowski',
                'actors': 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
                'plot': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
                'language': 'English',
                'country': 'USA, Australia',
                'awards': 'Won 4 Oscars. Another 33 wins & 42 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX300.jpg',
                'metaScore': 73,
                'imdbRating': 8.7,
                'imdbVotes': 1148739,
                'imdbId': 'tt0133093',
                'type': 'movie'
            }
        ];
        this.series = [
            {
                'title': 'The X-Files',
                'year': 2002,
                'rated': 'TV-MA',
                'released': '1993-09-10',
                'runtime': '44 min',
                'genre': 'Drama, Mystery, Sci-Fi',
                'director': null,
                'writer': 'Chris Carter',
                'actors': 'Gillian Anderson, David Duchovny, Mitch Pileggi',
                'plot': 'Two FBI agents, Fox Mulder the believer and Dana Scully the skeptic, investigate the strange and unexplained while hidden forces work to impede their efforts.',
                'language': 'English',
                'country': 'USA, Canada',
                'awards': 'Won 5 Golden Globes. Another 88 wins & 202 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BODM2NzAwMjgxNF5BMl5BanBnXkFtZTcwNzYwNjkzMQ@@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 8.7,
                'imdbVotes': 124651,
                'imdbId': 'tt0106179',
                'type': 'series'
            },
            {
                'title': 'Game of Thrones',
                'year': 2016,
                'rated': 'TV-MA',
                'released': '2011-04-17',
                'runtime': '56 min',
                'genre': -'Adventure, Drama, Fantasy',
                'director': null,
                'writer': 'David Benioff, D.B. Weiss',
                'actors': 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
                'plot': 'While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, return after thousands of years in the North.',
                'language': 'English',
                'country': 'USA',
                'awards': 'Won 1 Golden Globe. Another 134 wins & 288 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEzMDMzMl5BMl5BanBnXkFtZTgwNzExODIzNzE@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 9.5,
                'imdbVotes': 906519,
                'imdbId': 'tt0944947',
                'type': 'series'
            },
            {
                'title': 'The Walking Dead',
                'year': 2016,
                'rated': 'TV-14',
                'released': '2010-10-31',
                'runtime': '44 min',
                'genre': 'Drama, Horror, Thriller',
                'director': null,
                'writer': 'Frank Darabont',
                'actors': 'Andrew Lincoln, Chandler Riggs, Norman Reedus, Melissa McBride',
                'plot': 'Sheriff Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.',
                'language': 'English',
                'country': 'USA',
                'awards': 'Nominated for 1 Golden Globe. Another 42 wins & 122 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTk1MjI1NjI0MV5BMl5BanBnXkFtZTcwODQ5MzA3Mw@@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 8.6,
                'imdbVotes': 577307,
                'imdbId': 'tt1520211',
                'type': 'series'
            },
            {
                'title': 'The Big Bang Theory',
                'year': 2016,
                'rated': 'TV-14',
                'released': '2007-09-24',
                'runtime': '22 min',
                'genre': 'Comedy',
                'director': null,
                'writer': 'Chuck Lorre, Bill Prady',
                'actors': 'Johnny Galecki, Jim Parsons, Kaley Cuoco, Simon Helberg',
                'plot': 'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
                'language': 'English, Hindi, Italian, Russian, Mandarin, Klingon',
                'country': 'USA',
                'awards': 'Won 1 Golden Globe. Another 49 wins & 161 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMjI1Mzc4MDUwNl5BMl5BanBnXkFtZTgwMDAzOTIxMjE@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 8.4,
                'imdbVotes': 496762,
                'imdbId': 'tt0898266',
                'type': 'series'
            },
            {
                'title': 'Sherlock',
                'year': 2016,
                'rated': 'TV-14',
                'released': '2010-10-24',
                'runtime': '88 min',
                'genre': 'Crime, Drama, Mystery',
                'director': null,
                'writer': 'Mark Gatiss, Steven Moffat',
                'actors': 'Benedict Cumberbatch, Martin Freeman, Una Stubbs, Rupert Graves',
                'plot': 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
                'language': 'English',
                'country': 'UK, USA',
                'awards': 'Nominated for 1 Golden Globe. Another 70 wins & 103 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BNTA2MTE1NDI5OV5BMl5BanBnXkFtZTcwNzM2MzU3Nw@@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 9.3,
                'imdbVotes': 454123,
                'imdbId': 'tt1475582',
                'type': 'series'
            },
            {
                'title': 'Breaking Bad',
                'year': 2013,
                'rated': 'TV-14',
                'released': '2008-01-20',
                'runtime': '47 min',
                'genre': 'Crime, Drama, Thriller',
                'director': null,
                'writer': 'Vince Gilligan',
                'actors': 'Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris',
                'plot': 'A chemistry teacher diagnosed with terminal lung cancer teams up with his former student to cook and sell crystal meth.',
                'language': 'English, Spanish',
                'country': 'USA',
                'awards': 'Won 2 Golden Globes. Another 118 wins & 197 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 9.5,
                'imdbVotes': 790356,
                'imdbId': 'tt0903747',
                'type': 'series'
            },
            {
                'title': 'The Vampire Diaries',
                'year': 2015,
                'rated': 'TV-14',
                'released': '2009-09-10',
                'runtime': '43 min',
                'genre': 'Drama, Fantasy, Horror',
                'director': null,
                'writer': 'Julie Plec, Kevin Williamson',
                'actors': 'Paul Wesley, Ian Somerhalder, Kat Graham, Candice King',
                'plot': 'A teenage girl is torn between two vampire brothers.',
                'language': 'English',
                'country': 'USA',
                'awards': '35 wins & 48 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTgzMzg3NDMxOF5BMl5BanBnXkFtZTgwNjUwMjQyNzE@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 7.9,
                'imdbVotes': 206717,
                'imdbId': 'tt1405406',
                'type': 'series'
            },
            {
                'title': 'Friends',
                'year': 2004,
                'rated': 'TV-14',
                'released': '1994-09-22',
                'runtime': '22 min',
                'genre': 'Comedy, Romance',
                'director': null,
                'writer': 'David Crane, Marta Kauffman',
                'actors': 'Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc',
                'plot': 'Follows the lives of six 20-something friends living in Manhattan.',
                'language': 'English',
                'country': 'USA',
                'awards': 'Won 1 Golden Globe. Another 68 wins & 204 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTg4NzEyNzQ5OF5BMl5BanBnXkFtZTYwNTY3NDg4._V1._CR24,0,293,443_SX89_AL_.jpg_V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 9.0,
                'imdbVotes': 433690,
                'imdbId': 'tt0108778',
                'type': 'series'
            },
            {
                'title': 'Orange Is the New Black',
                'year': 2015,
                'rated': 'TV-MA',
                'released': '2013-07-11',
                'runtime': '59 min',
                'genre': 'Comedy, Crime, Drama',
                'director': null,
                'writer': null,
                'actors': 'Taylor Schilling, Michael Harney, Kate Mulgrew, Danielle Brooks',
                'plot': 'The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money to her drug-dealing girlfriend.',
                'language': 'English',
                'country': 'USA',
                'awards': 'Nominated for 6 Golden Globes. Another 33 wins & 77 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BODQ2NjE2NDY3Ml5BMl5BanBnXkFtZTgwNjQxNzA1NTE@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 8.3,
                'imdbVotes': 167631,
                'imdbId': 'tt2372162',
                'type': 'series'
            },
            {
                'title': 'Modern Family',
                'year': 2015,
                'rated': 'TV-PG',
                'released': '2009-09-23',
                'runtime': '22 min',
                'genre': 'Comedy',
                'director': null,
                'writer': 'Steven Levitan, Christopher Lloyd',
                'actors': 'Ed O\'Neill, SofÃ­a Vergara, Jesse Tyler Ferguson, Eric Stonestreet',
                'plot': 'Three different, but related families face trials and tribulations in their own uniquely comedic ways.',
                'language': 'English',
                'country': 'USA',
                'awards': 'Won 1 Golden Globe. Another 99 wins & 270 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTU5MjQ1MTE2Ml5BMl5BanBnXkFtZTgwMDgwMzg5NjE@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 8.6,
                'imdbVotes': 227872,
                'imdbId': 'tt1442437',
                'type': 'series'
            },
            {
                'title': 'House of Cards',
                'year': 2015,
                'rated': 'TV-MA',
                'released': '2013-02-01',
                'runtime': '51 min',
                'genre': 'Drama',
                'director': null,
                'writer': 'Beau Willimon',
                'actors': 'Kevin Spacey, Robin Wright, Michael Kelly, Nathan Darrow',
                'plot': 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',
                'language': 'English',
                'country': 'USA',
                'awards': 'Won 2 Golden Globes. Another 15 wins & 123 nominations.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMTY1NDcwMDcxN15BMl5BanBnXkFtZTgwMDI1NTQzNDE@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 9.0,
                'imdbVotes': 268094,
                'imdbId': 'tt1856010',
                'type': 'series'
            },
            {
                'title': 'Narcos',
                'year': 2016,
                'rated': 'TV-MA',
                'released': '2015-08-28',
                'runtime': '49 min',
                'genre': 'Biography, Crime, Drama',
                'director': null,
                'writer': 'Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein',
                'actors': 'Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie',
                'plot': 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.',
                'language': 'English, Spanish',
                'country': 'USA',
                'awards': 'Nominated for 2 Golden Globes. Another 1 nomination.',
                'poster': 'http://ia.media-imdb.com/images/M/MV5BMjMyNzA0MTA3NV5BMl5BanBnXkFtZTgwMTYxMTA0NjE@._V1_SX300.jpg',
                'metaScore': 0,
                'imdbRating': 9.0,
                'imdbVotes': 76610,
                'imdbId': 'tt2707408',
                'type': 'series'
            },
        ];
    }
    DataStorageService.prototype.getMovies = function () {
        return this.movies;
    };
    DataStorageService.prototype.getSeries = function () {
        return this.series;
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], DataStorageService);

//# sourceMappingURL=data-storage.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.onSigninUser(email, password);
        this.route.navigate(['movies']);
    };
    SigninComponent.prototype.onClick = function () {
        this.route.navigate(['/signup']);
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__(245),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SigninComponent);

var _a, _b;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.onSignupUser(email, password);
    };
    SignupComponent.prototype.onClick = function () {
        this.router.navigate(['signin']);
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__(246),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(248),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieDetailComponent = (function () {
    function MovieDetailComponent() {
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
    };
    return MovieDetailComponent;
}());
MovieDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-movie-detail',
        template: __webpack_require__(249),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [])
], MovieDetailComponent);

//# sourceMappingURL=movie-detail.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieListComponent = (function () {
    function MovieListComponent(movieService, router, authService) {
        this.movieService = movieService;
        this.router = router;
        this.authService = authService;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.storeMovies()
            .subscribe(function (response) { return _this.movieList = response; }, function (error) { return console.log(error); });
    };
    MovieListComponent.prototype.onSelect = function () {
        this.router.navigate(['/movie-detail']);
    };
    MovieListComponent.prototype.onLogout = function () {
        this.authService.Signout();
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__(250),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], MovieListComponent);

var _a, _b, _c;
//# sourceMappingURL=movie-list.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__series_list_data_storage_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieService = (function () {
    function MovieService(http, dataStorageService) {
        this.http = http;
        this.dataStorageService = dataStorageService;
    }
    //
    // getAllMovies(): Observable<any[]> {
    //   // const token = this.authService.getToken();
    //
    //   return this.http.get('http://localhost:8080/api/movies?')
    //     .map(response => response.json())
    //     .catch(error => Observable.throw(error.statusText));
    //
    // }
    MovieService.prototype.storeMovies = function () {
        return this.http.put('https://movieflixhani.firebaseio.com/movies.json', this.dataStorageService.getMovies())
            .map(function (response) { return response.json(); }, function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error); });
    };
    return MovieService;
}());
MovieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__series_list_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__series_list_data_storage_service__["a" /* DataStorageService */]) === "function" && _b || Object])
], MovieService);

var _a, _b;
//# sourceMappingURL=movie.service.js.map

/***/ })

},[525]);
//# sourceMappingURL=main.bundle.js.map