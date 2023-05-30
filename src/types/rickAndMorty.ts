export interface ISeasons {
	id: number
	name: string
	air_date: string
	episode: string
}

export interface ICharacter {
	isFavorite: boolean
	id: number,
	name: string,
	status: string,
	species: string,
	type: string,
	gender: string,
	location: {
		name: string,
	},
	image: string,
}