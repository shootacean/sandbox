# [Mermaid Tutorial](https://mermaid-js.github.io/mermaid/#/README?id=diagram-types)

## Flowchart

```mermaid
flowchart TD;
    a --> b;
    a --> c;
    b --> d;
    c --> d;
```

```mermaid
flowchart TD
    start --> stop
    subgraph on
    start --> |text|PointA
    end
    PointA --> stop
```

## Sequence diagram

```mermaid
sequenceDiagram;
    participant Alice;
    participant Bob;
    Alice ->> John: Hello John, how are you?;
    loop Healthcheck
        John ->> John: Fight against hypochondria;
    end
    Note right of John: Rational thoughts <br/> prevail!
    John -->> Alice: Great!
    John ->> Bob: How about you?
    Bob -->> John:   Jolly good!
```


