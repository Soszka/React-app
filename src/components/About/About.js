import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>about</PageTitle>
      <p className={styles.description}>Welcome to my first application made during the bootcamp offered by CODEMY S.A. using the React framework.</p>
      <p className={styles.description}>The application consists of three subpages between which we can move using the React-Router package. It means that we can show different content on the website depending on the URL, without reloading the page</p>
      <p className={styles.description}>On the main page we can find information about what lists and what titles we have, along with a form of adding a new list. Clicking on a given list opens a preview showing exactly what columns and cards are in this list.</p>
      <p className={styles.description}>Each card has an additional button next to its name to "like" it. Clicking on an unliked card will "like" it. Clicking on a liked card will "unlike" it. The current state is indicated by the color of the button icon. And also liked cards are possible to display in the "Favorite" subpage.</p>
      <p className={styles.description}>The data is stored in a storage that is made available through the Redux library.</p>
    </div>
  );
};
export default About;