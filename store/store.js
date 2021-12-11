import axios from 'axios'

const strapi = "https://strapi.martialescudero.com/"

export const state = () => ({
  projets: [],
  projet: [],
  cvpdf: [],
  cv: [],   
})

export const mutations = {
  setProjet(state, args) {
    state.projets = args.reverse()
  },
  setProjetSelect(state, args) {
    state.projet = args[0]
    for (let index = 0; index < state.projet.Techno.length; index++) {
      state.projet.Techno = state.projet.Techno.replace(',',' |')
    }
  },
  setCvPDF(state, args) {
    state.cvpdf = args[0]
  },
  setCv(state, args) {
    state.cv = args
  },
}

export const actions = {
  getProjets({commit}) {
    axios.get(strapi + 'projets?ShowIt_eq=true')
    .then( (res) => {
      commit('setProjet', res.data)
    })
    .catch( (err) => {
      console.log(err)
    })
  },
  getProjetSelect({commit}, item) {
    axios.get(strapi +'projets?Slug_eq=' + item)
    .then( (res) => {
      commit('setProjetSelect', res.data)
    })
    .catch( (err) => {
      console.log(err)
      router.push({path: '/404'})
    })
  },
  getCvPDF({commit}) {
    axios.get(strapi + 'links?_id_eq=617ab714fb54e100161dae31')
    .then( (res) => {
        commit('setCvPDF', res.data)
    })
    .catch( (err) => {
        console.log(err)
    })
  },
  getCv({commit}) {
    axios.get(strapi + 'types-cvs')
    .then( (res) => {
        commit('setCv', res.data)
    })
    .catch( (err) => {
        console.log(err)
    })
  },
}

export const getters = {
  projets: state => state.projets,
  projet: state => state.projet,
  cvpdf: state => state.cvpdf,
  cv : state => state.cv
}