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
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpdesk/helpdesk.component */ "./src/app/helpdesk/helpdesk.component.ts");





var routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'helpdesk', component: _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskComponent"] }
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">{{ title }}</h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"p-2 text-dark\" href=\"#\">Features</a>\n    <a class=\"p-2 text-dark\" href=\"#\">Enterprise</a>\n    <a class=\"p-2 text-dark\" href=\"#\">Support</a>\n    <a class=\"p-2 text-dark\" routerLink=\"/helpdesk\">Helpdesk</a>\n  </nav>\n  <a class=\"btn btn-outline-primary\" routerLink=\"/signup\">Sign up</a>\n</div>\n\n<div class=\"container-fluid\">\n  <div>\n      <router-outlet></router-outlet>\n  </div>\n\n  <footer class=\"pt-4 my-md-5 pt-md-5 border-top\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md\">\n        <img class=\"mb-2\" src=\"/docs/4.3/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"24\" height=\"24\">\n        <small class=\"d-block mb-3 text-muted\">© 2017-2019</small>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>Features</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Stuff for developers</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Another one</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Last time</a></li>\n        </ul>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>Resources</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li><a class=\"text-muted\" href=\"#\">Resource</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Final resource</a></li>\n        </ul>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>About</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li><a class=\"text-muted\" href=\"#\">Team</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Locations</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Privacy</a></li>\n          <li><a class=\"text-muted\" href=\"#\">Terms</a></li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n</div>\n"

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
        this.title = 'My Learning Project';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpdesk/helpdesk.component */ "./src/app/helpdesk/helpdesk.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/helpdesk/helpdesk.component.css":
/*!*************************************************!*\
  !*** ./src/app/helpdesk/helpdesk.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBkZXNrL2hlbHBkZXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/helpdesk/helpdesk.component.html":
/*!**************************************************!*\
  !*** ./src/app/helpdesk/helpdesk.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 order-md-1\">\n  <h4 class=\"mb-3\">Help Desk</h4>\n  <form class=\"needs-validation\" novalidate=\"\">\n    <div class=\"row\">\n      <div class=\"col-md-12 mb-3\">\n        <label for=\"category\">Category</label>\n        <select class=\"custom-select d-block w-100\" id=\"category\" required=\"\">\n          <option value=\"\">Choose category</option>\n          <option>Netherlands</option>\n          <option>India</option>\n        </select>\n        <div class=\"invalid-feedback\">\n          Please select a valid category.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 mb-3\">\n        <label for=\"subCategory\">Sub Category</label>\n        <select class=\"custom-select d-block w-100\" id=\"subCategory\" required=\"\">\n          <option value=\"\">Choose sub category</option>\n          <option>Netherlands</option>\n          <option>India</option>\n        </select>\n        <div class=\"invalid-feedback\">\n          Please select a valid sub category.\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 mb-3\">\n        <label for=\"subCategory\">Sub Category</label>\n        <div class=\"custom-file\">\n          <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n          <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n        </div>\n      </div>\n    </div>\n    <hr class=\"mb-4\">\n    <button class=\"btn btn-primary btn-lg\" type=\"submit\">Submit</button>\n  </form>\n</div>\n\n<div class=\"table-responsive\">\n  <h2>Track Tickets</h2>\n  <p>The .thead-dark class adds a black background to table headers, and the .thead-light class adds a grey background\n    to\n    table headers:</p>\n  <table class=\"table\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Ticket Number</th>\n        <th>Category</th>\n        <th>Sub Category</th>\n        <th>Comments</th>\n        <th>Resolution</th>\n        <th>Status</th>\n        <th>Raised On</th>\n        <th>Closed On</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>334484</td>\n        <td>Retiral Settlements</td>\n        <td>Provident Fund - Statement</td>\n        <td>Dear Corporate FFS Team,\n\n          I have already sent you the signed form 10C & along with original cancelled cheque through the courier services.  Request to please confirm me on receipt.\n          \n          Attaching the scan copy of the same.\n          \n          Regards,\n          Niranjan Rath.</td>\n          <td>No Response</td>\n        <td>Open</td>\n        <td>11 Mar 2019 09:42\t</td>\n        <td>11 Mar 2019 09:42\t</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/helpdesk/helpdesk.component.ts":
/*!************************************************!*\
  !*** ./src/app/helpdesk/helpdesk.component.ts ***!
  \************************************************/
