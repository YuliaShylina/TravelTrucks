import { useSelector } from "react-redux";
import css from "./TruckFeatures.module.css";
import { selectTruck } from "../../redux/catalog/selectors.js";
import TruckOptions from "../TruckOptions/TruckOptions.jsx";
import VehicleDetails from "../VehicleDetails/VehicleDetails.jsx";

export default function TruckFeatures() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={css.container}>
          <TruckOptions data={data} />
          <VehicleDetails />
        </div>
      ) : null}
    </>
  );
}
