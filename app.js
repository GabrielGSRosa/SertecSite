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
