import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Compteur = () => {
  const initial_1 = useMotionValue(2586);
  const compte_1 = useTransform(initial_1, Math.round);
  useEffect(() => {
    const animation = animate(initial_1, 5792, { duration: 1 });
    return animation.stop;
  }, []);
  const initial_2 = useMotionValue(3455);
  const compte_2 = useTransform(initial_2, Math.round);
  useEffect(() => {
    const animation = animate(initial_2, 9657, { duration: 1 });
    return animation.stop;
  }, []);
  const initial_3 = useMotionValue(65);
  const compte_3 = useTransform(initial_3, Math.round);
  useEffect(() => {
    const animation = animate(initial_3, 218, { duration: 1 });
    return animation.stop;
  }, []);
  const initial_4 = useMotionValue(2586);
  const compte_4 = useTransform(initial_4, Math.round);
  useEffect(() => {
    const animation = animate(initial_4, 8274, { duration: 1 });
    return animation.stop;
  }, []);
  return (
    <>
      <div className="compteur flex justify-center items-center mx-32 pt-44 gap-5">
        <div className="compte flex gap-5 justify-center items-center text-center">
          <img className="w-16 h-16" src="./project.svg" alt="" />
          <div className="compteur_text">
            <motion.h1 className="text-4xl font-bold">{compte_1}</motion.h1>
            <p className="text-gray-500">Project</p>
          </div>
        </div>
        <div className="compte flex gap-5 justify-center items-center text-center">
          <img className="w-16 h-16" src="./client.svg" alt="" />
          <div className="compteur_text">
            <motion.h1 className="text-4xl font-bold">{compte_2}</motion.h1>
            <p className="text-gray-500">Clients</p>
          </div>
        </div>
        <div className="compte flex gap-5 justify-center items-center text-center">
          <img className="w-16 h-16" src="./award.svg" alt="" />
          <div className="compteur_text">
            <motion.h1 className="text-4xl font-bold">{compte_3}</motion.h1>
            <p className="text-gray-500">Awards Won</p>
          </div>
        </div>
        <div className="compte flex gap-5 justify-center items-center text-center">
          <img className="w-16 h-16" src="./time.svg" alt="" />
          <div className="compteur_text">
            <motion.h1 className="text-4xl font-bold">{compte_4}</motion.h1>
            <p className="text-gray-500">Time</p>
          </div>
        </div>
      </div>
      <svg
        className="relative top-48"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="192"
        viewBox="0 0 1920 192"
        preserveAspectRatio="none"
      >
        <g
          id="Shape_Top"
          data-name="Shape Top"
          transform="translate(1920 192) rotate(180)"
        >
          <path
            data-name="Path 2449"
            d="M1920,192V0L0,192Z"
            fill="rgba(255,255,255,0.33)"
          ></path>
          <path
            data-name="Path 2450"
            d="M1920,165.96V3.72L0,165.96Z"
            transform="translate(0 26.04)"
            fill="#fff"
          ></path>
          <path
            data-name="Path 2451"
            d="M1920,178.07V1.99L0,178.07Z"
            transform="translate(0 13.93)"
            fill="rgba(255,255,255,0.33)"
          ></path>
        </g>
      </svg>
    </>
  );
};

export default Compteur;
