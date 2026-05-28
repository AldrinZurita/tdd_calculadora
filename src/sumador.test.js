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

  it("deberia retornar el número para una cadena con un número", () => {
    expect(sumarCadena("2")).toEqual(2);
  });

  it("deberia retornar la suma de dos números separados por coma", () => {
    expect(sumarCadena("1,2")).toEqual(3);
  });
});

