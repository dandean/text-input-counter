Text Input Counter
==================

This module counts text length on `<textarea>` and `<input>` elements (or
really, any html element with a `value.length` property which responds to
keyboard input).

Text Input Counter uses the **observer pattern** to give you a programmatic view
into content length. Any object which cares about the content length can simply
add an observer function, which gets called whenever the text is updated.

**Example**: print the content length of a textarea to a span for display,
limiting the length to twenty characters:

```js
var textarea = document.getElementById("some-textarea");
var span = document.getElementById("some-span");

new Counter(textarea, 20).addObserver(function(length) {
  span.textContent = length + " characters";
});
```


TODO
----

* Handle and respond to cut and paste events.
* Add a `removeObserver` method.
