# HTTP middlewars

## Overview
  - *.ts: Handles the managment of information before reaching the controllers *e.g validations & authentications*.
  - responses.ts: Handle Commons methods for responses (Headers, formats, etc).

### Code Guidelines

- Each middleware must be associated with a model or group of endpoints *e.g toys, pets*.
  > Except for general middlewares such as authentication.ts
- Each middleware can only have repositories attributes.
- Each middleware only use responses.ts methods to handle responses *e.g next(), sendError()*.

### Quality checklist

- [ ] All middlewares only imports @models, @repositoies & @sources modules.
- [ ] All the attributes of middlewares are from @repositories modules.
- [ ] The responses.ts is the only class for handle data sending.




