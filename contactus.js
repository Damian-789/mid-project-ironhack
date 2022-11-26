
function validateNumber(phone){

    var valoresAceptados = /^[0-9]+$/;
    if (phone.match(valoresAceptados)){
       return true
    } else {
      return false
   }
   
}

    /*
    phone.forEach((el) => {
        if (typeof(el) !==='number')
        return false
    });*/

// probando

function validateForm() {


const emailValue = document.querySelector("#email").value

const phoneValue = document.querySelector(".phone-sector").value

const messageValue = document.querySelector(".message-sector").value

console.log (emailValue, phoneValue, messageValue)
    if (!emailValue.includes("@") || validateNumber(phoneValue) === false ||  messageValue.length > 240) {
        return alert("Chequear la información escrita o el largo del mensaje (no debe ser mayor a los 240 caracteres"); 
    }
    else {
            return alert("su mensaje ha sido enviado") 
    }
    

}  console.log("funciona");

  




