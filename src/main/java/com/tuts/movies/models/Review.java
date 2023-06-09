package com.tuts.movies.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "reviews")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Review {
    @Id
    private ObjectId id;

    private String reviewBody;

    public Review(String reviewBody) {
        this.reviewBody = reviewBody;
    }

}
