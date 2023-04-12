const React = require('react');

function New() {
    return (
        <div>
            <h1>Fresh Veggies Page</h1>

            <form action='/veggies' method='POST'>
                Name: <input type="text" name="name" />
                <br />
                
                Color:<input type="text" name="color" /> <br/>
                
                Is ready to eat: <input type="checkbox" name="readyToEat" />
                <br />
                
                <input type="submit" value="Create new Veggie"/>

            </form>

    </div>
        )
}

module.exports = New;
