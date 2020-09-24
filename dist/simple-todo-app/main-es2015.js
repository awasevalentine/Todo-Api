(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>login works!</p>\n<div class=\"well\" *ngIf=\"authService.getUser()\">\n    <p> Logged in as <b>{{ authService.getUser() }}</b> </p>\n    <a href (click)=\"logout()\">Log out</a>\n</div>\n\n<form class=\"form-inline\" *ngIf=\"!authService.getUser()\">\n    <div class=\"form-group\">\n        <label for=\"username\">User</label>\n        <input class=\"form-control\" name=\"username\" #username>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input class=\"form-control\" type=\"password\" name=\"password\" #password>\n    </div>\n\n    <a class=\"btn btn-default\" (click)=\"login(username.value, password.value)\">Submit</a>\n</form>\n\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\"> {{ message }} </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/logout/logout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/logout/logout.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>logout works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/register/register.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/register/register.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>register works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/important/important.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/important/important.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive table-wrapper w-100 pt-5 pt-md-3\">\n  <div class=\"sub-table-wrapper pt-4 pt-md-0 w-100\">\n  <table class=\"table table-sm \">\n      <thead class=\"table-dark \">\n          <tr>\n              <th>Id</th>\n              <th>Title</th>\n              <th>Description</th>\n              <th>Start Date</th>\n              <th>Due Date</th>\n\n              <th>Status</th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let todos of todoData; let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{todos.title}}</td>\n            <td>{{todos.description}}</td>\n            <td>{{todos.startDate | date:\"dd, MM, yyyy\"}}</td>\n            <td>{{todos.dueDate | date:\"dd, MM, yyyy\"}}</td>\n        </tr>\n      </table>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-todos/new-todos.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-todos/new-todos.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid w-100\">\n  <div class=\"pt-3 pt-md-0 d-lg-flex justify-content-center d-sm-block\">\n    <h4 class=\"headers pt-5 pt-md-0 display-4\">Create Your Daily Task</h4>\n  </div>\n    <div class=\"align-items-center pt-3 pb-2 mb-3 border-bottom input-wrapper d-sm-flex justify-content-center w-100\">\n    <form #todoForm=\"ngForm\" method=\"POST\" action=\"/create\" (ngSubmit)=\"newTodosForm()\" id=\"newTodos\" name=\"newTodos\" class=\"w-100\">\n\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label class=\"field\">Title</mat-label>\n                    <input type=\"text\" matInput name=\"todoTitle\" id=\"todoTitle\" required=\"\" [(ngModel)]=\"todoDetails.title\">\n                </mat-form-field>\n\n\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label class=\"field\">Description</mat-label>\n                    <textarea matInput rows=\"3\" name=\"todoDescription\" id=\"todoDescription\" required=\"\" [(ngModel)]=\"todoDetails.description\"></textarea>\n                </mat-form-field>\n\n            <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6 col-lg-6 d-sm-block mt-4\">\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>Start Date</mat-label>\n                    <input matInput [min]=\"todoDetails.startDate\" [matDatepicker]=\"picker\" name=\"todoStartDate\" id=\"todoStartDate\" required=\"\" [(ngModel)]=\"todoDetails.startDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n\n            </div>\n            <div class=\"col-12 col-md-6 col-lg-6  d-sm-block mt-4\">\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>Due Date</mat-label>\n                    <input matInput [min]=\"todoDetails.dueDate\"  [matDatepicker]=\"todoDueDate\" name=\"todoDueDate\" id=\"todoDueDate\" required=\"\" [(ngModel)]=\"todoDetails.dueDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"todoDueDate\"></mat-datepicker-toggle>\n                    <mat-datepicker #todoDueDate></mat-datepicker>\n                </mat-form-field>\n            </div>\n          </div>\n        <div class=\"btn-wrapper mt-5 d-flex justify-content-left\">\n            <button type=\"submit\" class=\"btn-lg btn-dark\" [disabled]=\"!todoForm.valid\">Create</button>\n          </div>\n          </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-layout/page-layout.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-layout/page-layout.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <nav class=\"navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow\">\n  <a [routerLink]=\"['./']\" class=\"navbar-brand col-md-3 col-lg-2 mr-0 px-3\">To-Do</a>\n  <button class=\"navbar-toggler position-absolute d-md-none collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidebarMenu\" aria-controls=\"sidebarMenu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <input class=\"form-control form-control-white w-30\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n  <ul class=\"navbar-nav px-3\">\n    <li class=\"nav-item text-nowrap\">\n      <a class=\"nav-link\" href=\"#\">Sign out</a>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"container-fluid\" style=\"margin-top: 60px;\">\n  <div class=\"row\">\n    <nav id=\"sidebarMenu\" class=\"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse\">\n      <div class=\"sidebar-sticky pt-5\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/task']\">\n              <i class=\"fa fa-home mr-1\" aria-hidden=\"true\"></i>Task </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/important']\">\n              <i class=\"fa fa-star mr-1\" aria-hidden=\"true\"></i>Important\n              <span class=\"badge-round float-right\" *ngIf=\"importantTaskCount\" >{{importantTaskCount}}</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/update']\">\n              <i class=\"fa fa-calendar mr-1\" aria-hidden=\"true\"></i>Planned\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/login']\">\n              <i class=\"fa fa-wrench mr-1\" aria-hidden=\"true\"></i>Settings\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-md-4\" style=\"margin-top: 10px;\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todo-update/todo-update.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todo-update/todo-update.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todos/todos.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todos/todos.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"todos-wrapper\">\n  <div class=\"createbtn-wrapper pt-3 pt-md-0\">\n    <div class=\"createbtn-wrapper pt-3 pt-md-0\">\n        <button class=\"btn-primary btn-sm  pt-3 pt-md-0\" (click)=\"createtodos()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Todo </button>\n    </div>\n  </div>\n    <div class=\"table-responsive table-wrapper w-100\">\n        <table class=\"table table-sm \">\n            <thead class=\"table-dark \">\n                <tr>\n                    <th>Id</th>\n                    <th>Title</th>\n                    <th>Description</th>\n                    <th>Start Date</th>\n                    <th>Due Date</th>\n                    <th>Manage</th>\n                    <th>Status</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let todo of todoData; let i=index\">\n                    <td><button type=\"button\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Set todo as important\"\n                         class=\"btn align-center btn mr-3\" [ngClass]=\"{'is-important': todo.important}\" >\n                      <i class=\"fa fa-star ml-0 align-center\" aria-hidden=\"true\" (click)=\"onSelect(todo)\"></i></button>{{i+1}}</td>\n                    <td>{{todo.title}}</td>\n                    <td>{{todo.description}}</td>\n                    <td>{{todo.startDate | date: \"dd, MM, yyyy\"}}</td>\n                    <td>{{todo.dueDate | date:\"dd, MM, yyyy\"}}</td>\n                    <td><button data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit todo\"\n                        class=\"btn\" (click)=\"EditTodo(todo)\">\n                      <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                    </button>\n                        <button data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete todo\"\n                          class=\"btn\" (click)=\"deleteTodo(todo)\">\n                          <i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"color: red;\"></i>\n                        </button>\n                    </td>\n\n                    <div>\n                    <td *ngIf=\"todo.dueDate == today\">{{'completed'}}</td>\n                  </div>\n                </tr>\n\n            </tbody>\n        </table>\n    </div>\n    </div>\n\n<!--modal for update -->\n\n    <div>\n      <ng-template #editTemplateModal>\n\n      <div class=\"container-fluid w-100\">\n        <div class=\"pl-5 pt-5 pt-md-0 d-lg-flex justify-content-center d-sm-block\">\n        <h6 mat-dialog-title class=\"headers pt-5 pt-md-0 display-5\">Create Your Daily Task</h6>\n        <span class=\"close d-inline-block align-top\" (click)=\"editTodoModal.close()\">&times;</span>\n        </div>\n          <div mat-mat-dialog-content class=\"align-items-center pt-3 pb-2 mb-3 border-bottom input-wrapper d-sm-flex justify-content-center w-100\">\n          <form #todoForm=\"ngForm\" method=\"POST\" action=\"/create\" id=\"newTodos\" name=\"newTodos\" class=\"w-100\">\n\n                      <mat-form-field class=\"example-full-width\">\n                          <mat-label class=\"field\">Title</mat-label>\n                          <input type=\"text\" matInput name=\"todoTitle\" id=\"todoTitle\" required=\"\" [(ngModel)]=\"todoDetails.title\">\n                      </mat-form-field>\n\n\n                      <mat-form-field class=\"example-full-width\">\n                          <mat-label class=\"field\">Description</mat-label>\n                          <textarea matInput class=\"mt-3\" rows=\"3\" name=\"todoDescription\" id=\"todoDescription\" required=\"\" [(ngModel)]=\"todoDetails.description\"></textarea>\n                      </mat-form-field>\n\n                  <div class=\"row\">\n                  <div class=\"col-sm-12 col-md-6 col-lg-6 d-sm-block mt-4\">\n                      <mat-form-field class=\"example-full-width\">\n                          <mat-label>Start Date</mat-label>\n                          <input matInput [min]=\"todoDetails.startDate\" [matDatepicker]=\"picker\" name=\"todoStartDate\" id=\"todoStartDate\" required=\"\" [(ngModel)]=\"todoDetails.startDate\">\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                          <mat-datepicker #picker></mat-datepicker>\n                      </mat-form-field>\n\n                  </div>\n                  <div class=\"col-12 col-md-6 col-lg-6  d-sm-block mt-4\">\n                      <mat-form-field class=\"example-full-width\">\n                          <mat-label>Due Date</mat-label>\n                          <input matInput [min]=\"todoDetails.dueDate\"  [matDatepicker]=\"todoDueDate\" name=\"todoDueDate\" id=\"todoDueDate\" required=\"\" [(ngModel)]=\"todoDetails.dueDate\">\n                          <mat-datepicker-toggle matSuffix [for]=\"todoDueDate\"></mat-datepicker-toggle>\n                          <mat-datepicker #todoDueDate></mat-datepicker>\n                      </mat-form-field>\n                  </div>\n                </div>\n          </form>\n          </div>\n                <div mat-dialog-actions>\n              <div class=\"btn-wrapper mt-sm-3 d-flex justify-content-left\">\n                  <button mat-raised-button color=\"primary\" type=\"submit\" class=\"btn-lg \" (click)=\"saveUpdatesToTodo(todoDetails)\" [disabled]=\"!todoForm.valid\">Save changes</button>\n                </div>\n              </div>\n\n      </div>\n      </ng-template>\n      </div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-layout/page-layout.component */ "./src/app/pages/page-layout/page-layout.component.ts");
/* harmony import */ var _pages_todos_todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/todos/todos.component */ "./src/app/pages/todos/todos.component.ts");
/* harmony import */ var _pages_new_todos_new_todos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/new-todos/new-todos.component */ "./src/app/pages/new-todos/new-todos.component.ts");
/* harmony import */ var _pages_important_important_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/important/important.component */ "./src/app/pages/important/important.component.ts");
/* harmony import */ var _pages_todo_update_todo_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/todo-update/todo-update.component */ "./src/app/pages/todo-update/todo-update.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_Guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/Guard/logged-in.guard */ "./src/app/authentication/Guard/logged-in.guard.ts");











