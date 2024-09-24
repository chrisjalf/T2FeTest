<template>
  <div>
    <tawk-header></tawk-header>
    <div class="search-form">
      <input
        type="text"
        placeholder="Search for answers"
        class="search-input"
      />
      <button type="submit" class="search-submit">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    "tawk-header": Header,
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  $search-form-width: 720px;
  $search-form-radius: 4px;
  $search-button-width: 80px;
  $search-button-height: 60px;
  $search-button-color: #03a84e;

  width: $search-form-width;
  height: auto;
  margin: 0 auto;

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
    background-color: $search-button-color;
    color: white;
    border: 1px solid $search-button-color;
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
</style>
