import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/carousel">Carousel</NavLink>
        </nav>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
