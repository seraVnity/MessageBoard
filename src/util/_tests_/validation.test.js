import { validatePhone, validateTitle, validateText } from "../validation";

test("should be a valid phone number", () => {
  expect(validatePhone("+7 (865) 777-11-22")).toEqual({
    text: "Заполнено",
    isValid: true
  });
});

test("should be an invalid phone number", () => {
  expect(validatePhone("9(85) 777-11-22")).toEqual({
    text: "Неверный формат",
    isValid: false
  });
});

test("the field is not valid", () => {
  expect(validatePhone("")).toEqual({
    text: "Заполните поле",
    isValid: false
  });
});

test("the title is empty", () => {
  expect(validateTitle("")).toEqual({
    text: "Заполните поле",
    isValid: false
  });
});

test("the title is valid", () => {
  expect(validateTitle("Продам щенка")).toEqual({
    text: "Заполнено",
    isValid: true
  });
});

test("the text should be less than 300 symbols", () => {
  expect(validateText("")).toEqual({
    text: "Не более 300 символов",
    isValid: undefined
  });
})

test("the text is valid", () => {
  expect(validateText("Милая собачка будет вас радовать")).toEqual({
    text: "Заполнено",
    isValid: true
  });
})