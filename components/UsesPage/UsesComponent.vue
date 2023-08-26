<template>
    <page-begin 
    beginTitle="Software I use, gadgets I love, and other things I recommend."
    beginDesc="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
        />

<div class="mt-20 space-y-20">
    <uses-work/>
    <uses-dev/>
    <uses-design/>
    <uses-productivity/>
</div> 
</template>

<script setup>
import UsesWork from '~/components/UsesPage/UsesWork.vue'
import UsesDev from '~/components/UsesPage/UsesDev.vue'
import UsesDesign from '~/components/UsesPage/UsesDesign.vue'
import UsesProductivity from '~/components/UsesPage/UsesProductivity.vue'
</script>


