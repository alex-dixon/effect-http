---
title: Client.ts
nav_order: 2
parent: Modules
---

## Client overview

This module exposes the `client` combinator which accepts an `Api` instance
and it generates a client-side implementation. The generated implementation
is type-safe and guarantees compatibility of the client and server side.

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [client](#client)
- [models](#models)
  - [Client (type alias)](#client-type-alias)
  - [ClientOptions (interface)](#clientoptions-interface)

---

# constructors

## client

Derive client implementation from the `Api`

**Signature**

```ts
export declare const client: <A extends Api<Endpoint[]>, H extends Record<string, unknown> = Record<never, never>>(
  api: A,
  baseUrl: URL,
  options?: ClientOptions<H> | undefined
) => Client<A, H>
```

Added in v1.0.0

# models

## Client (type alias)

**Signature**

```ts
export type Client<A extends Api, H> = A extends Api<infer Es>
  ? Schema.Spread<{
      [Id in Es[number]['id']]: ClientFunction<
        Es,
        Id,
        MakeHeadersOptionIfAllPartial<
          DropCommonHeaders<EndpointSchemasTo<SelectEndpointById<Es, Id>['schemas']>['request'], H>
        >
      >
    }>
  : never
```

Added in v1.0.0

## ClientOptions (interface)

**Signature**

```ts
export interface ClientOptions<H extends Record<string, unknown>> {
  headers: H
}
```

Added in v1.0.0
