export default function Page({ params }: { params: { slug: string } }) {
  // TODO("나중에 데이터베이스 연결했을 때 수정")

  return (
    <div>
      <p>{`대충 ${params.slug} 페이지임`}</p>
    </div>
  );
}
