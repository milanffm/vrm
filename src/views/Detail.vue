<template>
	<div class="detail">
		<img alt="Vue logo" src="../assets/logo.png">
		<FormComponent/>
	</div>
</template>

<script>
	import FormComponent from '@/components/FormComponent'

	export default {
		name: 'Home',
		components: {
			FormComponent
		}
	}
</script>