const routes = [
    {
        path: '', component: _pages_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_4__["PageLayoutComponent"]
    },
    {
        path: 'dashboard', component: _pages_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_4__["PageLayoutComponent"],
        children: [
            {
                path: '', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            },
            {
                path: 'task', component: _pages_todos_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"], canActivate: [_authentication_Guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_10__["LoggedInGuard"]]
            },
            {
                path: 'new-todos', component: _pages_new_todos_new_todos_component__WEBPACK_IMPORTED_MODULE_6__["NewTodosComponent"]
            },
            {
                path: 'important', component: _pages_important_important_component__WEBPACK_IMPORTED_MODULE_7__["ImportantComponent"]
            },
            {
                path: 'update', component: _pages_todo_update_todo_update_component__WEBPACK_IMPORTED_MODULE_8__["TodoUpdateComponent"]
            },
            {
                path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\r\n    border: solid rgb(0, 110, 255);\r\n    padding-bottom: 1em;\r\n    background: rgb(0, 110, 255);\r\n    align-content: center;\r\n    align-content: space-between;\r\n    justify-content: flex-start;\r\n    flex: 1 1 0px;\r\n    width: cal(100% - 96px);\r\n}\r\n\r\n.sbar {\r\n    width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJvcmRlcjogc29saWQgcmdiKDAsIDExMCwgMjU1KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTEwLCAyNTUpO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXg6IDEgMSAwcHg7XHJcbiAgICB3aWR0aDogY2FsKDEwMCUgLSA5NnB4KTtcclxufVxyXG5cclxuLnNiYXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'simple-todo-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_appmaterial_appmaterial_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/appmaterial/appmaterial.module */ "./src/app/modules/appmaterial/appmaterial.module.ts");
/* harmony import */ var _pages_new_todos_new_todos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/new-todos/new-todos.component */ "./src/app/pages/new-todos/new-todos.component.ts");
/* harmony import */ var _pages_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-layout/page-layout.component */ "./src/app/pages/page-layout/page-layout.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_todos_todos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/todos/todos.component */ "./src/app/pages/todos/todos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cores/services/todos-data.service */ "./src/app/cores/services/todos-data.service.ts");
/* harmony import */ var _pages_important_important_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/important/important.component */ "./src/app/pages/important/important.component.ts");
/* harmony import */ var _pages_todo_update_todo_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/todo-update/todo-update.component */ "./src/app/pages/todo-update/todo-update.component.ts");
/* harmony import */ var _cores_myhover_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cores/myhover.directive */ "./src/app/cores/myhover.directive.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authentication/logout/logout.component */ "./src/app/authentication/logout/logout.component.ts");
/* harmony import */ var _authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./authentication/services/auth.service */ "./src/app/authentication/services/auth.service.ts");
/* harmony import */ var _authentication_Guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./authentication/Guard/logged-in.guard */ "./src/app/authentication/Guard/logged-in.guard.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_new_todos_new_todos_component__WEBPACK_IMPORTED_MODULE_7__["NewTodosComponent"],
            _pages_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_8__["PageLayoutComponent"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _pages_todos_todos_component__WEBPACK_IMPORTED_MODULE_10__["TodosComponent"],
            _pages_important_important_component__WEBPACK_IMPORTED_MODULE_14__["ImportantComponent"],
            _pages_todo_update_todo_update_component__WEBPACK_IMPORTED_MODULE_15__["TodoUpdateComponent"],
            _cores_myhover_directive__WEBPACK_IMPORTED_MODULE_16__["MyhoverDirective"],
            _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
            _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
            _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _modules_appmaterial_appmaterial_module__WEBPACK_IMPORTED_MODULE_6__["AppmaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_22__["CalendarModule"].forRoot({ provide: angular_calendar__WEBPACK_IMPORTED_MODULE_22__["DateAdapter"], useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_23__["adapterFactory"] })
        ],
        providers: [_cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_13__["TodosDataService"], _authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _authentication_Guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedInGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication/Guard/logged-in.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/Guard/logged-in.guard.ts ***!
  \*********************************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/authentication/services/auth.service.ts");



let LoggedInGuard = class LoggedInGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        const isLoggedIn = this.authService.isLoggedIn();
        console.log('canActivate', isLoggedIn);
        return isLoggedIn;
    }
};
LoggedInGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoggedInGuard);



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/authentication/services/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.message = '';
    }
    login(username, password) {
        this.message = '';
        if (!this.authService.login(username, password)) {
            this.message = 'Incorrect credentials.';
            setTimeout(function () {
                this.message = '';
            }.bind(this), 2500);
        }
        return false;
    }
    logout() {
        this.authService.logout();
        return false;
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/authentication/logout/logout.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/authentication/logout/logout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.ts ***!
  \***********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoutComponent = class LogoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/authentication/logout/logout.component.css")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/authentication/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/authentication/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/authentication/services/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/services/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() { }
    login(user, password) {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    }
    logout() {
        localStorage.removeItem('username');
    }
    getUser() {
        return localStorage.getItem('username');
    }
    isLoggedIn() {
        return this.getUser() !== null;
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/cores/myhover.directive.ts":
/*!********************************************!*\
  !*** ./src/app/cores/myhover.directive.ts ***!
  \********************************************/
/*! exports provided: MyhoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyhoverDirective", function() { return MyhoverDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyhoverDirective = class MyhoverDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onMouseOver() {
        const part = this.el.nativeElement.querySelector('.examples');
        this.renderer.setElementStyle(part, 'display', 'block');
    }
};
MyhoverDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseover')
], MyhoverDirective.prototype, "onMouseOver", null);
MyhoverDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appMyhover]'
    })
], MyhoverDirective);



/***/ }),

