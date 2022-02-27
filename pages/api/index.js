const { Client } = require("@notionhq/client")
const notion = new Client({ auth: process.env.NOTION_TOKEN })

export default (req, res) => {
  if (req.method === 'POST') {
    const id = req.body.params.id;
    const name = req.body.params.name;
    (async () => {
      const response = await notion.pages.create({
        parent: {
          database_id: process.env.DATABASE_ID,
        },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: name,
                }
              }
            ]
          }
        }
      }).catch(err => console.log(err));
      console.log(response);
    })();
  } else {
    console.log(req.method);
    (async () => {
      const myPage = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
      })
      res.json(myPage.results)
    })()
  }
}