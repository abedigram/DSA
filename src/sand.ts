function sand() {
  function findKMinMax(numbers: [], k: number) {
    const indexedNumbers = numbers.map((value, index) => ({ value, index }));
    indexedNumbers.sort((a, b) => a.value - b.value);

    const result = {
      max: indexedNumbers.slice(numbers.length - k).reverse(),
      min: indexedNumbers.slice(0, k),
    };

    return result;
  }

  const arr = [4, 5, 2];
  const k = 2;
  const result = findKMinMax(arr, k);
  console.log(result);
}

export { sand };
