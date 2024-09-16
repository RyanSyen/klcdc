
// import { Tabs } from "@/components/ui/tabs";
// import { LinkPreview } from '@/components/ui/link-preview';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"
import { promises as fs } from 'fs';
import CustomTab from './custom-tab';

const About = async () => {
  const statementOfFaith = await fs.readFile('public/data/statement_of_faith.json', 'utf8');
  const data = JSON.parse(statementOfFaith);

  return (
    <>
      <CustomTab statementOfFaith={data} />
    </>
  )
};

// const ContentWrapper = ({ children }) => {
//   return (
//     <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-[#fcfcfc] bg-black">
//       {children}
//     </div>
//   )
// }

// const AboutUsContentTest = () => {
//   return (
//     <div className="h-full">
//       <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">
//         About Us
//       </h2>
//       <div className="w-full h-[90%] pr-4 overflow-y-auto tab-content">
//         <section className="py-4">
//           <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
//             Background
//           </h3>
//           <p>
//             Christian Disciples Church is a fellowship of churches located in various parts of the world, mainly in Asia but also in a few western countries.
//           </p>
//           <br />
//           <p>
//             Christian Disciples Church has its beginnings in the 1970s when a small group of believers in Montreal invited Eric H.H. Chang (1934-2013) to minister to their tiny fledging church. Pastor Chang had previously been serving the Lord in England, first in a London church and later in a Liverpool church, where he was ordained by the Reverend Andrew McBeath. (You can read Pastor Chang's testimony{" "}
//             <LinkPreview
//               url="https://christiandiscipleschurch.org/content/ehhc-testimony"
//               className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
//               here
//             </LinkPreview>
//             .)
//           </p>
//         </section>
//         <section className="py-4">
//           <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
//             Emphases
//           </h3>
//           <p>
//             Christian Disciples Church has several emphases. Firstly, we promote Biblical monotheism and the proclamation of Yahweh as the only true God and Jesus Christ as the Son of God. Secondly, we uphold the Scriptural teaching of total commitment to Yahweh our God and to Jesus Christ our Lord. Thirdly, we aim to fulfill the New Testament commission of making disciples of all nations. Fourthly, we adhere unconditionally to the principle of sola Scriptura (Scripture alone) in a way that makes us conscience-bound to cast aside all our preconceived Christian notions and hallowed human traditions (even the Nicene Creed) if these are found to be out of alignment with Scriptural teaching. Fifthly, we reject the materialism and focus on money that has pervaded much of Christianity today.
//           </p>
//           <br />
//           <p>
//             We extend a hand of fellowship to like-minded people all over the world, including those whom we will never get to know in the present age. May our common faith work out for the praise and glory of Yahweh our blessed God.
//           </p>
//         </section>
//       </div>
//     </div>
//   )
// }

// const StatementOfFaithContentTest = async () => {
//   const statementOfFaith = await fs.readFile('public/data/statement_of_faith.json', 'utf8');

