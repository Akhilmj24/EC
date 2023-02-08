import { useEffect, useState } from "react";

const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState("rgba(255, 255, 255, 0.35)");
  //to handle Color of header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHeaderColor("white");
      } else {
        setHeaderColor("rgba(255, 255, 255, 0.35)");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return headerColor;
};

export default useHeaderColor;
