<template>
	<div class="page">
		<header>
			<h1>Toll Collection System</h1>
		</header>
		<main>
			<div class="toll" v-if="tollData">
				<TollComponent
					:tollData="tollData"
					@remove-Component="resetToll"
				></TollComponent>
			</div>
			<div class="form" v-else>
				<label for="vehicletype">Select Vehicle Type</label>
				<select name="vehicletype" id="vehicletype" v-model="vehicleType">
					<option value="bike">Bike</option>
					<option value="car">Car</option>
					<option value="bus">Bus</option>
					<option value="truck">Truck</option>
				</select>

				<button @click="createToll">Submit</button>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import TollComponent from "./TollComponent.vue";

	const vehicleType = ref("bike");
	const tollData = ref(null);

	const createToll = async () => {
		const input = vehicleType.value;
		const baseUrl = import.meta.env.VITE_BASE_URL;

		const post = await fetch(baseUrl + "/tolls/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				vehicleType: input,
			}),
		});
		const res = await post.json();
		tollData.value = {
			toll: "Tk. " + res.data.toll,
			type: capitalizeFirstLetter(res.data.type),
			size: res.data.details.size,
		};
	};

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const resetToll = () => {
		tollData.value = null;
	};
</script>

<style scoped>
	.page {
		width: 100%;
		padding: 2rem;
	}
	header {
		display: flex;
		justify-content: center;
	}

	main {
		margin-top: 5rem;
		display: flex;
		justify-content: center;
	}

	.form {
		width: 420px;
	}

	label,
	select,
	button {
		display: block;
		width: 100%;
	}

	select {
		padding: 0.5rem 0.25rem;
		margin-bottom: 1rem;
	}

	button {
		width: 100%;
		border: none;
		padding-block: 0.75rem;
		background: #00b894;
		font-weight: 700;
	}
	button:hover {
		background: #55efc4;
	}
</style>
