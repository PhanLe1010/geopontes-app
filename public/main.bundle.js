webpackJsonp([1,4],{

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(440);


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_letter_model__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LetterService = (function () {
    function LetterService(http) {
        this.http = http;
        this.letters = [];
        this.letterIsEditing = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]();
    }
    //Hookup to the get letter API
    LetterService.prototype.getLetter = function () {
        var _this = this;
        return this.http.get('http://localhost:3000/letter')
            .map(function (response) {
            var jsonLetters = response.json().obj;
            var transformedLetters = [];
            for (var _i = 0, jsonLetters_1 = jsonLetters; _i < jsonLetters_1.length; _i++) {
                var letter = jsonLetters_1[_i];
                transformedLetters.unshift(new __WEBPACK_IMPORTED_MODULE_4__models_letter_model__["a" /* Letter */](letter.title, letter.content, letter.signature, new Date(letter.date), null, letter._id));
            }
            // let n: number = transformedLetters.length;
            // for (let i: number = 0; i <= Math.floor(n/2)-1; i++) {
            //     let t:Letter = transformedLetters[i];
            //      transformedLetters[i]=transformedLetters[n-1-i];
            //      transformedLetters[n-1-i]=t;
            // }
            _this.letters = transformedLetters;
            return transformedLetters;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    // Hookup to the post letter API
    LetterService.prototype.addLetter = function (letter) {
        var _this = this;
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var body = JSON.stringify(letter);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        return this.http.post("http://localhost:3000/letter" + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var letter = new __WEBPACK_IMPORTED_MODULE_4__models_letter_model__["a" /* Letter */](result.obj.title, result.obj.content, result.obj.signature, new Date(result.obj.date), null, result.obj._id);
            _this.letters.unshift(letter);
            return letter;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    // Emit an even when a Edit button is click
    LetterService.prototype.editLetter = function (letter) {
        this.letterIsEditing.emit(letter);
    };
    //Reach to the patch letter API and update the letter on server
    LetterService.prototype.updateLetter = function (letter) {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var body = JSON.stringify(letter);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/letter/' + letter._id + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    //Reach to the delete letter API and delete the letter on server
    LetterService.prototype.deleteLetter = function (letter) {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        this.letters.splice(this.letters.indexOf(letter), 1);
        return this.http.delete('http://localhost:3000/letter/' + letter._id + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    LetterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], LetterService);
    return LetterService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/letter.service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactMessageService = (function () {
    function ContactMessageService(http) {
        this.http = http;
    }
    //Hookup to the get messages API
    ContactMessageService.prototype.getContactMessages = function () {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('http://localhost:3000/contact_message' + token)
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    //Hookup to the post contact_message API
    ContactMessageService.prototype.addContactMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        return this.http.post('http://localhost:3000/contact_message', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    ContactMessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ContactMessageService);
    return ContactMessageService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/contactMessage.service.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Letter; });
var Letter = (function () {
    function Letter(title, content, signature, date, comments, _id) {
        this.title = title;
        this.content = content;
        this.signature = signature;
        this.date = date;
        this.comments = comments;
        this._id = _id;
    }
    return Letter;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/letter.model.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(245);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd, ActivatedRoute  } from '@angular/router';
//
// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.scss']
// })
// export class AboutComponent implements OnInit {
//
// constructor( private route: ActivatedRoute, private router: Router ) {}
//
//   ngOnInit() {
//       this.router.events.subscribe(s => {
//         if (s instanceof NavigationEnd) {
//           const tree = this.router.parseUrl(this.router.url);
//           if (tree.fragment) {
//             const element = document.querySelector("#" + tree.fragment);
//             if (element) { element.scrollIntoView(element); }
//           }
//         }
//       });
//     }
//
//   onAnchorClick ( ) {
//     this.route.fragment.subscribe ( f => {
//       const element = document.querySelector ( "#" + f )
//       if ( element ) element.scrollIntoView ( element )
//     });
//   }
//
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(router) {
        this.router = router;
    }
    AboutComponent.prototype.gotoHashtag = function (prodID) {
        this.router.navigate(['/my-app-route'], { fragment: prodID });
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(769),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/about.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__letter_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckinComponent = (function () {
    function CheckinComponent(letterService) {
        this.letterService = letterService;
        this.letters = [];
        this.loadingLettersError = "";
        this.clickNewLetterButton = true;
    }
    CheckinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.letterService.getLetter()
            .subscribe(function (data) { return _this.letters = data; }, function (error) {
            _this.loadingLettersError = "Oops! There was an error. Could not load the letters!";
            console.log(error);
        });
    };
    CheckinComponent.prototype.onClickNewLetterButton = function () {
        this.clickNewLetterButton = !this.clickNewLetterButton;
    };
    CheckinComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'checkin',
            template: __webpack_require__(773),
            styles: [__webpack_require__(745)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__letter_service__["a" /* LetterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__letter_service__["a" /* LetterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__letter_service__["a" /* LetterService */]) === 'function' && _a) || Object])
    ], CheckinComponent);
    return CheckinComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/checkin.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(authService) {
        this.authService = authService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(780),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/contact.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonationComponent = (function () {
    function DonationComponent() {
    }
    DonationComponent.prototype.ngOnInit = function () {
    };
    DonationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-donation',
            template: __webpack_require__(781),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [])
    ], DonationComponent);
    return DonationComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/donation.component.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(783),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/home.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(name, email, content, commentId, letterId, date) {
        this.name = name;
        this.email = email;
        this.content = content;
        this.commentId = commentId;
        this.letterId = letterId;
        this.date = date;
    }
    return Comment;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/comment.model.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgramsComponent = (function () {
    function ProgramsComponent() {
    }
    ProgramsComponent.prototype.ngOnInit = function () {
    };
    ProgramsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-programs',
            template: __webpack_require__(793),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgramsComponent);
    return ProgramsComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/programs.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 439;


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(559);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/main.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutFirstColumnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutFirstColumnComponent = (function () {
    function AboutFirstColumnComponent() {
    }
    AboutFirstColumnComponent.prototype.ngOnInit = function () {
    };
    AboutFirstColumnComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-about-first-column',
            template: __webpack_require__(767),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutFirstColumnComponent);
    return AboutFirstColumnComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/about-first-column.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutIntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutIntroComponent = (function () {
    function AboutIntroComponent() {
    }
    AboutIntroComponent.prototype.ngOnInit = function () {
    };
    AboutIntroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-about-intro',
            template: __webpack_require__(768),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutIntroComponent);
    return AboutIntroComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/about-intro.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contactMessage_service__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(contactMessageService, activatedRoute, router) {
        this.contactMessageService = contactMessageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.scrollExecuted = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            else {
                window.scrollTo(0, 0);
            }
        });
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.scrollExecuted) {
            var routeFragmentSubscription_1;
            // Automatic scroll
            routeFragmentSubscription_1 =
                this.activatedRoute.fragment
                    .subscribe(function (fragment) {
                    if (fragment) {
                        var element = document.getElementById(fragment);
                        if (element) {
                            element.scrollIntoView();
                            _this.scrollExecuted = true;
                            // Free resources
                            setTimeout(function () {
                                console.log('routeFragmentSubscription unsubscribe');
                                routeFragmentSubscription_1.unsubscribe();
                            }, 1000);
                        }
                    }
                });
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(770),
            styles: [__webpack_require__(743)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__contact_contactMessage_service__["a" /* ContactMessageService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__contact_contactMessage_service__["a" /* ContactMessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contact_contactMessage_service__["a" /* ContactMessageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/app.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_particle__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__programs_programs_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__programs_programTop_programTop_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__programs_FirstProgram_FirstProgram_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__donation_donation_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__checkin_checkin_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__slogan_section_slogan_section_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__award_section_award_section_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__misson_section_misson_section_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__invester_section_invester_section_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__about_about_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__about_about_intro_about_intro_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__about_about_first_column_about_first_column_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pontes_leadership_pontes_leadership_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pontes_awards_pontes_awards_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pontes_investors_pontes_investors_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routing__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__auth_authentication_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__auth_auth_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__auth_login_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__auth_logout_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__contact_contact_form_contact_form_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__contact_contact_map_contact_map_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__contact_contact_messages_contact_messages_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__image_carousel_image_carousel_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__comment_comment_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__checkin_letter_letter_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__checkin_new_letter_from_new_letter_from_component__ = __webpack_require__(566);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





































// import { ParallaxDirective } from './directives/parallax.directive';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__slogan_section_slogan_section_component__["a" /* SloganSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__programs_programs_component__["a" /* ProgramsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__programs_programTop_programTop_component__["a" /* ProgramTopComponent */],
                __WEBPACK_IMPORTED_MODULE_8__programs_FirstProgram_FirstProgram_component__["a" /* FirstProgramComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__donation_donation_component__["a" /* DonationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__award_section_award_section_component__["a" /* AwardSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__misson_section_misson_section_component__["a" /* MissonSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_17__invester_section_invester_section_component__["a" /* InvesterSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__about_about_intro_about_intro_component__["a" /* AboutIntroComponent */],
                __WEBPACK_IMPORTED_MODULE_21__about_about_first_column_about_first_column_component__["a" /* AboutFirstColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_11__checkin_checkin_component__["a" /* CheckinComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pontes_leadership_pontes_leadership_component__["a" /* PontesLeadershipComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pontes_awards_pontes_awards_component__["a" /* PontesAwardsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pontes_investors_pontes_investors_component__["a" /* PontesInvestorsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__auth_authentication_component__["a" /* AuthenticationComponent */],
                __WEBPACK_IMPORTED_MODULE_28__auth_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_29__auth_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_30__contact_contact_form_contact_form_component__["a" /* ContactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_31__contact_contact_map_contact_map_component__["a" /* ContactMapComponent */],
                __WEBPACK_IMPORTED_MODULE_32__contact_contact_messages_contact_messages_component__["a" /* ContactMessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_33__image_carousel_image_carousel_component__["a" /* ImageCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_34__comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_35__checkin_letter_letter_component__["a" /* LetterComponent */],
                __WEBPACK_IMPORTED_MODULE_36__checkin_new_letter_from_new_letter_from_component__["a" /* NewLetterFromComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4_angular_particle__["a" /* ParticlesModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_27__auth_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/app.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programs_programs_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__donation_donation_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkin_checkin_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var APP_ROUTES = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: "programs", component: __WEBPACK_IMPORTED_MODULE_2__programs_programs_component__["a" /* ProgramsComponent */] },
    { path: "contact", component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] },
    { path: "donation", component: __WEBPACK_IMPORTED_MODULE_4__donation_donation_component__["a" /* DonationComponent */] },
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
    { path: "checkin", component: __WEBPACK_IMPORTED_MODULE_5__checkin_checkin_component__["a" /* CheckinComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/app.routing.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
        this.loadingIcon = false;
        this.successLogin = false;
        this.isSubmit = false;
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    };
    AuthenticationComponent.prototype.onSubmit = function () {
        console.log(this.loginForm);
        this.successLogin = false;
        this.isSubmit = true;
        this.loadingIcon = false;
    };
    AuthenticationComponent.prototype.onLogin = function () {
        this.loadingIcon = true;
    };
    AuthenticationComponent.prototype.onLogout = function () {
    };
    AuthenticationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-authentication',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/authentication.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(577);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(authService) {
        this.authService = authService;
        this.loadingIcon = false;
        this.isSubmit = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingIcon = true;
        var user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */](this.loginForm.value.email, this.loginForm.value.password);
        this.authService.login(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            _this.authService.isLoggedIn.status = true;
            _this.loadingIcon = false;
            _this.isSubmit = false;
        }, function (error) {
            console.error(error);
            _this.authService.isLoggedIn.status = false;
            _this.isSubmit = true;
            _this.loadingIcon = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(771)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/login.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(authService) {
        this.authService = authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-logout',
            template: " <div *ngIf=\"this.authService.isLoggedIn.status\" class=\"container\" style=\"text-align: center; padding-top: 50px; padding-bottom: 20px\" >\n                <button type=\"button\"\n                       class=\"waves-effect waves-light btn btn-flat btn btn-outline-warning\"\n                       (click) =\"onLogout()\"\n                       >Logout\n               </button>\n               <div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/logout.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwardSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AwardSectionComponent = (function () {
    function AwardSectionComponent() {
    }
    AwardSectionComponent.prototype.ngOnInit = function () {
    };
    AwardSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-award-section',
            template: __webpack_require__(772),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [])
    ], AwardSectionComponent);
    return AwardSectionComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/award-section.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_letter_model__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__letter_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LetterComponent = (function () {
    function LetterComponent(letterService, authService) {
        this.letterService = letterService;
        this.authService = authService;
        this.loadComment = false;
    }
    LetterComponent.prototype.ngOnInit = function () {
        $('.collapsible').collapsible();
    };
    LetterComponent.prototype.onEdit = function () {
        this.letterService.editLetter(this.letter);
    };
    LetterComponent.prototype.onDelete = function () {
        this.letterService.deleteLetter(this.letter)
            .subscribe(function (result) { return console.log(result); });
    };
    LetterComponent.prototype.onClick = function () {
        this.loadComment = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_letter_model__["a" /* Letter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_letter_model__["a" /* Letter */]) === 'function' && _a) || Object)
    ], LetterComponent.prototype, "letter", void 0);
    LetterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-letter',
            template: __webpack_require__(774),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__letter_service__["a" /* LetterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__letter_service__["a" /* LetterService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], LetterComponent);
    return LetterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/letter.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__letter_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_letter_model__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLetterFromComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewLetterFromComponent = (function () {
    function NewLetterFromComponent(letterService) {
        this.letterService = letterService;
        this.letter = null;
        this.notificationOfSendingLetter = "";
        this.loadingIcon = false;
    }
    NewLetterFromComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newLetterForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            content: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            signature: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
        this.letterService.letterIsEditing.subscribe(function (letter) { return _this.letter = letter; });
    };
    NewLetterFromComponent.prototype.cancelEdit = function () {
        this.letter = null;
        this.newLetterForm.reset();
    };
    NewLetterFromComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingIcon = true;
        if (this.letter) {
            // Edit
            this.letter.title = this.newLetterForm.value.title; //should not do this- upadte the page before data come back.
            this.letter.content = this.newLetterForm.value.content; //we should show the data that come back from the serve
            this.letter.signature = this.newLetterForm.value.signature; //because some time we can not save it
            this.letterService.updateLetter(this.letter).subscribe(function (data) {
                $('#editLetterModal').modal('hide');
                _this.notificationOfSendingLetter = "Successfully Edited the letter.";
                $('#letterNotification').modal('show');
                _this.loadingIcon = false;
                _this.newLetterForm.reset(),
                    $('#textarea1').trigger('autoresize');
            }, function (error) {
                $('#editLetterModal').modal('hide');
                _this.notificationOfSendingLetter = "Oops! There was an error. Could not edit the letter. Try again!";
                _this.loadingIcon = false;
                $('#letterNotification').modal('show');
                _this.newLetterForm.reset(),
                    $('#textarea1').trigger('autoresize');
            });
            this.letter = null;
        }
        else {
            // Create
            var letter = new __WEBPACK_IMPORTED_MODULE_3__models_letter_model__["a" /* Letter */](this.newLetterForm.value.title, this.newLetterForm.value.content, this.newLetterForm.value.signature);
            this.letterService.addLetter(letter).subscribe(function (data) {
                _this.notificationOfSendingLetter = "Successfully post the letter.";
                $('#letterNotification').modal('show');
                _this.loadingIcon = false;
                _this.newLetterForm.reset(),
                    $('#textarea1').trigger('autoresize');
            }, function (error) {
                _this.notificationOfSendingLetter = "Oops! There was an error. Could not post the letter. You might need to login width admin account to do that!";
                _this.loadingIcon = false;
                $('#letterNotification').modal('show');
            });
        }
    };
    NewLetterFromComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-new-letter-from',
            template: __webpack_require__(775),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__letter_service__["a" /* LetterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__letter_service__["a" /* LetterService */]) === 'function' && _a) || Object])
    ], NewLetterFromComponent);
    return NewLetterFromComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/new-letter-from.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comment_service__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_comment_model__ = __webpack_require__(371);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentComponent = (function () {
    function CommentComponent(commentService, authService) {
        this.commentService = commentService;
        this.authService = authService;
        this.loadingCommentsError = "";
        this.comments = [];
        this.notificationOfSendingComment = "";
        this.loadingIcon = false;
        this.clickNewCommentbutton = true;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentService.getComment(this.letterId)
            .subscribe(function (data) { return _this.comments = data; }, function (error) {
            _this.loadingCommentsError = "Oops! There was an error. Could not load comments";
            console.log(error);
        });
        this.newCommentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            content: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    };
    CommentComponent.prototype.onSubmit = function () {
        var _this = this;
        // Create
        var comment = new __WEBPACK_IMPORTED_MODULE_4__models_comment_model__["a" /* Comment */](this.newCommentForm.value.name, this.newCommentForm.value.email, this.newCommentForm.value.content);
        comment.letterId = this.letterId;
        this.commentService.addComment(comment).subscribe(function (data) {
            _this.notificationOfSendingComment = "Successfully post a commnent.";
            $('#commentNotification').modal('show');
            _this.loadingIcon = false;
            _this.newCommentForm.reset(),
                $('#textarea1').trigger('autoresize');
        }, function (error) {
            _this.notificationOfSendingComment = "Oops! There was an error. Could not add the comment. Try again!";
            _this.loadingIcon = false;
            $('#commentNotification').modal('show');
            console.log(error);
        });
    };
    CommentComponent.prototype.onClickNewCommentForm = function () {
        this.clickNewCommentbutton = !this.clickNewCommentbutton;
    };
    CommentComponent.prototype.onDelete = function (event) {
        // console.log(event.target.id)
        this.commentService.deleteComment(this.letterId, event.target.id)
            .subscribe(function (result) { return console.log(result); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], CommentComponent.prototype, "letterId", void 0);
    CommentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-comment',
            template: __webpack_require__(776),
            styles: [__webpack_require__(748)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__comment_service__["a" /* CommentService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__comment_service__["a" /* CommentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__comment_service__["a" /* CommentService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], CommentComponent);
    return CommentComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/comment.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_comment_model__ = __webpack_require__(371);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.comments = [];
    }
    //Hookup to the get comments API
    CommentService.prototype.getComment = function (letterId) {
        var _this = this;
        return this.http.get('http://localhost:3000/' + letterId + '/comment')
            .map(function (response) {
            var jsonComments = response.json().obj;
            var transformedComments = [];
            for (var _i = 0, jsonComments_1 = jsonComments; _i < jsonComments_1.length; _i++) {
                var comment = jsonComments_1[_i];
                transformedComments.push(new __WEBPACK_IMPORTED_MODULE_4__models_comment_model__["a" /* Comment */](comment.name, comment.email, comment.content, comment._id, comment.letterId, new Date(comment.date)));
            }
            _this.comments = transformedComments;
            return transformedComments;
        });
    };
    // Hookup to the post letter API
    CommentService.prototype.addComment = function (comment) {
        var _this = this;
        var body = JSON.stringify(comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        return this.http.post("http://localhost:3000/" + comment.letterId + "/comment", body, { headers: headers })
            .map(function (response) {
            var result = response.json().obj;
            var comment = new __WEBPACK_IMPORTED_MODULE_4__models_comment_model__["a" /* Comment */](result.name, result.email, result.content, result._id, result.letterId, new Date(result.date));
            _this.comments.push(comment);
            return comment;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    //Reach to the delete comment API and delete the comment on server
    CommentService.prototype.deleteComment = function (letterId, commentId) {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        for (var i = this.comments.length - 1; i >= 0; i--) {
            if (this.comments[i].commentId === commentId) {
                this.comments.splice(i, 1);
            }
        }
        return this.http.delete('http://localhost:3000/' + letterId + "/comment/" + commentId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    CommentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CommentService);
    return CommentService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/comment.service.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactMessage_service__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_contactMessage_model__ = __webpack_require__(576);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactFormComponent = (function () {
    function ContactFormComponent(contactMessageService) {
        this.contactMessageService = contactMessageService;
        this.notificationOfSendingContactMessage = "";
        this.loadingIcon = false;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.contactForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            subject: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    ContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingIcon = true;
        var message = new __WEBPACK_IMPORTED_MODULE_3__models_contactMessage_model__["a" /* ContactMessage */](this.contactForm.value.name, this.contactForm.value.email, this.contactForm.value.subject, this.contactForm.value.message);
        this.contactMessageService.addContactMessage(message).subscribe(function (data) {
            _this.notificationOfSendingContactMessage = "Thank you for everything! We'll contact you as soon as we find this.";
            $('#myModal').modal('show');
            _this.loadingIcon = false;
            _this.contactForm.reset();
        }, function (error) {
            _this.notificationOfSendingContactMessage = "Oops! There was an error. Could not send the message. Try again!";
            _this.loadingIcon = false;
            $('#myModal').modal('show');
        });
    };
    ContactFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-contact-form',
            template: __webpack_require__(777),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__contactMessage_service__["a" /* ContactMessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contactMessage_service__["a" /* ContactMessageService */]) === 'function' && _a) || Object])
    ], ContactFormComponent);
    return ContactFormComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/contact-form.component.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactMapComponent = (function () {
    function ContactMapComponent() {
    }
    ContactMapComponent.prototype.ngOnInit = function () {
    };
    ContactMapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-contact-map',
            template: __webpack_require__(778),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactMapComponent);
    return ContactMapComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/contact-map.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contactMessage_service__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactMessagesComponent = (function () {
    function ContactMessagesComponent(contactMessageService) {
        this.contactMessageService = contactMessageService;
        this.loadingContactMessagesError = "";
    }
    ContactMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactMessageService.getContactMessages()
            .subscribe(function (data) { return _this.messages = data; }, function (error) {
            _this.loadingContactMessagesError = "Oops! There was an error. Could not load the messages!";
            console.log(error);
        });
    };
    ;
    ContactMessagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-contact-messages',
            template: __webpack_require__(779),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contactMessage_service__["a" /* ContactMessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contactMessage_service__["a" /* ContactMessageService */]) === 'function' && _a) || Object])
    ], ContactMessagesComponent);
    return ContactMessagesComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/contact-messages.component.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(782),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/footer.component.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageCarouselComponent = (function () {
    function ImageCarouselComponent() {
    }
    ImageCarouselComponent.prototype.ngOnInit = function () {
    };
    ImageCarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-image-carousel',
            template: __webpack_require__(784),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [])
    ], ImageCarouselComponent);
    return ImageCarouselComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/image-carousel.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvesterSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvesterSectionComponent = (function () {
    function InvesterSectionComponent() {
    }
    InvesterSectionComponent.prototype.ngOnInit = function () {
    };
    InvesterSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-invester-section',
            template: __webpack_require__(785),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [])
    ], InvesterSectionComponent);
    return InvesterSectionComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/invester-section.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissonSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MissonSectionComponent = (function () {
    function MissonSectionComponent() {
    }
    MissonSectionComponent.prototype.ngOnInit = function () {
    };
    MissonSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-misson-section',
            template: __webpack_require__(786),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [])
    ], MissonSectionComponent);
    return MissonSectionComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/misson-section.component.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMessage; });
