# dirname-es

Is a library to get the name of the directory and the filename where a file is located.

## Usage 

```javascript
import { diname, filename } from 'dirname-es'

const __dirname = diname(import.meta)
const __filename = filename(import.meta)
```
