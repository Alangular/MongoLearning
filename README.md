# MongoLearning
Simple nodejs - MongoDb project

REST methods in app.js:-

getAllUsers()
Get all documents [path: '/users']

getUser() 
Gets a single document matched by the name parameter [path: '/users/:name']

createUser()
Posts a new document [path: '/users']

updateUser()
Posts updated profileImage and status from request body, to a document matched by name supplied as request parameter [path: '/users/:name']

deleteInactiveUsers()
Deletes a document matched by the name in request parameter [path: '/users/:name']
