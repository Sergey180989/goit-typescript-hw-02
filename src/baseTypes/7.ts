/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/


enum days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: days): boolean {
  return day === days.Saturday || day === days.Sunday;
}

if (isWeekend(days.Monday)) {
  console.log("Сьогодні вихідний день");
} else {
  console.log("Сьогодні робочий день");
}