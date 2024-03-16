import React from 'react'

const Card = (props) => {
    return (
             
            <div className="border-2 w-64 p-2 border-black rounded-md">
                    <img src="https://media.istockphoto.com/id/1468373591/photo/exploding-colours-of-dust-and-powder-on-a-dark-background.webp?b=1&s=170667a&w=0&k=20&c=k1HoeuxlvK6_1ClVwjfnHjdu6HQ0TJcF79viy4euY8k=" alt="image" width={333} />

                <h1  class="font-bold text-base">{props.title}</h1>
                <p>{props.description}</p>
                
            </div>
        
    )
}

export default Card
