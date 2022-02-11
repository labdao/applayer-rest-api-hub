import handleRequest from '../../src/handler'
import makeServiceWorkerEnv from 'service-worker-mock'
import docsData from '../../src/apps/alphafold/docs'

declare var global: any

const setup = () => {
  Object.assign(global, makeServiceWorkerEnv())
  jest.resetModules()
}

describe('/alphafold', () => {
  beforeEach(setup)

  test('handle GET /', async () => {
    const result = await handleRequest(new Request('/alphafold', { method: 'GET' }))
    expect(result.status).toEqual(200)
    const text = await result.text()
    expect(text).toEqual(JSON.stringify(docsData))
  })
})

describe('/alphafold/submit', () => {
  beforeEach(setup)

  test('handle POST /submit', async () => {
    const result = await handleRequest(new Request('/alphafold/submit', { method: 'POST', body: JSON.stringify(docsData.endpoints['/alphafold/submit'].payload_example)}))
    expect(result.status).toEqual(200)
    const text = await result.text()
    expect(text).toEqual(JSON.stringify(docsData.endpoints['/alphafold/submit'].response_example))
  })
})

describe('/alphafold/status/:jobId', () => {
  beforeEach(setup)

  test('handle GET /status/:jobId', async () => {
    const status = await handleRequest(new Request('/alphafold/status/12345', { method: 'GET' }))
    expect(status.status).toEqual(200)
    const text = await status.text()
    expect(text).toEqual(JSON.stringify(docsData.endpoints['/alphafold/status/:jobId'].response_example))
  })
})