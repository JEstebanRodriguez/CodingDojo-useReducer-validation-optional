import React, { useReducer } from 'react'
import { Input } from './components/Input'
import { formReducer } from './helpers'
import { initialState } from './helpers/state-declaration'

const App = () => {
	const [state, dispatch] = useReducer(formReducer, initialState)

	const { firstName, lastName, email } = state

	const handleChange = ({ target }) => {
		console.log(state)
		dispatch({
			type: target.name,
			payload: {
				value: target.value,
				error: null
			}
		})
	}

	const handleFirstNameChange = (e) => {
		const { name, value } = e.target
		handleChange(e)
		if (value.length < 4) {
			dispatch({
				type: name,
				payload: {
					value,
					error: 'El campo debe tener mas de 4 caracteres'
				}
			})
		}
	}
	const handleLastNameChange = (e) => {
		const { name, value } = e.target
		handleChange(e)
		if (value.length < 4) {
			dispatch({
				type: name,
				payload: {
					value,
					error: 'El campo debe tener mas de 4 caracteres'
				}
			})
		}
	}
	const handleEmailChange = (e) => {
		const { name, value } = e.target
		handleChange(e)
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
			dispatch({
				type: name,
				payload: {
					value,
					error: 'El campo debe ser un email valido'
				}
			})
		}
	}

	return (
		<div className='container'>
			<form>
				<Input
					label='First Name'
					type='text'
					name='firstName'
					placeholder='Enter first name'
					value={firstName.value}
					onChange={handleFirstNameChange}
					err={state.firstName.error}
				/>
				<Input
					label='Last Name'
					type='text'
					name='lastName'
					placeholder='Enter last name'
					value={lastName.value}
					onChange={handleLastNameChange}
					err={state.lastName.error}
				/>
				<Input
					label='Email Address'
					type='email'
					name='email'
					placeholder='Enter email address'
					value={email.value}
					onChange={handleEmailChange}
					err={state.email.error}
				/>
				<button className='btn'>Submit</button>
			</form>
		</div>
	)
}

export default App
