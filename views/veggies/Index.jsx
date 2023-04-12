const React = require('react')

function Index(props) {
    const { veggies } = props;

    return (
        <div> 
            <h1> Index Page </h1>
            <ul> 
                {veggies.map((veggie, i) => {
                    return (
                        <li key={veggie._id}>
                            The <a href={`/veggies/${veggie
                                ._id}`}>{veggie.name}</a> is {veggie.color} {" "}{veggie.readyToEat ? "It is ready to eat" : "It is not ready to eat"}
                        </li>
                    );           
                })}
            </ul>
            <nav>
                <a href="/veggies/new"> Add a veggie </a>
            </nav>     
        </div>
        )

}

module.exports = Index;