//   return (
//     <div className="h-full">
//       <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">
//         Statement of Faith
//       </h2>
//       <div className="my-4">
//         <section className="w-full h-full overflow-y-auto ">
//           <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
//             Preamble
//           </h3>
//           <p>
//             The sole and absolute authority for this Statement of Faith is the inerrant Word of God in the Hebrew Scriptures and the Greek New Testament Scriptures, which together constitute the canon of the Holy Scriptures.
//           </p>
//           <br />
//           <div className="bg-[#1F1F1F] p-4 rounded-md">
//             <div className="flex items-center gap-2 my-2">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
//                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
//                 <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
//               </svg>
//               <p className="font-bold">
//                 NOTE
//               </p>
//             </div>
//             <p className="text-sm text-[#ccc]">
//               Glide the mouse pointer over a Bible reference to see the corresponding Bible text. In most English Bibles, the uppercase LORD corresponds to the divine name Yahweh that is prevalent in the Hebrew Scriptures.
//             </p>
//           </div>
//           <br />
//           <div>
//             <ul className="list-inside list-roman">
//               {statementOfFaith.map((statement, index) => (
//                 <li key={index}>
//                   <span className="font-bold">{statement.title}</span>
//                   <ul className="list-inside list-disc">
//                     {statement.points.map((point, index) => (
//                       <li key={index}>
//                         {point.point}
//                         <div className="flex flex-wrap items-center gap-2">
//                           {point.verses.map((verse, index) => (
//                             <VerseTooltip key={index} verse={verse.shortText}>
//                               <div>
//                                 <div>{verse.longText}</div>
//                                 <hr className="py-1" />
//                                 <div>{verse.verse}</div>
//                               </div>
//                             </VerseTooltip>
//                           ))}
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                   {/* <span className="font-bold">{statement.title}</span>
//                   <ul className="list-inside list-disc">
//                     {statement.points.map((point, index) => (
//                       <li key={index}>
//                         {point.point}
//                         <div className="flex flex-wrap items-center gap-2">
//                           {point.verses.map((verse, index) => (
//                             <VerseTooltip key={index} verse={verse.verse}>
//                               <div>
//                                 <div>{verse.longText}</div>
//                               </div>
//                             </VerseTooltip> */}
//                 </li>
//               ))}
//               {/* <li>
//                 <span className="font-bold">GOD</span>
//                 <ul className="list-inside list-disc">
//                   <li className="py-2">
//                     There is one and only one God, and He is one Person
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Dt.6:4">
//                         <div>
//                           <div>Deuteronomy 6:4</div>
//                           <hr className="py-1" />
//                           <div>4 Hear, O Israel: The Lord our God, the Lord is one.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Mk.12:29">
//                         <div>
//                           <div>Mark 12:29</div>
//                           <hr className="py-1" />
//                           <div>29 Jesus answered, “The most important is, Hear, O Israel: The Lord our God, the Lord is one.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Jn.5:44">
//                         <div>
//                           <div>John 5:44</div>
//                           <hr className="py-1" />
//                           <div>44 How can you believe, when you receive glory from one another and do not seek the glory that is from the only God?</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="17:3">
//                         <div>
//                           <div>John 17:3</div>
//                           <hr className="py-1" />
//                           <div>3 And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Rom.16:27">
//                         <div>
//                           <div>Romans 16:27</div>
//                           <hr className="py-1" />
//                           <div>27 Now to the King eternal, immortal, invisible, the only God, be honor and glory forever and ever. Amen.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Cor.8:6">
//                         <div>
//                           <div>1 Corinthians 8:6</div>
//                           <hr className="py-1" />
//                           <div>6 But there is one God, the Father, from whom are all things and we for Him; and one Lord, Jesus Christ, through whom are all things and we through Him.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Tim.2:5">
//                         <div>
//                           <div>1 Timothy 2:5</div>
//                           <hr className="py-1" />
//                           <div>5 For there is one God and one mediator between God and men, the man Christ Jesus,</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Jude 1:25">
//                         <div>
//                           <div>Jude 1:25</div>
//                           <hr className="py-1" />
//                           <div>25 To the only God our Savior, through Jesus Christ our Lord, be glory, majesty, dominion and authority, before all time and now and forever. Amen.</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     The name of God is Yahweh (YHWH)
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Ex.3:15">
//                         <div>
//                           <div>Exodus 3:15</div>
//                           <hr className="py-1" />
//                           <div>15 And God said to Moses, “You shall tell the Israelites, 'Yahweh, the God of your fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has sent me to you.' This is My name forever, and this is My memorial to all generations.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="15:3">
//                         <div>
//                           <div>Exodus 15:3</div>
//                           <hr className="py-1" />
//                           <div>3  The Lord is a man of war; the Lord is his name.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Jer.16:21">
//                         <div>
//                           <div>Jeremiah 16:21</div>
//                           <hr className="py-1" />
//                           <div>21 “Therefore, behold, I will make them know, this once I will make them know my power and my might, and they shall know that my name is the Lord.”.</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <br />
//                   <div className="bg-[#1F1F1F] p-4 rounded-md">
//                     <div className="flex items-center gap-2 my-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
//                         <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
//                       </svg>
//                       <p className="font-bold">
//                         NOTE
//                       </p>
//                     </div>
//                     <p className="text-sm text-[#ccc]">
//                       YHWH (יהוה, misrendered as “the LORD” in most Bibles) occurs 6,828 times in the Hebrew Scriptures, whereas Elohim (אֱלֹהִים, “God”) occurs about 2,600 times (sometimes referring to false gods)
//                     </p>
//                   </div>
//                   <br />
//                   <li className="py-2">
//                     There is no God besides Yahweh, the only true God
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Ex.20:2-3">
//                         <div>
//                           <div>Exodus 20:2-3</div>
//                           <hr className="py-1" />
//                           <div>2 “I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.
//                             3 “You shall have no other gods before me.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Dt.4:35">
//                         <div>
//                           <div>Deuteronomy 4:35</div>
//                           <hr className="py-1" />
//                           <div>35 To you it was shown, that you might know that the Lord is God; there is no other besides him.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Sam.2:2">
//                         <div>
//                           <div>1 Samuel 2:2</div>
//                           <hr className="py-1" />
//                           <div>2 There is none holy like the Lord: for there is none besides you; there is no rock like our God.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Ki.8:60">
//                         <div>
//                           <div>1 Kings 8:60</div>
//                           <hr className="py-1" />
//                           <div>60 that all the peoples of the earth may know that the Lord is God; there is no other.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Isa.44:8">
//                         <div>
//                           <div>Isaiah 44:8</div>
//                           <hr className="py-1" />
//                           <div>8 Fear not, nor be afraid; have I not told you from of old and declared it? And you are my witnesses! Is there a God besides me? There is no Rock; I know not any.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse=" 45:5-6">
//                         <div>
//                           <div>Isaiah 45:5–6</div>
//                           <hr className="py-1" />
//                           <div>5 I am the Lord, and there is no other, besides me there is no God; I equip you, though you do not know me, 6  that people may know, from the rising of the sun and from the west, that there is none besides me; I am the Lord, and there is no other.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="21-22">
//                         <div>
//                           <div>Isaiah 45:21–22</div>
//                           <hr className="py-1" />
//                           <div>21  Declare and present your case;

