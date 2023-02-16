import { Container, Row, Col,  } from "react-bootstrap";
import { useEffect, useState } from "react";
import { IArticle } from "../Interfaces/IArticle";

const FetchAllArticlesComponent =() => {
    const URL = 'https://api.spaceflightnewsapi.net/v3/articles'

    const [articles, setArticles] = useState<IArticle[]>([])

    const fetchArticles = async () => {
        try {
          let response = await fetch(URL)
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

      return (
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <h2>Articles from the internet! :)</h2>
            </Col>
          </Row>
          <Row>
            {articles.map((a) => (
              <Col xs={12} md={4} lg={3} className="text-dark" key={a.id}>
                {/* <BookComponent book={b} sayHello={sayHello} /> */}
              </Col>
            ))}
          </Row>
        </Container>
      )
}

export default FetchAllArticlesComponent