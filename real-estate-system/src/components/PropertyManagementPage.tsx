import React from "react";
import { Link } from "react-router-dom";
import { useProperties } from "../contexts/PropertyContext";

const PropertyManagementPage: React.FC = () => {
  const { properties, deleteProperty } = useProperties();

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      deleteProperty(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <Link
          to="/property-form"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Property
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={property.imageUrl || "https://via.placeholder.com/400"}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-lg font-bold">{property.title}</h5>
              <p className="text-gray-700">{property.price}</p>
              <p className="text-gray-600">{property.location}</p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/property-form/${property.id}`}
                  className="text-white bg-green-500 hover:bg-green-600 rounded py-2 px-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="text-white bg-red-500 hover:bg-red-600 rounded py-2 px-4"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagementPage;
