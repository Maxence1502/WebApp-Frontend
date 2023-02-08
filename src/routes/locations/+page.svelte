<script>
    import Modal from './modal.svelte';
    let showModal = false;

    export let data;
    let films = data.body;
    let isLoggedIn = (data.userRole != "guest")

    let currentPage = 1;
    let itemsPerPage = 10;

    function getPageItems() {
        let startIndex = (currentPage - 1) * itemsPerPage;
        let endIndex = startIndex + itemsPerPage;
        return films.slice(startIndex, endIndex);
    }

    if (!isLoggedIn) {
        window.location.href = '/login';
    }
</script>

{#if isLoggedIn}
    <style>
        th, td {
            border: 2px solid black;
            padding: 8px;
            text-align: left;
        }

        .pagination {
            text-align: right;
        }

        .pagination button, .pagination div {
            display: inline-block;
        }

        .center {
            text-align: center;
            padding: 20px;
        }
    </style>

    {#if (data.userRole == "admin")}
        <a href="/locations/add" class="center">
            <button>Ajouter une location</button>
        </a>
    {/if}

    <table>
        <tr>
            <th>Type de film</th>
            <th>Nom du producteur</th>
            <th>Nom du film</th>
            <th>Année</th>
            <th>Afficher / modifier</th>
        </tr>

        {#each getPageItems() as film}
            <tr on:click={() => showModal = {film: film, user: data.user, userRole: data.userRole}}>
                <td>{film.filmType}</td>
                <td>{film.filmProducerName}</td>
                <td>{film.filmName}</td>
                <td>{film.year}</td>
                <td>
                    <button on:click={() => showModal = {film: film, user: data.user, userRole: data.userRole}}>Afficher</button>
                </td>
            </tr>
        {/each}
    </table>

    <div class="pagination">
        <button disabled={currentPage === 1} on:click={() => {currentPage--; getPageItems()}}>
            Précédent
        </button>
        <div>{currentPage} / {Math.ceil(films.length / itemsPerPage)}</div>
        <button disabled={currentPage === Math.ceil(films.length / itemsPerPage)} on:click={() => {currentPage++; getPageItems()}}>
            Suivant
        </button>
    </div>

    {#if showModal}
        <Modal close={() => showModal = false} film={showModal.film} user={showModal.user} userRole={showModal.userRole} />
    {/if}
{/if}