/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/blog.js":
/*!******************************!*\
  !*** ./src/js/parts/blog.js ***!
  \******************************/
/***/ ((module) => {

function blog(){
    let media = document.body.clientWidth;
    if(media > 935){

   
   

    
    let blog = document.querySelectorAll('.blog__item'),
        blogBg = document.querySelectorAll('.blog__item_bg'),
        blogDesqr = document.querySelectorAll('.blog__desqr');
    blog.forEach((item, i)=> item.addEventListener('mouseenter', function(){
        blogBg[i].style.transform = 'translatey(-75%)';
        blogDesqr[i].style.transform = 'translatey(-75%)';
    }));
    blog.forEach((item, i)=> item.addEventListener('mouseout', function(){
        blogBg[i].style.transform = 'translatey(0%)';
        blogDesqr[i].style.transform = 'translatey(0%)';
    }));
} }
module.exports = blog;

/***/ }),

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
        section = document.querySelectorAll('.section'),
        btnmenu = document.querySelectorAll('.menu__item'),
        footer = document.querySelector('.footer'),
        close = document.querySelector('.btn__close');
    hbtn.addEventListener('click', function(){
        menu.classList.add('slow');
        menu.style.transform = 'translateY(100%)';
    });
    close.addEventListener('click', function(){
        
        menu.style.transform = 'translateY(-100%)';
    });
    function back(){
        breaker.style.display = 'none';
        menu.classList.add('slow');
    }
    function foot(i){
        if(i > 0){
            footer.style.display = 'flex';
        }else{
            footer.style.display = 'none';
        }
    }
    btnmenu.forEach((item, i)=> item.addEventListener('click', function(){
            breaker.style.display = "block";
            menu.classList.remove('slow');
            section.forEach((item)=> item.style.display = 'none');
            setTimeout(block, 900);
            setTimeout(next, 750);
            setTimeout(back, 3000);
            function block(){
                section[i].style.display = 'block';
                
            }
            function next(){
                menu.style.transform = 'translateY(-100%)'; 
                
            }  
            foot(i);
    })); 
}
module.exports = modal;



/***/ }),

/***/ "./src/js/parts/percent.js":
/*!*********************************!*\
  !*** ./src/js/parts/percent.js ***!
  \*********************************/
/***/ ((module) => {

function percent(){
    let lod = document.querySelector('.loaded');
    function del(){
        lod.remove();
    }
    del();
    let percentItem = document.querySelectorAll('.about__progress_item'),
        percentWrapp = document.querySelector('.about__skills');
        
        window.addEventListener('scroll', function(){
           let perTop = percentWrapp.getBoundingClientRect().top ,
            realTop = window.pageYOffset; 
            if(perTop + 100 < realTop){
                percentItem.forEach((item)=> item.classList.remove('percent'));
                done();
            }
            
            
        });
        function done(){
            start = setInterval(strikePlus,  60);
        }
        
            
            let html = document.querySelector('.html'),
            js = document.querySelector('.js'),
            vue = document.querySelector('.vue');
           
            strike = 0;
                
            function strikePlus(){
               
               strike += 0.1;
                if(strike < 95){
                    console.log(strike);
                    html.innerHTML = Math.round(strike) + '%' ;
                   html.style.width = strike + "%";
                }if(strike < 70){
                    
                   
                    js.innerHTML = Math.round(strike) + '%'  ;
                    js.style.width = strike + "%";
                }if(strike < 85){
                   
                    
                    vue.innerHTML = Math.round(strike) + '%'  ;
                    vue.style.width = strike + "%";
                    
                }if(strike == 98){
                    clearInterval(start);
                }else{
                    
                    
                }
                
               
            
        }
    

}
module.exports = percent;

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
    const  load = document.querySelector('.loaded');
        setTimeout(loaded, 2000);
        function loaded(){
            load.style.display = 'none';
        }
        
let cursor = __webpack_require__(/*! ./parts/main */ "./src/js/parts/main.js"),
    modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js"),
    percent = __webpack_require__(/*! ./parts/percent */ "./src/js/parts/percent.js"),
    blog = __webpack_require__(/*! ./parts/blog */ "./src/js/parts/blog.js");


    cursor();
    modal();
    percent();
    blog();
});


    

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map