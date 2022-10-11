import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChildrenEntity, PostDetails } from "../interface";

export function PostDetail() {
  const { postId } = useParams();
  const [details, setDetails] = useState<PostDetails | null>(null);

  useEffect(() => {
    if (!postId) {
      setDetails(null);
      return;
    }
    var requestOptions = {
      method: "GET",
    };

    fetch(`http://hn.algolia.com/api/v1/items/${postId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDetails(result))
      .catch((error) => console.log("error", error));
  }, [postId]);

  const renderNLevelChildren = (post: PostDetails) => {
    const renderChildren = (children: ChildrenEntity[] | null) => {
      return (
        <ul
          style={{
            width: "75%",
            listStyle: "none",
            display: "flex",
            margin: "auto",
            flexDirection: "column"
          }}
        >
          {children?.map((child) => {
            return (
              <>
                <li key={child.id} style={{ justifyContent: "left" }}>
                  <strong>{child.author}</strong>
                  <div dangerouslySetInnerHTML={{ __html: child.text || "" }} />
                </li>
                {child?.children?.length ? (
                  renderChildren(child.children)
                ) : (
                  <div></div>
                )}
              </>
            );
          })}
        </ul>
      );
    };

    return (
      <>
        <h3>{post.title}</h3>
        {post.children ? renderChildren(post.children) : <div></div>}
      </>
    );
  };
  return <>{details && renderNLevelChildren(details)}</>;
}
