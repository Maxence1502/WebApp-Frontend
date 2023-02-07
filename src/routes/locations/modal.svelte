<div class="modal">
    <tr>
        <td>{data.filmType}</td>
        <td>{data.filmProducerName}</td>
        <td>{data.endDate}</td>
        <td>{data.filmName}</td>
        <td>{data.district}</td>
        <td>{data.sourceLocationId}</td>
        <td>{data.filmDirectorName}</td>
        <td>{data.address}</td>
        <td>{data.startDate}</td>
        <td>{data.year}</td>
    </tr>

    <button on:click={close}>Close</button>
</div>

<style>
    th, td {
        border: 2px solid black;
        padding: 8px;
        text-align: left;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<script>
    export let close;
    export let data;
</script>
