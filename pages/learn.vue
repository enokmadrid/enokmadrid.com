<template>
    <div>
        <div class="jumbotron jumbotron-fluid dark shift-up offset-bottom-5">
            <div class="container text-xs-center mt-5">
                <div class="d-flex flex-sm-row mb-4">
                    <div class="copy-hero">
                        <span class="display-3 mb-2 text-decoration">Let's Go!</span>
                        <h1 class="display-4">Topics & Tutorials</h1>
                        <p class="hidden-xs-down">Watch, learn, grow, and get to know me a little more.</p>
                        <Button
							href="https://www.youtube.com/c/enokmadrid"
                            target="_blank"
							class="btn btn-lg rounded-pill btn-primary brand-gradient has-arrow __right">
							Visit Channel
						</Button>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/WZJN4EE4KpY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
                <videos/>
            </div>
        </div>


        <section class="container-fluid bg--gray pt-5">
            <div class="container content--container pt-5">
                <div class="text-center mt-5 mb-5">
                    <h1 class="display-4">The Writer's Bench</h1>
                    <p>Discover my stories, thinking, and exploration on many topics.</p>
                </div>

                <card-single-column
                    :key="firstArticle.id"
                    :articleUrl="`/blog/${firstArticle.slug}`"
                    :imageUrl="firstArticle.coverImage.url"
                    :tag="firstArticle.tags[0].title"
                    :headline="firstArticle.headline"
                    :description="firstArticle.description"
                    :updatedAt="firstArticle.updatedAt"
                >
                </card-single-column>

                <div class="row">
                    <card-standard 
                        v-for="article in articles"
                        :key="article.id"
                        :articleUrl="`/blog/${article.slug}`"
                        :imageUrl="article.coverImage.url"
                        :tag="article.tags[0].title"
                        :headline="article.headline"
                        :description="article.description"
                        :updatedAt="article.updatedAt"
                    >
                    </card-standard>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Wide from '~/components/card/wide.vue';
export default {
    computed: {
        firstArticle() {
            return this.$store.state.articles[0]; // get the first article
        },
        articles() {
            let articles = [...this.$store.state.articles];
            articles.shift(); // get articles after the first
            return articles;
        }
    },
    components: { Wide }
}
</script>

<style lang="scss" scoped>
    .offset-bottom-5 {
        margin-bottom: -136px;
    }
    .copy-hero,
    .embed-responsive {
        flex: 1;
    }
</style>