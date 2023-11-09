function Deck({ cards, handleClick }) {
  return (
    <div className="deck">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => handleClick(card.id)}
          className="card"
        >
          {card && card.src ? (
            <img src={card.src} alt="Card with photo" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Deck;