/***/ "./src/app/cores/services/todos-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/cores/services/todos-data.service.ts ***!
  \******************************************************/
/*! exports provided: TodosDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosDataService", function() { return TodosDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TodosDataService = class TodosDataService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3300/todo/api';
        //private headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.myImportant = [];
    }
    /*myregister(myvalue){
      return this.http.post(`http://localhost:3000/user/register`, myvalue);
    }*/
    getTodo() {
        return this.http.get(`${this.apiUrl}/getTodos` /*,{ headers: this.headers}*/);
    }
    getImportantTodos() {
        return new Promise((resolve, reject) => {
            this.getTodo().subscribe((todos) => {
                // console.log(`retured todos on get important function`, todos);
                const importantTodos = todos.filter(td => td.important);
                resolve(importantTodos);
            }, (error) => {
                reject(error);
            });
        });
    }
    getTodoById(id) {
        return this.http.get(`${this.apiUrl}/getTodo/${id}` /*,{ headers: this.headers}*/);
    }
    deleteTodo(id) {
        return this.http.delete(`${this.apiUrl}/deleteTodo/${id}` /*, { headers: this.headers}*/);
    }
    updateTodo(id, todo) {
        return this.http.put(`${this.apiUrl}/updateTodo/${id}`, todo /*, {headers: this.headers}*/);
    }
    postTodo(todo) {
        return this.http.post(`${this.apiUrl}/createTodo`, todo /*, {headers: this.headers}*/);
    }
    setImportantTodo(todo) {
        this.updateTodo(todo._id, todo).subscribe((res) => {
        }, (error) => {
            console.log('error occured while setting todo status to important');
        });
    }
    /*getTodoItem(id: string): TodoItem {
      let todo = this.myImportant.find(td => td._id == id);
      return todo;
    }*/
    removeFromImportantTodos(id, todo) {
        this.updateTodo(todo._id, todo).subscribe((res) => {
        }, (error) => {
            console.log('error occured while setting todo status to important');
        });
        return true;
    }
};
TodosDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TodosDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodosDataService);



