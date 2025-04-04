// Notes data for the Web Development course
export const webDevelopmentNotes = {
  // Module 1, Lesson 1
  '1-1': {
    title: 'HTML & CSS Notes',
    content: `
# HTML & CSS Fundamentals

## Introduction to HTML
HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure of web content.

![HTML structure showing nested elements](https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&q=80&w=1000)

### Basic HTML Document Structure
\`\`\`
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a paragraph.</p>
</body>
</html>
\`\`\`

## Common HTML Elements

- **Headings**: \`<h1>\` through \`<h6>\`
- **Paragraphs**: \`<p>\`
- **Links**: \`<a href="url">link text</a>\`
- **Images**: \`<img src="image.jpg" alt="description">\`
- **Lists**: 
  - Unordered: \`<ul>\` with \`<li>\` items
  - Ordered: \`<ol>\` with \`<li>\` items
- **Divs**: \`<div>\` for grouping elements

![Web designer working on a responsive layout](https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000)

## Introduction to CSS
CSS (Cascading Style Sheets) is used to style and layout web pages.

### Ways to Include CSS
\`\`\`
<!-- Inline CSS -->
<p style="color: red;">This is red text.</p>

<!-- Internal CSS -->
<style>
  p { color: blue; }
</style>

<!-- External CSS (preferred) -->
<link rel="stylesheet" href="styles.css">
\`\`\`

## CSS Selectors
- **Element selector**: \`p { color: red; }\`
- **Class selector**: \`.className { color: red; }\`
- **ID selector**: \`#idName { color: red; }\`
- **Attribute selector**: \`[type="submit"] { color: red; }\`

![CSS color palettes and design mockups](https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&q=80&w=1000)

## The Box Model
Every HTML element can be viewed as a box with:
- **Content**: The actual content
- **Padding**: Space between content and border
- **Border**: A border around the padding
- **Margin**: Space outside the border

\`\`\`
.box {
  width: 300px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
\`\`\`

## CSS Layout
- **Display Properties**: block, inline, inline-block, flex, grid
- **Position Properties**: static, relative, absolute, fixed, sticky
- **Flexbox**: Modern way to create responsive layouts
\`\`\`
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`
- **CSS Grid**: Advanced two-dimensional layout system
\`\`\`
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
\`\`\`

![Responsive website on multiple devices](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000)

## Responsive Design
- **Media Queries**: Apply styles based on device characteristics
\`\`\`
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
\`\`\`
- **Viewport Meta Tag**: Ensures proper rendering on mobile devices
\`\`\`
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
`,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    darkGradientFrom: 'dark:from-blue-600',
    darkGradientTo: 'dark:to-indigo-700',
    iconColor: 'text-blue-500',
    accentColor: 'bg-indigo-600',
    accentHoverColor: 'hover:bg-indigo-700',
  },
  
  // Module 2, Lesson 1
  '2-1': {
    title: 'JavaScript Notes',
    content: `
# JavaScript Essentials

## Introduction to JavaScript
JavaScript is a programming language that allows you to implement complex features on web pages. It enables interactive web pages and is an essential part of web applications.

![JavaScript code on screen](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000)

### Adding JavaScript to HTML
\`\`\`
<!-- Inline JavaScript -->
<button onclick="alert('Hello!')">Click me</button>

<!-- Internal JavaScript -->
<script>
  function sayHello() {
    alert('Hello!');
  }
</script>

<!-- External JavaScript (preferred) -->
<script src="script.js"></script>
\`\`\`

## JavaScript Syntax Basics

### Variables
\`\`\`
// Variable declaration
let name = 'John';
const age = 30;
var oldWay = 'not recommended';

// Data types
let string = 'Text';
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = { name: 'John', age: 30 };
let nullValue = null;
let undefinedValue;
\`\`\`

![Developer working with JavaScript](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000)

### Functions
\`\`\`
// Function declaration
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Arrow function
const greetArrow = (name) => {
  return \`Hello, \${name}!\`;
};

// Function invocation
greet('John'); // "Hello, John!"
\`\`\`

### Control Flow
\`\`\`
// Conditionals
if (age >= 18) {
  console.log('Adult');
} else if (age >= 13) {
  console.log('Teenager');
} else {
  console.log('Child');
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
\`\`\`

![JavaScript framework logos showing React, Vue, and Angular](https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=1000)

## DOM Manipulation
The Document Object Model (DOM) represents the HTML document as a tree of objects that JavaScript can interact with.

### Selecting Elements
\`\`\`
// By ID
const element = document.getElementById('myId');

// By class name
const elements = document.getElementsByClassName('myClass');

// By tag name
const paragraphs = document.getElementsByTagName('p');

// Using CSS selectors (modern)
const element = document.querySelector('#myId');
const elements = document.querySelectorAll('.myClass');
\`\`\`

### Modifying Elements
\`\`\`
// Changing content
element.textContent = 'New text';
element.innerHTML = '<strong>Bold text</strong>';

// Changing styles
element.style.color = 'red';
element.style.fontSize = '16px';

// Adding/removing classes
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');

// Creating and appending elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
document.body.appendChild(newParagraph);
\`\`\`

![Interactive web application interface](https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=1000)

## Event Handling
\`\`\`
// Adding event listeners
element.addEventListener('click', function(event) {
  console.log('Element was clicked!');
  console.log(event); // Event object contains details
});

// Common events:
// - click
// - submit (for forms)
// - keyup, keydown, keypress
// - mouseover, mouseout
// - load, DOMContentLoaded
\`\`\`

## Asynchronous JavaScript

### Callbacks
\`\`\`
function fetchData(callback) {
  setTimeout(function() {
    callback('Data received');
  }, 1000);
}

fetchData(function(data) {
  console.log(data);
});
\`\`\`

![Asynchronous programming concept visualization](https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=1000)

### Promises
\`\`\`
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
      // Or if there's an error:
      // reject('Error fetching data');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

### Async/Await
\`\`\`
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
\`\`\`
`,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    darkGradientFrom: 'dark:from-blue-600',
    darkGradientTo: 'dark:to-indigo-700',
    iconColor: 'text-blue-500',
    accentColor: 'bg-indigo-600',
    accentHoverColor: 'hover:bg-indigo-700',
  },
  
  // Template for adding a new note
  /*
  'module-lesson': {
    title: 'Note Title',
    content: `
# Main Heading

## Section 1
Content goes here

## Section 2
More content

### Subsection
\`\`\`
// Code example
\`\`\`

- List item 1
- List item 2
`,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    darkGradientFrom: 'dark:from-blue-600',
    darkGradientTo: 'dark:to-indigo-700',
    iconColor: 'text-blue-500',
    accentColor: 'bg-indigo-600',
    accentHoverColor: 'hover:bg-indigo-700',
  },
  */
};

// Helper function to get a note by module ID and lesson ID
export function getNote(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return webDevelopmentNotes[key as keyof typeof webDevelopmentNotes];
} 