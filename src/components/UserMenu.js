import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUserMinus } from "react-icons/fa";
import { useGlobalContext } from "../context";
function UserMenu() {
  const { showUserMenu, coords } = useGlobalContext();
  const { logout, user } = useAuth0();
  const container = React.useRef(null);

  React.useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = coords;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [coords]);

  return (
    <aside className={`user-menu ${showUserMenu && "show"}`} ref={container}>
      <div className="user-menu-center">
        <button className="btn user-btn logout-icon" onClick={() => logout()}>
          <span>Log out</span> <FaUserMinus />
        </button>
      </div>
    </aside>
  );
}

export default UserMenu;
