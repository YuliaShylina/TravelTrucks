import css from "./TruckItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteList } from "../../redux/favorite/selectors.js";
import { toggleFavorite } from "../../redux/favorite/slice.js";
import sprite from "../../assets/sprite.svg";
import TruckOptions from "../TruckOptions/TruckOptions.jsx";

export default function TruckItem({ data }) {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteList);
  const isFavorite = favoriteList.includes(data.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(data.id));
  };

  return (
    <div className={css.container}>
      <img src={data.gallery[0].thumb} alt="photo" className={css.photo} />
      <div className={css.data}>
        <div className={css.head}>
          <h2 className={css.name}>{data.name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.price}>€{data.price}.00</p>
            <div onClick={handleFavoriteClick}>
              <svg width="26" height="24">
                <use
                  href={`${sprite}#${
                    isFavorite
                      ? "icon-Property-1pressed"
                      : "icon-Property-1Default"
                  }`}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={css.rating}>
          <span className={css.text}>
            <div className={css.star}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-rating-1`} />
              </svg>
            </div>
            {`${data.rating}(${data.reviews.length} Reviews)`}
          </span>
          <span className={css.location}>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-rating`} />
            </svg>
            {data.location}
          </span>
        </div>

        <p className={css.description}>{data.description}</p>
        <TruckOptions data={data} />
        <Link to={`/catalog/${data.id}`} className={css.showMoreBtn}>
          Show more
        </Link>
      </div>
    </div>
  );
}
