document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', function () {
      menu.classList.toggle('show');
  });

  // Adiciona evento de mouseover e mouseout para exibir ou ocultar o submenu
  const hasDropdownItems = document.querySelectorAll('.has-dropdown');

  hasDropdownItems.forEach(function (item) {
      item.addEventListener('mouseover', function () {
          item.querySelector('.dropdown').classList.add('show');
      });

      item.addEventListener('mouseout', function () {
          item.querySelector('.dropdown').classList.remove('show');
      });
  });
});

  document.getElementById("whatsappBtn").addEventListener("click", function() {
    var phoneNumber = "+5511992823569";
    var message = "Olá, eu vim do site para tirar dúvidas sobre seus serviços.";

    window.open("https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message));
});
