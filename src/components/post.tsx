import { useEffect, useState } from "react";
import { PostResponse } from "../interface";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

interface Post {
  hits: PostResponse[];
}

export function Posts() {
  const [keyword, setKeyword] = useState("");
  const [posts, setPosts] = useState<Post | null>(null);

  useEffect(() => {
    if (!keyword || keyword.length < 2) {
      setPosts(null); //clear previous results if any.
      return;
    }
    var requestOptions = {
      method: "GET",
    };

    fetch(
      `http://hn.algolia.com/api/v1/search?query=${keyword}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  }, [keyword]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <div className="search">
        <h2>Search posts</h2>
        <input
          value={keyword}
          placeholder="Type more than 3 chars to search"
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="posts">
        <ul className="post-list">
          {posts?.hits?.map((post) => (
            <li
              key={post.objectID}
              style={{ paddingTop: "10px", alignItems: "center" }}
            >
              <Card
                style={{
                  border: "3px",
                  borderStyle: "solid",
                  borderColor: "black",
                  padding: "10px",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <a href={post.url || ""} target="_blank" rel="noreferrer">
                      {post.title}
                    </a>
                  </Card.Title>
                  <Card.Text>
                  <div dangerouslySetInnerHTML={{ __html: post.story_text||'' }} />
                  </Card.Text>
                    <Link to={`/details/${post.objectID}`}>Details</Link>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
