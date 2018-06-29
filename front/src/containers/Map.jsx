import React, {Component} from 'react';
import Attraction from './Attraction';
import {getDetails} from "../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			renderSort: [],
			open: false,
			modal:{},
			status:false
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps : ', nextProps)

		if (this.state.data.length === 0) {
			this.setState({status:false});
			this.setState({data: nextProps.All, renderSort: nextProps.All})
		} else {
			this.setState({status:true});
			this.setState({renderSort: nextProps.Sort})
		}
	}

	handleOpen = (nom) => {
		this.setState({ open: true });
		if(!this.state.open) {
			this.getDetails(nom)
		} else {
			this.getDetails()
		}
	};

	handleClose = () => {
		this.setState({ open:false, modal:{} });
	};

	getDetails(nom) {
		let tab = this.props.All;
		if (this.state.status) {
			tab = this.props.Sort;
		}
		for(let i = 0; i < tab.length; i++) {
			if(tab[i].nom === nom) {
				this.setState({modal:tab[i]})
			}
		}
	}

	render() {
		let tab = this.props.All;
		if (this.state.status) {
			tab = this.state.renderSort;
		}
			return (
				<div>.
					<img src="map16-9.png" width="100%" height="100%" alt="Plan" usemap="#logo"/>
					<div name="logo">
						{
							tab.map((x, i) => {
								return (
									<div key={i}>
										<img style={{top:`${x.top}%`, left:`${x.left}%`,position: "absolute"}}
										     onClick={() => this.handleOpen(x.nom)}
										     src={x.marqueur}
										     alt="marker"
										     width={50}
										     height={143 / 2}
										/>
									</div>
								)
							})
						}

					</div>
					<div>
						<div>
							<Attraction onClose={this.handleClose} open={this.state.open} infos={this.state.modal}/>
						</div>
					</div>
				</div>
			);

	}
}

const mapStateToProps = state => {
	return {
		All: state.All,
		Sort: state.Sort,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getDetails}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);
