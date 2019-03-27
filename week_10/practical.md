## Practical

## Task 1 - Consuming Data 

This week, with the help of JavaScript, we are going to consume some public api data and creatively display the results. 

As a programmer I love to take data that would be otherwise meaningless and creatively add meaning it.
You should all check out, [https://github.com/toddmotto/public-apis](https://github.com/toddmotto/public-apis) which contains a list of public `APIs`. This week we  are going to be using the brewery open api [https://api.openbrewerydb.org/breweries](https://api.openbrewerydb.org/breweries) 


#### Steps

To get started follow the steps below:

1. clone my git repo `git clone https://github.com/joeappleton18/Simple-Vue-Webpack-and-SASS.git`
2. as per the repo readme run `npm install`
3. run `npm run watch`

### Preparing a empty project

-  delete the  `src/components` folder, we're not making any components today
-  delete all of the code from `main.js` leaving just the imports for the SCSS and HTML files at the top

```html
//import styles
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';

```

- sass is a super set of CSS you can use normal css in main.css or, take a look at a sass tutorial

-  within `srx/index.html` delete all the code in the `<body>` tag, leaving in ```<script type="text/javascript" src="bundle.js"></script>``` in place.

### Installing dependencies

- We just need one dependency for this project, axios
- Run  `npm install axios --save`


### Running our program 

Perhaps you remember that we don't want our JavaScript to run before the pages loads. As such, we need to have a main function that boostraps our program when the webpage has loaded. Below, we set up the run function to be invoked when the webpage has loaded. Insert the below code into you index.js file and check that `running` is being logged to the console. 


 ``` 
  function run() {
   
       console.log('running');
   
   }
   
  window.onload = run();
  
  ```

### Main Task

- Figure out how to make a API request to  [https://www.openbrewerydb.org/](https://www.openbrewerydb.org/)
- How would you store the API URL in a separate file as a constant?  
-  Can you map the breweries using [https://leafletjs.com/](https://leafletjs.com/). Try to include the leaflet library 
- Publish your work on githubpages or firebase
