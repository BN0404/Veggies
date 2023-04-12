const React = require('react');

function Show(props) {
    const { veggie } = props;
    // console.log(veggie);
    return (
        <div>
<h1> Vegetables </h1>
            <p> The {veggie.name} is {veggie.color} {"."}
            {fruits.readyToEat?"It's ready to eat": "Need more time for riping"}{"."}
            </p>

        </div>
        )
}

module.exports = Show;