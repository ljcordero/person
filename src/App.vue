<template>
  <div>
    <el-container v-loading.fullscreen.lock="loading"/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({
  components: {
  },
})
export default class App extends Vue {
  @Getter loading: boolean;
}
</script>


<style lang="scss">
label.el-radio{
  margin-bottom: inherit !important;
}

body{
  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  overflow: overlay;
  margin: 0;
}

.loading-overlay{
  position: absolute !important; 
  top: 0; 
  bottom: 0; 
  left: 0; 
  right: 0; 
  padding: 10px 15px; 
  .border-radius-for-loading {
    border-radius: 3px;
  }
}


/* ELEMENT OVERRIDES */
.el-form-item__label{
  white-space: nowrap;
  margin: 0;
  line-height: 25px !important;
}
.el-dialog__body {
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
}

.el-dialog__header{
  padding-bottom: 20px !important;
}

.el-input__inner{ 
  box-shadow: none !important; 
}

.el-tree-node__content{
  height: unset !important;
  margin-bottom:5px !important;  
}
/* ELEMENT OVERRIDES */
.route-slide-leave-active{
  transition: all .2s ease;
  max-width: inherit;
  position: absolute;
}

.route-slide-leave-to{
  transform: translateY(5px) !important;
  opacity: 0;
}

.route-slide-enter-active {
  transition: all .3s ease .2s;
}
.route-slide-enter-to{
  transform: translateY(0) !important;
  opacity: 1;
}
.route-slide-enter {
  transform: translateY(-5px);
  position: absolute;
  opacity: 0;
}

.settings-popper{
  top: 38px !important;
}

#app-loader{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#app-loader img{
  height: 80px;
  width: auto;
  animation: pulse .6s ease-in-out 0s infinite;
}
@keyframes pulse {
    0% {height: 70px;}
    50% {height: 90px;}
    100% {height: 70px;}
}

/* width */
::-webkit-scrollbar {
    width: 8px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(136, 136, 136, 0.6); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgba(85, 85, 85, 0.6); 
}

.version-modal {
  .el-message-box__content {
    max-height: 70vh;
    overflow-x: scroll;
  }
}

</style>