export function updateObject(oldObject, newValues) {
	// 用空对象作为第一个参数传递给 Object.assign，以确保是复制数据，而不是去改变原来的数据
	return Object.assign({}, oldObject, newValues);
};

export function updateItemInArray(array, itemId, updateItemCallback) {
	const updatedItems = array.map(item => {
		if (item.id !== itemId) {
			// 因为我们只想更新一个项目，所以保留所有的其他项目
			return item;
		}

		// 使用提供的回调来创建新的项目
		const updatedItem = updateItemCallback(item);
		return updatedItem;
	});

	return updatedItems;
};

export function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};
};

export const verifyPhone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;

export const verifyPass = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
