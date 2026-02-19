function sendWhatsApp() {
  var name = document.getElementById('name').value;
  var city = document.getElementById('city').value;
  var phone = document.getElementById('phone').value;

  var msg = `New Partner Request:%0AName: ${name}%0ACity: ${city}%0APhone: ${phone}`;
  var url = `https://wa.me/917357666696?text=${msg}`;

  document.getElementById('success').innerText = "Thank you for joining The Foodies!";
  window.open(url, '_blank');
}
