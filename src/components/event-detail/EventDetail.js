import Button from '../ui/Button';
import classes from './EventDetail.module.scss';
function EventDetail({ title, description, time, location, image }) {
  const formattedDate = new Date(time).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
      <header className={classes.header}>
        <h1>{title}</h1>
      </header>
      <div className={classes.event}>
        <div className={classes.txt}>
          <p className={classes.description}>{description}</p>
          <time>⌚ {formattedDate}</time>
          <address>📌 {location}</address>
        </div>
        <img src={'/' + image} alt={title} />
        <Button className={classes.btn}>Book Event</Button>
      </div>
    </>
  );
}

export default EventDetail;
