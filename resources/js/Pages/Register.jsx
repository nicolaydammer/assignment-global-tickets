import {useState} from 'react';
import {router, usePage} from "@inertiajs/react";

export default function register() {

    const {errors} = usePage().props

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value

        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/register', values)
    }

    return <div>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card authCard shadow-2-strong">
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Register</h3>

                            <form id={"registerForm"} onSubmit={handleSubmit}>

                                <div className="form-outline mb-4">
                                    {errors.name && (
                                        <div className="alert alert-danger">{errors.name}</div>
                                    )}
                                    <input required={true} type="text" id="name" className="form-control"
                                           value={values.name} onChange={handleChange} placeholder={"Username"}/>
                                </div>

                                <div className="form-outline mb-4">
                                    {errors.email && (
                                        <div className="alert alert-danger">{errors.email}</div>
                                    )}
                                    <input required={true} type="email" id="email" className="form-control"
                                           value={values.email} onChange={handleChange} placeholder={"email"}/>
                                </div>

                                <div className="form-outline mb-4">
                                    {errors.password && (
                                        <div className="alert alert-danger">{errors.password}</div>
                                    )}
                                    <input required={true} type="password" id="password"
                                           className="form-control" value={values.password}
                                           onChange={handleChange} placeholder={"Password"}/>
                                </div>

                                <div className="form-outline mb-4">
                                    {errors.confirmPassword && (
                                        <div className="alert alert-danger">{errors.confirmPassword}</div>
                                    )}
                                    <input required={true} type="password" id="confirmPassword"
                                           className="form-control" value={values.confirmPassword}
                                           onChange={handleChange} placeholder={"Confirm password"}/>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block submitButton" type="submit">Register</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
