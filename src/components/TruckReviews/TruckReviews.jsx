import { useSelector } from "react-redux";
import css from "./TruckReviews.module.css";
import { selectTruck } from "../../redux/catalog/selectors.js";
import ReviewsList from "../ReviewsList/ReviewsList.jsx";

export default function TruckReviews() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={css.conatiner}>
          {data.reviews
            ? data.reviews.map((item, index) => (
                <ReviewsList data={item} key={index} />
              ))
            : null}
        </div>
      ) : null}
    </>
  );
}
