import React, { createContext, useState, useContext } from "react";

// Declare and export the Property interface
export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
  description: string;
}

interface PropertyContextType {
  properties: Property[];
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
  addProperty: (property: Property) => void;
  updateProperty: (property: Property) => void;
  deleteProperty: (id: number) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [properties, setProperties] = useState<Property[]>([]);

  const addProperty = (property: Property) => {
    setProperties([...properties, { ...property, id: Date.now() }]); // Mock ID assignment
  };

  const updateProperty = (updatedProperty: Property) => {
    setProperties(
      properties.map((p) => (p.id === updatedProperty.id ? updatedProperty : p))
    );
  };

  const deleteProperty = (id: number) => {
    setProperties(properties.filter((p) => p.id !== id));
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        setProperties,
        addProperty,
        updateProperty,
        deleteProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error("useProperties must be used within a PropertyProvider");
  }
  return context;
};
