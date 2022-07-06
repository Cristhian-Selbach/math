<template>
	<section>
		<h1 class="title">Choose What to Study:</h1>
		<div class="content">
			<NuxtLink to="/level-selection" @click="addition">
				<div class="container">
					<i class="fa-solid fa-plus"></i>
				</div>
			</NuxtLink>
			<NuxtLink to="/level-selection" @click="subtraction">
				<div class="container">
					<i class="fa-solid fa-minus"></i>
				</div>
			</NuxtLink>
			<NuxtLink to="/level-selection" @click="multiplication">
				<div class="container">
					<i class="fa-solid fa-xmark" @click=""></i>
				</div>
			</NuxtLink>
			<NuxtLink to="/level-selection" @click="division">
				<div class="container">
					<i class="fa-solid fa-divide"></i>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>

<script>
	import { usePrefsStore } from "../store/prefs";

	export default {
		setup() {
			const store = usePrefsStore();
			return {
				store,
			};
		},
		methods: {
			addition() {
				this.store.changeOpearation("Addiction");
			},
			subtraction() {
				this.store.changeOpearation("Subtraction");
			},
			multiplication() {
				this.store.changeOpearation("Multiplication");
			},
			division() {
				this.store.changeOpearation("Division");
			},
		},
	};
</script>

<style scoped>
	i {
		color: #0f4c75;
		font-size: 100px;
	}
</style>
