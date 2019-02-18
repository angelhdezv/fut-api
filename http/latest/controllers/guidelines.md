# HTTP controllers

## Overview
  - *.ts: Handles the link between business logic and routes.
  - extensions/*.ts: Extra classes for complex controllers.
  - util.ts: Commons methods for controllers.

### Code Guidelines

- Each controller must be associated with a model or group of endpoints *e.g toys, pets*.
- Each controller can only have repositories attributes.
- Each controller only use responses.ts methods to handle responses *e.g sendModel(), sendOk()*.
- Each controller **can only implement the following methods**.
```
getList();
getDetails();
save();
update();
delete();
```
- All methods of the controller must return the following functions:
```
// Res.sendList();
getList();

// Res.sendModel()
getDetails()
save()
update()

//Res.sendOk()
delete()
```


>In case of need extra funcions use /extensions classes.


### Quality checklist

- [ ] All controllers only imports @models & @repositoies modules.
- [ ] All controllers only uses the CRUD methods indicated.
- [ ] All the attributes of controllers are from @repositories modules.
- [ ] The responses.ts is the only class for handle data sending.




