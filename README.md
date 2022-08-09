# CritRoll
CritRoll API server

This is the API server for CritRoll, a Pathfinder2 character creation and companion ios app.

Before cloning the repo be sure to install docker with docker-compose
then you can run docker-compose up to bring the dev environment up on your local machine

currently it uses two containers:
- critroll-api based on node:alpine in which resides node itself and the app code. it will start up with nodemon running on port 3000
- db based on postgres:alpine which stores the database. (at the moment no database creation script is included) running on port 5432

once the stack is up you can access the api from the host machine on localhost:3000