/***/ }),

/***/ "./src/app/modules/appmaterial/appmaterial.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/appmaterial/appmaterial.module.ts ***!
  \***********************************************************/
/*! exports provided: AppmaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppmaterialModule", function() { return AppmaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");





























let AppmaterialModule = class AppmaterialModule {
};
AppmaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"]
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"]
        ],
        providers: [
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: {
                    verticalPosition: 'top', horizontalPosition: 'center', duration: 25000
                }
            },
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { closeOnNavigation: true } }
        ]
    })
], AppmaterialModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/important/important.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/important/important.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-wrapper{\n  font-size: smaller;\n  font-family: 'Roboto' Georgia, 'Times New Roman', Times, serif;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW1wb3J0YW50L2ltcG9ydGFudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltcG9ydGFudC9pbXBvcnRhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS13cmFwcGVye1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/important/important.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/important/important.component.ts ***!
  \********************************************************/
/*! exports provided: ImportantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportantComponent", function() { return ImportantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cores/services/todos-data.service */ "./src/app/cores/services/todos-data.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");




let ImportantComponent = class ImportantComponent {
    constructor(todoDataService, _snackbar) {
        this.todoDataService = todoDataService;
        this._snackbar = _snackbar;
        this.todoData = [];
    }
    ngOnInit() {
        this.todoDataService.getImportantTodos().then((response) => {
            this.todoData = response;
        }, (errors) => {
            this._snackbar.open('Failed to fetch important todos', 'Ok', { verticalPosition: 'bottom', horizontalPosition: 'right' });
        });
    }
};
ImportantComponent.ctorParameters = () => [
    { type: src_app_cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_2__["TodosDataService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
ImportantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-important',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./important.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/important/important.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./important.component.css */ "./src/app/pages/important/important.component.css")).default]
    })
], ImportantComponent);



