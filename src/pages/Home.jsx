import ipoData from "../services/IPOService";
import IPOCard from "../components/IPOCard";

const Home = () => {
  return (
    <div>
      <h2>Upcoming IPOs</h2>
      <div className="ipo-list">
        {ipoData.map((ipo) => (
          <IPOCard key={ipo.id} ipo={ipo} />
        ))}
      </div>
    </div>
  );
};

export default Home;
