import React, {useState, useEffect} from 'react';
import axios from "axios";

function ProfanityAPI(props) { 
 
    const [check, setCheck] = useState([])

    useEffect(() => {
        async function checkProfanity() {
          const response = await axios.get('https://www.purgomalum.com/service/json?text=')
          setCheck(response.data.slip.check)
        }
        checkProfanity()
      }, [])


 return (

 <>
  <p> take a look at the auth in the backend for useage</p>  
 </>

 )
 
 

};

//   let myRequest = new XMLHttpRequest();
  //   myRequest.open('GET', 'https://www.purgomalum.com/service/json?text=' + postTitle, true);
  //   myRequest.open('GET', 'https://www.purgomalum.com/service/json?text=' + postContent, true);
  //   myRequest.send();

  //   myRequest.onreadystatechange = function () {
  //     if (this.readyState === 4) {
  //       if (this.status === 200) {

  //         let myResponse = JSON.parse(this.responseText);

  //         let postTitle = myResponse.result;
  //         let postContent = myResponse.result;

  //         setPosts([...posts, { title: postTitle, content: postContent }]);
  //         setPostTitle('');
  //         setPostContent('');
  //       }
  //     }
  //   }