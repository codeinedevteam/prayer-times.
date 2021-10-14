import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, Button, Dialog, TablePagination } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { AccountBalance, Add, Ballot, Delete, Edit, Send } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import DialogCreateFood from './DialogCreateFood';
import axios from 'axios';
import ReactLoading from 'react-loading';

const useStyles = makeStyles({
	addIcon: {
		fontSize: '50px',
		border: 'solid white 1px',
		backgroundColor: 'white'
	},
	add: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '10px',
		marginRight: '3%'
	},
	text: {
		fontSize: '25px',
		padding: '5%',
		marginLeft: '30%'
	}
});

function FoodsTable(props) {
	const classes = useStyles();
	const [ open, setopen ] = useState(false);
	const [ data, setdata ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const openDialog = () => {
		setopen(true);
		console.log(true);
		getData();
	};

	const getData = () => {
		setLoading(true);
		axios.get('https://prayer-times-6.herokuapp.com/foods').then((response) => {
			let data = response.data.data;
			setdata(data);
			setLoading(false);
			console.log('ss', data);
		});
	};
	const deleteData = (id) => {
		setLoading(true)
		console.log(id);
		axios
			.delete(`https://prayer-times-6.herokuapp.com/foods/${id}`, {
				headers: {
					'Content-Type': 'multipart/form-data',
					token: localStorage.getItem('token')
				}
			})
			.then((response) => {
				console.log(response);
				const newData = data.filter((data) => data._id == !data._id);
				setdata(newData);

				getData();
			})
			.catch((err) => console.log(err));
	};
	const handleClose = () => {
		getData();
		setopen(false);
	};
	useEffect(() => {
		getData();
		console.log(data.forEach((data) => console.log(data)));
	}, []);
	const local = 'https://prayer-times-6.herokuapp.com';

	return(
		<Grid container item xs={12}>
			<DialogCreateFood openDialog={open} handleClose={handleClose} getdata={getData} />
			<Grid container className={classes.add} item sm={12}>
				<Grid item sm={0}>
					<Typography className={classes.text} p={4} variant="h6" color="inherit">
						Foods
					</Typography>
				</Grid>
				<Grid item sm={0}>
					<IconButton onClick={openDialog} className={classes.addIcon} aria-label="add">
						<Add />
					</IconButton>
				</Grid>
			</Grid>
			<Grid item xs={12} container justifyContent="center" style={{ marginTop: '2%' }}>
				{loading ?  <ReactLoading type={"spin"} color={"#89CFF0"} height={'10%'} width={'10%'} /> : <TableContainer style={{ width: '90%' }} component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="left">Image</TableCell>
								<TableCell align="center">Name</TableCell>
								<TableCell align="center">desc</TableCell>
								<TableCell align="center">H/h</TableCell>
								<TableCell align="center">barcode</TableCell>
								<TableCell align="center">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((data, key) => (
								<TableRow key={Math.random()}>
									<TableCell align="left">
										{data.img ? (
											<img
												src={local.concat(data.img)}
												style={{ width: '50px', height: '50px', borderRadius: '50%' }}
											/>
										) : (
											<div>
												<Avatar />
											</div>
										)}
									</TableCell>
									<TableCell align="center">{data.name}</TableCell>
									<TableCell align="center">{data.desc}</TableCell>
									<TableCell align="center">{data.kind ? 'halal' : 'haram '}</TableCell>
									<TableCell align="center">{data.barCode}</TableCell>

									<TableCell align="center">
										<IconButton color="inherit" aria-label="Account">
											<Edit />
										</IconButton>
										<IconButton
											onClick={() => {
												deleteData(data._id);
											}}
											color="inherit"
											aria-label="Account"
										>
											<Delete />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<TablePagination component="div" count={data.length} align="right" />
				</TableContainer>}
				
			</Grid>
		</Grid>
	)
}

export default FoodsTable;
