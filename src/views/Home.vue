<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<FormComponent/>
	</div>
</template>

<script>
	// @ is an alias to /src
	import FormComponent from '@/components/FormComponent'

	export default {
		name: 'Home',
		components: {
			FormComponent
		}
	}
</script>
