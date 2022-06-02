import Card from "./Card"
import "./CardList.css"

const CardList = ({ robots }) => {


    return (
        <div className="card-list-style">
            {robots.map((ele, i) => {
                return (
                    
                        <Card 
                        key={robots[i].username} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        image={robots[i].id} />
                    
                )
            })}
        </div>
    )

}


export default CardList