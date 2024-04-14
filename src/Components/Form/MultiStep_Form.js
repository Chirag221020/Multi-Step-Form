import { BrowserRouter , Route, Routes } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import Profile from "../Profile/Profile";
import Options from "../Options/Options";
import Navbar from "../Navbar/Navbar";
function MultiStep_Form() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Page1" element={<SignIn />} />
        <Route path="/Page2" element={<Profile />} />
        <Route path="/Page3" element={<Options />} />
        <Route path="/home" element={<Navbar />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MultiStep_Form;
