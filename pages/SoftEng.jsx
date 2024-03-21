import React, { useState } from "react";
import certificatesData from "../portfolio/certificates"

export default function SoftEng() {

  const initialCoursesToShow = 5;
  const initialCertificatesToShow = 5;
  const [visibleCertificates, setVisibleCertificates] = useState(initialCertificatesToShow);
  const [visibleCourses, setVisibleCourses] = useState(initialCoursesToShow)

  const generateCourseHTML = (certificates) => {
    const filteredCertificates = certificatesData.filter(certificate => certificate.type === "course");
    const visibleItems = filteredCertificates.slice(0, visibleCourses);

    return visibleItems.map((certificate) => (
      <React.Fragment key={certificate.id}>
        <div className="first-column">{certificate.name}</div>
        <div className="second-column">{certificate.description}</div>
        <a className="third-column" href={certificate.link} alt={`link to Dominik Piskorski ${certificate.name}`}><div >View certificate</div></a>
        
      </React.Fragment>
    ));
  };

  const showAllCourses = () => {
    setVisibleCourses(certificatesData.filter(certificate => certificate.type === "course").length);
  };

  const showAllCertificates = () => {
    setVisibleCertificates(certificatesData.filter(certificate => certificate.type === "course").length);
  };


  const generateCertificateHTML = (certificates) => {
    const filteredCertificates = certificatesData.filter(certificate => certificate.type === "certificate");
    const visibleItems = filteredCertificates.slice(0, visibleCertificates);

    return visibleItems.map((certificate) => (
      <React.Fragment key={certificate.id}>
        <div className="first-column">{certificate.name}</div>
        <div className="second-column">{certificate.description}</div>
        <a className="third-column" href={certificate.link} alt={`link to Dominik Piskorski ${certificate.name}`}><div >View certificate</div></a>
      </React.Fragment>
    ));
  };
  

    return (
        <div >
            <h2>Software Engineering Professional Certificates</h2>

            <div className="grid-container">
            {generateCertificateHTML(certificatesData)}
            {visibleCertificates < certificatesData.filter(certificate => certificate.type === "certificate").length && (
            <button onClick={showAllCertificates}>Show all {certificatesData.filter(certificate => certificate.type === "certificate").length } items</button>
            )}
            
            </div>

            <h2>Software Engineering courses</h2>

            <div className="grid-container">
            {generateCourseHTML(certificatesData)}
            {visibleCourses < certificatesData.filter(certificate => certificate.type === "course").length && (
            <button onClick={showAllCourses}>Show all {certificatesData.filter(certificate => certificate.type === "course").length } items</button>
            )}
            </div>

      
        </div>
    )
}