//                             let them take counsel together!

//                             Who told this long ago?

//                             Who declared it of old?

//                             Was it not I, the Lord?

//                             And there is no other god besides me,

//                             a righteous God and a Savior;

//                             there is none besides me.

//                             22  “Turn to me and be saved,

//                             all the ends of</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="46:9">
//                         <div>
//                           <div>Isaiah 46:9</div>
//                           <hr className="py-1" />
//                           <div>9 remember the former things of old; for I am God, and there is no other; I am God, and there is none like me</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Mk.12:29">
//                         <div>
//                           <div>Mark 12:29</div>
//                           <hr className="py-1" />
//                           <div>29 Jesus answered, “The most important is, Hear, O Israel: The Lord our God, the Lord is one.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Jn.17:3">
//                         <div>
//                           <div>John 17:3</div>
//                           <hr className="py-1" />
//                           <div>3 And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Rom.16:27">
//                         <div>
//                           <div>Romans 16:27</div>
//                           <hr className="py-1" />
//                           <div>27 to the only wise God be glory forevermore through Jesus Christ! Amen.</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     God is eternal, immortal, invisible
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="1Tim.1:17">
//                         <div>
//                           <div>1 Timothy 1:17</div>
//                           <hr className="py-1" />
//                           <div>17 To the King of the ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="6:16">
//                         <div>
//                           <div>1 Timothy 6:16</div>
//                           <hr className="py-1" />
//                           <div>16 who alone has immortality, who dwells in unapproachable light, whom no one has ever seen or can see. To him be honor and eternal dominion. Amen.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Jn.1:18">
//                         <div>
//                           <div>John 1:18</div>
//                           <hr className="py-1" />
//                           <div>18 No one has ever seen God; the only God, who is at the Father's side, he has made him known.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Jn.4:12">
//                         <div>
//                           <div>1 John 4:12</div>
//                           <hr className="py-1" />
//                           <div>12 No one has ever seen God; if we love one another, God abides in us and his love is perfected in us.</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     God is all powerful, all knowing, and everywhere present
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Job 11:7">
//                         <div>
//                           <div>Job 11:7</div>
//                           <hr className="py-1" />
//                           <div>7 Can you find out the deep things of God? Can you find out the limit of the Almighty?</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Ps.139:2-8">
//                         <div>
//                           <div>Psalm 139:2–8</div>
//                           <hr className="py-1" />
//                           <div>2  You know when I sit down and when I rise up;

