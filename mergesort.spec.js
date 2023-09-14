describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3] && [4, 5, 6]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("es capaz de combinar dos arrreglos desordenados en uno solo ordenado", function () {
    expect(merge([3, 1, 2], [6, 4, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
