I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

```javascript
function insertionSort(arr) { 			
  for(var i = 1; i < arr.length; i++) {		//O(n), will always run as many times as array is long
    var val = arr[I];				//O(1), can be ignored
    var j;					//O(1), can be ignored
    for(j = i; j > 0 && arr[j-1] > val; j--) {	//will always run at least once, can run up to n times
						Assuming fully randomized inputs, would expect each element to have to move half the arrays length to be placed properly, moves one place every time through loop. Means loop runs average of n/2 times. O(n/2)∈ O(n)
      arr[j] = arr[j-1];			//O(1), can be ignored
    }
    arr[j] = val;				//O(1), can be ignored
  }
  return arr;					//O(1), can be ignored
}
```
Average complexity is a loop running n times with an internal loop with average of O(n)
T(n) = O(n) * O(n) = O(n^2)

T(n) ∈ $Theta$ (n^2)
