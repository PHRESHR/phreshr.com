async function fetchFeatured() {
	const featuredQuery = `
      query () {
        featured() {
          id
          title
          cover
          cover_preview
          show {
            title
          }
          season
        }
      }
    `;
	const response = await fetch('https://my-json-server.typicode.com/drejohnson/mock-api/db', {
		method: 'POST',
		headers: {
			'content-type': 'application/json;charset=UTF-8'
		},
		body: JSON.stringify({
			query: featuredQuery
		})
	});
	const data = await response.json();
	return await data.featured;
}

export default fetchFeatured;
