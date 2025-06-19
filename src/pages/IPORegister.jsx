import Navbar from "../components/Navbar";

const RegisterIPO = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h4 className="mb-4">Upcoming IPO Information</h4>

        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label className="form-label">Company Logo</label>
                <input type="file" className="form-control" />
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-control" placeholder="Enter company name" />
                </div>
                <div className="col">
                  <label className="form-label">Price Band</label>
                  <input type="text" className="form-control" placeholder="Enter price band" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Open</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">Close</label>
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Issue Size</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">Issue Type</label>
                  <select className="form-select">
                    <option>Book Built</option>
                    <option>Fixed Price</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Listing Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option>Ongoing</option>
                    <option>Coming</option>
                    <option>New Listed</option>
                  </select>
                </div>
              </div>

              <hr />
              <h6>New Listed IPO Details</h6>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">IPO Price</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">Listing Price</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Listing Gain (%)</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">Listing Date</label>
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">CMP</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">Current Return (%)</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">DRHP</label>
                <input type="text" className="form-control" placeholder="Enter DRHP PDF link" />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          <div className="col-md-4">
            <div className="p-3 border rounded bg-light">
              <h6 className="fw-bold mb-3">IPO Info</h6>
              <p style={{ fontSize: "14px" }}>
                Please fill all the necessary details correctly. DRHP/Listing price/CMP should match official filings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterIPO;
