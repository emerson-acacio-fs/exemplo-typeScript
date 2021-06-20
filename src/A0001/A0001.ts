/* eslint-disable */
// Tipos básicos
let nome: string = 'qqqq';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays

let arrayDeNumeros: Array<number> = [1, 2];
let arrayDeStrings: Array<string> = ['1, 2'];

let arrayDeNumeros2: number[] = [1, 2];
let arrayDeStrings2: string[] = ['1, 2'];

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 15,
  nome: 'dddd',
};

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};
