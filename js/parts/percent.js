function percent(){
    let percentItem = document.querySelectorAll('.about__progress_item'),
        percentWrapp = document.querySelector('.about__skills');
        
        window.addEventListener('scroll', function(){
           let perTop = percentWrapp.getBoundingClientRect().top + 30,
            realTop = window.pageYOffset; 
            if(perTop < realTop){
                percentItem.forEach((item)=> item.classList.remove('percent'));
                done();
            }
            
            
        });
        function done(){
            start = setInterval(strikePlus,  98);
        }
        let html = document.querySelector('.html'),
            js = document.querySelector('.js'),
            vue = document.querySelector('.vue');
        
            let strike = 0;
                
            
            function strikePlus(){
                if(strike < 95){
                    
                    html.innerHTML = Math.round(strike) + '%' ;
                   
                }if(strike < 70){
                    
                   
                    js.innerHTML = Math.round(strike) + '%'  ;
                    
                }if(strike < 85){
                   
                    
                    vue.innerHTML = Math.round(strike) + '%'  ;
                    
                    
                }if(strike == 98){
                    clearInterval(start);
                }else{
                    
                    console.log(strike);
                }
                console.log(percentItem[0].clientWidth);
               strike += 0.1;
            
        }
    

}
module.exports = percent;