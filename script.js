// Função para obter um elemento pelo ID
function getElement(id) {
  return document.getElementById(id);
}

// Função para desabilitar Seções
function disableSections(element) {
  element.disabled = true;
  element.style.display = "none";
}


const times = [];
for (let i = 1; i <= 4; i++) {
  times.push(getElement(`time${i}`));
}


// Cores dos times
const cores = [];
for (let i = 1; i <= 4; i++) {
  cores.push(getElement(`cor${i}`));
}


const messageCadastro = getElement("msgcadastro");
const messageSemi = getElement("msgsemi");
const messageFinal = getElement("msgfinal");
const buttonCadastro = getElement("btcadastro");
const buttonSemi = getElement("btsemi");
const buttonFinal = getElement("btfinal");



buttonCadastro.addEventListener("click", function () {
  const nomes = times.map((time) => time.value);

  if (new Set(nomes).size !== 4) {
    messageCadastro.innerHTML = "Não pode haver times iguais";
  } else {
    const [t1, t2, t3, t4] = nomes;

    Semifinais(t1, t2, t3, t4);
    //Desabilita a seção de cadastro
    disableSections(cadastro);

  }
});

function Semifinais(t1, t2, t3, t4) {
  const semifinais = getElement("semifinais");


  const nomesTimes = [
    getElement("nomeTime1"),
    getElement("nomeTime2"),
    getElement("nomeTime3"),
    getElement("nomeTime4"),
  ];

  nomesTimes[0].innerHTML = t1;
  nomesTimes[1].innerHTML = t2;
  nomesTimes[2].innerHTML = t3;
  nomesTimes[3].innerHTML = t4;

  semifinais.style.display = "flex";

  buttonSemi.addEventListener("click", function () {
    ResultadoSemi(colorT1, colorT2, colorT3, colorT4, buttonSemi);
  });
}

function ResultadoSemi(colorT1, colorT2, colorT3, colorT4) {
  let golsTimes = [
    getElement("gols1"),
    getElement("gols2"),
    getElement("gols2"),
    getElement("gols4"),
  ];
  let semi1 = getElement("semi1");
  let semi2 = getElement("semi2");

  let [golsT1, golsT2, golsT3, golsT4] = golsTimes;
  
  if (golsT1.value === golsT2.value || golsT3.value === golsT4.value) {
    messageSemi.innerHTML = "Não pode haver empate (adicione os pênaltis)";
    return;
  }
  
}


