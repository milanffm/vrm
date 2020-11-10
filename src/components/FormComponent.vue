<template>
	<section class="form-component">
		<b-form-input v-model="title" placeholder="Enter title"></b-form-input>
	</section>
</template>

<script>
	export default {
		name: 'FormComponent',
		data() {
			return {
				title: ''
			}
		}
	}
</script>

<style scoped>

	.form-component {
		max-width: 500px;
		margin:  0 auto;
	}

</style>