// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req:any, res:any, fn:any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result:any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}



type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // Run the middleware
  await runMiddleware(req, res, cors)

  //Call IGDB API to search for a matching game
  const response = await fetch("https://api.igdb.com/v4/search", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.CLIENT_ID as string,
      'Authorization': process.env.AUTHORIZATION as string,
    },
    body: `search "${req?.body}"; fields *; limit 100;`
  })

  const data = await response.json();

  return res.status(200).json(data);
}