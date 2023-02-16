import { Card, Button } from 'react-bootstrap'
import { IArticle } from '../Interfaces/IArticle'

interface ArticleComponentProps {
  article: IArticle
  sayHello: (person: string) => void
}

const ArticleComponent = (props: ArticleComponentProps) => (
    <>
  <Card style={{ fontSize: '0.5em' }}>
    <Card.Img variant="top" src={props.article.imageUrl} />
    <Card.Body>
      <Card.Title>{props.article.title}</Card.Title>
      <Card.Text>
        {props.article.summary} 
      </Card.Text>
      <Button onClick={() => props.sayHello('Stefano')}>Say hello!</Button>
    </Card.Body>
  </Card>
  </>
)

export default ArticleComponent