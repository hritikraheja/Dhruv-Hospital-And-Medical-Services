const form = document.getElementById('form');
const userID = document.getElementById('user-id');
const password = document.getElementById('password');

form.addEventListener('submit',function(e){
    e.preventDefault(); // data will not submit to server
    checkInputs();
});

function checkInputs(){
    const userIDValue =  userID.value.trim();
    const passwordValue =  password.value.trim();

    if( userIDValue ==='')
    {
        showError(userID,"User-ID can not be blank");
    }
    else
    {
        showSuccess(userID);
    } 
    
    if( passwordValue ==='')
    {
        showError(password,"Password can not be blank");
    }
    else
    {
        showSuccess(password);
    }
}

function showError(input,msg)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}
