function verificaPalindrome(nome) {
  let subs = nome.split("");
  subs.reverse();
  let invertido = subs.join("");
  if (invertido == nome) {
    return true;
  } else {
    return false;
  }
}

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));

function maiorValor(numeros) {
  let maior = numeros[0];
  for (let index in numeros) {
    if (numeros[index] > maior) {
      maior = numeros[index];
    }
  }
  return maior;
}

// console.log(maiorValor([2, 3, 6, 7, 10, 1]));

function menorValor(numeros2) {
  let menor = numeros2[0];
  for (let index in numeros2) {
    if (numeros2[index] < menor) {
      menor = numeros2[index];
    }
  }
  return menor;
}

// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

function maisCaracteres(nomes) {
  let maisCar = nomes[0];
	for (let index in nomes) {
		if (nomes[index].length > maisCar.length) {
			maisCar = nomes[index];
		}
	}
	return maisCar;
}

// console.log(maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function maisRepetido(numeros3) {
	let tabela = {};

	for (let i1 in numeros3) {
		let valor = numeros3[i1];
		if (tabela[valor] === undefined) {
			tabela[valor] = 1;
		} else {
			tabela[valor] = tabela[valor] + 1 
		}
	}

	let maisRepeticoes = 0;
	let maisRepetido = tabela[0];

	for (let i2 in tabela) {
		if (tabela[i2] > maisRepeticoes) {
			maisRepeticoes = tabela[i2]
			maisRepetido = i2;
		}
	}
	
	return maisRepetido;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));