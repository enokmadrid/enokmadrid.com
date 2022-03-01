// import dependency to handle HTTP request to our back end
import projectsQuery from '~/graphql/projects.gql'
import projectQuery from '~/graphql/project.gql'

const state = () => ({
    projects:  [],
    activeProject: {}
})

const actions = {
    async nuxtServerInit({ commit }) {
        const response = await this.app.apolloProvider.defaultClient
        .query({ query: projectsQuery })
        commit("set_projects", response.data.projects);
    },
    async fetchProject({ commit }, slug) {
        const response = await this.app.apolloProvider.defaultClient
        .query({ 
            query: projectQuery,
            variables: { slug: slug }
        })
        commit("set_activeProject", response.data.project);
    }
}

const mutations = {
    set_projects(state, payload) {
        state.projects = payload;
    },
    set_activeProject(state, payload) {
        state.activeProject = payload;
    }
}


//export store module
export default {
    state,
    actions,
    mutations
}
