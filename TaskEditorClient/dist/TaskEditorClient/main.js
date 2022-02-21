(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#iiicolleft {\r\n    float:left;\r\n    width: 120px;\r\n    margin: 0;\r\n    text-align: right;\r\n   }\r\n   #iiicolcontent {\r\n    margin: 0 0 0 110px;\r\n   }\r\n   .clearer{\r\n    height:1px;\r\n    overflow:hidden;\r\n    margin-top:-1px;\r\n    clear:both;\r\n   }\r\n   .logo{\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n   }\r\n   .fullWidthContainer{\r\n    width: 100%;\r\n    min-width: 200px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n   }\r\n   .pr15{\r\n       padding-right: 15px;\r\n   }\r\n   .pr40{\r\n    padding-right: 40px;\r\n}\r\n   .pt15{\r\n       padding-top: 15px;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7R0FDbEI7R0FDQTtJQUNDLG1CQUFtQjtHQUNwQjtHQUVBO0lBQ0MsVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtHQUNYO0dBRUE7SUFDQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0dBQ25CO0dBRUE7SUFDQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0dBQ2xCO0dBRUE7T0FDSSxtQkFBbUI7R0FDdkI7R0FFQTtJQUNDLG1CQUFtQjtBQUN2QjtHQUVHO09BQ0ksaUJBQWlCO0dBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaWlpY29sbGVmdCB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIH1cclxuICAgI2lpaWNvbGNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAxMTBweDtcclxuICAgfVxyXG4gICBcclxuICAgLmNsZWFyZXJ7XHJcbiAgICBoZWlnaHQ6MXB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDotMXB4O1xyXG4gICAgY2xlYXI6Ym90aDtcclxuICAgfVxyXG5cclxuICAgLmxvZ297XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICB9XHJcblxyXG4gICAuZnVsbFdpZHRoQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgIH1cclxuXHJcbiAgIC5wcjE1e1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgfVxyXG5cclxuICAgLnByNDB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4gICAucHQxNXtcclxuICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <app-header></app-header>\n\n<app-tasks></app-tasks> -->\n\n<!--<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-12 pl0 pr0\">\n            <app-header></app-header>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-1 col-md-1 col-lg-1 pl0 pr0\">\n            <app-leftnav></app-leftnav>\n        </div>\n        <div class=\"col-sm-11 col-md-11 col-lg-11 pl0 pr0 content-col\">\n            <div class=\"content\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>-->\n\n<div class=\"fullWidthContainer\">\n        <div class=\"logo\">           \n                <app-header></app-header>\n        </div>\n        <div class=\"row\">\n            <div id=\"iiicolleft\">\n                <app-leftnav></app-leftnav>\n            </div>\n            <div id=\"iiicolcontent\" class=\"fullWidthContainer pr40 pt15\">\n                    <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n    <h2>&nbsp;</h2>\n<h3>&nbsp;</h3>\n<div class=\"clearer\"></div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TaskEditorClient';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/header/header.component */ "./src/app/nav/header/header.component.ts");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _nav_leftnav_leftnav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/leftnav/leftnav.component */ "./src/app/nav/leftnav/leftnav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");
/* harmony import */ var _shared_task_model_task_model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/task-model/task-model.component */ "./src/app/shared/task-model/task-model.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");

















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faTasks"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faCogs"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["fas"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faForward"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faEdit"]);
var appRoutes = [
    { path: 'tasks', component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_14__["TaskListComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _nav_leftnav_leftnav_component__WEBPACK_IMPORTED_MODULE_12__["LeftnavComponent"],
                _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_14__["TaskListComponent"],
                _shared_task_model_task_model_component__WEBPACK_IMPORTED_MODULE_15__["TaskModelComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes, { useHash: false }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [
                _shared_task_model_task_model_component__WEBPACK_IMPORTED_MODULE_15__["TaskModelComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/task-item-create.ts":
/*!********************************************!*\
  !*** ./src/app/models/task-item-create.ts ***!
  \********************************************/
/*! exports provided: TaskItemCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskItemCreate", function() { return TaskItemCreate; });
var TaskItemCreate = /** @class */ (function () {
    function TaskItemCreate() {
    }
    return TaskItemCreate;
}());



/***/ }),

/***/ "./src/app/models/task-item-update.ts":
/*!********************************************!*\
  !*** ./src/app/models/task-item-update.ts ***!
  \********************************************/
/*! exports provided: TaskItemUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskItemUpdate", function() { return TaskItemUpdate; });
var TaskItemUpdate = /** @class */ (function () {
    function TaskItemUpdate() {
    }
    return TaskItemUpdate;
}());



/***/ }),

/***/ "./src/app/nav/header/header.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav/header/header.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-font-size{\r\n    font-size:x-large;\r\n}\r\n.logo-icon{\r\n    color: white;\r\n    padding: 10px;\r\n}\r\n.logo-font-color{\r\n    color:darkgray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uYXYvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZm9udC1zaXple1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcbn1cclxuLmxvZ28taWNvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dvLWZvbnQtY29sb3J7XHJcbiAgICBjb2xvcjpkYXJrZ3JheTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/header/header.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav/header/header.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n    <div class=\"navbar-brand\">\n        <h2>\n            <fa-icon class=\"fa-align-left logo-icon\" [icon]=\"['fas', 'cogs']\"></fa-icon>\n            <span class=\"font-weight-normal logo-font-size \">Engineering</span>\n            <span class=\"logo-font-size logo-font-color\">Challenge</span>\n        </h2>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/header/header.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav/header/header.component.ts ***!
  \************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/nav/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/nav/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/nav/leftnav/leftnav.component.css":
/*!***************************************************!*\
  !*** ./src/app/nav/leftnav/leftnav.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-nav-item{\r\n    height: 100%; \r\n    width: 80px;\r\n    color: white;\r\n    float: left;\r\n    position: absolute;\r\n    top: 73px;\r\n}\r\na{\r\ncolor: white;\r\n}\r\na:hover{\r\n    background-color: grey;\r\n    cursor: pointer;\r\n}\r\na.active{\r\n    background-color: grey;\r\n    cursor: hand\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2xlZnRuYXYvbGVmdG5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmF2L2xlZnRuYXYvbGVmdG5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQtbmF2LWl0ZW17XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzNweDtcclxufVxyXG5he1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYS5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgY3Vyc29yOiBoYW5kXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/leftnav/leftnav.component.html":
/*!****************************************************!*\
  !*** ./src/app/nav/leftnav/leftnav.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container left-nav-item bg-dark\">\n  <ul class=\"nav nav-vertical nav-vertical-dark\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link text-center\" [class.active]=\"true\" (click)=\"onclick()\">        \n        <fa-icon [icon]=\"['fas', 'tasks']\"></fa-icon>\n        Tasks       \n      </a>\n    </li>        \n  </ul>  \n</div>"

/***/ }),

