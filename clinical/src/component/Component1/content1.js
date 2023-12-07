import React, { useState } from 'react';import '../Component1/content1.css'

const Content1 = () => {
  const [formData, setFormData] = useState({
    participantName: '',
    age: '',
    gender: '',
    medicalCondition: '',
    email: '',
    address: '',
    contactNumber: '',
    consent: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process or submit formData here
    console.log('Form Data:', formData);
    // You can perform API calls or other logic for form submission
  };
  return (
    <div className='body1'>
      <div className='firstclass box' >
        <p>mani </p>

        
      </div>






      <div className='secondclass box'>
        <div className='h2-dd'><h1>CLINICAL TRIAL FORM</h1></div>
        
      <form onSubmit={handleSubmit}>
          <label htmlFor='participantName'>Participant Name:</label>
          <input
            type='text'
            id='participantName'
            name='participantName'
            value={formData.participantName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor='age'>Age:</label>
          <input
            type='number'
            id='age'
            name='age'
            value={formData.age}
            onChange={handleInputChange}
            required
          />

          <label htmlFor='gender'>Gender:</label>
          <select
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>

          <label htmlFor='medicalCondition'>Medical Condition:</label>
          <textarea
            id='medicalCondition'
            name='medicalCondition'
            value={formData.medicalCondition}
            onChange={handleInputChange}
            required
          ></textarea>

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor='address'>Address:</label>
          <textarea
            id='address'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>

          <label htmlFor='contactNumber'>Contact Number:</label>
          <input
            type='tel'
            id='contactNumber'
            name='contactNumber'
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />

          <div className='check-me'>
            <input
              type='checkbox'
              id='consent'
              name='consent'
              checked={formData.consent}
              onChange={handleInputChange}
              required
            />
            <span><label htmlFor='consent'>I consent to participate in the clinical trial.</label></span>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>


      <div className='thirdclass box'>

            <div className='hl'><h1>Headlines</h1></div>

          <div class="notice-section">              

            <table className='table'>
              <tbody className='tabel-list'>
                <tr><td><p className='tl' href='www.google.com'>This is the content of the notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></td></tr>
                <tr><td><p className='tl' href='www.google.com'>This is the content of the notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></td></tr>
                <tr><td><p className='tl' href='www.google.com'>This is the content of the notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></td></tr>
                <tr><td><p className='tl' href='www.google.com'>This is the content of the notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></td></tr>
                <tr><td><p className='tl' href='www.google.com'>This is the content of the notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></td></tr>
                <tr><td><p className='tl' href='www.google.com'>This is the content of the notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></td></tr>
                <tr><td><p className='tl' href='www.google.com'>This is the content of the notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></td></tr>
                <tr><td><p className='tl' href='www.google.com'>This is the content of the notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></td></tr>

              </tbody>
            </table>
        </div>

      </div>
    </div>
    
  )
}

export default Content1