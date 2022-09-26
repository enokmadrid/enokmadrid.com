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
                
                <div class="row mb-5">
                    <div class="col-6">
                        <img :src="firstArticle.coverImage.url" class="article-img img-fluid" alt="Responsive image">
                    </div>
                    <div class="col-6">
                        <span>{{firstArticle.tags.title}}</span>
                        <h3>{{firstArticle.headline}}</h3>
                        <p>{{firstArticle.description}}</p>
                        <time>{{firstArticle.updatedAt}}</time>
                    </div>
                </div>

                <div class="row">
                    <article class="card">
                        <header>
                            <img src="https://via.placeholder.com/360x205" alt="">
                        </header>
                        <div class="card-body">
                            <span>Category Tag</span>
                            <h5>Title</h5>
                            <p>Descriptions</p>
                            <time>Aug 16, 2022</time>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        firstArticle() {
            return this.$store.state.articles[0];
        },
		articles() {
			return this.$store.state.articles;
		}
	},
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
    .article-img {
        border-radius: 8px;
    }
</style>