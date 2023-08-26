<template>
    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div class="space-y-8">
            <box-item
            inputTime="September 5, 2022"
            inputTitle="Crafting a design system for a multiplanetary future"
            inputLink="articles/AriticlesCraptingDesign"
            inputDesc="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
            button="Read article"
            >
            </box-item>

            

            <box-item
            inputTime="September 2, 2022"
            inputTitle="Introducing Animaginary: High performance web animations"
            inputLink="articles/AriticlesIntroducingAnimaginary"
            inputDesc="When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
            button="Read article"
            >
            </box-item>

            <box-item
            inputTime="
July 14, 2022"
            inputTitle="Rewriting the cosmOS kernel in Rust"
            inputLink="articles/ArticlesRewriting"

            inputDesc="When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week."
            button="Read article"
            >
            </box-item>


        </div>
        <div class="md:ml-6 py-6 space-y-6">
            <email-component/>
            <work/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Work from './Work.vue'
import EmailComponent from './EmailComponent.vue';
</script>