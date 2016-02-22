/**
 * Created by viveksh2 on 1/28/14.
 */
function hide(e, reflow) { // Hide the element e by scripting its style
    if (reflow) { // If 2nd argument is true
        e.style.display = "none" // hide element and use its space
    }
    else { // Otherwise
        e.style.visibility = "hidden"; // make e invisible, but leave its space
    }
}
function highlight(e) { // Highlight e by setting a CSS class
// Simply define or append to the HTML class attribute.
// This assumes that a CSS stylesheet already defines the "hilite" class
    if (!e.className) e.className = "hilite";
    else e.className += " hilite";
}