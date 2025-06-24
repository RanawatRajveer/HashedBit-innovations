import { useLocation } from 'react-router-dom';

function Confirmation() {
  const { state } = useLocation();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Booking Confirmed!</h2>
      <p><strong>Booking ID:</strong> {state.bookingId}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
    </div>
  );
}

export default Confirmation;
