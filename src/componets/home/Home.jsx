import React from 'react';
import TopBar from './TopBar/TopBar';
import Grid from '@material-ui/core/Grid';
import Login from '../login/Login';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from './sideBar/SideBar';
import { Route, Switch, withRouter, BrowserRouter as Router } from 'react-router-dom';
import FoodsTable from '../home/foods/Foods';
import UsersTable from '../users/Users';

function Home() {
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
			backgroundColor: '#EBECF0',
			zIndex: '.5'
		},
		paper: {}
	}));
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container>
				<Grid xs={1} sm={2}>
					<SideBar />
				</Grid>
				<Grid xs={9} sm={10}>
					<TopBar />
					<Grid>
						<Switch>
							
								<Route exact path={'/home/Users'}>
									<UsersTable />
								</Route>
								<Route  path={'/home/Foods'}>
									<FoodsTable />
								</Route>
							
						</Switch>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
