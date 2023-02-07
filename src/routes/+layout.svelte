<script>
	import './styles.css';
	import { page } from '$app/stores';

	export let data;
	let isLoggedIn = (data.userRole != "guest");
</script>

<div class="app">
	<header>
		<div class="corner"></div>

		<nav>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
			</svg>
			<ul>
				{#if !isLoggedIn}
					<li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
						<a href="/login">Se connecter</a>
					</li>
					<li aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
						<a href="/register">Créer un compte</a>
					</li>
				{/if}

				{#if isLoggedIn}
					<li aria-current={$page.url.pathname === '/locations' ? 'page' : undefined}>
						<a href="/locations">Locations</a>
					</li>

					<li>
						<a on:click={() => {document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";}} style="cursor: pointer">Se déconnecter</a>
					</li>
				{/if}
			</ul>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg>
		</nav>

		<div class="corner"></div>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		Maxence SALOMON
	</footer>
</div>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
