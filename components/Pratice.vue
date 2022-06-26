<template>
	<h1 class="title">{{ operation }} - Level {{ level }}:</h1>
	<div class="operations">
		<span>{{ first }} + {{ second }}</span>
		<input type="number" autofocus v-model="answer" @input="verifyAnswer" />
	</div>
	<p>{{ rounds }}/10</p>
</template>

<script>
	export default {
		data() {
			return {
				first: this.generateRandom(9, 1),
				second: this.generateRandom(9, 1),
				answer: "",
				rounds: 0,
			};
		},
		props: ["operation", "level"],

		methods: {
			generateRandom(max, min) {
				return parseInt(Math.random() * (max - min) + min);
			},
			verifyAnswer() {
				const result = this.first + this.second;
				if (this.answer == result) {
					setTimeout(() => {
						this.first = this.generateRandom(9, 1);
						this.second = this.generateRandom(9, 1);
						this.answer = "";
						this.rounds++;
					}, 200);
				}
			},
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
</style>
