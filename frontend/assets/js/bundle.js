/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0036-exercicio-video/A0036-exercicio-video.ts":
/*!************************************************************!*\
  !*** ./src/A0036-exercicio-video/A0036-exercicio-video.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/*eslint-disable*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    //to mandando um grupo de atributos num construtor que formam um elemento chamado videoPlayerElements
    //ele é de tipo VideoPlayerElements, então possui os 3 atributos private acima
    //Informados os atributos, eles serão setados no this (que é a classe VideoPlayer) e formará uma nova instância
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    playToggle() {
    }
    stop() {
    }
    iniciarEventos() {
        console.log('risos risos');
    }
}
exports["default"] = VideoPlayer;
const novoVideoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
novoVideoPlayer.iniciarEventos();


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************************!*\
  !*** ./src/A0019-exercicio/exercicio.ts ***!
  \******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
/*eslint-disable*/
//import './form-control';
__webpack_require__(/*! ../A0036-exercicio-video/A0036-exercicio-video */ "./src/A0036-exercicio-video/A0036-exercicio-video.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map