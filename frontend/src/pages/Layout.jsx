import { Outlet} from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {



  return (
    <div className="Layout">
      <nav>
        <h1>Jófogás</h1>
        <Link to="/login">
            <button type="button">Login</button>
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout;
