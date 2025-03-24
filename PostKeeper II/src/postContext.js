import { useState, useContext, createContext } from "react";

const postContext = createContext();

export const usePostsValue = () => {
  const value = useContext(postContext);
  return value;
};

export const PostContextProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const resetPosts = () => setSavedPosts([]);

  const savePost = (post) => {
    const isSaved = savedPosts.find((p) => p.id === post.id);
    if (isSaved) {
      return alert("Post is already saved.");
    }
    setSavedPosts((prev) => [post, ...prev]);
  };

  // create a function to unsave post here
  const unSave = (post) => {
    const index = savedPosts.findIndex((item) => item.id === post.id)

    if (index === -1) {
      return alert("Post already removed")
    }
    const updatedSavedPosts = savedPosts.filter((item) => item.id !== post.id)
    setSavedPosts(updatedSavedPosts);
  }

  return (
    <postContext.Provider
      value={{ savedPosts, setSavedPosts, resetPosts, savePost, unSave }}
    >
      {children}
    </postContext.Provider>
  );
};
