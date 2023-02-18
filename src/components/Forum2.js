import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'
import ForumReadingPane from './ForumReadingPane';
import { useContext, useState } from 'react';
import ForumTopicList from './ForumTopicList';
import ForumComment from './ForumComment';
import ForumTopicComments from './ForumTopicComments';


function Forum2(props) {

    let { forumTopic, refreshForums, getForumTopic, addForumTopic, editForumTopic, deleteForumTopic } = useContext(ForumContext)

    const [topic, selectTopic] = useState(null);


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
                        <Container>
                            <ForumReadingPane />
                            <ForumTopicComments />
                        </Container>
                    </div>



                </div>

                <div className="forumPosting3">
                    <Container>
                        <ForumComment />
                    </Container>
                </div>

            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    )

};

export default Forum2;

