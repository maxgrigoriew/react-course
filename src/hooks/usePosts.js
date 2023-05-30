import {useMemo} from 'react'

export const useSortedPosts = (sort, posts) => {
  const sortedPosts = useMemo(() => {
    return sort
      ? [...posts].sort((a, b) => {
          if (a[sort] < b[sort]) {
            return -1
          }
        })
      : posts
  }, [posts, sort])

  return sortedPosts
}

export const usePosts = (posts, sort, search) => {
  const sortedPosts = useSortedPosts(sort, posts)

  const searchedAndSortedPosts = useMemo(() => {
    if (search) {
      return [...sortedPosts].filter(
        p =>
          p.title
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          p.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    }
    return sortedPosts
  }, [search, sort])

  return searchedAndSortedPosts
}
