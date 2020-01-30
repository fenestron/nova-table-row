<?php

namespace Fenestron\NovaTableRow;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class AdvancedTableRowServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function register()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-table-row', __DIR__ . '/../dist/js/tool.js');
        });
    }
}
