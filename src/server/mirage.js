import { createServer, Model } from "miragejs"

import products from '../constants/products';

export function makeServer() {
    const server = createServer({
        models: {
            product: Model,
        },

        seeds(server) {
            products.shoes.forEach((shoe) => {
                server.create("product", { ...shoe, sales: Math.floor(Math.random() * 500), code: `#MLB${Math.floor(Math.random() * 6458755536)}` });
            });

            // products.eletronics.forEach((eletronic, i) => {
            //     server.create("product", { ...eletronic, id: i + 1, sales: Math.floor(Math.random() * 250), code: `MLB${Math.floor(Math.random() * 6458755536)}` });
            // });
        },

        routes() {
            this.namespace = "/api"

            this.get("/products", (schema) => {
                return schema.products.all()
            })

            this.get("/favorites", (schema) => {
                return schema.products.all()
            })

            this.post("/products", (schema, request) => {
                const data = JSON.parse(request.requestBody);
                return schema.products.create({ ...data, sales: 0, code: `#MLB${Math.floor(Math.random() * 6458755536)}` });
            });

            this.patch("/products/:id", (schema, request) => {
                const { id } = request.params;
                const data = JSON.parse(request.requestBody);
                return schema.products.find(id).update(data);
            });

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
