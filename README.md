# Reproduction of Let Directive Typing Error

## Setup

```sh
pnpm install
```

`ng build` is configured as a post install to force a `ngcc` build required for for the Angular Language Service to start working.

## Details

This error only occurs when the Angular Language Service is set to use the View Engine.
The issue does not occur when using the Angular Language Service with the Ivy Engine.
The typing inferred is `any`
The `ngIf` does not have the same issue.
