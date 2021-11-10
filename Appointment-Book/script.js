const form = document.getElementById('form');
const patientname = document.getElementById('patientname');
const phone = document.getElementById('phone');
const description = document.getElementById('description');

form.addEventListener('submit', function(e){
    e.preventDefault(); // data will not submit to server
    checkInputs();
});

function checkInputs(){
    const patientnameValue =  patientname.value.trim();
    const phoneValue =  phone.value.trim();
    const descriptionValue =  description.value.trim();

    if( patientnameValue ==='')
    {
        showError(patientname, "Name can not be blank");
    }
    else
    {
        showSuccess(patientname);
    } 
    if( phoneValue ==='')
    {
        showError(phone, "Phone number can not be blank");
    }
    else if(!isPhoneValid(phoneValue))
    {
        showError(phone, "Phone number is not Valid");
    }
    else
    {
        showSuccess(phone);
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

function isPhoneValid(phoneNumber){
    return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(phoneNumber);
}