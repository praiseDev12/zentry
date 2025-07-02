import { TiLocationArrow } from 'react-icons/ti';
import BentoCard from '../components/BentoCard';
import BentoTilt from '../components/BentoTilt';

const Features = () => {
	return (
		<section className='bg-black pb-52'>
			<div className='container mx-auto px-3 md:px-10'>
				<div className='px-5 py-32'>
					<p className='font-circular-web text-lg text-blue-50'>
						Into the Metagame Layer
					</p>
					<p className='max-w-md font-circular-web text-lg text-blue-75 opacity-50'>
						Immerse yourself in a rich and ever-expanding universe where a
						vibrant array of products converge into an interconnected overlay
						experience on your world
					</p>
				</div>
				<BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
					<BentoCard
						src='/videos/feature-1.mp4'
						title={
							<>
								radia<b>n</b>t
							</>
						}
						description='A cross platform meta game app, turning your activities across web2 and web3 games into a rewarding adventure'
					/>
				</BentoTilt>
				<div className='grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7'>
					<BentoTilt className='col-span-2 md:col-span-1 md:row-span-2'>
						<BentoCard
							src='/videos/feature-2.mp4'
							title={
								<>
									Zig<b>m</b>a
								</>
							}
							description='An anime and gaming-inspired NFT collection - the IP primed for expansion'
						/>
					</BentoTilt>

					<BentoTilt className='col-span-2 md:col-span-1 md:ms-0'>
						<BentoCard
							src='videos/feature-3.mp4'
							title={
								<>
									n<b>e</b>xus
								</>
							}
							description='A gamified social hub, adding a new dimension of play to social interaction for Web3 communities'
						/>
					</BentoTilt>
					<BentoTilt className='col-span-2 md:col-span-1 me-14 md:me-0'>
						<BentoCard
							src='videos/feature-4.mp4'
							title={
								<>
									az<b>u</b>l
								</>
							}
							description='A cross-world AI Agent - elevating your gameplay to be more fun and productive'
						/>
					</BentoTilt>

					<BentoTilt className='bento-tilt_2'>
						<div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
							<h1 className='bento-title special-font max-w-64 text-black'>
								More <b>C</b>oming so<b>o</b>n
							</h1>
							<TiLocationArrow className='m-5 scale-[5] self-end' />
						</div>
					</BentoTilt>
					<BentoTilt className='bento-tilt_2'>
						<video
							src='/videos/feature-5.mp4'
							loop
							muted
							autoPlay
							className='size-full object-center object-cover'
						/>
					</BentoTilt>
				</div>
			</div>
		</section>
	);
};

export default Features;
