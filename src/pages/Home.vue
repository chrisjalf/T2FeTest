<template>
  <div class="home">
    <section class="categories">
      <div class="categories-container">
        <router-link
          class="category-card"
          v-for="category in categories"
          :key="category.id"
          to="/"
        >
          <i class="fa fa-3x" :class="`fa-${category.icon}`">&nbsp;</i>
          <h3 class="category-header">{{ category.title }}</h3>
          <div class="category-footer">
            <span class="category-articles">
              {{ category.totalArticle }} articles
            </span>
            <span class="category-last-updated">Last updated 2 days ago</span>
          </div>
        </router-link>
      </div>
      <div class="categories-empty" v-if="categories.length === 0">
        <h2>Oh no it's empty!</h2>
        <p>There's nothing in the category list</p>
      </div>
    </section>
  </div>
</template>

<script>
import * as api from "../api";

export default {
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
          // select enabled categories
          .filter((category) => category.enabled)
          // sort categories ascendingly
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
@import "../scss/_variables.scss";

.home {
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
          color: $green;
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
            color: $green;
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
