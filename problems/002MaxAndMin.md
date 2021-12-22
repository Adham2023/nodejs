# Find minimum and maximum element in an array

```javascript
function getMinMax(arr, n) {
  let   max = 0,
        min = 0;
  min = arr[0];
  max = arr[0];
  for (let i = 1; i < n; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
  }
  return [min, max];
}
```
