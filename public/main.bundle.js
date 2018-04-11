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

/***/ "../../../../../src/app/app-router/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_list_movie_list_component__ = __webpack_require__("../../../../../src/app/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_details_movie_details_component__ = __webpack_require__("../../../../../src/app/movie-details/movie-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movie_reviews_movie_reviews_component__ = __webpack_require__("../../../../../src/app/movie-reviews/movie-reviews.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'movie-list/:id', component: __WEBPACK_IMPORTED_MODULE_3__movie_list_movie_list_component__["a" /* MovieListComponent */] },
    { path: 'movie-details/:title', component: __WEBPACK_IMPORTED_MODULE_4__movie_details_movie_details_component__["a" /* MovieDetailsComponent */] },
    { path: 'movie-reviews/:title', component: __WEBPACK_IMPORTED_MODULE_5__movie_reviews_movie_reviews_component__["a" /* MovieReviewsComponent */] },
    { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__movie_list_movie_list_component__["a" /* MovieListComponent */] }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRouterModule);

//# sourceMappingURL=app-router.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n    font-size: 25px;\r\n    margin: 5px;\r\n\r\n    \r\n}\r\n\r\nnav a {\r\n    padding: 8px;\r\n    background-color:green;\r\n    \r\n}\r\n\r\nnav a:hover {\r\n    background-color: rgb(0, 255, 149);\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"jumbotron\">\r\n    <nav class=\"nav navbar-nav\">\r\n        <!-- <a routerLink=\"/movie-list\" routerLinkActive=\"active\">Movies</a> -->\r\n    </nav>\r\n    <br/>\r\n    <h1>Movies Database</h1>\r\n    <p>Movie Lists</p>\r\n</div>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getmovie_service__ = __webpack_require__("../../../../../src/app/getmovie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__movie_list_movie_list_component__ = __webpack_require__("../../../../../src/app/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movie_details_movie_details_component__ = __webpack_require__("../../../../../src/app/movie-details/movie-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_router_app_router_module__ = __webpack_require__("../../../../../src/app/app-router/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__movie_reviews_movie_reviews_component__ = __webpack_require__("../../../../../src/app/movie-reviews/movie-reviews.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__movie_list_movie_list_component__["a" /* MovieListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__movie_details_movie_details_component__["a" /* MovieDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__movie_reviews_movie_reviews_component__["a" /* MovieReviewsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_router_app_router_module__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__getmovie_service__["a" /* GetMovieService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/getmovie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetMovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var GetMovieService = (function () {
    function GetMovieService(httpc, http) {
        this.httpc = httpc;
        this.http = http;
    }
    GetMovieService.prototype.getMovies = function () {
        return this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
            .map(function (response) {
            var data = response.json();
            return data.results.map(function (movie) {
                return {
                    'id': movie.id,
                    'title': movie.title,
                    'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
                    'overview': movie.overview,
                    'release_date': movie.release_date,
                    'vote_average': movie.vote_average,
                };
            });
        });
    };
    GetMovieService.prototype.getTopMovies = function () {
        return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
            .map(function (response) {
            var data = response.json();
            return data.results.map(function (movie) {
                return {
                    'id': movie.id,
                    'title': movie.title,
                    'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
                    'overview': movie.overview,
                    'release_date': movie.release_date,
                    'vote_average': movie.vote_average,
                };
            });
        });
    };
    GetMovieService.prototype.getUpcomingMovies = function () {
        return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
            .map(function (response) {
            var data = response.json();
            return data.results.map(function (movie) {
                return {
                    'id': movie.id,
                    'title': movie.title,
                    'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
                    'overview': movie.overview,
                    'release_date': movie.release_date,
                    'vote_average': movie.vote_average,
                };
            });
        });
    };
    GetMovieService.prototype.getPlayingMovies = function () {
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
            .map(function (response) {
            var data = response.json();
            return data.results.map(function (movie) {
                return {
                    'id': movie.id,
                    'title': movie.title,
                    'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
                    'overview': movie.overview,
                    'release_date': movie.release_date,
                    'vote_average': movie.vote_average
                };
            });
        });
    };
    GetMovieService.prototype.getReview = function (movieId) {
        return this.http.get('https://api.themoviedb.org/3/movie/' + movieId +
            '/reviews?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
            .map(function (response) {
            var data = response.json();
            return data.results.map(function (review) {
                return {
                    'author': review.author,
                    'content': review.content
                };
            });
        });
    };
    GetMovieService.prototype.getMovie = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTrailer(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.http.get('https://api.themoviedb.org/3/movie/'
                                + id + '?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US')
                                .map(function (response) {
                                var movie = response.json();
                                return {
                                    'id': movie.id,
                                    'title': movie.title,
                                    'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
                                    'overview': movie.overview,
                                    'release_date': movie.release_date,
                                    'vote_average': movie.vote_average,
                                    'trailer': _this.getTrailer(id),
                                };
                            })];
                }
            });
        });
    };
    GetMovieService.prototype.getTrailer = function (movieId) {
        var _this = this;
        this.http.get('https://api.themoviedb.org/3/movie/'
            + movieId + '/videos?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US')
            .map(function (response) {
            var trailerList = response.json();
            return trailerList.results.map(function (trailer) {
                return {
                    'key': 'https://www.youtube.com/embed/' + trailer.key
                };
            });
        }).subscribe(function (data) { return _this.theLink = data[0].key; });
        return this.theLink;
    };
    return GetMovieService;
}());
GetMovieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
], GetMovieService);

