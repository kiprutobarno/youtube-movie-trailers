import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Reviews from "./components/reviews/Reviews";
import Trailer from "./components/trailer/Trailer";

import { useGetMoviesQuery } from "./redux/rtq/services/moviesApi";

const App = () => {
  const { data: movies = [] } = useGetMoviesQuery();

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
