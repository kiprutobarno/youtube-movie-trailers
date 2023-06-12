import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ReviewForm from "../forms/ReviewForm";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchMovie,
  fetchReviews,
  createReview,
} from "../../redux/redux-toolkit/asyncThunks";

const Reviews = () => {
  const { movie } = useSelector((state) => state.movie);
  const { reviews } = useSelector((state) => state.reviews);

  const dispatch = useDispatch();

  const reviewText = useRef();

  let params = useParams();
  const imdbId = params.id;

  useEffect(() => {
    dispatch(fetchMovie(imdbId));
    dispatch(fetchReviews(imdbId));
  }, [reviews]);

  const addReview = async (e) => {
    e.preventDefault();
    const review = reviewText.current;
    const reviewBody = review.value;
    dispatch(createReview({ reviewBody, imdbId }));

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
          {reviews?.map((item, index) => {
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
