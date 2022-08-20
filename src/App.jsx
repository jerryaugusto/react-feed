import { Post } from "./Post"

export function App() {
  return (
    <>
      <Post 
        author="Jerry Augusto" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero inventore nam dolores aspernatur amet odio adipisci accusantium debitis asperiores! Minima odio, nesciunt dignissimos necessitatibus accusantium impedit delectus eaque perspiciatis?" 
      />
      <Post
        author="Gabriel Araujo"
        content="Um novo post muito legal."
      />
    </>
  )
}
