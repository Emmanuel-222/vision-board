import { useState, useEffect } from "react";
import propType from "prop-types";

const Card = ({
  id, // Unique ID for each card
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  width,
  minWidth,
  height,
  minHeight,
}) => {
  const [image, setImage] = useState(null);

  // Load saved image for this specific card from localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem(`card-image-${id}`);
    if (savedImage) {
      setImage(savedImage);
    }
  }, [id]);

  // Handle Image Upload and Save to localStorage
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        localStorage.setItem(`card-image-${id}`, reader.result); // Store with unique key
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`bg-white rounded-[32px] flex flex-col justify-center items-center ${
        image
          ? "border-none"
          : "border-2 border-dashed border-gray-300 px-10 py-10"
      }`}
      style={{
        gridRow: `${rowStart} / ${rowEnd}`,
        gridColumn: `${colStart} / ${colEnd}`,
        width: `${width}px`,
        height: `${height}px`,
        minWidth: `${minWidth}px`,
        minHeight: `${minHeight}px`,
      }}
    >
      {image ? (
        <div className="w-full h-full relative flex items-centre">
          <img
            src={image}
            alt="Uploaded vision"
            className="w-full h-full object-cover rounded-[24px]"
          />
          <button
            onClick={() => {
              setImage(null);
              localStorage.removeItem(`card-image-${id}`); // Remove from storage
            }}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg"
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <input
            id={`file-upload-${id}`}
            accept="image/*"
            className="hidden"
            type="file"
            onChange={handleImageUpload}
            capture="environment"
          />
          <label
            htmlFor={`file-upload-${id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Take Photo
          </label>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  id: propType.string.isRequired, // Ensure each card has a unique ID
  rowStart: propType.number.isRequired,
  rowEnd: propType.number.isRequired,
  colStart: propType.number.isRequired,
  colEnd: propType.number.isRequired,
  width: propType.string.isRequired,
  minWidth: propType.string.isRequired,
  height: propType.string.isRequired,
  minHeight: propType.string.isRequired,
};

export default Card;
