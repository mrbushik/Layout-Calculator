import timer from './modules/timer';
import menu from './modules/menu';
import momdal from './modules/modal';
import textForm from './modules/textForm';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import {
    sendForm
} from './modules/sendForm';
timer('15 march 2022');
menu();
momdal();
textForm();
tabs();
slider();
calc(100);
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total',
    }]
});
sendForm({
    formId: 'form2',
    someElem: [{
        type: 'block',
        id: 'total',
    }]
});
sendForm({
    formId: 'form3',
    someElem: [{
        type: 'block',
        id: 'total',
    }]
});