import Navbar from "../components/Navbar";
import { useState } from "react";

const RegisterIPO = () => {
  const [formData, setFormData] = useState({
    companyLogo: null,
    companyName: "",
    priceBand: "",
    openDate: "",
    closeDate: "",
    issueSize: "",
    issueType: "Book Built",
    listingDate: "",
    status: "Ongoing",
    ipoPrice: "",
    listingPrice: "",
    listingGain: "",
    newListingDate: "",
    cmp: "",
    currentReturn: "",
    drhp: ""
  });

  // State for validation errors
  const [errors, setErrors] = useState({});
  
  // State to track if form was submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.priceBand.trim()) newErrors.priceBand = "Price band is required";
    if (!formData.openDate) newErrors.openDate = "Open date is required";
    if (!formData.closeDate) newErrors.closeDate = "Close date is required";
    if (!formData.issueSize.trim()) newErrors.issueSize = "Issue size is required";
    if (!formData.listingDate) newErrors.listingDate = "Listing date is required";
    
    // Validate dates
    if (formData.openDate && formData.closeDate) {
      const openDate = new Date(formData.openDate);
      const closeDate = new Date(formData.closeDate);
      
      if (closeDate < openDate) {
        newErrors.closeDate = "Close date cannot be before open date";
      }
    }
    
    // Validate numeric fields
    if (formData.issueSize && isNaN(parseFloat(formData.issueSize))) {
      newErrors.issueSize = "Issue size must be a number";
    }
    
    if (formData.ipoPrice && isNaN(parseFloat(formData.ipoPrice))) {
      newErrors.ipoPrice = "IPO price must be a number";
    }
    
    if (formData.listingPrice && isNaN(parseFloat(formData.listingPrice))) {
      newErrors.listingPrice = "Listing price must be a number";
    }
    
    if (formData.listingGain && isNaN(parseFloat(formData.listingGain))) {
      newErrors.listingGain = "Listing gain must be a number";
    }
    
    if (formData.cmp && isNaN(parseFloat(formData.cmp))) {
      newErrors.cmp = "CMP must be a number";
    }
    
    if (formData.currentReturn && isNaN(parseFloat(formData.currentReturn))) {
      newErrors.currentReturn = "Current return must be a number";
    }
    
    // Validate DRHP URL
    if (formData.drhp && !formData.drhp.trim().startsWith("http")) {
      newErrors.drhp = "DRHP must be a valid URL";
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      alert("IPO registered successfully!");
    } else {
      const firstErrorField = document.querySelector(".is-invalid");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h4 className="mb-4">Upcoming IPO Information</h4>
        <div
          className="ipo-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Upcoming IPO Information</h2>
          <div>
             <button
              type="submit"
              onClick={handleSubmit}
              style={{
                marginRight: '10px',
                padding: '6px 12px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '20px', 
                fontStyle: 'Bold'
              }}
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => window.location.href = '/'}
              style={{
                marginRight: '10px',
                padding: '6px 12px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '20px', 
                fontStyle: 'Bold'
              }}
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Company Logo</label>
                <input 
                  type="file" 
                  className="form-control" 
                  name="companyLogo"
                  onChange={handleChange}
                />
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Company Name*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                    placeholder="Enter company name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                </div>
                <div className="col">
                  <label className="form-label">Price Band*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.priceBand ? 'is-invalid' : ''}`}
                    placeholder="Enter price band"
                    name="priceBand"
                    value={formData.priceBand}
                    onChange={handleChange}
                  />
                  {errors.priceBand && <div className="invalid-feedback">{errors.priceBand}</div>}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Open*</label>
                  <input 
                    type="date" 
                    className={`form-control ${errors.openDate ? 'is-invalid' : ''}`}
                    name="openDate"
                    value={formData.openDate}
                    onChange={handleChange}
                  />
                  {errors.openDate && <div className="invalid-feedback">{errors.openDate}</div>}
                </div>
                <div className="col">
                  <label className="form-label">Close*</label>
                  <input 
                    type="date" 
                    className={`form-control ${errors.closeDate ? 'is-invalid' : ''}`}
                    name="closeDate"
                    value={formData.closeDate}
                    onChange={handleChange}
                  />
                  {errors.closeDate && <div className="invalid-feedback">{errors.closeDate}</div>}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Issue Size*</label>
                  <input 
                    type="text" 
                    className={`form-control ${errors.issueSize ? 'is-invalid' : ''}`}
                    name="issueSize"
                    value={formData.issueSize}
                    onChange={handleChange}
                    placeholder="Enter issue size in crores"
                  />
                  {errors.issueSize && <div className="invalid-feedback">{errors.issueSize}</div>}
                </div>
                <div className="col">
                  <label className="form-label">Issue Type</label>
                  <select 
                    className="form-select"
                    name="issueType"
                    value={formData.issueType}
                    onChange={handleChange}
                  >
                    <option value="Book Built">Book Built</option>
                    <option value="Fixed Price">Fixed Price</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Listing Date*</label>
                  <input 
                    type="date" 
                    className={`form-control ${errors.listingDate ? 'is-invalid' : ''}`}
                    name="listingDate"
                    value={formData.listingDate}
                    onChange={handleChange}
                  />
                  {errors.listingDate && <div className="invalid-feedback">{errors.listingDate}</div>}
                </div>
                <div className="col">
                  <label className="form-label">Status</label>
                  <select 
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Ongoing">Ongoing</option>
                    <option value="Coming">Coming</option>
                    <option value="New Listed">New Listed</option>
                  </select>
                </div>
              </div>

              <hr />
              <h6>New Listed IPO Details</h6>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">IPO Price</label>
                  <input 
                    type="text" 
                    className={`form-control ${errors.ipoPrice ? 'is-invalid' : ''}`}
                    name="ipoPrice"
                    value={formData.ipoPrice}
                    onChange={handleChange}
                    placeholder="Enter IPO price"
                  />
                  {errors.ipoPrice && <div className="invalid-feedback">{errors.ipoPrice}</div>}
                </div>
                <div className="col">
                  <label className="form-label">Listing Price</label>
                  <input 
                    type="text" 
                    className={`form-control ${errors.listingPrice ? 'is-invalid' : ''}`}
                    name="listingPrice"
                    value={formData.listingPrice}
                    onChange={handleChange}
                    placeholder="Enter listing price"
                  />
                  {errors.listingPrice && <div className="invalid-feedback">{errors.listingPrice}</div>}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Listing Gain (%)</label>
                  <input 
                    type="text" 
                    className={`form-control ${errors.listingGain ? 'is-invalid' : ''}`}
                    name="listingGain"
                    value={formData.listingGain}
                    onChange={handleChange}
                    placeholder="Enter listing gain percentage"
                  />
                  {errors.listingGain && <div className="invalid-feedback">{errors.listingGain}</div>}
                </div>
                <div className="col">
                  <label className="form-label">Listing Date</label>
                  <input 
                    type="date" 
                    className={`form-control ${errors.newListingDate ? 'is-invalid' : ''}`}
                    name="newListingDate"
                    value={formData.newListingDate}
                    onChange={handleChange}
                  />
                  {errors.newListingDate && <div className="invalid-feedback">{errors.newListingDate}</div>}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">CMP</label>
                  <input 
                    type="text" 
                    className={`form-control ${errors.cmp ? 'is-invalid' : ''}`}
                    name="cmp"
                    value={formData.cmp}
                    onChange={handleChange}
                    placeholder="Enter current market price"
                  />
                  {errors.cmp && <div className="invalid-feedback">{errors.cmp}</div>}
                </div>
                <div className="col">
                  <label className="form-label">Current Return (%)</label>
                  <input 
                    type="text" 
                    className={`form-control ${errors.currentReturn ? 'is-invalid' : ''}`}
                    name="currentReturn"
                    value={formData.currentReturn}
                    onChange={handleChange}
                    placeholder="Enter current return percentage"
                  />
                  {errors.currentReturn && <div className="invalid-feedback">{errors.currentReturn}</div>}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">DRHP</label>
                <input
                  type="text"
                  className={`form-control ${errors.drhp ? 'is-invalid' : ''}`}
                  placeholder="Enter DRHP PDF link"
                  name="drhp"
                  value={formData.drhp}
                  onChange={handleChange}
                />
                {errors.drhp && <div className="invalid-feedback">{errors.drhp}</div>}
              </div>

              {/* <button type="submit" className="btn btn-primary">
                Submit
              </button> */}
            </form>
          </div>

          <div className="col-md-4">
            <div className="p-3 border rounded bg-light">
              <h6 className="fw-bold mb-3">IPO Info</h6>
              <p style={{ fontSize: "14px" }}>
                Please fill all the necessary details correctly. DRHP/Listing
                price/CMP should match official filings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterIPO;
