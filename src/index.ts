import { stringify } from 'querystring';

function gerarPessoa(
  fristName: string,
  lastName?: string,
): {
  fristName: string;
  lastName?: string;
} {
  return { fristName, lastName };
}

console.log(gerarPessoa('www', 'd'));

enum Cores {
  VERMELHO,
  AZUL,
  Amarelo,
}

console.log(Cores.VERMELHO);