/***/ "./src/app/nav/leftnav/leftnav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav/leftnav/leftnav.component.ts ***!
  \**************************************************/
/*! exports provided: LeftnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftnavComponent", function() { return LeftnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LeftnavComponent = /** @class */ (function () {
    function LeftnavComponent(_router) {
        this._router = _router;
    }
    LeftnavComponent.prototype.ngOnInit = function () {
        this._router.navigate(['/tasks']);
    };
    LeftnavComponent.prototype.onclick = function () {
        console.log("clicked tasks.");
        this._router.navigate(['/tasks']);
    };
    LeftnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leftnav',
            template: __webpack_require__(/*! ./leftnav.component.html */ "./src/app/nav/leftnav/leftnav.component.html"),
            styles: [__webpack_require__(/*! ./leftnav.component.css */ "./src/app/nav/leftnav/leftnav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LeftnavComponent);
    return LeftnavComponent;
}());



/***/ }),

/***/ "./src/app/services/taskitemservice.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/taskitemservice.service.ts ***!
  \*****************************************************/
/*! exports provided: TaskitemserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskitemserviceService", function() { return TaskitemserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");






var TaskitemserviceService = /** @class */ (function () {
    function TaskitemserviceService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:50317";
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
    }
    TaskitemserviceService.prototype.getTaskItems = function () {
        return this._http.get(this.baseUrl + '/api/tasks')
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorObservable);
    };
    TaskitemserviceService.prototype.createTaskItem = function (taskItem) {
        return this._http.post(this.baseUrl + '/api/tasks', JSON.stringify(taskItem), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorObservable);
    };
    TaskitemserviceService.prototype.updateTaskItem = function (taskItem, taskId) {
        return this._http.put(this.baseUrl + '/api/tasks/' + taskId, JSON.stringify(taskItem), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorObservable);
    };
    TaskitemserviceService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.message || error);
    };
    TaskitemserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], TaskitemserviceService);
    return TaskitemserviceService;
}());



/***/ }),

