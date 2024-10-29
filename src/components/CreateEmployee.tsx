
import React, { useState } from 'react';
// const DatePicker = lazy(() => import('react-datepicker'));
// const Select = lazy(() => import('react-select'));
// const Modal = lazy(() => import('demo-module-test-hrnet'));
import Modal from 'demo-module-test-hrnet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useEmployeeContext } from '../context/EmployeeContext';
import { departments } from '../utils/Departments';
import { states } from '../utils/States';


//--------------------installer webpack-bundle-analyzer ------------------------

export default function CreateEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [department, setDepartment] = useState<any>(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState<any>(null);
  const [zipCode, setZipCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addEmployee } = useEmployeeContext();

  const saveEmployee = () => {
    const employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth?.toLocaleDateString() || '',
      startDate: startDate?.toLocaleDateString() || '',
      department: department?.value,
      street,
      city,
      state: state?.value || '',
      zipCode
    };
    addEmployee(employee);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          className="form-control"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <div id="date-of-birth">
          <DatePicker
            selected={dateOfBirth}
            onChange={(date: Date | null) => setDateOfBirth(date)}
            dateFormat="MM/dd/yyyy"
            className="form-control"
          />
        </div>

        <label htmlFor="start-date">Start Date</label>
        <div id="start-date">
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            className="form-control"
          />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            type="text"
            className="form-control"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="state">State</label>
          <Select
            options={states}
            value={state}
            onChange={setState}
            className="form-control"
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="number"
            className="form-control"
            id="zip-code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select
          options={departments}
          value={department}
          onChange={setDepartment}
          className="form-control"
        />
      </form>
      <button onClick={saveEmployee}>Save</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        text="Employee Created!"
        backgroundColor='#fff'
        buttonColor="#000"
      />
    </>

  )
}
