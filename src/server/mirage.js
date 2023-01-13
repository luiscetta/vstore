import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    const server = createServer({
        environment,

        models: {
            product: Model,
        },

        seeds(server) {
            server.create("product", { name: "Inception", year: 2010 })
            server.create("product", { name: "Interstellar", year: 2014 })
            server.create("product", { name: "Dunkirk", year: 2017 })
        },

        routes() {
            this.namespace = "/api"

            this.get("/products", (schema) => {
                return schema.products.all()
            })

            this.passthrough((request) => {
                if (
                    request.url === "/_next/static/development/_devMiddlewareManifest.json"

                ) {
                    return true;
                }
            });
        },
    })

    return server
}
