# Sql source

### Schema Guidelines

- Each table & attribute must be written in lowercase and singular
- Each table must follow the following structure
```
  table_name
  _
  attribute_name
  foreign_key
```

### Code Guidelines

- Each source must follow the folowing structure

```typescript
class Source extends Executor implements Repository
{
  ...
}
```

- Each source method must follow the following structure.
```typescript
  async getXList: Promise<X[]>
  async getXDetails: Promise<X>
  async fetchX(): Promise<X[]
  async saveX(): Promise<X>
  async setX(): Promise<X>
  async deleteX(): Promise<X>
```

- Each get query follow the following structure.
```typescript
  let query =
   `SELECT x.*
    FROM x_table x
    INNER JOIN y_table y ON x.id = y.id
    WHERE
      x.id = ? AND
      y.attr = ?`
```
- Simple queries can be written in a single line
```typescript
  let query =
   `SELECT x.* FROM x_table x WHERE x.id = ?`
```

### Quality checklist

- [ ] All sql tables & attributes are written in lowercase and singular
- [ ] All methods use Executor methods to execute database queries
- [ ] All queries are written in multilines limited with ``

