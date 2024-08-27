## Overview

This Vue.js search component allows users to search for GitHub usernames or repository names. It features a clear button to quickly remove text from the input field and a search button to initiate the search. The component is styled for a modern and user-friendly interface.

## Features

- **Search Functionality**: Users can type a query and press Enter or click the search button to initiate a search.
- **Clear Button**: An embedded clear button (`×`) appears when there is text in the input field, allowing users to quickly clear their query.
- **Responsive Design**: The component is designed to be responsive and user-friendly across different devices.

## Setup

### Prerequisites

- Node.js
- Vue CLI

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/prashanth-sai/github-profiles.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

### Usage

1. **Import the Component**

   In your Vue.js application, import and use the `SearchComponent`:

   ```vue
   <template>
     <div>
       <SearchComponent @search="handleSearch" />
     </div>
   </template>

   <script>
   import SearchComponent from './components/SearchComponent.vue';

   export default {
     components: {
       SearchComponent
     },
     methods: {
       handleSearch(query) {
         console.log('Search query:', query);
         // Implement your search logic here
       }
     }
   };
   </script>
   ```

2. **Run Your Application**

   ```bash
   npm run serve
   ```

   Open your browser and navigate to `http://localhost:8080` to see the search component in action.

## File Structure

```
src/
├── assets/
│   └── not-found.jpg
├── components/
│   └── SearchComponent.vue
├── App.vue
└── main.js
```

- **`src/assets/not-found.jpg`**: Image used for the "not found" scenario.
- **`src/components/SearchComponent.vue`**: The Vue component for the search functionality.
- **`src/App.vue`**: The main application component.
- **`src/main.js`**: The entry point for the Vue application.

## Component Details

- **Template**: Contains an input field for search queries, a clear button, and a search button.
- **Script**: Manages the query state and emits a search event when the search button is clicked or Enter is pressed.
- **Style**: Includes CSS for modern styling of the input field, clear button, and search button.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.
