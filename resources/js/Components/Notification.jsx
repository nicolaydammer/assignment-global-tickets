import {usePage, useRemember,} from "@inertiajs/react";
import { useEffect } from 'react'
export default function SuccessNotification() {

    const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useRemember(false);
    const {success} = usePage().props

    useEffect(() => {
        success && setIsSuccessAlertVisible(true)

        success && setTimeout(() => {
            setIsSuccessAlertVisible(false);
        }, 3000);

    }, [success])

    return <div>
        {isSuccessAlertVisible && success && (<div className="alert alert-success">{success[0]}</div>)}
    </div>
}
