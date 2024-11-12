import { useSelector } from "react-redux";
import css from "./TruckPicture.module.css";
import { selectTruck } from "../../redux/catalog/selectors.js";

export default function TruckPhotos() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={css.container}>
          {data.gallery
            ? data.gallery.map((item, index) => (
                <img
                  src={item.original}
                  alt="truck photo"
                  key={index}
                  className={css.photo}
                />
              ))
            : null}
        </div>
      ) : null}
    </>
  );
}
