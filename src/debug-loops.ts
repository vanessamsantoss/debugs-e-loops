 export {};
// Cada trecho tem um comentário "// CORREÇÃO:" mostrando o que mudou.

// ---------- Trecho 1 ----------
function imprimirNumeros(): void {
  // CORREÇÃO: i <= 10 (antes era i < 10 e parava no 9)
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
imprimirNumeros();

// ---------- Trecho 2 ----------
function contarAte5(): void {
  let contador = 0;
  // CORREÇÃO: condição <= 5 e contador++ (antes somava 2 e pulava o 5)
  while (contador <= 5) {
    console.log(contador);
    contador++;
  }
}
contarAte5();

// ---------- Trecho 3 ----------
function imprimirNomes(): void {
  const nomes: string[] = ["Ana", "Bruno", "Carla"];
  // CORREÇÃO: i < nomes.length (antes era <= e imprimia undefined)
  for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
  }
}
imprimirNomes();

// ---------- Trecho 4 ----------
function somarPrecos(): number {
  const precos: number[] = [10, 25, 30, 15];
  let total = 0;
  // CORREÇÃO: for...of percorre os valores (for...in percorre os índices)
  for (const preco of precos) {
    total += preco;
  }
  return total;
}
console.log(somarPrecos());

// ---------- Trecho 5 ----------
function dispararAvisos(): void {
  // CORREÇÃO: let em vez de var (cada iteração ganha o seu próprio i)
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("Aviso " + i);
    }, 1000);
  }
}
dispararAvisos();

// ---------- Trecho 6 ----------
function imprimirTriangulo(): void {
  const totalLinhas = 5;
  for (let linha = 1; linha <= totalLinhas; linha++) {
    let linhaTexto = "";
    // CORREÇÃO: coluna <= linha (antes era < e faltava um asterisco)
    for (let coluna = 1; coluna <= linha; coluna++) {
      linhaTexto += "*";
    }
    console.log(linhaTexto);
  }
}
imprimirTriangulo();

// ---------- Trecho 7 ----------
function encontrarPrimeiroPar(): void {
  const numeros: number[] = [7, 9, 3, 11, 8, 15, 4];
    for (const numero of numeros) {
    if (numero % 2 === 0) {
      console.log("Primeiro par encontrado: " + numero);
      break;
    }
  }
}
encontrarPrimeiroPar();

// ---------- Trecho 8 ----------
interface ItemCarrinho {
  nome: string;
  quantidadeEstoque: number;
}

function validarCarrinho(): void {
  const carrinho: ItemCarrinho[] = [
    { nome: "Teclado", quantidadeEstoque: 3 },
    { nome: "Mouse", quantidadeEstoque: 0 },
    { nome: "Monitor", quantidadeEstoque: 5 },
  ];

  // CORREÇÃO: for...of, porque o return dentro dele sai da função inteira
  // (no forEach, o return só saía do callback)
  for (const item of carrinho) {
    if (item.quantidadeEstoque === 0) {
      console.log("Carrinho invalido");
      return;
    }
  }
  console.log("Carrinho valido");
}
validarCarrinho();

// ---------- Trecho 9 ----------
function contagemRegressiva(): void {
  let numero = 3;
  do {
    console.log(numero);
    numero--;
    // CORREÇÃO: numero > 0 (antes era >= 0 e imprimia o 0)
  } while (numero > 0);
  console.log("Fim!");
}
contagemRegressiva();

// ---------- Trecho 10 ----------
function calcularProduto(): number {
  const numeros: number[] = [2, 3, 4, 5];
  let produto = 1;
  for (const numero of numeros) {
    produto *= numero;
  }
  return produto;
}
console.log(calcularProduto());

// ---------- Trecho 11 ----------
function imprimirTabuadaDe7(): void {
  const numero = 7;
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
    // CORREÇÃO: removido o i++ extra de dentro do corpo
  }
}
imprimirTabuadaDe7();

// ---------- Trecho 12 ----------
function removerPares(): number[] {
  const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  // CORREÇÃO: filter cria um novo array só com os ímpares,
  // sem mexer no array enquanto percorre (o splice fazia o índice pular itens)
  return numeros.filter((n) => n % 2 !== 0);
}
console.log(removerPares());

// ---------- Trecho 13 ----------
function imprimirDoFim(): void {
  const numeros: number[] = [10, 20, 30, 40];
  // CORREÇÃO: começa em length - 1 (o último índice válido)
  for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
  }
}
imprimirDoFim();

// ---------- Trecho 14 ----------
function imprimirGrade(): void {
  for (let i = 0; i < 3; i++) {
    // CORREÇÃO: variável j no loop de dentro (antes os dois usavam i)
    for (let j = 0; j < 3; j++) {
      console.log("(" + i + ", " + j + ")");
    }
  }
}
imprimirGrade();

// ---------- Trecho 15 ----------
function coletarPares(): number[] {
  const candidatos: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pares: number[] = [];
  let i = 0;
  while (pares.length < 5 && i < candidatos.length) {
    const candidato = candidatos[i];
    if (candidato !== undefined && candidato % 2 === 0) {
      pares.push(candidato);
    }
    i++;
  }
  return pares;
}
console.log(coletarPares());

// ---------- Trecho 16 ----------
function imprimirComIndice(): void {
  const nomes: string[] = ["Ana", "Bruno", "Carla"];
  // CORREÇÃO: entries() devolve [indice, valor], então a ordem é [indice, nome]
  for (const [indice, nome] of nomes.entries()) {
    console.log(indice + ": " + nome);
  }
}
imprimirComIndice();

// ---------- Trecho 17 ----------
function juntarNomes(): string {
  const nomes: string[] = ["Ana", "Bruno", "Carla"];
  // CORREÇÃO: join coloca o separador só entre os itens
  return nomes.join(", ");
}
console.log(juntarNomes());
