import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact pt-56">
      <div className="nav_text text-center w-1/2 mr-auto m-auto py-32">
        <h1 className="text-7xl font-bold">Create Wonderful Landing Page</h1>
        <p className="text-gray-500 my-10 text-lg">
          We are LeSigma agency, our strategists will help you set an objective
          and choose your tools, developing a plan that is custom built for your
          business.
        </p>
        <NavLink
          className="account py-4 px-8 text-white hover:bg-black"
          to="/accuont"
        >
          Grap Your Account
        </NavLink>
      </div>
      <div className="svg my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="192"
          viewBox="0 0 1920 192"
          preserveAspectRatio="none"
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
        </svg>
      </div>
    </div>
  );
};

export default Contact;
