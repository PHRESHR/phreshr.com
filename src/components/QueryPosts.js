// import React from 'react';
// import { Connect, query } from 'urql';

// const PostQuery = query(`
// {
//   posts {
//     id,
//     title,
//     content
//   }
// }
// `);

// function QueryPosts(props) {
// 	return (
// 		<React.Fragment>
// 			<Connect
// 				query={query(PostQuery)}
// 				children={({ loaded, data }) => {
// 					return loaded === false ? (
// 						'loading'
// 					) : (
// 						<div>
// 							<ul className="post-list">
// 								{data.feed.map((d) => (
// 									<li key={d.id} className="post-item">
// 										<img src="https://via.placeholder.com/1280x720" alt="thumbnail" />
// 										<h2>{d.title}</h2>
// 										<p>{d.content}</p>
// 									</li>
// 								))}
// 							</ul>
// 						</div>
// 					);
// 				}}
// 			/>
// 		</React.Fragment>
// 	);
// }

// export default QueryPosts;
