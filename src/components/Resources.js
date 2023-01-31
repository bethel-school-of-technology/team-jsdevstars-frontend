import '../styles/Resources.css';
import React from 'react';
import { Table, Card, Image, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';


const Resources = () => {
  return (
    <div className="resources-page">
      <h1 className='title'>Resources for dads</h1>
      <div className="row">
        <div className="col-md-3">
          <Table className='links'>
            <thead>
              <tr>
                <th>External Resources</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.example.com">Example link</a><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas obcaecati doloribus minus</td>
              </tr>
              <tr>
                <td><a href="https://www.example2.com">Example2 link</a><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas obcaecati doloribus minus</td>
              </tr>
              <tr>
                <td><a href="https://www.example3.com">Example3 link</a><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas obcaecati doloribus minus</td>
              </tr>
              <tr>
                <td><a href="https://www.example4.com">Example4 link</a><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
              </tr>
              <tr>
                <td><a href="https://www.example5.com">Example5 link</a><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
              </tr>
              <tr>
                <td><a href="https://www.example6.com">Example6 link</a><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
              </tr>
              <tr>
                <td><a href="https://www.example7.com">Example7 link</a><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="first-video col-md-6">
          <h3>Mental Health</h3>
          <ReactPlayer url='https://www.youtube.com/watch?v=F3twI-qNeiY'></ReactPlayer>
          <div className="video-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam recusandae nobis animi sit inventore! Doloremque harum dignissimos maiores temporibus.</p>
          </div>
        </div>

        <div className="col-md-7">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas vitae harum modi! Maxime expedita molestiae vel veritatis et corrupti ipsam blanditiis beatae explicabo eum nulla iusto maiores suscipit sequi, possimus sit illo provident. Distinctio doloremque ea adipisci laborum autem quo sequi neque dolorem nisi, aperiam nulla exercitationem cupiditate sint?
          </p>


        </div>

        <div className="col-md-9">
          <h3>Dads & daughters</h3>
          <ReactPlayer url='https://www.youtube.com/watch?v=WCjsch0F4Vk'></ReactPlayer>
          <div className="video-container"> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam recusandae nobis animi sit inventore! Doloremque harum dignissimos maiores temporibus.</p>
          </div>
        </div>


        <h3>Well being</h3>
        <div className="col-md-9">
          <div className="resource-cards">
            <Card>
              <Image src="https://images.unsplash.com/photo-1603206004813-f91b7d1ffb4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2VsbCUyMGJlaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Card image cap" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Card subtitle</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
                <Button>Button</Button>
              </Card.Body>
            </Card>
          </div>
        </div>


        <h1>Exercise</h1>
        <div className="col-md-9">
          <div className="resource-cards">
            <Card>
              <Image src="https://images.unsplash.com/photo-1543627633-0643fe92d06f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGV4ZXJjaXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Card image cap" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Card subtitle</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
                <Button>Button</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <h1>Meditation</h1>
        <div className="col-md-9">
          <div className="resource-cards">
            <Card>
              <Image src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaXRhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="Card image cap" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Card subtitle</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
                <Button>Button</Button>
              </Card.Body>
            </Card>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Resources;