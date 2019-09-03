# Autocomplete Text Field-Aleph :star:

Application Autocomplete Text Field.

```js
import NavBar from '@material-ui/core/Autocomplete';

```

<!-- Brief summary of what the component is, and what it's for. -->
The autocomplete is a normal text input enhanced by a panel of suggested options.
<!-- STORY -->
## 

### Usage 

#### Requirements
Load Roboto fonts from CDN

```js
<link rel="stylesheet" href="//static.parastorage.com/services/third-party/fonts/Helvetica/Roboto.css">
```
#### Usage
```js
import Autocomplete from '@material-ui/core/Autocomplete';

render() {
  return (
     <AutoComplete  type={props.type}  title ={props.title} data={props.data}/>
  );
}
```


## Installation


#### npm i aleph-style-react
#### OR
#### yarn add aleph-style-react

## 


### Design-driven API



```js
  - type :string 
  - title : string
  - onclick?: (e: React.ChangeEvent<HTMLInputElement>): any
  - status?: string
  - disabled?: boolean
  - popover ?:  string ,
  -  data: object[]
```


