
import ResourceTableRow from './components/ResourceTableRow'
import ResourceTable from "./components/ResourceTable";
import InlineActionSelector from "./components/InlineActionSelector";
import Vue from "vue";
import Edit from './components/Icons/Edit'
import Delete from './components/Icons/Delete'
import View from './components/Icons/View'

Nova.booting((Vue, router) => {
    Vue.component('resource-table-row', ResourceTableRow);
    Vue.component('resource-table', ResourceTable);
    Vue.component('inline-action-selector', InlineActionSelector);
    Vue.component('icon-edit', Edit)
    Vue.component('icon-delete', Delete)
    Vue.component('icon-view', View)
});
