import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Reviews from "./components/reviews/Reviews";
import Trailer from "./components/trailer/Trailer";

import { useGetMoviesQuery } from "./redux/rtq/services/moviesApi";
import Spinner from "./components/spinner/Spinner";

const App = () => {
  const { isLoading, isFetching, data: movies = [] } = useGetMoviesQuery();
  return (
    <>
      {isFetching || isLoading ? (
        <Spinner />
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/trailer/:id" element={<Trailer />} />
              <Route path="/" element={<Home movies={movies} />} />
              <Route path="/reviews/:id" element={<Reviews />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
