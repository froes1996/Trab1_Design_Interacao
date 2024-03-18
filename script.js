function atualizarCartao() {
    
    let corFundo = document.getElementById("corFundo").value;
    let borda = document.getElementById("borda").value;
    let corTexto = document.getElementById("corTexto").value;
    let texto = document.getElementById("texto").value;
    //let imagem = document.getElementById("imagem").value;
    let titulo = document.getElementById("titulo").value;
    let endereco = document.getElementById("endereco").value;

    let cartao = document.getElementById("cartao");
    cartao.style.backgroundColor = corFundo;
    cartao.style.color = corTexto;
    cartao.style.borderStyle = borda;
    //cartao.style.backgroundImage = "url('" + imagem + "')";
    
    let tituloCartao = document.getElementById("tituloCartao");
    tituloCartao.textContent = titulo;
   
    let enderecoCartao = document.getElementById("enderecoCartao");
    enderecoCartao.textContent = endereco;
   
    let textoCartao = document.getElementById("textoCartao");
    textoCartao.textContent = texto;


  }








