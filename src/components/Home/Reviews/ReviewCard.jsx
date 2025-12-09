import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  const {
    user_photoURL,
    userName,
    user_email,
    review: reviewText,
    ratings,
    date,
  } = review;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const stars = Array.from({ length: Math.round(ratings) }, (_, i) => (
    <FaStar key={i} className="text-purple-400 inline" />
  ));

  return (
    <div className="max-w-sm bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-purple-500 text-3xl" />

      {/* Review Text */}
      <p className="text-gray-600 text-sm mt-4 leading-relaxed">{reviewText}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div>
          <img
            className="w-10 h-10 rounded-full"
            src={user_photoURL}
            alt={userName}
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">{user_email}</p>
          <p className="text-xs text-purple-400">Rating: {stars}</p>
          <p className="text-xs text-gray-400">Reviewed on: {formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
