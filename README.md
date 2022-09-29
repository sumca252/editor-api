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

# REST API Endpoints

## Get all data
### Method: GET
>```
> /api/editor
>```
### Response: 200
```json
{
    "data": [
        {
            "_id": "6334644a08300a3b809c1d29",
            "title": "Lorem Ipsum",
            "content": "{\"ops\":[{\"attributes\":{\"underline\":true,\"italic\":true,\"bold\":true},\"insert\":\"Lorem ipsum \"},{\"attributes\":{\"align\":\"justify\",\"header\":1},\"insert\":\"\\n\"},{\"insert\":\"dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo \"},{\"attributes\":{\"italic\":true,\"bold\":true,\"link\":\"https://www.lipsum.com/feed/html\"},\"insert\":\"ultrices \"},{\"insert\":\"vitae.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\\n\"},{\"insert\":\"Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\\n\\n\"}]}",
            "author": "john.doe@test.com",
            "allowed_users": [
                "jane.doe@test.com",
                "john.smith@test.com"
            ]
        },
        {
            "_id": "6334644a08300a3b809c1d2a",
            "title": "Lorem Ipsum",
            "content": "{\"ops\":[{\"attributes\":{\"underline\":true,\"italic\":true,\"bold\":true},\"insert\":\"Lorem ipsum \"},{\"attributes\":{\"align\":\"justify\",\"header\":1},\"insert\":\"\\n\"},{\"insert\":\"dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo \"},{\"attributes\":{\"italic\":true,\"bold\":true,\"link\":\"https://www.lipsum.com/feed/html\"},\"insert\":\"ultrices \"},{\"insert\":\"vitae.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\\n\"},{\"insert\":\"Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\\n\\n\"}]}",
            "author": "jane.doe@test.com",
            "allowed_users": [
                "john.doe@test.com",
                "john.smith@test.com"
            ]
        },
        {
            "_id": "6334644a08300a3b809c1d2b",
            "title": "Lorem Ipsum",
            "content": "{\"ops\":[{\"attributes\":{\"underline\":true,\"italic\":true,\"bold\":true},\"insert\":\"Lorem ipsum \"},{\"attributes\":{\"align\":\"justify\",\"header\":1},\"insert\":\"\\n\"},{\"insert\":\"dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo \"},{\"attributes\":{\"italic\":true,\"bold\":true,\"link\":\"https://www.lipsum.com/feed/html\"},\"insert\":\"ultrices \"},{\"insert\":\"vitae.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\\n\"},{\"insert\":\"Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\\n\\n\"}]}",
            "author": "john.smith@test.com",
            "allowed_users": []
        },
        ...
    ]
}
```



### Response: 404
```json
{
    "message": "No data found"
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
    "id": "6335673f23df0cdc3eeb0275",
    "message": "Data inserted"
}
```

### Response: 400
```json
{
    "message": "Missing fields title, content or author"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Update data by id
### Method: PUT
>```
> /api/editor/631260fcbfc8637e4e376603
>```
### Response: 200
```json
{
    "message": "Data updated"
}
```

### Response: 400
```json
{
    "message": "Missing fields title or content"
}
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get a document by id
### Method: GET
>```
> /api/editor/632f86e155d058273dd47b1a
>```
### Response: 200
```json
{
    "data": {
        "_id": "632f86e155d058273dd47b1a",
        "title": "Lorem Ipsum",
        "content": "{\"ops\":[{\"attributes\":{\"underline\":true,\"italic\":true,\"bold\":true},\"insert\":\"Lorem ipsum \"},{\"attributes\":{\"align\":\"justify\",\"header\":1},\"insert\":\"\\n\"},{\"insert\":\"dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo \"},{\"attributes\":{\"italic\":true,\"bold\":true,\"link\":\"https://www.lipsum.com/feed/html\"},\"insert\":\"ultrices \"},{\"insert\":\"vitae.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\\n\"},{\"insert\":\"Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\\n\\n\"}]}",
        "author": "john.smith@test.com",
        "allowed_users": []
    }
}
```


