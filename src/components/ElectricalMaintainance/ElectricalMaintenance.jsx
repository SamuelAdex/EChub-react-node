import React from "react";
import HowItWorks from "../Reusable/HowItWorks/HowItWorks";
import styles from "./electrical.module.css";
import img1 from "../../assets/electricalImages/img1.png";
import img2 from "../../assets/electricalImages/img2.png";
import img3 from "../../assets/electricalImages/img3.png";
import img4 from "../../assets/electricalImages/img4.png";
import img5 from "../../assets/electricalImages/img5.png";
import img6 from "../../assets/electricalImages/img6.png";
import starrate from "../../assets/electricalImages/star_rate.png";
import Footer from "../Footer";
import Services from "../Reusable/Services/Services";
import Customers from "../Reusable/Customers/Customers";


const ElectricalMaintenance = () => {
  const { Container, Landing, projects, customers,underline } = styles;
  return (
    <>
      <main className={Container}>
        <section className={Landing}>
          <div>
            <h5>Switch to Competence</h5>
            <h1>Fix all damaged unit, get certified artisans within minutes</h1>
            <ul>
              <li>Power issues</li>
              <li>installation and wiring </li>
              <li>Repairs and replacment</li>
              <li>Lighting and metering issues </li>
            </ul>
            <button type="button">I want a technician now </button>
          </div>
        </section>
        <HowItWorks />
        <section className={projects}>
          <h2>Projects</h2>
          <div className="three-grid_reusable">
            <article>
              <img src={img1} alt="electrical cables" />
            </article>
            <article>
              <img src={img2} alt="electrical cables" />
            </article>
            <article>
              <img src={img3} alt="electrical cables" />
            </article>
            <article>
              <img src={img4} alt="electrical cables" />
            </article>
            <article>
              <img src={img5} alt="electrical cables" />
            </article>
            <article>
              <img src={img6} alt="electrical cables" />
            </article>
          </div>
          <Customers/>
        
        </section>
        <section>
        <h2 className={underline}>Our other Services </h2>
        <Services />

        </section>
        
      </main>
      <Footer />
    </>
  );
};

export default ElectricalMaintenance;
