import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProperties, Property } from "../contexts/PropertyContext";

const PropertyFormPage: React.FC = () => {
  const { propertyId } = useParams<{ propertyId?: string }>();
  const navigate = useNavigate();
  const { properties, addProperty, updateProperty } = useProperties();
  const [property, setProperty] = useState<Property>({
    id: 0,
    title: "",
    price: "",
    location: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    if (propertyId) {
      const prop = properties.find((p) => p.id.toString() === propertyId);
      if (prop) {
        setProperty(prop);
      } else {
        console.log("Property not found");
        // Handle redirection or display an error message
      }
    }
  }, [propertyId, properties]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (propertyId) {
      updateProperty(property);
    } else {
      addProperty(property);
    }
    navigate("/listing"); // Redirect to the listing page
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* form fields */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save Property
      </button>
    </form>
  );
};

export default PropertyFormPage;
