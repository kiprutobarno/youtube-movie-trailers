import "./App.css";
import { useEffect, useState } from "react";
import api from "./api/axiosConfig";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Reviews from "./components/reviews/Reviews";

const App = () => {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovie = async (id) => {
    try {
      const { data } = await api.get(`/api/v1/movies/${id}`);
      setMovie(data);
      setReviews(data?.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovies = async () => {
    try {
      const { data } = await api.get("/api/v1/movies");
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route
            path="/reviews/:id"
            element={
              <Reviews
                getMovie={getMovie}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
