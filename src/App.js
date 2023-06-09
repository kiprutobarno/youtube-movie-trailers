import { useEffect, useState } from "react";
import api from "./api/axiosConfig";

const App = () => {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const res = await api.get("/api/v1/movies");
      console.log(res.data);
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="App"></div>;
};

export default App;
