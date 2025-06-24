import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    navigate('/confirmation', { state: { ...form, bookingId } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
