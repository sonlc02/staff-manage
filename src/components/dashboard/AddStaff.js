import { Button, Dialog, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.scss';
function AddStaff({ data }) {
	const [id, setId] = useState('');
	const [avatar, setAvatar] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [address, setAddress] = useState('');
	const navigate = useNavigate();
	const baseUrl = `https://64994ec179fbe9bcf83ef4f0.mockapi.io/APIPE`;

	const handleSubmit = (e) => {
		e.preventDefault();
		const staff = { id, avatar, name, age, address };
		fetch(baseUrl, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(staff)
		})
			.then((res) => {
				alert('Add successfully!');
				navigate('/dashboard');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return data ? (
		<form className="add-container" onSubmit={handleSubmit}>
			<div className="add-form">
				<div className="form-title">
					<h2>Add New User</h2>
				</div>
				<div className="form-body">
					<div className="form-group">
						<TextField
						fullWidth id="filled-basic" label="ID" variant="filled" value={id} disabled />
					</div>
					<div className="form-group">
						<TextField
						fullWidth
							id="filled-basic"
							label="Avatar"
							variant="filled"
							value={avatar}
							onChange={(e) => setAvatar(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<TextField
						fullWidth
							id="filled-basic"
							label="Name"
							variant="filled"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<TextField
						fullWidth
							id="filled-basic"
							label="Age"
							variant="filled"
							value={age}
							onChange={(e) => setAge(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<TextField
						fullWidth
							id="filled-basic"
							label="Address"
							variant="filled"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<div className="save-btn">
							<Button variant="contained" color="success" type="submit">
								Save
							</Button>
						</div>
						<div className="cancel-btn">
							<Link to="/dashboard">
								<Button variant="contained" color="error">
									Cancel
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</form>
	) : null;
}

export default AddStaff;
