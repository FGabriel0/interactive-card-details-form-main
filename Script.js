const frm = document.querySelector("form");
const respNumero = document.querySelector("#Num");
const respName = document.querySelector("#Name");
const respData = document.querySelector("#Data");
const respCvc = document.querySelector("#CVC");

// Erros
const nameErro = document.querySelector("#nameErro");
const numErro = document.querySelector("#numErro");
const dataErro = document.querySelector("#dataErro");
const cvcErro = document.querySelector("#cvcErro");

function addNumero() {
  const Num = Number(frm.inNumber.value);

    if (!Num.length == 16 ) {
      numErro.innerText = `Número invalido`;
      return;
    }

  let partes = [];
  let contador = 0;
  for (let caractere of Num.toString()) {
    if (contador === 4) {
      contador = 0;
    }
    if (contador === 0) {
      partes.push(caractere);
    } else {
      partes[partes.length - 1] += caractere;
    }
    contador++;
  }

  document.getElementById("parte1").value = partes[0];
  document.getElementById("parte2").value = partes[1];
  document.getElementById("parte3").value = partes[2];
  document.getElementById("parte4").value = partes[3];

  respNumero.innerText = `${partes[0]} ${partes[1]} ${partes[2]} ${partes[3]}`;
}

function addPalavra() {
  const Name = frm.inName.value.toUpperCase();

  let Palavra = 0;
  for (const letra of Name) {
    if (letra == " ") {
      Palavra++;
    }
    if (Palavra > 1) {
      nameErro.innerText = `Deve Possuir apenas 2 palavras`;
      return true;
    }
  }

  nameErro.innerText = "";
  respName.innerText = `${Name}`;
}

function addData() {
  const DataMes = Number(frm.inMes.value);
  const DataAno = Number(frm.inAno.value);

  let hoje = new Date();
  let anoAtual = hoje.getFullYear();

  if (DataAno < anoAtual) {
    dataErro.innerText = `Data invalida`;
    return true;
  }
  dataErro.innerText = " ";
  respData.innerText = `${DataMes} / ${DataAno}`;
}

function addCvc() {
  const Cvc = Number(frm.inCvc.value);

  let cvcDigitos = inCvc.value.length;
  if (cvcDigitos > 3 || cvcDigitos < 3) {
    cvcErro.innerText = `Apenas 3 digitos`;
    return true;
  }
  cvcErro.innerText = " ";
  respCvc.innerText = `${Cvc}`;
}

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  addPalavra();

  addNumero();

  addData();

  addCvc();

  if (!addPalavra() && !addData() && !addCvc()) {
    let sidebar = document
      .querySelector(".container")
      .classList.toggle("show-menu");
    return;
  }
});
