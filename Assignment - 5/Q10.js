function validate(e) {
    // console.log("Connected.")

    let name = document.querySelector("#name").value
    let dob = document.querySelector("#dob").value
    let address = document.querySelector("#address").value
    let mobile = document.querySelector("#mobile").value
    let email = document.querySelector("#email").value
    let country = document.querySelector("#country").value
    let password = document.querySelector("#password").value

    let gender = document.querySelectorAll("input[name='gender']")
    let genderSelect = false
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            console.log(gender[i].value);
            genderSelect = true
        }
    }
        
    // Initializing The Error Is False
    let error = false

    // Name Validate
    if (name === "") {
        document.querySelector("#nameError").innerHTML = "Name is required"
        error = true
    } else {
        document.querySelector("#nameError").innerHTML = ""
    }

    // Gender Validation
    if (!genderSelect) {
        document.querySelector("#genderError").innerHTML = "Please Select Your Gender.";
        error = true;
    } else {
        document.querySelector("#genderError").innerHTML = "";
    }

    // DOB Validate
    if (dob === "") {
        document.querySelector("#dobError").innerHTML = "Please Select Your Date Of Birth"
        error = true
    } else {
        document.querySelector("#dobError").innerHTML = ""
    }

    // Address Validate
    if (address === "") {
        document.querySelector("#addressError").innerHTML = "Address is required"
        error = true
    } else {
        document.querySelector("#addressError").innerHTML = ""
    }

    // Mobile Validate
    const mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
        document.querySelector("#mobileError").innerHTML = "Please Enter Valid Mobile Number."
        error = true
    }
    else {
        document.querySelector("#mobileError").innerHTML = ""
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9-.]{3,}@[a-zA-Z.]{3,12}.[a-zA-Z]{2,5}$/;
    if (!emailPattern.test(email)) {
        document.querySelector("#emailError").innerHTML = "Please Enter Your Valid Email Address"
        error = true
    }
    else {
        document.querySelector("#emailError").innerHTML = ""
    }

    // Country Validate
    if (country === "") {
        document.querySelector("#countryError").innerHTML = "Country is required"
        error = true
    } else {
        document.querySelector("#countryError").innerHTML = ""
    }

    //Password Validate
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.querySelector("#passwordError").innerHTML = "Password Must Be at least 8 characters, include a letter, a number, and a special character."
        error = true
    }
    else {
        document.querySelector("#passwordError").innerHTML = ""
    }

    // Apply Prevent Default
    if (error) {
        e.preventDefault();
    }

}
