import { getCollection } from 'astro:content';

export async function GET({params, request}) {
  // filter collection elements with tags list
  const tagedWikiEntries = await getCollection('wiki', ({ data }) => {
    return data.tags
  });

  // reduce to unique tags
  const tagList = tagedWikiEntries.reduce((acc,curr) => {
    const filteredTags = curr.data.tags.filter(tag => !acc.includes(tag))
    return [...acc, ...filteredTags]
  }, [])

  return new Response(
    JSON.stringify(tagList, {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    })
  )
}
