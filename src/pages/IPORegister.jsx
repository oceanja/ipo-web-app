import React, { useState } from "react";
import axios from "axios";

const RegisterIPO = () => {
  // Form state
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

  // Error state
  const [errors, setErrors] = useState({});
  
  // Success message state
  const [successMessage, setSuccessMessage] = useState("");

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
    if (!formData.companyName) newErrors.companyName = "Company name is required";
    if (!formData.priceBand) newErrors.priceBand = "Price band is required";
    if (!formData.openDate) newErrors.openDate = "Open date is required";
    if (!formData.closeDate) newErrors.closeDate = "Close date is required";
    if (!formData.issueSize) newErrors.issueSize = "Issue size is required";
    
    // Date validation
    if (formData.openDate && formData.closeDate && new Date(formData.openDate) > new Date(formData.closeDate)) {
      newErrors.closeDate = "Close date cannot be before open date";
    }
    
    // Numeric validation
    if (formData.issueSize && isNaN(parseFloat(formData.issueSize))) {
      newErrors.issueSize = "Issue size must be a number";
    }
    
    // Conditional validation based on status
    if (formData.status === "New Listed") {
      if (!formData.ipoPrice) newErrors.ipoPrice = "IPO price is required for new listed IPOs";
      if (!formData.listingPrice) newErrors.listingPrice = "Listing price is required for new listed IPOs";
      if (!formData.listingGain) newErrors.listingGain = "Listing gain is required for new listed IPOs";
      if (!formData.newListingDate) newErrors.newListingDate = "Listing date is required for new listed IPOs";
      if (!formData.cmp) newErrors.cmp = "CMP is required for new listed IPOs";
      if (!formData.currentReturn) newErrors.currentReturn = "Current return is required for new listed IPOs";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  setSuccessMessage("");

  if (validateForm()) {
    try {
      const payload = {
        company_name: formData.companyName,
        company_logo: "https://via.placeholder.com/100", // you can improve later
        price_band: formData.priceBand,
        open_date: formData.openDate || null,
        close_date: formData.closeDate || null,
        issue_size: formData.issueSize,
        issue_type: formData.issueType,
        listing_date: formData.listingDate || null,
        status: formData.status === "Coming" ? "Upcoming" : formData.status, // map frontend status to backend
        ipo_price: formData.ipoPrice || null,
        listing_price: formData.listingPrice || null,
        listing_gain: formData.listingGain || null,
        current_market_price: formData.cmp || null,
        current_return: formData.currentReturn || null,
        drhp_pdf: formData.drhp || null,
      };

      const res = await axios.post("http://localhost:5050/api/ipo", payload);

      if (res.status === 201) {
        setSuccessMessage("IPO registered successfully!");
        handleCancel();
      } else {
        alert("Unexpected error occurred");
      }
    } catch (error) {
      console.error("Error creating IPO:", error);
      alert("Failed to create IPO. Check the console for more info.");
    }
  } else {
    console.log("Form has validation errors");
  }
};
  
  // Handle cancel button
  const handleCancel = () => {
    // Reset form
    setFormData({
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
    setErrors({});
    setSuccessMessage("");
  };
  return (
    <div>

      <div className="p-4">
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h4 style={{ margin: 0 }}>Upcoming IPO Information</h4>
          <div>
            <button 
              onClick={handleSubmit}
              style={{ marginRight: '10px', padding: '6px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', fontSize:'20px' }}
            >
              Register
            </button>
            <button 
              onClick={handleCancel}
              style={{ padding: '6px 12px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '20px' }}
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
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
                  <label className="form-label">Company Name</label>
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
                  <label className="form-label">Price Band</label>
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
                  <label className="form-label">Open</label>
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
                  <label className="form-label">Close</label>
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
                  <label className="form-label">Issue Size</label>
                  <input 
                    type="text" 
                    className={`form-control ${errors.issueSize ? 'is-invalid' : ''}`}
                    name="issueSize"
                    value={formData.issueSize}
                    onChange={handleChange}
                    placeholder="Enter in Cr"
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
                  <label className="form-label">Listing Date</label>
                  <input 
                    type="date" 
                    className="form-control"
                    name="listingDate"
                    value={formData.listingDate}
                    onChange={handleChange}
                  />
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
              <h6>New Listed IPO Details {formData.status !== "New Listed" && <span className="text-muted">(Optional for {formData.status} IPOs)</span>}</h6>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">IPO Price</label>
                  <input 
                    type="text" 
                    className={`form-control ${errors.ipoPrice ? 'is-invalid' : ''}`}
                    name="ipoPrice"
                    value={formData.ipoPrice}
                    onChange={handleChange}
                    disabled={formData.status !== "New Listed"}
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
                    disabled={formData.status !== "New Listed"}
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
                    disabled={formData.status !== "New Listed"}
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
                    disabled={formData.status !== "New Listed"}
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
                    disabled={formData.status !== "New Listed"}
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
                    disabled={formData.status !== "New Listed"}
                  />
                  {errors.currentReturn && <div className="invalid-feedback">{errors.currentReturn}</div>}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">DRHP</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter DRHP PDF link"
                  name="drhp"
                  value={formData.drhp}
                  onChange={handleChange}
                />
              </div>

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
