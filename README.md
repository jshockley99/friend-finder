# Friend Finder

### Description

Friend Finder is an app that matches friends based on responses to a series of questions. After the user answers 10 multiple choice questions, a built-in algorithm finds the best match from all previous user's answers that are the closest to the current user's answers. The app is built with Bootstrap, Node.Js, and Express. 

### Demo
Friend Finder is deployed on Heroku at the following link: https://pacific-mesa-35076.herokuapp.com/.

### Installation
To install the application follow the instructions below:
```
git clone git@github.com:jshockley99/friend-finder.git
cd friend-finder
npm install
```
### Running Locally
To run the application locally and access it in your browser, first set the PORT environment variable to the value of your choice. An example is shown below.

`export PORT=3000`

After the PORT environment variable has been set, run the Node.js application with the command below.

`node server.js`

The application will now be running locally on PORT, in this case that is port 3000. You can then access it locally from your browser at the URL localhost:PORT, in this case localhost:3000.