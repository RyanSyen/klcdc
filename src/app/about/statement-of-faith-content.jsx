"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const StatementOfFaithContent = ({ statementOfFaith }) => {

    return (
        <div className="h-full">
            <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">
                Statement of Faith
            </h2>
            <section className="w-full h-[90%] overflow-y-auto">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
                    Preamble
                </h3>
                <p>
                    The sole and absolute authority for this Statement of Faith is the inerrant Word of God in the Hebrew Scriptures and the Greek New Testament Scriptures, which together constitute the canon of the Holy Scriptures.
                </p>
                <br />
                <div className="bg-[#1F1F1F] p-4 rounded-md">
                    <div className="flex items-center gap-2 my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                        <p className="font-bold">
                            NOTE
                        </p>
                    </div>
                    <p className="text-sm text-[#ccc]">
                        Glide the mouse pointer over a Bible reference to see the corresponding Bible text. In most English Bibles, the uppercase LORD corresponds to the divine name Yahweh that is prevalent in the Hebrew Scriptures.
                    </p>
                </div>
                <br />
                <div>
                    <ul className="list-inside list-roman">
                        {statementOfFaith.map((statement, index) => (
                            <li key={index}>
                                <span className="font-bold">{statement.title}</span>
                                <ul className="list-inside list-disc">
                                    {statement.points.map((point, index) => (
                                        <li key={index}>
                                            {point.point}
                                            <div className="flex flex-wrap items-center gap-2">
                                                {point.verses.map((verse, index) => (
                                                    <VerseTooltip key={index} verse={verse.shortText}>
                                                        <div>
                                                            <div>{verse.longText}</div>
                                                            <hr className="py-1" />
                                                            <div>{verse.verse}</div>
                                                        </div>
                                                    </VerseTooltip>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

const VerseTooltip = ({ children, ...props }) => {
    return (
        <div className="inline-block">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>{props.verse};</TooltipTrigger>
                    <TooltipContent className="w-[250px] max-h-[80vh]">
                        {children}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}

export default StatementOfFaithContent;