// import dependency to handle HTTP request to our back end
import projectsQuery from '~/graphql/projects.gql'
import projectQuery from '~/graphql/project.gql'

const state = () => ({
    projects:  [],
    activeProject: null
})

const actions = {
    async nuxtServerInit({ commit }) {
        const response = await this.app.apolloProvider.defaultClient
        .query({ query: projectsQuery })
        commit("set_projects", response.data.projects);
    }
}

const getters = {
    getProjectBySlug: state => (slug) => {
        return state.projects.find(project => project.slug === slug)
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
    getters,
    mutations
}
