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

- 리스트의 변수명에 ~s를 사용하지말고 ~List를 붙이기

```ts
const exampleList = [1, 2, 3, 4, 5];
```

- id를 반환하는 API에서 받아온 데이터를 사용하는 map은 index를 사용하지 말기

```tsx
postList.map((post) => <div key={post.id}>{post.title}</div>);
```
