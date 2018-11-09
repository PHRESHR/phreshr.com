import React, {useState, useEffect} from 'react';
import FeaturedDetails from './FeaturedDetails';

import { color } from '../../styles/variables'
import { media } from "../../styles/utils/utils";
import { FeaturedEntity } from '../../api/model';

const data: FeaturedEntity = {
	uid: 'smoke-sessions-vintage-nation',
	id: '1',
	title: 'Watch Vintage Nation Discusss Originality In Music and Culture',
	cover:
		'https://res.cloudinary.com/phreshr-media/image/upload/ar_16:9,w_1080,dpr_auto,f_auto,q_auto/v1494274322/smoke-sessions/vintage-nation.jpg',
	cover_preview:
		'https://res.cloudinary.com/phreshr-media/image/upload/ar_16:9,c_fill,e_blur:100,fl_strip_profile,dpr_auto,f_auto,q_auto:low,w_480/v1494274322/smoke-sessions/vintage-nation.jpg',
	season: '1',
	show: {
		title: 'Smoke Sessions'
	}
};

interface FeaturedProps {}

function Featured() {
	const [featured, setFeatured] = useState(null)
  
	return (
		<div className="featured">
			<FeaturedDetails featured={data} />
			<style jsx>{`
				div.featured {
					display: flex;
					flex-direction: column;
					align-items: start;

					@media (${media.lg()}) {
						position: relative
					}
				}
			`}</style>
		</div>
	);
}

export default Featured;
