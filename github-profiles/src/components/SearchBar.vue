<template>
  <div class="search-container">
    <div class="search-wrapper">
      <input
        v-model="query"
        @keyup.enter="search"
        type="text"
        class="search-input"
        placeholder="Search by username or repository"
      />
      <button v-if="query" @click="clear" class="clear-button">
        &times;
      </button>
    </div>
    <button @click="search" class="search-button">
       Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search() {
      this.$emit('search', this.query);
    },
    clear() {
      this.query = '';
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.search-wrapper {
  position: relative;
}

.search-input {
  width: 300px;
  padding: 10px 15px;
  padding-right: 35px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #007bff;
}

.clear-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #aaa;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.clear-button:hover {
  color: #007bff;
}

.search-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: 2px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin-left: 10px; 
}

.search-button:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.search-button:active {
  background-color: #003d7a;
  border-color: #003d7a;
}

.search-button:focus {
  outline: none;
}
</style>

