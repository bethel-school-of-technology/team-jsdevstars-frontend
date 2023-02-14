// import React, { useContext, useState, useEffect } from 'react'
// import { ForumContext } from './ForumContext'
// import Card from "react-bootstrap/Card"
// import { NavLink, useParams } from 'react-router-dom'


// function Search(props) {

//     let { filterForum } = useContext(ForumContext)
//     const [query, setQuery] = useState([]);


//     let params = useParams();

//     useEffect(() => {

//         async function fetch() {
//             await filterForum(params.filter).then(response => {
//                 console.log(response)
//                 setQuery(response)
//             })
//         }

//         fetch();

//     }, [params])

//     return (
//         <>
//             <h1 style={{ textAlign: 'center' }}>Results</h1>
//             <div className='card-container'>
//                 {
//                     query.map((query) =>

//                         <Card className='cards' key={query.forumId}>
//                             <NavLink to={`/view/${product.id}`} key={product.id} >
//                                 <Card.Body>
//                                     <Card.Text style={{ textAlign: 'center' }}>
//                                         {product.artistname} ${product.price}
//                                     </Card.Text>
//                                 </Card.Body>
//                             </NavLink>
//                         </Card>

//                     )
//                 }
//             </div>
//         </>
//     )

// }

// export default Search;