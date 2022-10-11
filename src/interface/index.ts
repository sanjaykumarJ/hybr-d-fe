export interface PostResponse {
    created_at: string;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text?: null;
    comment_text?: null;
    num_comments: number;
    story_id?: null;
    story_title?: null;
    story_url?: null;
    parent_id?: null;
    created_at_i: number;
    _tags?: (string)[] | null;
    objectID: string;
    _highlightResult: HighlightResult;
  }
  export interface HighlightResult {
    title: Title;
    url: UrlOrAuthor;
    author: UrlOrAuthor;
  }
  export interface Title {
    value: string;
    matchLevel: string;
    fullyHighlighted: boolean;
    matchedWords?: (string)[] | null;
  }
  export interface UrlOrAuthor {
    value: string;
    matchLevel: string;
    matchedWords?: (null)[] | null;
  }
  

  export interface PostDetails {
    id: number;
    created_at: string;
    created_at_i: number;
    type: string;
    author: string;
    title: string;
    url: string;
    text: string;
    points: number;
    parent_id?: null;
    story_id?: null;
    children?: (ChildrenEntity)[] | null;
    options?: (null)[] | null;
  }
  export interface ChildrenEntity {
    id: number;
    created_at: string;
    created_at_i: number;
    type: string;
    author: string;
    title: string;
    url: string;
    text: string;
    points: number;
    parent_id: number;
    story_id: number;
    children?: ChildrenEntity[] | null;
    options?: (null)[] | null;
  }
