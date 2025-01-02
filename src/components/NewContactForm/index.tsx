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
    id: contact?.id || 0,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
          Add New Contact
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Fill out the below form to add a new member
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Angela Moss"
                value={formState.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formState.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456 - 7890"
                  value={formState.phone}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  value={formState.company}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Designation
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Marketing Manager"
                  value={formState.role}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewContactForm;

