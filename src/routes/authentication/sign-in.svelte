<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import { SignIn } from '$lib';
  import MetaTag from '../utils/MetaTag.svelte';
	let title = 'Sign in to platform';
	let site = {
		name: 'Flowbite',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo'
	};
	let rememberMe = true;
	let lostPassword = true;
	let createAccount = true;
	let lostPasswordLink = 'forgot-password';
	let loginTitle = 'Login to your account';
	let registerLink = 'sign-up';
	let createAccountTitle = 'Create account';

	function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

	const onSubmit = async (e: Event) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const data: Record<string, string | File> = {};
    for (const field of formData.entries()) {
        const [key, value] = field;
        // Exclude fields that are not needed for login
        if (key === 'email' || key === 'password') {
            data[key] = value;
        }
	console.log(data);
    }

    try {
        const response = await fetch(process.env.VITE_API_URL+'/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const responseData = await response.json();

        // Store token and refresh token in session storage
       // sessionStorage.setItem('token', responseData.result.token);
       // sessionStorage.setItem('refreshToken', responseData.result.refreshToken);
		setCookie('token', responseData.result.token, 7);
		setCookie('refreshToken', responseData.result.refreshToken, 7);

        // Redirect or perform other actions upon successful login
        console.log('Login successful');
        console.log('User:', responseData.result.user);
		window.location.href = "/crud/users";
    } catch (error) {
        console.error('Login error:');
    }
};


	const path: string = '/authentication/sign-in';
  const description: string = 'Sign in example - Octobrain Admin Dashboard';
	const metaTitle: string = 'Octobrain Admin Dashboard - Sign in';
  const subtitle: string = 'Sign in';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<SignIn
	{title}
	{site}
	{rememberMe}
	{lostPassword}
	{createAccount}
	{lostPasswordLink}
	{loginTitle}
	{registerLink}
	{createAccountTitle}
	on:submit={onSubmit}
>
	<div>
		<Label for="email" class="mb-2 dark:text-white">Your email</Label>
		<Input
			type="email"
			name="email"
			id="email"
			placeholder="name@company.com"
			required
			class="border outline-none dark:border-gray-600 dark:bg-gray-700"
		/>
	</div>
	<div>
		<Label for="password" class="mb-2 dark:text-white">Your password</Label>
		<Input
			type="password"
			name="password"
			id="password"
			placeholder="••••••••"
			required
			class="border outline-none dark:border-gray-600 dark:bg-gray-700"
		/>
	</div>
</SignIn>
