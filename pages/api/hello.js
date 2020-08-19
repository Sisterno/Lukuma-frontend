// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }
import axios from 'axios'

const allAvos = async (req,res) =>{
    try {
        // Generally, you would not want this in your apps.
        // See more in 'cors.js'
        //await enablePublicAccess(req, res)

        const resultado = await axios.get('http://104.154.180.58/auth/local')

        res.json(resultado.data)
        // res.data=resultado.data

        //res.resultado.data
        //console.log(resultado.data)

        //res.resultado
        // const db = new DB()
        // const allEntries = await db.getAll()
        // const lenght = allEntries.length
    
        // Notice: We're manually setting the response object
        // However Next.JS offers Express-like helpers :)
        // https://nextjs.org/docs/api-routes/response-helpers
        // res.statusCode = 200
        // res.setHeader('Content-Type', 'application/json')
        // res.end(JSON.stringify({ data: resultado }))
      } catch (e) {
        console.error(e)
        res.statusCode = 500
        res.end(
          JSON.stringify({ data: [], error: 'Something went wrong' })
        )
      }
    
}

export default allAvos
