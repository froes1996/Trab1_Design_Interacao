function atualizarCartao() {
    // Obtém os valores dos campos do formulário
    var corFundo = document.getElementById("corFundo").value;
    var borda = document.getElementById("borda").value;
    var corTexto = document.getElementById("corTexto").value;
    var texto = document.getElementById("texto").value;
    var imagem = document.getElementById("imagem").value;
    

    // Atualiza o cartão com os valores obtidos
    var cartao = document.getElementById("cartao");
    //cartao.style.backgroundColor = corFundo;
    cartao.style.color = corTexto;
    cartao.style.borderStyle = borda;
    cartao.style.backgroundImage = "url('" + imagem + "')";

    // Atualiza o texto do cartão
    var textoCartao = document.getElementById("textoCartao");
    textoCartao.textContent = texto;
  }






