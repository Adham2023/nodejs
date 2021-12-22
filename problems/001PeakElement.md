# Peak Element

## Linear search approach

```javascript
function peakElement(arr, n) {
  if (n === 1) {
    return arr[0];
  }
  if (arr[0] >= arr[1]) return arr[0];
  if (arr[n - 1] >= arr[n - 2]) return arr[n - 1];
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return arr[i];
  }
  return arr[0];
}
```

## Divide and Conquer Approach

```javascript
function findPeakElement(num, n) {
  return num[peakFinder(num, 0, n - 1)];
}

function peakFinder(num, start, end) {
  if (start === end) {
    return start;
  } else if (start + 1 === end) {
    if (num[start] > num[end]) return start;
    return end;
  } else {
    let m = Math.floor((start + end) / 2);
    if (num[m] > num[m - 1] && num[m] > num[m + 1]) {
      return m;
    } else if (num[m - 1] > num[m] && num[m] > num[m + 1]) {
      return peakFinder(num, start, m - 1);
    } else {
      return peakFinder(num, m + 1, end);
    }
  }
}
```
