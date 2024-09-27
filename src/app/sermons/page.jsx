import { promises as fs } from 'fs';
import SermonContent from './sermon-content';

const Sermons = async () => {

  const sermons = await fs.readFile('public/data/sermons.json', 'utf8');
  const data = JSON.parse(sermons);

  return (
    <SermonContent sermons={data} />
  )
};

export default Sermons;
