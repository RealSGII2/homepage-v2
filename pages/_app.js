import { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		document.body.addEventListener('scroll', () => {
			document.body.setAttribute(
				'style',
				`--scroll-factor: ${
					1 - Math.min(Math.max(document.body.scrollTop / 240, 0), 1)
				}`
			);
		});

		Router.events.on('routeChangeStart', () => {
			document.body.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}, []);

	return (
		<>
			<nav className={`appbar ${menuOpen ? 'open' : ''}`}>
				<section className='centered'>
					<svg
						viewBox='0 0 46 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M12 0H0V12H12V0ZM2 4L3.6858 9H4.90726L5.99747 5.75002L7.09274 9H8.31419L10 4H8.79369L7.69581 7.22727L6.60819 4H5.3918L4.29483 7.21506L3.20631 4H2Z'
							fill='url(#paint0_linear_5_2)'
						/>
						<path
							d='M15.192 5H16.248L16.736 8.088H16.928L17.536 5.08H18.64L19.248 8.088H19.44L19.928 5H20.984L20.224 9H18.544L18.088 6.552L17.632 9H15.952L15.192 5ZM21.3717 5H22.4277L22.9157 8.088H23.1077L23.7157 5.08H24.8197L25.4277 8.088H25.6197L26.1077 5H27.1637L26.4037 9H24.7237L24.2677 6.552L23.8117 9H22.1317L21.3717 5ZM27.8554 9V5H28.9274V9H27.8554ZM27.8554 4.488V3.4H28.9274V4.488H27.8554ZM32.7899 6C32.1285 5.91467 31.6645 5.872 31.3979 5.872C31.1365 5.872 30.9659 5.896 30.8859 5.944C30.8112 5.992 30.7739 6.06933 30.7739 6.176C30.7739 6.27733 30.8245 6.34933 30.9259 6.392C31.0325 6.42933 31.2992 6.488 31.7259 6.568C32.1579 6.64267 32.4645 6.768 32.6459 6.944C32.8272 7.12 32.9179 7.40533 32.9179 7.8C32.9179 8.664 32.3819 9.096 31.3099 9.096C30.9579 9.096 30.5312 9.048 30.0299 8.952L29.7739 8.904L29.8059 8.008C30.4672 8.09333 30.9259 8.136 31.1819 8.136C31.4432 8.136 31.6192 8.112 31.7099 8.064C31.8059 8.01067 31.8539 7.93333 31.8539 7.832C31.8539 7.73067 31.8032 7.656 31.7019 7.608C31.6059 7.56 31.3499 7.50133 30.9339 7.432C30.5232 7.36267 30.2165 7.24533 30.0139 7.08C29.8112 6.91467 29.7099 6.62133 29.7099 6.2C29.7099 5.77333 29.8539 5.45333 30.1419 5.24C30.4299 5.02133 30.8005 4.912 31.2539 4.912C31.5685 4.912 31.9979 4.96267 32.5419 5.064L32.8059 5.112L32.7899 6ZM34.5713 7.456C34.5766 7.70133 34.6406 7.88 34.7633 7.992C34.8913 8.09867 35.0726 8.152 35.3073 8.152C35.8033 8.152 36.246 8.136 36.6353 8.104L36.8593 8.08L36.8753 8.872C36.262 9.02133 35.7073 9.096 35.2113 9.096C34.6086 9.096 34.1713 8.936 33.8993 8.616C33.6273 8.296 33.4913 7.776 33.4913 7.056C33.4913 5.62133 34.0806 4.904 35.2593 4.904C36.422 4.904 37.0033 5.50667 37.0033 6.712L36.9233 7.456H34.5713ZM35.9473 6.64C35.9473 6.32 35.8966 6.09867 35.7953 5.976C35.694 5.848 35.5153 5.784 35.2593 5.784C35.0086 5.784 34.83 5.85067 34.7233 5.984C34.622 6.112 34.5686 6.33067 34.5633 6.64H35.9473Z'
							fill='#ADBAC7'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_5_2'
								x1='12'
								y1='0'
								x2='0'
								y2='12'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#E4F7BD' />
								<stop offset='0.25' stopColor='#B6E2C5' />
								<stop offset='0.99384' stopColor='#6ABFD3' />
							</linearGradient>
						</defs>
					</svg>

					<div style={{ flex: 1 }}></div>

					<div className='desktop-links'>
						<Link href='/'>
							<a className='link'>
								<span>Home</span>
							</a>
						</Link>

						<Link href='/about'>
							<a className='link'>
								<span>About me</span>
							</a>
						</Link>

						<Link href='/projects'>
							<a className='link'>
								<span>Projects</span>
							</a>
						</Link>

						<Link href='/tools'>
							<a className='link'>
								<span>Tools</span>
							</a>
						</Link>
					</div>

					<a
						className='hero-icon menu-button'
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							width='24'
							height='24'
							style={{ transform: 'none' }}
						>
							<path
								fillRule='evenodd'
								fill='currentcolor'
								d='M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z'
							></path>
						</svg>
					</a>
				</section>
				<section className='mobile-links'>
					<a className='link' href='#'>
						<span>Home</span>
					</a>

					<a className='link' href='#'>
						<span>About me</span>
					</a>

					<a className='link' href='#'>
						<span>Projects</span>
					</a>

					<a className='link' href='#'>
						<span>Tools</span>
					</a>
				</section>
			</nav>

			<Component {...pageProps} />

			<section className='footer'>
				<section className='centered'>
					<div>
						<h1 className='small-title'>William Wise</h1>
						<h2 className='smaller-title'>@RealSGII2</h2>

						<div
							className='flex'
							style={{ marginLeft: '-8px', marginTop: '0.5rem' }}
						>
							<a
								href='https://github.com/RealSGII2'
								target='_blank'
								className='hero-icon'
								rel='noreferrer'
							>
								<svg
									fill='#000000'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='30'
								>
									<path
										d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z'
										fill='currentcolor'
									/>
								</svg>
							</a>

							<a
								href='mailto:william@realsgii2.dev'
								targe
								className='hero-icon'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
								>
									<path
										fillRule='evenodd'
										d='M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z'
										fill='currentColor'
									></path>
								</svg>
							</a>
						</div>
					</div>
				</section>

				<div className='footer-divider'></div>

				<section className='centered'>
					<div className='flex' style={{ gap: '3rem' }}>
						<div className='stack'>
							<h1 className='footer-title'>About Me</h1>

							<Link href='/about'>
								<a>About me</a>
							</Link>

							<Link href='/projects'>
								<a>My projects</a>
							</Link>

							<Link href='/tools'>
								<a>My tools</a>
							</Link>

							{/* <Link href='#'>
								<a>Donate</a>
							</Link> */}
						</div>

						<div className='stack'>
							<h1 className='footer-title'>Website</h1>

							<a
								href='https://github.com/wtwise/homepage-v2'
								target='_blank'
								rel='noreferrer'
							>
								View source
							</a>

							<Link href='/inspiration'>
								<a>Inspiration</a>
							</Link>
						</div>
					</div>

					<div style={{ marginTop: '1.5rem' }}>
						&copy; William Wise {new Date(Date.now()).getFullYear()}
					</div>
				</section>
			</section>
		</>
	);
}

export default MyApp;
