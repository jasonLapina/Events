import Link from 'next/link';
import classes from './MainHeader.module.scss';

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href='/'>Home</Link>
      <nav>
        <ul className={classes.nav}>
          <li>
            <Link href='/events'>All Events</Link>
          </li>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
