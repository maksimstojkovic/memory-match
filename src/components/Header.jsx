function Header({ score, bestScore }) {
  return (
    <>
      <header>
        <h1>Memory Match</h1>
        <div className="scores">
          <h2 className="score">Score: {score}</h2>
          <h3 className="best-score">Best Score: {bestScore}</h3>
        </div>
      </header>
      <div className="instructions">
        <p>
          Score points by clicking images, but avoid selecting the same image
          twice!
        </p>
      </div>
    </>
  );
}

export default Header;
