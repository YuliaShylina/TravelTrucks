import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleFilter from "../VehicleFilter/VehicleFilter.jsx";
import css from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={css.container}>
      <LocationFilter />
      <VehicleFilter />
    </div>
  );
}
