import { type } from 'os';
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

type Idade = number;
type Pessoa = { nome: string; idade: Idade; salario?: number };

type CorRGB = 'vermelho' | 'verde' | 'Azul';
type CorCMYK = 'Ciano' | 'wwww';

type Final = CorRGB | CorCMYK;

const pessoa: Pessoa = { idade: 1, nome: 'dddd', salario: 444 };
