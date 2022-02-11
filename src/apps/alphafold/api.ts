import docsData from './docs'
export const docs = (_req: any, res: any) => {
  return res.send(docsData)
}

export const submit = (_req: any, res: any) => {
  return res.send(docsData.endpoints['/alphafold/submit'].response_example)
}

export const status = (_req: any, res: any) => {
  return res.send(docsData.endpoints['/alphafold/status/:jobId'].response_example)
}