<template>
    <div 
    id="id-1"
    class=" w-screen h-[5000px] bg-yellow-500">
        <div class="h-10 w-full bg-green-600"></div>

        <div class="h-10 w-full bg-red-600 pt-10 top-0"
        :class="{sticky:isSticky}">
        </div>
        <div class="h-10 w-full bg-blue-600">
        </div>
        <button @click=test class="mt-[1000px]">
            click
        </button>
    </div>
</template>

<script lang="ts" setup>
let isSticky = ref<boolean>(false)
    function test() {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }

    
onMounted(() => {
  document.addEventListener("scroll", () => {
      const currenScrollY = scrollY
      const lastScrollY = currenScrollY
    if (currenScrollY>lastScrollY) {
        isSticky.value = false
    } else {
        isSticky.value= true
    }
    // console.log(scrollY)
    console.log('a',isSticky.value)
  });
});

    // window.addEventListener('scrollY', ()=>{
    //     console.log('test')
    //     const currenScrollY = window.scrollY
    //     console.log(currenScrollY)
    //     if (currenScrollY<lastScrollY) {

    //     }
    //     const lastScrollY = currenScrollY
    
    // })

</script>