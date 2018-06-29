import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



const styles = theme => ({
  paper: {
    position: 'relative',
    width: theme.spacing.unit * 110,

  },
	card: {
    maxWidth: theme.spacing.unit * 110,
    fontSize: "1.3rem",
	},
	media: {
		height: "auto",
	  paddingTop: "56.25%" // 16:9
	},
	avatar: {
		backgroundColor: "#FFD700",
  },
  title:{
    "font-size": "1.3rem",
    backgroundColor: "red",
  }
 
});

class Attraction extends Component {

	render() {
		const { classes } = this.props;
		return (
			<div>
        <Modal 
				onClose={this.props.onClose}
        open={this.props.open}
        >
        <div style={getModalStyle()} className={classes.paper}>
          <Card className={classes.card}>
          
						<CardHeader
							avatar={
								<Avatar aria-label="avatar" src={this.props.infos.avatar} className={classes.avatar} />
							}
              title={this.props.infos.nom}
              subheader={this.props.infos.horaires}
              />
						<CardMedia className={classes.media} image={this.props.infos.image} title={this.props.infos.nom}/>
						<CardContent>
							<Typography component="p" variant="subheading" >
								{this.props.infos.description}
							</Typography>
						</CardContent>
          </Card>
         </div>
				</Modal>
			</div>
		);
	}
}




export default withStyles(styles)(Attraction);


