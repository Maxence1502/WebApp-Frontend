import { invalid, redirect } from '@sveltejs/kit';
import axios from 'axios';

export async function load({ locals }) {
    if (locals.user) throw redirect(307, '/');
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log(data);

        /*const body = await axios.post('users/login', {
            user: {
                email: data.get('email'),
                password: data.get('password')
            }
        });

        if (body.errors) {
            return invalid(401, body);
        }

        const value = btoa(JSON.stringify(body.user));
        cookies.set('jwt', value, { path: '/' });*/

        throw redirect(307, '/');
    }
};
