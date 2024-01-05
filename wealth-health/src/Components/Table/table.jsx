import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

export default function Table () {
    const employees = useSelector(state => state.employees.employees)

    const columns = [
        {
            name: "First Name",
            selector: "firstName",
            sortable: true,
        },
        {
            name: "Last Name",
            selector: "lastName",
            sortable: true,
        },
        {
            name: "Start Date",
            selector: "startDate",
            sortable: true,
        },
        {
            name: "Department",
            selector: "department",
            sortable: true,
        },
        {
            name: "Date of Birth",
            selector: "dateOfBirth",
            sortable: true,
        },
        {
            name: "Street",
            selector: "street",
            sortable: true,
        },
        {
            name: "City",
            selector: "city",
            sortable: true,
        },
        {
            name: "State",
            selector: "state",
            sortable: true,
        },
        {
            name: "Zip Code",
            selector: "zip",
            sortable: true,
        },
    ];

    return <DataTable title="View Current employees"
                      columns ={columns}
                      data={employees.length > 0 ? employees : [{firstname:'', lastname:'',startDate:'',department:'',dateOfBirth:'', street:'',city:'',state:'',zip:''}]} />

}

