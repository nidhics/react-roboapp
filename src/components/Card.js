import "./Card.css"

const Card = (props) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 fl card-style">
            <img alt="robots" src={`https://robohash.org/test${props.image}?200*200`} />
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>

    )

}

export default Card 