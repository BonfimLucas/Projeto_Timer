function relogio(){
    function getTimeFromSeconds(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12:false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.tempo');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos); 
        }, 1000);
    }
    
    document.addEventListener('click', function(e){
        const el = e.target;
        
        if(el.classList.contains('inicia')){
            clearInterval(timer);
            iniciaRelogio();
        }
        
        if(el.classList.contains('pausa')){
            clearInterval(timer);
        }
    
        if(el.classList.contains('zera')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
    
}

relogio()