import About from "./components/About/About"
import Appointment from "./components/Appointment/Appointment"
import Banner from "./components/Banner/Banner"
import Comprehensive from "./components/Comprehensive/Comprehensive"
import Footer from "./components/Footer/Footer"
import Frequently from "./components/Frequently/Frequently"
import Health from "./components/Health/Health"
import NavBar from "./components/NavBer/NavBar"
import Solutions from "./components/Solutions/Solutions"

function App() {
  return (
    <div className="bg-gray-100">
      <div className="w-[90%] mx-auto  ">
        <div className="p-14">
          <NavBar />
        </div>

        <div className="mt-14 text-center ">
          <Banner />
          <Comprehensive />
          <Solutions />
          <Health />
          <About />
          <Frequently />
          <Appointment />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
