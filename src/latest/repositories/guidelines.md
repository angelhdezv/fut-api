# Business repositories

## Overview
  - *.ts:  Represent the abstractions (interfaces) of system actions.

### Code Guidelines

- Each repository **must only** reference one datasource *e.g gmail, outlook, etc*.
- Each model must follow the following structure:
```typescript
interface XRepository
{
  // methods()
  //...
}
export default XRepository;
```
  > The are only allowed abstract methods in repository modules. (No attributes).

### Quality checklist

- [ ] All repositories only imports @models modules.
- [ ] All repositories only have abstract methods.
-[ ] All repositories files only export one interface.
- [ ] All repository **don't** have attributes.


