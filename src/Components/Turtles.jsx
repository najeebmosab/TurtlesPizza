import "./Turtles.css"
function Turtles(props) {

    return (
        <>
            <div className="cardTurtle">
                <h2>{props.turtleData.name}</h2>
                <img src={props.turtleData.img} alt={props.turtleData.name} />
                <div className="divPizzaToppings" >
                    {props.turtleData.pizzaToppings.map((data, idx) => {
                        return <button onClick={() => {
                            const obj = {
                                idx: idx,
                                name: data.name,
                                img: data.img
                            }
                            props.DataPizzaToAdd(obj);
                        }} key={idx+=1}>{data.name}</button>
                    })}
                </div>
            </div>
        </>
    );
}

export { Turtles };