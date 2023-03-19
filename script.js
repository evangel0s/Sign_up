 document.addEventListener('DOMContentLoaded',function(){
    let password = document.querySelector('#password').value;
    let confirm = document.querySelector('#confirm').value; 
    let error = document.querySelector('#error');
  
  
    if (password =='' && confirm ==''){
      error.innerHTML = '*passwords do not match';
    }
    else if (password === confirm){
   error.innerHTML = '';
   }
    console.log('hi')
})
  
 