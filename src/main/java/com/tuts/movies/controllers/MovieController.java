package com.tuts.movies.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tuts.movies.models.Movie;
import com.tuts.movies.services.MovieService;

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
@RequestMapping(value = "/api/v1/movies")
public class MovieController {
    @Autowired
    MovieService service;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<List<Movie>>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Movie>> getOneMovie(@PathVariable String id) {
        return new ResponseEntity<Optional<Movie>>(service.getOne(id), HttpStatus.OK);
    }
}
