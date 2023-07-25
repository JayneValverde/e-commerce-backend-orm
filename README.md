# (ORM): E-commerce-back-end
## Jayné M. Valverde <br>
Object-Relational Mapping 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### **_[LINK TO WALKTHROUGH VIDEO](https://youtu.be/FnWnYZZOs9Q)_**

## Description : 
This project uses the back end for an e-commerce site. Taking a working Expres.js API and configuring it to use Sequelize to interact with a MySQL database. 


## Table of Contents : 
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Resources](#resources)
* [Issues](#issues)
* [Questions](#questions)

## User Story : 
``` 
AS A manager at a internet retail company 
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies 
```

## Acceptance Criteria : 
``` 
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file 
THEN I am able to connect to a database using Sequelize 
WHEN I enter schema and seed commands 
THEN a development database is created and is seeded with test data 
WHEN I enter the command to invoke the application 
THEN my server is started and the Sequelize models are synced to the MySQL database 
WHEN I open API GET routes in Insomnia for catefories, products, or tags 
THEN the data for each of these routes is displayed in a formatted JSON 
WHEN I test API POST, PUT and DELETE routes in Insomnia 
THEN I am able to successfully create, update, and delete data in my database
```

## Installation : 
 `npm init` <br>
 `npm install mysql 12` <br>
 `npm install sequelize` <br>
 `npm install dotenv` <br>

## Usage : 
Run the follwing command and answer the prompted questions: <br>

`mysql -u root -p` <br>

Enter Passwordword when prompted <br>

`source db/schema.sql` <br> 

`quit` <br>

`npm run seed` <br>

`npm start` <br>

## Resources : 
**ASK BCS** <br>

**MODULE 13** <br>

## License : 
This project is licensed under MIT

## Issues : 

I am receiving `404` messages when trying to PUT & DELETE through PRODUCTS. <br>
Last minute bugs to work out. 

## Questions : 
Follow me on GitHub at [JayneValverde](https://github.com/JayneValverde) <br>
Contact me at Jaynevalverde@gmail.com <br>
Thank you!