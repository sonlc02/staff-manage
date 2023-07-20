import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import './Dashboard.scss'
import { Link, useNavigate } from 'react-router-dom';

function Dashboard({data}) {
  const [staff, setStaff] = useState([]);
  const baseUrl = `https://64994ec179fbe9bcf83ef4f0.mockapi.io/APIPE`
  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => setStaff(data))
      .catch(error => console.log(error.message));

  }, []);

  const navigate = useNavigate();

  const EditFunction = (id) => {
    navigate("/dashboard/edit/" + id);
  }
  const RemoveFunction = (id) => {
	if (window.confirm('Do you want to remove?')) {
		const baseUrl = `https://64994ec179fbe9bcf83ef4f0.mockapi.io/APIPE/`;
		fetch(baseUrl + id, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((data) => {
				alert('Remove successfully!');
				setStaff((prevStaff) => prevStaff.filter((staff) => staff.id !== id));
			})
			.catch((err) => {
				console.log(err.message);
			});
	}
};
  return (
	<div>
			{data ? (
    <TableContainer component={Paper} className='dashboard-container'>
      <h2 style={{textAlign:'center', color:'red', fontSize:'50px'}}>List of User</h2>
      <Link to='/dashboard/add' className='add-btn'><Button variant="contained" >
        Create
      </Button>
      </Link>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='staff-table'>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Avatar</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell align="center">{staff.id}</TableCell>

              <TableCell component="th" scope="row" align='center'>
                <img style={{width:'100px', height:'100px'}} src={staff.avatar} alt=''/>
              </TableCell>
              <TableCell align="center">{staff.name}</TableCell>
              <TableCell align="center">{staff.age}</TableCell>
              <TableCell align="center">{staff.address}</TableCell>
              <TableCell align="center">
                <Button variant="outlined" color='success'
                className='edit-btn'
                  onClick={() => { EditFunction(staff.id) }}>
                  <EditIcon />
                </Button>
                <Button variant="outlined" color='error'
                className='delete-btn'
                  onClick={() => { RemoveFunction(staff.id) }}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	) : (
		<div style={{color:'red', textAlign:'center', fontSize:'40px'}} className="dashboard-container">Please login to access the dashboard.</div>
	)}
</div>
  )
}

export default Dashboard