export interface PostData {
  id: number,
  name: string,
  blurb?: string,
  filepath: string
}
let posts: PostData[] = [ 
    {
      "id": 1,
      "name": "test",
      "filepath": "MarkdownFiles/test.md",
      "blurb": "Test Markdown Config"
    },
    {
      "id": 2,
      "name": "test2",
      "filepath": "MarkdownFiles/test2.md"
    }
  ]

export default posts;
