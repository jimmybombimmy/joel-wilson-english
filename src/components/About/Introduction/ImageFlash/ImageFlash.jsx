import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function ImageFlash({ imgArray, imgOnBottom }) {
  const [imgNo, setImgNo] = useState(0);
  const [randomMove, setRandomMove] = useState([
    Math.floor(Math.random() * 41),
    Math.floor(Math.random() * 16),
  ]);

  const [flip, setFlip] = useState(imgOnBottom ? false : true);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: () => {
      return flip ? 3000 : 3000;
    },
    config: { duration: 500 },
    onRest: () => {
      if (flip === true) {
        imgNo < imgArray.length - 1 ? setImgNo(imgNo + 1) : setImgNo(0);
        setRandomMove([
          Math.floor(Math.random() * 41),
          Math.floor(Math.random() * 16),
        ]);
      }
      setFlip(!flip);
    },

    bottom: () => {
      if (imgOnBottom === false) {
        return "500px";
      }
    },
  });

  function pushUpImages() {
    return !imgOnBottom ? "500px" : "0px";
  }

  function alignTopOrBottom() {
    return imgOnBottom ? 'end' : 'top'
  }

  return (
    <animated.div style={props}>
      <div
        className="flashingReviewsContainer"
        style={{ bottom: pushUpImages(), alignItems: alignTopOrBottom()}}
      >
        {!imgOnBottom ? (
          <img
            style={{
              left: `${String(randomMove[0])}%`,
              marginTop: `${String(randomMove[1])}%`,
            }}
            className="introReview"
            src={imgArray[imgNo]}
            alt=""
          />
        ) : (
          <img
            style={{
              left: `${String(randomMove[0])}%`,
              marginBottom: `${String(randomMove[1])}%`,
            }}
            className="introReview"
            src={imgArray[imgNo]}
            alt=""
          />
        )}
      </div>
    </animated.div>
  );
}
