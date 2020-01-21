# Notes (Practical)


## What is HTML?


>> [We're on HTML version 5](https://www.w3.org/TR/html5/)   

- Hyper Text Markup Language
- Designed for the creation of web pages and other information viewable in a browser
- We’re currently on version 5
- File extension, needs to be .html or .htm


## Tools Used To Create HTML Pages

>> [Visual Studio Code](https://code.visualstudio.com/)  is an excellent tool, and we now have it on all the computers

## HTML Elements 

- An HTML document is made up of elements also know as HTML tags
	- elements are containers for content
	- everything from the start tag to the end tag
	- some types of element may contain other elements
	- An html document starts with the doctype `<!DOCTYPE html>`
	- The rest of the document is nested in-between  `<html>` tags

- HTML tags are enclosed in < brackets:

```html  
<tagname>content</tagname>  
```	

An complete HTML document example:


```html
<!DOCTYPE html>
<html>
	  <head>
			<title>my first page</title>
	  </head>
      <body>
			<h1>This is my first Web Page</h1>
			<p>I should write a paragraph about myself</p>
			<img src="image.jpg" alt="describe the image” >
			<a href="http://www.solent.ac.uk">University</a>
      </body>
</html>

```

[Read W3 Schools for an introduction to different tags](http://www.w3schools.com/html/html_intro.asp)


Let's breakdown the above example in some more detail:

- `<html> .. </html>` - all of the information is embedded between these tags

- `<head>...</head>` - contains descriptive information about the content to come
	- 	`<title>..</title>` - as it sounds, it is the title for the page

- `<body>...</body>` - The main content of the document 
- `<p>..</p>` -  a paragraph tag to hold a paragraph of text
-  	<a>...</a> -  this is a how we create a hyperlink, anything between the two hyperlink tags will be clickable 


## HTML Attributes

- Each element may have one or more attributes
  provide additional information about elements
  specified in the start tag
  
- Attributes come in name/value pairs like: name="value"

- Below, we use attributes to specify the source of an image and where a link should point to
  
  
```html
<img src="image.jpg" alt="describe the image" />
<a href="http://www.solent.ac.uk">University</a>

```

## HTML Comments 

HTML comments allow you to embed statements into an html page which won't be shown to the user


```html
	<!-- this is an html comment -->

```



# Introduction to Git

Familiar with git, however, it never hurts after a break to have a quick refresh. 	

## Making commits 
**Commits are in effect snaps shots of your work!**

- When we've got to a stage in a project where we want to in essentially, make a back up. We:
 	- Stage the files we want to commit,  
 		- `git add -A` stages all the files for commit 
 		- `git add sample.txt` stages just sample.txt for commit
 	- We now can take a snapshot of our project by running `git commit -m "set up home page"` notice how we add a message to the commit, this should be a short description of the work you have completed for this commit. 

![](assets/git_work_flow.png) 	


## Rolling Back Your Work

- There are many different ways to roll back work when you're using git 
- We're going to focus on just one, resetting the head

#### `git reset --hard`

- `git reset --hard` will reset all the file in the working directory back to how they were in the last commit 

- If you commit regularly, this technique may be all you need 


## Git Remote Repositories 

- One of the true powers of working with GIT 
- They allow us to store our work in any location that is running a GIT server
- You'll never lose your work 
- [www.github.com](www.github.com), the most popular remote host

# Using GitHub as a remote host 

![](assets/git_getting_remote_address.jpg)

>> <sub> Getting the remote address of a repository </sub>

## Git Clone

- If you wan't a carbon copy of a repository by running, `git clone <address>
` 
- If you run `git clone https://github.com/joeappleton18/web-tech-2019-notes.git` you'll get a full carbon copy of the entire repository containing the course material on your local computer 

## Setting up a new repository 

You can also set up a brand new repository on gitHub


## Two way communication 

- Git Clone is fine if we just want to pull a project directly off GITHUb and store it locally. 
-  Most of the time you'll want to send changes back to GITHub for safe keeping
	
**Git makes this easy:**

- Get the remote address of your repository, as shown in the diagram above
- Locally create a empty folder to hold your project 
-  Then locate this folder from your shell application and run the following commands

```bash 
git init 
git remote add origin <remote address>
```

As you can see `git remote` takes two arguments  
	- The remote name, `origin` in this case. This is so we can easily reference the remote without having to remember the full address 
	- Running `git remote -v`, will display your remote address

![](assets/git_remote_v.jpg)	

We can now `push` and `pull` to the remote host

- `git pull origin master`  //pulls files from the origin 
- `git push origin master` // sends files to origin  

The typical workflow would be:

- **Pull** from the origin, work locally and make regular commits on a branch
- When you end your work session, **push** the changes to the origin for safe keeping 

**Hint: You can push local branches to gitHub**

Often you'll want to store your feature branch on the remote repository. 

**This is simple to achieve:**

```git push --set-upstream origin <the name of your branch>``` 

**Once the branch is created in your remote repository you can omit the `--set-upstream` flag**
