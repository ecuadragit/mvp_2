<?php

namespace Tightenco\Ziggy\Output;

use Illuminate\Support\Arr;
use Stringable;
use Tightenco\Ziggy\Ziggy;

class Types implements Stringable
{
    protected $ziggy;

    public function __construct(Ziggy $ziggy)
    {
        $this->ziggy = $ziggy;
    }

    public function __toString(): string
    {
        $routes = collect($this->ziggy->toArray()['routes'])->map(function ($route) {
            return collect($route['parameters'] ?? [])->map(function ($param) use ($route) {
                return Arr::has($route, "bindings.{$param}")
                    ? ['name' => $param, 'binding' => $route['bindings'][$param]]
                    : ['name' => $param];
            });
        });

        return <<<JAVASCRIPT
/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
  interface RouteList {$routes->toJson(JSON_PRETTY_PRINT)}
}
export {};

JAVASCRIPT;
    }
}
