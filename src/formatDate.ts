export const formatDate = (date: Date, locale = "ko-KR"): string => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
