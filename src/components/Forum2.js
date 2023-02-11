import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'
import ForumReadingPane from './ForumReadingPane';
import { useContext, useState } from 'react';
import ForumTopicList from './ForumTopicList';
import ForumComment from './ForumComment';


function Forum2(props) {

    let { forumTopic, refreshForums, getForumTopic, addForumTopic, editForumTopic, deleteForumTopic } = useContext(ForumContext)

    const [topic, selectTopic] = useState(null);




// handleTopicSelected(topic) {
//     this.state({ selected: topic})
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
                        <Container>
                            <ForumReadingPane />
                        </Container>
                    </div>



                </div>

                <div className="forumPosting3">
                    <Container>
                        <ForumComment />
                    </Container>
                </div>

            </section>




        </div>

    )

};

export default Forum2;

// class Forum2 extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { topics: this.topicData(), selected: null }
//         this.handleTopicSelected = this.handleTopicSelected.bind(this);
//     }

//     topicData() {
       
//         let { forumTopic } = useContext(ForumContext)

//         let { forumId, topicHeading, topicBody, createdAt, updatedAt,userId } = forumTopic

//         for (let i = 0; i < 10; i++) {
//             forumTopic.push({
//                 forumId: forumId(),
//                 topicHeading: topicHeading(),
//                 topicBody: topicBody(),
//                 createdAt: createdAt(),
//                 updatedAt: updatedAt(),
//                 userId: userId()
//             })
//         }
//         return forumTopic;
//     }

//     handleTopicSelected(topicHeading) {
//         this.state({ selected: topicHeading })
//     }

//     render() {
//         return (
//             <Stack gap={3} direction="horizontal" className="p-5 col-md-20 offset-md-2">
//                 <ForumTopicList
//                     topics={this.state.forumTopic}
//                     handleTopicSelected={this.handleTopicSelected}
//                     selected={this.state.selected}
//                 />
//                 <ForumReadingPane oneTopic={this.state.selected} />
//             </Stack>
//         )
//     }

// }

// export default Forum2