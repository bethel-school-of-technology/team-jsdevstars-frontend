import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import '../styles/Articles.css'

function Articles() {
  return (
    <>
      <div>
        <div className='articles-title'>
          <h2>Articles page</h2>
        </div>
        <div className='articles-cards'>
          <Container>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="C:\Users\ibcha\team-jsdevstars-frontend\public\Harvard.jpg" />
              <Card.Body>
                <Card.Title>Health Study</Card.Title>
                <Card.Text>
                  Harvard research uncovers some informative new health facts.
                </Card.Text>
                <Button variant="primary"> <a href="https://www.health.harvard.edu/topics/mens-health" >Harvard Health</a></Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/super-bowl-xlviii-logo-presented-broadway-super-bowl-xlviii-week-manhattan-37480379.jpg" />
              <Card.Body>
                <Card.Title>Super Bowl Stats</Card.Title>
                <Card.Text>
                  Here is a quick rundown of the numbers for the Chiefs and the Niners.
                </Card.Text>
                <Button variant="primary"> <a href="https://www.msn.com/en-us/sports/nfl/schedule?ocid=bingsports">Game Stats</a></Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://wallpapercave.com/wp/wp3293181.jpg" />
              <Card.Body>
                <Card.Title>Crossfit Event</Card.Title>
                <Card.Text>
                  Come join us on your fitness journey. Check your local area for an event near you.
                </Card.Text>
                <Button variant="primary">< a href="https://games.crossfit.com/">Crossfit4Life</a></Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.0XJQJAZPAyVZfStvsZeWdgHaHa?pid=ImgDet&rs=1" />
              <Card.Body>
                <Card.Title>SportsCars</Card.Title>
                <Card.Text>
                  Do you feel the need for speed?Here is a great line up of the next wave of sportscars.

                </Card.Text>
                <Button variant="primary"><a href="https://www.motor1.com/news/629084/toms-racing-2023-tokyo-auto-salon/">Tokyo Auto-Salon</a></Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.istockphoto.com/photos/bible-study-picture-id469812334" />
              <Card.Body>
                <Card.Title>Journal Bible</Card.Title>
                <Card.Text>
                  This Bible was formatted with you in mind.
                   Catalog your spiritual journey and growth. 
                </Card.Text>
                <Button variant="primary">Bible</Button>
              </Card.Body>
            </Card>

          </Container>
        </div>

        <div className='main--container'>
          <Container className='main--container'>
            <a  target="blank" href="https://psychcentral.com/blog/black-fatherhood"><img src="https://th.bing.com/th/id/OIF.mHi891IYDdMmw8uNaGP4FA?pid=ImgDet&rs=1" alt="Black Dad"/> </a>
            <h3 className='main--container'>Black Fatherhood: Leaning into Quality Time and Mindful Legacy</h3>
            <p>Four Black dads discuss what fatherhood means to them and the legacy they’re leaving for their children.</p>
          </Container>
        </div>
        <div className='main--container'>
          <Container className='main--container'>
            <a target="blank" href="https://www.allprodad.com/category/parenting/daughters/"> < img src="https://wallpaperaccess.com/full/2671265.jpg" alt="Daddy Daughter"/></a>
            <h3 className='main--container'>Dads and daughters</h3>
            <p>One of my favorite things to do with my daughter is to go for a drive or a quick run to the store.
               She loves to talk, and I love listening to her mind wonder about the things of this world. I want to be intentional with our time and conversations because there are things she needs to know—things every girl dad should teach his daughter.
               Here are 5 things to talk about with your daughter before she turns 10.</p>
          </Container>
        </div>

        <div className='main--container'>
          <Container className='main--container'>
            <a target="blank" href="https://www.credit.com/blog/7-things-you-can-do-now-to-solidify-your-childs-financial-future-172047/"><img src="https://th.bing.com/th/id/OIP.5G2Bcd6tH7rA-xwkOrH2xQHaE8?pid=ImgDet&rs=1" alt="adults chatting" /> </a>
            <h3 className='main--container'>Family Financial Freedom</h3>
            <p>If you have kids, or are considering having them, you’ve likely started thinking about what that will mean for your finances. But have you thought about how you can help your kids become prepared for their own financial future?
               There are plenty of things parents can do now to help set their kids down the right path financially.</p>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Articles;