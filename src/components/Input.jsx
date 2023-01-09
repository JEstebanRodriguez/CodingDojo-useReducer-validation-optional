import React from 'react'

export const Input = ({
	label,
	type,
	name,
	placeholder,
	value,
	onChange,
	err
}) => {
	return (
		<div className='form-group'>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				className='form-input'
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{err && <p className='error'>{err}</p>}
		</div>
	)
}
