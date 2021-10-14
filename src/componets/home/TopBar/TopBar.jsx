import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';

function TopBar() {
	const useStyles = makeStyles({
		root: {
			display:"flex",
			flexGrow: 1,
			

		},
		grow: {
	
			flexGrow:1
		},
		accountIcon: {
		
		}
	});
	const classes = useStyles();
	return (
		<div style={{ width: '100%' }}>
			<AppBar  position="static" >
				<Toolbar className={classes.root}>
					<Typography p={1} variant="h6" color="inherit" className={classes.grow}>
						TopBar
					</Typography>
					<IconButton className={classes.accountIcon} color="inherit" aria-label="Account">
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default TopBar;
