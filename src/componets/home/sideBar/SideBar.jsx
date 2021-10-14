import { Box, Grid } from '@material-ui/core';
import { BrowserRouter , Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

function SideBar() {
	const useStyles = makeStyles({
		container: {
			display: 'flex',
			backgroundColor: '#FFFFFF',
			height: '100vh',
			borderTopRightRadius: '8px',
		},
		link: {
			width: '100%',
			fontSize: 18,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginLeft: '10%',
			cursor: ' pointer'
		},
		list: {
			marginTop: '30%'
		}
	});
	const classes = useStyles();
	return (
		<div style={{ width: '100%', overflow: 'hidden' }}>
			<Box boxShadow={2}>
				<Grid className={classes.container}>
					<List className={classes.list}>
						<Grid className={classes.link}>
							<IconButton className={classes.accountIcon} color="inherit" aria-label="Account">
								<AccountCircle />
							</IconButton>
							<Link to='/home/Users'>Users</Link>
						</Grid>
						<Grid className={classes.link}>
							<IconButton className={classes.accountIcon} color="inherit" aria-label="Account">
								<AccountCircle />
							</IconButton>
							<Link to='/home/Foods'>Foods</Link>
						</Grid>
					</List>
				</Grid>
			</Box>
		</div>
	);
}

export default SideBar;
