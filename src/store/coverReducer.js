import { createReducer } from '../utils';

const initialState = {
	cover: { id: 1, uri: 'https://picsum.photos/700', path: require('@/assets/covers/199.jpg') },
};

export const coverReducer = createReducer(initialState.cover, {
	SET_COVER: (coverState, action) => {
		return action.cover;
	},
});
