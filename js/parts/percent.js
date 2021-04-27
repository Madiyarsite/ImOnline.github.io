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