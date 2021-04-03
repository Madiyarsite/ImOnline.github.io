function percent(){
    let percentItem = document.querySelectorAll('.about__progress_item'),
        percentWrapp = document.querySelector('.about__skills');
        
        window.addEventListener('scroll', function(){
           let perTop = percentWrapp.getBoundingClientRect().top + 30,
            realTop = window.pageYOffset; 
            if(perTop < realTop){
                percentItem.forEach((item)=> item.classList.remove('percent'));
            }
        });
        let html = document.querySelector('.html'),
            js = document.querySelector('.js'),
            vue = document.querySelector('.vue');
        
            let strike = 0,
                start = setInterval(strikePlus, 100);
            
            function strikePlus(){
                if(strike > 50){
                   
                    html.innerHTML = strike ;
                   
                }if(strike > 70){
                    
                     strike++;
                    js.innerHTML = strike ;
                    
                }if(strike > 90){
                   
                    strike++;
                    vue.innerHTML = strike ;
                    console.log(strike);
                    
                }if(strike == 98){
                    clearInterval(start);
                }
               
            
        }
    

}
module.exports = percent;