function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Memory Match</h1>
      <div className="scores">
        <h2 className="score">Score: {score}</h2>
        <h2 className="best-score">Best Score: {bestScore}</h2>
      </div>
    </header>
  );
}

export default Header;
