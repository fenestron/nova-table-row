<template>
  <span v-if="actions.length > 0">
    <dropdown
      v-if="actions.length > 1"
      class="text-left inline-block bg-30 hover:bg-40 rounded"
    >
      <dropdown-trigger class="text-sm text-90 px-3 py-1 h-!8">
        {{ __('Actions') }}
      </dropdown-trigger>

      <dropdown-menu slot="menu" direction="rtl" width="150">
        <button
          v-for="action in actions"
          :key="action.uriKey"
          class="block px-3 text-90 text-left text-sm w-full leading-normal dim my-2 active:outline-none active:shadow-outline focus:outline-none focus:shadow-outline"
          @click="
            () => {
              selectAndExecuteAction(action)
            }
          "
        >
          {{ action.name }}
        </button>
      </dropdown-menu>
    </dropdown>

      <a href=""
         v-bind:class="[typeof action.styleClass !== 'undefined' ? action.styleClass : (action.destructive ? 'text-danger' : 'text-primary'), 'no-underline']"
         v-for="action in actions"
         :key="action.uriKey"
         @click.prevent="
            () => {
              selectAndExecuteAction(action)
            }
          "
      >
          {{ action.name }}
      </a>

    <!-- Action Confirmation Modal -->
    <portal to="modals">
      <component
        v-if="confirmActionModalOpened"
        class="text-left"
        :is="selectedAction.component"
        :working="working"
        :selected-resources="selectedResources"
        :resource-name="resourceName"
        :action="selectedAction"
        :errors="errors"
        @confirm="executeAction"
        @close="closeConfirmationModal"
      />
    </portal>
  </span>
</template>

<script>
import HandlesActions from '../mixins/HandlesActions'
export default {
  mixins: [HandlesActions],

  props: {
    resource: {},
    actions: {},
  },

  methods: {
    selectAndExecuteAction(action) {
      this.selectedActionKey = action.uriKey
      this.determineActionStrategy()
    },
  },

  computed: {
    selectedResources() {
      return [this.resource.id.value]
    },
  },
}
</script>
