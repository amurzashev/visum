const setErrorMessage = (code) => {
  switch (code) {
    case 1:
      return 'Неправильный код';
    case 2:
      return 'Поставьте оценку';
    case 3:
      return 'Слишком короткий комментарий';
    case 422:
      return 'Неправильный формат данных';
    case 429:
      return 'Серьезно, бро? Подожди пару минут';
    default:
      return 'Что-то пошло не так. Повторите еще раз';
  }
};
export default setErrorMessage;
