import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProperties, Property } from "../contexts/PropertyContext";

const PropertyDetailsPage: React.FC = () => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const { properties } = useProperties();
  const [property, setProperty] = useState<Property | undefined>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Properties Loaded: ", properties);
    if (properties.length === 0) {
      setIsLoading(false);
      return;
    }

    const currentProperty = properties.find(
      (p) => p.id.toString() === propertyId
    );
    console.log("Matching Property: ", currentProperty);

    if (currentProperty) {
      setProperty(currentProperty);
    } else {
      setProperty(undefined);
    }
    setIsLoading(false);
  }, [propertyId, properties]);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">Property not found</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">{property.title}</h1>
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-64 object-cover rounded mt-4"
        />
        <p className="mt-4">
          <strong>Price:</strong> {property.price}
        </p>
        <p>
          <strong>Location:</strong> {property.location}
        </p>
        <p className="mt-4">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
