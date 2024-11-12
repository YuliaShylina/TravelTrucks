import css from "./LocationFilter.module.css";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/filter/selectors.js";
import { setLocation } from "../../redux/filter/slice.js";

export default function LocationFilter() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  function handleEnterLocation(e) {
    const value = e.target.value.trim();
    dispatch(setLocation(value));
  }

  function clearLocation() {
    dispatch(setLocation(""));
  }

  return (
    <div className={css.locationFilterContainer}>
      <label htmlFor="location" className={css.locationLabel}>
        Location
      </label>

      <div className={css.locationIcon}>
        {location ? (
          <div className={css.activeLocationIcon}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-map`} />
            </svg>
          </div>
        ) : (
          <div className={css.inactiveLocationIcon}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-Map-2`} />
            </svg>
          </div>
        )}
      </div>

      <input
        type="text"
        id="location"
        className={css.locationInputField}
        placeholder="City"
        onChange={handleEnterLocation}
        value={location}
        list="city-list"
      />

      {location && (
        <button className={css.clearButton} onClick={clearLocation}>
          Clear location
        </button>
      )}

      <datalist id="city-list">
        <option value="Dnipro" />
        <option value="Kharkiv" />
        <option value="Kyiv" />
        <option value="Lviv" />
        <option value="Poltava" />
        <option value="Sumy" />
        <option value="Odesa" />
      </datalist>
    </div>
  );
}
