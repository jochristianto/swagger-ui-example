# Swagger
For reference on how to write the swagger config file, please checkout https://swagger.io/docs/specification/basic-structure/.

Some other references:
- https://petstore.swagger.io/
- https://petstore.swagger.io/v2/swagger.json
- https://medium.com/wolox-driving-innovation/documenting-a-nodejs-rest-api-with-openapi-3-swagger-5deee9f50420

## Usage
On this project, the are 2 examples of Swagger UI usage that you can use.

### JSON

#### Development
In development mode, you can simply run `yarn dev:json`. On development mode, the auto reload feature will be enabled. It will automatically load to `./blueprint.json` file.

### Production
Simply run `yarn start:json`. It will automatically load to `./blueprint.json` file.

### YAML

#### Development
In development mode, you can simply run `yarn dev:yaml`. On development mode, the auto reload feature will be enabled. It will automatically load to `./blueprint.yaml` file.

### Production
Simply run `yarn start:yaml`. It will automatically load to `./blueprint.yaml` file.