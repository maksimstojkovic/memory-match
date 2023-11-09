function Header({ score, bestScore }) {
  return (
    <header>
      <h1 className="score">Score: {score}</h1>
      <h2 className="best-score">Best Score: {bestScore}</h2>
    </header>
  );
}

export default Header;
