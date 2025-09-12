"use client"
import { Card, CardBody, Skeleton } from "@heroui/react"

export const ProductListSkeleton = () => {
    return (
        <>
            <Card className="max-w-[280px] h-[400px] border border-gray-200 rounded-2xl shadow-md overflow-hidden group" radius="lg">
                <CardBody className="p-0">
                    <Skeleton className="rounded-lg bg-black-200 aspect-square">
                        <div className="h-24"></div>
                    </Skeleton>
                    <div className="p-4 w-full space-y-2">
                        <Skeleton className="w-2/5 h-5 rounded-lg bg-black-200" />
                        <Skeleton className="w-4/5 h-5 rounded-lg bg-black-200" />

                        <div className="flex items-center justify-between mt-4">
                            <Skeleton className="w-1/4 h-4 rounded-lg bg-black-200" />
                            <Skeleton className="w-1/5 h-7 rounded-lg bg-black-200" />
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="max-w-[280px] h-[400px] border border-gray-200 rounded-2xl shadow-md overflow-hidden group" radius="lg">
                <CardBody className="p-0">
                    <Skeleton className="rounded-lg bg-black-200 aspect-square">
                        <div className="h-24"></div>
                    </Skeleton>
                    <div className="p-4 w-full space-y-2">
                        <Skeleton className="w-2/5 h-5 rounded-lg bg-black-200" />
                        <Skeleton className="w-4/5 h-5 rounded-lg bg-black-200" />

                        <div className="flex items-center justify-between mt-4">
                            <Skeleton className="w-1/4 h-4 rounded-lg bg-black-200" />
                            <Skeleton className="w-1/5 h-7 rounded-lg bg-black-200" />
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="max-w-[280px] h-[400px] border border-gray-200 rounded-2xl shadow-md overflow-hidden group" radius="lg">
                <CardBody className="p-0">
                    <Skeleton className="rounded-lg bg-black-200 aspect-square">
                        <div className="h-24"></div>
                    </Skeleton>
                    <div className="p-4 w-full space-y-2">
                        <Skeleton className="w-2/5 h-5 rounded-lg bg-black-200" />
                        <Skeleton className="w-4/5 h-5 rounded-lg bg-black-200" />

                        <div className="flex items-center justify-between mt-4">
                            <Skeleton className="w-1/4 h-4 rounded-lg bg-black-200" />
                            <Skeleton className="w-1/5 h-7 rounded-lg bg-black-200" />
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="max-w-[280px] h-[400px] border border-gray-200 rounded-2xl shadow-md overflow-hidden group" radius="lg">
                <CardBody className="p-0">
                    <Skeleton className="rounded-lg bg-black-200 aspect-square">
                        <div className="h-24"></div>
                    </Skeleton>
                    <div className="p-4 w-full space-y-2">
                        <Skeleton className="w-2/5 h-5 rounded-lg bg-black-200" />
                        <Skeleton className="w-4/5 h-5 rounded-lg bg-black-200" />

                        <div className="flex items-center justify-between mt-4">
                            <Skeleton className="w-1/4 h-4 rounded-lg bg-black-200" />
                            <Skeleton className="w-1/5 h-7 rounded-lg bg-black-200" />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}