# Buttons-Aleph :star:

Application Buttons.

```js
import Button from '@material-ui/core/Button';

```

<!-- Brief summary of what the component is, and what it's for. -->
Buttons is a collection of React components using typeScript that conform to Aleph Style created by Aleph team.
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
import ButtonsAleph from 'components/ButtonsAleph';

render() {
  return (
     <AlephButton type={props.type}  title ={props.title}/>
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
  - popover ?:  string 
```

<!-- Which one does @torvalds like most? -->
<!-- 
- [ ] tiger \#
- [ ] whale \*
- [x] octocat \! -->

