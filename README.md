# HNGx-StageTwoTask

HNGx Internship stage two task - An API with endpoints that performs CRUD operation on a person entity, built with node.js and express framework using MongoDB NoSQL database.

Project dependencies include express, a backend web application framework for building RESTful APIs with Node.js, mongoose which is an object data modeling (odm) library for mongodb and node.js, joi which is a popular module for data validation, dotenv which is a zero-dependency module that loads environment variables from a .env file into process.env, and cors which is a node.js package for providing a Connect/Express middleware that can be used to enable "Cross-Origin Resource Sharing" with various options
<<<<<<< HEAD

The project was deployed on render and the database hosted on MongoDB atlas.


PERSONAPI DOCUMENTATION

HTTP Method - POST: addPerson
URL: https://person-entity.onrender.com/api

/api
This endpoint expects a valid name string in the request body to add a new person to the database.
A valid name comprise only letters of the alphabet, space, hyphen and the apostrophe.
This endpoint returns the created person object as response.

EXAMPLE: addPerson

HTTP Request
POST /api HTTP/1.1
Host: person-entity.onrender.com
HTTP Status Code: 201 CREATED

{
"name":"Cristiano Ronaldo"
}

HTTP Response
{
"data": {
"name": "Cristiano Ronaldo",
"\_id": "6501abd1f7f347def6844e80",
"\_\_v": 0
},
"message": "new person created.",
"success": true
}

HTTP Method - GET: getPerson
URL: https://person-entity.onrender.com/api/6501abd1f7f347def6844e80

/api/:id
This endpoint expects a valid id as request query parameter and then retrieves the person object in the database which matches the id passed as query parameter to the url.

EXAMPLE: getPerson

HTTP Request
GET /api/6501abd1f7f347def6844e80 HTTP/1.1
Host: person-entity.onrender.com
HTTP Status Code: 200 OK

HTTP Response
{
"data": {
"\_id": "6501abd1f7f347def6844e80",
"name": "Cristiano Ronaldo",
"\_\_v": 0
},
"success": true
}

HTTP Method - PUT: updatePerson
URL: https://person-entity.onrender.com/api/6501abd1f7f347def6844e80

/api/:id
This endpoint expects a valid id as request query parameter and a valid name string in the request body. Then it updates the name of person object in the database which matches the id passed as query parameter, and then returns the updated person object.

EXAMPLE: updatePerson

HTTP Request
PUT /api/6501abd1f7f347def6844e80 HTTP/1.1
Host: person-entity.onrender.com
HTTP Status Code: 200 OK

{
"name":"Ronaldo Messi"
}

HTTP Response
{
"\_id": "6501abd1f7f347def6844e80",
"name": "Ronaldo Messi",
"\_\_v": 0
}

HTTP Method - DELETE: deletePerson
URL: https://person-entity.onrender.com/api/6501abd1f7f347def6844e80

/api/:id
This endpoint expects a valid id as request query parameter.
Then it deletes the person object in the database which matches the id passed as query parameter to the url.

EXAMPLE: deletePerson

HTTP Request
DELETE /api/6501abd1f7f347def6844e80 HTTP/1.1
Host: person-entity.onrender.com
HTTP Status Code: 200 OK

HTTP Response
{
"message": "Person successfully deleted."
}




