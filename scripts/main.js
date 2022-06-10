const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMsgEmail = document.querySelector('.error-message-email');
const errorIconEmail = document.querySelector('.error-icon-email');
const inputs = document.querySelectorAll('input');
const errorIcon = document.querySelectorAll('img');
const errorMessage = document.querySelectorAll('small');


function validateInputs(){
  for(let i=0; i<inputs.length; i++ ){
    if(inputs[i].value == ""){
      errorIcon[i].classList.remove('hide');
      errorMessage[i].classList.remove('hide');
      inputs[i].classList.add('error')
      inputs[i].classList.remove('success');
    }else{
      errorIcon[i].classList.add('hide');
      errorMessage[i].classList.add('hide');
      inputs[i].classList.remove('error');
      inputs[i].classList.add('success');

    }
  }
}


form.addEventListener('submit', e=>{
  e.preventDefault()//refresh the page

  validateInputs();

  const emailVal = email.value;
  if (!validateEmail(emailVal)){
    errorMsgEmail.classList.remove('hide');
    errorIconEmail.classList.remove('hide');
    email.classList.add('error')
    email.classList.remove('success')
  }else{
    email.classList.add('success')
    email.classList.remove('error')
    errorMsgEmail.classList.add('hide')
    errorIconEmail.classList.add('hide')
  }
  if(email.oninvalid){
    console.log('invalido')
  }

})

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

