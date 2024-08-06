'use server'

import { AxiosFetch } from "./utils/axios"

export async function createUser(event: FormData) {
    const email = event.get('email')?.toString()!
    const password = event.get('password')?.toString()!

    const response = await AxiosFetch.post('/auth/join', {
        "email": email,
        "password": password
    })
}
