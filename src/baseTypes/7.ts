const enum DaysOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(dayOfWeek: DaysOfWeek): boolean {
  return dayOfWeek === DaysOfWeek.SATURDAY || dayOfWeek === DaysOfWeek.SUNDAY;
}

export {};
