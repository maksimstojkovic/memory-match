import "./styles/App.scss";
import Header from "./components/Header";
import Deck from "./components/Deck";
import { useState, useEffect } from "react";

const imgUrl = "https://picsum.photos/100";
const cardCount = 10;

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const [cards, setCards] = useState(
    [...Array(cardCount).keys()].map((i) => ({ id: i, src: null }))
  );

  const fetchImage = async (id, abortController) => {
    try {
      const res = await fetch(imgUrl, { signal: abortController.signal });
      const imgBlob = await res.blob();
      const imgObjectURL = URL.createObjectURL(imgBlob);

      setCards((cards) => {
        const cardList = [...cards];
        // const cardList = cards.map((card) => ({ ...card }));
        cardList[id] = { ...cardList[id], src: imgObjectURL };

        return cardList;
      });
    } catch (error) {
      return;
    }
  };

  const shuffleCards = () => {
    setCards((cards) => {
      const prevCards = [...cards];
      const newCards = [];
      const totalImages = prevCards.length;

      while (newCards.length < totalImages) {
        const index = Math.floor(Math.random() * prevCards.length);

        newCards.push(prevCards[index]);
        prevCards.splice(index, 1);
      }

      return newCards;
    });
  };

  const handleClick = (id) => {
    if (!selected.includes(id)) {
      setSelected((selected) => [...selected, id]);
    } else {
      setSelected([]);
    }

    shuffleCards();
  };

  useEffect(() => {
    // TODO: Add loading screen until images all ready

    const abortController = new AbortController();

    for (let i = 0; i < cardCount; i++) {
      fetchImage(i, abortController);
    }

    return () => abortController.abort();
  }, []);

  return (
    <>
      <Header score={selected.length} />
      <Deck cards={cards} handleClick={handleClick} />
    </>
  );
}

export default App;
