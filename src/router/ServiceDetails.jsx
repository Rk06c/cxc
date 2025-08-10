import React from "react";
import { useParams, Link } from "react-router-dom";
import '../styles/servicedetails.css'; 
import ApiDocumentation from "./ApiDocumentation";

export default function ServiceDetails() {
  const { id } = useParams();

  const serviceContent = {
    "web-development": {
      title: "Web Development",
      text: "We build beautiful, responsive, and high-performance websites using React, Next.js, and modern web technologies.",
    },
    "mobile-development": {
      title: "Mobile Development",
      text: "We create cross-platform mobile applications that feel native on both iOS and Android.",
    },
    "ai-solutions": {
      title: "AI Solutions",
      text: "Our AI solutions harness machine learning, NLP, and computer vision to deliver smart, automated experiences.",
    },
    "backend-development": {
      title: "Backend Development",
      text: <ApiDocumentation />
    },
  };

  const service = serviceContent[id] || {
    title: "Unknown Service",
    text: "This service does not exist.",
  };

  return (
    <div className="service-details-container">
      <div className="service-content">
        <h1>{service.title}</h1>
        <p>{service.text}</p>
        <Link to="/" className="back-link">
          ⬅ Back to Services
        </Link>
      </div>
    </div>
  );
}