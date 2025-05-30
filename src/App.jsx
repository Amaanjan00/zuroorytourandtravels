import Header from "./Components/Header"
import Video from "./Pages/Home/Video"
import PackageInclusions from "./Pages/Home/PackageInclusions"
import Information from "./Pages/Home/Information"
import MakkahZiyarat from "./Pages/Home/MakkahZiyarat"
import MadinahZiyarat from "./Pages/Home/MadinahZiyarat"
import Pricing from "./Pages/Home/Pricing"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
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
