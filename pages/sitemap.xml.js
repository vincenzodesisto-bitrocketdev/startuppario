import { BASE_PATH } from '../constants/general'

function generateSiteMap (words) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_PATH}</loc>
     </url>
     ${words
       .map((el) => {
         const formattedTitle = el.title.replace(' ', '-')

         return `
        <url>
          <loc>${`${BASE_PATH}/${formattedTitle}`}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap () {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps ({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`${BASE_PATH}/api/requestTitleList`)
  const words = await request.json()

  // We generate the XML sitemap with the words data
  const sitemap = generateSiteMap(words)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap
