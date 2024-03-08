<template>
	<div class="tollContainer">
		<h2>Toll Receipt</h2>
		<div class="tollItems">
			<p><span>Vehicle Type: </span> {{ tollData.type }}</p>
			<p><span>Vehicle Size: </span> {{ tollData.size }}</p>
			<p><span>Toll Amount: </span> {{ tollData.toll }}</p>
		</div>
		<button @click="goBack">Back</button>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		tollData: Object,
	});

	const emit = defineEmits(["remove-Component"]);

	const tollData = props.tollData;

	const goBack = () => {
		emit("remove-Component");
	};
</script>

<style scoped>
	.tollContainer {
		border: 1px solid var(--color-border);
		padding: 2rem;
		width: 250px;
		height: 300px;

		h2 {
			text-align: center;
		}

		.tollItems {
			margin-block: 2rem;
			line-height: 2;

			p {
				display: flex;
				justify-content: space-between;

				span {
					font-weight: 500;
				}
			}
		}

		button {
			background: #dfe6e9;
			border: none;
			padding: 0.5rem 1rem;
		}
		button:hover {
			background-color: #b2bec3;
		}
	}
</style>
