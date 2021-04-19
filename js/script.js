document.addEventListener('DOMContentLoaded', function(){
    const  load = document.querySelector('.loaded');
        setTimeout(loaded, 2000);
        function loaded(){
            load.style.display = 'none';
        }
        
let cursor = require('./parts/main'),
    modal = require('./parts/modal'),
    percent = require('./parts/percent'),
    blog = require('./parts/blog');


    cursor();
    modal();
    percent();
    blog();
});


    
