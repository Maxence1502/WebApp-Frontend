import {fail, redirect} from '@sveltejs/kit';
import * as api from "$lib/api.js";

export async function load({ locals, params }) {
    if (!locals.user) {
        throw redirect(301, '/');
    }

    let isAdmin = (locals.role == "admin")

    /*if (!locals.user.isAdmin) {
        throw error(403, 'not an admin');
    }*/

    const body = await api.get('locations', locals.user);

    if (body.errors) {
        return fail(401, body);
    }

    return { body, isAdmin };
}
