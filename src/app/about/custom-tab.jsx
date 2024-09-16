"use client"

import { Tabs } from "@/components/ui/tabs";
import StatementOfFaithContent from './statement-of-faith-content';
import AboutUsContent from './about-us-content';

const CustomTab = ({ statementOfFaith }) => {

    const tabs = [
        {
            title: "About Us",
            value: "about",
            content: (
                <ContentWrapper>
                    <AboutUsContent />
                </ContentWrapper>
            ),
        },
        {
            title: "Statement of Faith",
            value: "statementOfFaith",
            content: (
                <ContentWrapper>
                    <StatementOfFaithContent statementOfFaith={statementOfFaith} />
                </ContentWrapper>
            ),
        }
    ]

    return (
        <div className="h-[1000px] max-w-[1000px] [perspective:1000px] relative flex flex-col px-8 w-full items-start justify-start py-20">
            <Tabs tabs={tabs} />
        </div>
    )
}

const ContentWrapper = ({ children }) => {
    return (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-[#fcfcfc] bg-black">
            {children}
        </div>
    )
}

export default CustomTab;
