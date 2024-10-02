export const dateFormatter = (value: string) => {
  const startDate = new Date(value);
  const year = startDate.getFullYear();
  const month = (startDate.getMonth() + 1).toString().padStart(2, "0");
  const day = startDate.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
