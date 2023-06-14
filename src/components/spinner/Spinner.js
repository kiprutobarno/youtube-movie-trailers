import ReactLoading from "react-loading";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner">
      <ReactLoading
        type={"spinningBubbles"}
        color={"gold"}
        height={"2.5%"}
        width={"2.5%"}
      />
    </div>
  );
};

export default Spinner;
