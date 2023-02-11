import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'
import forumReadingPane from './ForumReadingPane';
import { useContext } from 'react';
import ForumTopicList from './ForumTopicList';


function Forum2 () {

let {forumTopic, refreshForums, getForumTopic, addForumTopic, editForumTopic, deleteForumTopic } = useContext(ForumContext)


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    // }

    return (
        

                <div className="forumWhole">
                    <h3>Forum</h3>
                 
        
                    <section className="forumLayout">

                        <div className="forumTopics1">
                        <Container>
                        <ForumTopicList />
                        </Container>
                            
                        </div>



                        <div className="forumReadingWindow2">
                            <div>
                                <p>read the forum here</p>
                                <Container>
                                    <forumReadingPane />
                                </Container>
                            </div>



                        </div>

                        <div className="forumPosting3">
                            <p>Make a comment here</p>
                        </div>

                    </section>

     


                </div>

    )

};

export default Forum2;