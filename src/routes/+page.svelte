<svelte:head>
	<title>Stats Preview Card</title>
	<link rel="icon" href="/images/favicon-32x32.png" type="image/x-icon" />
</svelte:head>

<main class="h-screen w-screen flex justify-center items-center bg-very-dark-blue">
	<div class="h-[483px] w-[1300px] flex -lg:flex-col -lg:justify-center -lg:items-center -2xl:w-[1000px] -2xl:h-[372px]">
		<div class="h-full hidden -lg:block bg-soft-violet rounded-t-lg">
			<img class="w-[375px] h-auto rounded-t-lg overflow-hidden" src="/images/image-header-desktop.jpg" alt="People talking around a desk.">
		</div>
		<div class="flex flex-col justify-end text-white h-full w-[55%] -lg:w-[375px] rounded-l-lg -xl:rounded-l-lge bg-very-desaturated-blue p-20 -2xl:p-16 -lg:p-10 -lg:rounded-b-lg">
			<h1 class="text-white text-4xl font-inter font-bold mb-6 -2xl:text-3xl -lg:text-xl -lg:mb-4">Get <span class="text-soft-violet">insights</span> that help your business grow.</h1>
			<p class="mb-auto font-inter text-slightly-transparent-white text-sm w-2/3 -2xl:text-xs -lg:w-full -lg:text-[10px] -lg:mb-6">Discover the benefits of data analytics and make decisions regarding revenye, customer experience, and overall efficiency.</p>
			<div class="flex gap-12 -lg:gap-6">
				<div>
					<p class="font-inter font-bold text-2xl -2xl:text-xl -lg:text-base">10k+</p>
					<p class="text-xs font-inter text-slightly-transparent-white tracking-widest -lg:text-[10px]">COMPANIES</p>
				</div>
				<div>
					<p class="font-inter font-bold text-2xl -2xl:text-xl -lg:text-base">314</p>
					<p class="text-xs font-inter text-slightly-transparent-white tracking-widest -lg:text-[10px]">TEMPLATES</p>
				</div>
				<div>
					<p class="font-inter font-bold text-2xl -2xl:text-xl -lg:text-base">12M+</p>
					<p class="text-xs font-inter text-slightly-transparent-white tracking-widest -lg:text-[10px]">QUERIES</p>
				</div>
			</div>
		</div>
		<div class="w-[45%] h-full -lg:hidden rounded-r-lg bg-soft-violet">
			<img class="w-full h-auto rounded-r-lg overflow-hidden" src="/images/image-header-desktop.jpg" alt="People talking around a desk.">
		</div>
	</div>
	</main>

	<style>
		img { mix-blend-mode: multiply; opacity: 0.8; }
	</style>