<template>
  
    <div className="footer">
      <div className="flex">
        <p className="words">Copyright © Dapper Ducks - 2022</p>

      </div>
      <div style="width:200px">

      </div>
      <a href="https://discord.com/invite/dapperducks" target="_blank">
        <img src="./../../assets/discord.png" />
      </a>
      <a href="https://twitter.com/Dapper_DucksNFT" target="_blank">
        <img src="./../../assets/twitter.png" />
      </a>
      <a href="https://twitter.com/inceptionaio?s=21" target="_blank">
        <img src="./../../assets/inception.png" height="3vh" width="150px" />
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
