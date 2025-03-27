import React, { useState } from 'react';
import './Guests.css';

const Guests = () => {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({
    name: '',
    email: '',
    status: null
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  // Validate name
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s-]{2,50}$/;
    return nameRegex.test(name.trim());
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGuest((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === 'name') {
      setErrors((prev) => ({
        ...prev,
        name: validateName(value)
          ? ''
          : 'Invalid name (2-50 letters, spaces, hyphens)'
      }));
    }

    if (name === 'email') {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value)
          ? ''
          : 'Invalid email address'
      }));
    }
  };

  const addGuest = () => {
    const nameValid = validateName(newGuest.name);
    const emailValid = validateEmail(newGuest.email);

    // Update error states
    setErrors({
      name: nameValid ? '' : 'Invalid name (2-50 letters, spaces, hyphens)',
      email: emailValid ? '' : 'Invalid email address'
    });

    if (nameValid && emailValid) {
      setGuests((prev) => [
        ...prev,
        {
          ...newGuest,
          id: Date.now()
        }
      ]);

      setNewGuest({
        name: '',
        email: '',
        status: null
      });

      setErrors({
        name: '',
        email: ''
      });
    }
  };

  const removeGuest = (id) => {
    setGuests((prev) => prev.filter((guest) => guest.id !== id));
  };

  const updateGuestStatus = (id, newStatus) => {
    setGuests((prev) =>
      prev.map((guest) =>
        guest.id === id ? { ...guest, status: newStatus } : guest
      )
    );
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Guest List Manager</h1>

        {/* Guest Input Form */}
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Guest Name"
            value={newGuest.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Guest Email"
            value={newGuest.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <button onClick={addGuest} className="add-btn">
          Add Guest
        </button>

        {/* Guest List */}
        <div className="guest-list">
          {guests.length === 0 ? (
            <p className="empty-text">No guests added yet</p>
          ) : (
            guests.map((guest) => (
              <div key={guest.id} className="guest-item">
                <div className="guest-info">
                  <p className="guest-name">{guest.name}</p>
                  <p className="guest-email">{guest.email}</p>
                  <div className="status-buttons">
                    <button
                      onClick={() =>
                        updateGuestStatus(guest.id, 'Confirmed')
                      }
                      className={`emoji-btn ${
                        guest.status === 'Confirmed' ? 'selected' : ''
                      }`}
                    >
                      🙋
                    </button>
                    <button
                      onClick={() =>
                        updateGuestStatus(guest.id, 'Declined')
                      }
                      className={`emoji-btn ${
                        guest.status === 'Declined' ? 'selected' : ''
                      }`}
                    >
                      🙅
                    </button>
                    <button
                      onClick={() =>
                        updateGuestStatus(guest.id, 'Invited')
                      }
                      className={`emoji-btn ${
                        guest.status === 'Invited' ? 'selected' : ''
                      }`}
                    >
                      🤔
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeGuest(guest.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Guest Count Summary */}
        <div className="summary">Total Guests: {guests.length}</div>
      </div>
    </div>
  );
};

export default Guests;
