import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SortingByType extends Component {
	
	change(event, type) {
		this.props.change(event.target.value, type);
	}
	
	render() {
		return (
			<div>
				<FormControl className='formControl'>
					<InputLabel htmlFor="Status">Type</InputLabel>
					<Select value={this.props.statusType} onChange={(event) => this.change(event, 'type')} input={<Input name="status" id="Status"/>}>
						<MenuItem value="">
							<em>Aucun</em>
						</MenuItem>
						<MenuItem value='spectacle'>Spectable</MenuItem>
						<MenuItem value='humour'>Humour</MenuItem>
						<MenuItem value='agile'>Agile</MenuItem>
						<MenuItem value='sensations_fortes'>Sensations fortes</MenuItem>
						<MenuItem value='horreur'>Horreur</MenuItem>
						<MenuItem value='utile'>Utile</MenuItem>
					</Select>
					<FormHelperText>Trier par type de contenu</FormHelperText>
				</FormControl>
			</div>
		);
	}
}

export default (SortingByType);

