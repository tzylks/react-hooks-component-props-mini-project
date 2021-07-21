import { useState } from "react";

function Article({ title, date="January 1, 1970", preview, minutes }) {

    let coffeeCups = ''
    
    if (minutes < 30)
    for (let i = 0; i < minutes; i += 5) {
        coffeeCups += '☕️'
    }
    else if (minutes > 30) {
        for (let i = 0; i < minutes; i+=10) {
            coffeeCups += "🍱"
        }
     }

    // if (minutes <= 5) {
    //     coffeeCups = minutes + "☕️"
    // }
    // else if (minutes > 5 && minutes < 10) {
    //     coffeeCups = minutes + "☕️☕️"
    // }
    // else if (minutes > 10 && minutes <= 15) {
    //     coffeeCups = minutes + "☕️☕️☕️"
    // }
    // else if (minutes > 15 && minutes < 20) {
    //     coffeeCups = minutes + "☕️☕️☕️☕️"
    // }
    // else if (minutes > 20 && minutes < 25) {
    //     coffeeCups = minutes + "☕️☕️☕️☕️☕️"
    // }
    // else if (minutes > 25 && minutes <= 30) {
    //     coffeeCups = minutes + "☕️☕️☕️☕️☕️☕️"
    // }
    // else if (minutes > 30 && minutes < 40) {
    //     coffeeCups = minutes + "🍱🍱🍱🍱"
    // }
    // else if (minutes > 40 && minutes < 50) {
    //     coffeeCups = minutes + "🍱🍱🍱🍱🍱"
    // }

    // switch (true) {
    //     case (minutes <= 5):
    //         coffeeCups = " ☕️" + minutes + " minutes to read"
    //         console.log('Hi')
    //         break;
    //     case (minutes <= 10):
    //         coffeeCups = "☕️☕️"
    //         break;
    //     case (minutes <= 15):
    //         coffeeCups = "☕️☕️☕️"
    //         break;
    //     case (minutes <= 20):
    //         coffeeCups = "☕️☕️☕️"
    //         break;
    //     case (minutes <= 25):
    //         coffeeCups = "☕️☕️☕️☕️"
    //         break;  
    //     case (minutes <= 30):
    //         coffeeCups = "☕️☕️☕️☕️☕️"
    //         break; 
    //     case (minutes > 30 && minutes < 40):
    //         coffeeCups = "🍱🍱🍱🍱"
    //         break; 
    //     case (minutes > 45 && minutes < 55):
    //         coffeeCups = "🍱🍱🍱🍱🍱"
    //         break; 
    //     case (minutes > 55 && minutes < 65):
    //         coffeeCups = "🍱🍱🍱🍱🍱🍱"
    //         break;
    // }

    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count => count + 1)
    }
        
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>{coffeeCups}</small>
            <p>{preview}</p> 
            <button onClick={handleClick}>Likes: {count}</button>
        </article>
    )
}

export default Article