# Business sources

## Overview
  - Source.ts:  Represent implementations of the repository methods.
  - Mappers.ts: Handle the parsing of framework models to business models *e.g json > Car model*.
  - Executor: Handle commons framework actions such as connection initializations, common queries and transactions.
    > The main objective of this class is to uncouple as much as possible actions related to the framework and the repository.

### Code Guidelines

- Each source **must only** reference one datasource *e.g gmail, outlook, etc*.
- Each source must follow the following structure:
```typescript
class XSource implements XRepository
{
}
export default XSource;
```
- Each source **can only** import dependencies related to their respective repository. *e.g the sql source can't import aws or gmail dependencies*.

- Each method of the source **can not** call another method of the class.
  > e.g getPetList() can't call getPetDetails() even though they share common functionality. To solve common funcitonality use **executor class**.

- Each source **must not** handle promise functions handling.
  > For this actions use an executor class.

- Each mapper must follow the following structure:

```typescript
class XMapper extends Mapper<X>
{
  transform(data: any): X
  {
    return 
      //...
  }
}
```

### Quality checklist

- [ ] All sources & executors only imports @models and **framework related** modules.
- [ ] All mappers only imports @models modules.
- [ ] All methods of source **don't** call another repository function.
- [ ] All methods of source **don't** implement promise handling.


