import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

function App() {
  const container = useRef(null);
  const [arr, setArray] = useState([1, 2, 3, 4]);

  useGSAP(
    () => {
      gsap.to(`.boxes`, {
       opacity:0.5,
      });
    },
    { scope: container, dependencies: [arr] }
  );

  useGSAP(
    () => {
      const middleIndex = Math.floor(arr.length / 2);

      gsap.to(`.box-${middleIndex}`, {
        rotation: "+=360",
        duration: 0.5,
        opacity:1,
        ease: "power2.inOut",
      });
    },
    { scope: container, dependencies: [arr] }
  );

  const arrayLeft = () => {
    setArray((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const arrayRight = () => {
    setArray((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div ref={container}>
        <div className="flex gap-x-5 mb-10">
          {arr.map((item, index) => (
            <div
              key={item}
              className={`w-[200px] h-[250px] bg-yellow-500 flex items-center justify-center box-${index} boxes`}
            >
              box {item}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-red-500 p-2 m-4 cursor-pointer" onClick={arrayLeft}>
        Left
      </div>
      <div className="bg-red-500 p-2 cursor-pointer" onClick={arrayRight}>
        Right
      </div>
    </div>
  );
}

export default App;
