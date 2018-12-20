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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/login-layout/login-layout.component */ "./src/app/layouts/login-layout/login-layout.component.ts");
/* harmony import */ var _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/home-layout/home-layout.component */ "./src/app/layouts/home-layout/home-layout.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_soql_query_soql_query_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/soql-query/soql-query.component */ "./src/app/components/soql-query/soql-query.component.ts");
/* harmony import */ var _components_delete_query_delete_query_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/delete-query/delete-query.component */ "./src/app/components/delete-query/delete-query.component.ts");
/* harmony import */ var _components_insert_component_insert_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/insert-component/insert-component.component */ "./src/app/components/insert-component/insert-component.component.ts");
/* harmony import */ var _components_upsert_component_upsert_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/upsert-component/upsert-component.component */ "./src/app/components/upsert-component/upsert-component.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';

//Add layouts


//Add components







var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: '',
        component: _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_2__["LoginLayoutComponent"],
        children: [{
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            }]
    },
    {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'user-profile',
                component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'soql-query',
                component: _components_soql_query_soql_query_component__WEBPACK_IMPORTED_MODULE_6__["SoqlQueryComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'delete-query',
                component: _components_delete_query_delete_query_component__WEBPACK_IMPORTED_MODULE_7__["DeleteQueryComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'insert',
                component: _components_insert_component_insert_component_component__WEBPACK_IMPORTED_MODULE_8__["InsertComponentComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'upsert',
                component: _components_upsert_component_upsert_component_component__WEBPACK_IMPORTED_MODULE_9__["UpsertComponentComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            //declarations: [],
            imports: [
                //CommonModule
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n        "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'springbot-angularApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidenavbar/sidenavbar.component */ "./src/app/components/sidenavbar/sidenavbar.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/home-layout/home-layout.component */ "./src/app/layouts/home-layout/home-layout.component.ts");
/* harmony import */ var _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/login-layout/login-layout.component */ "./src/app/layouts/login-layout/login-layout.component.ts");
/* harmony import */ var _components_soql_query_soql_query_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/soql-query/soql-query.component */ "./src/app/components/soql-query/soql-query.component.ts");
/* harmony import */ var _components_delete_query_delete_query_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/delete-query/delete-query.component */ "./src/app/components/delete-query/delete-query.component.ts");
/* harmony import */ var _components_insert_component_insert_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/insert-component/insert-component.component */ "./src/app/components/insert-component/insert-component.component.ts");
/* harmony import */ var _components_upsert_component_upsert_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/upsert-component/upsert-component.component */ "./src/app/components/upsert-component/upsert-component.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rest/rest.service */ "./src/app/rest/rest.service.ts");
/* harmony import */ var _shared_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/accordion/accordion.component */ "./src/app/shared/accordion/accordion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _components_sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_7__["SidenavbarComponent"],
                _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_10__["HomeLayoutComponent"],
                _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_11__["LoginLayoutComponent"],
                _components_soql_query_soql_query_component__WEBPACK_IMPORTED_MODULE_12__["SoqlQueryComponent"],
                _components_delete_query_delete_query_component__WEBPACK_IMPORTED_MODULE_13__["DeleteQueryComponent"],
                _components_insert_component_insert_component_component__WEBPACK_IMPORTED_MODULE_14__["InsertComponentComponent"],
                _components_upsert_component_upsert_component_component__WEBPACK_IMPORTED_MODULE_15__["UpsertComponentComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"],
                _shared_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_20__["AccordionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"]
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _rest_rest_service__WEBPACK_IMPORTED_MODULE_19__["RestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest/rest.service */ "./src/app/rest/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(rest, router) {
        this.rest = rest;
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        var _this = this;
        console.log(user);
        console.log('----------------------------------------------');
        if (user.email !== '' && user.password !== '' && user.env !== 'Environment' && user.api !== 'Api Version') {
            this.rest.login(user).subscribe(function (result) {
                var pathArray = result.metadataServerUrl.split('/');
                var protocol = pathArray[0];
                var host = pathArray[2];
                result.baseURL = protocol + '//' + host;
                result.version = user.api;
                sessionStorage.setItem('env1', JSON.stringify(result));
                sessionStorage.setItem('selected', 'env1');
                _this.router.navigate(['/dashboard']);
            }, function (err) {
                console.log(err);
            });
        }
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_rest_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Dashboard</h4>        \r\n      </div>\r\n      <div class=\"card-body\">\r\n        <!--<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">-->\r\n         <div>Data loading...</div>\r\n        <!--</form>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--<div class=\"col-md-4\">\r\n<div class=\"card card-profile\">\r\n<div class=\"card-avatar\">\r\n<a href=\"#pablo\">\r\n  <img class=\"img\" src=\"/assets/img/faces/marc.jpg\" />\r\n</a>\r\n</div>\r\n<div class=\"card-body\">\r\n<h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\r\n<h4 class=\"card-title\">Alec Thompson</h4>\r\n<p class=\"card-description\">\r\n  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n</p>\r\n<a href=\"#pablo\" class=\"btn btn-primary btn-round\">Follow</a>\r\n</div>\r\n</div>\r\n</div>-->\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/delete-query/delete-query.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/delete-query/delete-query.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card .card-body .form-group.serialCode{\r\n    margin: 0 0 27px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtcXVlcnkvZGVsZXRlLXF1ZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1xdWVyeS9kZWxldGUtcXVlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWJvZHkgLmZvcm0tZ3JvdXAuc2VyaWFsQ29kZXtcclxuICAgIG1hcmdpbjogMCAwIDI3cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/delete-query/delete-query.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/delete-query/delete-query.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Delete Parameters</h4>\r\n        <p class=\"card-category\"></p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> -->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"object\">Select Object Name</label>\r\n                <select class=\"form-control\" id=\"object\" >\r\n                  <option *ngFor=\"let item of objects; let i = index\">{{item.viewValue}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"bmd-label-floating\" for=\"queryEditor\">Where Clause:</label>\r\n                  <textarea class=\"form-control\" id=\"queryEditor\" rows=\"3\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                          <label class=\"bmd-label-floating\" for=\"orderByClause\">ORDER By Clause:</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"orderByClause\">\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"form-check\">\r\n                              <label class=\"form-check-label\" for=\"bulkApi\">\r\n                                  <input type=\"checkbox\" class=\"form-check-input\" id=\"bulkApi\">\r\n                                Bulk API\r\n                                <span class=\"form-check-sign\">\r\n                                    <span class=\"check\"></span>\r\n                                  </span>\r\n                              </label>                              \r\n                          </div>                            \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-check\">\r\n                                <label class=\"form-check-label\" for=\"hardDelete\">\r\n                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"hardDelete\">\r\n                                    Hard Delete\r\n                                  <span class=\"form-check-sign\">\r\n                                      <span class=\"check\"></span>\r\n                                    </span>\r\n                                </label>                              \r\n                            </div>                            \r\n                          </div> \r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group serialCode\">\r\n                            <div class=\"form-check\">\r\n                                <label class=\"form-check-label\" for=\"serialCode\">\r\n                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"serialCode\">\r\n                                    Serial Code processing  \r\n                                  <span class=\"form-check-sign\">\r\n                                      <span class=\"check\"></span>\r\n                                    </span>\r\n                                </label>                              \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                  </div>                \r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pull-left\">Ok</button>\r\n                    <button type=\"reset\" class=\"btn btn-normal pull-left\">Reset</button>\r\n                </div>\r\n            </div>\r\n          \r\n          \r\n          <div class=\"clearfix\"></div>\r\n        <!-- </form> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/delete-query/delete-query.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/delete-query/delete-query.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeleteQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQueryComponent", function() { return DeleteQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteQueryComponent = /** @class */ (function () {
    function DeleteQueryComponent() {
        this.objects = [
            { value: '', viewValue: 'Select an Object' },
            { value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation' },
            { value: 'Account', viewValue: 'Account' },
            { value: 'AccountBrand', viewValue: 'AccountBrand' },
            { value: 'AccountBrandShare', viewValue: 'AccountBrandShare' }
        ];
    }
    DeleteQueryComponent.prototype.ngOnInit = function () {
    };
    DeleteQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-query',
            template: __webpack_require__(/*! ./delete-query.component.html */ "./src/app/components/delete-query/delete-query.component.html"),
            styles: [__webpack_require__(/*! ./delete-query.component.css */ "./src/app/components/delete-query/delete-query.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteQueryComponent);
    return DeleteQueryComponent;
}());



/***/ }),

/***/ "./src/app/components/insert-component/insert-component.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/insert-component/insert-component.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n.width-30per{\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnNlcnQtY29tcG9uZW50L2luc2VydC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zZXJ0LWNvbXBvbmVudC9pbnNlcnQtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ud2lkdGgtMzBwZXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/insert-component/insert-component.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/insert-component/insert-component.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">Insert</h4>\r\n          \r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> -->\r\n          <!-- Step 1 Starts-->\r\n          <section [ngClass]=\"section == 'STEP_1' ? 'show' : 'hide'\"> \r\n              <p class=\"card-category\">Select an object and a CSV or ZIP file containing records to insert, or choose to insert a single record. Zipped requests must contain a CSV or XML-formatted manifest called request.txt, which may reference included binary files.</p>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"bmd-label-floating\" for=\"object\">Object Type</label>\r\n                      <select class=\"form-control\" id=\"object\" >\r\n                        <option *ngFor=\"let item of objects; let i = index\">{{item.viewValue}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-check\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked=\"\"> Single Radio\r\n                        <span class=\"circle\">\r\n                          <span class=\"check\"></span>\r\n                        </span>\r\n                      </label>\r\n    \r\n                    </div>\r\n                    <div class=\"form-check\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked=\"\"> From file\r\n                        <span class=\"circle\">\r\n                          <span class=\"check\"></span>\r\n                        </span>\r\n                      </label>\r\n                      <label class=\"form-check-label\">\r\n                          <input class=\"form-check-input\" type=\"file\" name=\"exampleFile\" >                          \r\n                        </label>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"handleNext()\">Next</button>                    \r\n                    </div>\r\n                </div>\r\n              \r\n                <div class=\"clearfix\"></div>\r\n              <!-- </form> -->\r\n          </section>\r\n           <!-- Step 1 Ends-->\r\n               <!-- Step 2 Starts-->\r\n          <section [ngClass]=\"section == 'STEP_2' ? 'show' : 'hide'\">\r\n              <p class=\"card-category\">\r\n                  Provide values for the Account fields below:\r\n              </p>  \r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead class=\"text-primary\">\r\n                    <tr>\r\n                      <th>Field</th>\r\n                      <th>Value</th>\r\n                      <th>Smart Lookup</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of fields; let i = index\">\r\n                        <td>{{item.viewValue}}</td>\r\n                        <td class=\"width-30per\"><input type=\"text\" class=\"form-control\" value=\"{{item.fieldValue}}\"></td>\r\n                        <td><select class=\"form-control\" id=\"object\" >\r\n                            <option value=\"1\">Value 1</option>\r\n                          </select></td>\r\n                    </tr>                   \r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"handlConfirm()\">Next</button>                    \r\n                  </div>\r\n              </div>\r\n          </section>\r\n                <!-- Step 2 Ends-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/insert-component/insert-component.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/insert-component/insert-component.component.ts ***!
  \***************************************************************************/
/*! exports provided: InsertComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertComponentComponent", function() { return InsertComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InsertComponentComponent = /** @class */ (function () {
    function InsertComponentComponent() {
        this.objects = [
            { value: '', viewValue: 'Select an Object' },
            { value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation' },
            { value: 'Account', viewValue: 'Account' },
            { value: 'AccountBrand', viewValue: 'AccountBrand' },
            { value: 'AccountBrandShare', viewValue: 'AccountBrandShare' }
        ];
        this.fields = [
            { value: 'count()', viewValue: 'count()', fieldValue: '' },
            { value: 'AccountNumber', viewValue: 'AccountNumber', fieldValue: '' },
            { value: 'AccountSource', viewValue: 'AccountSource', fieldValue: '' },
            { value: 'AccountType__c', viewValue: 'AccountType__c', fieldValue: '' },
            { value: 'Account__ID', viewValue: 'ID', fieldValue: '' },
            { value: 'Name', viewValue: 'Name', fieldValue: '' },
            { value: 'Home Phone', viewValue: 'HomePhone', fieldValue: '' },
            { value: 'Cellphone', viewValue: 'Cellphone', fieldValue: '' },
            { value: 'City', viewValue: 'City', fieldValue: '' },
        ];
        this.section = 'STEP_1';
    }
    InsertComponentComponent.prototype.ngOnInit = function () {
    };
    InsertComponentComponent.prototype.handleNext = function () {
        this.section = 'STEP_2';
    };
    InsertComponentComponent.prototype.handlConfirm = function () {
        this.section = 'STEP_3';
    };
    InsertComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insert-component',
            template: __webpack_require__(/*! ./insert-component.component.html */ "./src/app/components/insert-component/insert-component.component.html"),
            styles: [__webpack_require__(/*! ./insert-component.component.css */ "./src/app/components/insert-component/insert-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InsertComponentComponent);
    return InsertComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select.form-control {\r\n    -webkit-appearance: menulist;\r\n       -moz-appearance: menulist;\r\n            appearance: menulist;\r\n}\r\nselect:invalid { color: #AAAAAA; }\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.login-container .submit-login-btn {\r\n    justify-content: flex-end;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQXFCO09BQXJCLDBCQUFxQjtZQUFyQixxQkFBcUI7Q0FDeEI7QUFDRCxpQkFBaUIsZUFBZSxFQUFFO0FBRWxDO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgICBhcHBlYXJhbmNlOiBtZW51bGlzdDtcclxufVxyXG5zZWxlY3Q6aW52YWxpZCB7IGNvbG9yOiAjQUFBQUFBOyB9XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAuc3VibWl0LWxvZ2luLWJ0biB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\r\n<div class=\"col-md-6\">\r\n      <div class=\"card \">\r\n        <div class=\"card-header card-header-rose card-header-icon\">\r\n          <div class=\"card-icon\">\r\n            <i class=\"material-icons\">contacts</i>\r\n          </div>\r\n          <h4 class=\"card-title\">Please Login to continue.</h4>\r\n        </div>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"card-body \">\r\n\r\n            <div class=\"form-group bmd-form-group\">\r\n                <!--<label for=\"exampleEmail\" class=\"bmd-label-floating\">Email Address</label>-->\r\n                <select class=\"form-control\" formControlName=\"api\" data-style=\"select-with-transition\" title=\"API Version\" data-size=\"7\" >\r\n                    <option disabled selected hidden> Api Version </option>\r\n                    <option value=\"44\">44 </option>\r\n                    <option value=\"43\">43</option>\r\n                    <option value=\"42\">42</option>\r\n                  </select>\r\n            </div>\r\n\r\n            <div class=\"form-group bmd-form-group\">\r\n                <!--<label for=\"exampleEmail\" class=\"bmd-label-floating\">Email Address</label>-->\r\n                <select class=\"form-control\" formControlName=\"env\" data-style=\"select-with-transition\" title=\"Environment\" data-size=\"7\" >\r\n                    <option disabled selected hidden> Environment</option>\r\n                    <option value=\"production\">Production </option>\r\n                    <option value=\"sandbox\">Sandbox</option>\r\n                  </select>\r\n            </div>\r\n          \r\n            <div class=\"form-group bmd-form-group\">\r\n              <label for=\"exampleEmail\" class=\"bmd-label-floating\">Email Address</label>\r\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\" required>\r\n            </div>\r\n            <div class=\"form-group bmd-form-group\">\r\n              <label for=\"examplePass\" class=\"bmd-label-floating\">Password</label>\r\n              <input type=\"password\" class=\"form-control\"  formControlName=\"password\" required=\"true\">\r\n            </div>\r\n            \r\n          \r\n        </div>\r\n        <div class=\"card-footer submit-login-btn\">\r\n          <button type=\"submit\" class=\"btn btn-fill btn-rose \">Submit</button>\r\n        </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { RestService } from '../../rest.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(
    //private rest: RestService,
    fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            env: ['Environment', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            api: ['Api Version', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        //if (this.form.valid) {
        //this.email = this.form.value.email;
        /*this.rest.login(this.form.value.email,this.form.value.password, this.form.value.env, this.form.value.api).subscribe((result) => {
            //this.router.navigate(['/product-details/'+result._id]);
            console.log(result);
          }, (err) => {
            console.log(err);
          });*/
        console.log(this.form.value);
        this.authService.login(this.form.value);
        console.log("submitting check if this is the one");
        //}
        this.formSubmitAttempt = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenavbar/sidenavbar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/sidenavbar/sidenavbar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link.selected{\r\n    background-color: #ab47bc;\r\n    color: white;\r\n}\r\n.sidebar .nav li>a.selected:hover, .sidebar .nav li>a.selected:focus, .sidebar .nav li>a.selected{\r\n    background-color: #ab47bc;\r\n    color: white;\r\n}\r\n.textTransform p{\r\n    text-transform: initial;\r\n}\r\n.sidebar .logo .simple-text{\r\n    font-weight: bold;\r\n    text-transform: initial;\r\n    font-size: 30px;\r\n}\r\n.nav-item{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2YmFyL3NpZGVuYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2YmFyL3NpZGVuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluay5zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYjQ3YmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBsaT5hLnNlbGVjdGVkOmhvdmVyLCAuc2lkZWJhciAubmF2IGxpPmEuc2VsZWN0ZWQ6Zm9jdXMsIC5zaWRlYmFyIC5uYXYgbGk+YS5zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYjQ3YmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRleHRUcmFuc2Zvcm0gcHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvIC5zaW1wbGUtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLm5hdi1pdGVte1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidenavbar/sidenavbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/sidenavbar/sidenavbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\r\n  <!--\r\n        Tip 1: You can change the color of the sidebar using: data-color=\"purple | azure | green | orange | danger\"\r\n\r\n        Tip 2: you can also add an image using data-image tag\r\n             -->\r\n  <div class=\"logo\">\r\n    <a href=\"javascript: void(0)\" class=\"simple-text logo-normal\">\r\n      ForceLoader\r\n    </a>\r\n  </div>\r\n  <div class=\"sidebar-wrapper ps-container ps-theme-default\">\r\n    <ul class=\"nav\">\r\n      <li class=\"nav-item \" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n          <i class=\"material-icons\">dashboard</i>\r\n          <p>Dashboard</p>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/user-profile']\">\r\n          <i class=\"material-icons\">person</i>\r\n          <p>User Profile</p>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"isHidden = !isHidden\">\r\n        <a class=\"nav-link\" data-toggle=\"collapse\">\r\n          <i class=\"material-icons\">library_books</i>\r\n          <p>Data Manipulations </p>\r\n        </a>\r\n        <div class=\"collapse show\" id=\"mapsExamples\" [hidden]=\"isHidden\">\r\n          <ul class=\"nav\">\r\n            <li class=\"nav-item\" *ngFor=\"let query of queries\" (click)=\"onSelectLink(query)\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"[query.url]\">\r\n                <span class=\"sidebar-mini\">{{query.shortName}}</span>\r\n                <span class=\"sidebar-normal\">{{query.name}}</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link textTransform\" data-toggle=\"collapse\">\r\n          <i class=\"material-icons\">arrow_right_alt</i>\r\n          <p>Org to Org Transfer</p>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sidenavbar/sidenavbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/sidenavbar/sidenavbar.component.ts ***!
  \***************************************************************/
/*! exports provided: SidenavbarComponent, Query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavbarComponent", function() { return SidenavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavbarComponent = /** @class */ (function () {
    function SidenavbarComponent() {
        this.queries = [
            { id: 1, name: 'Export', shortName: 'EX', url: '/soql-query', class: 'nav-item' },
            { id: 2, name: 'Insert', shortName: 'IN', url: '/insert', class: 'nav-item' },
            { id: 3, name: 'Upsert', shortName: 'UP', url: '/upsert', class: 'nav-item' },
            { id: 4, name: 'Delete', shortName: 'DE', url: '/delete-query', class: 'nav-item' }
        ];
        this.isHidden = false;
    }
    SidenavbarComponent.prototype.ngOnInit = function () {
    };
    SidenavbarComponent.prototype.onSelectLink = function (query) {
        this.selectedQuery = query;
    };
    SidenavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenavbar',
            template: __webpack_require__(/*! ./sidenavbar.component.html */ "./src/app/components/sidenavbar/sidenavbar.component.html"),
            styles: [__webpack_require__(/*! ./sidenavbar.component.css */ "./src/app/components/sidenavbar/sidenavbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavbarComponent);
    return SidenavbarComponent;
}());

var Query = /** @class */ (function () {
    function Query() {
    }
    return Query;
}());



/***/ }),

/***/ "./src/app/components/soql-query/soql-query.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/soql-query/soql-query.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mar-btm-8{\r\n    margin-bottom: 8px;\r\n}\r\n.multiple-fields{\r\n    min-height: 150px;\r\n}\r\ninput.form-control{\r\n    height: calc(2.4375rem + 2px);\r\n}\r\n.hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n.confirmButtonClass{\r\n    color: #fff;\r\n    background-color: #9c27b0;\r\n    border-color: #9c27b0;\r\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\r\n}\r\n.swal2-popup .swal2-styled.swal2-confirm {\r\n    border: 0;\r\n    border-radius: .25em;\r\n    background: initial;\r\n    background-color: #9c27b0;\r\n    color: #fff;\r\n    font-size: 1.0625em;\r\n}\r\n.cardFooter{\r\n    width: 100%;\r\n}\r\n.res-title{\r\n    padding: 15px;\r\n    color: white;\r\n}\r\n.result-section{\r\n    margin-top: 15px;\r\n    padding: 15px;\r\n    border: 1px solid #e5e5e5;\r\n}\r\n.res-header{\r\n    background-color: #9c27b0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3FsLXF1ZXJ5L3NvcWwtcXVlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLCtIQUErSDtDQUNsSTtBQUNEO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvcWwtcXVlcnkvc29xbC1xdWVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hci1idG0tOHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG4ubXVsdGlwbGUtZmllbGRze1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuaW5wdXQuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OiBjYWxjKDIuNDM3NXJlbSArIDJweCk7XHJcbn1cclxuLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaG93e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbmZpcm1CdXR0b25DbGFzc3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzljMjdiMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjEyKTtcclxufVxyXG4uc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJtIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xyXG4gICAgYmFja2dyb3VuZDogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4wNjI1ZW07XHJcbn1cclxuLmNhcmRGb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlcy10aXRsZXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJlc3VsdC1zZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcbi5yZXMtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/soql-query/soql-query.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/soql-query/soql-query.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-accordion\r\n  [title]=\"['Export']\"\r\n  [desc]=\"\"\r\n  *ngFor=\"let query of queryForm.get('queryArr').controls; let i = index\"\r\n>\r\n  <div class=\"cardBody\">\r\n    <section>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bmd-label-floating\" for=\"object\">Object</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"object\"\r\n              (change)=\"objectChangeHandler($event)\"\r\n            >\r\n              <option\r\n                *ngFor=\"let item of objects; index as i\"\r\n                [ngValue]=\"objects[i].value\"\r\n                >{{ item.viewValue }}</option\r\n              >\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bmd-label-floating\" for=\"fields\">Fields</label>\r\n            <select\r\n              class=\"form-control multiple-fields custom-select\"\r\n              id=\"fields\"\r\n              multiple\r\n              (change)=\"fieldsChangeHandler($event.target.options)\"\r\n            >\r\n              <option *ngFor=\"let item of fields; let i = index\" [value]=\"item.viewValue\">{{\r\n                item.viewValue\r\n              }}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n          <div class=\"row align-items-end\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"sortByFields\"\r\n                  >Sorts results by</label\r\n                >\r\n                <select class=\"form-control\" id=\"sortByFields\">\r\n                  <option *ngFor=\"let item of sortBy; let i = index\">{{\r\n                    item.viewValue\r\n                  }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"sortOrder\">Sort</label>\r\n                <select class=\"form-control\" id=\"sortOrder\">\r\n                  <option>A to Z</option>\r\n                  <option>Z to A</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"nullPosition\">Null</label>\r\n                <select class=\"form-control\" id=\"nullPosition\">\r\n                  <option *ngFor=\"let item of nulls; let i = index\">{{\r\n                    item.viewValue\r\n                  }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"maxRecords\"\r\n                  >Max Records</label\r\n                >\r\n                <input type=\"text\" class=\"form-control\" id=\"maxRecords\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row align-items-end\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"filterByFields\"\r\n                  >Filter results by</label\r\n                >\r\n                <select class=\"form-control\" id=\"filterByFields\">\r\n                  <option *ngFor=\"let item of filterBy; let i = index\">{{\r\n                    item.viewValue\r\n                  }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"operator\">Operator</label>\r\n                <select class=\"form-control\" id=\"operator\">\r\n                  <option *ngFor=\"let item of operators; let i = index\">{{\r\n                    item.viewValue\r\n                  }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"fieldValue\"\r\n                  >Field Value</label\r\n                >\r\n                <input type=\"text\" class=\"form-control\" id=\"fieldValue\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bmd-label-floating\" for=\"queryEditor\"\r\n              >Enter or modify a SOQL query below:</label\r\n            >\r\n            <textarea class=\"form-control\" id=\"queryEditor\" rows=\"3\">\r\n              {{ query_string }}</textarea\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <button\r\n            type=\"button\"\r\n            (click)=\"querySOQL()\"\r\n            class=\"btn btn-primary pull-left\"\r\n          >\r\n            Query\r\n          </button>\r\n          \r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </section>\r\n    <section\r\n    class=\"result-section\"\r\n    [ngClass]=\"show_result == true ? 'show' : 'hide'\"\r\n    >\r\n    <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"res-header\">\r\n          <h4 class=\"res-title\">Results</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"res-body\">\r\n              <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead class=\"text-primary\">\r\n                      <tr>\r\n                        <th *ngFor=\"let item of resultsFields; let i = index\">\r\n                          {{ item.viewValue }}\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        \r\n                      <tr>                      \r\n                        <td>1</td>\r\n                        <td>Aman</td>\r\n                        <td>9876543210</td>\r\n                        <td>Bangalore</td>\r\n                      </tr>\r\n                      <tr>                      \r\n                        <td>2</td>\r\n                        <td>Ashutosh</td>\r\n                        <td>7795338870</td>\r\n                        <td>Bangalore</td>\r\n                      </tr>\r\n                      <tr>                     \r\n                        <td>3</td>\r\n                        <td>Harsh</td>\r\n                        <td>7878656543</td>\r\n                        <td>Bangalore</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <button type=\"button\" class=\"btn btn-primary pull-left\">\r\n                  Export to CSV\r\n                </button>\r\n              <button\r\n                type=\"button\"\r\n                data-toggle=\"modal\" \r\n                data-target=\"#exampleModal\"\r\n                class=\"btn btn-primary pull-right\"\r\n              >\r\n                View Related Record\r\n              </button>\r\n            </div>\r\n          </div>\r\n    </section>\r\n  </div>\r\n  <div class=\"cardFooter\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"addAnotherQuery()\"\r\n          class=\"btn btn-success pull-left\"\r\n        >\r\n        <i class=\"material-icons\">add</i>\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"removeQuery(i)\"\r\n          class=\"btn btn-danger pull-left\"\r\n        >\r\n        <i class=\"material-icons\">remove</i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary pull-right\">\r\n          Export to CSV\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-accordion>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{this.query_object[\"object\"]}} - Related Record</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <app-accordion\r\n            title=\"Individual Details\"\r\n            [desc]=\"\"            \r\n          >\r\n          <div class=\"cardBody\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead class=\"text-primary\">\r\n                  <tr>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Created Date</th>\r\n                    <th>Last Modified Date</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        </app-accordion>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n  <div class=\"swal2-container swal2-center swal2-fade swal2-shown\" style=\"overflow-y: auto;\"\r\n  [ngClass]=\"show_DetailModal == true ? 'show' : 'hide'\">\r\n      <div aria-labelledby=\"swal2-title\" aria-describedby=\"swal2-content\" class=\"swal2-popup swal2-modal swal2-show\" tabindex=\"-1\" role=\"dialog\" aria-live=\"assertive\" aria-modal=\"true\" style=\"display: flex;\">\r\n        <div class=\"swal2-header\">\r\n            <h2 class=\"swal2-title\" id=\"swal2-title\">Detail Record</h2>\r\n            </div>\r\n        <div class=\"swal2-content\"></div>\r\n        <div class=\"swal2-actions\" style=\"display: flex;\">\r\n            <button type=\"button\" (click)=\"toggleModal()\" class=\"swal2-confirm btn btn-info\" aria-label=\"\">Close</button>\r\n        </div>\r\n        <div class=\"swal2-footer\">\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/components/soql-query/soql-query.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/soql-query/soql-query.component.ts ***!
  \***************************************************************/
/*! exports provided: SoqlQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoqlQueryComponent", function() { return SoqlQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rest/rest.service */ "./src/app/rest/rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {MatSelect, MatFormField, MatOption} from '@angular/material';

/*@NgModule({
  imports: [MatFormField, MatSelect, MatOption],
  exports: [MatFormField, MatSelect, MatOption],
})*/
var SoqlQueryComponent = /** @class */ (function () {
    function SoqlQueryComponent(fb, restService) {
        this.fb = fb;
        this.restService = restService;
        this.soql_query = "SELECT Id FROM Account";
        this.show_result = false;
        this.result = [];
        this.resultsFields = [];
        this.show_DetailModal = false;
        this.query_string = "";
        this.query_object = {};
        this.objects = [
            { value: "", viewValue: "Select an Object" },
            { value: "AcceptedEventRelation", viewValue: "AcceptedEventRelation" },
            { value: "Account", viewValue: "Account" },
            { value: "AccountBrand", viewValue: "AccountBrand" },
            { value: "AccountBrandShare", viewValue: "AccountBrandShare" }
        ];
        this.nulls = [
            { value: "nulls-first", viewValue: "Nulls First" },
            { value: "nulls-last", viewValue: "Nulls Last" }
        ];
        this.operators = [
            { value: "=", viewValue: "=" },
            { value: "!=", viewValue: "!=" }
        ];
        this.fields = [
            { value: "count()", viewValue: "count()" },
            { value: "AccountNumber", viewValue: "AccountNumber" },
            { value: "AccountSource", viewValue: "AccountSource" },
            { value: "AccountType__c", viewValue: "AccountType__c" },
            { value: "Account__ID", viewValue: "Id" },
            { value: "Name", viewValue: "Name" },
            { value: "Home Phone", viewValue: "HomePhone" },
            { value: "Cellphone", viewValue: "Cellphone" },
            { value: "City", viewValue: "City" }
        ];
        this.sortBy = [
            { value: "AccountNumber", viewValue: "AccountNumber" },
            { value: "AccountSource", viewValue: "AccountSource" },
            { value: "AccountType__c", viewValue: "AccountType__c" },
            { value: "Account__ID__c", viewValue: "Account__ID__c" }
        ];
        this.filterBy = [
            { value: "AccountNumber", viewValue: "AccountNumber" },
            { value: "AccountSource", viewValue: "AccountSource" },
            { value: "AccountType__c", viewValue: "AccountType__c" },
            { value: "Account__ID__c", viewValue: "Account__ID__c" }
        ];
        this.queryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fields: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    SoqlQueryComponent.prototype.ngOnInit = function () {
        this.queryForm = this.fb.group({
            customerName: "",
            email: "",
            queryArr: this.fb.array([this.createQuery()])
        });
    };
    SoqlQueryComponent.prototype.querySOQL = function () {
        var _this = this;
        var retrievedData;
        var queryString = this.query_string + ' limit 10';
        console.log("queryString", queryString);
        this.restService.soql_query("select id, name from account limit 10").subscribe(function (data) {
            retrievedData = data.body;
            console.log('aman', JSON.parse(JSON.stringify(retrievedData)));
            _this.updateResultsTable(JSON.parse(retrievedData));
        }, function (error) { return console.log(error); });
    };
    SoqlQueryComponent.prototype.updateResultsTable = function (data) {
        this.show_result = true;
        var columns = this.query_object["fields"].split(", ");
        var records = data.records;
        this.resultsFields = columns;
        records.forEach(function (rec) {
            var availableKeys = Object.keys(rec);
            columns.forEach(function (col) {
                if (availableKeys.indexOf(col) > -1) {
                    console.log("col", col, rec[col]);
                }
            });
        });
    };
    SoqlQueryComponent.prototype.toggleModal = function () {
        //this.show_DetailModal =  !this.show_DetailModal;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: (this.query_object["object"].length > 0) ? this.query_object["object"] + " - Related Record" : 'Related Record',
            confirmButtonText: "Close",
            confirmButtonClass: "confirmButtonClass"
        });
    };
    SoqlQueryComponent.prototype.objectChangeHandler = function (event) {
        this.query_object["object"] = '';
        if (event.target.value !== 'Select an Object') {
            this.query_string = "SELECT * FROM " + event.target.value;
            this.query_object["object"] = event.target.value;
        }
    };
    SoqlQueryComponent.prototype.fieldsChangeHandler = function (options) {
        var selectedOptionsArr = Array.apply(null, options).filter(function (option) { return option.selected; }).map(function (option) { return option.value; });
        this.query_object["fields"] = selectedOptionsArr.join(", ");
        console.log("event.target.value", this.query_object["fields"]);
        this.query_string = "SELECT " + this.query_object["fields"] + " FROM " + this.query_object["object"];
        /*this.query_object["fields"] = event.target.value;*/
    };
    SoqlQueryComponent.prototype.createQuery = function () {
        return this.fb.group({
            name: "",
            description: "",
            price: ""
        });
    };
    SoqlQueryComponent.prototype.addAnotherQuery = function () {
        this.queryArr = this.queryForm.get("queryArr");
        this.queryArr.push(this.createQuery());
    };
    SoqlQueryComponent.prototype.removeQuery = function (index) {
        this.queryArr = this.queryForm.get("queryArr");
        if (this.queryArr.length > 1)
            this.queryArr.removeAt(index);
    };
    SoqlQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-soql-query",
            template: __webpack_require__(/*! ./soql-query.component.html */ "./src/app/components/soql-query/soql-query.component.html"),
            styles: [__webpack_require__(/*! ./soql-query.component.css */ "./src/app/components/soql-query/soql-query.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], SoqlQueryComponent);
    return SoqlQueryComponent;
}());



/***/ }),

/***/ "./src/app/components/upsert-component/upsert-component.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/upsert-component/upsert-component.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n.width-30per{\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cHNlcnQtY29tcG9uZW50L3Vwc2VydC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBzZXJ0LWNvbXBvbmVudC91cHNlcnQtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ud2lkdGgtMzBwZXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/upsert-component/upsert-component.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/upsert-component/upsert-component.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">Upsert</h4>\r\n          \r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> -->\r\n          <!-- Step 1 Starts-->\r\n          <section [ngClass]=\"section == 'STEP_1' ? 'show' : 'hide'\"> \r\n              <p class=\"card-category\">Select an object and a CSV or ZIP file containing records to insert, or choose to insert a single record. Zipped requests must contain a CSV or XML-formatted manifest called request.txt, which may reference included binary files.</p>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"bmd-label-floating\" for=\"object\">Object Type</label>\r\n                      <select class=\"form-control\" id=\"object\" >\r\n                        <option *ngFor=\"let item of objects; let i = index\">{{item.viewValue}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-check\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked=\"\"> Single Radio\r\n                        <span class=\"circle\">\r\n                          <span class=\"check\"></span>\r\n                        </span>\r\n                      </label>\r\n    \r\n                    </div>\r\n                    <div class=\"form-check\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked=\"\"> From file\r\n                        <span class=\"circle\">\r\n                          <span class=\"check\"></span>\r\n                        </span>\r\n                      </label>\r\n    \r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"handleNext()\">Next</button>                    \r\n                    </div>\r\n                </div>\r\n              \r\n                <div class=\"clearfix\"></div>\r\n              <!-- </form> -->\r\n          </section>\r\n           <!-- Step 1 Ends-->\r\n               <!-- Step 2 Starts-->\r\n          <section [ngClass]=\"section == 'STEP_2' ? 'show' : 'hide'\">\r\n              <p class=\"card-category\">\r\n                  Provide values for the Account fields below:\r\n              </p>  \r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead class=\"text-primary\">\r\n                    <tr>\r\n                      <th>Field</th>\r\n                      <th>Value</th>\r\n                      <th>Smart Lookup</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of fields; let i = index\">\r\n                        <td>{{item.viewValue}}</td>\r\n                        <td class=\"width-30per\"><input type=\"text\" class=\"form-control\" value=\"{{item.fieldValue}}\"></td>\r\n                        <td></td>\r\n                    </tr>                   \r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"handlConfirm()\">Next</button>                    \r\n                  </div>\r\n              </div>\r\n          </section>\r\n                <!-- Step 2 Ends-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/upsert-component/upsert-component.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/upsert-component/upsert-component.component.ts ***!
  \***************************************************************************/
/*! exports provided: UpsertComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertComponentComponent", function() { return UpsertComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpsertComponentComponent = /** @class */ (function () {
    function UpsertComponentComponent() {
        this.objects = [
            { value: '', viewValue: 'Select an Object' },
            { value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation' },
            { value: 'Account', viewValue: 'Account' },
            { value: 'AccountBrand', viewValue: 'AccountBrand' },
            { value: 'AccountBrandShare', viewValue: 'AccountBrandShare' }
        ];
        this.fields = [
            { value: 'count()', viewValue: 'count()', fieldValue: '' },
            { value: 'AccountNumber', viewValue: 'AccountNumber', fieldValue: '' },
            { value: 'AccountSource', viewValue: 'AccountSource', fieldValue: '' },
            { value: 'AccountType__c', viewValue: 'AccountType__c', fieldValue: '' },
            { value: 'Account__ID', viewValue: 'ID', fieldValue: '' },
            { value: 'Name', viewValue: 'Name', fieldValue: '' },
            { value: 'Home Phone', viewValue: 'HomePhone', fieldValue: '' },
            { value: 'Cellphone', viewValue: 'Cellphone', fieldValue: '' },
            { value: 'City', viewValue: 'City', fieldValue: '' },
        ];
        this.section = 'STEP_1';
    }
    UpsertComponentComponent.prototype.ngOnInit = function () {
    };
    UpsertComponentComponent.prototype.handleNext = function () {
        this.section = 'STEP_2';
    };
    UpsertComponentComponent.prototype.handlConfirm = function () {
        this.section = 'STEP_3';
    };
    UpsertComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upsert-component',
            template: __webpack_require__(/*! ./upsert-component.component.html */ "./src/app/components/upsert-component/upsert-component.component.html"),
            styles: [__webpack_require__(/*! ./upsert-component.component.css */ "./src/app/components/upsert-component/upsert-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpsertComponentComponent);
    return UpsertComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-avatar{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.user-avatar img{\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItYXZhdGFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi51c2VyLWF2YXRhciBpbWd7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">User Profile</h4>        \r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!--<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">-->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"user-avatar\">\r\n                  <img class=\"img\" src=\"../../assets/img/avatar.png\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">Name</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.name}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">Organization Name</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.orgName}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                   <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">Email</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.email}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">User Name</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.username}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"row\">\r\n                   <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">Password expired</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.passwordExp}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>             \r\n                 </div>\r\n            </div>\r\n          </div>\r\n           \r\n          \r\n          <!--</form>-->\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        this.userData = {};
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.updateProfile();
    };
    UserProfileComponent.prototype.updateProfile = function () {
        var envSelectec = sessionStorage.getItem('selected');
        var session = JSON.parse(sessionStorage.getItem(envSelectec));
        this.userData = {
            name: session.userFullName,
            email: session.userEmail,
            orgName: session.organizationName,
            username: session.userName
        };
        this.userData['passwordExp'] = (session.passwordExpired == 'true') ? 'Yes' : 'No';
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-panel>.content{\r\n    margin-top: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFuZWw+LmNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenavbar></app-sidenavbar>\r\n\r\n<div class=\"main-panel\">\r\n      <!-- Navbar -->\r\n     <!-- <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"navbar-wrapper\">\r\n            <a class=\"navbar-brand\" href=\"#pablo\"></a>\r\n          </div>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n          </button>-->\r\n          <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\r\n              <div class=\"container-fluid\">\r\n          <div class=\"collapse navbar-collapse justify-content-end\">\r\n           <!-- <form class=\"navbar-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"input-group no-border\">\r\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                  <i class=\"material-icons\">search</i>\r\n                  <div class=\"ripple-container\"></div>\r\n                </button>\r\n              </div>\r\n            </form>-->\r\n            <ul class=\"navbar-nav\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                  <i class=\"material-icons\">dashboard</i>\r\n                  <p class=\"d-lg-none d-md-block\">\r\n                    Stats\r\n                  </p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"material-icons\">notifications</i>\r\n                  <span class=\"notification\">5</span>\r\n                  <p class=\"d-lg-none d-md-block\">\r\n                    Some Actions\r\n                  </p>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#pablo\">\r\n                  <i class=\"material-icons\">person</i>\r\n                  <p class=\"d-lg-none d-md-block\">\r\n                    Account\r\n                  </p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n      <!-- End Navbar -->\r\n      <div class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n          \r\n        </div>\r\n      </div>\r\n      <footer class=\"footer\">\r\n        <div class=\"container-fluid\">\r\n          <nav class=\"float-left\">\r\n            \r\n          </nav>\r\n          \r\n        </div>\r\n      </footer>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent() {
    }
    HomeLayoutComponent.prototype.ngOnInit = function () {
    };
    HomeLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-layout',
            template: __webpack_require__(/*! ./home-layout.component.html */ "./src/app/layouts/home-layout/home-layout.component.html"),
            styles: [__webpack_require__(/*! ./home-layout.component.css */ "./src/app/layouts/home-layout/home-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/login-layout/login-layout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/login-layout/login-layout.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-panel {\r\n    float: none;\r\n    width: 100%;\r\n}\r\n\r\n.content {\r\n    margin-top: 0;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9sb2dpbi1sYXlvdXQvbG9naW4tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFDRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2xvZ2luLWxheW91dC9sb2dpbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhbmVsIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layouts/login-layout/login-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/login-layout/login-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-panel\">\r\n\r\n  <div class=\"content\">\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n\r\n    </div>\r\n  </div>\r\n  <!--<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n      <nav class=\"float-left\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"https://www.creative-tim.com\">\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://creative-tim.com/presentation\">\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://blog.creative-tim.com\">\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              help\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n\r\n    </div>\r\n  </footer>-->\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/login-layout/login-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/login-layout/login-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-layout',
            template: __webpack_require__(/*! ./login-layout.component.html */ "./src/app/layouts/login-layout/login-layout.component.html"),
            styles: [__webpack_require__(/*! ./login-layout.component.css */ "./src/app/layouts/login-layout/login-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/rest/rest.service.ts":
/*!**************************************!*\
  !*** ./src/app/rest/rest.service.ts ***!
  \**************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = 'http://localhost:8080/';
var login_endpoint = 'login_request';
var soql_endpoint = 'soql_request';
var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.login = function (user) {
        var headerOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'username': user.email,
                'password': user.password,
                'version': user.api + '.0',
                'orgtype': user.env.toUpperCase(),
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": '*'
            })
        };
        return this.http.post(endpoint + login_endpoint, '', headerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return console.log('Login Successful'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addProduct')));
    };
    RestService.prototype.soql_query = function (query) {
        var sessionData = JSON.parse(sessionStorage.getItem('env1'));
        console.log(sessionData.baseURL);
        var headerOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'baseURL': sessionData.baseURL,
                'version': sessionData.version + '.0',
                'sessionId': sessionData.sessionId,
                'query': query,
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": '*'
            })
        };
        return this.http.post(endpoint + soql_endpoint, '', headerOptions);
    };
    RestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for env consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordion.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointerClass{\r\n    cursor: pointer;\r\n}\r\n.material-icons{\r\n    font-weight: bold;\r\n    font-size: 36px;\r\n    margin-right: 20px;\r\n}\r\n.card-header {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyQ2xhc3N7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hdGVyaWFsLWljb25ze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/accordion/accordion.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"query-section\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary pointerClass\" (click)=\"isHidden = !isHidden\">\r\n            <i class=\"material-icons\">{{isHidden ? 'add' : 'remove'}}</i>\r\n            <div>\r\n                <h4 class=\"card-title\">{{title}}</h4>\r\n                <p class=\"card-category\">{{desc}}</p>\r\n            </div>             \r\n            \r\n          </div>\r\n          <div class=\"card-body\" [hidden]=\"isHidden\">\r\n            <ng-content select=\".cardBody\"></ng-content>\r\n          </div>\r\n          <div class=\"card-footer\" [hidden]=\"!isHidden\">\r\n              <ng-content select=\".cardFooter\"></ng-content>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  "

/***/ }),

/***/ "./src/app/shared/accordion/accordion.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.component.ts ***!
  \*********************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this.isHidden = false;
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "desc", void 0);
    AccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/shared/accordion/accordion.component.html"),
            styles: [__webpack_require__(/*! ./accordion.component.css */ "./src/app/shared/accordion/accordion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionComponent);
    return AccordionComponent;
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

module.exports = __webpack_require__(/*! C:\Users\ashutjha\Documents\FI\data loader\DataLoadEngine-SpringBootUi\src\main\springbot-angularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map