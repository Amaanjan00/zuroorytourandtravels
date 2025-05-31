import Header from "./Components/Header"
import Video from "./Pages/Home/Video"
import PackageInclusions from "./Pages/Home/PackageInclusions"
import Information from "./Pages/Home/Information"
import MakkahZiyarat from "./Pages/Home/MakkahZiyarat"
import MadinahZiyarat from "./Pages/Home/MadinahZiyarat"
import Pricing from "./Pages/Home/Pricing"
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
