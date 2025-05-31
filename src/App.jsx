import Header from "./Components/Header"
import Video from "./Pages/Home/Sections/Video"
import PackageInclusions from "./Pages/Home/Sections/PackageInclusions"
import Information from "./Pages/Home/Sections/Information"
import MakkahZiyarat from "./Pages/Home/Sections/MakkahZiyarat"
import MadinahZiyarat from "./Pages/Home/Sections/MadinahZiyarat"
import Pricing from "./Pages/Home/Sections/Pricing"
import Footer from "./Components/Footer"
import Whatsapp from "./Components/Whatsapp"

function App() {

  return (
    <>
      <Whatsapp/>
      <Header/>
      <Video/>
      <PackageInclusions/>
      <Information/>
      <MakkahZiyarat/>
      <MadinahZiyarat/>
      <Pricing/>
      <Footer/>
    </>
  )
}

export default App
