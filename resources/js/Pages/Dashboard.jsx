import {Link, router, usePage} from "@inertiajs/react";

// delete a shortened url
function handleDelete(event) {
    event.preventDefault();

    const id = event.currentTarget.getAttribute('data-delete')

    router.delete('dashboard/' + id)
}

// copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
}

export default function Dashboard() {
    const {urlData} = usePage().props

    // map the data per row into html
    const urlList = urlData.map(url => (
        <tr key={url.id}>
            {/* shortened url with a copy button */}
            <td>
                {window.location.hostname + ":" + window.location.port + "/" + url.shortened_url}
                <i onClick={() => copyToClipboard(window.location.hostname + ":" + window.location.port + "/" + url.shortened_url)}
                   className="fa-solid fa-copy copyToClipboard"></i>
            </td>

            {/* redirect url */}
            <td><a target={"_blank"} href={"https://" + url.redirect_url}>{url.redirect_url}</a></td>

            {/* actions of the shortened url, edit/delete */}
            <td>
                <Link href={"/dashboard/" + url.id}><i
                    className="fa-solid fa-pen-to-square text-black actions"></i></Link>
                <a href={"#"} data-delete={url.id} onClick={handleDelete}><i className="fa-solid fa-trash-can text-black actions"></i></a>
            </td>
        </tr>
    ))

    // when there is no urlData
    if (!urlData[0]) {
        return <div className="container py-lg-5 h-100 d-flex flex-wrap align-items-md-center justify-content-center">
            <Link href={"/dashboard/create"} className={"btn btn-primary"}
                  style={{color: "yellow", backgroundColor: "black", borderColor: "darkgray"}}>New shortened URL
            </Link>
        </div>
    }

    // when there is url data, map it into a table
    return <div className="container py-lg-5 h-100 d-flex flex-wrap">

        {/* add new shortened url button */}
        <Link href={"/dashboard/create"} className={"btn btn-primary"}
              style={{color: "yellow", backgroundColor: "black", borderColor: "darkgray"}}>New shortened URL
        </Link>

        {/* table containing the shortened urls */}
        <table className={"table"}>
            <thead>
            <tr>
                <th scope={"col"}>Shortened URL</th>
                <th scope={"col"}>Redirect URL</th>
                <th scope={"col"}>Actions</th>
            </tr>
            </thead>

            <tbody>
            {urlList}
            </tbody>
        </table>
    </div>
}
