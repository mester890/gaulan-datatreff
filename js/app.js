const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);


function register() {
  firstname = $('input[name=firstname]').val();
  lastname = $('input[name=lastname]').val();
  email = $('input[name=email]').val();
  phone = $('input[name=phone]').val();
  address = $('input[name=address]').val();
  zipcode = $('input[name=zipcode]').val();
  city = $('input[name=city]').val();
  console.log(firstname, lastname, email, phone, address, zipcode, city);
  if (firstname && lastname && email && phone && address && zipcode && city) {
    db.collection('volunteers').doc().set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    address: address,
    zipcode: zipcode,
    city: city
  }).then(
    alert('Registrering fullført')).then(
    setTimeout("window.location.assign('takk.html')", 2000)
  );
} else {
  alert('Du må fylle ut alle feltene før du kan registrere deg som frivillig.');
}
}














// INCLUDED FUNCTIONS
