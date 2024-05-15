import Notification from "@/Components/Notification.jsx";

export default function Homepage() {
    return <div className="container py-lg-5 h-100 d-flex flex-wrap align-items-md-center justify-content-center">

        <Notification />

        <div className={"col-md-12"}>
            <h4>How does URL shortening work?</h4>
            <p>Step 1. Register a new account or if you already have one, login</p>
            <p>Step 2. Go to the Dashboard</p>
            <p>Step 3. Click add new shortened URL</p>
            <p>Step 4. Fill in what your shortened URL should be and where it should go</p>
            <p>Step 5. Share the URL</p>
        </div>
    </div>
}
