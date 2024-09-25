<template>
  <div class="home">
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
    <section class="categories">
      <div class="categories-container">
        <div
          class="category-card"
          v-for="category in categories"
          :key="category.id"
        >
          <i class="fa fa-3x" :class="`fa-${category.icon}`">&nbsp;</i>
          <h3 class="category-header">{{ category.title }}</h3>
          <div class="category-footer">
            <span class="category-articles">
              {{ category.totalArticle }} articles
            </span>
            <span class="category-last-updated">Last updated 2 days ago</span>
          </div>
        </div>
      </div>
      <div class="categories-empty" v-if="categories.length === 0">
        <h2>Oh no it's empty!</h2>
        <p>There's nothing in the category list</p>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

import * as api from "../api";

export default {
  components: {
    "tawk-header": Header,
  },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    changeCategories(categories) {
      this.categories = categories;
    },
    async getCategories() {
      const categories = await api.categories();
      this.changeCategories(
        categories
          .filter((category) => category.enabled)
          .sort((a, b) => a.order - b.order)
      );
    },
  },
  created() {
    this.getCategories();
  },
};
</script>

<style lang="scss" scoped>
.home {
  $primary-color: #03a84e;

  .search-form {
    $search-form-width: 720px;
    $search-form-radius: 4px;
    $search-button-width: 80px;
    $search-button-height: 60px;

    max-width: $search-form-width;
    height: auto;
    margin: 2.1875rem auto 4.6875rem auto;

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
      background-color: $primary-color;
      color: white;
      border: 1px solid $primary-color;
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

  .categories {
    $category-container-gap: 1.25rem;
    $category-card-width: 315px;

    background-color: #fafafa;
    padding: 3.75rem 0 6.25rem 0;
    text-align: center;

    .categories-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: $category-container-gap;
      max-width: calc(
        (#{$category-card-width} * 3) + (#{$category-container-gap} * 2)
      );
      margin: 0 auto;

      .category-card {
        width: $category-card-width;
        padding: 2.25rem 0;
        background-color: #ffffff;
        border: 1px solid #eeeeee;
        border-radius: 5px;

        .fa {
          color: $primary-color;
        }

        .category-header {
          font-size: 20px;
          margin-top: 1.25rem;
        }

        .category-footer {
          margin-top: 1.25rem;

          & > * {
            display: block;
          }

          .category-articles {
            font-size: 13px;
            color: $primary-color;
          }

          .category-last-updated {
            font-size: 11px;
            color: #9c9aa6;
          }
        }
      }
    }
  }
}
</style>
