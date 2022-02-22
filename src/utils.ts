const parse = (s: string) => {
  s.replace(/\s/g, '');
  const parsed = s.split('/').filter(Boolean);

  const getAsNumber = (index: number) => {
    const value = parsed.at(index);

    if (!value) {
      return null;
    }

    return parseInt(value, 10);
  };

  return [-5, -4, -3, -2, -1].map(getAsNumber);
};

export const getDate = (timeString: string): Date => {
  const [_year, _month, _date, _hours, _minutes] = parse(timeString);

  const current = new Date();

  const year = Number.isInteger(_year) ? _year : current.getFullYear();
  const month = Number.isInteger(_month) ? _month : current.getMonth();
  const date = Number.isInteger(_date) ? _date : current.getDate();
  const hours = Number.isInteger(_hours) ? _hours : current.getHours();
  const minutes = Number.isInteger(_minutes) ? _minutes : current.getMinutes();

  return new Date(
    year as number,
    month as number,
    date as number,
    hours as number,
    minutes as number,
  );
};

export default {};
