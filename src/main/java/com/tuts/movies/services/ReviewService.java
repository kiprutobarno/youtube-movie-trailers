package com.tuts.movies.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.tuts.movies.models.Movie;
import com.tuts.movies.models.Review;
import com.tuts.movies.repository.ReviewRepository;

@Service
public class ReviewService {
    @Autowired
    ReviewRepository repository;

    @Autowired
    MongoTemplate template;

    public Review create(String reviewBody, String imdbId) {
        Review review = repository.insert(new Review(reviewBody));
        template.update(Movie.class).matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviews").value(review))
                .first();

        return review;
    }
}
