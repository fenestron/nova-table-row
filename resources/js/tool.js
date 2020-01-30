
import ResourceTableRow from './components/ResourceTableRow'
import ResourceTable from "./components/ResourceTable";
import InlineActionSelector from "./components/InlineActionSelector";

Nova.booting((Vue, router) => {
    Vue.component('resource-table-row', ResourceTableRow);
    Vue.component('resource-table', ResourceTable);
    Vue.component('inline-action-selector', InlineActionSelector);
});
