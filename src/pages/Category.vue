<template>
  <div class="category">
    <div class="category-container">
      <div class="breadcrumb">
        <router-link class="breadcrumb-prev" to="/">All categories</router-link>
        <i class="fa fa-chevron-right"></i>
        <span class="breadcrumb-curr">Getting started</span>
      </div>
      <div class="category-content">
        <div class="category-card">
          <div class="category-card-top">
            <i class="fa fa-3x fa-play"></i>
            <span class="category-title">Getting started</span>
            <span class="category-last-updated">Updated 2 weeks ago</span>
          </div>
          <div class="category-card-bottom">
            <i class="fa fa-lg fa-info-circle"></i>
            <p class="category-desc">
              De quibus cupio scire quid sentias. Quid, de quo nulla dissensio
              est Illum mallem levares sentias nulla dissensio.
            </p>
          </div>
        </div>
        <div class="category-articles">
          <div class="category-article" v-for="category in 5" :key="category">
            <i class="fa fa-lg fa-file-alt"></i>
            <div class="article-desc">
              <span class="article-title">Creating a New Account</span>
              <span class="article-last-updated">Updated Jun, 15 2019</span>
            </div>
            <i class="fa fa-lg fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.fa {
  color: $green;
}

.category {
  background-color: #fafafa;
  padding: 1.25rem 0 3.75rem;

  .category-container {
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

    .category-content {
      display: flex;
      margin-top: 1.375rem;
      text-align: center;

      .category-card {
        width: 280px;
        background-color: #ffffff;
        border: 1px solid #eeeeee;
        border-radius: 4px;
        padding: 2.5rem 0 3.125rem;
        align-self: flex-start;

        .category-card-top {
          & > * {
            display: block;
          }

          .category-title {
            font-size: 23px;
            color: #373737;
            font-weight: 700;
            margin-top: 1.25rem;
          }

          .category-last-updated {
            font-size: 11px;
            color: #9c9aa6;
            margin-top: 0.5rem;
          }
        }

        .category-card-bottom {
          border-top: 1px solid #eeeeee;
          margin-top: 1.25rem;

          & > * {
            display: block;
          }

          .fa {
            margin-top: 1.25rem;
          }

          .category-desc {
            font-size: 13px;
            color: #9c9aa6;
            font-weight: 400;
            margin: 0.875rem 1.875rem 0;
          }
        }
      }

      .category-articles {
        flex-grow: 1;
        margin-left: 3.75rem;
        align-self: flex-start;

        .category-article {
          display: flex;
          flex-direction: row;
          align-items: center;
          background-color: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 4px;
          padding: 1.25rem 2.5rem;
          margin-bottom: 1.125rem;

          &:last-child {
            margin-bottom: 0;
          }

          .article-desc {
            margin-left: 1.5rem;

            & > * {
              display: block;
              text-align: left;
            }

            .article-title {
              font-size: 20px;
              color: #373737;
              font-weight: 400;
            }

            .article-last-updated {
              font-size: 11px;
              color: #9c9aa6;
              font-weight: 400;
              margin-top: 0.5rem;
            }
          }

          & > :last-child {
            margin-left: auto;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .category-content {
      flex-direction: column;

      .category-card {
        width: 100% !important;
      }

      .category-articles {
        margin-left: 0 !important;
        margin-top: 1.8rem;
        width: 100%;
      }
    }
  }
}
</style>
