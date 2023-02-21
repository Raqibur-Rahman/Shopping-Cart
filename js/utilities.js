function getTextElementValueById(elementId){

    const totalElement = document.getElementById(elementId);
    const currentTotalString = totalElement.innerText;
    const currentTotal=parseInt(currentTotalString);

    return currentTotal;


}

function setTextElementValueById(elementId, value){

    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText=value;

}

function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber=parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber=previousPhoneNumber+1;
    }else{
        newPhoneNumber=previousPhoneNumber-1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber*1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText= phoneTotalPrice;
}

function getTextElementValueById(elementId){

    const totalElement = document.getElementById(elementId);
    const currentTotalString = totalElement.innerText;
    const currentTotal=parseInt(currentTotalString);

    return currentTotal;


}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentCaseTotal+currentPhoneTotal;

    setTextElementValueById('sub-total',currentSubTotal);

    const taxAmount =parseFloat( (currentSubTotal*0.1).toFixed(2));
    setTextElementValueById('tax-amount',taxAmount);

    const finalTotal = currentSubTotal+taxAmount;
    setTextElementValueById('final-total',finalTotal);
    
}

