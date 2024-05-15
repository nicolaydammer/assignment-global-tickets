import {useState} from 'react';
import {router, usePage} from "@inertiajs/react";

export default function login() {

    const {errors} = usePage().props

    const [values, setValues] = useState({
        email: "",
        password: ""
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
        router.post('/login', values)
    }

    return <div>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card authCard shadow-2-strong">
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Sign in</h3>

                            <form id={"loginForm"} onSubmit={handleSubmit}>
                                {errors.email && (
                                    <div className="alert alert-danger">{errors.email}</div>
                                )}
                                <div className="form-outline mb-4">
                                    <input required={true} type="email" id="email" className="form-control"
                                           value={values.email} onChange={handleChange} placeholder={"Email"}/>
                                </div>

                                {errors.password && (
                                    <div className="alert alert-danger">{errors.password}</div>
                                )}
                                <div className="form-outline mb-4">
                                    <input required={true} type="password" id="password"
                                           className="form-control" value={values.password}
                                           onChange={handleChange} placeholder={"Password"}/>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block submitButton" type="submit">Login</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
