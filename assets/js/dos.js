const verificar =()=>{
    const cant01 = document.querySelector('#cantidad-1').value; 
    const cant02 = document.querySelector('#cantidad-2').value; 
    const cant03 = document.querySelector('#cantidad-3').value; 

    const total = parseInt(cant01) + parseInt(cant02) + parseInt(cant03)
    const respuesta = document.querySelector('#respuesta');

    if(total<=10){
        respuesta.innerHTML = 'Llevas'+ total +'stickers';
    }else{
        respuesta.innerHTML = 'Llevas demasiados stickers';
    }
      

    
    
}