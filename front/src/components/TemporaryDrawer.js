import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Map from "../containers/Map";
import FloatingActionButtons from "./FloattingButtonAction";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
	list: {
		width: 250
	},
	fullList: {
		width: "auto"
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar
	}
});

class TemporaryDrawer extends React.Component {
	state = {
		top: false,
		left: false,
		bottom: false,
		right: false
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};

	render() {
		const { classes } = this.props;

		const sideList = (
			<div className={classes.list}>
				<Filtres/>
			</div>
		);

		return (
			<div>
				<FloatingActionButtons onToggleDrawer={this.toggleDrawer("left", true)}/>
				<Map />
				<Drawer open={this.state.left} onClose={this.toggleDrawer("left", false)}>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.toggleDrawer("left", false)}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div tabIndex={0} role="button">
						{sideList}
					</div>
				</Drawer>
			</div>
		);
	}
}

TemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
