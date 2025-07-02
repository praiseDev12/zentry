import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import AnimatedTitle from '../components/AnimatedTitle';

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create('#zentry', {
			type: 'chars',
		});

		const zentryTl = gsap.timeline({
			scrollTrigger: {
				trigger: '#zentry-container',
				start: '700% center',
				end: '950% center',
				scrub: true,
			},
		});

		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: '#clip',
				start: 'center center',
				end: '+=999 center',
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});
		clipAnimation.to('.mask-clip-path', {
			width: '100vw',
			height: '100vh',
			borderRadius: 0,
		});

		zentryTl
			.to('#zentry-container', {
				opacity: 1,
				duration: 2,
				clipPath: 'circle(100% at 50% 50%)',
				ease: 'power1.inOut',
			})
			.from(titleSplit.chars, {
				opacity: 0,
				duration: 1,
				stagger: 0.1,
				yPercent: 200,
			});
	});

	return (
		<div id='about' className='min-h-screen w-screen overflow-hidden'>
			<div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
				<h2 className='font-general text-sm uppercase md:text-[10px]'>
					Welcome to Zentry
				</h2>

				<AnimatedTitle
					title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
					containerClass='mt-5 !text-black text-center'
				/>
			</div>
			<div id='clip' className='h-dvh w-screen'>
				<div className='mask-clip-path about-image flex flex-col items-center overflow-hidden'>
					<img
						src='img/about.webp'
						alt='background'
						className='absolute left-0 top-0 size-full object-cover'
					/>

					<h1 className='font-general text-sm absolute mt-10 z-10'>
						Welcome to
					</h1>
					<div
						id='zentry-container'
						style={{
							clipPath: 'circle(6% at 50% 50%)',
						}}
						className='abs-center something opacity-0 h-fit rounded-2xl text-nowrap bg-black/40 backdrop-blur-md p-4'>
						<h1 id='zentry' className='special-font clip-title text-blue-100'>
							<b>Zentry</b>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
