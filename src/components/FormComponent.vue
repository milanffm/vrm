<template>
	<section class="form-component">
		<b-form @submit="SubmitToParent">
			<b-form-input
				placeholder="Enter title..."
				v-model="form.title"
				:maxLength="maxTitleLength"
			></b-form-input>
			({{form.title.length}} / {{maxTitleLength}})
			<b-form-textarea
				:maxlength="maxTextareaLength"
				id="textarea"
				placeholder="Enter text..."
				rows="3"
				v-model="form.text"
			></b-form-textarea>
			({{form.text.length}} / {{maxTextareaLength}})
			<b-form-datepicker id="example-datepicker" v-model="form.date"></b-form-datepicker>
			<b-button type="submit" variant="primary">Submit</b-button>
		</b-form>
	</section>
</template>

<script>
export default {
	name: 'FormComponent',
	props: {
		parentItem: Object
	},
	data() {
		return {
			form: {
				id: '',
				title: '',
				text: '',
				date: ''
			},
			maxTitleLength: 100,
			maxTextareaLength: 300
		}
	},
	watch: {
		parentItem: function(newVal) {
			if (newVal.id) {
				this.form = newVal;
			}
		}
	},
	methods: {
		/**
		 * submit form to parent component
		 * @param evt
		 */
		SubmitToParent(evt) {
			evt.preventDefault()
			if (this.form.id.length < 1) {
				this.form.id = Math.random().toString(36).substring(7);
			}
			this.$emit('sendFormData', {
				data: { ... this.form },
				doneFn: () => {
					this.clearForm();
				}
			});
		},
		/**
		 * clear form
		 */
		clearForm() {
			this.form.id = '';
			this.form.title = '';
			this.form.text = '';
			this.form.date = '';
		}
	}
}
</script>

<style scoped>

	.form-component {
		max-width: 500px;
		margin: 0 auto;
	}

	.form-control {
		margin: 20px 0 5px;
	}

	button {
		margin: 10px;
	}

</style>
