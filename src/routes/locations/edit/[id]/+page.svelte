<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<form method="PATCH">
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="filmType"
                type="text"
                required
                placeholder="filmType"
                value={data.filmType}
        />
    </fieldset>
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="filmProducerName"
                type="text"
                required
                placeholder="filmProducerName"
                value={data.filmProducerName}
        />
    </fieldset>
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="endDate"
                type="text"
                required
                placeholder="endDate"
                value={data.endDate}
        />
    </fieldset>
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="filmName"
                type="text"
                required
                placeholder="filmName"
                value={data.filmName}
        />
    </fieldset>
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="district"
                type="text"
                required
                placeholder="district"
                value={data.district}
        />
    </fieldset>
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="sourceLocationId"
                type="text"
                required
                placeholder="sourceLocationId"
                value={data.sourceLocationId}
        />
    </fieldset>
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="filmDirectorName"
                type="text"
                required
                placeholder="filmDirectorName"
                value={data.filmDirectorName}
        />
    </fieldset>
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="address"
                type="text"
                required
                placeholder="address"
                value={data.address}
        />
    </fieldset>
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="startDate"
                type="text"
                required
                placeholder="startDate"
                value={data.startDate}
        />
    </fieldset>
    <fieldset class="form-group">
        <input
                class="form-control form-control-lg"
                name="year"
                type="text"
                required
                placeholder="year"
                value={data.year}
        />
    </fieldset>
    <button class="btn btn-lg btn-primary pull-xs-right" type="submit">zzz
    </button>

</form>