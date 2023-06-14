# Youtube Movie Trailers

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project showcases select youtube movie trailers. The application's users can watch the trailers, read reviews left by other users as well as make reviews themselves. 
	
## Technologies
the project is created using:
* NodeJs version: 18.12.1
* React version: 18.2.0
* Java version: 17.0.7
* Spring Boot Framework
* MongoDB version: 6.0.6
	
## Setup
To run this project, install it locally by cloning it from github:
1. Clone the repository.

```
$ git clone https://github.com/ywalakamar/youtube-movie-trailers.git
$ cd ../youtube-movie-trailers
```
2. Setup `ENV VARIABLES` using the template provided at `.env.example` file located at `src/main/resources` folder.
3. Run the backend server
```
$ ./mvnw spring-boot:run
```
4. Run the frontend server

```
$ cd ../client
$ npm install
$ npm start
```

The client application will be automatically served via `http://localhost:3000`
