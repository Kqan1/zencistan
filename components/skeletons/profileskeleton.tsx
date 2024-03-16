import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
    return (
        <Skeleton className="h-10 w-28 flex items-center px-1 gap-1">
            <Skeleton className="size-8 rounded-full bg-gray-200" />
            <div className="h-8 flex flex-col gap-1">
                <Skeleton className="h-1/2 w-[3.25rem] bg-gray-200" />
                <Skeleton className="h-1/2 w-[4.25rem] bg-gray-200" />
            </div>
        </Skeleton>
    );
};