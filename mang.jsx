import { useState } from "react";

// Contact Manager Component
const ContactManager = ({ onClose }) => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", email: "", phone: "" });

  // Handle input change for name, email, and phone fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleAddContact = () => {
    const { name, email, phone } = newContact;

    // Check that all fields are filled before adding a contact
    if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
      setContacts([...contacts, newContact]);
      setNewContact({ name: "", email: "", phone: "" }); // Reset form fields
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Manager</h3>

        {/* Input fields for name, email, and phone */}
        <input
          type="text"
          name="name"
          value={newContact.name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter name"
        />
        <input
          type="email"
          name="email"
          value={newContact.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter email"
        />
        <input
          type="tel"
          name="phone"
          value={newContact.phone}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter phone number"
        />
        <button
          onClick={handleAddContact}
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-transform duration-300"
        >
          Add Contact
        </button>

        {/* Displaying the contact list */}
        <ul className="mt-4">
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-300"
            >
              <span>{contact.name} - {contact.email} - {contact.phone}</span>
              <button
                onClick={() => handleDeleteContact(index)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactManager;
