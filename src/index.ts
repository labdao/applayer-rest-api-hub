import corsify from './corsify'
import handleRequest from './handler'

addEventListener("fetch", (event) => {
  event.respondWith(
    corsify(event.request, handleRequest).catch(
      (err) => new Response(err.stack, {
        status: 500
      })
    )
  )
})
