import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import '../../Styles/table.css';
import {useState} from "react";


export default function Table () {
    const employees = useSelector(state => state.employees.employees)
    const data = employees.length > 0 ? employees : [{ firstName: '', lastName: '', startDate: '', department: '', dateOfBirth: '', street: '', city: '', state: '', zip: '' }];

    // custom pagination text
    const paginationOptions = {
        rowsPerPageText: 'entries per page'
    }

    //search term
    const [searchTerm, setSearchTerm] = useState('');

    // Filter employees depend on search term
    const filteredData = employees.filter(item =>
        (item.firstName + ' ' +
            item.lastName + ' ' +
            item.city + ' ' +
            item.state).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // custom table style
    const customStyles = {
        headRow: {
            style: {
                backgroundColor: '#f0f0f0',
                color: '#5A6F06',
                fontWeight: 'bold'
            },
        },
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
            },
        },
        rows: {
            style: {
                backgroundColor: '#ffffff',
            },
        },
        pagination: {
            style: {
                backgroundColor: '#f0f0f0',
                color: '#5A6F06',
                width: '1400px',
                margin: 'auto',

            },
        },
        table: {
            style: {
                width: '1400px',
                margin: ' 50px auto'
            }
        },
    };

    const columns = [
        {
            name: "First Name",
            selector: "firstName",
            sortable: true,
            wrap: true,
        },
        {
            name: "Last Name",
            selector: "lastName",
            sortable: true,
            wrap: true,
        },
        {
            name: "Start Date",
            selector: "startDate",
            sortable: true,
            wrap: true,
        },
        {
            name: "Department",
            selector: "department",
            sortable: true,
            wrap: true,
        },
        {
            name: "Date of Birth",
            selector: "dateOfBirth",
            sortable: true,
            wrap: true,
        },
        {
            name: "Street",
            selector: "street",
            sortable: true,
            wrap: true,
        },
        {
            name: "City",
            selector: "city",
            sortable: true,
            wrap: true,
        },
        {
            name: "State",
            selector: "state",
            sortable: true,
            wrap: true,
        },
        {
            name: "Zip Code",
            selector: "zip",
            sortable: true,
            wrap: true,
        },
    ];

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='search-table'
            />

            <DataTable title="View Current employees"
                       columns={columns}
                       data={filteredData.length > 0 ? filteredData : data}
                       pagination
                       fixedHeader
                       searching
                       paginationComponentOptions={paginationOptions}
                       customStyles={customStyles}
            />
        </div>
    )
}

