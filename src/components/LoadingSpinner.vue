<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
}
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.spinner {
  margin-top: 12%;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: #ff9800;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
