import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const ForumContext = createContext()

export const ForumProvider = (props) => {
  const [forums, setForums] = useState([])

  useEffect(() => {
    async function getForums() {
      await refreshForums()
    }
    getForums()
  }, []);

  function refreshForums() {
    return axios.get("http://localhost:3000/api/forum")
      .then(response => {
        setForums(response.data)
      })
  }

  function getForum(id) {
    return forums.find(forum => forum.forumId === parseInt(id))
  }

  function deleteForum(id) {
  }

  function addForum(forum) {
  }

  function updateForum(forum) {
  }

  return (
    <ForumContext.Provider
      value={{
        forums,
        getForum,
        deleteForum,
        addForum,
        updateForum
      }}
    >
      {props.children}
    </ForumContext.Provider>
  )
}