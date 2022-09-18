function getQueryFilterParam(location) {
  const url = new URL(location);
  const searchParam = new URLSearchParams(url.search);

  return searchParam.get('filter');
};

export default getQueryFilterParam;