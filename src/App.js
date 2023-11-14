function App() {
    const title = "Fuckoff"
    const body = "youre annoying"
    const comments = [
        {id: 1, text: "comment 1"},
        {id: 2, text: "comment 2"},
        {id: 3, text: "comment 3"}
    ]

    const loading = false
    const showComments = true

    const codeBlock = <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>{comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}</ul>
            </div>

    if (loading) return <h1>loading...</h1>

    return ( 
        <div className="container">
            <h2>{title}</h2>
            <p>{body}</p>
            
            {showComments ? (codeBlock)
            : "no"}

            
        </div>
    )
}

export default App
