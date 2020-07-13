import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {

  const { allSliderpaneltextJson } = useStaticQuery(
    graphql`
    query MyQuery {
        allSliderpaneltextJson {
          nodes {
            id
            title
            header
            buttonname
            task1
            task2
            task3
            task4
            task5
            
          }
        }
      }
    `
  )
  return allSliderpaneltextJson.nodes
}