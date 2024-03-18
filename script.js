function atualizarCartao() {

  let borda = document.getElementById("borda").value;
  let corTexto = document.getElementById("corTexto").value;
  let texto = document.getElementById("texto").value;
  let titulo = document.getElementById("titulo").value;
  let endereco = document.getElementById("endereco").value;


  const input = document.getElementById('image-input');

  const preview = document.getElementById('image-preview');


  let cartao = document.getElementById("cartao");
  //cartao.style.backgroundColor = corFundo;
  cartao.style.color = corTexto;
  cartao.style.borderStyle = borda;
  //cartao.style.backgroundImage = "url('" + imagem + "')";

  let tituloCartao = document.getElementById("tituloCartao");
  tituloCartao.textContent = titulo;

  let enderecoCartao = document.getElementById("enderecoCartao");
  enderecoCartao.textContent = endereco;

  let textoCartao = document.getElementById("textoCartao");
  textoCartao.textContent = texto;

  // Adiciona um ouvinte de evento de alteração ao input
  input.addEventListener('change', function () {
    // Verifica se algum arquivo foi selecionado
    if (input.files && input.files[0]) {
      // Instancia um novo objeto FileReader
      const reader = new FileReader();
      // Define uma função de retorno de chamada para quando a leitura do arquivo for concluída
      reader.onload = function (e) {
        // Cria um novo elemento de imagem
        const img = document.createElement('img');
        // Define o atributo 'src' da imagem como a URL da imagem carregada
        img.src = e.target.result;
        // Define a classe e o estilo para a imagem
        img.classList.add('preview-image');
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        // Remove qualquer imagem anterior do elemento de pré-visualização
        preview.innerHTML = '';
        // Adiciona a imagem ao elemento de pré-visualização
        preview.appendChild(img);
      };
      // Lê o arquivo como uma URL de dados
      reader.readAsDataURL(input.files[0]);
    }
  });

}








