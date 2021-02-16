function modal(){
    let menu = document.querySelector('.menu'),
        hbtn = document.querySelector('.header__btn'),
        breaker = document.querySelector('.modal__item'),
        main = document.getElementById('main'),
        about = document.getElementById('about'),
        section = document.querySelectorAll('.section'),
        btnmenu = document.querySelectorAll('.menu__item'),
        close = document.querySelector('.btn__close');
    hbtn.addEventListener('click', function(){
        menu.classList.add('active');
    });
    close.addEventListener('click', function(){
        menu.classList.remove('active');
        
    });
    
    function back(){
        breaker.style.display = 'none';
    }
    
    btnmenu.forEach((item, i)=> item.addEventListener('click', function(){
        
            about.style.display = 'none';
            main.style.display = 'flex';
        
        alert(i);
    }));
}
module.exports = modal;