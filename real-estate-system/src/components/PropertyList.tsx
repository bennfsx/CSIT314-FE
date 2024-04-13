import React from "react";

export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
}

interface PropertyListProps {
  properties: Property[];
  onEdit: (property: Property) => void;
  onDelete: (id: number) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
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
            <button
              onClick={() => onEdit(property)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(property.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
