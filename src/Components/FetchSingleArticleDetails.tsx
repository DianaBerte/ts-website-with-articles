/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useParams,  } from "react-router-dom"
import { useState, useEffect } from "react"
import { IArticle } from "../Interfaces/IArticle"
import { Container, Row, Col,  } from "react-bootstrap";
// import ArticleComponent from "./ArticleComponent";


const FetchSingleArticleDetails = () => {
    
    const id = useParams<{id: string}>()
    console.log("params are: ", id)

    const [articles, setArticles] = useState<IArticle[]>([])
    // const [articles, setArticles] = useState(null)
    

    const fetchArticles = async () => {
        try {
          let response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id.id}`)
          if (response.ok) {
            let articlesFromApi = await response.json()
            console.log(articlesFromApi)
            setArticles(articlesFromApi)
          } else {
            console.log('Error! :(')
          }
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        fetchArticles()
      }, [])
    
    //   useEffect(() => {
    //     fetchArticles()
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    //   let foundArticleObject = articles.find(
    //     (article) => article.id.toString() === params.id
    //   ) 
    //   console.log('Article details found: ', foundArticleObject)
    //   setArticles(foundArticleObject)
    //   }, [])

      return (
        <Container key={id.id}>
          <Row className="justify-content-center">
            <Col className="text-center">
              <h2>Details of article: "{articles.title}"</h2>
              <h3>id: {id.id}</h3>
              <p>Published: {articles.publishedAt}</p>
              <img src={articles.imageUrl} alt="" />
            </Col>
          </Row>
          <Row>
     
          
          </Row>
        </Container>
      )

}

export default FetchSingleArticleDetails