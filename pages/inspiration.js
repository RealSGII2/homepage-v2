/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';

const links = [
	{
		name: 'nvu.io',
		link: 'https://nvu.io/',
		favicon:
			'https://cdn.discordapp.com/attachments/713528119285252106/979899437046439996/unknown.png',
	},
	{
		name: 'Jahir Fiquitiva',
		link: 'https://jahir.dev/',
		favicon:
			'https://cdn.discordapp.com/attachments/713528119285252106/979900559270223882/unknown.png',
	},
	{
		name: 'Justin Kruit',
		link: 'https://justinkruit.com/',
		favicon:
			'https://cdn.discordapp.com/attachments/713528119285252106/979901155851243600/unknown.png',
	},
	{
		name: 'Strapi',
		link: 'https://strapi.io/',
		favicon:
			'https://cdn.discordapp.com/attachments/713528119285252106/979902460661493811/unknown.png',
	},
];

export default function Home() {
	return (
		<div>
			<Head>
				<title>Inspiration</title>
				<meta
					name='title'
					itemProp='title'
					property='title'
					content='Inspiration'
				/>
				<meta
					name='og:title'
					itemProp='og:title'
					property='og:title'
					content='Inspiration'
				/>
			</Head>

			<section
				className='header centered'
				style={{ textAlign: 'center' }}
			>
				<div>
					<h1 className='hero-title' style={{ marginInline: 'auto' }}>
						Inspiration
					</h1>
					<p className='hero-text' style={{ marginInline: 'auto' }}>
						What inspired the way this website was made.
					</p>
				</div>
			</section>

			<section className='centered' style={{ marginBlock: '2rem' }}>
				<div className='project-grid'>
					{links.map((link) => (
						<div key={link.name} className='project-card'>
							<header>
								<img src={link.favicon} alt='' />

								<h2>{link.name}</h2>
							</header>

							<main>
								<a
									target='_blank'
									href={link.link}
									rel='noreferrer'
								>
									{link.link}
								</a>
							</main>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
