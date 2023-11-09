function Header({ score, bestScore }) {
  return (
    <header>
      <h1 className="score">Score: {score}</h1>
    </header>
  );
}

export default Header;
