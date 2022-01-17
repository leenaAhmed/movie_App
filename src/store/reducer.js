const initial = {
  favList: [],
  favCount: 0,
};

export default function favoritesReducer(state = initial, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favList: [...state.favList, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favList: state.favList.filter(item => {
          return item.id !== action.payload.id;
        }),
      };
    case 'INCREMENT':
      return {
        ...state,
        favCount: state.favCount + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        favCount: state.favCount - 1,
      };
    default:
      return state;
  }
}
