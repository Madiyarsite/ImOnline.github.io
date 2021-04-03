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

