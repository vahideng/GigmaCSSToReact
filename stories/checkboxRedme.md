# checkboxes-Aleph :star:
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `#f03c15`
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) `#c5f015`
- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `#1589F0`


##
checkboxes checkboxes.

```js
import Checkboxes from '@material-ui/core/checkboxes';

```

<!-- Brief summary of what the component is, and what it's for. -->
Checkboxes are used to let a user select one or more options of a limited number of choices.
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
import Checkboxes from '@material-ui/core/checkboxes';

render() {
  return (
     <Checkboxes  type={props.type}  status ={props.status}  label={props.label} onclick={props.onclick} />
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
  - statys: boolean
```


