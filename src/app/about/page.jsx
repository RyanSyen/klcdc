
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

export default About;
