<template>
	<client-only>
		<div class="operations" v-if="rounds < 10">
			<span> {{ first }} + {{ second }}</span>
			<input
				type="number"
				autofocus
				v-model="answer"
				@input="verifyAnswer"
			/>
			<p>{{ rounds }}/10</p>
		</div>
		<div class="result" v-else>
			<h1 class="title">Average time: {{ averageTime.toFixed(2) }}s</h1>
			<button @click="restart">
				<i class="fa-solid fa-arrow-rotate-right"></i>
			</button>
		</div>
	</client-only>
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
		data() {
			return {
				first: this.generateRandom(9, 1),
				second: this.generateRandom(9, 1),
				answer: "",
				rounds: 0,

				timer: 0,
				averageTime: 0,
				timeCounter: 0,
			};
		},

		methods: {
			restart() {
				this.$router.go(0);
			},
			generateRandom(max, min) {
				return parseInt(Math.random() * (max - min) + min);
			},
			verifyAnswer() {
				const result = this.first + this.second;

				if (this.answer == result) {
					if (this.rounds + 1 == 10) {
						clearInterval(this.timeCounter);
						this.averageTime = this.timer / 10;
					}
					setTimeout(() => {
						this.first = this.generateRandom(9, 1);
						this.second = this.generateRandom(9, 1);
						this.answer = "";
						this.rounds++;
					}, 200);
				}
			},
		},
		mounted() {
			this.timeCounter = setInterval(() => {
				this.timer += 0.1;
			}, 100);
		},
	};
</script>

<style>
	.operations {
		margin-top: 100px;
		text-align: center;
	}
	span {
		font-size: 150px;
	}
	input {
		text-align: center;
		background: transparent;
		border: none;
		outline: none;
		font-size: 150px;
		width: 100%;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	p {
		margin-top: 100px;
		font-size: 25px;
	}
	.result {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	button {
		margin-top: 100px;
		width: 150px;
		height: 90px;
	}
</style>
