/// <reference path="../Scripts/typings/knockout/knockout.d.ts"/>
import ko = require('knockout');

var vm = {
    first: ko.observable("michael"),
    last: ko.observable("dudley"),
    fullName: ()=>{}
}

vm.fullName = ko.computed(() => {
    return vm.first() + " " + vm.last();
});

export = vm;