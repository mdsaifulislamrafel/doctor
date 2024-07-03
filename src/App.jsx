import About from "./components/About/About"
import Appointment from "./components/Appointment/Appointment"
import Banner from "./components/Banner/Banner"
import Comprehensive from "./components/Comprehensive/Comprehensive"
import Frequently from "./components/Frequently/Frequently"
import Health from "./components/Health/Health"
import NavBar from "./components/NavBer/NavBar"
import Solutions from "./components/Solutions/Solutions"

function App() {
  return (
    <div className="bg-gray-100">
      <div className="w-[90%] mx-auto p-14 ">
        <NavBar />

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
    </div>
  )
}

export default App
