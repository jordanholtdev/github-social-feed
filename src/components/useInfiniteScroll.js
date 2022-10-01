import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isBottom) {
            callback((addItems) => {
                addItems()
            });
        }
    }, [isBottom, callback]);

    function handleScroll() {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
            setIsBottom(true);
        }
    }

    return [isBottom, setIsBottom]

}

export default useInfiniteScroll;