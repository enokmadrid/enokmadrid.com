// plugins/apollo.ts
export default defineNuxtPlugin(() => {
  // This is a temporary fix to disable automatic GraphQL queries on initialization
  // until the API endpoint issue is resolved
  console.log('Apollo plugin initialized - Queries disabled')
}) 