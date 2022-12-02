const modificarBorde =()=>{
  const foto =  document.querySelector('#img-cod')
  
  if (foto.style.border == '2px solid red') {
    foto.style.border = '0px';
  } else {
    foto.style.border ='2px solid red';
  }

 
}