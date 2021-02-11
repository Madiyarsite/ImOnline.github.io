/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/main.js":
/*!******************************!*\
  !*** ./src/js/parts/main.js ***!
  \******************************/
/***/ ((module) => {

function cursor (){
    let cur = document.querySelector(".cursor");
    let item = document.querySelectorAll('.md');
    let servic = document.querySelectorAll('.about__wrapp'),
        servicBg = document.querySelectorAll('.servic__bg');
    
  document.addEventListener('mousemove', function(event){
    let curX = event.clientX ,
        curY = event.clientY ;
    cur.style.transform = `translate3d(${curX}px, ${curY}px, 0px) scale(${num})`;
   
  });
  let hbtn = document.querySelector('.header__btn'),
    line = document.querySelectorAll('.line');
  hbtn.addEventListener('mouseenter', function(){
    line.forEach((item)=> item.classList.remove('resize'));
    num = 1.4;
  });
  hbtn.addEventListener('mouseleave', function(){
    num = 1;
    for(let i = 0; i < 2; i++){
      line[i].classList.add('resize');
    }
  });
 
  let num = 1;
  item.forEach((item)=> item.addEventListener('mouseover', function(){
     num = 1.4;
  }));
  item.forEach((item)=> item.addEventListener('mouseout', function(){
    num = 1;
  }));
  servic.forEach((item, i)=> item.addEventListener('mouseenter', function(){
    servicBg[i].classList.add('servic__hover');
  }));
  servic.forEach((item, i)=> item.addEventListener('mouseout', function(){
    servicBg[i].classList.remove('servic__hover');
  }));
 
}

module.exports = cursor;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/***/ ((module) => {

function modal(){
    let menu = document.querySelector('.menu'),
        hbtn = document.querySelector('.header__btn'),
        breaker = document.querySelector('.modal__item'),
        main = document.getElementById('main'),
        btnmenu = document.querySelectorAll('.menu__item'),
        close = document.querySelector('.btn__close');
    hbtn.addEventListener('click', function(){
        menu.classList.add('active');
    });
    close.addEventListener('click', function(){
        menu.classList.remove('active');
        breaker.style.display = 'block';
        setTimeout(back, 1800);
    });
    function back(){
        breaker.style.display = 'none';
    }
    btnmenu.forEach((item, i)=> item.addEventListener('click', function(){
        main.style.display = 'none';
        main[i].style.display = 'block';
    }));
}
module.exports = modal;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
document.addEventListener('DOMContentLoaded', function(){
let cursor = __webpack_require__(/*! ./parts/main */ "./src/js/parts/main.js"),
    modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js");

    cursor();
    modal();
 
});


    

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map