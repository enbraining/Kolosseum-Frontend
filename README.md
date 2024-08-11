# Kolosseum

# 컨벤션

- undefined 대신 null을 사용하기

```ts
const [list, setList] = useState<List[]>([]);
```

- 배열이라면 null, undefined를 사용하지 말고 빈 배열 []을 사용하기

```ts
const [item, setItem] = useState<Item | null>(null);
```
