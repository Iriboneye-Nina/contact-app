import React from 'react';
import { Link } from 'react-router-dom';

const AddContactButton = () => {
  return (
    <Link to="ContactForm">
      <button>Add Contact</button>
    </Link>
  );
};

export default AddContactButton;