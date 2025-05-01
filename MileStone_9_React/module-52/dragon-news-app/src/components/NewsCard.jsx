import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, thumbnail_url, details } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl mb-5">
      {/* Header */}
      <div className="flex justify-between items-center p-4  bg-base-200 rounded-xl ">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700">
          {details.length > 250 ? details.slice(0, 250) + "..." : details}
        </p>
        {details.length > 250 && (
          <button className="text-orange-500 font-medium mt-2">
            Read More
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t border-t-gray-300 text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          <FaStar />
          <span className="font-medium text-gray-800">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span className="font-medium text-gray-800">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
