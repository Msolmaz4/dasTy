import { Link } from "react-router-dom";

const Eroro = () => {
  return (
    <Link to="/">
      <div
        style={{
          backgroundImage: "url(./er.jpg)",
          width: "100%",
          height: "900px",
        }}
      ></div>
    </Link>
  );
};

export default Eroro;
