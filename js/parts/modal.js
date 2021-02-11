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