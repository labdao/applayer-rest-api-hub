export const docs = (_req: any, res: any) => {
  return res.send({
    application: {
      name: 'alphafold'
    },
    endpoints: {
      '/alphafold': { description: 'return this documentation' },
      '/submit': {
        description: 'submit a new job',
        method: 'POST',
        payload_example: {
          input: [
            { name: 'abc', sequence: 'MTANHLESPNCDWKNNRMAIVHMVNVTPLRMMEEPRAAVEAAFEGIMEPAVVGDMVEYWNKMISTCCNYYQMGSSRSHLEEKAQMVDRFWFCPCIYYASGKWRNMFLNILHVWGHHHYPRNDLKPCSYLSCKLPDLRIFFNHMQTCCHFVTLLFLTEWPTYMIYNSVDLCPMTIPRRNTCRTMTEVSSWCEPAIPEWWQATVKGGWMSTHTKFCWYPVLDPHHEYAESKMDTYGQCKKGGMVRCYKHKQQVWGNNHNESKAPCDDQPTYLCPPGEVYKGDHISKREAENMTNAWLGEDTHNFMEIMHCTAKMASTHFGSTTIYWAWGGHVRPAATWRVYPMIQEGSHCQC'}
          ]
        },
        response_example: {
          
        }
      }
    }

  })
}

export const submit = (_req: any, res: { send: (arg0: { data: string[]; }) => any; }) => {
  return res.send({ data: ["Item1", "Item2", "Item3"] })
}

export const status = (_req: any, res: { send: (arg0: { data: string[]; }) => any; }) => {
  return res.send({ data: ["Item1", "Item2", "Item3"] })
}