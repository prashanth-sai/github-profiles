<template>
  <div class="profile-card">
    <img :src="profile.avatar_url" alt="Avatar" class="avatar" />
    <div class="profile-details">
      <h2>{{ profile.name }} <span>({{ profile.login }})</span></h2>
      <p class="bio">{{ profile.bio }}</p>
      <a :href="profile.html_url" target="_blank" class="profile-link">View GitHub Profile</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
  },
};
</script>

<style scoped>
.profile-card {
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 20px 0;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  border: 3px solid #0073e6;
}

.profile-details {
  flex: 1;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

h2 span {
  font-size: 1rem;
  color: #777;
}

.bio {
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
}

.profile-link {
  display: inline-block;
  padding: 8px 16px;
  background: #0073e6;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s;
}

.profile-link:hover {
  background: #005bb5;
}
</style>
