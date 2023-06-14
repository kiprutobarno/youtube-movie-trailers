import { useParams } from "react-router-dom";
import "./Trailer.css";
import ReactPlayer from "react-player";

const Trailer = () => {
  let params = useParams();
  let key = params.id;
  return (
    <div className="react-player-container">
      {key != null ? (
        <ReactPlayer
          controls={true}
          url={`https://www.youtube.com/watch?v=${key}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;
