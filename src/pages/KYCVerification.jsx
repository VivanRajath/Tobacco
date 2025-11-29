import React, { useState } from 'react'
import { FaUpload, FaFileUpload, FaImage, FaSave, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import './KYCVerification.css'

function KYCVerification() {
    const [formData, setFormData] = useState({
        companyName: '',
        regNumber: '',
        country: '',
        businessType: '',
        businessAddress: '',
        contactNumber: '',
        additionalInfo: '',
        profileImage: null,
        businessRegCertificate: null,
        taxRegCertificate: null
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target
        if (files && files[0]) {
            setFormData(prev => ({ ...prev, [name]: files[0] }))
        }
    }

    const handleSaveDraft = (e) => {
        e.preventDefault()
        alert('Form saved as draft!')
        console.log('Draft saved:', formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('KYC verification submitted successfully!')
        console.log('Form submitted:', formData)
    }

    // Calculate progress
    const calculateProgress = () => {
        const requiredFields = ['companyName', 'regNumber', 'country', 'businessType', 'businessAddress', 'contactNumber', 'businessRegCertificate', 'taxRegCertificate']
        const filledFields = requiredFields.filter(field => formData[field])
        return Math.round((filledFields.length / requiredFields.length) * 100)
    }

    const progress = calculateProgress()

    return (
        <div className="kyc-page">
            <div className="container">
                <div className="kyc-header fade-in">
                    <h1>KYC Verification</h1>
                    <p>Complete your verification to start trading on our platform</p>

                    {/* Progress Indicator */}
                    <div className="progress-container">
                        <div className="progress-header">
                            <span className="progress-label">Form Completion</span>
                            <span className="progress-percentage">{progress}%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progress}%` }}>
                                {progress === 100 && <FaCheckCircle className="progress-check" />}
                            </div>
                        </div>
                        <div className="progress-steps">
                            <div className={`step ${formData.companyName && formData.regNumber ? 'complete' : ''}`}>
                                <span>Business Info</span>
                            </div>
                            <div className={`step ${formData.businessRegCertificate && formData.taxRegCertificate ? 'complete' : ''}`}>
                                <span>Documents</span>
                            </div>
                            <div className={`step ${progress === 100 ? 'complete' : ''}`}>
                                <span>Review</span>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="kyc-form slide-in">
                    {/* Business Information */}
                    <div className="form-section">
                        <h3 className="section-heading">Business Information</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Company Name *</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    className="form-input"
                                    placeholder="Enter your company name"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Registration Number *</label>
                                <input
                                    type="text"
                                    name="regNumber"
                                    className="form-input"
                                    placeholder="Enter registration number"
                                    value={formData.regNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Country *</label>
                                <select
                                    name="country"
                                    className="form-select"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Country</option>
                                    <option value="india">India</option>
                                    <option value="usa">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="uae">United Arab Emirates</option>
                                    <option value="singapore">Singapore</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Business Type *</label>
                                <select
                                    name="businessType"
                                    className="form-select"
                                    value={formData.businessType}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Business Type</option>
                                    <option value="manufacturer">Manufacturer</option>
                                    <option value="distributor">Distributor</option>
                                    <option value="retailer">Retailer</option>
                                    <option value="wholesaler">Wholesaler</option>
                                    <option value="importer">Importer/Exporter</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Business Address *</label>
                            <input
                                type="text"
                                name="businessAddress"
                                className="form-input"
                                placeholder="Enter complete business address"
                                value={formData.businessAddress}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Contact Number *</label>
                            <input
                                type="tel"
                                name="contactNumber"
                                className="form-input"
                                placeholder="+91 XXXXX XXXXX"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div className="form-section">
                        <h3 className="section-heading">Profile/Business Image</h3>

                        <div className="form-group">
                            <label className="form-label">Upload Image</label>
                            <div className="file-upload">
                                <input
                                    type="file"
                                    name="profileImage"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <label className="file-upload-label">
                                    <FaImage />
                                    {formData.profileImage ? formData.profileImage.name : 'Choose Image'}
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Document Uploads */}
                    <div className="form-section">
                        <h3 className="section-heading">Document Uploads</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Business Registration Certificate *</label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        name="businessRegCertificate"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        required
                                    />
                                    <label className="file-upload-label">
                                        <FaFileUpload />
                                        {formData.businessRegCertificate
                                            ? formData.businessRegCertificate.name
                                            : 'Choose File (PDF, JPG, PNG)'}
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Tax Registration Certificate *</label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        name="taxRegCertificate"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        required
                                    />
                                    <label className="file-upload-label">
                                        <FaFileUpload />
                                        {formData.taxRegCertificate
                                            ? formData.taxRegCertificate.name
                                            : 'Choose File (PDF, JPG, PNG)'}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="form-section">
                        <h3 className="section-heading">Additional Information</h3>

                        <div className="form-group">
                            <label className="form-label">Additional Details</label>
                            <textarea
                                name="additionalInfo"
                                className="form-textarea"
                                placeholder="Any additional information about your business..."
                                value={formData.additionalInfo}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={handleSaveDraft}>
                            <FaSave />
                            Save Draft
                        </button>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                            <FaPaperPlane />
                            Submit for Verification
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default KYCVerification
