
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const StatementOfFaithContent = ({ statementOfFaith }) => {

    return (
        <div className="max-w-[1000px]">
            <Card>
                <CardHeader className="max-w-[1000px]">
                    <CardTitle className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">
                        Statement of Faith
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <section className="w-full h-[90%] overflow-y-auto">

                        <div className="bg-[#ccc] p-4 rounded-md my-2">
                            <div className="flex items-center gap-2 my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                                </svg>
                                <p className="font-bold">
                                    TIP
                                </p>
                            </div>
                            <p className="">
                                Glide the mouse pointer over a Bible reference to see the corresponding Bible text. In most English Bibles, the uppercase LORD corresponds to the divine name Yahweh that is prevalent in the Hebrew Scriptures.
                            </p>
                        </div>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-2">
                            Preamble
                        </h3>
                        <p>
                            The sole and absolute authority for this Statement of Faith is the inerrant Word of God in the Hebrew Scriptures and the Greek New Testament Scriptures, which together constitute the canon of the Holy Scriptures.
                        </p>
                        <br />
                        <div className="bg-[#ccc] p-4 rounded-md">
                            <div className="flex items-center gap-2 my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg>
                                <p className="font-bold">
                                    NOTE
                                </p>
                            </div>
                            <p className="">
                                YHWH (יהוה, misrendered as “the LORD” in most Bibles) occurs 6,828 times in the Hebrew Scriptures, whereas Elohim (אֱלֹהִים, “God”) occurs about 2,600 times (sometimes referring to false gods)
                            </p>

                        </div>
                        <br />
                        <div>
                            <ul className="">
                                {statementOfFaith.map((statement, index) => (
                                    <li key={index} className="scroll-m-20 text-2xl font-semibold tracking-tight py-4">
                                        <div className="flex items-center">
                                            <span className="mr-2 text-2xl font-semibold">{toRoman(index + 1)}.</span>
                                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                                {statement.title}
                                            </h3>
                                        </div>
                                        <ul className="list-inside list-disc">
                                            {statement.points.map((point, index) => (
                                                <li key={index} className="text-lg font-normal py-1">
                                                    {point.point}
                                                    <div className="flex flex-wrap items-center gap-2 ">
                                                        ({point.verses.map((verse, index) => (
                                                            <div key={index} className="font-medium leading-none text-muted-foreground">
                                                                <VerseTooltip verse={verse.shortText} >
                                                                    <div>
                                                                        <div>{verse.longText}</div>
                                                                        <hr className="py-1" />
                                                                        <div>{verse.verse}</div>
                                                                    </div>
                                                                </VerseTooltip>
                                                            </div>
                                                        ))})
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </CardContent>
            </Card>
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

const toRoman = (num) => {
    const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    return roman[num - 1] || num;
};

export default StatementOfFaithContent;