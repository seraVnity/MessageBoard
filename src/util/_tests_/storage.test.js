import { add, get, remove } from "../storage";

beforeEach(() => {
  localStorage.clear();
});

test("should add to the local storage", () => {
  const card = add({ title: "Продам собачку" });
  expect(localStorage.length).toBe(1);
  expect(get(card.id)).toEqual(card);
});

test("should remove from the local storage", () => {
  const card = add({ title: "Много много апельсинов и мандаринов" });
  remove(card.id);
  expect(localStorage.length).toBe(0);
});