/***/ }),

/***/ "./src/app/pages/new-todos/new-todos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/new-todos/new-todos.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n\r\n  height: 100%;\r\n}\r\n.input-wrapper {\r\n    font-style: normal;\r\n}\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n.headers {\r\n\r\n    font-family: 'Roboto';\r\n\r\n}\r\n.btn-wrapper{\r\n\r\n}\r\n.btn-lg{\r\n  width: 150px;\r\n  font-size: -webkit-x-large;\r\n\r\n}\r\n.me{\r\n  width: 70%\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LXRvZG9zL25ldy10b2Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQVk7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTs7SUFFSSxxQkFBcUI7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7O0FBRTVCO0FBQ0E7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3LXRvZG9zL25ldy10b2Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlcnMge1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuXHJcbn1cclxuLmJ0bi13cmFwcGVye1xyXG5cclxufVxyXG4uYnRuLWxne1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBmb250LXNpemU6IC13ZWJraXQteC1sYXJnZTtcclxuXHJcbn1cclxuLm1le1xyXG4gIHdpZHRoOiA3MCVcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/new-todos/new-todos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/new-todos/new-todos.component.ts ***!
  \********************************************************/
/*! exports provided: NewTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTodosComponent", function() { return NewTodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cores/services/todos-data.service */ "./src/app/cores/services/todos-data.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let NewTodosComponent = class NewTodosComponent {
    constructor(route, todosDataService, _snackbar, http) {
        this.route = route;
        this.todosDataService = todosDataService;
        this._snackbar = _snackbar;
        this.http = http;
        // object for form control
        this.todoDetails = {
            title: '',
            description: '',
            startDate: new Date(),
            dueDate: new Date(),
        };
    }
    ngOnInit() {
    }
    // method for the form submission
    newTodosForm() {
        this.todosDataService.postTodo(this.todoDetails).subscribe();
        this._snackbar.open('New todo saved ', 'Ok', { horizontalPosition: 'right', verticalPosition: 'bottom' });
        return this.route.navigate(['dashboard/task']);
    }
};
NewTodosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_3__["TodosDataService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
NewTodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-todos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-todos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-todos/new-todos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-todos.component.css */ "./src/app/pages/new-todos/new-todos.component.css")).default]
    })
], NewTodosComponent);



/***/ }),

/***/ "./src/app/pages/page-layout/page-layout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-layout/page-layout.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\na{\r\n  color: black;\r\n}\r\n\r\na:active, :focus{\r\n  color: blue !important;\r\n}\r\n\r\na:hover{\r\n  color: green !important;\r\n}\r\n\r\nbody {\r\n  font-size: .875rem;\r\n}\r\n\r\n/*\r\n * Sidebar\r\n */\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 100; /* Behind the navbar */\r\n  padding: 48px 0 0; /* Height of navbar */\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n  .sidebar {\r\n    top: 5rem;\r\n  }\r\n}\r\n\r\n.sidebar-sticky {\r\n  position: relative;\r\n  top: 0;\r\n  height: calc(100vh - 48px);\r\n  padding-top: .5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n}\r\n\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n  .sidebar-sticky {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n  }\r\n}\r\n\r\n.sidebar .nav-link {\r\n  font-weight: 500;\r\n  color: #333;\r\n}\r\n\r\n.sidebar .nav-link .feather {\r\n  margin-right: 4px;\r\n  color: #999;\r\n}\r\n\r\n.sidebar .nav-link.active {\r\n  color: #007bff;\r\n}\r\n\r\n.sidebar .nav-link:hover .feather,\r\n.sidebar .nav-link.active .feather {\r\n  color: inherit;\r\n}\r\n\r\n.sidebar-heading {\r\n  font-size: .75rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/*\r\n * Navbar\r\n */\r\n\r\n.navbar-brand {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: 1rem;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n}\r\n\r\n.navbar .navbar-toggler {\r\n  top: .25rem;\r\n  right: 1rem;\r\n}\r\n\r\n.navbar .form-control {\r\n  padding: .75rem 1rem;\r\n  border-width: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.form-control-dark {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, .1);\r\n  border-color: rgba(255, 255, 255, .1);\r\n}\r\n\r\n.form-control-dark:focus {\r\n  border-color: transparent;\r\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWSxFQUFFLHNCQUFzQjtFQUNwQyxpQkFBaUIsRUFBRSxxQkFBcUI7RUFDeEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUUsNkRBQTZEO0FBQ2pGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5he1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYTphY3RpdmUsIDpmb2N1c3tcclxuICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbn1cclxuXHJcbi8qXHJcbiAqIFNpZGViYXJcclxuICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXHJcbiAgcGFkZGluZzogNDhweCAwIDA7IC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cclxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLnNpZGViYXIge1xyXG4gICAgdG9wOiA1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXItc3RpY2t5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cclxufVxyXG5cclxuQHN1cHBvcnRzICgocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkpIHtcclxuICAuc2lkZWJhci1zdGlja3kge1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcclxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qXHJcbiAqIE5hdmJhclxyXG4gKi9cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIHBhZGRpbmctdG9wOiAuNzVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIge1xyXG4gIHRvcDogLjI1cmVtO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWRhcmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/page-layout/page-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/page-layout/page-layout.component.ts ***!
  \************************************************************/
