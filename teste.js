// Função para obter um elemento pelo ID
function getElement(id) {
    return document.getElementById(id);
  }
  // Nomes dos times
  const times = [];
  for (let i = 1; i <= 4; i++) {
    times.push(getElement(`time${i}`));
  }
  
  // Cores dos times
  const cores = [];
  for (let i = 1; i <= 4; i++) {
    cores.push(getElement(`colorTime${i}`));
  }


  
  const messageCadastro = getElement("messageCadastro");
  const messageSemi = getElement("messageSemi");
  const messageFinal = getElement("messageFinal");
  const buttonCadastro = getElement("botaoCadastro");
  const buttonSemi = getElement("botaoSemifinais");
  const buttonFinal = getElement("buttonFinal");
  
  buttonCadastro.addEventListener("click", function () {
    const nomes = times.map((time) => time.value);
  
    if (new Set(nomes).size !== 4) {
      messageCadastro.innerHTML = "Não pode haver times iguais";
    } else {
      const [t1, t2, t3, t4] = nomes;
  
      Semifinais(
        t1,
        t2,
        t3,
        t4,
        cores[0].value,
        cores[1].value,
        cores[2].value,
        cores[3].value
      );
  
      disableElements(...times, ...cores);
      disableButtons(buttonCadastro);
    }
  });
  
  // Função para definir estilo de borda com base na pontuação
  function setBorderStyle(element, value1, value2, color1, color2) {
    element.style.background = `${value1 > value2 ? color1 : color2}99`;
  }
  
  // Semifinais
  function Semifinais(
    t1,
    t2,
    t3,
    t4,
    colorTime1,
    colorTime2,
    colorTime3,
    colorTime4
  ) {
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
      ResultadoSemi(colorTime1, colorTime2, colorTime3, colorTime4, buttonSemi);
    });
  }
  
  // Resultados das semifinais
  function ResultadoSemi(colorTime1, colorTime2, colorTime3, colorTime4) {
    let golsTimes = [
      getElement("golsTime1"),
      getElement("golsTime2"),
      getElement("golsTime3"),
      getElement("golsTime4"),
    ];
  
    let jogo1 = getElement("jogo1");
    let jogo2 = getElement("jogo2");
  
    let [golsT1, golsT2, golsT3, golsT4] = golsTimes;
  
    if (golsT1.value === golsT2.value || golsT3.value === golsT4.value) {
      messageSemi.innerHTML = "Não pode haver empate (adicione os pênaltis)";
      return;
    }
  
    setBorderStyle(jogo1, golsT1.value, golsT2.value, colorTime1, colorTime2);
    setBorderStyle(jogo2, golsT3.value, golsT4.value, colorTime3, colorTime4);
  
    final.style.display = "flex";
  
    Finais(
      golsT1.value > golsT2.value ? times[0].value : times[1].value,
      golsT3.value > golsT4.value ? times[2].value : times[3].value,
      golsT1.value > golsT2.value ? colorTime1 : colorTime2,
      golsT3.value > golsT4.value ? colorTime3 : colorTime4
    );
  
    disableElements(golsT1, golsT2, golsT3, golsT4);
    disableButtons(buttonSemi);
  }
  
  function Finais(timeChave1, timeChave2, colorTime1, colorTime2) {
    const golsT1 = getElement("golsTime1Final");
    const golsT2 = getElement("golsTime2Final");
  
    const time1Final = getElement("time1Final");
    const time2Final = getElement("time2Final");
  
    time1Final.innerHTML = timeChave1;
    time2Final.innerHTML = timeChave2;
  
    const final = getElement("final");
    final.style.display = "flex";
  
    const buttonFinal = getElement("buttonFinal");
    buttonFinal.addEventListener("click", function () {
      ResultadoFinal(golsT1, golsT2, colorTime1, colorTime2);
    });
  }
  
  function ResultadoFinal(golsT1, golsT2, colorTime1, colorTime2) {
    const jogoFinal = getElement("jogoFinal");
  
    if (golsT1.value === golsT2.value) {
      messageFinal.innerHTML = "Não pode haver empate (adicione os pênaltis)";
      return;
    } else {
      setBorderStyle(
        jogoFinal,
        golsT1.value,
        golsT2.value,
        colorTime1,
        colorTime2
      );
  
      getElement("campeao").innerHTML = `Vencedor ${
        golsT1.value > golsT2.value ? time1Final.innerHTML : time2Final.innerHTML
      }`;
      getElement("campeao").style.color = `${
        golsT1.value > golsT2.value ? colorTime1 : colorTime2
      }`;
  
      disableElements(golsT1, golsT2);
      disableButtons(buttonFinal);
    }
  }