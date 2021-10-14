import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Dialog, TablePagination } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Add, Delete, Send } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormDialog from './DialogSendNotif';
import { useState } from 'react';
import Login from '../login/Login';
import { withRouter } from 'react-router-dom';

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

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9)
];

function UsersTable(props) {
	const classes = useStyles();
	const [ open, setopen ] = useState(false);
	const handleSendNotif = () => {
		setopen(true);
		console.log(true);
	};
	const handleClose = () => {
		setopen(false);
	};

	return (
		<Grid container>
			<FormDialog openDialog={open} handleClose={handleClose} />
			<Grid container className={classes.add}>
				<Grid>
					<Typography className={classes.text} p={4} variant="h6" color="inherit">
						Users
					</Typography>
				</Grid>
				<Grid>
					<IconButton className={classes.addIcon} aria-label="add">
						<Add />
					</IconButton>
				</Grid>
			</Grid>
			<Grid container justifyContent="center" style={{ marginTop: '2%' }}>
				<TableContainer style={{ width: '90%' }} component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="left">Name</TableCell>
								<TableCell align="center">Email</TableCell>
								<TableCell align="center">SendNotification</TableCell>
								<TableCell align="left">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell align="left">{row.calories}</TableCell>
									<TableCell align="center">{row.fat}</TableCell>
									<TableCell align="center">
										<IconButton onClick={handleSendNotif} color="inherit" aria-label="Account">
											<Send />
										</IconButton>
									</TableCell>
									<TableCell align="left">
										<IconButton color="inherit" aria-label="Account">
											<Delete />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<TablePagination
						rowsPerPageOptions={[ 10, 25, 100 ]}
						component="div"
						count={rows.length}
						align="right"
					/>
				</TableContainer>
			</Grid>
		</Grid>
	);
}
export default UsersTable;