/*! exports provided: PageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function() { return PageLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cores/services/todos-data.service */ "./src/app/cores/services/todos-data.service.ts");



let PageLayoutComponent = class PageLayoutComponent {
    constructor(_todoService) {
        this._todoService = _todoService;
        this.events = [];
    }
    ngOnInit() {
        setInterval(() => {
            this.mylogic();
        }, 1000);
    }
    mylogic() {
        this._todoService.getImportantTodos().then((importantTodos) => {
            this.importantTaskCount = importantTodos.length;
        });
        // this.importantTaskCount = this._todoService.getmyImportant().length;
    }
};
PageLayoutComponent.ctorParameters = () => [
    { type: src_app_cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_2__["TodosDataService"] }
];
PageLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-layout/page-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-layout.component.css */ "./src/app/pages/page-layout/page-layout.component.css")).default]
    })
], PageLayoutComponent);



/***/ }),

/***/ "./src/app/pages/todo-update/todo-update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/todo-update/todo-update.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-wrapper {\r\n    width: 100%;\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-weight: inherit;\r\n    align-items: center;\r\n}\r\n\r\n.example-full-width {\r\n    width: 50vw;\r\n    padding-left: 3.5em;\r\n}\r\n\r\n.headers {\r\n    -webkit-text-emphasis: bold;\r\n            text-emphasis: bold;\r\n    text-align: center;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    padding-top: .5em;\r\n    background-color: darkgrey;\r\n}\r\n\r\n.field {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Helvetica,Helvetica,Arial,sans-serif;\r\n  font-size: 1.8rem;\r\n  line-height: 28px;\r\n}\r\n\r\n.nolist {\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-wrapper {\r\nmax-width: 295px;\r\nmargin-bottom: 50px\r\n}\r\n\r\n@media (max-width:991px) {\r\n.sidebar-wrapper {\r\n  width: 100%;\r\n  max-width: 992px;\r\n  margin-bottom: 0\r\n}\r\n}\r\n\r\n.sidebar-wrapper>ul li {\r\nfont-size: 1.8rem;\r\nfont-weight: 500\r\n}\r\n\r\n.sidebar-wrapper>ul>li {\r\nborder-top: 1px solid #e9e7e7;\r\nfont-weight: 500\r\n}\r\n\r\n.sidebar-wrapper nav>ul {\r\nfont-family: Montserrat, sans-serif;\r\nmargin-bottom: 0\r\n}\r\n\r\n.sidebar-wrapper nav>ul li {\r\nfont-size: 1.8rem;\r\nfont-weight: 500\r\n}\r\n\r\n.sidebar-wrapper nav>ul>li {\r\nborder-top: 1px solid #e9e7e7;\r\nfont-weight: 500\r\n}\r\n\r\n.sidebar-wrapper nav>ul>li:first-child {\r\nborder: 0\r\n}\r\n\r\n.sidebar-wrapper nav>ul>li>a {\r\ncolor: #1f1a17;\r\ndisplay: block;\r\npadding: 20px 20px\r\n}\r\n\r\n.sidebar-wrapper nav>ul>li>a:hover {\r\ncolor: #fff;\r\nbackground: #ed145b;\r\n}\r\n\r\nselect#sub-menu {\r\n  width: 100%;\r\n  height: 55px;\r\n  color: #000;\r\n  margin: 15px 0;\r\n  padding: 13px;\r\n  border: 1px solid #333;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  -moz-appearance: none;\r\n  text-overflow: '';\r\n  background: url(https://raw.githubusercontent.com/solodev/mobile-sidebar-navigation/master/drop-arrow.png) right no-repeat;\r\n}\r\n\r\nselect#sub-menu, select#sub-menu>option {\r\n  font-family: Helvetica,Helvetica,Arial,sans-serif;\r\n  font-size: 1.8rem;\r\n  line-height: 28px;\r\n}\r\n\r\nselect#sub-menu, select#sub-menu>option {\r\n  font-family: Helvetica,Helvetica,Arial,sans-serif;\r\n  font-size: 1.8rem;\r\n  line-height: 28px;\r\n}\r\n\r\n.sidebar {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 200px;\r\n  background-color: #f1f1f1;\r\n  position: fixed;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n.sidebar a {\r\n  display: block;\r\n  color: black;\r\n  padding: 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n.sidebar a:hover:not(.active) {\r\n  background-color: #555;\r\n  color: white;\r\n}\r\n\r\ndiv.content {\r\n  margin-left: 200px;\r\n  padding: 1px 16px;\r\n  height: 1000px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .sidebar {\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n  }\r\n  .sidebar a {float: left;}\r\n  div.content {margin-left: 0;}\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n  .sidebar a {\r\n    text-align: center;\r\n    float: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9kby11cGRhdGUvdG9kby11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFDQTtFQUNFLGlEQUFpRDtFQUNqRCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBQ0E7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEI7QUFDRjtBQUNBOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkO0FBQ0E7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsbUJBQW1CO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLDBIQUEwSDtBQUM1SDs7QUFDQTtFQUNFLGlEQUFpRDtFQUNqRCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaURBQWlEO0VBQ2pELGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBT0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0EsWUFBWSxXQUFXLENBQUM7RUFDeEIsYUFBYSxjQUFjLENBQUM7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvZG8tdXBkYXRlL3RvZG8tdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIHBhZGRpbmctbGVmdDogMy41ZW07XHJcbn1cclxuXHJcbi5oZWFkZXJzIHtcclxuICAgIHRleHQtZW1waGFzaXM6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmctdG9wOiAuNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcbi5ub2xpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNpZGViYXItd3JhcHBlciB7XHJcbm1heC13aWR0aDogMjk1cHg7XHJcbm1hcmdpbi1ib3R0b206IDUwcHhcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xyXG4uc2lkZWJhci13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDk5MnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG59XHJcbi5zaWRlYmFyLXdyYXBwZXI+dWwgbGkge1xyXG5mb250LXNpemU6IDEuOHJlbTtcclxuZm9udC13ZWlnaHQ6IDUwMFxyXG59XHJcbi5zaWRlYmFyLXdyYXBwZXI+dWw+bGkge1xyXG5ib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTdlNztcclxuZm9udC13ZWlnaHQ6IDUwMFxyXG59XHJcbi5zaWRlYmFyLXdyYXBwZXIgbmF2PnVsIHtcclxuZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XHJcbm1hcmdpbi1ib3R0b206IDBcclxufVxyXG4uc2lkZWJhci13cmFwcGVyIG5hdj51bCBsaSB7XHJcbmZvbnQtc2l6ZTogMS44cmVtO1xyXG5mb250LXdlaWdodDogNTAwXHJcbn1cclxuLnNpZGViYXItd3JhcHBlciBuYXY+dWw+bGkge1xyXG5ib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTdlNztcclxuZm9udC13ZWlnaHQ6IDUwMFxyXG59XHJcbi5zaWRlYmFyLXdyYXBwZXIgbmF2PnVsPmxpOmZpcnN0LWNoaWxkIHtcclxuYm9yZGVyOiAwXHJcbn1cclxuLnNpZGViYXItd3JhcHBlciBuYXY+dWw+bGk+YSB7XHJcbmNvbG9yOiAjMWYxYTE3O1xyXG5kaXNwbGF5OiBibG9jaztcclxucGFkZGluZzogMjBweCAyMHB4XHJcbn1cclxuLnNpZGViYXItd3JhcHBlciBuYXY+dWw+bGk+YTpob3ZlciB7XHJcbmNvbG9yOiAjZmZmO1xyXG5iYWNrZ3JvdW5kOiAjZWQxNDViO1xyXG59XHJcblxyXG5zZWxlY3Qjc3ViLW1lbnUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW46IDE1cHggMDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHRleHQtb3ZlcmZsb3c6ICcnO1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc29sb2Rldi9tb2JpbGUtc2lkZWJhci1uYXZpZ2F0aW9uL21hc3Rlci9kcm9wLWFycm93LnBuZykgcmlnaHQgbm8tcmVwZWF0O1xyXG59XHJcbnNlbGVjdCNzdWItbWVudSwgc2VsZWN0I3N1Yi1tZW51Pm9wdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5zZWxlY3Qjc3ViLW1lbnUsIHNlbGVjdCNzdWItbWVudT5vcHRpb24ge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLnNpZGViYXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zaWRlYmFyIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNpZGViYXIgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2lkZWJhciBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmRpdi5jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgcGFkZGluZzogMXB4IDE2cHg7XHJcbiAgaGVpZ2h0OiAxMDAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLnNpZGViYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIGEge2Zsb2F0OiBsZWZ0O31cclxuICBkaXYuY29udGVudCB7bWFyZ2luLWxlZnQ6IDA7fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5zaWRlYmFyIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/todo-update/todo-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/todo-update/todo-update.component.ts ***!
  \************************************************************/
