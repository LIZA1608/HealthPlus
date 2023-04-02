import React, { useState, useEffect } from 'react';
import axios from "../../config/axios";
import '../../styles/Home.css';
import image1 from '../../assets/logo/patientregistration.avif' 
import image2 from "../../assets/logo/Healthregistration.avif"
import image3 from "../../assets/logo/HealthCare Professional Registration.png"
import image4 from"../../assets/logo/blooddonation.png";
import image5 from "../../assets/images/patient-registration-no--homepage.jpeg"
import image6 from "../../assets/images/Health-facility-registry-homepage.jpeg"
import image7 from "../../assets/images/Health-care-professionals-registry-homepage.jpeg"
import image8 from "../../assets/images/blooddonation-camp-homepage.jpg"
function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabContent = [
    {
      id: 1,
      title: 'Paitent Registration Number',
      image: image1,
      content: (
        <div className="tab-content-wrapper">
          <div className="tab-content-image">
            <img src={image5} alt="Patient" />
          </div>
          <div className="tab-content-text">
            <p>
              Patient registration on a healthcare website involves collecting personal and medical information to initiate medical care. This process helps healthcare providers maintain accurate records, track medical histories, and monitor treatments. By registering as a patient, individuals can ensure timely and effective medical care, while healthcare providers can deliver quality services.
            </p>
          </div>
        </div>
      ),
    },
      // content: 'Tab 1 Content',
    ///},
    {
      id: 2,
      title: 'Health Facility Registration',
      image: image2,
      //content: 'Tab 2 Content',
      content: (
        <div className="tab-content-wrapper">
          <div className="tab-content-image">
            <img src={image6} alt="Patient" />
          </div>
          <div className="tab-content-text">
            <p>
            The Health Facility Registry is a comprehensive repository of all the country's health facilities across various medical systems. It encompasses both public and private health facilities, such as hospitals, clinics, diagnostic laboratories and imaging centres, pharmacies, and so on.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'HealthCare Professional Registration ',
      image: image3,
      //content: 'Tab 3 Content',
      content: (
        <div className="tab-content-wrapper">
          <div className="tab-content-image">
            <img src={image7} alt="Patient" />
          </div>
          <div className="tab-content-text">
            <p>
              Patient registration on a healthcare website involves collecting personal and medical information to initiate medical care. This process helps healthcare providers maintain accurate records, track medical histories, and monitor treatments. By registering as a patient, individuals can ensure timely and effective medical care, while healthcare providers can deliver quality services.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Blood Donation ',
      image: image4,
    //  content: 'Tab  Content',
    content: (
      <div className="tab-content-wrapper">
        <div className="tab-content-image4">
          <img src={image8} alt="Patient" />
        </div>
        <div className="tab-content-text">
          <p>
            Patient registration on a healthcare website involves collecting personal and medical information to initiate medical care. This process helps healthcare providers maintain accurate records, track medical histories, and monitor treatments. By registering as a patient, individuals can ensure timely and effective medical care, while healthcare providers can deliver quality services.
          </p>
        </div>
      </div>
    ),
    },
  ];

  const [userCount, setUserCount]= useState(null);
  const [professionalsCount, setProfessionalsCount]= useState(null);
  const [facilityCount, setFacilityCount]= useState(null);
  const [campCount, setCampCount]= useState(null);


  async function fetchUserCount() {
    const response = await axios.get("/api/analysis");
    setUserCount(response.data.countRecipient);
    setProfessionalsCount(response.data.countProfessionals);
    setFacilityCount(response.data.countFacilities);
    setCampCount(response.data.countCamps);
    
  }

  useEffect(() => {
    fetchUserCount();
    const interval = setInterval(fetchUserCount, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
    <div className="Homecontainer">
      <div className="top-section">
        {tabContent.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <img src={tab.image} alt={tab.title} />
            <h3>{tab.title}</h3>
          </div>
        ))}
      </div>
      <div className="bottom-section">
        {tabContent.map((tab) => (
          <div
            key={tab.id}
            className={`content ${activeTab === tab.id ? 'active' : ''}`}
          >
            <p>{tab.content}</p>
            
          </div>
        ))}
      </div>
    </div>
    <div>
      Number Of Recipients Registered: {userCount}
      Number Of Health Professionals Registered: {professionalsCount}
      Number Of HealthCare Facilities Registered: {facilityCount}
      Number Of Blood Donation Camps Registered: {campCount}
      
    </div>
    </>
  );
}

export default Home;

