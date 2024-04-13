import React, { useState } from "react";
import PropertyForm from "./PropertyForm";
import PropertyList from "./PropertyList";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
}

const PropertyManagementPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);

  const handleSaveProperty = (property: Property) => {
    if (property.id) {
      // Update existing property
      setProperties((prev) =>
        prev.map((p) => (p.id === property.id ? property : p))
      );
    } else {
      // Add new property
      const newProperty = { ...property, id: Date.now() }; // Assign a new ID
      setProperties((prev) => [...prev, newProperty]);
    }
    setEditingProperty(null); // Reset editing property
  };

  const handleEditProperty = (property: Property) => {
    setEditingProperty(property); // Set the currently editing property
  };

  const handleDeleteProperty = (id: number) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      {editingProperty ? (
        <PropertyForm property={editingProperty} onSave={handleSaveProperty} />
      ) : (
        <button
          onClick={() =>
            setEditingProperty({
              id: 0,
              title: "",
              price: "",
              location: "",
              imageUrl: "",
            })
          }
          className="mb-4"
        >
          Add New Property
        </button>
      )}
      <PropertyList
        properties={properties}
        onEdit={handleEditProperty}
        onDelete={handleDeleteProperty}
      />
    </div>
  );
};

export default PropertyManagementPage;
