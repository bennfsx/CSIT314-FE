import React from "react";
import PropertyListing from "../components/PropertyListing";
import PropertyManagementPage from "../components/PropertyManagementPage";

const PropertyListingPage = () => {
  return (
    <>
      <PropertyManagementPage></PropertyManagementPage>
      <PropertyListing></PropertyListing>
    </>
  );
};

export default PropertyListingPage;
