<template>
	<div class="detail">
		<img alt="Vue logo" src="../assets/logo.png">
		<FormComponent @sendFormData="getFormComponentData"/>
		<ul class="list">
			<li v-for="li in list" :key="li.id">
				{{li.title}} | {{ li.date }} <b-button @click="editListItem(li.id)">Edit</b-button>
			</li>
		</ul>
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
		 * @param doneFn
		 */
		getFormComponentData({data, doneFn}) {
			console.log(data.id, data.title, data.text, data.date);
			this.list.push({id: data.id, title: data.title, text: data.text, date: data.date})
			if (doneFn) {
				doneFn();
			}
		},
		editListItem(id){
			console.log(id);
			console.log(this.list.find( li => id === li.id));
		}
	}
}
</script>
<style scoped>
	ul {
		max-width: 500px;
		margin: 50px auto;
	}
	li {
		text-align: left;
		font-size: 1.2rem;
		margin: 15px;
	}
	button {
		float: right;
	}
</style>
