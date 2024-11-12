import StarsArr from "../StarsArr/StarsArr.jsx";
import css from "./ReviewsList.module.css";

export default function ReviewsList({ data }) {
  return (
    <>
      {data ? (
        <div className={css.container}>
          <div className={css.reviewerInfo}>
            <div className={css.reviewerAvatar}>
              {data.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={css.reviewerDetails}>
              <p className={css.reviewerName}>{data.reviewer_name}</p>
              <StarsArr count={data.reviewer_rating} />
            </div>
          </div>
          <p className={css.reviewText}>{data.comment}</p>
        </div>
      ) : null}
    </>
  );
}
