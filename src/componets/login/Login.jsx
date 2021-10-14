import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import axios, { post } from 'axios';
import ReactLoading from 'react-loading';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function Login() {
	const [ loading, setLoading ] = useState(false);

	const classes = useStyles();
	let history = useHistory();
	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		onSubmit: (values) => {
			setLoading(true);
			axios({
				method: 'post',
				url: 'https://prayer-times-6.herokuapp.com/auth/login',
				data: { username: values.username, password: values.password }
				// headers: { 'Content-Type': 'multipart/form-data' }
			})
				.then(function(response) {
					//handle success
					console.log(response);
					let token = response.data.token;
					localStorage.setItem('token', token);
					history.push('/home');
					setLoading(false);
				})
				.catch(function(response) {
					alert('Username and password are incorrect')
					window.location.reload()
					console.log(response);
				});
		}
	});
	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Avatar className={classes.avatar} />

				<Typography style={{paddingBottom:'10%'}} component="h1" variant="h5">
					Sign in
				</Typography>
				{loading ? (
					<ReactLoading   type={'spin'} color={'#89CFF0'} height={'20%'} width={'20%'} />
				) : (
					<form className={classes.form} onSubmit={formik.handleSubmit}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="username"
							name="username"
							onChange={formik.handleChange}
							value={formik.values.username}
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							// onClick={()=>history.push("/home")}
						>
							Login
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									Don't have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
					</form>
				)}
			</div>
		</Container>
	);
}
