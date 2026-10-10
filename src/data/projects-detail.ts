// Project page detail. Sources and caveats for every fact are in each entry's `notes` (not shown on the site).
import { projectDetails } from './projects-live';
import { pastDetails as past } from './projects-past';

export const liveDetails = projectDetails;
const category: Record<string, string> = {
  lili: 'Health', 'physio-mobile': 'Health', 'bookmrk-delivery': 'Commerce', locket: 'Social', 'marline-media': 'Design tool',
  'setera-tpms': 'B2B tool', studymap: 'Education', 'warden-tracker': 'Location', careshare: 'Health', synergy: 'Social',
};
export const pastDetails = Object.fromEntries(Object.entries(past).map(([k, { name, ...d }]) => [k, { ...d, fullName: name, category: category[k] }]));
