import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classnames from "classnames";
import {connect} from "react-redux";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const styles = theme => ({
	paper: {
		position: "absolute",
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4
	},
	card: {
		maxWidth: 400
	},
	media: {
		height: "auto",
		backgroundColor: "red",
		paddingTop: "56.25%" // 16:9
	},
	actions: {
		display: "flex"
	},
	expand: {
		transform: "rotate(0deg)",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		}),
		marginLeft: "auto"
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	avatar: {
		backgroundColor: "#FFD700",
	}
});

class Attraction extends Component {

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Modal
				onClose={this.props.onClose}
				open={this.props.open}>
					<Card className={classes.card}>
						<CardHeader
							avatar={
								<Avatar aria-label="Recipe" src={this.props.infos.avatar} className={classes.avatar} />
							}
							title={this.props.infos.nom}
							subheader={this.props.infos.horaires}/>
						<CardMedia className={classes.media} image={this.props.infos.image} title={this.props.infos.nom}/>
						<CardContent>
							<Typography component="p">
								{this.props.infos.description}
							</Typography>
						</CardContent>
					</Card>
				</Modal>
			</div>
		);
	}
}




export default withStyles(styles)(Attraction);


