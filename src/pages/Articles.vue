<template>
  <div class="articles">
    <div class="articles-container">
      <div class="breadcrumb">
        <router-link class="breadcrumb-prev" to="/">All categories</router-link>
        <i class="fa fa-chevron-right"></i>
        <span class="breadcrumb-curr">Search results</span>
      </div>
      <div class="articles-content">
        <h1 class="articles-result-title">
          Showing results for “<span class="keyword">{{ this.search }}</span
          >”
        </h1>
        <div class="search-articles">
          <div
            class="search-article"
            v-for="article in articles"
            :key="article.id"
          >
            <i class="fa fa-lg" :class="`fa-${article.icon}`"></i>
            <div class="article-desc">
              <span class="article-title">{{ article.title }}</span>
              <span class="article-content">
                {{ article.content }}
              </span>
            </div>
            <i class="fa fa-lg fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "../api";

export default {
  data() {
    return {
      search: this.$route.query.search ?? "",
      articles: [],
    };
  },
  methods: {
    changeArticles(articles) {
      this.articles = articles;
    },
    async searchArticles() {
      const articles = await api.search(this.search);
      this.changeArticles(
        articles.filter(
          (article) =>
            article.status === "published" &&
            article.title.includes(this.search)
        )
      );
    },
  },
  created() {
    if (this.search === "") this.$router.push("/");
    else this.searchArticles();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.articles {
  background-color: #fafafa;
  padding: 1.25rem 0 3.75rem;

  .articles-container {
    width: 80%;
    margin: 0 auto;

    .breadcrumb {
      display: flex;

      &-prev {
        font-size: 13px;
        color: $green;

        &:hover {
          text-decoration: underline;
        }
      }

      .fa-chevron-right {
        width: 8px;
        height: 4px;
        margin: 0 0.875rem;
        color: #d3d3d3;
      }

      &-curr {
        font-size: 13px;
        color: #9c9aa6;
      }
    }

    .articles-content {
      text-align: center;

      .articles-result-title {
        font-size: 23px;
        margin-top: 2.5rem;
      }

      .keyword {
        color: $green;
      }

      .search-articles {
        margin-top: 1.875rem;

        .search-article {
          display: flex;
          flex-direction: row;
          background-color: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 4px;
          padding: 1.25rem 2.5rem;

          .article-desc {
            & > * {
              display: block;
              text-align: justify;
            }

            .article-title {
              font-size: 20px;
              color: #373737;
              font-weight: 400;
            }

            .article-content {
              font-size: 11px;
              color: #9c9aa6;
              font-weight: 400;
              margin-top: 0.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
