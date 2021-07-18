import { useEffect, useState } from "react"


 function Main (){

    const [articles, setarticles]= useState([]);
    const [search, setsearch]= useState("");    

    useEffect(()=>{
        let url=`https://newsapi.org/v2/everything?q=microsoft&apiKey=${process.env.React_App_API_KEY}`

        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            setarticles(news.articles)
            
        })
            },[])

            function readValue(value){
                setsearch(value)
            }

            function searchNews(){

                let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.React_App_API_KEY}`;

                fetch(url)
                .then((response)=>response.json())
                .then((news)=>{
                    setarticles(news.articles)
                    
                })

            }

 return(
     <div className="container">
       <div className="padd">

          <div className="filter">
              <input type="search" onChange={(event)=>{readValue(event.target.value)}} placeholder="Enter a topic to search" />
              <button className="btn" onClick={searchNews}>Search for news</button>
          </div>

      <h1> All News</h1>

       {

             articles.length===0?(<h2> No Data Found</h2>):

        articles.map((article,index)=>(
            <div key={index} className="article">
            <div className="padd-article">
            <div className="news-img">
                <img src={article.urlToImage} />
            </div>
            <div className="news-detail">
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <p>{article.description}</p>
            <p>
            <a href={article.url} target="_blank">
                <button className="btn"> Read full Article</button>
                </a>
            </p>
            </div>
            </div>
            </div>
       ))  
       }
        </div>
     </div>
 )
    
 }

export default Main


