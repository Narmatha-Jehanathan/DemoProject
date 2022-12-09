import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    text = 'Hello World!!';

    handleClick(){
        this.text = 'Welcome..'
    }
}