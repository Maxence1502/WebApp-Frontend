<script>
    export let data;
    let isLog = data.isLoggedIn;

    if (isLog) {
        window.location.href = "/locations";
    } else {
        window.location.href = "/login";
    }
</script>

Debug {isLog}
