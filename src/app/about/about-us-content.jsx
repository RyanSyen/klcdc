import { LinkPreview } from '@/components/ui/link-preview';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const AboutUsContent = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">About Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <section className="py-4">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
                        Background
                    </h3>
                    <p>
                        Christian Disciples Church is a fellowship of churches located in various parts of the world, mainly in Asia but also in a few western countries.
                    </p>
                    <br />
                    <div>
                        Christian Disciples Church has its beginnings in the 1970s when a small group of believers in Montreal invited Eric H.H. Chang (1934-2013) to minister to their tiny fledging church. Pastor Chang had previously been serving the Lord in England, first in a London church and later in a Liverpool church, where he was ordained by the Reverend Andrew McBeath. (You can read Pastor Chang&apos;s testimony{" "}

                        <LinkPreview
                            url="https://christiandiscipleschurch.org/content/ehhc-testimony"
                            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">

                            here
                        </LinkPreview>
                        .)

                    </div>
                </section>
                <section className="py-4">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
                        Emphases
                    </h3>
                    <p>
                        Christian Disciples Church has several emphases. Firstly, we promote Biblical monotheism and the proclamation of Yahweh as the only true God and Jesus Christ as the Son of God. Secondly, we uphold the Scriptural teaching of total commitment to Yahweh our God and to Jesus Christ our Lord. Thirdly, we aim to fulfill the New Testament commission of making disciples of all nations. Fourthly, we adhere unconditionally to the principle of sola Scriptura (Scripture alone) in a way that makes us conscience-bound to cast aside all our preconceived Christian notions and hallowed human traditions (even the Nicene Creed) if these are found to be out of alignment with Scriptural teaching. Fifthly, we reject the materialism and focus on money that has pervaded much of Christianity today.
                    </p>
                    <br />
                    <p>
                        We extend a hand of fellowship to like-minded people all over the world, including those whom we will never get to know in the present age. May our common faith work out for the praise and glory of Yahweh our blessed God.
                    </p>
                </section>
            </CardContent>
        </Card>
    )
}

export default AboutUsContent;