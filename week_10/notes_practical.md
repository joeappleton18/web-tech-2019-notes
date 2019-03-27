## Note Practical

## The Latest Version of Java Script 

This week we are going to introduce the latest **major** version of JavaScript [ECMAScript 6 ](http://es6-features.org/#BlockScopedFunctions). It is vital you start to gain an appreciation of the latest JavaScript feature sets as they are used heavily popular MV* frameworks such as Vue, React and Angular. 

Below I shall introduce some of the most commonly used modern JavaScript features. This list is by no means exhaustive and you should check [ECMAScript 6 Guide](http://es6-features.org/#BlockScopedFunctions) for a more expansive feature set. What is more I will also be introducing you to some tools that allow us to  work using a modern workflow.


## The Query Selector 

You may recall accessing the DOM used to be a bit of a pain. We can now use the `document.querySelector` to target and manipulate dom elements. The below example illuminates how this can be done:

### HTML

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="scripts/main.js"></script>
    <title>Document</title>
</head>
<body onLoad="run()">
      
      <p> Enter your name: <input type="text" name="your_name"> </p>
      <button id="click" value=""> Click</button>
      <p id="display_name"></p>
        
   
</body>
</html>

````

### JavaScript


```html
function run(){
    
  document.querySelector('#click').addEventListener('click', sayHi);  
}
    

function sayHi() {
      
    var name = document.querySelector('input[name="your_name"]').value;
    document.querySelector('#display_name').innerHTML = "Hello" + " " + name
    
    
}

````

## Let And Const

### Let 

Recall, we can declare a variable in JavaScript using the `var` keyword. While we can, of course, still use the `var` keyword there is a subtle problem that some of you may have noticed. The issue is we can not have block scoped variables. 

Consider the following example:

```html
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
 
}

console.log(x);
// expected output: 1
// actual output: Uncaught SyntaxError: Identifier 'x' has already been declared 


```

The above example neatly summarises the issues you may encounter when there is no block scope. When we try and declare a variable within the `if block` we encounter an error. 

[ECMAScript 6 ](http://es6-features.org/#BlockScopedFunctions) solves this problem for us by introducing the `let` keyword:

```html
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
 
}

console.log(x);
// expected output: 1
```

In the above example, the scope of the x variable declared within the `if` block is now isolated only to the `if` statement. 


### Const 

The `const` key word has also been introduced and can be used to declare a constant value. The value of a constant can never change. I have always found constants useful for holding static app parameters. e.g. `const min_age = 18`.  

## Asynchronous JavaScript an Promises 

You may be used to programming commands running sequentially, one instruction runs directly after the next one; however, there are 
instances where you may not want this to be the case.  For instance, consider a situation where you need to run a programming command that queries a slow API. If you were to do this synchronously your entire application would hang until the request has completed, this would result in a very inefficient application. 

To solve the problem if timely programming instructions in some programming languages, such as python, you have to resort to multithreading. Multiethreaded programming can be a complex undertaking! Luckily JavaScript uses asynchronous programming to solve the event blocking problem. 

To demonstrate the asynchronous properties of JavaScript consider the below code block:  


```
    import axios from 'axios';
   
    
    axios.get('https://api.github.com/').then(function(r) {
    
       console.log(r.data);   // the parameter r  will contain the data
    
    })
    
    console.log('I will run before the data gets logged')  \\ this will log to the terminal first
 
```

Let's break the above block of code. Firstly, you'll notice that we are importing the `axios` HTTP request library. Secondly, we are making what's know as a promised based request `axios.get`. I won't go into any great deal of depth regarding promises, as they will be covered in other units. At this point you just need to understand that when the http request to the github api has completed the anonymous `function(r)` will be executed.  What's important is the program will continue running while the requested is pending. 