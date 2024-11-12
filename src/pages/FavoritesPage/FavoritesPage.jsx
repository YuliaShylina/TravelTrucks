import { useSelector } from "react-redux";
import { selectFavoriteList } from "../../redux/favorite/slice.js";
import TruckListFavorites from "../../components/TruckListFavorites/TruckListFavorites.jsx";
import css from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const favorites = useSelector(selectFavoriteList);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Your Favorite Trucks</h2>
      {favorites.length > 0 ? (
        <TruckListFavorites />
      ) : (
        <p className={css.message}>You have no favorite trucks yet.</p>
      )}
    </div>
  );
}
