function subarraySum(arr, n, s) {
  let sum = 0;
  let left = 0,
    right = 0;
  while (right < n) {
    if (sum > s) {
      sum -= arr[left];
      left++;
      console.log("sliding left", left, sum)
    } 
    else if (sum < s) {
      sum += arr[right];
      right++;
      console.log("sliding right", right, sum)
    }
    if (sum === s) {
      return [left + 1, right ];
    }
  }
  while (sum !== s && left < n) {
    sum -= arr[left];
    left++;
  }
  if (sum !== s) return [-1];
  return [left + 1, right ];
}

console.log(
  subarraySum(
    [
        135, 101, 170 ,125,79 ,159 ,163, 65, 106 ,146, 82, 28, 162 ,92 ,196, 143, 28 ,37, 192, 5 ,103 ,154, 93 ,183 ,22 ,117 ,119, 96 ,48, 127, 172 ,139, 70, 113, 68 ,100, 36, 95, 104 ,12, 123, 134
    ],
    42,
    468
  )
);
