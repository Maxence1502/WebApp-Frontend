import {fail, redirect} from '@sveltejs/kit';
import * as api from '$lib/api.js'

export async function load({ locals }) {
    if (locals.user) throw redirect(307, '/');
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const body = await api.post('users/register', {
            username: data.get('username'),
            password: data.get('password')
        });

        if (body.errors) {
            return fail(401, body);
        }

        const bodyLog = await api.post('users/login', {
            username: data.get('username'),
            password: data.get('password')
        });

        if (bodyLog.errors) {
            return fail(401, bodyLog);
        }

        cookies.set('jwt', bodyLog.jwt, { path: '/' });
        throw redirect(307, '/locations');
    }
};
