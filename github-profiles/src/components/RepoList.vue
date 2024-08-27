<template>
  <div class="repo-list">
    <div v-for="repo in repos" :key="repo.id" class="repo-card">
      <h3><a :href="repo.html_url" target="_blank">{{ repo.name }}</a></h3>
      <p>{{ repo.description }}</p>
      <div class="repo-details">
        <span> {{ repo.stargazers_count }}</span>
        <span> {{ repo.forks_count }}</span>
        <span> {{ repo.language }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repos: Array,
  },
};
</script>

<style scoped>
.repo-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.repo-card {
  padding: 15px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s;
}

.repo-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: #0073e6;
}

h3 a {
  text-decoration: none;
  color: inherit;
}

p {
  font-size: 1rem;
  color: #555;
  margin: 0 0 10px;
}

.repo-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #777;
}
</style>
