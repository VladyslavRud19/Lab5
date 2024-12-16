import React, { useState } from 'react';

function Contacts() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Дякую за повідомлення, ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1>Контакти</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Повідомлення:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default Contacts;
