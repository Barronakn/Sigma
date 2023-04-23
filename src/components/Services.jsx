import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="services z-0 flex gap-32 px-32" id="services">
        <div className="left w-1/2 mt-10">
          <h1 className="text-4xl font-bold">
            Making You Explore The Hidden Features
          </h1>
          <p className="text-md mt-3 text-gray-500">
            This should be used to tell a story and let your users know more
            about your service. How can you benefit them?
          </p>
          <div className="mt-14 font-bold">
            <div className="flex justify-between">
              <h2>Ui design</h2>
              <h2>99%</h2>
            </div>
            <div className="percent">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "99%" }}
                transition={spring}
              >
                <div className="progress"></div>
              </motion.div>
            </div>
          </div>
          <div className="mt-14 font-bold">
            <div className="flex justify-between">
              <h2>App development</h2>
              <h2>85%</h2>
            </div>
            <div className="percent">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "85%" }}
                transition={spring}
              >
                <div className="progress"></div>
              </motion.div>
            </div>
          </div>
          <div className="mt-14 font-bold">
            <div className="flex justify-between">
              <h2>Coroprate identity</h2>
              <h2>65%</h2>
            </div>
            <div className="percent">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "65%" }}
                transition={spring}
              >
                <div className="progress"></div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="right w-1/2">
          <img src="./illustration-1.png" alt="" />
        </div>
      </div>
      <svg
        className="z-0"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="192"
        viewBox="0 0 1920 192"
        preserveAspectRatio="none"
      >
        <g transform="translate(1920 192) rotate(180)">
          <path
            data-name="Path 2449"
            d="M1920,192V0L0,192Z"
            fill="#fff4f0"
          ></path>
        </g>
      </svg>
    </>
  );
};

const spring = {
  type: "spring",
};

export default Services;
