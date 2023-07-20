import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditStaff({ data }) {
	const id = useParams();
	const pr = id.id;
	const baseUrl = `https://64994ec179fbe9bcf83ef4f0.mockapi.io/APIPE/`;
	useEffect(() => {
		fetch(baseUrl + pr)
			.then((response) => response.json())
			.then((data) => {
				setStaff(data.id);
				setAvatar(data.avatar);
				setName(data.name);
				setAge(data.age);
				setAddress(data.address);
			})
			.catch((error) => console.log(error.message));
	}, [id]);
	const [staff, setStaff] = useState('');
	const [avatar, setAvatar] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [address, setAddress] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const staff = { id, avatar, name, age, address };
		fetch(baseUrl + pr, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(staff)
		})
			.then((res) => {
				alert('Update successfully!');
				navigate('/dashboard');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	return data ? (
		<form className="edit-container" onSubmit={handleSubmit}>
			<div className="edit-form">
				<div className="form-title">
					<h2>Edit User</h2>
				</div>
				<div className="form-body">
					<div className="form-group">
						<TextField
						fullWidth id="filled-basic" label="ID" variant="filled" value={staff} disabled />
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
						<div className="update-btn">
							<Button variant="contained" color="success" type="submit">
								Update
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

export default EditStaff;
