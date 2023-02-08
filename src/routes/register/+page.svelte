<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div class="auth-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Créer un compte</h1>
                <p class="text-xs-center">
                    <a href="/login">Se connecter ?</a>
                </p>

                <form use:enhance method="POST">
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="username"
                                type="text"
                                required
                                placeholder="Nom d'utilisateur"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="password"
                                type="password"
                                required
                                placeholder="Mot de passe"
                        />
                    </fieldset>

                    <button class="btn btn-lg btn-primary pull-xs-right">Créer un compte</button>
                </form>
            </div>
        </div>
    </div>
</div>
