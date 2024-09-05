function getNextBirthday(month: number, day: number): Date {
  const today = new Date();
  let year = today.getFullYear();

  const birthday = new Date(year, month - 1, day);
  if (birthday < today) {
    birthday.setFullYear(year + 1);
  }
  return birthday;
}

const nextBirthday = getNextBirthday(9, 5);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
