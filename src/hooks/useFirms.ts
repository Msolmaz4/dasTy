import axios from "axios";




const useFirms = () => {


  const alleFirm = async () => {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data, "usefirm");
  };

  return alleFirm;
};

export default useFirms;
