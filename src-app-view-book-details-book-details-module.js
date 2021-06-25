(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-book-details-book-details-module"],{

/***/ "Geua":
/*!************************************************************************!*\
  !*** ./src/app/view/book-details/bookdetails/bookdetails.component.ts ***!
  \************************************************************************/
/*! exports provided: BookdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailsComponent", function() { return BookdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/book.service */ "+9od");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BookdetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookdetailsComponent_div_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const star_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](star_r6 == "half" ? "fa-star-half-alt" : "fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", star_r6 ? "orange" : "#716f6f");
} }
function BookdetailsComponent_div_1_div_27_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookdetailsComponent_div_1_div_27_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.orangeOnClick(i_r10, ctx_r11.BookDetails._id); })("mouseover", function BookdetailsComponent_div_1_div_27_i_1_Template_i_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.orangeOnHover(i_r10); })("mouseleave", function BookdetailsComponent_div_1_div_27_i_1_Template_i_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.grayOnMouseleave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const star_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", star_r9 ? "orange" : "#716f6f");
} }
function BookdetailsComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookdetailsComponent_div_1_div_27_i_1_Template, 1, 2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.rateMe[0])("ngForTrackBy", ctx_r3.track);
} }
function BookdetailsComponent_div_1_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "thanks for rating ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookdetailsComponent_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookdetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BookdetailsComponent_div_1_ng_container_19_Template, 2, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Rate This Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BookdetailsComponent_div_1_div_27_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BookdetailsComponent_div_1_span_28_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BookdetailsComponent_div_1_div_29_Template, 6, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.BookDetails.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.BookDetails.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.BookDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BY: ", ctx_r1.BookDetails.authorId.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.BookDetails.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.rateHistory)("ngForTrackBy", ctx_r1.track);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.BookDetails.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.rateMe[2].loading && !ctx_r1.rateMe[3].message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rateMe[3].message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rateMe[2].loading);
} }
class BookdetailsComponent {
    constructor(title, activatedRoute, bookservice) {
        this.title = title;
        this.activatedRoute = activatedRoute;
        this.bookservice = bookservice;
        this.rateHistory = [];
        this.pageLoading = true;
        this.rateMe = [[false, false, false, false, false], { count: -1 }, { loading: false },
            { message: false },];
        this.rateHistory = [false, false, false, false, false];
        this.dataSub = this.activatedRoute.params.subscribe(param => {
            this.bookSub = this.bookservice.getBookById(param.id).subscribe((res) => {
                this.pageLoading = false;
                this.BookDetails = res;
                title.setTitle(`${res.name}`);
                for (let j = 0; j < Math.floor(this.BookDetails.rate); j++) {
                    this.rateHistory[j] = true;
                }
                if (this.BookDetails.rate != Math.floor(this.BookDetails.rate)) {
                    this.rateHistory[Math.ceil(this.BookDetails.rate) - 1] = "half";
                }
            }, err => {
                this.pageLoading = false;
                alert(err.errors.error);
            });
        });
    }
    ngOnInit() {
    }
    orangeOnHover(i) {
        for (let index = 0; index <= i; index++) {
            this.rateMe[0][index] = true;
        }
        if (i < 4) {
            for (let index = 4; index > i; index--) {
                this.rateMe[0][index] = false;
            }
        }
    }
    grayOnMouseleave() {
        if (this.rateMe[1].count > -1) {
            for (let index = 0; index <= this.rateMe[1].count; index++) {
                this.rateMe[0][index] = true;
            }
        }
        if (this.rateMe[1].count < 4) {
            for (let index = 4; index > this.rateMe[1].count; index--) {
                this.rateMe[0][index] = false;
            }
        }
    }
    orangeOnClick(i, BookId) {
        this.rateMe[1].count = i;
        this.rateMe[2].loading = true;
        this.rateSub = this.bookservice.rateBook(BookId, i + 1).subscribe(res => {
            this.rateMe[2].loading = false;
            this.rateMe[3].message = true;
            setInterval(() => {
                this.rateMe[3].message = false;
            }, 2000);
        }, err => {
            this.rateMe[2].loading = false;
        });
    }
    track(index) {
        return index;
    }
    ngOnDestroy() {
        if (this.dataSub) {
            this.dataSub.unsubscribe();
        }
        if (this.bookSub) {
            this.bookSub.unsubscribe();
        }
        if (this.rateSub) {
            this.rateSub.unsubscribe();
        }
    }
}
BookdetailsComponent.ɵfac = function BookdetailsComponent_Factory(t) { return new (t || BookdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"])); };
BookdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookdetailsComponent, selectors: [["app-bookdetails"]], decls: 2, vars: 2, consts: [["style", "height: 95vh;", "class", "d-flex justify-content-center align-items-center", 4, "ngIf"], ["class", "bookDetails py-5 my-5", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "95vh"], [1, "lds-ring"], [1, "bookDetails", "py-5", "my-5"], [1, "container"], [1, "row"], [1, "col-md-4", "mb-4"], ["height", "400", "alt", "", 1, "w-100", "mb-2", 3, "src"], [1, "col-md-8", "mb-4"], [1, "ratee", "d-inline-block"], [1, "my-2"], [1, "mr-3"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "my-2", "rateMe", "d-flex", "align-items-center"], [4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "fas"], ["class", "fas fa-star", 3, "color", "click", "mouseover", "mouseleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "fas", "fa-star", 3, "click", "mouseover", "mouseleave"], [1, "text-center"]], template: function BookdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookdetailsComponent_div_0_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookdetailsComponent_div_1_Template, 30, 11, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.BookDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".ratee[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #8a2387, #e94057, #f27121);\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYm9va2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnRUFBQTtFQUVBLGlCQUFBO0FBQUoiLCJmaWxlIjoiYm9va2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0ZWUge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGZyb20oIzhhMjM4NyksY29sb3Itc3RvcCgjZTk0MDU3KSx0bygjZjI3MTIxKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzhhMjM4NywjZTk0MDU3LCNmMjcxMjEpO1xyXG5cclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "Rve8":
/*!******************************************************************!*\
  !*** ./src/app/view/book-details/book-details-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: BookDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsRoutingModule", function() { return BookDetailsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guards_not_user_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/not-user.guard */ "t2BM");
/* harmony import */ var _bookdetails_bookdetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookdetails/bookdetails.component */ "Geua");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _bookdetails_bookdetails_component__WEBPACK_IMPORTED_MODULE_2__["BookdetailsComponent"],
        canActivate: [src_app_guards_not_user_guard__WEBPACK_IMPORTED_MODULE_1__["NotUserGuard"]],
    }
];
class BookDetailsRoutingModule {
}
BookDetailsRoutingModule.ɵfac = function BookDetailsRoutingModule_Factory(t) { return new (t || BookDetailsRoutingModule)(); };
BookDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BookDetailsRoutingModule });
BookDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BookDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Zxoq":
/*!**********************************************************!*\
  !*** ./src/app/view/book-details/book-details.module.ts ***!
  \**********************************************************/
/*! exports provided: BookDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsModule", function() { return BookDetailsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _book_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-details-routing.module */ "Rve8");
/* harmony import */ var _bookdetails_bookdetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookdetails/bookdetails.component */ "Geua");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class BookDetailsModule {
}
BookDetailsModule.ɵfac = function BookDetailsModule_Factory(t) { return new (t || BookDetailsModule)(); };
BookDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BookDetailsModule });
BookDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _book_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["BookDetailsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BookDetailsModule, { declarations: [_bookdetails_bookdetails_component__WEBPACK_IMPORTED_MODULE_2__["BookdetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _book_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["BookDetailsRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-view-book-details-book-details-module.js.map