import { FaStar } from "react-icons/fa";

const StartRate = ({ rating }) => {
  return (
    <div className="my-4 flex flex-row items-center justify-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={30}
          color={index + 1 <= rating ? "#F3BA16" : "#81807E"}
        />
      ))}
    </div>
  );
};

export default StartRate;
