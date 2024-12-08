import Projects from "@/components/our-projects/main";


const OurProjectPage = () => {
	
	return (
		<div className="">
			<div className="w-full h-[60vh] relative">
				<div className="before:content-[''] w-full h-[60vh] relative before:absolute  bg-gradient-to-t from-[#D800C2] to-[#15295B] before:z-20 before:top-0 before:right-0 before:left-0 before:bottom-0">
				</div>

				<div className="absolute z-30 max-w-[1240px] w-full mx-auto top-5 left-0 right-0  text-white h-full flex justify-center flex-col">
					<h2 className='text-6xl text-center text-[white] pb-5 font-bold'>Our Projects</h2>
				</div>
			</div>
			<div>
				<Projects />
			</div>
		</div>

	);
};

export default OurProjectPage;