### Response: 404
```json
{
    "message": "No data found"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get user's documents
### Method: GET
>```
> /api/users/author/jane.doe@test.com
>```
### Response: 200
```json
{
    "data": [
        {
            "_id": "633568b39a61bdcddcbb4c70",
            "title": "Lorem Ipsum",
            "content": "{\"ops\":[{\"attributes\":{\"underline\":true,\"italic\":true,\"bold\":true},\"insert\":\"Lorem ipsum \"},{\"attributes\":{\"align\":\"justify\",\"header\":1},\"insert\":\"\\n\"},{\"insert\":\"dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo \"},{\"attributes\":{\"italic\":true,\"bold\":true,\"link\":\"https://www.lipsum.com/feed/html\"},\"insert\":\"ultrices \"},{\"insert\":\"vitae.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\\n\"},{\"insert\":\"Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\\n\\n\"}]}",
            "author": "jane.doe@test.com",
            "allowed_users": [
                "john.doe@test.com",
                "john.smith@test.com"
            ]
        }
    ]
}
```

### Response: 404
```json
{
    "message": "No data found"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get shared documents with user
### Method: GET
>```
> /api/users/share/john.smith@test.com
>```
### Response: 200
```json
{
    "data": [
        {
            "_id": "633568b39a61bdcddcbb4c6f",
            "title": "Lorem Ipsum",
            "content": "{\"ops\":[{\"attributes\":{\"underline\":true,\"italic\":true,\"bold\":true},\"insert\":\"Lorem ipsum \"},{\"attributes\":{\"align\":\"justify\",\"header\":1},\"insert\":\"\\n\"},{\"insert\":\"dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo \"},{\"attributes\":{\"italic\":true,\"bold\":true,\"link\":\"https://www.lipsum.com/feed/html\"},\"insert\":\"ultrices \"},{\"insert\":\"vitae.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\\n\"},{\"insert\":\"Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\\n\\n\"}]}",
            "author": "john.doe@test.com",
            "allowed_users": [
                "jane.doe@test.com",
                "john.smith@test.com"
            ]
        },
        {
            "_id": "633568b39a61bdcddcbb4c70",
            "title": "Lorem Ipsum",
            "content": "{\"ops\":[{\"attributes\":{\"underline\":true,\"italic\":true,\"bold\":true},\"insert\":\"Lorem ipsum \"},{\"attributes\":{\"align\":\"justify\",\"header\":1},\"insert\":\"\\n\"},{\"insert\":\"dolor sit amet, consectetur adipiscing elit. Praesent quis magna fermentum, maximus lorem suscipit, scelerisque turpis. Duis sodales diam nec lectus auctor, ac luctus justo sagittis. Phasellus at nulla sodales, convallis lacus varius, commodo nunc. Quisque consectetur nisl non tortor consectetur, id molestie dolor accumsan. Ut suscipit odio et nunc vehicula pellentesque. Vestibulum id magna neque. Sed dolor dolor, hendrerit in mi eget, rutrum semper ligula. Vestibulum tincidunt molestie euismod. Vivamus condimentum, arcu a facilisis iaculis, dui nisl pretium sem, sed feugiat nunc elit non tortor. Donec vel libero sodales, tincidunt elit id, pellentesque turpis. Donec commodo ultrices dui vel scelerisque. Sed suscipit tellus neque, ac placerat sapien finibus at.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Cras pharetra vulputate mauris, a pulvinar turpis pellentesque at. Morbi eget magna eu metus sollicitudin euismod in at dui. Etiam magna orci, pellentesque aliquam rhoncus commodo, lobortis vestibulum felis. Duis pellentesque aliquet orci, et congue leo \"},{\"attributes\":{\"italic\":true,\"bold\":true,\"link\":\"https://www.lipsum.com/feed/html\"},\"insert\":\"ultrices \"},{\"insert\":\"vitae.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\\n\"},{\"insert\":\"Mauris a justo laoreet, rhoncus metus ut, hendrerit nunc. Cras id euismod nulla, in tempor dolor.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Maecenas volutpat quis mi ac iaculis. Nulla non lectus id sem aliquet maximus.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Aliquam placerat odio orci. Maecenas molestie cursus lorem sed venenatis. Ut justo ipsum, varius eget quam id, scelerisque sodales lorem.\"},{\"attributes\":{\"align\":\"justify\",\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"Fusce eu scelerisque mi. Nam ac varius augue, vel gravida leo. Nunc posuere fringilla nisl, euismod ultricies justo placerat quis. Vivamus lectus enim, consectetur sit amet pretium vitae, luctus sed arcu. In enim eros, venenatis ac convallis quis, pulvinar quis arcu. Nam magna urna, imperdiet vitae nisi sed, malesuada malesuada leo. Nulla a dui nulla. Curabitur feugiat varius neque, quis gravida ex ornare et. Fusce viverra non turpis sed dapibus. Nullam nec velit quis lectus condimentum accumsan sed vel lacus. Phasellus elementum velit at posuere egestas. Fusce euismod tincidunt nisi nec convallis. Duis fringilla tempus auctor.\"},{\"attributes\":{\"align\":\"justify\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\\n\\n\"}]}",
            "author": "jane.doe@test.com",
            "allowed_users": [
                "john.doe@test.com",
                "john.smith@test.com"
            ]
        }
    ]
}
```


### Response: 404

```json
{
    "message": "No data found"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Register 
### Method: POST
>```
> /api/auth/register
>```
### Response: 201
```json
{
    "message": "User created",
    "user": {
        "id": "633569605920da448a4ae99c",
        "email": "test@test.com"
    }
}
```
### Response: 409
```json
{
    "message": "User already exists"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Login user
### Method: POST
>```
> /api/auth/login
>```
### Response: 200
```json
{
    "status": 200,
    "user": {
        "id": "633569605920da448a4ae99c",
        "email": "test@test.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2NjQ0NDQ4MjEsImV4cCI6MTY2NDUzMTIyMX0.kcyhljQFxsMU2GHqL_l9ioBV1ar6O8_IPge8kcu9uXY"
    }
}
```

### Response: 400
```json
{
    "message": "Invalid password!"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Reset Documents
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


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Reset Users
### Method: DELETE
>```
> /api/users/reset
>```
### Response: 200
```json
{
    "message": "Users collection reset"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
