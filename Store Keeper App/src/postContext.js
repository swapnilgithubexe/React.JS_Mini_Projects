// create post context here
import { createContext, useContext, useState } from "react";
import { posts } from "./data";

const postContext = createContext()
// Create custom hook that returns context value here

export const usePostValue = () => {
  return useContext(postContext);

}

// create a custom saved post provider here with add and reset functions
const PostProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const add = (index) => {
    setSavedPosts((prev) => [...prev, posts[index]]);
  }

  const reset = () => {
    setSavedPosts([]);
  }

  return (
    <postContext.Provider value={{ add, reset, savedPosts }}>
      {children}
    </postContext.Provider>
  )
}

export default PostProvider
