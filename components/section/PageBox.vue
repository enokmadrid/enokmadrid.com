<template>
    <section class="container-fluid background-gradient section-space mb-5">
        <div class="container page-box">
            <div class="row text-xs-center no-gutters">
                <SectionTitle 
                    :title="`What I do`"
                    :subtitle="`I Design Interfaces for Digital Product Experiences`"
                />
                <div class="row">
                    <sectionIconCard
                        :icon="require(`~/assets/images/svg/illustration-icons/user-testing.svg`)"
                        :title="`Research & Testing`"
                        :description="`I dive into the unknown to understand what motivates people and what their pain points are.`"
                    />
                    <sectionIconCard
                        :icon="require(`~/assets/images/svg/illustration-icons/experience-design.svg`)"
                        :title="`Experience Design`"
                        :description="`Translate insights into wireframes, to set the foundation for human centered products.`"
                    />
                    <sectionIconCard
                        :icon="require(`~/assets/images/svg/illustration-icons/interface-design.svg`)"
                        :title="`Interface Design`"
                        :description="`Translating solutions into visual magic by blending colors, illustrations &amp; typography.`"
                    />
                    <sectionIconCard
                        :icon="require(`~/assets/images/svg/illustration-icons/logo-design.svg`)"
                        :title="`Logo Design`"
                        :description="`Logo designs that set the stage for a meaningful, relevant, and memorable brand.`"
                    />
                    <sectionIconCard
                        :icon="require(`~/assets/images/svg/illustration-icons/illustration.svg`)"
                        :title="`Illustration`"
                        :description="`Sometimes we simply need to spice things up with some fun illustrations & artwork.`"
                    />
                    <sectionIconCard
                        :icon="require(`~/assets/images/svg/illustration-icons/development.svg`)"
                        :title="`Front-End`"
                        :description="`The marriage between art and science. My beloved art of front-end web development.`"
                    />
                </div>
            </div>
        </div>
    </section>
</template>