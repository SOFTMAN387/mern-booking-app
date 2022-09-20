import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";


// const handleCellClick = (param, event) => {
//     event.stopPropagation();
//     };

// const handleRowClick = (param, event) => {
//         event.stopPropagation();
//     };
const handleDelete = async (id) => {
    try {
        console.log(id);

    } catch (error) {

    }
}
const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
   
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'price', headerName: 'Price',type:'number', width: 80 },
    { field: 'maxPeople', headerName: 'maxPeople',type:"number", width:80 },
    { field: 'desc', headerName: 'desc', width: 100 },

    {
        field: 'roomNumbers',
        headerName: 'roomNumbers',
        type: 'number',
        width: 90,
    },
    { field: 'isAdmin', headerName: 'Status', width: 100 },
    {
        field: "Actions",
        renderCell: (cellValues) => {
            return (
                <>
                    <Link to=""
                        variant="contained"
                        color="primary"
                    // onClick={(event) => {
                    //     handleCellClick(event, cellValues);
                    // }}
                    >
                        Edit
                    </Link>

                    <Link to=""
                        variant="contained"
                        color="primary"
                        onClick={() => handleDelete(cellValues.data._id)}
                    // onClick={(event) => {
                    //     handleCellClick(event, cellValues);
                    // }}
                    >
                        Delete
                    </Link>
                </>

            );
        },
    }   // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.row.username || ''} ${params.row.email || ''}`,
    // },
];

// const rows = [
//     { id: 1, img: "image", email: 'Snow', username: 'Jon', country: "country", city: "City", phone: 35, status: "status" },
//     { id: 2, img: "image", email: 'Lannister', username: 'Cersei', country: "country", city: "City", phone: 42, status: "status" },
//     { id: 3, img: "image", email: 'Lannister', username: 'Jaime', country: "country", city: "City", phone: 45, status: "status" },
//     { id: 4, img: "image", email: 'Stark', username: 'Arya', country: "country", city: "City", phone: 16, status: "status" },
//     { id: 5, img: "image", email: 'Targaryen', username: 'Daenerys', country: "country", city: "City", phone: 45, status: "status" },
//     { id: 6, img: "image", email: 'Melisandre', username: "akd", country: "country", city: "City", phone: 15, status: "status" },
//     { id: 7, img: "image", email: 'Clifford', username: 'Ferrara', country: "country", city: "City", phone: 44, status: "status" },
//     { id: 8, img: "image", email: 'Frances', username: 'Rossini', country: "country", city: "City", phone: 36, status: "status" },
//     { id: 9, img: "image", email: 'Roxie', username: 'Harvey', country: "country", city: "City", phone: 65, status: "status" },
// ];

export default function DataTable() {
    const { data, loading } = useFetch("/room/");
    console.log(data);

    // onRowClick={handleRowClick}


    return (
        <div style={{ height: 400, width: '100%' }}>
            <Link to="/admin/rooms/new" style={{ fontWeight: "bold", color: "greenyellow", textDecoration: "none", outline: "none", cursor: "pointer", fontSize: "20px", border: "2px gray", margin: "5px" }}> + Add New</Link>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection

                getRowId={data => data._id}
            //   onCellClick={()=>handleDelete(data._id)}
            // onRowClick={handleRowClick}



            />
        </div>
    );
}