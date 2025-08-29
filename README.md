# Emergency Hotline - Assignment 5

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

All of these methods are used to select elements from the DOM, but they have some key differences. Which are:

getElementById:Returns a single element with a unique ID. This one is the most specific and efficient.

getElementByClassName: Selects all elements that has a specific class name and returns an HTMLCollection which reflects real time DOM changes.

querySelector: This one uses CSS selectors like ID, Class, Tag, Attribute etc. and it's pretty flexible. It will return the first element that matches.

querySelectorAll: Similar to querySelector, gives all the elements that matches in a NodeList. Which is kind of like an array.

## 2. How do you create and insert a new element into the DOM?

There are usually three steps:

(i) Creating the element by document.createElement()
(ii) Adding attribute/ content
(iii) Inserting it with append, parentNode.appendChild or insertBefore() etc.
Example:
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!"
newDiv.classList.add("div-style")
document.body.appendChild(newDiv);

## 3. What is Event Bubbling and how does it work?

Event bubbling is when an event is triggered on the element and propagates upward through it's parent element one by one, until it reaches the root of the page. It's the default behavior of events of elements. During this upward propagation, any event listeners attached to these ancestor elements also get triggered. This makes event delegation technique possible.

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is when we put a single event listener on a parent element instead of adding separate listeners to all its child elements. Then, we check which child triggered the event inside that listener.
It makes the code simpler and extremely efficient. It also optimizes the websites performance and enables dynamic content handling

## 5. What is the difference between preventDefault() and stopPropagation() methods?

Both of these stops the default behaviors of elements in different scenarios

preventDefault() stops the default actions from happening. This is useful when dealing with submit buttons in forms to stop realoading the page.

stopPropagation() stops the events from bubbling up to parent elements. We can use this when we want the event to stay on the element and not affect parents.
