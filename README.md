Text Input Counter
==================

This module counts text length on `<textarea>` and `<input>` elements (or
really, any html element with a `value.length` property which responds to
keyboard input).

**Example**: print the content length of a textarea to a span for display,
limiting the length to twenty characters


```js
var textarea = document.getElementById("some-textarea");
var span = document.getElementById("some-span");

new Counter(textarea, 20).addObserver(function(length) {
  span.textContent = length + " characters";
});
```