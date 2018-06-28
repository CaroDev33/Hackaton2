import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
	button: {
		position: "absolute",
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});

function FloatingActionButtons(props) {
	const { classes } = props;
	return (
		<div>
			<Button
				variant="fab"
				color="primary"
				aria-label="add"
				className={classes.button}
				onToggleDrawer
				onClick={() => props.onToggleDrawer()}
			>
				<MenuIcon />
			</Button>
		</div>
	);
}

FloatingActionButtons.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