/***/ "./src/app/shared/task-model/task-model.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/task-model/task-model.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90YXNrLW1vZGVsL3Rhc2stbW9kZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/task-model/task-model.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/task-model/task-model.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Task</h4>\n        <button type=\"button\" class=\"close\" tabindex=\"-1\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <!-- Modal Body -->\n      <div class=\"modal-body\">\n\n        <form class=\"form-horizontal\" role=\"form\">\n          <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label\" for=\"inputTaskName\">Task Name</label>\n            <div class=\"col-sm-12\">\n              <input name=\"inputTaskName\" type=\"text\" class=\"form-control validate\" data-wrong=\"Please\" [ngModel]=\"selectedTaskItem.name\"\n                (ngModelChange)=\"selectedTaskItem.name=$event\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\" for=\"inputDescription\">Description</label>\n            <div class=\"col-sm-12\">\n              <textarea  name=\"inputDescription\" type=\"text\" rows=\"6\" class=\"form-control required\"  oninvalid=\"alert('Please enter task description')\" \n                [ngModel]=\"selectedTaskItem?.description\" (ngModelChange)=\"selectedTaskItem.description=$event\"></textarea>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\" for=\"inputDescription\">Status</label>\n\n            <div class=\"col-sm-5\">\n              <select class=\"form-control\" name=\"selectStatus\" [ngModel]=\"selectedTaskItem?.status\" (ngModelChange)=\"selectedTaskItem.status=$event\">\n                <option [selected]=\"selectedTaskItem.status=='Not Started'\">Not Started</option>\n                <option [selected]=\"selectedTaskItem.status=='Complete'\">Complete</option>\n                <option [selected]=\"selectedTaskItem.status=='In Progress'\">In Progress</option>\n              </select>\n            </div>\n\n          </div>\n        </form>\n      </div>\n\n      <!-- Modal Footer data-dismiss=\"modal\" -->\n      <div class=\"modal-footer\">\n        <button type=\"Submit\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"updateTaskItem(); activeModal.dismiss('Cross click')\">\n          Save\n        </button>\n      </div>\n  "

/***/ }),

/***/ "./src/app/shared/task-model/task-model.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/task-model/task-model.component.ts ***!
  \***********************************************************/
