import { Skeleton } from '../ui/skeleton';

export function ListSkeleton() {
  return (
    <div className="grid gap-y-3">
      <div className="grid gap-y-2">
        <Skeleton className="h-4 w-[250px] bg-neutral-300" />
        <Skeleton className="h-4 w-[200px] bg-neutral-300" />
      </div>
      <div className="grid gap-y-2">
        <Skeleton className="h-4 w-[250px] bg-neutral-300" />
        <Skeleton className="h-4 w-[300px] bg-neutral-300" />
      </div>
      <div className="grid gap-y-2">
        <Skeleton className="h-4 w-[250px] bg-neutral-300" />
        <Skeleton className="h-4 w-[225px] bg-neutral-300" />
      </div>
      <div className="grid gap-y-2">
        <Skeleton className="h-4 w-[225px] bg-neutral-300" />
        <Skeleton className="h-4 w-[250px] bg-neutral-300" />
      </div>
    </div>
  );
}
