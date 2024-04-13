import React, { useState, useEffect } from "react";

// Dummy data type definition
interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
}

// Dummy data for the example
const properties: Property[] = [
  {
    id: 1,
    title: "Modern Family Home",
    price: "$340,000",
    location: "Chicago, IL",
    imageUrl: "/path/to/image1.jpg",
  },
  {
    id: 2,
    title: "Stylish Apartment",
    price: "$220,000",
    location: "Miami, FL",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    id: 3,
    title: "Luxury Villa",
    price: "$950,000",
    location: "Los Angeles, CA",
    imageUrl: "/path/to/image3.jpg",
  },
];

const PropertyListing: React.FC = () => {
  // Local state to store properties
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);

  // This would be replaced by a fetch call to the API in a real application
  useEffect(() => {
    setFilteredProperties(properties); // Set initial properties from dummy data or fetched data
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <div key={property.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h5 className="text-lg font-bold">{property.title}</h5>
              <p className="text-gray-800">{property.price}</p>
              <p className="text-gray-600">{property.location}</p>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListing;
