import { useRouter } from 'next/router';

export function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <h1>The Detail Page</h1>
  );
}