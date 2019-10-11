<template>
  <div class="fixed-center text-center" style="width: 100%">
    <p style="display: flex; justify-content: center;">
      <strong class="fourofour"> 404 </strong>
      <img
        src="../_assets/img/sad.svg"
        style="width:30vw; max-width:150px; z-index: 2;"
      >
    </p>
    <p class="text-faded">
      Sorry
    </p>
    <el-button color="secondary" style="width:200px;" @click="$router.go(-1)">Go back</el-button>
  </div>
</template>
<style lang="scss" scoped>
.fourofour{
  color: rgb(253, 51, 51);
  font-size: 100px;
  position: absolute;
  animation: wiggle .5s ease-in-out 0s infinite alternate;
  z-index: 1;
}
@keyframes wiggle{
  from { transform: rotate(-10deg); }
  to { transform: rotate(10deg); }
}
</style>

