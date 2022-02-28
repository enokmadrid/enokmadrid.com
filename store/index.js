// import dependency to handle HTTP request to our back end
import projectsQuery from '~/graphql/projects.gql'
import projectQuery from '~/graphql/project.gql'

const state = () => ({
    projects:  []
})

const actions = {
    nuxtServerInit({ commit }) {
        const apollo = this.app.apolloProvider.defaultClient;
        return new Promise((resolve, reject) => {
            apollo
            .query({ query: projectsQuery })
            .then(resp => {
                commit("set_projects", resp.data.projects);
                resolve(resp);
            })
            .catch(err => {
                resolve(err);
            });
        });
    }
}

const mutations = {
    set_projects(state, allProjects) {
        state.projects = allProjects;
    }
}


//export store module
export default {
    state,
    actions,
    mutations
}
