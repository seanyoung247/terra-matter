// jshint esversion: 8

let contactModal = document.getElementById("contact-modal")
let contactForm = document.getElementById("contact-form");
let overlay = document.getElementById("contact-overlay");
let loadingSpinner = document.getElementById("sending-spinner")

contactForm.addEventListener("submit", function (sendForm) {
    sendForm.preventDefault();
    overlay.classList.add("overlay-active");
    loadingSpinner.classList.add("spinner-active");


    let customerName = document.getElementById("customer-name").value;
    let customerEmail = document.getElementById("customer-email").value;
    let message = document.getElementById("message").value;
    let attr = contactModal.getAttributeNode("style");

    var templateParams = {
        customer_name: customerName,
        customer_email : customerEmail,
        message: message
    };

    emailjs.send('Gmail', 'terra-matter', templateParams)
        .then(function (response) {
            contactModal.classList.remove("show")
            contactModal.removeAttributeNode(attr);
            emailSuccess();
        }, function (error) {
            contactModal.classList.remove("show")
            contactModal.removeAttributeNode(attr);
            emailFail();
        });
})

let emailSendModal = document.getElementById("email-sent-modal");
let emailFailModal = document.getElementById("email-fail-modal");

function emailSuccess() {
    loadingSpinner.classList.remove("spinner-active");
    emailSendModal.classList.add("show", "d-block");
}

function emailFail() {
    loadingSpinner.classList.remove("spinner-active");
    emailFailModal.classList.add("show", "d-block");
}
