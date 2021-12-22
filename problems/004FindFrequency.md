# Find the Frequency

```javascript
function findFrequency(v, n, x) {
  let re = new RegExp(`${x}`, "g");
  let arr = v.join("").match(re);
  if (arr) {
    return arr.length;
  } else {
    return 0;
  }
}
```
