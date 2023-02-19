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
              <Card.Img variant="top" src="/Harvard.jpg" alt="Andrew.jpg" />
              <Card.Body>
                <Card.Title>Health Study</Card.Title>
                <Card.Text>
                  Harvard research uncovers some informative new health facts.
                </Card.Text>
                <a href="https://www.health.harvard.edu/topics/mens-health" >Harvard Health</a>
              </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/super-bowl-xlviii-logo-presented-broadway-super-bowl-xlviii-week-manhattan-37480379.jpg" />
              <Card.Body>
                <Card.Title>Super Bowl Stats</Card.Title>
                <Card.Text>
                Here is a quick rundown of the numbers for the Chiefs and the Niners.
                </Card.Text>
                <a href="https://www.msn.com/en-us/sports/nfl/schedule?ocid=bingsports">Game Stats</a>
              </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://wallpapercave.com/wp/wp3293181.jpg" />
              <Card.Body>
                <Card.Title>Crossfit Event</Card.Title>
                <Card.Text>
                Come join us on your fitness journey. Check your local area for an event near you.
                </Card.Text>
                <a href="https://games.crossfit.com/">Crossfit4Life</a>
              </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.0XJQJAZPAyVZfStvsZeWdgHaHa?pid=ImgDet&rs=1" />
              <Card.Body>
                <Card.Title>SportsCars</Card.Title>
                <Card.Text>
                Do you feel the need for speed?Here is a great line up of the next wave of sportscars.
                </Card.Text>
                <a href="https://www.motor1.com/news/629084/toms-racing-2023-tokyo-auto-salon/">Tokyo Auto-Salon</a>
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
            <img src="https://media.istockphoto.com/photos/bible-study-picture-id469812334" />
            <h3 >Journal Bible</h3>
            <p>This Bible was formatted with you in mind.
                   Catalog your spiritual journey and growth. </p>
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