import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// Floating BTN
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Map from "../containers/Map";
const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	button: {
		margin: "24px",
		position: "absolute"
	},
	appFrame: {
		height: 430,
		zIndex: 1,
		overflow: "hidden",
		position: "relative",
		display: "flex",
		width: "100%"
	},
	appBar: {
		position: "absolute",
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	"appBarShift-left": {
		marginLeft: drawerWidth
	},
	"appBarShift-right": {
		marginRight: drawerWidth
	},
	menuButton: {
		position: "absolute",
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: "none"
	},
	drawerPaper: {
		position: "relative",
		width: drawerWidth
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,

		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	"content-left": {
		marginLeft: -drawerWidth - 1
	},
	"content-right": {
		marginRight: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	"contentShift-left": {
		marginLeft: 0
	},
	"contentShift-right": {
		marginRight: 0
	}
});

class DrawerBar extends React.Component {
	state = {
		open: false,
		anchor: "left"
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	handleChangeAnchor = event => {
		this.setState({
			anchor: event.target.value
		});
	};

	render() {
		const { classes, theme } = this.props;
		const { anchor, open } = this.state;

		const drawer = (
			<Drawer
				variant="persistent"
				anchor={anchor}
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={this.handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>okokok</List>
				<Divider />
				<List>kokoko</List>
			</Drawer>
		);

		let before = null;
		let after = null;

		if (anchor === "left") {
			before = drawer;
		} else {
			after = drawer;
		}

		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					{before}
					<main
						style={{ backgroundColor: "red" }}
						className={classNames(
							classes.content,
							classes[`content-${anchor}`],
							{
								[classes.contentShift]: open,
								[classes[`contentShift-${anchor}`]]: open
							}
						)}
					>
						<Button
							onClick={this.handleDrawerOpen}
							variant="fab"
							color="primary"
							aria-label="add"
							className={classNames(
								classes.menuButton,
								open && classes.hide
							)}
						>
							<AddIcon />
						</Button>

						<div
							className={classes.drawerHeader}
							style={{ backgroundColor: "red" }}
						/>
						<Map />
					</main>
					{after}
				</div>
			</div>
		);
	}
}

DrawerBar.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DrawerBar);
