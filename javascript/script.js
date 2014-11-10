(function(window, document, undefined) {

  // Document elements
  var assignments = document.getElementsByClassName("assignment");

  /**
   * Event listener on an assignment div. First checks if the event was
   * triggered by the child <span> tag or the div itself. Then will either 
   * unblur the background and remove text if the user if hovering, or blur the
   * backgroung and add the text back if user is exiting the div. 
   * 
   * Arguments:
   * ---------
   * event - event object created by the event listener
   * isHovering - true when mouseover event, false  when mouseout
   */
  function toggleAssignmentClass(event, isHovering) {
    var target = event.target;
    var assignment = target;
    var text = null;

    // triggered by child <span> tag with text
    if (target.className === "assignment-text") {
      assignment = target.parent;
      text = target;
    } else {
      text = target.firstChild;
    }

    // triggered by mouseover event
    if (isHovering) {
      assignment.className += " assignment-hover";
      text.className += " hidden";
    // triggered by mouseout event
    } else {
      assignment.className = "assignment";
      text.className = "assignment-text";      
    }
  }

  // Adds event listeners to assignment divs
  for (var i = 0; i < assignments.length; i++) {
    assignments[i].addEventListener("mouseover", function(event) { 
      toggleAssignmentClass(event, true); 
    });
    assignments[i].addEventListener("mouseout", function(event) { 
      toggleAssignmentClass(event, false); 
    });
  }
  


})(this, this.document);