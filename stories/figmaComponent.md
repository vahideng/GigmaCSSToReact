# FigmaComponent-Aleph :star:


- ![#57AF80](https://placehold.it/15/57AF80/000000?text=+) `#57AF80`
- ![#FFFFFF](https://placehold.it/15/FFFFFF/000000?text=+) `#FFFFFF`

- ![#CB2C32](https://placehold.it/15/CB2C32/000000?text=+) `#CB2C32`
- ![#686E71](https://placehold.it/15/686E71/000000?text=+) `#686E71`
- ![#000000](https://placehold.it/15/000000/000000?text=+) `#000000`
- ![#00684B](https://placehold.it/15/00684B/000000?text=+) `#00684B`
- ![#2C76E0](https://placehold.it/15/2C76E0/000000?text=+) `#2C76E0`
- ![#D5DADD](https://placehold.it/15/D5DADD/000000?text=+) `#D5DADD`

- ![#rgba(153,159,164,1)](https://placehold.it/15/rgba(153,159,164,1)/000000?text=+) `rgba(153,159,164,1)`
- ![#1C2629](https://placehold.it/15/1C2629/000000?text=+) `#1C2629`
- ![#262F32](https://placehold.it/15/262F32/000000?text=+) `#262F32`
- ![#EFF2F4](https://placehold.it/15/EFF2F4/000000?text=+) `#EFF2F4`

- ![#D5DADD](https://placehold.it/15/D5DADD/000000?text=+) `#D5DADD`
- ![#D7EAD9](https://placehold.it/15/D7EAD9/000000?text=+) `#D7EAD9`

- ![#F8EAEA](https://placehold.it/15/F8EAEA/000000?text=+) `#F8EAEA`
- ![#005548](https://placehold.it/15/005548/000000?text=+) `#005548`

- ![#88C697](https://placehold.it/15/88C697/000000?text=+) `#88C697`
- ![#rgba(0,137,95,1)](https://placehold.it/15/rgba(0,137,95,1)/000000?text=+) `#rgba(0,137,95,1)`

;


##
FigmaComponent .

```js
import FigmaComponent from 'components/figmaComponent';

```

<!-- Brief summary of what the component is, and what it's for. -->
How amazing would it be to update a design in Figma, and then click a button to sync those design changes to your website?
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
     <FigmaComponent  type={props.type}  status ={props.status}  label={props.label} onclick={props.onclick} />
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


