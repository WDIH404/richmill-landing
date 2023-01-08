$(function () {
  $('.counter').countimator();
});

function sendMail() {
  var params = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
  };
  const serviceID = '';
  const templateID = '';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
      console.log(res);
      alert('Готово!');
    })
    .catch((err) => console.log(err));
}