//                             you discern my thoughts from afar.

//                             3  You search out my path and my lying down

//                             and are acquainted with all my ways.

//                             4  Even before a word is on my tongue,

//                             behold, O Lord, you know it altogether.

//                             5  You hem me in, behind and before,</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Mt.19:26">
//                         <div>
//                           <div>Matthew 19:26</div>
//                           <hr className="py-1" />
//                           <div>26 But Jesus looked at them and said, “With man this is impossible, but with God all things are possible.”</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Lk.1:37">
//                         <div>
//                           <div>Luke 1:37</div>
//                           <hr className="py-1" />
//                           <div>37 For nothing will be impossible with God.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Jn.3:20">
//                         <div>
//                           <div>1 John 3:20</div>
//                           <hr className="py-1" />
//                           <div>20 for whenever our heart condemns us, God is greater than our heart, and he knows everything.</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     God is holy, compassionate, and loving
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Lev.19:2">
//                         <div>
//                           <div>Leviticus 19:2</div>
//                           <hr className="py-1" />
//                           <div>2 Speak to all the congregation of the people of Israel and say to them, You shall be holy, for I the Lord your God am holy.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="20:26">
//                         <div>
//                           <div>Leviticus 20:26</div>
//                           <hr className="py-1" />
//                           <div>26 You shall be holy to me, for I the Lord am holy and have separated you from the peoples, that you should be mine.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Ps.99:9">
//                         <div>
//                           <div>Psalm 99:9</div>
//                           <hr className="py-1" />
//                           <div>9  Exalt the Lord our God,
//                             and worship at his holy mountain;
//                             for the Lord our God is holy!</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Pet.1:16">
//                         <div>
//                           <div>1 Peter 1:16</div>
//                           <hr className="py-1" />
//                           <div>16 since it is written, "You shall be holy, for I am holy."</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Ex.34:6">
//                         <div>
//                           <div>Exodus 34:6</div>
//                           <hr className="py-1" />
//                           <div>6 The Lord passed before him and proclaimed, “The Lord, the Lord, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness,</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Ps.78:38">
//                         <div>
//                           <div>Psalm 78:38</div>
//                           <hr className="py-1" />
//                           <div>38  Yet he, being compassionate,
//                             atoned for their iniquity
//                             and did not destroy them;
//                             he restrained his anger often
//                             and did not stir up all his wrath.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Ps.136:1">
//                         <div>
//                           <div>Psalm 136:1</div>
//                           <hr className="py-1" />
//                           <div>136 Give thanks to the Lord, for he is good, for his steadfast love endures forever.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Jn.3:16">
//                         <div>
//                           <div>John 3:16</div>
//                           <hr className="py-1" />
//                           <div>16 “For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Jn.4:8">
//                         <div>
//                           <div>1 John 4:8</div>
//                           <hr className="py-1" />
//                           <div>8 Anyone who does not love does not know God, because God is love.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Jn.4:16">
//                         <div>
//                           <div>1 John 4:16</div>
//                           <hr className="py-1" />
//                           <div>16 So we have come to know and to believe the love that God has for us. God is love, and whoever abides in love abides in God, and God abides in him.</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     God is Spirit
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Jn.4:24">
//                         <div>
//                           <div>John 4:24</div>
//                           <hr className="py-1" />
//                           <div>24 God is spirit, and those who worship him must worship in spirit and truth.</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     The Holy Spirit is the Spirit of Yahweh, and very Spirit of very God
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Ps.51:11">
//                         <div>
//                           <div>Psalm 51:11</div>
//                           <hr className="py-1" />
//                           <div>11 Cast me not away from your presence, and take not your Holy Spirit from me.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Ps.139:7">
//                         <div>
//                           <div>Psalm 139:7</div>
//                           <hr className="py-1" />
//                           <div>7 Where shall I go from your Spirit? Or where shall I flee from your presence?</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Isa.11:2">
//                         <div>
//                           <div>Isaiah 11:2</div>
//                           <hr className="py-1" />
//                           <div>2  And the Spirit of the Lord shall rest upon him,

