const Feature = () => {
  return (
    <>
      <div className="feature flex px-32 gap-32 py-32">
        <div className="left w-1/2">
          <img src="./illustration-2.png" alt="" />
        </div>
        <div className="right w-1/2">
          <h1 className="text-4xl font-bold">
            Control Everything From Your Landing Page
          </h1>
          <p className="text-md mt-3 text-gray-500">
            This should be used to tell a story and let your users know more
            about your service. How can you benefit them?
          </p>
          <div className="flex gap-8 w-1/2 ml-auto mr-auto mt-20">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Market Research</h1>
              <p className="text-md mt-3 text-gray-500">
                This should be used to tell a story and let your users know more
                about your service.
              </p>
            </div>
          </div>
          <div className="flex gap-8 w-1/2 ml-auto mr-auto">
            <div>
              <img src="" alt="" />
            </div>
            <div className="mt-8">
              <h1 className="text-2xl font-bold">Creative Ideas</h1>
              <p className="text-md mt-3 text-gray-500">
                This should be used to tell a story and let your users know more
                about your service.
              </p>
            </div>
          </div>
        </div>
      </div>
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
          fill="#fff4f0"
        ></path>
      </svg>
    </>
  );
};

export default Feature;
