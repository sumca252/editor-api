# Editor API 
![Node CI](https://github.com/sumca252/editor-api/actions/workflows/node.js.yml/badge.svg?branch=main)

Backend API for [editor](https://github.com/sumca252/editor). 

----------- 
## Install dependencies
```
npm install
```
## Start the server 
```
npm start
```

## Eslint 
```
npm run eslint
```
## Fix eslint errors 
```
npm run fix
```
-----------

## ENDPOINTS 
## Get all data
### Method: GET
>```
>/api/editor
>```
### Response: 200
```json
{
    "data": [
        {
            "_id": "631ddf8bc31320179550e28f",
            "title": "Lorem Ipsum",
            "content": "\"<h1 class=\\\"ql-align-justify\\\"><strong><em><u>Lorem ipsum </u></em></strong></h1><p class=\\\"ql-align-justify\\\">dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.</p><p class=\\\"ql-align-justify\\\">Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo <a href=\\\"https://www.lipsum.com/feed/html\\\" rel=\\\"noopener noreferrer\\\" target=\\\"_blank\\\"><strong><em>ultrices </em></strong></a>vitae. </p><p class=\\\"ql-align-justify\\\"><br></p><ul><li class=\\\"ql-align-justify\\\">Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor. </li><li class=\\\"ql-align-justify\\\">Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus. </li><li class=\\\"ql-align-justify\\\">Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.</li></ul><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.</p><p><br></p>\""
        },
        {
            "_id": "631ddf8bc31320179550e290",
            "title": "Lorem ipsum ",
            "content": "\"<h1 class=\\\"ql-align-justify\\\"><strong><em><u>Lorem ipsum </u></em></strong></h1><p class=\\\"ql-align-justify\\\">dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.</p><p class=\\\"ql-align-justify\\\">Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo <a href=\\\"https://www.lipsum.com/feed/html\\\" rel=\\\"noopener noreferrer\\\" target=\\\"_blank\\\"><strong><em>ultrices </em></strong></a>vitae.</p><p class=\\\"ql-align-justify\\\"><br></p><ul><li class=\\\"ql-align-justify\\\">Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor.</li><li class=\\\"ql-align-justify\\\">Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus.</li><li class=\\\"ql-align-justify\\\">Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.</li></ul><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.</p><p><br></p>\""
        },
        ...
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Create new data
### Method: POST
>```
> /api/editor
>```
### Response: 201
```json
{
    "id": "631dde527ca27c933b041247",
    "message": "Data inserted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Update data
### Method: PUT
>```
> /api/editor/:id
>```
### Response: 200
```json
{
    "message": "Data updated"
}
```
### Response: 500
```json
{
    "message": "Data not updated"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get data by id 
### Method: GET
>```
> /api/editor/:id
>```
### Response: 200
```json
{
    "data": {
        "_id": "631ddf8bc31320179550e28f",
        "title": "Lorem Ipsum",
        "content": "\"<h1 class=\\\"ql-align-justify\\\"><strong><em><u>Lorem ipsum </u></em></strong></h1><p class=\\\"ql-align-justify\\\">dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.</p><p class=\\\"ql-align-justify\\\">Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo <a href=\\\"https://www.lipsum.com/feed/html\\\" rel=\\\"noopener noreferrer\\\" target=\\\"_blank\\\"><strong><em>ultrices </em></strong></a>vitae. </p><p class=\\\"ql-align-justify\\\"><br></p><ul><li class=\\\"ql-align-justify\\\">Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor. </li><li class=\\\"ql-align-justify\\\">Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus. </li><li class=\\\"ql-align-justify\\\">Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.</li></ul><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.</p><p><br></p>\""
    }
}
```

### Response: 500
```json
{
    "message": "Data not updated"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Reset databse with default dummy data
### Method: DELETE
>```
> /api/editor/reset
>```
### Response: 200
```json
{
    "message": "Data deleted and inserted defaults"
}
```
