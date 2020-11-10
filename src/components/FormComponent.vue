<template>
	<section class="form-component">
		<b-form @submit="onSubmit" @reset="onReset" v-if="show">
			<b-form-input v-model="form.title" placeholder="Enter title..."></b-form-input>
			<b-form-textarea
					id="textarea"
					v-model="form.text"
					placeholder="Enter text..."
					rows="3"
					:maxlength="maxTextareaLength"
			></b-form-textarea>
			({{form.text.length}} / {{maxTextareaLength}})
			<div>
				<b-form-datepicker id="example-datepicker" v-model="form.date" ></b-form-datepicker>
				<p>Value: '{{ form.date }}'</p>
			</div>
			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
	</section>
</template>

<script>
	export default {
		name: 'FormComponent',
		data() {
			return {
				form: {
					title: '',
					text: '',
					date: ''
				},
				maxTextareaLength: 300,
				show: true

			}
		},
		methods: {
			/**
			 * submit form
			 * @param evt
			 */
			onSubmit(evt) {
				evt.preventDefault()
				console.log(JSON.stringify(this.form))

			},
			/**
			 * reset form
			 * @param evt
			 */
			onReset(evt) {
				evt.preventDefault()
				// Reset our form values
				this.form.title = ''
				this.form.text = ''
				this.form.date = ''
				// Trick to reset/clear native browser form validation state
				this.show = false
				this.$nextTick(() => {
					this.show = true
				})
			}
		}
	}
</script>

<style scoped>

	.form-component {
		max-width: 500px;
		margin:  0 auto;
	}

	.form-control {
		margin: 20px 0 5px;
	}

	button {
		margin: 0 20px;
	}

</style>