# API Behaviour and Endpoints
This is the expectected behaviour for the Chatby API.

# /user
## POST
Creates a new user. Expects user information as URL arguments (password/username).

**201** - User was created
**409** - User already exists
**500** - An error within the server occured

## GET
Attempts to find a user with given credentials Expects user information as JSON in the following format:
```
{
    'username' : <USERNAME>,
    'password' : <PASSWORD>
}
```
**200** - Login succeeded.
**404** - User not found.
**500** - An error within the server occured


# /chat
## POST
Attempts to submit a message to the database. Expects the message to be provided as JSON in the following format:
```
{
    'message' : <MESSAGE>,
    'username': <USERNAME>  
}
```

**201** - Message was submitted
**500** - An error within the server occured

## GET
Attempts to get all messages from the database. Returns a JSON response in the following format:
```
```