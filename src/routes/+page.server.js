export async function load({ locals, params }) {
    let isLoggedIn = (locals.role != "guest");

    return { isLoggedIn };
}
