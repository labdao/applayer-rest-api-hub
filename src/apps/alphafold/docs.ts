const init_date = Date.now()
const submitted_at = new Date(init_date).toISOString()
const started_at = new Date(init_date + 10000).toISOString()
const completed_at = new Date(init_date + 20000).toISOString()

const docsData = {
  application: {
    name: 'alphafold'
  },
  endpoints: {
    '/alphafold': {
      description: 'return this documentation'
    },
    '/alphafold/submit': {
      description: 'submit a new job',
      method: 'POST',
      payload_example: {
        input: [{
          name: 'gp47_tail',
          sequence: 'MTANHLESPNCDWKNNRMAIVHMVNVTPLRMMEEPRAAVEAAFEGIMEPAVVGDMVEYWNKMISTCCNYYQMGSSRSHLEEKAQMVDRFWFCPCIYYASGKWRNMFLNILHVWGHHHYPRNDLKPCSYLSCKLPDLRIFFNHMQTCCHFVTLLFLTEWPTYMIYNSVDLCPMTIPRRNTCRTMTEVSSWCEPAIPEWWQATVKGGWMSTHTKFCWYPVLDPHHEYAESKMDTYGQCKKGGMVRCYKHKQQVWGNNHNESKAPCDDQPTYLCPPGEVYKGDHISKREAENMTNAWLGEDTHNFMEIMHCTAKMASTHFGSTTIYWAWGGHVRPAATWRVYPMIQEGSHCQC',
          parameters: {
            "max_template_date": "2022-01-01",
            "mode": "monomer_single",
            "weights_download_url": "https://storage.googleapis.com/alphafold/alphafold_params_2021-10-27.tar",
            "db": "full",
            "is_prokaryote": 0
          }
        }]
      },
      response_example: {
        jobId: 12345,
        input: [{
          name: 'gp47_tail',
          sequence: 'MTANHLESPNCDWKNNRMAIVHMVNVTPLRMMEEPRAAVEAAFEGIMEPAVVGDMVEYWNKMISTCCNYYQMGSSRSHLEEKAQMVDRFWFCPCIYYASGKWRNMFLNILHVWGHHHYPRNDLKPCSYLSCKLPDLRIFFNHMQTCCHFVTLLFLTEWPTYMIYNSVDLCPMTIPRRNTCRTMTEVSSWCEPAIPEWWQATVKGGWMSTHTKFCWYPVLDPHHEYAESKMDTYGQCKKGGMVRCYKHKQQVWGNNHNESKAPCDDQPTYLCPPGEVYKGDHISKREAENMTNAWLGEDTHNFMEIMHCTAKMASTHFGSTTIYWAWGGHVRPAATWRVYPMIQEGSHCQC',
          parameters: {
            "max_template_date": "2022-01-01",
            "mode": "monomer_single",
            "weights_download_url": "https://storage.googleapis.com/alphafold/alphafold_params_2021-10-27.tar",
            "db": "full",
            "is_prokaryote": 0
          }
        }],
        accepted: true,
        status: 'queued',
        submitted_at: submitted_at,
        started_at: null,
        completed_at: null,
        output: []
      }
    },
    '/alphafold/status/:jobId': {
      description: 'get the status of a job',
      url: '/alphafold/status/12345',
      method: 'GET',
      response_example: {
        jobId: 12345,
        input: [{
          name: 'gp47_tail',
          sequence: 'MTANHLESPNCDWKNNRMAIVHMVNVTPLRMMEEPRAAVEAAFEGIMEPAVVGDMVEYWNKMISTCCNYYQMGSSRSHLEEKAQMVDRFWFCPCIYYASGKWRNMFLNILHVWGHHHYPRNDLKPCSYLSCKLPDLRIFFNHMQTCCHFVTLLFLTEWPTYMIYNSVDLCPMTIPRRNTCRTMTEVSSWCEPAIPEWWQATVKGGWMSTHTKFCWYPVLDPHHEYAESKMDTYGQCKKGGMVRCYKHKQQVWGNNHNESKAPCDDQPTYLCPPGEVYKGDHISKREAENMTNAWLGEDTHNFMEIMHCTAKMASTHFGSTTIYWAWGGHVRPAATWRVYPMIQEGSHCQC',
          parameters: {
            "max_template_date": "2022-01-01",
            "mode": "monomer_single",
            "weights_download_url": "https://storage.googleapis.com/alphafold/alphafold_params_2021-10-27.tar",
            "db": "full",
            "is_prokaryote": 0
          }
        }],
        accepted: true,
        status: 'completed',
        submitted_at: submitted_at,
        started_at: started_at,
        completed_at: completed_at,
        output: ["features.pkl", "msas", "ranked_0.pdb", "ranking_debug.json", "relaxed_model_1.pdb", "result_model_1.pkl", "timings.json", "unrelaxed_model_1.pdb"]
      }
    }
  }

}

export default docsData