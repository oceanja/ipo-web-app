import React, { useState } from "react";
import axios from "axios";

const RegisterIPO = () => {
  const [formData, setFormData] = useState({
    companyLogo: "",
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

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName) newErrors.companyName = "Company name is required";
    if (!formData.priceBand) newErrors.priceBand = "Price band is required";
    if (!formData.openDate) newErrors.openDate = "Open date is required";
    if (!formData.closeDate) newErrors.closeDate = "Close date is required";
    if (!formData.issueSize) newErrors.issueSize = "Issue size is required";

    if (
      formData.openDate !== "not-issued" &&
      formData.closeDate !== "not-issued" &&
      new Date(formData.openDate) > new Date(formData.closeDate)
    ) {
      newErrors.closeDate = "Close date cannot be before open date";
    }

    if (
      formData.issueSize &&
      formData.issueSize !== "not-issued" &&
      isNaN(parseFloat(formData.issueSize))
    ) {
      newErrors.issueSize = "Issue size must be a number";
    }

    if (formData.status === "New Listed") {
      if (!formData.ipoPrice) newErrors.ipoPrice = "IPO price is required";
      if (!formData.listingPrice) newErrors.listingPrice = "Listing price is required";
      if (!formData.listingGain) newErrors.listingGain = "Listing gain is required";
      if (!formData.newListingDate) newErrors.newListingDate = "Listing date is required";
      if (!formData.cmp) newErrors.cmp = "CMP is required";
      if (!formData.currentReturn) newErrors.currentReturn = "Current return is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = {
      company_name: formData.companyName,
      company_logo: formData.companyLogo,
      price_band: formData.priceBand,
      open_date: formData.openDate === "not-issued" ? null : formData.openDate,
      close_date: formData.closeDate === "not-issued" ? null : formData.closeDate,
      issue_size: formData.issueSize === "not-issued" ? null : formData.issueSize,
      issue_type: formData.issueType,
      listing_date: formData.listingDate === "not-issued" ? null : formData.listingDate,
      status: formData.status,
      ipo_price: formData.ipoPrice,
      listing_price: formData.listingPrice,
      listing_gain: formData.listingGain,
      current_market_price: formData.cmp,
      current_return: formData.currentReturn,
      drhp_pdf: formData.drhp
    };

    try {
      const res = await axios.post("https://ipo-web-app-1.onrender.com/api/ipo", data);
      if (res.status === 201) {
        setSuccessMessage("IPO Registered successfully!");
        handleCancel();
      }
    } catch (error) {
      console.error("Error adding IPO:", error);
      alert("Error: " + (error.response?.data?.error || "Something went wrong"));
    }
  };

  const handleCancel = () => {
    setFormData({
      companyLogo: "",
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

  const renderDateInput = (label, name, value) => (
    <div className="col mb-3">
      <label className="form-label">{label}</label>
      <select
        className="form-select mb-1"
        name={name}
        value={value === null ? "not-issued" : value}
        onChange={handleChange}
      >
        <option value="">Select Date</option>
        <option value="not-issued">Not Issued</option>
      </select>
      {value !== "not-issued" && (
        <input type="date" className="form-control" name={name} value={value} onChange={handleChange} />
      )}
    </div>
  );

  return (
    <div className="p-4">
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="m-0">Upcoming IPO Information</h4>
        <div>
          <button onClick={handleSubmit} className="btn btn-primary me-2">Register</button>
          <button onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Company Logo (Paste Image URL)</label>
          <input type="text" className="form-control" name="companyLogo" value={formData.companyLogo} onChange={handleChange} placeholder="https://example.com/logo.png" />
        </div>

        <div className="row mb-3">
          <div className="col">
            <label>Company Name</label>
            <input type="text" className={`form-control ${errors.companyName ? "is-invalid" : ""}`} name="companyName" value={formData.companyName} onChange={handleChange} />
            {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
          </div>
          <div className="col">
            <label>Price Band</label>
            <input type="text" className={`form-control ${errors.priceBand ? "is-invalid" : ""}`} name="priceBand" value={formData.priceBand} onChange={handleChange} />
            {errors.priceBand && <div className="invalid-feedback">{errors.priceBand}</div>}
          </div>
        </div>

        <div className="row">
          {renderDateInput("Open Date", "openDate", formData.openDate)}
          {renderDateInput("Close Date", "closeDate", formData.closeDate)}
        </div>

        <div className="row mb-3">
          <div className="col">
            <label>Issue Size</label>
            <div className="d-flex">
              <input
                type="text"
                className={`form-control ${errors.issueSize ? "is-invalid" : ""}`}
                name="issueSize"
                value={formData.issueSize === "not-issued" ? "" : formData.issueSize}
                onChange={handleChange}
                placeholder="Enter size or select below"
                disabled={formData.issueSize === "not-issued"}
              />
              <select
                className="form-select ms-2"
                style={{ maxWidth: "140px" }}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    issueSize: e.target.value === "not-issued" ? "not-issued" : ""
                  })
                }
              >
                <option value="">--Select--</option>
                <option value="not-issued">Not Issued</option>
              </select>
            </div>
            {errors.issueSize && <div className="invalid-feedback">{errors.issueSize}</div>}
          </div>

          <div className="col">
            <label>Issue Type</label>
            <select className="form-select" name="issueType" value={formData.issueType} onChange={handleChange}>
              <option>Book Built</option>
              <option>Fixed Price</option>
            </select>
          </div>
        </div>

        <div className="row">
          {renderDateInput("Listing Date", "listingDate", formData.listingDate)}
          <div className="col mb-3">
            <label>Status</label>
            <select className="form-select" name="status" value={formData.status} onChange={handleChange}>
              <option>Ongoing</option>
              <option>Coming</option>
              <option>New Listed</option>
            </select>
          </div>
        </div>

        {/* New Listed IPO Fields */}
        <fieldset disabled={formData.status !== "New Listed"} className="mt-4 border rounded p-3">
          <legend className="fs-6 mb-2">New Listed IPO Details</legend>
          <div className="row mb-3">
            <div className="col">
              <label>IPO Price</label>
              <input type="text" className="form-control" name="ipoPrice" value={formData.ipoPrice} onChange={handleChange} />
            </div>
            <div className="col">
              <label>Listing Price</label>
              <input type="text" className="form-control" name="listingPrice" value={formData.listingPrice} onChange={handleChange} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label>Listing Gain (%)</label>
              <input type="text" className="form-control" name="listingGain" value={formData.listingGain} onChange={handleChange} />
            </div>
            {renderDateInput("New Listing Date", "newListingDate", formData.newListingDate)}
          </div>

          <div className="row mb-3">
            <div className="col">
              <label>CMP</label>
              <input type="text" className="form-control" name="cmp" value={formData.cmp} onChange={handleChange} />
            </div>
            <div className="col">
              <label>Current Return (%)</label>
              <input type="text" className="form-control" name="currentReturn" value={formData.currentReturn} onChange={handleChange} />
            </div>
          </div>
        </fieldset>

        <div className="mb-3">
          <label>DRHP PDF Link</label>
          <input type="text" className="form-control" name="drhp" value={formData.drhp} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default RegisterIPO;
