import {useEffect, useState} from "react";

const Card = ({title}) => {

    const [count, setCount] = useState(0)
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked])

    return (
        <div className="card" onClick={() => setCount((prevState) => prevState + 1)}>
            <h2>{title} <br/> {count ? count : null}</h2>

             <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? 'L iked' : 'Like'}
            </button>
        </div>
    )
}

const App = () => {

    return (
        <>
            <div className="container">
                <Card title="Star War" subTitle="Wars at next level" rating={5}/>
                <Card title="Avatar"/>
                <Card title="Lion King"/>
            </div>
        </>
    )
}

export default App