import React, { useState } from 'react'

function LoginScreen() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [emailError, setemailError] = useState('')

    const handleValidation = (event) => {
        let formIsValid = true

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false
            setemailError('Correo No Valido')
            return false
        } else {
            setemailError('')
            formIsValid = true
        }

        if (!password.match(/^[a-zA-Z0-9]{8,22}$/)) {
            formIsValid = false
            setpasswordError(
                'Debe tener un mínimo de 8 caracteres y un máximo de 22 caracteres'
            )
            return false
        } else {
            setpasswordError('')
            formIsValid = true
        }

        return formIsValid
    }

    const loginSubmit = (e) => {
        e.preventDefault()
        handleValidation()
    }

    return (
        <div className='LoginScreen'>
            <div className='container-login card bg-light mt-5'>
                <div className='row d-flex justify-content-center '>
                    <div className='col-md-10 p-4'>
                        <h2>Iniciar Sesión</h2>

                        <form id='loginform' onSubmit={loginSubmit}>
                            <div className='form-group py-4'>
                                <label>Correo</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='EmailInput'
                                    name='EmailInput'
                                    aria-describedby='emailHelp'
                                    placeholder='Ingresar Correo'
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                                <small
                                    id='emailHelp'
                                    className='text-danger form-text'
                                >
                                    {emailError}
                                </small>
                            </div>
                            <div className='form-group py-4'>
                                <label>Contraseña</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    placeholder='Contraseña'
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />
                                <small
                                    id='passworderror'
                                    className='text-danger form-text'
                                >
                                    {passwordError}
                                </small>
                            </div>
                            <div className='form-group form-check'>
                                <input
                                    type='checkbox'
                                    className='form-check-input'
                                    id='exampleCheck1'
                                />
                                <label className='form-check-label'>
                                    Recordar Usuario
                                </label>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-outline-primary'
                            >
                                Ingresar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginScreen
