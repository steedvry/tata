
function checkifallsubmitted() {
  var nom = document.getElementById("nom");
  var surname = document.getElementById("surname");
  var email = document.getElementById("email");
  var phonenumber = document.getElementById("phonenumber");
  var age = document.getElementById("age");
  var country = document.getElementById("country");
  var gender = document.getElementById("gender");

  if (nom != null && surname != null && email != null && phonenumber != null && age != null) {
    console.log(nom.value);
    console.log(surname.value);
    console.log(email.value);
    console.log(phonenumber.value);
    console.log(age.value);
    var e = document.getElementById("country");
    var selectedcountry = e.options[e.selectedIndex].text;
    console.log(selectedcountry);
    var e = document.getElementById("gender");
    var selectedgender = e.options[e.selectedIndex].text;
    console.log(selectedgender);
  }


}
