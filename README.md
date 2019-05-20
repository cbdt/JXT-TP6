# JXT TP6 - Clément Baudet & Kévin Philip

## Getting Started

This section provides a quick start guide on how to launch the application.

### Prerequisites

- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Make sure all the prerequisites are installed.
2. Run the identity provider server by forking the [previous TP](https://github.com/cbdt/ESIR-JXT-TP5.git), run `npm i` and run the server `npm start` (it runs by default on port 3000)
3. Download this project and `cd` into it.
4. Run the mongodb server with `mongod`
5. When its done, start the mongoDB cli with the command: `mongo` and create the database using: `use jxt` (you can specify the database name and others database parameters in the config file). Make sure the name of the database is the same as the one who's in the config file.
6. Run `npm i`, then start the server by running `npm start` (you can change the port used in the config file)
7. Enjoy our application!

Default user to get an access token is:
```json
"login": "pedro",
"password": "pass"
```

Don't forget to specify the authentication token you got when logged in, in order to call most of api's endpoints. (prefix is `Bearer`)

![Yayy](https://media.giphy.com/media/8JW82ndaYfmNoYAekM/source.gif)
