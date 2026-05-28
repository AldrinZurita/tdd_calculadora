import sumar from "./sumador.js";
import sumarCadena from "./sumarCadena.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

describe("Calculadora de Cadenas", () => {
  it("deberia retornar 0 para una cadena vacía", () => {
    expect(sumarCadena("")).toEqual(0);
  });
});

