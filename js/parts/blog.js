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