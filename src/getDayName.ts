export const getDayName = (date: Date, locale = "ko-KR"): string => {
  return new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date);
};
