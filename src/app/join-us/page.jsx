import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto ">
                <div>
                    <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Join Us</h2>
                </div>
                <div className="mt-8 flex gap-4 flex-wrap">
                    <Link href={"/sunday-service"}>
                        <div className="max-w-xs w-full group/card">
                            <div
                                className="cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4 bg-cover"
                            >
                                <Image src="/home/sunday-service.jpg" className='absolute w-full h-full' fill alt="Sunday Service" />
                                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Sunday Service
                                    </h1>
                                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                                        Let&apos;s gather in His name and worship our God this Sunday.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/youth-corner"}>
                        <div className="max-w-xs w-full group/card">
                            <div
                                className="cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4 bg-cover"
                            >
                                <Image src="/navbar/youth-corner.png" fill alt="Youth Corner" />
                                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Youth Corner
                                    </h1>
                                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                                        A vibrant space for youths to connect, grow, and explore their faith.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/bible-studies"}>
                        <div className="max-w-xs w-full group/card">
                            <div
                                className="cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4 bg-cover"
                            >
                                <Image src="/navbar/bible-study.jpg" fill alt="Bible Study" />
                                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Bible Studies
                                    </h1>
                                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                                        Learning and deepening our faith through scripture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Page;
