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