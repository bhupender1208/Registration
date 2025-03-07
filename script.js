document.addEventListener("DOMContentLoaded", function() {
    // First Name & Last Name validation (only alphabets and spaces)
    const nameInputs = document.querySelectorAll("#fname, #lname");
    nameInputs.forEach(input => {
        input.addEventListener("input", function() {
            this.value = this.value.replace(/[^a-zA-Z\s]/g, ''); // Remove non-alphabetic characters
        });
    });

    // Registration ID validation (only 14 numeric digits)
    const regIdInput = document.querySelector("#rid");
    regIdInput.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (this.value.length > 14) {
            this.value = this.value.slice(0, 14); // Limit input to 14 characters
        }
    });

    // Phone Number validation (only 10 digits)
    const phoneInput = document.querySelector("#phone");
    phoneInput.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10); // Limit input to 10 characters
        }
    });
});


