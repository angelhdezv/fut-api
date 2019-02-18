# HTTP resources

## Overview
  - routes.ts: Handles all the **endpoints definitions**.
  - middlewares.ts: Handle all the middlewares definitions.
  - resources.ts: Handle the upload of files.
  - dev.ts: Handle dev operations  *e.g DB restart*.
  - /factories: Handle the creation of controllers and middlewares (Dependencies injection)


## Code Guidelines

- Each endpoint must follow the following structure
```typescript
/**
* @api comment
*/
this.router ...
```
- The @api comments are based on the [apidoc js documetation](http://apidocjs.com/)
- All the comments have to start with the following structure:
```typescript
/**
 * @api {METHOD} ENDPOINT TITLE
 * @apiName NAME
 * @apiGroup GROUP
 * @apiVersion VERSION
 */
```


## Quality checklist

- [ ] All the routes only imports express & @controllers modules.
- [ ] All the middlewares only importes express & @middlewares modules.
- [ ] All the routes includes @api comments.
- [ ] All GET details endpoints includes json example.
- [ ] The endpoints are organized by group *e.g CRUD pets then CRUD toys*
- [ ] The endpoints (url) follow the following order and structure:
```
  GET    models/:id
  GET    models
  POST   models
  PUT    models/:id
  DELETE models/:id 
```



