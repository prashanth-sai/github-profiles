<template>
  <div id="app">
    <SearchBar @search="fetchData" />
    <UserProfile v-if="userProfile" :profile="userProfile" />
    <RepoList v-if="repositories.length" :repos="repositories" />
    <div v-if="error && require('@/assets/not-found.jpg')" class="error-message">
      <img :src="require('@/assets/not-found.jpg')" alt="Not Found" />
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import UserProfile from "../components/UserProfile.vue";
import RepoList from "../components/RepoList.vue";
import { getUserProfile, getUserRepositories } from "../services/githubService";

export default {
  components: {
    SearchBar,
    UserProfile,
    RepoList,
  },
  data() {
    return {
      userProfile: null,
      repositories: [],
      error: "",
    };
  },
  methods: {
    async fetchData(query) {
      this.error = "";
      this.userProfile = null;
      this.repositories = [];
      try {
        const profileResponse = await getUserProfile(query);
        this.userProfile = profileResponse.data;

        const reposResponse = await getUserRepositories(query);
        this.repositories = reposResponse.data;
      } catch (err) {
        this.error = "Oops! We couldn't find that user. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  text-align: center;
  margin: 50px 0;
}

.error-message img {
  width: 300px;
  margin-bottom: 20px;
}

.error-message p {
  font-size: 1.2rem;
  color: #ff6b6b;
  font-weight: bold;
}
</style>
