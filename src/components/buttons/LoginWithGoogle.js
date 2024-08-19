'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
export default function LoginWitGoogle() {
    return (
        <button
            className="bg-white shadow rounded-sm text-center w-full py-4 flex justify-center items-center  gap-2"
            onClick={() => { }}
        >

            <FontAwesomeIcon icon={faGoogle} className="w-6" />
            <span>Sign In With Google</span>
        </button>

    )
}