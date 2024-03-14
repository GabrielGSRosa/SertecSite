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




document.addEventListener('DOMContentLoaded', function () {
    // Obtém as referências dos botões e das seções
    var contatoButton = document.getElementById('contato'); // ajuste o ID conforme necessário
    var redesSociaisButton = document.getElementById(''); // ajuste o ID conforme necessário
    var sobreButton = document.getElementById('sobreButton'); // ajuste o ID conforme necessário
  
    // Adiciona ouvintes de eventos aos botões
    contatoButton.addEventListener('click', function () {
        // Rola a página até a posição da seção de Contato
        document.getElementById('redesSociais').scrollIntoView({ behavior: 'smooth' });
    });

    redesSociaisButton.addEventListener('click', function () {
        // Rola a página até a posição da seção de Redes Sociais
        document.getElementById('redesSociais').scrollIntoView({ behavior: 'smooth' });
    });

    sobreButton.addEventListener('click', function () {
        // Rola a página até a posição da seção Sobre
        document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const aquecendoVidasSection = document.getElementById('aquecendoVidas');
    const esquerdaElement = document.querySelector('.aquecendoVidas-esquerda');
    const direitaElement = document.querySelector('.aquecendoVidas-direita');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      if (isElementInViewport(aquecendoVidasSection) && !aquecendoVidasSection.classList.contains('animated')) {
        esquerdaElement.classList.add('animate');
        direitaElement.classList.add('animate');
        aquecendoVidasSection.classList.add('animated');
      }
    }
  
    // Adiciona um ouvinte de rolagem para verificar quando a seção está no viewport
    window.addEventListener('scroll', handleScroll);
    
    // Chama a função uma vez para verificar no carregamento inicial
    handleScroll();
  });
  
