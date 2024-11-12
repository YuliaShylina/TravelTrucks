import css from "./StarsArr.module.css";
import sprite from "../../assets/sprite.svg";

export default function StarsArr({ count }) {
  const totalStars = 5;

  const stars = Array.from({ length: totalStars }, (_, index) => {
    return index < count ? (
      <svg key={index} className={css.star}>
        <use href={`${sprite}#icon-rating-1`} />
      </svg>
    ) : (
      <svg key={index} className={css.star}>
        <use href={`${sprite}#icon-rating`} />
      </svg>
    );
  });

  return <div className={css.container}>{stars}</div>;
}