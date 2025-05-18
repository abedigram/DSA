function findKMinMax(items, k, keyFn) {
    const indexedItems = items.map((value, index) => ({ value, index }));
    indexedItems = sortFn(indexedItems)
    indexedItems.sort((a, b) => keyFn(a.value) - keyFn(b.value));

    const result = {
      max: indexedItems.slice(numbers.length - k).reverse(),
      min: indexedItems.slice(0, k),
    };

    return result;
  }
  


  const arr = [4, 5, 2];
  const k = 2;
  const result = findKMinMax(arr, k, (a)=> a);
  console.log(result);
}