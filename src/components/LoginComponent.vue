<template>
	<div class="login-component">
		<b-form @submit="login">
			<b-form-input placeholder="vrm" v-model="user.name"></b-form-input>
			<b-form-input placeholder="test" type="password" v-model="user.psw"></b-form-input>
			<b-button type="submit" variant="primary">Submit</b-button>
		</b-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			savedUser: {
				name: 'vrm',
				psw: 'test'
			},
			user: {
				name: '',
				psw: ''
			}
		}
	},
	methods: {
		login(evt) {
            evt.preventDefault()
			if (localStorage.getItem('user')) {
				this.$router.push('detail')
			}
			else if (this.savedUser.name === this.user.name && this.savedUser.psw === this.user.psw) {
				console.log('Login success');
				localStorage.setItem('user', JSON.stringify(this.user.name));
				this.$router.push('detail')
			} else {
				console.error('wrong password: try "vrm" and "test"');
			}
		}
	}
};
</script>

<style scoped>

	.login-component {
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
