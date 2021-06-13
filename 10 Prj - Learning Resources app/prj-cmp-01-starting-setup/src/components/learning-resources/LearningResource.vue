<template>
  <li>
    <base-card>
      <header>
        <h3>
          {{ title }}
        </h3>
        <base-button mode="flat" @click="deleteResource(id)">
          Delete
        </base-button>
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
  props: ['id','title', 'description', 'link'],
  inject: ['deleteResource'],
  components: {
    BaseCard
  }
};
</script>
