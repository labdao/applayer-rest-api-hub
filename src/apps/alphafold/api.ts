import docsData from './docs'
export const docs = (_req: any, res: any) => {
  return res.send(docsData)
}

export const submit = (_req: any, res: any) => {
  return res.send(docsData.endpoints['/alphafold/submit'].response_example)
}

export const status = (req: any, res: any) => {
  console.log(req)
  const { jobId } = req.params

  if (!jobId) {
    return res.send({ message: "error: jobId not provided" }, 400)
  }

  if (jobId !== '12345') {
    return res.send({ message: "error: jobId does not exist" }, 400)
  }

  return res.send(docsData.endpoints['/alphafold/status/:jobId'].response_example)
}