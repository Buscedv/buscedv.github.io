<template>
	<div class="section container-fluid" id="about">
		<div class="row inner">
			<div id="main" class="col-md-6 col-sm-12">
				<div id="inner-main">
					<h2 data-aos="fade-in">About Me<mark>.</mark></h2>
					<div data-aos="flip-left" data-aos-delay="50" class="line"></div>
					<p>
						I enjoy learning about new things and finding solutions to different types of problems.
						I'm constantly growing and I try to always have something to work on, both project-wise and my skills as a developer.
						I have experience creating personal websites, internal tools and other web products.
					</p>
					<ul>
						<li><mark>Software</mark> Development.</li>
						<li><mark>Web</mark> Development.</li>
						<li>Located in <mark>Helsinki</mark>.</li>
					</ul>
				</div>
			</div>

			<div id="skills" class="col-md-6 col-sm-12">
				<div id="skills-inner">
					<div class="row">
						<div class="col-xs-3 skill" data-balloon-blunt aria-label="Vue.js" data-balloon-pos="up" data-aos="fade-in" data-aos-delay="25">
							<i class="fab fa-vuejs"></i>
						</div>
						<div class="col-xs-3 skill" data-balloon-blunt aria-label="Python" data-balloon-pos="up" data-aos="fade-in" data-aos-delay="25">
							<i class="fab fa-python"></i>
						</div>
						<div class="col-xs-3 skill" data-balloon-blunt aria-label="Git" data-balloon-pos="up" data-aos="fade-in" data-aos-delay="25">
							<i class="fab fa-git"></i>
						</div>
						<div class="col-xs-3 skill" data-balloon-blunt aria-label="JavaScript" data-balloon-pos="up" data-aos="fade-in" data-aos-delay="25">
							<i class="fab fa-js-square"></i>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12">
				<Resume :resume="showResume" @toggle="toggleResume()"></Resume>
			</div>
		</div>

	</div>
</template>

<script>
	const Resume = () => import('../components/Resume.vue')
	export default {
		name: 'About',
		components: {Resume},
		data() {
			return {
				showResume: false,
			}
		},
		methods: {
			toggleResume() {
				this.showResume = !this.showResume;
			},
		},
	}
</script>

<style scoped>
	#about {
		align-items: center;
	}

	#main {
		display: flex;
		align-items: center;
	}

	#main ul {
		padding-top: 2vh;
		padding-bottom: 2vh;
	}

	#main li mark {
		color: var(--accent-hover);
		font-family: 'Open Sans', 'Roboto', 'Jost', sans-serif;
		font-weight: bold;
	}

	#skills {
		display: flex;
		align-items: center;
		text-align: center;
		margin-top: 8vh;
	}

	.skill * {
		font-size: 8vw;
		color: var(--secondary-hover);
		padding: 1vw;
	}

	.skill *:hover {
		color: var(--accent);
	}

	#php-logo {
		display: flex;
		align-items: center;
	}

	#php-logo img {
		width: 9vw;
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (max-width: 900px) {
		#skills {
			margin-top: 2vh;
			margin-bottom: 2vh;
		}

		.skill * {
			font-size: 14vw;
		}

		#php-logo img {
			width: 14vw;
		}
	}
</style>
