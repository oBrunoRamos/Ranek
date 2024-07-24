<template>
  <div class="loanding">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "PaginaCarreganod",
};
</script>

<style scoped>
.loanding span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #87f;
  margin: 4px;
  animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
}

.loanding span:nth-child(1) {
  animation-delay: 0.1s;
}
.loanding span:nth-child(2) {
  animation-delay: 0.2s;
}
.loanding span:nth-child(3) {
  animation-delay: 0.3s;
}
.loanding span:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes dots {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 30px, 0);
  }
}
</style>