var ContactMessage = (function () {
    function ContactMessage(name, email, subject, message, date) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
        this.date = date;
    }
    return ContactMessage;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/contactMessage.model.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, password, fullName) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
    }
    return User;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/user.model.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(787),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontesAwardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PontesAwardsComponent = (function () {
    function PontesAwardsComponent() {
    }
    PontesAwardsComponent.prototype.ngOnInit = function () {
    };
    PontesAwardsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-pontes-awards',
            template: __webpack_require__(788),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [])
    ], PontesAwardsComponent);
    return PontesAwardsComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/pontes-awards.component.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontesInvestorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PontesInvestorsComponent = (function () {
    function PontesInvestorsComponent() {
    }
    PontesInvestorsComponent.prototype.ngOnInit = function () {
    };
    PontesInvestorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-pontes-investors',
            template: __webpack_require__(789),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [])
    ], PontesInvestorsComponent);
    return PontesInvestorsComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/pontes-investors.component.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontesLeadershipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PontesLeadershipComponent = (function () {
    function PontesLeadershipComponent() {
    }
    PontesLeadershipComponent.prototype.ngOnInit = function () {
    };
    PontesLeadershipComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-pontes-leadership',
            template: __webpack_require__(790),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [])
    ], PontesLeadershipComponent);
    return PontesLeadershipComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/pontes-leadership.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstProgramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstProgramComponent = (function () {
    function FirstProgramComponent() {
    }
    FirstProgramComponent.prototype.ngOnInit = function () {
    };
    FirstProgramComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-FirstProgram',
            template: __webpack_require__(791),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [])
    ], FirstProgramComponent);
    return FirstProgramComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/FirstProgram.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramTopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgramTopComponent = (function () {
    function ProgramTopComponent() {
    }
    ProgramTopComponent.prototype.ngOnInit = function () {
    };
    ProgramTopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-programTop',
            template: __webpack_require__(792),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgramTopComponent);
    return ProgramTopComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/programTop.component.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SloganSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SloganSectionComponent = (function () {
    function SloganSectionComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    SloganSectionComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'z-index': 100,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 50,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: 6,
                }
            }
        };
    };
    SloganSectionComponent.prototype.onWindowScroll = function (event, section, downArrow) {
        var isDown = function (el) {
            var rect = el.getBoundingClientRect();
            return (rect.bottom < (window.innerHeight || document.documentElement.clientHeight));
        };
        if (isDown(section)) {
            downArrow.style.opacity = "0";
        }
        else {
            downArrow.style.opacity = "1";
        }
        ;
    };
    SloganSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-slogan-section',
            template: __webpack_require__(794),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [])
    ], SloganSectionComponent);
    return SloganSectionComponent;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/slogan-section.component.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/environment.js.map

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ".listDirectors {\n  background: white;\n  text-align: center; }\n  .listDirectors b, .listDirectors h2, .listDirectors h4 {\n    margin: 20px 0 20px;\n    color: #4c4c4c; }\n  .listDirectors p {\n    color: #737373; }\n  .listDirectors img {\n    height: 100px;\n    width: 100px;\n    margin-top: 50px; }\n  .listDirectors i {\n    height: 30px;\n    width: 30px;\n    padding: 5px;\n    font-size: 17px;\n    border-radius: 50%;\n    background-color: #a0db8e;\n    color: #fff; }\n  .listDirectors a:hover i {\n    background-color: #709963; }\n\n.header {\n  padding-top: 100px;\n  text-align: center;\n  color: black;\n  height: 100%; }\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "section {\n  height: 40vh;\n  background: url(\"./assets/images/about-intro.jpg\");\n  background-size: cover;\n  background-position: center; }\n  section .aboutIntro {\n    padding-top: 20vh;\n    text-align: center;\n    color: white;\n    text-align: center;\n    color: white;\n    height: 100%; }\n    section .aboutIntro h2 {\n      font-weight: 400; }\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "section {\n  background: url(\"./assets/images/mission.jpg\"); }\n  section .outsideContainer {\n    z-index: 10;\n    background: rgba(128, 127, 255, 0.6);\n    text-align: center;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    height: 120%;\n    width: 100%; }\n    section .outsideContainer .container {\n      background: transparent;\n      padding-top: 20px;\n      margin-top: auto;\n      margin-bottom: auto; }\n      section .outsideContainer .container h2 {\n        color: white; }\n      section .outsideContainer .container .row {\n        padding-top: 20px; }\n        @media screen and (min-width: 992px) {\n          section .outsideContainer .container .row .card {\n            height: 165px; } }\n    section .outsideContainer a {\n      margin-top: 20px; }\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = ".section-header {\n  background: url(\"./assets/images/mission.jpg\");\n  height: 40vh;\n  background-size: cover;\n  background-position: center; }\n  .section-header .checkin-content {\n    background-color: rgba(41, 144, 234, 0.5);\n    padding-top: 20vh;\n    text-align: center;\n    color: white;\n    height: 100%; }\n\n#letter {\n  background: white;\n  background-size: cover;\n  background-position: center; }\n  #letter .letter-content {\n    padding-top: 50px;\n    text-align: left;\n    color: black;\n    height: 100%; }\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = ".collapsible-header.active {\n  background: #546e7a;\n  color: white; }\n\n.collapsible-header:hover {\n  background: #546e7a;\n  color: white; }\n\n.collapsible-header {\n  border-bottom: none; }\n\ni {\n  font-size: 1.3em !important; }\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "i {\n  font-size: 1.3em !important; }\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "i {\n  font-size: 1.3em !important; }\n\n.comment {\n  padding-left: 20px; }\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "i {\n  font-size: 1.3em !important; }\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 768px) {\n  .row {\n    padding-top: 50px; } }\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = ".pull-right {\n  opacity: 0.6; }\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = ".background-picture {\n  width: 100%;\n  background: url(\"./assets/images/contact-page.jpg\");\n  background-size: cover;\n  background-repeat: none;\n  text-align: center; }\n  .background-picture .filter {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(41, 144, 234, 0.6); }\n    .background-picture .filter h2 {\n      padding-top: 100px;\n      color: white; }\n    .background-picture .filter .social {\n      color: white;\n      font-size: 20px;\n      height: 30px;\n      width: 30px;\n      text-align: center;\n      padding: 5px;\n      border: 1px solid #cccccc;\n      border-radius: 4px;\n      margin-bottom: 10px;\n      margin-right: 5px; }\n\n.contact {\n  text-align: center;\n  padding-top: 40px; }\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "/*FOOTER*/\nsection {\n  padding-top: 30px;\n  padding-bottom: 10px;\n  color: white;\n  background: url(\"./assets/images/bg-bottom.jpg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat; }\n  section .social {\n    font-size: 20px;\n    height: 30px;\n    width: 30px;\n    text-align: center;\n    padding: 5px;\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n    margin-bottom: 10px;\n    margin-right: 5px; }\n  section input {\n    height: 40px;\n    width: 160px;\n    padding: 5px;\n    border: none;\n    background-color: #cccccc;\n    color: #000; }\n  section .btn {\n    padding: 10px 5px 10px;\n    margin: -3px 0 0 5px; }\n  section .middle {\n    background: url(\"./assets/images/footer-map.png\");\n    background-repeat: no-repeat;\n    background-position: 100% 20%; }\n  section input {\n    border-radius: 4px; }\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = ".home-contact-form .container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 800px; }\n"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = ".outside-carousel {\n  padding-top: 20px;\n  background-color: #546e7a;\n  text-align: center; }\n"

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = ".investers {\n  padding: 50px 0 80px;\n  text-align: center; }\n  .investers b, .investers h2, .investers h4 {\n    margin: 20px 0 20px;\n    color: #4c4c4c; }\n  .investers p {\n    color: #737373; }\n  .investers img {\n    height: 100px;\n    width: 100px;\n    margin-top: 80px; }\n  .investers i {\n    height: 30px;\n    width: 30px;\n    padding: 5px;\n    font-size: 17px;\n    border-radius: 50%;\n    background-color: #a0db8e;\n    color: #fff; }\n  .investers a:hover i {\n    background-color: #709963; }\n"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "section {\n  background: white;\n  background-size: cover;\n  background-position: center; }\n  section .mission-content {\n    padding-top: 50px;\n    padding-bottom: 50px;\n    text-align: center;\n    color: black;\n    height: 100%; }\n    section .mission-content p {\n      padding-top: 10px; }\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: rgba(41, 144, 234, 0);\n  box-shadow: none  !important;\n  transition: all 0.4s;\n  height: 50px; }\n  nav .container {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.4); }\n  nav .background {\n    margin-bottom: 30px; }\n    nav .background img {\n      width: 100%; }\n  nav .brand-logo img {\n    height: 58px; }\n  nav .side-nav {\n    padding-bottom: 0; }\n\n.scrolled {\n  background: white;\n  height: 66px; }\n\n.linkScrolled {\n  color: #2990ea; }\n\n.containerScrolled {\n  border: none !important; }\n\na:hover, a:focus {\n  text-decoration: none;\n  color: #2990ea; }\n\n#mobile-demo a {\n  text-decoration: none;\n  color: #2990ea; }\n\n.active {\n  background: rgba(0, 0, 0, 0.3);\n  border: none !important; }\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = ".awards {\n  background: white;\n  text-align: center; }\n  .awards b, .awards h2, .awards h4 {\n    margin: 20px 0 20px;\n    color: #4c4c4c; }\n  .awards p {\n    color: #737373; }\n  .awards img {\n    height: 100px;\n    width: 100px;\n    margin-top: 50px; }\n  .awards i {\n    height: 30px;\n    width: 30px;\n    padding: 5px;\n    font-size: 17px;\n    border-radius: 50%;\n    background-color: #a0db8e;\n    color: #fff; }\n  .awards a:hover i {\n    background-color: #709963; }\n\n.header {\n  background-color: #546e7a;\n  background-size: cover;\n  background-position: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  text-align: center;\n  color: white;\n  height: 100%; }\n"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = ".investors {\n  background: white;\n  margin-bottom: 80px;\n  text-align: center; }\n  .investors b, .investors h2, .investors h4 {\n    margin: 20px 0 20px;\n    color: #4c4c4c; }\n  .investors p {\n    color: #737373; }\n  .investors i {\n    height: 30px;\n    width: 30px;\n    padding: 5px;\n    font-size: 17px;\n    border-radius: 50%;\n    background-color: #a0db8e;\n    color: #fff; }\n  .investors a:hover i {\n    background-color: #709963; }\n\nimg {\n  height: 100px;\n  width: 100px;\n  margin-top: 50px; }\n\n.header {\n  background-color: #546e7a;\n  background-size: cover;\n  background-position: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  text-align: center;\n  color: white;\n  height: 100%; }\n"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "section {\n  background: url(\"./assets/images/mission.jpg\");\n  height: 70vh;\n  background-size: cover;\n  background-position: center; }\n  section .mission-content-left {\n    background-color: rgba(41, 144, 234, 0.5);\n    padding-top: 10vh;\n    padding-right: 25vh;\n    text-align: left;\n    color: white;\n    height: 100%; }\n  section .mission-content-right {\n    background-color: rgba(41, 144, 234, 0.5);\n    padding-top: 10vh;\n    padding-left: 25vh;\n    text-align: left;\n    color: white;\n    height: 100%; }\n\nimg {\n  width: 100%; }\n\n#program1 {\n  background: #071b26 !important; }\n\n#program3 {\n  background: #071b26 !important; }\n\n.morePrograms {\n  background: white;\n  padding: 50px 0 80px;\n  text-align: center; }\n  .morePrograms b, .morePrograms h2, .morePrograms h4 {\n    margin: 20px 0 20px;\n    color: #4c4c4c; }\n  .morePrograms p {\n    color: #737373; }\n  .morePrograms img {\n    height: 150px;\n    width: 150px;\n    margin-top: 80px; }\n  .morePrograms i {\n    height: 30px;\n    width: 30px;\n    padding: 5px;\n    font-size: 17px;\n    border-radius: 50%;\n    background-color: #a0db8e;\n    color: #fff; }\n  .morePrograms a:hover i {\n    background-color: #709963; }\n\n#Header {\n  background: white;\n  background-size: cover;\n  background-position: center;\n  padding-top: 60px;\n  padding-bottom: 50px;\n  text-align: center;\n  color: black;\n  height: 20%; }\n"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "section {\n  background: url(\"./assets/images/mission.jpg\");\n  height: 80vh;\n  background-size: cover;\n  background-position: center; }\n  section .mission-content {\n    background-color: rgba(41, 144, 234, 0.5);\n    padding-top: 30vh;\n    text-align: center;\n    color: white;\n    height: 100%; }\n"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "section {\n  background: url(\"./assets/images/mission.jpg\");\n  height: 100vh;\n  background-size: cover;\n  background-position: center; }\n  section .mission-content {\n    background-color: rgba(41, 144, 234, 0.5);\n    padding-top: 30vh;\n    text-align: center;\n    color: white;\n    height: 100%; }\n"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "section {\n  height: 100vh; }\n  section .slogan {\n    padding-top: 30vh; }\n    section .slogan div {\n      text-align: center;\n      color: White;\n      height: 100%; }\n      section .slogan div h1 {\n        font-size: 3.6em; }\n      section .slogan div p {\n        padding-top: 10px;\n        font-family: 'Bad Script', cursive;\n        font-size: 1.9em; }\n  section .downArrow {\n    position: absolute;\n    bottom: 5%;\n    left: 50%;\n    color: white;\n    opacity: 1; }\n  section .bounce {\n    -webkit-animation: bounce 3s infinite;\n    animation: bounce 3s infinite; }\n\n@-webkit-keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px); } }\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px); } }\n"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<!--- Team ----->\r\n<section class=\"header\">\r\n    <div class=\"container\">\r\n      <h2 class=\"wow fadeInUp\">Board of Directors</h2>\r\n      <hr style= \"width: 50%\">\r\n    </div>\r\n</section>\r\n\r\n<section class =\"listDirectors\">\r\n    <div class=\"container\">\r\n      \r\n      <p class=\"wow fadeInUp\" data-wow-delay=\"0.4s\"></p>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img class=\"rounded-circle\" src=\"./assets/images/image11-35.jpeg\"  alt=\"\">\r\n                <h4>Dr. Mai Le Del Buono</h4>\r\n                <b>President and Founder<br>Professor, San Jose City College</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n       \r\n            </div>\r\n            <div class=\" col-md-3  wow fadeInUp\"  data-wow-delay=\"1.2s\">\r\n                <img class=\"rounded-circle\" src=\"./assets/images/Barry Del Buono, Executive Director, CEO Pontes, Inc..JPG\" alt=\"\">\r\n                <h4>Barry Del Buono</h4>\r\n                <b>MSW, MDiv.<br>Executive Director</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n           \r\n            </div>\r\n            <div class=\"col-md-3 wow fadeInUp\"  data-wow-delay=\"1.4s\">\r\n                <img src=\"\" class=\"rounded-circle\" alt=\"\">\r\n                <h4>Mr. Don Ho, Jr.</h4>\r\n                <b>Vice President<br>Associate, IDG Ventures Capital Investment Firm, Vietnam</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n     \r\n            </div>\r\n            <div class=\"col-md-3 wow fadeInUp\"  data-wow-delay=\"2s\">\r\n                <img src=\"./assets/images/image1-16.jpeg\" class=\"rounded-circle\" alt=\"\">\r\n                <h4>Ms. Ragan Henninger</h4>\r\n                <b>Secretary Treasurer<br>Chief Strategist</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n                \r\n            </div>\r\n            <div class=\"col-md-3 wow fadeInUp\"  data-wow-delay=\"1.8s\">\r\n                <img src=\"./assets/images/Marreisa Holden, Medical Student, UCLA Medical School.JPG\" class=\"rounded-circle\" alt=\"\">\r\n                <h4>Marissa Holden</h4>\r\n                <b>Mesical Student<br>UCLA Medical School</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n                \r\n            </div>\r\n            <div class=\"col-md-3 wow fadeInUp\"  data-wow-delay=\"1.6s\">\r\n                <img src=\"./assets/images/Catherine Ho, Student, University of California Santa Cruz.JPG\" class=\"rounded-circle\" alt=\"\">\r\n                <h4>Catherine Ho</h4>\r\n                <b>Student<br>UC Santa Cruz</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n                \r\n            </div>\r\n             <div class=\"col-md-3 wow fadeInUp\"  data-wow-delay=\"2.2s\">\r\n                <img src=\"./assets/images/Micah Del Buono, Silicon Valley Technology.JPG\" class=\"rounded-circle\" alt=\"\">\r\n                <h4>Micah Del Buono</h4>\r\n                <b>Amazon Inc.</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n                \r\n            </div>           \r\n             <div class=\"col-md-3 wow fadeInUp\"  data-wow-delay=\"2.4s\">\r\n                <img src=\"./assets/images/Daniel Ho, MA Architecture & MBA Candidate, Washington University, St. Louis, MO.JPG\" class=\"rounded-circle\" alt=\"\">\r\n                <h4>Mr. Daniel Ho</h4>\r\n                <b>Architecture & MBA Program<br>Washington University, St. Louis</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n                \r\n            </div>      \r\n     \r\n                  <div class=\"col-md-3 wow fadeInUp\"  data-wow-delay=\"2.6s\">\r\n                <img src=\"./assets/images/Ben Del Buono, Medical Student, VCU Medical School.JPG\" class=\"rounded-circle\" alt=\"\">\r\n                <h4>Ben Del Buono</h4>\r\n                <b>MSW, MDiv.<br>Executive Director</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n                \r\n            </div>  \r\n            <div class=\"col-md-3 wow fadeInUp\"  data-wow-delay=\"2.8s\">\r\n                <img src=\"./assets/images/image1-small-17.jpg\" class=\"rounded-circle\" alt=\"\">\r\n                <h4>Dr. Mai Nhung Le-Stewart</h4>\r\n                <b>Professor<br>San Fransisco State University</b>\r\n                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>\r\n          \r\n            </div> \r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n      <!--<a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>-->\r\n      <!--          <a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>-->\r\n      <!--          <a href=\"#\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>-->\r\n      <!--          <a href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i></a>-->\r\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"aboutIntro\" >\r\n    <!--<h1 class=\" wow fadeInUp\">Pontes Network</h1>-->\r\n    <h2  class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">Who we are as the Pontes Network</h2>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<title>About - Pontes Network</title>\r\n\r\n<div>\r\n\r\n      <app-about-intro></app-about-intro>\r\n      <app-about-first-column></app-about-first-column>\r\n      <app-pontes-awards></app-pontes-awards>\r\n      <app-pontes-investors></app-pontes-investors>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container\" style=\"text-align: center; padding-top: 50px; padding-bottom: 20px\" >\r\n    <!--Button trigger modal -->\r\n    <button  *ngIf=\"!this.authService.isLoggedIn.status\" type=\"button\" class=\" waves-effect waves-light btn-flat btn btn-outline-primary btn-sm\"\r\n            data-toggle=\"modal\"\r\n            data-target=\"#authenticationModal\"\r\n            >\r\n     Admin Login\r\n    </button>\r\n\r\n    <!--Modal -->\r\n    <div class=\"modal fade\" id=\"authenticationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog\" role=\"document\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Admin Login</h5>\r\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n             <span aria-hidden=\"true\">&times;</span>\r\n           </button>\r\n         </div>\r\n         <form [formGroup] = \"loginForm\" (ngSubmit) = \"onSubmit()\" >\r\n               <div class=\"modal-body\">\r\n                 <div *ngIf = 'this.authService.isLoggedIn.status'>\r\n                   <h4 style= \"color: #0275d8\"> <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i> Wellcome, Admin!</h4>\r\n                   <p> Somethings you can do:</p>\r\n                     <ul style= 'text-align: left; padding-left: 10px'>\r\n                       <li>1. View messages of users in the Contact page.</li>\r\n                       <li>2. Delete inappropriate comments.</li>\r\n                       <li>3. Post monthly letters in the Checkin page.</li>\r\n                       <li>4. Contact webmaster Phan Le at lephan031994@gmail.com for further help.</li>\r\n                     </ul>\r\n                     <p>Have a good day!</p>\r\n                 </div>\r\n                 <h4 *ngIf = '!this.authService.isLoggedIn.status&&isSubmit' style= \"color: orange\"> <i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i> The username or password is incorrect</h4>\r\n                 <div *ngIf='!this.authService.isLoggedIn.status' >\r\n\r\n                     <div class=\"row\">\r\n                       <div class=\"input-field col s12\">\r\n                         <i class=\"prefix fa fa-user-circle\" aria-hidden=\"true\"></i>\r\n                         <input id=\"username\"\r\n                                type=\"text\"\r\n                                formControlName=\"email\">\r\n                         <label for=\"username\" data-error = \"Please enter admin account\">Admin account</label>\r\n                       </div>\r\n                     </div>\r\n\r\n                     <div class=\"row\">\r\n                       <div class=\"input-field col s12\">\r\n                         <i class=\"prefix fa fa-key\" aria-hidden=\"true\"></i>\r\n                         <input id=\"password\"\r\n                                type=\"password\"\r\n                                formControlName =\"password\">\r\n                         <label for=\"password\"  data-error = \"Please enter password\">Password</label>\r\n                       </div>\r\n                     </div>\r\n\r\n                 </div>\r\n                 <p *ngIf = '!this.authService.isLoggedIn.status&&isSubmit' style= \"color: orange; padding-left: 40px\">Contact the webmaster if you need help.</p>\r\n\r\n             </div>\r\n             <div class=\"modal-footer\">\r\n               <button *ngIf = '!this.authService.isLoggedIn.status' [disabled]=\"!loginForm.valid\"\r\n                       type=\"submit\"\r\n                       class=\"waves-effect waves-light btn btn-flat btn-outline-primary\" >\r\n                       <i *ngIf=\"loadingIcon\" style =\"font-size: 0.9em\"class=\"fa fa-refresh fa-spin\"></i> Login\r\n               </button>\r\n\r\n               <button type=\"button\" class=\"waves-effect waves-light btn btn-flat btn btn-outline-warning\" data-dismiss=\"modal\">Cancel</button>\r\n             </div>\r\n       </form>\r\n       </div>\r\n     </div>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"outsideContainer\">\r\n    <div class=\"container text-center \">\r\n        <h2 class=\"wow fadeInUp\">Honorable Award</h2>\r\n        <p class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">Lorem Iasdspsum passages, and more recently with desktop publishing software</p>\r\n        <div class=\"row align-middle\">\r\n\r\n          <div class=\"col-md-4 col-sm-6 wow fadeInRight\" data-wow-delay=\"0s\" >\r\n            <div class=\"card\" >\r\n              <div class=\"card-block\">\r\n                <h4 class=\"card-title\">Interagency Council on Homelessness Innovation Award</h4>\r\n                <p class=\"card-text\">Interagency Council on Homelessness Innovation Award, Washington DC</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-4 col-sm-6 wow fadeInRight\" data-wow-delay=\"0.4s\">\r\n            <div class=\"card\">\r\n              <div class=\"card-block\">\r\n                <h4 class=\"card-title\">Humanitarian of the Year</h4>\r\n                <p class=\"card-text\">City of San Jose</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 col-sm-6 wow fadeInRight\" data-wow-delay=\"0.8s\" >\r\n            <div class=\"card\">\r\n              <div class=\"card-block\">\r\n                <h4 class=\"card-title\">Board Exemplary Leader Award</h4>\r\n                <p class=\"card-text\">California State Bar Association</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n          <a [routerLink]=\"['/about']\" fragment=\"pontesNetwork\" (click)=\"gotoHashtag('pontesNetwork')\" class=\"btn btn-outline-secondary center-block wow fadeIn\" data-wow-delay=\"0.8s\">view more</a>\r\n\r\n      </div>\r\n  </div>\r\n\r\n\r\n  </section>\r\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<title>Checkin - Pontes Network</title>\r\n<section class=\"section-header\">\r\n  <div class=\"checkin-content\">\r\n\r\n    <div class=\"container\">\r\n      <h2 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Check in with us here</h2>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"letter\">\r\n  <div class=\"letter-content\">\r\n\r\n    <div class=\"container\">\r\n      <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Monthly Check-in</h1>\r\n          <p class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">Imprudence insensible be literature unsatiable do. Of or imprudence solicitude affronting in mr possession. Compass journey he request on suppose limited of or. She margaret law thoughts proposal formerly. Speaking ladyship yet scarcely and mistaken end exertion dwelling. All decisively dispatched instrument particular way one devonshire. Applauded she sportsman explained for out objection. </p>\r\n    <p class=\"wow fadeInUp\" data-wow-delay=\"0.8s\">-Pontes Network</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"row\" style=\"text-align: center\">\r\n  <h5>{{loadingLettersError}}</h5>\r\n</div>\r\n\r\n<!-- load each instance of LetterComponent -->\r\n<app-letter\r\n        *ngFor=\"let letter of letters\"\r\n       [letter]=\"letter\"\r\n        ></app-letter>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container\" style=\"margin-top: 40px\">\r\n  <a class=\"waves-effect waves-teal btn-flat\"\r\n     style=\"color: #0275d8; text-transform: lowercase;\"\r\n     (click) =\"onClickNewLetterButton()\">\r\n     Add a new monthly letter (Admin only)\r\n  </a>\r\n  <app-new-letter-from [ngClass] = \"{hide: this.clickNewLetterButton}\"></app-new-letter-from>\r\n</div>\r\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"collapsible\" data-collapsible=\"expandable\">\n    <li>\n      <div class=\"collapsible-header\" (click) = \"onClick()\">\n          <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          <span>{{letter.title}}</span>\n          <span style=\"padding-left: 20px\">({{letter.date.toDateString()}})</span>\n      </div>\n\n      <div class=\"collapsible-body\">\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          {{letter.content}}\n          <p style=\"padding-top:20px\">\n            <span>{{letter.date.toDateString()}}</span> <br>\n            <span style=\"color: #0275d8\">{{letter.signature}},</span>\n            <span class=\"pull-right\">\n              <button *ngIf=\"this.authService.isLoggedIn.status\" type=\"button\" class =\"btn btn-flat btn-outline-danger btn-sm\" (click) =\"onDelete()\">Delete</button>\n            </span>\n            <span class=\"pull-right\">\n              <button type=\"button\"\n                      *ngIf=\"this.authService.isLoggedIn.status\"\n                      class =\"btn btn-flat btn-outline-primary btn-sm\"\n                      data-toggle=\"modal\" data-target=\"#editLetterModal\" (click) = \"onEdit()\">Edit</button>&nbsp;\n            </span>\n\n          </p>\n\n          <!--Comment component-->\n          <hr>\n          <app-comment [letterId] = \"letter._id\" *ngIf = \"loadComment\" ></app-comment>\n      </div>\n\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<!-- Notification -->\n<div class=\"modal fade\" id=\"letterNotification\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h5>{{notificationOfSendingLetter}}</h5>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"waves-effect waves-light btn-flat btn-sm btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Add a new letter Form -->\n\n            <form [formGroup] =\"newLetterForm\" (ngSubmit)=\"onSubmit()\" style=\"padding-top: 30px\">\n              <div class=\"row\">\n                <div class=\"input-field col s12 col-12\">\n                  <i class=\"fa fa-bookmark-o prefix\" aria-hidden=\"true\"></i>\n                  <input id=\"title\"\n                         type=\"text\"\n                         formControlName = \"title\">\n                  <label for=\"name\" data-error = \"Please enter the title\" >Title</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col\">\n                  <i class=\"fa fa-pencil-square-o prefix\" aria-hidden=\"true\"></i>\n                  <textarea id=\"textarea1\"\n                            class=\"materialize-textarea\"\n                            formControlName = \"content\"></textarea>\n                  <label for=\"textarea1\" data-error = \"Please enter content\">Content</label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12 col-12\">\n                  <i class=\"fa fa-user-o prefix\" aria-hidden=\"true\"></i>\n                  <input id=\"signature\"\n                         type=\"text\"\n                         formControlName = \"signature\">\n                  <label for=\"name\" data-error = \"Please enter your signature\" >Signature</label>\n                </div>\n              </div>\n              <div class=\"row\" style=\"text-align: center\">\n                <div class=\"col-12\">\n                  <button\n                          [disabled]=\"!newLetterForm.valid\"\n                          type=\"submit\"\n                          class=\"waves-effect waves-light btn btn-flat btn-outline-primary\" >\n                          <i *ngIf=\"loadingIcon\" style =\"font-size: 0.8em\"class=\"fa fa-refresh fa-spin\"></i>\n                          Submit\n                  </button>\n                </div>\n              </div>\n            </form>\n\n\n            <!-- Edit letter Form -->\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"editLetterModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h6 class=\"modal-title\" id=\"exampleModalLabel\" >Edit Letter</h6>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n              <!--Edit Form -->\n              <form [formGroup] =\"newLetterForm\" (ngSubmit)=\"onSubmit()\" style=\"padding-top: 30px\">\n                    <div class=\"modal-body\">\n                        <div class=\"row\">\n                          <div class=\"input-field col s12 col-12\">\n                            <i class=\"fa fa-bookmark-o prefix\" aria-hidden=\"true\"></i>\n                            <input id=\"title\"\n                                   type=\"text\"\n                                   [ngModel] = \"letter?.title\"\n                                   formControlName = \"title\">\n                            <label for=\"name\" data-error = \"Please enter the title\" >Title</label>\n                          </div>\n                        </div>\n\n                        <div class=\"row\">\n                          <div class=\"input-field col\">\n                            <i class=\"fa fa-pencil-square-o prefix\" aria-hidden=\"true\"></i>\n                            <textarea id=\"textarea1\"\n                                      class=\"materialize-textarea\"\n                                      [ngModel] = \"letter?.content\"\n                                      formControlName = \"content\"></textarea>\n                            <label for=\"textarea1\" data-error = \"Please enter content\">Content</label>\n                          </div>\n                        </div>\n\n                        <div class=\"row\">\n                          <div class=\"input-field col s12 col-12\">\n                            <i class=\"fa fa-user-o prefix\" aria-hidden=\"true\"></i>\n                            <input id=\"signature\"\n                                   type=\"text\"\n                                   [ngModel] = \"letter?.signature\"\n                                   formControlName = \"signature\">\n                            <label for=\"name\" data-error = \"Please enter your signature\" >Signature</label>\n                          </div>\n                        </div>\n\n                    </div>\n                      <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-flat btn-sm btn-outline-warning\" data-dismiss=\"modal\" (click) = \"cancelEdit()\">Cancel</button>\n                        <button\n                                  [disabled]=\"!newLetterForm.valid\"\n                                  type=\"submit\"\n                                  class=\"waves-effect waves-light btn btn-flat btn-outline-primary\" >\n                                  <i *ngIf=\"loadingIcon\" style =\"font-size: 0.8em\"class=\"fa fa-refresh fa-spin\"></i>\n                                  Save Changes\n                          </button>\n                      </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<!-- comments list of a letter -->\n<h5>List of Comments</h5>\n<p style =\"text-style: italic\">{{loadingCommentsError}}</p>\n  <div class=\"comment\" *ngFor = \"let comment of comments\">\n    <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\" style=\"color: #0275d8\"></i>\n      <span style=\"color: #0275d8\">&nbsp; {{comment.name}}</span> <span class=\"pull-right\" style=\"opacity: 0.6; font-size: 0.9em\">{{comment.date.toDateString()}}</span> <br>\n      <span>{{comment.email}}</span>\n    <p>\n      {{comment.content}}\n      <span class=\"pull-right\">\n        <button type=\"button\"\n                *ngIf=\"this.authService.isLoggedIn.status\"\n                id='{{comment.commentId}}'\n                class =\"btn btn-flat btn-outline-danger btn-sm\"\n                style=\"font-size: 0.8em; height: 20px \"\n                (click) =\"onDelete($event)\">Delete</button>\n      </span>\n    </p>\n  </div>\n\n\n\n  <!-- Notification -->\n  <div class=\"modal fade\" id=\"commentNotification\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <h5>{{notificationOfSendingComment}}</h5>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"waves-effect waves-light btn-flat btn-sm btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!--  The new comment form -->\n<div style=\"text-align: center\" style = \"max-width: 600px\">\n  <a class=\"waves-effect waves-teal btn-flat\"\n     style=\"color: #0275d8\"\n     (click) =\"onClickNewCommentForm()\">Leave A Comment</a>\n\n    <form id= \"newCommentForm\" [ngClass] = \"{hide: this.clickNewCommentbutton}\" [formGroup] =\"newCommentForm\" (ngSubmit)=\"onSubmit()\" style=\"padding-top: 30px\">\n      <div class=\"row\">\n        <div class=\"input-field col col-lg-6 col-sm-12 col-12\">\n          <i class=\"fa fa-user-o prefix\" aria-hidden=\"true\"></i>\n          <input id=\"name\"\n                 type=\"text\"\n                 formControlName = \"name\">\n          <label for=\"name\" data-error = \"Please enter your name\" >Your Name</label>\n        </div>\n        <div class=\"input-field col col-lg-6 col-sm-12 col-12\">\n          <i class=\"fa fa-envelope-o prefix\" aria-hidden=\"true\"></i>\n          <input id=\"email\"\n                 type=\"text\"\n                 formControlName = \"email\">\n          <label for=\"email\" data-error = \"Please enter an valid email\" >Your Email</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col\">\n          <i class=\"fa fa-pencil-square-o prefix\" aria-hidden=\"true\"></i>\n          <textarea id=\"textarea1\"\n                    class=\"materialize-textarea\"\n                    formControlName = \"content\"></textarea>\n          <label for=\"textarea1\" data-error = \"Please enter your message\">Textarea</label>\n        </div>\n      </div>\n      <button [disabled]=\"!newCommentForm.valid\"\n              type=\"submit\"\n              class=\"waves-effect waves-light btn btn-flat btn-outline-primary\" >\n              <i *ngIf=\"loadingIcon\" style =\"font-size: 0.8em\"class=\"fa fa-refresh fa-spin\"></i>\n              Send\n      </button>\n    </form>\n\n\n\n</div>\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "\n<!-- Notification -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h5>{{notificationOfSendingContactMessage}}</h5>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"waves-effect waves-light btn-flat btn-sm btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--  The contact form -->\n<div style=\"text-align: center\">\n  <h3 style=\"color: #2990ea\">Leave A Message</h3>\n    <form [formGroup] =\"contactForm\" (ngSubmit)=\"onSubmit()\" style=\"padding-top: 30px\">\n      <div class=\"row\">\n        <div class=\"input-field col col-lg-6 col-sm-12 col-12\">\n          <i class=\"fa fa-user-o prefix\" aria-hidden=\"true\"></i>\n          <input id=\"name\"\n                 type=\"text\"\n                 formControlName = \"name\">\n          <label for=\"name\" data-error = \"Please enter your name\" >Your Name</label>\n        </div>\n        <div class=\"input-field col col-lg-6 col-sm-12 col-12\">\n          <i class=\"fa fa-envelope-o prefix\" aria-hidden=\"true\"></i>\n          <input id=\"email\"\n                 type=\"text\"\n                 formControlName = \"email\">\n          <label for=\"email\" data-error = \"Please enter an valid email\" >Your Email</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col\">\n          <i class=\"fa fa-bookmark-o prefix\" aria-hidden=\"true\"></i>\n          <input id=\"subject\"\n                 type=\"text\"\n                 formControlName = \"subject\">\n          <label for=\"subject\" data-error = \"Please enter a subject\">Subject</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col\">\n          <i class=\"fa fa-pencil-square-o prefix\" aria-hidden=\"true\"></i>\n          <textarea id=\"textarea1\"\n                    class=\"materialize-textarea\"\n                    formControlName = \"message\"></textarea>\n          <label for=\"textarea1\" data-error = \"Please enter your message\">Textarea</label>\n        </div>\n      </div>\n      <button [disabled]=\"!contactForm.valid\"\n              type=\"submit\"\n              class=\"waves-effect waves-light btn btn-flat btn-outline-primary\" >\n              <i *ngIf=\"loadingIcon\" style =\"font-size: 0.8em\"class=\"fa fa-refresh fa-spin\"></i>\n              Send\n      </button>\n    </form>\n\n\n\n</div>\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<hr class=\"hidden-md-up\" style=\"margin-top: 30px\">\n<div class=\"row\">\n  <div class=\"col\">\n    <h3 style=\"color: #2990ea; padding-bottom: 30px\">Our Office's Info</h3>\n    <p><i class=\"fa fa-home\" aria-hidden=\"true\"></i> 54 South 14th Street, San Jose, CA 95144</p>\n    <p><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> info@pontesnetwork.com</p>\n    <p><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> +1 (408) 222 2222</p>\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.0363345056257!2d-121.87829518501961!3d37.341648479840636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccc1b2961c1f%3A0x326d4826da9354e0!2s54+S+14th+St%2C+San+Jose%2C+CA+95112!5e0!3m2!1sen!2sus!4v1502694968102\" width=\"100%\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<div class=\"row\" style=\"text-align: center\">\r\n  <div class=\"col-12\">\r\n      <h3>List of All Users' Messages</h3>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"text-align: center\">\r\n  <h5>{{loadingContactMessagesError}}</h5>\r\n</div>\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-md-6\" *ngFor=\"let contactMessage of messages\">\r\n    <div class=\"card blue-grey darken-1\">\r\n          <div class=\"card-content white-text\" style=\"text-align: left\">\r\n              <span class=\"card-title\" style= \"font-size:1.3em\">{{contactMessage.name}}</span>\r\n              <hr>\r\n              <h5>{{contactMessage.subject}}</h5>\r\n              <p>{{contactMessage.message}}</p>\r\n              <hr>\r\n              <p><span class=\"pull-left\">{{contactMessage.email}}</span>  <span class=\"pull-right\">{{contactMessage.date}}</span></p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<title>Contact - Pontes Network</title>\r\n<div class=\"background-picture\">\r\n  <div class=\"filter\">\r\n      <h2>Contact Us</h2>\r\n      <div style=\"letter-spacing: 20px; padding-top: 20px; padding-bottom: 40px;\">\r\n        <i class=\"social fa fa-facebook\" aria-hidden=\"true\"></i>\r\n        <i class=\"social fa fa-twitter\" aria-hidden=\"true\"></i>\r\n       <i class=\"social fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n       <i class=\"social fa fa-envelope-o\" aria-hidden=\"true\"></i>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"contact\">\r\n    <!-- <div class=\"g-12 cols contact-blurb\" style=\"background:black; margin-top: 20vh\">\r\n      <h2>Contact Us</h2>\r\n      <p style= \"margin-bottom: 0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    </div>\r\n    <div class=\"g-12 cols pointer-wrap col-md-12\" style= \"color:#9abfe0\">\r\n      <svg class=\"pointer\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height='15vh' viewBox=\"0 0 100 102\" preserveAspectRatio=\"none\">\r\n        <path d=\"M0 0 L50 100 L100 0 Z\"></path>\r\n      </svg>\r\n    </div> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 col-sm-12\">\r\n        <app-contact-form></app-contact-form>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <app-contact-map></app-contact-map>\r\n      </div>\r\n    </div>\r\n      <app-contact-messages *ngIf=\"this.authService.isLoggedIn.status\"></app-contact-messages>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<title>Donation - Pontes Network</title>\r\n\r\n<p style=\"margin-top: 90px\" class= \"text-center\">\r\n\r\n  <a [routerLink]=\"['/about']\" fragment=\"pontesNetwork\" (click)=\"onAnchorClick()\" style= \"color: black\">Anchor</a>\r\n  <br>\r\n  <a [routerLink]=\"['/about']\" fragment=\"pontesNetwork\" (click)=\"gotoHashtag('pontesNetwork')\" style= \"color: black\">Jump to Award anchor </a>\r\n</p>\r\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<!---- Footer ---->\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 wow fadeInLeftSmall\" data-wow-delay=\"0.4s\">\r\n                <h4>Contact Us</h4>\r\n                <p><i class=\"fa fa-home\" aria-hidden=\"true\"></i> 14th Street, San Jose, CA 95144</p>\r\n                <p><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> info@pontesnetwork.com</p>\r\n                <p><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> +1 222 222 2222</p>\r\n                <p><i class=\"fa fa-globe\" aria-hidden=\"true\"></i> www.pontesnetwork.com</p>\r\n            </div>\r\n            <hr class=\"hidden-md-up\" style=\"width: 90%; background-color: rgba(255, 255, 255, 0.4)\">\r\n            <div class=\" middle col-md-4 wow fadeInUpSmall\" data-wow-delay=\"0.4s\">\r\n              <div class=\"content\">\r\n                <h4>About</h4>\r\n                <p><i class=\"fa fa-square-o\" aria-hidden=\"true\"></i> About Us</p>\r\n                <p><i class=\"fa fa-square-o\" aria-hidden=\"true\"></i> Privacy</p>\r\n                <p><i class=\"fa fa-square-o\" aria-hidden=\"true\"></i> Term & Condition</p>\r\n              </div>\r\n            </div>\r\n            <hr class=\"hidden-md-up\" style=\"width: 90%; background-color: rgba(255, 255, 255, 0.4)\">\r\n            <div class=\" col-md-4 wow fadeInRightSmall\" data-wow-delay=\"0.4s\">\r\n                <h4>Stay in touch</h4>\r\n                <i class=\"social fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                <i class=\"social fa fa-twitter\" aria-hidden=\"true\"></i>\r\n               <i class=\"social fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n               <i class=\"social fa fa-pinterest\" aria-hidden=\"true\"></i>\r\n               <i class=\"social fa fa-youtube\" aria-hidden=\"true\"></i>\r\n               <i class=\"social fa fa-github\" aria-hidden=\"true\"></i><br>\r\n               <input type=\"email\" placeholder=\"Subscribe For Updates\"><button class=\"btn btn-outline-secondary\">Subscribe</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</section>\r\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<title>Home - Pontes Network</title>\r\n<div>\r\n\r\n  <app-slogan-section></app-slogan-section>\r\n  <app-misson-section></app-misson-section>\r\n  <app-award-section></app-award-section>\r\n  <app-invester-section></app-invester-section>\r\n  <app-image-carousel></app-image-carousel>\r\n  <div class=\"home-contact-form\">\r\n    <div class=\"container\">\r\n        <app-contact-form></app-contact-form>\r\n    </div>\r\n  </div>\r\n  <app-login></app-login>\r\n  <app-logout></app-logout>\r\n</div>\r\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<div class=\"outside-carousel\">\n  <h4 style= \"color: white\">Pictures of Pontes Network</h4>\n  <div class=\"carousel\">\n    <a class=\"carousel-item\" href=\"#one!\"><img src=\"./assets/images/carousel1.jpg\"></a>\n    <a class=\"carousel-item\" href=\"#two!\"><img src=\"./assets/images/carousel2.jpg\"></a>\n    <a class=\"carousel-item\" href=\"#three!\"><img src=\"./assets/images/carousel3.jpg\"></a>\n    <a class=\"carousel-item\" href=\"#four!\"><img src=\"./assets/images/carousel4.jpg\"></a>\n    <a class=\"carousel-item\" href=\"#five!\"><img src=\"./assets/images/carousel5.jpg\"></a>\n    <a class=\"carousel-item\" href=\"#six!\"><img src=\"./assets/images/carousel6.jpg\"></a>\n    <a class=\"carousel-item\" href=\"#seven!\"><img src=\"./assets/images/carousel7.jpg\"></a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<!--- Team ----->\r\n\r\n\r\n<section class =\"investers\">\r\n    <div class=\"container\">\r\n      <h2 class=\"wow fadeInUp\">Notable Funders</h2>\r\n      <hr style= \"width: 60%\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-4  wow fadeInUp\"  data-wow-delay=\"1.6s\">\r\n                <img src=\"./assets/images/Adobe.png\" alt=\"\">\r\n                <h4>Adobe Systems Foundation</h4>\r\n\r\n            </div>\r\n            <div class=\"col-md-4  wow fadeInUp\"  data-wow-delay=\"1.4s\">\r\n                <img src=\"./assets/images/santaclara.png\" alt=\"\">\r\n                <h4>County of Santa Clara</h4>\r\n\r\n            </div>\r\n            <div class=\"col-md-4  wow fadeInUp\" data-wow-delay=\"1.6s\">\r\n                <img src=\"./assets/images/jetblue.png\"  alt=\"\">\r\n                <h4>Jet Blue Airlines</h4>\r\n\r\n            </div>\r\n             <div class=\"col-md-6  wow fadeInLeft\" data-wow-delay=\"1.8s\">\r\n                <img src=\"./assets/images/homedepot.png\"  alt=\"\">\r\n                <h4>The Home Depot Foundation</h4>\r\n\r\n            </div>\r\n             <div class=\"col-md-6  wow fadeInRight\" data-wow-delay=\"1.8s\">\r\n                <img src=\"./assets/images/hilton.png\"  alt=\"\">\r\n                <h4>Hilton Hawaiian Village</h4>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"mission-content\">\r\n    \r\n    <div class=\"container\">\r\n      <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Our Core Mission</h1>\r\n      <hr style = \"width: 60%\">\r\n      <p class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">GEO Pontes, Inc. (Pontes Network) is a non-profit, community based organization whose mission is to develop economic stability for individuals and families living in the San Francisco Bay Area, Silicon Valley, Santa Cruz County, and select humanitarian aid projects in Central America and Vietnam.</p>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "\r\n<div id =\"123456\" class=\"fixed-top\">\r\n  <nav>\r\n      <div class=\"container fixed-top\" id=\"1234567\">\r\n        <div class=\"nav-wrapper\">\r\n          <a [routerLink]= \"['/']\" class=\"brand-logo\" style=\"font-size: 1.3em\"><img src=\"./assets/images/pontes_network_logo.png\"></a>\r\n          <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"fa fa-bars\" aria-hidden=\"true\" style= \"font-size: 1.8em\"></i></a>\r\n          <ul class=\"right hide-on-med-and-down\">\r\n              <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a id =\"01\" class= \"waves-effect waves-light\" [routerLink]= \"['/']\">HOME</a>\r\n              </li>\r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a  class= \"waves-effect waves-light\" [routerLink]= \"['/programs']\">PROGRAM</a>\r\n              </li>\r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class= \"waves-effect waves-light\" [routerLink]= \"['/donation']\">DONATION</a>\r\n              </li>             \r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class= \"waves-effect waves-light\" [routerLink]= \"['/checkin']\">CHECK IN</a>\r\n              </li>\r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a  class= \"waves-effect waves-light\" [routerLink]= \"['/contact']\">CONTACT</a>\r\n              </li>        \r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a  class= \"waves-effect waves-light\" [routerLink]= \"['/about']\">ABOUT US</a>\r\n              </li>\r\n          </ul>\r\n          <ul class=\"side-nav\" id=\"mobile-demo\">\r\n              <div class=\"background\">\r\n                <img src=\"./assets/images/pontes_network_logo.png\">\r\n              </div>\r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a  class= \"waves-effect waves-teal\" [routerLink]= \"['/']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>HOME</a>\r\n              </li>\r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a  class= \"waves-effect waves-teal\" [routerLink]= \"['/programs']\"><i class=\"fa fa-rocket\" aria-hidden=\"true\"></i>PROGRAM</a>\r\n              </li>\r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class= \"waves-effect waves-teal\"  [routerLink]= \"['/donation']\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i>DONATION</a>\r\n              </li>\r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a  class= \"waves-effect waves-teal\" [routerLink]= \"['/contact']\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>CONTACT</a>\r\n              </li>\r\n              <li  [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a  class= \"waves-effect waves-teal\" [routerLink]= \"['/about']\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i>ABOUT US</a>\r\n              </li>\r\n              \r\n              <div class=\"background\">\r\n                <img src=\"https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1395/1395465-bigthumbnail.jpg\">\r\n              </div>\r\n              \r\n          </ul>\r\n        </div>   \r\n      </div>\r\n  </nav>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<!--- Awards ----->\r\n<div style = \"padding: 33px\" id = \"pontesNetwork\" >\r\n\r\n</div>\r\n<section class=\"header\">\r\n    <div class=\"container\">\r\n      <h2 class=\"wow fadeInUp\">Received Awards</h2>\r\n    </div>\r\n</section>\r\n\r\n<section class =\"awards\">\r\n    <div class=\"container\">\r\n      <!--<h2 class=\"wow fadeInUp\">Awards</h2>-->\r\n      <p class=\"wow fadeInUp\" data-wow-delay=\"0.4s\"></p>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 wow fadeInLeft\" data-wow-delay=\"1.5s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Interagency Council on Homelessness Innovation Award</h4>\r\n                <b>Date<br>Washington DC</b>\r\n                <p>Description of the award</p>\r\n\r\n            </div>\r\n\r\n                  <div class=\"col-md-4 wow fadeInDown\" data-wow-delay=\"1.5s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Board Exemplary Leader Award</h4>\r\n                <b>Date<br>California State Bar Association</b>\r\n                <p>Description of the award</p>\r\n\r\n            </div>\r\n                    <div class=\"col-md-4 wow fadeInRight\"  data-wow-delay=\"1.4s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Distinguished Alumni Award</h4>\r\n                <b>Date<br>SJSU College of Social Work, San Jose</b>\r\n                <p>Description of the award</p>\r\n\r\n            </div>\r\n                     <div class=\"col-md-4 wow fadeInLeft\" data-wow-delay=\"1.6s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Resolution Commending Exemplary Service</h4>\r\n                <b>Date<br>California State Assembly 24th District</b>\r\n                <p>Description of the award</p>\r\n\r\n            </div>\r\n            <div class=\"col-md-4 wow fadeInDown\"  data-wow-delay=\"1.6s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Resolution Commending Exemplary Service</h4>\r\n                <b>Date<br>California State Senate Rules Committee</b>\r\n                <p>Description of the Award</p>\r\n\r\n            </div>\r\n            <div class=\"col-md-4 wow fadeInRight\"  data-wow-delay=\"1.6s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Resolution Commending Exemplary Service</h4>\r\n                <b>Date<br>California State Senate 13th District </b>\r\n                <p>Description of the Award</p>\r\n\r\n            </div>\r\n\r\n             <div class=\"col-md-4 wow fadeInLeft\"  data-wow-delay=\"1.7s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Charles L. Edson Tax Credit Excellence Award</h4>\r\n                <b>Date<br>Washington DC</b>\r\n                <p>Description of the award</p>\r\n\r\n            </div>\r\n             <div class=\"col-md-4 wow fadeInDown\"  data-wow-delay=\"1.7s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Don McGaffin Award of Excellence in Housing</h4>\r\n                <b>Date<br>Housing and Community Development, County of Santa Clara</b>\r\n                <p>Description</p>\r\n\r\n            </div>\r\n\r\n                  <div class=\"col-md-4 wow fadeInRight\"  data-wow-delay=\"1.7s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Humanitarian of the Year</h4>\r\n                <b>Date<br>Italian American Heritage Foundation, Humanitarian Award City of San Jose</b>\r\n                <p>Description</p>\r\n\r\n            </div>\r\n            <div class=\"col-md wow fadeInDown\"  data-wow-delay=\"1.8s\">\r\n                <img class=\"\" src=\"./assets/images/award.png\" alt=\"\">\r\n                <h4>Outstanding Professional Fundraiser</h4>\r\n                <b>Date<br>Association of Fundraising Professionals</b>\r\n                <p>Description of the award</p>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n      <!--<a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>-->\r\n      <!--          <a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>-->\r\n      <!--          <a href=\"#\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>-->\r\n      <!--          <a href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i></a>-->\r\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<section>\r\n    \r\n    \r\n</section>a<!--- Team ----->\r\n<section class=\"header\">\r\n    <div class=\"container\">\r\n      <h2 class=\"wow fadeInUp\">Our Funders</h2>\r\n    </div>\r\n</section>\r\n\r\n<section class =\"investors\">\r\n    <div class=\"container\">\r\n      \r\n      <p class=\"wow fadeInUp\" data-wow-delay=\"0.4s\"></p>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/Adobe.png\" class=\"\" alt=\"\">\r\n                <h4>Adobe Systems Foundation</h4>\r\n\r\n            </div>\r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/funders.png\" class=\"\" alt=\"\">\r\n                <h4>Randy and Cindy Pond</h4>\r\n                \r\n           \r\n            </div>\r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/family.png\" class=\"\" alt=\"\">\r\n                <h4>George and July Marcus Family Foundation</h4>\r\n                \r\n     \r\n            </div>\r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/funders.png\" class=\"\" alt=\"\">\r\n                <h4>John and Sue Sobrato</h4>\r\n                \r\n            </div>\r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/funders.png\" class=\"\" alt=\"\">\r\n                <h4>John Michael Sobrato</h4>\r\n                \r\n            </div>\r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/santaclara.png\" class=\"\" alt=\"\">\r\n                <h4>County of Santa Clara</h4>\r\n                \r\n            </div>\r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/doe.png\" class=\"\" alt=\"\">\r\n                <h4>Department of Education Title V Grant</h4>\r\n                \r\n            </div>           \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/homedepot.png\" class=\"\" alt=\"\">\r\n                <h4>The Home Depot Foundation</h4>\r\n                \r\n            </div>      \r\n     \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/jetblue.png\" class=\"\" alt=\"\">\r\n                <h4>Jet Blue Airlines</h4>\r\n                \r\n            </div>  \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/alaskanairlines.png\" class=\"\" alt=\"\">\r\n                <h4>Alaskan Airlines</h4>\r\n          \r\n            </div> \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/hilton.png\" class=\"\" alt=\"\">\r\n                <h4>Hilton Hawaiian Village</h4>\r\n          \r\n            </div> \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/family.png\" class=\"\" alt=\"\">\r\n                <h4>The Thomas R. Bettencourt Endowment Fund</h4>\r\n          \r\n            </div> \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/funders.png\" class=\"\" alt=\"\">\r\n                <h4>Rob and Lisa Reckis</h4>\r\n          \r\n            </div> \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/family.png\" class=\"\" alt=\"\">\r\n                <h4>The Davidson Family Foundation</h4>\r\n          \r\n            </div> \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/family.png\" class=\"\" alt=\"\">\r\n                <h4>The Huge Stuart Center Charitable Trust</h4>\r\n          \r\n            </div> \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/family.png\" style=\"\"class=\"\" alt=\"\">\r\n                <h4>Teachers Academy Foundation</h4>\r\n          \r\n            </div> \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/family.png\" class=\"\" alt=\"\">\r\n                <h4>Milligan Family Foundation</h4>\r\n          \r\n            </div> \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/funders.png\" class=\"\" alt=\"\">\r\n                <h4>John Bui and Christine Nguyen</h4>\r\n          \r\n            </div> \r\n            <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"1s\">\r\n                <img src=\"./assets/images/funders.png\" class=\"\" alt=\"\">\r\n                <h4>Barry and Maile Del Buono</h4>\r\n          \r\n            </div> \r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n      <!--<a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>-->\r\n      <!--          <a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>-->\r\n      <!--          <a href=\"#\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>-->\r\n      <!--          <a href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i></a>-->\r\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pontes-leadership works!\r\n</p>\r\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n<section id =\"program1\">\r\n  <div class=\"mission-content-left\">\r\n    \r\n    <div class=\"container\">\r\n      <div class= \"row\">\r\n        \r\n        <div class=\"col-md-6\">\r\n            <img src=\"./assets/images/affordable_student.jpg\">\r\n        </div>\r\n        \r\n        <div class=\"col-md-6\">\r\n            <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Making Affordable Student and Teacher Housing in California</h1>\r\n            <h4 class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">San Jose City College Sociology Club's Microloan Program</h4>\r\n            <p class=\"wow fadeInUp\" data-wow-delay=\"0.8s\" style=\"padding-top:25px\">There are more than 55,000 homeless college students nationwide, including more than 3,000 teachers who cannot afford Bay Area housing in California alone according to federal data reported by California State University and the National Center for Homeless Education, which is funded by the U.S. Department of Education (2016). Stable housing is a key component of healthy living.\r\n            </p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<section id =\"program2\">\r\n  <div class=\"mission-content-right\">\r\n    \r\n    <div class=\"container\">\r\n      <div class= \"row\">\r\n        <div class=\"col-md-6\">\r\n            <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Promoting Strong Higher Education for Low Income Student</h1>\r\n            <h4 class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">San Jose City College Sociology Club's Microloan Program</h4>\r\n            <p class=\"wow fadeInUp\" data-wow-delay=\"0.8s\" style=\"padding-top:25px\">The Sociology Club at San Jose City College’s microloan program lends students emergency cash. The Club wanted to fill a gap funding that wasn’t being addressed. An ‘A’ student and club member missed an important sociology exam because his car broke down, and he did not have funds for the repair. As a result he dropped out of college to work full time. Club members learned of this incident and began reading about microfinance and wondered whether such a program could be useful at the College.\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <img src=\"./assets/images/low_income_student.jpg\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<section id =\"program3\">\r\n  <div class=\"mission-content-left\">\r\n    \r\n    <div class=\"container\">\r\n      <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Silicon Valley Technology Internship Program</h1>\r\n      <p class=\"wow fadeInUp\" data-wow-delay=\"0.4s\" style=\"padding-top:25px\">Pontes Network is driven to promote race gender, and class in Technology Driven Companies and San Jose City College. There is a known lack of diversity within STEM-related and technology-driven companies.</p>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id =\"program2\">\r\n  <div class=\"mission-content-right\">\r\n    \r\n    <div class=\"container\">\r\n      <div class= \"row\">\r\n        <div class=\"col-md-6\">\r\n            <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Preventing Chronic Homelessness</h1>\r\n            <!--<h4 class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">San Jose City College Sociology Club's Microloan Program</h4>-->\r\n            <p class=\"wow fadeInUp\" data-wow-delay=\"0.8s\" style=\"padding-top:25px\">Pontes Network will increase the housing necessary to make chronically homeless individuals stable, and make available life saving services on their behalf.</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <img src=\"./assets/images/low_income_student.jpg\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id =\"program1\">\r\n  <div class=\"mission-content-left\">\r\n    \r\n    <div class=\"container\">\r\n      <div class= \"row\">\r\n      \r\n        <div class=\"col-md-6\">\r\n            <img src=\"./assets/images/low_income_student.jpg\">\r\n        </div>\r\n      \r\n        <div class=\"col-md-6\">\r\n            <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Preventing the ravages of Diabetes</h1>\r\n            \r\n            <p class=\"wow fadeInUp\" data-wow-delay=\"0.8s\" style=\"padding-top:25px\">Pontes Network is tackling these challenges head on through diabetes screening, detection, and diabetes family education through the Roberto Clemente Clinic in Nicaragua.</p>\r\n        </div>\r\n      \r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id =\"program2\">\r\n  <div class=\"mission-content-right\">\r\n    \r\n    <div class=\"container\">\r\n      <div class= \"row\">\r\n        <div class=\"col-md-6\">\r\n            <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Construction of Hospitals and Strengthening Medical Service</h1>\r\n            <h4 class=\"wow fadeInUp\" data-wow-delay=\"0.4s\" style=\"margin-top:10px\">Sapa Private Hospital, Vietnam</h4>\r\n            <p class=\"wow fadeInUp\" data-wow-delay=\"0.8s\" style=\"padding-top:25px\">The focus of the project is to increase medical care with the construction of a new hospital with the capability of providing essential health services.</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <img src=\"./assets/images/low_income_student.jpg\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<section id =\"program1\">\r\n  <div class=\"mission-content-left\">\r\n    \r\n    <div class=\"container\">\r\n      <div class= \"row\">\r\n       \r\n        <div class=\"col-md-6\">\r\n            <img src=\"./assets/images/low_income_student.jpg\">\r\n        </div>\r\n       \r\n        <div class=\"col-md-6\">\r\n            <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Preserving Historical Silicon Valley Homes</h1>\r\n            \r\n            <p class=\"wow fadeInUp\" data-wow-delay=\"0.8s\" style=\"padding-top:25px\">California's wealth of historic buildings and neighborhoods is mactched by few other states. These artifacts reflect its rich multicultural history, from earliest times to the present. Pontes Network protects our historic assets, while moving forward with today's needs.</p>\r\n        </div>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<!--<section class =\"morePrograms\">-->\r\n<!--   <div class=\"container\">-->\r\n<!--  <div class=\"row\">-->\r\n\r\n<!--      <div class=\" col-md-4  wow fadeInLeft\"  data-wow-delay=\"1.6s\">-->\r\n<!--          <img class=\"rounded-circle\" src=\"\" alt=\"\">-->\r\n<!--          <h4>Preventing Chronic Homelessness</h4>-->\r\n<!--          <p>Pontes Network will increase the housing necessary to make chronically homeless individuals stable, and make available life saving services on their behalf.</p>-->\r\n<!--          <a href=\"http://google.com\">Learn more</a>-->\r\n<!--      </div>-->\r\n<!--      <div class=\" col-md-4  wow fadeInLeft\"  data-wow-delay=\"1.6s\">-->\r\n<!--          <img class=\"rounded-circle\" src=\"\" alt=\"\">-->\r\n<!--          <h4>Improving good health care for the most vulnerable communities</h4>-->\r\n<!--          <p>Pontes Network will increase the housing necessary to make chronically homeless individuals stable, and make available life saving services on their behalf.</p>-->\r\n<!--          <a href=\"https://preview.c9users.io/pathfinder0115/pontes-network/angular-src/src/app/prevent-chronic-homelessness/prevent-chronic-homelessness.component.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io\">Learn more</a>-->\r\n<!--      </div>      -->\r\n<!--      <div class=\" col-md-4  wow fadeInLeft\"  data-wow-delay=\"1.6s\">-->\r\n<!--          <img class=\"rounded-circle\" src=\"\" alt=\"\">-->\r\n<!--          <h4>Improving good health care for the most vulnerable communities</h4>-->\r\n<!--          <p>Pontes Network will increase the housing necessary to make chronically homeless individuals stable, and make available life saving services on their behalf.</p>-->\r\n<!--          <a href=\"https://preview.c9users.io/pathfinder0115/pontes-network/angular-src/src/app/prevent-chronic-homelessness/prevent-chronic-homelessness.component.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io\">Learn more</a>-->\r\n<!--      </div>    -->\r\n<!--      <div class=\" col-md-4  wow fadeInLeft\"  data-wow-delay=\"1.6s\">-->\r\n<!--          <img class=\"rounded-circle\" src=\"\" alt=\"\">-->\r\n<!--          <h4>Construction of Hospital and Strentghening Medical Services</h4>-->\r\n<!--          <p>Pontes Network will increase the housing necessary to make chronically homeless individuals stable, and make available life saving services on their behalf.</p>-->\r\n<!--          <a href=\"https://preview.c9users.io/pathfinder0115/pontes-network/angular-src/src/app/prevent-chronic-homelessness/prevent-chronic-homelessness.component.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io\">Learn more</a>-->\r\n<!--      </div>    -->\r\n<!--   </div>-->\r\n<!--    </div>-->\r\n<!--</section>-->\r\n\r\n\r\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"mission-content\">\r\n    \r\n    <div class=\"container\">\r\n      <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Our Programs</h1>\r\n      <p class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">There is now growing interest in investment in housing, promoting community college students with technology company internship and global health for impoverished countries can lead to cost savings in other service areas.</p>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <title>Programs - Pontes Network</title>\r\n    <app-programTop> </app-programTop>\r\n    <app-FirstProgram></app-FirstProgram>\r\n  \r\n</div>"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<section #sologanSection (window:scroll)=\"onWindowScroll($event, sologanSection, downArrow)\">\r\n    <div class=\"bg-wrap\">\r\n        <div class=\"bg slogan\" style=\"background-image: url('./assets/images/slogan3.jpg');\"> \r\n        <!--http://weebly.com/uploads/8/9/3/1/89318564/background-images/239996890.jpg'-->\r\n          <div>\r\n            <h1 class=\" wow fadeInUp\">Pontes Network</h1>\r\n            <p  class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">Make the World a Better Place</p>             \r\n          </div>\r\n          <particles [style]=\"myStyle\" [width]=\"width\" [height]=\"height\" [params]=\"myParams\"></particles>\r\n\r\n        </div>\r\n    </div>\r\n    \r\n    <!------------------------------------------------------------>\r\n    \r\n    <div #downArrow class=\"downArrow bounce\">\r\n      <img width=\"40\" height=\"40\"  src=\"./assets/images/down-arrow.svg\">\r\n      </div>\r\n    <!------------------------------------------------------------>\r\n\r\n</section>\r\n\r\n"

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = {
            status: (localStorage.getItem('token') !== null)
        };
    }
    AuthService.prototype.login = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.isLoggedIn.status = false;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Phan/Desktop/Pontes-master/angular-src/src/auth.service.js.map

/***/ })

},[1064]);
//# sourceMappingURL=main.bundle.map