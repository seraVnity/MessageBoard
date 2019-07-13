// ADD card to local storage
export function add(card) {
  const now = Date.now();
  card.id = now;
  // card.createdDate = now;
  localStorage.setItem("card."+ now, JSON.stringify(card));
}

export function list() {
  const cards = [];
  for (var i = 0; i < localStorage.length; i++ ) {
    const card = JSON.parse(localStorage.getItem(localStorage.key(i)));
    cards.push(card);
  }
  return cards.sort((a, b) => b.id - a.id);
}

export function remove(cardId) {
  localStorage.removeItem("card." + cardId);
}
