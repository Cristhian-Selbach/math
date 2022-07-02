<template>
	<section>
		<h1 class="title">Choose What to Study:</h1>
		<div class="content">
			<NuxtLink to="/level-selection">
				<div class="container">
					<i class="fa-solid fa-plus"></i>
				</div>
			</NuxtLink>
			<NuxtLink to="/level-selection">
				<div class="container">
					<i class="fa-solid fa-minus"></i>
				</div>
			</NuxtLink>
			<NuxtLink to="/level-selection">
				<div class="container">
					<i class="fa-solid fa-xmark"></i>
				</div>
			</NuxtLink>
			<NuxtLink to="/level-selection">
				<div class="container">
					<i class="fa-solid fa-divide"></i>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>

<style scoped>
	i {
		color: #0f4c75;
		font-size: 100px;
	}
</style>
