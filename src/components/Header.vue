<template>
  <div id="header-wrapper">
    <div id="header-text">
      <h1>Knowledge base doesn’t have to be boring</h1>
      <h3>Everything you need to Manage your Messaging</h3>
    </div>
    <div class="search-form">
      <input
        type="text"
        placeholder="Search for answers"
        class="search-input"
        v-model="keyword"
        @keydown.enter="performSearch"
      />
      <button type="submit" class="search-submit" @click="performSearch">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    performSearch() {
      if (this.keyword !== "") {
        this.$router.push({
          path: "/articles",
          query: { search: this.keyword },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

#header-wrapper {
  padding: 3.4375rem 0 4.6875rem;

  #header-text {
    text-align: center;
    color: $text-black;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 34px;
      line-height: 41px;
    }

    h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      margin-top: 0.625rem;
    }
  }

  .search-form {
    $search-form-width: 720px;
    $search-form-radius: 4px;
    $search-button-width: 80px;
    $search-button-height: 60px;

    max-width: $search-form-width;
    height: auto;
    margin: 2.1875rem auto 0;
    padding: 0 1rem;

    .search-input {
      float: left;
      width: calc(100% - #{$search-button-width});
      height: 100%;
      padding: 1.25rem;
      font-size: 1rem;
      border: 1px solid #eeeeee;
      border-top-left-radius: $search-form-radius;
      border-bottom-left-radius: $search-form-radius;

      &::placeholder,
      &::-moz-placeholder,
      &::-webkit-input-placeholder {
        color: #9c9aa6;
      }
    }

    .search-submit {
      width: $search-button-width;
      height: $search-button-height;
      padding: 1.25rem 1.875rem;
      background-color: $green;
      color: white;
      border: 1px solid $green;
      border-left: none;
      border-top-right-radius: $search-form-radius;
      border-bottom-right-radius: $search-form-radius;
      cursor: pointer;

      .fa-search {
        font-size: 18px;
      }

      &:hover {
        background: #039545;
      }
    }
  }
}
</style>
