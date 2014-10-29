/// <reference path="../Scripts/typings/knockout/knockout.d.ts"/>
import ko = require('knockout');

var vm = {
    first: ko.observable("michael"),
    last: ko.observable("dudley"),
    fullName: ()=>{} //You have to define an empty function on the object
}

//And then create the computed function 
vm.fullName = ko.computed(() => {
    return vm.first() + " " + vm.last();
});

export = vm;
