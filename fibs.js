function fibs(n) {
    if (n === 0) {
        return [];
      } else if (n === 1) {
        return [0];
      } else if (n === 2) {
        return [0, 1];
      } else {
        let fibsList = [0, 1]
        for (let i = 2; i < n; i++) {
            let nextFib = fibsList[i - 1] + fibsList[i - 2];
            fibsList.push(nextFib);
        }

        return fibsList;
      }
}

function fibsRec(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let fibsList = fibsRec(n - 1);
    fibsList.push(fibsList[fibsList.length - 1] + fibsList[fibsList.length - 2]);
    return fibsList;
  }
}

console.log(fibs(8));
console.log(fibsRec(8));