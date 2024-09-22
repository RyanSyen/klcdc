import StatementOfFaithContent from './statement-of-faith-content';
import AboutUsContent from './about-us-content';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const CustomTab = ({ statementOfFaith }) => {
    const tabs = [
        {
            title: "About Us",
            value: "about",
            content: (
                <AboutUsContent />
            ),
        },
        {
            title: "Statement of Faith",
            value: "statementOfFaith",
            content: (
                <StatementOfFaithContent statementOfFaith={statementOfFaith} />
            ),
        }
    ]

    return (
        <Tabs defaultValue={tabs[0].value} className="py-20 px-8 flex flex-col justify-center items-center">
            <TabsList className="grid w-full grid-cols-2 max-w-[1000px]">
                {tabs.map((tab, index) => (
                    <TabsTrigger key={index} value={tab.value}>{tab.title}</TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab, index) => (
                <TabsContent key={index} value={tab.value} className="flex justify-center items-center">
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default CustomTab;

