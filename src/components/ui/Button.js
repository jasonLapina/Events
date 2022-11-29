import classes from './Button.module.scss';
function Button({ className, onClick, children }) {
  return (
    <button className={`${className} ${classes.btn}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