/*! exports provided: TodoUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoUpdateComponent", function() { return TodoUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodoUpdateComponent = class TodoUpdateComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
TodoUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todo-update/todo-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-update.component.css */ "./src/app/pages/todo-update/todo-update.component.css")).default]
    })
], TodoUpdateComponent);



/***/ }),

/***/ "./src/app/pages/todos/todos.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/todos/todos.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todos-wrapper {\r\n  padding-top: 2em;\r\n  box-sizing: border-box;\r\n\r\n\r\n}\r\n\r\n\r\n.todos-table {}\r\n\r\n\r\n.createbtn-wrapper {}\r\n\r\n\r\n.table-wrapper{\r\n  font-size: smaller;\r\n  font-family:'Roboto', Georgia, 'Times New Roman', Times, serif;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n\r\n.btn{\r\n  width: 20px;\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n\r\n}\r\n\r\n\r\n.btn:hover{\r\n  color: green;\r\n}\r\n\r\n\r\n.btn:focus{\r\n  color: red;\r\n  outline: none;\r\n}\r\n\r\n\r\n.is-important {\r\n  color: green;\r\n}\r\n\r\n\r\n.close{\r\n  padding-left: 8em;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n.container-fluid{\r\n\r\n  height: 100%;\r\n}\r\n\r\n\r\n.input-wrapper {\r\n    font-style: normal;\r\n}\r\n\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.headers {\r\n\r\n    font-family: 'Roboto';\r\n\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7OztBQUd4Qjs7O0FBR0EsY0FBYzs7O0FBRWQsb0JBQW9COzs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7O0FBRVo7OztBQUNBO0VBQ0UsWUFBWTtBQUNkOzs7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7OztBQUVBOztFQUVFLFlBQVk7QUFDZDs7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFFQTs7SUFFSSxxQkFBcUI7O0FBRXpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2Rvcy13cmFwcGVyIHtcclxuICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi50b2Rvcy10YWJsZSB7fVxyXG5cclxuLmNyZWF0ZWJ0bi13cmFwcGVyIHt9XHJcblxyXG4udGFibGUtd3JhcHBlcntcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgZm9udC1mYW1pbHk6J1JvYm90bycsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5idG57XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuLmJ0bjpob3ZlcntcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmJ0bjpmb2N1c3tcclxuICBjb2xvcjogcmVkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5pcy1pbXBvcnRhbnQge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG4uY2xvc2V7XHJcbiAgcGFkZGluZy1sZWZ0OiA4ZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlcnMge1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/todos/todos.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/todos/todos.component.ts ***!
  \************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cores/services/todos-data.service */ "./src/app/cores/services/todos-data.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");







