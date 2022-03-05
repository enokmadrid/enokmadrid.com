// import dependency to handle HTTP request to our back end
import projectsQuery from '~/graphql/projects.gql'

// STATE is our single source of truth for the store state
const state = () => ({
    projects:  [],
    activeProject: null,
    currentPage: null,
    navClass: ''
})

// ACTIONS is where we fetch data, api etc... you can only commit (can be async)
const actions = {
    async nuxtServerInit({ commit }) {
        const response = await this.app.apolloProvider.defaultClient
        .query({ query: projectsQuery })
        commit("set_projects", response.data.projects);
    },
    changeNavClass({commit}) {
        let classname;
        if (this.state.currentPage === '/') {
            classname = 'navbar-split navbar-dark';
        } else if (this.state.currentPage === '/about') {
            classname = 'navbar-light'
        } else {
            classname = 'navbar-dark'
        }
        commit('set_navClass', classname);
    }
}

// MUTAIONS is where we change the state, the only way to change state (Can ONLY be sync)
const mutations = {
    set_projects(state, payload) {
        state.projects = payload;
    },
    set_activeProject(state, payload) {
        state.activeProject = payload;
    },
    set_currentPage(state, path) {
        state.currentPage = path;
    },
    set_navClass(state, classname) {
        state.navClass = classname;
    }
}

// GETTERS is where you compute derived state based on the store state (it's Cached)
const getters = {
    getProjectBySlug: state => (slug) => {
        return state.projects.find(project => project.slug === slug)
    },
    getNavClass: state => {
        return state.navClass
    }
}

//export store module
export default {
    state,
    actions,
    mutations,
    getters
}
