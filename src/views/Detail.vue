<template>
	<div class="detail">
		<img alt="Vue logo" src="../assets/logo.png">
		<FormComponent :parent-item="listItem" @sendFormData="getFormComponentData"/>
		<ul class="list" v-if="showList">
			<li v-for="li in list" :key="li.id">
				{{li.title}} | {{ li.date }} <b-button @click="sendListItemToForm(li.id)">Edit</b-button>
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
			listItem: {},
			showList: true
		}
	},
	methods: {
		/**
		 * get data from FormComponent and notify form if complete
		 * @param data
		 * @param doneFn
		 */
		getFormComponentData({data, doneFn}) {
			if (this.list.find( li => data.id === li.id)) {
				this.list[this.list.findIndex(el => el.id === data.id)] = data;
			} else {
				this.list.push({
					id: data.id,
					title: data.title,
					text: data.text,
					date: data.date
				})
			}
			this.showList = false;
			this.$nextTick(() => {
				this.showList = true;
			});
			if (doneFn) {
				doneFn();
			}
		},
		/**
		 * send list item to FormComponent
		 * @param id
		 */
		sendListItemToForm(id){
			this.listItem = { ... this.list.find( li => id === li.id)};
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
