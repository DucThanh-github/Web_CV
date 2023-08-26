<template>
  <page-begin
    beginTitle="Writing on software design, company building, and the aerospace industry."
    beginDesc="All of my long-form thoughts on programming, leadership, product design,
      and more, collected in chronological order."
  />
  <div
    class="mt-8 space-y-8 -py-8 md:space-y-16 md:border-l border-gray-200 dark:border-gray-700"
  >
    <article-item
      inputTime="September 2, 2022"
      inputLink="articles/AriticlesCraptingDesign"
      inputTitle="Introducing Animaginary: High performance web animations"
      inputDesc="When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
    >
    </article-item>

    <article-item
      inputTime="September 2, 2022"
      inputLink="articles/AriticlesIntroducingAnimaginary"
      inputTitle="Introducing Animaginary: High performance web animations"
      inputDesc="When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
    >
    </article-item>

    <article-item
      inputTime="
July 14, 2022"
      inputLink="articles/ArticlesRewriting"
      inputTitle="Rewriting the cosmOS kernel in Rust"
      inputDesc="When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week."
    >
    </article-item>
  </div>
</template>

<script lang='ts' setup>
import ArticleItem from "./ArticleItem.vue";
</script>


