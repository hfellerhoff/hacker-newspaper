import { HN_STORIES_ASK, HN_STORIES_FRONTPAGE, HN_STORIES_SHOWCASE } from './routes';
import fetchData from './fetchData';

const getFrontpageStories = async (): Promise<Record<string, unknown>> =>
	await fetchData(HN_STORIES_FRONTPAGE);
const getShowcaseStories = async (): Promise<Record<string, unknown>> =>
	await fetchData(HN_STORIES_SHOWCASE);
const getAskStories = async (): Promise<Record<string, unknown>> => await fetchData(HN_STORIES_ASK);

const HN = {
	getFrontpageStories,
	getShowcaseStories,
	getAskStories
};

export default HN;
