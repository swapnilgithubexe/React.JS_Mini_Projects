import { useState } from "react";
import { usePostValue } from "./postContext";

export const Navbar = () => {
  // remove this and get the value from context

  const [showSavedList, setShowSavedList] = useState(false);

  const { reset, savedPosts } = usePostValue();
  return (
    <div className="navbar">
      <span onClick={() => setShowSavedList(!showSavedList)}>
        Saved Posts: {savedPosts.length}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      {/* Add onClick functionality for the reset button */}
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};
