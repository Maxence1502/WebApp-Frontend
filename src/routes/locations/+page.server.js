import {fail, redirect} from '@sveltejs/kit';
import * as api from "$lib/api.js";

export async function load({ locals, params }) {
    if (!locals.user) {
        throw redirect(301, '/');
    }

    let userRole = locals.role
    let body = []

    if (userRole != "guest") {
        const body = await api.get('locations', locals.user);

        if (body.errors) {
            return fail(401, body);
        }
    }

    return { body, userRole };
}
