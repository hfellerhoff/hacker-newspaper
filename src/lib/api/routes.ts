export const HN_BASE_URL = 'http://hn.algolia.com/api/v1/';

const sidebarLimit = '&hitsPerPage=5';

export const HN_STORIES_FRONTPAGE = `${HN_BASE_URL}search?tags=front_page`;
export const HN_STORIES_SHOWCASE = `${HN_BASE_URL}search_by_date?tags=show_hn&numericFilters=points>10${sidebarLimit}`;
export const HN_STORIES_ASK = `${HN_BASE_URL}search_by_date?tags=ask_hn&numericFilters=points>10${sidebarLimit}`;
