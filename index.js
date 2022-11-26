


function validateSubscription() {

    const emailHomeValue = document.querySelector(".email-envelope").value
    
    if (!emailHomeValue.includes("@")) {
        return alert("Chequear la información escrita")
    }
    else {
    return alert("Su email ha sido enviado")
    }
}