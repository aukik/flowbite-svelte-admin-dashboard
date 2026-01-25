<script lang="ts">
	import { Modal, Button } from 'flowbite-svelte';
	import { MailBoxSolid, EyeOutline } from 'flowbite-svelte-icons';

	export let open: boolean = false;
	export let selectedCount: number = 0;

	const LOGIN_URL = "https://octobrain.org/login";
	const REGISTER_URL = "https://octobrain.org/register";

	// Use the same template structure as the backend
	const createPythonCourseInvitationTemplate = (name: string) => {
		return `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Registration Verified - Python Course Invitation</title>
				<style>
					body {
						font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
						line-height: 1.6;
						color: #333;
						max-width: 600px;
						margin: 0 auto;
						padding: 20px;
						background-color: #f8f9fa;
					}
					.container {
						background-color: #ffffff;
						padding: 40px;
						border-radius: 10px;
						box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
					}
					.header {
						text-align: center;
						margin-bottom: 30px;
					}
					.logo {
						color: #4CAF50;
						font-size: 28px;
						font-weight: bold;
						margin-bottom: 10px;
					}
					.title {
						color: #2c3e50;
						font-size: 24px;
						margin-bottom: 20px;
					}
					.message {
						font-size: 16px;
						margin-bottom: 30px;
						color: #555;
					}
					.cta-container {
						text-align: center;
						margin: 30px 0;
					}
					.cta-button {
						display: inline-block;
						padding: 15px 30px;
						margin: 10px;
						text-decoration: none;
						border-radius: 5px;
						font-weight: bold;
						font-size: 16px;
						transition: background-color 0.3s ease;
					}
					.primary-button {
						background-color: #4CAF50;
						color: white;
					}
					.secondary-button {
						background-color: #2196F3;
						color: white;
					}
					.footer {
						margin-top: 40px;
						padding-top: 20px;
						border-top: 1px solid #eee;
						text-align: center;
						color: #777;
						font-size: 14px;
					}
					.highlight {
						background-color: #e8f5e8;
						padding: 20px;
						border-radius: 5px;
						margin: 20px 0;
						border-left: 4px solid #4CAF50;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<div class="logo">🐙 Octobrain</div>
						<h1 class="title">Registration Successfully Verified!</h1>
					</div>
					
					<div class="message">
						<p>Dear ${name || 'Student'},</p>
						
						<div class="highlight">
							<p><strong>Great news!</strong> Your registration has been successfully verified, and we're excited to invite you to join our comprehensive Python programming course.</p>
						</div>
						
						<p>Our Python course is designed to take you from beginner to confident programmer with:</p>
						<ul>
							<li>Interactive coding exercises and projects</li>
							<li>Expert instructor guidance</li>
							<li>Real-world programming challenges</li>
							<li>Certificate upon completion</li>
						</ul>
						
						<p>Ready to start your coding journey? Choose one of the options below:</p>
					</div>
					
					<div class="cta-container">
						<a href="${LOGIN_URL}" class="cta-button primary-button">
							🚀 Login to Join Python Course
						</a>
						<br>
						<a href="${REGISTER_URL}" class="cta-button secondary-button">
							📝 Register New Account
						</a>
					</div>
					
					<div class="message">
						<p>If you have any questions or need assistance, please don't hesitate to reach out to our support team.</p>
						<p>We look forward to seeing you in the course!</p>
					</div>
					
					<div class="footer">
						<p>Best regards,<br><strong>The Octobrain Team</strong></p>
						<p><em>This is an automated email. Please do not reply to this message.</em></p>
					</div>
				</div>
			</body>
			</html>
		`;
	};

	$: sampleEmailHTML = createPythonCourseInvitationTemplate('[Student Name]');
</script>

<Modal bind:open size="xl" autoclose={false} class="w-full">
	<div class="flex flex-col space-y-6">
		<div class="flex items-center space-x-2">
			<EyeOutline class="h-6 w-6 text-blue-600" />
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">
				Email Preview - Python Course Invitation
			</h3>
		</div>
		
		<div class="bg-blue-50 border-l-4 border-blue-400 p-4 dark:bg-blue-900 dark:border-blue-600">
			<div class="flex">
				<div class="flex-shrink-0">
					<MailBoxSolid class="h-5 w-5 text-blue-400" />
				</div>
				<div class="ml-3">
					<p class="text-sm text-blue-700 dark:text-blue-200">
						<strong>Subject:</strong> Registration Verified - Join Our Python Course! 🐍
					</p>
					<p class="text-sm text-blue-700 dark:text-blue-200 mt-1">
						<strong>Recipients:</strong> {selectedCount} selected payment{selectedCount > 1 ? 's' : ''}
					</p>
				</div>
			</div>
		</div>

		<div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 max-h-96 overflow-y-auto">
			<h4 class="text-lg font-medium mb-3 text-gray-900 dark:text-white">Email Content Preview:</h4>
			<div class="bg-white rounded border">
				{@html sampleEmailHTML}
			</div>
		</div>

		<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 dark:bg-yellow-900 dark:border-yellow-600">
			<div class="flex">
				<div class="ml-3">
					<p class="text-sm text-yellow-700 dark:text-yellow-200">
						<strong>Note:</strong> The actual emails will be personalized with each recipient's name. 
						Users without email addresses will be skipped automatically.
					</p>
				</div>
			</div>
		</div>

		<div class="flex justify-end space-x-3">
			<Button color="alternative" on:click={() => open = false}>
				Close Preview
			</Button>
		</div>
	</div>
</Modal>