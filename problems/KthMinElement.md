# Kth Min Element

```javascript
function kthSmallest(arr, k){
    return arr.sort((a, b) => a - b)[k-1];
}
```