import css from "./TruckTitle.module.css";
import sprite from "../../assets/sprite.svg";
import { useSelector } from "react-redux";
import { selectTruck } from "../../redux/catalog/selectors.js";

export default function TruckTitle() {
  const data = useSelector(selectTruck);

  return (
    <>
      {data ? (
        <div className={css.container}>
          <h2 className={css.name}>{data.name}</h2>
          <div className={css.rating}>
            <span className={css.text}>
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-rating-1 `} />
              </svg>
              <span className={css.reviews}>{`${data.rating}(${
                data.reviews ? data.reviews.length : null
              } Reviews)`}</span>
            </span>
            <span className={css.location}>
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-map`} />
              </svg>
              {data.location}
            </span>
          </div>
          <p className={css.price}>€{data.price}.00</p>
        </div>
      ) : null}
    </>
  );
}
