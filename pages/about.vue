<template>
	<section class="bg-gray-50 py-24">
		<div class="container mx-auto px-4">
			<div class="text-center md:text-left">
				<div class="flex flex-col md:flex-row justify-between mt-2.5">
					<Gravatar class="block md:hidden"/>
					<div>
						<blockquote class="text-4xl text-decoration">Allow me to introduce myself</blockquote>
						<h1 class="text-4xl decoration-line">
							A bit about me
						</h1>
					</div>
					<Gravatar class="hidden md:block"/>
				</div>
				<div class="grid md:grid-cols-2 gap-8 mt-10">
					<div>
						<p>
							My name is Enok Madrid, based in Las Vegas with over 7 years of experience - focused on uniting simplicity, form and function in modern web applications, with a fresh touch of ui design. That's what makes me tick.
						</p>
						<p>
							I've worked on all sorts of projects, and they all have one thing in common, that they had to sell, market and be promoted to make profits. The best way to achieve this is by going through a solid UX process, with focus on the user satisfaction and making sure everything is aligned with the business objectives. As much as I love design, how the product works is the most important and I achieve this by doing user research, usability testing, prototyping and reiterating the process. Every single detail matters - structure, typography, photography, proportions, colors, UI patterns, iconography, visual branding, content, etc. Everything must be synchronized to complete the maximum user experience.
						</p>
					</div>
					<div>
						<p class="hidden sm:block">
							My strength is in the design process and front-end development. Turning pixels into beautiful, semantic HTML & CSS. I have solid experience with front-end frameworks like Foundation and Bootstrap, as well as CMS systems including, GraphCMS, Strapi, AEM, and October CMS. I also have experience working on front-end templating in collaboration with backend engineers using frameworks like Laravel, Rails, and NuxtJS.
						</p>
						<p class="hidden sm:block">
							Beyond the Web Development spectrum, my interests include illustrating icons and graphical assets like mascots, logos and the whole branding process. When I'm not in front of the computer, I'll switch gears to my creative side and work on some
							<a target="_blank" href="http://www.airbrushlasvegas.com/enok-madrid">airbrush paintings</a> or simply plan for my next
							<a target="_blank" href="http://www.enok-one.com">graffiti mural</a>. I'm always into something.
						</p>
						<Button class="btn btn-lg btn-outline-primary rounded-pill has-arrow __right" href="https://www.linkedin.com/in/enokmadrid" target="_blank">View Resume</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'AboutPage'
}
</script>