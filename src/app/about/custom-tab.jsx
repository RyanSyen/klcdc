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
        <Tabs defaultValue={tabs[0].value} className="py-20 px-8">
            <TabsList className="grid w-full grid-cols-2">
                {tabs.map((tab, index) => (
                    <TabsTrigger key={index} value={tab.value}>{tab.title}</TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab, index) => (
                <TabsContent key={index} value={tab.value}>
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default CustomTab;

