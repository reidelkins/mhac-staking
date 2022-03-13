<template>
  
    <div className="footer">
      <div className="flex">
        <p>Copyright © Mile High Ape Club - 2022</p>

      </div>
      <div style="width:200px">

      </div>
      <a href="https://discord.gg/milehighapeclub" target="_blank">
        <img src="./../../assets/discord.png" />
      </a>
      <a href="https://twitter.com/milehighapeclub" target="_blank">
        <img src="./../../assets/twitter.png" />
      </a>
      <a href="https://www.instagram.com/milehighapeclub/" target="_blank">
        <img src="./../../assets/instagram.png" />
      </a>
    </div>
    
    
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  @apply w-full flex justify-center align-middle bg-black text-center;
  position: absolute;
  bottom: 0px;
  height: 60px;
}
</style>
