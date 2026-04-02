import RoleToggle from "./RoleToggle";
import { useApp } from "../context/AppContext";

const Header = () => {
  const { role } = useApp();

  return (
    <div className="navbar header-bar">
      <h2>Finance Dashboard</h2>

      <div className="header-right">
        <span className="role-text">Role: {role}</span>
        <RoleToggle />
      </div>
    </div>
  );
};

export default Header;