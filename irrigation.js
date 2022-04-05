let emailInput =document.getElementById('email');
let emailError = document.getElementById('error');
emailError.style.color='red';
emailError.style.fontSize='15px'
let errorBorder='1px solid red';
let correctBorder ='1px solid green'

function validateEmail(){
    
    emailError.textContent='';
    let emailValue=emailInput.value;
    let subStr=emailValue.substring(emailValue.indexOf('@')+1);
    if(emailValue==''){
        console.log('empty')
        emailError.textContent='*This field is required';
        emailInput.style.border=errorBorder;
        return false
    }

    else if(!emailValue.includes('@')||subStr==''){
        emailError.textContent='Please provide a valid email address';
        emailInput.style.border=errorBorder;
        return false
    }

    else{
        emailInput.style.border=correctBorder;
        return true
    }
}

function validateForm(){
    return validateEmail();
}

console.log("its working")