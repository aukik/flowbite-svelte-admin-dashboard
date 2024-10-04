<script lang="ts">
	import { Button, Input, Label, Modal, Textarea,Dropdown, DropdownItem, DropdownDivider, DropdownHeader,Checkbox } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount, afterUpdate} from 'svelte';
	import { writable } from 'svelte/store';
	export let open: boolean = false; // modal control

	export let data: Record<any, any> = {};

	export let workshopId: any = {};
	const selectedFile = writable<File | null>(null);
	let token: string= '';
	const apiUrl:string = process.env.VITE_API_URL;
	let buttonDisabled:boolean = false;

	function getCookie(name:string) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return "";
    }


	function handleFileChange(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files) {
            selectedFile.set(target.files[0]);
        }
    }

  async function handleSubmit() {
			try{
					    buttonDisabled = true;
							let file:any;
							selectedFile.subscribe(value => {
									file = value;
							})();
							if(!file){
									alert('Please select a file');
									buttonDisabled = false;
									return;
							}

							const formData = new FormData();
							formData.append('images', file);

							const response = await axios.post(`${apiUrl}/admin/addCertificateStudentWorkshop?workshopId=${workshopId}&studentId=${data?.id}`, formData, {
									headers: {
											Authorization: `Bearer ${token}`,
											'Content-Type': 'multipart/form-data'
									}
							});

							if(response.status === 200){

                  alert('Certificate uploaded successfully');
              } else {
                  alert('Error uploading certificate');
              }
							buttonDisabled = false;
							open = false;
							window.location.reload();


					} catch (error) {
							console.error('Error:');
					}
		}

		onMount(async () => {
			token = getCookie('token');
		})

</script>

<Modal
	bind:open

	title={"Certificate"}

	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} >
			<div class="flex flex-col">
				<!-- <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Name</span>
					<Input bind:value={data.name} name="name" class="border outline-none" placeholder="e.g. Bonnie" required />
				</Label> -->


				{#if data?.studentWorkshopCertificate?.[0]?.certificateUrl}
				{#if data.studentWorkshopCertificate[0].certificateUrl.toLowerCase().endsWith('.pdf')}
				<!-- <object data={data.studentWorkshopCertificate[0].certificateUrl} type="application/pdf" class="col-span-6 w-full h-[600px]" title="Student Workshop Certificate"> -->
					<iframe
						src={`https://docs.google.com/viewer?url=${encodeURIComponent(data.studentWorkshopCertificate[0].certificateUrl)}&embedded=true`}
						width="100%"
						height="600px"
						frameborder="0"
						title="Student Workshop Certificate PDF Viewer"
					>
						<p class="text-white">
							Your browser doesn't support PDF viewing.
							<a href={data.studentWorkshopCertificate[0].certificateUrl} target="_blank" rel="noopener noreferrer">
								Click here to download the PDF
							</a>.
						</p>
					</iframe>
				<!-- </object> -->
				{:else}
					<img
						src={data.studentWorkshopCertificate[0].certificateUrl}
						alt="certificate"
						class="col-span-6"
					/>
				{/if}
			{:else}
				<p class="text-white">No Certificate to show</p>
			{/if}


				<Label class="col-span-6 space-y-2 my-8">
					<span>Photo</span>
					<Input
							type="file"
							name="photo"
							accept="image/*"
							on:change={handleFileChange}
							class="border outline-none"
					/>
			</Label>




			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button disabled={buttonDisabled} on:click = {handleSubmit}>{'Upload Certificate'}</Button>
	</div>
</Modal>
