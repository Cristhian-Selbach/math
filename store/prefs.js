import { defineStore } from "pinia";

export const usePrefsStore = defineStore("prefs", {
	state: () => {
		return {
			operation: "Addiction",
			level: "1",
		};
	},
	actions: {
		setOpearation(operation) {
			this.operation = operation;
		},
		changeLevel(level) {
			this.level = level;
		},
	},
});
