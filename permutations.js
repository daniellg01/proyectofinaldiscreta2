function allPermutations (items) {
// allPermutations () : return a list of all possible permutations
// credits: https://stackoverflow.com/questions/9960908/permutations-in-javascript

  let results = [];
  function permute (arr, memo) {
    var cur, memo = memo || [];
    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  permute(items);
  return results;
}

 
