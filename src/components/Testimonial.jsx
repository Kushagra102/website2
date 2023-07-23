import { useEffect, useState } from "react";
import Header from "./Header";

const testimonials = [
  {
    id: 1,
    name: "LetMe Learn",
    text: "I give 5 ⭐ to this app because it is very useful for competitive programmes. My favourite feature is leaderboard where I can track my progress as well as my friends progress it helps us in pair programming. Request Feature: contest Reminder",
    image: "boy.png",
  },
  {
    id: 2,
    name: "Manav Thakkar",
    text: "Very helpful app for keeping track of contests for people interested in competitive coding...Kudos to the creator 👏👏👏",
    image: "girl.jpg",
  },
  {
    id: 3,
    name: "Kathan Patel",
    text: "✨Must try this app, This is very useful app for programmers they can track their progress from different different coding platforms. They also ask their friends for any problem by chat feature.✨",
    image: "boy.png",
  },
  {
    id: 4,
    name: "Nirbhay Tejani",
    text: "I use this app to see app upcoming contest and to track my progress...",
    image: "girl.jpg",
  },
  {
    id: 5,
    name: "Dharmesh Vala",
    text: "Hey parsana tech, That's an osm app. This is helpful to coding peers or we can say it was one time remainder for coding contest. Nice try keep it bro...",
    image: "boy.png",
  },
  {
    id: 6,
    name: "Darsh Pandya",
    text: "Very good app especially for coders.",
    image: "girl.jpg",
  },
  {
    id: 7,
    name: "Michaele Brown",
    text: "As an experienced developer, CrazyCoder has provided me with a platform to share my knowledge and contribute to the growth of others. Mentoring aspiring programmers and giving back to the community has been fulfilling and rewarding.",
    image: "boy.png",
  },
];

const Testimonial = ({ testimonial }) => (
  <div className="bg-gray-100 rounded-[50px] w-full delay-150 duration-300 p-10 hover:scale-110 md:m-6 m-2 mt-8 h-100 border-2 border-white">
    <p className="text-black">{testimonial.text}</p>
    <div className="flex items-center mt-4">
      <div className="">
        <img
          className="w-12 h-12 rounded-full"
          src={testimonial.image}
          alt={testimonial.name}
        />
      </div>
      <div className="ml-4">
        <div className="text-black font-medium">{testimonial.name}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [numVisible, setNumVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setNumVisible(1);
      } else if (screenWidth < 768) {
        setNumVisible(2);
      } else {
        setNumVisible(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleTestimonials = testimonials.slice(current, current + numVisible);

  const goToPrev = () => {
    if (current === 0) {
      setCurrent(testimonials.length - numVisible);
    } else {
      setCurrent(current - 1);
    }
  };

  const goToNext = () => {
    if (current === testimonials.length - numVisible) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="py-10 px-5">
      <Header name="Testimonials" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center mb-6 gap-6">
          <button
            onClick={goToPrev}
            className="bg-gray-100 text-purple-600 rounded-full p-4 flex justify-center items-center ml-2"
          >
            {"<"}
          </button>
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
          <button
            onClick={goToNext}
            className="bg-gray-100 text-purple-600 rounded-full p-4 flex justify-center items-center ml-10"
          >
            {">"}
          </button>
          <div className="w-2 " />
        </div>
        <div className="flex justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`h-2 w-2 rounded-full mx-2 bg-purple-600 ${
                current === index ? "bg-gray-400" : "bg-gray-900"
              }`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
