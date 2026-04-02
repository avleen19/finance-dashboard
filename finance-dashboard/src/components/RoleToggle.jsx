import { useApp } from "../context/AppContext";

const RoleToggle = () => {
  const { role, setRole } = useApp();

  return (
    <select value={role} onChange={(e) => setRole(e.target.value)}>
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default RoleToggle;