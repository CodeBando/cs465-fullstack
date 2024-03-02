# CS465 Full Stack Development
This repository holds the completed project for my Full Stack Development course, a fully completed Web Application utilizing the MEAN stack. Details regarding the application and project are below.

## Project Review

#### Project Goals
The goal of this project was to develop a travel booking website for Travlr Getaways. The website will consist of two components, the website that allows users to view travel packages and book travel and an SPA for administrators to manage the travel packages available on the site. 

#### Project Summary
The web application developed for Travlr Getaways is designed and executed to fulfill the client’s vision of a travel booking website. This application leverages the MEAN stack, which consists of MongoDB, Express.js, Angular, and Node.js to create an all-encompassing dynamic platform for their customers and administrators.

### Overview of the project
#### Architecture
In this full stack project, I employed a combination of frontend and backend technologies to create a dynamic web application. On the frontend, we utilized HTML, JavaScript, and Angular for building a website application. This approach allowed for a seamless user experience with smooth navigation and fast response times. I also developed a Single Page Application (SPA) that is utilized as the administrators site. The SPA architecture reduces server load by loading only the necessary resources for each page and updating content dynamically without full page reloads. <br>

On the backend, I utilized Express.js, a lightweight and flexible Node.js web application framework, to handle server-side logic and API endpoints. Express.js provided me with robust routing capabilities, middleware support, and easy integration with databases.

For data storage, I utilized a NoSQL MongoDB database. The decision to use MongoDB was driven by its flexibility, scalability, and schema-less nature, which allows for easy adaptation to changing data requirements typical in agile development environments. MongoDB's JSON-like document format also aligns well with the JavaScript-centric nature of the application, simplifying data manipulation and transfer between frontend and backend components.

#### Functionality
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It serves as a common data format used for communication between the frontend and backend of the application. JSON differs from JavaScript in that it is a data format, whereas JavaScript is a programming language. JSON's simplicity and universality make it an ideal choice for transmitting structured data between different parts of the application.

Throughout the project, I refactored code to improve functionality and efficiency. One key strategy was the creation of reusable UI components in Angular. By encapsulating common UI elements (e.g., form components) into separate components, I achieved greater code modularity, maintainability, and scalability. Reusable components reduce code duplication, promote consistency across the application, and simplify future updates and modifications.

Additionally, I utilized Handlebars.js to enhance the functionality and user experience of the full stack project. Handlebars.js is a powerful templating engine that simplifies the process of generating dynamic HTML content on the server-side. By incorporating Handlebars.js into the backend architecture, I was able to seamlessly integrate dynamic content generation with Express.js. Handlebars allowed me to define reusable templates containing placeholders for data variables, which could then be dynamically populated with data fetched from the database or received from client requests.

#### Testing
When looking at the testing of an SPA and its use of an API, there are many options available. Endpoint testing focuses on testing individual endpoints to ensure they respond correctly to various HTTP methods (e.g., GET, POST, PUT, DELETE) and input data. There are many systems available that can be utilized to test these connections and verify that they are functioning as expected. When testing the connections on the Travlr Getaways SPA, I utilized Postman to verify that the API was correctly executing GET, PUT, POST, DELETE functionality into or out of the database. These API endpoints were created prior to implementing layers of security, which means multiple testing sessions needed to be completed. Additionally, adding security layers increased the difficulty of testing as each function required additional information, like tokens, to be executed. Utilizing Postman, I was able to create a new user, login as that user, and then utilize the provided token to complete the testing of the GET, POST, PUT, and DELETE endpoints. 

Understanding methods, endpoints, and security in a full stack application requires a comprehensive understanding of HTTP protocols, RESTful principles, authentication mechanisms (e.g., JWT, OAuth), and security best practices (e.g., encryption, input validation). By implementing secure coding practices, employing robust authentication mechanisms, and regularly testing and updating our application, we can ensure its reliability, integrity, and resilience against potential threats.

#### Reflection
This course has been key in helping me reach my professional goals. Throughout the course, I was able to get hands-on experience working on a full stack project, which forced me to implement problem-solving skills, complete self-learning, and increase my development in many new technologies and frameworks. This includes the entire MEAN stack, multiple testing frameworks and technologies like Postman and GitHub, as well as gain a better understanding of what Full Stack Development really means. By being an experienced full stack developer, I have made myself a more marketable candidate in the technology field, helping me reach my goal of working in the Computer Science industry. 
