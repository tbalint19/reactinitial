import { createServer } from 'miragejs';
export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
    },
    seeds(server) {
    },
    routes() {
      this.namespace = '/api';
      this.timing = 2000

      this.get('/teams', (schema, request) => {
        return [
          {
            "name": "Los Angeles Lakers",
            "stadium": "Staples Center",
            "franchisePlayers": [
              { "id": 1, "name": "Lebron James"},
              { "id": 2, "name": "Anthony Davis"}
            ]
          },
          {
            "name": "Los Angeles Clippers",
            "stadium": "Staples Center",
            "franchisePlayers": [
              { "id": 3, "name": "Kawhi Leonard"},
              { "id": 4, "name": "Paul George"}
            ]
          },
          {
            "name": "Phoenix Suns",
            "stadium": "Phoenix Suns Arena",
            "franchisePlayers": [
              { "id": 5, "name": "Chris Paul"},
              { "id": 6, "name": "Devin Booker"}
            ]
          },
          {
            "name": "Brooklyn Nets",
            "stadium": "Barclays Center",
            "franchisePlayers": [
              { "id": 7, "name": "James Harden"},
              { "id": 8, "name": "Kevin Durant"},
              { "id": 9, "name": "Kyrie Irving"}
            ]
          },
        ]
      })

      this.post('/vote', (schema, request) => {
        return { success: true }
      })
    },
  });
  return server;
}
