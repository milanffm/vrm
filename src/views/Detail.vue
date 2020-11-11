<template>
	<div class="detail">
		<img alt="Vue logo" src="../assets/logo.png">
		<FormComponent @sendFormData="getFormComponentData"/>
		{{list}}
	</div>
</template>

<script>
	import FormComponent from '@/components/FormComponent'

	export default {
		name: 'Detail',
		components: {
			FormComponent
		},
		data() {
			return {
				list: [],
			}
		},
		methods: {
			/**
			 * get data from FormComponent and notify form if complete
			 * @param data
			 * @param done
			 */
			getFormComponentData({ data, doneFn }){
				console.log(data.title, data.text, data.date);
				this.list.push({title: data.title, text: data.text, date: data.date})
				if (doneFn) {
					doneFn()
				}
			}
		}
	}
</script>
