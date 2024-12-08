import React from 'react';

const SiteStatic = () => {
    return (
        <div className='mt-14 text-white md:py-16 p-6 max-w-[1240px] mx-auto'>
            <div className='flex gap-3 items-center mb-[85px] md:ml-[50px]'>
                <hr className='w-[70px] h-[8px] bg-[#D800C2]' />
                <h1 className='font-bold'>Our Client and Servicess Countries</h1>
            </div>
            
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-6 text-center text-white'>
                <div className='bg-gradient-to-t from-[#D800C2] to-[#15295B] rounded-full md:h-[200px] md:w-[200px] h-[100px]'>
                    <p className='font-bold md:text-4xl text-2xl mt-4 md:mt-12'>340+</p>
                    <hr className='w-[140px] mx-auto my-2 md:my-3' />
                    <h1 className='md:text-2xl text-xl'>Project</h1>
                </div>
                <div className='bg-gradient-to-t from-[#D800C2] to-[#15295B] rounded-full md:h-[200px] md:w-[200px] h-[100px]'>
                    <p className='font-bold md:text-4xl text-2xl mt-4 md:mt-12'>34+</p>
                    <hr className='w-[140px] mx-auto my-2 md:my-3' />
                    <h1 className='md:text-2xl text-xl'>Countries</h1>
                </div>
                <div className='bg-gradient-to-t from-[#D800C2] to-[#15295B] rounded-full md:h-[200px] md:w-[200px] h-[100px]'>
                    <p className='font-bold md:text-4xl text-2xl mt-4 md:mt-12'>240+</p>
                    <hr className='w-[140px] mx-auto my-2 md:my-3' />
                    <h1 className='md:text-2xl text-xl'>Clients</h1>
                </div>
                <div className='bg-gradient-to-t from-[#D800C2] to-[#15295B] rounded-full md:h-[200px] md:w-[200px] h-[100px]'>
                    <p className='font-bold md:text-4xl text-2xl mt-4 md:mt-12'>440+</p>
                    <hr className='w-[140px] mx-auto my-2 md:my-3' />
                    <h1 className='md:text-2xl text-xl'>Reviews</h1>
                </div>
            </div>
        </div>
    );
};

export default SiteStatic;