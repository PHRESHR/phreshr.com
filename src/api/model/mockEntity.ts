export interface FeaturedEntity {
	uid?: string;
	id?: string;
	title?: string;
	cover?: string;
	cover_preview?: string;
	season?: string;
	show?: {
		title?: string;
	};
}

export interface ShowsEntity {
	uid?: string;
	id?: string;
	title?: string;
	description?: string;
	poster?: string;
	poster_preview?: string;
}

export interface ApiEntity {
	featured: FeaturedEntity;
	shows: ShowsEntity[];
	[key: string]: object | object[];
}
