<template>
  <teleport to="body">
    <div class="modal-backdrop" :class="{ visible: visible }"></div>
    <div class="modal" :class="{ visible: visible }">
      <div class="modal-content">
        <i class="fa fa-2x fa-window-close" @click="toggleArticle({})"></i>
        <div class="modal-content-inner">
          <h2 class="article-title">
            {{ article.title }}
          </h2>
          <span class="article-author" v-if="author && author.name">
            {{ author.name }}
          </span>
          <p class="article-content">{{ article.content }}</p>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import Teleport from "vue2-teleport";

import * as api from "../api";

export default {
  props: ["visible", "article"],
  emits: ["toggle"],
  components: {
    Teleport,
  },
  data() {
    return {
      author: {},
    };
  },
  methods: {
    changeAuthor(author) {
      this.author = author;
    },
    async getAuthor() {
      const author = await api.author(this.article.authorId);
      this.changeAuthor(author);
    },

    //toggles
    toggleArticle() {
      this.$emit("toggle");
      this.changeAuthor({});
    },
  },
  watch: {
    visible(newVal) {
      if (newVal === true) {
        this.getAuthor();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.visible {
  display: block !important;
}

/* The Modal's Backdrop (shadow behind the modal) */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 1;
  display: none; /* Hidden by default */
}

/* The Modal itself */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: white;
  padding: 1.25rem 2.5rem 2rem;
  border-radius: 8px;
  z-index: 2; /* In front of the backdrop */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for the modal */
  display: none;

  /* Modal content */
  .modal-content {
    display: flex;
    flex-direction: column;

    .fa-window-close {
      color: red;
      cursor: pointer;
      margin-left: auto;
    }

    .modal-content-inner {
      .article-author {
        font-weight: 100;
        color: #373737;
      }

      .article-content {
        text-align: justify;
        color: #9c9aa6;
        margin-top: 1rem;
      }
    }
  }
}
</style>
