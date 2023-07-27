# mongodb-hw
This is a simple Social Network API that allows you to interact with users and thoughts using various HTTP methods. Below are the instructions to set up and use the application.

Users
GET /api/users: Retrieves a list of all users in the database.
POST /api/users: Creates a new user. Provide the necessary user data in the request body.
PUT /api/users/:userId: Updates an existing user. Replace :userId with the ID of the user you want to update in the URL. Provide the updated user data in the request body.
DELETE /api/users/:userId: Deletes a user. Replace :userId with the ID of the user you want to delete in the URL.
Thoughts
GET /api/thoughts: Retrieves a list of all thoughts in the database.
POST /api/thoughts: Creates a new thought. Provide the necessary thought data in the request body.
PUT /api/thoughts/:thoughtId: Updates an existing thought. Replace :thoughtId with the ID of the thought you want to update in the URL. Provide the updated thought data in the request body.
DELETE /api/thoughts/:thoughtId: Deletes a thought. Replace :thoughtId with the ID of the thought you want to delete in the URL.

Example Usage
To get a list of all users, send a GET request to /api/users in Insomnia.
To create a new user, send a POST request to /api/users with the required user data in the request body.
To update an existing user, send a PUT request to /api/users/:userId with the updated user data in the request body.
To delete a user, send a DELETE request to /api/users/:userId.
Similarly, you can use the corresponding routes for thoughts, reactions, and friends.
Remember to replace :userId, :thoughtId, and :reactionId with the actual IDs of users, thoughts, and reactions when making requests.

https://drive.google.com/file/d/1YLbgkYIYHCDAmrJM7dSoyuG3EcxFdpGH/view


Happy networking!






