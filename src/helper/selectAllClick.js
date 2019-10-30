function selectAllClick(arr) {
  const values = arr.map(x => x.value);
  if (values.indexOf("All") == 0 && arr.length > 1) {
    arr.splice(0, 1);
  } else if (values.indexOf("All") === arr.length - 1) {
    while (arr.length > 1) {
      arr.shift();
    }
  }
  return arr;
}

export default selectAllClick
