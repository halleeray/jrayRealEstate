import React from "react";
import MainLayout from "../layouts/MainLayout";
import PropertyCard from "../components/PropertyCard";
import { PropertyItem } from "../types/PropertyItem";
import "../assets/css/Available.css";

function Available() {
  const availableProperties: PropertyItem[] = [
    {
      streetAddress: "404 S Oneida Way",
      cityAddress: "Denver, CO 80224",
      image: "images/cutesmall.jpg",
      info: "3 Bed / 3 Bath / 1,865 Sq. Ft.",
      price: "$979,000",
    },
  ];

  return (
    <div>
      <MainLayout>
        <div className="pageTitle">Current Listings</div>
        <div className="properties-container">
          {availableProperties.map((property) => (
            <PropertyCard key={property.streetAddress} property={property} />
          ))}
        </div>
      </MainLayout>
    </div>
  );
}

export default Available;
