import App from 'cloudflare-worker-rest-api'
import { docs, submit, status } from './apps/alphafold/api'

const app = new App('/')

app.get('/', (_req: any, res: { send: (arg0: { status: string }) => any }) => {
  return res.send({ status: 'live' })
})

app.get('/alphafold', docs)
app.post('/alphafold/submit', submit)
app.get('/alphafold/status/:jobId', status)

export default async function handleRequest(request: any): Promise<Response> {
  return app.handleRequest(request)
}
