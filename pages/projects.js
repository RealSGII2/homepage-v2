/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Projects</title>
				<meta
					name='title'
					itemProp='title'
					property='title'
					content='Projects'
				/>
				<meta
					name='og:title'
					itemProp='og:title'
					property='og:title'
					content='Projects'
				/>
			</Head>

			<section
				className='header centered'
				style={{ textAlign: 'center' }}
			>
				<div>
					<h1 className='hero-title' style={{ marginInline: 'auto' }}>
						Projects
					</h1>
				</div>
			</section>

			<section className='centered' style={{ marginBlock: '2rem' }}>
				<div className='project-grid half'>
					<div className='project-card'>
						<header>
							<img
								src='https://cdn.discordapp.com/attachments/713528119285252106/979823942212665424/unknown.png'
								alt='The PATHOS-II Logo from SOMA.'
							/>

							<h2>pathOS Clone</h2>
						</header>

						<main>
							<p>
								A full recreation of a PATHOS-II Terminal from
								Frictional Games&apos; SOMA.
							</p>

							<div className='flex'>
								<a
									href='https://pathos.realsgii2.dev/'
									target='_blank'
									className='hero-button small'
									rel='noreferrer'
								>
									<span>View</span>
								</a>
								<a
									href='https://github.com/RealSGII2/pathOS-ui'
									target='_blank'
									className='hero-button ghost small'
									rel='noreferrer'
								>
									<span>Source</span>
								</a>
							</div>
						</main>
					</div>

					<div className='project-card'>
						<header>
							<img
								src='https://cdn.discordapp.com/attachments/713528119285252106/979895379082481704/unknown.png'
								alt="West's mascot."
							/>

							<h2>
								West Swim & Dive
								<span className='comm-badge'>Commission</span>
							</h2>
						</header>

						<main>
							<p>
								A forum and announcement board for a
								school&apos; swim and dive team.
							</p>
						</main>
					</div>

					<div className='project-card'>
						<header>
							<img
								src='https://cdn.discordapp.com/attachments/713528119285252106/979825760745443359/unknown.png'
								alt='The classic Minesweeper icon.'
							/>

							<h2>Musical Minesweeper</h2>
						</header>

						<main>
							<p>
								A recreation of Minesweeper made for music
								nerds. Numbers are replaced with musical notes.
							</p>

							<div className='flex'>
								<a
									href='https://minesweeper.realsgii2.dev/'
									target='_blank'
									className='hero-button small'
									rel='noreferrer'
								>
									<span>View</span>
								</a>
								<a
									href='https://github.com/RealSGII2/musical-minesweeper'
									target='_blank'
									className='hero-button ghost small'
									rel='noreferrer'
								>
									<span>Source</span>
								</a>
							</div>
						</main>
					</div>

					<div className='project-card'>
						<header>
							<img
								src='https://media.discordapp.net/attachments/713528119285252106/979888010243997776/unknown.png'
								alt="Botcatmaxy's avatar."
							/>

							<h2>
								Botcatmaxy
								<span className='collab-badge'>
									Collaboration
								</span>
							</h2>
						</header>

						<main>
							<p>
								Botcatmaxy is a Discord bot focused on helping
								moderate Discord servers.
							</p>

							<div className='flex'>
								<a
									href='https://github.com/Blackcatmaxy/Botcatmaxy'
									target='_blank'
									className='hero-button small'
									rel='noreferrer'
								>
									<span>Source</span>
								</a>
							</div>
						</main>
					</div>

					<div className='project-card'>
						<header>
							<img
								src='https://cdn.discordapp.com/attachments/713528119285252106/979889090042408980/unknown.png'
								alt="MEE6's avatar."
							/>

							<h2>MEE6 Level Calculator</h2>
						</header>

						<main>
							<p>
								This calculates the amount of messages and
								experience you&apos;d need to get a specific
								level in MEE6, the Discord bot.
							</p>

							<div className='flex'>
								<a
									href='https://mee6-calculator.realsgii2.dev/'
									target='_blank'
									className='hero-button small'
									rel='noreferrer'
								>
									<span>View</span>
								</a>
							</div>
						</main>
					</div>

					<div className='project-card'>
						<header>
							<img
								src='https://cdn.discordapp.com/attachments/713528119285252106/979892510367318016/unknown.png'
								alt="Roblox Studio's icon."
							/>

							<h2>Roblox Studio Presence</h2>
						</header>

						<main>
							<p>
								A program that will show your activity in Roblox
								Studio as a Discord Rich Presence.
							</p>

							<div className='flex'>
								<a
									href='https://github.com/RealSGII2/roblox-studio-presence'
									target='_blank'
									className='hero-button small'
									rel='noreferrer'
								>
									<span>Source</span>
								</a>
							</div>
						</main>
					</div>

					<div className='project-card'>
						<header>
							<img
								src='https://cdn.discordapp.com/attachments/713528119285252106/979893049104687125/unknown.png'
								alt="Instructure's icon."
							/>

							<h2>RCanvas</h2>
						</header>

						<main>
							<p>A client for Instructure Canvas&apos; API.</p>

							<div className='flex'>
								<a
									href='https://github.com/RealSGII2/rcanvas'
									target='_blank'
									className='hero-button small'
									rel='noreferrer'
								>
									<span>Source</span>
								</a>
							</div>
						</main>
					</div>

					<div className='project-card'>
						<header>
							<img
								src='https://cdn.discordapp.com/attachments/713528119285252106/979894239171330069/unknown.png'
								alt="Benny's avatar."
							/>

							<h2>
								Benny Help
								<span className='comm-badge'>Commission</span>
							</h2>
						</header>

						<main>
							<p>
								A documentation site, made for free for the
								Discord bot, Benny.
							</p>

							<div className='flex'>
								<a
									href='https://github.com/RealSGII2/benny-help'
									target='_blank'
									className='hero-button small'
									rel='noreferrer'
								>
									<span>Source</span>
								</a>
							</div>
						</main>
					</div>
				</div>

				<a
					className='ghost hero-button'
					style={{ margin: '2rem auto 0' }}
					href='https://github.com/RealSGII2?tab=repositories'
					target='_blank' rel="noreferrer"
				>
					View more on GitHub
				</a>
			</section>
		</div>
	);
}
