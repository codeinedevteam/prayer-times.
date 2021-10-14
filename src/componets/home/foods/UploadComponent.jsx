import { Button, Input } from '@material-ui/core';

import React from 'react';

function UploadComponent() {
	return (
		<div style={{marginTop:"10%"}}>
			<label htmlFor="upload-photo">
				<input style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file"  />

				<Button fullWidth color="secondary" variant="contained" component="span">
					Upload photo
				</Button>
			</label>
		</div>
	);
}

export default UploadComponent;
