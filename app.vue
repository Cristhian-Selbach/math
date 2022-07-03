<template>
	<div class="main">
		<NuxtPage />
	</div>
</template>

<script>
	export default {};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Montserrat";
		color: #bbe1fa;
	}
	.main {
		width: 100vw;
		height: 100vh;
		background: #1b262c;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 290px 0 290px;
	}
	.title {
		font-size: 50px;
		margin-top: 100px;
	}
	.content {
		width: 100%;
		margin-top: 100px;
		display: flex;
		justify-content: space-between;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200px;
		height: 180px;
		background-color: #bbe1fa;
		border-radius: 10px;
		transition: 0.2s ease-in;
	}
	.container:hover {
		transform: scale(1.05);
		transition: 0.2s ease-out;
	}
	button {
		border: none;
		font-size: 50px;
		border-radius: 10px;
		background-color: #bbe1fa;
		transition: 0.2s ease-in;
	}
	button:hover {
		cursor: pointer;
		transform: scale(1.05);
		transition: 0.2s ease-out;
	}
	i {
		color: #0f4c75;
	}
</style>