var _a, _b;
//# sourceMappingURL=getmovie.service.js.map

/***/ }),

/***/ "../../../../../src/app/movie-details/movie-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    color: purple;\r\n    border-radius: 12px; /* Safari */\r\n    transition-duration: 0.4s;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: #4CAF50; /* Green */\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie-details/movie-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div *ngIf=\"movie\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <img class=\"img-responsive img-rounded poster\" src={{movie.poster_path}} width=\"90%\" />\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <h1>Movie:</h1>\r\n                    <b>Title:</b> {{movie.title}}\r\n                    <br>\r\n                    <b>Release Date:</b> {{movie.release_date}}\r\n                    <br>\r\n                    <b>ID:</b> {{movie.id}}\r\n                    <br>\r\n                    <b>Rating:</b> {{movie.vote_average}} &#9734;\r\n                    <br>\r\n                    <h4>Plot:</h4> {{movie.overview}}\r\n                    <br>\r\n                    <br>\r\n                    <p>\r\n                        <button (click)=\"gotoReviews()\">Read Reviews</button>\r\n                        <button (click)=\"gotoMovies()\">Back to Popular Movies</button>\r\n\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <iframe width=\"640\" height=\"480\" [src]=\"safeUrl\" frameborder=\"0\" gesture=\"media\" allowfullscreen></iframe>\r\n                </div>\r\n            </div>\r\n\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/movie-details/movie-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getmovie_service__ = __webpack_require__("../../../../../src/app/getmovie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MovieDetailsComponent = (function () {
    function MovieDetailsComponent(movieService, router, route, location, sanitizer) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.sanitizer = sanitizer;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.movieService.getMovie(this.route.snapshot.params['title']).then(function (data) {
                            data.subscribe(function (movie) {
                                _this.movie = movie;
                                _this.safeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.movie.trailer);
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MovieDetailsComponent.prototype.gotoMovies = function () {
        this.router.navigate(['/movie-list/']);
        // this.location.back();
    };
    MovieDetailsComponent.prototype.gotoReviews = function () {
        // this.router.navigate(['/movie-list/' + this.route.snapshot.params['title']]);
        this.router.navigate(['/movie-reviews', this.movie.id]);
    };
    return MovieDetailsComponent;
}());
MovieDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie-details',
        template: __webpack_require__("../../../../../src/app/movie-details/movie-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie-details/movie-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__getmovie_service__["a" /* GetMovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__getmovie_service__["a" /* GetMovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], MovieDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=movie-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/movie-list/movie-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* div {\r\n    width: 200px;\r\n  }\r\n   */\r\n\r\nh2 {\r\n    font: 400 40px/1.5 Helvetica, Verdana, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    font: 200 17px/1.5 Helvetica, Verdana, sans-serif;\r\n    border-bottom: 3px solid rgb(7, 154, 199);\r\n    padding-bottom: 4px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\nli:last-child {\r\n    border: none;\r\n}\r\n\r\nli div {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: block;\r\n    /* width: 200px; */\r\n    transition: font-size 0.3s ease, background-color 0.3s ease;\r\n}\r\n\r\nli div:hover {\r\n    font-size: 25px;\r\n    background: #026a9b;\r\n}\r\n\r\n\r\n/* tell the container's children to float left: */\r\n\r\n.float-my-children>* {\r\n    float: left;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n/* this is called a clearfix. it makes sure that the container's children floats are cleared, without using extra markup */\r\n\r\n.clearfix {\r\n    *zoom: 1/* for IE */\r\n}\r\n\r\n.clearfix:before,\r\n.clearfix:after {\r\n    content: \" \";\r\n    display: table;\r\n}\r\n\r\n.clearfix:after {\r\n    clear: both;\r\n}\r\n\r\nnav {\r\n    font-size: 25px;\r\n    margin: 5px;\r\n}\r\n\r\nnav a {\r\n    padding: 8px;\r\n    background-color: green;\r\n}\r\n\r\nnav a:hover {\r\n    background-color: rgb(0, 255, 149);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie-list/movie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <a (click)=\"popularMovies()\">Popular Movies</a>\r\n  <a (click)=\"topMovies()\">Top Rated Movies</a>\r\n  <a (click)=\"playingMovies()\">Now Playing Movies</a>\r\n  <a (click)=\"upcomingMovies()\">Upcoming Movies</a>\r\n\r\n  <br/>\r\n  <br/>\r\n</nav>\r\n<section class=\"menu\">\r\n  <div class=\"movie-list\">\r\n    <div class=\"movie-group\">\r\n      <ul class=\"movies\">\r\n        <li *ngFor=\"let movie of movies\" [class.selected]=\"movie === selectedMovie\" (click)=\"onSelect(movie)\">\r\n          <div class=\"clearfix float-my-children\">\r\n            <img class=\"img-responsive img-rounded poster\" src={{movie.poster_path}} width=\"8%\" />\r\n            {{movie.title}} ({{movie.release_date}})\r\n            <br/> {{movie.vote_average}} &#9734;\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/movie-list/movie-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getmovie_service__ = __webpack_require__("../../../../../src/app/getmovie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function MovieListComponent(movieService, http, router, route) {
        // this.movies = movieService.getMovieList();
        this.movieService = movieService;
        this.http = http;
        this.router = router;
        this.route = route;
        // this.movies = movieservice.getMovies();
        // console.log(this.movies);
        // this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
        //   .subscribe(data => {
        //     this.movies = data['results'];
        //   });
    }
    MovieListComponent.prototype.ngOnInit = function () {
        switch (this.route.snapshot.params['id']) {
            case 'popular':
                this.popularMovies();
                break;
            case 'top':
                this.topMovies();
                break;
            case 'upcoming':
                this.upcomingMovies();
                break;
            case 'playing':
                this.playingMovies();
                break;
            default:
                this.popularMovies();
                break;
        }
        // this.movies = await this.movieService.getMovies();
        // console.log(this.movies);
        // this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
        //   .subscribe(data => {
        //     this.movies = data['results'];
        //   });
    };
    MovieListComponent.prototype.onSelect = function (amovie) {
        this.router.navigate(['/movie-details', amovie.id]);
    };
    MovieListComponent.prototype.topMovies = function () {
        var _this = this;
        this.movieService.getTopMovies().subscribe(function (data) {
            _this.movies = data;
        });
        this.router.navigate(['/movie-list', 'top']);
    };
    MovieListComponent.prototype.popularMovies = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (data) {
            _this.movies = data;
        });
        this.router.navigate(['/movie-list', 'popular']);
    };
    MovieListComponent.prototype.upcomingMovies = function () {
        var _this = this;
        this.movieService.getUpcomingMovies().subscribe(function (data) {
            _this.movies = data;
        });
        this.router.navigate(['/movie-list', 'upcoming']);
    };
    MovieListComponent.prototype.playingMovies = function () {
        var _this = this;
        this.movieService.getPlayingMovies().subscribe(function (data) {
            _this.movies = data;
        });
        this.router.navigate(['/movie-list', 'playing']);
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie-list',
        template: __webpack_require__("../../../../../src/app/movie-list/movie-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie-list/movie-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__getmovie_service__["a" /* GetMovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__getmovie_service__["a" /* GetMovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], MovieListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=movie-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/movie-reviews/movie-reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* div {\r\n    width: 200px;\r\n  }\r\n   */\r\n   button {\r\n    color: purple;\r\n    border-radius: 12px; /* Safari */\r\n    transition-duration: 0.4s;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: #4CAF50; /* Green */\r\n    color: white;\r\n}\r\n\r\n   h2 {\r\n    font: 400 40px/1.5 Helvetica, Verdana, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    font: 200 17px/1.5 Helvetica, Verdana, sans-serif;\r\n    border-bottom: 3px solid rgb(7, 154, 199);\r\n    padding-bottom: 4px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\nli:last-child {\r\n    border: none;\r\n}\r\n\r\nli div {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: block;\r\n    /* width: 200px; */\r\n    transition: font-size 0.3s ease, background-color 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/* tell the container's children to float left: */\r\n\r\n.float-my-children>* {\r\n    float: left;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n/* this is called a clearfix. it makes sure that the container's children floats are cleared, without using extra markup */\r\n\r\n.clearfix {\r\n    *zoom: 1/* for IE */\r\n}\r\n\r\n.clearfix:before,\r\n.clearfix:after {\r\n    content: \" \";\r\n    display: table;\r\n}\r\n\r\n.clearfix:after {\r\n    clear: both;\r\n}\r\n\r\nnav {\r\n    font-size: 25px;\r\n    margin: 5px;\r\n}\r\n\r\nnav a {\r\n    padding: 8px;\r\n    background-color: green;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie-reviews/movie-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"menu\">\r\n  <div class=\"review-list\">\r\n    <div class=\"review-group\">\r\n      <ul class=\"reviews\">\r\n          <button (click)=\"gotoMovieDetails()\">Back to Movie Details</button>\r\n        <li *ngFor=\"let review of reviews\">\r\n          <div>\r\n            <h3>{{review.author}}</h3>\r\n             {{review.content}}\r\n            <br/>\r\n            <br/>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/movie-reviews/movie-reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getmovie_service__ = __webpack_require__("../../../../../src/app/getmovie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieReviewsComponent = (function () {
    function MovieReviewsComponent(movieService, router, route, location) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    MovieReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getReview(this.route.snapshot.params['title']).subscribe(function (data) {
            _this.reviews = data;
        });
    };
    MovieReviewsComponent.prototype.gotoMovieDetails = function () {
        this.router.navigate(['/movie-details', this.route.snapshot.params['title']]);
    };
    return MovieReviewsComponent;
}());
MovieReviewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie-reviews',
        template: __webpack_require__("../../../../../src/app/movie-reviews/movie-reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie-reviews/movie-reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__getmovie_service__["a" /* GetMovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__getmovie_service__["a" /* GetMovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object])
], MovieReviewsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=movie-reviews.component.js.map

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