# Business models

## Overview
  - *.ts: Represents business models *e.g Car, Agency, etc*.
  - helpers/Const.ts: Store the project constants. *e.g: catalogs, enums*.
  - helpers/Mocks.ts: Handle the creation of mock models.
  

## Code Guidelines

- Each model must follow the following structure:
```typescript
class XModel extends Model
{
  //Attributes ...
  //Constructor
  //build();
  //toJSON();
}
export default XModel;
```

  > The models models can only implement two methods *build() & toJSON()*.

- Each attribute must be defined public.
```typescript
  name: string
```
- The constructor only can have the identifier of the model as parameter.
```typescript
  constructor(id: number)
  {
    super();
    this.id = id;
  }
```
- Each model **must have** a build() method to initialize all the variables, and must follow the following structure.
```typescript
  build(attr1: type1, attr2: type2): XModel
  {
    this.attr1 = attr1;
    this.attr2 = attr2;
    return this;
  }
```
- Each models **must override** the toJSON() method and follow the following structure:
```typescript
  toJSON()
  {
    return {
      attr_1: this.attr1,
      attr_2: this.attr2
    };
  }
```
> The toJSON() method must use a snake_case and **can omit** some attributes such as passwords and sensitive attributes.


## Quality checklist

- [ ] All models, const & mocks only imports @models modules.
- [ ] All the attributes in Const.ts are enums type.
- [ ] All enums in Const.ts are written in uppercase.
- [ ] All models have build() methods.
- [ ] All models override toJSON() methods.
- [ ] All models only implement build() & toJSON() methods.
- [ ] No models includes **sensitive content** in toJSON() method *e.g passwords,secret_keys*.
- [ ] All models files only export one class.
- [ ] Mocks.ts implement a method to generate **all** models with at least 3 mocks each one.


