import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ReviewForm from "../forms/ReviewForm";

import {
  useCreateReviewMutation,
  useGetMovieQuery,
} from "../../redux/rtq/services/moviesApi";

const Reviews = () => {
  const reviewText = useRef();
  let params = useParams();
  const imdbId = params.id;

  const { data: movie = [] } = useGetMovieQuery(imdbId);
  const [createReview] = useCreateReviewMutation();

  const addReview = async (e) => {
    e.preventDefault();
    const review = reviewText.current;
    const reviewBody = review.value;
    createReview({ reviewBody, imdbId });

    review.value = "";
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    reviewText={reviewText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
            </>
          }
          {movie.reviews?.map((item, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col>{item.reviewBody}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
