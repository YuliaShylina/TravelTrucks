import { useSelector } from "react-redux";
import { selectFavoriteList } from "../../redux/favorite/slice.js";
import TrucksList from "../../components/TrucksList/TrucksList.jsx";
import css from "./TruckListFavorites.module.css";

export default function TruckListFavorites() {
  const favorites = useSelector(selectFavoriteList);

  return (
    <div className={css.container}>
      {favorites.length > 0 ? (
        <TrucksList trucks={favorites} />
      ) : (
        <p className={css.message}>You have no favorite trucks yet.</p>
      )}
    </div>
  );
}
