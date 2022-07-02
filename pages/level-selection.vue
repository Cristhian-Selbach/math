<template>
	<section>
		<h1 class="title">Choose the Level:</h1>

		<div class="content">
			<NuxtLink to="/addition/practice">
				<div class="container">
					<span>1</span>
				</div>
			</NuxtLink>
			<NuxtLink to="/addition/practice">
				<div class="container">
					<span>2</span>
				</div>
			</NuxtLink>
			<NuxtLink to="/addition/practice">
				<div class="container">
					<span>3</span>
				</div>
			</NuxtLink>
			<NuxtLink to="/addition/practice">
				<div class="container">
					<span>4</span>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>

<script>
	export default {};
</script>

<style scoped>
	span {
		font-weight: 800;
		color: #0f4c75;
		font-size: 100px;
	}
	.subtitle {
		font-size: 40px;
	}
</style>
