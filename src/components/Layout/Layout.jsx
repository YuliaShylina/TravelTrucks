import { Toaster } from "react-hot-toast";
import css from "./Layout.module.css";
import NavBar from "../NavBar/NavBar.jsx";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <NavBar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
