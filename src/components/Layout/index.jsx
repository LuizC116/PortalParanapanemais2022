import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header/index";
import "./styles.css";

export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
