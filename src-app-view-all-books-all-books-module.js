(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-all-books-all-books-module"],{

/***/ "FzvK":
/*!***************************************************!*\
  !*** ./src/app/resolvers/getallbooks.resolver.ts ***!
  \***************************************************/
/*! exports provided: GetallbooksResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetallbooksResolver", function() { return GetallbooksResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "+9od");


class GetallbooksResolver {
    constructor(books) {
        this.books = books;
    }
    resolve(route, state) {
        return this.books.getAllBooks();
    }
}
GetallbooksResolver.ɵfac = function GetallbooksResolver_Factory(t) { return new (t || GetallbooksResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"])); };
GetallbooksResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetallbooksResolver, factory: GetallbooksResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "L+o2":
/*!****************************************************!*\
  !*** ./src/app/view/all-books/all-books.module.ts ***!
  \****************************************************/
/*! exports provided: AllBooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBooksModule", function() { return AllBooksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _all_books_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-books-routing.module */ "MXvj");
/* harmony import */ var _allbooks_allbooks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allbooks/allbooks.component */ "nrlp");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AllBooksModule {
}
AllBooksModule.ɵfac = function AllBooksModule_Factory(t) { return new (t || AllBooksModule)(); };
AllBooksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AllBooksModule });
AllBooksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _all_books_routing_module__WEBPACK_IMPORTED_MODULE_1__["AllBooksRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AllBooksModule, { declarations: [_allbooks_allbooks_component__WEBPACK_IMPORTED_MODULE_2__["AllbooksComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _all_books_routing_module__WEBPACK_IMPORTED_MODULE_1__["AllBooksRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "MXvj":
/*!************************************************************!*\
  !*** ./src/app/view/all-books/all-books-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AllBooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBooksRoutingModule", function() { return AllBooksRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guards_not_user_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/not-user.guard */ "t2BM");
/* harmony import */ var src_app_resolvers_getallbooks_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resolvers/getallbooks.resolver */ "FzvK");
/* harmony import */ var _allbooks_allbooks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allbooks/allbooks.component */ "nrlp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _allbooks_allbooks_component__WEBPACK_IMPORTED_MODULE_3__["AllbooksComponent"],
        canActivate: [src_app_guards_not_user_guard__WEBPACK_IMPORTED_MODULE_1__["NotUserGuard"]],
        resolve: { AllBooks: src_app_resolvers_getallbooks_resolver__WEBPACK_IMPORTED_MODULE_2__["GetallbooksResolver"] }
    }
];
class AllBooksRoutingModule {
}
AllBooksRoutingModule.ɵfac = function AllBooksRoutingModule_Factory(t) { return new (t || AllBooksRoutingModule)(); };
AllBooksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AllBooksRoutingModule });
AllBooksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AllBooksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "nrlp":
/*!***************************************************************!*\
  !*** ./src/app/view/all-books/allbooks/allbooks.component.ts ***!
  \***************************************************************/
/*! exports provided: AllbooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbooksComponent", function() { return AllbooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ "+9od");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/search.pipe */ "ZPLk");
/* harmony import */ var _shared_text_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/text.pipe */ "N7fZ");








function AllbooksComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllbooksComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are no books ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add new Book ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllbooksComponent_div_5_div_4_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const star_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](star_r11 == "half" ? "fa-star-half-alt" : "fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", star_r11 ? "orange" : "#716f6f");
} }
function AllbooksComponent_div_5_div_4_div_30_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllbooksComponent_div_5_div_4_div_30_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r15 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const containerIndex_r6 = ctx_r17.index; const book_r5 = ctx_r17.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.ratebook(i_r15, containerIndex_r6, book_r5._id); })("mouseover", function AllbooksComponent_div_5_div_4_div_30_i_1_Template_i_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r15 = ctx.index; const containerIndex_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.orangeOnHover(i_r15, containerIndex_r6); })("mouseleave", function AllbooksComponent_div_5_div_4_div_30_i_1_Template_i_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r15 = ctx.index; const containerIndex_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.grayOnMouseleave(i_r15, containerIndex_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const star_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", star_r14 ? "orange" : "#716f6f");
} }
function AllbooksComponent_div_5_div_4_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllbooksComponent_div_5_div_4_div_30_i_1_Template, 1, 2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const containerIndex_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.stars[containerIndex_r6][0])("ngForTrackBy", ctx_r8.track);
} }
function AllbooksComponent_div_5_div_4_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "thanks for rating ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllbooksComponent_div_5_div_4_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/bookDetails", a1]; };
function AllbooksComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "...more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AllbooksComponent_div_5_div_4_ng_container_20_Template, 2, 4, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Rate This Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AllbooksComponent_div_5_div_4_div_30_Template, 2, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AllbooksComponent_div_5_div_4_span_31_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AllbooksComponent_div_5_div_4_div_32_Template, 6, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r5 = ctx.$implicit;
    const containerIndex_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, book_r5._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", book_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BY: ", book_r5.authorId.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, book_r5.description), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, book_r5._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.stars[containerIndex_r6][4])("ngForTrackBy", ctx_r4.track);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r5.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r5.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.stars[containerIndex_r6][2].loading && !ctx_r4.stars[containerIndex_r6][3].message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.stars[containerIndex_r6][3].message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.stars[containerIndex_r6][2].loading);
} }
function AllbooksComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllbooksComponent_div_5_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllbooksComponent_div_5_div_4_Template, 33, 19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r3.allBooks, ctx_r3.searchValue));
} }
class AllbooksComponent {
    constructor(activatedRoute, book, title) {
        this.activatedRoute = activatedRoute;
        this.book = book;
        this.title = title;
        this.allBooks = [];
        this.stars = [];
        this.loading = true;
        title.setTitle('GoodReads');
        if (this.activatedRoute.snapshot.data.AllBooks && Array.isArray(this.activatedRoute.snapshot.data.AllBooks)) {
            this.allBooks = this.activatedRoute.snapshot.data.AllBooks;
            this.loading = false;
            for (let i = 0; i < this.allBooks.length; i++) {
                this.stars.push([[false, false, false, false, false],
                    { count: -1 },
                    { loading: false },
                    { message: false },
                    [false, false, false, false, false]]);
                for (let j = 0; j < Math.floor(this.allBooks[i].rate); j++) {
                    this.stars[i][4][j] = true;
                }
                if (this.allBooks[i].rate != Math.floor(this.allBooks[i].rate)) {
                    this.stars[i][4][Math.ceil(this.allBooks[i].rate) - 1] = "half";
                }
            }
        }
        else {
            this.loading = false;
        }
    }
    ngOnInit() {
    }
    orangeOnHover(i, containerIndex) {
        for (let index = 0; index <= i; index++) {
            this.stars[containerIndex][0][index] = true;
        }
        if (i < 4) {
            for (let index = 4; index > i; index--) {
                this.stars[containerIndex][0][index] = false;
            }
        }
    }
    grayOnMouseleave(i, containerIndex) {
        if (this.stars[containerIndex][1].count > -1) {
            for (let index = 0; index <= this.stars[containerIndex][1].count; index++) {
                this.stars[containerIndex][0][index] = true;
            }
        }
        if (this.stars[containerIndex][1].count < 4) {
            for (let index = 4; index > this.stars[containerIndex][1].count; index--) {
                this.stars[containerIndex][0][index] = false;
            }
        }
    }
    ratebook(i, containerIndex, BookId) {
        this.stars[containerIndex][1].count = i;
        this.stars[containerIndex][2].loading = true;
        this.rateSub = this.book.rateBook(BookId, i + 1).subscribe(res => {
            this.stars[containerIndex][2].loading = false;
            this.stars[containerIndex][3].message = true;
            setInterval(() => {
                this.stars[containerIndex][3].message = false;
            }, 2000);
        }, err => {
            this.stars[containerIndex][2].loading = false;
        });
    }
    track(index) {
        return index;
    }
    ngOnDestroy() {
        if (this.rateSub) {
            this.rateSub.unsubscribe();
        }
    }
}
AllbooksComponent.ɵfac = function AllbooksComponent_Factory(t) { return new (t || AllbooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
AllbooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllbooksComponent, selectors: [["app-allbooks"]], decls: 6, vars: 3, consts: [[1, "coverr", "bg-white", "text-center"], ["src", "assets/cover.png", "alt", "", 1, "imgWidth"], ["style", "height: 95vh;", "class", "d-flex justify-content-center align-items-center", 4, "ngIf"], ["empty", ""], ["class", "userBooks py-5", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "95vh"], [1, "lds-ring"], [1, "container", "py-5", "text-center"], ["routerLink", "/profile/addBook", 2, "color", "blue"], [1, "userBooks", "py-5"], [1, "container"], ["type", "text", "placeholder", "search..", 1, "form-control", "my-4", 3, "ngModel", "ngModelChange"], [1, "row"], ["class", "col-md-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-4"], [1, "col-md-6"], [3, "routerLink"], ["height", "400", "alt", "", 1, "w-100", 3, "src"], [1, "position-relative", "shadoww"], [1, "mt-4"], [2, "cursor", "pointer", 3, "routerLink"], [1, "my-2"], [1, "mr-3"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mr-4"], [1, "rateee"], [1, "my-2", "rateMe", "d-flex", "align-items-center"], [4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "fas"], ["class", "fas fa-star", 3, "color", "click", "mouseover", "mouseleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "fas", "fa-star", 3, "click", "mouseover", "mouseleave"], [1, "text-center"]], template: function AllbooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllbooksComponent_div_2_Template, 6, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllbooksComponent_ng_template_3_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllbooksComponent_div_5_Template, 6, 5, "div", 4);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allBooks.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_shared_search_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchPipe"], _shared_text_pipe__WEBPACK_IMPORTED_MODULE_7__["TextPipe"]], styles: ["a[_ngcontent-%COMP%] {\n  color: black;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxsYm9va3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxZQUFBO0FBRUg7O0FBREE7RUFBUyxxQkFBQTtBQUtUIiwiZmlsZSI6ImFsbGJvb2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7Y29sb3I6YmxhY2t9XHJcbmE6aG92ZXIge3RleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcblxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-view-all-books-all-books-module.js.map