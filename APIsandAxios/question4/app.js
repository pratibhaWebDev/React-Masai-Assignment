const {useState,useEffect}=React;

function App(){
    const [meme,setMemes]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        axios.get("https://api.imgflip.com/get_memes")
        .then(response=>{
            setMemes(response.data.data.memes);
            setLoading(false);
        })
        .catch(error=>{
            setError(error.message);
            setLoading(false);
        })
    },[])
    
    if(loading) return <h2>Loading memes...</h2>
    if(error) return <h2>{error}</h2>

    return(
        <div>
        <h1>Meme Gallery</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {meme.slice(0, 10).map(meme => (
            <div key={meme.id} style={{ margin: "10px", width: "200px" }}>
              <img src={meme.url} alt={meme.name} style={{ width: "100%" }} />
              <p>{meme.name}</p>
            </div>
          ))}
        </div>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)