function createMap() {
  const map = {};

  function get(key, timestamp) {
    if (map[key] === undefined) return null;

    const arr = map[key];
    let left = 0;
    let right = arr.length - 1;
    let result = null;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midTime = arr[mid].timestamp;

    //   console.log(left, right, mid, midTime);
      
      if (timestamp === midTime) return arr[mid].value;
      else if (timestamp < midTime) {
        right = mid - 1;
      } else {
        result = arr[mid].value;
        left = mid + 1;
      }
    }

    return result;
  }

  function set(key, value, timestamp) {
    const setti = { value, timestamp };
    if (map[key] === undefined) {
      map[key] = [setti];
    } else {
      map[key].push(setti);
    }
  }

  return { get, set };
}

const { get, set } = createMap();

set("k0", "v1", 1);
set("k0", "v2", 4);


    console.log(get("k0", 1));
    console.log(get("k0", 6))
    console.log(get("k0", 3));
    console.log(get("k0", 4));

