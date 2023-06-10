import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axiosConfig";
import { Col, Container, Row } from "react-bootstrap";
import ReviewForm from "../forms/ReviewForm";

const Reviews = ({ getMovie, movie, reviews, setReviews }) => {
  const reviewText = useRef();
  let params = useParams();
  const movieId = params.id;

  useEffect(() => {
    getMovie(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const review = reviewText.current;
    try {
      await api.post("/api/v1/reviews", {
        reviewBody: review.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { reviewBody: review.value }];
      review.value = "";
      setReviews(updatedReviews);
    } catch (error) {
      console.log(error);
    }
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
