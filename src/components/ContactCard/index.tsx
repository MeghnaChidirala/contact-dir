"use client";


import React from "react";
import { Menu } from "@headlessui/react";
import { Contact } from "../../types/Contact";


interface ContactCardProps extends Contact {
  onEdit?: () => void;
  onDelete?: () => void;
}


const ContactCard: React.FC<ContactCardProps> = ({
  initials,
  name,
  role,
  company,
  phone,
  email,
  bgColor,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-2">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${bgColor}`}
      >
        {initials}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">
        {role} at {company}
      </p>
      <div className="flex flex-col items-center space-y-1">
        <p className="text-sm text-gray-800">📞 {phone}</p>
        <p className="text-sm text-gray-800">📧 {email}</p>
      </div>
      <div className="absolute top-4 right-4">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="text-sm font-medium text-gray-500 hover:text-gray-700">
            ⋮
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-32 bg-white divide-y divide-gray-100 rounded-md shadow-lg">
            <div className="px-1 py-1">
              {onEdit && (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onEdit}
                      className={`${
                        active ? "bg-purple-500 text-white" : "text-gray-700"
                      } flex w-full px-2 py-2 text-sm`}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>
              )}
              {onDelete && (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onDelete}
                      className={`${
                        active ? "bg-red-500 text-white" : "text-gray-700"
                      } flex w-full px-2 py-2 text-sm`}
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};


export default ContactCard;
