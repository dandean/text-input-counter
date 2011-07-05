(function(exports) {

  /**
   * class Counter
   *
   * new Counter(control[, maxLength]) -> Counter
   * - control (HtmlInput|HtmlTextArea): The html input element to count characters in.
   * - maxLength (Number): The length at which to stop accepting input.
  **/
  var Counter = exports.Counter = function(control, maxLength) {
    var observers = this.observers = [];
    var maxLengthIsNumber = !!Object.prototype.toString.call(maxLength).match(/Number/);
    maxLength = (maxLengthIsNumber && maxLength > 0) ? maxLength : -1 ;
    
    // Listen to keypress so that we can cancel it if the length would be more
    // than `maxLength`.
    control.addEventListener("keypress", function(e) {
      if (e.charCode) {
        // Length is going to be 1 + the current length
        var length = control.value.length + 1;

        if (maxLength > -1 && length > maxLength) {
          if (!(e.metaKey || e.ctrlKey)) {
            e.preventDefault();
          }
        } else {
          fire(length);
        }
      }
    }, false);

    // Listen to `keyup` so we can update the count when characters are deleted.
    control.addEventListener("keyup", function(e) {
      if (e.keyCode == 8 || e.keyCode == 39) {
        fire(control.value.length);
      }
    }, false);
    
    // Notifies all observers.
    function fire(length) {
      for (var i=0; i<observers.length; i++) {
        observers[i](length);
      }
    }
  };
  
  /**
   * Counter#addObserver(fn) -> Counter
   * - fn (Function): An observer function that receives the current length of
   *    the text content.
  **/
  Counter.prototype.addObserver = function(fn) {
    if (fn && fn instanceof Function) this.observers.push(fn);
    return this;
  };

})(this);
