import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SortingByTime extends Component {

	change(event, type) {
		this.props.change(event.target.value, type);
	}
	
	render() {
		return (
			<div>
				<FormControl className='formControl'>
					<InputLabel htmlFor="Status">Duree</InputLabel>
					<Select value={this.props.statusTime} onChange={(event) => this.change(event, 'duree')} input={<Input name="status" id="Status"/>}>
						<MenuItem value="">
							<em>Aucun</em>
						</MenuItem>
						<MenuItem value='15'>Moins de 15m</MenuItem>
						<MenuItem value='30'>Moins de 30m</MenuItem>
						<MenuItem value='120'>Moins de 2h</MenuItem>
						<MenuItem value='540'>Toute la journée</MenuItem>
					</Select>
					<FormHelperText>Trier par durée</FormHelperText>
				</FormControl>
			</div>
		);
	}
}

export default (SortingByTime);


