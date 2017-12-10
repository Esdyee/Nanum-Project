webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list {\n  width: 600px;\n  height: 140px;\n  border: 2px solid gray;\n  border-radius: 10px 10px;\n  margin: 0 auto;\n  padding: 20px;\n  position: relative;\n}\n\nh1 {\n  font-size: 2em;\n  font-weight: bold;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.about-answer {\n  font-size: 12px;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nul::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\nli {\n  float: left;\n  list-style-type: none;\n  padding-right: 20px;\n}\n\nbutton {\n  width: 100px;\n  height: 30px;\n  border: 1px solid #000;\n  border-radius: 15px 15px;\n  padding: 2px;\n  margin-top: 20px;\n  margin-right: 10px;\n  font-size: 12px;\n  text-align: center;\n  outline: none;\n}\n\n.write-answer {\n  background-color: #3E78AD;\n  color: white; \n}\n\n.follow {\n  background-color: #F6F6F9;\n  color: #656565;\n}\n\ni {\n  color: gray;\n}\n\n.fa-times {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n\n.fa-bookmark, .fa-bookmark-o {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n}\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"answer-container\">\n  <div *ngFor=\"let data of datas\">\n    <div *ngIf=\"isShow\" class=\"list\" [id]=\"data.id\">\n      <ul class=\"about-question\">\n        <li>질문</li>\n        <li>{{ data.topic1 }}</li>\n        <li>{{ data.topic2 }}</li>\n      </ul>\n      <h1 class=\"question-name\">{{ data.question }}</h1>\n      <ul class=\"about-answer\">\n        <li>답변 0개</li>\n        <li>팔로우 200명</li>\n        <li>12시간 전</li>\n      </ul>\n      <button class=\"write-answer\">답변 달기</button>\n      <button class=\"follow\" (click)=\"following()\">{{ isFollowing ? '팔로우 취소' : '팔로우' }}</button>\n      <i (click)=\"removeItem(data.id)\" class=\"fa fa-times fa-2x\"></i>\n      <i (click)=\"changeChecked()\" class=\"fa fa-2x\" [class.fa-bookmark-o]=\"!isChecked\" [class.fa-bookmark]=\"isChecked\"></i>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnswerComponent = (function () {
    function AnswerComponent() {
        this.isShow = true;
        this.isChecked = false;
        this.isFollowing = false;
    }
    AnswerComponent.prototype.ngOnInit = function () {
        this.datas = this.getDatas();
    };
    AnswerComponent.prototype.removeItem = function (id) {
        this.isShow = !this.isShow;
    };
    AnswerComponent.prototype.changeChecked = function () {
        this.isChecked = !this.isChecked;
    };
    AnswerComponent.prototype.following = function () {
        this.isFollowing = !this.isFollowing;
    };
    AnswerComponent.prototype.getDatas = function () {
        return [
            { id: 1, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' },
            { id: 2, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' },
            { id: 3, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' },
            { id: 4, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' },
            { id: 5, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' }
        ];
    };
    AnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-answer',
            template: __webpack_require__("../../../../../src/app/answer/answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_guard__ = __webpack_require__("../../../../../src/app/login/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_feed_main_feed_component__ = __webpack_require__("../../../../../src/app/main-feed/main-feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/common/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// 라우트에 해당되는 것이 없을 때 나타나는 페이지

// import { QuestionFeedComponent } from './question-feed/question-feed.component';
// import { NavigatorComponent } from './common/navigator/navigator.component';
// import { AnswerComponent } from './answer/answer.component';
// 라우트 구성
var routes = [
    { path: '', redirectTo: '/login/main', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_5__main_feed_main_feed_component__["a" /* MainFeedComponent */] },
    //{ path: 'main', component: MainFeedComponent, canActivate: [LoginGuard]},
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__common_not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_login_guard__["a" /* LoginGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            //templateUrl: './app.component.html',
            template: "\n  <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_material_module__ = __webpack_require__("../../../../../src/app/module/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_quill__ = __webpack_require__("../../../../ngx-quill/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_feed_main_feed_component__ = __webpack_require__("../../../../../src/app/main-feed/main-feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_main_feed_content_main_feed_content_component__ = __webpack_require__("../../../../../src/app/common/main-feed-content/main-feed-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_navigator_navigator_component__ = __webpack_require__("../../../../../src/app/common/navigator/navigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_navigator_ask_modal_ask_modal_component__ = __webpack_require__("../../../../../src/app/common/navigator/ask-modal/ask-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/common/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__question_feed_question_feed_component__ = __webpack_require__("../../../../../src/app/question-feed/question-feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_question_feed_content_question_feed_content_component__ = __webpack_require__("../../../../../src/app/common/question-feed-content/question-feed-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_comments_comments_component__ = __webpack_require__("../../../../../src/app/common/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_editor_editor_component__ = __webpack_require__("../../../../../src/app/common/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_feed_topic_select_topic_select_component__ = __webpack_require__("../../../../../src/app/main-feed/topic-select/topic-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_nav_tab_nav_tab_component__ = __webpack_require__("../../../../../src/app/common/nav-tab/nav-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profile_profile_topic_modal_profile_topic_modal_component__ = __webpack_require__("../../../../../src/app/profile/profile-topic-modal/profile-topic-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { MainLoginComponent } from './login/main-login/main-login.component';
// import { FindPasswordComponent } from './login/find-password/find-password.component';








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__topic_topic_component__["a" /* TopicComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_feed_main_feed_component__["a" /* MainFeedComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__common_main_feed_content_main_feed_content_component__["a" /* MainFeedContentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__common_navigator_navigator_component__["a" /* NavigatorComponent */],
                __WEBPACK_IMPORTED_MODULE_14__common_navigator_ask_modal_ask_modal_component__["a" /* AskModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__answer_answer_component__["a" /* AnswerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__common_navigator_ask_modal_ask_modal_component__["a" /* AskModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__main_feed_topic_select_topic_select_component__["a" /* TopicSelectComponent */],
                // MainLoginComponent,
                // FindPasswordComponent,
                __WEBPACK_IMPORTED_MODULE_15__common_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__question_feed_question_feed_component__["a" /* QuestionFeedComponent */],
                __WEBPACK_IMPORTED_MODULE_17__common_question_feed_content_question_feed_content_component__["a" /* QuestionFeedContentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__common_comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__common_editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__common_nav_tab_nav_tab_component__["a" /* NavTabComponent */],
                __WEBPACK_IMPORTED_MODULE_22__profile_profile_topic_modal_profile_topic_modal_component__["a" /* ProfileTopicModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__module_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_quill__["a" /* QuillModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* ReactiveFormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__module_material_module__["a" /* MaterialModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__common_navigator_ask_modal_ask_modal_component__["a" /* AskModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__main_feed_topic_select_topic_select_component__["a" /* TopicSelectComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = (function () {
    function AppService() {
        this.api_path = "https://siwon.me/";
    }
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/common/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment-area {\n  padding: 1rem;\n  background-color: #EBEBEB;\n}\n\n.comment-input {\n  background-color: tan;\n}\n\n.comment-input .mat-card-avatar {\n  float: left;\n  width: 2.5rem;\n  height: 2.5rem;\n}\n\nmat-form-field {\n  width: 300px;\n}\n\n.comment-list .mat-card-avatar {\n  width: 2.5rem;\n  height: 2.5rem;\n  position: absolute;\n  left: 0;\n}\n\n.comment.level-1 {\n  position: relative;\n  padding-left: 3rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-area\">\n  <div class=\"comment-input\">\n    <img mat-card-avatar src=\"../../../assets/images/me.png\">\n    <mat-form-field>\n      <textarea [(ngModel)]=\"commentText\" matInput placeholder=\"댓글을 입력하세요\" matTextareaAutosize matAutosizeMinRows=\"1\"\n                matAutosizeMaxRows=\"100\"></textarea>\n    </mat-form-field>\n    <button mat-button (click)=\"test()\" [disabled]=\"!commentText\">댓글달기</button>\n  </div>\n  <div class=\"comment-list\">\n    <div class=\"comment level-1\">\n      <img mat-card-avatar src=\"../../../assets/images/me.png\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/common/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsComponent = (function () {
    function CommentsComponent() {
    }
    CommentsComponent.prototype.test = function () {
        console.log(this.commentText);
    };
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/common/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quill-container {\n  height: 550px;\n  font-size: 14px;\n  position: relative;\n  background-color: yellow;\n}\n\n.question-box {\n  height: 140px;\n  text-align: center;\n}\n\n.question-name {\n  font-size: 2em;\n  font-weight: bold;\n  line-height: 140px;\n}\n\n.fa-times {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  color: gray;\n}\n\n.submit {\n  width: 70px;\n  height: 30px;\n  background-color: #3E78AD;\n  color: white;\n  font-weight: bold;\n  outline: none;\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isShow\" class=\"quill-container\">\n  <div class=\"question-box\">\n    <span class=\"question-name\">질문 제목</span>\n  </div>\n  <div class=\"quill-editor\">\n    <form>\n      <quill-editor [style]=\"{ height: '300px' }\" [placeholder]=\"'Write your answer'\">\n        <div quill-editor-toolbar>\n          <span class=\"ql-formats\">\n            <button class=\"ql-bold\" [title]=\"'Bold'\"></button>\n            <button class=\"ql-italic\" [title]=\"'Italic'\"></button>\n            <button class=\"ql-underline\" [title]=\"'Underline'\"></button>\n          </span>\n          <span class=\"ql-formats\">\n            <button class=\"ql-list\" value=\"ordered\" [title]=\"'Numbers'\"></button>\n            <button class=\"ql-list\" value=\"bullet\" [title]=\"'Bullets'\"></button>\n            <button class=\"ql-indent\" value=\"+1\" [title]=\"'Indent'\"></button>\n            <button class=\"ql-indent\" value=\"-1\" [title]=\"'Unindent'\"></button>\n          </span>\n          <span class=\"ql-formats\">\n            <button class=\"ql-blockquote\" [title]=\"'Blockquote'\"></button>\n            <button class=\"ql-code-block\" [title]=\"'Code'\"></button>\n          </span>\n          <span class=\"ql-formats\">\n            <button class=\"ql-image\" [title]=\"'Image'\"></button>\n            <button class=\"ql-video\" [title]=\"'Video'\"></button>\n            <button class=\"ql-link\" [title]=\"'Link'\"></button>\n          </span>\n        </div>\n      </quill-editor>\n      <button class=\"submit\">Submit</button>\n    </form>\n  </div>\n  <i (click)=\"close()\" class=\"fa fa-times fa-2x\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/common/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorComponent = (function () {
    function EditorComponent() {
        this.isShow = true;
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.close = function () {
        this.isShow = !this.isShow;
    };
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/common/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/main-feed-content/expanded-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expandedContents; });
var expandedContents = {
    1: {
        content: 'Angular는 SPA(Single Page Application) 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크이다. 웹뿐만 아니라 모바일 웹, 네이티브 모바일과 데스크탑 애플리케이션까지 프론트엔드 개발에 필요한 대부분의 기능을 갖추고 있다. 정적 타입을 제공하는 TypeScript를 주력 언어로 채택하여 대규모 애플리케이션 개발에 보다 적합한 환경을 제공한다. 이전 버전인 AngularJS는 2009년 구글의 미스코 헤브리(Miško Hevery)가 시작한 개인 프로젝트로 시작하여 2012년 AngularJS 1.0이 공개되었으며 2017년 1.6.2이 공개되는 등 Angular 정식 버전이 공개된 이후에도 지속적으로 업데이트를 진행하고 있다. Angular는 AngularJS(version 1)의 후속 버전으로 2014년 ng 컨퍼런스에서 처음으로 소개되었다. 2016년 9월 14일 Angular 2 버전이 공개되었고 Angular 3을 뛰어 넘어 2017년 3월 23일 Angular 4, 2017년 11월 1일 Angular 5 정식 버전 pentagonal-donut이 출시되었다. Angular는 AngularJS의 후속 버전이지만 호환성이 없을 뿐아니라 알파, 베타, RC를 거치며 이전 버전과 호환성이 없는 변경인 Breaking Changes가 빈번하게 발생하여 많은 개발자를 혼란스럽게 하였다. 하지만 2016년 10월 발표된 이후 Angular 버저닝과 출시 계획에 따르면 개발자의 부담이 적은 방향으로 계획적인 버전업이 이루어질 듯하다. SemVer를 도입하여 버전 체계를 메이저, 마이너, 패치로 나누어 명확히 하고, 6개월간 1회의 메이저 릴리스(호환성이 없는 Breaking Change 포함), 3회의 마이너 릴리스(Breaking Change 없는 호환성이 있는 변경) 그리고 주단위의 패치 릴리스(버그 수정)가 실시될 예정이다. 이와 같이 Angular는 버전업이 빠르게 진행중이며 앞으로도 빈번한 변경이 예상된다. 특히 호환성이 없는 메이저 버전업에 대해서는 주의가 필요하다. 다행인 것은 Angular1에서 Angular2로의 버전업에서 나타난 것과 같은 큰 변경이 향후 버전에서는 없을 것이라는 것이다.'
    },
    2: {
        content: 'Facebook 전반에 걸쳐 다양한 광고 형식을 사용할 수 있습니다. 사용할 수 있는 광고 형식은 선택한 광고 목표에 따라 달라지며 비즈니스 목표에 부합하는 광고 목표를 선택하는 것이 중요합니다. 광고 목표는 광고의 노출 위치에도 영향을 줄 수 있습니다. 즉, 선택한 목표에 따라 광고가 Instagram, Audience Network 또는 Facebook 뉴스피드 등 가장 적절한 Facebook의 플랫폼을 통해 사람들에게 노출될 수 있습니다. 광고 목표를 선택했으면 올바른 광고 형식을 선택해야 합니다. 동영상, 이미지, 문구를 개별적으로 사용하든 여러 유형의 자산을 결합하든 비즈니스 목표에 맞는 Facebook 광고 형식을 선택할 수 있습니다. 이미지 광고: Facebook과 Instagram의 모든 광고에는 이미지가 필요합니다. 제품 또는 서비스와 관련된 이미지를 추가하는 것만으로도 광고 성과에 직접적인 영향을 주게 됩니다. 이미지 광고는 브랜드 인지도, 참여, 도달, 매장 방문 목표에 사용할 수 있습니다. 단일 이미지 광고를 사용할 수도 있고, 슬라이드, 컬렉션, 슬라이드쇼, 캔버스 광고를 사용하여 광고에 여러 이미지와 동영상을 포함할 수도 있습니다.'
    },
    3: {
        content: '1990년 고딩2때 청주에서 전국체전이 열렸다. 그리고 주간야구라는 당시 유일했던 야구잡지사에서 글을 쓰는 기자분이 그라운드안에서 내게 인사를 건냈다. 그리고 몇가지 질문을 하고나서 내게 훗날 좋은 선수가 되길바란다고했다. 그리고 다음해 1991년 여름, 국가대표로 미국에서 활약하고 돌아온 나는 공항에서 일년전 그기자형을 만났다. 당시 다른선수들과는 달리 서울에서 갈곳이 없었던 나를 집에 데리고가서 하루밤을 재워주셨다. 그기자형의 집에 도착해서 나는 기자형의 방안에 있던 책장속에 눈을 뗄수가 없었다. 책장속에는 온갓 영어로만된 미식축구, 농구,야구 잡지들이 가득했다. 그중에서 놀란라이언의 책은 나의 심장을 자극했다. 나는 기자형의 도움으로 대충 책속의 내용을 들으며 사진들을 관찰했다. 나의 그런모습을 보고는 그기자형은 내게 그책을 선물로 주셨다. 미국가서 좋은성적을 낸것보다 몇배 더 좋았다. 그뒤로 난 책속의 놀란라이언을 흉내내기시작했다. 놀란라이언처럼 강속구 투수가 되고싶었다. 그래서 런닝을 많이하고 웨이트트레이닝을 많이 한다는 책속의 내용과 사진들을 따라했다. 그리고 어느덧 난 강속구투구가 되어있었다. 꿈을 갖는다는것 그리고 꿈을 준다는것....그렇게 기자형님과 나는 꿈을 주고 받는 소중한 인연을 이어갔다. 훗날 나는 최초의 코리언 메이저리거가 되었고 그 기자형은 야구전문기자로써 최초의 야구단 사장이 되었다. 소중함과 고마운인연.'
    }
};


/***/ }),

/***/ "../../../../../src/app/common/main-feed-content/main-feed-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post {\n  margin-top: 1rem;\n}\n\n.post.metadata {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.mat-caption .material-icons {\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n\n.mat-card-content p {\n  cursor: pointer;\n}\n\n.mat-icon-button .material-icons {\n  font-size: 1.4rem;\n}\n\n.hidden {\n  display: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/main-feed-content/main-feed-content.component.html":
/***/ (function(module, exports) {

module.exports = "<!--answer-->\n<!--display: none은 최적의 방법은 아닌 것 같다...-->\n<mat-card class=\"post answer\" [style.display]=\"negative ? 'none' : 'block'\">\n  <div class=\"post metadata mat-caption\">\n    <span>답변<a href=\"#\">연관토픽</a><a href=\"#\">연관토픽</a></span>\n    <i (click)=\"negativeFeedback()\" class=\"material-icons\">&#xE5CD;</i>\n  </div>\n\n  <h2 class=\"mat-h2\">{{ answer.question }}</h2>\n\n  <mat-card-header>\n    <img mat-card-avatar [src]=\"answer.user.imgPath\" [alt]=\"answer.user.name\" width=\"50\" height=\"50\">\n    <mat-card-title class=\"mat-h3\">{{ answer.user.name }}, {{ answer.user.credential }}</mat-card-title>\n    <!--TODO: 답변시간 표시방법- 타임스탬프와 브라우저 시간차 계산(서버에서? 클라이언트에서?)-->\n    <mat-card-subtitle class=\"mat-caption\">답변 시간 표시란</mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content (click)=\"fetchExpandedContent(answer.id)\">\n    <p class=\"mat-body-1\">\n      {{ answer.content }} <a class=\"expand\">(더보기)</a>\n    </p>\n  </mat-card-content>\n  <div [hidden]=\"!isExpanded\">\n    <mat-card-actions>\n      <button mat-button><i class=\"material-icons\">&#xE83A;</i>{{ answer.stats.starHits }}</button>\n      <span class=\"mat-body-1\"><i class=\"material-icons\">&#xE0B9;</i>{{ answer.stats.comments }}</span>\n    </mat-card-actions>\n    <app-comments></app-comments>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/common/main-feed-content/main-feed-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainFeedContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expanded_content__ = __webpack_require__("../../../../../src/app/common/main-feed-content/expanded-content.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainFeedContentComponent = (function () {
    function MainFeedContentComponent() {
        this.negative = false;
        this.isExpanded = false;
    }
    MainFeedContentComponent.prototype.test = function () {
        console.log('done');
    };
    // 전체 답변내용은 각 컴포넌트가 독립적으로 통신해야함 => GET 완료 후 액션버튼 show
    // 답변내용과 댓글 스레드를 함께 받아야
    MainFeedContentComponent.prototype.fetchExpandedContent = function (id) {
        this.getCommentThreads();
        this.answer.content = __WEBPACK_IMPORTED_MODULE_1__expanded_content__["a" /* expandedContents */][id].content;
        this.isExpanded = true;
    };
    MainFeedContentComponent.prototype.getCommentThreads = function () {
        console.log('GET comments');
    };
    MainFeedContentComponent.prototype.negativeFeedback = function () {
        this.negative = !this.negative;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MainFeedContentComponent.prototype, "answer", void 0);
    MainFeedContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-feed-content',
            template: __webpack_require__("../../../../../src/app/common/main-feed-content/main-feed-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/main-feed-content/main-feed-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainFeedContentComponent);
    return MainFeedContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/nav-tab/nav-tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab {\n    height: 35px;\n    \n}\n\nnav {\n    background-color: #fff;\n    position: fixed;\n    width: 100%;\n    top: 53px;\n    z-index: 1;\n}\n\n.block {\n    height: 83px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/nav-tab/nav-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar aria-label=\"navigation links\">\n  <div class=\"container_12\">\n    <div class=\"gird_2 prefix_4\">\n      <a class=\"tab\" mat-tab-link \n        *ngFor=\"let tabLink of tabLinks; let i = index\" \n        [routerLink]=\"tabLink.link\" \n        routerLinkActive \n        #rla=\"routerLinkActive\"\n        [active]=\"rla.isActive\">\n        {{tabLink.label}}\n      </a>\n    </div>\n  </div>\n  </nav>\n<div class=\"block\"></div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/common/nav-tab/nav-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavTabComponent = (function () {
    function NavTabComponent() {
    }
    NavTabComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NavTabComponent.prototype, "tabLinks", void 0);
    NavTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-tab',
            template: __webpack_require__("../../../../../src/app/common/nav-tab/nav-tab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/nav-tab/nav-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavTabComponent);
    return NavTabComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/navigator/ask-modal/ask-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnail {\n  margin-top: -20%;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-input-element.mat-form-field-autofill-control {\n  font-size: 1.8rem;\n  font-weight: 700;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/navigator/ask-modal/ask-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ask-modal wrapper\">\n  <h1 mat-dialog-title>\n    <button mat-mini-fab color=\"primary\"><img class=\"thumbnail\" src=\"assets/images/me.png\"></button>\n    {{data.name}}님,\n  </h1>\n  <div mat-dialog-content>\n    <mat-form-field>\n      <textarea matInput placeholder=\"질문이 무엇인가요?\" matTextareaAutosize matAutosizeMinRows=\"2\"\n                matAutosizeMaxRows=\"5\" maxlength=\"150\"></textarea>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">닫기</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/common/navigator/ask-modal/ask-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var Question = (function () {
    function Question() {
    }
    return Question;
}());
var AskModalComponent = (function () {
    function AskModalComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
    }
    AskModalComponent.prototype.onNoClick = function () {
        this.thisdialogRef.close();
    };
    AskModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ask-modal',
            template: __webpack_require__("../../../../../src/app/common/navigator/ask-modal/ask-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/navigator/ask-modal/ask-modal.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], AskModalComponent);
    return AskModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/navigator/navigator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\n background-color: #25284c;\n     position: fixed;\n     top: 0;\n     width: 100%;\n     z-index: 1;\n\n}\n\n.logo {\n    color: white;\n    font-style: bold;\n    font-size: 1.5em;\n}\n\n\n.search-input {\n    background-color: #fff;\n    width: 100%;\n}\n\n\n.container_12 {\n}\n\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #FFFFFF !important;\n}\n.mat-focused .mat-form-field-label {\n  color: #FFFFFF !important;\n}\n\n.mat-form-field-ripple {\n  background-color: #FFFFFF !important;\n\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/navigator/navigator.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"nav\">\n  <div class=\"container_12\">\n    <div class=\"grid_3\">\n      <label class=\"mat-h2 logo\">NANUM</label>\n      <button (click)=\"mainTabLinks()\">test</button>\n    </div>\n    <div class=\"grid_6\">\n      <mat-form-field class=\"search-form-field\">\n        <input matInput class=\"search-input\" type=\"text\" \n              [(ngModel)]=\"inputText\">\n        <button mat-button \n                *ngIf=\"inputText\" \n                matSuffix mat-icon-button aria-label=\"Clear\" \n                (click)=\"inputText=''\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n    </div>\n    <div class=\"grid_3 push_1\">\n      <button mat-raised-button color=\"primary\"\n              (click)=\"openAskModal()\">\n              질문하기\n      </button>\n      <button mat-icon-button color=\"primary\">\n        <mat-icon>notifications</mat-icon>\n      </button>\n      <button mat-mini-fab color=\"primary\"\n              [matMenuTriggerFor]=\"menu\">\n        <mat-icon>face</mat-icon>\n      </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"profileTabLinks()\">\n        <span>내 프로필</span>\n      </button>\n      <button mat-menu-item>\n        <span>로그아웃</span>\n      </button>\n    </mat-menu>\n    </div>\n  </div>\n  </div>\n  <app-nav-tab\n    [tabLinks]=\"tabLinks\">\n  </app-nav-tab>\n"

/***/ }),

/***/ "../../../../../src/app/common/navigator/navigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ask_modal_ask_modal_component__ = __webpack_require__("../../../../../src/app/common/navigator/ask-modal/ask-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_feed_user__ = __webpack_require__("../../../../../src/app/main-feed/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_feed_topic_select_topic_select_component__ = __webpack_require__("../../../../../src/app/main-feed/topic-select/topic-select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// 더미 유저 import

// test 나중에 main-feed로 이동

var NavigatorComponent = (function () {
    function NavigatorComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        // 더미에서 me(김경훈)만 가져오기
        this.user = __WEBPACK_IMPORTED_MODULE_4__main_feed_user__["a" /* users */].me;
    }
    NavigatorComponent.prototype.ngOnInit = function () {
        this.mainTabLinks();
    };
    NavigatorComponent.prototype.mainTabLinks = function () {
        this.router.navigate(['main']);
        this.tabLinks = [
            { label: '읽기', link: 'main' },
            { label: '답변하기', link: '**' }
        ];
    };
    NavigatorComponent.prototype.profileTabLinks = function () {
        this.router.navigate(['answer']);
        this.tabLinks = [
            { label: '프로필', link: 'answer' },
            { label: '포스트', link: 'login/main' }
        ];
    };
    // 모달 오픈
    NavigatorComponent.prototype.openAskModal = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__ask_modal_ask_modal_component__["a" /* AskModalComponent */], {
            width: '620px',
            // 이름 참조해서 사용
            data: { name: this.user.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    // test 사용자가 토픽 선택 정보가 없을시 작동해야함
    NavigatorComponent.prototype.openTopicSelectModal = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__main_feed_topic_select_topic_select_component__["a" /* TopicSelectComponent */], {
            width: '800px',
            //  height: '600px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavigatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigator',
            template: __webpack_require__("../../../../../src/app/common/navigator/navigator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/navigator/navigator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavigatorComponent);
    return NavigatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: "<div class=\"not-found\">Not Found</div>",
            styles: [".not-found { font-size: 2em; padding: 60px; }"]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/question-feed-content/question-feed-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post {\n  margin-top: 1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/question-feed-content/question-feed-content.component.html":
/***/ (function(module, exports) {

module.exports = "<!--question-->\n<mat-card class=\"post question\">\n  <div class=\"post metadata mat-caption\">답변\n    <!--TODO: nth child :before? 구분점 삽입-->\n    <span><a href=\"#\">연관토픽</a></span>\n    <span><a href=\"#\">연관토픽</a></span>\n  </div>\n\n  <h2 class=\"mat-h2\">{{ question.question }}</h2>\n\n  <mat-card-actions>\n    <button class=\"mat-button\" color=\"primary\">답변 달기</button>\n    <button class=\"mat-button\" color=\"primary\">팔로우</button>\n  </mat-card-actions>\n</mat-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/common/question-feed-content/question-feed-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFeedContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionFeedContentComponent = (function () {
    function QuestionFeedContentComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], QuestionFeedContentComponent.prototype, "question", void 0);
    QuestionFeedContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question-feed-content',
            template: __webpack_require__("../../../../../src/app/common/question-feed-content/question-feed-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/question-feed-content/question-feed-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionFeedContentComponent);
    return QuestionFeedContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, path) {
        this.http = http;
        this.path = path;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post("https://siwon.me/user/login/", JSON.stringify({ email: email, password: password }), { headers: this.headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                // store email and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/login/find-password/find-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/login/login.component.css"), "");

// module
exports.push([module.i, ".find-password {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 25rem;\n  height: 20rem;\n}\n\n.input-password {\n  width: 20rem;\n  height: 4rem;\n  margin: 1.5rem auto;\n}\n\n.input-password label {\n  display: block;\n  font-size: 1.5rem;\n  color: #ffffff;\n}\n\n.input-password input {\n  padding-left: 1rem;\n  margin-top: 1rem;\n  height: 2.5rem;\n  width: 100%;\n  border: 0px;\n  border-radius: 0.5rem;\n}\n\n.txt-introduce {\n  color: #ffffff;\n  width: 250px;\n  margin: 10px auto;\n  font-size: 12px;\n  padding: 15px;\n  box-sizing: border-box;\n}\n\n.btn-change {\n  display: block;\n  width: 250px;\n  margin: 0px auto;\n  height: 30px;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 1);\n  border: 0px;\n  color: #181818;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/find-password/find-password.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"find-password\">\n  <h1 class=\"tit-introduce\">NANUM</h1>\n  <form>\n    <div class=\"input-password\">\n      <label>비밀번호 찾기</label>\n      <input type=\"text\" name=\"email\" placeholder=\"이메일\">\n    </div>\n    <p class=\"txt-introduce\">\n      기존에 가입하신 이메일 주소를 입력해 주시면 임시 비밀번호가 발송됩니다.\n    </p>\n    <button class=\"btn-change\">확인</button>\n  </form>\n</section>"

/***/ }),

/***/ "../../../../../src/app/login/find-password/find-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FindPasswordComponent = (function () {
    function FindPasswordComponent() {
    }
    FindPasswordComponent.prototype.ngOnInit = function () {
    };
    FindPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-find-password',
            template: __webpack_require__("../../../../../src/app/login/find-password/find-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/find-password/find-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FindPasswordComponent);
    return FindPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-connect/login-connect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/login/login.component.css"), "");

// module
exports.push([module.i, ".email-login {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 30rem;\n  height: 30rem;\n}\n\n.login-form {\n  margin-top: 2.5rem;\n  background-color: white;\n  font-size: 1.5rem;\n  padding: 0rem 2.5rem 2.5rem 2.5rem;\n}\n\nmat-form-field {\n  width: 25rem;\n}\n\n.input-login {\n  width: 20rem;\n  height: 10rem;\n  margin: 1.5rem auto;\n}\n\n.input-login label {\n  display: block;\n  font-size: 1.5rem;\n  color: #ffffff;\n}\n\n.input-login input {\n  padding-left: 1rem;\n  margin-top: 1rem;\n  height: 2.5rem;\n  width: 100%;\n  border: 0px;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n}\n\n.alert {\n  background-color: red;\n  width: 100%;\n  color: white;\n}\n\n.input-login {}\n\n.btn-login {\n  display: block;\n  width: 20rem;\n  margin: 2rem auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login-connect/login-connect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginConnectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var LoginConnectComponent = (function () {
    function LoginConnectComponent(http, path, auth, router) {
        this.http = http;
        this.path = path;
        this.auth = auth;
        this.router = router;
        this.matcher = new MyErrorStateMatcher();
        this.emailError = '';
        this.passwordError = '';
    }
    LoginConnectComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            emailFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email
            ]),
            passwordFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            ])
        });
    };
    LoginConnectComponent.prototype.onSubmit = function () {
        var _this = this;
        //this.loading = true;
        this.auth.login(this.emailFormControl.value, this.passwordFormControl.value)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/main']);
            }
            else {
                // login failed
                //this.error = 'Username or password is incorrect';
                //this.loading = false;
            }
        }, function (err) {
            console.log(err);
            if (err.status == 400) {
                console.log(400);
                //이메일 validation
                _this.emailError = JSON.parse(err._body).email[0];
            }
            else {
                console.log(401);
                //this.error = JSON.parse(err._body)
                console.log(err._body);
                _this.passwordError = JSON.parse(err._body).message;
                _this.loginForm.patchValue({ passwordFormControl: "" });
            }
            //this.loginForm.reset();
            console.log(_this.loginForm);
        });
    };
    Object.defineProperty(LoginConnectComponent.prototype, "emailFormControl", {
        //Form Data Return
        get: function () {
            return this.loginForm.get('emailFormControl');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginConnectComponent.prototype, "passwordFormControl", {
        get: function () {
            return this.loginForm.get('passwordFormControl');
        },
        enumerable: true,
        configurable: true
    });
    LoginConnectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-connect',
            //templateUrl: './login-connect.component.html',
            template: "\n  <section class=\"email-login\">\n    <h1 class=\"tit-introduce\">NANUM</h1>\n\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate class=\"login-form\">\n      <mat-form-field class=\"login-full-width\">\n        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-hint>\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</mat-hint>\n        \n        <mat-error *ngIf=\"emailError && !emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n          {{emailError}}\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n          <strong>\uC774\uBA54\uC77C \uC591\uC2DD</strong>\uC5D0 \uB9DE\uCD94\uC5B4\uC11C \uC785\uB825\uD574\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          \uC774\uBA54\uC77C\uC744 <strong>\uC785\uB825</strong>\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"login-full-width\">\n        <input type=\"password\" matInput placeholder=\"Password\" [formControl]=\"passwordFormControl\"\n               [errorStateMatcher]=\"matcher\" (keyup.enter)=\"onSubmit()\">\n        <mat-hint>\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</mat-hint>\n        <mat-error *ngIf=\"passwordError && passwordFormControl.hasError('required')\">\n          {{passwordError}}\n        </mat-error>\n        <mat-error *ngIf=\"!passwordError && passwordFormControl.hasError('required')\">\n          \uBE44\uBC00\uBC88\uD638\uB97C <strong>\uC785\uB825</strong>\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n        </mat-error>\n      </mat-form-field>\n      <button type=\"submit\" class=\"btn-login\" mat-raised-button \n      [disabled]=\"!(emailFormControl.valid && passwordFormControl.valid)\">\uB85C\uADF8\uC778</button>\n    </form>\n    \n  </section>\n  ",
            styles: [__webpack_require__("../../../../../src/app/login/login-connect/login-connect.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginConnectComponent);
    return LoginConnectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_login_main_login_component__ = __webpack_require__("../../../../../src/app/login/main-login/main-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_password_find_password_component__ = __webpack_require__("../../../../../src/app/login/find-password/find-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_connect_login_connect_component__ = __webpack_require__("../../../../../src/app/login/login-connect/login-connect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("../../../../../src/app/login/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_common_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/common/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */],
        children: [
            { path: 'main', component: __WEBPACK_IMPORTED_MODULE_3__main_login_main_login_component__["a" /* MainLoginComponent */] },
            { path: 'find', component: __WEBPACK_IMPORTED_MODULE_4__find_password_find_password_component__["a" /* FindPasswordComponent */] },
            { path: 'connect', component: __WEBPACK_IMPORTED_MODULE_5__login_connect_login_connect_component__["a" /* LoginConnectComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_7_app_common_not_found_not_found_component__["a" /* NotFoundComponent */] },
        ]
    }];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            /* 기능 모듈 단위 라우팅 설정  */
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-image {\n  background-image: url(\"/assets/images/login_back.png\");\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n}\n\n.layer {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.tit-introduce {\n  color: #dddddd;\n  font-size: 6rem;\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            //templateUrl: './login.component.html',
            template: "\n    <div class=\"back-image\">\n      <div class=\"layer\">\n        <router-outlet></router-outlet>\n      </div>  \n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = (function () {
    function LoginGuard(router) {
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login/main']);
        return false;
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_material_module__ = __webpack_require__("../../../../../src/app/module/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_login_main_login_component__ = __webpack_require__("../../../../../src/app/login/main-login/main-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_password_find_password_component__ = __webpack_require__("../../../../../src/app/login/find-password/find-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_connect_login_connect_component__ = __webpack_require__("../../../../../src/app/login/login-connect/login-connect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("../../../../../src/app/login/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






;






//service


var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__module_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__main_login_main_login_component__["a" /* MainLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__find_password_find_password_component__["a" /* FindPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_connect_login_connect_component__["a" /* LoginConnectComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_12__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_13__auth_service__["a" /* AuthService */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/main-login/main-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/login/login.component.css"), "");

// module
exports.push([module.i, ".login {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 40rem;\n  height: 35rem;\n}\n\n.tit-introduce {\n  color: #dddddd;\n  font-size: 4rem;\n  text-align: center;\n}\n\n.txt-introduce {\n  color: #dddddd;\n  font-size: 2rem;\n  margin: 2.5rem 0px;\n  text-align: center;\n}\n\n.btn-login {\n  text-align: center;\n}\n\n.txt-introduce {\n  color: #dddddd;\n}\n\n.btn-login button {\n  width: 20rem;\n  height: 2.5rem;\n  margin: 1.5rem auto;\n}\n\n.account {\n  margin-top: 2.5rem;\n  text-align: center;\n  color: #dddddd;\n}\n\n.account button {\n  background-color: rgba(0, 0, 0, 0);\n  border: 0px;\n  color: #dddddd;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/main-login/main-login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login\">\n  <h1 class=\"tit-introduce\">NANUM</h1>\n  <p class=\"txt-introduce\">\n    이제 전문적인 정보를 찾으로 헤메지 마세요.<br> 지식 공유 네트워크, 나눔입니다.\n  </p>\n  <div class=\"btn-login\">\n    <button class=\"email-login\" routerLink=\"../connect\">로그인</button>\n    <button class=\"facebook-login\">페이스북으로 로그인</button>\n  </div>\n  <div class=\"account\">\n    <button class=\"find-password\" routerLink=\"../find\">비밀번호 찾기</button> |\n    <button class=\"btn-signup\" routerLink=\"../signup\">회원가입</button>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/login/main-login/main-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainLoginComponent = (function () {
    function MainLoginComponent(route, navRoute) {
        this.route = route;
        this.navRoute = navRoute;
    }
    MainLoginComponent.prototype.ngOnInit = function () {
        // if(localStorage.getItem('currentUser')){
        //   this.navRoute.navigate(['/main']);
        // }
    };
    MainLoginComponent.prototype.findPassword = function () {
        this.navRoute.navigate(['find']);
    };
    MainLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-login',
            template: __webpack_require__("../../../../../src/app/login/main-login/main-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/main-login/main-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MainLoginComponent);
    return MainLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/login/login.component.css"), "");

// module
exports.push([module.i, ".email-signup {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 30rem;\n  height: 30rem;\n}\n\n.signup-form {\n  margin-top: 2.5rem;\n  background-color: white;\n  font-size: 1.5rem;\n  padding: 0rem 2.5rem 2.5rem 2.5rem;\n}\n\nmat-form-field {\n  width: 25rem;\n}\n\n.input-signup {\n  width: 20rem;\n  height: 10rem;\n  margin: 1.5rem auto;\n}\n\n.input-signup label {\n  display: block;\n  font-size: 1.5rem;\n  color: #ffffff;\n}\n\n.input-signup input {\n  padding-left: 1rem;\n  margin-top: 1rem;\n  height: 2.5rem;\n  width: 100%;\n  border: 0px;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n}\n\n.alert {\n  background-color: red;\n  width: 100%;\n  color: white;\n}\n\n.input-login {}\n\n.btn-signup {\n  display: block;\n  width: 20rem;\n  margin: 2rem auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SignupComponent = (function () {
    function SignupComponent() {
        this.matcher = new MyErrorStateMatcher();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            nameFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
            ]),
            emailFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email
            ]),
            passwordFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
            ]),
            passwordConfFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
            ])
        });
    };
    Object.defineProperty(SignupComponent.prototype, "nameFormControl", {
        //Form Data Return
        get: function () {
            return this.signupForm.get('nameFormControl');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "emailFormControl", {
        get: function () {
            return this.signupForm.get('emailFormControl');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "passwordFormControl", {
        get: function () {
            return this.signupForm.get('passwordFormControl');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "passwordConfFormControl", {
        get: function () {
            return this.signupForm.get('passwordConfFormControl');
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            //templateUrl: './signup.component.html',
            template: "\n    <section class=\"email-signup\">\n    <h1 class=\"tit-introduce\">NANUM</h1>\n\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\" novalidate class=\"signup-form\">\n\n      <mat-form-field class=\"signup-full-width\">\n        <input matInput placeholder=\"Name\" [formControl]=\"nameFormControl\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-hint>\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</mat-hint>\n        <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n          <strong>\uC774\uB984</strong>\uC744 \uC785\uB825\uD574\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"signup-full-width\">\n        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-hint>\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</mat-hint>\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n          \uC774\uBA54\uC77C\uC744 <strong>\uC785\uB825</strong>\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          <strong>\uC774\uBA54\uC77C \uC591\uC2DD</strong>\uC5D0 \uB9DE\uCD94\uC5B4\uC11C \uC785\uB825\uD574\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"signup-full-width\">\n        <input matInput placeholder=\"Password\" [formControl]=\"passwordFormControl\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-hint>\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</mat-hint>\n        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n          \uBE44\uBC00\uBC88\uD638\uB97C <strong>\uC785\uB825</strong>\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n        </mat-error>\n      </mat-form-field>\n      \n      <mat-form-field class=\"login-full-width\">\n        <input type=\"password\" matInput placeholder=\"Password-conf\" [formControl]=\"passwordConfFormControl\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-hint>\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</mat-hint>\n        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n          \uBE44\uBC00\uBC88\uD638\uB97C <strong>\uC785\uB825</strong>\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n        </mat-error>\n      </mat-form-field>\n    </form>\n\n    <button class=\"btn-signup\" mat-raised-button routerLink=\"../main\">\uD68C\uC6D0\uAC00\uC785</button>\n  </section>\n  ",
            styles: [__webpack_require__("../../../../../src/app/login/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-feed/answer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Answer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return answers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return expandedContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__("../../../../../src/app/main-feed/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_feed_question__ = __webpack_require__("../../../../../src/app/question-feed/question.ts");


var Answer = (function () {
    function Answer() {
    }
    return Answer;
}());

var answers = [
    {
        id: 1,
        user: __WEBPACK_IMPORTED_MODULE_0__user__["a" /* users */].um,
        question: __WEBPACK_IMPORTED_MODULE_1__question_feed_question__["a" /* questions */][0].question,
        content: 'Angular는 SPA(Single Page Application) 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크이다. 웹뿐만 아니라 모바일 웹, 네이티브 모바일과 데스크탑 애플리케이션까지 프론트엔드 개발에 필요한 대부분의 기능을 갖추고 있다. 정적 타입을 제공하는 TypeScript를 주력 언어로 채택하여 대규모 애플리케이션 개발에 보다 적합한 환경...',
        stats: {
            starHits: 2000,
            comments: 10
        }
    },
    {
        id: 2,
        user: __WEBPACK_IMPORTED_MODULE_0__user__["a" /* users */].mz,
        question: __WEBPACK_IMPORTED_MODULE_1__question_feed_question__["a" /* questions */][1].question,
        content: 'Facebook 전반에 걸쳐 다양한 광고 형식을 사용할 수 있습니다. 사용할 수 있는 광고 형식은 선택한 광고 목표에 따라 달라지며 비즈니스 목표에 부합하는 광고 목표를 선택하는 것이 중요합니다. 광고 목표는 광고의 노출 위치에도 영향을 줄 수 있습니다. 즉, 선택한 목표에 따라 광고가 Instagram, Audience Network 또는 Facebook...',
        stats: {
            starHits: 2000,
            comments: 10
        }
    },
    {
        id: 3,
        user: __WEBPACK_IMPORTED_MODULE_0__user__["a" /* users */].ch,
        question: __WEBPACK_IMPORTED_MODULE_1__question_feed_question__["a" /* questions */][2].question,
        content: '1990년 고딩2때 청주에서 전국체전이 열렸다. 그리고 주간야구라는 당시 유일했던 야구잡지사에서 글을 쓰는 기자분이 그라운드안에서 내게 인사를 건냈다. 그리고 몇가지 질문을 하고나서 내게 훗날 좋은 선수가 되길바란다고했다. 그리고 다음해 1991년 여름, 국가대표로 미국에서 활약하고 돌아온 나는 공항에서 일년전 그기자형을 만났다...',
        stats: {
            starHits: 2000,
            comments: 10
        }
    }
];
var expandedContents = {
    1: {
        content: 'Angular는 SPA(Single Page Application) 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크이다. 웹뿐만 아니라 모바일 웹, 네이티브 모바일과 데스크탑 애플리케이션까지 프론트엔드 개발에 필요한 대부분의 기능을 갖추고 있다. 정적 타입을 제공하는 TypeScript를 주력 언어로 채택하여 대규모 애플리케이션 개발에 보다 적합한 환경을 제공한다. 이전 버전인 AngularJS는 2009년 구글의 미스코 헤브리(Miško Hevery)가 시작한 개인 프로젝트로 시작하여 2012년 AngularJS 1.0이 공개되었으며 2017년 1.6.2이 공개되는 등 Angular 정식 버전이 공개된 이후에도 지속적으로 업데이트를 진행하고 있다. Angular는 AngularJS(version 1)의 후속 버전으로 2014년 ng 컨퍼런스에서 처음으로 소개되었다. 2016년 9월 14일 Angular 2 버전이 공개되었고 Angular 3을 뛰어 넘어 2017년 3월 23일 Angular 4, 2017년 11월 1일 Angular 5 정식 버전 pentagonal-donut이 출시되었다. Angular는 AngularJS의 후속 버전이지만 호환성이 없을 뿐아니라 알파, 베타, RC를 거치며 이전 버전과 호환성이 없는 변경인 Breaking Changes가 빈번하게 발생하여 많은 개발자를 혼란스럽게 하였다. 하지만 2016년 10월 발표된 이후 Angular 버저닝과 출시 계획에 따르면 개발자의 부담이 적은 방향으로 계획적인 버전업이 이루어질 듯하다. SemVer를 도입하여 버전 체계를 메이저, 마이너, 패치로 나누어 명확히 하고, 6개월간 1회의 메이저 릴리스(호환성이 없는 Breaking Change 포함), 3회의 마이너 릴리스(Breaking Change 없는 호환성이 있는 변경) 그리고 주단위의 패치 릴리스(버그 수정)가 실시될 예정이다. 이와 같이 Angular는 버전업이 빠르게 진행중이며 앞으로도 빈번한 변경이 예상된다. 특히 호환성이 없는 메이저 버전업에 대해서는 주의가 필요하다. 다행인 것은 Angular1에서 Angular2로의 버전업에서 나타난 것과 같은 큰 변경이 향후 버전에서는 없을 것이라는 것이다.'
    },
    2: {
        content: 'Facebook 전반에 걸쳐 다양한 광고 형식을 사용할 수 있습니다. 사용할 수 있는 광고 형식은 선택한 광고 목표에 따라 달라지며 비즈니스 목표에 부합하는 광고 목표를 선택하는 것이 중요합니다. 광고 목표는 광고의 노출 위치에도 영향을 줄 수 있습니다. 즉, 선택한 목표에 따라 광고가 Instagram, Audience Network 또는 Facebook 뉴스피드 등 가장 적절한 Facebook의 플랫폼을 통해 사람들에게 노출될 수 있습니다. 광고 목표를 선택했으면 올바른 광고 형식을 선택해야 합니다. 동영상, 이미지, 문구를 개별적으로 사용하든 여러 유형의 자산을 결합하든 비즈니스 목표에 맞는 Facebook 광고 형식을 선택할 수 있습니다. 이미지 광고: Facebook과 Instagram의 모든 광고에는 이미지가 필요합니다. 제품 또는 서비스와 관련된 이미지를 추가하는 것만으로도 광고 성과에 직접적인 영향을 주게 됩니다. 이미지 광고는 브랜드 인지도, 참여, 도달, 매장 방문 목표에 사용할 수 있습니다. 단일 이미지 광고를 사용할 수도 있고, 슬라이드, 컬렉션, 슬라이드쇼, 캔버스 광고를 사용하여 광고에 여러 이미지와 동영상을 포함할 수도 있습니다.'
    },
    3: {
        content: '1990년 고딩2때 청주에서 전국체전이 열렸다. 그리고 주간야구라는 당시 유일했던 야구잡지사에서 글을 쓰는 기자분이 그라운드안에서 내게 인사를 건냈다. 그리고 몇가지 질문을 하고나서 내게 훗날 좋은 선수가 되길바란다고했다. 그리고 다음해 1991년 여름, 국가대표로 미국에서 활약하고 돌아온 나는 공항에서 일년전 그기자형을 만났다. 당시 다른선수들과는 달리 서울에서 갈곳이 없었던 나를 집에 데리고가서 하루밤을 재워주셨다. 그기자형의 집에 도착해서 나는 기자형의 방안에 있던 책장속에 눈을 뗄수가 없었다. 책장속에는 온갓 영어로만된 미식축구, 농구,야구 잡지들이 가득했다. 그중에서 놀란라이언의 책은 나의 심장을 자극했다. 나는 기자형의 도움으로 대충 책속의 내용을 들으며 사진들을 관찰했다. 나의 그런모습을 보고는 그기자형은 내게 그책을 선물로 주셨다. 미국가서 좋은성적을 낸것보다 몇배 더 좋았다. 그뒤로 난 책속의 놀란라이언을 흉내내기시작했다. 놀란라이언처럼 강속구 투수가 되고싶었다. 그래서 런닝을 많이하고 웨이트트레이닝을 많이 한다는 책속의 내용과 사진들을 따라했다. 그리고 어느덧 난 강속구투구가 되어있었다. 꿈을 갖는다는것 그리고 꿈을 준다는것....그렇게 기자형님과 나는 꿈을 주고 받는 소중한 인연을 이어갔다. 훗날 나는 최초의 코리언 메이저리거가 되었고 그 기자형은 야구전문기자로써 최초의 야구단 사장이 되었다. 소중함과 고마운인연.'
    }
};


/***/ }),

/***/ "../../../../../src/app/main-feed/main-feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* header component */\n.app_header {\n  background-color: #25284c;\n  /* TODO: position: fixed 정리하기 */\n  /*height: 5rem;*/\n  /*color: white;*/\n}\n\n/* nav component */\n.nav {\n  background-color: white;\n  border-bottom: 1px solid #bababa;\n  /* TODO: position: fixed 정리하기 */\n  /*position: fixed;*/\n  /*height: 3rem;*/\n  /*top: 5rem;*/\n}\n/***********************************/\n\n.main {\n  background-color: #FAFAFA;\n}\n\ndiv.actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\ndiv.actions * {\n  cursor: pointer;\n  margin-right: 0.5rem;\n  margin-bottom: 0;\n  vertical-align: middle;\n}\n\ndiv.actions .ask {\n  padding-top: 3px;\n}\n\n\n\n.sidebar * {\n  /*TODO: position: fixed 정리하기*/\n  /*position: fixed;*/\n  /*top: 8rem;*/\n  box-sizing: border-box;\n}\n\n.sidebar,\n.welcome {\n  margin-top: 2rem;\n}\n\n.sidebar_header {\n  padding-left: 1rem;\n  background-color: #383d72;\n  width: 100%;\n  line-height: 4rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  color: #F2F3F4;\n  margin-bottom: 0;\n}\n\n.sidebar_lists {\n  background-color: rgba(235, 235, 235, 0.50);\n  border-radius: 0 0 0.5rem 0.5rem;\n}\n\n.sidebar_lists li {\n  border-radius: 0.5rem;\n}\n\n.sidebar_lists i {\n  font-size: 1.5rem;\n  float: left;\n}\n\n.sidebar_lists a {\n  color: #44403E;\n  font-weight: 400;\n  text-decoration: none;\n}\n\n.sidebar_lists a:hover {\n  color: #5256AA;\n}\n\n.sidebar_filters a {\n  display: inline-block;\n  padding: 0.7rem 1rem;\n  width: 100%;\n  height: 100%;\n}\n\n.sidebar_lists li:hover {\n  /*background-color: #E2E3F1;*/\n}\n\n.sidebar_edit {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-weight: 700;\n  color: #44403E;\n  padding: 0.7rem 1rem;\n}\n\n.sidebar_edit a:hover {\n  text-decoration: underline;\n}\n\n.sidebar_topics li {\n  position: relative;\n}\n\n.sidebar_topics li::before {\n  position: absolute;\n  content: \"\";\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: #5256AA;\n  top: calc(50% - 0.25rem);\n  left: 1rem;\n}\n\n.sidebar_topics a {\n  margin-left: 1rem;\n  display: inline-block;\n  padding: 0.5rem 0 0.5rem 1rem;\n  width: calc(100% - 1rem);\n  height: 100%;\n}\n\n\n\n/* profile img 공통 */\n.thumbnail {\n  border-radius: 50%;\n}\n\n.thumbnail.md {\n  width: 40px;\n  height: 40px;\n}\n\n.thumbnail.sm {\n  width: 30px;\n  height: 30px;\n}\n\n\n/* welcome card */\n\n.mat-card.welcome mat-card-title {\n  display: inline-block;\n}\n\n.welcom.actions {\n  vertical-align: middle;\n}\n\n.welcome .ask {\n  color: #999999;\n}\n\n.welcome .ask:hover {\n  /*color: #25274D;*/\n  color: #5256AA;\n}\n\n/* post 공통 */\n.mat-card.post {\n  margin-top: 1rem;\n}\n\n/* post 상단 공통*/\n/* TODO: cursor: pointer 속성 일괄적용하기(preview 클래스, action 클래스 등으로) */\n.post.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n\n.post mat-card-subtitle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n}\n\n.post .tag {\n  margin-right: 1rem;\n}\n\n.answer-info {\n  margin-left: 0.5rem;\n  display: inline-block;\n  height: 100%;\n}\n\n.answer-info .author {\n  margin: 5px 0;\n}\n\n.mat-card-content,\n.post.header>.material-icons,\n.post .topic {\n  cursor: pointer;\n}\n\n.mat-card-content .material-icons {\n  position: absolute;\n}\n\n.mat-card-action i.material-icons {\n  font-size: 1.5rem !important;\n}\n\n\n.hidden {\n  display: none;\n}\n\n.mat-card-footer {\n  background-color: rgba(235, 235, 235, 0.50);\n  padding: 2rem;\n}\n\n.comment-input {\n  position: relative;\n}\n\n.mat-card-footer .thumbnail {\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n}\n\n.mat-card-footer .mat-form-field {\n  margin: 0 1rem 0 3rem;\n  width: 75%;\n}\n\n.mat-card-footer .mat-button {\n  position: absolute;\n  top: 8px;\n}\n\n\n\n/*comment*/\n\n.comment {\n  position: relative;\n  padding-left: 3rem;\n}\n\n.comment_wrapper {\n  padding: 3px 0;\n}\n\n.comment_header,\n.comment_content {\n  color: #100c08;\n  margin-bottom: 0.5rem;\n}\n\n.comment_user {\n  font-weight: 700;\n}\n\n.comment_content {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/*.comment_list.action {*/\n  /*display: inline-block;*/\n  /*line-height: 2rem;*/\n  /*cursor: pointer;*/\n  /*float: left;*/\n  /**/\n  /*padding: 0.5rem;*/\n  /*margin: -0.5rem;*/\n/*}*/\n\n/*.comment_list.action .material-icons {*/\n  /*float: left;*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-feed/main-feed.component.html":
/***/ (function(module, exports) {

module.exports = "<!--header: 범용 컴포넌트-->\n<!--<header class=\"app_header\">-->\n  <!--<div class=\"container_12\">-->\n    <!--<div class=\"grid_3\"><h1 class=\"mat-h2\">Nanum</h1></div>-->\n    <!--<div class=\"grid_6\"><input type=\"text\" class=\"mat-input\" placeholder=\"search-bar\"></div>-->\n    <!--<div class=\"grid_3\">-->\n      <!--<button mat-icon-button color=\"primary\">-->\n        <!--<mat-icon>notifications</mat-icon>-->\n      <!--</button>-->\n      <!--<button mat-mini-fab color=\"primary\">-->\n        <!--<mat-icon>face</mat-icon>-->\n      <!--</button></div>-->\n      <!--<button mat-raised-button color=\"primary\" (click)=\"openAskModal()\">-->\n        <!--<span class=\"mat-button\">질문하기</span>-->\n      <!--</button>-->\n  <!--</div>-->\n<!--</header>-->\n\n<app-navigator></app-navigator>\n\n<!--TODO: component 분리-->\n<div class=\"container_12\">\n  <nav class=\"nav\">\n    <div class=\"grid_2 prefix_4\">\n      <a href=\"#\"><span>읽기</span></a>\n    </div>\n    <div class=\"grid_2 suffix_4\">\n      <a href=\"#\"><span>답변하기</span></a>\n    </div>\n  </nav>\n</div>\n\n<!--main: 큰 레이아웃(2:8:2 그리드)만 공유가능-->\n<div class=\"main\">\n\n  <div class=\"container_12\">\n    <div class=\"grid_2\">\n      <!--TODO: component 분리-->\n        <div class=\"sidebar\">\n          <h1 class=\"sidebar_header mat-h1\">피드</h1>\n          <div class=\"sidebar_lists\">\n            <ul class=\"sidebar_filters mat-caption\">\n              <li><a href=\"#\"><i class=\"material-icons\">whatshot</i>인기글</a></li>\n              <li><a href=\"#\"><i class=\"material-icons\">bookmark_border</i>북마크한 답변</a></li>\n              <li><a href=\"#\"><i class=\"material-icons\">trending_up</i>최신 글</a></li>\n              <!--TODO: edit 링크 추가-->\n            </ul>\n            <div class=\"sidebar_edit mat-caption\">\n              <span><i class=\"material-icons\">folder_special</i>내 토픽</span><a href=\"#\">edit</a>\n            </div>\n            <ul class=\"sidebar_topics mat-caption\">\n              <li><a href=\"#\">토픽 1</a></li>\n              <li><a href=\"#\">토픽 2</a></li>\n              <li><a href=\"#\">토픽 3</a></li>\n            </ul>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"grid_8\">\n\n      <!--welcome-->\n      <mat-card class=\"welcome\">\n        <!--TODO: routing to profile page-->\n        <div class=\"actions\">\n          <img class=\"thumbnail md\" [src]=\"me.imgPath\">\n          <!--TODO: event to askModal-->\n          <a class=\"ask mat-h1\" (click)=\"openAskModal(me.name)\">{{ me.name }}님, 질문이 무엇인가요?</a>\n        </div>\n      </mat-card>\n\n      <!--main-feed-content-->\n        <!--TODO: class: post answer 아닌지?-->\n      <mat-card *ngFor=\"let answer of answers\" class=\"post\">\n        <!--post action: topic links-->\n        <div class=\"post header\">\n          <span class=\"post metadata mat-caption\">답변<a href=\"#\" class=\"topic\">연관토픽</a></span>\n          <i (click)=\"negativeFeedback(answer.id)\" class=\"material-icons md-18\">close</i>\n        </div>\n        <!--TODO: routing to answer detail page-->\n        <mat-card-title>\n          {{ answer.question }}\n        </mat-card-title>\n        <mat-card-subtitle>\n          <img class=\"thumbnail md\" [src]=\"answer.user.imgPath\" [alt]=\"answer.user.name\" width=\"50\" height=\"50\">\n          <!--TODO: 답변시간 표시방법- 타임스탬프와 브라우저 시간차 계산(서버에서? 클라이언트에서?)-->\n          <div class=\"answer-info\">\n            <div class=\"author\">\n              {{ answer.user.name }}, {{ answer.user.credential }}\n            </div>\n            <div class=\"timestamp mat-caption\">\n              답변 시간 표시란\n            </div>\n          </div>\n        </mat-card-subtitle>\n        <mat-card-content (click)=\"fetchExpandedContent(answer.id)\">\n          <p class=\"mat-body-1\">\n            {{ answer.content }} <i class=\"material-icons md-18\">expand_more</i>\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button><i class=\"material-icons\">star_border</i>{{ answer.stats.starHits }}</button>\n          <span class=\"mat-body-1\"><i class=\"material-icons\">chat_bubble_outline</i>{{ answer.stats.comments }}</span>\n        </mat-card-actions>\n\n        <!--확장 시 표시-->\n        <mat-card-footer *ngIf=\"true\">\n          <div class=\"comment-area\">\n            <div class=\"comment-input\">\n              <img class=\"thumbnail sm\" src=\"assets/images/me.png\">\n              <mat-form-field>\n              <textarea [(ngModel)]=\"commentText\" matInput placeholder=\"댓글을 입력하세요\" matTextareaAutosize matAutosizeMinRows=\"1\"\n                matAutosizeMaxRows=\"100\"></textarea>\n              </mat-form-field>\n              <button mat-button (click)=\"test()\" [disabled]=\"!commentText\">댓글달기</button>\n            </div>\n\n            <div class=\"comment-list\">\n              <div class=\"comment\">\n                <div class=\"comment_wrapper\">\n                  <img src=\"assets/images/zuckerberg.jpg\" class=\"thumbnail sm\">\n                  <div class=\"comment_header\">\n                    <div class=\"comment_user mat-caption\">user.name</div>\n                    <div class=\"comment_metadata mat-caption\">\"modified_at\"</div>\n                  </div>\n                  <div class=\"comment_content\">\n                    <p>Hello world</p>\n                  </div>\n                  <div class=\"comment_actions\">\n\n                  </div>\n                </div>\n                <div class=\"comment depth1\">\n                  <div class=\"comment_wrapper\">\n                    <img src=\"assets/images/zuckerberg.jpg\" class=\"thumbnail sm\">\n                    <div class=\"comment_header\">\n                      <div class=\"comment_user mat-caption\">\"user.name\"</div>\n                      <div class=\"comment_metadata mat-caption\">\"modified_at\"</div>\n                    </div>\n                    <div class=\"comment_content\">\n                      <p>Hello world</p>\n                    </div>\n                  </div>\n                  <div class=\"comment depth2\">\n                    <div class=\"comment_wrapper\">\n                      <img src=\"assets/images/zuckerberg.jpg\" class=\"thumbnail sm\">\n                      <div class=\"comment_header\">\n                        <div class=\"comment_user mat-caption\">user.name</div>\n                        <div class=\"comment_metadata mat-caption\">\"modified_at\"</div>\n                      </div>\n                      <div class=\"comment_content\">\n                        <p>Hello world</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <span class=\"comment-list action\">댓글 더보기<i class=\"material-icons md-18\">expand_more</i></span>\n            </div>\n          </div>\n        </mat-card-footer>\n      </mat-card>\n\n    </div>\n    <!--우측 메뉴를 위해 남겨둔 공간-->\n    <div class=\"grid_2\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-feed/main-feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_navigator_ask_modal_ask_modal_component__ = __webpack_require__("../../../../../src/app/common/navigator/ask-modal/ask-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__answer__ = __webpack_require__("../../../../../src/app/main-feed/answer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// dummys

var MainFeedComponent = (function () {
    function MainFeedComponent(dialog) {
        this.dialog = dialog;
        // 로그인 사용자 정보 (dummy)
        // 사용처: 메인피드의 질문하기 버튼, 댓글달기, 질문피드의 답변달기
        // 메인페이지, 질문피드 페이지 로드 시 전역에서 쥐고 있어야 하는 || 또는 토큰정보를 참조해야하는 데이터
        this.me = {
            name: '김경훈',
            credential: 'fastcampus WPS 수강생',
            imgPath: 'assets/images/me.png'
        };
    }
    MainFeedComponent.prototype.ngOnInit = function () {
        this.getAnswers();
    };
    MainFeedComponent.prototype.getAnswers = function () {
        this.answers = __WEBPACK_IMPORTED_MODULE_3__answer__["a" /* answers */];
    };
    MainFeedComponent.prototype.fetchExpandedContent = function (id) {
        this.answers = this.answers.map(function (answer) {
            if (answer.id === id) {
                Object.assign(answer, __WEBPACK_IMPORTED_MODULE_3__answer__["b" /* expandedContents */][id]);
            }
            return answer;
        });
    };
    MainFeedComponent.prototype.openAskModal = function (name) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__common_navigator_ask_modal_ask_modal_component__["a" /* AskModalComponent */], {
            width: '620px',
            data: { name: name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    MainFeedComponent.prototype.test = function () {
        console.log('test');
    };
    MainFeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-feed',
            template: __webpack_require__("../../../../../src/app/main-feed/main-feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-feed/main-feed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], MainFeedComponent);
    return MainFeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-feed/topic-select/topic-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-tile {\n  background: lightblue;\n}\n\n.topic-img {\n    width: 100%;\n    height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-feed/topic-select/topic-select.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>관심사 설정하기</h1>\n<mat-horizontal-stepper>  \n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>관심 분야</ng-template>\n      <p>나눔에 오신것을 환영합니다! 당신이 관심가질만한 포스트들을 찾아드리기 위해 밑에서 관심이 가는 주제중 3가지를 골라주세요.</p>        \n      <div mat-dialog-content class=\"topic-container\">\n        <mat-grid-list cols=\"5\" rowHeight=\"1:1\" gutterSize=\"7px\">\n          \n          <mat-grid-tile *ngFor=\"let topic of topics\">\n            <img class=\"topic-img\" [src]=\"topic.imge\">\n            <mat-grid-tile-footer>\n              <mat-checkbox [checked]=\"topic.follow\">{{topic.name}}</mat-checkbox>\n             </mat-grid-tile-footer>\n          </mat-grid-tile>\n\n        </mat-grid-list>\n      </div>\n      <div>\n        <button mat-button matStepperNext>다음</button>\n      </div>\n    </form>\n  </mat-step>\n    \n    <mat-step [stepControl]=\"secondFormGroup\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>전문 분야</ng-template>\n        <p>에 관심있으시군요! 그렇다면 전문분야는 어떻게 되시나요? 다음 중 자신이 답변할 수 있는 것을 1~3가지를 선택해주세요</p>\n        <div mat-dialog-content class=\"topic-container\">\n          <mat-grid-list cols=\"5\" rowHeight=\"1:1\" gutterSize=\"7px\">\n\n            <mat-grid-tile *ngFor=\"let topic of topics\">\n              <img class=\"topic-img\" [src]=\"topic.imge\">\n              <mat-grid-tile-footer>\n                <mat-checkbox [checked]=\"topic.follow\">{{topic.name}}</mat-checkbox>\n              </mat-grid-tile-footer>\n            </mat-grid-tile>\n            \n          </mat-grid-list>\n        </div>      \n        <div>\n          <button mat-button matStepperNext>다음</button>\n        </div>\n      </form>\n    </mat-step>\n    \n    <mat-step>\n      <ng-template matStepLabel>완료</ng-template>\n      <p>관심사 설정이 완료되었습니다. 나눔 회원이 되신것을 환영합니다!</p>\n      <div>\n        <button mat-button (click)=\"onNoClick()\">선택 완료</button>\n      </div>\n    </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "../../../../../src/app/main-feed/topic-select/topic-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TopicSelectComponent = (function () {
    function TopicSelectComponent(_formBuilder, thisdialogRef, data) {
        this._formBuilder = _formBuilder;
        this.thisdialogRef = thisdialogRef;
        this.data = data;
        this.topics = [
            { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
            { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
            { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
            { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
            { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
            { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
            { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
            { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false }
        ];
    }
    TopicSelectComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
    };
    TopicSelectComponent.prototype.onNoClick = function () {
        this.thisdialogRef.close();
    };
    TopicSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topic-select',
            template: __webpack_require__("../../../../../src/app/main-feed/topic-select/topic-select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-feed/topic-select/topic-select.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogRef */], Object])
    ], TopicSelectComponent);
    return TopicSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-feed/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return users; });
var User = (function () {
    function User() {
    }
    return User;
}());

var users = {
    me: {
        name: '김경훈',
        credential: 'fastcampus WPS 수강생',
        imgPath: 'assets/images/me.png'
    },
    um: {
        name: '이웅모',
        credential: 'Angular 능력자',
        imgPath: 'assets/images/leewoongmo.jpg'
    },
    ch: {
        name: '박찬호',
        credential: '투머치토커',
        imgPath: 'assets/images/parkchanho.jpeg'
    },
    mz: {
        name: '주커버그',
        credential: 'Facebook Founder',
        imgPath: 'assets/images/zuckerberg.jpg'
    }
};


/***/ }),

/***/ "../../../../../src/app/module/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// material



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatToolbarModule */]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile-topic-modal/profile-topic-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-topic-modal/profile-topic-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile-topic-modal works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile-topic-modal/profile-topic-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTopicModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProfileTopicModalComponent = (function () {
    function ProfileTopicModalComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
    }
    ProfileTopicModalComponent.prototype.ngOnInit = function () {
    };
    ProfileTopicModalComponent.prototype.onNoClick = function () {
        this.thisdialogRef.close();
    };
    ProfileTopicModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-topic-modal',
            template: __webpack_require__("../../../../../src/app/profile/profile-topic-modal/profile-topic-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile-topic-modal/profile-topic-modal.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], ProfileTopicModalComponent);
    return ProfileTopicModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    .profile {\n      position: relative;\n      width: 630px;\n      height: auto;\n      margin-top: 50px;\n    }\n    /* 사진 업로드 테스트 */\n    \n    #img-upload {\n      display: none;\n    }\n    \n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n    \n    .user-profile-img {\n      display: inline-block;\n      position: absolute;\n      /* float: left; */\n      top: 65px;\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n    \n    .user-profile-img:hover {\n      cursor: pointer;\n    }\n    /* 여기까지 사진 업로드 테스트 */\n    \n    .profile-top-content {\n      margin-left: 140px;\n      padding-top: 30px;\n      overflow: hidden;\n      height: auto;\n    }\n    \n    .show-rest-user-article-button {\n      display: inline-block;\n    }\n    \n    .show-rest-user-article-button:hover {\n      cursor: pointer;\n    }\n    \n    .profile-top-user-article {\n      display: inline-block;\n    }\n    \n    .profile-top-chips-container {\n      margin-top: 20px;\n    }\n    \n    .profile-top-chip-follow,\n    .profile-top-chip-ask {\n      width: 70px;\n    }\n    /* 여기까지 프로필 상단 */\n    \n    .profile-middle {\n      min-height: 230px;\n    }\n    \n    .profile-middle-left-content {\n      position: relative;\n      display: inline-block;\n      font-size: 1.2rem;\n    }\n    \n    .profile-middle-right-content {\n      float: right;\n      margin-right: 180px;\n      font-size: 1.2rem;\n      clear: right;\n    }\n    \n    .user-resume-list-container,\n    .user-activity-summary-list-container {\n      margin-top: 20px;\n    }\n    \n    .user-activity-summary-list-container li {\n      display: block;\n    }\n    /* \n    .user-activity-summary-list-container li mat-icon {\n      padding-top: 5px;\n    } */\n    /* \n    .user-activity-summary-list-container > li > span {\n      float: right;\n      display: block;\n      margin-top: 4px;\n      clear: both;\n    } \n*/\n    /* 여기까지 중단 */\n    \n    .profile-list-box {\n      display: inline-block;\n      width: 140px;\n      height: 140px;\n      background-color: gray;\n      box-sizing: border-box;\n      float: left;\n      margin: 0 0 5px 5px;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n  <div class=\"grid_2\">\n  </div>\n\n\n  <div class=\"grid_8\">\n    <!-- Top -->\n    <mat-card class=\"profile profile-top\">\n      <div class=\"user-profile-img\" (click)=\"imgUpload.click()\">\n        <input id=\"img-upload\" type='file' accept=\"image/*\" (change)=\"readUrl($event)\" #imgUpload>\n        <img *ngFor=\"let img of dataUrl\" [src]=\"img\">\n      </div>\n      <!-- 사진 업로드 구현 테스트용! -->\n\n\n      <div class=\"profile-top-content\">\n        <span>\n          <mat-card-title class=\"profile-title\">\n            <strong class=\"mat-h2\">{{ getUserName() }}</strong>\n          </mat-card-title>\n        </span>\n        <br>\n\n        <mat-card-content>\n          <span *ngIf=\"!isClicked\" class=\"profile-top-user-article\">{{ getUserArticle() }}\n            <!-- <span class=\"show-rest-user-article-button\" *ngIf=\"isArticleOvered\" (click)=\"toggleShowArticle()\">...더보기</span> -->\n          </span>\n          <!-- <span *ngIf=\"isClicked\">{{ userArticle }}</span> -->\n\n          <div class=\"profile-top-chips-container\">\n            <div class=\"profile-top-chips\">\n              <button *ngIf=\"isSignIn\" class=\"profile-top-chip-follow\">팔로워</button>\n              <!-- 자기 자신 프로필이면 *ngIf로 안보이도록 설정하기-->\n              <button class=\"profile-top-chip-ask\">질문하기</button>\n            </div>\n          </div>\n        </mat-card-content>\n      </div>\n    </mat-card>\n\n\n\n\n\n    <!-- Middle -->\n    <mat-card class=\"profile profile-middle\">\n      <div class=\"profile-middle-content\">\n        <div class=\"profile-middle-left-content\">\n          <span class=\"user-resume\">\n            <strong class=\"mat-h2\">교육 및 배경</strong>\n          </span>\n          <ul class=\"user-resume-list-container\">\n            <li *ngFor=\"let resume of userResume\">\n              <mat-icon>{{ getUserResumeIcon(resume.type) }}</mat-icon>\n              <span>{{ resume.content }}</span>\n            </li>\n          </ul>\n        </div>\n\n\n        <div class=\"profile-middle-right-content\">\n          <span class=\"user-activity-summary\">\n            <strong class=\"mat-h2\">활동 요약</strong>\n          </span>\n          <ul class=\"user-activity-summary-list-container\">\n            <li>\n              <mat-icon>remove_red_eye</mat-icon>\n              <span class=\"test\">{{ DUMMY_USER_PROFILE.Activity.Answer_View }}건의 답변 뷰</span>\n            </li>\n            <li>\n              <mat-icon>create</mat-icon>\n              <span>{{ DUMMY_USER_PROFILE.Activity.Answers }}건의 답변</span>\n            </li>\n            <li>\n              <mat-icon>star_border</mat-icon>\n              <span>{{ DUMMY_USER_PROFILE.Activity.Stars }}건의 추천</span>\n            </li>\n            <li>\n              <mat-icon>person_add</mat-icon>\n              <span>{{ DUMMY_USER_PROFILE.Activity.Follow }}명 팔로잉</span>\n            </li>\n            <li>\n              <mat-icon>people</mat-icon>\n              <span>{{ DUMMY_USER_PROFILE.Activity.Follower }}명의 팔로워</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </mat-card>\n\n\n\n\n    <!-- Bottom -->\n    <mat-card class=\"profile profile-bottom\">\n      <mat-tab-group class=\"profile-tab-conatainer\">\n        <mat-tab class=\"interested-in\" label=\"관심분야\">\n          <ul class=\"list-of-interests\">\n            <li *ngFor=\"let list of interestContainer\">\n              <div class=\"profile-list-box interested-box\">{{ list.content }}</div>\n            </li>\n          </ul>\n        </mat-tab>\n\n\n\n        <mat-tab class=\"experts-in\" label=\"전문분야\">\n          <ul class=\"list-of-experts\">\n            <li *ngFor=\"let list of expertContainer\">\n              <div class=\"profile-list-box experts-box\">{{ list.content }}</div>\n            </li>\n          </ul>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n\n\n\n\n    <!-- Test Page용 템플릿 -->\n    <br>\n    <br>\n    <br>\n\n    <div class=\"test-container\">\n      <mat-card>\n        <mat-form-field>\n          <input matInput placeholder=\"유저 이름을 입력해 주세요\" [(ngModel)]=\"TEST_userName\" (keyup.enter)=\"TEST_modifyUserName()\">\n        </mat-form-field>\n\n        <br>\n\n        <mat-form-field>\n          <input matInput placeholder=\"유저 소개글을 입력해 주세요\" [(ngModel)]=\"TEST_userArticle\" (keyup.enter)=\"TEST_modifyUserArticle()\">\n        </mat-form-field>\n      </mat-card>\n    </div>\n\n  </div>\n  <!-- 그리드 메인(8단) 종료 태그 -->\n\n\n\n\n\n  <div class=\"grid_2\">\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_topic_modal_profile_topic_modal_component__ = __webpack_require__("../../../../../src/app/profile/profile-topic-modal/profile-topic-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(dialog) {
        this.dialog = dialog;
        // TEST_DUMMY_USER_DATA ---> 페이지 구성 각 부분별로 API가 있다.
        this.DUMMY_USER_PROFILE = {
            Name: '김경훈',
            Article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.',
            Resume: [
                { pk: 1, type: 'Job', content: '지식서비스 Nanum Founder' },
                { pk: 2, type: 'Job', content: '대통령' },
                { pk: 3, type: 'School', content: '성균관대학교' },
                { pk: 4, type: 'School', content: '서울고등학교' }
            ],
            Activity: {
                Answer_View: '555',
                Answers: '1,400',
                Stars: '77,777',
                Follow: '100',
                Follower: '200'
            },
            Interest: [
                { pk: 1, type: 'Interest', content: 'Interest-test0' },
                { pk: 2, type: 'Interest', content: 'Interest-test1' },
                { pk: 3, type: 'Interest', content: 'Interest-test2' },
                { pk: 4, type: 'Interest', content: 'Interest-test3' },
                { pk: 5, type: 'Interest', content: 'Interest-test4' },
                { pk: 6, type: 'Interest', content: 'Interest-test5' },
                { pk: 7, type: 'Interest', content: 'Interest-test6' },
                { pk: 8, type: 'Interest', content: 'Interest-test7' }
            ],
            Experts: [
                { pk: 1, type: 'Experts', content: 'Experts-test0' },
                { pk: 2, type: 'Experts', content: 'Experts-test1' },
                { pk: 3, type: 'Experts', content: 'Experts-test2' },
                { pk: 4, type: 'Experts', content: 'Experts-test3' },
                { pk: 5, type: 'Experts', content: 'Experts-test4' },
                { pk: 6, type: 'Experts', content: 'Experts-test5' },
                { pk: 7, type: 'Experts', content: 'Experts-test6' },
                { pk: 8, type: 'Experts', content: 'Experts-test7' }
            ]
        };
        // 사진 업로드 테스트!
        this.dataUrl = [];
        // 하단부 사진 컨테이너
        this.interestContainer = [];
        this.expertContainer = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.userArticle = this.DUMMY_USER_PROFILE.Article;
        this.userResume = this.DUMMY_USER_PROFILE.Resume;
        this.isArticleOvered = false;
        this.isClicked = false;
        this.isSignIn = true; // 추후에 로그인 관련 컴포넌트가 개발 완료되면 기본값으로 false를 부여할 예정
        // 하단부 테스트
        this.interestContainer = this.DUMMY_USER_PROFILE.Interest.slice();
        this.expertContainer = this.DUMMY_USER_PROFILE.Experts.slice();
        // 테스팅 페이지 조작용
        this.TEST_userName = '';
        this.TEST_userArticle = '';
    };
    // 사진 업로드 테스트!
    ProfileComponent.prototype.readUrl = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
            _this.dataUrl.push(loadEvent.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ProfileComponent.prototype.getUserName = function () {
        return this.DUMMY_USER_PROFILE.Name;
    };
    ProfileComponent.prototype.getUserArticle = function () {
        // this.userArticle = this.DUMMY_UserArticle;
        var _userArticle = this.DUMMY_USER_PROFILE.Article;
        // is Article.length > 200 ?
        // if (this.DUMMY_USER_PROFILE.Article.length > 200) {
        //   const _userArticle_COPY: string[] = _userArticle.slice(0, 200);
        //   this.isArticleOvered = true;
        //   return _userArticle_COPY;
        // }
        return _userArticle;
    };
    ProfileComponent.prototype.toggleShowArticle = function () {
        this.isClicked = !this.isClicked;
    };
    // 여기까지 상단
    ProfileComponent.prototype.getUserResumeIcon = function (resume) {
        switch (resume) {
            case 'Job':
                return 'business_center';
            case 'School':
                return 'school';
        }
    };
    // 여기까지 중단
    // 테스트 조작용 로직
    ProfileComponent.prototype.TEST_modifyUserName = function () {
        if (this.TEST_userName) {
            this.DUMMY_USER_PROFILE.Name = this.TEST_userName;
            this.TEST_userName = '';
        }
    };
    ProfileComponent.prototype.TEST_modifyUserArticle = function () {
        if (this.TEST_userArticle) {
            this.userArticle = this.TEST_userArticle;
            this.DUMMY_USER_PROFILE.Article = this.TEST_userArticle;
            this.TEST_userArticle = '';
        }
    };
    ProfileComponent.prototype.openProfileTopicModal = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__profile_topic_modal_profile_topic_modal_component__["a" /* ProfileTopicModalComponent */], {
            width: '620px',
            // 이름 참조해서 사용
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question-feed/question-feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* header component */\n.app_header {\n  background-color: #25284c;\n  height: 5rem;\n  color: white;\n}\n\n/* nav component */\n.nav {\n  background-color: white;\n  height: 3rem;\n  border-bottom: 1px solid #bababa;\n}\n/***********************************/\n\n.main {\n  background-color: #FAFAFA;\n  height: 100%;\n}\n\n\n\n.sidebar {\n  margin-top: 2rem;\n}\n\n.sidebar * {\n  /*TODO: position: fixed 정리하기*/\n  /*position: fixed;*/\n  /*top: 8rem;*/\n  box-sizing: border-box;\n}\n\n.sidebar_header {\n  padding-left: 1rem;\n  background-color: #383d72;\n  width: 100%;\n  line-height: 4rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  color: #F2F3F4;\n  margin-bottom: 0;\n}\n\n.sidebar_lists {\n  background-color: rgba(235, 235, 235, 0.50);\n  border-radius: 0 0 0.5rem 0.5rem;\n}\n\n.sidebar_lists li {\n  border-radius: 0.5rem;\n}\n\n.sidebar_lists i {\n  font-size: 1.5rem;\n  float: left;\n}\n\n.sidebar_lists a {\n  color: #44403E;\n  font-weight: 400;\n  text-decoration: none;\n}\n\n.sidebar_lists a:hover {\n  color: #5256AA;\n}\n\n.sidebar_filters a {\n  display: inline-block;\n  padding: 0.7rem 1rem;\n  width: 100%;\n  height: 100%;\n}\n\n.sidebar_lists li:hover {\n  /*background-color: #E2E3F1;*/\n}\n\n.sidebar_edit {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-weight: 700;\n  color: #44403E;\n  padding: 0.7rem 1rem;\n}\n\n.sidebar_edit a:hover {\n  text-decoration: underline;\n}\n\n.sidebar_topics li {\n  position: relative;\n}\n\n.sidebar_topics li::before {\n  position: absolute;\n  content: \"\";\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: #5256AA;\n  top: calc(50% - 0.25rem);\n  left: 1rem;\n}\n\n.sidebar_topics a {\n  margin-left: 1rem;\n  display: inline-block;\n  padding: 0.5rem 0 0.5rem 1rem;\n  width: calc(100% - 1rem);\n  height: 100%;\n}\n\n\n\n.mat-card.post:first-of-type {\n  margin-top: 2rem;\n}\n\n.mat-card.post {\n  margin-top: 1rem;\n}\n\n.post.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n\n.post .tag {\n  margin-right: 1rem;\n}\n\n.answer-info {\n  margin-left: 0.5rem;\n  display: inline-block;\n  height: 100%;\n}\n\n.answer-info .author {\n  margin: 5px 0;\n}\n\n.post.header>.material-icons,\n.post .topic {\n  cursor: pointer;\n}\n\n.mat-card-content .material-icons {\n  position: absolute;\n}\n\n.mat-card-action i.material-icons {\n  font-size: 1.5rem !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-feed/question-feed.component.html":
/***/ (function(module, exports) {

module.exports = "<!--header: 범용 컴포넌트-->\n<header class=\"app_header\">\n  <div class=\"container_12\">\n    <div class=\"grid_3\"><h1 class=\"mat-h2\">Nanum</h1></div>\n    <div class=\"grid_6\"><input type=\"text\" class=\"mat-input\" placeholder=\"search-bar\"></div>\n    <div class=\"grid_3\">\n      <button mat-icon-button color=\"primary\">\n        <mat-icon>notifications</mat-icon>\n      </button>\n      <button mat-mini-fab color=\"primary\">\n        <mat-icon>face</mat-icon>\n      </button></div>\n    <button mat-raised-button color=\"primary\" (click)=\"openAskModal()\">\n      <span class=\"mat-button\">질문하기</span>\n    </button>\n  </div>\n</header>\n\n<!--TODO: component 분리-->\n<nav class=\"nav\">\n  <div class=\"container_12\">\n    <div class=\"grid_2 prefix_4\">\n      <a href=\"#\"><span>읽기</span></a>\n    </div>\n    <div class=\"grid_2 suffix_4\">\n      <a href=\"#\"><span>답변하기</span></a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"main\">\n\n  <div class=\"container_12\">\n    <div class=\"grid_2\">\n      <!--TODO: component 분리-->\n      <div class=\"sidebar\">\n        <h1 class=\"sidebar_header mat-h1\">피드</h1>\n        <div class=\"sidebar_lists\">\n          <ul class=\"sidebar_filters mat-caption\">\n            <li><a href=\"#\"><i class=\"material-icons\">bookmark_border</i>북마크한 질문</a></li>\n            <li><a href=\"#\"><i class=\"material-icons\">trending_up</i>최신 질문</a></li>\n            <!--TODO: edit 링크 추가-->\n          </ul>\n          <div class=\"sidebar_edit mat-caption\">\n            <span><i class=\"material-icons\">folder_special</i>내 토픽</span><a href=\"#\">edit</a>\n          </div>\n          <ul class=\"sidebar_topics mat-caption\">\n            <li><a href=\"#\">토픽 1</a></li>\n            <li><a href=\"#\">토픽 2</a></li>\n            <li><a href=\"#\">토픽 3</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"grid_8\">\n      <mat-card *ngFor=\"let question of questions\" class=\"post question\">\n        <div class=\"post header\">\n          <span class=\"post metadata mat-caption\">질문<a href=\"#\" class=\"topic\">연관토픽</a></span>\n          <!--TODO: negativeFeedback answer feed에만 구현돼있음-->\n          <i (click)=\"negativeFeedback(question.id)\" class=\"material-icons md-18\">close</i>\n        </div>\n        <mat-card-title>\n          {{ question.question }}\n        </mat-card-title>\n        <div class=\"question-info\">\n          <div class=\"timestamp mat-caption\">\n            답변 시간 표시란(질문인 경우 답변, 팔로우 수, 경과시간 표시\n          </div>\n        </div>\n        <mat-card-actions>\n          <button class=\"mat-button\" color=\"primary\">답변 달기</button>\n          <button class=\"mat-button\" color=\"primary\">팔로우</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n\n    <div class=\"grid_2\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/question-feed/question-feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/question-feed/question.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// typings

var QuestionFeedComponent = (function () {
    function QuestionFeedComponent() {
    }
    QuestionFeedComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    QuestionFeedComponent.prototype.getQuestions = function () {
        this.questions = __WEBPACK_IMPORTED_MODULE_1__question__["a" /* questions */];
    };
    QuestionFeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question-feed',
            template: __webpack_require__("../../../../../src/app/question-feed/question-feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question-feed/question-feed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionFeedComponent);
    return QuestionFeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question-feed/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Question */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_feed_user__ = __webpack_require__("../../../../../src/app/main-feed/user.ts");

var Question = (function () {
    function Question() {
    }
    return Question;
}());

var questions = [
    {
        id: 1,
        user: __WEBPACK_IMPORTED_MODULE_0__main_feed_user__["a" /* users */].me,
        question: 'Angular 프레임워크는 무엇인가요?'
    },
    {
        id: 2,
        user: __WEBPACK_IMPORTED_MODULE_0__main_feed_user__["a" /* users */].me,
        question: 'Facebook 광고는 어떻게 시작하나요?'
    },
    {
        id: 3,
        user: __WEBPACK_IMPORTED_MODULE_0__main_feed_user__["a" /* users */].me,
        question: '박찬호 선수에게 싸인을 받고 싶어요'
    },
];


/***/ }),

/***/ "../../../../../src/app/topic/topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topic-info {\n  padding: 25px 0 25px 0;\n  border-bottom: 1px solid #e2e2e2;\n  line-height: 80px;\n  position: relative;\n}\n\n.topic-img {\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  background-color: yellow;\n  border-radius: 3px;\n  margin-right: 15px;\n}\n\n.topic-name {\n  font-weight: bold;\n  font-size: 1.8rem;\n  line-height: 80px;\n  margin-left: 100px;\n}\n\n.topic-follow {\n  background-color: #424377;\n  color: white;\n  float: right;\n  right: 20px;\n  top: 22px;\n}\n\n.yellow-color {\n  background-color: yellow;\n  height: 300px;\n}\n\n/* profile img 공통 */\n.thumbnail {\n  border-radius: 50%;\n}\n\n.thumbnail.md {\n  width: 40px;\n  height: 40px;\n}\n\n.thumbnail.sm {\n  width: 30px;\n  height: 30px;\n}\n\n/* post 공통 */\n.mat-card.post {\n  margin-top: 1rem;\n}\n\n/* post 상단 공통*/\n.post.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n\n.post mat-card-subtitle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n}\n\n.post .tag {\n  margin-right: 1rem;\n}\n\n.answer-info {\n  margin-left: 0.5rem;\n  display: inline-block;\n  height: 100%;\n}\n\n.answer-info .author {\n  margin: 5px 0;\n}\n\n.mat-card-content,\n.post.header>.material-icons,\n.post .topic {\n  cursor: pointer;\n}\n\n.mat-card-content .material-icons {\n  position: absolute;\n}\n\n\n.hidden {\n  display: none;\n}\n\n.mat-card-footer {\n  background-color: #EBEBEB;\n  padding: 2rem;\n}\n\n.mat-card-footer .mat-card-avatar {\n  width: 2.5rem;\n  height: 2.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigator></app-navigator>\n\n<div class=\"main\">\n  <div class=\"container_12\">\n    <div class=\"grid_12\">\n      <div class=\"topic-info\">\n        <img src=\"../../assets/images/leewoongmo.jpg\" class=\"topic-img\">\n        <span class=\"topic-name\">토픽 이름</span>\n        <button mat-raised-button class=\"topic-follow\" (click)=\"following()\">{{ isFollowing ? '팔로우 취소' : '팔로우' }}</button>\n      </div>\n    </div>\n    <div class=\"grid_8\">\n      <mat-tab-group>\n        <mat-tab label=\"읽기\">\n          <mat-card *ngFor=\"let answer of answers\" class=\"post\">\n            <!--post action: topic links-->\n            <div class=\"post header\">\n              <span class=\"post metadata mat-caption\">\n                <a class=\"tag\">답변</a>\n                <a class=\"topic\">연관토픽</a>\n              </span>\n              <i (click)=\"negativeFeedback(answer.id)\" class=\"material-icons md-18\">close</i>\n            </div>\n            <!--TODO: routing to answer detail page-->\n            <mat-card-title>\n              {{ answer.question }}\n            </mat-card-title>\n            <mat-card-subtitle>\n              <img class=\"thumbnail md\" [src]=\"answer.user.imgPath\" [alt]=\"answer.user.name\" width=\"50\" height=\"50\">\n              <!--TODO: 답변시간 표시방법- 타임스탬프와 브라우저 시간차 계산(서버에서? 클라이언트에서?)-->\n              <div class=\"answer-info\">\n                <div class=\"author\">\n                  {{ answer.user.name }}, {{ answer.user.credential }}\n                </div>\n                <div class=\"timestamp\">\n                  답변 시간 표시란\n                </div>\n              </div>\n            </mat-card-subtitle>\n            <mat-card-content (click)=\"fetchExpandedContent(answer.id)\">\n              <p class=\"mat-body-1\">\n                {{ answer.content }}\n                <i class=\"material-icons md-18\">expand_more</i>\n              </p>\n            </mat-card-content>\n            <mat-card-actions>\n              <button mat-button>\n                <i class=\"material-icons md-18\">star_border</i>{{ answer.stats.starHits }}</button>\n              <span class=\"mat-body-1\">\n                <i class=\"material-icons md-18\">chat_bubble_outline</i>{{ answer.stats.comments }}</span>\n            </mat-card-actions>\n          \n            <!--확장 시 표시-->\n            <mat-card-footer *ngIf=\"false\">\n              <div class=\"comment-area\">\n                <div class=\"comment-input\">\n                  <img class=\"thumbnail sm\" src=\"assets/images/me.png\">\n                  <mat-form-field>\n                    <textarea [(ngModel)]=\"commentText\" matInput placeholder=\"댓글을 입력하세요\" matTextareaAutosize matAutosizeMinRows=\"1\" matAutosizeMaxRows=\"100\"></textarea>\n                  </mat-form-field>\n                  <button mat-button (click)=\"test()\" [disabled]=\"!commentText\">댓글달기</button>\n                </div>\n                <div class=\"comment-list\">\n                  <!--<div class=\"comment level-1\">-->\n                  <!--<img mat-card-avatar src=\"assets/images/me.png\">-->\n                  <!--</div>-->\n                </div>\n              </div>\n            </mat-card-footer>\n          </mat-card>\n        </mat-tab>\n        <mat-tab label=\"답변하기\">Content 2</mat-tab>\n      </mat-tab-group> \n    </div>\n    <div class=\"grid_1\"></div>\n    <div class=\"grid_3 prefix_1 yellow-color\">\n      <h1>About</h1>\n      <br>\n      text text text text text text text text text text\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_navigator_ask_modal_ask_modal_component__ = __webpack_require__("../../../../../src/app/common/navigator/ask-modal/ask-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_feed_answer__ = __webpack_require__("../../../../../src/app/main-feed/answer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicComponent = (function () {
    function TopicComponent(dialog) {
        this.dialog = dialog;
        this.isFollowing = false;
        // 로그인 사용자 정보 (dummy)
        // 사용처: 메인피드의 질문하기 버튼, 댓글달기, 질문피드의 답변달기
        // 메인페이지, 질문피드 페이지 로드 시 전역에서 쥐고 있어야 하는 || 또는 토큰정보를 참조해야하는 데이터
        this.me = {
            name: '김경훈',
            credential: 'fastcampus WPS 수강생',
            imgPath: 'assets/images/me.png'
        };
    }
    TopicComponent.prototype.ngOnInit = function () {
        this.getAnswers();
    };
    TopicComponent.prototype.getAnswers = function () {
        this.answers = __WEBPACK_IMPORTED_MODULE_3__main_feed_answer__["a" /* answers */];
    };
    TopicComponent.prototype.following = function () {
        this.isFollowing = !this.isFollowing;
    };
    TopicComponent.prototype.fetchExpandedContent = function (id) {
        this.answers = this.answers.map(function (answer) {
            if (answer.id === id) {
                Object.assign(answer, __WEBPACK_IMPORTED_MODULE_3__main_feed_answer__["b" /* expandedContents */][id]);
            }
            return answer;
        });
    };
    TopicComponent.prototype.openAskModal = function (name) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__common_navigator_ask_modal_ask_modal_component__["a" /* AskModalComponent */], {
            width: '620px',
            data: { name: name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    TopicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topic',
            template: __webpack_require__("../../../../../src/app/topic/topic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topic/topic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], TopicComponent);
    return TopicComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-image {\n  background-image: url(\"/assets/images/login_back.png\");\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n}\n\n.layer {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.tit-introduce {\n  color: #dddddd;\n  font-size: 6rem;\n  text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map