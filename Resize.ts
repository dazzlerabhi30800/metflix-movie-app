import { useEffect, useState } from "react";

const Resize = () => {
  const [size, setSize] = useState(window.innerWidth);
  function checkSize() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [size]);

  return { size };
};

export default Resize;
