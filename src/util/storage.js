// ADD card to local storage
export function add(card) {
  const id = Date.now();
  card.id = id;
  localStorage.setItem("card."+ id, JSON.stringify(card));
}

export function list() {
  const cards = [];
  for (var i = 0; i < localStorage.length; i++ ) {
    const key = localStorage.key(i)
    if (key.startsWith("card")) {
      const card = JSON.parse(localStorage.getItem(localStorage.key(i)));
      cards.push(card);
    }
  }
  return cards.sort((a, b) => b.id - a.id);
}

export function remove(cardId) {
  localStorage.removeItem("card." + cardId);
}


export function update(card) {
  const id = card.id;
  localStorage.setItem("card." + id, JSON.stringify(card));
}

export function get(cardId) {
  return JSON.parse(localStorage.getItem("card." + cardId));
}