//                             the Spirit of wisdom and understanding,

//                             the Spirit of counsel and might,

//                             the Spirit of knowledge and the fear of the Lord.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Isa.40:13">
//                         <div>
//                           <div>Isaiah 40:13</div>
//                           <hr className="py-1" />
//                           <div>13  Who has measured the Spirit of the Lord, or what man shows him his counsel?</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Micah 3:8">
//                         <div>
//                           <div>Micah 3:8</div>
//                           <hr className="py-1" />
//                           <div>8  But as for me, I am filled with power,

//                             with the Spirit of the Lord,

//                             and with justice and might,

//                             to declare to Jacob his transgression

//                             and to Israel his sin.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Mt.10:20">
//                         <div>
//                           <div>Matthew 10:20</div>
//                           <hr className="py-1" />
//                           <div>20 For it is not you who speak, but the Spirit of your Father speaking through you.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Lk.12:12">
//                         <div>
//                           <div>Luke 12:12</div>
//                           <hr className="py-1" />
//                           <div>12 for the Holy Spirit will teach you in that very hour what you ought to say.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="1Cor.2:11">
//                         <div>
//                           <div>1 Corinthians 2:11</div>
//                           <hr className="py-1" />
//                           <div>11 For who knows a person's thoughts except the spirit of that person, which is in him? So also no one comprehends the thoughts of God except the Spirit of God.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="2Cor.3:17-18">
//                         <div>
//                           <div>2 Corinthians 3:17–18</div>
//                           <hr className="py-1" />
//                           <div>17 Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom. 18 And we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another. For this comes from the Lord who is the Spirit.</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     Yahweh alone is the Creator of the heavens and the earth
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Ex.31:17">
//                         <div>
//                           <div>Exodus 31:17</div>
//                           <hr className="py-1" />
//                           <div>17 It is a sign forever between me and the people of Israel that in six days the Lord made heaven and earth, and on the seventh day he rested and was refreshed.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Isa.44:24">
//                         <div>
//                           <div>Isaiah 44:24</div>
//                           <hr className="py-1" />
//                           <div>24  Thus says the Lord, your Redeemer,

//                             who formed you from the womb:

//                             I am the Lord, who made all things,

//                             who alone stretched out the heavens,

//                             who spread out the earth by myself</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Isa.45:12">
//                         <div>
//                           <div>Isaiah 45:12</div>
//                           <hr className="py-1" />
//                           <div>12  I made the earth

//                             and created man on it;

//                             it was my hands that stretched out the heavens,

//                             and I commanded all their host.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Isa.45:12">
//                         <div>
//                           <div>Isaiah 45:12</div>
//                           <hr className="py-1" />
//                           <div>12  I made the earth

//                             and created man on it;

//                             it was my hands that stretched out the heavens,

//                             and I commanded all their host.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Neh.9:6">
//                         <div>
//                           <div>Nehemiah 9:6</div>
//                           <hr className="py-1" />
//                           <div>6  “You are the Lord, you alone. You have made heaven, the heaven of heavens, with all their host, the earth and all that is on it, the seas and all that is in them; and you preserve all of them; and the host of heaven worships you.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Jer.51:19">
//                         <div>
//                           <div>Jeremiah 51:19</div>
//                           <hr className="py-1" />
//                           <div>19  Not like these is he who is the portion of Jacob,

//                             for he is the one who formed all things,

//                             and Israel is the tribe of his inheritance;

