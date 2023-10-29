import { useState } from "react";
import "./App.css";
import BookAppointment from "./components/book-appointment/book-appointment";
import { AboutHospital } from "./components/about-hospital/about-hospital";
import { OurDoctors } from "./components/our-doctors/our-doctors";
import { HospitalTreatment } from "./components/hospital-tritment/hospital-treatment";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import Banner from "./components/banner/banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <BookAppointment />
      <AboutHospital />
      <OurDoctors />
      <HospitalTreatment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
