const Button = ({children, className, type, name, id, onSubmit, onClick}) => {
	return (
		<button
			type={type}
			className={`${className} custom-class-names` }
			name={name}
			onSubmit={onSubmit}
			onClick={onClick}
			id={id ?? ""}
		>
			{children}
		</button>
	)
}

export default Button;