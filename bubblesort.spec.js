describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("ordena un arreglo desordenado", function () {
    expect(bubbleSort([3, 5, 2, 4, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("Ordena un arreglo invertido", function () {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
