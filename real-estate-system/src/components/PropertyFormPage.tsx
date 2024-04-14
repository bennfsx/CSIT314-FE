import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropertyForm from "./PropertyForm";
// import { Property } from "../types"; // Make sure this is imported

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
}

interface Props {
  onSave: (property: Property) => void;
  properties: Property[];
}

const PropertyFormPage: React.FC<Props> = ({ onSave, properties }) => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const [currentProperty, setCurrentProperty] = useState<
    Property | undefined
  >();

  useEffect(() => {
    if (propertyId) {
      const prop = properties.find((p) => p.id.toString() === propertyId);
      setCurrentProperty(prop);
    }
  }, [propertyId, properties]);

  const handleSave = (property: Property) => {
    onSave(property);
    navigate("/listing"); // Redirect back to the listing page after saving
  };

  return (
    <div>
      <h1>{propertyId ? "Edit Property" : "Add New Property"}</h1>
      <PropertyForm property={currentProperty} onSave={handleSave} />
    </div>
  );
};

export default PropertyFormPage;
