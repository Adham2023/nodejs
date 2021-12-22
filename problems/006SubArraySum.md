# Subarray with given sum 
```javascript
function subarraySum(arr, n, s) {
  let sum = 0;
  let left = 0, right = 0;
  while (right < n) {
    if (sum > s) {
      sum -= arr[left];
      left++;
    } else if (sum < s) {
      sum += arr[right];
      right++;
    }
    if (sum === s) {
      return [left + 1, right];
    }
  }
  while (sum !== s && left < n) {
    sum -= arr[left];
    left++;
  }
  if (sum !== s) return [-1];
  return [left + 1, right];
}
```
