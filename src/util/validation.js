export function validateTitle(title) {
  const validation = {
    text: "",
    isValid: undefined
  };
  if (!title || title === "") {
    validation.text = "Заполните поле";
    validation.isValid = false;
  } else {
    validation.text = "Заполнено";
    validation.isValid = true;
  }
  return validation;
}

export function validateText(text) {
  const validation = {
    text: "",
    isValid: undefined
  };
  if (text.length !== 0 && text.length > 300) {
    validation.text = "Не более 300 символов";
    validation.isValid = false;
  } else if (text.length === 0) {
    validation.text = "Не более 300 символов";
    validation.isValid = undefined;
  } else {
    validation.text = "Заполнено";
    validation.isValid = true;
  }
  return validation;
}

export function validatePhone(phone) {
  const validation = {
    text: "",
    isValid: undefined
  };
  const regex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone);
  if (regex) {
    validation.text = "Заполнено";
    validation.isValid = true;
  } else if (!phone || phone === "") {
    validation.text = "Заполните поле";
    validation.isValid = false;
  } else {
    validation.text = "Неверный формат";
    validation.isValid = false;
  }
  return validation;
}
