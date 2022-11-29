import Link from 'next/link';
import classes from './Event.module.scss';

function Event({ what, when, where, id, image }) {
  const formattedDate = new Date(when).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const formattedAddress = where.replaceAll(', ', '\n');
  const link = `/events/${id}`;

  console.log(where);
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={what} />
      <div className={classes.content}>
        <div>
          <h2>{what}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link className={classes.link} href={link}>
            Explore Event
          </Link>
        </div>
      </div>
    </li>
  );
}
export default Event;
