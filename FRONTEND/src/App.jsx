

import "./assets/css/global.css";
import HomaePage from "./pages/Home";
import SecondaryPage from "./pages/Secondary";
import DisplayPage from "./pages/Display";
import GaneshArti from "./pages/GaneshArti";
import KaliArti from "./pages/KaliArti";
import HanumanArti from "./pages/HanumanArti";
import DurgaArti from "./pages/DurgaArti";
import ShivArti from "./pages/ShivArti";
import JagdishArti from "./pages/JagdishArti";
import KrishnaArti from "./pages/KrishnaArti";
import SaraswatiArti from "./pages/SaraswatiArti";
import BhariavArti from "./pages/BhariavArti";
import LakshmiArti from "./pages/LakshmiArti";
import GaneshChalisa from "./pages/GaneshChalisa";


function App() {
  return (
    <>
    

      <HomaePage />
      <SecondaryPage />
      {/* <DisplayPage /> */}
      <BhariavArti/>
      <DurgaArti/>
      <GaneshArti/>
      <HanumanArti/>
      <JagdishArti/>
      <KaliArti/>
      <KrishnaArti/>
      <LakshmiArti/>
      <SaraswatiArti/>
      <ShivArti/>
      <GaneshChalisa/>


      
     
    </>
  );
}

export default App;