//                             the Lord of hosts is his name.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Acts 4:24">
//                         <div>
//                           <div>Acts 4:24</div>
//                           <hr className="py-1" />
//                           <div>24 And when they heard it, they lifted their voices together to God and said, “Sovereign Lord, who made the heaven and the earth and the sea and everything in them,</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Rev.14:7">
//                         <div>
//                           <div>Revelation 14:7</div>
//                           <hr className="py-1" />
//                           <div>7 And he said with a loud voice, “Fear God and give him glory, because the hour of his judgment has come, and worship him who made heaven and earth, the sea and the springs of water.”</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     Yahweh is the God of Abraham, Isaac, and Jacob
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Ex.3:6">
//                         <div>
//                           <div>Exodus 3:6</div>
//                           <hr className="py-1" />
//                           <div>6 And he said, “I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob.” And Moses hid his face, for he was afraid to look at God.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Ex.4:5">
//                         <div>
//                           <div>Exodus 4:5</div>
//                           <hr className="py-1" />
//                           <div>5 “that they may believe that the Lord, the God of their fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has appeared to you.”</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Mt.22:32">
//                         <div>
//                           <div>Matthew 22:32</div>
//                           <hr className="py-1" />
//                           <div>32 'I am the God of Abraham, and the God of Isaac, and the God of Jacob'? He is not God of the dead, but of the living.”</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Acts 3:13">
//                         <div>
//                           <div>Acts 3:13</div>
//                           <hr className="py-1" />
//                           <div>13 The God of Abraham, the God of Isaac, and the God of Jacob, the God of our fathers, glorified his servant Jesus, whom you delivered over and denied in the presence of Pilate, when he had decided to release him.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Acts 7:32">
//                         <div>
//                           <div>Acts 7:32</div>
//                           <hr className="py-1" />
//                           <div>32 'I am the God of your fathers, the God of Abraham and of Isaac and of Jacob.' And Moses trembled and did not dare to look.</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     Yahweh is the God and Father of Jesus Christ
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse="Jn.20:17">
//                         <div>
//                           <div>John 20:17</div>
//                           <hr className="py-1" />
//                           <div>17 Jesus said to her, “Do not cling to me, for I have not yet ascended to the Father; but go to my brothers and say to them,'I am ascending to my Father and your Father, to my God and your God.'</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Rom.15:6">
//                         <div>
//                           <div>Romans 15:6</div>
//                           <hr className="py-1" />
//                           <div>6 that together you may with one voice glorify the God and Father of our Lord Jesus Christ.</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Eph.1:3">
//                         <div>
//                           <div>Ephesians 1:3</div>
//                           <hr className="py-1" />
//                           <div>3 Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places,</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Eph.1:17">
//                         <div>
//                           <div>Ephesians 1:17</div>
//                           <hr className="py-1" />
//                           <div>17 that the God of our Lord Jesus Christ, the Father of glory, may give you the Spirit of wisdom and of revelation in the knowledge of him,</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                   <li className="py-2">
//                     Yahweh is the God and Father of those who are in Jesus Christ
//                     <div className="flex flex-wrap items-center gap-2">
//                       (
//                       <VerseTooltip verse=" Jn.1:12">
//                         <div>
//                           <div>John 1:12</div>
//                           <hr className="py-1" />
//                           <div>12 But to all who did receive him, who believed in his name, he gave the right to become children of God,</div>
//                         </div>
//                       </VerseTooltip>
//                       <VerseTooltip verse="Rom.20:17">
//                         <div>
//                           <div>John 20:17</div>
//                           <hr className="py-1" />
//                           <div>17 Jesus said to her, “Do not cling to me, for I have not yet ascended to the Father; but go to my brothers and say to them, 'I am ascending to my Father and your Father, to my God and your God.'”</div>
//                         </div>
//                       </VerseTooltip>
//                       )
//                     </div>
//                   </li>
//                 </ul>
//               </li> */}
//             </ul>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// const VerseTooltip = ({ children, ...props }) => {
//   return (
//     <div className="inline-block">
//       <TooltipProvider>
//         <Tooltip>
//           <TooltipTrigger>{props.verse};</TooltipTrigger>
//           <TooltipContent className="w-[250px] max-h-[80vh]">
//             {children}
//           </TooltipContent>
//         </Tooltip>
//       </TooltipProvider>
//     </div>
//   )
// }

export default About;
