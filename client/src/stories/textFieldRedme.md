# TextField-Aleph :star:

Application TextField.

```js
import TextFieldAleph from 'components/textFieldAleph';
```

<!-- Brief summary of what the component is, and what it's for. -->
TextFild is a collection of React components using typeScript that conform to Aleph Style created by Aleph team.
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
import TextBoxAleph from 'components/textFieldAleph';

render() {
  return (
    <TextBoxAleph
          labelName={props.labelName}
          type={props.type}
          placeHolder={props.placeHolder}
          status={props.status}
          value={props.value}
          errorMessage= {props.errorMessage}
          disabled ={props.disabled}
        />
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
  -labelName?: string;
  -placeHolder?: string;
  -type: string;
  -value?: string | number;
  -status?: string;
  -errorMessage?: string;
  -disabled?: boolean;
```

<!-- Which one does @torvalds like most? -->
<!-- 
- [ ] tiger \#
- [ ] whale \*
- [x] octocat \! -->

