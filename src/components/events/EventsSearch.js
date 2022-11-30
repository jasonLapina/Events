import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import classes from './EventsSearch.module.scss';

function EventsSearch() {
  const yearRef = useRef();
  const monthRef = useRef();
  const router = useRouter();
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  useEffect(() => {
    if (router.query.slug) {
      setYear(router.query.slug[0]);
      setMonth(router.query.slug[1]);
    }
  }, []);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const renderMonths = months.map((month, i) => {
    return (
      <option key={i} value={i + 1}>
        {month}
      </option>
    );
  });

  const filterHandler = (e) => {
    e.preventDefault();
    const year = yearRef.current.value;
    const month = monthRef.current.value;
    if (year == 0 && month == 0) {
      router.replace('/events');
    } else {
      router.push(`/events/${year}/${month}`);
    }
  };
  const changeYearHandler = () => {
    setYear(yearRef.current.value);
  };
  const changeMonthHandler = () => {
    setMonth(monthRef.current.value);
  };

  return (
    <form className={classes.form}>
      <div className={classes.grp}>
        <label htmlFor='year'>Year</label>
        <select
          onChange={changeYearHandler}
          value={year}
          ref={yearRef}
          id='year'
        >
          <option value='0'></option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
        </select>
      </div>
      <div className={classes.grp}>
        <label htmlFor='month'>Month</label>

        <select
          onChange={changeMonthHandler}
          value={month}
          ref={monthRef}
          id='month'
        >
          <option value='0'></option>
          {renderMonths}
        </select>
      </div>
      <Button onClick={filterHandler}>Filter</Button>
    </form>
  );
}

export default EventsSearch;
