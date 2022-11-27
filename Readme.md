# readdirStat

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install readdirStat
```

## _Quick start_


After installing the module, we need to import it:
```js
const readdirStat = require('readdirStat');
```
Now we can use the `readdirStat` function. 

For example, <br/>
To get information about files and subdirectories, that are inside the _Sample folder_ directory, <br/>
We will type the following command:
```js
readdirStat('./Sample folder');
```

And we get a similar result:
```js
[
  {
    name: 'Internal folder for example',
    path: 'Sample folder/Internal folder for example',
    fullName: 'Internal folder for example',
    lastAccessTime: 2022-11-27T22:11:41.057Z,
    creationTime: 2022-11-27T22:10:51.218Z,
    lastModificationTime: 2022-11-27T22:11:41.057Z,
    isDirectory: true,
    isFile: false
  },
  {
    name: 'sample file',
    path: 'Sample folder/sample file.txt',
    fullName: 'sample file.txt',
    lastAccessTime: 2022-11-27T22:11:41.117Z,
    creationTime: 2022-11-27T22:11:19.077Z,
    lastModificationTime: 2022-11-27T22:11:19.077Z,
    isDirectory: false,
    isFile: true,
    size: 0,
    extension: '.txt'
  }
]
```

## _How it works_


The `readdirStat` function takes a folder path as a string argument,
and returns an array of objects that represent its files and folders.

The array can return 2 types of objects:
1. An object that represents a folder

| Key                   | Value Type | Description                                                         |
| --------------------- | ---------- |---------------------------------------------------------------------|
| name:                 | _string_   | Contains the folder name.                                           |
| path:                 | _string_   | Contains the file path.                                             |
| fullName:             | _string_   | Always the same value of _name_ Key.                                |
| lastAccessTime:       | _Date_     | The timestamp indicating the last time this file was accessed.      |
| creationTime:         | _Date_     | The timestamp indicating the creation time of this file.            |
| lastModificationTime: | _Date_     | The timestamp indicating the last time the file status was changed. |
| isDirectory:          | _boolean_  | Always returns true.                                                |
| isFile:               | _boolean_  | Always returns false.                                               |

2. An object that represents a file with the following values

| Key                   | Value Type | Description                                                                                                                 |
| --------------------- | ---------- |-----------------------------------------------------------------------------------------------------------------------------|
| name:                 | _string_   | Contains the filename without the file extension.                                                                           |
| path:                 | _string_   | Contains the file path.                                                                                                     |
| lastAccessTime:       | _Date_     | The timestamp indicating the last time this file was accessed.                                                              |
| creationTime:         | _Date_     | The timestamp indicating the creation time of this file.                                                                    |
| lastModificationTime: | _Date_     | The timestamp indicating the last time the file status was changed.                                                         |
| isDirectory:          | _boolean_  | Always returns false.                                                                                                       |
| isFile:               | _boolean_  | Always returns true.                                                                                                        |
| size:                 | _number_   | The size of the file in bytes. If the underlying file system does not support getting the size of the file, this will be 0. |
| fullName:             | _string_   | Contains the filename including the file extension.                                                                         |
| extension:            | _string_   | Returns only the file extension.                                                                                            |

## License

MIT