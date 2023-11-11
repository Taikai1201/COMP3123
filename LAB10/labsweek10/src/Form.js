import React, { useState } from 'react';
import './App.css';

const Form = () => {
  const [data, setData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const [submit, setSubmit] = useState(false);

  const onEnter = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setSubmit(true);
  };

  return (
    <div className='form'>
      <h1>Data Entry Form</h1>
      <form>
        <div className="container">
          <div className="input-group">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="email"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={data.email}
              onChange={onEnter}
              required
            />
          </div>

          <div className="input-group">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input
              className="name"
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              value={data.name}
              onChange={onEnter}
              required
            />
          </div>
        </div>

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="1234 Main St"
          value={data.address}
          onChange={onEnter}
        />

        <label htmlFor="address2">Address 2:</label>
        <input
          type="text"
          id="address2"
          name="address2"
          placeholder="Apartment, studio or floor"
          value={data.address2}
          onChange={onEnter}
        />

        <div className="bottom">
          <div className="input-group">
            <label className="label" htmlFor="city">
              City:
            </label>
            <input
              className="city"
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={data.city}
              onChange={onEnter}
              required
            />
          </div>

          <div className="input-group">
            <label className="label" htmlFor="province">
              Province:
            </label>
            <select
              id="province"
              name="province"
              value={data.province}
              onChange={onEnter}
            >
              <option value="">Choose...</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
            </select>
          </div>

          <div className="input-group">
            <label className="label" htmlFor="postalCode">
              Postal Code:
            </label>
            <input
              className="postalCode"
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Postal Code"
              value={data.postalCode}
              onChange={onEnter}
              required
            />
          </div>
        </div>

        <input type="submit" value="Submit" onClick={onClickSubmit} />

        {submit && (
          <div id="output">
            <p>Email: {data.email}</p>
            <p>Full Name: {data.name}</p>
            <p>Address: {data.address}</p>
            <p>City: {data.city}</p>
            <p>Province: {data.province}</p>
            <p>Postal Code: {data.postalCode}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
