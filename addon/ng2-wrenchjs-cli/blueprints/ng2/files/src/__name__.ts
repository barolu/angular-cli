import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: '<%= htmlComponentName %>-app',
    injectables: []})
@View({
    templateUrl: 'src/<%= htmlComponentName %>.html',
    directives: []
})
class <%= jsComponentName %>App {
    constructor() {

    }
}
bootstrap(<%= jsComponentName %>App);