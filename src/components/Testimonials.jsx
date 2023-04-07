import { useState } from "react";

const items = [
  {
    id: 0,
    citation:
      " This should be used to tell a story and include any testimonials you might have about your product or service for your clients ",
    author: "Vera Ducan0",
    profession: "Digital Marketing Manager",
  },
  {
    id: 1,
    citation:
      " This should be used to tell a story and include any testimonials you might have about your product or service for your clients ",
    author: "Vera Ducan1",
    profession: "Digital Marketing Manager",
  },
  {
    id: 2,
    citation:
      " This should be used to tell a story and include any testimonials you might have about your product or service for your clients ",
    author: "Vera Ducan2",
    profession: "Digital Marketing Manager",
  },
  {
    id: 3,
    citation:
      " This should be used to tell a story and include any testimonials you might have about your product or service for your clients ",
    author: "Vera Ducan3",
    profession: "Digital Marketing Manager",
  },
  {
    id: 4,
    citation:
      " This should be used to tell a story and include any testimonials you might have about your product or service for your clients ",
    author: "Vera Ducan4",
    profession: "Digital Marketing Manager",
  },
  {
    id: 5,
    citation:
      " This should be used to tell a story and include any testimonials you might have about your product or service for your clients ",
    author: "Vera Ducan5",
    profession: "Digital Marketing Manager",
  },
];

const slidesPerPage = 1;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * slidesPerPage;
  const endIndex = startIndex + slidesPerPage;

  const currentSlides = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / slidesPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
  };
  return (
    <>
      <div className="testimonials py-32 px-28">
        <div className="mr-auto ml-auto">
          <img
            className="quote mr-auto ml-auto"
            src="./quote-icon.svg"
            alt=""
          />
        </div>

        {totalPages > 1 && (
          <>
            <div className="controls flex">
              <img
                className="arrow w-10 h-10 cursor-pointer"
                disabled={currentPage === 0}
                onClick={handlePrevClick}
                src="./arrowLeft.svg"
                alt="ArrowLeft"
              />
              <div className="slides text-center">
                {currentSlides.map((item) => (
                  <div key={item.id} className="slide">
                    <h1 className="text-3xl font-bold leading-10 mt-16">
                      {" "}
                      "{item.citation}"{" "}
                    </h1>
                    <h2 className="author text-xl mt-7 font-bold">
                      {" "}
                      -{item.author}{" "}
                    </h2>
                    <p className="text-gray-500"> {item.profession} </p>
                  </div>
                ))}
              </div>
              <img
                className="arrow w-10 h-10 cursor-pointer"
                disabled={currentPage === 0}
                onClick={handleNextClick}
                src="./arrowRight.svg"
                alt="ArrowRight"
              />
            </div>
            {/* <div className="images">
              <img src="./avatar-1.png" alt="" />
              <img src="./avatar-2.png" alt="" />
              <img src="./avatar-3.png" alt="" />
              <img src="./avatar-4.png" alt="" />
              <img src="./avatar-5.png" alt="" />
              <img src="./avatar-3.png" alt="" />
            </div> */}
          </>
        )}
      </div>
      <svg
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

export default Testimonials;
