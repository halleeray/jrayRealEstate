import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { togglePropertySave } from "../redux/saveSlice";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import "../assets/css/SaveButton.css";

interface Props {
  propertyId: string;
}

function SaveButton({ propertyId }: Props) {
  const properties = useSelector((state: RootState) => state.saves.properties);
  const saved = properties.some(
    (property) => property.id === propertyId && property.saved
  );
  const dispatch = useDispatch();

  const handleToggleSave = () => {
    dispatch(togglePropertySave(propertyId));
  };

  return (
    <div>
      <span onClick={handleToggleSave} className="icon-container">
        {saved ? (
          <FaHeart className="likedheart" />
        ) : (
          <FaRegHeart className="unlikedheart" />
        )}
      </span>
    </div>
  );
}

export default SaveButton;
