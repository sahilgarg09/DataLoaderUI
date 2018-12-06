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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"

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
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"]
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
        if (user.email !== '' && user.password !== '' && user.env !== 'Enviournment' && user.api !== 'Api Version') {
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

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

module.exports = ".card .card-body .form-group.serialCode{\r\n    margin: 0 0 27px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1xdWVyeS9kZWxldGUtcXVlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJkZWxldGUtcXVlcnkvZGVsZXRlLXF1ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1ib2R5IC5mb3JtLWdyb3VwLnNlcmlhbENvZGV7XHJcbiAgICBtYXJnaW46IDAgMCAyN3B4IDA7XHJcbn0iXX0= */"

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

module.exports = ".hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n.width-30per{\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2VydC1jb21wb25lbnQvaW5zZXJ0LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6Imluc2VydC1jb21wb25lbnQvaW5zZXJ0LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaG93e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLndpZHRoLTMwcGVye1xyXG4gICAgd2lkdGg6IDMwJTtcclxufSJdfQ== */"

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

module.exports = "select.form-control {\r\n    -webkit-appearance: menulist;\r\n       -moz-appearance: menulist;\r\n            appearance: menulist;\r\n}\r\nselect:invalid { color: #AAAAAA; }\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.login-container .submit-login-btn {\r\n    justify-content: flex-end;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBcUI7T0FBckIsMEJBQXFCO1lBQXJCLHFCQUFxQjtDQUN4QjtBQUNELGlCQUFpQixlQUFlLEVBQUU7QUFFbEM7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYXBwZWFyYW5jZTogbWVudWxpc3Q7XHJcbn1cclxuc2VsZWN0OmludmFsaWQgeyBjb2xvcjogI0FBQUFBQTsgfVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLnN1Ym1pdC1sb2dpbi1idG4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\r\n<div class=\"col-md-6\">\r\n      <div class=\"card \">\r\n        <div class=\"card-header card-header-rose card-header-icon\">\r\n          <div class=\"card-icon\">\r\n            <i class=\"material-icons\">contacts</i>\r\n          </div>\r\n          <h4 class=\"card-title\">Please Login to continue.</h4>\r\n        </div>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"card-body \">\r\n\r\n            <div class=\"form-group bmd-form-group\">\r\n                <!--<label for=\"exampleEmail\" class=\"bmd-label-floating\">Email Address</label>-->\r\n                <select class=\"form-control\" formControlName=\"api\" data-style=\"select-with-transition\" title=\"API Version\" data-size=\"7\" >\r\n                    <option disabled selected hidden> Api Version </option>\r\n                    <option value=\"44\">44 </option>\r\n                    <option value=\"43\">43</option>\r\n                    <option value=\"42\">42</option>\r\n                  </select>\r\n            </div>\r\n\r\n            <div class=\"form-group bmd-form-group\">\r\n                <!--<label for=\"exampleEmail\" class=\"bmd-label-floating\">Email Address</label>-->\r\n                <select class=\"form-control\" formControlName=\"env\" data-style=\"select-with-transition\" title=\"Enviournment\" data-size=\"7\" >\r\n                    <option disabled selected hidden> Enviournment</option>\r\n                    <option value=\"production\">Production </option>\r\n                    <option value=\"sandbox\">Sandbox</option>\r\n                  </select>\r\n            </div>\r\n          \r\n            <div class=\"form-group bmd-form-group\">\r\n              <label for=\"exampleEmail\" class=\"bmd-label-floating\">Email Address</label>\r\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\" required>\r\n            </div>\r\n            <div class=\"form-group bmd-form-group\">\r\n              <label for=\"examplePass\" class=\"bmd-label-floating\">Password</label>\r\n              <input type=\"password\" class=\"form-control\"  formControlName=\"password\" required=\"true\">\r\n            </div>\r\n            \r\n          \r\n        </div>\r\n        <div class=\"card-footer submit-login-btn\">\r\n          <button type=\"submit\" class=\"btn btn-fill btn-rose \">Submit</button>\r\n        </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>"

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

module.exports = ".nav-link.selected{\r\n    background-color: #ab47bc;\r\n    color: white;\r\n}\r\n.sidebar .nav li>a.selected:hover, .sidebar .nav li>a.selected:focus, .sidebar .nav li>a.selected{\r\n    background-color: #ab47bc;\r\n    color: white;\r\n}\r\n.textTransform p{\r\n    text-transform: initial;\r\n}\r\n.sidebar .logo .simple-text{\r\n    font-weight: bold;\r\n    text-transform: initial;\r\n    font-size: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXZiYXIvc2lkZW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNpZGVuYXZiYXIvc2lkZW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rLnNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiNDdiYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2lkZWJhciAubmF2IGxpPmEuc2VsZWN0ZWQ6aG92ZXIsIC5zaWRlYmFyIC5uYXYgbGk+YS5zZWxlY3RlZDpmb2N1cywgLnNpZGViYXIgLm5hdiBsaT5hLnNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiNDdiYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGV4dFRyYW5zZm9ybSBwe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28gLnNpbXBsZS10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidenavbar/sidenavbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/sidenavbar/sidenavbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\r\n      <!--\r\n        Tip 1: You can change the color of the sidebar using: data-color=\"purple | azure | green | orange | danger\"\r\n\r\n        Tip 2: you can also add an image using data-image tag\r\n             -->\r\n      <div class=\"logo\">\r\n        <a href=\"javascript: void(0)\" class=\"simple-text logo-normal\">\r\n          ForceLoader\r\n        </a>\r\n      </div>\r\n      <div class=\"sidebar-wrapper ps-container ps-theme-default\">\r\n        <ul class=\"nav\">\r\n          <li class=\"nav-item \">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n              <i class=\"material-icons\">dashboard</i>\r\n              <p>Dashboard</p>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/user-profile']\">\r\n              <i class=\"material-icons\">person</i>\r\n              <p>User Profile</p>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"collapse\" [routerLink]=\"['/soql-query']\">\r\n              <i class=\"material-icons\">library_books</i>\r\n              <p>Data Manipulations</p>\r\n            </a>\r\n            <div class=\"collapse show\" id=\"mapsExamples\">\r\n              <ul class=\"nav\">\r\n                <li class=\"nav-item\"\r\n                *ngFor=\"let query of queries\"                \r\n                (click)=\"onSelectLink(query)\">\r\n                  <a class=\"nav-link\"\r\n                  [class.selected]=\"query === selectedQuery\"\r\n                  [routerLink]=\"[query.url]\"\r\n                  > \r\n                    <span class=\"sidebar-mini\">{{query.shortName}}</span>                   \r\n                    <span class=\"sidebar-normal\">{{query.name}}</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link textTransform\" data-toggle=\"collapse\" >\r\n                <i class=\"material-icons\">arrow_right_alt</i>\r\n                <p>Org to Org Transfer</p>\r\n              </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>"

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

module.exports = ".mar-btm-8{\r\n    margin-bottom: 8px;\r\n}\r\n.multiple-fields{\r\n    min-height: 150px;\r\n}\r\ninput.form-control{\r\n    height: calc(2.4375rem + 2px);\r\n}\r\n.hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n.confirmButtonClass{\r\n    color: #fff;\r\n    background-color: #9c27b0;\r\n    border-color: #9c27b0;\r\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\r\n}\r\n.swal2-popup .swal2-styled.swal2-confirm {\r\n    border: 0;\r\n    border-radius: .25em;\r\n    background: initial;\r\n    background-color: #9c27b0;\r\n    color: #fff;\r\n    font-size: 1.0625em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcWwtcXVlcnkvc29xbC1xdWVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsK0hBQStIO0NBQ2xJO0FBQ0Q7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzb3FsLXF1ZXJ5L3NvcWwtcXVlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXItYnRtLTh7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLm11bHRpcGxlLWZpZWxkc3tcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG59XHJcbmlucHV0LmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogY2FsYygyLjQzNzVyZW0gKyAycHgpO1xyXG59XHJcbi5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvd3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jb25maXJtQnV0dG9uQ2xhc3N7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YzI3YjA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDE1NiwgMzksIDE3NiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDE1NiwgMzksIDE3NiwgMC4xMik7XHJcbn1cclxuLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcclxuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMDYyNWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/soql-query/soql-query.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/soql-query/soql-query.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"query-section\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">SOQL Query</h4>\r\n          <p class=\"card-category\">Choose the object, fields, and criteria to build a SOQL query below:</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> -->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"object\">Object</label>\r\n                <select class=\"form-control\" id=\"object\" (change)=\"objectChangeHandler($event)\">\r\n                  <option *ngFor=\"let item of objects; let i = index\" [ngValue]=\"item\">{{item.viewValue}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"fields\">Fields</label>\r\n                <select class=\"form-control multiple-fields custom-select\" id=\"fields\"\r\n                [multiple] = true\r\n                (change)=\"fieldsChangeHandler($event)\">\r\n                  <option *ngFor=\"let item of fields; let i = index\">{{item.viewValue}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n              <div class=\"row align-items-end\">\r\n\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\" for=\"sortByFields\">Sorts results by</label>\r\n                    <select class=\"form-control\" id=\"sortByFields\">\r\n                      <option *ngFor=\"let item of sortBy; let i = index\">{{item.viewValue}}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\" for=\"sortOrder\">Sort</label>\r\n                    <select class=\"form-control\" id=\"sortOrder\">\r\n                      <option>A to Z</option>\r\n                      <option>Z to A</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\" for=\"nullPosition\">Null</label>\r\n                    <select class=\"form-control\" id=\"nullPosition\">\r\n                      <option *ngFor=\"let item of nulls; let i = index\">{{item.viewValue}}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\" for=\"maxRecords\">Max Records</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"maxRecords\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row align-items-end\">\r\n\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\" for=\"filterByFields\">Filter results by</label>\r\n                    <select class=\"form-control\" id=\"filterByFields\">\r\n                      <option *ngFor=\"let item of filterBy; let i = index\">{{item.viewValue}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\" for=\"operator\">Operator</label>\r\n                    <select class=\"form-control\" id=\"operator\">\r\n                      <option *ngFor=\"let item of operators; let i = index\">{{item.viewValue}}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\" for=\"fieldValue\">Field Value</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"fieldValue\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"queryEditor\">Enter or modify a SOQL query below:</label>\r\n                <textarea class=\"form-control\" id=\"queryEditor\" rows=\"3\">{{query_string}}</textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <button type=\"button\" (click)=\"querySOQL()\" class=\"btn btn-primary pull-left\">Query</button>\r\n              <button type=\"button\" class=\"btn btn-primar pull-right\">Export to CSV</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <!-- </form> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"query-result-section\" [ngClass]=\"show_result == true ? 'show' : 'hide'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">Query Result</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-category\">\r\n            Returned records 1 - 3 of 3 total records:\r\n          </p>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <thead class=\"text-primary\">\r\n                        <tr>\r\n                          <th *ngFor=\"let item of resultsFields; let i = index\">{{item.viewValue}}</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                          <tr>\r\n                              <td>1</td>\r\n                              <td>Aman</td>\r\n                              <td>9876543210</td>\r\n                              <td>Bangalore</td>\r\n                            </tr>\r\n                        <tr>\r\n                          <td>2</td>\r\n                          <td>Ashutosh</td>\r\n                          <td>7795338870</td>\r\n                          <td>Bangalore</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>3</td>\r\n                            <td>Harsh</td>\r\n                            <td>7878656543</td>\r\n                            <td>Bangalore</td>\r\n                          </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <button type=\"button\" (click)=\"toggleModal()\" class=\"btn btn-primary pull-right\">View Detailed Report</button>                \r\n              </div>\r\n            </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<!-- <div class=\"swal2-container swal2-center swal2-fade swal2-shown\" style=\"overflow-y: auto;\"\r\n[ngClass]=\"show_DetailModal == true ? 'show' : 'hide'\">\r\n    <div aria-labelledby=\"swal2-title\" aria-describedby=\"swal2-content\" class=\"swal2-popup swal2-modal swal2-show\" tabindex=\"-1\" role=\"dialog\" aria-live=\"assertive\" aria-modal=\"true\" style=\"display: flex;\">\r\n      <div class=\"swal2-header\">\r\n          <h2 class=\"swal2-title\" id=\"swal2-title\">Detail Record</h2>\r\n          </div>\r\n      <div class=\"swal2-content\"></div>\r\n      <div class=\"swal2-actions\" style=\"display: flex;\">\r\n          <button type=\"button\" (click)=\"toggleModal()\" class=\"swal2-confirm btn btn-info\" aria-label=\"\">Close</button>\r\n      </div>\r\n      <div class=\"swal2-footer\">          \r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n-->"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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
    function SoqlQueryComponent(fb) {
        this.fb = fb;
        this.soql_query = 'SELECT Id FROM Account';
        this.show_result = false;
        this.show_DetailModal = false;
        this.query_string = '';
        this.query_object = {};
        this.objects = [
            { value: '', viewValue: 'Select an Object' },
            { value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation' },
            { value: 'Account', viewValue: 'Account' },
            { value: 'AccountBrand', viewValue: 'AccountBrand' },
            { value: 'AccountBrandShare', viewValue: 'AccountBrandShare' }
        ];
        this.nulls = [
            { value: 'nulls-first', viewValue: 'Nulls First' },
            { value: 'nulls-last', viewValue: 'Nulls Last' }
        ];
        this.operators = [
            { value: '=', viewValue: '=' },
            { value: '!=', viewValue: '!=' }
        ];
        this.fields = [
            { value: 'count()', viewValue: 'count()' },
            { value: 'AccountNumber', viewValue: 'AccountNumber' },
            { value: 'AccountSource', viewValue: 'AccountSource' },
            { value: 'AccountType__c', viewValue: 'AccountType__c' },
            { value: 'Account__ID', viewValue: 'ID' },
            { value: 'Name', viewValue: 'Name' },
            { value: 'Home Phone', viewValue: 'HomePhone' },
            { value: 'Cellphone', viewValue: 'Cellphone' },
            { value: 'City', viewValue: 'City' },
        ];
        this.sortBy = [
            { value: 'AccountNumber', viewValue: 'AccountNumber' },
            { value: 'AccountSource', viewValue: 'AccountSource' },
            { value: 'AccountType__c', viewValue: 'AccountType__c' },
            { value: 'Account__ID__c', viewValue: 'Account__ID__c' }
        ];
        this.filterBy = [
            { value: 'AccountNumber', viewValue: 'AccountNumber' },
            { value: 'AccountSource', viewValue: 'AccountSource' },
            { value: 'AccountType__c', viewValue: 'AccountType__c' },
            { value: 'Account__ID__c', viewValue: 'Account__ID__c' }
        ];
        this.resultsFields = [
            { value: 'Account__ID', viewValue: 'ID' },
            { value: 'Name', viewValue: 'Name' },
            { value: 'Cellphone', viewValue: 'Cellphone' },
            { value: 'City', viewValue: 'City' },
        ];
    }
    SoqlQueryComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    SoqlQueryComponent.prototype.querySOQL = function () {
        this.show_result = true;
    };
    SoqlQueryComponent.prototype.toggleModal = function () {
        //this.show_DetailModal =  !this.show_DetailModal;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Detail Report',
            confirmButtonText: 'Close',
            confirmButtonClass: 'confirmButtonClass'
        });
    };
    SoqlQueryComponent.prototype.objectChangeHandler = function (event) {
        this.query_string = 'SELECT * FROM ' + event.target.value;
        this.query_object['object'] = event.target.value;
    };
    SoqlQueryComponent.prototype.fieldsChangeHandler = function (event) {
        console.log("event.target.value", event.target, event);
        this.query_string = 'SELECT ' + event.target.value + ' FROM ' + this.query_object['object'];
        this.query_object['fields'] = event.target.value;
    };
    SoqlQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-soql-query',
            template: __webpack_require__(/*! ./soql-query.component.html */ "./src/app/components/soql-query/soql-query.component.html"),
            styles: [__webpack_require__(/*! ./soql-query.component.css */ "./src/app/components/soql-query/soql-query.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
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

module.exports = ".hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n.width-30per{\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwc2VydC1jb21wb25lbnQvdXBzZXJ0LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InVwc2VydC1jb21wb25lbnQvdXBzZXJ0LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaG93e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLndpZHRoLTMwcGVye1xyXG4gICAgd2lkdGg6IDMwJTtcclxufSJdfQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header card-header-primary\">\n          <h4 class=\"card-title\">User Profile</h4>        \n        </div>\n        <div class=\"card-body\">\n          <!--<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">-->\n           <div>Profile loading...</div>\n          <!--</form>-->\n        </div>\n      </div>\n    </div>"

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
    }
    UserProfileComponent.prototype.ngOnInit = function () {
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

module.exports = ".main-panel>.content{\r\n    margin-top: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiIuLi9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wYW5lbD4uY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenavbar></app-sidenavbar>\r\n\r\n<div class=\"main-panel\">\r\n      <!-- Navbar -->\r\n     <!-- <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"navbar-wrapper\">\r\n            <a class=\"navbar-brand\" href=\"#pablo\"></a>\r\n          </div>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n          </button>-->\r\n          <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\r\n              <div class=\"container-fluid\">\r\n          <div class=\"collapse navbar-collapse justify-content-end\">\r\n           <!-- <form class=\"navbar-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"input-group no-border\">\r\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                  <i class=\"material-icons\">search</i>\r\n                  <div class=\"ripple-container\"></div>\r\n                </button>\r\n              </div>\r\n            </form>-->\r\n            <ul class=\"navbar-nav\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#pablo\">\r\n                  <i class=\"material-icons\">dashboard</i>\r\n                  <p class=\"d-lg-none d-md-block\">\r\n                    Stats\r\n                  </p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"material-icons\">notifications</i>\r\n                  <span class=\"notification\">5</span>\r\n                  <p class=\"d-lg-none d-md-block\">\r\n                    Some Actions\r\n                  </p>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#pablo\">\r\n                  <i class=\"material-icons\">person</i>\r\n                  <p class=\"d-lg-none d-md-block\">\r\n                    Account\r\n                  </p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n      <!-- End Navbar -->\r\n      <div class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n          \r\n        </div>\r\n      </div>\r\n      <footer class=\"footer\">\r\n        <div class=\"container-fluid\">\r\n          <nav class=\"float-left\">\r\n            <ul>\r\n              <li>\r\n                <a href=\"https://www.creative-tim.com\">\r\n                  Creative Tim\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"https://creative-tim.com/presentation\">\r\n                  About Us\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"http://blog.creative-tim.com\">\r\n                  Blog\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">\r\n                  help\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n          \r\n        </div>\r\n      </footer>\r\n    </div>\r\n"

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

module.exports = ".main-panel {\r\n    float: none;\r\n    width: 100%;\r\n}\r\n\r\n.content {\r\n    margin-top: 0;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xheW91dHMvbG9naW4tbGF5b3V0L2xvZ2luLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCIiwiZmlsZSI6Ii4uL2xheW91dHMvbG9naW4tbGF5b3V0L2xvZ2luLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFuZWwge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"

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