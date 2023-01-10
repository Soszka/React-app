import styles from './FavoriteCards.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { favoriteCards } from '../../redux/cardsRedux';

const FavoriteCards = () => {

    const cards = useSelector(state => favoriteCards(state.cards))

    return (
        <article className={styles.column}>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} id={card.id} title={card.title} />)}
            </ul>
        </article>
    );
}

export default FavoriteCards