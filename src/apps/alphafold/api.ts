import docsData from './docs'
export const docs = (_req: any, res: any) => {
  return res.send(docsData)
}

export const submit = (_req: any, res: { send: (arg0: { data: string[]; }) => any; }) => {
  return res.send({ data: ["Item1", "Item2", "Item3"] })
}

export const status = (_req: any, res: { send: (arg0: { data: string[]; }) => any; }) => {
  return res.send({ data: ["Item1", "Item2", "Item3"] })
}