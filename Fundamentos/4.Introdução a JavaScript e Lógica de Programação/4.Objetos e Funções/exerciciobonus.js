let valores = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function paraNumero(romano) {
  romano = romano.toLowerCase();
  let numerico = romano.split("");
  let resultado = 0;
  for (key in romano) {
    numerico[key] = valores[romano[key]];
  }
  resultado = numerico[0];
  for (i = 0; i < romano.length - 1; i += 1) {
    if (numerico[i] < numerico[i + 1]) {
      resultado = numerico[i + 1] - resultado;
    } else {
      resultado = numerico[i + 1] + resultado;
    }
  }
  return resultado;
}

// console.log(paraNumero("IV"));
// console.log(paraNumero("II"));
// console.log(paraNumero("MMXVIII"));
// console.log(paraNumero("VI"));
// console.log(paraNumero("CD"));





 
//  EX 4
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// console.log('O morador do bloco 2 de nome ' + moradores.blocoDois[1].nome + " " + moradores.blocoDois[1].sobrenome + " mora no " + moradores.blocoDois[1].andar + "° andar, apartamento " + moradores.blocoDois[1].apartamento);

