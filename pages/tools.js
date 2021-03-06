/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tools</title>
				<meta
					name='title'
					itemProp='title'
					property='title'
					content='Tools'
				/>
				<meta
					name='og:title'
					itemProp='og:title'
					property='og:title'
					content='Tools'
				/>
			</Head>

			<section
				className='header centered'
				style={{ textAlign: 'center' }}
			>
				<div>
					<h1 className='hero-title' style={{ marginInline: 'auto' }}>
						Tools Used
					</h1>
				</div>
			</section>

			<section className='centered' style={{ marginBlock: '2rem' }}>
				<h2 className='medium-title'>Terminals & Editors</h2>

				<p className='hero-text'>
					I use Windows Terminal and Visual Studio Code&apos;s built
					in terminal. VSC is my IDE. <br />
					VSC uses Atomize Dark and Material Icon Theme. <br /><br />
				</p>

				<h2 className='medium-title'>Chrome Extensions</h2>

				<p className='hero-text'>
					<ul>
						<li>
							RSG Image Viewer (private, it&apos;s my own.)
						</li>
						<li>
							AdBlock — best ad blocker
						</li>
						<li>
							Allow CORS: Access-Control-Allow-Origin
						</li>
						<li>
							EditThisCookie
						</li>
						<li>
							JSON Viewer
						</li>
						<li>
							Material Icons for GitHub
						</li>
						<li>
							Picture-in-Picture Extension (by Google)
						</li>
						<li>
							React Developer Tools
						</li>
						<li>
							Stylus
						</li>
						<li>
							Vue.js devtools
						</li>
					</ul>
				</p>

				<h2 className='medium-title'>Apps</h2>

				<p className='hero-text'>
					<ul>
						<li>
							Android Studio
						</li>
						<li>
							Figma
						</li>
						<li>
							Google Chrome
						</li>
						<li>
							Visual Studio
						</li>
						<li>
							Visual Studio Code
						</li>
					</ul>
				</p>
			</section>
		</div>
	);
}
