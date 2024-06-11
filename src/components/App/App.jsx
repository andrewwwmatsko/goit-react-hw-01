import userData from "../../userData.json";
import Profile from "../Profile/Profile";

export default function App() {
  return (
    <>
      <Profile userData={userData} />
    </>
  );
}
