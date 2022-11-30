import Link from 'next/link';
import classes from './Event.module.scss';
import Button from '../ui/Button';

function Event({ what, when, where, id, image }) {
  const formattedDate = new Date(when).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const formattedAddress = where.replaceAll(', ', '\n');
  const link = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={what} />
      <div className={classes.content}>
        <div className={classes.details}>
          <h2>{what}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button>
            <Link href={link}>Explore Event</Link>
          </Button>
        </div>
      </div>
    </li>
  );
}
export default Event;
