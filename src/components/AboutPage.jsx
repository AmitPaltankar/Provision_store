import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h2>About</h2>
      <div>
        <h4>
            Difficulty you faced while developing the application,
        </h4>
        <p>
            While deceloping the application token api is not working and i tested it in the postman and link click but it is not working, so that why i have hardcoded the token in the response, other then this their is no problemes i have faced 
        </p>
      </div>
      <div>
        <h4>how to start the project step by step.</h4>
        <h5>Step 1: Install Node.js and npm</h5>
        <div>
            Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from Node.js website.
        </div>
        <h5>Step 2: Install Create React App</h5>
        <div>
            Open a terminal or command prompt and run the following command to install Create React App :
            <strong>
                npx create-react-app react_app
            </strong>
            <p>
                if to run this project
            </p>
            <strong>cd provision-store</strong> and <strong>npm install</strong> it will install all dependencies
        </div>
        <h5>Step 5: Start the Development Server</h5>
        <strong>
            npm start
        </strong>
      </div>
    </div>
  );
};

export default AboutPage;
