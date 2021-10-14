import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, MenuItem, Select } from '@material-ui/core';
import UploadComponent from './UploadComponent';
import { useFormik } from 'formik';
import axios, { post } from 'axios';
import ReactLoading from 'react-loading';

export default function DialogCreateFood(props) {
	const [ open, setOpen ] = React.useState(false);
	const [ loading, setLoading ] = React.useState(false);

	let formData = new FormData();

	const handleClose = () => {
		setOpen(false);
		console.log(open);
	};
	const formik = useFormik({
		initialValues: {
			name:'',
			desc: '',
			barCode: '',
			kind:'',
			file: ''
		},
		onSubmit: (values) => {
			if (values.file) {
				var bodyFormData = new FormData();
				console.log('ss', values.file.name);
				bodyFormData.append('img', values.file);
				bodyFormData.append('name', values.name);
				bodyFormData.append('desc', values.desc);
				bodyFormData.append('kind', values.kind);
				bodyFormData.append('barCode', values.barCode);
				console.log(bodyFormData);
				console.log(values);
				setLoading(true);
				axios({
					method: 'post',
					url: 'https://prayer-times-6.herokuapp.com/foods',
					data: bodyFormData,
					// processData: false,
					// contentType: false,
					headers: {
						'Content-Type': 'multipart/form-data',
						token: localStorage.getItem('token')
					}
				})
					.then(function(response) {
						//handle success
						(values.barCode = ''),
							(values.desc = ''),
							(values.file = ''),
							(values.kind = ''),
							(values.name = '');
						console.log(response);
						props.getdata();
						props.handleClose()

						setLoading(false);
					})
					.catch(function(response) {
						//handle error
						setLoading(false)
						console.log(response);
					});
			} else {
				setLoading(true)
				axios({
					method: 'post',
					url: 'https://prayer-times-6.herokuapp.com/foods',
					data: values,
					// processData: false,
					// contentType: false,
					headers: {
						token: localStorage.getItem('token')
					}
				})
					.then(function(response) {
						(values.barCode = ''),
						(values.desc = ''),
						(values.file = ''),
						(values.kind = ''),
						(values.name = '');
					console.log(response)
					props.getdata();
					props.handleClose()
					setLoading(false);
					})
					.catch(function(response) {
						//handle error
						setLoading(false)
						console.log(response);
					});
			}
		}
	});
	return (
		<div>
			<Dialog onSubmit={formik.handleSubmit} open={props.openDialog} onClose={props.handleClose}>
				<DialogTitle id="form-dialog-title">creating Food...</DialogTitle>
				<DialogContent>
					{loading ? (
						<Grid container justifyContent="center">
						<ReactLoading type={'spin'} color={'#89CFF0'} height={'50%'} width={'50%'} />
						</Grid>
					) : (
						<form onSubmit={formik.handleSubmit}>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Name"
								name="name"
								fullWidth
								onChange={formik.handleChange}
								value={formik.values.name}
							/>
							<TextField
								margin="dense"
								id="barCode"
								label="Barcode"
								name="barCode"
								fullWidth
								onChange={formik.handleChange}
								value={formik.values.barCode}
							/>
							<TextField
								margin="dense"
								id="desc"
								label="description"
								fullWidth
								name="desc"
								onChange={formik.handleChange}
								value={formik.values.desc}
							/>

							<Select
								style={{ marginTop: '5%' }}
								labelId="halal/haram"
								fullWidth
								name="kind"
								onChange={formik.handleChange}
								value={formik.values.kind}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={true}>halal</MenuItem>
								<MenuItem value={false}>haram</MenuItem>
							</Select>
							<div style={{ marginTop: '10%' }}>
								<label htmlFor="file">
									<input
										onChange={(event) => {
											formik.setFieldValue('file', event.currentTarget.files[0]);
										}}
										value={formik.values.img}
										style={{ display: 'none' }}
										id="file"
										name="file"
										type="file"
									/>

									<Button fullWidth color="secondary" variant="contained" component="span">
										Upload photo
									</Button>
								</label>
							</div>
							<DialogActions style={{ marginRight: '2%', alignItems: 'center', Width: '100%' }}>
								<Button onClick={props.handleClose} color="primary">
									Cancel
								</Button>
								<Button type="submit"  color="primary">
									create
								</Button>
							</DialogActions>
						</form>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
}
