import { useState } from "react";

const useSprache = () => {
  const [sprach, setSprach] = useState(false);
  const enfli = () => {
    setSprach(!sprach);
    
  };

  return { enfli };
};

export default useSprache;
