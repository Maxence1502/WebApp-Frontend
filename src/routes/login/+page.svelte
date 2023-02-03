<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div classname="auth-page">
    <div classname="container page">
        <div classname="row">
            <div classname="col-md-6 offset-md-3 col-xs-12">
                <h1 classname="text-xs-center">Login</h1>

                <form use:enhance method="POST">
                    <fieldset classname="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="username"
                                type="text"
                                required
                                placeholder="Your Name"
                        />
                    </fieldset>
                    <fieldset classname="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                        />
                    </fieldset>
                    <button classname="btn btn-lg btn-primary pull-xs-right" type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
