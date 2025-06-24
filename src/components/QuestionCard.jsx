import "./QuestionCard.css";

export default function QuestionCard({ id, onDelete }) {
  return (
    <div className="QuestionCard" id={id}>
      <div className="card__close">
        <button onClick={() => onDelete(id)}>
          <img src="trash.png" alt="" />
        </button>
      </div>
      <div className="QuestionCard__text">
        <div className="select-question">
          <select name="QuestionType" id="#" className="type-of-question">
            <option value="" disabled selected hidden>
              Выберите тип вопроса
            </option>
            <option value="close">Закрытый</option>
            <option value="open">Открытый</option>
            <option value="mixed">Смешанный</option>
          </select>
        </div>
      </div>
    </div>
  );
}
