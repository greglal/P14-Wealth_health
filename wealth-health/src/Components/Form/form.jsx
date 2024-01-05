import '../../Styles/form.css'
import DatePicker from "react-datepicker";
import dayjs from 'dayjs'
import 'react-datepicker/dist/react-datepicker.css';
import States from '../../Data/States.json';
import {useState} from 'react';
import Departments from '../../Data/Departments.json';
import {useDispatch} from 'react-redux';
import {addEmployee} from '../../Redux/Reducers/employeesReducer';
import {store} from '../../Redux/store';
import Modal from '../../Components/Modal/modal';


export default function Form () {
    const dispatch = useDispatch();
    const [selectedState,setSelectedState] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    // const [modalReset, setModalReset] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);


    /**
     * for changes in  state's select input
     * @param e
     */
    const handleSelectChange = (e) =>{
        const selectedValue = e.target.value;
        setSelectedState(selectedValue);
    }

    /**
     * for changes in departement's select input
     * @param e
     */
    const handleSelectDepartment = (e) =>{
        const selectedValue = e.target.value;
        setSelectedDepartment(selectedValue);
    }

    /**
     * submit form
     */
    const handleSubmit = () => {
        dispatch(
            addEmployee({
                id: ((1+Math.random())* 0x10000).toString(16).substring(1), // to get a unique id
                firstName,
                lastName,
                dateOfBirth: dateOfBirth ? dayjs(dateOfBirth).format('MM/DD/YYYY') : null,
                startDate: startDate ? dayjs(startDate).format('MM/DD/YYYY') : null,
                street,
                city,
                zip,
                state: selectedState,
                department: selectedDepartment,
            })
        );

        setDisplayModal(true);

        // clear form fields
        setFirstName("");
        setLastName("");
        setDateOfBirth(null);
        setStartDate(null);
        setStreet("");
        setCity("");
        setZip("");
        setSelectedState("");
        setSelectedDepartment("");


        // Fetch the latest state of employees from Redux store
        const latestEmployeesState = store.getState().employees;

        // Log the last added employee (assuming it's the latest one in the array)
        const lastAddedEmployee = latestEmployeesState.employees[latestEmployeesState.employees.length - 1];
        console.log("Employee created:", lastAddedEmployee);
    }

    return (
        <div className="form-section">
            <h1>Create Employee</h1>
            <form onSubmit={(e) => { e.preventDefault(); }} className="form">
                <div className="personnal-informations">
                    <h2 className="category">Personnal informations</h2>
                    <div className="informations">
                        <div className="informations-input">
                            <div className="name">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" placeholder="First Name" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="name">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" placeholder="Last Name" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>

                        <div className="informations-input">
                            <div className="name">
                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                <DatePicker placeholderText="Birth Date" className="input" selected={dateOfBirth}
                                            onChange={(date) => setDateOfBirth(date)} ></DatePicker>
                            </div>
                            <div className="name">
                                <label htmlFor="startDate">Start Date</label>
                                <DatePicker placeholderText="Start Date" className="input" selected={startDate}
                                            onChange={(date) => setStartDate(date)} ></DatePicker>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="personnal-informations address">
                    <h2 className="category">Address</h2>
                    <div className="informations">
                        <div className="name">
                            <label htmlFor="street">Street</label>
                            <input type="text" placeholder="Street" id="street" className="input" value={street} onChange={(e) => setStreet(e.target.value)} />
                        </div>

                        <div className="name">
                            <label htmlFor="city">City</label>
                            <input type="text" placeholder="City" className="input" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </div>

                    <div className="informations">
                        <div className="name">
                            <label htmlFor="zip">Zip Code</label>
                            <input type="text" placeholder="Your ZIP Code" className="input" value={zip} onChange={(e) => setZip(e.target.value)} />
                        </div>

                        <div className="name">
                            <label htmlFor="state">State</label>
                            <select name="state" id="state" className="input"  value={selectedState} onChange={handleSelectChange} >
                                {States.map((state)=>(<option key={state.name} value={state.abbreviation}>{state.name}</option>))}
                            </select>
                         </div>
                    </div>
                </div>

                <div className="personnal-informations">
                    <h2 className="category">Department</h2>
                    <select name="department" id="department" className="input" value={selectedDepartment} onChange={handleSelectDepartment}>
                        {Departments.map((department)=>(<option key={department.name} value={department.name}>{department.name}</option>))}
                    </select>
                </div>

                <button type="submit" className="submit" onClick={handleSubmit}>Save</button>

                <Modal  showModal={displayModal} closeModal={() => setDisplayModal(false)}  message="Employee Created !" />

            </form>
        </div>
    )
}