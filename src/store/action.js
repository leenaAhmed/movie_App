export function addToFavorites(data) {
  return {
    type: 'ADD_FAVORITE',
    payload: data,
  };
}

export function removeFromFavorites(data) {
  return {
    type: 'REMOVE_FAVORITE',
    payload: data,
  };
}

export function increaseCounter() {
  return {
    type: 'INCREMENT',
  };
}

export function decrementCounter() {
  return {
    type: 'DECREMENT',
  };
}
