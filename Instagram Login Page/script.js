const passwordField = document.getElementById('password');

passwordField.addEventListener('input',function(){
    const value = passwordField.value;
    const maskedValue = '*'.repeat(value.length);
    passwordField.value =maskedValue;
});