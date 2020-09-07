const fastify = require('fastify')()

fastify.get('/g', (req, reply) => {
  reply.redirect("https://www.google.com/", '/g')

})

fastify.listen(3000, err => {
  if (err) throw err
  const port = fastify.server.address().port
  console.log(`server listening on ${port}`)
})