/*! exports provided: TaskModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModelComponent", function() { return TaskModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_task_item_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/task-item-update */ "./src/app/models/task-item-update.ts");
/* harmony import */ var _services_taskitemservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/taskitemservice.service */ "./src/app/services/taskitemservice.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var TaskModelComponent = /** @class */ (function () {
    function TaskModelComponent(taskService, activeModal, formBuilder) {
        this.taskService = taskService;
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.updatedTaskItems = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TaskModelComponent.prototype.ngOnInit = function () {
    };
    TaskModelComponent.prototype.updateTaskItem = function () {
        var _this = this;
        console.log(this.selectedTaskItem);
        if (this.selectedTaskItem) {
            //This is the TaskItem to be updated
            var taskItemUpdate = new _models_task_item_update__WEBPACK_IMPORTED_MODULE_2__["TaskItemUpdate"]();
            taskItemUpdate.name = this.selectedTaskItem.name;
            taskItemUpdate.description = this.selectedTaskItem.description;
            taskItemUpdate.status = this.selectedTaskItem.status;
            var selectedTaskId = this.selectedTaskItem.taskId;
            this.taskService.updateTaskItem(taskItemUpdate, selectedTaskId).subscribe(function (res) {
                console.log(res);
                _this.updatedTaskItems.emit(true);
            });
            //Unset the Selected task Item
            this.selectedTaskItem = null;
        }
    };
    TaskModelComponent.prototype.closeModal = function () {
        this.activeModal.close('Modal Closed');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskModelComponent.prototype, "selectedTaskItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskModelComponent.prototype, "updatedTaskItems", void 0);
    TaskModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-model',
            template: __webpack_require__(/*! ./task-model.component.html */ "./src/app/shared/task-model/task-model.component.html"),
            styles: [__webpack_require__(/*! ./task-model.component.css */ "./src/app/shared/task-model/task-model.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_taskitemservice_service__WEBPACK_IMPORTED_MODULE_3__["TaskitemserviceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], TaskModelComponent);
    return TaskModelComponent;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-list/task-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr{\r\n    border-top: 2px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.table th {\r\n    border-top: none;\r\n    border-bottom: none;\r\n    border-left: none;\r\n    border-right: 1px solid #dee2e6;\r\n    color: darkgrey;\r\n    text-align: left;\r\n}\r\n\r\n.table td{\r\n    border-top: none;\r\n    border-right: 1px solid #dee2e6;\r\n    text-align: left;\r\n}\r\n\r\n.left {\r\n    height:200px;\r\n    width:calc(100% - 200px);\r\n    float:left;\r\n    }\r\n\r\n.right {\r\n    width:200px;\r\n    height:200px;\r\n    float:right;   \r\n    }\r\n\r\n.no-right-border{\r\n    border-right: none !important;\r\n}\r\n\r\n.padding-right-5{\r\n    padding-right: 5px;\r\n}\r\n\r\n.on-hover-edit-item{\r\n    display:none;\r\n}\r\n\r\ntr:hover .on-hover-edit-item{\r\n    display: block;\r\n}\r\n\r\n.modal-body .form-horizontal .col-sm-2,\r\n.modal-body .form-horizontal .col-sm-12 {\r\n    width: 100%\r\n}\r\n\r\n.modal-body .form-horizontal .control-label {\r\n    text-align: left;\r\n}\r\n\r\n.modal-body .form-horizontal .col-sm-offset-2 {\r\n    margin-left: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWOztBQUVBO0lBQ0EsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1g7O0FBQ0o7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHJ7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRhYmxlIHRke1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICB3aWR0aDpjYWxjKDEwMCUgLSAyMDBweCk7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmlnaHQge1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICBmbG9hdDpyaWdodDsgICBcclxuICAgIH1cclxuLm5vLXJpZ2h0LWJvcmRlcntcclxuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkZGluZy1yaWdodC01e1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbi5vbi1ob3Zlci1lZGl0LWl0ZW17XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbnRyOmhvdmVyIC5vbi1ob3Zlci1lZGl0LWl0ZW17XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgLmZvcm0taG9yaXpvbnRhbCAuY29sLXNtLTIsXHJcbi5tb2RhbC1ib2R5IC5mb3JtLWhvcml6b250YWwgLmNvbC1zbS0xMiB7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4ubW9kYWwtYm9keSAuZm9ybS1ob3Jpem9udGFsIC5jb250cm9sLWxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm1vZGFsLWJvZHkgLmZvcm0taG9yaXpvbnRhbCAuY29sLXNtLW9mZnNldC0yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/task-list/task-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-list/task-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 pl0\">\n    <div class=\"row\">\n      <div class=\"col-6 pl25\">\n        <h4>Tasks({{taskItems?.length}})</h4>\n      </div>\n      <div class=\"col-6 text-right\">\n          <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#taskCreateModel\">\n            <fa-icon class=\"pr1\" [icon]=\"['fas', 'plus']\"></fa-icon> Add Task\n          </button>\n        </div>\n\n    </div>\n    <hr class=\"bg-grey \" />\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12 pl0 table-responsive\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th class=\"row-hover\">\n            Task ID\n          </th>\n          <th class=\"row-hover\">\n            Task Name\n          </th>\n          <th class=\"row-hover\">\n            Description\n          </th>\n          <th class=\"row-hover\">\n            Date/time created\n          </th>\n          <th class=\"row-hover no-right-border\">\n            Status\n          </th>\n        </tr>\n      </thead>\n\n      <tbody class=\"small\" class=\"on-hover-edit\">\n        <tr *ngFor=\"let taskitem of taskItems; let i = index\">\n          <td width=\"7%\">{{taskitem.taskId}}</td>\n          <td width=\"15%\">\n              {{taskitem?.name}}\n          </td>\n          <td width=\"43%\">\n                {{taskitem?.description}}\n                </td>\n          <td width=\"15%\">{{taskitem.createdDate | date: 'dd MMM yyyy HH:mm'}}</td>\n          <td class=\"no-right-border\" width=\"10%\">\n            <fa-icon *ngIf=\"taskitem.status=='In Progress'\" [icon]=\"['fas','forward']\" class=\"fa-xs text-primary padding-right-5\"></fa-icon>\n            <fa-icon *ngIf=\"taskitem.status=='Not Started'\" [icon]=\"['fas', 'circle']\" class=\"fa-xs text-secondary padding-right-5\"></fa-icon>\n            <fa-icon *ngIf=\"taskitem.status== 'Complete'\" [icon]=\"['fas', 'check']\" class=\"fa-xs text-success padding-right-5\"></fa-icon>\n            {{taskitem.status}}\n          </td>\n          <td class=\"no-right-border\" width=\"10%\">\n            <a class=\"on-hover-edit-item\" (click)=\"openTaskModel(taskitem)\" >\n              <fa-icon [icon]=\"['fas', 'edit']\" class=\"fa-xs text-primary\"></fa-icon>\n              Edit\n            </a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n   \n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"taskCreateModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"taskCreateLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"taskCreateLabel\">\n            Add Task\n          </h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span>\n            <span class=\"sr-only\">Close</span>\n          </button>\n        </div>\n  \n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n  \n          <form class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-group\">\n              <label class=\"col-sm-3 control-label\" for=\"inputTaskName\">Task Name</label>\n              <div class=\"col-sm-12\">\n                <input id=\"inputTaskNameId\" name=\"inputTaskName\" type=\"text\" class=\"form-control\" [ngModel]=\"newTaskItem?.name\"\n                  (ngModelChange)=\"newTaskItem.name=$event\" placeholder=\"e.g. 'Review Test Plan'\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-sm-2 control-label\" for=\"inputDescription\">Description</label>\n              <div class=\"col-sm-12\">\n                <textarea id=\"inputDescriptionId\" name=\"inputDescription\" type=\"text\" rows=\"6\" class=\"form-control\"\n                  [ngModel]=\"newTaskItem?.description\" (ngModelChange)=\"newTaskItem.description=$event\" placeholder=\"Enter a Description which accurately describes your task (max 1,000 chars)\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-sm-2 control-label\" for=\"inputDescription\">Status</label>\n  \n              <div class=\"col-sm-5\">\n                <select class=\"form-control\" id=\"selectStatusId\" name=\"selectStatus\" [ngModel]=\"newTaskItem?.status\"\n                  (ngModelChange)=\"newTaskItem.status=$event\">\n                  <option [selected]=\"true\" [ngValue]=\"NotStarted\">Not Started</option>\n                  <option value=\"Complete\">Complete</option>\n                  <option value=\"InProgress\">In Progress</option>\n                </select>\n              </div>\n  \n            </div>\n          </form>\n        </div>\n  \n        <!-- Modal Footer data-dismiss=\"modal\" -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"createTaskItem();\">\n            ADD\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_task_item_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/task-item-create */ "./src/app/models/task-item-create.ts");
/* harmony import */ var _services_taskitemservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/taskitemservice.service */ "./src/app/services/taskitemservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_task_model_task_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/task-model/task-model.component */ "./src/app/shared/task-model/task-model.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(taskService, modalService, formBuilder) {
        this.taskService = taskService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.newTaskItem = new _models_task_item_create__WEBPACK_IMPORTED_MODULE_2__["TaskItemCreate"]();
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.getTaskItems();
    };
    TaskListComponent.prototype.reloadTaskItems = function () {
        this.getTaskItems();
    };
    TaskListComponent.prototype.getTaskItems = function () {
        var _this = this;
        if (this.taskItemsSubscription) {
            this.taskItemsSubscription.unsubscribe();
        }
        this.taskItemsSubscription = this.taskService.getTaskItems().subscribe(function (taskItems) {
            _this.taskItems = taskItems;
        }, function (error) { return _this.errorMessage = error; });
    };
    TaskListComponent.prototype.createTaskItem = function () {
        var _this = this;
        if (this.newTaskItem.status == null)
            this.newTaskItem.status = "NotStarted";
        this.taskService.createTaskItem(this.newTaskItem).subscribe(function (taskItem) {
            console.log(taskItem);
            _this.taskItems.push(taskItem);
            _this.newTaskItem = new _models_task_item_create__WEBPACK_IMPORTED_MODULE_2__["TaskItemCreate"]();
        }, function (error) {
            _this.errorMessage = error;
            _this.newTaskItem = new _models_task_item_create__WEBPACK_IMPORTED_MODULE_2__["TaskItemCreate"]();
        });
    };
    TaskListComponent.prototype.openTaskModel = function (taskItem) {
        var modalRef = this.modalService.open(_shared_task_model_task_model_component__WEBPACK_IMPORTED_MODULE_5__["TaskModelComponent"]);
        modalRef.componentInstance.selectedTaskItem = taskItem;
        modalRef.result.then(function (result) {
            console.log(result);
        }).catch(function (error) {
            console.log(error);
        });
    };
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.css */ "./src/app/task-list/task-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_taskitemservice_service__WEBPACK_IMPORTED_MODULE_3__["TaskitemserviceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usha Vundavalli\Downloads\TaskEditorClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map