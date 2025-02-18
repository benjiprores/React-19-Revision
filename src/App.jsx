const Card = ({title}) => {
    return (
        <h2>{title}</h2>
    )
}

const App = () => {
    return (
        <>
            <div>Functional Arrow Component</div>
            <Card title="Star War" subTitle="Wars at next level"/>
            <Card title="Avatar"/>
            <Card title="Lion King"/>
        </>
    )
}

export default App