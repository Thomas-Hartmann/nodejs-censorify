This project is a demo project to learn node.js
This is how it was done:
1. Created a project folder (called it censorify)
2. Created a .js file with the code i wanted to create
The code was 3 methods: censor, addCensoredWords, getCensoredWords
The methods was put onto an object called: 'exports' (the name is important) and this object will become the module
This was done in the buttom of the file
3. Created a package.json file containing one object with these properties:
		author
		name
		version
		description
		main (here goes the name of the js file like this: "main": "censortext")
		dependencies
		engines (this one contained an objec like this: {"node": "*"})
4. created this README.md file in the folder
5. from inside this repository in the prompt I ran: npm pack (which created a tgz file which is the packed module)