import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import '../styles/Articles.css'

function Articles() {
  return (
    <>
      <div className="overall">
        <div className='articles-title'>
          <h2>Articles page</h2>
        </div>
        <div className='articles-cards'>
          <Container>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of card.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of card.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of card.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of card.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of card.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Container>
        </div>

        <div className='main--container'>
          <Container className='main--container'>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhdCUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="people chatting" />
            <h3 >Heading for first image</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi dolorem atque pariatur earum voluptates dolores soluta reprehenderit, molestiae, dignissimos inventore tenetur quas magni, porro nesciunt velit similique maiores sint aspernatur tempora iure nisi odio. Impedit omnis dolorum natus quasi! Ea voluptate voluptas labore voluptatibus dolorum magnam quidem explicabo culpa?</p>
          </Container>
        </div>
        <div className='main--container'>
          <Container className='main--container'>
            <img src="https://plus.unsplash.com/premium_photo-1663134237332-1aac08064783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="people running" />
            <h3>Heading for second image</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi dolorem atque pariatur earum voluptates dolores soluta reprehenderit, molestiae, dignissimos inventore tenetur quas magni, porro nesciunt velit similique maiores sint aspernatur tempora iure nisi odio. Impedit omnis dolorum natus quasi! Ea voluptate voluptas labore voluptatibus dolorum magnam quidem explicabo culpa?</p>
          </Container>
        </div>
        <div className='main--container'>
          <Container className='main--container'>
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVhbSUyMHdvcmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="adults chatting" />
            <h3>Heading for third image</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi dolorem atque pariatur earum voluptates dolores soluta reprehenderit, molestiae, dignissimos inventore tenetur quas magni, porro nesciunt velit similique maiores sint aspernatur tempora iure nisi odio. Impedit omnis dolorum natus quasi! Ea voluptate voluptas labore voluptatibus dolorum magnam quidem explicabo culpa?</p>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Articles;