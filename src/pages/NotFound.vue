<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <h3>The page you're looking for doesn't exist</h3>
    <router-link to="/" class="to-home">Back To Home</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.not-found {
  background-color: #fafafa;
  text-align: center;
  padding: 2rem 0;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-weight: 400;
    color: #373737;
  }

  h3 {
    font-weight: 400;
    color: #9c9aa6;
  }

  .to-home {
    display: inline-block;
    margin-top: 1.25rem;
    padding: 1rem;
    background-color: $green;
    color: white;
    border: none;
    border-radius: 4px;

    &:hover {
      background: #039545;
    }
  }
}
</style>
