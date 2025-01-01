"use client";

import React, { useState } from "react";
import { Contact } from "../../types/Contact";

interface NewContactFormProps {
  contact?: Contact;
  onSubmit: (contact: Contact) => void;
  onCancel: () => void;
}

const NewContactForm: React.FC<NewContactFormProps> = ({
  contact,
  onSubmit,
  onCancel,
}) => {
  const [formState, setFormState] = useState<Contact>({
    id: contact?.id || 0, // Default to 0 if no ID
    initials: contact?.initials || "",
    name: contact?.name || "",
    role: contact?.role || "",
    company: contact?.company || "",
    phone: contact?.phone || "",
    email: contact?.email || "",
    bgColor: contact?.bgColor || "bg-gray-500",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formState);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {contact ? "Edit Contact" : "New Contact"}
        </h2>
        <form className="space-y-4">
          <input
            name="initials"
            placeholder="Initials"
            value={formState.initials}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="role"
            placeholder="Role"
            value={formState.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="company"
            placeholder="Company"
            value={formState.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={formState.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </form>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContactForm;