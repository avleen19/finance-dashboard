const Card = ({ label, value }) => {
  return (
    <div className="card">
      <p>{label}</p>
      <h2>₹ {value}</h2>
    </div>
  );
};

export default Card;