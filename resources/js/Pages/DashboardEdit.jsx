import {useState} from 'react';
import {router, usePage} from "@inertiajs/react";

export default function DashboardCreate() {

    const {errors, urlData} = usePage().props

    const [values, setValues] = useState({
        // set default to existing redirect url
        redirect_url: urlData.redirect_url
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
        router.put('/dashboard/' + urlData.id, values)
    }

    return <div>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card authCard shadow-2-strong">
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Edit shortened URL</h3>

                            <form id={"shortened url"} onSubmit={handleSubmit}>
                                {errors.redirect_url && (
                                    <div className="alert alert-danger">{errors.redirect_url}</div>
                                )}
                                <div className="form-outline mb-4">
                                    <input required={true} type="text" id="redirect_url"
                                           className="form-control" value={values.redirect_url}
                                           onChange={handleChange} placeholder={"Redirect url"}/>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block submitButton" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
