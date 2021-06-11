<template>
  <li>
    <base-card>
      <header>
        <h3>
          {{ title }}
        </h3>
        <button>
          Delete
        </button>
      </header>
      <p>
        {{ description }}
      </p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
export default {
  props: ['title', 'description', 'link'],
  components: {
    BaseCard
  }
};
</script>
