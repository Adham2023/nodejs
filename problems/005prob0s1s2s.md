```javascript
function sort012(arr, N);
{
  let low = 0,
    mid = 0,
    high = N - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      let temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low++;
      mid++;
      continue;
    }
    if (arr[mid] === 1) {
      mid++;
      continue;
    }
    if (arr[mid] === 2) {
      let temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
      continue;
    }
  }
  return arr;
}
```
