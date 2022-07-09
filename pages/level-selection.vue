<template>
	<section>
		<h1 class="title">Choose the Level:</h1>

		<div class="content">
			<div class="option">
				<div class="container">
					<span>1</span>
				</div>
			</div>
			<div class="option">
				<div class="container">
					<span>2</span>
				</div>
			</div>
			<div class="option">
				<div class="container">
					<span>3</span>
				</div>
			</div>
			<div class="option">
				<div class="container">
					<span>4</span>
				</div>
			</div>
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
		mounted() {
			const elements = this.$el.querySelectorAll(".option");

			elements.forEach((element, index) => {
				element.addEventListener("click", () => {
					this.store.changeLevel(index + 1);
					console.log(this.store.level);
					navigateTo("/test");
				});
			});
		},
	};
</script>

<style scoped>
	span {
		font-weight: 800;
		color: #0f4c75;
		font-size: 100px;
	}
</style>
