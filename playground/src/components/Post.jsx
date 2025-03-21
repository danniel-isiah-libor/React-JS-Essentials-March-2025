import React from "react";
import InputField from "./InputField";
function Post({ item, index }) {
  return (
    <div className="section">
      <div className="post">
        <div className="header">
          <img src={`//unsplash.it/seed/profile${index}/150`} alt="" />
          <div>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
          <i>ellipsis</i>
        </div>
        <div className="body">
          <img src={`//unsplash.it/seed/post${index}/2000`} alt="" />
          <div className="clickables">
            <p>Heart</p>
            <p>Comment</p>
            <p>Share</p>
            <p className="bookmark">Bookmark</p>
          </div>
          <div style={{ padding: "5px 20px" }}>
            <InputField label={`Comment`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
