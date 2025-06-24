import './CreateCard.css'

export default function CreateCard({click}){
    return(
        <div className="card" onClick={click}>
            <div className="card__text">
                <h2>+</h2>
                <p>Добавить вопрос</p>
            </div>
        </div>
    )
}