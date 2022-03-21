window.onload = function () {
  let objetivo = document.getElementsByTagName("article")[0];

  function setBakgroundColor() {
    let corAtual =
      document.getElementsByTagName("article")[0].style.backgroundColor;
    localStorage.setItem("backgroundColor", corAtual);
  }

  function setTextColor() {
    let corTextoAtual = objetivo.style.color;
    localStorage.setItem("textColor", corTextoAtual);
  }

  function setTextSize() {
    let tamanhoTextoAtual = objetivo.style.fontSize;
    localStorage.setItem("textSize", tamanhoTextoAtual);
  }

  function setLineHeight() {
    let espacamentoAtual = objetivo.style.lineHeight;
    localStorage.setItem("lineHeight", espacamentoAtual);
  }

  function setFontFamily() {
      let fonteAtual = objetivo.style.fontFamily;
      localStorage.setItem('fontFamily', fonteAtual);
  }
  // Background Change
  let botosBackground = document.querySelectorAll(".background>button");
  for (let i = 0; i < botosBackground.length; i += 1) {
    botosBackground[i].addEventListener("click", function (event) {
      document.getElementsByTagName("article")[0].style.backgroundColor =
        event.target.innerHTML;
      setBakgroundColor();
    });
  }
  // Cor do Texto
  let botoesCorTexto = document.querySelectorAll(".textColor>button");
  for (let i = 0; i < botoesCorTexto.length; i += 1) {
    botoesCorTexto[i].addEventListener("click", function (event) {
      objetivo.style.color = event.target.innerHTML;
      setTextColor();
    });
  }
  // Tipo de Fonte
  let botosTamanhoFonte = document.querySelectorAll(".textSize>button");
  for (let i = 0; i < botosTamanhoFonte.length; i += 1) {
    botosTamanhoFonte[i].addEventListener("click", function (event) {
      objetivo.style.fontSize = event.target.innerHTML;
      setTextSize();
    });
  }
  // Espaçamento de Linha
  let botoesEspacamento = document.querySelectorAll(".textSpace>button");
  for (let i = 0; i < botoesEspacamento.length; i += 1) {
    botoesEspacamento[i].addEventListener("click", function (event) {
      objetivo.style.lineHeight = event.target.innerHTML;
      setLineHeight();
    });
  }
  // Tipo de Fonte
  let botoesTipoFonte = document.querySelectorAll(".fontFamily>button");
  for (let i = 0; i < botoesTipoFonte.length; i += 1) {
    botoesTipoFonte[i].addEventListener("click", function (event) {
        objetivo.style.fontFamily = event.target.innerHTML;
        setFontFamily();
    });
  }
  // Função Iniciar
  function iniciar() {
    let backgroundLocal = localStorage.getItem("backgroundColor");
    objetivo.style.backgroundColor = backgroundLocal;

    let corTextoLocal = localStorage.getItem("textColor");
    objetivo.style.color = corTextoLocal;

    let textSizeLocal = localStorage.getItem("textSize");
    objetivo.style.fontSize = textSizeLocal;

    let lineHeightLocal = localStorage.getItem("lineHeight");
    objetivo.style.lineHeight = lineHeightLocal;

    let fontFamilyLocal = localStorage.getItem('fontFamily');
    objetivo.style.fontFamily = fontFamilyLocal;
  }

  iniciar();
};
