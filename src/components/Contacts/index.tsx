"use client";


import React, { useState } from "react";
import ContactCard from "../ContactCard/index";
import Pagination from "../Pagination/index";
import NewContactForm from "../NewContactForm/index";
import { Contact } from "../../types/Contact";


const initialContacts: Contact[] = [
  {
    id: 1,
    initials: "Hs",
    name: "Angela Moss",
    role: "Marketing Manager",
    company: "Highspeed Studios",
    phone: "+1 234 567 890",
    email: "angela.moss@mail.com",
    bgColor: "bg-green-500",
  },
  {
    id: 2,
    initials: "AV",
    name: "Ahmad Zayn",
    role: "Photographer",
    company: "Audio Video Teams",
    phone: "+1 234 567 890",
    email: "ahmad.zayn@mail.com",
    bgColor: "bg-blue-500",
  },
  {
    id: 3,
    initials: "Cz",
    name: "Brian Connor",
    role: "Designer",
    company: "Crimson Guard Studios",
    phone: "+1 234 567 890",
    email: "brian.connor@mail.com",
    bgColor: "bg-pink-500",
  },
  {
    id: 4,
    initials: "HS",
    name: "Courtney Hawkins",
    role: "Programmer",
    company: "Highspeed Studios",
    phone: "+1 234 567 890",
    email: "courtney.hawk@mail.com",
    bgColor: "bg-teal-500",
  },
];


const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editContactData, setEditContactData] = useState<Contact | null>(null);


  const itemsPerPage = 10;
  const totalPages = Math.ceil(contacts.length / itemsPerPage);
  const displayedContacts = contacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const addContact = (newContact: Omit<Contact, "id">) => {
    const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
    setContacts([...contacts, { ...newContact, id: newId }]);
    setModalOpen(false);
  };


  const updateContact = (updatedContact: Contact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setModalOpen(false);
    setEditContactData(null);
  };


  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };


  const handleEdit = (contact: Contact) => {
    setEditContactData(contact);
    setModalOpen(true);
  };


  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md"
          onClick={() => {
            setModalOpen(true);
            setEditContactData(null); // Ensure form starts fresh
          }}
        >
          + New Contact
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedContacts.map((contact) => (
          <ContactCard
            key={contact.id}
            {...contact}
            onEdit={() => handleEdit(contact)}
            onDelete={() => deleteContact(contact.id)}
          />
        ))}
      </div>
      {/* Pagination aligned to the bottom-right */}
      <div className="flex justify-end mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      {isModalOpen && (
        <NewContactForm
          contact={editContactData || undefined} // Ensure undefined is passed if no contact is being edited
          onCancel={() => {
            setModalOpen(false);
            setEditContactData(null);
          }}
          onSubmit={(contact) =>
            editContactData ? updateContact(contact) : addContact(contact)
          }
        />
      )}
    </div>
  );
};


export default Contacts;
