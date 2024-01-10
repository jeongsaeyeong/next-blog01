"use client"

import { signIn } from 'next-auth/react'

export default function LoginBtn() {

    return (
        <li>
            <button onClick={() => signIn()}>로그인</button>
        </li>
    )
}
