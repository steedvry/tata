function submit() {
        let firstname = document.getElementById("firstname");
        let surname = document.getElementById("surname")
        let email = document.getElementById("email")
        let phonenumber = document.getElementById("phonenumber")
        let age = document.getElementById("age")
        let country = document.getElementById("country")
        let gender = document.getElementById("gender")

        if (firstname.value != "" && surname.value != "" && email.value != "" && phonenumber.value != "" && age.value != "" ){
            console.log(firstname.value);
            console.log(surname.value);
            console.log(email.value);
            console.log(phonenumber.value);
            console.log(age.value);
            let Cvalue = country.options[country.selectedIndex].text;
            console.log(Cvalue);
            let Gvalue = gender.options[gender.selectedIndex].text;
            console.log(Gvalue);
            alert("You've completed the form correctly!")
            firstname.value = ""
            surname.value = ""
            email.value = ""
            phonenumber.value = ""
            age.value = ""
        }else{
            alert("You need to write at least one thing in each of the boxes to complete the form!")
        }
    }
