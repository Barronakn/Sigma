import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-10">
      <div className="footerTop flex justify-between ml-32 mr-52 mb-32">
        <div>
          <img className="w-10 h-10" src="./favicon.png" alt="" />
        </div>
        <div className="text-lg text-gray-500">
          <NavLink className="gray" to="#">
            support@Lesigma.com
          </NavLink>
          <p>12 main street PT. London</p>
        </div>
        <div className="tel flex gap-5">
          <img className="w-10 h-10" src="./calling-svgrepo-com.svg" alt="" />
          <NavLink className="unique text-3xl font-bold" to="#">
            +25 485 685 245
          </NavLink>
        </div>
        <div className="flex gap-5 text-xl font-bold text-gray-500">
          <NavLink className="gray" to="#">
            <img
              className="w-5 h-5"
              src="./facebook-176-svgrepo-com.svg"
              alt=""
            />
          </NavLink>
          <NavLink className="gray" to="#">
            <img
              className="w-5 h-5"
              src="./twitter-logo-shape-svgrepo-com.svg"
              alt=""
            />
          </NavLink>
          <NavLink className="gray" to="#">
            <img
              className="w-5 h-5"
              src="./basketball-ball-outline-svgrepo-com.svg"
              alt=""
            />
          </NavLink>
          <NavLink className="gray" to="#">
            <img
              className="w-5 h-5"
              src="./behance-163-svgrepo-com.svg"
              alt=""
            />
          </NavLink>
        </div>
      </div>
      <div className="footerBottom text-center text-gray-500">
        <p>
          {" "}
          2020 ©{" "}
          <NavLink className="unique" to="#">
            Zytheme
          </NavLink>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
