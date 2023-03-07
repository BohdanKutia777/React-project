import './Info.css';
import styles from './Info.module.css';

console.log(styles);
function Info(params) {
  return (
    <div className={styles.info}>
      <h1>Hello from Info component</h1>
      <button className="my-button">Click me in the Info component</button>
      <h2>Heading in the Info component</h2>
      <button className={styles.myOtherButton}>
        Button with local Css styles
      </button>
    </div>
  );
}

export default Info;