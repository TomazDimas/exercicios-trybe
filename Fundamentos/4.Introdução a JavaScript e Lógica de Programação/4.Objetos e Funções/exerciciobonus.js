// EX 1

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

// EX 2

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vetor) {
	let pares = [];
	for (i1 in vetor) {
		for (i2 in vetor[i1]) {
			if (vetor[i1][i2] % 2 == 0) {
				pares.push(vetor[i1][i2]);
			}
		}
	}
	return pares
}
// console.log(arrayOfNumbers(vector));

// EX 3

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

// ??????????
 
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

// EX 5

// console.log('O morador do bloco 2 de nome ' + moradores.blocoDois[1].nome + " " + moradores.blocoDois[1].sobrenome + " mora no " + moradores.blocoDois[1].andar + "° andar, apartamento " + moradores.blocoDois[1].apartamento);

// for (i = 0; i < 2; i += 1) {
// 	console.log(moradores.blocoUm[i].nome + " " + moradores.blocoUm[i].sobrenome);
// }
// for (i = 0; i < 2; i += 1) {
// 	console.log(moradores.blocoDois[i].nome + " " + moradores.blocoDois[i].sobrenome);
// }