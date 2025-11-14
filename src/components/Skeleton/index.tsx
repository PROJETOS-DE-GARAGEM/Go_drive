import { ReactElement, useState } from "react";

import { Skeleton } from 'moti/skeleton';

type SkeletonLoadingProps = {
  children: ReactElement;
  isLoading?: boolean;
};
    
const SkeletonLoading = ({ children, isLoading = true }: SkeletonLoadingProps) => {
    const [loading, setLoading] = useState(true);
    
    return(
    <Skeleton 
        show={isLoading}
        colorMode="light"
        height={160} 
        radius={"square"}
    >
    {children}
    </Skeleton>
    )
}

export { SkeletonLoading }