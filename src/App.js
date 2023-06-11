import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Reviews from "./components/reviews/Reviews";
import Trailer from "./components/trailer/Trailer";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/actions";

const App = () => {
  const movies = useSelector((state) => state.movies);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(fetchMovies());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/trailer/:id" element={<Trailer />} />
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/reviews/:id" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
