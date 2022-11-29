import Event from './Event';
import classes from './EventList.module.scss';

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((item, i) => {
        const { title, date, id, image, location } = item;
        return (
          <Event
            image={image}
            what={title}
            when={date}
            where={location}
            id={id}
            key={i}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
