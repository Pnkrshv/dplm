import { useState } from "react";
import "./CreateOpros.css";
import CreateCard from "./secondary_components/CreateCard";
import QuestionCard from "./QuestionCard";

export default function CreateOpros() {
  const [cards, setCards] = useState([]);
  const [id, setId] = useState(0);

  const addCard = () => {
    const newId = id + 1;
    setId(newId);
    setCards(prevCards => [...prevCards, { id: newId }]);
  };

  const removeCard = (idToRemove) => {
    setCards(prevCards => prevCards.filter(card => card.id !== idToRemove))
  }

  return (
    <div className="create__wrap">
      {cards.map(card => (
        <QuestionCard key={card.id} id={card.id} onDelete={removeCard}/>
      ))}

      <CreateCard click={addCard} />

      <div className="submit__btn">
        <button type="submit">Создать</button>
      </div>
    </div>
  );
}
