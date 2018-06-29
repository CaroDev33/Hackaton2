import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';

import {getAllInfos, getSort} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import SortingByTime from '../components/SortingByTime';
import SortingByType from '../components/SortingByType';
import SortingByLevel from '../components/SortingByLevel';
import Map from './Map'

// import "../index.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			sort: [],
			renderSort: [],
			status:false,
			statusType:'',
			statusTime:'',
			statusNiveau:''
		};
	}
	
	componentWillMount() {
		this.props.getAllInfos();
	}
	
	componentWillReceiveProps(nextProps) {
		if (this.state.data.length === 0) {
			this.setState({data: nextProps.All, renderSort: nextProps.All})
		} else {
			this.setState({renderSort: nextProps.Sort})
		}
		this.getStatus();
	}
	
	getStatus() {
		if((this.state.statusNiveau)||(this.state.statusTime)||(this.state.statusType)) {
			this.setState({status:true})
		} else {
			this.setState({status:false})
		}
	}
	
	handleChange = (event, type) => {
		let action = event;
		let tab = this.state.sort;
		switch(type) {
			case "type":
				this.setState({statusType: event});break;
			case "duree":
				this.setState({statusTime: event});break;
			case "niveau":
				this.setState({statusNiveau: event});break;
			default:
				this.setState({statusType:'', statusTime:'', statusNiveau:''});
		}
		
		if (event === "") {
			for(let i = 0; i < this.state.sort.length; i++) {
				if(this.state.sort[i].type === type) {
					tab.splice(i, 1);
					this.setState({sort: tab})
				}
			}
		} else {
			let count = 0;
			for(let i = 0; i < this.state.sort.length; i++) {
				if(this.state.sort[i].type === type) {
					let newObject = {
						...this.state.sort[i],
						action: action
					};
					tab.splice(i, 1, newObject);
					count++
				}
			}
			if(count === 0) {
				tab.push({type, action});
				this.setState({sort: tab})
			}
		}
		this.props.getSort(tab)
	};
	
	render() {
		return (
			<div>
				<h1 style={{marginLeft:"630px", paddingBottom:"1px", paddingTop:"1px"}} >WildLand</h1>
				<Grid container style={{marginBottom:"-20px", paddingLeft:"230px", paddingBottom:"20px", marginRight:"150px", backgroundColor: "#b9ddfa"}}>
					<Grid item xs={4}>
						<SortingByTime statusTime={this.state.statusTime} change={this.handleChange.bind(this)}/>
					</Grid>
					<Grid item xs={4}>
						<SortingByType statusType={this.state.statusType} change={this.handleChange.bind(this)}/>
					</Grid>
					<Grid item xs={4}>
						<SortingByLevel statusNiveau={this.state.statusNiveau} change={this.handleChange.bind(this)}/>
					</Grid>
				</Grid>
				<Grid container>
					<Map/>
				</Grid>
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
	return bindActionCreators({getAllInfos, getSort}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
{
					tab.map((x, i) => {
						return (
							<Grid item xs={6}>
								<Paper key={i} style={{margin:"25px", height:'250px'}}>
									<p>id : {x.id} --- nom : {x.nom}</p>
									<p>type : {x.type}</p>
									<p>duree : {x.duree}</p>
									<p>{x.description}</p>
								</Paper>
							</Grid>
						)
					})
				}
 */