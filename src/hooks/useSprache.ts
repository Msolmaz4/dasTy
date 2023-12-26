import { useState } from "react";

const useSprache = () => {
  const [sprach, setSprach] = useState(false);
  const enfli = () => {
    setSprach(!sprach);
    console.log(sprach,"spracj")
  };

  return { enfli };
};

export default useSprache;
