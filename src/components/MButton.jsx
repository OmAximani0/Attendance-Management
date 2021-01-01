import Button from '@material-ui/core/Button';

const MButton = props => {
	return(
		<>
			<Button
				style={props.style}
				variant="contained"
				color={props.color}
				className={props.className}
				type={props.type}
				disabled={props.disabled}
			>
				{props.label}
			</Button>
		</>
	);
};

export default MButton;