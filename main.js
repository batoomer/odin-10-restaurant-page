/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sections/hero-section/hero.module.css":
/*!***************************************************!*\
  !*** ./src/sections/hero-section/hero.module.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"heroSection":"AkVaXwwmZWKcukaINDYb"});

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sections/hero-section/hero.js":
/*!*******************************************!*\
  !*** ./src/sections/hero-section/hero.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hero_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.module.css */ "./src/sections/hero-section/hero.module.css");


class HeroSection{

    constructor(title, content, actions){
        this.title = title;
        this.content = content;
        this.actions = actions;
    }

    #createHeroTitle(){
        const heroTitle = document.createElement('h1');
        heroTitle.textContent = this.title;
        return heroTitle;
    };

    #createHeroText(){
        const heroText = document.createElement('p');
        heroText.textContent = this.content;
        return heroText;
    }


    #createHeroAction(){
        const heroAction = document.createElement('div');
        this.actions.forEach(action=>{
            const heroButton = document.createElement('button');
            heroButton.textContent = action.text;
            heroAction.append(heroButton);
        })

        return heroAction;
    }

    create(){
        const heroSection = document.createElement('section');
        heroSection.classList.add(_hero_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].heroSection);
        
        const heroTitle = this.#createHeroTitle();
        heroSection.appendChild(heroTitle)

        const heroText = this.#createHeroText();
        heroSection.appendChild(heroText);

        const heroAction = this.#createHeroAction();
        heroSection.appendChild(heroAction);
        
        
        return heroSection;
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _sections_hero_section_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/hero-section/hero */ "./src/sections/hero-section/hero.js");




const body = document.querySelector('body');






const heroContent = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, itaque dolorum reprehenderit error assumenda ex',
    [
        {text:'Reservation', action:'?'}, 
        {text:'Menu', action:'?'},
    ],
]
const heroSection = new _sections_hero_section_hero__WEBPACK_IMPORTED_MODULE_1__["default"](...heroContent).create();
console.log(heroSection); 
body.append(heroSection);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsaUVBQWUsQ0FBQyxxQ0FBcUM7Ozs7Ozs7Ozs7O0FDRHJEOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBDOztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0VBQXFCO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7OztVQ3JEM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkI7O0FBRTBCOztBQUV2RDs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBLHdCQUF3QixtRUFBVztBQUNuQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi0xMC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2VjdGlvbnMvaGVyby1zZWN0aW9uL2hlcm8ubW9kdWxlLmNzcz9mODEzIiwid2VicGFjazovL29kaW4tMTAtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzPzBlNzkiLCJ3ZWJwYWNrOi8vb2Rpbi0xMC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2VjdGlvbnMvaGVyby1zZWN0aW9uL2hlcm8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi0xMC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi0xMC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tMTAtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi0xMC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLTEwLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImhlcm9TZWN0aW9uXCI6XCJBa1ZhWHd3bVpXS2N1a2FJTkRZYlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgaGVyb1N0eWxlIGZyb20gJy4vaGVyby5tb2R1bGUuY3NzJztcblxuY2xhc3MgSGVyb1NlY3Rpb257XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29udGVudCwgYWN0aW9ucyl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG5cbiAgICAjY3JlYXRlSGVyb1RpdGxlKCl7XG4gICAgICAgIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgICAgIHJldHVybiBoZXJvVGl0bGU7XG4gICAgfTtcblxuICAgICNjcmVhdGVIZXJvVGV4dCgpe1xuICAgICAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVyb1RleHQudGV4dENvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgIHJldHVybiBoZXJvVGV4dDtcbiAgICB9XG5cblxuICAgICNjcmVhdGVIZXJvQWN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGhlcm9BY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goYWN0aW9uPT57XG4gICAgICAgICAgICBjb25zdCBoZXJvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBoZXJvQnV0dG9uLnRleHRDb250ZW50ID0gYWN0aW9uLnRleHQ7XG4gICAgICAgICAgICBoZXJvQWN0aW9uLmFwcGVuZChoZXJvQnV0dG9uKTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gaGVyb0FjdGlvbjtcbiAgICB9XG5cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoaGVyb1N0eWxlLmhlcm9TZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhlcm9UaXRsZSA9IHRoaXMuI2NyZWF0ZUhlcm9UaXRsZSgpO1xuICAgICAgICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChoZXJvVGl0bGUpXG5cbiAgICAgICAgY29uc3QgaGVyb1RleHQgPSB0aGlzLiNjcmVhdGVIZXJvVGV4dCgpO1xuICAgICAgICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG5cbiAgICAgICAgY29uc3QgaGVyb0FjdGlvbiA9IHRoaXMuI2NyZWF0ZUhlcm9BY3Rpb24oKTtcbiAgICAgICAgaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0FjdGlvbik7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGhlcm9TZWN0aW9uO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5cbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tICcuL3NlY3Rpb25zL2hlcm8tc2VjdGlvbi9oZXJvJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXG5cblxuXG5cbmNvbnN0IGhlcm9Db250ZW50ID0gW1xuICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0JyxcbiAgICAnTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1pbmltYSwgaXRhcXVlIGRvbG9ydW0gcmVwcmVoZW5kZXJpdCBlcnJvciBhc3N1bWVuZGEgZXgnLFxuICAgIFtcbiAgICAgICAge3RleHQ6J1Jlc2VydmF0aW9uJywgYWN0aW9uOic/J30sIFxuICAgICAgICB7dGV4dDonTWVudScsIGFjdGlvbjonPyd9LFxuICAgIF0sXG5dXG5jb25zdCBoZXJvU2VjdGlvbiA9IG5ldyBIZXJvU2VjdGlvbiguLi5oZXJvQ29udGVudCkuY3JlYXRlKCk7XG5jb25zb2xlLmxvZyhoZXJvU2VjdGlvbik7IFxuYm9keS5hcHBlbmQoaGVyb1NlY3Rpb24pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=