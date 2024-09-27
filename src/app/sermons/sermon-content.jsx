"use client"

import { LinkPreview } from '@/components/ui/link-preview';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const SermonContent = ({ sermons }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div>
                    <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Sermons</h2>
                </div>
                <div className="mt-12">
                    <div className="flex flex-col gap-4">
                        {sermons.map((sermon, index) => (
                            <div key={`${sermon.language}-Sermon-00${index}`} className="p-4">
                                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
                                    {sermon.language}
                                </h3>
                                {/* <div className="max-w-5xl mx-auto px-8">
                                    <HoverEffect items={sermon.sermons} />
                                </div> */}
                                <div className='flex gap-4 flex-wrap'>
                                    {sermon.sermons.map((message, index) => (
                                        sermon.language === "English" ? (
                                            <Link key={message.title} href={message.link} target='_blank'>
                                                <div className="max-w-xs w-full group/card">
                                                    <div
                                                        className={cn(
                                                            "cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4",
                                                            `bg-cover`
                                                        )}
                                                        style={{ backgroundImage: `url(${message.imageUrl})` }}
                                                    >
                                                        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                                                        <div className="text content">
                                                            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                                                {message.title}
                                                            </h1>
                                                            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                                                                {message.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>


                                        ) : (
                                            <div key={message.title} className="p-4 rounded-lg shadow-md">
                                                <LinkPreview url={message.link}
                                                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500" >
                                                    {message.title}
                                                </LinkPreview>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SermonContent;