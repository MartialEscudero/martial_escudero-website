import axios from "axios";

const strapi = "https://strapi.martialescudero.com/api";

export const state = () => ({
    projets: [],
    projet: [],
    cvpdf: [],
    cv: [],
});

export const mutations = {
    setProjets(state, args) {
        state.projets = args.reverse();
    },

    setProjetSelect(state, args) {
        state.projet = args[0].attributes;
        for (let index = 0; index < state.projet.Techno.length; index++) {
            state.projet.Techno = state.projet.Techno.replace(",", " |");
        }
    },

    setCvPDF(state, args) {
        state.cvpdf = args[0];
    },

    setCv(state, args) {
        state.cv = args;
    },
};

export const actions = {
    getProjets({ commit }) {
        axios
            .get(
                strapi +
                    "/projects?populate=%2A&sort=Date:desc&filters[ShowIt][$eq]=true"
            )
            .then((res) => {
                commit("setProjets", res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },

    getProjetSelect({ commit }, item) {
        axios
            .get(strapi + "/projects?populate=%2A&filters[Slug][$eq]=" + item)
            .then((res) => {
                commit("setProjetSelect", res.data.data);
            })
            .catch((err) => {
                console.log(err);
                router.push({ path: "/404" });
            });
    },

    getCvPDF({ commit }) {
        axios
            .get(strapi + "/links?populate=%2A&filters[id][$eq]=7")
            .then((res) => {
                commit("setCvPDF", res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },

    getCv({ commit }) {
        // axios.get(strapi + 'types-cvs')
        //   .then( (res) => {
        //       commit('setCv', res.data)
        //   })
        //   .catch( (err) => {
        //       console.log(err)
        //   })
    },
};

export const getters = {
    projets: (state) => state.projets,
    projet: (state) => state.projet,
    cvpdf: (state) => state.cvpdf,
    cv: (state) => state.cv,
};
