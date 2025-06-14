const IPOCard = ({ ipo }) => {
  return (
    <div className="ipo-card" style={{ border: '1px solid #ccc', padding: '12px', margin: '12px' }}>
      <h3>{ipo.company_name}</h3>
      <p><strong>Price Band:</strong> {ipo.price_band}</p>
      <p><strong>Status:</strong> {ipo.status}</p>
    </div>
  );
};

export default IPOCard;
