import { Outlet} from "react-router-dom";


const Layout = () => (
  <div className="Layout">
    <nav>
      <h1>Jófogás</h1>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