/*! exports provided: HelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskComponent", function() { return HelpdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpdeskComponent = /** @class */ (function () {
    function HelpdeskComponent() {
    }
    HelpdeskComponent.prototype.ngOnInit = function () {
    };
    HelpdeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-helpdesk',
            template: __webpack_require__(/*! ./helpdesk.component.html */ "./src/app/helpdesk/helpdesk.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk.component.css */ "./src/app/helpdesk/helpdesk.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpdeskComponent);
    return HelpdeskComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 order-md-1\">\n  <h4 class=\"mb-3\">Please fill and submit to sign up</h4>\n  <form class=\"needs-validation\" novalidate=\"\">\n    <div class=\"row\">\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"firstName\">First name</label>\n        <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required=\"\">\n        <div class=\"invalid-feedback\">\n          Valid first name is required.\n        </div>\n      </div>\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"lastName\">Last name</label>\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required=\"\">\n        <div class=\"invalid-feedback\">\n          Valid last name is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mb-3\">\n      <label for=\"username\">Username</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">@</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required=\"\">\n        <div class=\"invalid-feedback\" style=\"width: 100%;\">\n          Your username is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mb-3\">\n      <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n      <div class=\"invalid-feedback\">\n        Please enter a valid email address for shipping updates.\n      </div>\n    </div>\n\n    <div class=\"mb-3\">\n      <label for=\"address\">Address</label>\n      <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required=\"\">\n      <div class=\"invalid-feedback\">\n        Please enter your shipping address.\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"country\">Country</label>\n        <select class=\"custom-select d-block w-100\" id=\"country\" required=\"\">\n          <option value=\"\">Choose...</option>\n          <option>Netherlands</option>\n          <option>India</option>\n        </select>\n        <div class=\"invalid-feedback\">\n          Please select a valid country.\n        </div>\n      </div>\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"zip\">Zip</label>\n        <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required=\"\">\n        <div class=\"invalid-feedback\">\n          Zip code required.\n        </div>\n      </div>\n    </div>\n    <hr class=\"mb-4\">\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n      <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\n    </div>\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n      <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n    </div>\n    <hr class=\"mb-4\">\n\n    <h4 class=\"mb-3\">Payment</h4>\n\n    <div class=\"d-block my-3\">\n      <div class=\"custom-control custom-radio\">\n        <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked=\"\" required=\"\">\n        <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n      </div>\n      <div class=\"custom-control custom-radio\">\n        <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n        <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n      </div>\n      <div class=\"custom-control custom-radio\">\n        <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n        <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"cc-name\">Name on card</label>\n        <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required=\"\">\n        <small class=\"text-muted\">Full name as displayed on card</small>\n        <div class=\"invalid-feedback\">\n          Name on card is required\n        </div>\n      </div>\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"cc-number\">Credit card number</label>\n        <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required=\"\">\n        <div class=\"invalid-feedback\">\n          Credit card number is required\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"cc-expiration\">Expiration</label>\n        <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required=\"\">\n        <div class=\"invalid-feedback\">\n          Expiration date required\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"cc-cvv\">CVV</label>\n        <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required=\"\">\n        <div class=\"invalid-feedback\">\n          Security code required\n        </div>\n      </div>\n    </div>\n    <hr class=\"mb-4\">\n    <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
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

module.exports = __webpack_require__(/*! /Users/niranjan/Projects/try/JavaScript/ng7/niranjan-fed/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map