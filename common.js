(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+9od":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class BookService {
    constructor(http) {
        this.http = http;
    }
    addBook(value) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}add-book`, value);
    }
    getAllBooks() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}all-books`);
    }
    getUserBooks() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}my-books`);
    }
    getBookById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}single-book/${id}`);
    }
    updateBook(id, value) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}update-book/${id}`, value);
    }
    updateBookImage(id, value) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}book-image/${id}`, value);
    }
    deleteBook(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}delete-book/${id}`);
    }
    rateBook(id, rat) {
        let body = {
            rating: rat
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}rate-book/${id}`, body);
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "N7fZ":
/*!*************************************!*\
  !*** ./src/app/shared/text.pipe.ts ***!
  \*************************************/
/*! exports provided: TextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPipe", function() { return TextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TextPipe {
    transform(des) {
        return des.slice(0, 150);
    }
}
TextPipe.ɵfac = function TextPipe_Factory(t) { return new (t || TextPipe)(); };
TextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "text", type: TextPipe, pure: true });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.pipe */ "N7fZ");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.pipe */ "ZPLk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_text_pipe__WEBPACK_IMPORTED_MODULE_1__["TextPipe"],
        _search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_text_pipe__WEBPACK_IMPORTED_MODULE_1__["TextPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"]] }); })();


/***/ }),

/***/ "ZPLk":
/*!***************************************!*\
  !*** ./src/app/shared/search.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchPipe {
    transform(books, value) {
        if (!value)
            return books;
        return books.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });


/***/ }),

/***/ "t2BM":
/*!******************************************!*\
  !*** ./src/app/guards/not-user.guard.ts ***!
  \******************************************/
/*! exports provided: NotUserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotUserGuard", function() { return NotUserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotUserGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.isLogin())
            return true;
        else {
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
}
NotUserGuard.ɵfac = function NotUserGuard_Factory(t) { return new (t || NotUserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotUserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotUserGuard, factory: NotUserGuard.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map