<script>
    import Modal from './modal.svelte';
    let showModal = false;

    export let data;
    let films = data.body;
    let isLoggedIn = (data.userRole != "guest")

    let items = [];
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
        main {
            margin: 0 !important;
            max-width: 0 !important;
        }

        th, td {
            border: 2px solid black;
            padding: 8px;
            text-align: left;
        }
    </style>

    <a href="/addLocation">
        <button>Add Location</button>
    </a>
    <table>
        <tr>
            <th>Type de film</th>
            <th>Nom du producteur</th>
            <th>Date de fin</th>
            <th>Nom du film</th>
            <th>Code postal</th>
            <th>sourceLocationId</th>
            <th>Nom du directeur</th>
            <th>Adresse</th>
            <th>Date de début</th>
            <th>Année</th>
            <th>Afficher / modifier</th>
        </tr>

        {#each getPageItems() as film}
            <tr>
                <!--                <button on:click={() => editLoc()}>
                                    Edit Location
                                </button>
                                <button on:click={() => deleteLoc()}>
                                    Delete Location
                                </button>-->
                <td>{film.filmType}</td>
                <td>{film.filmProducerName}</td>
                <td>{film.endDate}</td>
                <td>{film.filmName}</td>
                <td>{film.district}</td>
                <td>{film.sourceLocationId}</td>
                <td>{film.filmDirectorName}</td>
                <td>{film.address}</td>
                <td>{film.startDate}</td>
                <td>{film.year}</td>
                <td>
                    <button on:click={() => showModal = {data: film}}>
                        Afficher
                    </button>
                </td>
            </tr>
        {/each}
    </table>

    <div class="pagination">
        <button disabled={currentPage === 1} on:click={() => currentPage--}>
            Précédent
        </button>
        <span>{currentPage}</span>
        <button disabled={currentPage === Math.ceil(items.length / itemsPerPage)} on:click={() => currentPage++}>
            Suivant
        </button>
    </div>

    {#if showModal}
        <Modal close={() => showModal = false} data={showModal.data} />
    {/if}
{/if}