/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>About Me</title>
				<meta
					name='title'
					itemProp='title'
					property='title'
					content='About Me'
				/>
				<meta
					name='og:title'
					itemProp='og:title'
					property='og:title'
					content='About Me'
				/>
			</Head>

			<section
				className='header centered'
				style={{ textAlign: 'center' }}
			>
				<div>
					<h1 className='small-title'>About</h1>
					<h1 className='hero-title' style={{ marginInline: 'auto' }}>
						William Wise
					</h1>
				</div>
			</section>

			<section className='centered' style={{ marginBlock: '2rem' }}>
				<div className='boxed flex'>
					<div className='stat'>
						<h1>27,983</h1>
						<h2>Served Users (2021)</h2>
					</div>

					<div className='stat'>
						<h1>11</h1>
						<h2>Websites Made</h2>
					</div>

					<div className='stat'>
						<h1>2</h1>
						<h2>Satisfied Clients</h2>
					</div>
				</div>
			</section>

			<section className='centered' style={{ marginTop: '3rem' }}>
				<div className='flex' style={{ gap: '2rem' }}>
					<div>
						<div className='hero-image'>
							<img
								alt='My portrait photo.'
								src='https://avatars.githubusercontent.com/u/41650610?v=4'
							/>
							<div className='cover' />
						</div>
					</div>

					<div style={{ flex: '5 1' }} className='remove-hero-half'>
						<p className='hero-text' style={{ marginTop: 0 }}>
							Hi, I&apos;m William. My passion is to create
							anything creative on the internet.
						</p>

						<p className='hero-text'>
							I&apos;ve first started my interest in web
							development in 2013 using Wix, a website builder
							that&apos;s a little more customizable than normal
							builders.
						</p>

						<p className='hero-text'>
							In 2016, I was tired of the limitations and
							advertisements on the platform, and decided to
							follow my friend&apos;s path. He was using HTML to
							build websites. I visited w3schools and took apart
							the HTML, JS, and CSS, and learned what each part
							does.
						</p>

						<p className='hero-text'>
							I grew from there. I was tired of the capabilities
							of HTML and tried out EJS. Then Vue.js. Then
							React.js. I got into more styling languages like
							Sass and SCSS.
						</p>

						<p className='hero-text'>
							This is the result of my journey of self-learning. I
							didn&apos;t study or take any classes, I just
							experimented and grew. My skills are the result of{' '}
							{new Date(Date.now()).getFullYear() - 2013} years of
							experience. So far, I&apos;ve made websites for
							several people (not all of them are serious), for
							even sports teams at my own school.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
