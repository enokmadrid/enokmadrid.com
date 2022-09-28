// import dependency to handle HTTP request to our back end
import projectsQuery from '~/graphql/projects.gql'
import articlesQuery from '~/graphql/articles.gql'
import videosQuery from '~/graphql/videos.gql'

// STATE is our single source of truth for the store state
export const state = () => ({
    projects:  [],
    articles: [],
    videos: [],
    activeProject: null,
    currentPage: null,
    navClass: ''
})

// GETTERS is where you compute derived state based on the store state (it's Cached)
export const getters = {
    getNavClass: state => {
        return state.navClass
    },
    getProjectBySlug: state => (slug) => {
        return state.projects.find(project => project.slug === slug)
    },
    getArticlesBySlug: state => (slug) => {
        return state.articles.find(article => article.slug === slug)
    }
}

// MUTAIONS is where we change the state, the only way to change state (Can ONLY be sync)
export const mutations = {
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
    },
    set_videos(state, payload) {
        state.videos = payload;
    },
    set_articles(state, payload) {
        state.articles = payload
    }
}

// ACTIONS is where we fetch data, api etc... you can only commit (can be async)
export const actions = {
    async nuxtServerInit({ commit }) {
        const response = await this.app.apolloProvider.defaultClient
        .query({ query: projectsQuery })
        commit("set_projects", response.data.projects.reverse());

        const response2 = await this.app.apolloProvider.defaultClient
        .query({ query: articlesQuery })
        commit("set_articles", response2.data.articles);

        const response3 = await this.app.apolloProvider.defaultClient
        .query({ query: videosQuery })
        commit("set_videos", response3.data.videos);
    },
    changeNavClass({commit}) {
        let classname;
        if (this.state.currentPage === '/') {
            classname = 'navbar-split';
        } else if (this.state.currentPage === '/about') {
            classname = 'navbar-transparent'
        } else {
            classname = 'navbar-dark'
        }
        commit('set_navClass', classname);
    }
}