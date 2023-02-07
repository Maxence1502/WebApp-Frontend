export async function load({ locals, params }) {
    let userRole = locals.role

    return { userRole };
}
