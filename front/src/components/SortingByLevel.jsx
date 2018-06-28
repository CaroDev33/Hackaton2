import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SortingByLevel extends Component {

	change(event, type) {
		this.props.change(event.target.value, type);
	}
	
	render() {
		return (
			<div>
				<FormControl className='formControl'>
					<InputLabel htmlFor="Status">Niveau</InputLabel>
					<Select value={this.props.statusNiveau} onChange={(event) => this.change(event, 'niveau')} input={<Input name="status" id="Status"/>}>
						<MenuItem value="">
							<em>Aucun</em>
						</MenuItem>
						<MenuItem value='debutant'>Débutant</MenuItem>
						<MenuItem value='junior'>Junior</MenuItem>
						<MenuItem value='intermediaire'>Intermédiaire</MenuItem>
						<MenuItem value='senior'>Senior</MenuItem>
						<MenuItem value='expert'>Expert</MenuItem>
		
					</Select>
					<FormHelperText>Trier par niveau</FormHelperText>
				</FormControl>
			</div>
		);
	}
}

export default (SortingByLevel);


