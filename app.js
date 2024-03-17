hamburger.addEventListener('click', function () {
  console.log("Botão de menu hamburguer clicado");
  menu.classList.toggle('show');
});

  document.getElementById("whatsappBtn").addEventListener("click", function() {
    var phoneNumber = "+5511992823569";
    var message = "Olá, eu vim do site para tirar dúvidas sobre seus serviços.";

    window.open("https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message));
});