let TodosComponent = class TodosComponent {
    constructor(route, http, todoDataService, _dialog, _snackbar) {
        this.route = route;
        this.http = http;
        this.todoDataService = todoDataService;
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.todoData = [];
        this.status = true;
        this.today = new Date();
        // form control object
        this.todoDetails = {
            title: '',
            description: '',
            startDate: new Date(),
            dueDate: new Date(),
        };
    }
    ngOnInit() {
        this.getTodos();
    }
    // method for getting all todos from Db
    getTodos() {
        return this.todoDataService.getTodo().subscribe(data => {
            this.todoData = data;
        });
    }
    // method for selecting important
    onSelect(todo) {
        // const todoRecord = this.todoDataService.getTodoItem(todo._id);
        if (todo.important) {
            todo.important = false;
            this.todoDataService.removeFromImportantTodos(todo._id, todo);
        }
        else {
            todo.important = true;
            this.todoDataService.setImportantTodo(todo);
        }
    }
    // method for the todo task creation
    createtodos() {
        return this.route.navigate(['/dashboard/new-todos']);
    }
    // method for edit button
    EditTodo(todos) {
        this.todoDetails = todos;
        this.showEditTodoDialog();
    }
    // method for delete todo button
    deleteTodo(todos) {
        this.todoDataService.deleteTodo(todos._id).subscribe(data => {
            this.todoData.splice(this.todoData.indexOf(todos), 1);
        });
    }
    /* myfunc(){
       var date1 = this.todoDetails.startDate;
       var date2 = todo;
       var today = new Date();
       if( todo == today) {
         console.log('yes');
         this.status = true;
       } else {
         console.log('no');
         this.status = false;
       }
   
   
       var amountInDays;
       const date1 = new Date(this.luxForm.get('checkInDate').value);
       const date2 = new Date(this.luxForm.get('checkOutDate').value);
       const daysInMiliseconds = 1000 * 60 * 60 * 24;
       const differenceInTime = date2.getTime() - date1.getTime();
       const daysDifference = differenceInTime / daysInMiliseconds;
       amountInDays = daysDifference;
       console.log(`the differnce in date is: `, amountInDays);
   
     }*/
    // method for the update modal
    showEditTodoDialog() {
        this.editTodoModal = this._dialog.open(this.editTodoTemplate, {
            disableClose: true
        });
    }
    // method for saving the updated todo
    saveUpdatesToTodo(todo) {
        console.log('todo to update', todo);
        this.todoDataService.updateTodo(todo._id, todo).subscribe((response) => {
            this._snackbar.open(`Successfully saved changes to ${todo.title}`, 'Ok', {
                horizontalPosition: 'right',
                verticalPosition: 'bottom'
            });
            this.editTodoModal.close();
        }, (e) => {
            this._snackbar.open(`Failed to save changes to ${todo.title}`, 'Ok', {
                horizontalPosition: 'right',
                verticalPosition: 'bottom'
            });
        });
    }
};
TodosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_cores_services_todos_data_service__WEBPACK_IMPORTED_MODULE_4__["TodosDataService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editTodoTemplate', null)
], TodosComponent.prototype, "editTodoTemplate", void 0);
TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todos/todos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todos.component.css */ "./src/app/pages/todos/todos.component.css")).default]
    })
], TodosComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/valentine/sandbox/front-end/simple-todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map