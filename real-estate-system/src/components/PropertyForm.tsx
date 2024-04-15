import React, { useState, useEffect } from "react";

export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
  description: string;
}

interface PropertyFormProps {
  property?: Property; // Optional, for edit
  onSave: (property: Property) => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ property, onSave }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (property) {
      setTitle(property.title);
      setPrice(property.price);
      setLocation(property.location);
      setImageUrl(property.imageUrl);
      setDescription(property.description);
    }
  }, [property]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: property?.id || Date.now(),
      title,
      price,
      location,
      imageUrl,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
        className="border p-2 rounded mb-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default PropertyForm;
