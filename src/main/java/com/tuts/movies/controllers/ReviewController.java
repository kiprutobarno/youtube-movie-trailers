package com.tuts.movies.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tuts.movies.models.Review;
import com.tuts.movies.services.ReviewService;

import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/reviews")
public class ReviewController {
    @Autowired
    ReviewService service;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(service.create(payload.get("reviewBody"), payload.get("imdbId")),
                HttpStatus.CREATED);
    }
}
